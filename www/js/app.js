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
          templateUrl:"templates/search.html",
          controller:"SearchCtrl"
        }
      }
    })
    .state("app.detail",{
      url:"/home/detail/:pid",
      views:{
        'menuContent':{
          templateUrl:"templates/detail.html",
          controller:"DetailCtrl"
        }
      }
    })
    .state("app.music",{
    	url:"/music",
    	views:{
    		'menuContent':{
    			templateUrl:"templates/music.html",
    			controller:"MusicCtrl"
    		}
    	}
    })
    $urlRouterProvider.otherwise('/app/home');
});

// 首页
ionicApp.controller("HomeCtrl",function($scope){
    var vm=$scope.vm={};
    vm.loadMore=function(){
    	var len=vm.nearbyList.length;
		var item={
		      id:len,
		      name:"美年广场",
		      thumb:"img/menu-bg.jpeg",
		      rank:len,
		      tags:["罗飞","鲤鱼","sdf","test"],
		      address:"天府大道",
		      price:0,
		      unit:"元",
		      distance:Math.round(len*Math.random(100))
		    };
		vm.nearbyList.push(item);
   
	    if ( len === 99 ) {
	      	$scope.noMoreItems = true;
	    }
	    $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    vm.nearbyList=[];
})


// 详情
ionicApp.controller("DetailCtrl",function($scope,$stateParams){
  var vm=$scope.vm={};
  vm.detailData={
  	id:1,
    name:"黑龙潭渔场",
    pictures:["img/menu-bg.jpeg","img/menu-bg.jpg"],
    type:"斤塘",
    tags:["罗飞","鲤鱼","sdf","test"],
    address:"天府大道",
    price:0,
    detail:"呵呵呵呵呵,这是一个测试数据呵呵呵呵呵呵呵呵呵呵,这是一个测试数据呵呵呵呵呵呵呵呵呵呵,这是一个测试数据呵呵呵呵呵呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据呵呵呵呵呵,这是一个测试数据",
    tel:"12345345346",
    lat:"123.3",
    lng:"34.33",
  }
})

ionicApp.controller("SignDataCtrl",function($scope,$stateParams){
	var vm=$scope.vm={};
	vm.loadMore=function(){
    	var len=vm.signData.length;
		var item={
				avatar:"img/menu-bg.jpeg",
				nickname:"我是钓友",
				publishTime:1231241,
				pictures:["img/menu-bg.jpeg","img/menu-bg.jpg","img/menu-bg.jpg"],
				content:"hello world"
			};
		vm.signData.push(item);
   
	    if ( len === 15 ) {
	      	$scope.noMoreItems = true;
	    }
	    $scope.$broadcast('scroll.infiniteScrollComplete');
    };
	vm.signData=[{
		avatar:"img/menu-bg.jpeg",
		nickname:"我是钓友",
		publishTime:1231241,
		pictures:["img/menu-bg.jpeg","img/menu-bg.jpg","img/menu-bg.jpg"],
		content:"hello world"
	},{
		avatar:"img/menu-bg.jpg",
		nickname:"这里是昵称",
		publishTime:"sgdfghfdgh",
		pictures:["img/menu-bg.jpeg"],
		content:"这里的鱼好多好多的这里的鱼好多好多的这里的鱼好多好多的这里的鱼好多好多的这里的鱼好多好多的这里的鱼<script>alert(1)</script>好多好多的这里的鱼好多好多的这里的鱼好多好多的"
	}]
})

// 搜索
ionicApp.controller("SearchCtrl",function($scope,$http,$timeout){
	var vm=$scope.vm={};
	vm.loadMoreItems=function(){
		var item={
				"name":"田一龙"+vm.searchData.length,
				"type":"斤塘",
				"tags":["罗飞","鲤鱼","sdf"],
				"address":"成都",
				"distance":1234
			};
		vm.searchData.push(item);
   
	    if ( vm.searchData.length == 99 ) {
	      	$scope.noMoreItems = true;
	    }
	    $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    vm.doRefresh=function(){
    	 $timeout( function() {
	      var item={
				"name":"田一龙"+vm.searchData.length,
				"type":"斤塘",
				"tags":["罗飞","鲤鱼","sdf"],
				"address":"成都",
				"distance":1234
			};
	      vm.searchData.unshift(item);
	      $scope.$broadcast('scroll.refreshComplete');
	    
	    }, 1000);
    }
	vm.searchData=[]
})


// 听音乐
ionicApp.controller("MusicCtrl",function($scope,$timeout){
	// 歌曲列表
	$scope.MusicList=[{
		id:0,
		title:"泡沫",
		source:"music/泡沫.mp3",
		singer:"邓紫棋",
		lrc:"",
		specialPic:"music/泡沫.jpg"
	},{
		id:1,
		title:"살만찌고",
		source:"music/4minute - 살만찌고.mp3",
		singer:"4minute",
		lrc:"music/4minute - 살만찌고.lrc",
		specialPic:"music/4minute - 살만찌고.jpg"
	},{
		id:2,
		title:"느낌 아니까",
		source:"music/T-ara - 느낌 아니까.mp3",
		singer:"T-ara",
		lrc:"music/T-ara - 느낌 아니까.lrc",
		specialPic:"music/T-ara - 느낌 아니까.jpg"
	},{
		id:3,
		title:"Something",
		source:"music/Girl's Day - Something.mp3",
		singer:"Girl's Day",
		lrc:"music/Girl's Day - Something.lrc",
		specialPic:"music/Girl's Day - Something.jpg"
	},{
		id:4,
		title:"布拉格广场",
		source:"music/蔡依林 - 布拉格广场.mp3",
		singer:"蔡依林",
		lrc:"music/蔡依林 - 布拉格广场.lrc",
		specialPic:"music/蔡依林 - 布拉格广场.jpg"
	},{
		id:5,
		title:"龙卷风",
		source:"music/周杰伦 - 龙卷风.mp3",
		singer:"周杰伦",
		lrc:"music/周杰伦 - 龙卷风.lrc",
		specialPic:"music/周杰伦 - 龙卷风.jpg"
	},{
		id:6,
		title:"泡沫",
		source:"music/泡沫.mp3",
		singer:"邓紫棋",
		lrc:"",
		specialPic:"music/泡沫.jpg"
	},{
		id:7,
		title:"살만찌고",
		source:"music/4minute - 살만찌고.mp3",
		singer:"4minute",
		lrc:"music/4minute - 살만찌고.lrc",
		specialPic:"music/4minute - 살만찌고.jpg"
	},{
		id:8,
		title:"느낌 아니까",
		source:"music/T-ara - 느낌 아니까.mp3",
		singer:"T-ara",
		lrc:"music/T-ara - 느낌 아니까.lrc",
		specialPic:"music/T-ara - 느낌 아니까.jpg"
	},{
		id:9,
		title:"Something",
		source:"music/Girl's Day - Something.mp3",
		singer:"Girl's Day",
		lrc:"music/Girl's Day - Something.lrc",
		specialPic:"music/Girl's Day - Something.jpg"
	},{
		id:10,
		title:"布拉格广场",
		source:"music/蔡依林 - 布拉格广场.mp3",
		singer:"蔡依林",
		lrc:"music/蔡依林 - 布拉格广场.lrc",
		specialPic:"music/蔡依林 - 布拉格广场.jpg"
	},{
		id:11,
		title:"龙卷风",
		source:"music/周杰伦 - 龙卷风.mp3",
		singer:"周杰伦",
		lrc:"music/周杰伦 - 龙卷风.lrc",
		specialPic:"music/周杰伦 - 龙卷风.jpg"
	}]
	// 当前正在播放的歌曲
	$scope.currentSong={
		song:$scope.MusicList[parseInt(($scope.MusicList.length)*Math.random())],
		currTime:0,
		totalTime:0,
		progress:0
	};
	$scope.playing=false;
	var audio=document.getElementById("audio");
	$scope.play=function(){
		audio.play();
	}
	$scope.pause=function(){
		audio.pause();
	}
	$scope.next=function(){
		var idx=getCurrIdx();
		if (idx<0) return;
		if (idx===$scope.MusicList.length-1) {
			idx=0;
		}else{
			idx+=1;
		}
		goByIdx(idx);
	}
	$scope.prev=function(){
		var idx=getCurrIdx();
		if (idx<0) return;
		if (idx===0) {
			idx=$scope.MusicList.length-1;
		}else{
			idx-=1;
		}
		goByIdx(idx);
	}

	// 播放指定位置的音乐
	function goByIdx(idx){
		$scope.currentSong={
			song:$scope.MusicList[idx],
			currTime:0,
			totalTime:0,
			progress:0
		}
		$timeout(function(){
			$scope.play();
		},100);
	}
	// 获得当前播放的歌曲在列表中的索引
	function getCurrIdx(){
		var currSong=$scope.currentSong.song;
		var songList=$scope.MusicList;
		var len=songList.length;
		var currIdx=-1;
		for (var i = 0; i < len; i++) {
			if (currSong==songList[i]) {
				currIdx=i;
				return currIdx;
			}
		}
		return currIdx;
	}
	audio.addEventListener("play",function(){
		$scope.$apply(function() {
			$scope.playing = true;
		});
	},false);
	audio.addEventListener("pause",function(){
		$scope.$apply(function() {
			$scope.playing = false;
		});
	},false);
	audio.addEventListener("durationchange",function(e){
		$timeout(function(){
			$scope.currentSong.totalTime=audio.duration;
		},10)
	},false);
	audio.addEventListener("timeupdate",function(e){
		$scope.$apply(function() {
			$scope.currentSong.currTime=audio.currentTime;
			$scope.currentSong.progress=$scope.currentSong.currTime/$scope.currentSong.totalTime;
		})
	},false);

	$scope.loadMusic=function(idx){
		if ($scope.MusicList[idx]===$scope.currentSong.song) {
			if ($scope.playing) {
				$scope.pause();
			}else{
				$scope.play();
			}
			return;
		};
		goByIdx(idx);
	}
})
.filter('formattime', [
	function() {
		return function(input) {
			input = parseInt(input)||0;
			var min = 0;
			var sec = 0;
			if (input > 60) {
				min = parseInt(input / 60);
				sec = input - 60 * min;
				min = min >= 10 ? min : '0' + min;
				sec = sec >= 10 ? sec : '0' + sec;
			}
			else {
				min = '00';
				sec = input >= 10 ? input : '0' + input;
			}
			return min + ':' + sec;
		}
	}
])
