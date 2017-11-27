app.controller("ProdutoCriarCtrl",function($scope, $location, produtosAPI){

     //$scope.produto = produto.data;

     $scope.tipos = [
        "Porção",
        "Bebida",
        "Outros"
     ];

     $scope.isPrincipal = function(produto){
          if(produto.tipo.nome != "Porção"){
               delete produto['principal'];
          }
     }


     $scope.cadastraProduto = function(produto){
          produtosAPI.saveProduto(produto);
          $location.path("/produtos");
     }

});
