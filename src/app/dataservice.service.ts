import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private jsonUrl = 'assets/data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
