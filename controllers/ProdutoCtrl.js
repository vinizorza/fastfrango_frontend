app.controller("ProdutoCtrl",function($scope, $routeParams, $location){

     $scope.tipos = [
          {id: 1, nome:"Porção"},
          {id:2, nome:"Bebida"},
          {id:3, nome:"Outros"}
     ]

     $scope.produtos = [
          {id:'1', nome:"Frango 500g", preco:"15.50", exibir:false, descricao:"", imagem:"", tipo:$scope.tipos[0], principal:true},
          {id:'2', nome:"Coca cola 600 ml", preco:"5.00", exibir:true, descricao:"", imagem:"", tipo:$scope.tipos[1]},
          {id:'3', nome:"Batata frita", preco:"12.00", exibir:true, descricao:"", imagem:"", tipo:$scope.tipos[0], principal:false},
          {id:'4', nome:"porção 1kg", preco:"32.00", exibir:true, descricao:"", imagem:"", tipo:$scope.tipos[0], principal:true},
          {id:'5', nome:"Polenta", preco:"10.00", exibir:true, descricao:"", imagem:"", tipo:$scope.tipos[0], principal:false}
     ]

     $scope.isPrincipal = function(produto){
          if(produto.tipo.nome != "Porção"){
               delete produto['principal'];
          }
     }
     if($routeParams.porcaoId){
          console.log("entrei");
          $scope.porcoes.forEach(function(porcao){
              if(porcao.id == $routeParams.porcaoId){
                   $scope.porcao = porcao;
              }
          });
     }

     $scope.cadastraProduto = function(porcao){
          console.log($scope.produto);
          $location.path("/produtos");
     }

     $scope.deletarProduto = function(produto){
          console.log("delete /produtos/id");
          var indiceDoProduto= $scope.produtos.indexOf(produto);
          $scope.produtos.splice(indiceDoProduto, 1);
     }
});
