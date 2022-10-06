import { iCreateCircuitResponse } from "../types/requests";
import circuitServer from "./server";

export const createCircuit: (
    gateNumber: number
) => Promise<iCreateCircuitResponse> = (gateNumber) => {
    const result = circuitServer
        .post("/circuit", { gateNumber })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

export default createCircuit;
