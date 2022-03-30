var fs=require("fs")
var a=require("readline-sync");
function storng_password(password){
    if (password.length>6 && password.length<10){
        if ("@" || "$"  ||password.includes("#")){
            if (password.length>6 && password.length<10){
                return true
            }    
            else{
                console.log(password,"At least password should contain one number")
                password1=a.question("enter your password : ")
                storng_password(password1)
            }
        }        
        else{
            console.log(password,"At least password should contain one special character")
            password1=a.question("enter your password : ")
            storng_password(password1)        
        }
    }    
    else{
        console.log(password,"At least password should length 6 to 10 digit")
        password1=a.question("enter your password :")
        storng_password(password1)
    }    

}function checkpassword(password1,password2){
    if (password1==password2){
        console.log("password created.")
    }    
    else{
        console.log("Both password are not same")
        password2=a.question("enter your password : ")
        checkpassword(password1,password2)
    }    
}console.log("Welcome to login and sign up page")
 var login_signup=a.question("what you choose login or signup : ")
 file=fs.existsSync("user.json")
//  console.log(file);
 if (file==false){
    if (login_signup=="signup"){
        var user_name=a.question("enter your user name : ")
        var password1=a.question("enter your password : ")
        storng_password(password1)
        var password2=a.question("enter your password : ")
        checkpassword(password1,password2)
        console.log("congrats",user_name,"you are Signed  up Successfully.")
        description=a.question("Information about you :")
        date_of_birth=a.question("enter your date of birth : ")
        hobbies=a.question("enter your hobies : ")
        gender=a.question("enter your gender (male or female) :")       
        mylist=[]
        list1=["username","password","description","dob","hobbies","gender"]
        list2=[user_name,password1,description,date_of_birth,hobbies,gender]
        var i=0
        var user={}
        var user1={}
        while (i<list1.length){
            user[list1[i]]=list2[i]
            i=i+1
        }    
        mylist.push(user)
        user1[password1]=mylist
        fs.writeFileSync("user.json",JSON.stringify(user1,null,4))
    } 
} 
 else if (file==true){
    if (login_signup=="signup"){
        user_name=a.question("enter your user name 1: ")
        password1=a.question("enter your 1st password 1: ")
        storng_password(password1)
        password2=a.question("enter your password :1 ")
        checkpassword(password1,password2)
        var buffer_data=fs.readFileSync("user.json","utf8");
        var org_data=JSON.parse(buffer_data);
        if (buffer_data.includes(password1,user_name)){
            console.log("This account is already exists")
        }    
        else{
            console.log("congrats",user_name,"you are Signed  up Successfully.")
            date_of_birth=a.question("enter your date of birth: ")
            hobbies=a.question("enter your hobie : ")
            gender=a.question("enter your gender (male or female) :")  
            if(gender=="m"||fender=="f"){
                console.log("updated your gender")
            }
            else{
                console.log("other")
            }          
            user={}
            list1=["username","password","description","dob","hobbies","gender"]
            list2=[user_name,password1,description,date_of_birth,hobbies,gender]
            var i=0
            var mylist=[]
            var user1={}
            while (i<list1.length){
                user[list1[i]]=list2[i]
                i++
            } 
            mylist.push(user)
            org_data[password1]=mylist
            fs.writeFileSync("user.json",JSON.stringify(org_data,null,4)) 

        } 
    }         
    else {
       if(login_signup=="login"){
           var username=a.question("enter the name: ")
           var password=a.question("enter the password: ")
           var buffer_data=fs.readFileSync("user.json","utf8")
           var org_data=buffer_data.toString();
           console.log(org_data)
           if (buffer_data.includes(password,username)){    
                console.log("your login is sucsefully")
            }
            else{
                console.log("your pass is wrong")
            }
        }
    }    

}