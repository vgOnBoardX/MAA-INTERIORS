import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Award, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const [heroActive, setHeroActive] = useState(false);

  // Trigger duotone-to-full-color transition for the hero image after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroActive(true);
    }, 400); // Trigger the resolve
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = PROJECTS.slice(0, 3);

  const stats = [
    { value: "150+", label: "Projects Completed", desc: "Homes & commercial spaces" },
    { value: "10+", label: "Years of Crafting", desc: "Refining details & layouts" },
    { value: "100%", label: "Personalized Care", desc: "Zero cookie-cutter designs" },
  ];

  const services = [
    {
      title: "Full-Home Renovation",
      desc: "Transforming tired layouts into integrated, airy sanctuaries designed for flow and daylight.",
    },
    {
      title: "Kitchen & Bath Design",
      desc: "Crafting beautiful culinary workspaces and spa-like retreats where utility meets elegance.",
    },
    {
      title: "Styling & Decoration",
      desc: "The finishing layer — selecting bespoke textiles, lighting, art, and furniture for a cohesive mood.",
    }
  ];

  const testimonials = [
    {
      quote: "Maa Interiors turned our cramped apartment into an open, warm, light-filled sanctuary. Every detail, from the textured plaster walls to the wooden corner shelves, feels intentional and beautifully crafted.",
      author: "Priya & Rajeev Sen",
      project: "Full-Home Renovation Client"
    },
    {
      quote: "The consultation was zero-pressure, and the execution was seamless. They really listened to how we live day-to-day. Now, walking into our living room feels like a deep breath of fresh air.",
      author: "Aditi Ghosh",
      project: "Living Room Styling Client"
    }
  ];

  return (
    <div className="pt-20 font-sans" id="home-page">
      {/* 1. Hero Section with duotone image resolve */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-linen px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-mist/40 px-3.5 py-1.5 rounded-full text-espresso text-xs font-semibold tracking-wider mb-6 w-fit"
            >
              <Award size={14} className="text-espresso mr-1" />
              <span>BESPOKE INTERIOR ARCHITECTURE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-[1.1] mb-6"
            >
              Where every room feels like <br className="hidden sm:inline" />
              <span className="italic text-espresso font-normal font-serif">coming home.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-stone text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Maa Interiors designs and builds full-home, single-room, and commercial interiors from the first sketch to the final cushion. We craft spaces with warmth, character, and absolute respect for how you live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                state={{ formType: "consultation" }}
                className="inline-flex items-center justify-center bg-espresso hover:bg-espresso/90 text-linen font-medium px-8 py-4 rounded text-base transition-colors group shadow-md"
              >
                Book a Consultation
                <ArrowRight size={18} className="ml-2.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border-2 border-espresso text-espresso hover:bg-espresso hover:text-linen font-medium px-8 py-4 rounded text-base transition-colors"
              >
                Explore Projects
              </Link>
            </motion.div>
          </div>

          {/* Hero Image - Resolves from duotone to full color on mount */}
          <div className="lg:col-span-5 h-[450px] sm:h-[500px] lg:h-[550px] relative rounded-2xl overflow-hidden shadow-2xl">
            <div className={`w-full h-full duotone-container ${heroActive ? "active" : ""}`}>
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Styled modern living room with warm wooden details"
                className="w-full h-full object-cover duotone-image"
                referrerPolicy="no-referrer"
              />
              <div className="duotone-overlay" />
            </div>
            
            {/* Ambient Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-linen/95 backdrop-blur-md p-5 rounded-xl border border-stone/10 shadow-lg z-10">
              <span className="font-serif text-lg font-bold text-espresso block mb-0.5">Earthy Living Space</span>
              <span className="font-sans text-xs text-stone tracking-wide">LIVING ROOM — COMPLETED IN 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar Section */}
      <section className="bg-espresso text-linen py-12 px-4 sm:px-6 lg:px-8 border-y border-stone/20" aria-label="Trust Stats">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-linen/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-6 md:pt-0 md:px-6">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-mist mb-2">
                  {stat.value}
                </span>
                <span className="block font-sans text-base font-semibold text-linen mb-1">
                  {stat.label}
                </span>
                <span className="block font-sans text-sm text-linen/70">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects with signature duotone filter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
            <div>
              <span className="font-sans text-xs font-semibold tracking-widest text-stone uppercase block mb-3">
                SELECTED CRAFT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
                Featured Spaces
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center text-espresso font-semibold hover:underline mt-4 md:mt-0"
            >
              See all projects
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col h-full bg-linen">
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-6">
                  <Link to={`/portfolio?id=${project.id}`} aria-label={`View ${project.title}`}>
                    <div className="w-full h-full duotone-container">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover duotone-image"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="duotone-overlay" />
                    </div>
                  </Link>
                  <span className="absolute top-4 left-4 bg-linen/95 text-espresso text-xs font-medium px-2.5 py-1 rounded shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Meta */}
                <span className="font-sans text-xs font-medium text-stone mb-2">
                  Completed in {project.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-espresso mb-3 group-hover:text-stone transition-colors">
                  <Link to={`/portfolio?id=${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/portfolio?id=${project.id}`}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-espresso hover:underline group-hover:text-stone"
                >
                  See the Full Project
                  <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-mist/20 border-t border-stone/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left intro */}
            <div className="lg:col-span-5">
              <span className="font-sans text-xs font-semibold tracking-widest text-stone uppercase block mb-3">
                HOW WE DESIGN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-6">
                Studio Services
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-8">
                We believe interior design shouldn't be intimidating. We handle the entire sequence — from early concept mood boards to coordinating contractors, sourcing fixtures, and placing final accent pillows.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-espresso hover:bg-espresso/90 text-linen font-medium px-6 py-3 rounded text-sm transition-colors"
              >
                Learn Our Process
              </Link>
            </div>

            {/* Right List */}
            <div className="lg:col-span-7 space-y-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-linen p-8 rounded-xl border border-stone/10 shadow-sm flex gap-6 items-start">
                  <div className="w-12 h-12 bg-mist rounded-lg flex items-center justify-center text-espresso font-serif text-xl font-bold flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-2">
                      {service.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linen border-t border-stone/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-stone uppercase block mb-4">
            CLIENT LOVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-12">
            Shared Journeys
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-linen p-8 rounded-2xl border border-stone/15 shadow-sm relative flex flex-col justify-between">
                <div className="flex space-x-1 text-espresso mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-stone text-base italic leading-relaxed mb-6 font-serif">
                  "{test.quote}"
                </p>
                <div>
                  <span className="block font-sans text-sm font-bold text-espresso">
                    {test.author}
                  </span>
                  <span className="block font-sans text-xs text-stone">
                    {test.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA Banner */}
      <section className="bg-espresso text-linen py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-sans text-xs font-semibold tracking-widest text-mist uppercase block mb-4">
            LET'S CHAT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-linen mb-6 leading-tight">
            Ready to design a home that <br />
            feels completely like you?
          </h2>
          <p className="text-linen/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let's start with a conversation. In our initial session, we'll discuss your floor plan, styling goals, and outline a path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-mist hover:bg-deepmist text-espresso font-semibold px-8 py-4 rounded transition-colors"
            >
              Book a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Muted background geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mist/5 rounded-full pointer-events-none blur-3xl" />
      </section>
    </div>
  );
}
