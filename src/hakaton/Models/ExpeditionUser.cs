using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Models
{
    public class ExpeditionUser
    {
        public virtual User User { get; set; }
        public virtual Expedition Expedition { get; set; }
        public int UserId { get; set; }
        public int ExpeditionId { get; set; }

    }
}
