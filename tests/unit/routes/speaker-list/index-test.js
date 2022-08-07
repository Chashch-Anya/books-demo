import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | speaker-list/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:speaker-list/index');
    assert.ok(route);
  });
});
