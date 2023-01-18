import React from "react";

const Login = () => {
    return (
      
    <main className="form-signin w-100 m-auto">
    <form>
        <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/PikPng.com_pokemon-starters-png_1677143.png?raw=true" alt="" width="300" height="100" />
        <h1 className="h3 mb-3 fw-normal">LOGIN</h1>
        <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label >Email address</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label>Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">login</button>
    </form>
    </main>)
}

export default Login;