import React from "react";

const Login = () => {
    return (
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" required/>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" required/>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    )
}

export default Login;