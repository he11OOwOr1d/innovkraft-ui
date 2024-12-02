import Image from 'next/image';
import Navbar from './navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-lime-100 to-lime-200 text-gray-900">
      <Navbar />
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-lime-200/70 to-lime-300/70">
        <Image
          src="/abhyanjana.png"
          alt="Natural hair care products"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 filter brightness-85 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-lime-900/30 to-black/20" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Abhyanjana
          </h1>
          <p className="mt-6 text-xl md:text-3xl font-light tracking-wide drop-shadow-md">
            Where nature meets a mother&#39;s care
          </p>
          <button className="mt-12 px-12 py-4 bg-lime-600/90 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-lime-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
            Discover Our Products
          </button>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-lime-800 drop-shadow-sm">
          Our Story
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-6 backdrop-blur-sm bg-lime-50/50 p-8 rounded-2xl shadow-lg">
          Abhyanjana is a tradition of care passed through generations. It
          originated from a grandmother who crafted her hair care rituals and
          later passed on these treasured recipes to her daughter, who
          wholeheartedly devoted herself to perfecting them when her son faced
          problems with self-care.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed backdrop-blur-sm bg-lime-50/50 p-8 rounded-2xl shadow-lg">
          This dedication eventually led to the creation of Abhyanjana, a
          testament to the profound care and compassion that only a mother&#39;s
          touch can bestow.
        </p>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-lime-100/80 via-lime-50/80 to-lime-50/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-lime-800 drop-shadow-sm">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Natural Ingredients',
                description:
                  'Thoughtfully picked, organically sourced ingredients for your well-being.',
              },
              {
                icon: '❤️',
                title: 'Made with Love',
                description:
                  'Homemade products crafted with a mother&#39;s care and compassion.',
              },
              {
                icon: '✨',
                title: 'Quality Assured',
                description:
                  'We ensure the highest quality standards in all our products.',
              },
            ].map((mission, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-lime-50/90 to-lime-100/90 backdrop-blur-sm 
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-lime-100/50"
              >
                <div className="text-5xl mb-6 text-lime-600 group-hover:scale-110 transition-transform duration-300">{mission.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-lime-800">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-gradient-to-br from-lime-50 to-lime-50">
        <h2 className="text-4xl font-bold mb-12 text-center text-lime-800 drop-shadow-sm">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              src: '/image-1.jpg',
              title: 'Samasti Hair Oil ‐ Natural hair oil for hair growth (100ML)',
            },
            {
              src: '/image-2.jpg',
              title: 'Abhyanjana Haircare Kit – Best hair care kit for Hair Growth',
            },
            {
              src: '/image3.jpg',
              title: 'Ukti – Natural Hair Scrub (100 g)',
            },
          ].map((product, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg bg-white/95 backdrop-blur-sm hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 group border border-lime-100/50"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={product.src}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-lime-800">{product.title}</h3>
                <p className="text-gray-600 mb-6">Natural, nourishing, and made with love.</p>
                <button className="w-full px-6 py-3 text-lime-700 border-2 border-lime-600 rounded-full 
                hover:bg-lime-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-lime-700 via-lime-700 to-lime-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Experience the Abhyanjana Difference</h2>
        <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Discover our range of natural hair care products, crafted with love
          and tradition.
        </p>
        <button className="px-12 py-4 bg-white/90 backdrop-blur-sm text-lime-700 font-semibold rounded-full 
        hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
          Shop Now
        </button>
      </section>
    </div>
  );
}
