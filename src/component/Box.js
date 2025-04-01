import React from 'react'

const getResultClass = (result) => {
  if (result === "이겼다!!") return "win";
  if (result === "졌다..") return "lose";
  return "tie";
};

const box = (props) => {
  return (
    <div className='box'>
        <h1 className='item_title '>{props.title}</h1>
        <img className={`item_img ${getResultClass(props.result)}`} src={props.item && props.item.img} alt="묵찌빠 이미지"></img>
        <h2 className='box_result'>결과 : {props.result}</h2>
    </div>
  )
}

export default box