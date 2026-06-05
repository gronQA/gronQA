export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Kropla Bałtyku', 
    category: 'Apartament nad morzem',
    description: 'Odkryj spokój i luksus w sercu Jastrzębiej Góry (dzielnica Tupadły). Apartament Kropla Bałtyku to Twój prywatny azyl nad polskim morzem. Rezerwuj pobyt już dziś.',
    image: 'realizacje/kropla.png',
    tags: ['Astro', 'React', 'Tailwind'],
    liveUrl: 'https://kropla-baltyku.pl',
    githubUrl: 'https://github.com'
  },
];
