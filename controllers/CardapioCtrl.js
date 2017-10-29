app.controller("CardapioCtrl",function($scope, $location){

     var mapa = {}
     var saida = {}

     $scope.cardapio = [
          {id:1, nome:"Combo 1", preco:"R$:10,00", desativado:false},
          {id:2, nome:"Combo 2", preco:"R$:15,00", desativado:true},
          {id:3, nome:"Combo 3", preco:"R$:18,00", desativado:false},
          {id:4, nome:"porcao 1", preco:"R$:10,00", desativado:false},
          {id:5, nome:"porcao 2", preco:"R$:15,00", desativado:false},
          {id:6, nome:"porcao 3", preco:"R$:18,00", desativado:false}
     ]



     var carregarItensMenu = function(){
          $scope.cardapio.forEach(function(item){
               mapa[item.id] = angular.copy(item);
          });
     }


     $scope.isItemDesativado = function(combos){
          return Object.keys(saida).length > 0;
     }

     $scope.verificaEstado = function(combo){
          if(mapa[combo.id].desativado != combo.desativado){
               saida[combo.id] = angular.copy(combo);
          }else{
               delete saida[combo.id];
          }
     }

     $scope.salvaModificacoes = function(){
          console.log(Object.values(saida));
          $location.path("/home");
     }

     carregarItensMenu();

});
