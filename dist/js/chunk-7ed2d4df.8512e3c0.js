(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ed2d4df"],{2455:function(o,e,s){},"2e08":function(o,e){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgBzZZdUuJAFIXPbZCaeWMHZnbg7IB5iDBvugJlCexAdqAr0B2oL+IPFs0KzBJYQqp88Cekr91BsROCQuiAXxVFdadTOTm3++QCFnzeqJsfNgDZg+iu1SDCgEABSElmMYwiDn7/vx6hZFJCxvetQzBOc9aNtF8BFF0qxEFt9y6AY6r2gBU8otx1ntbsQWBPoIJxvxnqccCMob4mt/xriRVJPfb1tnUmBA5QDEnEgSln5fFJ0r4Ml7k5XZp+a6D/GnDAZJ9pYTGGi5QzJSTuNx8YtINSYOOQVLqcRmS2nFlHGOslKacQL13xMcODjeSHp/RJpH8ynAoZj3+VVJJ8GHxSeXz++1Gi6fElUtoRgbIhpkCBO1v+jbTnp0IUkycIJcIhM51U/d5R3lXLEeEZw0pCRhG1v/pUfAqB2s4cIgdwqFh0a37v+LuVVsST61Pz7kJvtMhiSwjvuHFkcRfmCHHhCF1EETqLujAj5PXWXzFDdHzHol1t9i5QkCQ4iCqF3ZgE08ufVUQYEkdI6H5j+ZM70v1IOxtMRUkcMQ3RMjdl49kFiSP6zeZ1ZlmcumCTOKK7su3vFmoBXdcu2Ez2CLjOczLEfKRipnZt98p5wzwjJL8rKxZMhYWYhiiOZ+aXimcnQkxD9LlR1+tCSojVEK3dhZQQKFFXRJ1NuPAjeQMoJOnd3aYLkwAAAABJRU5ErkJggg=="},"3a89":function(o,e,s){"use strict";s.r(e);var A=function(){var o=this,e=o.$createElement,A=o._self._c||e;return A("div",[A("div",{staticClass:"discoverMainCard"},[A("div",{staticClass:"flex"},[A("div",{staticClass:"book-info flex flex-column justify-between"},[A("div",[A("p",{staticClass:"book-title-card ellipsis",on:{click:function(e){return o.searchBook(o.book)}}},[o._v(o._s(o.book.title))]),A("p",{staticClass:"book-subtitle-card ellipsis"},[o._v(o._s(o.book.author))])]),A("p",{staticClass:"book-info-card ellipsis"},[A("font-awesome-icon",{attrs:{icon:"chart-bar"}}),o._v(" 120+ Read Now")],1)]),A("div",{staticClass:"img-content"},[A("img",{staticClass:"book-img",attrs:{src:o.book.imgCover||s("bffb"),alt:"book-cover"},on:{click:function(e){return o.searchBook(o.book)}}}),A("img",{staticClass:"triangle-detail",attrs:{src:s("2e08")}}),A("img",{staticClass:"circle-detail",attrs:{src:s("de02")}}),A("img",{staticClass:"bar-detail",attrs:{src:s("f459")}})])])])])},a=[],t={name:"DiscoverBookCard",data:function(){return{book:{id:"if5QDwAAQBAJ",title:"21 lições para o século 21",author:"Yuval Noah Harari",description:"O novo livro do autor de Sapiens e Homo Deus explora as grandes questões do presente e o que podemos fazer para melhorá-lo. Como podemos nos proteger de guerras nucleares, cataclismos ambientais e crises tecnológicas? O que fazer sobre a epidemia de fake news ou a ameaça do terrorismo? O que devemos ensinar aos nossos filhos? Em Sapiens, Yuval Noah Harari mostrou de onde viemos; em Homo Deus, para onde vamos. 21 lições para o século 21 explora o presente e nos conduz por uma fascinante jornada pelos assuntos prementes da atualidade. Seu novo livro trata sobre o desafio de manter o foco coletivo e individual em face a mudanças frequentes e desconcertantes. Seríamos ainda capazes de entender o mundo que criamos?",imgCover:"http://books.google.com/books/publisher/content?id=if5QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70ZjK3p747nqnQ-g3EYVbhgIUDsHT8tJHTp9RRpmB9Wil-WFfXvzmTC4oi788EUwn6ZDmfqbaPzvBTcaHFR3paUpBSjh-VCKMrR3DROrUC4FMKYWbB1-duy0Tnu3beOcbdG4_dO&source=gbs_api"}}},methods:{searchBook:function(o){this.$store.commit("BOOK_INFO",o),this.$router.push({path:"/details/".concat(o.id)})}}},i=t,n=(s("f9c9"),s("2877")),c=Object(n["a"])(i,A,a,!1,null,null,null);e["default"]=c.exports},bffb:function(o,e,s){o.exports=s.p+"img/cover-not-found.e5c709d0.jpg"},de02:function(o,e){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHqSURBVHgBrVRLUhsxEH0tSGXLDTI+QZwTZJLCZInIKnY29gkSToA5AXACexOGTSpil7KTMtzAN8jkBt6lKILE6/nwMQMMU7yqqda0pKenVncLKhDb0doqXvYNzFsgtAMQ5TMyFyANuDieus/jqr2y7Niwh9YDI4Gs4WGkgN9dJja3yY72AuSHklHVSUDYPgdaU9cV/UjwhssGkpGpajPasMlOpUKdIMmQV1zQ7v5yvX08gHV7+JVmRw/ntz9xn7avCDv2W19PUzJ+73iNOWqA+xhfmeWkYWvieq4gTP7oFfSKjymrUkrCPWpbnONfS0p1GpeJ67bQABQ0o4lVkAlY2VSnxg0NQaJjtQYSG4GPcrevFbcqrEJcTozXTBtp60/dh6jCT9dNi2Fk8MxQwlQH7z9+f4WGiJk+avnacz6KZFc1/mwLDfECaOej8JcK/WnBvonGMFn58VGc+Y+zccgqBPGHvJyehI49+kITaR6z3sfmxA20dgc66XlSp4hHPTItPT8s1GV5nL3yb9agRzigmy1rZVZHqSor61jJVJ36b/XDdZsM6SjbUar9jnZe5igbb8TGa4t4x/mycDB1vSsBcvfkpK+k1136PoQF1w20w9z0Cu69UtIPmRLPgEsZ1zRPM3+qj6nxX953CcGnwzDJfPZwAAAAAElFTkSuQmCC"},f459:function(o,e){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAQCAYAAABpyU3qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB1Za7DcJQDEV9IfRU1LBBNiAjwAREQvSREFMwBGECVggbsAElSkRBD4l5iSiQBSghP+c0lmU/6R5Xj8gQLtezyN3Y1CFwcb3xoG+ds4boxoSAmY+cIBj52xMpBVdzbVMOH4eKRdLgO1PcXMuKRF4X7y3AicPAsNDjFkXw3kQrz0ZsOQCm2kXwa6hZBEWWNYkUCi5pU6RUcEmTIpUGl9QpUmtwSVUiRMm+0eCS/0XYbzW4JL8Iz1UFl3wTucePCXWJVCTMvihETyDm1Gfo8cokAAAAAElFTkSuQmCC"},f9c9:function(o,e,s){"use strict";s("2455")}}]);
//# sourceMappingURL=chunk-7ed2d4df.8512e3c0.js.map