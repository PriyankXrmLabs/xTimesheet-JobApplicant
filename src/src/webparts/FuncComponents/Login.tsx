import * as React from 'react';
import { useState } from 'react';
import './login.css';
import {  encode } from './TokenEncryptor.mjs';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
 
    console.log('Username:', username);
    console.log('Password:', password);

    const user = encode(username);
    const pass = encode(password);

    console.log(user,pass)

   
   

    const res = await fetch(`https://xtimesheet.com/DesktopModules/TimesheetAPI/API/Feature/UserLogin/?UserName=${user}&Password=${pass}`, {
      method:'GET',
    })

    // const resdata = await res.text()
    // console.log(resdata)
      
    console.log(res)

  };

  return (
    <div className='content'>
      <form className='login' onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
