using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using viaje.Modals;


namespace viaje.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Gestor_Bd> APROBAR { get; set; }
        public DbSet<Gastos> GASTOS { get; set; }
        

    }
}
