using System;
using System.Collections.Generic;

namespace GradeBook
{
  public class Statistics
  {
    public double average
    {
      get
      {
        return this.sum / this.count;
      }
      private set {}
    }
    public double low;
    public double high;
    public char letter
    {
      get
      {
        char let;
        switch (this.average)
        {
          case var d when d >= 90.0:
            let = 'A';
            break;
          case var d when d >= 80.0:
            let = 'B';
            break;
          case var d when d >= 70.0:
            let = 'C';
            break;
          case var d when d >= 60.0:
            let = 'D';
            break;
          default:
            let = 'F';
            break;
        }
        return let;
      }
      private set {}
    }

    public double sum;
    public int count;

    public Statistics()
    {
      this.average = 0.0;
      this.high = double.MinValue;
      this.low = double.MaxValue;
      this.letter = 'F';
      this.sum = 0.0;
      this.count = 0;
    }
  
    public void Add(double number)
    {
      this.sum += number;
      this.count++;
      this.high = Math.Max(this.high, number);
      this.low = Math.Min(this.low, number);
    }
  }
}