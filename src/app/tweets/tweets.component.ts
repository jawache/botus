import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TweetsService } from './tweets.service';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"]
})
export class TweetsComponent implements OnInit, AfterViewInit {
  public tweets$: Observable<any>;

  constructor(
    public tweetService: TweetsService,
    private ng2TweetService: Ng2TweetService
  ) {
    this.tweets$ = tweetService.getTweets();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    !(function(d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = "https";
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "twitter-wjs");
  }
}
