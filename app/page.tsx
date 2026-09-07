import { portfolio as p } from './content';
import { ThemeControls } from './theme-controls';
import type { ReactNode } from 'react';

function ContactLink({ href, children, inline = false }: { href: string; children: ReactNode; inline?: boolean }) {
  const className = inline ? 'inline-link' : 'pill';
  return href ? <a className={className} href={href}>{children}</a> : <span className={className} aria-disabled="true">{children}</span>;
}

function ProjectCard({ project }: { project: typeof p.projects[number] }) {
  const content = <>
    <div className={`project-image ${project.slug}`}><img src={project.image} alt={project.alt} width="1200" height="700" /></div>
    <div className="project-copy"><div><h3>{project.title}</h3><p>{project.description}</p></div>{project.slug === 'fairo' && <img className="arrow icon" src="/assets/portfolio-arrow.svg" width="16" height="16" alt="" />}</div>
  </>;
  return <article className={`project-card ${project.slug === 'fairo' ? 'tinted' : ''}`}>{project.href ? <a href={project.href}>{content}</a> : content}</article>;
}

export default function Home() {
  return <div className="page-shell">
    <header className="header"><ThemeControls /><a className="pill say-hi" href={`mailto:${p.email}`}>Say hi</a></header>
    <main>
      <section className="intro" aria-label="About Denys">
        <div className="identity"><h1>{p.name}</h1><img src="/assets/portfolio-dot.svg" width="2" height="2" alt="" /><span>{p.role}</span></div>
        <div className="intro-copy">{p.intro.map(text => <p key={text}>{text}</p>)}
          <div className="elsewhere"><span>Elsewhere, you can find me on</span><ContactLink inline href={p.linkedin}>LinkedIn</ContactLink><ContactLink inline href={p.instagram}>Instagram</ContactLink><span>or say hi via</span><ContactLink inline href={`mailto:${p.email}`}><img className="icon" src="/assets/portfolio-email.svg" width="14" height="14" alt="" />Email</ContactLink><span>.</span></div>
        </div>
      </section>
      <section aria-labelledby="works-heading"><h2 id="works-heading">Selected works</h2><div className="project-list">{p.projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>
      <section aria-labelledby="experience-heading"><h2 id="experience-heading">Experience</h2><div className="experience-list">{p.experience.map(job => <article className="experience" key={job.title}><div><h3>{job.title}</h3><p>{job.description}</p></div><span className="dates">{job.dates}</span></article>)}</div></section>
      <section id="contact" aria-labelledby="contact-heading"><h2 id="contact-heading">Contact</h2><div className="contact-links"><ContactLink href={`mailto:${p.email}`}>Email</ContactLink><ContactLink href={p.linkedin}>Linkedin</ContactLink><ContactLink href={p.telegram}>Telegram</ContactLink><ContactLink href={p.behance}>Behance</ContactLink><ContactLink href={p.dribbble}>Dribbble</ContactLink></div></section>
    </main>
    <footer><span>© 2026</span><span>6:13pm in Croatia</span></footer>
  </div>;
}
