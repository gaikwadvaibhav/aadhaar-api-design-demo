import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

var gatewayOptions = {
  company_display_name: '<<Add your company name here>>', //(required)
  consent_purpose: '<<Add the purpose of transaction here>>', //(required)
  front_text_color: 'FFFFFF', //(optional)Add the hex for colour of text of company name
  background_color: '2C3E50', //(optional)Add the hex for colour to be set for gateway.
  mobile_email_required: 'Y', //(optional) N if mobile email is not required. 
  logo_url: 'https://your-square-product-logo-image-url-here.png', //(required)
  otp_allowed: 'n', // (optional) default value is ‘y’
  fingerprint_allowed: 'y', //(optional) default value ‘y’
  default_device: 'MFS100', //(optional) If set device selection will not appear
  device_selection_allowed: 'n' //(optional)New config added  to control dropdown access
}; 


@Injectable()
export class AadhaarServiceService {
// Url : 'http://developer.uidai.gov.in/otp/1.6/public/9/8/MEaMX8fkRa6PqsqK6wGMrEXcXFl_oXHA-YuknI2uf0gKgZ80HaZgG3A';
  adharUrl = "http://developer.uidai.gov.in/kyc/1.0/public/9/9/MKzX8dnY5qyuO4z8neQPDqrSCMAU5pCS32obnzl83xwtFdi45gwK6QA/${type}/${aadharnumber}"            
constructor( private http : HttpClient ) { }

SendOTP(aadharnumber, type){
  console.log("In Service", type,aadharnumber);

   let headers = new Headers({ 'Access-Control-Allow-Origin': 'localhost:4200'});
   headers.append('Content-Type', 'application/json');
   headers.append('Authentication', 'http://api.onfido.com/v2/applicants/applicant_id/checks');
  let options = new RequestOptions({ headers: headers });
  return this.http
 .post("http://developer.uidai.gov.in/kyc/1.0/public/9/9/MKzX8dnY5qyuO4z8neQPDqrSCMAU5pCS32obnzl83xwtFdi45gwK6QA/${type}/${aadharnumber}", options)
}

}

// http://developer.uidai.gov.in/kyc/1.0/public/9/9/MKzX8dnY5qyuO4z8neQPDqrSCMAU5pCS32obnzl83xwtFdi45gwK6QA
// http://developer.uidai.gov.in/kyc/1.0/public/1/0/MOVKOaZbZY1nao532lBQDd6q7Kci6wd_DGwRNMuDCIOS3sAo96OuYtI
