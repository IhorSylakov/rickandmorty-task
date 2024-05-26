import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './Pages/layout';
import Home from './Pages/Home';
import Character from './Pages/Character';
import ErrorPage from './Pages/ErrorPage';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/rickandmorty-task' element={<Home />} />
            <Route path='/character/:id' element={<Character />} />
            <Route path='/rickandmorty-task/contacts' element={<Contacts />} />
            <Route path='/rickandmorty-task/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </div>
)

export default App;
