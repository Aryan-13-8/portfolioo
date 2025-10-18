import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-lime-400">Aryan </span> <span className="text-white"> </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Web Designer & UI/UX Specialist
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Crafting beautiful, intuitive digital experiences that blend creativity with functionality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-lg transition-colors"
          >
            View Services
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent hover:bg-gray-900 text-white font-medium rounded-lg transition-colors border border-lime-400"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="mt-20 text-gray-500 hover:text-lime-400 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
