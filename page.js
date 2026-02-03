
import { Hammer, Drill, Wrench, Star } from "lucide-react";

function Card({ children }) {
  return <div className="rounded-2xl shadow-sm bg-white">{children}</div>;
}

function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`rounded-2xl px-6 py-4 ${className}`}>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#1f1f1f] px-6">
      <section className="max-w-6xl mx-auto py-24">
        <h1 className="text-6xl font-bold mb-6">
          Strong. Clean. <span className="text-[#8b4a2f]">Built With Purpose.</span>
        </h1>
        <p className="text-xl max-w-3xl mb-10">
          We are a family-driven general contracting company focused on clean,
          efficient, and intentional work.
        </p>
        <Button className="bg-[#8b4a2f] text-white">Start a Project</Button>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-20">
        <Card>
          <div className="p-8">
            <h2 className="text-3xl font-semibold flex gap-2">
              <Hammer className="text-[#8b4a2f]" /> What We Do
            </h2>
            <ul className="mt-4 space-y-2">
              <li>General Contracting</li>
              <li>Energy Efficiency</li>
              <li>Personalized Projects</li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-8">
            <h2 className="text-3xl font-semibold flex gap-2">
              <Wrench className="text-[#8b4a2f]" /> Why Us
            </h2>
            <p className="mt-4">
              10+ years of experience. We listen, design with purpose, and build
              with care.
            </p>
          </div>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-8">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Listen", "Design", "Deliver"].map(step => (
            <Card key={step}>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{step}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20">
        <Card>
          <div className="p-10 flex justify-between items-center">
            <h3 className="text-3xl font-semibold flex gap-2">
              <Drill className="text-[#8b4a2f]" /> See Our Work
            </h3>
            <Button className="bg-[#8b4a2f] text-white flex gap-2 items-center">
              <Star size={18} /> Leave a Review
            </Button>
          </div>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto py-24">
        <Card>
          <div className="p-12 bg-[#1f1f1f] text-[#f4f1ec] rounded-2xl grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold mb-4">Questions? Let’s Talk.</h3>
              <p>Reach out and we’ll get back to you.</p>
            </div>
            <a
              href="mailto:info@pdxconstructiongroup.com"
              className="bg-[#8b4a2f] text-white rounded-2xl px-10 py-6 inline-block self-center"
            >
              Contact Us
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}
