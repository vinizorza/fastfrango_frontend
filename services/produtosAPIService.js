app.factory("produtosAPI", function($http, config){
     var _getProdutos = function(){
          return $http.get(config.baseUrl + "/#!/produtos");
     };

     var _getProduto = function(produtoId){
          return $http.get(config.baseUrl + "/#!/produto/" + produtoId);
     };

     var _saveProduto = function(produto){
          return $http.post(config.baseUrl + "/produtos", produto);
     };

     var _updateProduto = function(produto){
          return $http.post(config.baseUrl + "/produtos/" + produto.id, produto);
     };

     return{
          getProdutos: _getProdutos,
          getProduto: _getProduto,
          saveProduto: _saveProduto,
          saveProduto: _updateProduto
     };
});
