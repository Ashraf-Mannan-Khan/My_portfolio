import { useState } from 'react';
import { Card } from './Card/card';
import { Header } from './header/header';
import { Body } from './Body/body';
import { Tools } from './tools/tools';
import { Work } from './Work/work';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Header>
      <Body>
        <Card/>
      </Body>
      <Tools />
      <Work />
      <Contact />
    </Header>
    } >

    </Route>

    < Route path='/about' element={
      <Header>
        <About />
        <Contact />
      </Header>
    } />


  </>

));
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
