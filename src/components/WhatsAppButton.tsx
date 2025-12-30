import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "5511959637766";
const WHATSAPP_MESSAGE = "Olá! Gostaria de fazer um orçamento.";

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
