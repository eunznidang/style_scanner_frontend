import styled from 'styled-components';
import Feed from '../../Components/feed/Feed.js';
import Item from '../../Components/item/Item.js';
import '../../style/style.css';
import CommunityWrite from '../community/post/CommunityWrite.js';
import { useHomeItemLogic } from '../../hooks/useHomeItemLogic';
import { useState } from 'react';
import { FaBoxArchive } from "react-icons/fa6";
import Footer from '../../Components/Footer.js';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {theme} from  '../../style/theme.js'

const FeedWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    height: 42em;
    float: left;
    margin-bottom: 5em;
`;
const ThumbnailScrollable = styled.div`
  width: 5em;
  height: 70%;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ThumbnailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    height: 95%;
    img {
        width: 5em;
        height: 7em;
        object-fit: cover;
        transform: translateY(-${props => props.offset}em); 
        transition: transform 0.3s ease;
    }
`;
const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
`;
const ItemList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30em; 
    min-width: 88em;
`;
const ButtonList = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 3em;
`;
const CommunityBtn = styled.p`
    position: absolute;
    right: 0;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.black};
        border: none;
    }
`;
export default function HomeItem() {
    const {
        mediaUrls,
        feedUrl,
        media_id,
        username,
        profile_url,
        currentImageIndex,
        isPopupOpen,
        slideEm,
        openPopup,
        closePopup,
        thumbnailClick,
    } = useHomeItemLogic();

    const [counter, setCounter] = useState(0);
    let showPrevBtn = counter > 0;
    let showNextBtn = counter !== mediaUrls.length - 4 && mediaUrls.length > 4;

    const nextBtn = () => {
        setCounter(counter + 1);
    };
    const prevBtn = () => {
        setCounter(counter - 1);
    };
    // const morePage = () => {
    //     setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsPerPage);
    // };

    return (
        <div className='mainWrapper'>
            <FeedWrapper className='p1'>
                {mediaUrls && profile_url && username && media_id && (
                    <Feed
                        key={media_id}
                        media_url_list={mediaUrls}
                        profile_url={profile_url}
                        username={username}
                        media_id={media_id}
                        home={false}
                        currentIndex={currentImageIndex}
                        width={'30em'}
                    />
                )}
                <ThumbnailScrollable className='ml3'>
                    {mediaUrls.length > 1 && (
                        <ThumbnailWrapper
                        >

                            {mediaUrls.map((url, index) => (
                                <img
                                    slide={slideEm}
                                    key={index}
                                    src={url}
                                    onClick={() => thumbnailClick(index)}
                                    className='mb05 borderRad'
                                    style={{ transform: `translateY(-${7 * counter}em)` }}
                                />
                            ))}
                        </ThumbnailWrapper>
                    )}
                    {showPrevBtn && (
                        <div className="carouselUp  boxShadow">
                            <FaAngleUp onClick={prevBtn} color={theme.colors.gray}/>
                        </div>
                    )}
                    {showNextBtn && (
                        <div className="carouselDown boxShadow">
                            <FaAngleDown  onClick={nextBtn} color={theme.colors.gray} />
                        </div>
                    )}
                </ThumbnailScrollable>
            </FeedWrapper>
            <ItemWrapper>
                <div className='pageTitleDiv'>
                    <FaBoxArchive size='1.5em' />
                    <p className='boldSubTitle ml03'>아이템 정보</p>
                </div>
                <ItemList className='mb05'>
                    {/* {mediaUrls && profile_url && username && media_id && (
                        <Feed
                            key={media_id}
                            media_url_list={mediaUrls}
                            profile_url={profile_url}
                            username={username}
                            media_id={media_id}
                            home={false}
                            currentIndex={currentImageIndex}
                            width={'30em'}
                        />
                    )} */}
                    <Item
                        key={0}
                        itemId={0}
                        brand={"wow"}
                        name={"wow"}
                        price={100000000}
                        image={"https://via.placeholder.com/200"}
                        shoppingLink={""}
                        index={0}
                    />
                    <Item
                        key={0}
                        itemId={0}
                        brand={"wow"}
                        name={"wow"}
                        price={100000000}
                        image={"https://via.placeholder.com/200"}
                        shoppingLink={""}
                        index={0}
                    />
                    <Item
                        key={0}
                        itemId={0}
                        brand={"wow"}
                        name={"wow"}
                        price={100000000}
                        image={`img/feed1.png`}
                        shoppingLink={""}
                        index={0}

                    />
                    <Item
                        key={0}
                        itemId={0}
                        brand={"wow"}
                        name={"wow"}
                        price={100000000}
                        image={"img/image1.png"}
                        shoppingLink={""}
                        index={0}
                    />
                </ItemList>
                <ButtonList>
                    <button className='button' style={{ width: '5em', height: ' 3em' }}>더보기</button>
                    <CommunityBtn onClick={openPopup}>찾는 제품이 없으신가요?</CommunityBtn>
                </ButtonList>
                {isPopupOpen && <CommunityWrite feedUrl={feedUrl} onClose={closePopup} />}
            </ItemWrapper>
            <Footer />
        </div>

    );
}
