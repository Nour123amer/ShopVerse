export default function Newsletter() {
  return (
    <section className="px-4 md:px-8 py-10 bg-[#f5f5f5]">
      <div className="bg-[#0F172A] rounded-3xl py-16 px-6 md:px-12 text-center text-white">
        
        <div className="text-4xl mb-5">✉️</div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Join the Inner Circle
        </h2>

        <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
          Subscribe to receive early access to new collections,
          exclusive event invitations, and personalized style
          recommendations.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mt-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-xl bg-[#1E293B] outline-none"
          />

          <button className="bg-white cursor-pointer text-black px-8 py-4 rounded-xl font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}