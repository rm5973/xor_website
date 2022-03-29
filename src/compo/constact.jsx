import { useState, useEffect } from "react";
import pone from "../IMAGE/Contactus/pone.svg";



export default function Contact() {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const handleOnSubmit=async (e)=>{
    
    let result=await fetch(
      'http://localhost:8000/register', {
        method: "post",
        body: JSON.stringify({ name, email , message}),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    
    let resdata=await result.json()
    console.warn(resdata);
   
    if(resdata){
       alert("data entered sucessfully")
      setName("")
      setEmail("")
      setMessage("")
    
    
    }
  }

  return (
    <div class="">
      <h1 class="text-white pt-[10px] pl-[40px] text-[50px]">
        Contact With Us
      </h1>
      <div class=" pb-4">
        <div class=" sm:w-2/3 inline-block">
          <img
            src={pone}
            alt="no img found"
            class=" w-[100%]  "
          />
          
        </div>

        <div class="sm:inline-block sm:w-1/3  align-top p-3">
          <div class=" my-[15vw]">
            <div class=" ">
              <form   >

                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  class=" mt-2 w-3/4 mx-auto block"
                  value={name} onChange={(e) => setName(e.target.value)}
                />



                <input
                  type="email"
                  name="emailid"
                  placeholder="EMAIL"
                  class="  w-3/4 mt-2 mx-auto block"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />


                <textarea
                  type="text"
                  name="message"
                  placeholder="MESSAGE"
                  class=" text-center w-3/4 m-2 mx-auto block"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                />
                <div class="text-white mx-auto w-3/4"><input type="checkbox" class=" mx-auto " /> terms and conditions</div>



                <button
                  type="submit"
                  class=" mx-auto text-center border-2 bg-white text-black block mt-2"
                  onClick={handleOnSubmit}
                >
                  submit
                </button>



              </form></div>

          </div></div>


      </div>
    </div>
  );
}
