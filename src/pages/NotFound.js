import React from "react";
import { useLocation } from "react-router";

const NotFound = () => {
  // useLocation Hook 은 location을 리턴한다.
  // pathname : 현재 요청된 경로
  //search : 쿼리 문자열
  //state : navigate() 로 이동할 때 전달된 state
  const location = useLocation;
  return (
    <div className="m-3">
      <h3>NotFound</h3>
      <p>{location.pathname}</p>
    </div>
  );
};

export default NotFound;
