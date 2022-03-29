import React from "react";
import Abt from "./compo/abt";
import Navbar from "./compo/navbar";
import Projects from "./compo/proj";
import Contact from "./compo/constact";
// import NextJsCarousel from "./compo/carosuel";
import CarouselComponent from "./compo/carouselComponent";
function App() {
  return (<div> 
    <div id="home">   <Navbar />
 
</div>
{/* <NextJsCarousel/> */}
<CarouselComponent/>
<div className="bg-black " id="about" ><Abt /></div>
<div className="bg-black " id="projects"><Projects /></div>
<div className="bg-black " id="contactus"> <Contact /> </div> 
 </div>
  );
}
export default App;
