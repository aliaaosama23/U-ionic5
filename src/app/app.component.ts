import { Component } from '@angular/core';
import { HelperService } from './services/helper/helper.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lang:string='';
  AppDirection:string=''
  constructor(private helper:HelperService,private translate:TranslateService,) {
    document.documentElement.dir='rtl';
    this.translate.setDefaultLang('ar');
  // this.helper.setInitailAppLanguage()
    //   this.storage.get('SELECTED_LANGUAGE').then(val=>{
  //     console.log('current language  :  '+val)
  //    if(val!=null){
  //      if(val=='ar'){
  //        console.log("current lang :  "+val)
  //        document.documentElement.dir='rtl'
  //        this.lang='ar'
  //        this.helper.changeDirection('rtl')
       
  //      }else if(val=='en'){
  //        console.log("current lang :  "+val)
  //        document.documentElement.dir='ltr'
  //        this.lang='en'
  //        this.helper.changeDirection('ltr')
       
  //      }
  //    }
  //  })
   

  //  this.helper.getdirectionobservalble().subscribe((currentDirection:any)=>{
  //    console.log( "direction from :  "+ currentDirection)
  //    this.AppDirection=currentDirection
  //  })
  }
}
