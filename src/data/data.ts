export interface HeroData {
    name: string
    role: string
    experience: number
    location: string
    available: boolean
    description: string
    stack: string[]
    github: string
    linkedin: string
}

export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  github: string
  icon: string
  inProgress?: boolean
}

export interface ExperienceItem {
  id: number
  date: string
  company: string
  role: string
  projects: {
    name: string
    description: string
  }[]
}

export interface TechCategory {
  id: number
  label: string
  pills: {
    label: string
    variant: 'java' | 'spring' | 'db' | 'kafka' | 'docker' | 'test' | 'fe' | 'tool'
  }[]
}

export const heroData: HeroData = {
  name: 'Tomasz Osuch',
  role: 'Java & Backend Developer',
  experience: 4,
  location: 'Warszawa',
  available: true,
  description:
    'Buduję skalowalne systemy backendowe w architekturze mikroserwisów. Pracowałem przy krytycznych projektach dla Państwowego Ratownictwa Medycznego i NASK. Rozwijam kompetencje fullstack — React, TypeScript, Node.js.',
  stack: ['Java 11, 21', 'Spring Boot', 'Mikroserwisy', 'Kafka', 'PostgreSQL'],
  github: 'https://github.com/tomOsuch',
  linkedin: 'https://linkedin.com/in/tomasz-osuch',
}