/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import Navi from './Navi.js';
import Mogako from './Mogako.js';
import axios from 'axios';

function App() {


  let [meets, meetsChange] = useState(data);
  let styleRecord = { color: 'blue', fontSize: '20px' };

  return (
    <div className="App">
      <Navi></Navi>

      <Switch>
        <Route exact path="/">
          <div>메인페이지</div>
          <JumboTron styleRecord={styleRecord}></JumboTron>
          <div className='container'>
            <div className='row'>
              {
                meets.map((ele, idx) => { return <ProductCard meets={meets[idx]} i={idx} ></ProductCard> })
              }
              {
                meets.map((ele, idx) => { return <ProductCard meets={ele}></ProductCard> })
              }

              <button className='btn btn-primary' onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                  console.log(result);
                }).catch(() => { console.log("실패했어요") })
              }}>더보기</button>

            </div>
          </div>
        </Route>
        <Route path="/Mogako">
          <div>모각코</div>
          {/* <JumboTron styleRecord={styleRecord}></JumboTron> */}
          <Mogako></Mogako>

        </Route>
        <Route path="/detail/:id">
          <div>모각코 id </div>
          {/* <JumboTron styleRecord={styleRecord}></JumboTron> */}
          <Detail meets={meets}></Detail>

        </Route>
        {/* <Route path="/어쩌구" component={ProductCard(props)}></Route> */}

        <Route path="/:id">
          <div>아무거나 적었을떄</div>
        </Route>
      </Switch>
    </div >
  );
}

//컴포넌트 만들기
function ProductCard(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://previews.123rf.com/images/pzaxe/pzaxe1301/pzaxe130100152/17543641-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%95%84%EC%9D%B4%EC%97%90-%EB%8C%80%ED%95%9C-%EC%97%AC%EC%9E%90%EC%9D%98-%EB%B9%A8%EA%B0%84-%EA%B5%AC%EB%91%90.jpg?fj=1'} width="100%"></img>
      <p>{props.i}</p>
      <p>{props.meets.id}</p>
      <p>{props.meets.title}</p>
      <p>{props.meets.담당자}</p>
      <p>{props.meets.요일}</p>
      <p>{props.meets.content}</p>
      <p>{props.meets.price}</p>
    </div>
  )
}

function JumboTron(props) {
  return (
    <div className='backGround'>
      <div className='JumboTron'>
        <h1>무한루프 코딩(개발자 놀이터)</h1>
        <p style={{ fontSize: "12px", fontWeight: "10", color: "black" }}>
          🌸 봄맞이, 신입 모집중 🌱
        </p>
        <p>
          ♾ 함께 성장하기 위한 개발자 놀이터 "무한루프 코딩"에 오신 것을 환영합니다👏🏻

          💻 무한루프 코딩은 개발자들의 역량을 향상시킬 수 있는 *스터디 플랫폼*을 지향합니다.

          👩🏻‍💻 시간 혹은 마음 맞는 사람들과 *모.각.코* 혹은 *스터디*를 자유롭게 개설해 한 단계 더 성장할 분들 찾고 있습니다 👀

          👣 우리모임에서 성장하고 싶은 개발자 여러분들을 위해 뛰어놀 수 있는 놀이터를 제공하겠습니다! 🙇🏻
        </p>
        <p>
          <Button variant="primary">Learn More</Button>{' '}
        </p>

      </div>
      <div>
        <p><button style={props.styleRecord}>Learn More</button></p>
      </div>
    </div>
  )
}



export default App;
