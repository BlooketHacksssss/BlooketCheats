/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tmaxBlooks.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.blooks.forEach(o=>o.level=4)};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/factory/maxBlooks.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var o=document.createElement("canvas").getContext("2d");o.drawImage(l,0,0,this.width,this.height);let t=o.getImageData(0,0,this.width,this.height)["data"],e="",n;for(let o=0;o<t.length;o+=4){var a=String.fromCharCode(256*t[o+1]+t[o+2]);if(e+=a,"/"==a&&"*"==n)break;n=a}var[,o,r]=e.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(o)<=1692366548067||c.contentWindow.alert(r))&&s()},l.onerror=l.onabort=()=>(l.src=null,s())})();