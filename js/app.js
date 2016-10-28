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




		//    D E F A U L T
		$('.full_stacked').hide();
		$('#jumbo_title').hide();
		$('#stack_img').hide();
		$('.and_then').hide();
		$('#my_name').hide();

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
												$scope.credentials_list.push("Dedicated Linux user for the past 10+ years");
												$scope.credentials_list.push("Years of experience as Developer and Consultant");
												$scope.credentials_list.push("Certification Networking, CISCO at TEC/EUX");
											}, 700);
										}, 800);
									}, 700);
								}, 300);

							});
							break;
// IF PAGE IS THE THIRD
						case 3:
							$(document).ready(function() {
								$scope.credentials_list = [];
								$('#pie1').hide();
								$('#pie2').hide();
								$('#pie3').hide();
								$('#project1_desc').hide();
								$('#imgs1').hide();
								$timeout(function(){
									$('#project1_desc').show();
									$('#project1_desc').addClass('animated slideInDown');
									$('#imgs1').show();
									$('#imgs1').addClass('animated slideInDown');
									$timeout(function(){
										$('#pie1').show();
										$('#pie1').addClass('animated slideInUp');
										$timeout(function(){
											pie1();
											$('#pie2').show();
											$('#pie2').addClass('animated slideInUp');
											$timeout(function(){
												pie2();
												$('#pie3').show();
												$('#pie3').addClass('animated slideInUp');
												$timeout(function(){
													pie3();
												}, 400);
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
				}, 1200);
			}, 700);
		}, 100);


		//
		//
		// $("#img_details").modal('show').css({
		//     'margin-top': function () { //vertical centering
		//         return -($(this).height() / 2);
		//     },
		//     'margin-left': function () { //Horizontal centering
		//         return -($(this).width() / 2);
		//     }
		// });


$scope.selected_image = "";

$scope.img_choice = function(img){
	console.log($('#img_click').attr('src'));
	$scope.selected_image = String($('#img_click').attr('src'));
};



// SETTING UP THE PIE DIAGRAMS

var frontendList1 = [
	{ name: 'Angular.js', y: 56.33 }, { name: 'CSS3', y: 24.03 }, { name: 'HTML5', y: 25 },
 { name: 'Underscore.js', y: 4.77 }, { name: 'Grunt', y: 10 }, { name: 'Ui-Router', y: 10 },
];

var backendList1 = [
	{ name: 'Node.js', y: 58 }, { name: 'Express.js', y: 20 }, { name: 'terminal-kit', y: 5 },
 { name: 'Passport.js', y: 20 }, { name: 'Nginx', y: 12 }, { name: 'bcrypt', y: 12 }, { name: 'MySQL', y: 14 },
 { name: 'MongoDB', y: 5 }
];

var systemList1 = [
	{ name: 'Linux', y: 51 }, { name: 'SMTP Mail Server', y: 12 }, { name: 'Cron', y: 14 }, { name: 'Bash', y: 8 },
	{ name: 'Git', y: 12 }, { name: 'SSH', y: 9 }, { name: 'Phantom.js', y: 18 }
];



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

var pie3 = function(){

	$(function () {
    var myChart = Highcharts.chart('pie3', {
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
		            text: "SYSTEM"
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
            data: systemList1,
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
