(function (app) {
    var adicionaController = function ($scope, tarefaService) {
        //Funcao botao cancelar
        $scope.cancelar = function () {
            $scope.inserir.tarefa = null;
        };
        //Funcao botao salvar
        $scope.salvar = function () {
                criarTarefa();
        };
        //Inserir tarefa
        $scope.criar = function () {
            $scope.inserir = {
                tarefa: {
                    Descricao: "",
                    Status: "",
                    Categoria: "",
                    Prioridade: ""
                }
            };
        };
        var criarTarefa = function () {
            tarefaService.criar($scope.inserir.tarefa)
                .success(function (tarefa) {
                    $scope.tarefas.push(tarefa);
                    $scope.inserir.tarefa = null;
                });
        };
    };
    app.controller("adicionaController", adicionaController);
}(angular.module("tarefas")));