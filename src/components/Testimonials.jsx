const Testimonials = () => {
    return (
      <section id="testimonials" className="py-16 font-poppins overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-center">Testimonials</h2>
          <p className="text-lg md:text-xl text-center mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0 min-w-[250px] md:min-w-[300px] lg:min-w-[400px] transform scale-90 md:scale-90 opacity-50 transition duration-500 ease-in-out">
              <div className="max-w-[760px] bg-gray-100 p-5 rounded-lg">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <img src="/hero.png" alt="Client 1" className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
                  <div>
                    <blockquote className="text-lg md:text-xl">
                      <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
                    </blockquote>
                    <p className="font-semibold text-xl md:text-2xl">Name</p>
                    <p className="text-lg md:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex-shrink-0 min-w-[250px] md:min-w-[300px] lg:min-w-[400px] transform scale-100 transition duration-500 ease-in-out">
              <div className="max-w-[760px] bg-gray-100 p-5 rounded-lg">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <img src="/Ellipse 10.png" alt="Client 2" className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
                  <div>
                    <blockquote className="text-lg md:text-xl">
                      <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
                    </blockquote>
                    <p className="font-semibold text-xl md:text-2xl">Name</p>
                    <p className="text-lg md:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex-shrink-0 min-w-[250px] md:min-w-[300px] lg:min-w-[400px] transform scale-90 md:scale-90 opacity-50 transition duration-500 ease-in-out">
              <div className="max-w-[760px] bg-gray-100 p-5 rounded-lg">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <img src="/Ellipse 11.png" alt="Client 3" className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
                  <div>
                    <blockquote className="text-lg md:text-xl">
                      <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
                    </blockquote>
                    <p className="font-semibold text-xl md:text-2xl">Name</p>
                    <p className="text-lg md:text-xl">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-8 flex items-center justify-center gap-5">
            <div className="h-2 w-12 bg-gray-200 rounded-lg"></div>
            <div className="h-2 w-12 bg-orange-500 rounded-lg"></div>
            <div className="h-2 w-12 bg-gray-200 rounded-lg"></div>
            <div className="h-2 w-12 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  