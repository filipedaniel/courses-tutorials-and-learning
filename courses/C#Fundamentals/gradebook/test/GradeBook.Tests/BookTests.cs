using System;
using Xunit;

namespace GradeBook.Tests
{
    public class BookTests
    {
        [Fact]
        public void BookCalculatesAnAverageGrade()
        {
            // arrange section
            var book = new InMemoryBook("");
            book.AddGrade(12.3);
            book.AddGrade(10.2);
            book.AddGrade(9.4);

            // act section
            var result = book.GetStatistics();

            // assert section
            Assert.Equal(10.6,result.average,1);
            Assert.Equal(9.4,result.low,1);
            Assert.Equal(12.3,result.high,1);
            Assert.Equal('F', result.letter);
        }
    }
}
