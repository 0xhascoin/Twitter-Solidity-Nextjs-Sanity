import React, { useState} from 'react';

// Icons
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs';
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';
import { MdOutlineLocationOn } from 'react-icons/md';


// Styles
const styles = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`

}


const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('');

    const postTweet = (event) => {
        event.preventDefault();
        console.log("POST")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tweetBoxLeft}>
                <img 
                src="https://media.pitchfork.com/photos/5cd1b36b93a536266f1ed48f/1:1/w_800,h_800,c_limit/LightInTheAttic_PacificBreeze.jpg" 
                alt="img" 
                className={styles.profileImage} 
                />
            </div>
            <div className={styles.tweetBoxRight}>
                <form onSubmit={postTweet}>
                    <textarea 
                    className={styles.inputField} 
                    placeholder="What's happening?"
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)} 
                    />
                    <div className={styles.formLowerContainer}>
                        <div className={styles.iconsContainer}>
                            <BsCardImage className={styles.icon} />
                            <RiFileGifLine className={styles.icon} />
                            <RiBarChartHorizontalFill className={styles.icon} />
                            <BsEmojiSmile className={styles.icon} />
                            <IoMdCalendar className={styles.icon} />
                            <MdOutlineLocationOn className={styles.icon} />
                        </div>
                        <button type='submit' className={`${styles.submitGeneral} ${tweetMessage ? styles.activeSubmit : styles.inactiveSubmit}`}>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default TweetBox;