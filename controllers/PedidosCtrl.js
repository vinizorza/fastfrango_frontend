app.controller("PedidosCtrl",function($scope){

    //Na hora de pescorrer o array, filtrar pelo status
    //Ex: <li ng-repeat="pedido in todosPedidos | filter: pendente">{{name}}</li>
    $scope.todosPedidos = [
        {id: 1, nomeCliente:"Vinicius", combos:{id: 1, nome: "Ventania"} , status: "pendente"}
    ];



    
});