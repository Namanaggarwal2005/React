import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      
      {/* Big 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-orange-600">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">
        Oops! Page not found
      </p>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-200"
      >
        Go Back Home
      </Link>

      {/* Optional Illustration */}
      <div className="mt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="404 illustration"
          className="w-64 opacity-90"
        />
      </div>
    </div>
  );
}