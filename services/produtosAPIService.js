app.factory("produtosAPI", function($http, config){
     var _getProdutos = function(){
          return $http.get(config.baseUrl + "/produtos.json");
     };

     var _getProduto = function(produtoId){
          return $http.get(config.baseUrl + "/produtos/" + produtoId + ".json");
     };

     var _saveProduto = function(produto){
          return $http.post(config.baseUrl + "/produtos.json", produto);
     };

     var _updateProduto = function(produto, id){
          return $http.put(config.baseUrl + "/produtos/" + id + ".json", produto);
     };

     var _deleteProduto = function(produto){
          return $http.delete(config.baseUrl + "/produtos/" + produto.id + ".json");
     };

     return{
          getProdutos: _getProdutos,
          getProduto: _getProduto,
          saveProduto: _saveProduto,
          updateProduto: _updateProduto,
          deleteProduto: _deleteProduto
     };
});
