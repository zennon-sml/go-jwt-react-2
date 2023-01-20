import React, { SyntheticEvent, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(email, password)
        await fetch('http://localhost:8000/v1/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        
    }

    return (
      
    <main className="form-signin w-100 m-auto">
    <form onSubmit={submit}>
        <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/PikPng.com_pokemon-starters-png_1677143.png?raw=true" alt="" width="300" height="100" />
        <h1 className="h3 mb-3 fw-normal">LOGIN</h1>
        <div className="form-floating">
        <input type="email" className="form-control" placeholder="name@example.com" 
            onChange={e => setEmail(e.target.value)}
        />
        <label >Email address</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" placeholder="Password" 
            onChange={e => setPassword(e.target.value)}
        />
        <label>Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">login</button>
    </form>
    </main>)
}

export default Login;