import React from 'react';


        const handleSubmit = (event)=>{
            event.preventDefault()

            const emailValue = event.target.email.value
            const passwordValue = event.target.password.value
            console.log(emailValue, passwordValue)
        }

        const handleEmailOnBlur = (event)=>{
            console.log(event.target.value)
        }

        const handlePasswordOnBlur = (event)=>{
            console.log(event.target.value)
        }
        const RegisterNormal = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input onBlur={handleEmailOnBlur} type="email" name="email" placeholder="This is Your Email" id="" /><br />
                    <input onBlur={handlePasswordOnBlur} type="password" name="password" placeholder="This is Your Password" id="" /><br />
                    <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterNormal;