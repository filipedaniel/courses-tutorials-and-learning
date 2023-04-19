using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DisplaySingleCountry
{
    class CsvReader
    {
        private string CsvFilePath;

        public CsvReader(string csvFilePath)
        {
            this.CsvFilePath = csvFilePath;
        }


        public Dictionary<String, Country> ReadAllCountries()
        {
            var countries = new Dictionary<string, Country>();


            using (StreamReader sr = new StreamReader(CsvFilePath))
            {
                // read header line
                sr.ReadLine();

                string csvLine = "";
                while ((csvLine = sr.ReadLine()) != null)
                {
                    Country country = ReadCountryFromCsvLine(csvLine);
                    countries.Add(country.Code, country);
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
