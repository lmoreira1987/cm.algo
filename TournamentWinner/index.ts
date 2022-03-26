export function tournamentWinner(competitions: string[][], results: number[]) {
    let teamsMap = new Map<string, number>();
    const pointers = 3

    for (let i: number = 0; i < competitions.length; i++) {
        if (teamsMap.get(competitions[i][0]) === undefined)
            teamsMap.set(competitions[i][0], 0);
        
        if (teamsMap.get(competitions[i][1]) === undefined)
            teamsMap.set(competitions[i][1], 0);	

        let matchWinnerResult = results[i] === 0 ? 1 : 0;
        let matchWinner = competitions[i][matchWinnerResult];
        teamsMap.set(matchWinner, teamsMap.get(matchWinner)! + pointers); // ! means get the value once it is not undefined
	}

    var teamsMapSorted = new Map([...teamsMap.entries()].sort((a, b) => b[1] - a[1]));

    const champion = [...teamsMapSorted][0][0];
    
    return champion;
}

//var competitions = [["html", "c#"], ["c#", "python"], ["python", "html"], ["html", "c#"],];
var competitions = [["html", "c#"], ["c#", "python"], ["python", "html"]];
let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));