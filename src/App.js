import React from 'react';
import './App.css';
import List from './list'
import Calendar from './calendar'
import StopWatch from './StopWatch';
function App() {

  return (
    <div className="App">
      <div className="flex">
        <div className='txt'>
          <h1><img src='img/logo.png' alt="logo"></img> </h1>
          <p> 할 일을 잘 정리할 수 있는 간단한 목록만들기 앱 </p>
          <p> 스톱워치를 사용하여 더 알차게 이용해보세요 </p>
          <p> 생산성이 향상된 잘 계획된 하루를 보내보세요 </p>
          <Calendar />
          <StopWatch />
        </div>


        <div className='list'>
          <h2>To do List </h2>
          <List />

        </div>
      </div>

    </div>
  );
}

export default App;
