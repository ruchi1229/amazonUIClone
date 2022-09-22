import React, { Component, useEffect, useState } from 'react';
import "./main.css";
import right_arrow from './../../assests/right_arrow.png';
import left_arrow from './../../assests/left_arrow.png';
import image1 from './../../assests/image1.jpg';
import image2 from './../../assests/image2.jpg';
import movie from './../../assests/movie.jpg';
import Personal from '../personal/Personal';

import { useTheme, useThemeUpdate } from '../../UserContextComponent';
import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Main() {

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

    function handleGetRequest(event) {
      if (username != "") {
        console.log("from main " + username)
        let res;
        axios.get("/user/"+username,
          {}).then(response => {
            setUserData({
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              zipcode: response.data.zip_code,
              city: response.data.city,
            })
        })
      }
      console.log("from main " + userData.first_name)
    }

    return (
      <div className='a__main'>
        {(userData.first_name != undefined) ? 
          <>
            <p>{userData.first_name}</p>
            <p>{userData.last_name}</p>
            <p>{userData.city} {userData.zipcode}</p>
          <div className='a__main-bgrd_toggle'>
          <button className='a__main-bgrd_toggle_left'>
            <img src={left_arrow} />
          </button>
          <button className='a__main-bgrd_toggle_right'>
            <img src={right_arrow} />
          </button>
        </div>
        <div className='a__main_content'>
          <div className='a__main_content_item item_1'>
            <h1>Keep shopping for</h1>
            <div className='item_grid_four'>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
            </div>
          </div>
          <div className='a__main_content_item item_2'>
            <h1>Buy again</h1>
            <div className='item_grid_four'>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
            </div>
            <p className='a__main_content_item_link'>See more</p>
          </div>
          <div className='a__main_content_item item_3'>
            <h1>Deal of the day</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
            <p className='a__main_content_item_link'>See all deals</p>
          </div>
          <div className='a__main_content_item item_4'>
            <h1>Watch "Don't Let Me Go"</h1>
            <div className='item_grid_one'>
              <img src={movie} />
            </div>
            <p className='a__main_content_item_link'>Now on Prime Video</p>
          </div>
          <div className='a__main_content_item item_5'>
            <h1>Do more with Alexa Built-in devices</h1>
            <div className='item_grid_four'>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image1} />
                <p>Some title</p>
              </div>
              <div>
                <img src={image2} />
                <p>Some title</p>
              </div>
            </div>
            <p className='a__main_content_item_link'>Shop smart devices now</p>
          </div>
          <div className='a__main_content_item item_6'>
            <h1>2-hour grocery delivery included with Prime</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
          </div>
          <div className='a__main_content_item item_7'>
            <h1>Watch "Forever Summer: Hamptons"</h1>
            <div className='item_grid_one'>
              <img src={movie} />
            </div>
            <p className='a__main_content_item_link'>Now on Prime Video</p>
          </div>
          <div className='a__main_content_item item_8'>
            <h1>New deals every week</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
          </div>
          <div className='a__main_content_item item_9'>
            <h1>Do more with Alexa</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
          </div>
          <div className='a__main_content_item item_10'>
            <h1>Inspired by your purchases</h1>
            <div className='item_grid_one'>
              <img src={right_arrow} />
            </div>
          </div>
          <div className='a__main_content_item item_11'>
            <h1>More items to explore</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
          </div>
          <div className='a__main_content_item item_12'>
            <h1>Review your purchase</h1>
            <div className='item_grid_one'>
              <img src={image1} />
            </div>
            <p className='a__main_content_item_link'>See more products to review</p>
          </div>
          <div className='a__main_content_item item_13'>
            <h1>Your local store, online</h1>
            <div className='item_grid_one'>
              <img src={image1} />
            </div>
          </div>
          <div className='a__main_content_item item_14'>
            <h1>Frequently repurchased in Home</h1>
            <div className='item_grid_one'>
              <img src={image2} />
            </div>
          </div>
          <div className='a__main_content_item item_15'>
            <h1>Recommended for you from our brands</h1>
            <div className='item_grid_one'>
              <img src={right_arrow} />
            </div>
          </div>
          <div className='a__main_content_item item_16'>
            <h1>Explore more items</h1>
            <div className='item_grid_one'>
              <img src={right_arrow} />
            </div>
          </div>
        </div>
        <Personal />
        </>
          :
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </div>
    )
  }