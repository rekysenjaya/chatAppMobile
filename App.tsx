import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { persistor, store } from './src/store';

import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;