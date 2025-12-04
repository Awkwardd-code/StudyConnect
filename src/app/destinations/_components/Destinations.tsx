/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const DestinationCard = ({ title, image }: { title: string; image: string }) => {
  const countryName = title.replace('Study in ', '').toLowerCase().replace(/\s+/g, '-');
  
  return (
    <article className="group cursor-pointer overflow-hidden rounded-3xl border border-[#e4e7ff] bg-white shadow-[0_12px_40px_rgba(19,21,66,0.12)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(19,21,66,0.2)] hover:-translate-y-2 hover:border-[#4a1cff]/30">
      <div className="h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#111b33] transition-colors duration-300 group-hover:text-[#4a1cff]">{title}</h3>
        <Link 
          href={`/destinations/${countryName}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4a1cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3a18c7] hover:shadow-[0_15px_35px_rgba(74,28,255,0.45)] hover:-translate-y-1"
        >
          Learn More
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#4a1cff] transition-transform duration-300 group-hover:scale-110">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

const destinations = [
  { title: "Study in Australia", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in USA", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in UK", image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Austria", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Canada", image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Cyprus", image: "https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Hungary", image: "https://images.unsplash.com/photo-1495371667051-68ddcb189a24?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Sweden", image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in South Korea", image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Malaysia", image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Malta", image: "https://images.unsplash.com/photo-1487617776620-731c5840bdba?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Lithuania", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in Denmark", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" },
  { title: "Study in New Zealand", image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=900&q=80" },
];

const DestinationsSection = () => {
  return (
    <section className="bg-[#f5f6ff] pb-20">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]" />
      <div className="relative -mt-16 mx-auto max-w-6xl rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_70px_rgba(10,14,50,0.15)]">
        <div className="text-center">
          <p className="text-4xl font-bold text-[#111b33]">Study Destination</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((item) => (
            <DestinationCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
