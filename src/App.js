import './App.css';
import React from 'react';
import MainBar from './Components/MainBar';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main//Main';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Ranking from './pages/ranking/Ranking';
import CelebRecommend from './pages/recommend/CelebRecommend';
import Search from './pages/search/Search';
import MypageDefault from './pages/mypage/default/MypageDefault';
import LikeList from './pages/mypage/like/LikeList';
import FollowingList from './pages/mypage/follow/FollowingList';
import MyPost from './pages/mypage/post/MyPost';
import MyComment from './pages/mypage/comment/MyComment';
import AccountManage from './pages/mypage/account/AccountManage';
import CommunityNoti from './pages/mypage/notification/CommunityNoti';
import HomeFeed from './pages/home/HomeFeed';
import HomeItem from './pages/homeItem/HomeItem';
import Community from './pages/community/home/Community';
import CommunityDetail from './pages/community/detail/CommunityDetail';
import Category from './pages/ranking/category/Category';
import Empty from './pages/empty/Empty';
import PrivateRoute from "./utils/PrivateRoute";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Footer from "./Components/Footer";
import "./style/style.css";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <MainBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Ranking" element={<Ranking />} />
            <Route path="/Community" element={<Community />} />

            <Route element={<PrivateRoute />}>
              <Route path="/Search" element={<Search />} />
              <Route path="/MypageDefault" element={<MypageDefault />} />
              <Route path="/AccountManage" element={<AccountManage />} />
              <Route path="/CommunityNoti" element={<CommunityNoti />} />
              <Route path="/CelebRecommend" element={<CelebRecommend />} />
              <Route path="/FollowingList" element={<FollowingList />} />
              <Route path="/MyPost" element={<MyPost />} />
              <Route path="/MyComment" element={<MyComment />} />
              <Route path="/HomeFeed" element={<HomeFeed />} />
              <Route path="/HomeItem" element={<HomeItem />} />
              <Route path="/CommunityDetail" element={<CommunityDetail />} />
              <Route path="/LikeList" element={<LikeList />} />
              <Route path="/Category" element={<Category />} />
            </Route>
            {/* 빈 페이지 */}
            <Route path="*" element={<Empty />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
