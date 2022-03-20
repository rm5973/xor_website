export default function Subscribe() {

    return (
       
    <div class="">
        <div class="">
            <h2 class="text-center text-white" >Subscribe for our Newsletter</h2>
            <p class="text-center text-[#7d8285]">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div class="flex flex-col justify-center items-center ">
          <form class=" mb-2" method="post">
              <div class="inline-block"><input class="mt-2 mx-auto block h-[30px] " type="email" name="email" placeholder="Your Email" /></div>
            <div class="inline-block"> <button class="text-center  bg-blue-500 h-[30px] text-white rounded  ml-2 mx-auto block" type="submit">Subscribe </button></div>
           
        </form>  
        </div>
        
    </div>

    )
}
