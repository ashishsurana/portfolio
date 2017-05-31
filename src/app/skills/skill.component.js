"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SkillComponent = (function () {
    function SkillComponent() {
        this.programming = [{
                path: 'assets/java.png'
            },
            {
                path: 'assets/html.png'
            },
            {
                path: 'assets/css.png'
            },
            {
                path: 'assets/python.png'
            },
            {
                path: 'assets/js.png'
            }];
        this.other = [{
                path: "assets/git.png",
                title: "Git / Github"
            },
            {
                path: 'assets/androids.jpg',
                title: "Android"
            },
            {
                path: 'assets/mysql.png',
                title: "MySql"
            },
            {
                path: 'assets/bootstrap.png',
                title: "Bootstrap"
            },
            {
                path: 'assets/jq.png',
                title: "JQuery"
            },
            {
                path: 'assets/node.png',
                title: "Node.js"
            },
            {
                path: 'assets/mongodb.png',
                title: "Node.js"
            },
            {
                path: 'assets/angular.png',
                title: "Angular2"
            },
            {
                path: 'assets/openstack.png',
                title: "Open Stack"
            },
            {
                path: 'assets/linux.png',
                title: "Linux"
            },
            {
                path: 'assets/digital-ocean.png',
                title: "Digital Ocean"
            },
            {
                path: 'assets/aws.png',
                title: "AWS"
            }];
        this.certs = [{
                path: 'assets/rhce.png'
            },
            {
                path: 'assets/rhcsa.png'
            },
            {
                path: 'assets/cad.png'
            }];
    }
    ;
    return SkillComponent;
}());
SkillComponent = __decorate([
    core_1.Component({
        selector: 'my-skills',
        templateUrl: './skill.html'
    }),
    __metadata("design:paramtypes", [])
], SkillComponent);
exports.SkillComponent = SkillComponent;
//# sourceMappingURL=skill.component.js.map