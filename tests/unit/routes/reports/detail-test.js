import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | reports/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:reports/detail');
    assert.ok(route);
  });
});
