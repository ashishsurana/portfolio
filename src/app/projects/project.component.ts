import { Component } from '@angular/core';


@Component({
  selector: 'my-skills',
  templateUrl: './project.html'
})
export class ProjectComponent  { 
  projects = [{
    icon : 'assets/cal.png',
    title : "Leave Management App",
    titlehref : "",
    subtitle : " Smart India Hackathon, Grand Finale",
    description : "After getting selected in Finale, This project was build overnight and team of 6 people was leaded by me. My roles were building REST APIs using express and graphql, database designing.",
    technologies : "Node js, MongoDB, HTML5, CSS3, jQuery",
    giturl : "https://github.com/ashishsurana/leave-app-server",
  },{
    icon : "assets/app-logo.png",
    title : "Arya Alucon",
    titlehref : "https://play.google.com/store/apps/details?id=in.surana.ashish.alucon",
    subtitle : " August - November 2016",
    description : "A Native Android Application made for the College, dedicated to the Alumni, where they can see their friends and get to know about the recent college activities.",
    technologies : "Android, Sqlite , Node.js, mongodb",
    giturl : "https://github.com/ashishsurana/Alumni",
    screenshoturl : "https://drive.google.com/open?id=0B1VhjwFcJ03cWk5LMER4YnF5Z2M"
  },{
    icon : "assets/wisflux.png",
    title : "Wisflux Edtech Labs, Jaipur",
    titlehref : "www.wisflux.com",
    subtitle : " Internship",
    description : "I worked as full stack developer. My roles were building REST APIs using express and graphql, database designing, Automated tasks using gitlab for deployment and backups , Interface designing using angular2, deployed AWS Lambda Services.",
    technologies : "Node.js, Graphql, MongoDB, typescript, AWS, Angular 2, Gitlab CI",
    
  },{
    icon : "assets/parkzap.jpg",
    title : "Parkzap Labs, Gurgaon",
    titlehref : "http://parkzap.com/",
    subtitle : " Internship",
    description : "I contributed to Application made for the Parkzap Labs for smart parking solutions. I did the integration of NFC cards, RFID reader, custom hardware connection with android, designing advance UI for controlling the ioio board, cloud communication through efficient libraries",
    technologies : "Android, Java, Sqlite, IOIO Board, IOT",
  },{
    icon : "assets/med.png",
    title : "Medicine Stock Management",
    titlehref : "https://github.com/ashishsurana/Drug_mgmt",
    subtitle : " November 2015",
    description : "A desktop based application having simple UI, that maintains the stock of Shedule H1 drugs with the help of conventional Billing System.",
    technologies : "JAVA, MySql",
    giturl : "https://github.com/ashishsurana/Drug_mgmt",
    screenshoturl : "https://photos.google.com/share/AF1QipOTUSZDaFDtIky6wEZb7brNBKan2IFsDdUNgsICkFZUimvFSXD4vIqMoKi22Sq_WA/photo/AF1QipPnTCr4mX3HYQIA9snIL1qLQ5cb5Fn6Xarnk0po?key=X1V6dkhJbUVtOTBQSWs0ZGVCYjhIN2RlTm1hMWd3"
  },{
    icon : "assets/mini.png",
    title : "Quick Mini Statement",
    titlehref : "https://github.com/ashishsurana/mini-statement",
    subtitle : " september 2014",
    description : "An app that generates the mini statement of bank account from existing bank transaction text messages in our mobile phones.",
    technologies : "JAVA, Sqlite, Android",
    giturl : "https://github.com/ashishsurana/mini-statement",
    screenshoturl : "https://photos.google.com/share/AF1QipMuW--Sxh0IXXTwUXwfZFNX4O1p0WjTCNvhsd4wsbfLFQ8ev57h9zi4RYRGzBLhTA/photo/AF1QipNVnGrPm3knbc8yqTO-17XSQ7Z5FJPaqLoKpvX_?key=THRPeWg2Qll0d3kyV2R0Yko2X1dPZkNkRkl5eDRR"
  },{
    icon : "assets/epilepsy.png",
    title : "pragyaepilepsycare.in",
    titlehref : "http://pragyaepilepsycare.in/",
    subtitle : " January - March, 2015",
    description : "A website for an NGO that is serving for epilepsy in rural area from last 36 years.",
    technologies : "HTML, CSS, JavaScript",
    giturl : "https://github.com/ashishsurana/epilepsy",
    screenshoturl : "https://photos.google.com/share/AF1QipP-7bLrxiHa0khvC4jff1zBmhoHhkHL1ZaZ3v1Vs7Xr-h5gelKiy_DJBoovmEQSxw/photo/AF1QipOC2rYBdWm7W8IHLHCez4T-CJ92sXqWU_fkoFSg?key=ZDN5Rk9EczFqV21ieUo5eWM0djhEQ3pkdzV1Qkl3"
  }];

  constructor() {
  };

}
