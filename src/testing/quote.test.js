import Quote from '../components/quote';

test('it renders correclty', () => {
  const component = Quote;
  expect(component).toMatchSnapshot();
});
