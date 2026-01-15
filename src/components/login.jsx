import React from 'react'
import { useNavigate } from "react-router-dom";
import './login.css'



const login = () => {
    function sign_up(formdata) {
        console.log(Object.fromEntries(formdata))
        console.log(formdata)
    }

    const navigate = useNavigate(); // ✅ INSIDE component

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/todo"); // ✅ navigation works
    }

    return (

        <div className="login-page">
            <div className="container">
                <form
                    className='login_box'
                    action={sign_up}
                    onSubmit={handleSubmit}
                >
                    <h1 className='log_in' >Log In</h1>

                    <label htmlFor="first_name">Name</label>
                    <input type="name" id="first_name" name="first_name" />

                    <label htmlFor="email_">Email</label>
                    <input type="email" id="email_" name="email_" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    <button type="submit">Log In</button>
                </form>

            </div>
        </div>
    )
}

export default login
