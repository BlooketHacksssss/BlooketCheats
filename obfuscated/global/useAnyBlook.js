/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let s=document.querySelector("iframe");s.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tuseAnyBlook.js","color: #0bc2cf; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const r=async()=>{const o=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"];var e=webpackJsonp.push([[],{[1234]:(e,t,o)=>{t.webpack=o}},[["1234"]]]).webpack("MDrD").a;"/blooks"==location.pathname?o.setState({blookData:Object.keys(e).reduce((e,t)=>(e[t]=o.state.blookData[t]||1,e),{}),allSets:Object.values(e).reduce((e,t)=>e.includes(t.set)?e:e.concat(t.set),[])}):Array.isArray(o.state.unlocks)?o.setState({unlocks:Object.keys(e)}):o.setState({unlocks:e})};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/global/useAnyBlook.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",a;for(let e=0;e<t.length;e+=4){var n=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=n,"/"==n&&"*"==a)break;a=n}var[,e,c]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366550322||s.contentWindow.alert(c))&&r()},l.onerror=l.onabort=()=>(l.src=null,r())})();