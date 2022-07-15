import React ,{useState} from "react";
import {Form, Alert} from  "react-bootstrap";
import {Button} from "react-bootstrap";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";



const Signup =()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [error, setError]=useState("");
    const navigate = useNavigate();
    const {signUp}=useUserAuth(); 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password);
            navigate("/");
        } catch (err){
            setError(err.message);
        }
    };
return(
    <>
    <div className='box'>
    <h2 >Firebase Auth Signup</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control className='t-1'
             type="email" 
             placeholder="Email address" 
            onChange={(e) =>setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control className='t-1' 
            type="password"
             placeholder="Password" 
             onChange={(e) =>setPassword(e.target.value)}
            
            />
        </Form.Group>

        <div>
            <Button className='t-2' variant="primary" type="Submit">
                Sign up
            </Button>
        </div>
    </Form>
    <div className='lastl'>
        Already have an account? <Link to="/">Log In</Link>
    </div>
        </div>
    </>
)
};
export default Signup;