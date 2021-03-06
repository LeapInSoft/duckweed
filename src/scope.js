const Empty = ['Scope.Empty'];

function create(parent, items) {
  return ['Scope.Nonempty', items, parent];
}

function lookup(scope, key) {
  if (scope[0] === 'Scope.Empty') {
    throw new Error('no such variable ' + key);
  }
  if (scope[0] !== 'Scope.Nonempty') {
    throw new Error('not a valid scope');
  }

  if (scope[1].hasOwnProperty(key)) {
    return scope[1][key];
  }
  return lookup(scope[2], key);
}

function assign(scope, key, value) {
  if (scope[0] !== 'Scope.Nonempty') {
    throw new Error('not a valid scope to assign to');
  }
  scope[1][key] = value;
}

exports.assign = assign;
exports.lookup = lookup;
exports.create = create;
exports.Empty = Empty;
