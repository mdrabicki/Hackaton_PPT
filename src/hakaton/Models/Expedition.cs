using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Models
{
    public class Expedition
    {
        public int ID { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ExpeditionDate { get; set; }
        public List<ExpeditionUser> Participants { get; set; }
        public Place Place { get; set; }
        public User Organizator { get; set; }

    }
}
