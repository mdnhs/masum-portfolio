"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function ClientAOSProvider() {
  useEffect(() => {
   
    AOS.init({
      disable: function () {
        return window.innerWidth < 768; 
      },
      duration: 1000,
      once: false, 
    });

  
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleRouteChange);
    return () => window.removeEventListener("load", handleRouteChange);
  }, []);

  return null; 
}
