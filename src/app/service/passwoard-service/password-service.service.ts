import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

  constructor(private router: Router, private http: HttpClient ) { }
  forgetPasswordCheckEmail(email:any) {
    return this.http.get<any>(`${environment.apiUrl}/forgot-password/check-email?email=`+email);
}

forgetPasswordSave(obj:any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/forgot-password/save`, obj);
}

changePasswordSave(obj:any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/change-password/save`, obj);
}

 resetuserstat(token:any): Observable<any> {
    const headers = { 'Authorization': token };
    return this.http.delete(`${environment.apiUrl}/self/reset`, { headers })
        .pipe(map(x => x));
 }

}
