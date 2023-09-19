$(document).ready(function () {
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
    if ($(item).length) {
      if ($(item).hasClass('bvi-no-styles')) {
        $(item).removeClass('bvi-no-styles');
      } else {
        $(item).addClass('bvi-no-styles');
      }
    }
  };

  function iteratingArrayOfElementsToExclude(array) {
    array.forEach(element => {
      bviAddingToogleClass(element);
    });
  }

  // Листнер изменения класса у элемента
  $.fn.onClassChange = function (cb) {
    return $(this).each((_, el) => {
      new MutationObserver(mutations => {
        mutations.forEach(mutation => cb && cb(mutation.target, $(mutation.target).prop(mutation.attributeName)));
      })
        .observe(el, {
          attributes: true,
          attributeFilter: ['class']
        });
    });
  };

  // Перечисление элементов,которым нужно добавить исключение в стилях применяемых плагином bvi
  // добавить .bvi-no-styles(оставляет оригинальные стили элемента).
  let arrayOfSelectors = [
    '.header__logo-item-container',
  ];

  // Подвязываемся к изменениям боди
  let bodyCheck = $("body").onClassChange((el, newClass) => {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  });

  // Включен ли режим для слабовидящих или нет
  let valueOfCookieBvi = isvek.getCookie('panelActive');
  if (valueOfCookieBvi) {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  }
});