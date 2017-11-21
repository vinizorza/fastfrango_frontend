app.controller("ProdutoCriarCtrl",function($scope, $location){

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
          console.log("criar");
          console.log($scope.produto);
          $location.path("/produtos");
     }

});
