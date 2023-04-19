using System;
using System.Collections.Generic;
using System.Text;

namespace TopTenPops
{
    class PopulationFormatter
    {
        public static string FormatPopulation(int population)
        {
            if (population == 0)
            {
                return "(Unknown)";
            }

            int popRounded = RoundPopulation(population);

            return $"{popRounded: ### ### ### ###}".Trim();
        }

        private static int RoundPopulation(int population)
        {
            //int accuracy = Math.Max((int)(GetHighestpowerofTen(population) / 10_0001), 1);
            //return RoundToNearest(population, accuracy);
            return 0;
        }

    }
}
