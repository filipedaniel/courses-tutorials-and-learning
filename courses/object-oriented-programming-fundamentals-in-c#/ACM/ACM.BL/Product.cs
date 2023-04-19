using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ACM.BL
{
    class Product
    {
        public int ProductId { get; private set; }

        public string ProductName { get; set; }

        public string Description { get; set; }

        public decimal? CurrentPrice { get; set; }

        // ---

        public Product()
        {

        }

        public Product(int productId)
        {
            ProductId = productId;
        }

        // ---
         
        public bool Validate()
        {
            var isValid = true;

            if (string.IsNullOrWhiteSpace(ProductName)) isValid = false;
            if (CurrentPrice == null) isValid = false;
            
            return isValid;
        }

        public Product Retrieve(int productId)
        {
            // code here...

            return new Product();
        }

        public bool Save()
        {
            // code here...

            return true;
        }

    }
}
