import React from "react"


export default function Crds(props) {
    return (
      <div class="bg-white p-[16px]  m-[16px] rounded-md ">
    <div class="w-1/2  inline-block "> <img src={props.url} alt="no img found" /></div>
    <div class="w-1/2 inline-block ">
      {props.des}
    </div>
      </div>
     
    ) 
}