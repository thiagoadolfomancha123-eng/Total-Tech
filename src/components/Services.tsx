import ServiceCard from "./ServiceCard";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceNotebook from "@/assets/service-notebook.jpg";
import serviceGamer from "@/assets/service-gamer.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";

const services = [
  {
    title: "Manutenção e Formatação",
    description: "PC lento ou travando? Formatamos, instalamos drivers e deixamos seu computador como novo.",
    icon: "🔧",
    image: serviceMaintenance,
  },
  {
    title: "Reparo em Notebook",
    description: "Não liga, não carrega, tela quebrada ou problema na placa-mãe. Consertamos tudo!",
    icon: "💻",
    image: serviceNotebook,
  },
  {
    title: "PC Gamer",
    description: "Montagem personalizada, upgrade de componentes e otimização para máximo desempenho.",
    icon: "🎮",
    image: serviceGamer,
  },
  {
    title: "Limpeza Técnica",
    description: "Limpeza interna profissional e troca de pasta térmica para melhor refrigeração.",
    icon: "🧼",
    image: serviceCleaning,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display text-sm font-bold tracking-widest uppercase mb-4">
            O que fazemos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para seu computador, com qualidade e preço justo.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bitcoin banner */}
        <div className="mt-16 glass rounded-2xl p-8 text-center border-primary/30">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">₿</span>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Pagamento em Bitcoin <span className="text-primary">⚡</span>
            </h3>
          </div>
          <p className="text-muted-foreground mb-2">Lightning Network aceito</p>
          <span className="inline-block gradient-accent text-primary-foreground font-bold px-6 py-2 rounded-full text-sm">
            10% OFF na mão de obra
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
