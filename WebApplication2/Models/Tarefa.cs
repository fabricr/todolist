using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Status { get; set; }
        public string Categoria { get; set; }
        public string Prioridade { get; set; }

  
    }
}