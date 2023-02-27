// Menu.am

class MenuAm {
  constructor() {
    this.restorants = [];
  }

  addRestorant(newRestorant) {
    if (!this.restorants.includes(newRestorant)) {
      this.restorants.push(newRestorant);
    }
  }
}
class Restorant {
  constructor(name) {
    this.name = name;
    this.dishes = [];
  }
  addDish(dish) {
    if (!this.dishes.includes(dish)) {
      this.dishes.push(dish);
    } else {
      dish.quantity += dish.quantity;
    }
  }
}

class Dish {
  constructor(name, unitPrice, quantity) {
    (this.name = name),
      (this.unitPrice = unitPrice),
      (this.quantity = quantity);
  }
}
class Person {
  constructor(name) {
    this.name = name;
    this.myMenu = [];
  }
  order(menu, restorant, dish, price, quantity) {
    if (price <= 0) {
      throw "Error : price can't be negative";
    } else if (quantity <= 0) {
      throw "Error : quantity can't be negative";
    }
    let myDish = {};
    myDish.name = dish.name;
    if (
      menu.restorants.includes(restorant) &&
      restorant.dishes.includes(dish) &&
      dish.quantity >= quantity &&
      dish.unitPrice * quantity === price
    ) {
      if (this.myMenu.includes(dish)) {
        myDish.quantity = dish.quantity + quantity;
        dish.quantity -= quantity;
        myDish.cost = dish.unitPrice * myDish.quantity;
      } else {
        dish.quantity -= quantity;
        myDish.quantity = quantity;
        myDish.cost = price;
        this.myMenu.push(myDish);
      }
    } else {
      console.log("Sorry, we haven't such dish");
    }
  }
}

let menu = new MenuAm();
let restorant = new Restorant("A");
let restorantB = new Restorant("B");
let tea = new Dish("tea", 100, 1);
let bread = new Dish("bread", 200, 2);
let cheese = new Dish("cheese", 3000, 1);
restorant.addDish(tea);
restorant.addDish(bread);
restorant.addDish(cheese);
restorant.addDish(bread);
menu.addRestorant(restorant);
menu.addRestorant(restorantB);
let castomer = new Person("Anush");
castomer.order(menu, restorant, bread, 400, 2);
