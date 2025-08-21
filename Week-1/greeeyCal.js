// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// F

function GradeCalculator(Score){
    if (Score >= 90){
        return "A";
    }
    else if(Score >= 80){
        return "B";
    }
    else if (Score >= 70){
        return "C";
    }
    else if(Score >= 60){
        return "D";
    }
    else{
        console.log("Sorry Bro you have not gotten Passing Marks ")
    }
}
let Grade = GradeCalculator(95);
console.log(Grade);