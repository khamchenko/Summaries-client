import 'babel-polyfill';
import './style.css';

class Component {
  async addElement(container) {
    const element = await this.getEl();

    element.innerHTML = ['Summaries', 'React', 'App'].join(' ');
    element.classList.add('test');

    container.appendChild(element);
  }

  getEl() {
    return new Promise((res) => {
      setTimeout(() => res(document.createElement('div')), 2000);
    });
  }
}

const appEl = document.querySelector('#app');
const component = new Component();

component.addElement(appEl);
