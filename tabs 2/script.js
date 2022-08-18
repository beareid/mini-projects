const tags = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => tabContect.classList.remove('active'));
    target.classList.add('active');
  })
});