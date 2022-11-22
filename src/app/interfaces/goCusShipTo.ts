export interface GoCusShipTo {
    errorCode:   string;
    resultFound: string;
    data:        CusShipTo[];
}

export interface CusShipTo {
    ShipToName:    string;
    ShipToCode:    string;
    ShipToAddress: string;
    ShipToTaxID:   string;
    ShipToBranch:  string;
}