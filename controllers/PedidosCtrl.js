app.controller("PedidosCtrl",function($scope){

    var screenHeight = $(window).height()-110 + "px";

    $scope.colunaStyle = {
        "height" : screenHeight,
        "overflow" : "auto"
    };
    
});