/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let a=document.querySelector("iframe");a.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),a.contentWindow.console.log.call(window,"%c\tchoiceESP.js","color: #0bc2cf; font-size: 1rem"),a.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{let o=["materials","people","happiness","gold"],n=Object.fromEntries([...document.querySelectorAll("[class^=styles__statContainer]")].map((e,t)=>[o[t],e]));var{guest:e,phase:t}=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state;"choice"==t&&(Array.from(document.getElementsByClassName("choiceESP")).forEach(e=>e.remove()),Object.entries(e.yes||{}).forEach(e=>{var t;"msg"!=e[0]&&o.includes(e[0])&&((t=document.createElement("div")).className="choiceESP",t.style="font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;",t.innerText=String(e[1]),n[e[0]].appendChild(t))}),Object.entries(e.no||{}).forEach(e=>{var t;"msg"!=e[0]&&o.includes(e[0])&&((t=document.createElement("div")).className="choiceESP",t.style="font-size: 24px; color: darkred; font-weight: bolder;",t.innerText=String(e[1]),n[e[0]].appendChild(t))}))};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/kingdom/choiceESP.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var c=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=c,"/"==c&&"*"==n)break;n=c}var[,e,r]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366552118||a.contentWindow.alert(r))&&s()},i.onerror=i.onabort=()=>(i.src=null,s())})();