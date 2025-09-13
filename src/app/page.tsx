import ArcadeWindow from "@/components/ArcadeWindow";
import PixelButton from "@/components/PixelButton";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 crt">
      {/* HERO */}
      <section className="text-center">
        <h1 className="font-arcade text-2xl md:text-3xl">
          SAW SIMON LINN
          <br />
          <span className="text-cyan">FRONTEND</span>{" "}
          <span className="text-magenta">DEVELOPER</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base">
          I build fast, playful, design-driven web apps using React, Next.js,
          and Tailwind. From franchise dashboards to portfolio generators — I
          solve real problems with code.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <PixelButton href="/projects">PRESS START</PixelButton>
          <PixelButton className="bg-cyan text-cabinet" href="/hire">
            INSERT COIN
          </PixelButton>
        </div>
      </section>

      {/* LATEST RUN */}
      <section className="mt-16">
        <ArcadeWindow title="LATEST RUN">
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li>
              🚀{" "}
              <a
                href="https://nomis.life"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Launched: Nomis.Life
              </a>
            </li>
            <li>
              📊{" "}
              <a
                href="https://biz-boost-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Deployed: BizBoost Dashboard
              </a>
            </li>
            <li>
              ⭐{" "}
              <a
                href="https://www.develevate.pro/about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Favorite: DevElevate Pro
              </a>
            </li>
            {/* hide the button 3 in mobile */}
            <li className="hidden md:block">
              🍣{" "}
              <span className="text-pixel/70  ">
                Building: Franchise SaaS for 5000+ Locations
              </span>
            </li>
            <li className="hidden md:block">
              🍜{" "}
              <span className="text-pixel/70  ">
                Startup: Food-Tech Platform (Coming Soon)
              </span>
            </li>
            <li className="hidden md:block">
              🔧{" "}
              <a
                href="https://bluebirdhaus.online"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Building: Table Order System
              </a>
            </li>
          </ul>
        </ArcadeWindow>
      </section>

      {/* HIGH SCORES */}
      <section className="mt-16 max-w-sm mx-auto">
        <ArcadeWindow title="HIGH SCORES">
          <ul className="space-y-2 text-xs font-arcade">
            <li className="flex justify-between items-center">
              <span>1. SL</span>
              <span className="text-cyan">95000</span>
            </li>
            <li className="flex justify-between items-center">
              <span>2. MAX</span>
              <span className="text-cyan">88000</span>
            </li>
            <li className="flex justify-between items-center">
              <span>3. EVA</span>
              <span className="text-cyan">85000</span>
            </li>
          </ul>
        </ArcadeWindow>
      </section>
    </main>
  );
}
