import { Http } from "../../node_modules/@angular/http";
import 'rxjs/add/operator/map';

// this is a service to call the spotify api when serching for a track
export class SpotifyService {
    constructor(public http: Http) {}

    // search for a track given a search item
    searchTrack(query: string) {
        let params: string = [
            `q=${query}`,
            `type=track`
        ].join("&");
        let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
        return this.http.request(queryURL).map(res => res.json());
    }
}
