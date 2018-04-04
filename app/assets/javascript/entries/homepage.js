import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/entries/homepage'; // css

import { Hello } from '../components/hello';

ReactDOM.render(
  <h2>Something else</h2>,
  document.body.appendChild(document.createElement('div'))
);