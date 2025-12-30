import { ChevronDown, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511959637766?text=Olá! Gostaria de fazer um orçamento.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Reparo de notebook" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-2xl">
            <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-xl text-foreground">TOTAL TECH</span>
              <span className="block text-xs text-primary font-medium tracking-wider">NOTEBOOKS</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up">
          <span className="text-foreground">Total Tech</span>
          <br />
          <span className="text-gradient">Assistência Técnica</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Conserto profissional de notebooks e PCs.
          <br />
          <span className="text-foreground font-medium">Diagnóstico honesto, sem enrolação.</span>
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button variant="hero" size="xl" onClick={handleWhatsApp} className="group">
            <span>Falar direto com o técnico</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
          aria-label="Ver serviços"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;
