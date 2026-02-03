export enum Category {
  ALL = 'All',
  HEALTH = 'Health',
  TECH = 'Technology',
  HOME = 'Home & Living',
  LOGISTICS = 'Logistics',
  AI = 'AI Generator'
}

export interface Solution {
  id: number;
  title: string;
  category: Category;
  shortDescription: string;
  fullContent: string;
  tags: string[];
  likes: number;
}

export interface FixRequest {
  problem: string;
  category: string;
}
