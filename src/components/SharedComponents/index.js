import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Main from '../Main';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<Main />);
