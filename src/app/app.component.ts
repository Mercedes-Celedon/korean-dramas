import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drama } from './drama.model';
import { SupabaseService } from '../app/supabase.service';
@Component({
  selector: 'nombre-diferente',
  imports: [RouterOutlet, CommonModule],
  /* template: `
  @if(isLoggedIn){
    <div><h1>hola</h1></div>
  }@else{
    <div><h1>Adiós</h1></div>
  }
  @for(lista of lista; track lista.id){
    <div><h2>{{lista.title}}</h2>
    <button (click)="greet()">Botón misterioso</button>
    </div>
  }`, */
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  dramas: Drama[] = [];

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.getDramas(); // Aquí llamas a la función para cargar datos
  }

  async getDramas() {
    const { data, error } = await this.supabaseService.getDramas();
    if (error) {
      console.error('Error al obtener dramas:', error);
    } else {
      this.dramas = data || [];
    }
  }
greet() {
alert('Holi, soy una ventana');
}
  title = 'my-first-angular-app';
  isLoggedIn = false;
  lista=[{id:1, title:'Elemento 1'},{id:2, title:'Elemento 2'},{id:3, title:'Elemento 3'}];
}
