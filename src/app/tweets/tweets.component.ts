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
   * @return {string}
   */
  // TODO: depending on reuse turn into a pipe or pull in package containing a pipe
  public timeAgo(time) {
    return time.fromNow();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    !function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
      (document, "script", "twitter-wjs");
  }

}
