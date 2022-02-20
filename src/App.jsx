import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import One from './components/1'
import Two from './components/2'
import Three from './components/3'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`


export default function BasicExample() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <ul>
          <li>
            <Link to="/">1</Link>
          </li>
          <li>
            <Link to="/2">2</Link>
          </li>
          <li>
            <Link to="/3">3</Link>
          </li>
        </ul>

        <hr />
       
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route path="/2">
            <Two />
          </Route>
          <Route path="/3">
            <Three />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}