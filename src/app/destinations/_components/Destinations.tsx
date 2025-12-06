/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const DestinationCard = ({ title, image, description }: { title: string; image: string; description: string }) => {
  const locationSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <article className="group cursor-pointer overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_12px_40px_rgba(59,130,246,0.12)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] hover:-translate-y-2 hover:border-blue-300">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur-sm px-2 py-1">
          <span className="text-sm font-semibold text-white">
            <img
              src="https://flagcdn.com/my.svg"
              alt="Malaysia Flag"
              className="h-2 w-auto mr-1"
            />
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <Link
          href={`/destinations`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(59,130,246,0.45)] hover:-translate-y-1"
        >
          Learn More
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue-700 transition-transform duration-300 group-hover:scale-110">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

const malaysianDestinations = [
  {
    title: "Study in Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    description: "Malaysia's capital city with top universities like University of Malaya and international branch campuses."
  },
  {
    title: "Study in Selangor",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    description: "Home to Taylor's University, Sunway University, and major technology parks near Kuala Lumpur."
  },
  {
    title: "Study in Johor Bahru",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    description: "Southern gateway with Universiti Teknologi Malaysia and international university campuses."
  },
  {
    title: "Study in Penang",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
    description: "Island state with Universiti Sains Malaysia (USM) and vibrant multicultural student life."
  },
  {
    title: "Study in Cyberjaya",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=900&q=80",
    description: "Malaysia's Silicon Valley with Multimedia University and Limkokwing University."
  },
  {
    title: "Study in Malacca",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=900&q=80",
    description: "Historical city with Universiti Teknikal Malaysia Melaka (UTeM) and heritage sites."
  },
  {
    title: "Study in Putrajaya",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=900&q=80",
    description: "Administrative capital with modern infrastructure and government-linked universities."
  },
  {
    title: "Study in Sarawak",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Borneo region with Universiti Malaysia Sarawak (UNIMAS) and unique biodiversity."
  },
  {
    title: "Study in Sabah",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    description: "East Malaysia with Universiti Malaysia Sabah (UMS) and beautiful natural landscapes."
  },
  {
    title: "Study in Negeri Sembilan",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    description: "Home to INTI International University and Nilai University in serene campus environments."
  },
  {
    title: "Study in Perak",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    description: "Northern region with Universiti Pendidikan Sultan Idris (UPSI) and historical significance."
  },
  {
    title: "Study in Pahang",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=900&q=80",
    description: "East coast region with Universiti Malaysia Pahang (UMP) specializing in engineering."
  },
  {
    title: "Study in Kedah",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Northern state with Universiti Utara Malaysia (UUM) focusing on management studies."
  },
  {
    title: "Study in Terengganu",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    description: "Coastal region with Universiti Malaysia Terengganu (UMT) specializing in marine sciences."
  },
  {
    title: "Study in Kelantan",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    description: "Traditional state with Universiti Malaysia Kelantan (UMK) focusing on entrepreneurship."
  },
  {
    title: "Study in Perlis",
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=900&q=80",
    description: "Smallest state with Universiti Malaysia Perlis (UniMAP) specializing in engineering."
  },
];

const DestinationsSection = () => {
  const totalDestinations = malaysianDestinations.length;

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20 px-4 sm:px-6">
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="text-xl">
                <img
                  src="https://flagcdn.com/my.svg"
                  alt="Malaysia Flag"
                  className="h-2 w-auto mr-1"
                />
              </span>
            </div>
            <span className="text-lg font-semibold text-white">Study Locations in Malaysia</span>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 mx-auto max-w-6xl rounded-[36px] bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-blue-600">Malaysia</p>
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Explore Study Locations in Malaysia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the best cities and states in Malaysia for your international education journey
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-blue-700">{totalDestinations} Locations Across Malaysia</span>
            <span className="text-blue-700">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-2 w-auto mr-1"
              />
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {malaysianDestinations.map((item) => (
            <DestinationCard key={item.title} {...item} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-blue-900 to-red-900 p-6 sm:p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">Malaysia Education Network</h3>
            <p className="text-blue-200 mt-2 text-sm sm:text-base">Our comprehensive coverage across Malaysia</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{totalDestinations}</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Study Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">16</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">States & Territories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">100%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Support Coverage</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="group cursor-pointer inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] hover:-translate-y-1">
            <span>Explore All Malaysian Study Options</span>
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Complete guidance for studying in all Malaysian states and major cities
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;