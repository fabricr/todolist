namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;


    internal sealed class Configuration : DbMigrationsConfiguration<WebApplication2.Models.TarefaDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(WebApplication2.Models.TarefaDb context)
        {
            context.Tarefas.AddOrUpdate(
                 p => p.Descricao,
                 new Models.Tarefa { Descricao = "Criar cadastro", Categoria = "Back-End", Prioridade = "Média", Status = "À Fazer" },
                 new Models.Tarefa { Descricao = "Corrigir defeito", Categoria = "Back-End", Prioridade = "Máxima", Status = "À Fazer" },
                 new Models.Tarefa { Descricao = "Criar novo menu", Categoria = "Front-End", Prioridade = "Mínima", Status = "À Fazer" },
                 new Models.Tarefa { Descricao = "Procurar defeitos", Categoria = "Teste", Prioridade = "Máxima", Status = "Feito" },
                 new Models.Tarefa { Descricao = "Layout", Categoria = "Front-End", Prioridade = "Máxima", Status = "Feito" }
                );
        }
    }
}
