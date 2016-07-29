(function () {
    var app = angular.module("tarefas", ["ngRoute"]);
    var config = function ($routeProvider) {
        $routeProvider
        .when("/",
        { templateUrl: "/tarefas/html/listaTodos.html", controller: "listaController" })
        .when("/listaAfazer",
        { templateUrl: "/tarefas/html/listaAfazer.html", controller: "listaController" })
        .when("/listaFeitos",
        { templateUrl: "/tarefas/html/listaFeitos.html", controller: "listaController" })
        .when("/adicionar",
        { templateUrl: "/tarefas/html/adicionar.html", controller: "adicionaController"})
        .otherwise(
        { redirecTo: "/" });
    };
    app.config(config);
    app.constant("tarefaApiUrl", "/api/tarefa/");
}()); 