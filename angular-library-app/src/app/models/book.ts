export interface Book {
  id?: number;
  isbn: string;
  title: string;
  author: string;
  publisher?: string;
  publishDate: Date;
  quantity: number;
  isAvailable: boolean;
}