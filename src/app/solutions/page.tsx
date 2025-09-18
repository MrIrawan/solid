import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-blue-950/40 backdrop-blur-sm">
        {/* Logo */}
        <div className="font-bold text-xl tracking-wide">Solid</div>

        {/* Nav Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#solutions"
            className="relative hover:text-blue-200 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-300 after:transition-all hover:after:w-full"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="relative hover:text-blue-200 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-300 after:transition-all hover:after:w-full"
          >
            About Us
          </a>
        </nav>
      </header>

      <Separator className="bg-blue-400/40" />

      {/* Hero Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
            With solid plans, <br /> comes solid results.
          </h1>
          <p className="text-lg text-blue-100/90 max-w-xl mx-auto md:mx-0">
            With <span className="font-semibold text-white">Solid</span> you can
            build your business&apos;s digital foundation — fast, flexible, and
            secure — so you can focus on what matters most:{" "}
            <span className="text-blue-200 font-medium">
              growing your business
            </span>.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {/* 🔗 Link ke /contact */}
            <Link href="/contact-us">
              <Button className="w-fit bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-3 text-lg shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          {/* Testimonial npCard */}
          <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-md mx-auto">
            <p className="text-sm italic leading-relaxed">
              &quot;As the pace of change grows faster than ever, organizations
              must prioritize their most valuable asset — their people...&quot;
            </p>
            <p className="mt-4 text-sm font-semibold">Farrel Irawan</p>
            <p className="text-xs text-gray-500">Founder Of Solid</p>
          </div>

          {/* Stats / Skills Card */}
          <div className="bg-blue-950/70 border border-blue-700 rounded-xl p-6 text-sm max-w-md mx-auto">
            <p className="font-semibold text-blue-200">
              Target the skills you need most
            </p>
            <p className="mt-2 text-blue-300 leading-relaxed">
              Through custom configuration of our skills ontology and learning
              pathways, we let you focus your upskilling initiatives on the
              specific skills that matter most.
            </p>
            <p className="mt-4 text-3xl font-bold text-red-400">35% ↑</p>
            <p className="text-xs text-blue-300">increase in relevant skills</p>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="w-full flex flex-col items-center gap-6 py-12 bg-blue-950/30 backdrop-blur-sm">
        <p className="text-sm text-blue-200">
          Trusted by global enterprises to help build a future-proof workforce
        </p>
        <div className="flex flex-wrap gap-10 items-center justify-center text-xl font-semibold opacity-90">
          <span>maxis</span>
          <span>accenture</span>
          <span>SAMSUNG</span>
          <span>siemens</span>
        </div>
      </section>
    </main>
  )
}