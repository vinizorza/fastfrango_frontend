app.controller("PedidosCtrl",function($scope, pedidos, pedidosAPI, utilService){

    $scope.todosPedidos = utilService.convertJsonToArray(pedidos.data);

    $scope.finalizarPedido = function(pedido){
        console.log(pedido.id);
        pedido.status = "finalizado";

        pedidosAPI.updatePedido(pedido,pedido.id).then(function(){
            $window.location.href = "/#!/pedidos";
            Materialize.toast('Pedido finalizado com sucesso!', 4000);
       });
    }

    $scope.confirmarPedido = function(pedido){
        console.log(pedido.id);
        pedido.status = "fazendo";

        pedidosAPI.updatePedido(pedido,pedido.id).then(function(){
            $window.location.href = "/#!/pedidos";
            Materialize.toast('Pedido confirmado com sucesso!', 4000);
       });
    }    
});