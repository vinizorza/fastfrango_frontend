app.controller("CardapioCtrl",function($scope, $location){

     $scope.combos = [
         {id:1, nome:"Combo 1", preco:"15.50", porcao_principal:{id:'1', nome:"Frango 500g", preco:"15.50",  desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true}, qtd_complementos: 3, desativado:false},
         {id:2, nome:"Combo 2", preco:"20.00", porcao_principal:{id:'4', nome:"porção 1kg", preco:"32.00", desativado:true, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true}, qtd_complementos: 2, desativado:true},
         {id:3, nome:"Combo 3", preco:"22.00", porcao_principal:{id:'4', nome:"porção 1kg", preco:"32.00", desativado:true, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true}, qtd_complementos: 4, desativado:false},
         {id:4, nome:"Combo 4", preco:"32.00", porcao_principal:{id:'1', nome:"Frango 500g", preco:"15.50", desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true}, qtd_complementos: 1, desativado:false},
         {id:5, nome:"Combo 5", preco:"18.00", porcao_principal:{id:'1', nome:"Frango 500g", preco:"15.50", desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true}, qtd_complementos: 3, desativado:false}
     ]

     $scope.produtos = [
          {id:1, nome:"Frango 500g", preco:"15.50",  desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true},
          {id:2, nome:"Coca cola 600 ml", preco:"5.00",  desativado:false, descricao:"", imagem:"", tipo:{id:2, nome:"Bebida"}},
          {id:3, nome:"Batata frita", preco:"12.00",  desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:false},
          {id:4, nome:"porção 1kg", preco:"32.00", desativado:true, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:true},
          {id:5, nome:"Polenta", preco:"10.00", desativado:false, descricao:"", imagem:"", tipo:{id: 1, nome:"Porção"}, principal:false}
     ]


     $scope.desativarElemento = function(elemento){
          if (elemento.tipo == undefined){
               console.log(elemento);
               console.log("put /combos");
          }else{
               console.log(elemento);
               console.log("put /produtos");
          }
     }
});
