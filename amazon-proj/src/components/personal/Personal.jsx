import React, { Component } from 'react';
import './personal.css';
import right_arrow from './../../assests/right_arrow.png';
import left_arrow from './../../assests/left_arrow.png';

import SuggestionItem from './../../sub_components/suggestion_item/SuggestionItem.jsx';

const suggestions_page_count = 1;

const suggestions = [
  {
    "pic": right_arrow,
    "subj": "25inch Hair Drain Clog Remover Tool(6pcs), 24inch Drain Cleaner Sticks To Drain Hair Clog For Remover (1pcs), Drain Hair Remover Tool For Sewer, Toilet, Kitchen Sink, Bathroom Tub,(6+1)",
    "rating": 4.5,
    "price": 9.99,
    "prime": true
  },
  {
    "pic": right_arrow,
    "subj": "6 in1 Drain Clog Remover Tool, Sink Snake Cleaner Drain Auger Sewer toilet dredge, for Drain Hair Remover Tool For Sewer, Toilet, Kitchen Sink, Bathroom Tub",
    "rating": 1,
    "price": 9.99,
    "prime": false
  },
  {
    "pic": right_arrow,
    "subj": "FlexiSnake Drain Weasel Sink Snake Cleaner - 18 inch - Drain Hair Clog Remover Tool with Rotating Handle & 5 Wand Refills - Thin, Flexible, Easy to Use on Most Drains & Grates - Made in USA (5-Pack)",
    "rating": 2,
    "price": 9.99,
    "prime": true
  },
  {
    "pic": right_arrow,
    "subj": "OXO Good Grips Silicone Shower & Tub Drain Protector",
    "rating": 3,
    "price": 9.99,
    "prime": false
  },
  {
    "pic": right_arrow,
    "subj": "FOMMEN 6 Pack Clog Remover Drain Relief Auger Cleaner Tool,Sink Drain and Snake Overflow Cleaning Brush, Sewer Hair Catcher,(Bathroom Tub, Toilet,Clogged Drains, Dredge Pipe, Sewers,Sink, Kitchen)",
    "rating": 4.5,
    "price": 9.99,
    "prime": true
  },
  {
    "pic": right_arrow,
    "subj": "LEKEYE Shower Drain Hair Catcher/Strainer/Stainless Steel and Silicone",
    "rating": 4.5,
    "price": 9.99,
    "prime": true
  },
  {
    "pic": right_arrow,
    "subj": "Green Gobbler Ultimate Main Drain Opener | Drain Cleaner Hair Clog Remover | Works On Main Lines, Sinks, Tubs, Toilets, Showers, Kitchen Sinks | 64 fl. oz.",
    "rating": 4.5,
    "price": 9.99,
    "prime": true
  },
  {
    "pic": right_arrow,
    "subj": "25inch Hair Drain Clog Remover Tool(6pcs), 24inch Drain Cleaner Sticks To Drain Hair Clog For Remover (1pcs), Drain Hair Remover Tool For Sewer, Toilet, Kitchen Sink, Bathroom Tub,(6+1)",
    "rating": 4.5,
    "price": 9.99,
    "prime": false
  }
]

let i = 0;
let j = 6;
    
function currentPage(page) {
  if (page == 0) {
    i = 0;
    j = 6;
    //console.log(i,j);
  } else {
    i = 7;
    j = 7;
    //console.log(i,j);
  }
}

export default class Personal extends Component {
  render() {
    return (
      <div className='a__personal'>
        <div className='a__personal_container'>
          <div className='a__personal_container_item suggestions'>
            <div className='a__personal_container_item suggestions-header'>
              <h1>Similar to your past purchases</h1>
              <p>Page {suggestions_page_count} of 4</p>
            </div>
            <div className='a__personal_container_item suggestions-carousel'> 
              <div className='a__personal_container_item suggestions-button'>
                <button onClick={currentPage(0)}>
                  <img src={left_arrow}/>
                </button>
              </div>
              <div className='a__personal_container_item suggestions-carousel-container'>
                {
                  (suggestions.slice(i,j)).map((item) => 
                    <div className='suggestions-carousel-container-item'>
                      <SuggestionItem
                        pic={item.pic}
                        subj={item.subj}
                        rating={item.rating}
                        price={item.price}
                        prime={item.prime}
                      />
                    </div>
                  )
                }
              </div>
              <div className='a__personal_container_item suggestions-button'>
              <button onClick={currentPage(1)}>
                  <img src={right_arrow}/>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className='a__personal_container_item browsing_history'>
            <div className='a__personal_container_item suggestions-header'>
              <h1>Your Browsing History</h1>
              <p>View or edit your browsing history</p>
              <p>Page {suggestions_page_count} of 4</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
