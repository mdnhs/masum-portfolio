import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[]; // Type for slides (children elements)
  autoSlide?: boolean; // Optional boolean for auto sliding
  autoSlideInterval?: number; // Optional interval for auto sliding
}

export default function Carousel({
  children: slides = [],
  autoSlide = false,
  autoSlideInterval = 5000,
}: Readonly<CarouselProps>) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || slides.length === 0) return; // Check if slides exist
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, slides.length]);

  return (
    <div className="overflow-hidden relative">
      {/* Only render if there are slides */}
      {slides.length > 0 ? (
        <>
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {slide}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No slides available</p> // Fallback in case slides are empty
      )}
    </div>
  );
}
