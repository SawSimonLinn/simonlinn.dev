export default function HireMePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 crt text-pixel font-arcade space-y-10">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl text-magenta border-b-2 border-coin pb-1 w-fit uppercase animate-blink">
        Hire Me
      </h1>

      {/* Intro */}
      <div className="animate-pop" style={{ animationDelay: "0.1s" }}>
        <p className="text-xs sm:text-sm max-w-2xl leading-relaxed">
          I'm Simon — a fullstack engineer and designer who builds
          arcade-inspired web apps for real businesses. Whether you're launching
          a startup or need a small site with big energy, I'm your player one.
        </p>
      </div>

      {/* Services + Tech */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="animate-pop" style={{ animationDelay: "0s" }}>
          <h2 className="text-base text-coin mb-2 uppercase">What I Build</h2>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li>Business websites & portfolios</li>
            <li>Franchise dashboards & admin panels</li>
            <li>Ordering systems (table, POS, online)</li>
            <li>Custom APIs & backend logic</li>
            <li>Design-to-code pixel perfect UI</li>
          </ul>
        </div>
        <div className="animate-pop" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-base text-cyan mb-2 uppercase">Tech Stack</h2>
          <p className="text-xs">
            React, Next.js, TypeScript, Tailwind, Node.js, Appwrite, Firebase,
            MongoDB, Vercel, Resend
          </p>
        </div>
      </div>

      {/* Projects */}
      <div>
        <div className="animate-pop" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-base text-up mb-2 uppercase">
            What I'm Working On
          </h2>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li>
              <strong>Custom Franchise SaaS Platform</strong> – 5000+ sushi
              franchises, 600+ staff, dashboards & analytics
            </li>
            <li>
              <strong>Table Order System</strong> – POS + dev fee logic for a
              local coffee shop
            </li>
            <li>
              <strong>Food-Tech Startup</strong> – focused on modernizing food
              ops & customer UX
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-10">
        <div className="animate-pop" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-base text-coin mb-2 uppercase">
            Recent Projects
          </h2>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li>
              <strong>Nomis.Life</strong> – a portfolio + skill tracker platform
              for junior developers
            </li>
            <li>
              <strong>BizBoost Dashboard</strong> – franchise performance
              tracker with revenue insights
            </li>
          </ul>
        </div>
      </div>

      {/* Why Me */}
      <div>
        <div className="animate-pop" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-base text-danger mb-2 uppercase">Why Me?</h2>
          <p className="text-xs leading-relaxed">
            I've designed for 7+ years, built fullstack tools, and worked
            12-hour shifts while studying code at night. When I build something,
            it's fast, clean, and business-ready.
          </p>
        </div>
      </div>
      {/* Contact */}
      <div className="space-y-3">
        <a
          href="mailto:sawsimonelinn@gmail.com"
          className="inline-block bg-magenta text-pixel text-xs font-bold px-4 py-2 rounded-pixel shadow-pixel hover:scale-105 transition-all animate-wobble"
        >
          🎮 LET'S WORK TOGETHER
        </a>

        <p className="text-xs text-cyan">
          Or message me on{" "}
          <a
            href="https://linkedin.com/in/sawsimonlinn"
            className="underline hover:text-pixel animate-glow"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </main>
  );
}
