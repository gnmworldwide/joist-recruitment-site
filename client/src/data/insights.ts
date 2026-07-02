export interface Insight {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  body: string[];
  source?: { essayTitle: string; url: string };
}

export const insights: Insight[] = [
  {
    slug: "energy-transition-workforce",
    title: "The workforce behind the energy transition",
    tag: "Market Insight",
    excerpt:
      "Britain's clean power build-out is, underneath, a hiring problem. The grid upgrades and connections the country is counting on depend on tens of thousands of skilled trades the current pipeline is not producing. We look at the numbers and what they mean for hiring.",
    body: [
      "Britain's energy debate is usually framed around fuel and targets. The harder constraint sits further down the chain. Every gigawatt of new generation, every mile of grid reinforcement, and every substation has to be physically built by someone, and the people who build it are in short supply.",
      "The scale of demand is significant. The government's Green Jobs Delivery Group has set a goal of supporting up to 480,000 skilled green jobs by 2030, and National Grid alone expects to support more than 55,000 additional UK jobs by the end of the decade. These are not abstract figures. They represent roles that have to be filled against a timetable set by national infrastructure commitments.",
      "The pressure is sharpest in the electrical trades. Industry analyses estimate the sector may need in the order of 230,000 additional electricians by 2030 to meet demand, while losing a net 5,000 to 10,000 a year to retirement and attrition. The exact figure is contestable, but the direction is not: demand is rising quickly against a workforce that is thinning at the experienced end.",
      "The specific roles matter more than the headline count. Connecting clean power at scale depends on cable jointers, high-voltage linesmen, and substation engineers, alongside the project and commercial staff who hold a programme together. These are not roles that can be trained in months, and they are exactly the roles where a reformed connection queue and a funded grid programme still stall without the people to execute them.",
      "For employers, the practical takeaway is that this is a structural shortage for the rest of the decade, not a temporary shortfall. Firms bidding for grid, renewable, and wider infrastructure work are competing for the same limited pool of experienced trades and technical staff, and that competition intensifies as more projects clear the connection queue at once.",
      "The advantage goes to firms that treat hiring for these delivery-critical roles as planned, ongoing work rather than a reactive scramble once a contract is won. Knowing where the genuinely experienced people are, and building relationships with them before the role is live, is increasingly the difference between a programme that stays on schedule and one that waits on the people to deliver it.",
    ],
    source: {
      essayTitle: "Britain's Energy Security Problem",
      url: "https://guynkona.substack.com/p/britains-energy-security-problem",
    },
  },
  {
    slug: "commonwealth-built-environment-talent",
    title: "Where Britain's built environment talent comes from",
    tag: "Global Perspective",
    excerpt:
      "UK construction and engineering already depend on internationally trained professionals, many from across the Commonwealth. For firms struggling to fill experienced roles, understanding these talent flows is becoming part of a serious hiring strategy.",
    body: [
      "When firms talk about the skills shortage in construction and engineering, the conversation usually stays inside the UK labour market. It is worth widening the frame. A significant share of the experienced professionals already working in British construction, engineering, and the wider built environment trained or built their careers abroad, and a large part of that flow comes from across the Commonwealth.",
      "The pattern is long established. Skilled professionals from countries such as Nigeria, Ghana, Kenya, India, and across the Caribbean often train to shared academic and professional standards, gain experience in the UK, Canada, or Australia, and build their careers there. The result is that UK construction and engineering, like the health service and parts of financial and legal services, quietly rely on internationally trained talent to fill roles the domestic pipeline does not supply in sufficient numbers.",
      "A shared legal and professional heritage makes this pool more accessible than it first appears. Common language, compatible qualifications, and familiar commercial and contractual norms mean an engineer or project professional trained in Nairobi, Accra, or Kuala Lumpur can often adapt to UK delivery conditions faster than the distance suggests. These are people who understand planning frameworks, complex stakeholder environments, and delivery under tight commercial constraints.",
      "This cuts two ways for employers. It points to a wider candidate pool than a UK-only search assumes, particularly for mid to senior roles where experience matters more than proximity. It is also a retention signal: strong professionals at that level increasingly have international options, so the firms that keep them are the ones offering scope and seriousness, not only salary.",
      "The practical takeaway is not that firms should look abroad instead of at home. It is that a serious hiring strategy for hard to fill built environment roles treats internationally trained talent, and Commonwealth-trained talent in particular, as part of the picture rather than an afterthought, and understands the routes, recognition, and relationships that make those hires work.",
    ],
    source: {
      essayTitle: "The Commonwealth's Missing Architecture",
      url: "https://guynkona.substack.com/p/the-commonwealths-missing-architecture",
    },
  },
  {
    slug: "skills-gap",
    title: "The skills gap slowing UK project delivery",
    tag: "Market Insight",
    excerpt:
      "Delays across major UK infrastructure and housing programmes are increasingly linked to a shortage of experienced commercial and technical professionals, not just materials or supply chain disruption. We look at where the pressure is sharpest and what it means for hiring strategy.",
    body: [
      "Across major UK infrastructure and housing programmes, a familiar pattern is emerging: delays are increasingly tied not to materials or supply chains, but to people. Specifically, a shortage of experienced commercial and technical professionals capable of carrying a project from early-stage cost planning through to practical completion.",
      "Quantity surveyors with genuine post-contract delivery experience are in short supply. So are site managers who can hold a programme together when subcontractors fall behind, and project managers who understand both the commercial pressure from above and the operational reality on site.",
      "This isn't simply a numbers problem. Many firms report enough applicants for open roles, but too few candidates with the right mix of technical grounding and delivery experience. A CV that lists the right job titles doesn't always mean the person can manage a live commercial dispute, reforecast a cost plan under pressure, or keep a site team aligned when a project slips behind.",
      "The result is a widening gap between the people firms need and the people firms can find through conventional channels. Roles sit open for months. Existing teams absorb additional pressure. Project timelines stretch.",
      "For employers, the practical takeaway is this: where the skills gap is sharpest (commercial management, delivery-stage QS, senior site leadership) standard advertising and high-volume sourcing increasingly fall short. Finding the right person means understanding what \"right\" actually looks like for a specific project, team, and stage of delivery, and being willing to look beyond the obvious candidate pool.",
      "We track where this pressure is building across the sectors we work in, and what it means for hiring strategy over the next 12 to 18 months.",
    ],
  },
  {
    slug: "cv-matching",
    title: "Why built environment hiring needs more than CV matching",
    tag: "Recruitment Practice",
    excerpt:
      "Volume-based recruitment misses what matters most in construction and engineering roles: technical judgement, commercial awareness, and the ability to operate under delivery pressure. The firms getting this right are thinking differently about how they assess candidates.",
    body: [
      "Most recruitment in construction and the built environment still runs on a simple model: match keywords on a CV to keywords in a job description, then send through a shortlist. For high-volume, junior, or highly standardised roles, this can work well enough.",
      "For the roles that actually determine whether a project succeeds, it usually doesn't.",
      "A site manager's CV can list every project type, value band, and contract form a client could ask for, and still miss the thing that matters most: how that person behaves when a programme is slipping, a subcontractor is underperforming, and three stakeholders want three different answers by Friday. A quantity surveyor can have the right qualifications and still struggle with the commercial reality of a live dispute, or the judgement calls that come with cost certainty under pressure.",
      "These are the qualities that volume-based recruitment is structurally bad at assessing: technical judgement under pressure, commercial awareness beyond the numbers on a page, and the ability to operate when a project stops going to plan. Which, in construction, is most of the time.",
      "The firms getting this right tend to do a few things differently. They spend time understanding the specific pressures of the role and the project, not just the job title. They ask questions that reveal how a candidate has actually handled difficult moments, not just what they were responsible for on paper. And they treat shortlisting as a judgement exercise, not a filtering exercise.",
      "This is slower than keyword matching. It is also, for the roles that matter most, the only approach that consistently works.",
    ],
  },
  {
    slug: "international-talent",
    title:
      "What international urban development conversations reveal about UK talent demand",
    tag: "Global Perspective",
    excerpt:
      "Global built environment discussions at forums like the World Urban Forum consistently surface demand for UK-trained planning, design, and commercial expertise. What does this mean for UK professionals considering international moves, and for businesses seeking that experience domestically?",
    body: [
      "Forums like the World Urban Forum bring together planners, architects, developers, and policymakers from across the world to discuss how cities grow, how housing gets delivered, and how infrastructure keeps pace with demand. On the surface, these conversations can feel far removed from the day-to-day hiring decisions facing a UK construction or development firm.",
      "In practice, they reveal something directly relevant: UK-trained expertise in planning, design, and commercial delivery is consistently in demand internationally, and the skills that make someone effective in a UK built environment role (navigating planning frameworks, managing complex stakeholder environments, delivering within tight commercial constraints) transfer well to fast-growing markets elsewhere.",
      "This cuts both ways for UK employers.",
      "First, it's a reminder that strong UK professionals, particularly at mid-to-senior level, increasingly have international options. Retention isn't just about salary; it's about whether a role offers the scope and seriousness that ambitious people are looking for.",
      "Second, it points to a pool of talent that's often overlooked: professionals with international built environment experience who understand UK-equivalent planning and delivery pressures, and who bring a broader perspective to teams that can otherwise become insular.",
      "For firms thinking about where their next strong hire might come from, particularly for roles where adaptability and broad delivery experience matter, it's worth looking slightly wider than the usual UK-only candidate pool. The same conversations happening at international forums are, increasingly, conversations UK employers should be paying attention to.",
    ],
  },
];
