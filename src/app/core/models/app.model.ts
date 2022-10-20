export interface Rules {
  data: Information[];
}

export interface Information {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Votes;
}

export interface Votes {
  positive: number;
  negative: number;
}
