import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { HelperService } from 'src/app/services/helper/helper.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  MenuItems:any[]=[
    {
      'icon':'../../../assets/imgs/home.svg',
      'title':'home',
      'route':'/main'
    },
    {
      'icon':'../../../assets/imgs/user.svg',
      'title':'profile',
      'route':'/profile'
    },
    {
      'icon':'../../../assets/imgs/settings.svg',
      'title':'setting',
      'route':'/settings'
    },
    {
      'icon':'../../../assets/imgs/about.svg',
      'title':'about',
      'route':'/about'
    },
    {
      'icon':'../../../assets/imgs/text-document.svg',
      'title':'suggest',
      'route':'/suggestion'
    },
    {
      'icon':'../../../assets/imgs/insurance.svg',
      'title':'privacy',
      'route':'/privacy-policy'
    },
    {
      'icon':'../../../assets/imgs/accept.svg',
      'title':'terms',
      'route':'/terms'
    },
    {
      'icon':'../../../assets/imgs/logout.svg',
      'title':'logout',
      'route':''
    }
  ];
  isIos:boolean
  constructor(private location: Location,private helper:HelperService) { }

  ngOnInit() {
    this.isIos=this.helper.CheckAppCurrentPlatformIsIOS();
  }

  GoBack(){
    this.location.back();
  }
}
