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
  public latestTweetId: string = '929670192434745344';

  constructor(
    public tweetService: TweetsService,
    private ng2TweetService: Ng2TweetService
  ) {
    this.tweets$ = tweetService.getTweets();
  }

  /**
   * Outputs date in time ago format.
   * @param {string} time
   * @returns {string}
   */
  // TODO: depending on reuse turn into a pipe or pull in package containing a pipe
  public timeAgo(time) {
    return time.fromNow();
  }

  /**
   * Checks and maps the sentiment of a tweet.
   * @param {string} sentiment
   * @returns {string}
   */
  public checkSentiment(sentiment: string) {
    if (+sentiment < 0.33) {
      return 'uncertain';
    } else if (+sentiment <= 0.66) {
      return 'negative';
    } else {
      return 'positive';
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
