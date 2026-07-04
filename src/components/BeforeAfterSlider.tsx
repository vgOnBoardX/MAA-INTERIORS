import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  height?: string;
}

export default function BeforeAfterSlider({ before, after, height = "h-96" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${height} overflow-hidden rounded-lg shadow-md border border-stone/20 select-none cursor-ew-resize before-after-slider-container`}
      onMouseMove={(e) => {
        // If not dragging, we can also support hover reveal if user wants or just keep it simple with click-drag
        if (!isDragging && e.buttons === 1) {
          setIsDragging(true);
        }
      }}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After Renovation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute right-4 bottom-4 bg-espresso/80 text-linen text-xs px-3 py-1 rounded font-mono z-10">
        AFTER
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={before}
          alt="Before Renovation"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute left-4 bottom-4 bg-stone/80 text-linen text-xs px-3 py-1 rounded font-mono z-10">
        BEFORE
      </div>

      {/* Slider Divider bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-mist z-20 cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle button */}
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-espresso text-linen rounded-full border-2 border-mist flex items-center justify-center shadow-lg active:scale-110 active:bg-deepmist active:text-espresso transition-all pointer-events-auto cursor-grab"
          aria-label="Drag slider to compare before and after photos"
        >
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  );
}
