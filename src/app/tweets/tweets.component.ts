import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TweetsService } from './tweets.service';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, AfterViewInit {

  public tweets$: Observable<any>;

  constructor(
    private tweetService: TweetsService
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
    // Add script tag for widjet.js
    ((d, s, id) => {
      let js: any;
      const fjs = d.getElementsByTagName(s)[0];
      const p = 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = `${p}://platform.twitter.com/widgets.js`;
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'twitter-wjs');
  }

}
