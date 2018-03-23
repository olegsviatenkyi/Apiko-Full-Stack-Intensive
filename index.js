const render = (app, element) => {
  const html = app.outerHTML;
  element.innerHTML = html;
}
const createElement = (elementType, props = {}, childrens = null) => {
  const element = document.createElement(elementType);
  const keys =  Object.keys(props === null ? {} : props);

  if (keys.length) {
    keys.forEach(key => {
      if(key == 'ref'){props.ref(element)}
      else if(key == 'style'){
        if(typeof props[key] === 'string') {element[key] = props[key]} 
        else {Object.keys(props[key]).forEach(style => element.style[style] = props.style[style])}
      }
      else element[key] = props[key];
    });
  }

  const append = item => typeof item === 'string'? element.appendChild(document.createTextNode(item)): element.appendChild(item);

  if (childrens) {
    [].concat(childrens).forEach(item => append(item));
  }
  return element;
}

const React = {
  createElement,
  render,
}

const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);

React.render(
  app,
  document.getElementById('root'),
);
