import { A as emberArray } from '@ember/array';
import EmberObject, { set, get } from '@ember/object';
import { run } from '@ember/runloop';

export default EmberObject.extend({
  unknownProperty(property) {
    run.once(() => { set(this, property, emberArray()); });
    return emberArray();
  }
});
