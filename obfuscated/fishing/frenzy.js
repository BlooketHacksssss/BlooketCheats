/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tfrenzy.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{var e=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"];e.props.liveGameController.setVal({path:"c/"+e.props.client.name,val:{b:e.props.client.blook,w:e.state.weight,f:"Frenzy",s:!0}})};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/fishing/frenzy.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=r,"/"==r&&"*"==n)break;n=r}var[,e,a]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366548209||c.contentWindow.alert(a))&&s()},l.onerror=l.onabort=()=>(l.src=null,s())})();