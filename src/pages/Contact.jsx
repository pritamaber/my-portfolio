export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-roboto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing dark:text-red-300 mb-6">
        ☎️ Contact Me
      </h1>

      <hr className="border-gray-300 dark:border-gray-600 mb-6" />

      <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all bg-white dark:bg-gray-800">
        {/* Full Name */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Full Name
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Pritam Das
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
          <a
            href="mailto:pritam.aber@gmail.com"
            className="text-red-600 hover:underline hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-lg"
          >
            pritam.aber@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
          <a
            href="tel:+916291616198"
            className="text-gray-800 dark:text-gray-200 hover:underline text-lg"
          >
            +91 62916 16198
          </a>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Location
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Kolkata, India 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
}
