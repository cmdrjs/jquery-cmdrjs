/* jquery-cmdrjs | version 1.0.0 | license MIT | (c) 2015 John Cruikshank |  */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'cmdr'], factory);
    } else {
        factory(root.jQuery, root.cmdr);
    }
})(this, function ($, cmdr) {
    'use strict';
  
    $.fn.cmdr = function (options) {
        return this.each(function () {
            $(this).data('cmdr', new cmdr.Shell(this, options));
        });
    };
});
