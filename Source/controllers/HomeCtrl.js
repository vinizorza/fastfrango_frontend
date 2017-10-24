app.controller("HomeCtrl",function($scope){
		
    var host = location.protocol +"//"+ location.host + "/fastfrango_frontend/Source";
    $scope.host = host;
    	
    $scope.opcoes = [		    
        {nome: "Cardápio", src: host + "/#!/cardapio"},
        {nome: "Relatório", src: host + "/#!/relatorio"},
        {nome: "Estoque", src: host + "/#!/estoque"},
        {nome: "Cadastrar Bebida", src: host + "/#!/cadastrarbebida"},
        {nome: "Pedidos", src: host + "/#!/pedidos"},
        {nome: "Novo Pedido", src: host + "/#!/novopedido"},
        {nome: "Cadastrar Combo", src: host + "/#!/cadastrarcombo"},
        {nome: "Cadastrar Porção", src: host + "/#!/cadastrarporcao"},
        {nome: "Alterar Produto", src: host + "/#!/alterarproduto"},
    ];
    
});
