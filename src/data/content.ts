// ============================================
// Static content: tech stack, deliverables, architecture, stats
// ============================================

import { IconName } from '@/components/UI/Icon/Icon'
import { projectCount } from './projects'

export interface TechItem {
  mono: string
  name: string
  version: string
  blurb: string
  color: string
}

export const TECH_STACK: TechItem[] = [
  { mono: 'Re', name: 'React', version: '19.2', blurb: 'Компонентный подход', color: '#61DAFB' },
  { mono: 'TS', name: 'TypeScript', version: '5.9', blurb: 'Строгая типизация', color: '#3178C6' },
  { mono: 'Mx', name: 'MobX', version: '6.15', blurb: 'Реактивное управление состоянием', color: '#FF9955' },
  { mono: 'Fb', name: 'Firebase', version: '12.7', blurb: 'Realtime Database', color: '#FFCA28' },
  { mono: 'Sc', name: 'SCSS', version: '1.97', blurb: 'Модульные стили и переменные', color: '#CC6699' },
  { mono: 'Vi', name: 'Vite', version: 'rolldown 7', blurb: 'Молниеносная сборка', color: '#A55CFF' },
  { mono: 'Sw', name: 'Swiper', version: '12.0', blurb: 'Слайдеры и карусели', color: '#0080FF' },
  { mono: 'id', name: 'uuid', version: '13.0', blurb: 'Уникальные идентификаторы', color: '#16D6C8' },
]

export interface Deliverable {
  icon: IconName
  title: string
  text: string
}

export const DELIVERABLES: Deliverable[] = [
  {
    icon: 'doc',
    title: 'Документ к защите',
    text: 'Ключевой Word-документ ВКР.',
  },
  {
    icon: 'presentation',
    title: 'Презентация к защите',
    text: 'Готовая презентация для выступления перед аттестационной комиссией.',
  },
  {
    icon: 'bookOpen',
    title: 'OVERVIEW.md',
    text: 'Полный разбор проекта: возможности, архитектура и вероятные вопросы на защите с ответами.',
  },
  {
    icon: 'fileText',
    title: 'README.md',
    text: 'Первичные действия после получения доступа к ВКР.',
  },
  {
    icon: 'key',
    title: 'CREDENTIALS.md',
    text: 'Логины и пароли.',
  },
  {
    icon: 'code',
    title: 'Исходный код',
    text: 'Чистый TypeScript + React с переиспользуемыми компонентами и типами.',
  },
  {
    icon: 'globe',
    title: 'Живой сайт',
    text: 'Каждая работа развёрнута на хостинге и открывается по ссылке прямо в браузере.',
  },
  {
    icon: 'database',
    title: 'Общая база данных',
    text: 'Единая Firebase Realtime Database — у каждого проекта собственный узел данных.',
  },
]

export interface ArchPoint {
  icon: IconName
  title: string
  text: string
}

export const ARCH_POINTS: ArchPoint[] = [
  {
    icon: 'database',
    title: 'Единая Firebase RTDB',
    text: 'Все 18 приложений подключены к одной облачной базе. Для каждого проекта свой узел — задаётся через BASE_PATH в .env.',
  },
  {
    icon: 'branch',
    title: 'SPA без react-router',
    text: 'Кастомная навигация через MobX-store: переключение страниц без перезагрузки, дружелюбное к бесплатному хостингу.',
  },
  {
    icon: 'users',
    title: 'Ролевая модель доступа',
    text: 'Разграничение прав: гость, тематический пользователь и администратор. Логика доступа проверяется на уровне навигации.',
  },
  {
    icon: 'layers',
    title: 'Кастомный UI-kit',
    text: 'Единый набор компонентов: Button, Input, Modal, Table, Toast, Card, Badge, Select — одинаковый во всех проектах.',
  },
  {
    icon: 'palette',
    title: 'Тема в одном файле',
    text: 'Вся палитра проекта живёт в globalColors.scss — поэтому 18 работ выглядят по-разному при общей кодовой базе.',
  },
  {
    icon: 'devices',
    title: 'Адаптив и кроссбраузерность',
    text: 'Mobile-first вёрстка: от смартфона до 4K, корректно в Chrome, Firefox, Safari и Edge.',
  },
]

export interface Stat {
  value: number
  suffix?: string
  label: string
  icon: IconName
}

export const STATS: Stat[] = [
  { value: projectCount, label: 'Выпускных работ (ВКР)', icon: 'cap' },
  { value: projectCount, label: 'Живых сайтов на хостинге', icon: 'globe' },
  { value: TECH_STACK.length, label: 'Технологий в общем стеке', icon: 'layers' },
  { value: 1, label: 'Общая база Firebase', icon: 'database' },
  { value: 6, label: 'Направлений и тематик', icon: 'sparkles' },
  { value: 100, suffix: '%', label: 'Адаптивные и кроссбраузерные', icon: 'devices' },
]
