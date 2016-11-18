var APP = angular.module("APP", ['fullPage.js', 'ngAnimate']).controller("MainControl", ['$scope', '$timeout', '$animateCss', function($scope, $timeout, $animateCss){
	angular.module('APP').directive('animateOnLoad',['$animateCss', function($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
          'event': 'enter',
           structural: true
      }).start();
    }
  };
}]);

$scope.images = [
    {
        url : 'img/project1/1.png',
    },
    {
        url : 'img/project1/2.png'
    },
    {
        url : 'img/project1/3.png'
    }
];



	$scope.credentials_list = [];


	$('#github_link').click(function(event) {
		window.open('https://github.com/null4bl3','_blank');
	});



		//    D E F A U L T
		$('.full_stacked').hide();
		$('#jumbo_title').hide();
		$('#stack_img').hide();
		$('.and_then').hide();
		$('#my_name').hide();
		$('#arrow_down').hide();

		$(document).ready(function() {
			$('#fullpage').fullpage({
				onLeave: function(commingFrom, nextIndex, direction){
					console.log("COMING FROM: ", commingFrom);
					console.log("NEXT INDEX: ", nextIndex);
					console.log("DIRECTION: ", direction);

					/////////////////////

					switch (nextIndex) {
// IF PAGE IS THE FIRST
						case 1:
							$(document).ready(function() {
								$('.full_stacked').hide();
								$('#jumbo_title').hide();
								$('#stack_img').hide();
								$('.and_then').hide();
								$('#my_name').hide();
								$timeout(function(){
									$('.full_stacked').show();
									$('.full_stacked').addClass('animated fadeIn');
									$('.full_stacked').addClass('animated slideInDown');
									$timeout(function(){
										$('#my_name').show();
										$('#my_name').addClass('animated fadeInDown');
										$('#stack_img').show();
										$('#stack_img').addClass('animated fadeInUp');
										$('#jumbo_title').show();
										$('#jumbo_title').addClass('animated slideInDown 0.1s');
										$timeout(function(){
											$('.and_then').show();
											$('.and_then').addClass('animated tada');
											$timeout(function(){
												$('#arrow_down').show();
												$('#arrow_down').addClass('animated flash');
											}, 600);
										}, 1200);
									}, 700);
								}, 300);
							});
							break;
// IF PAGE IS THE SECOND
						case 2:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#infobox').hide();
								$('.cogs_wrapper').hide();
								$('#cogs').hide();
								$('#deux_title').hide();
								$('#achievements').hide();
								$timeout(function(){
									$('#infobox').show();
									$('#infobox').addClass('animated slideInDown');
									$timeout(function(){
										$('.cogs_wrapper').show();
										$('.cogs_wrapper').addClass('animated fadeInDown');
										$('#cogs').show();
										$timeout(function(){
											$('#deux_title').show();
											$('#deux_title').addClass('animated fadeInUp');
											$timeout(function(){
												$('#achievements').show();
												$scope.credentials_list.push("Bachelor's Degree in Computer Science  ( B.A. )");
												$scope.credentials_list.push("Years of experience as Developer and Consultant");
												$scope.credentials_list.push("Dedicated Linux user for the past 10+ years");
												$scope.credentials_list.push("Certification Networking, CISCO at TEC/EUX");
											}, 700);
										}, 600);
									}, 400);
								}, 300);

							});
							break;
// IF PAGE IS THE THIRD
						case 3:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1').hide();
								$('#pie2').hide();
								$('#project1_desc').hide();
								$('#imgs1').hide();
								$timeout(function(){
									$('#project1_desc').show();
									$('#project1_desc').addClass('animated slideInLeft');
									$timeout(function(){
										$('#pie1').show();
										$('#pie1').addClass('animated slideInRight');
										$timeout(function(){
											$('#imgs1').show();
											$('#imgs1').addClass('animated slideInLeft');
											pie1();
											$('#pie2').show();
											$('#pie2').addClass('animated slideInRight');
											$timeout(function(){
												pie2();
											}, 400);
										}, 400);
									}, 700);
								}, 500);

							});
							break;
// IF PAGE IS THE FOURTH
						case 4:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1_1').hide();
								$('#pie2_2').hide();
								$('#project2_desc').hide();
								$('#imgs2').hide();
								$timeout(function(){
									$('#project2_desc').show();
									$('#project2_desc').addClass('animated slideInLeft');
									$timeout(function(){
										$('#imgs2').show();
										$('#imgs2').addClass('animated slideInLeft');
										$('#pie1_1').show();
										$('#pie1_1').addClass('animated slideInRight');
										$timeout(function(){
											pie1_1();
											$('#pie2_2').show();
											$('#pie2_2').addClass('animated slideInRight');
											$timeout(function(){
												pie2_2();
											}, 400);
										}, 400);
									}, 700);
								}, 500);

							});
							break;
