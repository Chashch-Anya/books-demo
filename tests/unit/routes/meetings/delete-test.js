import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | meetings/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:meetings/delete');
    assert.ok(route);
  });
});
