import Calculator from "../components/Calculator";
test("it renders correclty", () => {
    const component = Calculator;
    expect(component).toMatchSnapshot();
})