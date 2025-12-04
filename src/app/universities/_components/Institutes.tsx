/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const UniversityItem = ({ name, logo }: { name: string; logo: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group cursor-pointer flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 hover:-translate-y-1">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe0ef] bg-[#f8f9ff] text-xs font-semibold text-[#61708c] transition-all duration-300 group-hover:border-[#4a1cff] group-hover:bg-[#4a1cff]/10 overflow-hidden">
        {logo && logo.trim() !== "" && !imageError ? (
          <img 
            src={logo} 
            alt={name} 
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-lg">🎓</span>
        )}
      </span>
      <p className="text-sm font-semibold text-[#0f172a] transition-colors duration-300 group-hover:text-[#4a1cff]">{name}</p>
    </div>
  );
};

const regions = [
  {
    country: "Austria",
    universities: [
      { name: "University of Vienna", logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/University_of_Vienna_seal.svg" },
      { name: "FH Joanneum University of Applied Sciences", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/FH_Joanneum_logo.svg" },
      { name: "Vienna University of Technology", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/TU_Wien_logo.svg" },
      { name: "IBS International Business School Vienna", logo: "" },
      { name: "Vienna University of Economics and Business", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Wirtschaftsuniversit%C3%A4t_Wien_logo.svg" },
      { name: "Graz University of Technology", logo: "https://upload.wikimedia.org/wikipedia/en/f/f6/TU_Graz_logo.svg" },
      { name: "Johannes Kepler University Linz", logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Johannes_Kepler_University_Linz_logo.svg" },
      { name: "University of Salzburg", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/University_of_Salzburg_logo.svg" },
      { name: "University of Graz", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/University_of_Graz_logo.svg" },
      { name: "Webster Vienna Private University", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Webster_University_logo.svg" },
    ],
  },
  {
    country: "UK",
    universities: [
      { name: "University of Oxford", logo: "" },
      { name: "University of Cambridge", logo: "" },
      { name: "Imperial College London", logo: "" },
      { name: "London School of Economics", logo: "" },
      { name: "King's College London", logo: "" },
      { name: "University College London", logo: "" },
      { name: "University of Edinburgh", logo: "" },
      { name: "University of Manchester", logo: "" },
      { name: "University of Warwick", logo: "" },
      { name: "University of Bristol", logo: "" },
      { name: "University of Glasgow", logo: "" },
      { name: "University of Birmingham", logo: "" },
    ],
  },
  {
    country: "Australia",
    universities: [
      { name: "University of Melbourne", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/University_of_Melbourne_coat_of_arms.svg" },
      { name: "The University of Sydney", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/The_University_of_Sydney_logo.svg" },
      { name: "Australian National University", logo: "" },
      { name: "University of Queensland", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/University_of_Queensland_arms.svg" },
      { name: "Monash University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Monash_University_logo.svg/512px-Monash_University_logo.svg.png" },
      { name: "University of New South Wales", logo: "" },
      { name: "University of Western Australia", logo: "" },
      { name: "University of Adelaide", logo: "" },
      { name: "Swinburne University of Technology", logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Swinburne_University_of_Technology_logo.svg" },
      { name: "CQ University", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/CQU_logo_2017.png" },
    ],
  },
  {
    country: "USA",
    universities: [
      { name: "Harvard University", logo: "" },
      { name: "Massachusetts Institute of Technology", logo: "" },
      { name: "Stanford University", logo: "" },
      { name: "University of California, Berkeley", logo: "" },
      { name: "Yale University", logo: "" },
      { name: "Princeton University", logo: "" },
      { name: "Columbia University", logo: "" },
      { name: "University of Chicago", logo: "" },
      { name: "University of Pennsylvania", logo: "" },
      { name: "Cornell University", logo: "" },
      { name: "New York University", logo: "" },
      { name: "University of Southern California", logo: "" },
    ],
  },
  {
    country: "Canada",
    universities: [
      { name: "University of Toronto", logo: "" },
      { name: "McGill University", logo: "" },
      { name: "University of British Columbia", logo: "" },
      { name: "University of Alberta", logo: "" },
      { name: "McMaster University", logo: "" },
      { name: "University of Montreal", logo: "" },
      { name: "University of Waterloo", logo: "" },
      { name: "Queen's University", logo: "" },
      { name: "University of Calgary", logo: "" },
      { name: "Simon Fraser University", logo: "" },
    ],
  },
  {
    country: "Germany",
    universities: [
      { name: "Technical University of Munich", logo: "" },
      { name: "Ludwig Maximilian University", logo: "" },
      { name: "Heidelberg University", logo: "" },
      { name: "Humboldt University of Berlin", logo: "" },
      { name: "University of Freiburg", logo: "" },
      { name: "RWTH Aachen University", logo: "" },
      { name: "University of Göttingen", logo: "" },
      { name: "University of Hamburg", logo: "" },
      { name: "Free University of Berlin", logo: "" },
      { name: "University of Stuttgart", logo: "" },
    ],
  },
  {
    country: "France",
    universities: [
      { name: "Sorbonne University", logo: "" },
      { name: "École Normale Supérieure", logo: "" },
      { name: "École Polytechnique", logo: "" },
      { name: "University of Paris", logo: "" },
      { name: "Sciences Po", logo: "" },
      { name: "CentraleSupélec", logo: "" },
      { name: "University of Lyon", logo: "" },
      { name: "University of Strasbourg", logo: "" },
      { name: "Aix-Marseille University", logo: "" },
      { name: "University of Toulouse", logo: "" },
    ],
  },
  {
    country: "Netherlands",
    universities: [
      { name: "University of Amsterdam", logo: "" },
      { name: "Delft University of Technology", logo: "" },
      { name: "Utrecht University", logo: "" },
      { name: "Leiden University", logo: "" },
      { name: "Erasmus University Rotterdam", logo: "" },
      { name: "University of Groningen", logo: "" },
      { name: "VU Amsterdam", logo: "" },
      { name: "Eindhoven University of Technology", logo: "" },
      { name: "Tilburg University", logo: "" },
      { name: "Maastricht University", logo: "" },
    ],
  },
  {
    country: "Sweden",
    universities: [
      { name: "Karolinska Institute", logo: "" },
      { name: "KTH Royal Institute of Technology", logo: "" },
      { name: "Lund University", logo: "" },
      { name: "Uppsala University", logo: "" },
      { name: "Stockholm University", logo: "" },
      { name: "University of Gothenburg", logo: "" },
      { name: "Chalmers University of Technology", logo: "" },
      { name: "Linköping University", logo: "" },
    ],
  },
  {
    country: "New Zealand",
    universities: [
      { name: "University of Auckland", logo: "" },
      { name: "University of Otago", logo: "" },
      { name: "Victoria University of Wellington", logo: "" },
      { name: "University of Canterbury", logo: "" },
      { name: "Massey University", logo: "" },
      { name: "University of Waikato", logo: "" },
      { name: "Auckland University of Technology", logo: "" },
      { name: "Lincoln University", logo: "" },
    ],
  },
];

const InstitutesSection = () => {
  return (
    <section className="bg-[#f5f6ff] pb-20">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]" />
      <div className="relative -mt-16 mx-auto max-w-6xl space-y-10 rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_70px_rgba(10,14,50,0.15)]">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#111b33]">Institutions</h2>
        </div>
        {regions.map((region) => (
          <div key={region.country} className="rounded-3xl border border-[#e5e8f4] bg-white shadow-[0_15px_45px_rgba(15,18,63,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,18,63,0.12)]">
            <div className="rounded-t-3xl bg-linear-to-r from-[#0b2747] to-[#1e3a5f] px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:from-[#4a1cff] hover:to-[#6d28d9]">
              🎓 {region.country}
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {region.universities.map((uni) => (
                <UniversityItem key={uni.name} {...uni} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstitutesSection;
