var app = angular.module('locdee',['ui.router','locdee.controller','locdee.directive']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('index',{
		url:'/index',
		templateUrl:'html/template/iscon.html',
		controller:'indexcontentCtrl'
	}).state('farm',{
		url:'/farm',
		templateUrl:'html/template/farm.html',
		controller:'farmCtrl'
	}).state('news',{
		url:'/news',
		templateUrl:'html/template/news.html',
		controller:'newsCtrl'
	}).state('nxhz',{
		url:'/nxhz',
		templateUrl:'html/template/nxhz.html',
		controller:'nxhzCtrl'
	}).state('joinus',{
		url:'/joinus',
		templateUrl:'html/template/joinus.html',
		controller:'joinusCtrl'
	}).state('contactus',{
		url:'/contactus',
		templateUrl:'html/template/contactus.html',
		controller:'contactusCtrl'
	})
	
	$urlRouterProvider.when('','/index');
	
})

