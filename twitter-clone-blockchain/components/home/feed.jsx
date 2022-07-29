import React from 'react';

// Icons
import { BsStars } from 'react-icons/bs';

// Components
import TweetBox from './tweetBox';

// Styles
const styles = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
};

const Feed = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
        </div>
    )
};

export default Feed;