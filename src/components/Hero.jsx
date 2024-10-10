
const Hero = () => {
    return (
        <section id="home" className="py-20 font-poppins pl-8 pr-14">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold">Hi I am </p>
            <h1 className="text-3xl font-semibold text-orange-500">Muhammad Umair</h1>
            <h2 className="text-8xl  mt-4 font-bold">UI & UX</h2>
            <h2 className="text-8xl lg:ml-48 mt-4 font-bold"> Designer</h2>
            <p className="text-gray-600 mt-4 max-w-2xl text-xl">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
            </p>
            <button className="bg-orange-500 text-xl text-white px-6 py-2 rounded mt-6 hover:bg-orange-600">Hire Me</button>
          </div>
          <div>
            <div className="">
            <img
              src="/public/hero.png"
              alt="Profile"
              className="w-80 h-96 mt-10 rounded-full  "
            />
            <div className="relative -mt-[335px] ml-12 w-52 h-12 bg-[#FD6F0099]"></div>
            </div>
            <div className="flex justify-center mt-[300px] space-x-4">
          <a href="#"><img src="/public/faceook.png" alt="Facebook" className="h-6" /></a>
          <a href="#"><img src="/public/Twitter - Negative.png" alt="Twitter" className="h-6" /></a>
          <a href="#"><img src="/public/Instagram - Negative.png" alt="Instagram" className="h-6" /></a>
          <a href="#"><img src="/public/LinkedIn - Negative.png" alt="LinkedIn" className="h-6" /></a>
        </div>
          </div>
        </div>
        
      </section>

    );
};

export default Hero;