var app = angular.module("fastFrangoApp", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when("/home",{
        controller:"HomeCtrl",
        templateUrl:"view/Home.html"
    });

    $routeProvider.when("/novopedido",{
        controller:"NovoPedidoCtrl",
        templateUrl:"view/NovoPedido.html",
        resolve:{
            produtos: function(produtosAPI){
                 return produtosAPI.getProdutos();
            }
       }       
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
        controller:"ProdutosCtrl",
        templateUrl:"view/produtos.html",
        resolve:{
             produtos: function(produtosAPI){
                  return produtosAPI.getProdutos();
             }
        }
    });

    $routeProvider.when("/produtos/novo",{
       controller:"ProdutoCriarCtrl",
       templateUrl:"view/produto.html",
    });

    $routeProvider.when("/produtos/editar/:produtoId",{
       controller:"ProdutoEditarCtrl",
       templateUrl:"view/produto.html",
       resolve:{
            produto: function(produtosAPI, $route){
                 return produtosAPI.getProduto($route.current.params.produtoId);
            }
       }
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
