import { expect, with as given, role, scene } from 'foldkit/scene'
import { describe, test } from 'vitest'

import { type Model, update, view } from './main'

const initialModel: Model = { activeSection: 'hero' }

describe('personal landing page', () => {
  test('renders Christopher and links to his profiles', () => {
    scene(
      { update, view },
      given(initialModel),
      expect(
        role('heading', { name: /product idea to protocol detail/i }),
      ).toExist(),
      expect(role('heading', { name: 'Chief Technology Officer' })).toExist(),
      expect(role('link', { name: 'CTO appointment at Secrecy ↗' })).toHaveAttr(
        'href',
        'https://www.cyberexperts.tech/yovanovitch-nomme-cto-de-secrecy-pour-accompagner-et-accelerer-le-developpement-de-secrecy-tech/',
      ),
      expect(role('link', { name: 'GitHub ↗' })).toHaveAttr(
        'href',
        'https://github.com/yovanoc',
      ),
      expect(role('link', { name: 'LinkedIn ↗' })).toHaveAttr(
        'href',
        'https://www.linkedin.com/in/yovanoc/',
      ),
    )
  })
})
