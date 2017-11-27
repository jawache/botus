import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import * as moment from "moment";
import { Moment } from "moment";

class Trade {
  constructor(
    public id: string,
    public side: string,
    public ccy: string,
    public quantity: string,
    public ts: Moment
  ) {}
}

@Injectable()
export class TradesService {

  constructor(private http: HttpClient) {}

  getTrades(): Observable<Array<Trade>> {
    return this.http
      .get("/assets/data/trades.json", { responseType: "json" })
      .map(res => {
        return (res as any[]).map(trade => {
          let ts = moment(trade.ts);
          // let day = ts.startOf("day")

          return new Trade(
            trade.id,
            trade.side,
            trade.ccy,
            parseFloat(trade.quantity).toFixed(2),
            ts
          );
        });
      });
  }

}
