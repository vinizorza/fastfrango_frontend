app.controller("ProdutoEditarCtrl",function($scope, $routeParams, $location, produto){

     //$scope.produto = produto.data;

     $scope.tipos = [
          {nome:"Porção"},
          {nome:"Bebida"},
          {nome:"Outros"}
     ]

     $scope.produto = {id:'1', nome:"Frango 500g", preco:"15.50",  desativado:false, descricao:"", imagem:"", tipo:{nome:"Porção"}, principal:true};

     $scope.isPrincipal = function(produto){
          if(produto.tipo.nome != "Porção"){
               delete produto['principal'];
          }
     }


     $scope.cadastraProduto = function(produto){
          console.log("editar");
          console.log($scope.produto);
          $location.path("editar/produtos");
     }

});
