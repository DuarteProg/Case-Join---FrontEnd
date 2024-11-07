import { Component, OnInit } from '@angular/core';
import { Category } from '../tabela-produtos/product-model';  
import { CategoryService } from '../../services/category.service'; 
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-tabela-produtos',  
  standalone: true,
  templateUrl: './tabela-categorias.component.html',
  imports: [TableModule, CommonModule, DialogModule],  
  providers: [CategoryService]  
})
export class TabelaCategoriasComponent implements OnInit {
  categories!: Category[];  

  
  constructor(private categoryService: CategoryService) {}

  
  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
  
  
}
