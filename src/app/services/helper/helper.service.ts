import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

const  LNG_KEY='SELECTED_LANGUAGE'
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private AppDirection=new BehaviorSubject(null);
  direction="";
  
  selected='';
  loading:any;
  constructor(private translate:TranslateService,private plt:Platform,
              private loadingController:LoadingController,private toastController:ToastController) { 
  
  }

  CheckAppCurrentPlatformIsIOS(){
   return this.plt.is('ios')
  }

  IsLanguageArabic(){
    return this.plt.isRTL;
  }

  async setInitailAppLanguage(){ 
    await Storage.get({ key: LNG_KEY}).then((val:any)=>{
      console.log(val)
      if(val!=null){
        this.set_language(val)
        this.selected=val;
      }else{
        //let language=this.translate.getBrowserLang();
        //console.log(language)
        this.translate.setDefaultLang('ar')
        this.set_language('ar')
        this.selected='ar';
      }
    })
  }


  async set_language(lang){
    this.translate.use(lang)
    this.translate.setDefaultLang(lang)
    this.selected=lang;
    // this.storage.set(LNG_KEY,lang)
    await Storage.set({
      key: LNG_KEY,
      value: lang
    });
    if(lang=='en'){
      document.documentElement.dir='ltr'
      this.set_direction('ltr')
    }
    if(lang=='ar'){
      document.documentElement.dir='rtl'
      this.set_direction('rtl')
    }
  //  window.location.reload()
  
  }

  set_direction(va)
  {
    console.log(va)
    this.direction=va
  }


  getdirectionobservalble():Observable<string>{
    return this.AppDirection.asObservable();
  }

  changeDirection(va){
    this.AppDirection.next(va)
    this.direction=va
  }

 
   presentLoading() {
     this.loadingController.create({
       spinner:"lines",
       backdropDismiss: true
     }).then((respnse)=>{
       respnse.present();
     })
  
   }
 
    
   dissmisLoading() {
      this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
   }
 
   async presentToastWithOptions(message) {
     const toast = await this.toastController.create({
       message: message,
       position: 'bottom',
       duration: 3000,
      // color:"primary",
       cssClass:'toast-custom-class'
     });
     toast.present();
   
}

}