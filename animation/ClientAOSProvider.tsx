"use client"; // Mark this file as a Client Component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ClientAOSProvider() {
  useEffect(() => {
    // Initialize AOS only in the browser
    AOS.init({
      disable: function () {
        return window.innerWidth < 768; // Disable AOS on mobile (optional)
      },
      duration: 1000, // Set animation duration
      once: false, // Only animate once
    });

    // Optional: Refresh AOS when page content is dynamically updated
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleRouteChange);
    return () => window.removeEventListener("load", handleRouteChange);
  }, []);

  return null; // No visual component, just handles AOS initialization
}
