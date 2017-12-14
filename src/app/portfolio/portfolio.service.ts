import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import * as moment from "moment";
import { Moment } from "moment";

// "ccy": "USD",
// "amount": -1648.6687173066555,
// "latestRate": 1,
// "usdValue": -1648.67

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<Array<any>> {
    return this.http
      .get("/assets/data/positions.json", { responseType: "json" })
      .map(res => {
        return Object.values(res);
      });
  }

}
