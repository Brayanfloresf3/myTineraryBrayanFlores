import { Link, NavLink } from "react-router-dom";
import { ButtonSecundary } from "./ButtonSecudary";

export function Card() {
  return (
    <div
      className="group max-w-sm h-64 rounded-lg shadow-md p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/7566890/pexels-photo-7566890.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      {/* Overlay con efecto hover */}
      <div className="absolute inset-0 rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200"></div>

      {/* Contenido */}
      <div className="relative z-10 text-white">
        <h5 className="text-2xl font-bold tracking-tight mb-2">
          EGIPTO
        </h5>
        <p className="font-normal mb-4">
          EL CAIRO
        </p>
       
      </div>
      <Link to={'/details'}>
      <ButtonSecundary name="Read more" className=" absolute bottom-3 right-2" icon={<svg
                className="ml-2 h-5 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>}/>
       </Link>
    </div>
  );
}


