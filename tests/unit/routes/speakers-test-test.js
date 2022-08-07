import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | speakers-test', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:speakers-test');
    assert.ok(route);
  });
});
