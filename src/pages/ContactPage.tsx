import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { PageLayout } from "@/components/PageLayout";

const ContactPage = () => (
  <PageLayout>
    <Navbar />
    <div className="pt-16">
      <ContactSection />
    </div>
    <Footer />
  </PageLayout>
);

export default ContactPage;
