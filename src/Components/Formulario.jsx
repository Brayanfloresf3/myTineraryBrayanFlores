    export function Form() {
    return(
          <div className="bg-white bg-opacity-20 p-6 rounded-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <select className="bg-black bg-opacity-50 text-white p-2 rounded-md">
              <option>Landing Pad</option>
              <option>SEA</option>
              <option>NYC</option>
            </select>
            <select className="bg-black bg-opacity-50 text-white p-2 rounded-md">
              <option>Destination</option>
              <option>Moon</option>
              <option>Mars</option>
            </select>
            <input type="date" className="bg-black bg-opacity-50 text-white p-2 rounded-md" />
            <select className="bg-black bg-opacity-50 text-white p-2 rounded-md">
              <option>1 Adult</option>
              <option>2 Adults</option>
            </select>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Search</button>
          </div>
        
     
    
    )
}