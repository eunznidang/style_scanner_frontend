import React, { useState, useEffect, useRef } from 'react';
import Feed from './feed'; 
import styles from "../css/HomeFeed.module.css";
import axios from 'axios';
import SlideBtn from './SlideButton'; 
import { useNavigate } from 'react-router';

const getFeeds = async (navigate) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        navigate("/Login");
        throw new Error("토큰이 없습니다.");
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    console.log("Access Token:", token); // 토큰 값 확인

    try {
        const response = await axios.get('/api/insta/home', config);
        return response.data.feeds; 
    } catch (error) {
        if (axios.isAxiosError(error)) {
            navigate("/Login");
        } else {
            console.error('예상치 못한 에러: 게시물 가져오기 실패:', error);
        }
        throw error;
    }
};

function FeedList() {
    const navigate = useNavigate();

    const [feeds, setFeeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const feedListRef = useRef(); 
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const data = await getFeeds(navigate);
              setFeeds(data);
              setLoading(false); 
            } catch (error) {
              setError('포스트를 가져오는 중 에러 발생');
              setLoading(false);
            }
          };
      
        fetchPosts();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={styles.feedScroll}>
            <div className={styles.feedList} ref={feedListRef}>
                {feeds.map(feed => {
                    const mediaUrls = Array.isArray(feed.media_url_list) ? feed.media_url_list : [];
                    return (
                        <Feed 
                            key={feed.media_id} 
                            media_url_list={mediaUrls} 
                            profile_url={feed.profile_url} 
                            username={feed.username} 
                            media_id={feed.media_id} 
                            close={true}
                        />
                    );
                })}
                <div style={{height: '10px'}} />
            </div>
            <SlideBtn/> {/* SlideButton 렌더링 */}
        </div>
    );
}

export default FeedList;
