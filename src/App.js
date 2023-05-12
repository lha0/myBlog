import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={ () => { setModal(!modal); setTitle(i) }}> { 글제목[i] } 
                <span onClick={ () => { 
                  let copy = [...좋아요];
                  copy[i]++;
                  좋아요변경(copy); 
                  } }>👍</span> { 좋아요[i] } 
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);

        let good = 좋아요;
        good.push(0);
        좋아요변경(good);
      }}>글 추가</button>

      {
        modal === true ? <Modal 글제목={글제목} 글제목변경={글제목변경} idx={title}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.글제목[props.idx] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[props.idx] = '여자 코트 추천';
        props.글제목변경(copy);
      }}>제목 수정</button>
    </div>
  )
}

export default App;
