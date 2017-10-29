app.controller("CardapioCtrl",function($scope, $location){

     var mapa = {};
     var saidaCombo = {};
     var saidaPorcao = {};
     var saidaBebida = {};

     $scope.combos = [
          {id:1, nome:"Combo 1", preco:"R$:10,00", complementos: 3, quantidade: 10, desativado:false},
          {id:2, nome:"Combo 2", preco:"R$:15,00", complementos: 2, quantidade: 10, desativado:true},
          {id:3, nome:"Combo 3", preco:"R$:18,00", complementos: 4, quantidade: 10, desativado:false},

     ]

     $scope.porcoes = [
          {id:4, nome:"porção 1", preco:"R$:10,00", quantidade: 10, desativado:false},
          {id:5, nome:"porção 2", preco:"R$:15,00", quantidade: 10, desativado:true},
          {id:6, nome:"porção 3", preco:"R$:18,00", quantidade: 10, desativado:false},
     ]

     $scope.bebidas = [
          {id:7, nome:"bebida 1", preco:"R$:10,00", quantidade: 10, desativado:false},
          {id:8, nome:"bebida 2", preco:"R$:15,00", quantidade: 10, desativado:true},
          {id:9, nome:"bebida 3", preco:"R$:18,00", quantidade: 10, desativado:false},
     ]


     var carregarItensMenu = function(){
          $scope.combos.forEach(function(item){
               mapa[item.nome] = angular.copy(item);
          });
          $scope.porcoes.forEach(function(item){
               mapa[item.nome] = angular.copy(item);
          });
          $scope.bebidas.forEach(function(item){
               mapa[item.nome] = angular.copy(item);
          });

     }

     $scope.isItemDesativado = function(){
          return (Object.keys(saidaCombo).length > 0) || (Object.keys(saidaBebida).length > 0) || (Object.keys(saidaPorcao).length > 0);
     }

     $scope.verificaEstadoCombo = function(item){
          if(mapa[item.nome].desativado != item.desativado){
               saidaCombo[item.nome] = angular.copy(item);
          }else{
               delete saidaCombo[item.nome];
          }
     }

     $scope.verificaEstadoBebida = function(item){
          if(mapa[item.nome].desativado != item.desativado){
               saidaBebida[item.nome] = angular.copy(item);
          }else{
               delete saidaBebida[item.nome];
          }
     }

     $scope.verificaEstadoPorcao = function(item){
          if(mapa[item.nome].desativado != item.desativado){
               saidaPorcao[item.nome] = angular.copy(item);
          }else{
               delete saidaPorcao[item.nome];
          }
     }

     $scope.salvaModificacoes = function(){
          console.log(Object.values(saidaCombo));
          console.log(Object.values(saidaBebida));
          console.log(Object.values(saidaPorcao));
          $location.path("/home");
     }

     carregarItensMenu();
});
