/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tmaxTowers.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{var e=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"];e.towers.forEach(e=>{e.range=100,e.fullCd=e.cd=0,e.damage=1e6})};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/tower-defense/maxTowers.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var a=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=a,"/"==a&&"*"==n)break;n=a}var[,e,r]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366554732||c.contentWindow.alert(r))&&s()},l.onerror=l.onabort=()=>(l.src=null,s())})();