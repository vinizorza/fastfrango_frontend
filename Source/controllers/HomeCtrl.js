app.controller("HomeCtrl",function($scope){
	
	
	
	var host = location.protocol +"//"+ location.host;
	
	
	
    $scope.opcoes = [		    
        {nome: "Cardápio", src: host + "Cardapio.html"},
        {nome: "Relatório", src:"Relatorio.html"},
        {nome: "Estoque", src:"Estoque.html"},
        {nome: "Cadastrar Bebida", src:"CadastraBebida.html"},
        {nome: "Pedidos", src:"/novopedido"},
        {nome: "Novo Pedido", src: host + "/#!/novopedido"},
        {nome: "Cadastrar Combo", src:"CadastraCombo.html"},
        {nome: "Cadastrar Porção", src:"CadastraPorcao.html"},
        {nome: "Alterar Produto", src:"AlteraProdutos.html"},
    ];
    
});
