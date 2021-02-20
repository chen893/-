const offset = ele => {
  let result = {
    top: 0,
    left: 0
  }


  const getOffset = (node, init) => {
    if (node.nodeType !== 1) {
      return;
    }

    position = window.getComputedStyle(node)['position'];
    if (typeof (init) === 'undefined' && position === 'static') {
      getOffset(node.parentNode)
      return;
    }

    result.top = node.offsetTop + result.top - node.scrollTop;
    result.left = node.offsetLeft + result.left - node.scrollLeft;

    if (position === 'fixed') {
      return;
    }
    getOffset(node.parentNode)
  }
  if (window.getComputedStyle(ele)['display'] === 'none') {
    return result;
  }
  let position;

  getOffset(ele, true);

  return result;
}

