
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  published_at: string;
  created_at: string;
  author: string;
  reading_time_minutes: number;
  tags: string[];
}
