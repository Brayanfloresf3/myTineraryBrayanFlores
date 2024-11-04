import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "../Components/ButtonPrimary";

export function NoFound() {
  return (
    <div className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
          <p className="text-xl font-semibold text-teal-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-teal-600 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            <NavLink to="/">
              <ButtonPrimary name="Go home" className={"inline-flex items-center justify-center px-5 py-2.5"}/>
            </NavLink>
          </div>
        </div>
        </div>
  );
}
