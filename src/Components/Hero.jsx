

export function Hero() {
    return (

        <div className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #405C59 100%), url("/assets/imagenHero.jpg")'
            }}>

            <div className="absolute inset-0 bg-black bg-opacity-50">
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-6xl font-bold mb-4">EXPLORE THE<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> WORLD</span></h1>
                <p className="text-xl mb-8">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
            </div>
        </div>
    )
}

