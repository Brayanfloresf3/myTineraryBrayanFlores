import React from 'react';

export function Footer() {
 return (
    <footer className="bg-black text-white py-4 bottom-0">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2024 Spaced. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            
        </div>
      </div>
    </footer>
  );
};