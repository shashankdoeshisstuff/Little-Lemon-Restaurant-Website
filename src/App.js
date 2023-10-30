import css from './App.css';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Main from "./components/Global/Main";
import { DataProvider } from './data/DataContext';
import { useContext } from 'react';

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
      <MainApp/>
    </DataProvider>
  );
}

export default App;