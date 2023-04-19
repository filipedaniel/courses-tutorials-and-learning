using System;
using Xunit;

namespace GradeBook.Tests
{
    public delegate string WriteLogDelegate(string logMessage);

    public class TypeTests
    {
        private int count = 0;

        [Fact]
        public void GetBookReturnsDifferentObjects()
        {
            var book1 = GetBook("Name 1");
            var book2 = GetBook("Name 2");

            Assert.Equal("Name 1", book1.Name);
            Assert.Equal("Name 2", book2.Name);
    	    Assert.NotSame(book1, book2);
        }

        [Fact]
        public void TwoVarsCanReferenceSameObject()
        {
            //Given
            var book1 = GetBook("Book 1");
            var book2 = book1;

            //Then
            Assert.Same(book1, book2);
            Assert.True(object.ReferenceEquals(book1, book2));
        } 

        [Fact]
        public void CanSetNameFromReference()
        {
            var book = GetBook("Book 1");
            SetName(book, "New Name");

            Assert.Equal("New Name", book.Name);
        }

        [Fact]
        public void CSharpIsPassByValue()
        {
            var book = GetBook("Book 1");
            GetBookSetName(book,"New Name");

            Assert.Equal("Book 1", book.Name);
        }

        [Fact]
        public void CSharpAndPassByRef()
        {
            var book = GetBook("Book 1");
            GetBookSetName(out book,"New Name");

            Assert.Equal("New Name", book.Name);
        }

        [Fact]
        public void ValueTypeAlsoPassByValue()
        {
            var x = GetInt();
            SetInt(ref x);

            Assert.Equal(42, x);
        }

        [Fact]
        public void StringsBehaveLikeValueTypes()
        {
            string name = "Jhon";
            string nameUpper = MakeUppercase(name);

            Assert.Equal("Jhon", name);
            Assert.Equal("JHON", nameUpper);
        }
        
        [Fact]
        public void WriteLogDelegateCanPointToMethod()
        {
             WriteLogDelegate log = ReturnMessage;
            //  log = new WriteLogDelegate(ReturnMessage);
             log += ReturnMessage;
             log += IncrementCount;
             
             var result = log("Hello!");

            Assert.Equal(3, count);

        }
        // ------

        string IncrementCount(string message)
        {
            count++;
            return message.ToLower();
        }

        string ReturnMessage(string message)
        {
            count++;
            return message;
        }

        private string MakeUppercase(string param)
        {
            return param.ToUpper();
        }

        private int GetInt()
        {
            return 3;
        }

        private void SetInt(ref int z)
        {
            z = 42;
        }

        private void SetName(InMemoryBook book, string name)
        {
            book.Name = name;
        }

        private void GetBookSetName(InMemoryBook book, string name)
        {
            book = new InMemoryBook(name);
        }

        private void GetBookSetName(out InMemoryBook book, string name)
        {
            book = new InMemoryBook(name);
        }

        private InMemoryBook GetBook(string name)
        {
            return new InMemoryBook(name);
        }
    }
}
