var user = {
    firstName : "Miran",
    lastName : "Saif",
    role : "Admin",
    loggedInCount : 41,
    isLoggedInFromFacebook : true,

    // inserting a method
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },

    // another method 
    buyCourseCount : function () {
        return `${this.firstName} has enrolled in ${this.courseList.length} courses`;
    },

    // trying assignment
    info : function (){
        return `${this.firstName} ${this.lastName} is ${this.role} and has Enrolled in ${this.courseList.length} courses which are ${this.courseList} `
    },
};

user.buyCourse("Python");
user.buyCourse("javaScript");

console.log(user.info());

