import { Routes } from '@angular/router';
import { TabelaProdutosComponent } from './components/tabela-produtos/tabela-produtos.component';
import { TabelaCategoriasComponent } from './components/tabela-categorias/tabela-categorias.component';


export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: TabelaProdutosComponent },
  { path: 'categorias', component: TabelaCategoriasComponent },

];
