import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import './styles/style.css'; // Import the CSS for styling

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <Login />
    </div>
  </Provider>
);

export default App;
