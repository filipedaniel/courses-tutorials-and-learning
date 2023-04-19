using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ACM.BL
{
    class Order
    {

        public DateTimeOffset? OrderDate { get; set; }
        public int OrderId { get; private set; }

        // ---

        public Order()
        {

        }

        public Order(int orderId)
        {
            OrderId = orderId;
        }

        // ---

        public Order Retrive(int orderId)
        {
            // code here!

            return new Order();
        }

        public bool Save()
        {
            // Code here!

            return true;
        }


        public bool Validate()
        {
            var isValid = true;
            
            if (OrderDate == null) isValid = false;

            return isValid;
        }

    }
}
