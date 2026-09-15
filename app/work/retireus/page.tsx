import {
  CaseStudyImage,
  ImageSlider,
  SidebarNavigation,
} from '../active-lens/case-study-client';
import {
  CaseStudyFooter,
  CaseStudyHeader,
  InfoCard,
  SectionHeading,
} from '../case-study-layout';

const retireUsSections = [
  ['overview', 'Overview'],
  ['what-i-did', 'What I did'],
  ['product-discovery', 'Product Discovery'],
  ['audience-user-jobs', 'Audience & User Jobs'],
  ['experience-architecture', 'Experience Architecture'],
  ['flows-wireframes', 'From Flows to Wireframes'],
  ['key-product-decisions', 'Key Product Decisions'],
  ['design-system', 'Design System'],
  ['expanding-product', 'Expanding the Product'],
  ['validation-iteration', 'Validation & Iteration'],
  ['final-experience', 'Final Experience & Outcome'],
] as const;

const retireUsImages = {
  overview: '/assets/retireus-overview.png',
  discovery: '/assets/retireus-discovery.png',
  architecture: [
    '/assets/retireus-architecture-1.png',
    '/assets/retireus-architecture-2.png',
  ],
  wireframes: [
    '/assets/retireus-wireframes-1.png',
    '/assets/retireus-wireframes-2.png',
    '/assets/retireus-wireframes-3.png',
  ],
  assessment: '/assets/retireus-decision-assessment.png',
  risks: '/assets/retireus-decision-risks.png',
  action: [
    '/assets/retireus-decision-action-1.png',
    '/assets/retireus-decision-action-2.png',
    '/assets/retireus-decision-action-3.png',
  ],
  ongoing: [
    '/assets/retireus-decision-ongoing-1.png',
    '/assets/retireus-decision-ongoing-2.png',
    '/assets/retireus-decision-ongoing-3.png',
  ],
  designSystem: '/assets/retireus-design-system.png',
  expansion: [
    {
      src: '/assets/retireus-web-app.png',
      title: 'Web App',
      body: 'Desktop product experience',
    },
    {
      src: '/assets/retireus-mobile.png',
      title: 'Mobile',
      body: 'Responsive / mobile product experience',
    },
    {
      src: '/assets/retireus-website.png',
      title: 'Website',
      body: 'Public RetireUS website',
    },
  ],
  final: [
    '/assets/retireus-final-1.png',
    '/assets/retireus-final-2.png',
    '/assets/retireus-final-3.png',
  ],
};

function JobCard({
  job,
  title,
  body,
}: {
  job: string;
  title: string;
  body: string;
}) {
  return (
    <article className="info-card retireus-job-card">
      <p>{job}</p>
      <p>{title}</p>
      <p>{body}</p>
    </article>
  );
}

