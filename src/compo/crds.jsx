import React from "react"


export default function Crds(props) {
    return (
        <div class="  w-[400px] h-24 bg-white ">
 
            <div >
               
                <div class="h-24 w-48 border-black border-2 ">
                   
                    <img src={props.url} class=" text-white" alt="no imagefound" />
                    <div class=" items-start justify-end pl-[275px] pt-[6px]"><p class="text-black  ">{props.des}</p></div>
                </div>
            </div>
            
            
        </div>
    )
}