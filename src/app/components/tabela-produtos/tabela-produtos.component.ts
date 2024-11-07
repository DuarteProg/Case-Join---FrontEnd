import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../tabela-produtos/product-model';
import { ProductService } from '../../services/product.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela-produtos',
  standalone: true,
  templateUrl: './tabela-produtos.component.html',
  imports: [TableModule, CommonModule, ReactiveFormsModule],
  providers: [ProductService]
})
export class TabelaProdutosComponent implements OnInit {
  products!: Product[];
  productForm!: FormGroup;
  modalVisible: boolean = false; 

  constructor(
    private productService: ProductService,
    private fb: FormBuilder 
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      nome: [''],
      descricao: [''],
      preco: [0],
      categoriaId: [1]
    });

    
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  
  showModal() {
    this.modalVisible = true;
  }

  onSubmit() {
    const newProduct: Product = {
      nome: this.productForm.value.nome,
      descricao: this.productForm.value.descricao,
      preco: this.productForm.value.preco,
      categoria: {
        id: this.productForm.value.categoriaId,
        nome: 'Nome da Categoria'
      }
    };
  
    this.productService.addProduct(newProduct).subscribe(response => {
      console.log('Produto adicionado com sucesso:', response);
      this.products.push(response); 
      this.productForm.reset(); 
      this.modalVisible = false; 
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      console.log('Produto deletado com sucesso');
    });
  }
  
}
