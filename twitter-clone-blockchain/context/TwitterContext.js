import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';


export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading');
    const [currentAccount, setCurrentAccount] = useState('');

    const router = useRouter();


    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

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
                profileImage: 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg',
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

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectToWallet }}>
            {children}
        </TwitterContext.Provider>
    )
}