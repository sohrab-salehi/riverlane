import { iCreateCircuitResponse } from "../types/requests";
import circuitServer from "./server";

export const createCircuit: (
    gateNumber: number | null
) => Promise<iCreateCircuitResponse> = (gateNumber) => {
    const result = circuitServer
        .post("/circuit", { gateNumber })
        .then((response) => {
            return response;
        });
    return result;
};

export default createCircuit;
