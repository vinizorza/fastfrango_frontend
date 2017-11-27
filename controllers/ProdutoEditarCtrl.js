app.controller("ProdutoEditarCtrl",function($scope, utilService, $location, produto, produtosAPI, $route){

     $scope.tipos = [
        "Porção",
        "Bebida",
        "Outros"
     ];

     $scope.produto = produto.data;

     $scope.isPrincipal = function(produto){
          if(produto.tipo.nome != "Porção"){
               delete produto['principal'];
          }
     }


     $scope.cadastraProduto = function(produto){

          produtosAPI.updateProduto(produto,$route.current.params.produtoId);
          $location.path("editar/produtos");
     }

});
