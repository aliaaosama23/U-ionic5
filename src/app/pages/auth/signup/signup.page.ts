import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public myForm: FormGroup;
  constructor(public formBuilder: FormBuilder,private router:Router,
              private auth:AuthService,private helper:HelperService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      IDNumber: ['', Validators.required],
      Password: ['',  Validators.required],
    }); 
  }

   login(){

   
    console.log('login')
    // check validation and call api to login
    if(this.myForm.valid){
      this.helper.presentLoading()

      this.auth.UserLogin(this.myForm.value).then((res:any)=>{
        this.helper.dissmisLoading()
        console.log('login data is :'+JSON.stringify( res))
        this.router.navigateByUrl('/main')
      },(err:any)=>{
          console.log('login err'+JSON.stringify(err))
  
          this.helper.dissmisLoading()
        });
    }
   
    
  }

  ForgetPassword(){
    this.router.navigateByUrl('forget-password')
  }

  changeLanguage(){

     console.log('change langauge')
  }
}
