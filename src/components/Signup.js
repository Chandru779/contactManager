import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

const Signup  = () =>{

    const url = 'mongodb://localhost:27017/loginpage';

    const[hasAccount,setHasAccount] = useState(false);
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[secret,setSecret] = useState('');

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email:email,
            password:password,
            secret:secret
        })

    }

    return(
        <div className="form">
            <form onSubmit={e=>submit(e)}>

                <p>Login as <Link to={'/home'}>Guest</Link> </p>
                

            {hasAccount ? (
                <>
                <h2>Sign Up</h2>
                    <label>
                    Email:<br />
                    <input className="input" type="text" name="name" onChange={e =>setEmail(e.target.value)}/><br/>
                </label>

                <label>
                    Password:<br />
                    <input className="input" type="password" name="password" onChange={e =>setPassword(e.target.value)}/><br/>
                </label>

                <label>
                    Secret:<br />
                    <input className="input" type="text" name="secret" onChange={e=>setSecret(e.target.value)}/><br />
                </label>

                <input className="input" type="submit" value="Sign Up" />
          

            <p>Already have an account ? <span onClick={() =>setHasAccount(!hasAccount)}> Sign in</span></p>
                </>
            ):
            (
                <>
                <h2>Sign In</h2>
                <label>
                    Email:<br />
                    <input className="input" type="text" name="name" onChange={e =>setEmail(e.target.value)}/><br /><br />
                </label>

                <label>
                    Password:<br />
                    <input className="input" type="password" name="password"  onChange={e =>setPassword(e.target.value)}/><br /><br />
                </label>

                <input className="input" type="submit" value="Sign In" />
          

            <p>Don't have an account ?  <span onClick={() =>setHasAccount(!hasAccount)}>Sign Up</span></p>
                </>
            )}

           </form>
        </div>
    )
}

export default Signup