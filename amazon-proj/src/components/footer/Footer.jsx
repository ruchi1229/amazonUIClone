import React, { Component } from 'react';
import './footer.css';
import logo from './../../assests/logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='a__footer'>
        <div className='a__footer_btt'>
          <a href="#top"><p>Back to top</p></a>
        </div>
        <div className='a__footer_first'>
          <div className='a__footer_first_col1'>
            <h4>Get to Know Us</h4>
            <p>Careers</p>
            <p>Amazon Newsletter</p>
            <p>About Amazon</p>
            <p>Sustainability</p>
            <p>Press Center</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Science</p>
          </div>
          <div className='a__footer_first_col2'>
            <h4>Make Money with Us</h4>
            <p>Sell products on Amazon</p>
            <p>Sell apps on Amazon</p>
            <p>Supply to Amazon</p>
            <p>Become an Affiliate</p>
            <p>Become a Delivery Driver</p>
            <p>Start a package delivery business</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Uss</p>
            <p>Host an Amazon Hub</p>
            <p>›See More Ways to Make Money</p>
          </div>
          <div className='a__footer_first_col3'>
            <h4>Amazon Payment Products</h4>
            <p>Amazon Rewards Visa Signature Cards</p>
            <p>Amazon Store Card</p>
            <p>Amazon Secured Card</p>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Credit Card Marketplace</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
          <div className='a__footer_first_col4'>
            <h4>Let Us Help You</h4>
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates &amp; Policies</p>
            <p>Amazon Prime</p>
            <p>Returns &amp; Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
          </div>
        </div>
        <div className='a__footer_second'>
          <img src={logo} />
          <button type='dropdown'>
            <p>English</p>
          </button>
          <button type=''>
            <p>United States</p>
          </button>
        </div>
        <div className='a__footer_last'>
          {
            [...Array(38).keys()].map(() => 
              <div className='a__footer_last_item'>
                <p className='a__footer_last_item_title'>Hello Amazon</p>
                <p className='a__footer_last_item_detail'>What's up</p>
                <p className='a__footer_last_item_detail'>It's great</p>
                <p className='a__footer_last_item_detail'>Hi</p>
              </div>
            )
          }
        </div>
        <div className='a__footer_last_info'>
          <a>
            <p> Conditions of Use
            </p>
          </a>
          <a>
            <p> Privacy Notice
            </p>
          </a>
          <a>
            <p> Interest-Based Ads
            </p>
          </a>
          <a>
            <p> © 1996-2022, Amazon.com, Inc. or its affiliates
            </p>
          </a>
        </div>
      </div>
    )
  }
}
