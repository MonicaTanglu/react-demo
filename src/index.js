import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './store/index'
// import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeLayout from './components/layouts/layout';
import HomePage from './pages/home/home';
import BookAddPage from './pages/book/add';
import BookEditPage from './pages/book/edit';
import BookListPage from './pages/book/list';

import UserAddPage from './pages/user/add';
import UserEditPage from './pages/user/edit';
import UserListPage from './pages/user/list';

import MenuPage from './pages/system/menu/menu'

ReactDOM.render((
    <Provider store={store}>
        <Router >
            <HomeLayout>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/user/add" component={UserAddPage} />
                    <Route exact path="/user/list" component={UserListPage} />
                    <Route exact path="/user/edit/:id" component={UserEditPage} />
                    <Route exact path="/book/add" component={BookAddPage} />
                    <Route exact path="/book/list" component={BookListPage} />
                    <Route exact path="/book/edit/:id" component={BookEditPage} />
                    <Route exact path="/system/menu" component={MenuPage} />
                </Switch>
            </HomeLayout>
        </Router>
    </Provider>
), document.getElementById('root'))

