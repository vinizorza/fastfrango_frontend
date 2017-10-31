app.controller("BebidasCtrl",function($scope, $routeParams, $location){

     $scope.bebidas = [
          {id:1, nome:"Bebida 1", quantidade: 5, preco:"5.50", exibir:false},
          {id:2, nome:"Bebida 2",  quantidade: 5, preco:"10.00",  exibir:true},
          {id:3, nome:"Bebida 3", quantidade: 5, preco:"2.00", exibir:true},
          {id:4, nome:"Bebida 4",  quantidade: 5, preco:"4.00",  exibir:true},
          {id:5, nome:"Bebida 5",  quantidade: 5, preco:"7.00",  exibir:true}
     ]

     if($routeParams.bebidaId){
          console.log("entrei");
          $scope.bebidas.forEach(function(bebida){
               if(bebida.id == $routeParams.bebidaId){
                    $scope.bebida = bebida;
               }
          });
     }

     $scope.cadastraBebida = function(bebida){
          console.log("post /bebida");
          $location.path("/bebidas");
     }

     $scope.deletarBebida = function(bebida){
          console.log("delete /bebida/id");
          var indiceDaBebida = $scope.bebidas.indexOf(bebida);
          $scope.bebidas.splice(indiceDaBebida, 1);
     }
});
