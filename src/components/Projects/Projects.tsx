import { useMemo, useState } from 'react'
import { Icon, SectionHeader } from '@/components/UI'
import { CATEGORIES, projects, projectCount } from '@/data/projects'
import { Category, Project } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import styles from './Projects.module.scss'

export const Projects = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category>('Все')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = category === 'Все' || project.category === category
      const matchesQuery =
        !q ||
        [
          project.title,
          project.student,
          project.thesis,
          project.themeName,
          project.description,
          project.category,
        ].some((field) => field.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Портфолио"
          title={
            <>
              <span className="gradient-text">{projectCount} выпускных</span> работ
            </>
          }
          subtitle="Каждая работа — самостоятельное приложение со своим живым сайтом и репозиторием. Открой любую: внутри презентация, word-документ, инструкция и исходный код."
        />

        <div className={styles.controls}>
          <label className={styles.search}>
            <Icon name="search" size={18} />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Поиск по теме, студенту, оформлению…"
              aria-label="Поиск по работам"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Очистить поиск">
                <Icon name="close" size={16} />
              </button>
            )}
          </label>

          <div className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.chip} ${category === cat ? styles.active : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className={styles.count}>
          Показано <strong>{filtered.length}</strong> из {projectCount}
        </p>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <Icon name="search" size={30} />
            <p>Ничего не найдено. Попробуй другой запрос или категорию.</p>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
