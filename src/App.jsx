import React from "react";

import Abt from "./compo/abt";
import Navbar from "./compo/navbar";
import Projects from "./compo/proj";
import Contact from "./compo/constact";
import Footer from "./compo/footer";
import Subscribe from "./compo/subscribe";
function App() {
  return (<div> 
    <div id="home">   <Navbar /></div>
<div className=" bg-black  " id="about" ><Abt /></div>
<div className="bg-black " id="projects"><Projects /></div>
<div className="bg-black " id="contactus"> <Contact /> </div> 
 <div className="bg-black" id="subscription"> <Subscribe/></div>
 <div className="bg-black id=footer"> <Footer /></div>
 </div>

 
 
  );
}

export default App;
