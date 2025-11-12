import "./globals.css";
import { Navbar } from "@/components/navbar";
import HomeBanner from "../components/home";
// import ContactForm from "./contacts/page";
import AboutPage from "../components/about";
import { Footer } from "@/components/footer";
import ProjectsPage from "@/components/project";
import ContactPage from "@/components/contact";



export default function Home() {
  return (
    <>
      <Navbar />
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
