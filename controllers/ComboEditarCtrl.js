app.controller("ComboEditarCtrl",function($scope, utilService, $window, combo, produtos,  combosAPI, $route){

     $scope.produtos = utilService.convertJsonToArray(produtos.data);
     $scope.combo = combo.data;

     var indicePorcaoPrincipal = function(){
          for (var i = 0; i < $scope.produtos.length; ++i){
               if($scope.produtos[i].id === $scope.combo.porcao_principal.id){
                    return i;
               }
          }
     }

     $scope.combo.porcao_principal = $scope.produtos[indicePorcaoPrincipal()];



     $scope.cadastraCombo = function(combo){
          combosAPI.updateCombo(combo,$route.current.params.comboId).then(function(){
               $window.location.href = "/#!/combos";
               Materialize.toast('Combo editado com sucesso!', 4000);
          });

     }

});
