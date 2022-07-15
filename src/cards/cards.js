import React from 'react';
import './cards.css';
import d1i1 from '../images/cardimages/d1i1.jpg';
import d1i2 from '../images/cardimages/d1i2.jpg';
import d1i3 from '../images/cardimages/d1i3.jpg';
import d1i4 from '../images/cardimages/d1i4.jpg';
import d10 from '../images/cardimages/d10.jpg';
import d3c1 from '../images/cardimages/d3c1.jpg';
import d3c2 from '../images/cardimages/d3c2.jpg';
import d3c3 from '../images/cardimages/d3c3.jpg';
import d3c4 from '../images/cardimages/d3c4.jpg';
import d8 from '../images/cardimages/d8.jpg';
import d2c1 from '../images/cardimages/d2c1.jpg';
import d2c2 from '../images/cardimages/d2c2.jpg';
import d2c3 from '../images/cardimages/d2c3.jpg';
import d2c4 from '../images/cardimages/d2c4.jpg';
import d7c1 from '../images/cardimages/d7c1.jpg';
import d7c2 from '../images/cardimages/d7c2.jpg';
import d7c3 from '../images/cardimages/d7c3.jpg';
import d7c4 from '../images/cardimages/d7c4.jpg';
import d5 from '../images/cardimages/d5.jpg';
import d4 from '../images/cardimages/d4.jpg';
import d6 from '../images/cardimages/d6.jpg';
import d11c1 from '../images/cardimages/d11c1.jpg';
import d11c2 from '../images/cardimages/d11c2.jpg';
import d11c3 from '../images/cardimages/d11c3.jpg';
import d11c4 from '../images/cardimages/d11c4.jpg';





const Cards=()=>{


    return (
        <div className='main_div'>
            <table>
                <tr><td>
            <div className='card_container'>
            <h2 className='l1' >Up to 70% off | Clearance store</h2>
            <div className='card1'>
                        <img src={d10} alt=""/>
                    </div>
                    <h5 className='onclick'>See more</h5>
            </div>
            </td>
            <td>
        <div className='card_container'>
            <h2 className='l1' >Revamp your home in style</h2>
            <table>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d1i1} alt=""/>
                    </div>
                    Furniture
                    </td>
                    <td>
                    <div className='card1'>
                        <img src={d1i2} alt=""/>
                    </div>
                    Wall design
                    </td>

                </tr>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d1i3} alt=""/>
                    </div>
                    Handpicked furniture
                     </td>
                    <td>
                    <div className='card1'>
                        <img src={d1i4} alt=""/>
                    </div>
                    Light
                    </td>
                </tr>
            </table>
            <h5 className='onclick'>See more</h5>
        </div>
        </td>
        <td>
        <div className='card_container'>
            <h2 className='l1' >Electronics devices for home office</h2>
            <table>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d3c1} alt=""/>
                    </div>
                    Smartwatches 
                    </td>
                    <td>
                    <div className='card1'>
                        <img src={d3c2} alt=""/>
                    </div>
                    Tablets
                    </td>

                </tr>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d3c3} alt=""/>
                    </div>
                    Laptops
                     </td>
                    <td>
                    <div className='card1'>
                        <img src={d3c4} alt=""/>
                    </div>
                    Monitors
                    </td>
                </tr>
            </table>
            <h5 className='onclick'>See more</h5>
        </div>

        </td>
        </tr>
        <td>
        <div className='card_container'>
            <h3 className='l1' >Pay your credit card bills on Amazon</h3>
            <div className='card1'>
                        <img src={d8} alt=""/>
                    </div>
                    <h5 className='onclick'>See more</h5>
            </div>
        </td>
        <td>
        <div className='card_container'>
            <h2 className='l1' >Shop by Category</h2>
            <table>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d2c1} alt=""/>
                    </div>
                    Fresh 
                    </td>
                    <td>
                    <div className='card1'>
                        <img src={d2c2} alt=""/>
                    </div>
                    Mobiles
                    </td>

                </tr>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d2c3} alt=""/>
                    </div>
                    Fashion
                     </td>
                    <td>
                    <div className='card1'>
                        <img src={d2c4} alt=""/>
                    </div>
                    Electronics
                    </td>
                </tr>
            </table>
            <h5 className='onclick'>See more</h5>
        </div>
        </td>

        <td>
        <div className='card_container'>
            <h2 className='l1' >Amazon Pay | Book your travel tickets</h2>
            <table>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d7c1} alt=""/>
                    </div>
                    Flight tickets
                    </td>
                    <td>
                    <div className='card1'>
                        <img src={d7c2} alt=""/>
                    </div>
                    Bus tickets
                    </td>

                </tr>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d7c3} alt=""/>
                    </div>
                    Train tickets
                     </td>
                    <td>
                    <div className='card1'>
                        <img src={d7c4} alt=""/>
                    </div>
                    Essential travel products
                    </td>
                </tr>
            </table>
            <h5 className='onclick'>See more</h5>
        </div>

        </td>
        <tr>

        </tr>
        </table>
        <div className='home_furnish'>
            <img src={d5} alt="" />
        </div>


        <table>
            <tr>
                <td>
                <div className='card_container'>
            <h2 className='l1' >Cookware & dining</h2>
            <table>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d11c1} alt=""/>
                    </div>
                    Gas stoves
                    </td>
                    <td>
                    <div className='card1'>
                        <img src={d11c2} alt=""/>
                    </div>
                    Cookware
                    </td>

                </tr>
                <tr>
                    <td>
                    <div className='card1'>
                        <img src={d11c3} alt=""/>
                    </div>
                    Kitchen storage
                     </td>
                    <td>
                    <div className='card1'>
                        <img src={d11c4} alt=""/>
                    </div>
                    tableware
                    </td>
                </tr>
            </table>
            <h5 className='onclick'>See more</h5>
        </div>
        

                          
                </td>
                <td>
                <div className='card_container'>
            <h2 className='l1' >Echo dot with Alexa | Music, news & more</h2>
            <div className='card1'>
                        <img src={d4} alt=""/>
                    </div>
                    <h5 className='onclick'>See more</h5>
            </div>
                </td>
                <td>
                <div className='card_container'>
            <h2 className='l1' >Discover your home</h2>
            <div className='card1'>
                        <img src={d6} alt=""/>
                    </div>
                    <h5 className='onclick'>See more</h5>
            </div>
                </td>
            </tr>
        </table>

        </div>
    )
};
export default Cards;