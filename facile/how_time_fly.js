/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const months = {
    1:31,
    2:28,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
};

const months_bisex = {
    1:31,
    2:29,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
};
const BEGIN = readline();
const END = readline();
let annee_bissextile = 0;
let annee_non_bisextile = 0;
yy = 0;
mm = 0;
dd = 0;
YY = "";
MM = "";
// Découpage des dates de début et de fin
YearBegin = Number.parseInt(BEGIN.slice(-4),10);
MonthBegin = Number.parseInt(BEGIN.slice(3,5),10);
DayBegin = Number.parseInt(BEGIN.slice(0,2),10);
YearEnd = Number.parseInt(END.slice(-4),10);
MonthEnd = Number.parseInt(END.slice(3,5),10);
DayEnd = Number.parseInt(END.slice(0,2),10);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// Détermine le nombre d'années bisextiles et non bisextiles
/**MonthEnd < MonthBegin && YearBegin != YearEnd ? ajout = 1 : ajout = 0 ;
for (Year = YearBegin; Year < YearEnd - ajout; Year++ ){
    if(Year%4==0 && Year%100!=0 || Year%400==0)
    {
        annee_bissextile = annee_bissextile + 1
    }
    else
    {
        annee_non_bisextile = annee_non_bisextile + 1
    }
}**/
if (YearBegin != YearEnd && MonthBegin == MonthEnd && DayBegin== DayEnd)
{  
    yy = YearEnd - YearBegin ;
}
else if (YearBegin == YearEnd && MonthBegin != MonthEnd && DayBegin == DayEnd )
{   Year = YearBegin;
    currentCalendar = Year%4==0 && Year%100!=0 || Year%400==0 ? months_bisex : months;
    mm = MonthEnd - MonthBegin;
    for (i = MonthBegin; i < MonthEnd; i++ )
    {   
        dd += currentCalendar[i];
    }
}

// Ecriture
if (mm != 0){
   MM = mm == 1 ? mm + " month, " : mm + " months, ";
}
if (yy != 0){
    YY = yy == 1 ? yy + " year, " : yy + " years, ";
}
Total = "total " + dd + " days";
console.log(YY + MM + Total)