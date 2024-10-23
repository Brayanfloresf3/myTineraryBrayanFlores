export function Details() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl font-bold text-white mb-4">Page Under Construction</h1>
        <p className="text-lg text-white 0 mb-8">We are working to bring you something amazing. Come back soon!</p>

      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round"
 strokeLinejoin="round" d="M13 16h-1v-4h1m0-4h-1m-3 8H7v-4h3v4zm0-4H7V8h3v4zm6 4h-3v-4h3v4zm0-4h-3V8h3v4z" />
        </svg>

        {/* Link to the main page */}
        <a href="/" className="mt-8 text-blue-500 hover:underline">Back to the main page</a>
      </div>
    </>
  );
}
