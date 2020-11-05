import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initStore from "./store/store";
import {BrowserRouter} from 'react-router-dom'
import Router from "./router/router"
import "./style.css"

//  let user = 'N'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={initStore()}>
    <Router className="main"/>
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//все компоненты лучше закинуть через Layout
//Layout usr={ user }
// при использовании материал юай надо импорт миутемепровайдер и лайаут обернуть в миутемепровайдер