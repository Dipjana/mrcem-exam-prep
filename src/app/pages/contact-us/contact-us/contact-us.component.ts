import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { CanonicalService } from '@app/shared/services/canonical.service';
// import { ShareMetaService } from '@app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators, FormsModule } from "@angular/forms";
import { WithoutAuthService } from 'src/app/service/withoutauthservice/without-auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  heading:string = 'Contact Us';
  userForm: any;
  userFormSubmitted: boolean = false;
  userData:any;
  isDisabled:boolean = false;
  constructor(
    // private shareMetaService: ShareMetaService,
    private title: Title,
    // private canonicalService: CanonicalService,
    private formBuilder: FormBuilder,private withoutAuthService: WithoutAuthService, 
  ) { }

  ngOnInit(): void {
    this.userData =localStorage.getItem('user');
    this.userData = JSON.parse(this.userData);
    this.initializeForm();
    this.assignDatatoForm();
  }
  

    initializeForm() {
      this.userForm = this.formBuilder.group({
        name: [
          '',
          [Validators.required, Validators.pattern("^[A-Za-z ]+$")],
        ],
        email: ['', [Validators.required, Validators.email]],
        question: ['', [Validators.required]],
      });
    }
  
    assignDatatoForm(){
      if(this.userData){
        this.userForm.controls['name'].setValue(this.userData.data.name);
        this.userForm.controls['email'].setValue(this.userData.data.email);
        this.isDisabled = true;
      }
    }

    get f() {
      return this.userForm.controls;
    }
  
    submitNow() {
      if (!this.userForm.valid) {
        this.userFormSubmitted = true;
        return;
      } 
      else {
        this.withoutAuthService.contactUs(this.userForm.value).subscribe(
          (data) => {
            // this.alertService.success(data.data);
            console.log(data.data)
          },
          (error) => {
            // this.alertService.error(error);
            console.log(error)
          }
        );
      }
    }
}
