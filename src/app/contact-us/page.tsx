// app/contact/page.tsx (Next.js 13+ App Router)

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/stacked-waves-haikei.svg')" }}
    >
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
            Let’s get in touch
          </h2>
          <p className="text-base md:text-lg mb-6 text-blue-100 leading-relaxed">
            We'd love to hear from you. Fill out the form and our team will get
            back to you as soon as possible.
          </p>
          <div className="mt-6 space-y-3 text-sm md:text-base">
            <p>📍Indonesia, Jawa Barat, Kota Bekasi, Bekasi Barat</p>
            <p>
              <a
                href="mailto:Solid@gmail.com"
                className="text-blue-200 hover:text-white underline transition"
              >
                📧 Solid@gmail.com
              </a>
            </p>
            <p>📞+62 812-3456-7890</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-10 bg-white">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}