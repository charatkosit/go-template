export interface MyPart {
    code:        number;
    message:     string;
    resultFound: number;
    data:        PartListA[];
}

export interface PartListA {
    id:          number;
    Brand:       string;
    ItemCode:    string;
    ItemCodeNew: string;
    ItemName:    string;
    Model:       string;
    RetailPrice: number;
}
