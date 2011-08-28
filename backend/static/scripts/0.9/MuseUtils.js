/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
if(typeof Muse=="undefined")window.Muse={};Muse.Assert={};Muse.Assert.fail=function(a){alert("MuseJSAssert: "+a)};if(!Array.indexOf)Array.prototype.indexOf=function(a){for(var b=0;b<this.length;++b)if(this[b]==a)return b;return-1};Muse.Plugins={};Muse.Utils={};Muse.Utils.addLoadListener=function(a){jQuery(document).ready(a)};
Muse.Utils.runLoadListeners=function(){if(Muse.Utils.loadListeners)for(var a=0;a<Muse.Utils.loadListeners.length;a++)try{Muse.Utils.loadListeners[a]()}catch(b){Muse.Assert.fail("LoadListener failed: "+b)}};Muse.Utils.selectorFns=[];Muse.Utils.addSelectorFn=function(a,b){Muse.Utils.selectorFns.push({selector:a,selFn:b})};
Muse.Utils.addLoadListener(function(){for(var a=0;a<Muse.Utils.selectorFns.length;a++)try{Spry.$$(Muse.Utils.selectorFns[a].selector).forEach(Muse.Utils.selectorFns[a].selFn)}catch(b){Muse.Assert.fail("Error calling selector function:"+b)}});Muse.Utils.isTouchDevice=function(){if(typeof Muse.Utils.isTouchDevice.flag=="undefined")try{document.createEvent("TouchEvent"),Muse.Utils.isTouchDevice.flag=!0}catch(a){Muse.Utils.isTouchDevice.flag=!1}return Muse.Utils.isTouchDevice.flag};
Muse.Utils.wrapElement=function(a,b){a.parentNode.replaceChild(b,a);b.appendChild(a)};Muse.Utils.firstChild=function(a,b){for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];if(d.nodeType==1&&(!b||b.matches(d)))return d}return null};Muse.Utils.firstDescendant=function(a,b,c){for(var d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];if(e.nodeType==1){if(!b||b.matches(e))return e;if(!c||!c.matches(e))if(e=Muse.Utils.firstDescendant(e,b,c))return e}}return null};
Muse.Utils.descendants=function(a,b,c,d){if(!d)d=[],d.forEach=function(a){for(var b=0;b<this.length;b++)if(a(this[b]))break},d.forEachTry=function(a){for(var b=0;b<this.length;b++)try{if(a(this[b]))break}catch(c){}};for(var e=0;e<a.childNodes.length;e++){var f=a.childNodes[e];f.nodeType==1&&((!b||b.matches(f))&&d.push(f),(!c||!c.matches(f))&&Muse.Utils.descendants(f,b,c,d))}return d};Muse.Utils.children=function(a,b){return Muse.Utils.descendants(a,b,Muse.Utils.Match.always)};Muse.Utils.Match={};
Muse.Utils.Match.ByClass=function(a){this.cl=a};Muse.Utils.Match.ByClass.prototype.matches=function(a){return Spry.Utils.hasClassName(a,this.cl)};Muse.Utils.Match.ByNodeName=function(a){this.nm=a.toLowerCase()};Muse.Utils.Match.ByNodeName.prototype.matches=function(a){return this.nm==a.nodeName.toLowerCase()};Muse.Utils.Match.ByFixed=function(a){this.matchResult=a};Muse.Utils.Match.ByFixed.prototype.matches=function(){return this.matchResult};Muse.Utils.Match.byClass=function(a){return new Muse.Utils.Match.ByClass(a)};
Muse.Utils.Match.byNodeName=function(a){return new Muse.Utils.Match.ByNodeName(a)};Muse.Utils.Match.byFixed=function(a){return new Muse.Utils.Match.ByFixed(a)};Muse.Utils.Match.always=Muse.Utils.Match.byFixed(!0);Muse.Utils.Match.never=Muse.Utils.Match.byFixed(!1);Muse.Utils.moveChildren=function(a,b){for(;a.childNodes.length>0;)b.appendChild(a.childNodes[0])};Muse.Utils.copyChildren=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.appendChild(a.childNodes[c].cloneNode(!0))};
Muse.Utils.copyChildrenBefore=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.parentNode.insertBefore(a.childNodes[c].cloneNode(!0),b)};Muse.Utils.pixelRound=function(a){return Math.floor((a*100+0.5)/100)};Muse.Utils.getCurrentHTMLFileName=function(a){var b=document.location.href,b=b.charAt(b.length-1)=="/"?"index":b.substring(b.lastIndexOf("/")+1,b.lastIndexOf("."));a&&(b+=".html");return b};
Muse.Utils.getPageStyleSheet=function(){for(var a="/"+Muse.Utils.getCurrentHTMLFileName(!1).toLowerCase()+".css",b=0;b<document.styleSheets.length;++b){var c=document.styleSheets[b];if(c.href&&c.href.toLowerCase().indexOf(a)!=-1)return c}};
Muse.Utils.getStyleSheetRuleById=function(a,b){var c=!1,d="#"+b.toLowerCase(),e=a.cssRules;if(!e)c=!0,e=a.rules;if(e)for(var f=0;f<e.length;++f){var g=e[f];if(c){if(g.selectorText.toLowerCase()==d)return g}else if(g.selectorText.toLowerCase().split(", ").indexOf(d)!=-1)return g}return null};Muse.Utils.setRuleProperty=function(a,b,c){a.style.setProperty?a.style.setProperty(b,c,""):a.style.setAttribute(b,c,0)};
Muse.Utils.removeRuleProperty=function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b,0)};
Muse.Utils.cloneStyleSheetRule=function(a){if(typeof Muse.Utils.cloneStyleSheetRule.newNumber=="undefined")Muse.Utils.cloneStyleSheetRule.newNumber=1;var b=Muse.Utils.getPageStyleSheet(a),c=Muse.Utils.getStyleSheetRuleById(b,a),d="c"+Muse.Utils.cloneStyleSheetRule.newNumber++,e="#"+d;b.insertRule?b.insertRule(c.cssText.replace("#"+a,e),b.cssRules.length):b.addRule(e,c.style.cssText);return d};
Muse.Utils.toCamelCase=function(a){for(var b=Muse.Utils.toCamelCase.exp;b.test(a);a=a.replace(b,RegExp.$1.toUpperCase()));return a};Muse.Utils.toCamelCase.exp=/-([a-z])/;Muse.Utils.getStyleValue=function(a,b){var c=a.style[Muse.Utils.toCamelCase(b)];c||(document.defaultView?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(c=a.currentStyle[Muse.Utils.toCamelCase(b)]));c.match(/(\d+)px/)&&(c=parseInt(c.substring(0,c.length-2)));return c};var mousedownStack=[];
Muse.Utils.redirectHyperlink=function(a){mousedownStack=[];var b=a.href,c=jQuery(a).attr("class").match(/target_(\w+)/);if(!c){var d=b.lastIndexOf("/"),e=b.lastIndexOf("#");if(e>d){var f=Muse.Utils.getCurrentHTMLFileName(!0);if(b.substring(d+1,e)==f){b=b.substring(e);if(a=jQuery(a).attr("class").match(/anim_(\w+)/)){a=a[1];c=jQuery(b).offset().top;b=jQuery(b).offset().left;Muse.Utils.isTouchDevice()?(jQuery(window).scrollTop(c),jQuery(window).scrollLeft(b)):jQuery("html,body").animate({scrollTop:c,
scrollLeft:b},1E3,a);return}window.location.hash=b;return}}}a=c?c[0].substring(6):"_self";window.open(b,a)};Muse.Utils.isMouseLeftButton=function(a){return a.which==1};
Muse.Utils.addHyperlinkAnchor=function(a){$(a).bind("mousedown",function(a){Muse.Utils.isMouseLeftButton(a)&&mousedownStack.push(this);return!1},!1);$(a).bind("mouseup",function(a){Muse.Utils.isMouseLeftButton(a)&&mousedownStack.indexOf(this)!=-1&&Muse.Utils.redirectHyperlink(this);return!1},!1);$(a).bind("click",function(){return!1},!1)};
Muse.Utils.addHyperlinkBlock=function(a){$(a.parentNode).bind("mousedown",function(a){Muse.Utils.isMouseLeftButton(a)&&mousedownStack.push(this);return!0},!1);$(a.parentNode).bind("mouseup",function(b){Muse.Utils.isMouseLeftButton(b)&&mousedownStack.indexOf(this)!=-1&&Muse.Utils.redirectHyperlink(a);return!0},!1)};
Muse.Utils.getNaturalWidth=function(a){var b=-1;a.naturalWidth!=null?b=a.naturalWidth:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetWidth,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.width);return b};
Muse.Utils.getNaturalHeight=function(a){var b=-1;a.naturalHeight!=null?b=a.naturalHeight:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetHeight,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.height);return b};Muse.Utils.applyIEFilterToPNGImages=function(){jQuery.browser.msie&&jQuery.browser.version<9&&jQuery("body *").each(function(){var a=jQuery(this);if(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i)){var b=a.css("filter");a.css("filter",b?b+" progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)":"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")}})};
Muse.Utils.refreshIframesAndObjectsToPauseMedia=function(a){a.filter(function(){return $(this).css("display")!="none"}).each(function(){$("iframe",this).each(function(){var a=$(this).next();a.length==0?(a=$(this).parent(),$(this).detach().appendTo(a)):$(this).detach().insertBefore(a)});$("object",this).each(function(){var a=$(this).next();a.length==0?(a=$(this).parent(),$(this).detach().appendTo(a)):$(this).detach().insertBefore(a)});$("video",this).each(function(){$(this).get(0).pause&&$(this).get(0).pause()})})};
