import Home from '../components/Home';

test('it renders correclty', () => {
  const component = Home;
  expect(component).toMatchSnapshot();
});
