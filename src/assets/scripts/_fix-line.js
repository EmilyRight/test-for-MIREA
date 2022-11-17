const lineParent = document.querySelector('.actions');
const line = document.querySelector('.line');
const container = document.querySelector('.container');

const goalsLine = document.querySelector('.goals__line');
const goalsLineContainer = document.querySelector('.goals');
const lilParent = document.querySelector('.number-line');

function fixLine() {
  const parentWidth = container.offsetWidth;
  const parentHeight = container.offsetHeight;
  const blockHeight = lineParent.offsetHeight;

  line.style.height = `${0.90 * blockHeight}px`;
  line.style.top = `${parentHeight}px`;
  line.style.left = `${0.37 * parentWidth}px`;
  line.style.width = `${0.6 * parentWidth}px`;
}
function fixGoalsLine() {
  const parentWidth = goalsLineContainer.offsetWidth;
  const parentHeight = goalsLineContainer.offsetHeight;
  const lilParentHeight = lilParent.offsetHeight;
  const lilParentWigth = lilParent.offsetWidth;
  goalsLine.style.width = `${0.47 * parentWidth}px`;
  goalsLine.style.height = `${0.78 * parentHeight}px`;
  goalsLine.style.top = `${lilParentHeight / 2}px`;
  goalsLine.style.left = `${-2 * lilParentWigth + 20}px`;
}

window.addEventListener('load', (e) => {
  fixLine();
  fixGoalsLine();
});
window.addEventListener('resize', (e) => {
  fixLine();
  fixGoalsLine();
});
