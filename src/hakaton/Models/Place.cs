using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Models
{
    public class Place
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Lenght { get; set; }
        public double Width { get; set; }
        public bool Visited { get; set; }
        public string Description { get; set; }


    }
}
