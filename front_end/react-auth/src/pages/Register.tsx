import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    //defining all the variables to get from form
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    //submit function after filing the form sending the resquest to the back-end
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();//prevents the default load after a submission

        await fetch('http://localhost:8000/v1/register',{ //url
            method: 'POST',                               //method
            headers: {'Content-Type': 'application/json'},//headers
            body: JSON.stringify({                        //JSON body
                username,
                email,
                password
            })
        })
        
        setRedirect(true);//set the variable redirect to true so it will redirect
    }
    if (redirect) {
        navigate("/login");
    }


    return (
        // returns my html form
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/PikPng.com_gotta-catch-em-all_4960708.png?raw=true" alt="" width="310" height="80" />
                    <h1 className="h3 mb-3 fw-normal">REGISTER</h1>
                    <div className="form-floating">
                    <input type="username" className="form-control" placeholder="username" 
                        onChange={e => setUsername(e.target.value)}//setting the values to the variables
                    />
                    <label >Username</label>
                    </div>
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
                    <button className="w-100 btn btn-lg btn-primary" type="submit">submit</button>
                </form>
            </main>
        </div>
    )
}

export default Register;