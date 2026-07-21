import {FaLongArrowAltRight} from "react-icons/fa";
export const HeroSection = () =>{
  return (
     <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">
                Explore the world,one country at a Time.
              </h1>
              <p className="paragraph">
                Discover the history culture, and beauty of every nation. search , and filter through countries to find the details.
              </p>
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight />
              </button>
            </div>
            <div className="hero-image">
              <img 
              src="/images/world.jpg" 
              alt="world beauty"
              className="banner-image"
              />
            </div>
          </div>
        </main>
  );
}