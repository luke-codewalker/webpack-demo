module.exports = function render(root, ...elts) {
  elts.forEach(elt => root.appendChild(elt));
  return root;
};
