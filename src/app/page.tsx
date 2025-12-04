import Contact from "./_components/Contact";
import Destinations from "./_components/Destinations";
import HomeSlider from "./_components/HomeSlider";
import Institutes from "./_components/Institutes";
import Service from "./_components/Service";
import Stories from "./_components/Stories";
import Testimonials from "./_components/Testimonials";
import Welcome from "./_components/Welcome";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <div className="px-4 pt-6 sm:px-6 lg:px-12">
        <HomeSlider />
      </div>
      <div className="space-y-16 bg-[#f4f7ff] px-4 pb-20 sm:px-6 lg:px-12">
        <Welcome />
        <Service />
        <Destinations />
        <Institutes />
        <Stories />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
