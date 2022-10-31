export interface GoPartApi {
    errorCode:   string;
    resultFound: string;
    data:        PartList[];
}

export interface PartList {
    Brand: string;
    ItemName: string;
    Barcode: string;
    BarcodeNew: string;
    Model: string;
    Price: string;
  }