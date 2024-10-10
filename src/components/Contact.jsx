const Contact = () => {
    return (
        <section id="contact" className="py-16 font-poppins text-center">
            <div className="container mx-auto">
                <h2 className="text-6xl font-semibold mb-6">Lets Design Together</h2>
                <p className="text-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br />
                    lectus. Phasellus consequat urna tellus.
                </p>
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="border border-gray-300 bg-[#F8F8F8] p-4 rounded-xl flex-grow"
                        aria-label="Email address"
                        required
                    />
                    <button className="bg-orange-500 text-white p-4 rounded-xl text-lg font-semibold hover:bg-orange-600 flex-shrink-0">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
