import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environmentSupabase } from '../app/environments/environmentSupabase'
import { Drama } from './drama.model';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() { 
    this.supabase = createClient(environmentSupabase.supabaseUrl, environmentSupabase.supabaseKey)
  }

  async getDramas() {
    let { data: data, error } = await this.supabase
      .from('dramas')
      .select('*')
      .limit(10)
    return { data, error };
  }
}
