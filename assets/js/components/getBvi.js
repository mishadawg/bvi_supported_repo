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
    '.header-main-page__logo-item-container',
    '.header__logo-item-container',
    '.header__logo-item-container .logo-picture',
    '.header-main-page__logo-item-container .logo-picture',
    '.banner__play',
    '.about__photo',
    '.inner-header-main-page__logo-container .main-logo',
    '.inner-header-main-page__info-container img',
    '.footer__icon-container img',
    '.footer__icon img',
    '.footer__site-map-elibary .footer__elibrary-icon',
    '.modal__photo',
    '.news-article__link',
    '.video-player__play-btn',
    '.video-player__play-btn img',
    '.accordion__header',
    '.checkbox-mask',
    '.radio-mask',
    '.documents-item',
    '.task-cards-item__about-status',
    '.media-player-btnPlay',
    '.media-player-btnPlay img',
  ];

  // Подвязываемся к изменениям боди
  let bodyCheck = $("body").onClassChange((el, newClass) => {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  });

  // Включен ли режим для слабовидящих или нет
  let valueOfCookieBvi = isvek.getCookie('panelActive');
  if (valueOfCookieBvi.length != 0) {
    iteratingArrayOfElementsToExclude(arrayOfSelectors);
  }
});