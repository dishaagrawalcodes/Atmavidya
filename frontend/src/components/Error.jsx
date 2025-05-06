const Error = () => {
  return (
    <div className="flex p-5 flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
        <p className="mt-4 text-2xl font-semibold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-lg">
          It might have been removed or you may have mistyped the URL.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-white text-indigo-800 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition-all duration-300"
        >
          Go Home
        </button>
      </div>
      <div className="absolute bottom-10 text-sm opacity-75">
        <p>
          Need help?
          <a href="/contact" className="underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
