import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environmentSupabase } from '../app/environments/environmentSupabase'
import { Drama } from './drama.model';
import { Database } from '../supabase';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() { 
    this.supabase = createClient<Database>(environmentSupabase.supabaseUrl, environmentSupabase.supabaseKey)
  }

  async getDramas() {
    let { data: data, error } = await this.supabase
      .from('dramas')
      .select('*')
      .limit(10)
    return { data, error };
  }
}
