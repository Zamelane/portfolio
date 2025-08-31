import { BlueBlur, GreenBlur } from '@/src/components/blurs';
import { HoverCard } from '@/src/components/hoverCard';
import { RenderProjectContent } from '@/src/components/projects/renderProjectContent';
import { projects, projectTechnologies } from '@/static/projects';
import Image from 'next/image';
import StackIcon from 'tech-stack-icons';
import { BlurAnimation } from '@/src/components/animations/blurAnimation';

export async function generateStaticParams() {
  return projects.map(p => ({
    slug: p.slug
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)!

  const technologiesCards = project.meta.technologies.length > 0
    && (
      <div className='2xl:mt-14 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 2xl:max-w-[290px] max-w-full'>
        {
          project.meta.technologies.map((tech, i) => {
            let technology = undefined

            for (const chapter of projectTechnologies) {
              for (const t of chapter.technologies) {
                if (t.name === tech) {
                  technology = t
                  break
                }
              }
            }

            if (!technology) {
              return undefined
            }

            if (typeof technology.icon === 'string') {
              return [technology.name, <StackIcon key={i} name={technology.icon} variant='dark' className='size-10' />]
            }

            return [technology.name, technology.icon.selectedIcon]
          })
            .filter(e => e !== undefined)
            .map((e, i) => (
              <BlurAnimation key={i} i={i} delay={1.5}>
                <HoverCard card={e[0]}>
                  {e[1]}
                </HoverCard>
              </BlurAnimation>
            ))
        }
      </div>
    )

  return (
    <div className='overflow-y-auto h-full'>
      <div className='overflow-x-hidden 2xl:h-full flex flex-row gap-[146px] justify-center 2xl:items-center relative not-2xl:gap-0 not-2xl:px-6'>

        <section className='max-w-2xl h-full 2xl:-ml-72 py-10 not-2xl:py-7'>
          <div className='2xl:hidden mb-5 flex flex-col gap-4'>
            <Image
              src={`/static/${project.slug}/` + project.image}
              alt=''
              width="1000"
              height="1000"
              className='rounded-[5px] w-full h-56 object-cover border border-primary-hover'
            />
            {technologiesCards}
          </div>
          <RenderProjectContent content={project.content} />
          <div className='2xl:h-10'/>
        </section>

        <div className="min-w-0 @min-3xl:min-w-[676px] h-full select-none">
          <GreenBlur className="absolute pointer-events-none top-0 left-2/4 size-[70vh] not-2xl:left-0" />
          <BlueBlur className="absolute pointer-events-none top-1/4 left-2/3 size-[70vh] not-2xl:left-0" />

          <div className='absolute top-[max(50%,350px)] -translate-y-1/2 not-2xl:hidden'>
            <BlurAnimation delay={1}>
              <div className='relative w-72 h-72 shadow-md'>
                <Image src='/border.png' alt='' fill className='object-contain scale-125' />
                <Image src={`/static/${project.slug}/` + project.image} alt='' fill className='object-cover scale-[106%] rounded-[5px]' />
              </div>
            </BlurAnimation>
            {
              technologiesCards
            }
          </div>

        </div>
      </div>
    </div>
  )
}