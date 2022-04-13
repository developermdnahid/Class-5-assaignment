

//      1. Create a function that will return children, teenagers, young people, old people from the age


/**
 * 
let name = prompt('Please, type your Name?');
let age = prompt('Please, Type your age?');

ageCal(name , age );
 */




//      2. Create a function that will return the area of a rectangle, square, triangle
/**
 * 
let type = prompt('Enter shape name.');
let val1 = prompt('Enter Height area');
let val2 = prompt('Enter Weight area');

areaCal(type , val1 , val2);
 */




/**
 * 
//      3. GPA, CGPA, GRADE function for result publishing


let name = prompt('Type Student Name?');
let className = prompt('Tyte Student class?');
let roll = prompt('Type Student Roll?');
let depName = prompt('Type Your Depertment?');

let bb = prompt('Enter Bolodidda Mark?');
let tb = prompt('Enter Tap O Tap Gotibidda Mark?');
let bd = prompt('Enter Bostor dhormo & torongo Mark?');
let cl = prompt('Enter Calculus Mark?');
let fm = prompt('Enter Fundamental Mark?');
let ch = prompt('Enter Chemistry Mark?');
let sb = prompt('Enter Shadin Bangla Mark?');


let gpa = '';
let grade = '';

if( bb >= 0 && bb < 33 ){
    gpa = 0 ;
    grade = 'F';
}else if( bb >= 33 && bb < 40 ){
    gpa = 1 ;
    grade = 'D'
}else if( bb >= 40 && bb < 50 ){
    gpa = 2 ;
    grade = 'C'
}else if( bb >= 50 && bb < 60 ){
    gpa = 3 ;
    grade = 'B'
}else if( bb >= 60 && bb < 70 ){
    gpa = 3.5 ;
    grade = 'A-'
}else if( bb >= 70 && bb < 80 ){
    gpa = 4 ;
    grade = 'A'
}else if( bb >= 80 && bb <= 100 ){
    gpa = 5 ;
    grade = 'A+'
}else{
    gpa = 'Invalid';
    grade = 'Invalid';
}


console.log(`

    Name                    : ${ name }
    Class                   : ${ className }
    Roll                    : ${ roll }
    Derpertment Name        : ${ depName }
    -------------------------------------------------------------------->
    Subject                          Marks           GPA         Grade           Result
    Bolodidda                         ${ bb }              ${ getGpa(bb) }           ${ getGrade(bb) }
    Tap O Tap Gotibidda               ${ tb }              ${ getGpa(tb) }           ${ getGrade(tb) }
    Bostor dhormo & torongo           ${ bd }              ${ getGpa(bd) }           ${ getGrade(bd) }
    Calculus                          ${ cl }              ${ getGpa(cl) }           ${ getGrade(cl) }
    Fundamental                       ${ fm }              ${ getGpa(fm) }           ${ getGrade(fm) }
    Chemistry                         ${ ch }              ${ getGpa(ch) }           ${ getGrade(ch) }
    Shadin Bangla                     ${ sb }              ${ getGpa(sb) }           ${ getGrade(sb) }
    

 `);
 */



/**
 * 
//      4. Create an age calculator function

let name = prompt('Enter your Name?');
let bAge = prompt('Enter your Birthday Date?');

ageCal(name , bAge );
 */




//      5. Create a BMI function for health




/**
 * 
let name = prompt('Enter your Name');
let height = prompt('Enter your height');
let weight = prompt('Enter your weight');


bmiCal( name , height , weight );
 */




//      6. Create a currency converter function from taka to USD, CAD, POUND, EURO etc




let amount = prompt('Amount');
let type = prompt('Currency Type');

cureencyConverter(amount , type);






