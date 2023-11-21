import { useState } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';

/*
  The app component is how it switches between the different screens in my game.
  once you log in, you are sent to the main game page, the "HomePage."
  
*/

function App() {
  let HomeScreen = 'home';
  let LoginScreen = 'login';
  let CurrentScreen = LoginScreen;

  function handleClick() {
    setScreen(HomeScreen)
  }

  const [screen, setScreen] = useState(CurrentScreen);
  switch(screen) {
    case 'login':
      return (
        <LoginPage onLoginClick={handleClick}/>
      );
    case 'home':
      return (
        <HomePage />
      );
    default:
      console.log("Error: No value for CurrentScreen");
  }
}

export default App;
