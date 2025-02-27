import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './Pages/layout';
import Home from './Pages/Home';
import Character from './Pages/Character';
import ErrorPage from './Pages/ErrorPage';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
