import { Match as M, Schema as S } from 'effect'
import { Command, Runtime } from 'foldkit'
import { Document, html } from 'foldkit/html'
import { m } from 'foldkit/message'

// MODEL

export const Model = S.Struct({
  activeSection: S.String,
})
export type Model = typeof Model.Type

// MESSAGE

const ClickedNav = m('ClickedNav', { section: S.String })

export const Message = S.Union([ClickedNav])
export type Message = typeof Message.Type

// INIT

export const init: Runtime.ProgramInit<Model, Message> = () => [
  { activeSection: 'hero' },
  [],
]

// UPDATE

export const update = (
  model: Model,
  message: Message,
): readonly [Model, ReadonlyArray<Command.Command<Message>>] =>
  M.value(message).pipe(
    M.withReturnType<readonly [Model, ReadonlyArray<Command.Command<Message>>]>(),
    M.tagsExhaustive({
      ClickedNav: ({ section }) => [{ ...model, activeSection: section }, []],
    }),
  )

// DATA

const experience = [
  {
    role: 'Chief Technology Officer',
    company: '[Your Company]',
    period: '2021 — Present',
    achievements: [
      'Scaled engineering team from 5 to 40+ across 3 continents',
      'Architected microservices migration, reducing downtime by 99.9%',
      'Led technical due diligence for $50M Series B funding',
    ],
  },
  {
    role: 'VP of Engineering',
    company: '[Previous Company]',
    period: '2018 — 2021',
    achievements: [
      'Delivered flagship SaaS product 2 months ahead of schedule',
      'Implemented robust CI/CD pipelines reducing deployment time by 80%',
      'Mentored 10+ senior engineers into leadership roles',
    ],
  },
]

const skills = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'C#', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'NodeJS', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Laravel', category: 'Frameworks' },
  { name: 'Electron', category: 'Frameworks' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'CI/CD', category: 'Infrastructure' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'Technical Strategy', category: 'Leadership' },
  { name: 'Team Building', category: 'Leadership' },
  { name: 'System Architecture', category: 'Leadership' },
  { name: 'Agile Delivery', category: 'Leadership' },
]

const skillCategories = ['Languages', 'Frameworks', 'Infrastructure', 'Leadership']

const projects = [
  {
    name: 'marketplace',
    description: 'Web3 decentralized trading platform on Polygon',
    impact: '$10M+ monthly volume • 50ms execution latency',
    tags: ['TypeScript', 'Web3', 'Architecture'],
  },
  {
    name: 'cookietouch',
    description: 'Enterprise-grade bot automation framework for Dofus Touch',
    impact: '100k+ daily automated actions • Zero ban rate',
    tags: ['TypeScript', 'NodeJS', 'Electron'],
  },
  {
    name: 'cookiebot',
    description: 'Intelligent automation system scaling infrastructure',
    impact: 'Reduced manual ops by 90% • 500+ nodes managed',
    tags: ['TypeScript', 'NodeJS', 'Systems'],
  },
  {
    name: 'lru',
    description: 'High-performance LRU cache implementation',
    impact: 'O(1) complexity • 3x faster than standard Map',
    tags: ['TypeScript', 'Algorithm', 'Performance'],
  },
  {
    name: 'xswf',
    description: 'SWF file parser and reverse-engineering analyzer',
    impact: 'Decoded 10k+ assets • Core to automation strategy',
    tags: ['TypeScript', 'Binary', 'Reverse Engineering'],
  },
  {
    name: 'starter',
    description: 'Modern enterprise project scaffolding tool',
    impact: 'Adopted by 5 teams • Cut setup time from days to minutes',
    tags: ['TypeScript', 'CLI', 'Tooling'],
  },
  {
    name: 'codetube',
    description: 'Code sharing and interactive tutorial platform',
    impact: '10k+ active users • Real-time collaboration',
    tags: ['TypeScript', 'React', 'Fullstack'],
  },
]

const testimonials = [
  {
    quote: "Your testimonial quote here. Chris's technical leadership and architectural vision transformed our engineering organization.",
    author: '[Your Name]',
    role: '[Your Title]',
  },
  {
    quote: "Working under Chris's technical direction elevated our entire team. His ability to distill complex system problems into executable roadmaps is unmatched.",
    author: '[Colleague Name]',
    role: '[Their Title]',
  },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/devchris', handle: '@devchris' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/devchris', handle: 'in/devchris' },
]

