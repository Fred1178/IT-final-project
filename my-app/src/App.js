import { useState } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CombatPage from './CombatPage/CombatPage';

/*
  The app component is how it switches between the different screens in my game.
  once you log in, you are sent to the main game page, the "HomePage."
  
*/

function App() {
  let HomeScreen = 'home';
  let LoginScreen = 'login';
  let CombatScreen = 'combat';
  let CurrentScreen = LoginScreen;

  

  const [screen, setScreen] = useState(CurrentScreen);
  switch(screen) {
    case 'login':
      return (
        <LoginPage onLoginClick={() => setScreen(HomeScreen)}/>
      );
    case 'home':
      return (
        <HomePage onEnemyClick={() => setScreen(CombatScreen)}/>
      );
    case 'combat':
      return (
        <CombatPage />
      ); 
    default:
      console.log("Error: No value for CurrentScreen");
  }

}

export default App;
