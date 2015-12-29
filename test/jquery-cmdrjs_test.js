(function ($) {
  module('jQuery#cmdr', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.cmdr(), this.elems, 'should be chainable');
  });

}(jQuery));
