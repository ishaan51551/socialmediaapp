import "./login.scss"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {
    const {login} = useContext(AuthContext);

     const handleLogin=()=>{
        login();
     }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam error temporibus animi minus officiis tenetur placeat eos alias illum. Magni, fuga tempore iste deleniti accusamus saepe nemo numquam dolorem exercitationem.</p>
                    <span>Dont have an account</span>
                    <Link to='/register'>
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="UserName" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
