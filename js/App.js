const VALUES=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],TYPES=["h","d","c","s"],VALUE_LABELS=["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"],TYPE_LABELS=["hearts","diamonds","clubs","spades"],CARRE={value:7,name:" avec un carré"},FULL={value:6,name:" avec un Full"},FLUSH={value:5,name:" avec un flush"},BRELAN={value:4,name:" avec un brelan"},TWOPAIRS={value:3,name:" avec 2 pairs"},ONEPAIR={value:2,name:" avec one pair"},ORDERCARDS={value:1,name:" avec la hauteur"},reducer=(e,a)=>e+a;function compare(e,a){return analyseDuJeu(e).value>analyseDuJeu(a).value?"HERO gagne"+analyseDuJeu(e).name:"VILAIN gagne"+analyseDuJeu(a).name}function analyseDuJeu(e){let a=e,n=a.map(e=>VALUES.indexOf(e.slice(0,-1))),t=a.map(e=>TYPES.indexOf(e.slice(-1))),s=t.every(e=>e===t[0]),l=VALUES.map((e,a)=>n.filter(e=>a===e).length).sort((e,a)=>a-e);return 4===l[0]?CARRE:3===l[0]&&2===l[1]?FULL:s?FLUSH:3===l[0]?BRELAN:2===l[0]&&2===l[1]?TWOPAIRS:2===l[0]?ONEPAIR:ORDERCARDS}function startGame(){let e=[],a=[],n=[],t=VALUES.flatMap(e=>TYPES.map(a=>e+a)).shuffle();n=t.slice(0,5),e=t.slice(5,7),a=t.slice(7,9);let s=document.getElementById("HeroCards0"),l=document.getElementById("HeroCards1"),r=document.getElementById("VilainCards0"),u=document.getElementById("VilainCards1"),c=document.getElementById("FloorCards0"),o=document.getElementById("FloorCards1"),m=document.getElementById("FloorCards2"),d=document.getElementById("FloorCards3"),i=document.getElementById("FloorCards4");s.src="assets/"+e[0]+".png",l.src="assets/"+e[1]+".png",r.src="assets/"+a[0]+".png",u.src="assets/"+a[1]+".png",c.src="assets/"+n[0]+".png",o.src="assets/"+n[1]+".png",m.src="assets/"+n[2]+".png",d.src="assets/"+n[3]+".png",i.src="assets/"+n[4]+".png";let E=[...n,...e],g=[...n,...a];document.getElementById("result").innerText=compare(E,g)}Array.prototype.shuffle=function(){let e=this,a=[];for(;e.length>0;){let n=Math.floor(Math.random()*e.length);a.push(e[n]),e.splice(n,1)}return a},$(document).ready(function(){$("#play").click(function(){startGame()})});