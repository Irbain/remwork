import Divider from "../components/Divider";
import Footer from "../components/Footer";
import NewsLetters from "../components/sections/NewsLetters";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import TopSection from "../components/sections/TopSection";
import { AccordionDemo } from "../components/sections/AccordionDemo";
import Advantages from "../components/sections/Advantages";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TopSection />
      <Advantages />
      <MaxWidthWrapper>
        <AccordionDemo />
      </MaxWidthWrapper>
      <Divider />

      {/* <SettingsLayout>
        <SettingsProfilePage />
        
      </SettingsLayout> */}
      <NewsLetters />

      <div className="text-center relative mx-auto max-w-sm">
        <h3 className="font-semibold text-[#FACC15]">Are You A Recruiter?</h3>
        <p className="mt-2 text-sm text-gray-300">
          If you&apos;d like to post your offers, you can do so in minutes.{" "}
          <Link
            href="/rectruiter"
            className="whitespace-nowrap font-medium text-[#FACC15] hover:text-[#FACC15]/80"
          >
            Get started &rarr;
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}
