export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  date: number;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type PageDirection = "next" | "previous";

export type SortBy = "relevant" | "recent";
