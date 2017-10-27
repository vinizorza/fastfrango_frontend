app.controller("NovoPedidoCtrl",function($scope){

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.bebidas = [];
    $scope.observacao = "";

    // Variaveis Auxiliares
    $scope.qntComplementos = [];
    $scope.ComplementosAux = [];

    $scope.setQntComplemento = function(nome){       
       for(var i = 0; i < $scope.combosCadastrados.length; i++){
            if(nome == $scope.combosCadastrados[i].nome){
                $scope.qntComplementos = new Array($scope.combosCadastrados[i].qntComplementos);
            }
        }
    }

	$scope.getNumber = function(num){
		return new Array(num);
    }	
    
    $scope.complementos = [
        {id:1, nome:"Batat Frita"},
        {id:2, nome:"Aipim Frito"},
        {id:3, nome:"Polenta Frita"},
    ];

    $scope.combosCadastrados = [
        {id:1, nome:"Kit Doidi", qntComplementos: 2},
        {id:2, nome:"Vem Gordura", qntComplementos: 3},
        {id:3, nome:"Ventania", qntComplementos: 4},
    ];

    $scope.porcoesCadastradas = [
        {id:1, nome:"Batata Suprema"},
        {id:2, nome:"Aipim Doido"},
        {id:3, nome:"Polenta Maluca"},
    ];

    $scope.bebidasCadastradas = [
        {id:1, nome:"Coca Cola 2L"},
        {id:2, nome:"Suco Laranja 300ml"},
        {id:3, nome:"Cerveja Brahma Lata"},
    ];

    $scope.adicionarCombo = function(combo){
        combo.complementos = $scope.ComplementosAux;
        $scope.combos.push(angular.copy(combo));
        delete $scope.combo;
    };

    $scope.adicionarPorcao = function(porcao){
        $scope.porcoes.push(angular.copy(porcao));
        delete $scope.porcao;
        delete $scope.ComplementosAux;
    };

    $scope.adicionarBebida = function(bebida){
        $scope.bebidas.push(angular.copy(bebida));
        delete $scope.bebida;
    };

    $scope.excluirCombo = function(index){
        $scope.combos.splice(index, 1);
    };

    $scope.excluirPorcao = function(index){
        $scope.porcoes.splice(index, 1);
    };

    $scope.excluirBebida = function(index){
        $scope.bebidas.splice(index, 1);
    };
    
    



});
