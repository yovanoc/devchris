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
