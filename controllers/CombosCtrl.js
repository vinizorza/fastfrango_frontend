app.controller("CombosCtrl",function($scope, combos, utilService, combosAPI){

     $scope.combos = utilService.convertJsonToArray(combos.data);



         $scope.deletarCombo = function(combo){
              combosAPI.deleteCombo(combo).then(function(){
                  var indiceDoCombo= $scope.combos.indexOf(combo);
                  $scope.combos.splice(indiceDoCombo, 1);
                  Materialize.toast('Combo excluído com sucesso!', 4000);
             });
        }
});
