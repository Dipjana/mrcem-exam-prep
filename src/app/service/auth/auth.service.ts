import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponceData } from 'src/app/model/authResponceData.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { logOut } from 'src/app/store/auth/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: any, password: any): Observable<AuthResponceData> {
    //body raw
    const data ={ email, password };
    return this.http.post<AuthResponceData>(`${environment.apiUrl}/login`, data)
}

formatUser(data: AuthResponceData) {

    const user = new User(data.data.user_id, data.data.email, data.data.name, data.token, data.data.roles,)
      console.log("UserData :", data)
      return user;
    }
getErrorMessage(message: Error){
  console.log(message);
  // switch(message.){
  //   case 'EMAIL_NOT_FOUND':
  //     return 'Email Not Found';
  //   case 'INVALID_PASSWORD':
  //     return 'Invalid Password';
  //   default:
  //     return 'Unknown error occurued. Please try again';
  // }
}

setUserInLocalStorage(user: User){
  localStorage.setItem('userData', JSON.stringify(user))
}

logOut(){
  localStorage.removeItem('userData')
}

}


// getErrorMessage(data: )


// getErrorMessage(message: string){
//   switch(message){
//     case 'EMAIL_NOT_FOUND':
//       return 'Email Not Found';
//     case 'INVALID_PASSWORD':
//       return 'Invalid Password';
//     default:
//       return 'Unknown error occurued. Please try again';
//   }
// }


