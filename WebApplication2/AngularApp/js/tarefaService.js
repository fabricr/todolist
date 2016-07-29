(function (app) {
    var tarefaService = function ($http, tarefaApiUrl) {
        var getTarefas = function () {
            return $http.get(tarefaApiUrl);
        };
        var getTarefaPorId = function (id) {
            return $http.get(tarefaApiUrl + id);
        };
        //DONE
        var atualizar = function (tarefa) {
            return $http.put(tarefaApiUrl + tarefa.Id, tarefa);
        };
        // Adicionar Tarefa
        var criar = function (tarefa) {
            return $http.post(tarefaApiUrl, tarefa);
        };
        //Deletar Tarefa
        var deletar = function (tarefa) {
            return $http.delete(tarefaApiUrl + tarefa.Id);
        };
        return {
            getTarefas: getTarefas,
            getTarefaPorId: getTarefaPorId,
            atualizar: atualizar,
            criar: criar,
            deletar: deletar
        };
    };
    app.factory("tarefaService", tarefaService);
}(angular.module("tarefas")))