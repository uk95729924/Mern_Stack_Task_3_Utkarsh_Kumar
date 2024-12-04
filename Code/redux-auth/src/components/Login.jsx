import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, logout } from '../store/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, user, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      const mockUser = { id: 1, name: 'Admin' };
      const mockToken = 'mockToken123';
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
