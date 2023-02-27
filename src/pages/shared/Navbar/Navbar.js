import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";



const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white py-1 sticky top-0 z-30 "  style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.25)'}}>
      <div className=" mx-auto">

      {width < 600 ?  <MobileNav/> : <DesktopNav />}

      
      {/* box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);    */}
     
      

     

     </div>
    </nav>
  );
};

export default Navbar;
