import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PortfolioService } from "./portfolio.service";
import "rxjs/add/operator/scan";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit {
  public portfolio$: Observable<any>;
  public pnl$: Observable<number>;

  constructor(public portfolioService: PortfolioService) {
    this.portfolio$ = portfolioService.getPortfolio();
    this.pnl$ = this.portfolio$.map(portfolio => {
      return portfolio.reduce((acc, curr) => acc + curr.usdValue, 0);
    });
  }

  ngOnInit() {}
}
