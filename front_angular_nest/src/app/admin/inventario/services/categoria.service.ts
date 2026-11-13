import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Categoria {
  id: number;
  nombre: string;
  detalle: string;
}

export type NuevaCategoria = Omit<Categoria, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.urlServidor}/categoria`;

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

  crear(categoria: NuevaCategoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl, categoria);
  }
}
