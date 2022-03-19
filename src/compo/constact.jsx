import { useState} from 'react'
import PhoneContactimg1 from '../IMAGE/Contactus/PhoneContactimg1.jpg'


export default function Contact() {      
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message,setMessage]=useState("")
const handleOnSubmit = async (e) => {
  
    
     await fetch(
    'http://localhost:8000/register', {
        method: "post",
        body: JSON.stringify({ name, email ,message}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    setName(" ")
    setEmail(" ")
    setMessage(" ")

        
        
   
}

   
    return (<div class="" >
        <h1 class="text-white pt-[10px] pl-[40px] text-[50px]">Contact With Us</h1>
        <div class=" h-3/4 flex">
            <div class="ml-[100px] w-[400px] h-[500px] ">
            <img src={PhoneContactimg1} alt="no img found" class="h-[100%] w-[100%]  object-cover" />
            </div>


        <div class="">
            <div class=" mt-[125px] w-[215px] ml-[20.75rem]">

                <form action="/register" method="post"  >
                    <div class="pt-2  w-[50px] "><input  type="text" value={name} placeholder='NAME' class="w-[215px]" onChange={(e) => setName(e.target.value)} /></div>
                    <div class="pt-2  "> <input type="email" value={email} placeholder='EMAIL' class="w-[215px]" onChange={(e) => setEmail(e.target.value)} /></div>
                    <div class="pt-2  "><input type="text" vlaue={message} placeholder='MESSAGE' class="w-[215px] h-[80px] text-center" onChange={(e) => setMessage(e.target.value)} /></div> 
                   <div class="pt-2  flex"><button class="absolute left-[887px] w-[100px] h-[30px] text-center border-2 bg-white text-black" type="submit" onClick={handleOnSubmit} >submit</button> </div>
                </form>


            </div>




        </div></div>
        
    </div>)
}