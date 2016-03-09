 
 // IIFE to make sure all the variables in the plugin will be outside of the global namespace
(function ($) {

    // Define the plugin name
    $.fn.truncateText = function (options) {

        //Default settings
        var settings = $.extend({
            trunkNum: 10,
            appendText: '...'
        }, options);

        return this.each(function () {
            
            return $(this).text(function () {
                
                var str = this.innerHTML

                if (str.length > settings.trunkNum) {
                    str = str.substring(0, settings.trunkNum);
                    str = str.replace(/\s+$/, ''); // Remove if the last character is a space
                    str += settings.appendText;
                }
                
                return str;
            });

        });

    }

}(jQuery));


