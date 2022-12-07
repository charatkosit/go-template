export interface ApiShipTo {
    errorCode:   string;
    resultFound: string;
    data:        ShipTo[];
}

export interface ShipTo {
    ShipToName:    string;
    ShipToCode:    string;
    ShipToAddress: string;
    ShipToTaxID:   string;
    ShipToBranch:  string;
}
