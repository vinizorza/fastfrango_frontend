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

    $routeProvider.when("/combos",{
        controller:"CombosCtrl",
        templateUrl:"view/combos.html"
    });

    $routeProvider.when("/combos/novo",{
       controller:"CombosCtrl",
       templateUrl:"view/Combo.html"
    });

    $routeProvider.when("/combos/editar/:comboId",{
       controller:"CombosCtrl",
       templateUrl:"view/Combo.html"
    });

    $routeProvider.when("/porcoes",{
        controller:"PorcaoCtrl",
        templateUrl:"view/porcoes.html"
    });

    $routeProvider.when("/porcoes/nova",{
       controller:"PorcaoCtrl",
       templateUrl:"view/Porcao.html"
    });

    $routeProvider.when("/porcoes/editar/:porcaoId",{
       controller:"PorcaoCtrl",
       templateUrl:"view/Porcao.html"
    });

    $routeProvider.when("/pedidos",{
        controller:"PedidosCtrl",
        templateUrl:"view/Pedidos.html"
    });

    $routeProvider.when("/bebidas",{
        controller:"BebidasCtrl",
        templateUrl:"view/bebidas.html"
    });

    $routeProvider.when("/bebidas/nova",{
       controller:"BebidasCtrl",
       templateUrl:"view/Bebida.html"
    });

    $routeProvider.when("/bebidas/editar/:bebidaId",{
       controller:"BebidasCtrl",
       templateUrl:"view/Bebida.html"
    });


    $routeProvider.when("/cardapio",{
        controller:"CardapioCtrl",
        templateUrl:"view/Cardapio.html"
    });

    $routeProvider.otherwise({redirectTo:"/home"});

});

/*
app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(http);
}]);
*/
