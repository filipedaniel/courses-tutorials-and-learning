using System;
using System.Collections.Generic;
using System.IO;

namespace GradeBook
{
  // public delegate void GradeAddedDelegate(object sender, EventArgs args);

  public class DiskBook : Book
  {
    private List<double> grades;
    public override event GradeAddedDelegate GradeAdded;

    public DiskBook(string name) : base(name)
    {
      this.Name = name;
      this.grades = new List<double>();
    }

    
    public override void AddGrade(double grade)
    {
      using(var writer = File.AppendText($"{this.Name}.txt"))
      {
        writer.WriteLine(grade.ToString());
        if (GradeAdded != null)
        {
          GradeAdded(this, new EventArgs());
        }
      }
    }

    public override Statistics GetStatistics()
    {
      Statistics stats = new Statistics();
      
      using(var reader = File.OpenText($"{this.Name}.txt"))
      {
        var line = reader.ReadLine();
        while(line != null)
        {
          var number = double.Parse(line);
          stats.Add(number);
          line = reader.ReadLine();

        }
      }

      return stats;
    }
  }

}