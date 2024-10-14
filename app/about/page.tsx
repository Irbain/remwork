import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Users, Briefcase, TrendingUp } from "lucide-react";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-main">About remwork</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting talented professionals with remote opportunities
            worldwide.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            At remwork, we believe in the power of remote work to transform
            lives and businesses. Our mission is to bridge the gap between
            talented professionals and forward-thinking companies, creating a
            global workforce that thrives on flexibility, diversity, and
            innovation.
          </p>
          <p className="text-lg">
            We&apos;re committed to making remote work accessible, enjoyable,
            and rewarding for everyone involved.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose remwork?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Globe className="text-[#FACC15] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p>
                  Access opportunities and talent from around the world,
                  breaking geographical barriers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="text-[#FACC15] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Diverse Community
                </h3>
                <p>
                  Join a vibrant community of professionals from various
                  backgrounds and industries.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Briefcase
                className="text-[#FACC15] mr-4 flex-shrink-0"
                size={24}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality Opportunities
                </h3>
                <p>
                  Curated job listings from reputable companies embracing remote
                  work culture.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <TrendingUp
                className="text-[#FACC15] mr-4 flex-shrink-0"
                size={24}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p>
                  Resources and support to help you thrive in your remote career
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2024, remwork was born out of the realization that the
            future of work is remote. Our founders, having experienced the
            benefits and challenges of remote work firsthand, set out to create
            a platform that would make remote job searching and hiring seamless
            and effective.
          </p>
          <p className="text-lg mb-4">
            Since then, we&apos;ve grown into a thriving community of remote
            workers and companies, facilitating thousands of successful job
            placements and fostering a culture of remote work excellence.
          </p>
          <p className="text-lg">
            Today, we continue to innovate and expand our services, always with
            the goal of making remote work better for everyone.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Join the Remote Revolution
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a job seeker looking for your next remote
            opportunity or an employer seeking top remote talent, remwork is
            here to help you succeed in the world of remote work.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>Find Remote Jobs</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
