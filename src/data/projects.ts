export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  { 
    id: 3, 
    title: 'Julia Polaczyk', 
    category: 'Korepetycje z j. angielskiego', 
    image: 'realizacje/polaczyk.png',
    link: 'https://gronqa.github.io/juliapolaczyk/'
  },
  { 
    id: 2, 
    title: 'Kropla Bałtyku', 
    category: 'Apartament nad morzem', 
    image: 'realizacje/kropla.png',
    link: 'https://kropla-baltyku.pl'
  },
];
