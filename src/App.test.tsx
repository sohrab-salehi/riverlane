import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Circuits from "./Circuits";

describe("<Circuits />", () => {
    test("Add button renders without issue", async () => {
        render(<Circuits />);
        const addButton = screen.getByRole("button", {
            name: /Add/i,
        });
        await waitFor(() => {
            expect(addButton).toBeInTheDocument();
        });
    });
    test("Gate number input renders without issue", async () => {
        render(<Circuits />);
        const gateNumberInput = screen.getByRole("spinbutton");
        await waitFor(() => {
            expect(gateNumberInput).toBeInTheDocument();
        });
    });
});
