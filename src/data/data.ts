export type TagVariant =
  | 'java'
  | 'spring'
  | 'db'
  | 'kafka'
  | 'docker'
  | 'test'
  | 'fe'
  | 'tool';

export interface Tag {
  label: string;
  variant: TagVariant;
}

export interface HeroData {
  name: string;
  role: string;
  experience: number;
  location: string;
  description: string;
  stack: string[];
  github: string;
  linkedin: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
  links: ProjectLink[];
  icon: string;
  featured?: boolean;
  status?: string;
}

export interface ExperienceRole {
  title: string;
  date: string;
}

export interface ExperienceItem {
  id: number;
  date: string;
  company: string;
  roles: ExperienceRole[];
  projects: {
    name: string;
    description: string;
  }[];
}

export interface TechCategory {
  id: number;
  label: string;
  pills: Tag[];
}

export const heroData: HeroData = {
  name: 'Tomasz Osuch',
  role: 'Java Developer',
  experience: 4,
  location: 'Warszawa / zdalnie',
  description:
    'Buduję skalowalne systemy backendowe w architekturze mikroserwisów. Pracowałem przy krytycznych projektach dla Państwowego Ratownictwa Medycznego i NASK. Rozwijam kompetencje fullstack — React, TypeScript, Node.js.',
  stack: ['Java 11, 21, 25', 'Spring Boot', 'Mikroserwisy', 'Kafka', 'PostgreSQL'],
  github: 'https://github.com/tomOsuch',
  linkedin: 'https://linkedin.com/in/tomasz-osuch',
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: 'kwi 2021 – sie 2025',
    company: 'WASKO S.A.',
    roles: [
      { title: 'Starszy Programista Java', date: 'kwi 2023 – sie 2025' },
      { title: 'Programista Java', date: 'cze 2022 – kwi 2023' },
      { title: 'Młodszy Programista Java', date: 'kwi 2021 – cze 2022' },
    ],
    projects: [
      {
        name: 'SWD — System Wspomagania Dowodzenia PRM',
        description:
          'Aplikacja desktopowa do obsługi zgłoszeń ratownictwa medycznego. Architektura mikroserwisów z komunikacją przez Apache Kafka. Java 11, Spring Boot, JavaFX, Oracle DB, Liquibase.',
      },
      {
        name: 'NASK BSS — Integracja przez szynę danych WSO2',
        description:
          'Procesy ETL (Talend Open Studio) do migracji danych, integracja komponentów przez WSO2 i REST API. Optymalizacja procedur SQL na bazach PostgreSQL i MSSQL.',
      },
      {
        name: 'ZSZPMG — Zintegrowany System Zarządzania Podziemnymi Magazynami Gazu',
        description:
          'API zgodne z dokumentacją Enterprise Architect. Java 21 LTS, Spring Boot, Oracle Database. Zarządzanie repozytorium Git, testy jednostkowe.',
      },
    ],
  },
  {
    id: 2,
    date: 'mar 2017 – mar 2021',
    company: 'WTW Polska',
    roles: [
      {
        title: 'Specjalista ds. systemów informatycznych i raportowania',
        date: 'mar 2017 – mar 2021',
      },
    ],
    projects: [
      {
        name: 'Formularze ubezpieczeniowe i integracje',
        description:
          'Tworzenie formularzy w HTML5/CSS, integracja z zewnętrznymi systemami przez SOAP, konfiguracja platformy Varyon, raporty UML.',
      },
    ],
  },
];

