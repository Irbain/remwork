import React from "react";
import { Briefcase, Globe, Users } from "lucide-react";

const Advantages = () => {
  return (
    <div>
      {" "}
      <h1 className="text-center my-3 text-3xl text-main">
        <b>Why Choose remwork?</b>
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12 mx-[3%]">
        <div className="bg-card p-6  shadow-md">
          <Briefcase className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Diverse Opportunities</h2>
          <p>
            Find roles in tech, marketing, design, and more across various
            industries.
          </p>
        </div>
        <div className="bg-card p-6  shadow-md">
          <Globe className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Work from Anywhere</h2>
          <p>
            Enjoy the flexibility of working remotely from any location
            worldwide.
          </p>
        </div>
        <div className="bg-card p-6  shadow-md">
          <Users className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Connect with Top Companies
          </h2>
          <p>
            Apply to positions at leading companies embracing remote work
            culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
