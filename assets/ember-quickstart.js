"use strict";



define('ember-quickstart/adapters/application', ['exports', 'ember-data', 'ember-quickstart/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    // host: "http://localhost:3000",
    host: _environment.default.backendURL,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('headers', {
        'Content-Type': 'application/json'
      });
    },
    buildURL: function buildURL(modelName, id, snapshot, requestType, query) {
      var url = this._super.apply(this, arguments);

      if (modelName === 'meeting' && requestType === 'findAll') {
        url += '?_embed=reports';
      }

      if (modelName === "meeting" && requestType === "findRecord" && id) {
        url += "?_embed=reports";
      }

      if (modelName === 'meeting' && requestType === 'query') {
        url += '?_embed=reports';
      }
      return url;
    }
  });
});
define('ember-quickstart/app', ['exports', 'ember-quickstart/resolver', 'ember-load-initializers', 'ember-quickstart/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-quickstart/components/book-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      sumbitForm: function sumbitForm(e) {
        e.preventDefault();
        this.onsubmit({
          id: this.get('bookId'),
          name: this.get('name'),
          author: this.get('author'),
          pageCount: this.get('pageCount'),
          description: this.get('description')
        });
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        bookId: this.get('book.id') ? this.get('book.id') : undefined,
        name: this.get('book.name'),
        author: this.get('book.author'),
        pageCount: this.get('book.pageCount'),
        description: this.get('book.description')
      });
    }
  });
});
define('ember-quickstart/components/book-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Component.extend({
    init: function init() {
      this._super.apply(this, arguments);
    },


    actions: {
      deleteBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return book.destroyRecord();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteBook(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteBook;
      }()
    }
  });
});
define('ember-quickstart/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('ember-quickstart/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-quickstart/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-quickstart/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-quickstart/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('ember-quickstart/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ember-quickstart/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-quickstart/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ember-quickstart/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('ember-quickstart/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('ember-quickstart/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-quickstart/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-quickstart/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ember-quickstart/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-quickstart/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('ember-quickstart/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ember-quickstart/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ember-quickstart/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-quickstart/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('ember-quickstart/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-quickstart/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-quickstart/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('ember-quickstart/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-quickstart/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-quickstart/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ember-quickstart/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-quickstart/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ember-quickstart/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-quickstart/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ember-quickstart/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('ember-quickstart/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ember-quickstart/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('ember-quickstart/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ember-quickstart/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-quickstart/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-quickstart/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('ember-quickstart/components/input-file', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isFileChoosen: Ember.computed('uploadData', function () {
      return this.get('uploadData') && this.get('uploadData').files.length;
    }),

    ifRemoveButtonDisabled: Ember.computed('isFileChoosen', function () {
      return !this.get('isFileChoosen');
    }),

    fileName: Ember.computed('isFileChoosen', function () {
      return this.get('isFileChoosen') ? this.get('uploadData').files[0].name : 'Выберите файл';
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var onFileAdd = function onFileAdd(e, uploadData) {
        _this.uploadDataChanged(uploadData);
      };

      if (!this.$('.custom-file-input').fileupload('instance')) {
        this.$('.custom-file-input').fileupload({
          autoUpload: false,
          dataType: 'json',
          maxNumberOfFiles: 1,
          singleFileUploads: true,
          dropZone: null,
          add: onFileAdd
        });
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.$('.custom-file-input').fileupload('instance')) {
        this.$('.custom-file-input').fileupload('destroy');
      }
    },


    actions: {
      removeFile: function removeFile() {
        Ember.set(this, 'uploadData', null);
      }
    }
  });
});
define('ember-quickstart/components/input-tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var el = this.$();

      Ember.set(this, 'addTag', function (e) {
        _this.tagAdded(e.item);
      });

      Ember.set(this, 'removeTag', function (e) {
        _this.tagRemoved(e.item);
      });

      el.on('itemAdded', this.addTag);
      el.on('itemRemoved', this.removeTag);
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var tags = Ember.get(this, 'tags');
      (true && !(Ember.typeOf(tags) === 'array') && Ember.assert('Passed tags must be an array', Ember.typeOf(tags) === 'array'));

      Ember.set(this, '_tags', [].concat(_toConsumableArray(tags)));
    },
    didRender: function didRender() {
      var arraysAreEqual = function arraysAreEqual(arr1, arr2) {
        arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
        return Ember.$(arr1).not(arr2).length === 0 && Ember.$(arr2).not(arr1).length === 0;
      };

      var el = this.$();

      var currentValues = el.tagsinput('items');
      var tags = Ember.get(this, '_tags');

      if (!arraysAreEqual(tags, currentValues)) {
        el.tagsinput('removeAll');
        tags.forEach(function (tag) {
          el.tagsinput('add', tag);
        });
      }
    },
    tagAdded: function tagAdded(newTag) {
      Ember.get(this, '_tags').push(newTag);
      this.get('onChange')(this._tags);
    },
    tagRemoved: function tagRemoved(tag) {
      var tagIndex = Ember.get(this, '_tags').indexOf(tag);
      if (tagIndex > -1) {
        var part1 = Ember.get(this, '_tags').slice(0, tagIndex);
        var part2 = Ember.get(this, '_tags').slice(tagIndex + 1);
        Ember.set(this, '_tags', [].concat(_toConsumableArray(part1), _toConsumableArray(part2)));
        this.get('onChange')(this._tags);
      }
    },
    willDestroyElement: function willDestroyElement() {
      var el = this.$();
      el.off('itemAdded', this.addTag);
      el.off('itemRemoved', this.removeTag);
    }
  });
});
define('ember-quickstart/components/meeting-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
      submitForm: function submitForm(e) {
        e.preventDefault();

        this.onsubmit({
          meetDate: this.get('meetDate')
        });
      },
      didReceiveAttrs: function didReceiveAttrs() {
        this._super.apply(this, arguments);
        this.setProperties({
          meetDate: this.get('meeting.meetDate')
        });
      }
    }
  });
});
define('ember-quickstart/components/meeting-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        init: function init() {
            this._super.apply(this, arguments);
        }
    });
});
define('ember-quickstart/components/report-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
      submitForm: function submitForm(e) {
        e.preventDefault();

        this.onsubmit({
          reportDate: this.get('meeting.meetDate'),
          bookMark: this.get('bookMark'),
          presentation: this.get('presentation'),
          video: this.get('video'),
          review: this.get('review'),
          speaker: this.get('speaker'),
          book: this.get('book'),
          meeting: this.get('meeting')
        });
      },
      searchSpeaker: function searchSpeaker(query) {
        return this.get('store').query('speaker', { q: query });
      },
      searchBook: function searchBook(query) {
        return this.get('store').query('book', { q: query });
      },
      didReceiveAttrs: function didReceiveAttrs() {
        this._super.apply(this, arguments);
        this.setProperties({
          reportDate: this.get('report.meeting.meetDate'),
          bookMark: this.get('report.bookMark'),
          presentation: this.get('report.presentation'),
          video: this.get('report.video'),
          review: this.get('report.review'),
          speaker: this.get('report.speaker'),
          book: this.get('report.book'),
          meeting: this.get('report.meeting')
        });
      }
    }
  });
});
define('ember-quickstart/components/report-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        init: function init() {
            this._super.apply(this, arguments);
        }
    });
});
define('ember-quickstart/components/speaker-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      sumbitForm: function sumbitForm(e) {
        e.preventDefault();
        this.onsubmit({
          id: this.get('speakerId'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          patronymic: this.get('patronymic')
        });
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        speakerId: this.get('speaker.id') ? this.get('speaker.id') : undefined,
        firstName: this.get('speaker.firstName'),
        lastName: this.get('speaker.lastName'),
        patronymic: this.get('speaker.patronymic')
      });
    }
  });
});
define('ember-quickstart/components/speaker-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Component.extend({
        init: function init() {
            this._super.apply(this, arguments);
        },


        actions: {
            deletespeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this.destroyspeaker(speaker);

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deletespeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return deletespeaker;
            }()
        }
    });
});
define('ember-quickstart/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-quickstart/controllers/book-create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    actions: {
      saveBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
          var newBook;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  newBook = this.get("store").createRecord('book', book);

                  newBook.serialize();
                  _context.next = 5;
                  return newBook.save();

                case 5:

                  this.transitionToRoute('books');
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  this.send('error', new Error('Connection failed'));

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        function saveBook(_x) {
          return _ref.apply(this, arguments);
        }

        return saveBook;
      }()
    }
  });
});
define('ember-quickstart/controllers/book-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    actions: {
      deleteBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return book.destroyRecord();

                case 3:
                  this.transitionToRoute('books');
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](0);

                  this.send('error', new Error('Connection failed'));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 6]]);
        }));

        function deleteBook(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteBook;
      }()
    }
  });
});
define('ember-quickstart/controllers/book-edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define("ember-quickstart/controllers/books", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        queryParams: ["search", "tags_search"],
        search: '',
        tags_search: '',

        actions: {
            deleteBook: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return book.destroyRecord();

                                case 2:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteBook(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteBook;
            }()
        }
    });
});
define('ember-quickstart/controllers/meetings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PER_PAGE = exports.PER_PAGE = 2;

  exports.default = Ember.Controller.extend({
    queryParams: ['page', 'speaker', 'book', 'date'],
    page: 1,
    speaker: '',
    book: '',
    date: '',

    pages: Ember.computed('model.meetings.meta.total', function () {
      var total = Number(this.get('model.meetings.meta.total'));
      if (Number.isNaN(total) || total <= 0) {
        return [];
      }

      return new Array(Math.ceil(total / PER_PAGE)).fill().map(function (value, index) {
        return index + 1;
      });
    }),

    selectedBook: Ember.computed("book", function () {
      var book = this.get("book");
      return book ? this.get("model.books").findBy("id", book) : null;
    }),

    selectedDate: Ember.computed("date", function () {
      var date = this.get("date");
      return date ? new Date(date) : "";
    }),

    selectedSpeaker: Ember.computed('speaker', function () {
      var speaker = this.get('speaker');

      return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
    }),

    actions: {
      changeBook: function changeBook(book) {
        this.set("book", book ? book.get("id") : "");
      },
      changeDate: function changeDate(date) {
        this.set("date", date.toISOString());
      },
      changeSpeaker: function changeSpeaker(speaker) {
        this.set("speaker", speaker ? speaker.get("id") : "");
      }
    }
  });
});
define('ember-quickstart/controllers/report-create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('ember-quickstart/controllers/speaker-create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    actions: {
      saveSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var newSpeaker;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  newSpeaker = this.get("store").createRecord('speaker', speaker);

                  newSpeaker.serialize();
                  _context.next = 5;
                  return newSpeaker.save();

                case 5:

                  this.transitionToRoute('speakers');
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  this.send('error', new Error('Connection failed'));

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        function saveSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return saveSpeaker;
      }()
    }
  });
});
define('ember-quickstart/controllers/speaker-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  exports.default = Ember.Controller.extend({
    actions: {
      deleteSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return speaker.destroyRecord();

                case 3:

                  this.transitionToRoute('speakers');
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](0);

                  this.send('error', new Error('Connection failed'));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 6]]);
        }));

        function deleteSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteSpeaker;
      }()
    }
  });
});
define('ember-quickstart/controllers/speaker-edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        actions: {
            saveSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    this.get('model').setProperties(speaker);
                                    _context.next = 4;
                                    return this.get('model').save();

                                case 4:

                                    this.transitionToRoute('speakers');
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.prev = 7;
                                    _context.t0 = _context['catch'](0);

                                    this.send('error', new Error('Connection failed'));

                                case 10:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 7]]);
                }));

                function saveSpeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return saveSpeaker;
            }()
        }
    });
});
define('ember-quickstart/controllers/speakers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    exports.default = Ember.Controller.extend({
        queryParams: ["search"],
        search: '',

        actions: {
            deleteSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return speaker.destroyRecord();

                                case 2:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteSpeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return deleteSpeaker;
            }()
        }
    });
});
define('ember-quickstart/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('ember-quickstart/helpers/app-version', ['exports', 'ember-quickstart/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-quickstart/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('ember-quickstart/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('ember-quickstart/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('ember-quickstart/helpers/get-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBook = getBook;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function getBook(params /*, hash*/) {
    var _params = _slicedToArray(params, 2),
        name = _params[0],
        author = _params[1];

    return name + ' ' + author;
  }

  exports.default = Ember.Helper.helper(getBook);
});
define('ember-quickstart/helpers/get-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSpeaker = getSpeaker;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function getSpeaker(params /*, hash*/) {
    var _params = _slicedToArray(params, 2),
        firstName = _params[0],
        lastName = _params[1];

    return firstName + ' ' + lastName;
  }

  exports.default = Ember.Helper.helper(getSpeaker);
});
define('ember-quickstart/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('ember-quickstart/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('ember-quickstart/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('ember-quickstart/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('ember-quickstart/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-quickstart/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-quickstart/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('ember-quickstart/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-quickstart/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-quickstart/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-quickstart/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('ember-quickstart/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-quickstart/initializers/export-application-global', ['exports', 'ember-quickstart/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-quickstart/initializers/load-bootstrap-config', ['exports', 'ember-quickstart/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define("ember-quickstart/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-quickstart/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    pageCount: _emberData.default.attr('number'),
    // filename: DS.attr('string'),
    description: _emberData.default.attr('string'),
    // tags: DS.attr('string'),

    reports: _emberData.default.hasMany('report')
  });
});
define('ember-quickstart/models/meeting', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    meetDate: _emberData.default.attr('date-string'),

    reports: _emberData.default.hasMany('report')
  });
});
define('ember-quickstart/models/report', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        reportDate: _emberData.default.attr('string'),
        bookMark: _emberData.default.attr('number'),
        presentation: _emberData.default.attr('string'),
        video: _emberData.default.attr('string'),
        review: _emberData.default.attr('string'),

        speaker: _emberData.default.belongsTo('speaker'),
        book: _emberData.default.belongsTo('book'),
        meeting: _emberData.default.belongsTo('meeting')
    });
});
define('ember-quickstart/models/speaker', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    firstName: _emberData.default.attr('string'),
    lastName: _emberData.default.attr('string'),
    patronymic: _emberData.default.attr('string'),

    reports: _emberData.default.hasMany('report'),

    fullName: Ember.computed('firstName', 'patronymic', 'lastName', function () {
      return this.get('lastName') + ' ' + this.get('firstName') + ' ' + this.get('patronymic');
    })
  });
});
define('ember-quickstart/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('ember-quickstart/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('ember-quickstart/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-quickstart/router', ['exports', 'ember-quickstart/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('speakers', { path: '/speakers' }), this.route('speaker-detail', { path: '/speakers/:id' });
    this.route('speaker-create', { path: '/speakers/create' });
    this.route('speaker-edit', { path: '/speakers/:id/edit' });

    this.route('books');
    this.route('book-create', { path: '/books/create' });
    this.route('book-detail', { path: '/books/:id' });
    this.route('book-edit', { path: '/books/:id/edit' });

    this.route('reports');
    // this.route('report-create', {path:'/books/create'});
    this.route('report-detail', { path: '/reports/:id' });
    // this.route('book-edit', {path:'/books/:id/edit'});

    this.route('404', { path: '*path' });
    this.route('error', { path: '/:error' });
    this.route('book-form');

    this.route('meetings', { path: '/meetings' }, function () {
      this.route('create');
      this.route('detail', { path: '/:id' });
      this.route('edit'), { path: '/:id/edit' };
    });

    this.route('reports', function () {
      this.route('create');
      this.route('edit', { path: '/:id/edit' });
      this.route('detail', { path: '/:id' });
    });

    this.route('meeting');
    this.route('meeting-edit');
    this.route('meeting-create');
    this.route('report-detail');
    this.route('report-edit');
  });

  exports.default = Router;
});
define('ember-quickstart/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ember-quickstart/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      error: function error(_error, transition) {
        if (transition) {
          transition.abort();
        }
        this.intermediateTransitionTo('error', { error: _error.message });
        return true;
      }
    }
  });
});
define('ember-quickstart/routes/book-create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return Ember.Object.create({
                name: '',
                author: '',
                pageCount: '',
                // filename:'',
                description: ''
                // tags: [],
            });
        }
    });
});
define('ember-quickstart/routes/book-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(_ref) {
      var id = _ref.id;

      return this.get("store").findRecord('book', id);
    }
  });
});
define('ember-quickstart/routes/book-edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('book', id);
        }
    });
});
define('ember-quickstart/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      },
      tags_search: {
        refreshModel: true
      }
    },

    model: function model(_ref) {
      var search = _ref.search,
          tags_search = _ref.tags_search;

      if (search) {
        return this.store.query('book', {
          q: search
        });
      } else if (tags_search) {
        return this.store.query("book", {
          tags_search: tags_search
        });
      } else if (search && tags_search) {
        return this.store.query("book", {
          search: search,
          tags_search: tags_search
        });
      } else {
        return this.store.findAll('book');
      }
    }
  });
});
define('ember-quickstart/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ember-quickstart/routes/meeting-create', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.Object.create({
        meetDate: null
      });
    }
  });
});
define('ember-quickstart/routes/meeting-edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(_ref) {
      var id = _ref.id;

      return this.get('store').findRecord('meeting', id);
    }
  });
});
define('ember-quickstart/routes/meetings', ['exports', 'ember-quickstart/controllers/meetings'], function (exports, _meetings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      page: {
        refreshModel: true
      },
      speaker: {
        refreshModel: true
      },
      book: {
        refreshModel: true
      },
      date: {
        refreshModel: true
      }
    },
    model: function model(_ref) {
      var speaker = _ref.speaker,
          page = _ref.page,
          book = _ref.book,
          date = _ref.date;

      var query = {
        _page: page,
        _limit: _meetings.PER_PAGE
      };

      if (speaker) {
        query.speaker = speaker;
      }

      if (book) {
        query.book = book;
      }

      if (date) {
        query.date = date;
      }

      return Ember.RSVP.hash({
        speakers: this.store.findAll('speaker'),
        books: this.store.findAll('book'),
        meetings: this.store.query('meeting', query)
      });

      // return this.store.findAll('meeting');
    },


    actions: {
      loading: function loading() {
        return false;
      }
    }
  });
});
define('ember-quickstart/routes/report-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(_ref) {
      var id = _ref.id;

      return this.get("store").findRecord('report', id);
    }
  });
});
define('ember-quickstart/routes/report-edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('report', id);
        }
    });
});
define('ember-quickstart/routes/reports', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {},
    model: function model() {
      return this.get('store').findAll('report');
    },
    afterModel: function afterModel(resolvedModel) {
      resolvedModel.save();
    },
    setupController: function setupController() {
      this._super.apply(this, arguments);
    }
  });
});
define('ember-quickstart/routes/speaker-create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return Ember.Object.create({
                firstName: '',
                lastName: '',
                patronymic: ''
            });
        }
    });
});
define('ember-quickstart/routes/speaker-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(_ref) {
      var id = _ref.id;

      return this.get("store").findRecord('speaker', id);
    }
  });
});
define('ember-quickstart/routes/speaker-edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(_ref) {
            var id = _ref.id;

            return this.get('store').findRecord('speaker', id);
        }
    });
});
define('ember-quickstart/routes/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },

    model: function model(_ref) {
      var search = _ref.search;

      if (search) {
        return this.store.query('speaker', { q: search });
      }

      return this.store.findAll('speaker');
    },


    actions: {
      loading: function loading() {
        return false;
      }
    }
  });
});
define('ember-quickstart/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    normalize: function normalize(model, hash) {
      return this._super.apply(this, arguments);
    },
    keyForRelationship: function keyForRelationship(key, typeClass, method) {
      if (typeClass === 'belongsTo') {
        return key + 'Id';
      }

      return this._super.apply(this, arguments);
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      var hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
      return this._super.call(this, relationshipModelName, hash);
      // return this._super(...arguments);
    },
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      // this._super(...arguments);
      var key = relationship.key;
      var belongsTo = snapshot.belongsTo(key);

      key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
      json[key] = Ember.isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
  });
});
define('ember-quickstart/serializers/book', ['exports', 'ember-data', 'ember-quickstart/serializers/application'], function (exports, _emberData, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      reports: {
        serialize: 'records',
        deserialize: 'records'
      }
    },

    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      return hash;
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      return this._super.apply(this, arguments);
    }
  });
});
define('ember-quickstart/serializers/meeting', ['exports', 'ember-quickstart/serializers/application'], function (exports, _application) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _application.default.extend({
        normalize: function normalize(model, hash) {
            hash = this._super.apply(this, arguments);
            return hash;
        }
    });
});
define('ember-quickstart/serializers/report', ['exports', 'ember-quickstart/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('ember-quickstart/serializers/speaker', ['exports', 'ember-data', 'ember-quickstart/serializers/application'], function (exports, _emberData, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {
      reports: {
        serialize: 'records',
        deserialize: 'records'
      }
    },

    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);
      return hash;
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      return this._super.apply(this, arguments);
    }
  });
});
define('ember-quickstart/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-quickstart/services/data2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    getBooks: function getBooks(search, search_tag) {
      var queryParams = '';
      if (search && search_tag) {
        queryParams = '?q=' + search + '&tags_like=' + search_tag;
      } else if (search) {
        queryParams = '?q=' + search;
      } else if (search_tag) {
        queryParams = '?q=' + search_tag;
      }
      return fetch('http://localhost:3000/books' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getBook: function getBook(id) {
      return fetch('http://localhost:3000/books/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteBook: function deleteBook(book) {
      return fetch('http://localhost:3000/books/' + book.id, {
        method: 'DELETE'
      });
    },
    createBook: function createBook(book) {
      return fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });
    },
    updateBook: function updateBook(book) {
      return fetch('http://localhost:3000/books/' + book.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });
    },
    getSpeakers: function getSpeakers(search) {
      var queryParams = '';
      if (search) {
        queryParams = '?q=' + search;
      }

      return fetch('http://localhost:3000/speakers' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getSpeaker: function getSpeaker(id) {
      return fetch('http://localhost:3000/speakers/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteSpeaker: function deleteSpeaker(speaker) {
      return fetch('http://localhost:3000/speakers/' + speaker.id, {
        method: 'DELETE'
      });
    },
    createSpeaker: function createSpeaker(speaker) {
      return fetch('http://localhost:3000/speakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    },
    updateSpeaker: function updateSpeaker(speaker) {
      return fetch('http://localhost:3000/speakers/' + speaker.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    },
    getMeetings: function getMeetings(search) {
      var queryParams = '';
      if (search) {
        queryParams = '?q=' + search;
      }

      return fetch('http://localhost:3000/meetings' + queryParams).then(function (response) {
        return response.json();
      });
    }
  });
});
define("ember-quickstart/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kVUhydIW", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"/404image.jpg\"],[10,\"alt\",\"404\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/404.hbs" } });
});
define("ember-quickstart/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QscMgFUr", "block": "{\"symbols\":[],\"statements\":[[0,\"   \"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"  \\t    \"],[6,\"a\"],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"index\"],[8],[0,\"\\t\\t\\n  \\t\\t\\t\"],[6,\"img\"],[10,\"src\",\"logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n      \\t\\tКнижный клуб\\n  \\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n  \\t\\t\"],[9],[0,\"\\n  \\t\\t\"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"index\"],[8],[0,\"Рабочий стол \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meetings\"],null,{\"statements\":[[0,\"  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"meetings\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],null,{\"statements\":[[0,\"  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"books\"],[8],[0,\"Книги\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],null,{\"statements\":[[0,\"  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"speakers\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-info\"],[10,\"href\",\"register.html\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n  \\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"login.html\"],[8],[0,\"Войти\"],[9],[0,\"\\n  \\t\\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\"],[9],[0,\"\\n  \\t\"],[9],[0,\"\\n  \\t\\n  \\t\\t\"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n        \"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/application.hbs" } });
});
define("ember-quickstart/templates/book-create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0mGRPwnS", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Добавление спикера\"],[9],[0,\"\\n    \"],[1,[26,\"book-form\",null,[[\"book\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveBook\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/book-create.hbs" } });
});
define("ember-quickstart/templates/book-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LRIl34hf", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-catd\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Back\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n                \"],[6,\"h3\"],[8],[1,[22,[\"book\",\"name\"]],false],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn-recessed\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBook\",[22,[\"model\"]]],null],null],[8],[0,\"delete\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/book-detail.hbs" } });
});
define("ember-quickstart/templates/book-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MjsCr3o5", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-card\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Назад\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n                \"],[6,\"h3\"],[8],[0,\"Редактирование книги: \"],[1,[22,[\"model\",\"name\"]],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"slide-out-content\"],[8],[0,\"\\n            \"],[1,[26,\"book-form\",null,[[\"book\",\"onsumbit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveBook\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/book-edit.hbs" } });
});
define("ember-quickstart/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "36jtblpr", "block": "{\"symbols\":[\"books\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\\n         \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"book-create\"],[[\"class\"],[\"btn-new\"]],{\"statements\":[[0,\"                \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[8],[0,\"Добавить спикера\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\\n\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto search\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control mr-2\",\"Search by book name\",[22,[\"search\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n\\n               \"],[6,\"div\"],[10,\"class\",\"col-md-auto search\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control mr-2\",\"Поиск по тегам книги\",[22,[\"search_tag\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n      \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"isLoading\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n                \"],[6,\"img\"],[10,\"src\",\"/loading.gif\"],[10,\"alt\",\"Loading\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"book-item\",null,[[\"book\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/books.hbs" } });
});
define("ember-quickstart/templates/components/book-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z1cDhNhE", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"sumbitForm\"],null],null],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Название книги: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputName\",\"form-control form-control-lg\",\"Название книги\",[22,[\"name\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Автор: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputAuthor\",\"form-control form-control-lg\",\"Автор\",[22,[\"author\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPage\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Количество страниц: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputPage\",\"form-control form-control-lg\",\"Количество страниц\",[22,[\"pageCount\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputDescr\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Ссылка на описание книги: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputDescr\",\"form-control form-control-lg\",\"Ссылка на описание книги\",[22,[\"description\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n         \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputFile\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Обложка книги: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input-file\",null,[[\"id\",\"label\",\"uploadData\",\"uploadDataChanged\"],[\"inputFile\",\"Файл обложки книги\",[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"changeUploadData\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Теги: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input-tags\",null,[[\"id\",\"tags\",\"onChange\"],[\"inputTags\",[22,[\"tags\"]],[26,\"action\",[[21,0,[]],\"changeTags\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-6\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/book-form.hbs" } });
});
define("ember-quickstart/templates/components/book-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zM04P4dY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col md-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"img/book-cover.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"book-detail\",[22,[\"book\",\"id\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"book\",\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[22,[\"book\",\"author\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[22,[\"book\",\"pageCount\"]],false],[9],[0,\"\\n\"],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                    \"],[6,\"a\"],[11,\"href\",[22,[\"book\",\"description\"]],null],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"book-edit\",[22,[\"book\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"Редактировать\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBook\",[22,[\"book\"]]],null],null],[10,\"type\",\"button\"],[8],[0,\"Удалить\"],[9],[0,\"\\n\"],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/book-item.hbs" } });
});
define('ember-quickstart/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-quickstart/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("ember-quickstart/templates/components/input-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4tIiHG1e", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"label\"],[11,\"class\",[27,[\"custom-file-label form-control-lg \",[26,\"if\",[[22,[\"isFileChoosen\"]],\"\",\"placeholder-color\"],null]]]],[10,\"for\",\"customFile\"],[10,\"data-browse\",\"Выбрать\"],[8],[1,[20,\"fileName\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[11,\"disabled\",[20,\"ifRemoveButtonDisabled\"],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"removeFile\"],null],null],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/input-file.hbs" } });
});
define("ember-quickstart/templates/components/input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0HCnuq6D", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[11,\"value\",[27,[[21,1,[]]]]],[10,\"selected\",\"selected\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/input-tags.hbs" } });
});
define("ember-quickstart/templates/components/meeting-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zv8ykHdD", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveMeeting\"],null],null],[10,\"class\",\"edit-form\"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Выберите дату встречи:\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"date\",[22,[\"meetDate\"]],\"form-control form-control-lg\",\"Выберите дату встречи\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-6\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-6 text-right\"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"Отмена\"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n  \\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/meeting-form.hbs" } });
});
define("ember-quickstart/templates/components/meeting-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FBlg3dzc", "block": "{\"symbols\":[\"reports\"],\"statements\":[[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n    \"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                \"],[6,\"input\"],[10,\"placeholder\",\"Дата встречи\"],[10,\"class\",\"form-control meeting-date\"],[11,\"value\",[22,[\"meeting\",\"meetDate\"]],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                    \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"onclick\",\"javascript:location='edit-meeting.html'\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"meeting\",\"reports\"]]],null,{\"statements\":[[0,\" \\t\\t\\t\"],[1,[26,\"report-item\",null,[[\"report\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/meeting-item.hbs" } });
});
define("ember-quickstart/templates/components/report-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IjTqCGMw", "block": "{\"symbols\":[\"speaker\",\"book\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveReport\"],null],null],[10,\"class\",\"edit-form\"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Выберите Книгу для доклада: \"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"searchField\",\"onchange\",\"selected\",\"search\"],[true,\"title\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"book\"]]],null]],null],[22,[\"book\"]],[26,\"action\",[[21,0,[]],\"searchBook\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,2,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Оценка выбранной книги:\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"number\",[22,[\"bookMark\"]],\"form-control form-control-lg\",\"Оцените книгу по шкаоле от 1 до 5\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Файл презентации:\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"url\",[22,[\"presentation\"]],\"form-control form-control-lg\",\"Н-р: http://www.presentation.com\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Ссылка на видео:\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"url\",[22,[\"video\"]],\"form-control form-control-lg\",\"Н-р: http://www.video.com\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"  \\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"Выберите Спикера\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speaker\"]]],null]],null],[22,[\"speaker\"]],[26,\"action\",[[21,0,[]],\"searchSpeaker\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,1,[\"surname\"]],false],[0,\" \"],[1,[21,1,[\"name\"]],false],[0,\" \"],[1,[21,1,[\"patronymic\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"  \\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Рецензия на книгу:\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"textarea\",null,[[\"type\",\"rows\",\"value\",\"class\",\"placeholder\"],[\"text\",\"6\",[22,[\"review\"]],\"form-control form-control-lg\",\"Напишите отзыв о книге\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-6\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-6 text-right\"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"meeting-edit\",[22,[\"meeting\",\"id\"]]],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"Отмена\"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/report-form.hbs" } });
});
define("ember-quickstart/templates/components/report-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2v7D3V8f", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n                  \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n                  \"],[6,\"img\"],[10,\"src\",\"img/speaker.jpg\"],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n                  \"],[6,\"p\"],[8],[1,[22,[\"report\",\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"report\",\"speaker\",\"firstName\"]],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n                  \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n                  \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"name\"]],false],[9],[0,\"\\n                  \"],[6,\"p\"],[8],[1,[22,[\"report\",\"book\",\"author\"]],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                              Оценка: \"],[1,[22,[\"report\",\"bookMark\"]],false],[0,\"\\n                        \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n                  \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n                  \"],[6,\"p\"],[8],[0,\"\\n                        \"],[1,[22,[\"report\",\"review\"]],false],[0,\"\\n                  \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n                  \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n            \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/report-item.hbs" } });
});
define("ember-quickstart/templates/components/speaker-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eXPz9RPl", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"sumbitForm\"],null],null],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Имя спикера: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputName\",\"form-control form-control-lg\",\"Имя спикера\",[22,[\"firstName\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputLastName\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Фамилия спикера: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputLastName\",\"form-control form-control-lg\",\"Фамилия спикера\",[22,[\"lastName\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPatronymic\"],[10,\"class\",\"col-sm-2 col-form-label\"],[8],[0,\"Отчество спикера: \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"id\",\"class\",\"placeholder\",\"value\"],[\"text\",\"inputPatronymic\",\"form-control form-control-lg\",\"Отчество спикера\",[22,[\"patronymic\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-6\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"Отмена\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/speaker-form.hbs" } });
});
define("ember-quickstart/templates/components/speaker-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QVsEejw0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"img/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speaker-detail\",[22,[\"speaker\",\"id\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"firstName\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"patronymic\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speaker-edit\",[22,[\"speaker\",\"id\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n\"],[0,\"                        Редактировать\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deletespeaker\",[22,[\"speaker\"]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\"],[0,\"                        Удалить\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/speaker-item.hbs" } });
});
define("ember-quickstart/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y3MKHmYn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"/loading.gif\"],[10,\"alt\",\"welcome\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/error.hbs" } });
});
define("ember-quickstart/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CFgo6Hyc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"meetings\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"books\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"speakers\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/index.hbs" } });
});
define("ember-quickstart/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SUxpJd9C", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"/loading.gif\"],[10,\"alt\",\"Loading\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/loading.hbs" } });
});
define("ember-quickstart/templates/meeting-create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QcraOZAc", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/meeting-create.hbs" } });
});
define("ember-quickstart/templates/meeting-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "F7eed2wU", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/meeting-edit.hbs" } });
});
define("ember-quickstart/templates/meetings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6UVCnfLY", "block": "{\"symbols\":[\"meeting\",\"book\",\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between align-items-end\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-1\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meeting-create\"],[[\"class\"],[\"btn btn-outline-primary my-2\"]],{\"statements\":[[0,\"        Добавить встречу\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\",\"searchField\",\"allowClear\"],[[22,[\"model\",\"speakers\"]],[22,[\"selectedSpeaker\"]],[26,\"action\",[[21,0,[]],\"changeSpeaker\"],null],\"fullName\",true]],{\"statements\":[[0,\"        \"],[1,[21,3,[\"fullName\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[0,\"Книга\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"searchField\",\"onchange\"],[[22,[\"model\",\"books\"]],[22,[\"selectedBook\"]],\"name\",[26,\"action\",[[21,0,[]],\"changeBook\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n        \"],[6,\"h5\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"datepicker date input-group p-0 w-100\"],[8],[0,\"\\n            \"],[1,[26,\"bootstrap-datepicker\",null,[[\"class\",\"id\",\"value\",\"format\",\"changeDate\"],[\"form-control\",\"meetingDateFilter\",[22,[\"selectedDate\"]],\"dd/mm/yy\",[26,\"action\",[[21,0,[]],\"changeDate\"],null]]]],false],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                  \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                  \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"meeting-item\",null,[[\"meeting\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/meetings.hbs" } });
});
define("ember-quickstart/templates/report-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qWZKFVcj", "block": "{\"symbols\":[\"report\",\"meeting\"],\"statements\":[[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h1\"],[8],[1,[21,1,[\"id\"]],false],[9],[0,\"\\n\"],[4,\"each\",[[21,1,[\"meeting\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h1\"],[8],[1,[21,2,[\"id\"]],false],[9],[0,\"\\n\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/report-detail.hbs" } });
});
define("ember-quickstart/templates/report-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4S8LZXML", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/report-edit.hbs" } });
});
define("ember-quickstart/templates/reports", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uneOR68k", "block": "{\"symbols\":[\"report\",\"speaker\"],\"statements\":[[0,\"   \"],[6,\"h1\"],[8],[0,\"efddvv\"],[9],[0,\"\\n   \"],[6,\"h1\"],[8],[0,\"efddvv\"],[9],[0,\"\\n   \"],[6,\"h1\"],[8],[0,\"efddvv\"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n          \"],[6,\"h5\"],[8],[0,\"\\n            \"],[1,[21,1,[\"id\"]],false],[0,\"\\n          \"],[9],[0,\"            \\n      \"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\"],[4,\"each\",[[21,1,[\"speakers\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h1\"],[8],[1,[21,2,[\"id\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/reports.hbs" } });
});
define("ember-quickstart/templates/speaker-create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PQGmANxp", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Добавление спикера\"],[9],[0,\"\\n    \"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveSpeaker\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/speaker-create.hbs" } });
});
define("ember-quickstart/templates/speaker-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M0gXa6RC", "block": "{\"symbols\":[\"report\"],\"statements\":[[6,\"div\"],[10,\"class\",\"slide-out-bg\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"slide-out\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"slide-out-catd\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Назад\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"slide-out-heading\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"title\"],[8],[0,\"\\n                \"],[6,\"h3\"],[8],[1,[22,[\"model\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"model\",\"firstName\"]],false],[0,\" \"],[1,[22,[\"model\",\"patronymic\"]],false],[9],[0,\"             \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"reports\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h1\"],[8],[1,[21,1,[\"id\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn-recessed\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteSpeaker\",[22,[\"model\"]]],null],null],[8],[0,\"Удалить\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/speaker-detail.hbs" } });
});
define("ember-quickstart/templates/speaker-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GV5FbjVo", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Назад\"],[9]],\"parameters\":[]},null],[0,\"\\n         \"],[6,\"h3\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование информации о спикере: \"],[1,[22,[\"model\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"model\",\"firstName\"]],false],[0,\" \"],[1,[22,[\"model\",\"patronymic\"]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveSpeaker\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/speaker-edit.hbs" } });
});
define("ember-quickstart/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IWWWn4vM", "block": "{\"symbols\":[\"speakers\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speaker-create\"],[[\"class\"],[\"btn-new\"]],{\"statements\":[[0,\"                \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[8],[0,\"Добавить спикера\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto search\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Поиск по спикерам\",[22,[\"search\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"isLoading\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"welcome-page\"],[8],[0,\"\\n                \"],[6,\"img\"],[10,\"src\",\"/loading.gif\"],[10,\"alt\",\"Loading\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"speaker-item\",null,[[\"destroyspeaker\",\"speaker\"],[[26,\"action\",[[21,0,[]],\"deleteSpeaker\"],null],[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-quickstart/templates/speakers.hbs" } });
});
define('ember-quickstart/transforms/date-string', ['exports', 'ember-data/transforms/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _date.default.extend({
    moment: Ember.inject.service(),
    deserialize: function deserialize(serialized) {
      var date = this._super(serialized);
      if (date instanceof Date && !isNaN(date)) {
        var formattedDate = this.get('moment').moment(date).format('YYYY-MM-DD');
        return formattedDate;
      }
      return null;
    },
    serialize: function serialize(deserialized) {
      var deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
      return this._super(deserializedDate);
    }
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

if (!runningTests) {
  require("ember-quickstart/app")["default"].create({"name":"ember-quickstart","version":"0.0.0+000b2d3f"});
}
//# sourceMappingURL=ember-quickstart.map
