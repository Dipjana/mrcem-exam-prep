import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { logOut } from 'src/app/store/auth/auth.action';
import { isAuthenticated } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgdir: any;
  isLoggedIn: boolean = false;
  isLoggedOut: boolean = false;
isAuthenticated: Observable<boolean>

data: any = [{
  "parentName": "ABOUT THE EXAM",
  "childProperties":
    [
      { "propertyName": "MRCEM OVERVIEW", "link":"/mrcem-overview" },
      { "propertyName": "MRCEM PRIMARY", "link":"/mrcem-primary" },
      { "propertyName": "MARCEM INTERMEDIATE", "link":"/mrcem-intermediate-sba" },
      { "propertyName": "MRCEM OSCE", "link":"/mrcem-osce" },
    ]
}, {
  "parentName": "EXAM TIPS",
  "childProperties":
    [
      { "propertyName": "MRCEM PRIMARY TIPS", "link":"/mrcem-primary-tips"  },
      { "propertyName": "MARCEM INTERMEDIATE TIPS", "link":"/mrcem-intermediate-tips"  },
      { "propertyName": "MRCEM OSCE TIPS", "link":"/mrcem-osce-tips"  },
    ]
}, {
  "parentName": "BUY FULL ACCESS",
  "childProperties":
    [
      { "propertyName": "MRCEM PRIMARY", "link":"/mrcemprimary"  },
      { "propertyName": "MARCEM INTERMEDIATE SBA", "link":"/mrcemintermediate"  }
    ]
},
{
  "parentName": "BOOKS",
  "link":"",
  "externalLink":"https://www.medicalexamprep.co.uk/product-category/books/",
  "childProperties": []
},
{
  "parentName": "TESTIMONIALS",
  "link":"testimonial",
  "childProperties": []
},
{
  "parentName": "SAMPLE QUESTIONS",
  "link":"samplequestions",
  "childProperties":
    [
       { "propertyName": "MRCEM PRIMARY", "link":"/sample-mrcem-primary"  },
      { "propertyName": "MARCEM INTERMEDIATE", "link":"/sample-mrcem-intermediate"  }
    ]
},

{
  "parentName": "FREE RESOURCES",
  "link":"freeresources",
  "childProperties":
    [
      { "propertyName": "FREE ECG GUIDE","link":"",
      "externalLink":"https://www.medicalexamprep.co.uk/ecg-guide/", },
      { "propertyName": "ARTICLES", "link":"",
      "externalLink":"https://www.medicalexamprep.co.uk/blog/", },
      { "propertyName": "CASE OF THE MONTH", "link":"",
      "externalLink":"https://www.medicalexamprep.co.uk/case-of-the-month/", },
      { "propertyName": "EXAM TIPS", "link":"",
      "externalLink":"https://www.medicalexamprep.co.uk/exam-tips/", },
    ]
},{
  "parentName": "CONTACT US",
  "link":"/contact-us",
  "childProperties": []
}
];
  constructor(private store: Store<AppState>) {
    this.isAuthenticated = this.store.select(isAuthenticated)
   }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated)
    // const userProfile = localStorage.getItem("userData");
    // if(userProfile){
    //   this.isLoggedIn = !(this.isLoggedOut = false);
    // } else {
    //   this.isLoggedOut = !(this.isLoggedIn = false);
    // }
  }

  onLogout(event: Event){
    console.log("ggg")
event.preventDefault();
this.store.dispatch(logOut())
  }

}
