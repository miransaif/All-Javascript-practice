var name  = "saif";
console.log(name);

function sayMe() {
    var name = "Miran";
    console.log("name from line 6 " +name);

    sayMe2()
    
    function sayMe2() {
        var name = "Miran Saif"
        console.log("name from line 12 " +name);
    }
}

sayMe();