/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tfloodGame.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const s=async()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();const r=prompt("Game ID:"),c=prompt("Name:");var t=parseInt(prompt("Amount:")),e=Object.values(webpackJsonp.push([[],{"":(e,t,o)=>{t.cache=o.c}},[[""]]]).cache);const s=e.find(e=>e.exports?.a?.get).exports.a,i=e.find(e=>e.exports?.a?.initializeApp).exports.a,l=Object.keys(Object.values(e).find(e=>e.exports.a?.Black).exports.a);for(let n=1;n<=t;n++)(async()=>{var e=""+c+String.fromCharCode(96+n),{success:t,fbToken:o,fbShardURL:a}=(await s.put("https://fb.blooket.com/c/firebase/join",{id:r,name:e}))["data"];t&&(t=i.initializeApp({apiKey:"AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",authDomain:"blooket-2020.firebaseapp.com",projectId:"blooket-2020",storageBucket:"blooket-2020.appspot.com",messagingSenderId:"741533559105",appId:"1:741533559105:web:b8cbb10e6123f2913519c0",measurementId:"G-S3H5NGN10Z",databaseURL:a},e),await(a=i.auth(t)).setPersistence(i.auth.Auth.Persistence.NONE).catch(console.error),await a.signInWithCustomToken(o).catch(console.error),await t.database().ref(r+"/c/"+e).set({b:l[Math.floor(Math.random()*l.length)]}),t.delete())})(),await new Promise(e=>setTimeout(e,100))};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/global/floodGame.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",a;for(let e=0;e<t.length;e+=4){var n=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=n,"/"==n&&"*"==a)break;a=n}var[,e,r]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692366548657||c.contentWindow.alert(r))&&s()},i.onerror=i.onabort=()=>(i.src=null,s())})();