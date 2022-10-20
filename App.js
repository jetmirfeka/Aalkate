import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import Context from './src/context';
import {screens, loginScreens} from './src/navigation/stack';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Context.Provider value={{authenticated, setAuthenticated}}>
      <StatusBar animated={true} backgroundColor="#000" />
      {!authenticated ? loginScreens() : screens()}
    </Context.Provider>
  );
}
