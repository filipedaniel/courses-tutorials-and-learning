using System;
using System.Collections.Generic;

namespace DisplaySingleCountry
{
    class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\Git\courses-and-tutorials\courses\beginning-c#-collections\DisplaySingleCountry\PopByLargerstFile.csv";
            CsvReader reader = new CsvReader(filePath);

            Dictionary<string, Country> countries = reader.ReadAllCountries();

            Console.WriteLine("Which country code do you want to loop up?");
            string userInput = Console.ReadLine();

            bool gotCountry = countries.TryGetValue(userInput, out Country country);
            if (!gotCountry)
                Console.WriteLine($"Sorry, there is no country with code, {userInput}");
            else
                Console.WriteLine($"{country.Name} has population {country.Population}");
  
        }
    }
}
