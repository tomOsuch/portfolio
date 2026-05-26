export interface HeroData {
  name: string;
  role: string;
  experience: number;
  location: string;
  available: boolean;
  description: string;
  stack: string[];
  github: string;
  linkedin: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tags: {
    label: string;
    variant: 'java' | 'spring' | 'db' | 'kafka' | 'docker' | 'test' | 'fe' | 'tool';
  }[];
  github: string;
  icon: string;
  inProgress?: boolean;
}

export interface ExperienceItem {
  id: number;
  date: string;
  company: string;
  role: string;
  projects: {
    name: string;
    description: string;
  }[];
}

export interface TechCategory {
  id: number;
  label: string;
  pills: {
    label: string;
    variant: 'java' | 'spring' | 'db' | 'kafka' | 'docker' | 'test' | 'fe' | 'tool';
  }[];
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
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: 'kwi 2021 – sie 2025',
    company: 'WASKO S.A.',
    role: 'Programista Java',
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
    role: 'Specjalista ds. systemów informatycznych i raportowania',
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
      { label: 'Java 11/21', variant: 'java' },
      { label: 'Spring Boot', variant: 'spring' },
      { label: 'Spring MVC', variant: 'spring' },
      { label: 'Spring Data', variant: 'spring' },
      { label: 'Hibernate / JPA', variant: 'java' },
      { label: 'JDBC', variant: 'java' },
      { label: 'Mikroserwisy', variant: 'java' },
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
      { label: 'Maven', variant: 'tool' },
      { label: 'Gradle', variant: 'tool' },
      { label: 'JIRA', variant: 'tool' },
      { label: 'Swagger', variant: 'tool' },
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
    github: 'https://github.com/tomOsuch',
  },
  {
    id: 2,
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
    github: 'https://github.com/tomOsuch',
  },
  {
    id: 3,
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
    github: 'https://github.com/tomOsuch',
  },
  {
    id: 4,
    icon: '🔢',
    name: 'Solver Sudoku',
    description:
      'Algorytm rozwiązywania sudoku zaimplementowany w Javie. Demonstruje znajomość algorytmów, programowania obiektowego oraz pisania testów jednostkowych.',
    tags: [
      { label: 'Java', variant: 'java' },
      { label: 'JUnit 5', variant: 'test' },
      { label: 'OOP', variant: 'java' },
    ],
    github: 'https://github.com/tomOsuch',
  },
  {
    id: 5,
    icon: '🚧',
    name: 'Dashboard mikroserwisów',
    description:
      'W przygotowaniu — Spring Boot + React. Monitoring statusu serwisów w czasie rzeczywistym. Kafka, Docker Compose, TypeScript frontend.',
    tags: [
      { label: 'Spring Boot', variant: 'spring' },
      { label: 'Kafka', variant: 'kafka' },
      { label: 'React', variant: 'fe' },
      { label: 'Docker', variant: 'docker' },
    ],
    github: 'https://github.com/tomOsuch',
    inProgress: true,
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
  {
    id: 4,
    label: '+48 510 658 837',
    href: 'tel:+48510658837',
    icon: 'phone',
  },
];