// IF PAGE IS THE FIFTH
						case 5:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1_1_1').hide();
								$('#pie2_2_2').hide();
								$('#project3_desc').hide();
								$('#imgs3').hide();
								$timeout(function(){
									$('#project3_desc').show();
									$('#project3_desc').addClass('animated slideInLeft');
									$timeout(function(){
										$('#imgs3').show();
										$('#imgs3').addClass('animated slideInLeft');
										$('#pie1_1_1').show();
										$('#pie1_1_1').addClass('animated slideInRight');
										$timeout(function(){
											pie1_1_1();
											$('#pie2_2_2').show();
											$('#pie2_2_2').addClass('animated slideInRight');
											$timeout(function(){
												pie2_2_2();

											}, 400);
										}, 400);
									}, 700);
								}, 500);

							});
							break;
// IF PAGE IS THE SIXTH
						case 6:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1_1_1_1').hide();
								$('#pie2_2_2_2').hide();
								$('#project4_desc').hide();
								$('#imgs4').hide();
								$timeout(function(){
									$('#project4_desc').show();
									$('#project4_desc').addClass('animated slideInLeft');
									$timeout(function(){
										$('#imgs4').show();
										$('#imgs4').addClass('animated slideInLeft');
										$('#pie1_1_1_1').show();
										$('#pie1_1_1_1').addClass('animated slideInRight');
										$timeout(function(){
											pie1_1_1_1();
											$('#pie2_2_2_2').show();
											$('#pie2_2_2_2').addClass('animated slideInRight');
											$timeout(function(){
												pie2_2_2_2();
											}, 400);
										}, 400);
									}, 700);
								}, 500);

							});
							break;
// IF PAGE IS THE SEVEN
						case 7:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1_1_1_1_1').hide();
								$('#pie2_2_2_2_2').hide();
								$('#project5_desc').hide();
								$('#imgs5').hide();
								$timeout(function(){
									$('#project5_desc').show();
									$('#project5_desc').addClass('animated slideInLeft');
									$timeout(function(){
										$('#imgs5').show();
										$('#imgs5').addClass('animated slideInLeft');
										$('#pie1_1_1_1_1').show();
										$('#pie1_1_1_1_1').addClass('animated slideInRight');
										$timeout(function(){
											pie1_1_1_1_1();
											$('#pie2_2_2_2_2').show();
											$('#pie2_2_2_2_2').addClass('animated slideInRight');
											$timeout(function(){
												pie2_2_2_2_2();
											}, 400);
										}, 400);
									}, 700);
								}, 500);

							});
							break;




					}
			}
			});
		});





		$timeout(function(){
			$('.full_stacked').show();
			$('.full_stacked').addClass('animated slideInDown');
			$timeout(function(){
				$('#my_name').show();
				$('#my_name').addClass('animated fadeInDown');
				$('#stack_img').show();
				$('#stack_img').addClass('animated fadeInUp');
				$('#jumbo_title').show();
				$('#jumbo_title').addClass('animated slideInDown 0.1s');
				$timeout(function(){
					$('.and_then').show();
					$('.and_then').addClass('animated tada');
					$timeout(function(){
						$('#arrow_down').show();
						$('#arrow_down').addClass('animated fadeIn');
						$timeout(function () {
							$('#arrow_down').addClass('animated flash');
						}, 1000);
					}, 600);
				}, 1200);
			}, 700);
		}, 100);


$scope.selected_image = "";

$scope.img_choice = function(img){
	console.log($('#img_click').attr('src'));
	$scope.selected_image = String($('#img_click').attr('src'));
};



// SETTING UP THE PIE DIAGRAMS


// ISAKSEN DESING


var frontendList1 = [
 { name: 'Angular.js', y: 56.33 }, { name: 'CSS3', y: 24.03 }, { name: 'HTML5', y: 25 },
 { name: 'Underscore.js', y: 4.77 }, { name: 'Grunt', y: 10 }, { name: 'Jquery', y: 12 }, { name: 'Ui-Router', y: 10 },
 { name: 'pdf.js', y: 10 }
];

var backendList1 = [
 { name: 'Node.js', y: 58 }, { name: 'Mongoose.js', y: 5 }, { name: 'node-cron', y: 5 }, { name: 'Multer.js', y: 6 },
 { name: 'Express.js', y: 20 }, { name: 'terminal-kit', y: 5 }, { name: 'SMTP Mail Server', y: 12 },
 { name: 'Passport.js', y: 20 }, { name: 'Nginx', y: 12 }, { name: 'bcrypt', y: 12 }, { name: 'MySQL', y: 14 },
 { name: 'MongoDB', y: 5 }, { name: 'Cron', y: 14 }, { name: 'Bash', y: 8 },
 { name: 'Git', y: 12 }, { name: 'SSH', y: 9 }, { name: 'Phantom.js', y: 18 }
];



// GAFFL.ES

var frontendList2 = [
	{ name: 'html2canvas', y: 6 }, { name: 'ui-bootstrap', y: 19 }, { name: 'Angular.js', y: 56.33 },
 { name: 'Underscore.js', y: 6 }, { name: 'Grunt', y: 10 }, { name: 'highcharts', y: 8 },
 { name: 'animate.css', y: 12 }, { name: 'jquery', y: 17 }, { name: 'Ui-Router', y: 7 },
];

