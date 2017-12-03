app.controller("ProdutoCriarCtrl",function($scope, $window, produtosAPI){


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
          produtosAPI.saveProduto(produto).then(function(){
               $window.location.href = "/#!/produtos";
               Materialize.toast('Produto cadastrado com sucesso!', 4000);
          });


     }

});
