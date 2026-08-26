import { Match as M, Schema as S } from 'effect'
import { Command, Runtime } from 'foldkit'
import { Document, html } from 'foldkit/html'
import { m } from 'foldkit/message'
import { evo } from 'foldkit/struct'

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

type UpdateReturn = readonly [Model, ReadonlyArray<Command.Command<Message>>]
const withUpdateReturn = M.withReturnType<UpdateReturn>()

export const update = (model: Model, message: Message): UpdateReturn =>
  M.value(message).pipe(
    withUpdateReturn,
    M.tagsExhaustive({
      ClickedNav: ({ section }) => [
        evo(model, { activeSection: () => section }),
        [],
      ],
    }),
  )

// DATA

const journey = [
  {
    index: 'THEN',
    title: 'Web products',
    description:
      'Laravel marketplaces, SaaS starters, and video products taught me to think beyond the code and own the whole experience.',
  },
  {
    index: 'NEXT',
    title: 'Typed tooling',
    description:
      'Node.js, TypeScript, and Electron pulled me toward libraries, automation, API clients, and developer tools.',
  },
  {
    index: 'NOW',
    title: 'Deeper systems',
    description:
      'Today I spend more time with Effect, Rust, protocols, and Solidity—still learning the same way: by building real things.',
  },
]

const skills = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Rust', category: 'Languages' },
  { name: 'Solidity', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Effect', category: 'Runtime & Web' },
  { name: 'Node.js', category: 'Runtime & Web' },
  { name: 'React', category: 'Runtime & Web' },
  { name: 'Laravel', category: 'Runtime & Web' },
  { name: 'API design', category: 'Systems' },
  { name: 'PostgreSQL', category: 'Systems' },
  { name: 'Docker', category: 'Systems' },
  { name: 'Cloudflare', category: 'Systems' },
  { name: 'Product engineering', category: 'Practice' },
  { name: 'Architecture', category: 'Practice' },
  { name: 'Automation', category: 'Practice' },
  { name: 'Technical direction', category: 'Practice' },
]

const skillCategories = ['Languages', 'Runtime & Web', 'Systems', 'Practice']

const projects = [
  {
    name: 'effect-cdp',
    description:
      'A type-safe Chrome DevTools Protocol client for Effect with streaming events and explicit error handling.',
    detail: '58 protocol domains · generated types',
    url: 'https://github.com/yovanoc/effect-cdp',
    tags: ['TypeScript', 'Effect', 'CDP'],
  },
  {
    name: 'devchris',
    description:
      'The site you are reading: a Foldkit and Effect application deployed to Cloudflare with Alchemy.',
    detail: 'Live project · devchris.me',
    url: 'https://github.com/yovanoc/devchris',
    tags: ['Foldkit', 'Effect', 'Cloudflare'],
  },
  {
    name: 'finary',
    description: 'A focused Rust API client for integrating with Finary.',
    detail: 'Open source · Rust',
    url: 'https://github.com/yovanoc/finary',
    tags: ['Rust', 'API', 'Client'],
  },
  {
    name: 'mailsac',
    description:
      'A Mailsac API library designed to work in both the browser and Node.js.',
    detail: 'Open source · TypeScript',
    url: 'https://github.com/yovanoc/mailsac',
    tags: ['TypeScript', 'API', 'Node.js'],
  },
  {
    name: 'lru',
    description:
      'A finite key-value cache backed by a doubly linked list that keeps commonly used entries in memory.',
    detail: 'O(1) key lookup · TypeScript',
    url: 'https://github.com/yovanoc/lru',
    tags: ['TypeScript', 'Algorithms', 'Performance'],
  },
  {
    name: 'codetube',
    description: 'A YouTube-style video platform built with Laravel.',
    detail: 'Open source · PHP',
    url: 'https://github.com/yovanoc/codetube',
    tags: ['PHP', 'Laravel', 'Product'],
  },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/yovanoc' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yovanoc/' },
]

// VIEW

