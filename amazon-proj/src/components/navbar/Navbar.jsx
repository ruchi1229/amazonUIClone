import React, { Component } from 'react';
import './navbar.css';

const suggestion = "Lord of the Rings Trailer";

export default class Navbar extends Component {
  render() {
    return (
      <div className='a__navbar'>
        <div className='a__navbar-left'>
          <i class='fas fa-bars'></i>
          <p>All</p>
        </div>
        <div className='a__navbar_links'>
          <p>Amazon Basics</p>
          <p>Prime Video</p>
          <p>Pet Supplies</p>
          <p>Shopper Toolkit</p>
          <p>Beauty &amp; Personal Care</p>
          <p>Coupons</p>
          <p>Health &amp; Household</p>
          <p>Amazon Home</p>
        </div>
        <div className='a__navbar_suggestion'>
          {suggestion}
        </div>
      </div>
    )
  }
}
