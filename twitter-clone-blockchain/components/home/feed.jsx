import React, { useContext } from 'react';
import { TwitterContext } from '../../context/TwitterContext';

// Icons
import { BsStars } from 'react-icons/bs';

// Components
import TweetBox from './tweetBox';
import Post from '../post';

// Styles
const styles = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
};


// Tweets data
// const tweets = [
//     {
//         displayName: 'Hascoin',
//         username: '0x78231878cjkbadj82uwnjsa',
//         avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
//         text: 'gm',
//         isProfileImageNft: true,
//         timestamp: '2022-07-28T12:00:00.000Z'
//     },
//     {
//         displayName: 'Hascoin',
//         username: '0x78231878cjkbadj82uwnjsa',
//         avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
//         text: 'gm',
//         isProfileImageNft: false,
//         timestamp: '2022-05-28T12:00:00.000Z'
//     },
//     {
//         displayName: 'Hascoin',
//         username: '0x78231878cjkbadj82uwnjsa',
//         avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
//         text: 'gm',
//         isProfileImageNft: false,
//         timestamp: '2022-07-21T12:00:00.000Z'
//     },
// ]

const Feed = () => {
    const { tweets } = useContext(TwitterContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post
                    key={index}
                    displayName={tweet.author.name === "Unnamed" ?
                        `${tweet.author.walletAddress.slice(0, 4)}...${tweet.author.walletAddress.slice(41)}` : tweet.author.name}
                    username={`${tweet.author.walletAddress.slice(0, 4)}...${tweet.author.walletAddress.slice(-4)}`}
                    avatar={tweet.author.profileImage}
                    text={tweet.tweet}
                    isProfileImageNft={tweet.author.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
};

export default Feed;