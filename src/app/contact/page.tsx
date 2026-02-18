import ArcadeWindow from "@/components/ArcadeWindow";
import PixelButton from "@/components/PixelButton";
import ClipboardCopy from "@/components/ClipboardCopy";

export default function Contact() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 md:py-24 crt">
      <ArcadeWindow title="CONTACT">
        <p className="text-sm">
          Contract work or roles: reach out by email or DM and we can plan the build.
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <ClipboardCopy textToCopy="sawsimonlinn@gmail.com" />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-pixel/70">Website:</span>
            <a
              className="text-cyan underline hover:text-magenta transition-colors"
              href="https://sawsimonlinn.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              sawsimonlinn.dev
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-pixel/70">LinkedIn:</span>
            <a
              className="text-cyan underline hover:text-magenta transition-colors"
              href="https://www.linkedin.com/in/sawsimonlinn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sawsimonlinn/
            </a>
          </li>

          <li className="flex items-center gap-2">
            <span className="text-pixel/70">GitHub:</span>
            <a
              className="text-cyan underline hover:text-magenta transition-colors"
              href="https://github.com/SawSimonLinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SawSimonLinn
            </a>
          </li>
        </ul>
        <div className="mt-6 flex gap-3">
          <PixelButton
            className="bg-cyan text-cabinet"
            href="mailto:sawsimonlinn@gmail.com"
          >
            SEND MESSAGE
          </PixelButton>
          <PixelButton
            className="bg-up text-cabinet"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD RESUME
          </PixelButton>
          <PixelButton href="/projects">VIEW WORK</PixelButton>
        </div>
      </ArcadeWindow>
    </main>
  );
}
