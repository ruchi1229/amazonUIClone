import React, { Component } from 'react';
import './suggestion_item.css';
import right_arrow from './../../assests/right_arrow.png';
import left_arrow from './../../assests/left_arrow.png';


const SuggestionItem = ({pic,subj,rating,price,prime}) => {
  return (
    <div className='a__pollItem'>
      <img src={right_arrow} />
      <br />
      <p className='a__pollItem_container-title'>{subj}</p>
      <p>{rating}</p>
      <p className='a__pollItem_container price'>{price}</p>
      <p>
        { prime? 
          <p>something</p> :
          <p>false</p>
        }
      </p>
    </div>
  )
}

export default SuggestionItem;