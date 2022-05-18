import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';
import { AdmobFreeProvider } from '../../providers/admob/admob';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  currencyList = ['usd','aud','eur','cad','aed','gbp','jpy','idr','inr', 'lyd', 'egp', 'rub', 'syp', 'sdg'];
  languageList = ['en', 'ar' ];
  currentCurrency = this.settingProvider.currentSetting.currency;
  currentLanguage = this.settingProvider.currentSetting.language;
  isDarkTheme  = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public settingProvider:SettingProvider,
              public alertCtrl: AlertController,
              public admob:AdmobFreeProvider,
              private _translate:TranslateService) {
  }


  ionViewWillEnter(){
    this.admob.showRandomAds();
  }

  ionViewDidLoad() {

    this.settingProvider.settingSubject.subscribe((data) => {
      //get the current currency
      this.currentCurrency = this.settingProvider.currentSetting.currency;
      this.currentLanguage = this.settingProvider.currentSetting.language;
      this.isDarkTheme =  (this.settingProvider.currentSetting.theme === 'dark');
    })

    //this.currentCurrency = this.settingProvider.settings.currency.toLowerCase();
    this.addCurrentCurrencyFlag();
    this.addCurrentLanguageFlag();
  }
  addFlag(el:HTMLElement) {
    var icon = document.createElement('i');
    icon.className = "flag-icon flag-icon-"+ el.innerText.substring(0, el.innerText.length - 1).toLowerCase(); 
    el.innerHTML = icon.outerHTML +  el.innerHTML;
  }

  initCurrencyIcon(currency){
    setTimeout(()=> {
      var currencyList = document.querySelectorAll('.select-currency .alert-radio-label ');
      var icon = document.createElement('i');
      Array.from(currencyList).forEach((el:HTMLElement)=> {
           this.addFlag(el);
      });
    }, 100);
  }

  addLanguageFlag(el:HTMLElement ) {
    let language = el.innerText == 'EN'? 'US':'LY'  
    var icon = document.createElement('i');
    icon.className = "flag-icon flag-icon-"+ language.toLowerCase(); 
    el.innerHTML = icon.outerHTML +  el.innerHTML;
  }

  initlanguageIcon(language){
    setTimeout(()=> {
      var languageList = document.querySelectorAll('.select-language .alert-radio-label ');
      var icon = document.createElement('i');
      Array.from(languageList).forEach((el:HTMLElement)=> {
           this.addLanguageFlag(el );
      });
    }, 100);
  }

  addCurrentCurrencyFlag(){
    setTimeout(()=> {
      console.log("entering in curren funciton")
      var currentCurrencyNode = <HTMLElement> document.querySelector('.item-currency .select-text');
      currentCurrencyNode.innerHTML = this.currentCurrency.toUpperCase();
      this.addFlag(currentCurrencyNode);
    }, 100);
  }

  addCurrentLanguageFlag(){
    setTimeout(()=> {
      var currentLanguageNode = <HTMLElement> document.querySelector('.item-language .select-text');
      currentLanguageNode.innerHTML = this.currentLanguage.toUpperCase();
      console.log("in add current " + currentLanguageNode.innerText)
      this.addLanguageFlag(currentLanguageNode);
    }, 100);
  }

  changeCurrentCurrency() {
    this.addCurrentCurrencyFlag();
    this.settingProvider.currentSetting.currency = this.currentCurrency.toUpperCase();
    this.settingProvider.setSettings();
  }

  changeCurrentLanguage(event) {
    this.addCurrentLanguageFlag();
    this.settingProvider.currentSetting.language = event; 
    this._translate.use(event);
    this.settingProvider.setSettings();
  }


  showAlertCredit() {
    const alert = this.alertCtrl.create({
      title: 'Credits',
      subTitle: 'We are using Coingecko API to get charts data and other watch.',
      buttons: ['OK']
    });
    alert.present();
  }

  updateTheme() {
    this.settingProvider.currentSetting.theme = (this.isDarkTheme) ? 'dark' : 'light';
    this.settingProvider.setSettings();
  }
  
}
