import React, { useContext, useEffect, useState } from 'react';

import './header.css';

import logo from './../../assests/logo.png';
import location from './../../assests/location.png';
import search from './../../assests/search.png';
import flag from './../../assests/usflag.jpg';
import cart_img from './../../assests/cart1.png';

import { useTheme, useThemeUpdate } from '../../UserContextComponent';
import axios from 'axios';

const person = {
  name: "Ruchi",
  address: {
    city: "Newark",
    zipcode: "94560"
  }
}

const cart = [
  {
    "item": "Modem"
  },
  {
    "item": "Fan"
  }
]

export default function Header() {
  const username = useTheme()

  const [userData, setUserData] = useState({
    first_name: undefined,
    last_name: undefined,
    zipcode: undefined,
    city: undefined,
  })

  useEffect (() => {
    handleGetRequest()
  })

  function handleGetRequest() {
    if (username != "") {
      let res;
      axios.get("/user/"+username,
        {
          username: username
        }).then(response => {
          setUserData({
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            zipcode: response.data.zip_code,
            city: response.data.city,
          })
      })
    }
  }


  return (
    <div className='a__header'>
      {handleGetRequest()}
      <div className='a__header_logo'>
        <img src={logo} alt="Amazon Services" />
      </div>
      <div className='a__header_address'>
        <img src={location} alt="" />
        <div className='a__header_address-content'>
          <p className='a__header_address-content_static'>Deliver to {userData.first_name}</p>
          <p className='a__header_address-content_location'>{userData.city + " " + userData.zipcode}</p>
        </div>
      </div>
      <form return="false;">
        <div className='a__header_search'>
          <select id="search_filter">
            <option value="all">All</option>
            <option value="specialty-aps-sns">Subscribe &amp; Save</option>
            <option value="subscribe-with-amazon">Subscription Boxes</option>
            <option value="tools">Tools &amp; Home Improvement</option>
            <option value="toys-and-games">Toys &amp; Games</option>
            <option value="wholefoods">Whole Foods Market</option>
          </select>
          <input type="text" className='a__header_search-input' />
          <input type="image" name="submit" src={search} className='a__header_search-submit' />
        </div>
      </form>
      <div className='a__header_country'>
        <button className='a__header_country_select'>
          <img src={flag} alt="" />
          <div class="dropdown-content">
            <input type="radio" id="eng_lang" checked="checked" />
            <label for="eng_lang">English - EN</label>
            <hr />
            <input type="radio" id="sp_lang" />
            <label for="eng_lang">español - ES</label>
            <hr />
            <a href="">Learn More</a>
            <hr />
            <img src={flag} alt="" />
            <p>You're shopping on Amazon.com</p>
            <br />
            <a href="">Change Country/Region</a>
          </div>
        </button>
      </div>
      <div className='a__header_accounts'>
        <p className='a__header_accounts_person'>Hello, {userData.name}</p>
        <p className='a__header_accounts_static'>Accounts & Lists</p>
      </div>
      <div className='a__header_orders'>
        <button>
          <p>Returns</p>
          <p className='a__header_orders_bold'>& Orders</p>
        </button>
      </div>
      <div className='a__header_cart'>
        <button className='a__header_cart_contents'>
          <p>{cart.length}</p>
          <img src={cart_img} />
        </button>
      </div>
    </div>
  )
}