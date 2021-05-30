import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <div className="bg-primary w-full p-4">
      <span>Header</span>
      <ThemeToggle />
    </div>
  );
};

export default Header;
