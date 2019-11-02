import { Component } from '@angular/core';


@Component({
  selector: 'my-skills',
  templateUrl: './contact.html'
})
export class ContactComponent  { 
  contacts = [
    {
      class : "fa-github",
      url : "htp://github.com/ashishsurana/"
    },{
      class : "fa-linkedin",
      url : "https://in.linkedin.com/in/ashishsurana1"
    },{
    //   class : "fa-skype",
    //   url : "ashish.surana1"
    // },{
      class : "fa-twitter",
      url : "https://twitter.com/ashishsurana1"
    },{
    //   class : "fa-facebook",
    //   url : "https://facebook.com/ashish.surana1"
    // },{
      class : "fa-stack-overflow ",
      url : "http://stackoverflow.com/users/3950481/ashish-surana"
    // },{
    //   class : "fa-instagram",
    //   url : "https://instagram.com/ashishsurana1/"
    // },{
    //   class : "fa-envelope-o",
    //   url : "mailto:ashishsurana.in@gmail.com"
    // }, {
    //   class : "fa-dev",
    //   url : "https://dev.to/ashishsurana"
    }
    ]

  
  constructor() {

  };

}
