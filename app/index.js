import React from 'react'
import ReactDOM from 'react-dom'
// import routes from './routes/routes'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import route from './route'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import Page from './components/Page'
import App from './containers/App'
import EditBox from './components/EditBox'
import UserDialog from './containers/UserDialog'
import SignInForm from './components/signInForm'
import SignUp from './components/signUpForm'
import ForgetPasswordTab from './components/forgetPsdTab'
import './style/style.scss'
import './style/icon-font.css'


let store = createStore(todoApp)
console.log(store.getState())
// createStore()的第二个参数是可选的, 用于设置 state 初始状态。这对开发同构应用时非常有用，
// 服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从
// 网络接收到的服务端 state 直接用于本地数据初始化。
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Page}>
        <Route path='login' component={UserDialog}>
          <IndexRoute component={SignUp} />
          <Route path='sign_in' component={SignInForm} />
          <Route path='forget' component={ForgetPasswordTab} />
        </Route>
        <Route path='app' component={App}>
          <Route path='editbox' component={EditBox} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)


 