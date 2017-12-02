app.controller("ProdutoEditarCtrl",function($scope, utilService, $window, produto, produtosAPI, $route){

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

          produtosAPI.updateProduto(produto,$route.current.params.produtoId).then(function(){
               $window.location.href = "/#!/produtos";
               Materialize.toast('Produto cadastrado com sucesso!', 4000);
          });

     }

});
