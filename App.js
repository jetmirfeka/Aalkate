import React, {useState} from 'react';
import Context from './src/context';
import {screens, loginScreens} from './src/navigation/stack';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Context.Provider value={{authenticated, setAuthenticated}}>
      {!authenticated ? loginScreens() : screens()}
    </Context.Provider>
  );
}
