/* jquery-cmdrjs | version 1.0.2 | license MIT | (c) 2015 John Cruikshank |  */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'cmdr'], factory);
    } else {
        factory(root.jQuery, root.cmdr);
    }
})(this, function ($, cmdr) {
    'use strict';

    $.fn.cmdr = function (options) {
        
        if (options === 'destroy') {
            return this.each(function () {
                var shell = $(this).data('shell');
                if (shell instanceof cmdr.Shell) {
                    shell.dispose();
                    $(this).removeData('shell');
                }
            });
        }

        return this.each(function () {
            $(this).data('shell', new cmdr.Shell(this, options));
        });
    };
});
