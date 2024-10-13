import Divider from "./components/Divider";
import Footer from "./components/Footer";
import NewsLetters from "./components/sections/NewsLetters";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import TopSection from "./components/sections/TopSection";
import { AccordionDemo } from "./components/sections/AccordionDemo";

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
