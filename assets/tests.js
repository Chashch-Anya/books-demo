'use strict';

define('ember-quickstart/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n17:52 - \'query\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-file.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-file.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-tags.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/report-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/report-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/report-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/report-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-item.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/book-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/book-create.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/book-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/book-detail.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/book-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/book-edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/meetings.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/report-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/report-create.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/speaker-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speaker-create.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/speaker-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speaker-detail.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/speaker-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speaker-edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-book.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('models/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('models/report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/report.js should pass ESLint\n\n');
  });

  QUnit.test('models/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/book-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/book-create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/book-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/book-detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/book-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/book-edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/meeting-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/meeting-create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/meeting-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/meeting-edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/meetings.js should pass ESLint\n\n');
  });

  QUnit.test('routes/report-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/report-detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/report-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/report-edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/reports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/reports.js should pass ESLint\n\n');
  });

  QUnit.test('routes/speaker-create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speaker-create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/speaker-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speaker-detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/speaker-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speaker-edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n5:20 - \'hash\' is defined but never used. (no-unused-vars)\n9:38 - \'method\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/book.js should pass ESLint\n\n17:50 - \'relationshipHash\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/report.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/speaker.js should pass ESLint\n\n17:50 - \'relationshipHash\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('services/data2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data2.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date-string.js should pass ESLint\n\n');
  });
});
define('ember-quickstart/tests/integration/components/book-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | book-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "uGOy+6PC",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "044e3rT8",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/book-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | book-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "2x52WfKr",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "XOz6EBsH",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/book-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | book-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "huLoIF+v",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "ZO9BQ0Fo",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/input-file-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input-file', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "HRHfMtVN",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-file\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "PSub7kSw",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-file\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/input-tag-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "uXTgJXdL",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-tag\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "8V2vwi81",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-tag\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/input-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "jx2CQ+gn",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "GnNXYKZM",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/meeting-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "1Tge71cH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+SgN9C3i",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/meeting-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | meeting-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "BYXbOdV8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "InWqEAmc",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/report-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | report-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "Uc7Rj+O8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"report-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "d3RmrA3o",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"report-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/report-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | report-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "8ai8/IYE",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"report-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+d1ybD2o",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"report-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/speaker-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | speaker-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "qcp+twW8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "TWXDckYV",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/speaker-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | speaker-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "hf2D2UaF",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "X4ATFbQC",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/components/speaker-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | speaker-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "d11ZINlI",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "BQCuVoME",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/helpers/get-book-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Helper | get-book', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "Oip3wl/i",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-book\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/helpers/get-speaker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Helper | get-speaker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "gCcE6r8t",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-speaker\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/helpers/get-speakers-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Helper | get-speakers', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "fhT44X6p",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-speakers\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/integration/helpers/het-book-name-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Helper | het-book-name', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "I4801UZQ",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"het-book-name\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('ember-quickstart/tests/test-data/server', ['json-server'], function (jsonServer) {
  'use strict';

  var server = jsonServer.create(); /* eslint-disable no-console */
  // eslint-disable-next-line no-undefconst jsonServer = require('json-server'), no-undef

  var router = jsonServer.router('./tests/test-data/db.json');
  var middlewares = jsonServer.defaults();

  // Set default middlewares (logger, static, cors and no-cache)
  server.use(middlewares);

  // To handle POST, PUT and PATCH you need to use a body-parser
  // You can use the one used by JSON Server
  server.use(jsonServer.bodyParser);

  function responseInterceptor(req, res, next) {
    var originalSend = res.send;

    res.send = function () {
      var body = arguments[0];

      if (req.method === 'DELETE') {
        var urlSegms = req.url.split('/');
        var idStr = urlSegms[urlSegms.length - 1];
        var id = parseInt(idStr);
        id = isNaN(id) ? idStr : id;

        var newBody = Object.assign({}, JSON.parse(body));
        newBody.id = id;
        arguments[0] = JSON.stringify(newBody);
      }

      originalSend.apply(res, arguments);
    };

    next();
  }

  server.use(responseInterceptor);

  // Use default router
  server.use(router);

  var port = 3000;
  server.listen(port, function () {
    console.log('JSON Server is running at port ' + port);
  });
});
define('ember-quickstart/tests/test-helper', ['ember-quickstart/app', 'ember-quickstart/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-quickstart/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/book-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/book-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-file-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-file-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-tag-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/het-book-name-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/het-book-name-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-data/server.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-data/server.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/input-tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/input-tag-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/report-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/report-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/reports-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/reports-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/reports/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/reports/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/reports/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/reports/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/reports/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/reports/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/reports/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/reports/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-list/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-list/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-list/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-list/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/book-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/book-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/book-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/book-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/book-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/book-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-list/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-list/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/createe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/createe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meet-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meeting-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meeting-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meeting-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meeting-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/report-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/report-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/report-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/report-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/reports-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/reports-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/reports/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/reports/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/reports/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/reports/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/reports/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/reports/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speaker-list/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speaker-list/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-list/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-list/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-string-test.js should pass ESLint\n\n');
  });
});
define('ember-quickstart/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('ember-quickstart/tests/unit/adapters/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:user');
      assert.ok(adapter);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-form-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-form');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-list');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/books/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books/create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/books/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books/detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/books/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books/edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/input-tag-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | input-tag', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:input-tag');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/meetings/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings/create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/meetings/delete-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings/delete', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings/delete');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/meetings/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings/detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/meetings/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings/edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/report-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | report-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:report-create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:report');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/reports-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | reports', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:reports');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/reports/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | reports/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:reports/create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/reports/delete-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | reports/delete', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:reports/delete');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/reports/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | reports/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:reports/detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/reports/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | reports/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:reports/edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-list');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-list/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-list/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-list/create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-list/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker-list/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker-list/detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speakers/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers/create');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speakers/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers/detail');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/controllers/speakers/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers/edit');
      assert.ok(controller);
    });
  });
});
define('ember-quickstart/tests/unit/models/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('book', {});
      });
      assert.ok(model);
    });
  });
});
define('ember-quickstart/tests/unit/models/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('meeting', {});
      });
      assert.ok(model);
    });
  });
});
define('ember-quickstart/tests/unit/models/report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('report', {});
      });
      assert.ok(model);
    });
  });
});
define('ember-quickstart/tests/unit/models/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('speaker', {});
      });
      assert.ok(model);
    });
  });
});
define('ember-quickstart/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/author-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/book-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | book-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book-create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/book-detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | book-detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book-detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/book-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | book-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book-edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/book-form-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | book-form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book-form');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books-list');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books-list/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books-list/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books-list/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books/createe-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/createe', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/createe');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/books/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/index');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meet-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meet', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meet');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meeting-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meeting-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting-create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meeting-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meeting-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting-edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meetings/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings/create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meetings/delete-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings/delete', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings/delete');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meetings/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/meetings/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings/edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/report-detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | report-detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:report-detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/report-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | report-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:report-edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/reports-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | reports', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:reports');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/reports/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | reports/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:reports/create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/reports/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | reports/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:reports/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/reports/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | reports/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:reports/edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speaker-create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker-create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker-create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speaker-detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker-detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker-detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speaker-edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker-edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker-edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speaker-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker-list');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speaker-list/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speaker-list/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker-list/index');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers-list');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers-list/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers-list/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers-list/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers-test-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers-test', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers-test');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers/create');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers/detail');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers/edit-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers/edit');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/routes/speakers/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers/index');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/tests/unit/serializers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('application', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/tests/unit/serializers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('book', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/tests/unit/serializers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('meeting');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('meeting', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/tests/unit/serializers/report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('report');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('report', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/tests/unit/serializers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('speaker', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('ember-quickstart/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define('ember-quickstart/tests/unit/services/data2-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data2', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data2');
      assert.ok(service);
    });
  });
});
define('ember-quickstart/tests/unit/transforms/date-string-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:date-string', 'Unit | Transform | date string', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:date-string');
      assert.ok(transform);
    });
  });
});
define('ember-quickstart/config/environment', [], function() {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
