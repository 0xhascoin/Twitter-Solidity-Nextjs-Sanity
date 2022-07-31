import React from 'react';


// Components
import Post from '../post';


// Styles
const styles = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

// Tweets data
const tweets = [
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2022-07-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-05-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-07-21T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2022-07-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-05-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-07-21T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2022-07-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-05-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-07-21T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2022-07-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-05-28T12:00:00.000Z'
    },
    {
        displayName: 'Hascoin',
        username: '0x78231878cjkbadj82uwnjsa',
        avatar: 'https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-07-21T12:00:00.000Z'
    },
]

const ProfileTweets = () => {
    return (
        <div className={styles.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post
                    key={index}
                    displayName={tweet.displayName}
                    username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp} />
            ))}
        </div>
    )
};

export default ProfileTweets;