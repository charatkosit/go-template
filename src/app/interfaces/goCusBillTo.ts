export interface GoCusBillTo {
    errorCode:   string;
    resultFound: string;
    data:        CusBillTo[];
}

export interface CusBillTo {
    BillToName:    string;
    BillToCode:    string;
    BillToAddress: string;
    BillToTaxID:   string;
    BillToBranch:  string;
}
