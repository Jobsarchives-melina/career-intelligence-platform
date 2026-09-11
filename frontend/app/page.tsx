export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Career Intelligence
            </h1>
            <p className="text-xs text-slate-400">
              Career Intelligence Platform
            </p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#" className="hover:text-white">
              Dashboard
            </a>
            <a href="#" className="hover:text-white">
              Jobs
            </a>
            <a href="#" className="hover:text-white">
              Skills
            </a>
            <a href="#" className="hover:text-white">
              Roadmap
            </a>
          </nav>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            AI-Powered Career Intelligence
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Build a smarter career with
            <span className="text-blue-400"> data-driven insights.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Discover the right career path, identify your skill gaps,
            explore relevant jobs, and build a personalized roadmap for
            professional growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600">
              Analyze My Career
            </button>

            <button className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 hover:bg-white/5">
              Explore Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Intelligence Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 text-3xl">🎯</div>
            <h3 className="text-lg font-semibold">Career Matching</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Match your experience and interests with suitable career paths.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 text-3xl">🧠</div>
            <h3 className="text-lg font-semibold">Skill Gap Analysis</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Identify the skills you need to reach your target career.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 text-3xl">💼</div>
            <h3 className="text-lg font-semibold">Job Recommendations</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Discover opportunities that align with your career profile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 text-3xl">🗺️</div>
            <h3 className="text-lg font-semibold">Career Roadmap</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Follow a personalized roadmap toward your professional goals.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-400">
              Intelligence Dashboard
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Your career at a glance
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6">
              <p className="text-sm text-slate-400">Career Match Score</p>
              <p className="mt-3 text-4xl font-bold">82%</p>
              <p className="mt-2 text-sm text-green-400">
                Strong career alignment
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <p className="text-sm text-slate-400">Skills Identified</p>
              <p className="mt-3 text-4xl font-bold">24</p>
              <p className="mt-2 text-sm text-slate-400">
                Across your career profile
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <p className="text-sm text-slate-400">Recommended Jobs</p>
              <p className="mt-3 text-4xl font-bold">156</p>
              <p className="mt-2 text-sm text-blue-400">
                Based on your profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          © 2026 Career Intelligence Platform. Built for smarter careers.
        </div>
      </footer>
    </main>
  );
}