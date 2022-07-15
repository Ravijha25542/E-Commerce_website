/* import { async } from "@firebase/util"; */
import React  from "react";
import Navbar_Again from '../Navbar/navbaragain';
import Navbar from "../Navbar/navbar";
import './home.css';
import Card from '../cards/cards';
import img1 from '../images/image1.jpg';
const Home=()=>{
    
return(
    <div className="main_body">
    < Navbar/>
    <Navbar_Again />
    
    <div >
        <img className="image1" src={img1} alt=""/>
    </div>
    <Card  />
    
    </div>
    
);

};
 export default Home;