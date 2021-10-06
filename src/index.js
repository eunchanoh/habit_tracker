import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // React DOM이라는 라이브러리를 이용해서
  // 우리의 인덱스에 있는 root라는 아이디를 가진 요소와
  // 우리의 최상위의 Component를 연결해주는 작업을 했습니다.
);
