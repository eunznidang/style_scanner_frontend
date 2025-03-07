import React, { useState } from "react";
import { useItemLogic } from "../../hooks/useItemLogic";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { theme } from "../../style/theme";

export default function Item({
  itemId,
  brand,
  platform,
  name,
  price,
  itemImage,
  shoppingLink,
  likeCount,
  width,
  height,
  borderRad,
}) {
  const { isClicked, counter, handleHeartClick } = useItemLogic({
    itemId,
    likeCount,
  });

  const shoppingClick = () => {
    window.location.href = shoppingLink;
  };

  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };
  const formatLikeCount = (counter) => {
    if (counter >= 1000000) {
      return Math.floor(counter / 1000000) + "M"; // 1M, 2M, etc.
    } else if (counter >= 1000) {
      return Math.floor(counter / 1000) + "K"; // 1K, 2K, etc.
    } else {
      return counter.toString();
    }
  };

  return (
    <ItemDiv  width={width} borderRad ={borderRad}>
      <ItemImg src={itemImage} alt={name} width={width} height={height} />
      <AiOutlineShopping
        className="feedLayerDiv textShadow"
        style={{ cursor: "pointer" }}
        size="1.5rem"
        color={theme.colors.white}
        onClick={shoppingClick}
      />
      <ItemInfoTopWrapper className="p1">
        <p className="boldContent mb05 ellipsis" style={{ minHeight: "1rem" }}>
          {brand?brand:platform}
        </p>
        <p className="content ellipsis" style={{ minHeight: "1rem" }}>
          {name}
        </p>
      </ItemInfoTopWrapper>
      <ItemInfoBottomWrapper className="boldContent p1">
        <p>{formatPrice(price)}₩</p>
        <div className="itemLikeWrapper">
          <FaHeart
            size="1.5rem"
            style={{ cursor: "pointer", minWidth: "1.8rem" }}
            onClick={handleHeartClick}
            color={isClicked ? theme.colors.red : theme.colors.black}
            alt="Like"
          ></FaHeart>
          <p
            className="ml03"
            style={{
              textAlign: "left",
              color: isClicked ? theme.colors.red : theme.colors.black,
            }}
          >
            {formatLikeCount(counter)}
          </p>
        </div>
      </ItemInfoBottomWrapper>
    </ItemDiv>
  );
}
const ItemDiv = styled.div`
  width: ${({ width }) => width || "20rem"};
  border-radius : ${({borderRad}) => borderRad || '1.5rem'};
  background-color: ${({ theme }) => theme.colors.lightGray};

  overflow: hidden;
  position: relative;
  margin: 1rem;
  flex-shrink: 0;
`;
const ItemImg = styled.img`
  width: ${({ width }) => width || "20rem"};
  height: ${({ height }) => height || "20rem"};
  object-fit: cover;
`;
const ItemInfoTopWrapper = styled.div`
  text-align: start;
  align-items: center;
`;

const ItemInfoBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
