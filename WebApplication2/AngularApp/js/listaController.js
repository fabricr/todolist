(function (app) {
    // Lista tarefa
    var listaController = function ($scope, tarefaService) {
        tarefaService
            .getTarefas()
            .success(function(data){
            $scope.tarefas = data;
            });

        //Tarefa Done
        $scope.feito = function (tarefa) {
            atualizarFeito(tarefa);
        };
        var atualizarFeito = function (tarefa) {
            tarefaService.atualizar(tarefa)
            .success(function () {
                removerTarefaPorId(tarefa.Id);
            });
        };
        //Deletar tarefa
        $scope.deletar = function (tarefa) {
            tarefaService.deletar(tarefa)
                .success(function () {
                    removerTarefaPorId(tarefa.Id);
                });
        };
        var removerTarefaPorId = function (id) {
            for (var i = 0; i < $scope.tarefas.length; i++) {
                if ($scope.tarefas[i].Id == id) {
                    $scope.tarefas.splice(i, 1);
                    break;
                }
            }
        };
    };
    app.controller("listaController", listaController);
}(angular.module("tarefas")))