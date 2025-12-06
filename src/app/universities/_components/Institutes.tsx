/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const UniversityItem = ({ name, logo, location, ranking }: { name: string; logo: string; location: string; ranking?: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group cursor-pointer flex items-center gap-3 rounded-xl bg-linear-to-br from-white to-blue-50 px-3 sm:px-4 py-3 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md sm:hover:shadow-lg hover:border-blue-300 sm:hover:-translate-y-1">
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br from-blue-50 to-red-50 p-1.5 sm:p-2 border border-blue-200 transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110 group-hover:from-blue-100 group-hover:to-red-100">
        {logo && logo.trim() !== "" && !imageError ? (
          <img
            src={logo}
            alt={name}
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-lg sm:text-xl">🎓</span>
        )}
        <span className="absolute -top-1 -right-1">
          <img
            src="https://flagcdn.com/my.svg"
            alt="Malaysia Flag"
            className="h-2.5 w-auto"
          />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-semibold text-blue-900 truncate transition-colors duration-300 group-hover:text-blue-700">{name}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 truncate">{location}</p>
          {ranking && (
            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full whitespace-nowrap ml-2">
              {ranking}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const malaysianRegions = [
  {
    region: "Kuala Lumpur & Selangor",
    description: "Capital region with top-ranked universities",
    universities: [
      {
        name: "University of Malaya (UM)",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Universiti_Malaya_Logo.svg",
        location: "Kuala Lumpur",
        ranking: "#1 in Malaysia"
      },
      {
        name: "University of Nottingham Malaysia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Nottingham_logo.svg",
        location: "Semenyih, Selangor",
        ranking: "QS World Ranking"
      },
      {
        name: "Taylor's University",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Taylor%27s_University_Logo.svg",
        location: "Subang Jaya, Selangor",
        ranking: "#1 Private University"
      },
      {
        name: "Sunway University",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7d/Sunway_University_logo.svg",
        location: "Bandar Sunway, Selangor",
        ranking: "QS 5-Star"
      },
      {
        name: "Asia Pacific University (APU)",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/85/Asia_Pacific_University_logo.svg",
        location: "Bukit Jalil, Kuala Lumpur",
        ranking: "Technology Focus"
      },
      {
        name: "INTI International University",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/INTI_International_University_logo.svg",
        location: "Nilai, Negeri Sembilan",
        ranking: "Laureate Network"
      },
      {
        name: "Universiti Putra Malaysia (UPM)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Universiti_Putra_Malaysia_logo.svg",
        location: "Serdang, Selangor",
        ranking: "Top Research"
      },
      {
        name: "Universiti Kebangsaan Malaysia (UKM)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Universiti_Kebangsaan_Malaysia_logo.svg",
        location: "Bangi, Selangor",
        ranking: "National University"
      },
      {
        name: "International Islamic University Malaysia (IIUM)",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/International_Islamic_University_Malaysia_logo.svg",
        location: "Gombak, Selangor",
        ranking: "Islamic Studies"
      },
      {
        name: "UCSI University",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/UCSI_University_logo.svg",
        location: "Kuala Lumpur",
        ranking: "Creative Arts"
      },
      {
        name: "SEGi University",
        logo: "",
        location: "Kota Damansara, Selangor",
        ranking: "Medical Focus"
      },
      {
        name: "Management & Science University (MSU)",
        logo: "",
        location: "Shah Alam, Selangor",
        ranking: "Medical Focus"
      },
    ],
  },
  {
    region: "Johor Region",
    description: "Southern region with engineering excellence",
    universities: [
      {
        name: "Universiti Teknologi Malaysia (UTM)",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/Universiti_Teknologi_Malaysia_logo.svg",
        location: "Skudai, Johor",
        ranking: "Top Engineering"
      },
      {
        name: "University of Southampton Malaysia",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/University_of_Southampton_coat_of_arms.svg",
        location: "Iskandar Puteri, Johor",
        ranking: "UK Branch Campus"
      },
      {
        name: "Raffles University",
        logo: "",
        location: "Iskandar Puteri, Johor",
        ranking: "Design & Business"
      },
      {
        name: "University of Reading Malaysia",
        logo: "",
        location: "Iskandar Puteri, Johor",
        ranking: "UK Branch Campus"
      },
      {
        name: "Newcastle University Medicine Malaysia",
        logo: "",
        location: "Iskandar Puteri, Johor",
        ranking: "Medical School"
      },
      {
        name: "University of Technology Sarawak (UTS)",
        logo: "",
        location: "Johor Bahru",
        ranking: "Technology Focus"
      },
    ],
  },
  {
    region: "Penang & Northern Region",
    description: "Island state with research universities",
    universities: [
      {
        name: "Universiti Sains Malaysia (USM)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Universiti_Sains_Malaysia_logo.svg",
        location: "Gelugor, Penang",
        ranking: "Research University"
      },
      {
        name: "Wawasan Open University",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f3/Wawasan_Open_University_logo.svg",
        location: "George Town, Penang",
        ranking: "Distance Learning"
      },
      {
        name: "Han Chiang University",
        logo: "",
        location: "Penang",
        ranking: "Chinese Heritage"
      },
      {
        name: "Universiti Utara Malaysia (UUM)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Universiti_Utara_Malaysia_logo.svg",
        location: "Sintok, Kedah",
        ranking: "Management Focus"
      },
      {
        name: "Universiti Malaysia Perlis (UniMAP)",
        logo: "",
        location: "Perlis",
        ranking: "Engineering Focus"
      },
      {
        name: "AIMST University",
        logo: "",
        location: "Kedah",
        ranking: "Medical & Dental"
      },
    ],
  },
  {
    region: "Cyberjaya & Putrajaya",
    description: "Technology and administrative hub",
    universities: [
      {
        name: "Multimedia University (MMU)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Multimedia_University_logo.svg",
        location: "Cyberjaya, Selangor",
        ranking: "ICT University"
      },
      {
        name: "Limkokwing University",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Limkokwing_University_logo.svg",
        location: "Cyberjaya, Selangor",
        ranking: "Creative University"
      },
      {
        name: "University of Cyberjaya",
        logo: "",
        location: "Cyberjaya, Selangor",
        ranking: "Medical & Health"
      },
      {
        name: "Al-Madinah International University (MEDIU)",
        logo: "",
        location: "Putrajaya",
        ranking: "Islamic University"
      },
      {
        name: "Malaysia University of Science & Technology (MUST)",
        logo: "",
        location: "Petaling Jaya",
        ranking: "Technology Focus"
      },
    ],
  },
  {
    region: "Sarawak & Sabah (East Malaysia)",
    description: "Borneo region universities",
    universities: [
      {
        name: "Universiti Malaysia Sarawak (UNIMAS)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Universiti_Malaysia_Sarawak_logo.svg",
        location: "Kota Samarahan, Sarawak",
        ranking: "Borneo University"
      },
      {
        name: "Swinburne University of Technology Sarawak",
        logo: "",
        location: "Kuching, Sarawak",
        ranking: "Australian Branch"
      },
      {
        name: "University College of Technology Sarawak (UCTS)",
        logo: "",
        location: "Sibu, Sarawak",
        ranking: "Technical Focus"
      },
      {
        name: "Universiti Malaysia Sabah (UMS)",
        logo: "",
        location: "Kota Kinabalu, Sabah",
        ranking: "Borneo University"
      },
      {
        name: "Universiti Teknologi Mara (UiTM) Sabah",
        logo: "",
        location: "Sabah",
        ranking: "Public University"
      },
    ],
  },
  {
    region: "International Branch Campuses",
    description: "Global universities with Malaysian campuses",
    universities: [
      {
        name: "Monash University Malaysia",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Monash_University_logo.svg",
        location: "Sunway City, Selangor",
        ranking: "Australian Top 50"
      },
      {
        name: "University of Nottingham Malaysia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Nottingham_logo.svg",
        location: "Semenyih, Selangor",
        ranking: "UK Russell Group"
      },
      {
        name: "Curtin University Malaysia",
        logo: "",
        location: "Miri, Sarawak",
        ranking: "Australian University"
      },
      {
        name: "Swinburne University of Technology Sarawak",
        logo: "",
        location: "Kuching, Sarawak",
        ranking: "Australian University"
      },
      {
        name: "University of Southampton Malaysia",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/University_of_Southampton_coat_of_arms.svg",
        location: "Iskandar Puteri, Johor",
        ranking: "UK Russell Group"
      },
      {
        name: "University of Reading Malaysia",
        logo: "",
        location: "Iskandar Puteri, Johor",
        ranking: "UK University"
      },
      {
        name: "Xiamen University Malaysia",
        logo: "",
        location: "Sepang, Selangor",
        ranking: "Chinese University"
      },
      {
        name: "Newcastle University Medicine Malaysia",
        logo: "",
        location: "Iskandar Puteri, Johor",
        ranking: "UK Medical School"
      },
    ],
  },
  {
    region: "Specialized & Technical Universities",
    description: "Focused institutions for specific fields",
    universities: [
      {
        name: "Universiti Teknologi MARA (UiTM)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Universiti_Teknologi_MARA_logo.svg",
        location: "Nationwide Campuses",
        ranking: "Largest University"
      },
      {
        name: "International Medical University (IMU)",
        logo: "",
        location: "Kuala Lumpur",
        ranking: "Medical University"
      },
      {
        name: "Perdana University",
        logo: "",
        location: "Serdang, Selangor",
        ranking: "Medical Focus"
      },
      {
        name: "Malaysian Institute of Art (MIA)",
        logo: "",
        location: "Kuala Lumpur",
        ranking: "Arts Institute"
      },
      {
        name: "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
        logo: "",
        location: "Kuala Lumpur",
        ranking: "Technical Education"
      },
      {
        name: "Binary University",
        logo: "",
        location: "Puchong, Selangor",
        ranking: "Entrepreneurship"
      },
      {
        name: "Quest International University",
        logo: "",
        location: "Ipoh, Perak",
        ranking: "Medical & Health"
      },
      {
        name: "Mahsa University",
        logo: "",
        location: "Kuala Lumpur",
        ranking: "Medical Focus"
      },
      {
        name: "Lincoln University College",
        logo: "",
        location: "Petaling Jaya",
        ranking: "American System"
      },
      {
        name: "City University Malaysia",
        logo: "",
        location: "Petaling Jaya",
        ranking: "Professional Courses"
      },
    ],
  },
];

const InstitutesSection = () => {
  const [openRegionIndex, setOpenRegionIndex] = useState<number | null>(0);

  const toggleRegion = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setOpenRegionIndex(openRegionIndex === index ? null : index);
    }
  };

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-10 sm:pb-20 px-4 sm:px-6">
      <div className="h-16 sm:h-20 md:h-24 rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center px-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover"
              />
            </span>
            <span className="text-sm sm:text-lg font-semibold text-white text-center">
              Partner Malaysian Universities
            </span>
          </div>
        </div>
      </div>

      <div className="relative -mt-8 sm:-mt-12 md:-mt-16 mx-auto max-w-6xl space-y-6 sm:space-y-8 md:space-y-10 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 shadow-[0_15px_40px_rgba(59,130,246,0.1)] sm:shadow-[0_20px_60px_rgba(59,130,246,0.12)] md:shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-1 w-4 sm:w-6 md:w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-blue-600">Our Partners</p>
            <div className="h-1 w-4 sm:w-6 md:w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 px-2">
            Top Universities in Malaysia
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            We partner with {malaysianRegions.reduce((total, region) => total + region.universities.length, 0)}+ prestigious universities across Malaysia
          </p>
        </div>

        {malaysianRegions.map((region, index) => (
          <div
            key={region.region}
            className="rounded-xl sm:rounded-2xl md:rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 shadow-[0_8px_25px_rgba(59,130,246,0.08)] sm:shadow-[0_12px_35px_rgba(59,130,246,0.08)] md:shadow-[0_15px_45px_rgba(59,130,246,0.08)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)] sm:hover:shadow-[0_16px_45px_rgba(59,130,246,0.12)] md:hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
          >
            <div 
              className="rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl bg-linear-to-r from-blue-600 to-red-600 px-4 py-3 sm:px-6 sm:py-4 cursor-pointer sm:cursor-default"
              onClick={() => isMobile && toggleRegion(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-white">🎓 {region.region}</span>
                    {isMobile && (
                      <span className="text-white/80">
                        {openRegionIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1">{region.description}</p>
                </div>
                <span className="hidden sm:inline-flex text-white bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                  {region.universities.length} Universities
                </span>
                <span className="sm:hidden text-white bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {region.universities.length}
                </span>
              </div>
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${
              isMobile 
                ? (openRegionIndex === index ? 'max-h-[5000px]' : 'max-h-0')
                : 'max-h-none'
            }`}>
              <div className="grid gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {region.universities.map((uni) => (
                  <UniversityItem key={`${region.region}-${uni.name}`} {...uni} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Statistics Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 rounded-xl sm:rounded-2xl bg-linear-to-r from-blue-900 to-red-900 p-4 sm:p-6 md:p-8 text-white">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Malaysia Education Excellence</h3>
            <p className="text-blue-200 mt-1 sm:mt-2 text-sm sm:text-base">Our comprehensive university network</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {malaysianRegions.reduce((total, region) => total + region.universities.length, 0)}+
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">7</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Regions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">98%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">100%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">Admission Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <button className="group cursor-pointer inline-flex items-center gap-2 sm:gap-3 rounded-md sm:rounded-lg bg-linear-to-r from-blue-600 to-red-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] sm:shadow-[0_15px_40px_rgba(59,130,246,0.3)] md:shadow-[0_20px_45px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(59,130,246,0.4)] sm:hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] md:hover:shadow-[0_25px_55px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 sm:hover:-translate-y-1">
            <span>Explore All Malaysian Universities</span>
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-0.5 sm:group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-gray-500 px-2">
            Complete guidance for admission, visa, and accommodation in all Malaysian universities
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutesSection;