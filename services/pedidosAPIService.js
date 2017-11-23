app.factory("pedidosAPI", function($http, config){
    var _getPedidos = function(){
         return $http.get(config.baseUrl + "/pedidos.json");
    };

    var _getPedido = function(pedidoId){
         return $http.get(config.baseUrl + "/produto/" + produtoId);
    };

    var _savePedido = function(pedido){
         return $http.post(config.baseUrl + "/pedidos.json", produto);
    };

    var _updatePedido = function(pedido){
         return $http.post(config.baseUrl + "/produtos/" + produto.id, produto);
    };

    return{
         getPedidos: _getPedidos,
         getPedidos: _getProduto,
         saveProduto: _saveProduto,
         saveProduto: _updateProduto
    };
});
