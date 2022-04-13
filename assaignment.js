

//      1. Create a function that will return children, teenagers, young people, old people from the age


/**
 * 
const ageCal = (name , age ) => {


    let manos = '';

    if( age >=0 && age <=8 ){
        manos = 'Children';
    }else if( age > 8 && age <= 18 ){
        manos = 'Teenager';
    }else if( age > 18 && age <= 40 ){
        manos = 'Young People';
    }else if( age > 40 ){
        manos = 'Old People';
    }


    console.log(`
        Hi, ${name}. You are a ${manos}. 
    `);

}
 */



//      2. Create a function that will return the area of a rectangle, square, triangle

/**
 * 
const areaCal = (type, val1 , val2 = null ) =>  {

    let shape = '';
    let area = '';
    switch(type){
        case 'r':
            shape = 'Rectangle';
            area = (val1 * val2);
            break;
        case 's':
            shape = 'Square';
            area = (val1 * val1);
            break;
        case 't':
            shape = 'Triangle';
            area = (.5 * val1 * val2);
            break;
        case 'c':
            shape = 'Circle';
            area = (3.1416 * val1 * val1);
            break;
    }

    console.log(`
        The area of ${shape} is ${area}.
    `);

}
 */




/**
 * 
//      3. GPA, CGPA, GRADE function for result publishing


// Get GPA form Marks
const getGpa = (marks) => {
    
    let gap ;

    if( marks >= 0 && marks < 33 ){
        gpa = 0 ;
    }else if( marks >= 33 && marks < 40 ){
        gpa = 1 ;
    }else if( marks >= 40 && marks < 50 ){
        gpa = 2 ;
    }else if( marks >= 50 && marks < 60 ){
        gpa = 3 ;
    }else if( marks >= 60 && marks < 70 ){
        gpa = 3.5 ;
    }else if( marks >= 70 && marks < 80 ){
        gpa = 4 ;
    }else if( marks >= 80 && marks <= 100 ){
        gpa = 5 ;
    }

    return gpa ;

}



// Get Grade form Marks

const getGrade = (marks) => {
    
    let grade ;

    if( marks >= 0 && marks < 33 ){
        grade = 'F' ;
    }else if( marks >= 33 && marks < 40 ){
        grade = 'D' ;
    }else if( marks >= 40 && marks < 50 ){
        grade = 'C' ;
    }else if( marks >= 50 && marks < 60 ){
        grade = 'B' ;
    }else if( marks >= 60 && marks < 70 ){
        grade = 'A-' ;
    }else if( marks >= 70 && marks < 80 ){
        grade = 'A' ;
    }else if( marks >= 80 && marks <= 100 ){
        grade = 'A+' ;
    }

    return grade ;

}
 */





/**
 * 
//      4. Create an age calculator function


const ageCal = (name , bAge) => {

    let age = 2022 - bAge ;

    console.log(`
    Hi, ${name}. You are ${age} years Old.
    `);
    
}
 */

/**
 * 
//      5. Create a BMI function for health



const bmiCal = ( name , height , weight ) => {

    let bmi = weight / ( height * height );

    if( bmi <= 18.5 ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Apnr obosta khob e kharap... apni besi besi khaite thaken...
        `);
    }else if( bmi >= 18.5 && bmi <= 24.9 ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Apnr obosta thik ase.. apni khaile khan .. na khaile gomai thaken...
        `);
    }else if( bmi >= 25 && bmi <= 29.9 ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Apnr obosta kemon janiii... sabdhan hown.. khawa dekhlei khaben na....
        `);
    }else if( bmi >= 30 && bmi <= 34.9 ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Apnake kiso boolar na..apni kii jahingir vhai er video dekhen na ....  keto korrte thaken
        `);
    }else if( bmi >= 35 && bmi <= 39.9 ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Apnake vhai r khawa dawar dorkar nai....apni sob khawa chere den
        `);
    }else if( bmi >= 40  ){
        console.log(`
        Hi ${ name },apnr BMI ${ bmi }. Congratulation... apni j akono beche asen tar jonne akta treat dawa dorkar..
        `);
    }

}
 */







//      6. Create a currency converter function from taka to USD, CAD, POUND, EURO etc


const cureencyConverter = ( amount , type ) => {

    let rate = 0 ;

    switch(type){
        case 'USD' : 
            rate = 86 ;
            break ;
        case 'CAD' : 
            rate = 67 ;
            break ;
        case 'Pound' : 
            rate = 112 ;
            break ;
        case 'Euro' : 
            rate = 93 ;
            break ;
    }


    console.log(`
        ${ amount } ${ type } = ${ amount * rate } BDT.
    `);


}




