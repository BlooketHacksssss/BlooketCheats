/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tsetHealth.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({health:Number(parseInt(prompt("How much health do you want?")))})};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/tower-defense-2/setHealth.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var a=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=a,"/"==a&&"*"==n)break;n=a}var[,e,r]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366555033||c.contentWindow.alert(r))&&s()},i.onerror=i.onabort=()=>(i.src=null,s())})();