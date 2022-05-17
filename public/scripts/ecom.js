let userSection =document.querySelector(".sect");
let t=true;
function showHideProducts(){
    t=!t;
    userSection.classList.toggle("hide",t);
}

class user{
    constructor(firstname,lastname,DOB,Password){
        this.firstname=firstname;
        this.lastname=lastname;
        this.DOB=DOB;
        this.email=email;
        this.Password=Password;
    }
    set first(value){
        this.firstname=value;
    }
    set last(value){
        this.lastname=value;
    }
    set dob(value){
        this.dob=value;
    }
    set email(value){
        this.email=value;
    }
    set pwd(value){
        this.pwd=value;
    }
    get fullname(){
        return this.firstname+" "+this.lastname;
    }
};


var i=0;
var images=[];
var time=3000;
images[0]="img1"
images[1]=
images[2]=

function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    } else{
        i=0;
    }
    setTimeout("changeImg",time);
}