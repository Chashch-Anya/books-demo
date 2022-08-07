import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | speakers-list/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:speakers-list/detail');
    assert.ok(route);
  });
});
