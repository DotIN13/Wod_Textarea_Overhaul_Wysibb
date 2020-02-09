// ==UserScript==
// @name         Wod Textarea Overhaul Wysibb
// @namespace    github.com/DotIN13/
// @version      0.5
// @description  Refreshing Wod textareas with Wysibb 1.5.1
// @author       DotIN13
// @match        http://*.world-of-dungeons.org/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require      http://cdn.wysibb.com/js/jquery.wysibb.min.js
// @require      http://cdn.wysibb.com/lang/cn.js
// @resource     wbbCss http://cdn.wysibb.com/css/default/wbbtheme.css
// @updateURL    https://github.com/DotIN13/Wod_Textarea_Overhaul_Wysibb/raw/master/Textarea_Overhaul.user.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    $(function()
    {
        var wbbOpt = {
            buttons: "bold,italic,underline,strike,|,img,link,|,bullist,numlist,|,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright,|,quote,code,removeFormat",
            lang: "cn",
            autoresize: true,
            allButtons:
            {
                quote:
                {
                    transform:
                    {
                        '<div class="quote"><cite>{AUTHOR}写道:</cite>{SELTEXT}</div>': '[quote={AUTHOR}]{SELTEXT}[/quote]',
                        '<div class="quote">{SELTEXT}</div>':'[quote]{SELTEXT}[/quote]'
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
        $('textarea').wysibb(wbbOpt);
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
