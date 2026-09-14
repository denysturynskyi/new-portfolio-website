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

const genFeedSections = [
  ['overview', 'Overview'],
  ['what-i-did', 'What I did'],
  ['product-discovery', 'Product Discovery'],
  ['user-research', 'User Research'],
  ['product-opportunities', 'Product Opportunities'],
  ['experience-strategy', 'Experience Strategy'],
  ['key-product-decisions', 'Key Product Decisions'],
  ['design-v2', 'Design V2'],
  ['experiment-measurement', 'Experiment & Measurement'],
  ['growth-collaboration', 'Growth Collaboration'],
  ['current-status', 'Current Status'],
] as const;

const genFeedImages = {
  overview: '/assets/genfeed-overview.png',
  userResearch: '/assets/genfeed-user-research.png',
  baselineData: '/assets/genfeed-baseline-data.png',
  userFlows: '/assets/genfeed-user-flows.png',
  architecture: '/assets/genfeed-architecture.png',
  homepage: [
    '/assets/genfeed-homepage-1.png',
    '/assets/genfeed-homepage-2.png',
    '/assets/genfeed-homepage-3.png',
  ],
  profile: [
    '/assets/genfeed-profile-1.png',
    '/assets/genfeed-profile-2.png',
    '/assets/genfeed-profile-3.png',
  ],
  designV2: [
    '/assets/genfeed-design-v2-1.png',
    '/assets/genfeed-design-v2-2.png',
    '/assets/genfeed-design-v2-3.png',
  ],
  experiment: '/assets/genfeed-experiment.png',
};

function DetailCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article className="info-card genfeed-detail-card">
      <p>{eyebrow}</p>
      <p>{title}</p>
      <p>{body}</p>
    </article>
  );
}

