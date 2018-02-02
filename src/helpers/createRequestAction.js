import keyMirror from 'keymirror';

const TYPES = keyMirror({
  REQUEST: null,
  SUCCESS: null,
  FAILURE: null,
});

function ActionTypes(baseType) {
  this[TYPES.REQUEST] = `${baseType}-${TYPES.REQUEST}`;
  this[TYPES.SUCCESS] = `${baseType}-${TYPES.SUCCESS}`;
  this[TYPES.FAILURE] = `${baseType}-${TYPES.FAILURE}`;
}

ActionTypes.prototype.getValues = function () {
  return Object.values(this);
};

export default base => new ActionTypes(base);
