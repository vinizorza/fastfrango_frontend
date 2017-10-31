app.controller("HomeCtrl",function($scope){

    var host = location.protocol +"//"+ location.host;

    //Caso não baixar o projeto com o index na raiz do servidor, concatene a linha abaixo no host
    // + "/fastfrango_frontend/";
    $scope.host = host;

    $scope.opcoes = [
        {nome: "Cardápio", src: host + "/#!/cardapio"},
        {nome: "Bebidas", src: host + "/#!/bebidas"},
        {nome: "Pedidos", src: host + "/#!/pedidos"},
        {nome: "Novo Pedido", src: host + "/#!/novopedido"},
        {nome: "Combos", src: host + "/#!/cadastrarcombo"},
        {nome: "Porções", src: host + "/#!/cadastrarporcao"},
    ];

});
