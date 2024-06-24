import styles from '../css/Ranking.module.css';
import { Link } from "react-router-dom";
import RankingFeed from "./RankingFeed";
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Ranking({ selectedCategory = "ALL", selectedSubcategory = "" }) {
    const [items, setItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(40);
    const [rankingType, setRankingType] = useState(0);

    useEffect(() => {
        // Construct the category parameter
        const categoryParam = selectedCategory === "ALL" ? "ALL" : `${selectedCategory}_${selectedSubcategory || "ALL"}`;
        
        // console.log('Selected Category:', selectedCategory);
        // console.log('Selected Subcategory:', selectedSubcategory);
        // console.log('Constructed Category Param:', categoryParam);

        // Fetch data from /api/item with constructed category parameter
        const fetchAllItems = async () => {
            try {
                const response = await axios.get('/api/item', {
                    params: {
                        category: categoryParam
                    }
                });
                // console.log('All Items Response:', response.data);
                setItems(response.data);
            } catch (error) {
                // console.error('Error fetching all items:', error);
            }
        };

        // Fetch data from /api/item/ranking with rankingType parameter
        const fetchRankingItems = async () => {
            try {
                const response = await axios.get('/api/item/ranking', {
                    params: {
                        ranking: rankingType
                    }
                });
                // console.log('Ranking Items Response:', response.data);
                setItems(prevItems => [...prevItems, ...response.data]);
            } catch (error) {
                // console.error('Error fetching ranking items:', error);
            }
        };

        fetchAllItems();
        fetchRankingItems();
    }, [selectedCategory, selectedSubcategory, rankingType]);

    const handleRankingTypeChange = (type) => {
        setRankingType(type);
    };

    return (
        <div className={styles.totalWrap}>
            <div className={styles.RankingWord}>
                <h1 id={styles.rankingBest}>BEST</h1>
                <p id={styles.rankingPopular}>인기 있는 아이템</p>
            </div>

            <div className={styles.ContentWrap}>
                <div className={styles.RankingContent}>
                    <div className={styles.RankingType}>
                        <ul className={styles.RankingUl}>
                            <li className={styles.RankingLists}><Link to="#" onClick={() => handleRankingTypeChange(0)}>실시간</Link></li>
                            <li className={styles.RankingLists}><Link to="#" onClick={() => handleRankingTypeChange(1)}>일간</Link></li>
                            <li className={styles.RankingLists}><Link to="#" onClick={() => handleRankingTypeChange(2)}>주간</Link></li>
                        </ul>
                    </div>

                    <div className={styles.RankingItems} style={{ display: 'flex' }}>
                        <RankingFeed list={items} />
                        <div style={{ height: "30px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
