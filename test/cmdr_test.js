(function ($, cmdr) {
  module('jQuery#cmdr', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });
  
  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.cmdr(), this.elems, 'should be chainable');
    this.elems.cmdr('destroy');
  });
  
  test('sets shell instance on element data', function () {
    expect(this.elems.length);
    this.elems.cmdr();    
    this.elems.each(function() {
        ok($(this).data('shell') instanceof cmdr.Shell, 'should add shell data');
    });    
    this.elems.cmdr('destroy');
  });
  
  test('injects shell element', function () {
    expect(this.elems.length);
    this.elems.cmdr();    
    this.elems.each(function() {
        strictEqual($(this).children('.cmdr-shell').length, 1, 'should inject shell element');
    });    
    this.elems.cmdr('destroy');
  });
  
  test('is destroyable', function () {
      expect(this.elems.length * 2);
      this.elems.cmdr().cmdr('destroy');
      this.elems.each(function() {
          ok(!$(this).children('.cmdr-shell').length, 'should remove shell elements on destroy');
          ok(!$(this).data('shell'), 'should remove shell data on destroy');
      });
  });

}(jQuery, cmdr));
