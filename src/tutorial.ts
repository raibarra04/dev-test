export type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark'

function setTheme(t:Theme){
    theme = t;
}

setTheme('dark')

type Employee = {id: number; name: string; dpt: string};
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff){
    if ('employees' in staff){
        console.log(`Employee is a Manager and their staff: ${staff.employees.length}`)
    } else {
        console.log(`Is an employee of department: ${staff.dpt}`)
    }
}
let jeff: Staff = {id: 1, name: 'Jeff', dpt: 'Accounting'}
let alice: Staff = { id: 1, name: 'Alice', dpt: "Accounting" };
let bob: Staff = {id: 0, name: "Robert", employees: [jeff,alice]};

printStaffDetails(jeff)
printStaffDetails(bob)

