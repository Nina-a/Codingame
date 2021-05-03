const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const A = inputs[0];
    const xA = parseInt(inputs[1]);
    const yA = parseInt(inputs[2]);
    const B = inputs[3];
    const xB = parseInt(inputs[4]);
    const yB = parseInt(inputs[5]);
    const C = inputs[6];
    const xC = parseInt(inputs[7]);
    const yC = parseInt(inputs[8]);
    var nature;
    var answer;
    var angleNature;
    const triangleName = A + B + C;

    const longueurBC = calculLongueur(xB,xC,yB,yC)
    const longueurAC = calculLongueur(xC,xA,yC,yA)
    const longueurAB = calculLongueur(xB,xA,yB,yA)

    const [angleAarrondi, angleA] = calculAngle(longueurAB,longueurAC,longueurBC);
    const [angleBarrondi, angleB] = calculAngle(longueurAB,longueurBC,longueurAC);
    const [angleCarrondi, angleC] = calculAngle(longueurAC,longueurBC,longueurAB);
    console.error(angleA,angleB,angleC);
    function calculLongueur(x1,x2,y1,y2){
        longueur = Math.sqrt(Math.pow((x2-x1),2)+ Math.pow((y2-y1),2));
        return longueur
    }

    function calculCarre(x){
        carre = Math.pow(x,2);
        return carre
    }

    function calculAngle(coteAdjacent1, coteAjacent2, coteOpposé){
        angle = ((Math.acos((calculCarre(coteAdjacent1) + calculCarre(coteAjacent2) - calculCarre(coteOpposé)) / (2 * coteAdjacent1 * coteAjacent2)))*180)/Math.PI;
        console.error(angle);
        return  [Math.round(angle), angle.toFixed(1)]
    }
    // Cherche si triangle isocle ou non
    if (longueurBC === longueurAC){
        sideNature = "an isosceles in " + C;
    }else if (longueurAC === longueurAB){
        sideNature = "an isosceles in " + A;
    }else if(longueurBC === longueurAB){
         sideNature = "an isosceles in " + B;
    }else{
        sideNature = "a scalene"
    }

    // angle nature
    if (angleA < 90 && angleB < 90 && angleC < 90 ){
        angleNature = "an acute"
    }
    if (angleA > 90 || angleB || 90 && angleC || 90  ){
        if (angleA > 90) {
            angleNature = "an obtuse in " + A + " (" + angleAarrondi + "°)";
        }else if (angleB > 90) {
        angleNature = "an obtuse in " + B + " (" + angleBarrondi + "°)";
        }else if (angleC > 90){
        angleNature = "an obtuse in " + C + " (" + angleCarrondi + "°)";
        }
    }
    if (angleA == 90.0 || angleB == 90.0 || angleC == 90.0){
         if (angleA ==  90) {
            angleNature = "a right in " + A ;
        }else if (angleB == 90) {
            angleNature = "a right in " + B;
        }else if (angleC ==  90){
            angleNature = "a right in " + C;
        }
    }

    answer = triangleName + " is " + sideNature + " and " + angleNature + " triangle.";
    console.error(triangleName);
    console.log(answer);
}