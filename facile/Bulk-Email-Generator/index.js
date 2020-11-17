/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var i = 0;
for (let i = 0; i < N; i++) {
    const line = readline();
    start = line.indexOf('(');
    end = line.indexOf(')');
    choise = line.substring(start+1, end);
    console.error(start);
    console.error(end);
    console.error(line);
    console.error(choise);

    start_phrase = line.slice(0, start);
    second_phrase = line.slice(end+1);
    console.error(start_phrase);
    console.error(second_phrase);
    var tab = choise.split("|");
    console.error('tab ' +tab)
    for(j = 0; j < tab.length; j++){
        if (i == j )
        {
            console.log(start_phrase + tab[j] + second_phrase);
        }
}

}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');