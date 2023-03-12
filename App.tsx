import Toast from 'react-native-toast-message';
import Routes from './src/Routes';

import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='default' />
      <Routes />
      <Toast />
    </>
  );
}
