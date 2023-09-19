document.addEventListener("DOMContentLoaded", function(event){ 
  let settings = {
    target: '.bvi-open',
    theme: "white",
    letterSpacing: "normal",
    lineHeight: "normal",
    reload: false,
    panelFixed: false,
    speech: false,
    panelHide: false,
    images: 'grayscale',
    builtElements: true,
  };
  new isvek.Bvi(settings)

  // Функция тогглер
  function bviAddingToogleClass(item) {
    let triggerClass = 'bvi-no-styles',
      currentItem = document.querySelector(item),
      currentItemHasClass = currentItem.classList.contains(triggerClass);
    if (currentItem) {
      if (currentItemHasClass) currentItem.classList.remove(triggerClass);
      else currentItem.classList.add(triggerClass);
    }
  };

  function iteratingArrayOfElementsToExclude(array) {
    array.forEach(element => {
      bviAddingToogleClass(element);
    });
  }

  // Листнер изменения класса у элемента
  function onClassChange(element, callback) {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          callback(mutation.target, mutation.target.getAttribute('class'));
        }
      });
    });
    observer.observe(element, { attributes: true, attributeFilter: ['class'] });
  }

  // Перечисление элементов,которым нужно добавить исключение в стилях применяемых плагином bvi
  // добавить .bvi-no-styles(оставляет оригинальные стили элемента).
  let arrayOfSelectors = [
    '.indexPage-block-nostyle',
    '.header .container'
  ];

  // Подвязываемся к изменениям боди
  let bodyCheck = document.querySelector('body');
  onClassChange(bodyCheck, (element, newClass) => {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  });

  // Включен ли режим для слабовидящих или нет
  let valueOfCookieBvi = isvek.getCookie('panelActive');
  if (valueOfCookieBvi) {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  }
});