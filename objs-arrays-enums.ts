enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 1,
    AUTHOR = 'AUTHOR'
}

const person = {
    name:  'Carlos',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());   
}