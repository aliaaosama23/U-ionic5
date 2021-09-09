import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorAppointmentsList } from 'src/app/models/Appointment';
import { Branch } from 'src/app/models/Branch';
import { Clinic } from 'src/app/models/Clinic';
import { Doctor } from 'src/app/models/Doctor';
import { environment } from 'src/environments/environment';
import { Http, HttpResponse } from '@capacitor-community/http';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  customHeaders
  = { 
    "Access-Control-Allow-Origin":"http://93.112.7.126/",
    "origin":"http://93.112.7.126/"
  };
  constructor(private http: HttpClient,private helper:HelperService) { }

  async GetBranches(){
    const options = {
      url: `${environment.baseUrl}Organization/GetBranchs`,
      headers: this.customHeaders,
    };
  
    const response: HttpResponse = await Http.get(options);
    //const response = await Http.request({ ...options, method: 'GET' })
    if (response.status== 500) {
      this.helper.presentToastWithOptions(response.data);
    }

    return response.data;
    //return  this.http.get<Branch[]>(`${environment.baseUrl}Organization/GetBranchs`).toPromise();
  }

  async GetClinicsByBranch(branchId){
    const options = {
      url: `${environment.baseUrl}Clinic/GetClinicsByBranch/${branchId}`,
      headers: { 
        "Access-Control-Allow-Origin":"http://93.112.7.126/",
        "origin":"http://93.112.7.126/"
      },
    };
  
    const response: HttpResponse = await Http.get(options);
    if (response.status== 500) {
      this.helper.presentToastWithOptions(response.data);
    }

    return response.data;
    //return  this.http.get(`${environment.baseUrl}Clinic/GetClinicsByBranch/${branchId}`).toPromise();
  }

  async GetDoctors(DoctorSpeciality,Branch_Code,ClinicDept_Code,lat,long){
    const options = {
      url: `${environment.baseUrl}Doctor/GetDoctors?DoctorSpeciality=${DoctorSpeciality}&Branch_Code=${Branch_Code}&ClinicDept_Code=${ClinicDept_Code}&lat=${lat}&long=${long}`,
      headers: this.customHeaders,
    };
  
    const response: HttpResponse = await Http.get(options);
    if (response.status== 500) {
      this.helper.presentToastWithOptions(response.data);
    }

    return response.data;
    //return  this.http.get(`${environment.baseUrl}Doctor/GetDoctors?DoctorSpeciality=${DoctorSpeciality}&Branch_Code=${Branch_Code}&ClinicDept_Code=${ClinicDept_Code}&lat=${lat}&long=${long}`).toPromise();
  }

  async GetDoctorAppointments(DoctorCode,Fk_Branch_ID,StartDate,IS_TeleMed){
    const options = {
      url: `${environment.baseUrl}Doctor/GetDoctorAppointments?DoctorCode=${DoctorCode}&Fk_Branch_ID=${Fk_Branch_ID}&StartDate=${StartDate}&IS_TeleMed=${IS_TeleMed}`,
      headers: this.customHeaders,
    };
  
    const response: HttpResponse = await Http.get(options);
    if (response.status== 500) {
      this.helper.presentToastWithOptions(response.data);
    }

    return response.data;
   //return  this.http.get(`${environment.baseUrl}Doctor/GetDoctorAppointments?DoctorCode=${DoctorCode}&Fk_Branch_ID=${Fk_Branch_ID}&StartDate=${StartDate}&IS_TeleMed=${IS_TeleMed}`).toPromise();
  }

}
