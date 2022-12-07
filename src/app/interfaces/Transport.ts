export interface ApiTransport {
    errorCode:   string;
    resultFound: string;
    data:        Transport[];
}

export interface Transport {
    TransportCode: string;
    TransportName: string;
    CutOffTime:    string;
}
