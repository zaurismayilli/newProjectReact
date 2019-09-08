import React from 'react';
const { Link } = require('react-router-dom');
const miniLogo = require('../../assets/sass/icons/logos.png');
const defUser = require('../../assets/sass/icons/default-user.png');
export function Header(): JSX.Element {
    return (
        <React.Fragment>
            <section className="banner-section">
                <div className="container-fluid">
                    <Link to="/loremas"> New Resident Evil 2 Remake Release PRE ORDER NOW : <span className="waves-effect" > BUY </span> <i className="icon-arrow-right white"></i>  </Link>
                    <button type="button"  > <i className="icon-cancel white"></i> </button>
                </div>
            </section>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="navbar">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" ><img src={miniLogo} alt="Neff Creative" /></Link>
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="menu">
                                    <ul className="menus">
                                        <li>
                                            <Link to="/admin" className="dropdown-m">  Profile
                                            <span className="profile-span">
                                                    <img src={defUser} alt="" />
                                                </span>
                                            </Link>
                                            <ul>
                                                <li>  <Link to="/admin">  Admin </Link> </li>
                                                <li>  <Link to="/adminAdd">  Admin Insert </Link> </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">  Home </Link>
                                        </li>
                                        <li>
                                            <Link to="/about">  About </Link>
                                        </li>
                                        <li>
                                            <Link to="/video">  Video </Link>
                                        </li>
                                        <li>
                                            <Link to="/music">  Music </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">  Blog </Link>
                                        </li>
                                        <li>
                                            <Link to="/company" className="dropdown-m">  Services </Link>
                                            <ul>
                                                <li>  <Link to="/demo1">  Demo page </Link> </li>
                                                <li>  <Link to="/demo1">  Demo page </Link> </li>
                                                <li>  <Link to="/demo1">  Demo page </Link> </li>
                                                <li>  <Link to="/demo1">  Demo page </Link> </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/contact">  Contact </Link>
                                        </li>
                                        <li>
                                            <Link to="/login">  Login </Link>
                                        </li>
                                        <li>
                                            <Link to="/register">  Register </Link>
                                        </li>
                                    </ul>
                                </div>
                                <button type="button" className="mobile-bt">
                                    <i className="line"></i>
                                    <i className="line"></i>
                                    <i className="line"></i>
                                    <i className="line"></i>
                                    <i className="line"></i>
                                    <i className="line"></i>
                                </button>
                                <div className="search-block">
                                    <button type="button" className="default-btn"> <i className="icon-search white"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-line"></div>
            </header>
            <div className="search-form" >
                <button type="button" className="close-search"  > <i className="icon-cancel white"></i> </button>
                <form action="" method="" >
                    <input type="text" className="search-input" placeholder="search" />
                    <button type="submit" className="default-btn btn-green white">  search  </button>
                </form>
            </div>
        </React.Fragment>
    )
}