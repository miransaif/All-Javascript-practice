var User = function (firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is ${this.courseCount}`);
    }
}

var Saif = new User("Miran.Saif",5);
Saif.getCourseCount();