(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{465:function(t,e,c){"use strict";c.r(e);var n=c(85),o=c(345),r=c(347),d=c(344),m=c(348),l=c(171),f={components:{ConfirmedCasesDetailsCard:o.a,ConfirmedCasesNumberCard:r.a,ConfirmedCasesAttributesCard:d.a,TestedNumberCard:m.a},data:function(){var t;switch(this.$route.params.card){case"details-of-confirmed-cases":t="confirmed-cases-details-card";break;case"number-of-confirmed-cases":t="confirmed-cases-number-card";break;case"attributes-of-confirmed-cases":t="confirmed-cases-attributes-card";break;case"number-of-tested":t="tested-number-card"}return{cardComponent:t,title:void 0,updatedAt:void 0}},head:function(){var t=this,e="https://kyoto.stopcovid19.jp",c="".concat(e,"/ogp.jpg"),o="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、京都府が開設したものです。")),r="".concat(this.$t("京都府")," ").concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"));return{titleTemplate:function(title){return"".concat(t.title||title," | ").concat(r)},link:Object(n.a)(Object(l.a)("cards/".concat(this.$route.params.card),this.$i18n.locales,this.$i18n.defaultLocale)),meta:[{hid:"og:url",property:"og:url",content:"".concat(e).concat(this.$route.path,"/")},{hid:"og:title",property:"og:title",template:function(title){return"".concat(t.title||title," | ").concat(r)},content:""},{hid:"description",name:"description",template:function(e){return"".concat(t.updatedAt||e," | ").concat(o)},content:""},{hid:"og:description",property:"og:description",template:function(e){return"".concat(t.updatedAt||e," | ").concat(o)},content:""},{hid:"og:image",property:"og:image",content:c},{hid:"twitter:image",name:"twitter:image",content:c}]}}},h=c(6),component=Object(h.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)(this.cardComponent,{tag:"component"})}),[],!1,null,null,null);e.default=component.exports}}]);