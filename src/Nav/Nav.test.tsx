import React from "react";
import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Nav from "./Nav";
import userEvent from "@testing-library/user-event";

describe('Nav', () => {
    it('should render the Nav component', () => {
        render(
            <MemoryRouter>
              <Nav />
            </MemoryRouter>
        )
        expect(screen.getByRole('link', { name: /game slueth/i })).toBeInTheDocument();
    })
})