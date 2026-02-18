import ArcadeWindow from "@/components/ArcadeWindow";
import Image from "next/image";
import PixelButton from "@/components/PixelButton";
import { Check } from "lucide-react";

const whatIBring = [
  "Self-driven learner: picked up Craft.js and custom customer-service apps on my own time to unblock the team.",
  "A sharp eye for UI/UX, refined over 6+ years in graphic design.",
  "Startup-honed builder: design Figma flows myself, create internal tools, and ship the frontend end to end.",
  "Modern frontend skills in React, Next.js, and TypeScript (plus backend integrations when needed).",
  "Full-stack experience with a passion for building great user interfaces.",
];

const techStack = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Tailwind CSS",
    "Zod (schema validation)",
  ],
  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "JWT auth",
    "Internal tools & service integration",
  ],
  Tools: [
    "Yarn",
    "Git (GitHub & Bitbucket)",
    "Bitbucket Pipelines",
    "AWS",
    "Docker",
    "tsup (bundling)",
    "Nexus (artifact registry)",
    "Sharetribe",
    "ESLint / npmrc config",
    "Figma",
    "Postman",
    "Vercel & Netlify",
    "Sanity.io",
    "Appwrite.io",
    "Sentry.io",
  ],
  Other: [
    "Responsive Design",
    "UI/UX Thinking",
    "Agile Workflow",
    "Video Editing",
  ],
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
      <ArcadeWindow title="PLAYER 1 PROFILE">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <div className="inline-block p-2 bg-cabinet pixel-border">
              <a
                href="https://www.linkedin.com/in/sawsimonlinn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/profile/itsme.png"
                  alt="Pixel art portrait of Simon Linn"
                  width={200}
                  height={200}
                  className="pixel-border animate-wobble"
                  data-ai-hint="pixel art portrait"
                />
              </a>
            </div>
            <p className="font-arcade text-lg text-cyan mt-4">SAW SIMON LINN</p>
            <p className="text-xs text-pixel/80">
              Software Engineer / Design Engineer
            </p>
          </div>

          <div className="md:w-2/3 space-y-4 text-sm">
            <p>
              I’m Simon, a software + design engineer with 2+ years delivering production features at a venture-backed startup. I work across the stack with React/Next.js and Node microservices.
            </p>
            <p>
              Day to day I break down tickets, design and build the UI/UX myself, collaborate with PMs, build services, wire them into the frontend, and cover the work with unit (Jest) and E2E tests before code review.
            </p>
            <p>
              I’m looking for roles where I can keep shipping quickly while collaborating tightly with product teams.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-arcade text-lg text-up">
            What I Bring to the Table
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {whatIBring.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-up mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-arcade text-lg text-up">My Tech Stack</h2>
          <div className="mt-4 space-y-4">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="font-arcade text-sm text-cyan tracking-widest">
                  {category}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                  {techs.map((tech) => (
                    <li
                      key={tech}
                      className="bg-cabinet pixel-border px-2 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex gap-4 justify-center">
          <PixelButton href="/contact" className="bg-cyan text-cabinet">
            CONTACT ME
          </PixelButton>
          <PixelButton
            href="https://www.linkedin.com/in/sawsimonlinn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </PixelButton>
        </div>
      </ArcadeWindow>
    </main>
  );
}
