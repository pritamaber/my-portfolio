export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-roboto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing mb-6">
        ☎️ Contact Me
      </h1>

      <hr className="border-gray-300 mb-6" />

      <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-lg p-6 md:p-8 space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Full Name</p>
          <p className="text-lg font-medium text-gray-800">Pritam Das</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Email</p>
          <a
            href="mailto:pritam.aber@gmail.com"
            className="text-red-600 hover:underline hover:text-red-800 text-lg"
          >
            pritam.aber@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Phone</p>
          <a
            href="tel:+916291616198"
            className="text-gray-800 hover:underline text-lg"
          >
            +91 62916 16198
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Location</p>
          <p className="text-lg font-medium">Kolkata, India 🇮🇳</p>
        </div>
      </div>
    </div>
  );
}
