import React from 'react';


// Components
import Sidebar from '../components/sidebar';
import Widgets from '../components/widgets';
import ProfileHeader from '../components/profile/profileHeader';
import ProfileTweets from '../components/profile/profileTweets';

// Styles
const styles = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Sidebar />
                <div className={styles.mainContent}>
                    <ProfileHeader />
                    <ProfileTweets />
                </div>
                <Widgets />
            </div>
        </div>
    )
};

export default Profile;