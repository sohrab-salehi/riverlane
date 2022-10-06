import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import MainLayout from "./MainLayout";

describe("<MainLayout />", () => {
    test("Add button renders without issue", async () => {
        render(<MainLayout />);
        const addButton = screen.getByRole("button", {
            name: /Add/i,
        });
        await waitFor(() => {
            expect(addButton).toBeInTheDocument();
        });
    });
    test("Gate number input renders without issue", async () => {
        render(<MainLayout />);
        const gateNumberInput = screen.getByRole("spinbutton");
        await waitFor(() => {
            expect(gateNumberInput).toBeInTheDocument();
        });
    });
});
