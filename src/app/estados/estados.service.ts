import { Estado } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EstadosService {

  estadosURL = 'http://localhost:8080/estado';
  urlFiltro;
  constructor(private http: HttpClient) { }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(filtro: any): Promise<any> {

    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/estados/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/estados';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }

  adicionar(estado: Estado): Promise<any>{
    return this.http.post(this.estadosURL, estado)
    .toPromise();
  }

}
