export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  dataPoints?: DataPoint[];
  insights?: string[];
}

export interface DataPoint {
  label: string;
  value: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
