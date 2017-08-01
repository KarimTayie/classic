/*global $, alert, console*/

$(document).ready(function () {
    
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
    
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    // Adjust bxSlider List Item Center
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
            
        mySlider.each(function () {
       
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
        });
        
    });
    
    // Links Add Active Class
    
    $('.nav li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust bxSlider List Item Center
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger The bxSlider
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // Smooth Scroll To Div
    
    $('.nav li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    // Our Auto Slider Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    // Trigger MixitUp
    
    $('#container').mixItUp();
    
    // Adjust Shuffle Links
    
    $('.shuffle li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    // Adjust Nice Scroll
    
    $("body").niceScroll({
        
        cursorcolor: "#1abc9c"
        
    });
    
});

// Loading Screen

$(window).on("load", function () {
    
    // Loading Elements
    
    $('.loading-overlay .sk-folding-cube').fadeOut(2000, function () {
        
            // Show The Scroll
    
            $('body').css('overflow','auto');
        
            $(this).parent().fadeOut(2000, function () {
                                     
                $(this).remove();
                                     
            });
        
    });
    
});