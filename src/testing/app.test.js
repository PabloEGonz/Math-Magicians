import Home from "../components/Home";
import Calculator from "../components/Calculator";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe('Test if the 3 sections render', () => {
    test('Renders Calculator', () => {
        render(<Calculator />);
        expect(screen.findByText(/let's math/)).toBeInTheDocument;
    })

    test('Renders Home page', () => {
        render(<Home />);
        expect(screen.findByText(/welcome/)).toBeInTheDocument;
    })
    test('Renders Home page', () => {
        render(<App />);
        expect(screen.findByText(/welcome/)).toBeInTheDocument;
    })
})
