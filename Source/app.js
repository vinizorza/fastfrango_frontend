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

    $routeProvider.when("/alterarproduto",{
        controller:"AltProdCtrl",
        templateUrl:"view/AlteraProdutos.html"
    });

    $routeProvider.when("/cadastrarporcao",{
        controller:"CadPorcaoCtrl",
        templateUrl:"view/CadastraPorcao.html"
    });

    $routeProvider.when("/pedidos",{
        controller:"PedidosCtrl",
        templateUrl:"view/Pedidos.html"
    });

    $routeProvider.when("/cadastrarbebida",{
        controller:"CadBebidaCtrl",
        templateUrl:"view/CadastraBebida.html"
    });

    $routeProvider.when("/estoque",{
        controller:"EstoqueCtrl",
        templateUrl:"view/Estoque.html"
    });

    $routeProvider.when("/relatorio",{
        controller:"RelatorioCtrl",
        templateUrl:"view/Relatorio.html"
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
