import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TradesService } from "./trades.service";

@Component({
  selector: "app-trades",
  templateUrl: "./trades.component.html",
  styleUrls: ["./trades.component.css"]
})
export class TradesComponent implements OnInit {
  public trades$: Observable<any>;

  constructor(public tradeService: TradesService) {
    this.trades$ = tradeService.getTrades();
  }

  ngOnInit() {}
}
