import Popover from '../Popover';

beforeAll(() => {
  document.body.innerHTML = '<div class="container"></div>';
});

test('should active class after click', () => {
  const container = document.querySelector('.container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const button = document.querySelector('.popover-button');
  const popover = document.querySelector('.popover');
  button.click();
  expect(popover.classList.contains('active')).toBeTruthy();
});

test('should non-active class after double-click', () => {
  const container = document.querySelector('.container');
  const widget = new Popover(container);
  widget.bindToDOM();
  const button = document.querySelector('.popover-button');
  const popover = document.querySelector('.popover');
  button.click();
  button.click();
  expect(popover.classList.contains('active')).toBeFalsy();
});