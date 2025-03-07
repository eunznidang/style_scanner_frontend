import { useEffect, useState } from "react";
import api from "../../../api/axios.jsx";
import CommunityNotiForm from "./CommunityNotiForm";

export default function CommunityNoti() {
  const [notis, setNotis] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/api/notification/me")
      .then((response) => {
        setNotis(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다:", error);
      });
  }, []);

  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const currentItems = notis.slice(firstItemIndex, lastItemIndex);

  if (loading) {
    return (
      <CommunityNotiForm
        noti={currentItems}
        itemsNum={notis.length}
        currentItems={currentItems}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    );
  }
}
