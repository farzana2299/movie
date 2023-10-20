import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }
search(film:any)
{
  return this.http.get(`https://www.omdbapi.com/?apikey=$fa1c9c03&t=${film}`)
}
}
