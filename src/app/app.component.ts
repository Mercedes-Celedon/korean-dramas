import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Drama } from './drama.model'; this model is a older version of declaration of variables for the api.
import { SupabaseService } from '../app/supabase.service';
//primeNG
import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
//Componente
import { TopDataComponent } from './top-data/top-data.component';
import { Database } from '../supabase';
type Drama = Database ['public']['Tables']['dramas']['Row'];

@Component({
  selector: 'nombre-diferente',
  imports: [RouterOutlet, CommonModule,ButtonModule, TopDataComponent, CardModule, DividerModule,SplitterModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  dramas: Drama[] = [];

  constructor(
    private supabaseService: SupabaseService, 
    private primeng: PrimeNG
  ) {}

  ngOnInit(): void {
    this.getDramas(); 
    this.primeng.ripple.set(true);
  }

  async getDramas() {
    const { data, error } = await this.supabaseService.getDramas();
    if (error) {
      console.error('Error al obtener dramas:', error.details);
    } else {
      this.dramas = data || [];
    }
  } 
  
}
