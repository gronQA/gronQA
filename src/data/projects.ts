export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Kropla Bałtyku', 
    category: 'Apartament nad morzem', 
    image: 'realizacje/kropla.png',
    link: 'https://kropla-baltyku.pl'
  },
];
