import { createFileRoute } from '@tanstack/react-router'

import styles from './index.module.css'

import { Template } from '#/components/Template'
import { ProjectCard, type Project } from '#/components/ProjectCard'

const data: Project[] = [
  {
    id: 'strike-store',
    name: 'Strike Store',
    link: 'https://strike-store.vercel.app',
    description: 'Blood Strike accounts market',
    logoSrc: null,
    images: [
      '/images/projects/strike-store/1.png',
      '/images/projects/strike-store/2.png',
      '/images/projects/strike-store/3.png',
    ],
    details:
      'This store was for a friend of mine, I had to implement an accounts showcase for his favourite game. I used Next js and first time using Supabase.',
  },
  {
    id: 'taleswyn',
    name: 'Taleswyn',
    link: 'https://taleswyn.vercel.app',
    description: 'Dark fantasy tales',
    logoSrc: null,
    images: [
      '/images/projects/taleswyn/1.png',
      '/images/projects/taleswyn/2.png',
      '/images/projects/taleswyn/3.png',
      '/images/projects/taleswyn/4.png',
      '/images/projects/taleswyn/5.png',
    ],
    details:
      'This personal project goes back to 2025, when I fall in love with writing. Built using Next js and first time replacing Tailwid with CSS modules, and learnt how to organize complex folders structure.',
  },
]

export const Route = createFileRoute('/projects/')({
  component: Projects,
})

function Projects() {
  return (
    <Template>
      <div className={styles.projectCards}>
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Template>
  )
}
