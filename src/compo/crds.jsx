import React from "react"


export default function Crds(props){
    return(
        <div class="border-2 border-black w-96 h-16 bg-black ">
       <div >
           <div class="h-16 w-8">
               <img src={props.url} alt="no imagefound"  />
           </div>
           <div class="h-2 w-8"> 
           <p class="text-white text-right">
                {props.dis}
                </p>
                </div>
           
            </div>
        </div>
    )
}