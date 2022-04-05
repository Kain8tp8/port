export let phone = [
  { name: "Javahir", number: "97 - 364 - 51 - 59" },
  { name: "Olimjon", number: "88 - 517 - 72 - 66" },
  { name: "Juratbek", number: "93 - 467 - 12 - 70" },
  { name: "Muhtor", number: "93 - 123 - 45 - 67" },
  { name: "Abror", number: "91 - 916 - 46 - 45" },
  { name: "Temur", number: "94 - 239 - 43 - 88" },
];

export type Article = {
  title: string;
  url: string;
  desc: string;
};

export const articles: Article[] = [];

// comit
export type Comment = {
  nikName: string;
  text: string;
};

export const comments: Comment[] = [];
