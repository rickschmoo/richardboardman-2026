export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Richard (Rick) Boardman PhD
          </h1>
        </header>

        {/* Main Content */}
        <article className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hi. My day job is managing the world-class Product Accessibility and Design System engineering teams at Zendesk.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Accessibility is all about making sure EVERYONE can use whatever you are building, specifically including people with disabilities who are far too often overlooked. Since this group includes pretty much all of us at some point of our lives, Accessibility is a Big Deal.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The customizable web platforms we build are incredibly complex, on a par with the desktop operating systems of not too long ago. It&apos;s great to have a job with such positive impact and innovation potential.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Beyond people and program management, I try to stay hands-on with technology (hence the state of this eternally evolving website - currently built using Next.js and Tailwind CSS). I&apos;ve worked in pretty much every aspect of the UX end of web development - except Visual Design (see this website).
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Beyond Tech, there&apos;s family, Star Wars and getting out and about. I used to travel and go to lots of concerts too. Hopefully that will restart soon ;)
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Rick, {new Date().getFullYear()}.
          </p>

          {/* Links Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Here are some links:</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com/in/richardboardman" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/rickschmoo/phd-thesis-cross-tool-pim-2004" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  PhD 
                </a> (from 2004 but still surprisingly relevant, that is if you are excited about information overload and personal information management)
              </li>
              <li>
                <a href="https://github.com/rickschmoo" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  github
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/SF-Star-Wars-Meetup/" 
                   className="text-blue-600 dark:text-blue-400 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  San Francisco Star Wars Meetup
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-lg text-gray-700 dark:text-gray-300">
            If you&apos;d like to get in touch, please drop me a DM via Linkedin. Stay well.
          </p>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © copyright {new Date().getFullYear()}
            </p>
            <a 
              href="https://github.com/rickschmoo/richardboardman-2025"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
