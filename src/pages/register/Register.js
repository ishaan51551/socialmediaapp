import "./register.scss"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social Funda</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam error temporibus animi minus officiis tenetur placeat eos alias illum. Magni, fuga tempore iste deleniti accusamus saepe nemo numquam dolorem exercitationem.</p>
                    <span>Do you have an account ?</span>
                    <Link to='/login'>
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="UserName" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />

                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
