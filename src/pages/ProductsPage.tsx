import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";
import { PageLayout } from "@/components/PageLayout";

const ProductsPage = () => (
  <PageLayout>
    <Navbar />
    <div className="pt-16">
      <ProductsSection />
    </div>
    <Footer />
  </PageLayout>
);

export default ProductsPage;
