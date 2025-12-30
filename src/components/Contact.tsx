import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511959637766?text=Olá! Gostaria de agendar um atendimento.", "_blank");
  };

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block text-primary font-display text-sm font-bold tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-8">
            Atendimento
          </h2>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 text-left">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground">
                Avenida São Miguel, Vila Marieta – SP
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-left">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Horário</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 09h – 18h
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar agora
            </Button>
            <Button variant="outline" size="lg" onClick={handleWhatsApp}>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
