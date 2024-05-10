class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValuesIterative = (root) => {
  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop(); // pop() removes last element in array and return it
    values.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);

  }
  return values;
}

const depthFirstValuesRecursive = (root) => {
  if (root === null) return [];

  const leftVal = depthFirstValuesRecursive(root.left);
  const rightVal = depthFirstValuesRecursive(root.right);

  return [root.val, ...leftVal, ...rightVal];
};

const breadthFirstValues = (root) => {
  if (root === null) return [];

  queue = [root];
  values = [];

  while (queue.length > 0) {
    const currentNode = queue.shift(); // shift() remove the first element and return it
    values.push(currentNode.val);

    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  return values;
}

const includeIterative = (root, target) => {
  if (root === null) return false;

  // const values = depthFirstValuesIterative(root);
  // const values = depthFirstValuesRecursive(root);
  const values = breadthFirstValues(root);

  for (let i = 0; i < values.length; i++) {
    if (target === values[i]) return true;
  }
  return false
}

const includeRecursive = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return includeRecursive(root.left, target) || includeRecursive(root.right, target);
}

const size = (root) => {
  if (root.length === 0) return 0;
  let size = 0;
  const values = depthFirstValuesRecursive(root);

  for (let i = 0; i <= values.length; i++) {
    size++;
  }
  return size;
}

const indexOf = (root, target) => {
  if (root === null) return -1;

  const values = breadthFirstValues(root);
  let start = 0;
  let end = size(root) - 1;

  while (start <= end) {
    const middle = Math.floor(start + end) / 2;

    if (target === values[middle]) return middle;
    if (target < values[middle]) end = middle - 1;
    else start = middle + 1;
  }
  return `Index out of bounds, range (0, ${end})`;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(`Depth First Search, (iterative): [${depthFirstValuesIterative(a)}]`);
console.log(`Depth First Search, (recursive): [${depthFirstValuesRecursive(a)}]`);
console.log(`Breadth search: [${breadthFirstValues(a)}]\n`);

console.log(`is tree include -> 'a', (iterative): ${includeIterative(a, 'a')}`);
console.log(`is tree include -> 'b', (iterative): ${includeIterative(a, 'b')}`);
console.log(`is tree include -> 'c', (iterative): ${includeIterative(a, 'c')}`);
console.log(`is tree include -> 'd', (iterative): ${includeIterative(a, 'd')}`);
console.log(`is tree include -> 'e', (iterative): ${includeIterative(a, 'e')}`);
console.log(`is tree include -> 'f', (iterative): ${includeIterative(a, 'f')}`);
console.log(`is tree include -> 'g', (iterative): ${includeIterative(a, 'g')}\n`);

console.log(`is tree include -> 'a', (recursive): ${includeRecursive(a, 'a')}`);
console.log(`is tree include -> 'b', (recursive): ${includeRecursive(a, 'b')}`);
console.log(`is tree include -> 'c', (recursive): ${includeRecursive(a, 'c')}`);
console.log(`is tree include -> 'd', (recursive): ${includeRecursive(a, 'd')}`);
console.log(`is tree include -> 'e', (recursive): ${includeRecursive(a, 'e')}`);
console.log(`is tree include -> 'f', (recursive): ${includeRecursive(a, 'f')}`);
console.log(`is tree include -> 'g', (recursive): ${includeRecursive(a, 'g')}\n`);

console.log(`index of -> 'a': ${indexOf(a, 'a')}`);
console.log(`index of -> 'b': ${indexOf(a, 'b')}`);
console.log(`index of -> 'c': ${indexOf(a, 'c')}`);
console.log(`index of -> 'd': ${indexOf(a, 'd')}`);
console.log(`index of -> 'e': ${indexOf(a, 'e')}`);
console.log(`index of -> 'f': ${indexOf(a, 'f')}`);
console.log(`index of -> 'g': ${indexOf(a, 'g')}`);

module.exports = {
  depthFirstValuesIterative,
  depthFirstValuesRecursive,
  breadthFirstValues,
  includeIterative,
  includeRecursive
};
