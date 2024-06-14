import React from 'react'

function SignUp() {
  return (
    <div class="container" id="container">
    <div class="form-container sign-in-container">
        <form action="#">
            <h1>Sign Up</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type='email' placeholder='Student Mail' />
            <input type='number' placeholder='Student ID' />
            <a href="src\Pages\Home.jsx"><button>Sign Up</button></a>
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png" class="img" />
            <div class="text">
                <h1>Welcome</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp