// import FattailHome from 'pages/FattailHome/FattailHome';
import './App.css';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';
import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { React, useEffect, useState } from 'react';
import { ReactComponent as Splash } from './assets/icon/splash.svg';

function App() {
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    const isSplashShown = JSON.parse(localStorage.getItem('isSplashShown'));

    if (!isSplashShown) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem('isSplashShown', JSON.stringify(true));
        setIsLoading(false);
      }, 3000);
    }
  }, []);
  return (
    <div className="App">
      {isLoding ? (
        <div className="splash">
          <div className="splasg_img">
            <Splash />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="mainContainer">
            <Fattail />
            <Crested />
            <Leopard />
          </div>
          <Navigation />
        </>
      )}
    </div>
  );
}

export default App;
