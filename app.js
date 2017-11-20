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

    $routeProvider.when("/produtos",{
        controller:"ProdutoCtrl",
        templateUrl:"view/produtos.html"
    });

    $routeProvider.when("/produtos/novo",{
       controller:"ProdutoCtrl",
       templateUrl:"view/produto.html"
    });

    $routeProvider.when("/porcoes/editar/:porcaoId",{
       controller:"PorcaoCtrl",
       templateUrl:"view/Porcao.html"
    });

    $routeProvider.when("/pedidos",{
        controller:"PedidosCtrl",
        templateUrl:"view/Pedidos.html"
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
