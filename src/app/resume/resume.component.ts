import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'my-resume',
  templateUrl: './resume.html'
})
export class ResumeComponent  { 

  sanitizer: DomSanitizer;


  ath = "Resume.pdf";

  path
  
  
  

  constructor(sanitizer : DomSanitizer) {
    console.log(this.path);
    this.path = sanitizer.bypassSecurityTrustResourceUrl(this.ath);

};

}
