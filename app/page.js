import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Hammer, Drill, Wrench, Ear, PencilRuler, CheckCircle } from "lucide-react";

export default function PDXConstructionGroup() {
  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#1f1f1f] font-sans">
      {/* Hero */}
      <section className="relative px-6 py-24 max-w-6xl mx-auto bg-[#1f1f1f] text-[#f4f1ec]">
        {/* Logo */}
        <div className="absolute top-6 right-6 z-20">
          <img
            src="/logo.png"
            alt="PDX Construction Group logo"
            className="h-20 md:h-24 opacity-95"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Strong. Clean. <span className="text-[#8b4a2f]">Built With Purpose.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10">
            We are a family-driven general contracting company focused on clean,
            efficient, and intentional work. We empower people in their homes by
            listening first, building second, and delivering solutions shaped
            around real needs and values.
          </p>
          <div className="flex items-center gap-6">
            <Button className="bg-[#8b4a2f] hover:bg-[#733c26] text-white rounded-2xl px-8 py-6 text-lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              <Hammer className="text-[#8b4a2f]" size={28} /> What We Do
            </h2>
            <ul className="space-y-3 text-lg">
              <li>General Contracting</li>
              <li>Energy Efficiency & Home Performance</li>
              <li>Personalized, Client-Specific Projects</li>
              <li>Community-Focused & Residential Work</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              <Wrench className="text-[#8b4a2f]" size={28} /> Why Us
            </h2>
            <p className="text-lg leading-relaxed">
              Our work is built around our clients. We are attentive listeners who take the time to understand your goals, values, and priorities before we ever pick up a tool. With over 10 years of hands-on experience, we design and build solutions that are specific to each client — and it shows in the quality of our work.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* How We Work */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <Ear className="text-[#8b4a2f] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Listen</h3>
              <p className="text-lg">We start by understanding your needs, values, and vision. Every project begins with clear communication.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <PencilRuler className="text-[#8b4a2f] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Design</h3>
              <p className="text-lg">We create solutions tailored specifically to your home, budget, and long-term goals.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-8">
              <CheckCircle className="text-[#8b4a2f] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Deliver</h3>
              <p className="text-lg">Clean, efficient work done with care, accountability, and respect for your space.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="border-t border-b border-[#8b4a2f] py-6 text-center text-lg">
          Trusted by homeowners across Portland · 10+ years of experience · City & nonprofit supported
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
          Community Powered
          <span className="inline-block w-16 h-1 bg-[#8b4a2f]" />
        </h2>
        <p className="text-xl max-w-4xl">
          Our honest and trusted approach allows us to not only build for our clients, but build with them. We believe strong homes come from strong communication, shared goals, and work done side by side — balancing community values with personal needs.
        </p>
      </section>

      {/* Reviews CTA */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-sm bg-white border-l-8 border-[#8b4a2f]">
          <CardContent className="p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-2 flex items-center gap-3">
                <Drill className="text-[#8b4a2f]" size={26} /> See Our Work
              </h3>
              <p className="text-lg">Our impact is best told by the people we serve. Read reviews or leave one — it takes less than a minute.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-2xl px-6 py-4">Read Reviews</Button>
              <Button className="bg-[#8b4a2f] hover:bg-[#733c26] text-white rounded-2xl px-6 py-4 flex gap-2 items-center">
                <Star size={18} /> Leave a Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-sm bg-[#1f1f1f] text-[#f4f1ec]">
          <CardContent className="p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-4xl font-bold mb-4">Questions? Let’s Talk.</h3>
              <p className="text-lg max-w-md">Whether you’re planning a project or just need clarity, we’re here to listen. Reach out and we’ll get back to you quickly.</p>
            </div>
            <div className="flex items-center">
              <a href="mailto:info@pdxconstructiongroup.com" className="inline-block bg-[#8b4a2f] hover:bg-[#733c26] text-white rounded-2xl px-10 py-6 text-lg">Contact Us</a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-6xl mx-auto text-sm opacity-80">
        © {new Date().getFullYear()} PDX Construction Group · Built for community
      </footer>
    </div>
  );
}
// redeploy
