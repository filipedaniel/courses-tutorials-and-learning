using System;
using System.Collections.Generic;

namespace GradeBook
{

    public delegate void GradeAddedDelegate(object sender, EventArgs args);

    public class InMemoryBook : Book
    {   
        private List<double> grades;

        public override event GradeAddedDelegate GradeAdded;

        public InMemoryBook(string name) : base(name)
        {
            this.Name = name;
            this.grades = new List<double>();
        }

        public override void AddGrade(double value)
        {
            if (value <= 100 && value >= 0)
            {
                this.grades.Add(value);
                if (GradeAdded != null)
                {
                    GradeAdded(this, new EventArgs());
                }
            }
            else
            {
                throw new ArgumentException($"Invalid {nameof(value)}");
            }
        }
   
        public override Statistics GetStatistics()
        {
            Statistics stats = new Statistics();
            
            foreach (double grade in this.grades)
            {
                stats.Add(grade);
            }
            
            return stats;
        }

    }
}