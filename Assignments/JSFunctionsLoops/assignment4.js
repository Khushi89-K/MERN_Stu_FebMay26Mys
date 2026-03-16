const getRoute = function(role, isloggedIn) {
    //LoggedIn
    if (!isloggedIn) {
        return "/login";
    } else {
        //  using switch to role
        switch (role) {
            case "admin":
                return "/admin";
            case "student":
                return "/student";
            case "college":
                return "/college";
            case "proctor":
                return "/proctor";
            default:
                return "/denied";
        }
    }
};

console.log(getRoute("admin", true));    
console.log(getRoute("student", true));  
console.log(getRoute("college", true));    
console.log(getRoute("proctor", false));   