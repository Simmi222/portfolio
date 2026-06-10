import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively looking for Software Development, Frontend,
          Backend and Full Stack opportunities. Feel free to reach out.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border text-left">
            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:simaransahu4@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    simaransahu4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-lg">Phone</h4>

                  <a
                    href="tel:+918303206396"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    8303206396
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-4">
                  Connect With Me
                </h4>

                <div className="flex justify-between items-center w-full mt-4">
                  <a
                    href="https://www.linkedin.com/in/simaran-sahu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>

                  <a
                    href="https://github.com/Simmi222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>

                  <a
                  href="https://wa.me/918303206396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                </a>
              </div>
              </div>

              </div>
            </div>
          </div>
        </div>
    </section>
  );
};