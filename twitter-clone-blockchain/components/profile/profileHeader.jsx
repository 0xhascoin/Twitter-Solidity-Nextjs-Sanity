import React from 'react';
import { useRouter } from 'next/router';

// Icons
import { BsArrowLeftShort, BsReverseLayoutTextWindowReverse } from 'react-icons/bs';

// Styles
const styles = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
}

const ProfileHeader = () => {
    const router = useRouter();

    const isProfileImageNft = false;
    const currentAccount = '0x8hsdhjksdhjkhkjasd83823289713`819'

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.backButton} onClick={() => router.push('/')}>
                    <BsArrowLeftShort />
                </div>
                <div className={styles.details}>
                    <div className={styles.primary}>Hascoin</div>
                    <div className={styles.secondary}>4 Tweets</div>
                </div>
            </div>
            <div className={styles.coverPhotoContainer}>
                <img className={styles.coverPhoto} src="https://lh3.googleusercontent.com/P7aOu9XmWj2DDZI_aYoinyYnDV5fEdlpuf9vgDNGhye5mvHb741GVjoQMAtBwcoOVXgjhjn-vMUcRj-VlyVNFTiQ1wUNIdwDRVVy=h600" alt="cover" />
            </div>
            <div className={styles.profileImageContainer}>
                <div className={isProfileImageNft ? 'hex' : styles.profileImageContainer}>
                    <img src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
                        alt="" className={isProfileImageNft ? styles.profileImageNft : styles.profileImage} />
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <div className={styles.primary}>Hascoin</div>
                </div>
                <div className={styles.secondary}>
                    {currentAccount && (
                        <>
                            @{currentAccount.slice(0, 8).toUpperCase()}...{currentAccount.slice(-3).toUpperCase()}
                        </>
                    )}
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.activeNav}>Tweets</div>
                <div>Tweets & Replies</div>
                <div>Media</div>
                <div>Likes</div>
            </div>
        </div>
    )
};

export default ProfileHeader;