export const technologiesData: TechCategory[] = [
  {
    id: 1,
    label: 'Backend',
    pills: [
      { label: 'Java 11 / 21 / 25', variant: 'java' },
      { label: 'Spring Boot', variant: 'spring' },
      { label: 'Spring MVC', variant: 'spring' },
      { label: 'Spring Data', variant: 'spring' },
      { label: 'Spring Security', variant: 'spring' },
      { label: 'Hibernate / JPA', variant: 'java' },
      { label: 'JDBC', variant: 'java' },
      { label: 'Mikroserwisy', variant: 'java' },
      { label: 'REST API', variant: 'java' },
      { label: 'Kafka', variant: 'kafka' },
      { label: 'WSO2', variant: 'java' },
      { label: 'JavaFX', variant: 'java' },
      { label: 'ETL / Talend', variant: 'java' },
    ],
  },
  {
    id: 2,
    label: 'Bazy danych',
    pills: [
      { label: 'PostgreSQL', variant: 'db' },
      { label: 'Oracle DB', variant: 'db' },
      { label: 'MySQL', variant: 'db' },
      { label: 'MSSQL', variant: 'db' },
      { label: 'H2', variant: 'db' },
      { label: 'Flyway', variant: 'db' },
      { label: 'Liquibase', variant: 'db' },
    ],
  },
  {
    id: 3,
    label: 'Testy',
    pills: [
      { label: 'JUnit 5', variant: 'test' },
      { label: 'Mockito', variant: 'test' },
      { label: 'TDD', variant: 'test' },
      { label: 'Testy integracyjne', variant: 'test' },
    ],
  },
  {
    id: 4,
    label: 'Frontend (w rozwoju)',
    pills: [
      { label: 'React', variant: 'fe' },
      { label: 'TypeScript', variant: 'fe' },
      { label: 'JavaScript', variant: 'fe' },
      { label: 'Node.js', variant: 'fe' },
      { label: 'HTML5 / CSS3', variant: 'fe' },
      { label: 'Sass', variant: 'fe' },
      { label: 'Bootstrap', variant: 'fe' },
    ],
  },
  {
    id: 5,
    label: 'Narzędzia i metodyki',
    pills: [
      { label: 'Git', variant: 'tool' },
      { label: 'Docker', variant: 'docker' },
      { label: 'Maven', variant: 'tool' },
      { label: 'Gradle', variant: 'tool' },
      { label: 'JIRA', variant: 'tool' },
      { label: 'Swagger / OpenAPI', variant: 'tool' },
      { label: 'Scrum / Agile', variant: 'tool' },
      { label: 'Code Review', variant: 'tool' },
      { label: 'IntelliJ IDEA', variant: 'tool' },
    ],
  },
  {
    id: 6,
    label: 'AI & wspomagające',
    pills: [
      { label: 'GitHub Copilot', variant: 'tool' },
      { label: 'Claude AI', variant: 'tool' },
      { label: 'Cursor', variant: 'tool' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    icon: '🏋️',
    name: 'Platforma treningowa — aplikacja full-stack',
    status: 'Projekt główny · w rozwoju',
    featured: true,
    description:
      'Aplikacja webowa do planowania i rejestrowania treningów, budowana od podstaw — REST API i frontend SPA. Autoryzacja JWT z kontrolą dostępu opartą na rolach, architektura warstwowa, migracje Flyway, dokumentacja OpenAPI. 366 testów jednostkowych i integracyjnych.',
    tags: [
      { label: 'Java 25', variant: 'java' },
      { label: 'Spring Boot 4', variant: 'spring' },
      { label: 'PostgreSQL 15', variant: 'db' },
      { label: 'Flyway', variant: 'db' },
      { label: 'Docker', variant: 'docker' },
      { label: 'JUnit 5', variant: 'test' },
      { label: 'React 19', variant: 'fe' },
      { label: 'TypeScript', variant: 'fe' },
    ],
    links: [
      { label: 'Backend', href: 'https://github.com/tomOsuch/trainingplatform-backend' },
      { label: 'Frontend', href: 'https://github.com/tomOsuch/trainingplatform-frontend' },
    ],
  },
  {
    id: 2,
    icon: '📚',
    name: 'REST API — Biblioteka',
    description:
      'Aplikacja REST do zarządzania biblioteką książek. Operacje CRUD, Spring Data JPA, dokumentacja Swagger. Napisana w metodologii TDD z pokryciem testami JUnit 5 i Mockito.',
    tags: [
      { label: 'Spring Boot', variant: 'spring' },
      { label: 'H2', variant: 'db' },
      { label: 'JUnit 5', variant: 'test' },
      { label: 'Swagger', variant: 'tool' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/tomOsuch/kodilla-library' }],
  },
  {
    id: 3,
    icon: '✅',
    name: 'Menedżer zadań — REST API',
    description:
      'System zarządzania zadaniami z REST API. Pełne CRUD, walidacja, obsługa wyjątków. Projekt zrealizowany w konwencji TDD z integracyjnymi testami Spring.',
    tags: [
      { label: 'Spring Boot', variant: 'spring' },
      { label: 'Java', variant: 'java' },
      { label: 'Mockito', variant: 'test' },
      { label: 'TDD', variant: 'test' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/tomOsuch/kodilla-tasks' }],
  },
  {
    id: 4,
    icon: '♟️',
    name: 'Gra w Warcaby',
    description:
      'Implementacja gry w warcaby w Javie. Logika gry, obsługa ruchów i bicia. Projekt grupowy z wykorzystaniem JIRA i GitHub — code review, branch strategy.',
    tags: [
      { label: 'Java', variant: 'java' },
      { label: 'JUnit', variant: 'test' },
      { label: 'Git', variant: 'tool' },
      { label: 'JIRA', variant: 'tool' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/tomOsuch/checkers-kodilla' }],
  },
  {
    id: 5,
    icon: '🔢',
    name: 'Solver Sudoku',
    description:
      'Algorytm rozwiązywania sudoku zaimplementowany w Javie. Demonstruje znajomość algorytmów, programowania obiektowego oraz pisania testów jednostkowych.',
    tags: [
      { label: 'Java', variant: 'java' },
      { label: 'JUnit 5', variant: 'test' },
      { label: 'OOP', variant: 'java' },
    ],
    links: [],
  },
];

export interface ContactLink {
  id: number;
  label: string;
  href: string;
  icon: 'email' | 'github' | 'linkedin' | 'phone';
}

export const contactData: ContactLink[] = [
  {
    id: 1,
    label: 'tomasz.osuch@gmail.com',
    href: 'mailto:tomasz.osuch@gmail.com',
    icon: 'email',
  },
  {
    id: 2,
    label: 'github.com/tomOsuch',
    href: 'https://github.com/tomOsuch',
    icon: 'github',
  },
  {
    id: 3,
    label: 'linkedin.com/in/tomasz-osuch',
    href: 'https://linkedin.com/in/tomasz-osuch',
    icon: 'linkedin',
  },
];