export default function GenFeedCaseStudy() {
  return (
    <div className="case-page genfeed-case-page">
      <CaseStudyHeader />

      <div className="case-sidebar-positioner">
        <SidebarNavigation sections={genFeedSections} />
      </div>

      <main className="case-sections">
        <section className="case-section case-overview" id="overview">
          <div className="case-intro">
            <div className="case-title">
              <h1>genFEED</h1>
              <p>
                Designing a creator platform through research, product strategy,
                rapid iteration, and live experimentation.
              </p>
            </div>
            <p>
              genFEED is a platform for AI video creators to publish their work,
              build a recognizable creator identity, and get discovered. I
              initially joined the product for a four-week design trial and
              continued working with the team after it. My work evolved from
              product discovery and UX research into a broader redesign that is
              now running as a live A/B experiment against the existing product.
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
                    href="https://genfeed.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                </div>
              </div>
              <div className="metadata-row">
                <div>
                  <span>Scope</span>
                  <p>
                    Product discovery, User research, UX strategy, Product
                    redesign, Experiments
                  </p>
                </div>
                <div>
                  <span>Collaboration</span>
                  <p>Founder, Developer, Growth</p>
                </div>
              </div>
            </div>
          </div>
          <CaseStudyImage
            src={genFeedImages.overview}
            alt="genFEED creator platform on desktop and mobile"
          />
        </section>

        <section className="case-section" id="what-i-did">
          <SectionHeading title="What I did">
            <p>
              I worked across the product from early discovery to live
              experimentation, connecting research, product strategy, UX
              decisions, and execution.
            </p>
            <ul>
              <li>
                Mapped the business model, creator ecosystem, ICP, and value
                proposition
              </li>
              <li>Audited the existing product and analyzed product data</li>
              <li>Researched competitors and interviewed AI video creators</li>
              <li>
                Mapped the end-to-end creator journey and prioritized product
                opportunities
              </li>
              <li>
                Redesigned the product architecture, homepage, creator profile,
                and sharing experience
              </li>
              <li>
                Redesigned 44 screens, including states and edge cases, plus
                mobile and logged-in / logged-out experiences
              </li>
              <li>
                Worked closely with the founder and developer through fast
                iterations and ongoing Growth discussions
              </li>
            </ul>
          </SectionHeading>
          <div className="info-grid genfeed-three-column-grid">
            <InfoCard title="44" body="Screens redesigned" />
            <InfoCard title="2" body="Product ver. compared" />
            <InfoCard title="1" body="Live experiment" />
          </div>
        </section>

        <section className="case-section" id="product-discovery">
          <SectionHeading title="Product Discovery">
            <p>
              I started by understanding the product beyond its interface: who
              genFEED was for, how creators currently share AI video work, where
              the product sat in the broader creator ecosystem, and where the
              existing experience was losing value. I combined business-model
              work, ICP definition, market and competitor research, product
              analytics, and an early UX/UI audit before moving into solutions.
            </p>
          </SectionHeading>
          <div
            className="genfeed-process"
            aria-label="Product discovery process"
          >
            {[
              'Business model',
              'ICP',
              'Market & Competitors',
              'Product Data',
              'UX Audit',
              'User Research',
            ].map((step, index) => (
              <div className="genfeed-process-item" key={step}>
                {index > 0 ? <span aria-hidden="true">→</span> : null}
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section" id="user-research">
          <SectionHeading title="User Research">
            <p>
              I interviewed AI video creators to challenge the assumptions from
              the initial research and better understand what they needed from a
              creator-focused platform.
            </p>
          </SectionHeading>
          <div className="info-grid genfeed-detail-grid">
            <DetailCard
              eyebrow="Insight 1"
              title="A place to own their identity"
              body="Creators wanted more than another feed - they needed a permanent home for their AI video work."
            />
            <DetailCard
              eyebrow="Insight 2"
              title="Better discovery"
              body="Generic platforms made it difficult for AI creators and their work to stand out."
            />
            <DetailCard
              eyebrow="Insight 3"
              title="Context around the work matters"
              body="Tools, models, workflows, and creative process are part of how AI creators present themselves."
            />
            <DetailCard
              eyebrow="Insight 4"
              title="Recognition creates value"
              body="Visibility, feedback, community, potential clients, and future monetisation all mattered."
            />
          </div>
          <CaseStudyImage
            src={genFeedImages.userResearch}
            alt="genFEED user research"
          />
        </section>

        <section className="case-section" id="product-opportunities">
          <SectionHeading title="Product Opportunities">
            <p>
              Research and product data pointed to a larger problem than
              individual UI issues: genFEED was already attracting attention,
              but the experience was not converting that reach into a strong
              creator relationship.
            </p>
          </SectionHeading>
          <div className="info-grid genfeed-detail-grid">
            <DetailCard
              eyebrow="Opportunity 1"
              title="Activation"
              body="Turn anonymous traffic into registered users and creators."
            />
            <DetailCard
              eyebrow="Opportunity 2"
              title="Creator identity"
              body="Make the profile valuable enough to become a creator's permanent AI-video home."
            />
            <DetailCard
              eyebrow="Opportunity 3"
              title="Discovery"
              body="Build browsing around AI-specific creators, tools, and content rather than generic social patterns."
            />
            <DetailCard
              eyebrow="Opportunity 4"
              title="Engagement & retention"
              body="Create stronger reasons to interact, follow creators, and return."
            />
          </div>
          <CaseStudyImage
            src={genFeedImages.baselineData}
            alt="genFEED baseline product data"
          />
        </section>

        <section className="case-section" id="experience-strategy">
          <SectionHeading title="Experience Strategy">
            <p>
              Instead of redesigning screens independently, I mapped the key
              creator flows across the product to understand how people create,
              curate, share, and grow their presence.
            </p>
            <p>
              This helped me connect onboarding, publishing, profile building,
              sharing, and engagement into one clearer product system — and
              identify where the experience needed simplification, stronger
              continuity, and better growth loops.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={genFeedImages.userFlows}
            alt="genFEED creator user flows"
          />
        </section>

        <section className="case-section" id="key-product-decisions">
          <SectionHeading title="Key Product Decisions">
            <p>
              The redesign focused on simplifying the product around stronger
              creator journeys while testing how discovery, identity, and
              sharing could drive deeper engagement.
            </p>
          </SectionHeading>
          <div className="decision-block">
            <h3>Simplifying the product architecture</h3>
            <p>
              The existing experience had grown across multiple destinations and
              overlapping paths. In Design V2, I simplified the sitemap and
              reduced the number of pages so the product could revolve around
              fewer, stronger destinations.
            </p>
            <CaseStudyImage
              src={genFeedImages.architecture}
              alt="Simplified genFEED product architecture"
            />
          </div>
          <div className="decision-block">
            <h3>Reworking the homepage around discovery</h3>
            <p>
              The homepage became less about simply presenting a feed and more
              about helping users understand what genFEED offers, discover
              relevant work, and move deeper into the creator ecosystem.
            </p>
            <ImageSlider
              images={genFeedImages.homepage}
              alt="genFEED discovery homepage"
            />
          </div>
          <div className="decision-block">
            <h3>Turning the profile into a shareable creator home</h3>
            <p>
              The profile became one of the central product bets. Instead of
              treating it as an account page, I designed it as a creator
              portfolio that could be shared outside genFEED — a persistent home
              for a creator&apos;s AI video identity. The Share experience
              became the Superfeature: the profile itself could help bring new
              viewers back into the product.
            </p>
            <ImageSlider
              images={genFeedImages.profile}
              alt="genFEED shareable creator profile"
            />
          </div>
        </section>

        <section className="case-section" id="design-v2">
          <SectionHeading title="Design V2">
            <p>
              The redesign expanded beyond the initial concepts into a full
              product pass. I redesigned 44 screens, worked through states and
              edge cases, adapted V2 for mobile, and designed web experiences
              for both logged-in and logged-out users.
            </p>
            <p>
              The process is intentionally fast and iterative: I work closely
              with the founder and developer several times a week, often moving
              from rough product ideas to implemented iterations without
              over-polishing early concepts.
            </p>
          </SectionHeading>
          <ImageSlider
            images={genFeedImages.designV2}
            alt="genFEED Design V2"
          />
        </section>

        <section className="case-section" id="experiment-measurement">
          <SectionHeading title="Experiment & Measurement">
            <p>
              Design V2 is currently running against Design V1 as a live product
              experiment. The treatment bundles the new homepage, simplified
              navigation / architecture, and redesigned creator profiles, so the
              test measures the combined experience.
            </p>
          </SectionHeading>
          <CaseStudyImage
            src={genFeedImages.experiment}
            alt="genFEED live experiment measurement"
          />
        </section>

        <section className="case-section" id="growth-collaboration">
          <SectionHeading title="Growth Collaboration">
            <p>
              My role also extends into Growth discussions and experiments
              around how creators discover and enter the product. One
              creator-outreach experiment tested four different messages across
              400 recipients. 382 emails were delivered and five verified
              accounts were matched to the campaign; one of those creators
              reached READY uploads. Monetisation produced three observed
              signups and One home two, but the groups were not randomized, so
              the result is useful as a signal rather than proof of a winning
              message.
            </p>
          </SectionHeading>
        </section>

        <section className="case-section" id="current-status">
          <SectionHeading title="Current Status">
            <p>
              Design V2 is still a live learning experiment. The early data
              suggests stronger browsing and a larger role for creator profiles,
              but the sample is still small and there is no demonstrated
              retention uplift yet. I am continuing to iterate with the founder
              and developer while using the experiment to understand what
              actually changes creator behavior rather than treating the
              redesign itself as the outcome.
            </p>
          </SectionHeading>
          <div className="info-grid genfeed-three-column-grid">
            <InfoCard title="Shipped to experiment" body="Design V2 is live" />
            <InfoCard title="33%" body="Live treatment" />
            <InfoCard
              title="Learning in progress"
              body="Results are directional"
            />
          </div>
        </section>
      </main>

      <CaseStudyFooter />
    </div>
  );
}
