import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  key = environment.apiKey;
  cx = environment.cx;
  input: string = "facebook";

  constructor(private http: HttpClient) {}

  headerDict = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  // "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  getGoogle() {
    return   this.http.get('https://www.googleapis.com/customsearch/v1?key='
     + environment.apiKey + '&cx=' + environment.cx + '&q=' + this.input,
    this.requestOptions)

    // return   this.http.get(`https://www.googleapis.com/customsearch/v1?key=
    //  environment.apiKey&cx=environment.cx&q=this.input`, this.requestOptions) }

  //     return this.http.get(
  //     "https://www.googleapis.com/customsearch/v1?key={environment.apiKey}&cx={environment.cx}&q={input}&num={10}", {requestOptions});

  
    
  }
}
