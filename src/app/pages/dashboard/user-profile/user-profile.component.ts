import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordServiceService } from 'src/app/service/passwoard-service/password-service.service';
import { WithoutAuthService } from 'src/app/service/withoutauthservice/without-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  openTab = 1;
  userForm:any = FormGroup;
  url:any = '';
  haveimage = false;
  showModal: boolean = false;
  uploadProfileImg: boolean = false;
  userFormSubmitted: boolean = false;
  forgetPasswordFormSubmitted: boolean = false; 
  forgetPasswordForm:any = FormGroup;
  user:any;
  type:any;
  showSubscriptionModal: boolean = false;
  constructor(private formBuilder: FormBuilder, public withoutAuthService: WithoutAuthService,
    public passwordService: PasswordServiceService) { }

  ngOnInit(): void {
    this.initializeEditAccountForm();
    this.initializeChangePasswordForm();
    // this.user = JSON.parse(localStorage.getItem('userData'));
    this.user = localStorage.getItem('userData');
    this.user = JSON.parse(this.user);
    console.log(this.user)
  }

  initializeChangePasswordForm(){
    this.forgetPasswordForm = this.formBuilder.group({
      old_password: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
    });
  }

  initializeEditAccountForm(){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  get f() {
    return this.forgetPasswordForm.controls;
  }

  openSubscriptionPopup(){
    if(this.user.data.roles[0].title == 'intermediate'){
      this.type = 'intermediate';
      this.showSubscriptionModal = !this.showSubscriptionModal;
    }
    else if(this.user.data.roles[0].title == 'primary'){
      this.type = 'primary';
      this.showSubscriptionModal = !this.showSubscriptionModal;
    }
    else{
      this.type = 'primary';
      this.showSubscriptionModal = !this.showSubscriptionModal;
    }
  }

  toggleTabs(tabNumber: number){
    this.openTab = tabNumber;
  }

  editAccount(){
    if (!this.userForm.valid) {
      this.userFormSubmitted = true;
      return;
    }

    

    let obj = {
      name: this.userForm.value.name
    }

    this.withoutAuthService.updateSelfuser(obj).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log('error', error)
        // this.alertService.error(error);
      }
    );

    if(this.uploadProfileImg){
      let img = {
        image: this.url
      }
      this.withoutAuthService.updateUserPhoto(img).subscribe(
        (data) => {
        },
        (error) => {
          console.log('error', error)
          // this.alertService.error(error);
        }
      );
    }
  }


    changePassword() {
      if (!this.forgetPasswordForm.valid) {
        this.forgetPasswordFormSubmitted = true;
        return;
      }
  
      if(this.forgetPasswordForm.value.old_password === this.forgetPasswordForm.value.password){
        // this.alertService.error('New Password can not be same as Old password');
        return;
      }
  
      if(this.forgetPasswordForm.value.password_confirmation !== this.forgetPasswordForm.value.password){
        // this.alertService.error('New Password Should be same as Password Confirmation');
        return;
      }
  
      let obj = {
        old_password: this.forgetPasswordForm.value.old_password,
        password: this.forgetPasswordForm.value.password,
        password_confirmation: this.forgetPasswordForm.value.password_confirmation
      }
  
      this.passwordService
        .changePasswordSave(obj)
        .subscribe(
          (data) => {
            // this.alertService.error(data.message);
            this.forgetPasswordForm.reset();
          },
          (error) => {
            console.log('error', error)
            // this.alertService.error(error);
          }
        );
    }

    closeSubscriptionModal(){
      this.type = undefined;
      this.showSubscriptionModal = false;
    }

    toggleModal(){
      // this.imgChangeEvt = '';
      this.showModal = !this.showModal;
      this.uploadProfileImg = true;
    }
  
    closeModal(){
      // this.imgChangeEvt = '';
      this.showModal = !this.showModal;
      this.uploadProfileImg = false;
      if(this.user.data.image){
        this.url = this.user.data.image;
        this.haveimage = true;
      }
      else {
        this.haveimage = false;
        // this.url = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
      }
    }


}
