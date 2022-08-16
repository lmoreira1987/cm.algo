// Time: O(n+m) | Space: O(c)
export function generateDocument(characters: string, document: string) {
    const charactersArray = Array.from(characters);
    const documentArray = Array.from(document);

    const chars: {[key: string]: number} = {}

    for (const c of charactersArray) {
        if (!(c in chars))
            chars[c] = 0;
        chars[c] += 1;
    }

    for (const d of documentArray) {
        if (!(d in chars) || chars[d] === 0)
            return false
        chars[d] -= 1;
    }

    console.log(chars)
    return true;
}

const characters = "Bste!hetsi ogEAxpelrt x "; // extra x is possible
const document = "AlgoExpert is the Best!";

console.log(generateDocument(characters, document));
