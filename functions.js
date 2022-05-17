var userInfo = function (name , role){
    switch (role) {
        case "admin":
            return `${name} has access to everything`;
        case "sub-admin":
            return `${name} has access to delete and create courses`;
        case "tester":
            return `${name} has access to create and delete tests`;
        case "user":
            return `${name} has access to all course contents`;
        default:
            return `${name} is a trail user`;
    }
}

console.log(userInfo("saif","admin"));