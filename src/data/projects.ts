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
    title: 'Julia Polaczyk - Korepetycje z j. angielskiego', 
    category: 'Korepetycje z j. angielskiego', 
    image: 'realizacje/polaczyk.png',
    link: 'https://gronqa.github.io/juliapolaczyk/'
  },
  { 
    id: 2, 
    title: 'Barbara Babka - Adwokat', 
    category: 'Kancelaria Adwokacka', 
    image: 'realizacje/babka.png',
    link: 'https://adwokat-babka.pl'
  },
];
