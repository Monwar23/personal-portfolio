import Marquee from "react-fast-marquee";

const Testimonials = () => {
    return (
        <section id="testimonials" className=" py-16 ">
        <div className="container mx-auto">
        <h2 className="text-6xl font-semibold mb-6 text-center">Testimonials</h2>
        <p className="text-xl text-center mb-10">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium</p> 
        <Marquee pauseOnHover={true} speed={50}>
         <div className="flex">
         <div className="max-w-[760px] mr-8 mx-auto bg-gray-100 p-5 rounded-lg">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
              <img src="/public/Ellipse 10.png" alt="Client 1" className="w-32 h-32 rounded-full" />
              <div>
              <blockquote className="text-gray-600 text-xl">
               <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
              </blockquote>
              <p className="font-semibold text-2xl">Name</p>
              <p className=" text-xl">CEO</p>
              </div>
            </div>
          </div>
         <div className="max-w-[760px] mr-8 mx-auto bg-gray-100 p-5 rounded-lg">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
              <img src="/public/hero.png" alt="Client 1" className="w-32 h-32 rounded-full" />
              <div>
              <blockquote className="text-gray-600 text-xl">
               <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
              </blockquote>
              <p className="font-semibold text-2xl">Name</p>
              <p className=" text-xl">CEO</p>
              </div>
            </div>
          </div>
          <div className="max-w-[760px] mr-8 mx-auto bg-gray-100 p-5 rounded-lg">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
              <img src="/public/Ellipse 11.png" alt="Client 1" className="w-32 h-32 rounded-full" />
              <div>
              <blockquote className="text-gray-600 text-xl">
               <span className="text-orange-500">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className="text-orange-500">"</span>
              </blockquote>
              <p className="font-semibold text-2xl">Name</p>
              <p className=" text-xl">CEO</p>
              </div>
            </div>
          </div>
         </div>
         </Marquee>
        </div>
      </section>

    );
};

export default Testimonials;