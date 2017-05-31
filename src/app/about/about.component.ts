import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './about.html'
})
export class AboutComponent  { 
  name = 'Angular';
  LOGO = ""

  
  constructor() {
      this.LOGO = 'assets/pic.png'
  };

}
