var app = angular.module("fastFrangoApp", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when("/home",{
        controller:"HomeCtrl",
        templateUrl:"view/Home.html"
    });

    $routeProvider.when("/novopedido",{
        controller:"NovoPedidoCtrl",
        templateUrl:"view/NovoPedido.html"
    });

    $routeProvider.when("/cadastrarcombo",{
        controller:"CadastraComboCtrl",
        templateUrl:"view/CadastraCombo.html"
    });

    $routeProvider.otherwise({redirectTo:"/home"});

});