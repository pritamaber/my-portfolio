export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-roboto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-dancing mb-6">
        ☎️ Contact Me
      </h1>

      <hr className="border-gray-300 mb-6" />

      <section className="bg-white shadow-md rounded-xl p-6 md:p-10">
        <p className="text-lg mb-4">
          <strong>Name:</strong> Pritam Das
        </p>
        <p className="text-lg mb-4">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:pritam.aber@gmail.com"
            className="text-red-600 underline hover:text-red-800"
          >
            pritam.aber@gmail.com
          </a>
        </p>
        <p className="text-lg mb-4">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+916291616198"
            className="text-gray-800 underline hover:text-black"
          >
            +91 62916 16198
          </a>
        </p>
        <p className="text-lg">
          <strong>Location:</strong> Kolkata, India 🇮🇳
        </p>
      </section>
    </div>
  );
}
