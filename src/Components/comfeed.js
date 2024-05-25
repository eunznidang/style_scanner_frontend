import styles from "../css/comfeed.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import CommunityInfo from './CommunityInfo';
import FeedPopup from './FeedPopup';

function ComFeed({ feedUrl, userId, content, displayName, profilePictureUrl, goDir }) {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFeedPopupOpen, setIsFeedPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const openFeedPopup = () => {
        setIsFeedPopupOpen(true);
    };

    const closeFeedPopup = () => {
        setIsFeedPopupOpen(false);
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className={styles.comCompleteFeed}>
                <div className={styles.comProfile} onClick={openFeedPopup}>

                    <div className={styles.comProfileBox}>
                        {profilePictureUrl ? (
                            <img className={styles.comProfileImage2} src={profilePictureUrl} alt="Profile" />
                            
                        ) : <img id={styles.comProfileImage} src={`img/profile.png`} alt="Profile"></img>}
                    </div>
                    <p className={styles.comProfileName} id={styles.name}>{displayName}</p>
                </div>

                {isFeedPopupOpen && <FeedPopup onClose={closeFeedPopup} />}


                <div className={styles.comFeedMain}>
                    <div className={styles.imageWrapper} onClick={goDir === "navigateToHomeInfo" ? () => navigateTo("/HomeInfo") : openPopup}>
                        <img src={feedUrl} alt="Feed" />
                        {isPopupOpen && <CommunityInfo onClose={closePopup} />}
                    </div>
                </div>
            </div>

            <div className={styles.writeBox}>
                <span className={styles.writeId} id="writerId"><b>{displayName}</b></span>
                <div className={styles.writeTotal}>
                    <span className={styles.writeContent} id="writeContent">{content}&nbsp;</span>
                    <span className={styles.tag} id="tag">@noodle.zip</span>
                </div>
            </div>
        </div>
    );
}

export default ComFeed;
