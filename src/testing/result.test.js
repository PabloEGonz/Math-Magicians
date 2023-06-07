import Result from "../components/Result";

test("it renders correclty", () => {
    const component = Result;
    expect(component).toMatchSnapshot();
})