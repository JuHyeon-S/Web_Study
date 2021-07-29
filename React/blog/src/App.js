import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState('남자 코트 추천'); // ['남자코트추천', 데이터 변경함수]

  let posts = "강남 고기 맛집";
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
