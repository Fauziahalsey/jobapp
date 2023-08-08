import React, { useState } from 'react';
import Login from './Component/Login';
import Profile from './Component/Profile';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div>
      {token ? (
        <Profile user={``} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
