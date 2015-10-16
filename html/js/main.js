/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        
        $(".project-info").hide();
        
        $('.project').hover(function () {
            $(this).children('.project-info').show();
        }, function () { 
            $(this).children('.project-info').hide();
            
        });

    });
}());