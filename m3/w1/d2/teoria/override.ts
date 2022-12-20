/* override-> la classe figlia ridefinisce il metodo della classe padre */



class PrinterClass {
    doPrint(): void {
        console.log("doPrint() from parent called...pomplimenti");
    }
}

class StringPrinter extends PrinterClass { 
    doPrint(): void { 
        super.doPrint();
        console.log("this is the child gnue gne");
    }
}

let printerPiccolo = new StringPrinter();

printerPiccolo.doPrint();