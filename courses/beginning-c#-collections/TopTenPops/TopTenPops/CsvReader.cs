using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace TopTenPops
{
    class CsvReader
    {
        private string CsvFilePath;

        public CsvReader(string csvFilePath)
        {
            this.CsvFilePath = csvFilePath;
        }

        /*public Country[] ReadFirstNCountries(int nCountries)
        {
            Country[] countries = new Country[nCountries];

            using (StreamReader sr = new StreamReader(CsvFilePath))
            {
                // read header line
                sr.ReadLine();

                for (int i = 0; i < nCountries; i++)
                {
                    string csvLine = sr.ReadLine();
                    countries[i] = ReadCountryFromCsvLine(csvLine);
                }
            }

            return countries;
        }*/

        public List<Country> ReadAllCountries()
        {
            List<Country> countries = new List<Country>();

            using (StreamReader sr = new StreamReader(CsvFilePath))
            {
                // read header line
                sr.ReadLine();

                string csvLine = "";
                while((csvLine = sr.ReadLine()) != null)
                {
                    countries.Add(ReadCountryFromCsvLine(csvLine));
                }

            }

            return countries;
        }

        public Country ReadCountryFromCsvLine(string csvLine)
        {
            string[] parts = csvLine.Split(new char[] { ',' });

            string name = parts[0];
            string code= parts[1];
            string region= parts[2];
            int population= int.Parse(parts[3]);

            return new Country(name,code,region,population);

        }
    }
}
