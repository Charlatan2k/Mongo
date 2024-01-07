import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  private url = 'http://localhost:3200/';

  constructor(private http: HttpClient) {}

  getProfesionales() {
    return this.http.get(this.url + 'profesionales');
  }

  getProfesional(firstName: string, lastName: string) {
    return this.http.get(
      `${this.url}profesionales?firstName=${firstName}&lastName=${lastName}`
    );
  }

  addProfesional(profesional: any) {
    return this.http.post(this.url + 'profesionales', profesional);
  }

  updateProfesional(profesional: any) {
    return this.http.put(
      this.url + 'profesionales?firstName=' + profesional.firstName,
      profesional
    );
  }

  deleteProfesional(firstName: string, lastName: string) {
    return this.http.delete(
      `${this.url}profesionales?firstName=${firstName}&lastName=${lastName}`
    );
  }
}
