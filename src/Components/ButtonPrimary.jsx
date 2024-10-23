export function ButtonPrimary({ name, onClick, className, icon }) {
    return (
        <button
            type="button"
            className={`flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg px-2 py-2 text-center mt-1 mb-1 gap-2 ${className}`}
            onClick={onClick}> {name} {icon}
        </button>
    );
}
