import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';


export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading');
    const [currentAccount, setCurrentAccount] = useState('');
    const [tweets, setTweets] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    const router = useRouter();


    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    useEffect(() => {
        if (!currentAccount || appStatus !== "connected") return;
        getCurrentUserDetails(currentAccount);
        fetchTweets();
    }, [currentAccount, appStatus]);

    // Checks if there is an active wallet connection.
    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) {
            setAppStatus("noMetaMask");
            return;
        }

        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            });

            if (addressArray.length > 0) {
                // Connected
                setAppStatus('connected');
                setCurrentAccount(addressArray[0]);
                createUserAccount(addressArray[0]);
            } else {
                // Not connected
                setAppStatus('notConnected');
                router.push("/");
            }
        } catch (error) {
            console.log(error);
            setAppStatus('error');
        }
    };


    // Initiates MetaMask wallet connection
    const connectToWallet = async () => {
        if (!window.ethereum) {
            setAppStatus("noMetaMask");
            return;
        };

        try {
            setAppStatus('loading');

            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            if (addressArray.length > 0) {
                // Connected
                setAppStatus('connected');
                setCurrentAccount(addressArray[0]);
                createUserAccount(addressArray[0]);
            } else {
                // Not connected
                setAppStatus('notConnected');
                router.push("/");
            }
        } catch (error) {
            console.log(error);
            setAppStatus('error');
        }
    };

    /**
     * Creates an account in Sanity DB if the user does not already have one
     * @param {String} userWalletAddress wallet address of the user currently logged in
     */
    const createUserAccount = async (userWalletAddress = currentAccount) => {
        if (!window.ethereum) {
            setAppStatus("noMetaMask");
            return;
        };

        try {
            const userDoc = {
                _type: "users",
                _id: userWalletAddress,
                name: "Unnamed",
                isProfileImageNft: false,
                profileImage: 'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/604513-2135246437-1491282148.jpg',
                walletAddress: userWalletAddress
            };

            await client.createIfNotExists(userDoc);
            setAppStatus("connected");

        } catch (error) {
            console.log(error);
            setAppStatus('error');
            router.push("/");
        }
    };

    const fetchTweets = async () => {
        const query = `
            *[_type == "tweets"]{
                "author": author->{name, walletAddress, profileImage, isProfileImageNft},
                tweet,
                timestamp
            }|order(timestamp desc)
        `;

        const sanityReponse = await client.fetch(query);
        setTweets([]);
        sanityReponse.forEach(async item => {
            const newItem = {
                tweet: item.tweet,
                timestamp: item.timestamp,
                author: {
                    name: item.author.name,
                    walletAddress: item.author.walletAddress,
                    isProfileImageNft: item.author.isProfileImageNft,
                    profileImage: item.author.profileImage
                }
            };
            setTweets(prevState => [...prevState, newItem]);
        });
    };

    const getCurrentUserDetails = async (userAccount = currentAccount) => {
        if (appStatus !== "connected") return;
        const query = `
            *[_type == "users" && _id == "${userAccount}"]{
                "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
                name,
                profileImage,
                isProfileImageNft,
                coverImage,
                walletAddress
            }
        `;

        const sanityResponse = await client.fetch(query);

        setCurrentUser({
            tweets: sanityResponse[0].tweets,
            name: sanityResponse[0].name,
            profileImage: sanityResponse[0].profileImage,
            isProfileImageNft: sanityResponse[0].isProfileImageNft,
            coverImage: sanityResponse[0].coverImage,
            walletAddress: sanityResponse[0].walletAddress,
        })
    }

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectToWallet, fetchTweets, tweets, currentUser, getCurrentUserDetails }}>
            {children}
        </TwitterContext.Provider>
    )
}