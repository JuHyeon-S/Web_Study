/* eslint-disable */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천','리액트 공부 시작','vue?']); // ['남자코트추천', 데이터 변경함수]
  let [like, likeChange] = useState(0);
  let posts = "강남 고기 맛집";

  function changeTitle(){
    var newArray = [...title];
    newArray[0] = "여자 코트 추천";
    titleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <div className="list">
        <h3>{title[0]} <span onClick={() =>{ likeChange(like+1);}}>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 23일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 29일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
