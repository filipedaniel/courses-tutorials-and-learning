using System;
using System.Collections.Generic;

namespace TopTenPops
{
    class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\Git\courses-and-tutorials\courses\beginning-c#-collections\TopTenPops\PopByLargerstFile.csv";
            CsvReader reader = new CsvReader(filePath);

            // Read only N countries
            //Country[] countries = reader.ReadFirstNCountries(4);
            List<Country> countries = reader.ReadAllCountries();

            Country lilliput = new Country("Lilliput", "LIL", "Somewhare", 123123128);
            int index = countries.FindIndex(x => x.Population > lilliput.Population);
            // insert at index
            countries.Insert(index, lilliput);
            // remove at index
            countries.RemoveAt(index);

            foreach( Country country in countries)
            {
                Console.WriteLine($"{country.Population}: {country.Name}");
            }

            Console.WriteLine($"{countries.Count} countries!");
        }
    }
}