export default function RetireUsCaseStudy() {
  return (
    <div className="case-page retireus-case-page">
      <CaseStudyHeader />

      <div className="case-sidebar-positioner">
        <SidebarNavigation sections={retireUsSections} />
      </div>

      <main className="case-sections">
        <section className="case-section case-overview" id="overview">
          <div className="case-intro">
            <div className="case-title">
              <h1>RetireUS</h1>
              <p>
                RetireUS is a retirement planning platform that helps people
                understand their financial situation, identify risks, and build
                a personalized path toward retirement.
              </p>
            </div>
            <p>
              I worked on the product from scratch for four years as the only
              dedicated Product Designer, evolving it from early concepts and
              wireframes into a shipped web and mobile product.
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
                    href="https://retire.us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div className="metadata-row metadata-row-single">
                <div>
                  <span>Timeline</span>
                  <p>4 years</p>
                </div>
              </div>
              <div className="metadata-row">
                <div>
                  <span>Scope</span>
                  <p>
                    Product discovery, UX architecture, wireframes, web app,
                    mobile app, design system, website
                  </p>
                </div>
                <div>
                  <span>Team</span>
                  <p>
                    Founder, Product Manager, Developer, Brand Designer, Design
                    Lead
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CaseStudyImage
            src={retireUsImages.overview}
            alt="RetireUS retirement planning platform on a laptop"
          />
        </section>

        <section className="case-section" id="what-i-did">
          <SectionHeading title="What I did">
            <p>
              I owned the product design end-to-end, from defining the initial
              experience to continuously evolving the product as new features
              and requirements emerged.
            </p>
            <ul>
              <li>Worked directly with the founder on product direction</li>
              <li>Researched the market and competing retirement products</li>
              <li>Defined key journeys, flows, and product architecture</li>
              <li>
                Created wireframes and designed the complete web application
              </li>
              <li>
                Built the design system and adapted the experience for mobile
              </li>
              <li>
                Designed new functionality, improved existing flows, and created
                the public website
              </li>
            </ul>
          </SectionHeading>
          <div className="info-grid">
            <InfoCard title="4 years" body="Product evolution" />
            <InfoCard title="1 Product Designer" body="End-to-end ownership" />
          </div>
        </section>

        <section className="case-section" id="product-discovery">
          <SectionHeading title="Product Discovery">
            <p>
              Because RetireUS was built from scratch, the first step was
              understanding how a complex retirement service should translate
              into a digital product.
            </p>
            <p>
              I combined regular conversations with the founder with market,
              competitor, and retirement-planning research to define the initial
              structure and core experience.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={retireUsImages.discovery}
            alt="RetireUS product discovery research"
          />
        </section>

        <section className="case-section" id="audience-user-jobs">
          <SectionHeading title="Audience & User Jobs">
            <p>
              There were no formal user interviews, so I used hypothesis-based
              audience segments informed by market research, product
              requirements, and ongoing conversations with the founder.
            </p>
            <p>The experience centered around three main jobs.</p>
          </SectionHeading>
          <div className="retireus-job-grid">
            <JobCard
              job="Job 1"
              title="Understand where I stand"
              body="Evaluate the current financial situation."
            />
            <JobCard
              job="Job 2"
              title="Understand what needs attention"
              body="Identify risks, gaps, and priorities."
            />
            <JobCard
              job="Job 3"
              title="Know what to do next"
              body="Turn insights into a clear retirement plan."
            />
          </div>
        </section>

        <section className="case-section" id="experience-architecture">
          <SectionHeading title="Experience Architecture">
            <p>
              I structured the product around a progression from understanding
              the user&apos;s current situation to managing their retirement
              plan over time.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={retireUsImages.architecture[0]}
            alt="RetireUS experience architecture"
          />
          <CaseStudyImage
            src={retireUsImages.architecture[1]}
            alt="RetireUS retirement planning journey"
          />
        </section>

        <section className="case-section" id="flows-wireframes">
          <SectionHeading title="From Flows to Wireframes">
            <p>
              Once the main experience was defined, I mapped the core flows and
              translated them into wireframes before moving into visual design.
            </p>
            <p>
              The focus was on breaking complex financial processes into
              smaller, understandable steps and creating clear transitions
              between assessment, results, plans, and ongoing management.
            </p>
          </SectionHeading>
          <ImageSlider
            images={retireUsImages.wireframes}
            alt="RetireUS product flows and wireframes"
          />
        </section>

        <section className="case-section" id="key-product-decisions">
          <SectionHeading title="Key Product Decisions">
            <p>
              The main challenge was making complex financial planning
              understandable without removing the information users needed to
              make important decisions.
            </p>
          </SectionHeading>
          <div className="decision-block">
            <h3>Turning assessment into a guided experience</h3>
            <p>
              I broke a long financial assessment into smaller steps with clear
              progress and focused questions, making a complex process feel more
              manageable.
            </p>
            <CaseStudyImage
              src={retireUsImages.assessment}
              alt="RetireUS guided financial assessment"
            />
          </div>
          <div className="decision-block">
            <h3>Turning financial complexity into clear risks</h3>
            <p>
              Instead of showing users raw financial data, RetireUS translates
              assessment results into clear red flags and explains why each
              issue matters.
            </p>
            <CaseStudyImage
              src={retireUsImages.risks}
              alt="RetireUS financial risk results"
            />
          </div>
          <div className="decision-block">
            <h3>Connecting insight with action</h3>
            <p>
              The experience connects identified risks with personalized plans,
              professional support, and clear next steps rather than leaving
              users with a diagnosis alone.
            </p>
            <ImageSlider
              images={retireUsImages.action}
              alt="RetireUS personalized retirement actions"
            />
          </div>
          <div className="decision-block">
            <h3>Building for an ongoing relationship</h3>
            <p>
              Retirement planning continues after onboarding, so the product
              brings progress, accounts, documents, tasks, and professional
              support into one ongoing experience.
            </p>
            <ImageSlider
              images={retireUsImages.ongoing}
              alt="RetireUS ongoing retirement management"
            />
          </div>
        </section>

        <section className="case-section" id="design-system">
          <SectionHeading title="Design System">
            <p>
              As the product grew, I created a design system from scratch to
              keep the experience consistent and make new functionality easier
              to design and implement.
            </p>
            <p>
              It covered reusable components, forms, states, navigation,
              financial data patterns, and responsive behavior across the
              product.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={retireUsImages.designSystem}
            alt="RetireUS design system"
          />
        </section>

        <section className="case-section" id="expanding-product">
          <SectionHeading title="Expanding the Product">
            <p>
              Over four years, RetireUS continued evolving beyond the original
              web application.
            </p>
            <p>
              I adapted the experience for mobile, designed the public website,
              added new product functionality, and regularly reworked existing
              flows as the business and product requirements changed.
            </p>
          </SectionHeading>
          <div className="retireus-visual-grid">
            {retireUsImages.expansion.map((item) => (
              <article className="retireus-visual-card" key={item.title}>
                <CaseStudyImage
                  className="retireus-visual-image"
                  src={item.src}
                  alt={`RetireUS ${item.title}`}
                />
                <div className="retireus-visual-copy">
                  <p>{item.title}</p>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" id="validation-iteration">
          <SectionHeading title="Validation & Iteration">
            <p>
              The product evolved through continuous collaboration with the
              founder, Product Manager, development team, and internal design
              leadership.
            </p>
            <p>
              Feedback and technical discussions helped refine product logic,
              interactions, and new functionality throughout the four-year
              development of the product.
            </p>
          </SectionHeading>
        </section>

        <section className="case-section" id="final-experience">
          <SectionHeading title="Final Experience & Outcome">
            <p>
              RetireUS grew from an early concept into a shipped platform
              supporting the full retirement-planning journey:
            </p>
            <p>Understand → Identify → Plan → Act → Manage</p>
            <p>
              Over four years, I helped shape both the initial product and its
              continued evolution across web, mobile, the design system, and the
              public website.
            </p>
          </SectionHeading>
          <ImageSlider
            images={retireUsImages.final}
            alt="Final RetireUS product experience"
          />
          <div className="info-grid">
            <InfoCard
              title="Shipped Product"
              body="Built from zero to production"
            />
            <InfoCard title="4 Years" body="Continuous product evolution" />
            <InfoCard title="Design System" body="Created from scratch" />
            <InfoCard
              title="Web + Mobile"
              body="Expanded across multiple platforms"
            />
          </div>
        </section>
      </main>

      <CaseStudyFooter />
    </div>
  );
}
