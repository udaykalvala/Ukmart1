import React from 'react'
import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext";

const Navbar = () => {

    const {cartItems} = useCart()
  return (
    <>
    <div className="navSection">
        <div className="title">
            <h2>UK-Mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='Search'/>
        </div>
        <div className="user">
            <div className="user-detail">
                SignIn/SignUp
            </div>
            <Link to='/cart'>
            <div className="cart">
                Cart 
                <span>
                    {cartItems.length}
                </span>
            </div>
            </Link>
        </div>
    </div>

        <div className="subMenu">
            <ul>
                <Link to='/mobiles'>
                    <li>Mobiles</li>
                </Link>
                
                <Link to="/computer">
                    <li>Computers</li>
                </Link>

                

                <Link to="/watches">
                    <li>Watches</li>
                </Link>

                <Link to="/fridge">
                    <li>Fridges</li>
                </Link>

                <Link to="/furniture">
                    <li>Furniture</li>
                </Link>

                <Link to="/kitchen">
                    <li>Kitchen</li>
                </Link>

                <Link to='/men'>
                    <li>Men's Wear</li>
                </Link>



                <Link to="/tv">
                    <li>Tv</li>
                </Link>

                <Link to="/woman">
                    <li>Woman's Wear</li>
                </Link>
  
                <Link to="/ac">
                    <li>Ac</li>
                </Link>
                
                
            </ul>
        </div>
    </>
  )
}

export default Navbar