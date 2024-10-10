const About = () => {
    return (
      <section id="about" className="py-16 font-poppins">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="relative">
              <img
                src="/about.png"
                alt="About Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full -mt-16 md:mt-5 mx-auto"
              />
              <div className="absolute -mt-[220px] sm:-mt-[260px] md:-mt-[325px] ml-[60px] sm:ml-[60px] md:ml-[80px] w-32 sm:w-40 md:w-52 h-8 sm:h-10 md:h-12 bg-[#FD6F0099]"></div>
            </div>
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8">About Me</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
              </p>
              <div className="mt-4 text-2xl">
                <h3 className="font-semibold">UX</h3>
                <div className="bg-gray-200 rounded-full h-2 mb-4 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full w-10/12"></div>
                </div>
                <h3 className="font-bold">Web Design</h3>
                <div className="bg-gray-200 rounded-full h-2 mb-4 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full w-9/12"></div>
                </div>
                <h3 className="font-bold">App Design</h3>
                <div className="bg-gray-200 rounded-full h-2 mb-4 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full w-11/12"></div>
                </div>
                <h3 className="font-bold">Graphic Design</h3>
                <div className="bg-gray-200 rounded-full h-2 mb-4 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full w-10/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  