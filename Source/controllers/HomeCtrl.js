app.controller("HomeCtrl",function($scope){
    $scope.opcoes = [
        {nome: "Cardápio", src:"Cardapio.html"},
        {nome: "Relatório", src:"Relatorio.html"},
        {nome: "Estoque", src:"Estoque.html"},
        {nome: "Cadastrar Bebida", src:"CadastraBebida.html"},
        {nome: "Pedidos", src:"/fastfrango_frontend/Source/#!/novopedido"},
        {nome: "Novo Pedido", src:"./fastfrango_frontend/Source/#!/novopedido"},
        {nome: "Cadastrar Combo", src:"CadastraCombo.html"},
        {nome: "Cadastrar Porção", src:"CadastraPorcao.html"},
        {nome: "Alterar Produto", src:"AlteraProdutos.html"},
    ];
});