const Footer = () => {
    return (
        <footer className="bg-[#F8F8F8] border-b-[40px] border-[#545454] py-6">
            <div className="container mx-auto text-center">
                <img src="/public/logo.png" alt="Mumair Logo" className="h-10 mx-auto mb-4" />
                
                <nav className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-7 mt-8 text-xl mb-10">
                    <a href="#home" className="hover:text-orange-500 mb-2 md:mb-0">Home</a>
                    <a href="#about" className="hover:text-orange-500 mb-2 md:mb-0">About Me</a>
                    <a href="#services" className="hover:text-orange-500 mb-2 md:mb-0">Services</a>
                    <a href="#projects" className="hover:text-orange-500 mb-2 md:mb-0">Projects</a>
                    <a href="#testimonials" className="hover:text-orange-500 mb-2 md:mb-0">Testimonials</a>
                    <a href="#contact" className="hover:text-orange-500 mb-2 md:mb-0">Contact</a>
                </nav>
                
                <div className="flex flex-row md:flex-row justify-center space-x-4 md:space-x-5 mb-10">
                    <a href="#"><img src="/public/faceook.png" alt="Facebook" className="h-6 mb-2 md:mb-0" /></a>
                    <a href="#"><img src="/public/Twitter - Negative.png" alt="Twitter" className="h-6 mb-2 md:mb-0" /></a>
                    <a href="#"><img src="/public/Instagram - Negative.png" alt="Instagram" className="h-6 mb-2 md:mb-0" /></a>
                    <a href="#"><img src="/public/LinkedIn - Negative.png" alt="LinkedIn" className="h-6 mb-2 md:mb-0" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
