import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import * as moment from "moment";
import { Moment } from "moment";

class Tweet {
  constructor(
    public id: string,
    public text: string,
    public ts: Moment,
    public phrases: Array<string>,
    public sentiment: number
  ) {}
}

@Injectable()
export class TweetsService {
  constructor(private http: HttpClient) {}

  getTweets(): Observable<Array<Tweet>> {
    return this.http
      .get("/assets/data/enrichedTweets.json", { responseType: "json" })
      .map(res => {
        return (res as any[]).map(tweet => {
          // Create a day version of the created_at date/time //"Sun Nov 12 11:20:20 +0000 2017"
          let tweetTime = tweet.created_at;
          // Strip off first 4 chars for date
          tweetTime = tweetTime.slice(4);
          // Remove timezone info
          let tweetYear = tweetTime.slice(-4);
          tweetTime = tweetTime.slice(0, -11);
          tweetTime = tweetTime + " " + tweetYear;

          let ts = moment(tweetTime, "MMM D HH:mm:ss YYYY");
          // let day = ts.startOf("day")

          return new Tweet(
            tweet.id_str,
            tweet.text,
            ts,
            tweet.phrases,
            tweet.sentiment
          );
        });
      });
  }
}
