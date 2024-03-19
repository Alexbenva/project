function che() {
     var x = document.getElementsByTagName("input");
     var al = /^([A-Za-z])+$/; 
     if (x[0].value.trim() === ""){
         alert("Enter a value");
         return false;
     } 
     if (!al.test(x[0].value.trim())) {
         alert("Enter only letters");
         return false;
     }
     var em = /^[A-Za-z0-9_]+\@ +[a-z]+\.+[a-z]$/
     if(!em.test(x[1].value.trim())) {
          alert("Enter correct format\neg :- persondetails@gmail.com");
          return false;
     }
     return true; 
 }       