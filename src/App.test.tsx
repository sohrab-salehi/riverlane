import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Circuits from "./Circuits";

global.matchMedia =
    global.matchMedia ||
    function temp() {
        return {
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    };

describe("Circuits component:", () => {
    test('"Add" button renders without issue', async () => {
        render(<Circuits />);
        const addButton = screen.getByRole("button", {
            name: /Add/i,
        });
        await waitFor(() => {
            expect(addButton).toBeInTheDocument();
        });
    });
    test('"GateNumber" input renders without issue', async () => {
        render(<Circuits />);
        const gateNumberInput = screen.getByRole("spinbutton");
        await waitFor(() => {
            expect(gateNumberInput).toBeInTheDocument();
            expect(gateNumberInput).toHaveAttribute("type", "number");
        });
    });
    test("Add new circuit successfully", async () => {
        render(<Circuits />);
        const addButton = screen.getByRole("button", {
            name: /Add/i,
        });
        const gateNumberInput = screen.getByRole("spinbutton");
        await userEvent.type(gateNumberInput, "3");
        await userEvent.click(addButton);
        const circuits = await screen.findAllByRole("menuitem");
        expect(circuits.length).toBe(1);
    });
});
