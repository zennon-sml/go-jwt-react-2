import React, { SyntheticEvent, useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await fetch('http://localhost:8000/v1/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        setRedirect(true);
    }
    if (redirect) {
        // return red("/login");
        return new Response("", {
            status: 302,
            headers: {
              Location: "/login",
            },
          });    
    }


    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/PikPng.com_gotta-catch-em-all_4960708.png?raw=true" alt="" width="310" height="80" />
                    <h1 className="h3 mb-3 fw-normal">REGISTER</h1>
                    <div className="form-floating">
                    <input type="username" className="form-control" id="floatingInput" placeholder="username" 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label >Username</label>
                    </div>
                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label >Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">submit</button>
                </form>
            </main>
        </div>
    )
}

export default Register;