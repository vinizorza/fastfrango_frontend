app.factory("pedidosAPI", function($http, config){
    var _getPedidos = function(){
         return $http.get(config.baseUrl + "/pedidos.json");
    };

    var _getPedido = function(pedidoId){
         return $http.get(config.baseUrl + "/pedidos/" + pedidoId + ".json");
    };

    var _savePedido = function(pedido){
         return $http.post(config.baseUrl + "/pedidos.json", pedido);
    };

    var _updatePedido = function(pedido, id){
         return $http.put(config.baseUrl + "/pedidos/" + id + ".json", pedido);
    };

    var _deletePedido = function(pedido){
         return $http.delete(config.baseUrl + "/pedidos/" + pedido.id + ".json");
    };

    return{
         getPedidos: _getPedidos,
         getPedido: _getPedido,
         savePedido: _savePedido,
         updatePedido: _updatePedido,
         deletePedido: _deletePedido
    };
});