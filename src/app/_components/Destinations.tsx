/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, MapPin } from "lucide-react";

const MALAYSIA_FLAG_URL = "https://flagcdn.com/my.svg";

const MalaysiaFlag = ({ className = "h-4 w-6" }: { className?: string }) => (
  <img
    src={MALAYSIA_FLAG_URL}
    alt="Malaysia flag"
    className={className}
    loading="lazy"
  />
);

const malaysianDestinations = [
  {
    name: "Kuala Lumpur",
    university: "Home to University of Malaya & many top institutions",
    image:
      "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Major public & private universities",
  },
  {
    name: "Selangor",
    university: "Popular area for Taylor's, Sunway & other private universities",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Modern campuses & student cities",
  },
  {
    name: "Penang",
    university: "USM main campus & strong research environment",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Heritage city with strong academics",
  },
  {
    name: "Johor Bahru",
    university: "UTM Johor & growing international campuses",
    image:
      "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Southern education & industry hub",
  },
  {
    name: "Cyberjaya",
    university: "Known for MMU, Limkokwing & tech-focused institutions",
    image:
      "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Malaysia’s technology & innovation city",
  },
  {
    name: "Malacca",
    university: "UTeM, MMU Melaka & historical surroundings",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Study in a UNESCO heritage state",
  },
  {
    name: "Sarawak",
    university: "UNIMAS, Swinburne Sarawak & international mix",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Nature, culture & quality education",
  },
  {
    name: "Sabah",
    university: "UMS Kota Kinabalu & beautiful coastal city",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    universitiesInfo: "Ideal for students who love nature",
  },
];

const Destinations = () => {
  return (
    <section className="rounded-[36px] bg-linear-to-b from-blue-50 to-white px-6 py-12 text-center shadow-[0_25px_70px_rgba(9,24,63,0.08)]">
      <div className="mb-2 flex items-center justify-center gap-3">
        <div className="rounded-full bg-linear-to-r from-blue-600 to-red-600 p-2">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <p className="text-3xl font-bold text-blue-900">
          Study Locations in Malaysia
        </p>
      </div>
      <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
        <span>
          Explore key education hubs where Study Connect guides Bangladeshi students
        </span>
        <MalaysiaFlag className="h-5 w-7 rounded-sm object-cover" />
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {malaysianDestinations.map((destination) => (
          <article
            key={destination.name}
            className="group relative cursor-pointer overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(18,25,66,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_35px_70px_rgba(18,25,66,0.3)]"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white">
                    {destination.universitiesInfo}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {destination.name}
                </h3>
                <p className="mt-1 text-sm text-gray-200">
                  {destination.university}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-blue-300">
                    Talk to us about this city
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-blue-300" />
                </div>
              </div>

              {/* Malaysia Flag Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                <MalaysiaFlag className="h-4 w-6 rounded-[3px] object-cover" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  MALAYSIA
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Statistics Bar */}
      <div className="mt-12 rounded-2xl bg-linear-to-r from-blue-900 to-gray-900 p-8 text-white">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold">10+</div>
            <div className="mt-2 text-sm text-gray-300">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{malaysianDestinations.length}+</div>
            <div className="mt-2 text-sm text-gray-300">Key Study Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">2</div>
            <div className="mt-2 text-sm text-gray-300">Offices (BD & MY)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">2024</div>
            <div className="mt-2 text-sm text-gray-300">Year Study Connect Started</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button className="group inline-flex cursor-pointer items-center gap-3 rounded-md bg-linear-to-r from-blue-600 to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(39,27,124,0.3)] transition-all hover:scale-105 hover:shadow-[0_25px_55px_rgba(39,27,124,0.4)]">
          Ask About the Best City for You
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:scale-110">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </button>
        <p className="text-sm text-gray-500">
          We help you compare Malaysian cities based on budget, lifestyle, and university options.
        </p>
      </div>
    </section>
  );
};

export default Destinations;
