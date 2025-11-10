export type TGenre = 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: TGenre;
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
}