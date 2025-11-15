import { Button } from "./ui/button";

interface CTABannerButton {
  text: string;
  onClick?: () => void;
  className?: string;
}

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttons?: CTABannerButton[]; // I like it, interface inside an interface
  buttonText?: string;
  onButtonClick?: () => void;
}

export function CTABanner({
  title = "Vuoi certificare la tua azienda?",
  subtitle = "Richiedi un audit di certificazione",
  buttons,
  buttonText = "Contattaci",
  onButtonClick,
}: CTABannerProps) {
  return (
    <section
      className="relative w-full h-[200px] overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjI1Nzg2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-6">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons && buttons.length > 0
            ? buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  size="lg"
                  className={btn.className ?? "bg-blue-600 hover:bg-blue-700 text-white shadow-xl"}
                  onClick={btn.onClick}
                >
                  {btn.text}
                </Button>
              ))
            : (
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              )
          }
        </div>
        {/* <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button> */}
      </div>
    </section>
  );
}
