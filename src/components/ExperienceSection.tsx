import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const workExperience = [
  {
    title: 'Team Leader – Domains & Hosting Operations',
    company: 'Genpact',
    location: 'Hyderabad, India',
    period: 'October 2022 – Present',
    description: 'Leading high-performing customer support teams for the world\'s leading Domains and Hosting provider, with a strong focus on operational excellence, customer experience, and people development. Driving performance against critical KPIs, managing client expectations, and delivering data-driven insights through advanced reporting and analytics.',
    highlights: [
      'Lead and manage a team of customer support specialists delivering best-in-class support for Domains and Hosting products',
      'Drive key Customer Support KPIs including CSAT, FCR, AHT, QA scores, productivity, and SLA adherence',
      'Design, build, and maintain performance dashboards using Tableau and Amazon QuickSight to provide actionable insights to leadership and clients',
      'Partner closely with clients and internal stakeholders to manage expectations, communicate performance trends, and implement improvement strategies',
      'Conduct quality audits, deep-dive analyses, and targeted interventions to improve agent performance and customer experience',
      'Play a hands-on people management role, including coaching, mentoring, performance management, career development, and succession planning',
      'Groom team members for growth through structured feedback, skill development plans, and leadership readiness initiatives',
      'Drive continuous process improvement initiatives to enhance efficiency, accuracy, and customer satisfaction',
    ],
    type: 'work',
  },
];

const education = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    company: 'Computer Science & Engineering',
    location: 'Chandigarh University',
    period: '2014 – 2018',
    description: 'Strong foundation in computer science fundamentals, data structures, algorithms, and software development methodologies.',
    highlights: [
      'Developed proficiency in full-stack web development, database management, and cloud technologies',
      'Built strong analytical and problem-solving skills through hands-on projects and coursework',
      'Winner of inter-college coding competition (3 consecutive years)',
      'Active member of IEEE Student Chapter and technical societies',
      'Cultivated expertise in software design patterns, system architecture, and agile methodologies',
    ],
    type: 'education',
  },
];

interface TimelineItemProps {
  item: typeof workExperience[0];
  index: number;
  isInView: boolean;
}

const TimelineItem = ({ item, index, isInView }: TimelineItemProps) => {
  const isWork = item.type === 'work';
  const Icon = isWork ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-16 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="timeline-line" />
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: 'spring' }}
        className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          isWork ? 'bg-primary/20 border border-primary/30' : 'bg-secondary/20 border border-secondary/30'
        }`}
      >
        <Icon className={isWork ? 'text-primary' : 'text-secondary'} size={20} />
      </motion.div>

      {/* Content Card */}
      <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl font-bold group-hover:text-gradient transition-colors">
              {item.title}
            </h4>
            <p className="text-primary font-medium">{item.company}</p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1 justify-end">
              <Calendar size={14} />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1 justify-end mt-1">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{item.description}</p>

        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                isWork ? 'bg-primary' : 'bg-secondary'
              }`} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of professional growth and academic achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Briefcase className="text-primary" size={18} />
              </div>
              Work Experience
            </motion.h3>
            <div className="relative">
              {workExperience.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <GraduationCap className="text-secondary" size={18} />
              </div>
              Education
            </motion.h3>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
