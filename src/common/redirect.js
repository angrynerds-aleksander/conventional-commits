export const redirect = (keyCode, nextPage, previousPage) => {
  let link;

  if (keyCode === 39) {
    if (nextPage !== null) {
      link = document.querySelector(`a[href='/${nextPage}/']`);
    }
  } else if (keyCode === 37) {
    if (previousPage !== null) {
      link = document.querySelector(`a[href='/${previousPage}/']`);
    }
  } else if (keyCode === 48) {
    link = document.querySelector("a[href='/0/']");
  } else if (keyCode === 49) {
    link = document.querySelector("a[href='/1/']");
  } else if (keyCode === 50) {
    link = document.querySelector("a[href='/2/']");
  } else if (keyCode === 51) {
    link = document.querySelector("a[href='/3/']");
  } else if (keyCode === 52) {
    link = document.querySelector("a[href='/4/']");
  } else if (keyCode === 53) {
    link = document.querySelector("a[href='/5/']");
  } else if (keyCode === 54) {
    link = document.querySelector("a[href='/6/']");
  }

  if (link) {
    const rect = link.getBoundingClientRect();
    const event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true,
      'clientX': rect.x + rect.width / 2,
      'clientY': rect.y + rect.height / 2
    });

    link.dispatchEvent(event);
  }
}