import { ExternalLink, Layout } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete redesign of an online retail platform, focusing on streamlined checkout and improved product discovery.',
      tags: ['UI/UX', 'React', 'Tailwind CSS'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for a B2B SaaS product with real-time data visualization and customizable widgets.',
      tags: ['Dashboard', 'React', 'Data Viz'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Mobile Banking App',
      description: 'User-friendly mobile banking interface with emphasis on security and quick transaction processing.',
      tags: ['Mobile', 'UI Design', 'Figma'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering, table reservations, and interactive menu showcase.',
      tags: ['Web Design', 'HTML/CSS', 'JavaScript'],
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio site for a photographer with full-screen galleries and smooth transitions.',
      tags: ['Portfolio', 'Animation', 'React'],
      color: 'from-indigo-500/20 to-blue-500/20',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Health and fitness app with workout tracking, progress analytics, and social features.',
      tags: ['Mobile App', 'UX', 'Prototyping'],
      color: 'from-teal-500/20 to-green-500/20',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my work across web design, mobile interfaces, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <Layout size={64} className="text-white/50 group-hover:text-white/70 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
