type User = {
    name: string;
    age: number;
    birthday?: string;
}

// challenge.ts
const prettyPrintWilder = (users: User[]): void => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders: User[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2: User = { name: "Paul", age: 34, birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);