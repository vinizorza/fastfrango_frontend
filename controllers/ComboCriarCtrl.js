app.controller("ComboCriarCtrl",function($scope, $window, combosAPI, produtos, utilService){

     $scope.produtos = utilService.convertJsonToArray(produtos.data);

     $scope.tipos = [
        "Porção",
        "Bebida",
        "Outros"
     ];

     $scope.cadastraCombo = function(combo){
          combosAPI.saveCombo(combo).then(function(){
               $window.location.href = "/#!/combos";
               Materialize.toast('Combo cadastrado com sucesso!', 4000);
          });


     }

});
