/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let r=document.querySelector("iframe");r.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),r.contentWindow.console.log.call(window,"%c\tstockFood.js","color: #0bc2cf; font-size: 1rem"),r.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{var e=document.createElement("iframe");document.body.append(e),window.alert=e.contentWindow.alert.bind(window),e.remove(),"/cafe"!==window.location.pathname?alert("This can't be run in the shop"):(e=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"],e.setState({foods:e.state.foods.map(e=>({...e,stock:99,level:5}))}))};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/cafe/stockFood.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var a=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=a,"/"==a&&"*"==n)break;n=a}var[,e,c]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366546611||r.contentWindow.alert(c))&&s()},i.onerror=i.onabort=()=>(i.src=null,s())})();