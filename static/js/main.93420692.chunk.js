(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Stupid Sexy Flanders",image:"https://vignette.wikia.nocookie.net/simpsons/images/6/68/Stupid_Sexy_Flanders.png/revision/latest/scale-to-width-down/350?cb=20150313213758",count:0},{id:2,name:"Grandpa",image:"https://vignette.wikia.nocookie.net/simpsons/images/b/b1/Hi.jpg/revision/latest/scale-to-width-down/200?cb=20111002053616",count:0},{id:3,name:"Krusty",image:"https://vignette.wikia.nocookie.net/simpsons/images/a/a5/Homer_krusty.jpg/revision/latest/scale-to-width-down/200?cb=20160320214316",count:0},{id:4,name:"Nelson",image:"https://vignette.wikia.nocookie.net/simpsons/images/d/d2/Nelson_bleeding.JPG/revision/latest/scale-to-width-down/200?cb=20060820164122",count:0},{id:5,name:"Lisa",image:"https://vignette.wikia.nocookie.net/simpsons/images/2/21/IMG_6089.gif/revision/latest?cb=20161017184724",count:0},{id:6,name:"Marge",image:"https://vignette.wikia.nocookie.net/simpsons/images/b/b4/Glasses.png/revision/latest/scale-to-width-down/180?cb=20140323083040",count:0},{id:7,name:"Alien Burns",image:"https://vignette.wikia.nocookie.net/simpsons/images/9/97/Mr_Burns_alien.png/revision/latest/scale-to-width-down/180?cb=20100702145947",count:0},{id:8,name:"Willie",image:"https://vignette.wikia.nocookie.net/simpsons/images/4/47/Hokuto_no_willie.jpg/revision/latest/scale-to-width-down/180?cb=20110215003415",count:0},{id:9,name:"Otto",image:"https://vignette.wikia.nocookie.net/simpsons/images/e/e8/Otto_pwns_marge.jpg/revision/latest/scale-to-width-down/230?cb=20120115171707",count:0},{id:10,name:"Maggie",image:"https://vignette.wikia.nocookie.net/simpsons/images/7/7f/Maggie_in_season_20.gif/revision/latest/scale-to-width-down/200?cb=20120211040854",count:0},{id:11,name:"Sideshow Bob",image:"https://vignette.wikia.nocookie.net/simpsons/images/9/9a/Bob_prison.jpg/revision/latest/scale-to-width-down/200?cb=20100614161556",count:0},{id:12,name:"Milhouse",image:"https://vignette.wikia.nocookie.net/simpsons/images/c/c3/Milhouse_Future.png/revision/latest/scale-to-width-down/180?cb=20100614171702",count:0}]},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(3),a=n.n(s),c=(n(14),n(4)),r=n(5),m=n(7),l=n(6),g=n(8);n(15);var u=function(e){return o.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name,src:e.image})))};n(16);var d=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};n(17);var h=function(e){return o.a.createElement("h1",{className:"title"},e.children)},p=n(1),w=(n(18),function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={cards:p,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find(function(t,i){if(t.id===e){if(0===p[i].count)return p[i].count=p[i].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(d,null,o.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map(function(t){return o.a.createElement(u,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.93420692.chunk.js.map