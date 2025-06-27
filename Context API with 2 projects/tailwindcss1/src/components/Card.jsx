export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg"
        src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-300 mr-1"
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.984 1.566a1 1 0 0 1 1.803 0l2.212 4.48 4.949.719a1 1 0 0 1 .555 1.705l-3.58 3.49.844 4.928a1 1 0 0 1-1.451 1.054L11 16.347l-4.316 2.266a1 1 0 0 1-1.451-1.054l.844-4.928-3.58-3.49a1 1 0 0 1 .555-1.705l4.949-.719 2.212-4.48Z" />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.984 1.566a1 1 0 0 1 1.803 0l2.212 4.48 4.949.719a1 1 0 0 1 .555 1.705l-3.58 3.49.844 4.928a1 1 0 0 1-1.451 1.054L11 16.347l-4.316 2.266a1 1 0 0 1-1.451-1.054l.844-4.928-3.58-3.49a1 1 0 0 1 .555-1.705l4.949-.719 2.212-4.48Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹5999
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
