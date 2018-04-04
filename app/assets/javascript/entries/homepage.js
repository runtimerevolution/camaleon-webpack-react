import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/entries/homepage'; // css

import WebpackerReact from 'webpacker-react';
import { Hello } from '../components/hello';

WebpackerReact.setup({ Hello })
