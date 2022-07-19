import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 

createRoot(document.getElementById('root')).render(<App />);


// registerServiceWorker();
