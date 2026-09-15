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

const fairoSections = [
  ['overview', 'Overview'],
  ['what-i-did', 'What I did'],
  ['starting-point', 'Starting Point'],
  ['product-research', 'Product Research'],
  ['product-scope', 'Product Scope'],
  ['onboarding', 'Onboarding'],
  ['invoicing', 'Invoicing'],
  ['bookkeeping', 'Bookkeeping'],
  ['tax-reporting', 'Tax Reporting'],
  ['edge-cases', 'Edge Cases'],
  ['design-system', 'Design System'],
  ['launch-results', 'Launch & Results'],
] as const;

const fairoImages = {
  overview: '/assets/fairo-overview.png',
  startingPoint: [
    '/assets/fairo-starting-1.png',
    '/assets/fairo-starting-2.png',
    '/assets/fairo-starting-3.png',
  ],
  productResearch: [
    '/assets/fairo-research-1.png',
    '/assets/fairo-research-2.png',
    '/assets/fairo-research-3.png',
  ],
  onboarding: [
    '/assets/fairo-onboarding-1.png',
    '/assets/fairo-onboarding-2.png',
  ],
  invoicing: [
    '/assets/fairo-invoicing-1.png',
    '/assets/fairo-invoicing-2.png',
    '/assets/fairo-invoicing-3.png',
  ],
  bookkeeping: [
    '/assets/fairo-bookkeeping-1.png',
    '/assets/fairo-bookkeeping-2.png',
    '/assets/fairo-bookkeeping-3.png',
  ],
  taxReporting: [
    '/assets/fairo-tax-1.png',
    '/assets/fairo-tax-2.png',
    '/assets/fairo-tax-3.png',
  ],
  edgeCases: '/assets/fairo-edge-cases.png',
  designSystem: '/assets/fairo-design-system.png',
};

