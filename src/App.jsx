import React from "react";
import Abt from "./compo/abt";
import Navbar from "./compo/navbar";
import Projects from "./compo/proj";

function App() {
  return (<div> 
    <div>   <Navbar />
 
</div>
<div className=" bg-black   h-screen h-1/2" ><Abt /></div>
  <div className="bg-black h-screen"> <Projects /></div>
 </div>

 
 
  );
}

export default App;
