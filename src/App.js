//import logo from './logo.svg';

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { Box, Button, Stack, TextField } from '@mui/material';
import Formpage from './formpage';
import Home from './Home';
import Appheader from './Appheader';
import Auto from './Auto';
import Comcheckbox from './Comcheckbox';
import Modelpopup from './Modelpopup';
import Muitable from './Muitable';
import Floatingbutton from './Floatingbutton';
import Ratingctl from './Ratingctl';
import Alert from './alert';

function App() {
  return (
    <div data-testid="movies">
    <BrowserRouter>
    <Appheader></Appheader>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/form' element={<Formpage></Formpage>}></Route>
        <Route path='/auto' element={<Auto></Auto>}></Route>
        <Route path='/check' element={<Comcheckbox></Comcheckbox>}></Route>
        <Route path='/modelpopup' element={<Modelpopup></Modelpopup>}></Route>
        <Route path='/table' element={<Muitable></Muitable>}></Route>
        <Route path='/float' element={<Floatingbutton></Floatingbutton>}></Route>
        <Route path='/rating' element={<Ratingctl></Ratingctl>}></Route>
        <Route path='/alert' element={<Alert></Alert>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
