import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'Home' },
  { to: '/Cities', text: 'Cities' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="container mx-auto text-center">
      <nav className="mb-4">
          <ul className="flex justify-center space-x-6 font-bold">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink to={route.to} className="text-gray-400 hover:text-white">
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>


        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.937 2.858 7.188 6.579 7.878v-5.569h-1.98v-2.309h1.98V6.001c0-1.959 1.156-3.038 2.923-3.038.854 0 1.746.15 1.746.15v1.943h-.984c-.968 0-1.271.602-1.271 1.217v1.428h2.164l-.346 2.309h-1.818V16c3.72-.69 6.579-3.941 6.579-7.878 0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334v-.428a6.676 6.676 0 0 0 1.637-1.697 6.533 6.533 0 0 1-1.885.518A3.292 3.292 0 0 0 15.447.244a6.574 6.574 0 0 1-2.084.797A3.286 3.286 0 0 0 7.88 4.05 9.325 9.325 0 0 1 1.114.597a3.286 3.286 0 0 0 1.017 4.383A3.27 3.27 0 0 1 .64 4.348v.041a3.285 3.285 0 0 0 2.633 3.218 3.29 3.29 0 0 1-.864.115 3.295 3.295 0 0 1-.619-.057 3.286 3.286 0 0 0 3.067 2.28A6.588 6.588 0 0 1 .781 13.58 6.32 6.32 0 0 1 0 13.555a9.286 9.286 0 0 0 5.026 1.472"/>
            </svg>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0c2.21 0 2.481.01 3.354.048 2.026.093 2.972.42 3.667.884a5.42 5.42 0 0 1 1.798 1.798c.464.695.79 1.64.884 3.667.037.872.048 1.144.048 3.354s-.01 2.482-.048 3.354c-.093 2.026-.42 2.972-.884 3.667a5.42 5.42 0 0 1-1.798 1.798c-.695.464-1.64.79-3.667.884-.873.037-1.145.048-3.354.048s-2.482-.01-3.354-.048c-2.026-.093-2.972-.42-3.667-.884a5.42 5.42 0 0 1-1.798-1.798c-.464-.695-.79-1.64-.884-3.667C.01 10.482 0 10.21 0 8s.01-2.481.048-3.354c.093-2.026.42-2.972.884-3.667A5.42 5.42 0 0 1 2.73.48c.695-.464 1.64-.79 3.667-.884C5.519.01 5.791 0 8 0zm0 1.527c-2.157 0-2.42.009-3.275.046-1.79.082-2.749.37-3.354.768a3.894 3.894 0 0 0-1.35 1.35c-.398.605-.686 1.564-.768 3.354-.037.854-.046 1.117-.046 3.275s.009 2.42.046 3.275c.082 1.79.37 2.749.768 3.354a3.894 3.894 0 0 0 1.35 1.35c.605.398 1.564.686 3.354.768.854.037 1.117.046 3.275.046s2.42-.009 3.275-.046c1.79-.082 2.749-.37 3.354-.768a3.894 3.894 0 0 0 1.35-1.35c.398-.605.686-1.564.768-3.354.037-.854.046-1.117.046-3.275s-.009-2.42-.046-3.275c-.082-1.79-.37-2.749-.768-3.354a3.894 3.894 0 0 0-1.35-1.35c-.605-.398-1.564-.686-3.354-.768-.854-.037-1.117-.046-3.275-.046zM8 4.128c-2.146 0-3.872 1.726-3.872 3.872s1.726 3.872 3.872 3.872 3.872-1.726 3.872-3.872S10.146 4.128 8 4.128zm0 1.527a2.345 2.345 0 1 1 0 4.69 2.345 2.345 0 0 1 0-4.69zm4.872-1.745a.945.945 0 1 1 0 1.89.945.945 0 0 1 0-1.89z"/>
            </svg>
          </a>
        </div>

        <div className="mb-4 mx-4">
          <p className="text-sm font-bold">Contact us: support@myitinerary.com | Phone: +123 456 7890</p>
          <p className="text-sm font-bold">1234 Travel Lane, Adventure City, World</p>
        </div>

        <p className="text-sm font-bold">© 2024 My Tinerary. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
