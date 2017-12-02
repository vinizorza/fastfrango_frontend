app.controller("NovoPedidoCtrl",function($scope, produtos, utilService, produtosAPI){

    $scope.produtosCadastrados = utilService.convertJsonToArray(produtos.data);
    console.log($scope.produtosCadastrados);

    $scope.combos = [];
    $scope.porcoes = [];
    $scope.bebidas = [];
    $scope.precoFinal = 0;
    $scope.observacao = "";

    // Variaveis Auxiliares
    $scope.qntComplementos = [];
    $scope.ComplementosAux = [];

    $scope.setQntComplemento = function(combo){    
        combo = JSON.parse(combo);   
        $scope.qntComplementos = new Array(combo.qntComplementos);
    }

    //Retorna um array com o número de complementos do combo
    //Utilizado para gerar o laço no AngularJS (Gambiarra)
	$scope.getNumber = function(num){
		return new Array(num);
    }	

    //Converte a lista de complementos, para uma frase amigável.
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
   
    //$scope.produtosCadastrados = produtos.data;

    // $scope.produtosCadastrados = [
    //     {id:1, nome:"Kit Doidi", tipo:"combo", qntComplementos: 2, preco: 32.5},
    //     {id:2, nome:"Vem Gordura", tipo:"combo", qntComplementos: 3, preco: 40.5},
    //     {id:3, nome:"Ventania", tipo:"combo", qntComplementos: 4, preco: 25.6},
    //     {id:4, nome:"Batata Suprema", tipo:"porcao", preco: 12.5},
    //     {id:5, nome:"Aipim Doido", tipo:"porcao", preco: 10.5},
    //     {id:6, nome:"Polenta Maluca", tipo:"porcao", preco: 8.5},
    //     {id:7, nome:"Coca Cola 2L", tipo:"bebida", preco: 8.5},
    //     {id:8, nome:"Suco Laranja 300ml", tipo:"bebida", preco: 4.5},
    //     {id:9, nome:"Cerveja Brahma Lata", tipo:"bebida", preco: 6.5},
    // ];


    $scope.adicionarCombo = function(combo, qntCombo){
        $scope.selecionado = true;        
        combo = JSON.parse(combo);
        combo.quantidade = qntCombo;
        combo.complementos = $scope.ComplementosAux;
        combo.complementosFormatado = getStringComplementos(combo.complementos);
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

    $scope.salvarPedido = function(){
        // var pedido = [
        //     combos = [],
        //     porcoes = [],
        //     bebidas = [],
        //     precoFinal = [],
        //     observacao = []
        // ];

        var pedido = {
            'combos' : {},
            'porcoes' : {},
            'bebidas' : {},
            'precoFinal' : {},
            'observacao' : {}
        };

        // pedido["combos"].push($scope.combos);
        // pedido["porcoes"].push($scope.porcoes);
        // pedido["bebidas"].push($scope.bebidas);
        // pedido["precoFinal"].push($scope.precoFinal);
        // pedido["observacao"].push($scope.observacao);
        //pedido.push($scope.clienteo);
        console.log(pedido);

    };
    
    



});
