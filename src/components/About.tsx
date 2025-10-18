import { User, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-2xl flex items-center justify-center border border-gray-800">
              <User size={120} className="text-lime-400" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate web designer with over 1 years of experience creating engaging digital experiences.
              My approach combines aesthetic design principles with user-centered thinking to deliver solutions
              that are both beautiful and functional.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in transforming complex ideas into intuitive interfaces that users love.
              Whether it's a responsive website, mobile app, or complete brand identity, I bring creativity
              and technical expertise to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-lime-400/10 rounded-lg">
                  <Briefcase className="text-lime-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">1+ Years</h3>
                  <p className="text-gray-400 text-sm">fresher </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-lime-400/10 rounded-lg">
                  <Award className="text-lime-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">5+ Projects</h3>
                  <p className="text-gray-400 text-sm">Successfully Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
