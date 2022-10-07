import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Circuits from "./Circuits";
import App from "./App";

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

describe("Routing:", () => {
    test("Change active navbar item correctly", async () => {
        render(<App />);
        const navbarItem = screen.getByRole("menuitem", {
            name: /circuits/i,
        });
        await userEvent.click(navbarItem);
        const classes = navbarItem.getAttribute("class")?.split(" ");
        expect(classes).toContain("ant-menu-item-active");
    });
    test("Change breadcrumb element after route change", async () => {
        render(<App />);
        const navbarItem = screen.getByRole("link", {
            name: /circuits/i,
        });
        const list = screen.getByRole("list");
        let breadcrumb = within(list).queryByText(/circuits/i);
        expect(breadcrumb).toBeNull();
        await userEvent.click(navbarItem);
        breadcrumb = within(list).getByText(/circuits/i);
        expect(breadcrumb).toBeInTheDocument();
    });
    test("Change content after route change", async () => {
        render(<App />);
        const menuitem = screen.getByRole("menuitem", {
            name: /home/i,
        });
        const navbarItem = within(menuitem).getByRole("link", {
            name: /home/i,
        });
        const circuitPageInput = screen.getByRole("spinbutton");
        expect(circuitPageInput).toBeInTheDocument();
        await userEvent.click(navbarItem);
        const homePageHeader = screen.getByText(/about/i);
        expect(homePageHeader).toBeInTheDocument();
    });
});
