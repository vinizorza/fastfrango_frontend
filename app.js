var app = angular.module("fastFrangoApp", ['ngRoute',"ng-file-model"]);

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
            },
            combos: function(combosAPI){
                return combosAPI.getCombos();
           }
       }
    });

    $routeProvider.when("/combos",{
        controller:"CombosCtrl",
        templateUrl:"view/combos.html",
        resolve:{
             combos: function(combosAPI){
                  return combosAPI.getCombos();
             }
        }
    });

    $routeProvider.when("/combos/novo",{
       controller:"ComboCriarCtrl",
       templateUrl:"view/Combo.html",
       resolve:{
            produtos: function(produtosAPI){
                 return produtosAPI.getProdutos();
            }
       }
    });

    $routeProvider.when("/login",{
        controller:"LoginCtrl",
        templateUrl:"view/Login.html"        
     });

    $routeProvider.when("/cadastro",{
    controller:"CadastroUsuarioCtrl",
    templateUrl:"view/CadastroUsuario.html"        
    });

    $routeProvider.when("/combos/editar/:comboId",{
       controller:"ComboEditarCtrl",
       templateUrl:"view/Combo.html",
       resolve:{
            combo: function(combosAPI, $route){
                 return combosAPI.getCombo($route.current.params.comboId);
            },
            produtos: function(produtosAPI){
                 return produtosAPI.getProdutos();
            }
       }
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
        templateUrl:"view/Pedidos.html",
        resolve:{
            pedidos: function(pedidosAPI){
                 return pedidosAPI.getPedidos();
            }
       }
    });

    $routeProvider.when("/error",{
        templateUrl:"view/error.html"
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
