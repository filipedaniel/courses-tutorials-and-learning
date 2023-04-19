using System;

namespace GradeBook
{
    class Program
    {
        static void OnGradeAdded(object sender, EventArgs args)
        {
            Console.WriteLine("A grade was added!");
        }
        static void Main(string[] args)
        {
            IBook book = new InMemoryBook("Book1");
            // IBook book = new DiskBook("Book2");
            book.GradeAdded += OnGradeAdded;

            EnterGrades(book);

            Statistics stats = book.GetStatistics();

            Console.WriteLine($"The average grade for book {book.Name} is {stats.average:N2}!");
            Console.WriteLine($"The lowers grade is {stats.low}!");
            Console.WriteLine($"The highest grade is {stats.high}!");
            Console.WriteLine($"The letter grade is {stats.letter}!");
        }

        private static void EnterGrades(IBook book)
        {
            while (true)
            {
                Console.WriteLine("Enter a grade or 'q' to exit!");
                var input = Console.ReadLine();

                if (input == "q")
                {
                    break;
                }

                try
                {
                    var grade = double.Parse(input);
                    book.AddGrade(grade);
                }
                catch (ArgumentException e)
                {
                    Console.WriteLine(e.Message);
                }
                catch (FormatException e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }
    }
}
