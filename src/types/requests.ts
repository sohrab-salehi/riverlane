export interface iCreateCircuitResponse {
    data: {
        circuit: ("X" | "Y" | "Z" | "H" | "S" | "R" | "T" | "M")[];
    };
    status: number;
    statusText: string;
}
