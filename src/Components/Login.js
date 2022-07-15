import React,{useState} from 'react';
import {Alert, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import GoogleButton from "react-google-button";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';



const Login =()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [error, setError]=useState("");
    const navigate = useNavigate();
    const {logIn ,googleSignIn}=useUserAuth(); 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            navigate("/home");
        } catch (err){
            setError(err.message);
        }
    };
    const handleGoogleSignIn = async (e)=>{
            e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        }catch (err){
            setError(err.message);
        }
    };


return(
    <>
    <div className='box'> 
        <h2 >Firebase Auth Login</h2>
        {error && <Alert varient="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group >
                <Form.Control className='t-1' type="email" placeholder="Email address" 
                onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Control className='t-1' type="password" placeholder="password"
                onChange={(e)=> setPassword(e.target.value)}  />
            </Form.Group>
            <div >
                <Button className='t-2' variant="primary" type='submit'>Log In</Button>
            </div>
        </Form>

        
        
        
        <GoogleButton
            className="g-button"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        
    
    
        Don't have an account? <Link to="/signup">Sign up</Link>
    </div>
    </>
)
};
export default Login;