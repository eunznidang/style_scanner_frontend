import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import api from '../../api/axios.jsx';

function MainBarLogin({ searchText, handleSearchChange, handleKeyPress }) {

    const [userData, setUserData] = useState(null);
    const divRef = useRef(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState('');


    useEffect(() => {
        if (divRef.current) {
            console.log(divRef.current.offsetWidth); // 요소의 현재 너비를 측정하여 상태에 저장
        }
        // console.log()
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/api/user/me');
                setUserData(response.data);
                // console.log(response.data);
                setProfilePictureUrl(response.data.profilePictureUrl);
                if (response.data.profilePictureUrl == null)
                    setProfilePictureUrl("/img/profile.png");

            } catch (error) {
                // console.error('유저 데이터를 가져오는데 실패했습니다.', error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div className='flex itemLikeWrapper' style={{ width: '100%', justifyContent: 'center' }}>
            <div className='headerWrapper'>
                <div id='navLink' style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    {/* <ul className='mainUl'>
                        <li className='ml3 boldSubTitle mainNav'><Link to="/Ranking">Ranking</Link></li>
                        <li className='ml1 boldSubTitle mainNav'><Link to="/Login">Recommend</Link></li>
                        <li className='ml1 boldSubTitle mainNav'><Link to="/Community">Community</Link></li>
                    </ul> */}
                </div>
                <div className='mainUl headerRight'>
                    <div className='mr3'>
                        <ul className='mainUl'>
                            <li className='ml3 boldSubTitle mainNav'><Link to="/category">Ranking</Link></li>
                            <li className='ml1 boldSubTitle mainNav'><Link to="/CelebRecommend">Recommend</Link></li>
                            <li className='ml1 boldSubTitle mainNav'><Link to="/Community">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <SearchBar className='' value={searchText} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
                    </div>

                    <div className='flex ml2 boldSubTitle mainNav' style={{ width: '200px' ,alignItems: 'center' }}>
                        <button className='zero'  onClick={() => window.location.href = '/MyPageDefault'} 
                            style={{border:'none', borderRadius : '50%', width:'3rem', height:'3rem', }}>
                            <img className='profileImg' src={profilePictureUrl} alt=""/>
                        </button>

                        <p className='caption ml1'>@{userData ? userData.displayName : 'Loading...'}</p>

                        <></>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBarLogin;