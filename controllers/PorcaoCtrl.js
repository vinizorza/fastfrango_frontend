app.controller("PorcaoCtrl",function($scope, $routeParams, $location){
     $scope.porcoes = [
          {id:1, nome:"porção 1", preco:"15.50", exibir:false},
          {id:2, nome:"porção 2", preco:"20.00", exibir:true},
          {id:3, nome:"porção 3", preco:"22.00", exibir:true},
          {id:4, nome:"porção 4", preco:"32.00", exibir:true},
          {id:5, nome:"porção 5", preco:"18.00", exibir:true}
     ]

     if($routeParams.porcaoId){
          console.log("entrei");
          $scope.porcoes.forEach(function(porcao){
              if(porcao.id == $routeParams.porcaoId){
                   $scope.porcao = porcao;
              }
          });
     }

     $scope.cadastraPorcao = function(porcao){
          console.log("post /porcoes");
          $location.path("/porcoes");
     }

     $scope.deletarPorcao = function(porcao){
          console.log("delete /porcoes/id");
          var indiceDaPorcao= $scope.porcoes.indexOf(porcao);
          $scope.porcoes.splice(indiceDaPorcao, 1);
     }
});
