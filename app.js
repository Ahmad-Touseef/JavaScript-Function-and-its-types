function display(){                                                         //Syntax of function
          document.write("Ahmad Touseef");                  //function without parameters 
          document.write("<br>");
}
display();         

function greet(name){                                                 //function with parameters
          document.write(name);
          document.write("<br>");
}
greet(true);


function add(a,b,c){                                        //function argument missing
          document.write("A:"+a+"B:"+b+"C:"+c);
          document.write("<br>");
}
add(12,13)                                                       //The value of missing argument is undefined

function greeting(name1,name2){                   //Two parameters
          document.write(name1+" to "+name2)
}
greeting("Welcome","Geeky shows"+"<br>");


function greeting1(name){                                   //arguments object
          document.write(arguments[0]);
} 
greeting1("arguments object"+"<br>");

function greeting2(name1,name2){
          document.write(arguments[0]+" ");
          document.write(arguments[1]);
}
greeting2("Geekyshows","world"+"<br>")

function greeting3(name1,name2){
          arguments[0]="Hello";
          document.write(arguments[0]+" ");
          document.write(arguments[1]+"<br>");
}
greeting3("Geekyshows","world",)


function greeting4(name1,name2){
          document.write(arguments.length+"<br>");                 //length count the number of arguments
}
greeting4("Geekyshows","world");

function greeting5(){
          for(var i=0; i<arguments.length; i++){
                    document.write(arguments[i]+" "+"<br>");
          }
}
greeting5("Ahmad Touseef","Hello","World");


function greeting6(name1,num,name2){
                    document.write(arguments.callee);
                    document.write("<br>")                         
}
greeting6("Ahmad Touseef","120","Gull")


function add(a,b){                                                    //many function arguments
          document.write("A:"+a+"B:"+b+"C:"+arguments[2]+"<br>")
}
add(10,20,30)


function add1(a, b="70", c="71"){                           //Default parameters
          document.write("A:"+a+"<br>");
          document.write("B:"+b+"<br>");
          document.write("C:"+c+"<br>");
}
add1(10);

function add2(a,b,c=60)
{
          document.write("A="+a+"<br>");
          document.write("B="+b+"<br>");
          document.write("C="+c+"<br>");
}
add2(10,20,30)
add2(10,20)
add2(10)

function add3(a,b,c=null){                                                //JS allows the use of arrays and null as default values
          document.write("A:"+a+"<br>")
          document.write("B:"+b+"<br>")
          document.write("C:"+c+"<br>")
}              
add3(10,20);
add3(10,20,30);
add3(10);

function add(a=[101]){
          document.write("A="+a[0]+"<br>");
}
add([10]);
add();

function show(a, ...args){                                  //Rest parameter 
          document.write(a+"<br>");
          document.write(args+"<br>");
}
show(10,20,30,40,50)

function show1(...args){
          
          document.write(args[2]+"<br>");
}
show1(100,200,300,400,500)

var a=function(){                                           //Anonymous functions,this function has no name
          document.write("AHMAD TOUSEEF");
};
a();