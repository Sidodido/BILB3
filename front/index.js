import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import {BookProvider} from './src/components/screens/Book/components/BookContext';

export default function Main() {
  return (
    <BookProvider>
      <App />
    </BookProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
