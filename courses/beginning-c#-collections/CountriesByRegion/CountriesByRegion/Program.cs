using System;
using System.Collections.Generic;

namespace CountriesByRegion
{
    class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\Git\courses-and-tutorials\courses\beginning-c#-collections\CountriesByRegion\PopByLargerstFile.csv";
            CsvReader reader = new CsvReader(filePath);

            Dictionary<string, List<Country>> countries = reader.ReadAllCountries();
               
            foreach (var region in countries.Keys)
            {
                Console.WriteLine(region);
            }

            Console.WriteLine("Which of the above regions do you want?");

            string chosenRegion = Console.ReadLine();

            if (countries.ContainsKey(chosenRegion))
            {
                foreach (var country in countries[chosenRegion])
                {
                    Console.WriteLine($"{country.Name} - {country.Population}");
                }
            }
            else
            {
                Console.WriteLine("That is not a valid region!");
            }

            
        }
    }
}
