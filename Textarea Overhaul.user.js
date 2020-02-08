// ==UserScript==
// @name         Textarea Overhaul
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://canto.world-of-dungeons.org/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require      http://cdn.wysibb.com/js/jquery.wysibb.min.js
// @require      http://cdn.wysibb.com/lang/cn.js
// @resource     wbbCss http://cdn.wysibb.com/css/default/wbbtheme.css
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    $(function()
    {
        var wbbOpt = {
            buttons: "bold,italic,underline,strike,|,img,link,|,bullist,numlist,|,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright,|,quote,code,table,removeFormat",
            lang: "cn",
            autoresize: true,
            allButtons:
            {
                quote:
                {
                    transform:
                    {
                        '<div class="quote"><cite>{AUTHOR}写道:</cite>{SELTEXT}</div>': '[quote={AUTHOR}]{SELTEXT}[/quote]'
                    }
                },
                fs_verysmall:
                {
                    transform:
                    {
                        '<font size="1">{SELTEXT}</font>': '[size=10]{SELTEXT}[/size]'
                    }
                },
                fs_small:
                {
                    transform:
                    {
                        '<font size="2">{SELTEXT}</font>': '[size=12]{SELTEXT}[/size]'
                    }
                },
                fs_normal:
                {
                    transform:
                    {
                        '<font size="3">{SELTEXT}</font>': '[size=15]{SELTEXT}[/size]'
                    }
                },
                fs_big:
                {
                    transform:
                    {
                        '<font size="4">{SELTEXT}</font>': '[size=20]{SELTEXT}[/size]'
                    }
                },
                fs_verybig:
                {
                    transform:
                    {
                        '<font size="6">{SELTEXT}</font>': '[size=24]{SELTEXT}[/size]'
                    }
                },
            }
        };
        $('textarea[name*="message"]').wysibb(wbbOpt);
    })

    function addStyleSheet(style)
    {
        var getHead = document.getElementsByTagName("HEAD")[0];
        var cssNode = window.document.createElement('style');
        var elementStyle = getHead.appendChild(cssNode);
        elementStyle.innerHTML = style;
        return elementStyle;
    }

    addStyleSheet('@import "http://cdn.wysibb.com/css/default/wbbtheme.css";');
})();