import { Component } from '@angular/core';


@Component({
  selector: 'my-skills',
  templateUrl: './skill.html'
})
export class SkillComponent  { 
  programming = [{
    path : 'assets/java.png'
  },
  {
    path : 'assets/html.png'
  },
  {
    path : 'assets/css.png'
  },
  {
    path : 'assets/python.png'
  },
  {
    path : 'assets/js.png'
  }]

  other = [{
    path : "assets/git.png",
    title : "Git / Github"
  },
  {
    path : 'assets/androids.jpg',
    title : "Android"
  },
  {
    path : 'assets/mysql.png',
    title : "MySql"
  },
  {
    path : 'assets/bootstrap.png',
    title : "Bootstrap"
  },
  {
    path : 'assets/jq.png',
    title : "JQuery"
  },
  {
    path : 'assets/node.png',
    title : "Node.js"
  },
  {
    path : 'assets/mongodb.png',
    title : "Node.js"
  },
  {
    path : 'assets/angular.png',
    title : "Angular2"
  },
  {
    path : 'assets/openstack.png',
    title : "Open Stack"
  },
  {
    path : 'assets/linux.png',
    title : "Linux"
  },
  {
    path : 'assets/digital-ocean.png',
    title : "Digital Ocean"
  },
  {
    path : 'assets/aws.png',
    title : "AWS"
  }]

  certs = [{
    path : 'assets/rhce.png'
  },
  {
    path : 'assets/rhcsa.png'
  },
  {
    path : 'assets/cad.png'
  }]


  constructor() {
      
  };

}
