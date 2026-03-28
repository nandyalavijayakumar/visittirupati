export interface Place {
  name: string;
  slug: string;
  location: string;
  image: string;
  images?: string[];
  description: string;
  history?: string;
  timings?: string;
  entryFee?: string;
  bestTime?: string;
  category?: string;
}