"use strict";
exports.__esModule = true;
exports.balancedBrackets = void 0;
function balancedBrackets(brackets) {
    var allBrackets = new Set();
    allBrackets.add("(");
    allBrackets.add("[");
    allBrackets.add("{");
    allBrackets.add(")");
    allBrackets.add("]");
    allBrackets.add("}");
    var openingBrackets = new Set();
    openingBrackets.add("(");
    openingBrackets.add("[");
    openingBrackets.add("{");
    var stack = new Array();
    for (var _i = 0, _a = Array.from(brackets); _i < _a.length; _i++) {
        var c = _a[_i];
        if (!allBrackets.has(c))
            continue;
        if (stack.length === 0 && !openingBrackets.has(c))
            return false;
        if (openingBrackets.has(c))
            stack.push(c);
        else {
            var tempPop = stack.pop();
            if (c == ')' && tempPop == '(' ||
                c == ']' && tempPop == '[' ||
                c == '}' && tempPop == '{')
                continue;
            return false;
        }
    }
    return stack.length == 0;
}
exports.balancedBrackets = balancedBrackets;
//const brackets = "([])()}(())()()";
var brackets = "(141[])(){waga}((51afaw))()hh()";
console.log(balancedBrackets(brackets));
