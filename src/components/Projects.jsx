
const Projects = () => {
    return (
        <section id="projects" className="py-16 font-poppins">
            <div className="container mx-auto">
                <h2 className="text-6xl font-semibold mb-6 text-center">My Projects</h2>
                <p className="text-xl text-center mb-10">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br /> lectus. Phasellus consequat urna tellus</p>
                <div className="mb-8 md:flex md:justify-center md:gap-4">
                    <div className="flex justify-center space-x-4 mb-4">
                        <button className="border px-4 py-2 rounded-xl bg-gray-100 text-xl hover:bg-gray-200 h-12">All</button>
                        <button className="border px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xl h-12">UI/UX</button>
                        <button className="border px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-xl text-white h-12">Web Design</button>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="border px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xl h-12">App Design</button>
                        <button className="border px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xl h-12">Graphic Design</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    <div className="">
                        <div className="bg-[#FFEBDB]">
                            <img src="/public/Web Designs.png" alt="Project 1" className="mb-5 absolute mt-20 md:ml-4 ml-8" />
                            <img src="/public/Web Designs (1).png" alt="Project 1" className="mb-4 md:ml-24 ml-32" />
                        </div>
                        <p className="text-lg text-orange-500">Web Design</p>
                        <h3 className="text-xl font-bold">AirCalling Landing Page Design</h3>
                    </div>
                    <div className="">
                        <div className="bg-[#FFEBDB]">
                            <img src="/public/Web Designs (2).png" alt="Project 1" className="mb-5 absolute mt-20 md:ml-4 ml-8" />
                            <img src="/public/Web Designs (3).png" alt="Project 1" className="mb-4 md:ml-24 ml-32" />
                        </div>
                        <p className="text-lg text-orange-500">Web Design</p>
                        <h3 className="text-xl font-bold">Business Landing Page Design </h3>
                    </div>
                    <div className="">
                        <div className="bg-[#FFEBDB]">
                            <img src="public/Web Designs (4).png" alt="Project 1" className="mb-5 absolute mt-20 md:ml-4 ml-8" />
                            <img src="public/Web Designs (5).png" alt="Project 1" className="mb-4 md:ml-24 ml-32" />
                        </div>
                        <p className="text-lg text-orange-500">Web Design</p>
                        <h3 className="text-xl font-bold">Ecom Web Page Design </h3>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Projects;