// VIEW

export const view = (model: Model): Document => {
  const h = html<Message>()

  return {
    title: 'Chris - CTO & Architecture Expert',
    body: h.div(
      [h.Class('min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30')],
      [
        navView(h, model),
        h.main(
          [],
          [
            heroView(h),
            experienceView(h),
            skillsView(h),
            projectsView(h),
            testimonialsView(h),
            contactView(h),
          ],
        ),
        footerView(h),
      ],
    ),
  }
}

// NAVIGATION

const navView = (h: ReturnType<typeof html<Message>>, model: Model) =>
  h.nav(
    [
      h.Class(
        'fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300',
      ),
    ],
    [
      h.div(
        [h.Class('max-w-6xl mx-auto px-6 py-4 flex items-center justify-between')],
        [
          h.div(
            [h.Class('text-lg font-bold tracking-tight text-white flex items-center gap-2')],
            [
              h.span([h.Class('text-cyan-400 font-mono')], ['>_']),
              'devchris',
            ],
          ),
          h.div(
            [h.Class('hidden md:flex gap-8 text-sm font-medium')],
            [
              navLink(h, 'hero', 'Home', model.activeSection),
              navLink(h, 'experience', 'Experience', model.activeSection),
              navLink(h, 'skills', 'Expertise', model.activeSection),
              navLink(h, 'projects', 'Impact', model.activeSection),
              navLink(h, 'contact', 'Connect', model.activeSection),
            ],
          ),
        ],
      ),
    ],
  )

const navLink = (h: ReturnType<typeof html<Message>>, section: string, label: string, active: string) =>
  h.a(
    [
      h.Class(
        `cursor-pointer transition-colors ${
          active === section ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-100'
        }`,
      ),
      h.OnClick(ClickedNav({ section })),
      h.Attribute('href', `#${section}`),
    ],
    [label],
  )

// HERO

const heroView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden'), h.Id('hero')],
    [
      // Decorative background elements
      h.div([h.Class('absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none')], []),
      h.div([h.Class('absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none')], []),

      h.div(
        [h.Class('max-w-4xl w-full relative z-10')],
        [
          h.div(
            [h.Class('mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs')],
            [
              h.span([h.Class('w-2 h-2 rounded-full bg-cyan-400 animate-pulse')], []),
              'SYSTEM.STATUS: ONLINE',
            ],
          ),
          h.h1(
            [h.Class('text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight')],
            [
              'Engineering ',
              h.span([h.Class('gradient-text')], ['Excellence']),
              h.br([]),
              '& Technical Leadership',
            ],
          ),
          h.p(
            [h.Class('text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed')],
            [
              'Chief Technology Officer translating complex business requirements into scalable, robust architectures while building high-performing engineering cultures.',
            ],
          ),
          h.div(
            [h.Class('flex flex-wrap gap-4')],
            [
              h.a(
                [
                  h.Class(
                    'px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition shadow-[0_0_20px_rgba(6,182,212,0.3)]',
                  ),
                  h.Attribute('href', '#experience'),
                ],
                ['Explore Leadership'],
              ),
              h.a(
                [
                  h.Class(
                    'px-8 py-4 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition font-medium',
                  ),
                  h.Attribute('href', '#projects'),
                ],
                ['View Impact'],
              ),
            ],
          ),
        ],
      ),
    ],
  )

// EXPERIENCE

