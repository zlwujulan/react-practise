import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import store from './store';
import './static/common.css'
import * as serviceWorker from './serviceWorker';
import {routes} from './route'
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
 <Provider store={store}>
    <HashRouter>
   <div>
     <Switch>
       {routes.map(item=>{
         return <Route key={item.path} path={item.path} 
         render={props=>(
           <item.component{...props} routes={item.routes}/>
         )}
         ></Route>
       })}
       <Redirect from='/' to='/home' exact />
     </Switch>  
   </div>
   </HashRouter>
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
