import { cn } from '~/lib/utils/cn'
import { SkillSection } from '~/components-ui/skill-section'

import { PageLayout } from '~/components-ui/page-layout'

const skills = new Array<Skill>();

const SkillsPage = async () => {
  skills.sort((a, b) => {
    return a.priority - b.priority
  })

  return (
    <PageLayout title="Skills">
      <div className={cn('grid grid-cols-1 min-[810px]:grid-cols-2')}>
        {skills && skills.map((skill) => skill && <SkillSection key={skill._id} skill={skill} />)}
      </div>
    </PageLayout>
  )
}

export default SkillsPage
