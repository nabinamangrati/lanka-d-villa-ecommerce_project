import resort from "../images/resort.jpeg";

const About = () => {
  return (
    <div className="relative w-full">
      {/* Background Image with Title */}
      <div className="relative h-[400px] w-full">
        <img
          src={resort}
          alt="Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Welcome to Our Resort
          </h1>
        </div>
      </div>

      {/* Descriptive Content Below the Image */}
      <div className="bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Nestled in breathtaking landscapes, our resort offers luxury,
            comfort, and adventure. Whether you're here to unwind or explore, we
            ensure an unforgettable experience with world-class amenities and
            exceptional service.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Established in [YEAR], we’ve been dedicated to creating memories
            for each guest. Enjoy private dining, rejuvenating spa services, and
            activities designed for relaxation and adventure alike.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Our resort is more than just a place to stay—it's a destination
            where guests can unwind, reconnect, and rejuvenate. We take pride in
            our eco-friendly practices, locally sourced cuisine, and dedicated
            staff who are here to make your stay perfect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
