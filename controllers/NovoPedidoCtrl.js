app.controller("NovoPedidoCtrl",function($scope){

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.bebidas = [];
    $scope.precoFinal = 0;
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
    

    $scope.combosCadastrados = [
        {id:1, nome:"Kit Doidi", qntComplementos: 2, preco: 32.5},
        {id:2, nome:"Vem Gordura", qntComplementos: 3, preco: 40.5},
        {id:3, nome:"Ventania", qntComplementos: 4, preco: 25.6},
    ];

    $scope.porcoesCadastradas = [
        {id:1, nome:"Batata Suprema", preco: 12.5},
        {id:2, nome:"Aipim Doido", preco: 10.5},
        {id:3, nome:"Polenta Maluca", preco: 8.5},
    ];

    $scope.bebidasCadastradas = [
        {nome:"Coca Cola 2L", preco: 8.5},
        {nome:"Suco Laranja 300ml", preco: 4.5},
        {nome:"Cerveja Brahma Lata", preco: 6.5},
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

    $scope.adicionarBebida = function(bebida, qntBebida){
        bebida = JSON.parse(bebida);
        bebida.quantidade = qntBebida;        
        $scope.bebidas.push(angular.copy(bebida));
        console.log($scope.bebidas);  
        $scope.precoFinal += bebida.quantidade * bebida.preco;
        delete $scope.bebida;
        delete $scope.qntBebida;
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
