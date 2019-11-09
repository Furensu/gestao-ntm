import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {
    
   }
   getAllEmployee(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').toPromise();
  }
}
