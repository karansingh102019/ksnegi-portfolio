import "./globals.css";

import HomeBanner from "../components/home";
import AboutPage from "../components/about";
import { Footer } from "@/components/footer";
import ProjectsPage from "@/components/project";
import ContactPage from "@/components/contact";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
    
        <Navbar/>
        <div id="home">
          <HomeBanner />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="project">
          <ProjectsPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
        <Footer />
      
    </>
  );
}
