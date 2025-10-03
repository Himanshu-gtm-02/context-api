import React, { useContext, useState } from 'react'
import UserContext from '../../context/userContext';

const Login = () => {
    
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({username , password});
    }

  return (
    <div>
        <h2>Login</h2>

        <input 
            onChange={(e) => setUsername(e.target.value)}
            type='text' placeholder='Username' value={username}
        />

        <br />
        
        <input 
            onChange={(e) => setPassword(e.target.value)}
            type='password' placeholder='Password' value={password}
        />

        <br />
        <br />

        <button onClick={HandleSubmit}>Login</button>
    </div>
  )
}

export default Login