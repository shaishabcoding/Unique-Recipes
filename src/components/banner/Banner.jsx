import bannerPicture from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div
      className="text-center lg:py-24 p-8 lg:px-32  text-white bg-cover bg-center rounded-xl lg:mt-8 mx-4 mt-2 lg:mx-0"
      style={{ backgroundImage: `url(${bannerPicture})` }}
    >
      <h2 className="lg:text-4xl text-2xl font-bold lg:mb-6 mb-2">
        A Gastronomic Odyssey through
      </h2>
      <h2 className="lg:text-4xl text-2xl font-bold">Our Unique Recipes</h2>
      <p className="lg:my-8 text-sm my-3 text-gray-300">
        Embark on a tantalizing journey through the culinary wonders of Our
        Unique Recipes. <br />
        Let Culinary Chronicles be your guide as you embark on a gastronomic
        odyssey unlike any other.
      </p>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-8">
        <button className="btn btn-sm lg:btn-md bg-green-400 rounded-full border-green-400">
          Explore Now
        </button>
        <button className="btn btn-sm lg:btn-md bg-transparent text-white rounded-full border">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
