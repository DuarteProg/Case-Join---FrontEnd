export interface Product {
    id?: string;
    nome: string;
    preco: number;
    categoria: Category;
    descricao?: string;
    categoriaNome?: string;
}

export interface Category {
    id: string;
    nome: string;
    descricao?: string;
}