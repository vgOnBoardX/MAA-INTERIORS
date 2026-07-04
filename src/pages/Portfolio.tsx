import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { X, Calendar, ZoomIn, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "../data/projects";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Categories list derived from project data
  const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Full Home", "Office", "Commercial"];

  // Check URL query parameter on mount/change to open corresponding project lightbox automatically
  useEffect(() => {
    const projectId = searchParams.get("id");
    if (projectId) {
      const found = PROJECTS.find((p) => p.id === projectId);
      if (found) {
        setSelectedProject(found);
        setActiveGalleryIndex(0);
      }
    }
  }, [searchParams]);

  const handleOpenLightbox = (project: Project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
    setSearchParams({ id: project.id });
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
    setSearchParams({});
  };

  // Listen to Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter projects by category
  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-24 font-sans min-h-screen bg-linen" id="portfolio-page">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <span className="font-sans text-xs font-semibold tracking-widest text-stone uppercase block mb-3 text-center">
          OUR ARCHIVE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso text-center mb-6">
          Portfolio Gallery
        </h1>
        <p className="text-stone text-base sm:text-lg text-center max-w-xl mx-auto leading-relaxed mb-12">
          Explore a selection of our residential and commercial renovations. Each space is built to balance cozy warmth with structural precision.
        </p>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded text-sm font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-espresso text-linen shadow-sm"
                  : "bg-mist/30 text-espresso hover:bg-mist/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-linen flex flex-col group"
            >
              {/* Cover Photo */}
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-5 cursor-pointer"
                onClick={() => handleOpenLightbox(project)}
              >
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
                
                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-linen/95 text-espresso text-xs font-medium px-2.5 py-1 rounded shadow-sm">
                  {project.category}
                </span>

                {/* Overlaid Hover Indicator */}
                <div className="absolute inset-0 bg-espresso/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none z-10">
                  <div className="bg-linen text-espresso rounded-full p-3 shadow-lg">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>

              {/* Text Meta info */}
              <span className="font-sans text-xs font-medium text-stone mb-2">
                Completed in {project.year}
              </span>
              <h2 className="font-serif text-xl font-bold text-espresso mb-2 hover:text-stone transition-colors cursor-pointer" onClick={() => handleOpenLightbox(project)}>
                {project.title}
              </h2>
              <p className="text-stone text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <button
                onClick={() => handleOpenLightbox(project)}
                className="mt-auto self-start text-sm font-semibold text-espresso hover:underline group-hover:text-stone flex items-center"
              >
                See Full Project Details
                <Eye size={14} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal Panel */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="fixed inset-0 bg-espresso/80 backdrop-blur-sm"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-linen rounded-2xl shadow-2xl overflow-y-auto border border-stone/15 z-10"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute top-4 right-4 z-20 p-2.5 bg-espresso text-linen rounded-full hover:bg-espresso/85 hover:scale-105 active:scale-95 transition-all shadow-md focus:ring-2 focus:ring-mist"
                aria-label="Close project lightbox"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-10">
                {/* Header info */}
                <div className="mb-8">
                  <span className="inline-block bg-mist/50 text-espresso text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-sans text-stone">
                    <span className="flex items-center">
                      <Calendar size={16} className="text-espresso mr-1.5" />
                      Year Completed: {selectedProject.year}
                    </span>
                  </div>
                </div>

                {/* Primary Media view */}
                <div className="mb-10">
                  {selectedProject.beforeAfter ? (
                    <div>
                      <h3 className="font-sans text-xs font-semibold tracking-wider text-stone mb-3 uppercase">
                        Before & After renovation comparison (Drag handle to compare)
                      </h3>
                      <BeforeAfterSlider
                        before={selectedProject.beforeAfter.before}
                        after={selectedProject.beforeAfter.after}
                        height="h-[300px] sm:h-[450px]"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[300px] sm:h-[480px] rounded-xl overflow-hidden shadow-md">
                      <img
                        src={selectedProject.gallery[activeGalleryIndex]}
                        alt={`${selectedProject.title} view ${activeGalleryIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                {/* Media gallery selector */}
                {selectedProject.gallery.length > 1 && (
                  <div className="mb-10">
                    <h3 className="font-sans text-xs font-semibold tracking-wider text-stone mb-4 uppercase">
                      Project Views
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveGalleryIndex(idx)}
                          className={`relative w-20 h-16 rounded overflow-hidden shadow-sm border-2 transition-all ${
                            activeGalleryIndex === idx
                              ? "border-espresso scale-105"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt="thumbnail"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Description text */}
                <div className="border-t border-stone/10 pt-8">
                  <h3 className="font-serif text-xl font-bold text-espresso mb-4">
                    About the Project
                  </h3>
                  <p className="text-stone text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                    {selectedProject.description}
                  </p>

                  {selectedProject.details && selectedProject.details.length > 0 && (
                    <div className="border-t border-stone/10 pt-6 mt-6">
                      <h4 className="font-sans text-xs font-semibold tracking-wider text-stone mb-4 uppercase">
                        Key Features & Design Details (Analysed)
                      </h4>
                      <ul className="space-y-3 max-w-3xl">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-sm sm:text-base text-stone">
                            <span className="inline-block w-2 h-2 rounded-full bg-espresso mt-2 mr-3 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
