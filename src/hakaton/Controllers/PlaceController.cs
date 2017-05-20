using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using hakaton.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace hakaton.Controllers
{
    [Route("api/[controller]")]
    public class PlaceController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<Place> Place()
        {
            List<Place> places = new List<Place>
            {
                new Place()
                {
                    ID = 1,
                    Width = 49.995323,
                    Lenght = 22.059719,
                    Name = "Wzgórze Matysówka",
                    Description = "Lorem ipsum",
                    Visited = true
                },
                new Place()
                {
                    ID=2,
                    Width = 50.074252,
                    Lenght = 21.959740,
                    Name = "Park Technologiczny Rzeszów-Dworzysko",
                    Description = "Ipsum lorem",
                    Visited = false
                },
                new Place()
                {
                    ID = 3,
                    Width = 50.060314,
                    Lenght = 22.015797,
                    Name = "Most Tadeusza Mazowieckiego",
                    Description = "Duży most",
                    Visited = false
                }

            };
            return places;


        }
    }
}
