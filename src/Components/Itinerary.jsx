import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraryAsync } from "../../store/action/itinerariesAction";
import { ButtonSecundary } from "./ButtonSecudary";

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
  if (!itineraries.length) return <div className="mb-6"><p className="text-center text-white mt-10 text-3xl border bg-gray-800 rounded-lg p-4">There are no itineraries available for this city.</p></div>

  return (
    <>
      <div>
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white my-7 text-center h-20">Itineraries</h2>
      </div>
      <div className="flex flex-wrap justify-center min-h-full md:h-auto gap-7">
        {itineraries.map((itinerary) => {
          const { _id, author, activities, hashtags, price, duration } = itinerary;

          return (
            <div key={_id} className="relative w-full sm:w-80 md:w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-8 flex flex-col">
              <button className="absolute right-4 top-4">
                <span className="material-symbols-outlined">thumb_up</span>
              </button>

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

              <div className="p-4 space-y-2 flex-grow">
                {activities.map((activity, index) => (
                  <div key={activity._id || index} className="rounded-lg bg-gray-50 overflow-hidden shadow-sm">
                    <img className="w-full h-40 sm:h-64 object-cover" src={activity.photo} alt={activity.name} />
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-gray-700">{activity.name}</h3>
                      <p className="text-gray-600 text-sm h-10">{activity.description}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-gray-50 px-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined">payments</span>
                    <span className="text-gray-600 mr-3">{price}$</span>
                    <span className="material-symbols-outlined">schedule</span>
                    <span className="text-gray-600">{duration}hours</span>
                  </div>
                </div>

                {hashtags && hashtags.length > 0 && (
                  <div className="flex flex-wrap mt-4">
                    {hashtags.map((tag, index) => (
                      <span key={index} className="m-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex flex-row">

                  <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full mr-3">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>

                  <input
                    type="text"
                    className="w-auto px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Add a comment..."
                    disabled
                  />
                </div>
              </div>

              <div className="p-4 text-end mt-auto">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                  View more
                  <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>



  );
}
