import { Storage } from '@ionic/storage';
import { ApiProvider } from './../../providers/api/api';
import { CryptoDetailsPage } from './../crypto-details/crypto-details';
import { WelcomePage } from './../welcome/welcome';
import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {MatTableDataSource, MatSort} from '@angular/material';
import { Events } from 'ionic-angular';
import { watchListPage } from '../watch-list/watch-list';
import { SettingProvider } from '../../providers/setting/setting';
import { AdmobFreeProvider } from '../../providers/admob/admob';
import { ConnectedOverlayDirective } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  //Sorting Data
  @ViewChild(MatSort) sort: MatSort;

  //store coins data
  COIN_DATA = [];
  //names of columns that will be displayed
  displayedColumns = [
    "rank",
    "name",
    "current_price",
    "price_change_24",
    "price_change_7d",
    "price_change_30d",
  ];
  dataSource = new MatTableDataSource(this.COIN_DATA);

  search = false; //Search bar

  currentPage = 1; //current Page pagination
  maxPageNumber = 40; // maximum page pagination, currently, they are 500 coins on the market
  loading = true; // display loading when fetching data from API
  currencyPrice = null;
  // currentCurrency = "USD" // default currency
  currentCurrency = "USD"; // default currency
  currentLanguage = this.settingsProvider.currentSetting.language; // default lang

  constructor(
    public navCtrl: NavController,
    public api: ApiProvider,
    private storage: Storage,
    public events: Events,
    public settingsProvider: SettingProvider,
    public admob: AdmobFreeProvider,
    public platform: Platform,
    private translateService: TranslateService
  ) {
    this.api.getnews();
  }

  ionViewWillEnter() {
    this.admob.showRandomAds();
  }
  currencyOut(currency, element) {
    console.log("cuurency out element", element);
    return this.currencyPrice[currency] * element;
  }
  fetchCurrencyApi() {
    return new Promise((resolve) => {
      this.api.getCurrency().then((e) => {
        this.currencyPrice = e;
        resolve(true);
      });
    });
  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.admob.prepareBanner();
    });
    console.log("LANGGG", this.currentLanguage)
    this.settingsProvider.settingSubject.subscribe((data) => {
      this.currentCurrency = this.settingsProvider.currentSetting.currency;
      this.currentLanguage = this.settingsProvider.currentSetting.language;
    });

    this.fetchCurrencyApi().then(() => console.log("FETCH CURRENCY API DONE"));
    // this.translateService.get('APP.CURRENCIES.usd').subscribe((txt: string) => {this.currentCurrency = txt});

    this.fetch_coins().then(() => {
      this.checkFavorite();
      this.dataSource.sort = this.sort;

      console.log("dsds");
    });
  }

  ionViewDidEnter() {

    //subscribe to event when add new coin to favorite
    this.events.subscribe("toggle_favorite", (coin_id, is_favorite) => {
      this.COIN_DATA.forEach((e) => {
        if (e.id == coin_id) {
          e.is_favorite = is_favorite;
        }
      });
    });
  }

  fetch_coins(infiniteScroll?) {
    return new Promise((resolve) => {
      this.api.getAllCoins(this.currentPage, infiniteScroll).then((data) => {
        this.COIN_DATA = this.COIN_DATA.concat(data);
        this.dataSource = new MatTableDataSource(this.COIN_DATA);
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case "current_price":
              return item.market_data.current_price[
                this.currentCurrency.toLowerCase()
              ];
            case "price_change_24":
              return item.market_data.price_change_percentage_24h;
            case "price_change_7d":
              return item.market_data.price_change_percentage_7d;
            // case 'price_change_14d': return item.market_data.price_change_percentage_14d;
            case "price_change_30d":
              return item.market_data.price_change_percentage_30d;
            default:
              return item[property];
          }
        };
        this.loading = false;
        resolve(true);
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  openCrypto(data) {
    this.navCtrl.push(CryptoDetailsPage, { coin: data });
  }

  checkFavorite() {
    this.storage.get("favorites").then((val) => {
      let favorites = val;
      if (favorites) {
        this.COIN_DATA.forEach((e) => {
          if (favorites.map((e) => e.id).indexOf(e.id) != -1) {
            e.is_favorite = true;
          }
        });
      }
    });
  }

  openWatchList() {
    this.navCtrl.push(watchListPage);
  }

  loadMoreCoins(infiniteScroll) {
    this.currentPage++;
    this.fetch_coins(infiniteScroll);
    if (this.currentPage === this.maxPageNumber) {
      infiniteScroll.enable(false);
    }
  }
}
