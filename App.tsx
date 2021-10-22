import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/Splash';
import Phone from './src/screens/Phone';
const App = () => {
  return (
    <SafeAreaView>
      {/* <PersistGate loading={null} persistor={ElsewhereStore.persistor}> */}
      <Phone />
      {/* </PersistGate> */}
    </SafeAreaView>
  );
};

export default App;
