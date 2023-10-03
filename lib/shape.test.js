const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle('#FF5733');
    const expected = '<path d="M 0 -43 L -50 43 L 50 43 Z fill="#FF5733" />';
    expect(triangle.render()).toEqual(expected);
  });

  test('Circle should render correctly', () => {
    const circle = new Circle("#FF5733");
    const expected = '<circle cx="0" cy="0" r="50" fill="#FF5733"/>';
    expect(circle.render()).toEqual(expected);
  });

  test('Square should render correctly', () => {
    const square = new Square("#FF5733");
    const expected = '<rect x="-50" y="-50" width="100" height="100 fill="#FF5733" />';
    expect(square.render()).toEqual(expected);
  });
});