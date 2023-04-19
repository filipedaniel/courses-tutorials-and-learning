using System;
using System.Collections.Generic;

namespace DictSnippets
{
    class Program
    {
        static void Main(string[] args)
        {
            Country norway = new Country("Norway", "NOR", "Europe", 1234567);
            Country finland = new Country("Finland", "FIN", "Europe", 1034567);

            var countries = new Dictionary<string, Country>();
            countries.Add("NOR", norway);
            countries.Add("FIN", finland);


            bool exists = countries.TryGetValue("MUS", out Country country);
            if (exists)
                Console.WriteLine("Exists!");
            else
                Console.WriteLine("Does not exist!");

            /* foreach (var country in countries)
            {
                Console.WriteLine(country.Value.Name);

            }*/
        }
    }
}
