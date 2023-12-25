class Customer {
    constructor(name, address) {
        this.name = name
        this.adress = address;
    }
    addOrder(order) {
        this.orders.push(order);
    }
}

class Order {
    Payment = null;
    constructor(date, status){
        this.date = date
        this.status = status; 
    }
    calcSubTotal() {
        console.log("69");
    }
    calcTax() {
        console.log("66");
    }
    calcTotal() {
        console.log("45");
    }
    calcTotalWeight() {
        console.log("80");
    }
    addPayment(Payment){
        this.Payment = Payment;
    }
    addOrderDetail(orderDetail) {
        this.orderDetail = orderDetail;
}
}

class OrderDetail {
    constructor(quanity, taxStatus){
        this.quanity = quanity
        this.taxStatus = taxStatus;
    }
    calcSubTotal() {
        console.log("787");
    }
    calcWeight() {
        console.log("444");
    }
    calcTax() {
        console.log("333");
    }
    addItem() {
        console.log("5");
    }
}

class item {
    constructor(shippingWeight, description, price){
        this.shippingWeight = shippingWeight
        this.description = description
        this.price = price;
    }
    getPriceForQuantity() {
        console.log("696");
    }
    getTax() {
        console.log("44");
    }
    inStock() {
        console.log("555");
    }
}

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}

class Cash extends Payment{
    constructor(amount, cashTendered) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}

class Check extends Payment{
  constructor(amount, name, bankID) {
    super(amount);
    this.name = name;
    this.bankID = bankID;
  }
  authorized() {
    console.log("321");
  }
}

class Credit extends Payment{
  constructor(amount, number, type, expDate) {
    super(amount);
    this.name = number;
    this.type = type;
    this.expDate = expDate;
  }
  authorized() {
    console.log("123");
  }
}

const Payment1 = new ("99999");
const Cash1 = new ("9999");
console.log(Payment1);

