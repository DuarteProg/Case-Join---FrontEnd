import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: [] 
})
export class AppComponent {
  title = 'CASE-JOIN-FRONTEND';
}
