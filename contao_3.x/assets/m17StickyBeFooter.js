/* Stcky Footer for Contao
 * @author: Joe Ray Gregory aka may17
 * @copyright: Joe Ray Gregory 2012 joe@may17.de
 * @license LGPL
 */
(function(){M17StickyFooter={init:function(){var a=$$(".tl_formbody_submit")[0]||false,f,e,b=this;if(a){var d=a.getHeight();var c=$$(".tl_formbody_submit")[0].getPosition().y+49;var f=a.getPosition().y+a.getHeight();this.difference=c-window.getHeight();this.formPos=a.getPosition().y;this.setItem(a);window.addEvents({scroll:function(){this.setItem(a)}.bind(this),resize:function(){this.setItem(a)}.bind(this)});$$("fieldset").addEvent("click:relay(legend)",function(g){b.setItem(a)})}},setItem:function(b){var c=$$(".tl_formbody_submit")[0].getPosition().y+49;var g=c-window.getHeight();var f=window,e=document.body,d="stickySave";var a=f.getScroll().y.toInt();if(a>g){e.removeClass(d)}else{if(!e.hasClass(d)){e.addClass(d)}}}};window.addEvent("domready",function(){M17StickyFooter.init();this.scrollTo(0,1)})})();