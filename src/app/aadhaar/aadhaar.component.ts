import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AadhaarServiceService } from './aadhaar-service.service';


var gatewayOptions = {
  company_display_name: 'codekul', //(required)
  consent_purpose: 'testing', //(required)
  front_text_color: 'FFFFFF', //(optional)Add the hex for colour of text of company name
  background_color: '2C3E50', //(optional)Add the hex for colour to be set for gateway.
  mobile_email_required: 'Y', //(optional) N if mobile email is not required. 
  logo_url: 'https://media.licdn.com/media/AAEAAQAAAAAAAAgLAAAAJGU1NTQyM2FmLTdlYmItNGZhOS1iMTA0LWQ1NjI0YTI2ZmQ3Yw.png', //(required)
  otp_allowed: 'y', // (optional) default value is ‘y’
  fingerprint_allowed: 'n', //(optional) default value ‘y’
  default_device: '', //(optional) If set device selection will not appear
  device_selection_allowed: 'n' //(optional)New config added  to control dropdown access
};


@Component({
  selector: 'app-aadhaar',
  templateUrl: './aadhaar.component.html',
  styleUrls: ['./aadhaar.component.css']
})
export class AadhaarComponent implements OnInit {

   showOTP = false;
  opencrd = false;
  //  closeResult: string;
   type = "ekyc";
    
  myAadhaarGateway ;

   constructor(
      private modalService: NgbModal,
      private aadharService : AadhaarServiceService
    ) {}

    aadharvalue : String;
    aadharotp :String;


  OnSendOTP(aadhar){
    this.showOTP = true; 
    console.log(aadhar);
    this.aadharService.SendOTP(aadhar,this.type).subscribe(res => { console.log(res);
    
    // this.myAadhaarGateway = new AadhaarAPIGateway(res.id, gatewayOptions);
    });
    }
    openCrd(){
      this.opencrd=true;
      //     openAadhaarGateway(this.myAadhaarGateway);

    }
    OnClear(){
    this.aadharvalue = '';  
    this.aadharotp = '';  
    this.opencrd=false;
    this.showOTP = false;
    }



    // open(content) {
    //     openAadhaarGateway(this.myAadhaarGateway);
    //     this.modalService.open(content).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  ngOnInit() {
  }

}
