import { FooterClock } from '../../footer-clock';
import { ThemeControls } from '../../theme-controls';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  CaseStudyImage,
  CopyLinkButton,
  ImageSlider,
  SidebarNavigation,
} from './case-study-client';

const activeLensImages = {
  overview: '/assets/active-lens-overview.png',
  process: '/assets/active-lens-process.png',
  audit: '/assets/active-lens-audit.png',
  competitive: '/assets/active-lens-competitive.png',
  userJobs: '/assets/active-lens-user-jobs.png',
  navigation: '/assets/active-lens-navigation.png',
  liveAi: '/assets/active-lens-live-ai.png',
  actions: '/assets/active-lens-actions.png',
  designSystem: '/assets/active-lens-design-system.png',
  final: [
    '/assets/active-lens-final-1.png',
    '/assets/active-lens-final-2.png',
    '/assets/active-lens-final-3.png',
  ],
};

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="info-card">
      <p>{title}</p>
      <p>{body}</p>
    </article>
  );
}

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="case-heading">
      <h2>{title}</h2>
      <div className="case-body">{children}</div>
    </div>
  );
}

export default function ActiveLensCaseStudy() {
  return (
    <div className="case-page">
      <header className="case-header">
        <div className="case-header-actions">
          <Link
            className="back-button"
            href="/"
            aria-label="Back to portfolio homepage"
          >
            <img
              className="back-default theme-light"
              src="/assets/case-back-light.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="back-default theme-dark"
              src="/assets/case-back-dark.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="back-hover"
              src="/assets/case-back-hover.svg"
              width="14"
              height="14"
              alt=""
            />
          </Link>
          <ThemeControls />
        </div>
        <CopyLinkButton />
      </header>

      <div className="case-sidebar-positioner">
        <SidebarNavigation />
      </div>

      <main className="case-sections">
        <section className="case-section case-overview" id="overview">
          <div className="case-intro">
            <div className="case-title">
              <h1>Active Lens AI</h1>
              <p>
                Redesigning an AI meeting assistant from passive summaries to
                real-time intelligence.
              </p>
            </div>
            <p>
              Active Lens is a desktop AI meeting assistant that records and
              transcribes calls, generates notes, and turns conversations into
              actionable next steps. I redesigned the existing product
              experience and explored how AI could become useful during the
              conversation, and not only after it.
            </p>
            <div className="case-metadata">
              <div className="metadata-row">
                <div>
                  <span>Role</span>
                  <p>Product Designer</p>
                </div>
                <div>
                  <span>Live</span>
                  <a
                    href="https://www.activelens.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="metadata-row">
                <div>
                  <span>Scope</span>
                  <p>
                    Product redesign, UX architecture, AI features, Interaction
                    design, Design system
                  </p>
                </div>
                <div>
                  <span>Team</span>
                  <p>
                    Product Owner, Product Designer, Developer, Brand Designer,
                    Motion Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CaseStudyImage
            src={activeLensImages.overview}
            alt="Active Lens desktop application interface"
          />
        </section>

        <section className="case-section" id="what-i-did">
          <SectionHeading title="What I did">
            <p>
              I worked across the core product experience, from fixing
              foundational UX issues to designing new AI-powered interactions.
            </p>
            <ul>
              <li>
                Audited the existing desktop experience and identified key UX
                issues;
              </li>
              <li>
                Restructured navigation and simplified core product flows;
              </li>
              <li>
                Redesigned the desktop application and established consistent
                interaction patterns;
              </li>
              <li>Designed new real-time AI experiences for live meetings;</li>
              <li>
                Explored participant recognition, contextual intelligence, and
                AI-powered actions;
              </li>
              <li>
                Built a scalable design system for existing and future product
                features.
              </li>
            </ul>
          </SectionHeading>
          <div className="info-grid">
            <InfoCard title="1 month" body="Project timeline" />
            <InfoCard
              title="1 Product Designer"
              body="End-to-end design ownership"
            />
            <InfoCard title="2-3 core flows" body="Substantially redesigned" />
            <InfoCard
              title="4 AI capabilities"
              body="Designed for live meetings"
            />
          </div>
        </section>

        <section className="case-section" id="process">
          <SectionHeading title="From understanding the existing product to shipping the redesign">
            <p>
              I started by understanding how the product worked today, then
              moved from identifying friction to restructuring the experience,
              exploring new AI capabilities, and refining the solution with the
              team.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={activeLensImages.process}
            alt="Active Lens product design process"
          />
        </section>

        <section className="case-section" id="discovery-audit">
          <SectionHeading title="Discovery & Audit">
            <p>
              I started with stakeholder interviews, an audit of the existing
              desktop app, and a review of the main product flows. The goal was
              to understand the underlying UX problems before changing the
              interface.
            </p>
          </SectionHeading>
          <div className="info-grid info-grid-tall">
            <InfoCard
              title="Confusing navigation"
              body="Some parts of the product were difficult to discover or accessible only through indirect actions."
            />
            <InfoCard
              title="Inconsistent behavior"
              body="Popups and full-window experiences were mixed without a predictable pattern."
            />
            <InfoCard
              title="Unclear hierarchy"
              body="Naming, structure, and transitions made orientation harder than necessary."
            />
            <InfoCard
              title="Unnecessary friction"
              body="Key actions depended on other screens or required avoidable steps."
            />
          </div>
          <CaseStudyImage
            src={activeLensImages.audit}
            alt="Active Lens desktop product audit interface"
          />
        </section>

        <section className="case-section" id="competitive-research">
          <SectionHeading title="Competitive Research">
            <p>
              I reviewed competing AI meeting tools to understand how they
              approached live transcription, meeting intelligence, AI
              assistance, and post-call workflows.
            </p>
            <p>
              The research helped identify established patterns, gaps in the
              live-meeting experience, and opportunities for Active Lens to
              provide useful intelligence while the conversation was still
              happening.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={activeLensImages.competitive}
            alt="Active Lens competitive research"
          />
        </section>

        <section className="case-section" id="user-jobs">
          <SectionHeading title="User Jobs & Experience Map">
            <p>
              Instead of treating individual screens as separate experiences, I
              mapped the product around three key moments and the main job users
              need to accomplish in each one.
            </p>
          </SectionHeading>
          <div className="info-stack">
            <InfoCard
              title="Before the meeting"
              body="Prepare quickly and access relevant participant or client context."
            />
            <InfoCard
              title="During the meeting"
              body="Stay focused while capturing information and getting useful assistance."
            />
            <InfoCard
              title="After the meeting"
              body="Review what happened and turn it into clear next actions."
            />
          </div>
          <CaseStudyImage
            src={activeLensImages.userJobs}
            alt="Active Lens experience map"
          />
        </section>

        <section className="case-section" id="design-principles">
          <SectionHeading title="Design Principles">
            <p>Principles that guided the redesign.</p>
          </SectionHeading>
          <div className="info-grid info-grid-tall">
            <InfoCard
              title="Make navigation predictable"
              body="Users should always understand where they are and how to reach key areas."
            />
            <InfoCard
              title="Keep AI contextual"
              body="Surface information when it becomes relevant instead of making users search for it."
            />
            <InfoCard
              title="Reduce distraction during calls"
              body="AI should support the conversation, not compete with it."
            />
            <InfoCard
              title="Keep users in control"
              body="AI can suggest and automate, but important actions should remain understandable and reviewable."
            />
          </div>
        </section>

        <section className="case-section" id="key-decisions">
          <SectionHeading title="Key Product Decisions">
            <p>
              The redesign focused on fixing the core UX first, then using that
              stronger foundation to introduce new real-time AI capabilities.
            </p>
          </SectionHeading>
          <div className="decision-block">
            <h3>Rebuilding the navigation</h3>
            <p>
              I rebuilt the navigation around a clearer hierarchy, removed
              hidden paths, and standardized how users moved between screens.
              Key destinations became directly accessible, screen behavior
              became more predictable, and dependencies between different parts
              of the product were reduced.
            </p>
            <CaseStudyImage
              src={activeLensImages.navigation}
              alt="Active Lens redesigned navigation"
            />
          </div>
          <div className="decision-block">
            <h3>Bringing AI into the live call</h3>
            <p>
              Active Lens was already useful after meetings. The bigger
              opportunity was making that intelligence available while the
              conversation was happening.
            </p>
            <ul>
              <li>Voice-controlled AI assistance</li>
              <li>Participant recognition using CRM and web context</li>
              <li>Entity detection for companies, events, and dates</li>
              <li>Real-time action suggestions</li>
            </ul>
            <CaseStudyImage
              src={activeLensImages.liveAi}
              alt="Active Lens live-call AI experience"
            />
          </div>
          <div className="decision-block">
            <h3>Turning context into action</h3>
            <p>
              The goal was not only to surface information, but to make it
              useful. Active Lens could recognize important moments during a
              conversation and turn them into actions users could review - from
              updating CRM information and creating tasks to scheduling
              follow-ups or working with AI-generated content.
            </p>
            <CaseStudyImage
              src={activeLensImages.actions}
              alt="Active Lens contextual actions"
            />
          </div>
        </section>

        <section className="case-section" id="design-system">
          <SectionHeading title="Design System">
            <p>
              Alongside the redesign, I created a new design system to bring
              consistency to the existing product and provide a scalable
              foundation for new AI functionality.
            </p>
            <ul>
              <li>Reusable components</li>
              <li>Consistent interaction patterns</li>
              <li>Clear states and behaviors</li>
              <li>Light and dark interfaces</li>
              <li>Shared visual rules across the product</li>
            </ul>
            <p>
              This gave design and development a common system for evolving the
              product without introducing new inconsistencies.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={activeLensImages.designSystem}
            alt="Active Lens design system"
          />
        </section>

        <section className="case-section" id="validation">
          <SectionHeading title="Validation & Iteration">
            <p>
              I reviewed the main flows and design decisions with the founder
              and Design Lead throughout the project. Their feedback helped
              refine product logic, interaction details, and how the new AI
              functionality fit into the existing experience.
            </p>
            <p>
              I also worked closely with development to make sure the proposed
              interactions were technically feasible before final handoff. The
              redesigned experience was then implemented and shipped to
              production.
            </p>
          </SectionHeading>
        </section>

        <section className="case-section" id="final-experience">
          <SectionHeading title="Final Experience & Outcome">
            <div>
              <p>
                The final product connected the experience across three key
                moments:
              </p>
              <ul>
                <li>Before - prepare and access relevant context</li>
                <li>
                  During - capture the conversation and get real-time AI
                  assistance
                </li>
                <li>
                  After - turn the meeting into notes, decisions, and actions
                </li>
              </ul>
            </div>
          </SectionHeading>
          <div className="info-grid info-grid-outcomes">
            <InfoCard
              title="Clearer structure"
              body="More predictable navigation and screen behavior"
            />
            <InfoCard
              title="Simpler workflows"
              body="Core product flows restructured and streamlined"
            />
            <InfoCard
              title="Scalable foundation"
              body="New design system built from scratch"
            />
            <InfoCard
              title="Shipped product"
              body="Redesign and new AI capabilities released to production"
            />
          </div>
          <ImageSlider
            images={activeLensImages.final}
            alt="Final Active Lens product experience"
          />
        </section>
      </main>

      <footer className="case-footer">
        <span>© 2026</span>
        <FooterClock />
      </footer>
    </div>
  );
}
