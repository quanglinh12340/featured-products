import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Products.less'
import 'bootstrap/dist/css/bootstrap.css';
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function Products() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h2>FEATURED PRODUCTS</h2>
                <div className="content">
                    <div className="row">
                        <div className="col">
                            <div className="thumb-wrapper">
                                <div className="icon">
                                    <CiHeart />
                                </div>
                                <div className="images">
                                    <img src="https://www.tutorialrepublic.com/examples/images/products/ipad.jpg" alt="" />
                                </div>
                                <div className="cap">Apple iPad</div>
                                <div className="star-rating">
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaRegStar /></li>
                                    </ul>
                                </div>
                                <div className="price">
                                    <p>
                                    <strike>$400.00</strike>
                                    <b>$369.00</b>
                                    </p>
                                </div>
                                <div className="btn">
                                    <a href="">add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="thumb-wrapper">
                                <div className="icon">
                                    <CiHeart />
                                </div>
                                <div className="images">
                                    <img src="https://www.tutorialrepublic.com/examples/images/products/headphone.jpg" alt="" />
                                </div>
                                <div className="cap">Sony Headphone</div>
                                <div className="star-rating">
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaRegStar /></li>
                                    </ul>
                                </div>
                                <div className="price">
                                    <p>
                                    <strike>$25.00</strike>
                                    <b>$23.99</b>
                                    </p>
                                </div>
                                <div className="btn">
                                    <a href="">add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="thumb-wrapper">
                                <div className="icon">
                                    <CiHeart />
                                </div>
                                <div className="images">
                                    <img src="https://www.tutorialrepublic.com/examples/images/products/macbook-air.jpg" alt="" />
                                </div>
                                <div className="cap">Macbook Air</div>
                                <div className="star-rating">
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStarHalfAlt /></li>
                                    </ul>
                                </div>
                                <div className="price">
                                    <p>
                                    <strike>$899.00</strike>
                                    <b> $649.00</b>
                                    </p>
                                </div>
                                <div className="btn">
                                    <a href="">add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="thumb-wrapper">
                                <div className="icon">
                                    <CiHeart />
                                </div>
                                <div className="images">
                                    <img src="https://www.tutorialrepublic.com/examples/images/products/nikon.jpg" alt="" />
                                </div>
                                <div className="cap">Nikon DSLR</div>
                                <div className="star-rating">
                                    <ul>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaRegStar /></li>
                                        <li><FaRegStar /></li>
                                    </ul>
                                </div>
                                <div className="price">
                                    <p>
                                    <strike>$315.00</strike>
                                    <b>$250.00</b>
                                    </p>
                                </div>
                                <div className="btn">
                                    <a href="">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

Products.propTypes = {}

export default Products
