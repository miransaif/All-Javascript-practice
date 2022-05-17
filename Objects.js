var user = {
    firstName : "Miran",
    lastName : "Saif",
    role : "Admin",
    loggedInCount : 41,
    isLoggedInFromFacebook : true,
};

//least used method
console.log(user["role"]);

// most used Method
console.log(user.firstName);

// to access all objects at once
console.log(user);

// using table
console.table(user)