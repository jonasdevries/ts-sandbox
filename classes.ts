interface UserInterface{
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface{
  name: string;
  email: string;
  age: number;
  constructor(name:string, email:string, age:number){
    this.name = name;
    this.email = email;
    this.age = age;
    console.log('User Created: ' +this.name);
  }

  register(){
    console.log(this.name+' is now registered');
  }

  payInvoice(){
    console.log(this.name+' paid invoice');
  }
}

let john = new User('John', 'john@mail.com',89);
console.log(john);
//console.log(john.register());
//console.log(john.name);

class Member extends User {
  id: number;

  constructor(id: number, name:string, email:string, age:number){
    super(name,email,age);
    this.id = id;
  }

  payInvoice(){
    super.payInvoice();
  }

}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail',89);
mike.payInvoice();