var backendList2 = [
	{ name: 'Node.js', y: 58 }, { name: 'Express.js', y: 20 }, { name: 'Forever.js', y: 5 },
  { name: 'Nginx', y: 12 }, { name: 'Python 2.7', y: 12 }, { name: 'MySQL', y: 14 }, { name: 'Passport.js', y: 20 },
 { name: 'MongoDB', y: 5 }, { name: 'Mongoose.js', y: 20 }, { name: 'Cron', y: 14 }, { name: 'Bash', y: 8 },
 { name: 'Git', y: 12 }, { name: 'SSH', y: 9 }
];



// GLOBAL COMMENTS

var frontendList3 = [
 { name: 'Bootstrap', y: 19 }, { name: 'Angular.js', y: 56.33 },
 { name: 'Socket.io', y: 6 }, { name: 'Grunt', y: 10 }, { name: 'bluebird', y: 8 },
 { name: 'angular-resource', y: 12 }
];

var backendList3 = [
	{ name: 'Socket io', y: 32 }, { name: 'sha3', y: 12 }, { name: 'express-session', y: 14 }, { name: 'Passport.js', y: 20 },
	{ name: 'MongoDB', y: 5 }, { name: 'Mongoose.js', y: 20 },
	{ name: 'Node.js', y: 58 }, { name: 'Express.js', y: 20 }, { name: 'Forever.js', y: 5 },
	{ name: 'Cron', y: 14 }, { name: 'Git', y: 12 }, { name: 'SSH', y: 9 }
];




// ITERATOR

var frontendList4 = [
 { name: 'Bootstrap', y: 19 }, { name: 'Angular.js', y: 56.33 },
 { name: 'Electron.js', y: 60 }, { name: '$q', y: 8 }, { name: 'Animate.css', y: 5 }
];

var backendList4 = [
	{ name: 'MySQL', y: 47 }, { name: 'Underscore.js', y: 24 },
	{ name: 'Node.js', y: 68 }
];




// ITERATOR

var frontendList5 = [
 { name: 'Bootstrap', y: 19 }, { name: 'Angular.js', y: 56.33 }, { name: 'Materialize-css', y: 5 }, { name: 'Grunt.js', y: 15 },
 { name: 'JQuery', y: 12 }, { name: 'Sails.js', y: 60 }, { name: 'infinite-scroll.js', y: 8 }, { name: 'Animate.css', y: 10 },
];

var backendList5 = [
	{ name: 'MySQL', y: 47 }, { name: 'Underscore.js', y: 24 },
	{ name: 'Node.js', y: 68 },{ name: 'Sails.js', y: 5 }, { name: 'bcrypt', y: 5 },
	{ name: 'Machinepack', y: 18 }, { name: 'connect-redis', y: 5 },
];





// ISAKSEN DESIGN

var pie1 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie1', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "FRONTEND",
								backgroundColor: '#404040'
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: frontendList1,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
       },
	  	]
  	});
	});
};

var pie2 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie2', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "BACKEND"
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: backendList1,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
      }
		]
	});
 });
};



// GAFFL.ES


var pie1_1 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie1_1', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "FRONTEND",
								backgroundColor: '#404040'
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: frontendList2,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
       },
	  	]
  	});
	});
};

var pie2_2 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie2_2', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "BACKEND"
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: backendList2,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
      }
		]
	});
 });
};

// GLOBAL COMMENTS


var pie1_1_1 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie1_1_1', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "FRONTEND",
								backgroundColor: '#404040'
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: frontendList3,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
       },
	  	]
  	});
	});
};

var pie2_2_2 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie2_2_2', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "BACKEND"
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: backendList3,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
      }
		]
	});
 });
};




// ITERATOR


var pie1_1_1_1 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie1_1_1_1', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "FRONTEND",
								backgroundColor: '#404040'
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: frontendList4,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
       },
	  	]
  	});
	});
};

var pie2_2_2_2 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie2_2_2_2', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "BACKEND"
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: backendList4,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
      }
		]
	});
 });
};




// BIT BOT


var pie1_1_1_1_1 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie1_1_1_1_1', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "FRONTEND",
								backgroundColor: '#404040'
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: frontendList5,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
       },
	  	]
  	});
	});
};

var pie2_2_2_2_2 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie2_2_2_2_2', {
        chart: {
						backgroundColor: 'rgba(255, 255, 255, 0)',
            type: 'pie',
						style: {
            fontFamily: 'Monospace',
        }
        },
				plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
		        title: {
		            text: "BACKEND"
		        },
						tooltip: {
				    backgroundColor: '#404040',
				    borderColor: 'black',
				    borderRadius: 5,
				    borderWidth: 1
				},
        yAxis: {
            title: {
                text: 'USAGE'
            }
        },
				series: [{
            name: 'Usage',
            data: backendList5,
						size: '80%',
            innerSize: '60%',
						dataLabels: {
						formatter: function () {
								return this.y > 2 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: 40
				}
      }
		]
	});
 });
};




}]);
