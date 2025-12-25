import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Globe, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const stats = [
  { icon: Zap, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '3+', label: 'Years Experience' },
  { icon: Globe, value: '20+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards & Certifications' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About <span className="text-gradient">Technology</span> & <span className="text-gradient">Design</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building the bridge between elegant code and exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Corner Borders */}
              <div className="absolute -inset-2 z-0 opacity-50">
                {/* Top Left Corner */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                </div>
                {/* Top Right Corner */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-secondary to-transparent"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-secondary to-transparent"></div>
                </div>
                {/* Bottom Left Corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-secondary to-transparent"></div>
                </div>
                {/* Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent"></div>
                </div>
              </div>

              {/* Animated Glow Border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl z-0"
                style={{
                  background: 'linear-gradient(135deg, hsla(185, 100%, 50%, 0.3) 0%, hsla(270, 80%, 60%, 0.3) 100%)',
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Image + Experience Badge */}
<div className="relative z-10">
  {/* Image Card */}
  <div className="relative rounded-2xl overflow-hidden border border-primary/30 glass-card shadow-[0_0_30px_rgba(0,229,255,0.2)]">
    <img
      src={profilePlaceholder}
      alt="Abhishekh Dey"
      className="w-full aspect-[4/5] object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
  </div>

  {/* Experience Badge */}
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={isInView ? { scale: 1, opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
    className="
      absolute 
      -bottom-6 
      -right-6 
      z-20
      glass-card 
      px-4 
      py-3 
      rounded-xl 
      border 
      border-primary/30
      shadow-[0_0_20px_rgba(0,229,255,0.35)]
      backdrop-blur-md
      hidden sm:block
    "
  >
    <div className="text-3xl font-bold text-gradient">3+</div>
    <div className="text-xs text-muted-foreground leading-tight">
      Years of<br />Experience
    </div>
  </motion.div>
</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm Abhishekh Dey, a multi-disciplinary technology professional based in Hyderabad. 
                Currently serving as Team Leader at Genpact, I blend technical expertise with creative 
                vision to deliver solutions that make an impact.
              </p>
              <p>
                My journey spans full-stack development, where I architect scalable web applications 
                using modern frameworks. I equally thrive in the creative realm—designing intuitive 
                interfaces, crafting compelling content, and sharing knowledge through technical speaking.
              </p>
              <p>
                What drives me is the intersection of technology and human experience. Every project 
                is an opportunity to solve real problems, mentor growing talent, and push the boundaries 
                of what's possible in digital innovation.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Full-Stack Architecture',
                'UI/UX Design Systems',
                'Technical Leadership',
                'Content Strategy',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-4 rounded-xl text-center hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={20} />
                  <div className="text-xl md:text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
