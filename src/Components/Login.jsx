import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom';
 
const Login =()=>{
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
    

    if (username ==='admin' && password === 'test1'){

        alert('successful Login');
        navigate('/dashboard');

    } else{
        alert ('Error');
    }
    };
    return(
        <div>
            
            <form onSubmit={handleSubmit} style={{background:"#dddddd", height: "500px", display: "flex", flexDirection: "column", alignItems:"center",  }}>
            <h4>Login</h4>
                <input type="username" value={username} placeholder="UserName" required onChange={(e)=>setUsername(e.target.value)} style={{margin:"10px 0 15px 0", padding: "5px"}} />
                <input type="password" value={password} placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:"15px"}}/>
                <button type= "submit">Login</button>
            </form>
        </div>
    )
}

export default Login;