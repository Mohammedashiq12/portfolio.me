import { Mail, Linkedin, Github, Download } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl text-center">

        {/* Title */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Feel free to reach out if you want to collaborate or just say hi.
          </p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-2xl p-12 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">
            Contact Information
          </h3>

          <p className="text-sm text-muted-foreground mb-12">
            You can connect with me on these platforms
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">

            {/* EMAIL */}
            <ContactCard
              icon={<Mail />}
              title="Email"
              value="ashiqsag@gmail.com"
              href="mailto:ashiqsag@gmail.com"
            />

            {/* LINKEDIN */}
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              value="Mohammed Ashiq"
              href="https://www.linkedin.com/in/mohammedashiq12/"
            />

            {/* GITHUB */}
            <ContactCard
              icon={<Github />}
              title="GitHub"
              value="Mohammedashiq12"
              href="https://github.com/Mohammedashiq12"
            />
          </div>

          <a
            href="/Mohammed_Ashiq_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-primary text-primary-foreground font-medium"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

/* ================= CONTACT CARD ================= */

const ContactCard = ({ icon, title, value, subText, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      block rounded-lg
      border border-border
      px-4 py-5
      transition
      hover:bg-secondary/40
      card-hover
      text-center
    "
  >
    {/* ICON */}
    <div className="
      w-9 h-9 mx-auto mb-3
      flex items-center justify-center
      rounded-full
      bg-primary/10 text-primary
    ">
      {icon}
    </div>

    {/* TITLE */}
    <p className="text-sm font-medium">
      {title}
    </p>

    {/* MAIN TEXT */}
    <p className="text-xs text-foreground mt-1">
      {value}
    </p>

    {/* SUBTEXT */}
    {subText && (
      <p className="text-[11px] text-muted-foreground mt-1 break-all">
        {subText}
      </p>
    )}
  </a>
);


