
import styles from "../css/MypageDefault.module.css";
import Sidebar from './Sidebar';

export default function MypageDefault() {
    return (
        <body>
            {/* <header>
                <div className='menuBar'>메뉴바입니다</div>
            </header> */}

            <div className={styles.wrap}>
                
                {/* <div className='sideBar'>사이드바입니다</div> */}
                <Sidebar></Sidebar>

                <div className={styles.content}>
                    <div className={styles.profileBox}>
                        <img className={styles.profileImg} src="http://via.placeholder.com/100X100"></img>
                        <div>
                            <p id='userName'>username</p>
                            <small id='userId'>@userid</small>
                        </div>
                        <div>
                            <p id='followNum'>256</p>
                            <small>팔로잉</small>
                        </div>
                    </div>

                    <div className={styles.textBox}>
                        <p>팔로잉</p>
                        <p>더보기</p>
                    </div>

                    <div className={styles.following}>
                        <div>
                            <img id='celebImg1' src="http://via.placeholder.com/100X100"></img>
                            <p id='celebID1'>@celebID</p>
                        </div>
                        <div>
                            <img id='celebImg2' src="http://via.placeholder.com/100X100"></img>
                            <p id='celebID2'>@celebID</p>
                        </div>
                        <div>
                            <img id='celebImg3' src="http://via.placeholder.com/100X100"></img>
                            <p id='celebID3'>@celebID</p>
                        </div>
                        <div>
                            <img id='celebImg4' src="http://via.placeholder.com/100X100"></img>
                            <p id='celebID4'>@celebID</p>
                        </div>
                    </div>


                    <div className={styles.textBox}>
                        <p>좋아요</p>
                        <p>더보기</p>
                    </div>


                    <div className={styles.like}>
                        <div>
                            <img className={styles.likeComponent} id='itemImg' src="http://via.placeholder.com/100X100"></img>

                            <p className={styles.likeComponent} id={styles.brandName}>브랜드이름</p>
                            <div className={styles.item}>
                                <p id={styles.itemName}>아이템이름</p> -
                                <p id={styles.itemOption}>옵션명</p>
                            </div>
                            <p className={styles.likeComponent} id={styles.itemPrice}>가격</p>
                            <div className={styles.heartBox}>
                                <img src="img/fullHeart.png"></img>
                                <p id='likeCount'>좋아요수</p>
                            </div>
                        </div>

                        <div>
                            <img className={styles.likeComponent} id='itemImg' src="http://via.placeholder.com/100X100"></img>

                            <p className={styles.likeComponent} id={styles.brandName}>브랜드이름</p>
                            <div className={styles.item}>
                                <p id={styles.itemName}>아이템이름</p> -
                                <p id={styles.itemOption}>옵션명</p>
                            </div>
                            <p className={styles.likeComponent} id={styles.itemPrice}>가격</p>
                            <div className={styles.heartBox}>
                                <img src="img/fullHeart.png"></img>
                                <p id='likeCount'>좋아요수</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </body>
    );
}