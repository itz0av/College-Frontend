import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse position
      const { clientX, clientY } = e;

      // Apply to the element
      followerRef.current.style.left = `${clientX}px`;
      followerRef.current.style.top = `${clientY}px`;
    };

    // Listen to mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={followerRef}
        className="w-6 h-6 bg-red-500 rounded-full fixed pointer-events-none transition-all duration-100"
        style={{ left: 0, top: 0 }}
      />
      {/* Your page content goes here */}
    </div>
  );
};

export default CursorFollower;
