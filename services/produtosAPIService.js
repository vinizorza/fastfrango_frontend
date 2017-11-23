app.factory("produtosAPI", function($http, config){
     var _getProdutos = function(){
          return $http.get(config.baseUrl + "/produtos.json");
     };

     var _getProduto = function(produtoId){
          return $http.get(config.baseUrl + "/#!/produto/" + produtoId);
     };

     var _saveProduto = function(produto){
		 alert("TESTE");
          return $http.post(config.baseUrl + "/produtos.json", produto);
     };

     var _updateProduto = function(produto){
          return $http.put(config.baseUrl + "/produtos/" + produto.id, produto);
     };

     return{
          getProdutos: _getProdutos,
          getProduto: _getProduto,
          saveProduto: _saveProduto,
          updateProduto: _updateProduto
     };
});
