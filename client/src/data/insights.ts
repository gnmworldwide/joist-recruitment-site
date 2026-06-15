export interface Insight {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  body: string[];
}

export const insights: Insight[] = [
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