export default function FairoCaseStudy() {
  return (
    <div className="case-page fairo-case-page">
      <CaseStudyHeader />

      <div className="case-sidebar-positioner">
        <SidebarNavigation sections={fairoSections} />
      </div>

      <main className="case-sections">
        <section className="case-section case-overview" id="overview">
          <div className="case-intro">
            <div className="case-title">
              <h1>Fairo</h1>
              <p>
                Designing the first version of an all-in-one financial platform
                for freelancers - from onboarding and invoicing to bookkeeping
                and tax reporting.
              </p>
            </div>
            <p>
              Fairo was built to help freelancers and self-employed
              professionals manage the administrative side of their business
              from one mobile app. I joined when an early version already
              existed, but it consisted of only a handful of fragmented screens.
              Over roughly six months, I helped rebuild the experience almost
              from scratch, created the design system, and designed the core
              product flows through the launch of P1.
            </p>
            <div className="case-metadata">
              <div className="metadata-row">
                <div>
                  <span>Role</span>
                  <p>Product Designer</p>
                </div>
                <div>
                  <span>Duration</span>
                  <p>~6 months</p>
                </div>
              </div>
              <div className="metadata-row">
                <div>
                  <span>Scope</span>
                  <p>
                    Product design, UX/UI, Design system, Competitor research
                  </p>
                </div>
                <div>
                  <span>Collaboration</span>
                  <p>Design Lead, Product Owner, Product Managers, Developer</p>
                </div>
              </div>
            </div>
          </div>
          <CaseStudyImage
            src={fairoImages.overview}
            alt="Fairo financial platform overview"
          />
        </section>

        <section className="case-section" id="what-i-did">
          <SectionHeading title="What I did">
            <p>
              I worked across the core product areas sequentially, collaborating
              with a dedicated Product Manager for each domain and a Product
              Owner responsible for the overall product.
            </p>
            <ul>
              <li>
                Redesigned an early fragmented product into a complete mobile
                experience
              </li>
              <li>
                Designed onboarding, invoicing, bookkeeping, and tax reporting
                flows
              </li>
              <li>
                Worked through complex validation, error, loading, and status
                scenarios
              </li>
              <li>
                Conducted competitor research and translated business and
                regulatory requirements into product flows
              </li>
              <li>Built the design system alongside the product</li>
              <li>
                Worked closely with Product Managers, developers, and
                stakeholders through refinement and delivery
              </li>
            </ul>
          </SectionHeading>
          <div className="info-grid fairo-three-column-grid fairo-metric-grid">
            <InfoCard title="4" body="Core product areas" />
            <InfoCard title="~6 months" body="From design to launch" />
            <InfoCard title="1" body="Design system" />
          </div>
        </section>

        <section className="case-section" id="starting-point">
          <SectionHeading title="Starting Point">
            <p>
              When I joined, Fairo already had an early version of the app, but
              it contained only a small number of screens and lacked a
              consistent product structure or design language.
            </p>
            <p>
              What started as a redesign quickly became closer to a ground-up
              product build. We had to establish the foundations of the
              experience while simultaneously designing the core features for
              the first product release.
            </p>
            <p>
              Product decisions were informed by competitor research, business
              and regulatory requirements, and continuous collaboration with
              Product Managers and stakeholders.
            </p>
          </SectionHeading>
          <ImageSlider
            images={fairoImages.startingPoint}
            alt="Early Fairo product experience"
          />
        </section>

        <section className="case-section" id="product-research">
          <SectionHeading title="Product Research">
            <p>
              Before moving into the redesign, I reviewed the existing Fairo
              experience and compared it with competing financial and accounting
              products.
            </p>
            <p>
              The audit helped identify inconsistencies in navigation,
              interaction patterns, visual hierarchy, and reusable UI.
              Competitor research helped us understand established patterns
              around invoicing, bookkeeping, and financial administration, and
              where Fairo needed to stay familiar versus simplify the
              experience.
            </p>
            <p>Key areas I focused on:</p>
          </SectionHeading>
          <div className="info-grid fairo-three-column-grid fairo-research-grid">
            <InfoCard
              title="Existing UX"
              body="Navigation, flows, hierarchy, consistency and usability issues."
            />
            <InfoCard
              title="Competitor patterns"
              body="How similar products structured invoicing, bookkeeping and financial tasks."
            />
            <InfoCard
              title="Design opportunities"
              body="Simplify complex workflows and create a more consistent product foundation."
            />
          </div>
          <ImageSlider
            images={fairoImages.productResearch}
            alt="Fairo product and competitor research"
          />
        </section>

        <section className="case-section" id="product-scope">
          <SectionHeading title="Product Scope">
            <p>
              Fairo brought several complex business tasks into one product.
              Each area had its own flows and requirements, but they needed to
              feel like parts of the same system.
            </p>
          </SectionHeading>
          <div className="info-grid fairo-scope-grid">
            <InfoCard
              title="01 Onboarding"
              body="Identity, business verification, AML, e-signature and contracts."
            />
            <InfoCard
              title="02 Invoicing"
              body="Creating, sending and managing invoices for local and international clients."
            />
            <InfoCard
              title="03 Bookkeeping"
              body="Managing transactions, financial records and connections with invoices."
            />
            <InfoCard
              title="04 Tax Reporting"
              body="Understanding obligations, preparing reports, paying taxes and tracking statuses."
            />
          </div>
        </section>

        <section className="case-section" id="onboarding">
          <SectionHeading title="Onboarding">
            <p>
              Onboarding had to collect and verify much more information than a
              typical consumer app.
            </p>
            <p>
              The flow covered registration, identity and business verification,
              AML requirements, electronic signatures, contracts, and multiple
              verification scenarios. My focus was to break this long process
              into understandable steps and keep users oriented even when
              additional checks or system processing were required.
            </p>
            <p>
              Registration → ID verification → Business data → AML → E-Signature
              → Contract
            </p>
          </SectionHeading>
          <ImageSlider
            images={fairoImages.onboarding}
            alt="Fairo onboarding experience"
          />
        </section>

        <section className="case-section" id="invoicing">
          <SectionHeading title="Invoicing">
            <p>
              Creating an invoice needed to feel lightweight, while real
              business scenarios introduced much more complexity.
            </p>
            <p>
              The experience had to support new and existing clients,
              international recipients, multiple items, currencies and
              languages, editable payment details, invoice statuses, sharing,
              and supporting documents such as Acts of Completion.
            </p>
            <p>
              I designed the common path to stay fast while keeping advanced
              options available when they were needed.
            </p>
          </SectionHeading>
          <ImageSlider
            images={fairoImages.invoicing}
            alt="Fairo invoicing experience"
          />
        </section>

        <section className="case-section" id="bookkeeping">
          <SectionHeading title="Bookkeeping">
            <p>
              Bookkeeping needed to work for users with different levels of
              automation. Some records could come from connected financial
              sources, while others had to be added or corrected manually.
            </p>
            <p>
              I worked on transaction lists, manual entries, transaction
              details, invoice connections, taxable and non-taxable states, and
              the supporting flows around managing financial records.
            </p>
            <p>
              The goal was to connect bookkeeping with the activity users were
              already creating elsewhere in Fairo rather than make it feel like
              a separate accounting tool.
            </p>
          </SectionHeading>
          <ImageSlider
            images={fairoImages.bookkeeping}
            alt="Fairo bookkeeping experience"
          />
        </section>

        <section className="case-section" id="tax-reporting">
          <SectionHeading title="Tax Reporting">
            <p>
              Tax reporting combined calculations, reporting periods, deadlines,
              payments, submissions, and statuses that depended on external
              systems.
            </p>
            <p>
              The experience guided users from understanding an upcoming
              obligation through reviewing their data, submitting a report, and
              tracking what happened afterwards.
            </p>
            <p>
              I designed tax and ESV reporting flows, including upcoming and
              past events, summaries, payments, deadlines, and different
              submission states.
            </p>
          </SectionHeading>
          <ImageSlider
            images={fairoImages.taxReporting}
            alt="Fairo tax reporting experience"
          />
        </section>

        <section className="case-section" id="edge-cases">
          <SectionHeading title="Edge Cases">
            <p>
              A significant part of the work happened outside the primary flows.
            </p>
            <p>
              The product had to account for invalid data, failed verification,
              processing delays, overdue reports, rejected submissions, missing
              information, empty states, and recovery scenarios.
            </p>
            <p>
              Designing these states alongside the main journeys helped make
              complex financial processes more predictable when something went
              wrong.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={fairoImages.edgeCases}
            alt="Fairo product edge cases and states"
          />
        </section>

        <section className="case-section" id="design-system">
          <SectionHeading title="Design System">
            <p>
              The early product did not have a scalable UI foundation, so I
              worked on the design system alongside feature development.
            </p>
            <p>
              I established reusable patterns for typography, colors,
              navigation, buttons, inputs, financial records, and common
              components. The system also supported localization and recurring
              interaction patterns across different parts of the product. This
              helped keep a rapidly growing number of screens and states
              consistent across the experience.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={fairoImages.designSystem}
            alt="Fairo design system"
          />
        </section>

        <section className="case-section" id="launch-results">
          <SectionHeading title="Launch & Results">
            <p>
              I completed my work on Fairo around the launch of P1. The product
              continued evolving after my involvement and later expanded into
              banking before eventually being discontinued.
            </p>
            <p>
              For me, Fairo remains one of the strongest examples of designing a
              complex financial product from early foundations through launch -
              across multiple interconnected domains, regulatory constraints,
              and a large number of real product states.
            </p>
          </SectionHeading>
          <div className="info-grid fairo-three-column-grid fairo-metric-grid">
            <InfoCard title="158K" body="Logins in Ukraine" />
            <InfoCard title="3,500" body="Tax reports submitted" />
            <InfoCard title="~60 sec" body="To create an invoice" />
          </div>
        </section>
      </main>

      <CaseStudyFooter />
    </div>
  );
}
