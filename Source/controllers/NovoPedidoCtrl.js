app.controller("NovoPedidoCtrl",function($scope){

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.observacao = "";

    $scope.combosCadastrados = [
        {id:"1", nome:"Kit Doidi"},
        {id:"2", nome:"Vem Gordura"},
        {id:"3", nome:"Ventania"},
    ];

    $scope.porcoesCadastradas = [
        {id:"1", nome:"Batata Suprema"},
        {id:"2", nome:"Aipim Doido"},
        {id:"3", nome:"Polenta Maluca"},
    ];

    $scope.adicionarCombo = function(combo){
        $scope.combos.push(angular.copy(combo));
        delete $scope.combo;
    };

    $scope.adicionarPorcao = function(porcao){
        $scope.porcoes.push(angular.copy(porcao));
        delete $scope.porcao;
    };

    $scope.excluirCombo = function(index){
        $scope.combos.splice(index, 1);
    };

    $scope.excluirPorcao = function(index){
        $scope.porcoes.splice(index, 1);
    };
    
    



});