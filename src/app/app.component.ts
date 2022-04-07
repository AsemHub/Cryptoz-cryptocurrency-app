import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SettingProvider } from '../providers/setting/setting';
import { Network } from '@ionic-native/network';

import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html',
})
export class MyApp implements OnInit {
  rootPage:any;
  // rootPage:any = TabsPage;
  theme :any = "dark" //default theme
  language :any = "en" //default theme

  constructor(private platform: Platform, 
             private  statusBar: StatusBar, 
             private  splashScreen: SplashScreen,
              private network: Network,
              private toastCtrl: ToastController,
              public setting:SettingProvider,
              private storage: Storage,
              private _translate:TranslateService
              ) {
       
    
  }
  ngOnInit(): void {
 
      this._translate.setDefaultLang("en")

    this.storage.get('settings').then((settings)=>{
      if(settings.language){
        console.log("LANG FROM MSTORAGE", settings.language)
        this._translate.use(settings.language);
      }
    })
    this.storage.get('isWelcomed').then((val)=>{
      if(val){
        this.rootPage= TabsPage;
      }else{
        this.rootPage= WelcomePage;
      }
   })  
    
this.platform.ready().then(() => {  
console.log("LANGG COMPONENT", this.setting.currentSetting.language)
console.log("LANGG COMPONENT", this.setting.currentSetting.currency)
this.setting.settingSubject.subscribe((data) => {
this.theme = this.setting.currentSetting.theme;
this.language = this.setting.currentSetting.language;
})
this.listenConnection();
// Okay, so the platform is ready and our plugins are available.
// Here you can do any higher level native things you might need.
this.statusBar.styleLightContent();
this.statusBar.overlaysWebView(false);

this.statusBar.backgroundColorByHexString('##0264ed');
this.splashScreen.hide();
});
  }
   
  
  private listenConnection(): void {
    
    this.network.onDisconnect()
      .subscribe(() => {
        let toast = this.toastCtrl.create({
          message: 'Connexion lost',
          duration: 3000,
          position: 'top'
        });
      
        toast.present();
      });
  }

}
