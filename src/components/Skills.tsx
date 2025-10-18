import { Code, Palette, Layers, Smartphone, Figma, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95, icon: Palette },
    { name: 'HTML/CSS', level: 90, icon: Code },
    { name: 'JavaScript/React', level: 85, icon: Layers },
    { name: 'Responsive Design', level: 95, icon: Smartphone },
    { name: 'Figma/Adobe XD', level: 90, icon: Figma },
    { name: 'Performance Optimization', level: 80, icon: Zap },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-lime-400/10 rounded-lg">
                    <skill.icon className="text-lime-400" size={20} />
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
