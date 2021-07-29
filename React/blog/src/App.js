/* eslint-disable */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState(['리액트 공부 시작','vue?','어렵다']); // ['남자코트추천', 데이터 변경함수]
  let [like, likeChange] = useState(0);
  let posts = "강남 고기 맛집";
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title[0]} <span onClick={() =>{ console.log(1)}}>👍</span> {like} </h3>
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
