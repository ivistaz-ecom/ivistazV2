"use client";
import React from "react";

const FloatingButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 right-5 z-[9999] bg-[#FF0000] text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-[#d62828] transition-colors"
    >
      Tell Us Your Requirement
    </button>
  );
};

export default FloatingButton;
