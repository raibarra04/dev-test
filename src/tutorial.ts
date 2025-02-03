enum UserRole {
    Admin,
    Manager,
    Employee,
}

type User = {
    id: number; 
    name: string; 
    role: UserRole;
    contact: [string, string]; // email, phone
}

function createUser(user: User): User {
    return user;
}

const user: User = createUser({
  id: 12,
  name: "john",
  role: UserRole.Admin,
  contact: ["me.com", "123"],
})

console.log(user)