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
                 new Models.Tarefa { Descricao = "Criar cadastro", Categoria = "Back-End", Prioridade = "M�dia", Status = "� Fazer" },
                 new Models.Tarefa { Descricao = "Corrigir defeito", Categoria = "Back-End", Prioridade = "M�xima", Status = "� Fazer" },
                 new Models.Tarefa { Descricao = "Criar novo menu", Categoria = "Front-End", Prioridade = "M�nima", Status = "� Fazer" },
                 new Models.Tarefa { Descricao = "Procurar defeitos", Categoria = "Teste", Prioridade = "M�xima", Status = "Feito" },
                 new Models.Tarefa { Descricao = "Layout", Categoria = "Front-End", Prioridade = "M�xima", Status = "Feito" }
                );
        }
    }
}
