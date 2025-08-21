import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Introduction to Probability and Statics for Engineers and Scientist, 6th Ed.",
    description: "Sheldon Ross",
    image: "/picture/1.jpg",
    demoUrl:
      "https://drive.google.com/file/d/1lAFpLqg_AbpDAfDkITv7dm_cd0dADzGV/view?usp=sharing",
  },
  {
    id: 2,
    title: "Introduction to Mathematical Statistics, 8th Ed",
    description: "Hogg, McKean and Craig",
    image: "/picture/2.jpg",
    demoUrl: "http://minerva.it.manchester.ac.uk/~saralees/statbook2.pdf",
  },
  {
    id: 3,
    title: "Introductory Statistics, 1st Ed",
    description: "Illowsky and Dean",
    image: "/picture/3.jpg",
    demoUrl:
      "https://assets.openstax.org/oscms-prodcms/media/documents/IntroductoryStatistics-OP_i6tAI7e.pdf",
  },
  {
    id: 4,
    title: "A First Course in Probability, 10th Ed",
    description: "Sheldon Ross",
    image: "/picture/4.jpg",
    demoUrl:
      "https://educationexclusive.com/upload/pdf/A%20First%20Course%20in%20Probability%20by%20Sheldon%20Ross.pdf",
  },
  {
    id: 5,
    title: "Introduction to Mathematical Statistics, 8th Ed",
    description: "Hogg, Tanis, Zimmerman",
    image: "/picture/5.jpg",
    demoUrl:
      "https://api.pageplace.de/preview/DT0400.9781292062563_A24270068/preview-9781292062563_A24270068.pdf",
  },
  {
    id: 6,
    title: "A First Course in Abstract Algebra 8th Ed",
    description: "Fraleigh and Brand",
    image: "/picture/6.jpg",
    demoUrl:
      "https://drive.google.com/file/d/1K9XA4vgXO_sv8mjDqggvDZ-C2e7tA_o1/view?usp=sharing",
  },
  {
    id: 7,
    title: "Contemporary Abstract Algebra 9th Ed",
    description: "Joseph Galian",
    image: "/picture/7.jpg",
    demoUrl:
      "https://www.toomey.org/tutor/text_books/Advanced/Contemporary%20Abstract%20Algebra%209th%20Edition%20-%20Joseph%20A.%20Gallian.pdf",
  },
];

export const ProjectsSection = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title + Search always stay in place */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Books </span>
        </h2>

        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Fixed min-height so header doesn't shift */}
        <div className="min-h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 pb-16">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* fixed bottom-left button */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="absolute bottom-4 left-4 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  Open PDF
                </a>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-muted-foreground">
              No books found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
