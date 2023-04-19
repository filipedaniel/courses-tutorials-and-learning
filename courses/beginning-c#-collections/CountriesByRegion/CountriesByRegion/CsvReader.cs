using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace CountriesByRegion
{
    class CsvReader
    {
        private string CsvFilePath;

        public CsvReader(string csvFilePath)
        {
            this.CsvFilePath = csvFilePath;
        }


        public Dictionary<String, List<Country>> ReadAllCountries()
        {
            var countries = new Dictionary<string, List<Country>>();


            using (StreamReader sr = new StreamReader(CsvFilePath))
            {
                sr.ReadLine();

                string csvLine = "";
                while ((csvLine = sr.ReadLine()) != null)
                {
                    Country country = ReadCountryFromCsvLine(csvLine);
                    if (countries.ContainsKey(country.Region))
                    {
                        countries[country.Region].Add(country);
                    } else
                    {
                        List<Country> countriesInRegion = new List<Country>() { country };
                        countries.Add(country.Region, countriesInRegion);
                    }
                }
            }

            return countries;
        }

        public Country ReadCountryFromCsvLine(string csvLine)
        {
            string[] parts = csvLine.Split(new char[] { ',' });

            string name = parts[0];
            string code = parts[1];
            string region = parts[2];
            int population = int.Parse(parts[3]);

            return new Country(name, code, region, population);

        }
    }
}
