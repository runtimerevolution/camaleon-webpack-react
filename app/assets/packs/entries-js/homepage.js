import React from 'react';
import ReactDOM from 'react-dom';
import '../entries-style/homepage';

import WebpackerReact from 'webpacker-react';
import { Hello } from '../components/hello';

WebpackerReact.setup({ Hello })
