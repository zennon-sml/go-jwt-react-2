import React from "react";

const Register = () => {
    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/PikPng.com_gotta-catch-em-all_4960708.png?raw=true" alt="" width="310" height="80" />
                    <h1 className="h3 mb-3 fw-normal">REGISTER</h1>
                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label >Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label>Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">register</button>
                </form>
            </main>
        </div>
    )
}

export default Register;