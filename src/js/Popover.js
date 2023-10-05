export default class Popover {
  constructor(container) {
    this.container = container;
  }

  static get enteringMarkup() {
    return `
      <div class="container_wrapper">
        <button class="popover-button">
          Click to toggle popover
        </button>
        <div class="popover">
          <div class="popover-title">
            Popover title
          </div>
          <div class="popover-text">
            And here's some amazing content. It's very engaging. Right?
          </div>
        </div>
      </div>`;
  }

  static get popoverSelector() {
    return '.popover';
  }

  static get buttonSelector() {
    return '.popover-button';
  }

  bindToDOM() {
    this.container.innerHTML = this.constructor.enteringMarkup;
    const button = this.container.querySelector(this.constructor.buttonSelector);
    button.addEventListener('click', (e) => this.buttonToggle(e));
  }

  buttonToggle(e) {
    e.preventDefault();
    const popover = this.container.querySelector(this.constructor.popoverSelector);
    if (popover.classList.contains('active')) {
      popover.classList.remove('active');
    } else {
      popover.classList.add('active');
    }
  }
}