import React from 'react';

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner z-50">
      <div className="flex justify-around text-sm py-2 text-gray-700">
        <button className="flex flex-col items-center">
          <span>เมนู1</span>
        </button>
        <button className="flex flex-col items-center">
          <span>เมนู2</span>
        </button>
        <button className="flex flex-col items-center">
          <span>เมนู3</span>
        </button>
        <button className="flex flex-col items-center">
          <span>เมนู4</span>
        </button>
        <button className="flex flex-col items-center">
          <span>เมนู5</span>
        </button>
      </div>
    </nav>
  );
}