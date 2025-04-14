import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drama } from './drama.model';
import { SupabaseService } from '../app/supabase.service';
//primeNG
import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'nombre-diferente',
  imports: [RouterOutlet, CommonModule,ButtonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  dramas: Drama[] = [];

  constructor(private supabaseService: SupabaseService, private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.getDramas(); 
    this.primeng.ripple.set(true)
  }

  async getDramas() {
    const { data, error } = await this.supabaseService.getDramas();
    if (error) {
      console.error('Error al obtener dramas:', error.details);
    } else {
      this.dramas = data || [];
    }
  }
  isLoggedIn = false;
}
