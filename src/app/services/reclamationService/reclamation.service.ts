import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  url: string = "http://localhost:8086/Voyage/reclamation";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/listeReclamations`);
  }
  getById(id: string) {
    return this.http.get(`${this.url}/recupererReclamation/${id}`);
  }
  getByDate(dateRec: any) {
    return this.http.get(`${this.url}/countRec/${dateRec}`);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/supprimerReclamation/${id}`);
  }

  update(reclamation: any) {
    return this.http.put(`${this.url}/modifierReclamation`, reclamation);
  }
  addReclamation(reclamation : any){
    return this.http.post(`${this.url}/addReclamation`,reclamation)
  }
}
