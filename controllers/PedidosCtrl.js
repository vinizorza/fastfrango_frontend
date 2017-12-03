app.controller("PedidosCtrl",function($scope, pedidos, pedidosAPI, utilService){

    $scope.todosPedidos = utilService.convertJsonToArray(pedidos.data);

    console.log($scope.todosPedidos[0].combos[0].nome);

    // for(var i = 0; i < $scope.todosPedidos.length; i++){
    //     if($scope.todosPedidos[i].combos == null){
    //        // console.log($scope.todosPedidos[i].combos.length);
    //     }
    //     // console.log($scope.todosPedidos[i].combos.length);
    //     // console.log($scope.todosPedidos[i].porcoes);
    //     // console.log($scope.todosPedidos[i].bebidas);
    // }

    $scope.combosFormatados = "";
    $scope.bebidasFormatados = "";
    $scope.porcoesFormatados = "";

    // $scope.todosPedidos = [
    //     {id: 1, nomeCliente:"Vinicius", local:"Rua H, 2015, Castelândia, Serra", combos: "Ventania", porcoes:"Batata", bebidas:"Coca Cola 2L", preco: 35.5, status: "pendente"},
    //     {id: 2, nomeCliente:"Mesa 08", local:"local", combos: "Hot Quente", porcoes:"Aipim", bebidas:"Suco Laranja 300ml", preco: 38.5, status: "pendente"},
    //     {id: 3, nomeCliente:"Letícia", local:"Rua R, 1080, Castelândia, Serra", combos: "Vesgueira", porcoes:"Batata", bebidas:"Coca Cola 2L", preco: 42.5, status: "fazendo"},
    //     {id: 4, nomeCliente:"Mesa 05", local:"local", combos: "Mariposa", porcoes:"Polenta", bebidas:"Coca Cola 2L", preco: 57.5, status: "fazendo"}        
    // ];

    $scope.finalizarPedido = function(pedido){
        pedido.status = "finalizado";
    }

    $scope.confirmarPedido = function(pedido){
        pedido.status = "fazendo";
    }



    
});