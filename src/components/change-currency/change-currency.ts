import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'change-currency',
  templateUrl: 'change-currency.html'
})
export class ChangeCurrencyComponent {

  constructor(public settingsProvider:SettingProvider,public navCtrl: NavController, ) {
  }


 getFlag() {
   return 'fi fi-'+ this.settingsProvider.currentSetting.currency.substring(0, this.settingsProvider.currentSetting.currency.length - 1).toLowerCase() + " fis";
 }

 pushSetting(){
  this.navCtrl.parent.select(3);
 }

}
