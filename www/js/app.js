"use strict";

var ionicApp=angular.module("ionicApp",['ionic']);

ionicApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/left-menu.html"
    })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller:'HomeCtrl'
        }
      }
    })
    .state("app.search",{
      url:"/search",
      views:{
        'menuContent':{
          templateUrl:"templates/search.html"
        }
      }
    })
    .state("app.detail",{
      url:"/detail/:pid",
      views:{
        'menuContent':{
          templateUrl:"templates/detail.html",
          controller:"DetailCtrl"
        }
      }
    })
    $urlRouterProvider.otherwise('/app/home');
});

ionicApp.controller("HomeCtrl",function($scope){
    var vm=$scope.vm={};
    vm.nearbyList=[{
      id:1,
      name:"美年广场",
      thumb:"img/menu-bg.jpeg",
      rank:12,
      tags:["罗飞","鲤鱼","sdf","test"],
      address:"天府大道",
      price:0,
      unit:"元"
    }];
})

ionicApp.controller("DetailCtrl",function($scope,$stateParams){
  var vm=$scope.vm={};
  vm.detailData={
    name:"黑龙潭渔场",
    pictures:["img/menu-bg.jpeg","img/menu-bg.jpg"],
    type:"斤塘",
    tags:["罗飞","鲤鱼","sdf","test"],
    address:"天府大道",
    price:0,
    detail:"呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据",
    tel:"12345345346",
    lat:"123.3",
    lng:"34.33",
  }
})
