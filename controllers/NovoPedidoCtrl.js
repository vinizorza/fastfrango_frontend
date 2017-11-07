app.controller("NovoPedidoCtrl",function($scope){

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.bebidas = [];
    $scope.precoFinal = 0;
    $scope.observacao = "";

    // Variaveis Auxiliares
    $scope.qntComplementos = [];
    $scope.ComplementosAux = [];
    $scope.complementos = "";

    $scope.setQntComplemento = function(combo){    
        combo = JSON.parse(combo);   
        $scope.qntComplementos = new Array(combo.qntComplementos);
    }

	$scope.getNumber = function(num){
		return new Array(num);
    }	

    getStringComplementos = function(complementos){
        console.log(complementos);
        var stringComplementos = "";
        for(var i = 0; i < complementos.length; i++){
            if(i == (complementos.length - 1)){
                stringComplementos = stringComplementos + JSON.parse(complementos[i]).nome;
            }else{
                stringComplementos = stringComplementos + JSON.parse(complementos[i]).nome + ", ";
            }
            
        }
        return stringComplementos;
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

    $scope.adicionarCombo = function(combo, qntCombo){        
        combo = JSON.parse(combo);
        combo.quantidade = qntCombo;
        combo.complementos = $scope.ComplementosAux;
        $scope.complementos = getStringComplementos(combo.complementos);
        $scope.combos.push(angular.copy(combo));
        $scope.precoFinal += combo.quantidade * combo.preco;
        delete $scope.combo;
        delete $scope.qntCombo;
        $scope.ComplementosAux = [];
        $scope.qntComplementos = [];
    };

    $scope.adicionarPorcao = function(porcao, qntPorcao){
        porcao = JSON.parse(porcao);
        porcao.quantidade = qntPorcao;
        $scope.porcoes.push(angular.copy(porcao));
        $scope.precoFinal += porcao.quantidade * porcao.preco;
        delete $scope.porcao;
        delete $scope.qntPorcao;
    };

    $scope.adicionarBebida = function(bebida, qntBebida){
        bebida = JSON.parse(bebida);
        bebida.quantidade = qntBebida;        
        $scope.bebidas.push(angular.copy(bebida));
        $scope.precoFinal += bebida.quantidade * bebida.preco;
        delete $scope.bebida;
        delete $scope.qntBebida;
    };

    $scope.excluirCombo = function(index){
        $scope.precoFinal -= $scope.combos[index].quantidade * $scope.combos[index].preco;
        $scope.combos.splice(index, 1);
    };

    $scope.excluirPorcao = function(index){
        $scope.precoFinal -= $scope.porcoes[index].quantidade * $scope.porcoes[index].preco;
        $scope.porcoes.splice(index, 1);
    };

    $scope.excluirBebida = function(index){
        $scope.precoFinal -= $scope.bebidas[index].quantidade * $scope.bebidas[index].preco;
        $scope.bebidas.splice(index, 1);
    };
    
    



});
