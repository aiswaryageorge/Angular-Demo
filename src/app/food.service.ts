import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'user-key': '782c87cf758fdfcd35be2c980d46ebe5'
    })
  };

  getAllRestaurants(){
    return this.http.get('https://developers.zomato.com/api/v2.1/search',this.httpOptions)
  }
}
