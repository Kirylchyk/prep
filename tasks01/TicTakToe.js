//liner X O game (tic tak toe)
//built-in method
//line.include(N) && !line.include(N);

function doThat (line){

    let O = "OOO";
    let X = "XXX";

    if (line.includes(O) && line.includes(X)){
        return true;
    }
    else if (line.includes(O)) {
        return "O wins";
    }
    else if (line.includes(X)){
        return "X wins";
    }
    else {
        return false;
    }


}

line = "OXXOOOXOX";

console.log(doThat(line));