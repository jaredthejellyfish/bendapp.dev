import { motion } from "motion/react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur with a background in AI and product design. Alex founded Bend to create technology that truly adapts to human needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
  },
  {
    name: "Sasha Chen",
    role: "Chief Technology Officer",
    bio: "AI researcher with a passion for creating intelligent systems that enhance human capability. Leads Bend's technical strategy and innovation.",
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
  },
  {
    name: "Jordan Taylor",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on creating intuitive, beautiful interfaces that make complex technology feel simple and approachable.",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
  },
  {
    name: "Mia Robinson",
    role: "Chief Product Officer",
    bio: "Former tech journalist turned product leader. Passionate about building products that solve real human problems in meaningful ways.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
];

const TeamMembers = () => {
  return (
    <section className="relative mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center"
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-[#121212]/80"
              />

              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                className="absolute left-4 bottom-4 z-10"
              >
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-[#FF333D] font-medium">{member.role}</p>
              </motion.div>
            </div>

            <div className="p-6">
              <p className="text-white/70">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
