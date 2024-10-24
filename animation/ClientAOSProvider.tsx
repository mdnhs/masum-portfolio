// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; 

// export default function ClientAOSProvider() {
//   useEffect(() => {
//     AOS.init({
//       disable: function () {
//         return window.innerWidth < 768; 
//       },
//       duration: 1000,
//       once: false, 
//     });

//     // Delay the initial refresh
//     const timeoutId = setTimeout(() => {
//       AOS.refresh();
//     }, 50); // Adjust the delay as necessary

//     const handleRouteChange = () => {
//       AOS.refresh();
//     };

//     window.addEventListener("load", handleRouteChange);
//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("load", handleRouteChange);
//     };
//   }, []);

//   return null; 
// }
