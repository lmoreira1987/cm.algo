export function balancedBrackets(brackets: string) {
    const allBrackets = new Set();
    allBrackets.add("(");
    allBrackets.add("[");
    allBrackets.add("{");
    allBrackets.add(")");
    allBrackets.add("]");
    allBrackets.add("}");

    const openingBrackets = new Set();
    openingBrackets.add("(");
    openingBrackets.add("[");
    openingBrackets.add("{");

    const stack = new Array();

    for (let c of Array.from(brackets)) {
        if (!allBrackets.has(c)) 
            continue;

        if (stack.length === 0 && !openingBrackets.has(c))
            return false;

        if (openingBrackets.has(c))
            stack.push(c);
        else {
            const tempPop = stack.pop();

            if (c == ')' && tempPop == '(' ||
                c == ']' && tempPop == '[' ||
                c == '}' && tempPop == '{')
                continue

            return false;
        }
    }

    return stack.length == 0;
}

//const brackets = "([])()}(())()()";
const brackets = "(141[])(){waga}((51afaw))()hh()";

console.log(balancedBrackets(brackets));
