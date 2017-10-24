app.controller("NovoPedidoCtrl",function($scope){

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.combosCadastrados = [
        {id:"1", nome:"Batata Suprema"},
        {id:"2", nome:"Aipim Doido"},
        {id:"3", nome:"Polenta Maluca"},
    ];

    $scope.adicionarCombo = function(combo){
        $scope.combos.push(angular.copy(combo));
        delete $scope.combo;
    };

    $scope.excluirCombo = function(index){
        $scope.combos.splice(index, 1);
    };
    
    



});