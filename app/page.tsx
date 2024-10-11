import { Button } from "@/components/ui/button";
import AccordionWrapper from "./components/AccordionWrapper";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Image from "next/image";
import SettingsProfilePage from "./components/shadcn/forms/page";
import SettingsLayout from "./components/shadcn/forms/layout";
import NewsLetters from "./components/sections/NewsLetters";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import TopSection from "./components/sections/TopSection";

export default function Home() {
  return (
    <div>
      <TopSection />
      <Divider />

      {/* <SettingsLayout>
        <SettingsProfilePage />
        
      </SettingsLayout> */}
      <NewsLetters />
      <MaxWidthWrapper>
        <AccordionDemo />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}

// Usage example
export function AccordionDemo() {
  return (
    <AccordionWrapper
      qone="What kind of remote jobs does the Remwork offer?"
      aone="Our platform provides remote job opportunities across various fields, including technology, marketing, design, customer support, and more."
      qtwo="Can I find a remote job in my field?"
      atwo="Yes, we ensure that job seekers from all professional backgrounds can find suitable remote job listings."
      qthree="Is there support for securing a remote job?"
      athree="Absolutely! We offer resources, tips, and personalized assistance to help you successfully land a remote job."
    />
  );
}
