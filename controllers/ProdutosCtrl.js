app.controller("ProdutosCtrl",function($scope, produtos, utilService,produtosAPI){

     $scope.produtos = utilService.convertJsonToArray(produtos.data);

     /*
     $scope.produtos = [
          {id:'1', nome:"Frango 500g", preco:"15.50",  desativado:false, descricao:"", imagem:"", tipo:{nome:"Porção"}, principal:true},
          {id:'2', nome:"Coca cola 600 ml", preco:"5.00",  desativado:false, descricao:"", imagem:"", tipo:{nome:"Bebida"}},
          {id:'3', nome:"Batata frita", preco:"12.00",  desativado:false, descricao:"", imagem:"", tipo:{nome:"Porção"}, principal:false},
          {id:'4', nome:"porção 1kg", preco:"32.00", desativado:true, descricao:"", imagem:"", tipo:{nome:"Porção"}, principal:true},
          {id:'5', nome:"Polenta", preco:"10.00", desativado:false, descricao:"", imagem:"", tipo:{nome:"Porção"}, principal:false}
     ]
	*/

     $scope.deletarProduto = function(produto){
		produtosAPI.deleteProduto(produto).then(function(){
               var indiceDoProduto= $scope.produtos.indexOf(produto);
               $scope.produtos.splice(indiceDoProduto, 1);
               Materialize.toast('Produto excluido com sucesso!', 4000);
          });
     }
});
