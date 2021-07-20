import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
