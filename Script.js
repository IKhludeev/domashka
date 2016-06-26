var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
        if (FlagNewNum)
        {
            Fcalc.line.value = Num;
            FlagNewNum = false;
        }  
        else
        {
            if (Fcalc.line.value == "0")
                Fcalc.line.value = Num;
            else
                Fcalc.line.value += Num;
        }
}
function Operation (Op) {
        var line = Fcalc.line.value;
        if (FlagNewNum && PendingOp != "=")
        {
            Fcalc.line.value = Currents;
        }
        else
        {
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Currents += parseFloat(line);
            else if ( '-' == PendingOp )
                Currents -= parseFloat(line);
            else if ( '/' == PendingOp )
                Currents /= parseFloat(line);
            else if ( '*' == PendingOp )
                Currents *= parseFloat(line);
            else
                Currents = parseFloat(line);
            Fcalc.line.value = Currents;
            PendingOp = Op;
        }      
}
function Clear () {
        Fcalc.line.value = "";
        FlagNewNum = true;
}
function Point () {
        var curline = Fcalc.line.value;
        if (FlagNewNum)
        {
            curline = "0.";
            FlagNewNum = false;
        }
        else
        {
            if (curline.indexOf(".") == -1)
                curline += ".";
        }
        Fcalc.line.value = curline;
}
function Neg () {
        Fcalc.line.value =
        parseFloat(Fcalc.line.value) * -1;
}
function addNumber (number) {
    var inp = document.getElementById("line");
    inp.value = inp.value + number;
}