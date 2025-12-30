import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Total Tech Notebooks - Assistência Técnica em São Paulo</title>
        <meta 
          name="description" 
          content="Conserto profissional de notebooks e PCs em São Paulo. Manutenção, formatação, reparo de placa-mãe, PC Gamer e limpeza técnica. Diagnóstico honesto!" 
        />
        <meta name="keywords" content="assistência técnica notebook, conserto notebook SP, formatação PC, reparo placa-mãe, PC Gamer, limpeza técnica" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Hero />
        <Services />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
