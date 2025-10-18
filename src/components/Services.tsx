import { Laptop, Smartphone, Palette, Code, Search, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Web Design',
      description: 'Creating responsive, modern websites that engage users and drive results. From landing pages to complex web applications.',
    },
    {
      icon: Smartphone,
      title: 'Mobile UI/UX',
      description: 'Designing intuitive mobile interfaces that provide seamless experiences across iOS and Android platforms.',
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Developing cohesive visual identities including logos, color schemes, and style guides that represent your brand.',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Implementing designs with clean, maintainable code using modern frameworks like React and Vue.',
    },
    {
      icon: Search,
      title: 'UX Research',
      description: 'Conducting user research and testing to ensure designs meet real user needs and expectations.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, accessibility, and SEO to deliver the best possible user experience.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive design and development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-lime-400 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-lime-400/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-lime-400" size={28} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
