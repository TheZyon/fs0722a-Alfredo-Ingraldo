//con i tipi letterali posso definire un set customizzati di VALORI possibili


type testResult = "passato" | "fallito" | "incompleto"; //dico che valori può assumere una variabole di tipo testResult

let risultatoDiMario: testResult;

risultatoDiMario = "passato"; //ok

let risultatoDiCarlina: testResult;

/* risultatoDiCarlina = "buttana"; //invalido perché non è tra i risultati */

type dado = 1 | 2 | 3 | 4 | 5 | 6;
let dadoTirato: dado;

dadoTirato = 1; //ok

/* dadoTirato = 7; //errore */

