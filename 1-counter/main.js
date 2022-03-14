function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Could not find selection - check if ${selection} exists`
    );
}

class Counter {
    constructor(element) {
        this.value = 0;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.plus');
        this.decreaseBtn = element.querySelector('.minus');
        this.valueDOM = element.querySelector('#value');
        this.valueDOM.textContent = this.value;

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }
    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const myCounter = new Counter(getElement('#container'));