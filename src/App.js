import './App.css';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Main from "./components/Global/Main";
import { DataProvider, SetDataProvider } from './data/DataContext';
import React from 'react';

const MainApp = () => {

  return (
    <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

function App() {

  return (
    <DataProvider>
      <SetDataProvider>  
        <MainApp/>
      </SetDataProvider>
    </DataProvider>
  );
}

export default App;