const experienceView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-24 px-6 relative'), h.Id('experience')],
    [
      h.div(
        [h.Class('max-w-4xl mx-auto')],
        [
          h.div(
            [h.Class('mb-16')],
            [
              h.span([h.Class('text-indigo-400 font-mono text-sm')], ['01 // TIMELINE']),
              h.h2([h.Class('text-3xl md:text-4xl font-bold mt-2')], ['Executive Leadership']),
            ],
          ),
          h.div(
            [h.Class('space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent')],
            experience.map((exp) =>
              h.div(
                [h.Class(`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`)],
                [
                  // Timeline dot
                  h.div(
                    [h.Class('flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-indigo-500 group-hover:border-indigo-400/30 transition duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm absolute left-0 md:left-1/2 -translate-x-1/2')],
                    [],
                  ),
                  // Content card
                  h.div(
                    [h.Class('w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-6 md:p-8 rounded-2xl group-hover:border-indigo-500/50 transition duration-300')],
                    [
                      h.div(
                        [h.Class('flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2')],
                        [
                          h.h3([h.Class('text-xl font-bold text-white')], [exp.role]),
                          h.span([h.Class('px-3 py-1 bg-slate-800/50 text-indigo-300 text-xs font-mono rounded-full')], [exp.period]),
                        ],
                      ),
                      h.h4([h.Class('text-lg text-slate-300 mb-6 font-medium')], [exp.company]),
                      h.ul(
                        [h.Class('space-y-3')],
                        exp.achievements.map((achievement) =>
                          h.li(
                            [h.Class('text-slate-400 text-sm flex gap-3 leading-relaxed')],
                            [
                              h.span([h.Class('text-cyan-500 mt-1')], ['▹']),
                              h.span([], [achievement]),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ],
  )

// SKILLS

const skillsView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-24 px-6 bg-slate-900/30'), h.Id('skills')],
    [
      h.div(
        [h.Class('max-w-5xl mx-auto')],
        [
          h.div(
            [h.Class('mb-16')],
            [
              h.span([h.Class('text-cyan-400 font-mono text-sm')], ['02 // EXPERTISE']),
              h.h2([h.Class('text-3xl md:text-4xl font-bold mt-2')], ['Technical Arsenal']),
            ],
          ),
          h.div(
            [h.Class('grid md:grid-cols-2 lg:grid-cols-4 gap-8')],
            skillCategories.map((category) =>
              h.div(
                [h.Class('space-y-6')],
                [
                  h.h3(
                    [h.Class('text-lg font-semibold text-white border-b border-slate-800 pb-2')],
                    [category],
                  ),
                  h.div(
                    [h.Class('flex flex-col gap-3')],
                    skills
                      .filter((s) => s.category === category)
                      .map((skill) =>
                        h.div(
                          [h.Class('flex items-center gap-3 group')],
                          [
                            h.div([h.Class('w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition')], []),
                            h.span([h.Class('text-slate-300 font-medium group-hover:text-white transition')], [skill.name]),
                          ],
                        ),
                      ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ],
  )

// PROJECTS

const projectsView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-24 px-6'), h.Id('projects')],
    [
      h.div(
        [h.Class('max-w-6xl mx-auto')],
        [
          h.div(
            [h.Class('mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6')],
            [
              h.div(
                [],
                [
                  h.span([h.Class('text-indigo-400 font-mono text-sm')], ['03 // IMPACT']),
                  h.h2([h.Class('text-3xl md:text-4xl font-bold mt-2')], ['Featured Initiatives']),
                ],
              ),
              h.p(
                [h.Class('text-slate-400 max-w-md md:text-right text-sm')],
                ['Architectural solutions delivering measurable business value and performance at scale.'],
              ),
            ],
          ),
          h.div(
            [h.Class('grid md:grid-cols-2 lg:grid-cols-3 gap-6')],
            projects.map((project) =>
              h.div(
                [h.Class('glass-panel p-8 rounded-2xl flex flex-col h-full group hover:-translate-y-1 transition duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)]')],
                [
                  h.div(
                    [h.Class('mb-6')],
                    [
                      h.div([h.Class('text-cyan-400 font-mono text-2xl mb-4 opacity-50 group-hover:opacity-100 transition')], ['{/}']),
                      h.h3([h.Class('text-xl font-bold text-white mb-2')], [project.name]),
                      h.p([h.Class('text-slate-400 text-sm leading-relaxed min-h-12')], [project.description]),
                    ],
                  ),
                  h.div(
                    [h.Class('mt-auto')],
                    [
                      h.div(
                        [h.Class('py-4 border-t border-slate-800/50 mb-4')],
                        [
                          h.span([h.Class('block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1')], ['Key Impact']),
                          h.span([h.Class('text-indigo-300 text-sm font-medium')], [project.impact]),
                        ],
                      ),
                      h.div(
                        [h.Class('flex flex-wrap gap-2')],
                        project.tags.map((tag) =>
                          h.span(
                            [h.Class('px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded font-mono')],
                            [tag],
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ],
  )

// TESTIMONIALS

const testimonialsView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-24 px-6 bg-slate-900/30'), h.Id('testimonials')],
    [
      h.div(
        [h.Class('max-w-5xl mx-auto')],
        [
          h.div(
            [h.Class('mb-16 text-center')],
            [
              h.span([h.Class('text-cyan-400 font-mono text-sm')], ['04 // VALIDATION']),
              h.h2([h.Class('text-3xl md:text-4xl font-bold mt-2')], ['Executive Endorsements']),
            ],
          ),
          h.div(
            [h.Class('grid md:grid-cols-2 gap-8')],
            testimonials.map((test) =>
              h.div(
                [h.Class('glass-panel p-8 md:p-10 rounded-2xl relative')],
                [
                  h.div([h.Class('absolute top-6 right-8 text-6xl text-slate-800 font-serif leading-none opacity-50')], ['"']),
                  h.p([h.Class('text-slate-300 text-lg leading-relaxed mb-8 relative z-10 italic')], [test.quote]),
                  h.div(
                    [h.Class('flex items-center gap-4')],
                    [
                      h.div([h.Class('w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl')], [test.author.charAt(0)]),
                      h.div(
                        [],
                        [
                          h.div([h.Class('text-white font-bold')], [test.author]),
                          h.div([h.Class('text-slate-400 text-sm')], [test.role]),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ],
  )

// CONTACT

const contactView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-32 px-6 relative overflow-hidden'), h.Id('contact')],
    [
      // Decorative background elements
      h.div([h.Class('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none')], []),

      h.div(
        [h.Class('max-w-3xl mx-auto text-center relative z-10 glass-panel p-12 rounded-3xl border-slate-800/80')],
        [
          h.span([h.Class('text-cyan-400 font-mono text-sm inline-block mb-4 px-4 py-1 rounded-full bg-slate-900 border border-slate-800')], ['05 // CONNECT']),
          h.h2([h.Class('text-4xl md:text-5xl font-bold mb-6')], ['Ready to scale your engineering?']),
          h.p(
            [h.Class('text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto')],
            ['Open for executive opportunities, consulting engagements, or discussing the next big challenge in distributed systems.'],
          ),
          h.div(
            [h.Class('flex flex-col sm:flex-row items-center justify-center gap-6')],
            [
              h.a(
                [
                  h.Class('px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-lg transition w-full sm:w-auto shadow-lg flex items-center justify-center gap-3'),
                  h.Attribute('href', 'mailto:contact@devchris.me'),
                ],
                [
                  h.span([h.Class('font-mono opacity-60')], ['✉']),
                  'contact@devchris.me',
                ],
              ),
              h.div(
                [h.Class('flex gap-4')],
                socials.map((social) =>
                  h.a(
                    [
                      h.Class('w-14 h-14 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 flex items-center justify-center hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition group'),
                      h.Attribute('href', social.url),
                      h.Attribute('target', '_blank'),
                      h.Attribute('rel', 'noopener noreferrer'),
                      h.Attribute('aria-label', social.name),
                    ],
                    [
                      h.span([h.Class('text-xs font-mono font-medium')], [social.name.substring(0, 2).toUpperCase()]),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    ],
  )

// FOOTER

const footerView = (h: ReturnType<typeof html<Message>>) =>
  h.footer(
    [h.Class('py-8 px-6 border-t border-slate-800/50 bg-slate-950')],
    [
      h.div(
        [h.Class('max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500')],
        [
          h.div(
            [h.Class('flex items-center gap-2')],
            [
              h.span([h.Class('w-2 h-2 rounded-full bg-cyan-500')], []),
              '© 2026 devchris. All rights reserved.',
            ],
          ),
          h.div(
            [h.Class('font-mono')],
            [
              'Built with ',
              h.span([h.Class('text-indigo-400')], ['Foldkit']),
              ' & ',
              h.span([h.Class('text-cyan-400')], ['Effect']),
            ],
          ),
        ],
      ),
    ],
  )
