import React, { Component } from 'react';
import {Link} from 'gatsby';
import logo from '../../images/android-chrome-512x512.png';
import {FaCartArrowDown} from 'react-icons/fa';
import '../layout.css'

export default class Navbar extends Component {
    state ={
        navbarOpen:false,
        css:'collapse navbar-collapse show',
        links:[
            {
                id:1,
                path: '/',
                text:'home'

            },{
                id: 2,
                path: '/about',
                text: 'about'
            },{
                id: 3,
                path: '/cart',
                text: <FaCartArrowDown className='cart-icon snipcart-checkout'/>
            }
        ]
    }
    navbarHandler = () =>{
            this.state.navbarOpen?this.setState({navbarOpen:false, css:"collapse navbar-collapse"}): this.setState({navbarOpen:true, css: "collapse navbar-collapse show"})
    }
    render() {
        return (
                <nav className='navbar navbar-expand-sm bg-light navbar-light'>
                    <Link to='/' className='navbar-brand'>
                        <img src={logo} alt="logo" style={{height: 50}}/>
                    </Link>
                    <button className='navbar-toggler' type='button' onClick= {this.navbarHandler}>
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.css}>
                        <ul className="navbar-nav mx-auto">
                            {this.state.links.map(link =>{
                                   return(<li key={link.id} className='nav-item mx-5'>
                                        <Link to={link.path} className='nav-Link text-capitalize text-orange'>{link.text}</Link>
                                        </li>);
                                })
                            }

                        </ul>
                    </div>
                </nav>

        )
    }
}
