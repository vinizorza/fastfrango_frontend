app.controller("HomeCtrl",function($scope){

    var host = location.protocol +"//"+ location.host;

    //Caso não baixar o projeto com o index na raiz do servidor, concatene a linha abaixo no host
    // + "/fastfrango_frontend/";
    $scope.host = host;

    $scope.opcoes = [
        {nome: "Cardápio", src: host + "/#!/cardapio"},
        {nome: "Relatório", src: host + "/#!/relatorio"},
        {nome: "Estoque", src: host + "/#!/estoque"},
        {nome: "Bebidas", src: host + "/#!/bebidas"},
        {nome: "Pedidos", src: host + "/#!/pedidos"},
        {nome: "Novo Pedido", src: host + "/#!/novopedido"},
        {nome: "Cadastrar Combo", src: host + "/#!/cadastrarcombo"},
        {nome: "Cadastrar Porção", src: host + "/#!/cadastrarporcao"},
        {nome: "Alterar Produto", src: host + "/#!/alterarproduto"},
    ];

});
