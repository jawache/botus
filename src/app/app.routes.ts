import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TweetsComponent } from "./tweets/tweets.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TradesComponent } from "./trades/trades.component";

export const routes: Routes = [
  { path: "", redirectTo: 'tweets', pathMatch: 'full' },
  { path: "tweets", component: TweetsComponent, pathMatch: 'full' },
  { path: "trades", component: TradesComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent }
];
