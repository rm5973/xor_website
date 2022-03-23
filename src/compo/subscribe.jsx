import { useState } from "react"

export default function Subscribe() {
 const[email,setEmail]=useState("")
 const handelOnclick=async (e)=>{
     let result=await fetch(
        'http://localhost:8000/subscribe',{
            method:"post",
            body:JSON.stringify({email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let resp= await result.json()
        console.warn(resp)
        if(resp){
            alert("u have been subscribed")
            setEmail("")
            
        }

 }
    return (
       
    <div class="">
        <div class="">
            <h2 class="text-center text-white pt-2" >Subscribe for our Newsletter</h2>
            <p class="text-center text-[#7d8285]">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <form class=" mb-2" >
              <div class="inline-block"><input class="mt-2 mx-auto block h-[30px] " type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" /></div>
            <div class="inline-block"> <button class="text-center  bg-blue-500 h-[30px] text-white rounded  ml-2 mx-auto block" type="submit" onClick={handelOnclick}>Subscribe </button></div>
           
        </form>  
        </div>
        
    </div>

    )
}
