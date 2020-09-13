import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | laptop/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:laptop/index');
    assert.ok(route);
  });
});
