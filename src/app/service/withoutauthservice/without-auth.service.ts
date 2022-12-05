import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WithoutAuthService {
  @Output() subscriptionVal: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private http: HttpClient) { }

  updateSelfuser(obj:any){
    return this.http.patch(`${environment.apiUrl}/self`, obj);
}

updateUserPhoto(base_64_img: any){
  return this.http.patch<any>(`${environment.apiUrl}/self/image`, base_64_img);
}

contactUs(obj: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}/contact`, obj);
}

getLimitedTestimonials(count : any) {
  return this.http.get<any>(`${environment.apiUrl}/testimonials/limit/`+count);
}

}
