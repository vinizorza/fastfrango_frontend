app.controller("CombosCtrl",function($scope, $routeParams, $location){

         $scope.combos = [
              {id:1, nome:"Combo 1", preco:"15.50", qtd_porcoes: 3, exibir:false},
              {id:2, nome:"Combo 2", preco:"20.00", qtd_porcoes: 2, exibir:true},
              {id:3, nome:"Combo 3", preco:"22.00", qtd_porcoes: 4, exibir:true},
              {id:4, nome:"Combo 4", preco:"32.00", qtd_porcoes: 1, exibir:true},
              {id:5, nome:"Combo 5", preco:"18.00", qtd_porcoes: 3, exibir:true}
         ]

         if($routeParams.comboId){
              console.log("entrei");
              $scope.combos.forEach(function(combo){
                   if(combo.id == $routeParams.comboId){
                        $scope.combo = combo;
                   }
              });
         }

         $scope.cadastraCombo = function(combo){
              console.log("post /combos");
              $location.path("/combos");
         }

         $scope.deletarCombo = function(combo){
              console.log("delete /combos/id");
              var indiceDoCombo = $scope.combos.indexOf(combo);
              $scope.combos.splice(indiceDoCombo, 1);
         }
});
