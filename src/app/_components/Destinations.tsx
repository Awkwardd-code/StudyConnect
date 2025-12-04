import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    name: "Austria",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "UK",
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "USA",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hungary",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cyprus",
    image:
      "https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "South Korea",
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=900&q=80",
  },
];

const Destinations = () => {
  return (
    <section className="rounded-[36px] bg-[#eef3ff] px-6 py-10 text-center shadow-[0_25px_70px_rgba(9,24,63,0.08)]">
      <p className="text-3xl font-bold text-[#0a0f2c]">Study Destinations</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="group relative overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(18,25,66,0.2)] cursor-pointer"
          >
            <div
              className="h-64 w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="flex h-full w-full items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40">
                <p className="text-2xl font-semibold text-white drop-shadow transition-transform duration-300 group-hover:scale-105">
                  {destination.name}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="group cursor-pointer inline-flex items-center gap-3 rounded-full bg-[#4226ff] px-6 py-3 text-white shadow-[0_20px_45px_rgba(39,27,124,0.3)]">
          All Countries
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#12004d] transition group-hover:translate-x-1">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Destinations;
