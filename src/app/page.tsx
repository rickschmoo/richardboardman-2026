export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#161616] dark:bg-[#111412] dark:text-[#f5f0e8]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#161616] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-[#f5f0e8] dark:focus:text-[#111412]"
        href="#content"
      >
        Skip to main content
      </a>

      <header id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#5d645f] dark:text-[#b7bbb7]"
        >
          <a className="font-semibold text-[#161616] dark:text-white" href="#top">
            Richard Boardman
          </a>
          <ul className="flex items-center gap-4">
            <li>
              <a className="hover:text-[#a13c21] dark:hover:text-[#ffb088]" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="hover:text-[#a13c21] dark:hover:text-[#ffb088]" href="#background">
                Background
              </a>
            </li>
            <li>
              <a className="hover:text-[#a13c21] dark:hover:text-[#ffb088]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="grid gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#a13c21] dark:text-[#ffb088]">
              AI transformation · engineering leadership · accessibility
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              I help product and engineering organizations turn new technology into useful, inclusive systems.
            </h1>
          </div>
          <div className="max-w-xl lg:pb-2">
            <p className="text-xl leading-8 text-[#39413c] dark:text-[#d7dad6]">
              I&apos;m Rick Boardman, an engineering leader at Zendesk working across AI
              transformation, executive operations, product accessibility, and design systems.
              Recently I&apos;ve also been acting as chief of staff to an SVP, helping connect
              strategy, execution, and organizational change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#161616] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a13c21] dark:bg-[#f5f0e8] dark:text-[#111412] dark:hover:bg-[#ffb088]"
                href="https://linkedin.com/in/richardboardman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
              <a
                className="rounded-full border border-[#c9c0b3] px-5 py-3 text-sm font-semibold text-[#161616] transition hover:border-[#a13c21] hover:text-[#a13c21] dark:border-[#414840] dark:text-[#f5f0e8] dark:hover:border-[#ffb088] dark:hover:text-[#ffb088]"
                href="https://github.com/rickschmoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10">
        <section aria-labelledby="impact-heading" className="grid gap-4 sm:grid-cols-3">
          <h2 id="impact-heading" className="sr-only">
            Leadership focus
          </h2>
          {[
            ["AI transformation", "Helping teams build practical fluency, operating rhythms, and product judgment for an AI-shaped shift."],
            ["Executive operations", "Turning strategy into follow-through as a trusted partner across planning, decisions, communication, and delivery."],
            ["Inclusive systems", "Building product habits, tooling, and engineering systems that include disabled people from the start."],
          ].map(([title, description]) => (
            <article key={title} className="border-t border-[#c9c0b3] pt-5 dark:border-[#414840]">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-[#4c554f] dark:text-[#c9cdc8]">{description}</p>
            </article>
          ))}
        </section>

        <section id="work" className="grid gap-8 border-y border-[#d8d0c4] py-12 dark:border-[#30362f] lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a13c21] dark:text-[#ffb088]">
              Current focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Transformation that reaches the work.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["AI enablement", "I have been helping teams move from AI curiosity to confident, hands-on adoption through practical learning, tools, and shared language."],
              ["Strategic execution", "Chief-of-staff work has sharpened how I create clarity around goals, surface tradeoffs, and keep cross-functional work moving."],
              ["Accessible product quality", "Accessibility is a product quality discipline. I care about the operating model, not just the audit."],
              ["Scaled product systems", "Design systems and platform teams make good decisions easier for every product team that depends on them."],
            ].map(([title, description]) => (
              <article key={title}>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-[#4c554f] dark:text-[#c9cdc8]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="background" className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">A little more context.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#39413c] dark:text-[#d7dad6]">
            <p>
              At Zendesk, I lead engineering work across Product Accessibility and Design
              Systems while contributing to company-wide AI transformation efforts. The
              products are complex, customizable, and used by teams that need software to
              be both powerful and understandable.
            </p>
            <p>
              I have also been acting as chief of staff to an SVP, which means spending a lot
              of time on the connective tissue of leadership: planning, communication,
              decision-making, and helping teams turn ambition into durable execution.
            </p>
            <p>
              Before engineering leadership, I worked across the UX end of web development:
              research, information architecture, frontend engineering, prototyping, and the
              occasional questionable personal website redesign. My PhD explored personal
              information management and overload, which still feels very current in an
              AI-shaped world.
            </p>
            <p>
              Away from work, there&apos;s family, Star Wars, getting out and about, and a hopeful
              return to more concerts and travel.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-[#e9dfd1] px-5 py-8 dark:bg-[#1c211d] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s talk.</h2>
              <p className="mt-3 max-w-xl leading-7 text-[#4c554f] dark:text-[#c9cdc8]">
                I&apos;m especially interested in senior engineering, product platform, AI
                transformation, accessibility, and strategy-and-operations leadership roles.
              </p>
            </div>
            <ul aria-label="Contact and profile links" className="grid gap-3 text-sm font-semibold sm:grid-cols-2">
              <li>
                <a className="block border border-[#c7b9a6] bg-[#f7f3ec] px-4 py-4 hover:border-[#a13c21] hover:text-[#a13c21] dark:border-[#414840] dark:bg-[#111412] dark:hover:border-[#ffb088] dark:hover:text-[#ffb088]" href="https://linkedin.com/in/richardboardman" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="block border border-[#c7b9a6] bg-[#f7f3ec] px-4 py-4 hover:border-[#a13c21] hover:text-[#a13c21] dark:border-[#414840] dark:bg-[#111412] dark:hover:border-[#ffb088] dark:hover:text-[#ffb088]" href="https://github.com/rickschmoo" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="block border border-[#c7b9a6] bg-[#f7f3ec] px-4 py-4 hover:border-[#a13c21] hover:text-[#a13c21] dark:border-[#414840] dark:bg-[#111412] dark:hover:border-[#ffb088] dark:hover:text-[#ffb088]" href="https://github.com/rickschmoo/phd-thesis-cross-tool-pim-2004" target="_blank" rel="noopener noreferrer">
                  PhD thesis
                </a>
              </li>
              <li>
                <a className="block border border-[#c7b9a6] bg-[#f7f3ec] px-4 py-4 hover:border-[#a13c21] hover:text-[#a13c21] dark:border-[#414840] dark:bg-[#111412] dark:hover:border-[#ffb088] dark:hover:text-[#ffb088]" href="https://www.meetup.com/SF-Star-Wars-Meetup/" target="_blank" rel="noopener noreferrer">
                  SF Star Wars Meetup
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#d8d0c4] pt-6 text-sm text-[#5d645f] dark:border-[#30362f] dark:text-[#b7bbb7]">
          <p>© copyright {year}</p>
          <a
            className="hover:text-[#a13c21] dark:hover:text-[#ffb088]"
            href="https://github.com/rickschmoo/richardboardman-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
        </div>
      </footer>
    </div>
  );
}
