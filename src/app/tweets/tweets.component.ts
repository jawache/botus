import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TweetsService } from './tweets.service';
import { Observable } from 'rxjs/Observable';
import { Ng2TweetService } from "ng2-tweet/lib/index";




@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"]
})
export class TweetsComponent implements OnInit, AfterViewInit {
  public tweets$: Observable<any>;
  public latestTweetId: string;

  constructor(
    public tweetService: TweetsService,
    private ng2TweetService: Ng2TweetService
  ) {
    this.tweets$ = tweetService.getTweets();
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
