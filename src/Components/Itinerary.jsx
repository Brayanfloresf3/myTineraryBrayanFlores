import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraryAsync } from "../../store/action/itinerariesAction";

export function Itinerary() {
  const { id: cityId } = useParams();
  const dispatch = useDispatch();
  const { itineraries, loading, error } = useSelector((state) => state.itineraries);

  useEffect(() => {
    if (cityId) {
      dispatch(fetchItineraryAsync(cityId));
    }
  }, [cityId, dispatch]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!itineraries.length) return <p className="text-center text-white">No data found for this city.</p>;

  return (
    <>
    <div>
       <h2 className="text-4xl font-bold text-white mb-4 text-center">Itineraries</h2>
    </div>
    <div className="flex flex-wrap justify-center">
     
      {itineraries.map((itinerary) => {
        const { author, activities, hashtags } = itinerary;

        return (
          <div key={itinerary._id} className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4 border border-gray-200">
            {/* Autor */}
            <div className="flex items-center px-4 py-3 bg-gray-50">
              <img
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
                src={author.photo}
                alt={`${author.name} photo`}
              />
              <div className="ml-3">
                <h2 className="text-gray-800 font-semibold">{author.name}</h2>
                <p className="text-sm text-gray-500">Travel Itinerary</p>
              </div>
            </div>

            {/* Actividades */}
            <div className="p-4 space-y-4 w-96">
              {activities.map((activity, index) => (
                <div key={activity._id || index} className="rounded-lg bg-gray-100 overflow-hidden shadow-sm">
                  <img
                    className="w-full h-64 object-cover"
                    src={activity.photo}
                    alt={activity.name}
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-700">{activity.name}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                </div>
              ))}

              {/* Hashtags */}
              {hashtags && hashtags.length > 0 && (
                <div className="flex flex-wrap mt-4">
                  {hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="m-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Botón de "Read more" */}
            <div className="p-4">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              View more
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}
