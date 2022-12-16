import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const About = (props) => {
  // useSearchParams: ?a=1&b=2 쿼리 문자열을 읽고, 쓰기

  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  //useNavigate Hook 은 navigaie() 를 리턴한다.
  const navigate = useNavigate();

  //component 가 마운트 또는 언마운트 (사라지는 것/사라지지 않는 것) 또는 업데이트  체크용 훅
  // dependencies : 의존한다. 결과에 따른다.
  // dependency Array: 의존하는 배열
  // [] : 의존성 배열
  // 1. [] 조차 없으면 지속적으로 체크, 업데이트 한다.
  // 2. [] 만 있으면 마운트/언마운트(보일 때/안보일때) 될 때만 작동한다.
  // 3. [a,b] 등으로 작성하면 a,b 가 변할 때만 작동한다.
  useEffect(() => {
    // useSearchParams() 리턴 결과를 이용해서 쿼리를 읽어온다.
    // ?page=1
    const strPage = searchParams.get("page");
    //"1"
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);

  const goPrev = () => {
    if (page > 1) {
      navigate(window.location.pathname + "?page=" + (page - 1));
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + "?page=" + (page + 1));
  };

  return (
    <div className="card card-body">
      <h2>About {props.title} </h2>
      <div>
        <div className="m-2">현재 페이지: {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
