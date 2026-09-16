import { portfolio as p } from './content';
import { ThemeControls } from './theme-controls';
import { FooterClock } from './footer-clock';
import type { ReactNode } from 'react';

function ContactLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  const external = /^https?:\/\//.test(href);
  return href ? (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ) : (
    <span className={className} aria-disabled="true">
      {children}
    </span>
  );
}

function Button({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ContactLink className="pill" href={href}>
      {children}
    </ContactLink>
  );
}

function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ContactLink className="inline-link" href={href}>
      {children}
    </ContactLink>
  );
}

function ProjectCard({ project }: { project: (typeof p.projects)[number] }) {
  const content = (
    <>
      <div className={`project-image ${project.slug}`}>
        <div className="project-image-crop">
          <img
            src={project.image}
            alt={project.alt}
            width="1200"
            height="700"
          />
        </div>
      </div>
      <div className="project-copy">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <img
          className="arrow icon theme-light"
          src="/assets/portfolio-arrow.svg"
          width="16"
          height="16"
          alt=""
        />
        <img
          className="arrow icon theme-dark"
          src="/assets/portfolio-arrow-dark.svg"
          width="16"
          height="16"
          alt=""
        />
      </div>
    </>
  );
  return (
    <article className="project-card">
      {project.href ? (
        <a
          href={project.href}
          target={/^https?:\/\//.test(project.href) ? '_blank' : undefined}
          rel={
            /^https?:\/\//.test(project.href)
              ? 'noopener noreferrer'
              : undefined
          }
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <header className="header">
        <ThemeControls />
        <Button href={`mailto:${p.email}`}>Say hi</Button>
      </header>
      <img
        className="home-cat"
        src="/assets/cat.svg"
        width="28"
        height="28"
        alt=""
        aria-hidden="true"
      />
      <main>
        <section className="intro" aria-label="About Denys">
          <div className="identity">
            <h1>{p.name}</h1>
            <img
              className="theme-light"
              src="/assets/portfolio-dot.svg"
              width="2"
              height="2"
              alt=""
            />
            <img
              className="theme-dark"
              src="/assets/portfolio-dot-dark.svg"
              width="2"
              height="2"
              alt=""
            />
            <span>{p.role}</span>
          </div>
          <div className="intro-copy">
            {p.intro.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <div className="elsewhere">
              <span>Elsewhere, you can find me on</span>
              <ButtonLink href={p.linkedin}>LinkedIn</ButtonLink>
              <ButtonLink href={p.instagram}>Instagram</ButtonLink>
              <span>or say hi via</span>
              <ButtonLink href={`mailto:${p.email}`}>
                <img
                  className="icon theme-light"
                  src="/assets/portfolio-email.svg"
                  width="14"
                  height="14"
                  alt=""
                />
                <img
                  className="icon theme-dark"
                  src="/assets/portfolio-email-dark.svg"
                  width="14"
                  height="14"
                  alt=""
                />
                Email
              </ButtonLink>
              <span>.</span>
            </div>
          </div>
        </section>
        <section aria-labelledby="works-heading">
          <h2 id="works-heading">Selected works</h2>
          <div className="project-list">
            {p.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <div className="experience-list">
            {p.experience.map((job) => (
              <article className="experience" key={job.title}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
                <span className="dates">{job.dates}</span>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <div className="contact-links">
            <Button href={`mailto:${p.email}`}>Email</Button>
            <Button href={p.linkedin}>Linkedin</Button>
            <Button href={p.behance}>Behance</Button>
            <Button href={p.dribbble}>Dribbble</Button>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026</span>
        <FooterClock />
      </footer>
    </div>
  );
}
