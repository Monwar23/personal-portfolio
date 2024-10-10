
const Services = () => {
    return (
        <section id="services" className=" py-16 px-5 font-poppins">
        <div className="container mx-auto">
          <h2 className="text-6xl font-semibold mb-6 text-center">Services</h2>
          <p className="text-xl text-center mb-10">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <img src="/public/1.png" alt="UI/UX" className=" h-16 w-16 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">UI/UX</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi<br /> nam diam interdum</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <img src="/public/2.png" alt="Web Design" className="w-16 h-20 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi<br /> nam diam interdum</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <img src="/public/3.png" alt="App Design" className=" w-12 h-20 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">App Design</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi<br /> nam diam interdum</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
              <img src="/public/4.png" alt="Graphic Design" className=" h-16 w-20 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi<br /> nam diam interdum</p>
            </div>
          </div>
        </div>
      </section>

    );
};

export default Services;