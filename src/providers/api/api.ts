import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as x2js  from 'xml2js';


const default_api_url = "https://api.coingecko.com/api/v3";
const default_news_rss = "http://cointelegraph.com/rss";

@Injectable()
export class ApiProvider {


  constructor(public http: HttpClient) {

  }

  getAllCoins(pageNumber, infiniteScroll?) {
    return new Promise((resolve, reject) => {
      this.http.get(`${default_api_url}/coins?per_page=50&page=${pageNumber}`).subscribe((data)=>{
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
        resolve(data);
      }, (e) => {
        reject(e);
      })
    })
  }

  getCoinInfo(coin_id) {
    return new Promise((resolve, reject)=> {
      this.http.get(`${default_api_url}/coins/${coin_id}`).subscribe((data)=>{
        resolve(data);
        }, (e) => {
          reject(e);
        })
    })
  }

  getCoinChart(coin_id,currency,period) {
    return new Promise((resolve, reject)=> {
      this.http.get(`${default_api_url}/coins/${coin_id}/market_chart?vs_currency=${currency}&days=${period}`).subscribe((data)=>{
        resolve(data);
        }, (e) => {
          reject(e);
        })
    })
  }

  getGlobalMarket() {
    return new Promise((resolve, reject)=> {
      this.http.get(`${default_api_url}/global`).subscribe((response: any)=>{
        resolve(response.data);
        }, (e) => {
          reject(e);
        })
    })
  }

  getnews() {
    return new Promise((resolve, reject)=> {
      var headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

        this.http.get(default_news_rss, {responseType : 'text' , headers: headers })
        .subscribe((data)=>{
              x2js.parseString(data, {trim: true}, function (err, result) {
                  resolve(result);
              });
          }, (e) => {
            console.log("FOUND THE PROBLEM")
              // reject(e);
          })
     })
  }
  getCurrency() {
    return new Promise((resolve, reject)=> {
      var headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

        this.http.get('https://62376f9fb08c39a3af805515.mockapi.io/currencies', {responseType : 'json' , headers: headers })
        .subscribe((data:any)=>{
          console.log("LOADING DATA !!!",data)
          resolve(data[0])
          reject({
            "egp":0,
            "lyd":0,
            "sdg":0
          }
            )
          return data;
          }, (e) => {
            console.log("REJECTED! ")
              reject(e);
          })
     })
  }


}