export const view = (model: Model): Document => {
  const h = html<Message>()

  return {
    title: 'Christopher Yovanovitch — Software Engineer',
    body: h.div(
      [
        h.Class(
          'min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30',
        ),
      ],
      [
        h.a(
          [
            h.Class(
              'sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950',
            ),
            h.Attribute('href', '#content'),
          ],
          ['Skip to content'],
        ),
        navView(h, model),
        h.main(
          [h.Id('content')],
          [
            heroView(h),
            aboutView(h),
            skillsView(h),
            projectsView(h),
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
        'fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/85 backdrop-blur-md',
      ),
      h.Attribute('aria-label', 'Primary navigation'),
    ],
    [
      h.div(
        [
          h.Class(
            'max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4',
          ),
        ],
        [
          h.a(
            [
              h.Class(
                'text-sm sm:text-lg font-bold tracking-tight text-white flex items-center gap-2 shrink-0',
              ),
              h.Attribute('href', '#hero'),
              h.Attribute('aria-label', 'DevChris home'),
              h.OnClick(ClickedNav({ section: 'hero' })),
            ],
            [h.span([h.Class('text-cyan-400 font-mono')], ['>_']), 'devchris'],
          ),
          h.div(
            [
              h.Class(
                'flex items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium',
              ),
            ],
            [
              navLink(h, 'about', 'About', model.activeSection),
              navLink(h, 'skills', 'Stack', model.activeSection),
              navLink(h, 'projects', 'Work', model.activeSection),
              navLink(h, 'contact', 'Contact', model.activeSection),
            ],
          ),
        ],
      ),
    ],
  )

const navLink = (
  h: ReturnType<typeof html<Message>>,
  section: string,
  label: string,
  active: string,
) =>
  h.a(
    [
      h.Class(
        `transition-colors ${
          active === section
            ? 'text-cyan-400'
            : 'text-slate-400 hover:text-slate-100'
        }`,
      ),
      h.OnClick(ClickedNav({ section })),
      h.Attribute('href', `#${section}`),
      h.Attribute('aria-current', active === section ? 'page' : 'false'),
    ],
    [label],
  )

// HERO

const heroView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [
      h.Class(
        'min-h-screen flex items-center justify-center px-6 pt-28 pb-20 relative overflow-hidden scroll-mt-24',
      ),
      h.Id('hero'),
    ],
    [
      h.div(
        [
          h.Class(
            'absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none',
          ),
          h.Attribute('aria-hidden', 'true'),
        ],
        [],
      ),
      h.div(
        [
          h.Class(
            'absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none',
          ),
          h.Attribute('aria-hidden', 'true'),
        ],
        [],
      ),
      h.div(
        [
          h.Class(
            'max-w-6xl w-full relative z-10 grid lg:grid-cols-[minmax(0,1fr)_20rem] items-center gap-12 lg:gap-20',
          ),
        ],
        [
          h.div(
            [],
            [
              h.div(
                [
                  h.Class(
                    'mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs',
                  ),
                ],
                [
                  h.span(
                    [
                      h.Class('w-2 h-2 rounded-full bg-cyan-400'),
                      h.Attribute('aria-hidden', 'true'),
                    ],
                    [],
                  ),
                  'FREELANCE · LILLE, FRANCE',
                ],
              ),
              h.p(
                [
                  h.Class(
                    'text-sm font-mono tracking-[0.18em] text-slate-400 uppercase mb-4',
                  ),
                ],
                ['Christopher Yovanovitch'],
              ),
              h.h1(
                [
                  h.Class(
                    'text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.05] text-balance',
                  ),
                ],
                [
                  'Hi, I’m Chris. I build from ',
                  h.span(
                    [h.Class('gradient-text')],
                    ['product idea to protocol detail.'],
                  ),
                ],
              ),
              h.p(
                [
                  h.Class(
                    'text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed text-pretty',
                  ),
                ],
                [
                  'TypeScript is home base; Rust, Solidity, and Effect are how I keep going deeper. I care about useful products, explicit systems, and code the next person can own.',
                ],
              ),
              h.div(
                [h.Class('flex flex-col sm:flex-row gap-4')],
                [
                  h.a(
                    [
                      h.Class(
                        'px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg transition shadow-[0_0_24px_rgba(34,211,238,0.24)] text-center',
                      ),
                      h.Attribute('href', '#projects'),
                    ],
                    ['Explore my work'],
                  ),
                  h.a(
                    [
                      h.Class(
                        'px-7 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition font-medium text-center',
                      ),
                      h.Attribute('href', '#contact'),
                    ],
                    ['Start a conversation'],
                  ),
                ],
              ),
            ],
          ),
          h.div(
            [h.Class('mx-auto w-full max-w-xs order-first lg:order-last')],
            [
              h.div(
                [
                  h.Class(
                    'glass-panel rounded-[2rem] p-3 rotate-2 hover:rotate-0 transition duration-500 shadow-2xl shadow-cyan-950/30',
                  ),
                ],
                [
                  h.img([
                    h.Class(
                      'w-full aspect-square object-cover rounded-[1.45rem] bg-white',
                    ),
                    h.Attribute('src', '/profile.png'),
                    h.Attribute(
                      'alt',
                      'Portrait illustration of Christopher Yovanovitch',
                    ),
                    h.Attribute('width', '460'),
                    h.Attribute('height', '460'),
                    h.Attribute('decoding', 'async'),
                  ]),
                  h.div(
                    [h.Class('px-3 pt-4 pb-2')],
                    [
                      h.p(
                        [h.Class('text-white font-semibold')],
                        ['Freelance software engineer'],
                      ),
                      h.p(
                        [h.Class('text-slate-400 text-sm mt-1 font-mono')],
                        ['TypeScript · Rust · Solidity'],
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    ],
  )

// ABOUT

const aboutView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [h.Class('py-24 px-6 bg-slate-900/30 scroll-mt-20'), h.Id('about')],
    [
      h.div(
        [h.Class('max-w-6xl mx-auto')],
        [
          h.div(
            [h.Class('mb-14 max-w-3xl')],
            [
              h.span(
                [h.Class('text-indigo-300 font-mono text-sm')],
                ['01 // ABOUT'],
              ),
              h.h2(
                [h.Class('text-3xl md:text-5xl font-bold mt-3 text-balance')],
                ['I learn by building.'],
              ),
              h.p(
                [h.Class('text-lg text-slate-400 mt-5 leading-relaxed')],
                [
                  'I started with PHP and Laravel, moved through Node.js, TypeScript, and Electron, and now spend most of my time around Effect, Rust, and typed protocol tooling. The stack keeps changing; the curiosity does not.',
                ],
              ),
            ],
          ),
          h.div(
            [h.Class('grid md:grid-cols-3 gap-6')],
            journey.map(item =>
              h.article(
                [
                  h.Class(
                    'glass-panel p-7 rounded-2xl group hover:border-cyan-500/40 transition duration-300',
                  ),
                ],
                [
                  h.span(
                    [h.Class('text-cyan-400 font-mono text-sm')],
                    [item.index],
                  ),
                  h.h3(
                    [h.Class('text-xl font-bold text-white mt-8 mb-3')],
                    [item.title],
                  ),
                  h.p(
                    [h.Class('text-slate-400 leading-relaxed')],
                    [item.description],
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
    [h.Class('py-24 px-6 scroll-mt-20'), h.Id('skills')],
    [
      h.div(
        [h.Class('max-w-5xl mx-auto')],
        [
          h.div(
            [h.Class('mb-14')],
            [
              h.span(
                [h.Class('text-cyan-300 font-mono text-sm')],
                ['02 // STACK'],
              ),
              h.h2(
                [h.Class('text-3xl md:text-5xl font-bold mt-3')],
                ['Tools I reach for.'],
              ),
              h.p(
                [
                  h.Class(
                    'text-lg text-slate-400 mt-5 max-w-2xl leading-relaxed',
                  ),
                ],
                [
                  'A deliberately broad toolkit, chosen to fit the problem rather than the trend.',
                ],
              ),
            ],
          ),
          h.div(
            [h.Class('grid sm:grid-cols-2 lg:grid-cols-4 gap-8')],
            skillCategories.map(category =>
              h.div(
                [h.Class('space-y-6')],
                [
                  h.h3(
                    [
                      h.Class(
                        'text-base font-semibold text-white border-b border-slate-800 pb-3',
                      ),
                    ],
                    [category],
                  ),
                  h.div(
                    [h.Class('flex flex-col gap-3')],
                    skills.flatMap(skill =>
                      skill.category === category
                        ? [
                            h.div(
                              [h.Class('flex items-center gap-3 group')],
                              [
                                h.div(
                                  [
                                    h.Class(
                                      'w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition',
                                    ),
                                    h.Attribute('aria-hidden', 'true'),
                                  ],
                                  [],
                                ),
                                h.span(
                                  [
                                    h.Class(
                                      'text-slate-300 font-medium group-hover:text-white transition',
                                    ),
                                  ],
                                  [skill.name],
                                ),
                              ],
                            ),
                          ]
                        : [],
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
    [h.Class('py-24 px-6 bg-slate-900/30 scroll-mt-20'), h.Id('projects')],
    [
      h.div(
        [h.Class('max-w-6xl mx-auto')],
        [
          h.div(
            [
              h.Class(
                'mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6',
              ),
            ],
            [
              h.div(
                [],
                [
                  h.span(
                    [h.Class('text-indigo-300 font-mono text-sm')],
                    ['03 // SELECTED WORK'],
                  ),
                  h.h2(
                    [h.Class('text-3xl md:text-5xl font-bold mt-3')],
                    ['A trail of things I wanted to understand.'],
                  ),
                ],
              ),
              h.p(
                [
                  h.Class(
                    'text-slate-400 max-w-md md:text-right leading-relaxed',
                  ),
                ],
                [
                  'Each project marks a real curiosity—from shipping web products to exploring protocols, types, and lower-level systems.',
                ],
              ),
            ],
          ),
          h.div(
            [h.Class('grid md:grid-cols-2 lg:grid-cols-3 gap-6')],
            projects.map(project =>
              h.a(
                [
                  h.Class(
                    'glass-panel p-7 rounded-2xl flex flex-col h-full group hover:-translate-y-1 hover:border-cyan-500/40 transition duration-300 hover:shadow-[0_12px_32px_rgba(34,211,238,0.06)]',
                  ),
                  h.Attribute('href', project.url),
                  h.Attribute('target', '_blank'),
                  h.Attribute('rel', 'noopener noreferrer'),
                  h.Attribute('aria-label', `View ${project.name} on GitHub`),
                ],
                [
                  h.div(
                    [h.Class('mb-6')],
                    [
                      h.div(
                        [
                          h.Class(
                            'text-cyan-400 font-mono text-2xl mb-5 opacity-60 group-hover:opacity-100 transition',
                          ),
                          h.Attribute('aria-hidden', 'true'),
                        ],
                        ['{/}'],
                      ),
                      h.h3(
                        [h.Class('text-xl font-bold text-white mb-3')],
                        [project.name],
                      ),
                      h.p(
                        [
                          h.Class(
                            'text-slate-400 text-sm leading-relaxed min-h-16',
                          ),
                        ],
                        [project.description],
                      ),
                    ],
                  ),
                  h.div(
                    [h.Class('mt-auto')],
                    [
                      h.div(
                        [h.Class('py-4 border-t border-slate-800/60 mb-4')],
                        [
                          h.span(
                            [h.Class('text-indigo-300 text-sm font-medium')],
                            [project.detail],
                          ),
                          h.span(
                            [
                              h.Class(
                                'float-right text-slate-500 group-hover:text-cyan-300 transition',
                              ),
                              h.Attribute('aria-hidden', 'true'),
                            ],
                            ['↗'],
                          ),
                        ],
                      ),
                      h.div(
                        [h.Class('flex flex-wrap gap-2')],
                        project.tags.map(tag =>
                          h.span(
                            [
                              h.Class(
                                'px-2.5 py-1 bg-slate-950/70 border border-slate-800 text-slate-300 text-xs rounded font-mono',
                              ),
                            ],
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

// CONTACT

const contactView = (h: ReturnType<typeof html<Message>>) =>
  h.section(
    [
      h.Class('py-24 md:py-32 px-6 relative overflow-hidden scroll-mt-20'),
      h.Id('contact'),
    ],
    [
      h.div(
        [
          h.Class(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none',
          ),
          h.Attribute('aria-hidden', 'true'),
        ],
        [],
      ),
      h.div(
        [
          h.Class(
            'max-w-3xl mx-auto text-center relative z-10 glass-panel p-7 sm:p-12 rounded-3xl border-slate-800/80',
          ),
        ],
        [
          h.span(
            [
              h.Class(
                'text-cyan-300 font-mono text-sm inline-block mb-4 px-4 py-1 rounded-full bg-slate-950 border border-slate-800',
              ),
            ],
            ['04 // CONNECT'],
          ),
          h.h2(
            [h.Class('text-3xl md:text-5xl font-bold mb-6 text-balance')],
            ['Let’s build something useful.'],
          ),
          h.p(
            [
              h.Class(
                'text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto',
              ),
            ],
            [
              'I’m available for focused freelance projects and technical collaborations. If you have a product to ship, a system to untangle, or an idea that needs a technical partner, say hello.',
            ],
          ),
          h.div(
            [h.Class('flex flex-col items-center justify-center gap-5')],
            [
              h.a(
                [
                  h.Class(
                    'px-7 py-3.5 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-lg transition w-full sm:w-auto shadow-lg flex items-center justify-center gap-3',
                  ),
                  h.Attribute('href', 'mailto:yovano_c@outlook.com'),
                ],
                [
                  h.span([h.Class('font-mono opacity-60')], ['✉']),
                  'yovano_c@outlook.com',
                ],
              ),
              h.div(
                [h.Class('flex flex-wrap justify-center gap-3')],
                socials.map(social =>
                  h.a(
                    [
                      h.Class(
                        'px-5 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-300 flex items-center justify-center hover:bg-slate-800 hover:text-cyan-300 hover:border-cyan-500/50 transition font-medium',
                      ),
                      h.Attribute('href', social.url),
                      h.Attribute('target', '_blank'),
                      h.Attribute('rel', 'noopener noreferrer'),
                    ],
                    [`${social.name} ↗`],
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
        [
          h.Class(
            'max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500',
          ),
        ],
        [
          h.div(
            [h.Class('flex items-center gap-2')],
            [
              h.span(
                [
                  h.Class('w-2 h-2 rounded-full bg-cyan-500'),
                  h.Attribute('aria-hidden', 'true'),
                ],
                [],
              ),
              '© 2026 Christopher Yovanovitch · Lille, France.',
            ],
          ),
          h.div(
            [h.Class('font-mono')],
            [
              'Built with ',
              h.span([h.Class('text-indigo-300')], ['Foldkit']),
              ' & ',
              h.span([h.Class('text-cyan-300')], ['Effect']),
            ],
          ),
        ],
      ),
    ],
  )
