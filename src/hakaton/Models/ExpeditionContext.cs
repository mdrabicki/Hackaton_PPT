using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Models
{
    public class ExpeditionContext:DbContext
    {
        ExpeditionContext(DbContextOptions<ExpeditionContext> options):
            base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExpeditionUser>()
                .HasKey(r => new { r.ExpeditionId, r.UserId });

            modelBuilder.Entity<ExpeditionUser>()
                .HasOne(u => u.User)
                .WithMany(e => e.Expeditions);

            modelBuilder.Entity<ExpeditionUser>()
                .HasOne(e => e.Expedition)
                .WithMany(p => p.Participants);
        }
            

    }
}
