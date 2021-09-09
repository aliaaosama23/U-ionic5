import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/Branch';
import { Clinic } from 'src/app/models/Clinic';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  //branchSelected:Boolean=false;
  branches:Branch[]=[];
  branchClinics:Clinic[]=[];
  clinicDoctors:Doctor[]=[];
  langIsArabic:boolean;
  branchSelectedId:number;
  clinicSelectedId:number;
  lat:number;
  long:number;
  constructor(private doctorService:DoctorService,private helper:HelperService) {
    this.langIsArabic=this.helper.IsLanguageArabic();
   }

  ngOnInit() {
    // get all branches
    this.GetBranches();

    // get user location to get doctors 
    this.GetCurrentLocation();
  }

  GetBranches(){
    this.helper.presentLoading();
      this.doctorService.GetBranches().then(
        (res:any)=>{
        this.branches=res;
        this.helper.dissmisLoading()
      },
      (err:any)=>{
        this.helper.dissmisLoading()
      });
  }

  selectBranch(){
    this.helper.presentLoading();
    this.doctorService.GetClinicsByBranch(this.branchSelectedId).then(
      (res:any)=>{
        this.helper.dissmisLoading();
        this.branchClinics=res;  
    },
    (err:any)=>{
        this.helper.dissmisLoading();
    })
  }

  selectClinic(){
    console.log(this.clinicSelectedId);
    this.helper.presentLoading();
   
    this.doctorService.GetDoctors(this.clinicSelectedId,this.branchSelectedId,null,this.lat,this.long).then(
      (res:any)=>{
        this.helper.dissmisLoading();
        this.clinicDoctors=res;  
          console.log('clinicDoctors : '+JSON.stringify(this.clinicDoctors))
      },
      (err:any)=>{
          this.helper.dissmisLoading();
    })   
  }

  GetCurrentLocation(){
    Geolocation.checkPermissions().then((check:any)=>{
      console.log('checkPermissions  : '+JSON.stringify(check))
        if(check.location=="prompt"){
          Geolocation.requestPermissions().then((request:any)=>{
            console.log('requestPermissions  : '+JSON.stringify(request))
            if(request.location=="granted"){
              Geolocation.getCurrentPosition().then((coords:any)=>{
                console.log('lat is : '+coords.coords.latitude +'long is : '+coords.coords.longitude);
                this.lat=coords.coords.latitude;
                this.long=coords.coords.longitude;
              })
            }
          })
        }else if(check.location=="granted"){
          Geolocation.getCurrentPosition().then((coords:any)=>{
            console.log('lat is : '+coords.coords.latitude +'long is : '+coords.coords.longitude);
            this.lat=coords.coords.latitude;
            this.long=coords.coords.longitude;
          })
        }
    })
  }
}
