import { cn } from '~/lib/utils/cn'
import { ProjectCard } from '~/components-ui/project-card'

import { PageLayout } from '~/components-ui/page-layout'
import { Wrapper } from '~/components-ui/wrapper'

const projects = new Array<Project>();

const ProjectsPage = async () => {
  projects.sort((a, b) => {
    return b.priority - a.priority
  })

  return (
    <PageLayout title='Projects'>
      <Wrapper>
        <div
          className={cn(
            'my-4 grid gap-4 lg:my-6 lg:gap-6',
            'min-[540px]:grid-cols-2 min-[800px]:grid-cols-3',
          )}
        >
          {projects &&
            projects.map(
              (project) => project && <ProjectCard key={project._id} project={project} />,
            )}
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProjectsPage
