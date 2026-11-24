(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const es={warden:{kind:"warden",name:"THE FOUNDRY WARDEN",epithet:"A furnace in a plate shell",element:"thermal",paint:12866074,glow:16752688,metal:"gunmetal",moves:[["slam"],["slam"],["slam","drops"]],cd:[6.5,4.6,4.2],speed:[1,1.35,1.5],persona:["turtle","rusher","rusher"],phaseName:["SHELL ON","SHELL SHED","SLAG FALL"],drops:[0,0,1],chain:[!1,!1,!1]},piledriver:{kind:"piledriver",name:"THE PILEDRIVER",epithet:"A ram that runs the arena",element:"quake",paint:14200864,glow:16765498,metal:"steel",moves:[["charge"],["charge"],["charge","slam"]],cd:[6,4.6,3.6],speed:[1,1.2,1.3],persona:["ambusher","rusher","rider"],phaseName:["RAM READY","DOUBLE CHARGE","CHARGE AND CRUSH"],drops:[0,0,0],chain:[!1,!0,!1]},gyre:{kind:"gyre",name:"THE GYRE ENGINE",epithet:"A gyroscope that drags you in",element:"volt",paint:2789304,glow:6480639,metal:"chrome",moves:[["vortex"],["drops","vortex"],["vortex","charge"]],cd:[7,5,4],speed:[1,1.25,1.4],persona:["turtle","ambusher","rusher"],phaseName:["GYRO SPIN","PYLON RAIN","OVERSPEED"],drops:[0,2,0],chain:[!1,!1,!1]},flywheel:{kind:"flywheel",name:"THE LAST FLYWHEEL",epithet:"Stored spin of every machine before it",element:"mag",paint:9313324,glow:16730716,metal:"copper",moves:[["charge","slam"],["charge","drops","vortex"],["charge","slam","drops","vortex"]],cd:[5.5,4.2,3.2],speed:[1,1.25,1.4],persona:["rider","rusher","rusher"],phaseName:["FULL RIM","SPOKES OUT","RUNAWAY"],drops:[0,1,2],chain:[!1,!1,!0]}},zp=["warden","piledriver","gyre","flywheel"],Fd=i=>zp[(Math.floor(i/5)-1+4)%4],Ae={SLAM_WIND:.9,SLAM_R:4.4,CHARGE_WIND:1.1,CHAIN_WIND:.55,CHARGE_T:.75,CHARGE_SPEED:30,CHARGE_LANE:2.6,VORTEX_WIND:1.4,VORTEX_R:12,VORTEX_PULL:15,DROP_WIND:.5,DROP_DELAY:1.3,DROP_R:2.3,CRASH_STUN:.9},la={id:"foundry",name:"THE FOUNDRY",radius:10,pull:1.3,segments:24,segHp:3,openSegs:[6,14,22],rail:{width:1.6,accel:16,max:26},pillars:[],theme:{floor:1382950,wall:8950440,strip:4029439}},Qa=(i,t,e,n,s=0)=>Array.from({length:i},(a,r)=>{const o=s+r/i*Math.PI*2;return{x:Math.cos(o)*t,y:Math.sin(o)*t,r:e,hp:n}}),Hp={id:"pillaryard",name:"PILLAR YARD",radius:10,pull:1,segments:24,segHp:2,openSegs:[0,12],rail:{width:1.6,accel:12,max:22},pillars:Qa(4,4.6,.75,4,Math.PI/4),theme:{floor:1840914,wall:10521192,strip:16747050}},Gp={id:"crucible",name:"THE CRUCIBLE",radius:14,pull:.9,segments:32,segHp:3.5,openSegs:[0,8,16,24],rail:{width:1.8,accel:18,max:30},pillars:Qa(6,7.2,.9,5),theme:{floor:1905684,wall:10129295,strip:16730682}},Vp={id:"ironbasin",name:"IRON BASIN",radius:14,pull:1,segments:32,segHp:2.5,openSegs:[5,16,27],rail:{width:1.8,accel:20,max:32},pillars:[],theme:{floor:1054746,wall:8362656,strip:2807496}},Wp={id:"colosseum",name:"THE COLOSSEUM",radius:18,pull:.7,segments:40,segHp:4,openSegs:[0,10,20,30],rail:{width:2,accel:20,max:34},pillars:[...Qa(4,5.5,1.1,7),...Qa(8,12,.9,5,Math.PI/8)],theme:{floor:1446940,wall:11116736,strip:10120191}},nl=i=>({id:`crumble${i}`,name:"THE CRUMBLE",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:[],rail:null,pillars:i===18?Qa(4,6,1,6,Math.PI/4):[],theme:{floor:2365974,wall:10850168,strip:16742954},collapse:i===10?{sectors:8,inner:.38,start:12,every:3.4,warn:1.4}:i===14?{sectors:10,inner:.34,start:11,every:3,warn:1.4}:{sectors:12,inner:.3,start:10,every:2.6,warn:1.4}}),il=i=>{const t=i,e=t===10?[{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:0},{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:Math.PI}]:t===14?[{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:0},{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:Math.PI},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:7.5,period:7,phase:0,r:1.1},{kind:"block",x:0,y:0,ang:0,amp:7.5,period:7,phase:3.5,r:1.1}]:[{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:0},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*2/3},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*4/3},{kind:"block",x:0,y:0,ang:Math.PI/4,amp:11,period:8,phase:0,r:1.3},{kind:"block",x:0,y:0,ang:-Math.PI/4,amp:11,period:8,phase:4,r:1.3},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:11,period:9,phase:2,r:1.3},{kind:"block",x:0,y:0,ang:0,amp:11,period:9,phase:6.5,r:1.3}];return{id:`thresher${i}`,name:"THE THRESHER",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:i===10?[3,15]:i===14?[4,20]:[5,25],rail:null,pillars:[],theme:{floor:1318940,wall:8364176,strip:11992890},hazards:e}},Xp=[la,Hp,Gp,Vp,Wp,nl(10),nl(14),nl(18),il(10),il(14),il(18)];function th(i,t){if(i.kind==="bar")return{a:i.phase+i.omega*t,x:0,y:0,vx:0,vy:0};const e=Math.PI*2/i.period,n=Math.sin(e*t+i.phase),s=Math.cos(e*t+i.phase);return{a:i.ang,x:i.x+Math.cos(i.ang)*i.amp*n,y:i.y+Math.sin(i.ang)*i.amp*n,vx:Math.cos(i.ang)*i.amp*e*s,vy:Math.sin(i.ang)*i.amp*e*s}}function eh(i,t){const e=(t%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return Math.min(i.sectors-1,Math.floor(e/(Math.PI*2)*i.sectors))}function Bd(i){const t=i<=2?10:i<=4?14:18;return Xp.filter(e=>e.radius===t)}const No=["thermal","cryo","volt","gale","quake","mag","plasma","gravity","resonance"],qp=["plasma","gravity","resonance"],ke={thermal:{name:"Thermal",color:16734751,status:"HEATED",statusText:"loses spin steadily",super:{name:"MELTDOWN",dur:4,atk:1.6,steer:1.35,start:{radius:4,impulse:9,status:!0},pulse:{every:.5,radius:3.4,spin:1.6,status:!0}}},cryo:{name:"Cryo",color:8379647,status:"CHILLED",statusText:"steers and travels at about half speed",super:{name:"ABSOLUTE ZERO",dur:2.2,guard:.5,start:{radius:6.5,stun:1.4,armour:.08,status:!0}}},volt:{name:"Volt",color:16773226,status:"CHARGED",statusText:"takes extra spin damage from hits",super:{name:"ARC STORM",dur:3,pulse:{every:.35,radius:9,nearest:!0,spin:3.2,stun:.12,status:!0}}},gale:{name:"Gale",color:10354640,status:"LIFTED",statusText:"is thrown much further by hits",super:{name:"CYCLONE",dur:2.2,pull:{radius:8,accel:26},end:{radius:5.5,impulse:27,status:!0}}},quake:{name:"Quake",color:14263386,status:"CRACKED",statusText:"takes extra armour damage",super:{name:"FAULT LINE",dur:1,start:{radius:7,impulse:20,armour:.15,status:!0,wreck:2.6}}},mag:{name:"Mag",color:12946431,status:"PULLED",statusText:"is dragged toward whoever marked it",super:{name:"POLARITY",dur:.7,guard:.6,start:{radius:40,nearest:!0,impulse:-24,status:!0},end:{radius:4,impulse:32}}},plasma:{name:"Plasma",color:16732120,status:"IONISED",statusText:"has its armour eaten away",super:{name:"NOVA LANCE",dur:1.1,atk:1.3,start:{radius:15,nearest:!0,armour:.2,spin:5,impulse:16,status:!0}}},gravity:{name:"Gravity",color:6978559,status:"SLUNG",statusText:"slides outward toward the rim",super:{name:"SINGULARITY",dur:2.6,guard:.7,pull:{radius:11,accel:34},pulse:{every:.4,radius:3,spin:1.4,armour:.02},end:{radius:5.5,impulse:30,status:!0}}},resonance:{name:"Resonance",color:5242848,status:"RINGING",statusText:"bleeds Overdrive charge",super:{name:"HARMONIC",dur:2.4,pulse:{every:.6,radius:6.5,stun:.35,armour:.05,impulse:8,wreck:.8,status:!0}}}},$p=4,Yp=[{a:"thermal",b:"cryo",name:"THERMAL SHOCK",color:16777215,armour:.22},{a:"thermal",b:"gale",name:"FIRESTORM",color:16747050,spin:13},{a:"cryo",b:"quake",name:"SHATTER",color:12578815,armour:.28},{a:"volt",b:"mag",name:"RAILSHOT",color:14721279,impulse:34},{a:"cryo",b:"volt",name:"SUPERCONDUCT",color:11465983,stun:1.3,spin:4},{a:"thermal",b:"quake",name:"ERUPTION",color:16738874,impulse:20,armour:.14},{a:"gale",b:"volt",name:"TEMPEST",color:14221194,spin:9,impulse:14},{a:"gale",b:"quake",name:"SANDBLAST",color:15255696,armour:.12,spin:6},{a:"mag",b:"quake",name:"IRON TIDE",color:12098815,impulse:22,armour:.1},{a:"plasma",b:"volt",name:"OVERLOAD",color:16752880,stun:1,armour:.16},{a:"plasma",b:"cryo",name:"FLASH FREEZE",color:14731519,stun:.6,armour:.2},{a:"plasma",b:"gravity",name:"EVENT HORIZON",color:11559167,armour:.3,spin:8},{a:"gravity",b:"quake",name:"COLLAPSE",color:9081087,armour:.26},{a:"gravity",b:"gale",name:"SLINGSHOT",color:9494783,impulse:38},{a:"resonance",b:"quake",name:"AFTERSHOCK",color:10479808,armour:.15,stun:.8},{a:"resonance",b:"volt",name:"FEEDBACK",color:13172634,spin:12},{a:"resonance",b:"thermal",name:"BOILOVER",color:16760970,spin:10,armour:.08}],zd=(i,t)=>Yp.find(e=>e.a===i&&e.b===t||e.a===t&&e.b===i),Kp=i=>{const t=ke[i];return{id:i,name:t.name,elements:[i],blurb:`${t.super.name}. Marks foes ${t.status}: a marked top ${t.statusText}.`}},ei=(i,t,e,n)=>({id:i,name:t,elements:[e,n],blurb:`Fused ${ke[e].name} and ${ke[n].name}. Fires both supers at once, and its strikes set off ${zd(e,n)?.name??"both statuses"} on their own.`}),Mo=[...No.map(Kp),ei("firestorm","Firestorm","thermal","gale"),ei("glacier","Glacier","cryo","quake"),ei("railgun","Railgun","volt","mag"),ei("superconductor","Superconductor","cryo","volt"),ei("magma","Magma","thermal","quake"),ei("tempest","Tempest","gale","volt"),ei("horizon","Event Horizon","plasma","gravity"),ei("overload","Overload","plasma","volt"),ei("collapse","Collapse","gravity","quake"),ei("feedback","Feedback","resonance","volt")],dr=i=>Mo.find(t=>t.id===i)??Mo[0],Bh=i=>dr(i).elements.length>1,Hd=i=>dr(i).elements.some(t=>qp.includes(t)),zh=i=>Hd(i)?Bh(i)?4:3:Bh(i)?2:0,vt=1/60,Gd=60,dt={SMASH:.03,TANG:.3,SPINLOSS:.025,EQ:.05,BURST:.0024,BURST_DRAIN:.01,STEER_MULT:2.8,RIM_E:.6,RIM_SPIN:.03,HIT_CD:.07,WEAK_KB:1,WALL_MIN:7,WALL_DIV:11,ARMOUR_MIN:11,ARMOUR:.002,STAGGER_T:.9,STAGGER_ARMOUR:.2,HEAT_DRAIN:1,SUPER_PASSIVE:.012,SUPER_HIT:.011,SUPER_STRIKE:.1,BOOST_IMPULSE:18,BOOST_CD:.9,BOOST_COST:.5,BOOST_T:.3,STRIKE_T:.22,STRIKE_CD:1.1,STRIKE_CD_HIT:.45,STRIKE_COST:.8,STRIKE_ATK:1.7,STRIKE_GUARD:.55,DASH_IMPULSE:24,DASH_CD:6,DASH_COST:2,DASH_T:.6,BRACE_T:1.5,BRACE_CD:8,BRAKE_T:.6,BRAKE_MINHOLD:.12,BRAKE_CD:7,BRAKE_COST:1,BRAKE_GAIN:1.3,BRAKE_PLUS:6,BRAKE_MIN:14,BRAKE_MAX:34,BRAKE_GUARD:.35,JUMP_T:.45,JUMP_CD:7,JUMP_COST:1.5,JUMP_HOP:9,LAND_R:3.4,LAND_IMPULSE:12,LAND_SPIN:2,LAND_ARMOUR:.015,HAZ_E:.5,HAZ_SPIN:.5,HAZ_ARMOUR_MIN:8,HAZ_ARMOUR:.006,COUNTER_WIN:.35,COUNTER_SPEED:11,COUNTER_IMPULSE:16,LAUNCH_FRAC:.65},Vd={dash:"SURGE",brace:"BRACE",brake:"BRAKE",spring:"SPRING"},$i={sx:0,sy:0,ability:!1,boost:!1,strike:!1};function jp(i,t){const e=i.collapse;if(!e)return{floorT:[],floorPhase:[]};let n=t^1540483477|0;const s=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296},a=Array.from({length:e.sectors},(o,l)=>l);for(let o=a.length-1;o>0;o--){const l=Math.floor(s()*(o+1));[a[o],a[l]]=[a[l],a[o]]}const r=new Array(e.sectors).fill(0);return a.forEach((o,l)=>r[o]=e.start+e.warn+l*e.every),{floorT:r,floorPhase:new Array(e.sectors).fill(0)}}function Hh(i,t,e=la,n=i.map((s,a)=>a%2)){return{teams:n,pairCd:new Array(i.length*i.length).fill(0),lastOut:null,zones:[],shots:[],burn:[],stadium:e,segHp:Array.from({length:e.segments},(s,a)=>e.openSegs.includes(a)?0:e.segHp),pillars:e.pillars.map(s=>({...s})),...jp(e,t),tops:i.map(s=>({spec:s,x:0,y:0,vx:0,vy:0,px:0,py:0,spin:0,phase:0,burst:0,inPlay:!1,leaving:!1,out:null,steerX:0,steerY:0,abilityCd:0,braceT:0,dashT:0,brakeT:0,brakeSpeed:0,brakeDx:0,brakeDy:0,airT:0,counterT:0,boostCd:0,boostT:0,strikeT:0,combo:0,comboT:0,statusFrom:{},strikeCd:0,onRail:!1,shift:0,plates:0,sink:0,status:{thermal:0,cryo:0,volt:0,gale:0,quake:0,mag:0,plasma:0,gravity:0,resonance:0},statusBy:0,reactCd:0,stunT:0,superMeter:0,superT:0,pulseT:0,armour:1,stage:0,bossMove:null,bossStage:0,bossT:0,bossDur:1,bossDx:0,bossDy:1,bossCd:2.2,bossCount:0,bossChain:0,lg:{}})),time:0,rng:t|0,over:null}}function Va(i){i.rng=i.rng+1831565813|0;let t=Math.imul(i.rng^i.rng>>>15,1|i.rng);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}const vn=i=>Math.abs(i.spin)/i.spec.maxSpin,Js=i=>(i.ability==="dash"?dt.DASH_CD:i.ability==="brake"?dt.BRAKE_CD:i.ability==="spring"?dt.JUMP_CD:dt.BRACE_CD)*(i.abil?.cd??1),$e=i=>i.spec.radius+(i.spec.shift?.radius??0)*i.shift+(i.spec.flail?i.spec.flail.radius*Math.min(1,vn(i)):0),Gh=i=>(i.spec.flail?1+i.spec.flail.attack*(Math.min(1,vn(i))-.5):1)*(i.spec.plates?1-i.spec.plates.attack*i.plates:1),Vh=i=>(i.spec.plates?1+i.spec.plates.speed*i.plates:1)*(i.spec.boss?es[i.spec.boss.kind].speed[Math.min(2,i.stage)]:1),oo=(i,t)=>1+(i.spec.shift?.[t]??0)*i.shift,Qe=i=>i.inPlay&&!i.out&&!i.leaving,Nn=(i,t)=>!!i.spec.legends?.includes(t),rn=(i,t)=>i.lg[t]??0;function Xl(i,t){const e=i.segments;return(Math.round(t/(Math.PI*2)*e)%e+e)%e}const tr=i=>i.radius*dt.LAUNCH_FRAC;function Wd(i,t,e,n){const s=i.tops[t];if(s.inPlay)return;let{x:a,y:r}=e;const o=Math.hypot(a,r),l=tr(i.stadium);o>l&&(a*=l/o,r*=l/o);const c=Math.max(0,Math.min(1,e.power)),h=c>=.9,u=Math.max(-1,Math.min(1,e.tilt));s.x=s.px=a,s.y=s.py=r,s.spin=s.spec.spinDir*s.spec.maxSpin*(h?1:.6+.4*c);const f=Math.hypot(a,r),d=f>.05?-r/f:1,m=f>.05?a/f:0;s.vx=d*u*14*s.spec.spinDir,s.vy=m*u*14*s.spec.spinDir,s.inPlay=!0,h&&Nn(s,"opener")&&(s.lg.opener=1,s.lg.openerT=4,n.push({type:"legend",id:"opener",i:t,x:a,y:r})),n.push({type:"launch",i:t,perfect:h})}function Wh(i,t){return t<dt.WALL_MIN?i:Math.max(0,i-t/dt.WALL_DIV)}const ql=i=>i.spec.mass*(i.stage>=2?.85:1)*(i.spec.plates?1-i.spec.plates.mass*i.plates:1);function $l(i,t){if(i.superT<=0)return 1;let e=1;for(const n of i.spec.elements){const s=ke[n].super[t];s!==void 0&&(e=t==="guard"?Math.min(e,s):Math.max(e,s))}return e}const xa=(i,t)=>{i.spin=Math.max(0,Math.abs(i.spin)-t)*i.spec.spinDir},Ma=(i,t,e,n)=>{const s=i.x-t,a=i.y-e,r=Math.hypot(s,a)||1,o=Math.sqrt(ql(i)/1.1);i.vx+=s/r*n/o,i.vy+=a/r*n/o},Zp=2,Jp=.05,Qp=3.5,t0=1.2,e0=.15,n0=.07;function _n(i,t,e,n){const s=i.tops[t];if(s.out||e<=0)return;if(s.armour=Math.max(0,s.armour-e*(s.status.quake>0?1.6:1)*(s.braceT>0||s.brakeT>0?.4:1)),s.spec.plates){const r=Math.min(s.spec.plates.count,Math.floor((1-s.armour)/n0));for(;s.plates<r;)s.plates++,n.push({type:"plate",i:t,lost:s.plates,left:s.spec.plates.count-s.plates})}const a=s.armour<=0?3:s.armour<.34?2:s.armour<.67?1:0;a>s.stage&&(s.stage=a,n.push({type:"crack",i:t,stage:a}),s.spec.boss&&a<3&&o0(i,t,a,n),a===3&&(s.out="broken",n.push({type:"out",i:t,reason:"broken"})))}function vo(i,t,e,n,s){const a=i.tops[t];if(!a.out){if(a.reactCd<=0)for(const r of No){if(r===e||a.status[r]<=0)continue;const o=zd(e,r);if(!o)continue;const l=i.tops[n],c=a.statusFrom[r],h=c!==void 0&&c!==n&&i.teams[c]===i.teams[n],u=l.spec.superPower*(h?t0:1);if(h)for(const f of[c,n])i.tops[f].superMeter=Math.min(1,i.tops[f].superMeter+e0);a.status[r]=0,a.status[e]=0,a.reactCd=1.5,o.spin&&xa(a,o.spin*u),o.stun&&(a.stunT=Math.max(a.stunT,o.stun)),o.impulse&&Ma(a,l.x,l.y,o.impulse),s.push({type:"react",i:t,by:n,name:o.name,color:o.color,x:a.x,y:a.y,team:h}),o.armour&&_n(i,t,o.armour*u,s);return}a.status[e]=$p,a.statusFrom[e]=n,e==="mag"&&(a.statusBy=n)}}function lo(i,t,e,n,s){const a=i.tops[t],r=a.spec.superPower*(rn(a,"halfT")>0?.5:1),o=c=>Math.hypot(i.tops[c].x-a.x,i.tops[c].y-a.y);let l=[];i.tops.forEach((c,h)=>{i.teams[h]!==i.teams[t]&&Qe(c)&&c.airT<=0&&o(h)<=n.radius+$e(c)&&l.push(h)}),n.nearest&&l.length>1&&(l=[l.sort((c,h)=>o(c)-o(h))[0]]);for(const c of l){const h=i.tops[c];n.impulse&&Ma(h,a.x,a.y,n.impulse),n.spin&&xa(h,n.spin*r),n.stun&&(h.stunT=Math.max(h.stunT,n.stun)),n.status&&vo(i,c,e,t,s),n.armour&&_n(i,c,n.armour*r,s)}if(n.wreck){i.pillars.forEach((u,f)=>{u.hp<=0||Math.hypot(u.x-a.x,u.y-a.y)>n.radius||(u.hp=Math.max(0,u.hp-n.wreck),u.hp<=0&&s.push({type:"break",kind:"pillar",index:f,x:u.x,y:u.y}))});const c=i.stadium.radius,h=Math.hypot(a.x,a.y);if(h>.5&&c-h<n.radius){const u=Math.acos(Math.max(-1,Math.min(1,(c*c+h*h-n.radius*n.radius)/(2*c*h)))),f=Math.atan2(a.y,a.x),d=i.stadium.segments;for(let m=0;m<d;m++){const x=m/d*Math.PI*2,p=Math.atan2(Math.sin(x-f),Math.cos(x-f));Math.abs(p)>u||i.segHp[m]<=0||(i.segHp[m]=Math.max(0,i.segHp[m]-n.wreck*.6),i.segHp[m]<=0&&s.push({type:"break",kind:"wall",index:m,x:Math.cos(x)*c,y:Math.sin(x)*c}))}}}s.push({type:"pulse",i:t,x:a.x,y:a.y,radius:Math.min(n.radius,12),element:e,targets:l})}function Yl(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((a,r)=>{if(i.teams[r]===i.teams[t]||!Qe(a))return;const o=Math.hypot(a.x-e.x,a.y-e.y);o<s&&(s=o,n=a)}),n}function i0(i,t,e){const n=i.tops[t],s=[];i.tops.forEach((a,r)=>{i.teams[r]===i.teams[t]||!Qe(a)||a.airT>0||Math.hypot(a.x-n.x,a.y-n.y)>dt.LAND_R+$e(a)||(s.push(r),Ma(a,n.x,n.y,dt.LAND_IMPULSE),xa(a,dt.LAND_SPIN),_n(i,r,dt.LAND_ARMOUR,e))}),e.push({type:"land",i:t,x:n.x,y:n.y,radius:dt.LAND_R,targets:s})}function s0(i,t,e,n){const s=i.tops[e];let a=e,r=1/0;i.tops.forEach((c,h)=>{if(h===e||i.teams[h]===i.teams[t]||!Qe(c))return;const u=Math.hypot(c.x-s.x,c.y-s.y);u<r&&(r=u,a=h)});let o=s.x,l=s.y;if(a===e){const c=i.tops[t],h=Math.hypot(s.x-c.x,s.y-c.y)||1;o+=(s.x-c.x)/h*3,l+=(s.y-c.y)/h*3}i.shots.push({i:t,k:a,x:o,y:l,t:2,power:a===e?.5:1}),n.push({type:"legend",id:"shard",i:t,x:o,y:l,k:a})}function a0(i,t){for(let e=i.shots.length-1;e>=0;e--){const n=i.shots[e],s=i.tops[n.k];if(n.t-=vt,n.t<=0||!s||s.out){i.shots.splice(e,1);continue}const a=s.x-n.x,r=s.y-n.y,o=Math.hypot(a,r)||1;if(n.x+=a/o*34*vt,n.y+=r/o*34*vt,o<$e(s)+.5&&s.airT<=0){i.shots.splice(e,1),Ma(s,n.x-a/o*2,n.y-r/o*2,14*n.power),xa(s,4*n.power),s.stunT=Math.max(s.stunT,.25),_n(i,n.k,.05*n.power,t);for(const l of i.tops[n.i].spec.elements)vo(i,n.k,l,n.i,t);t.push({type:"legend",id:"shard",i:n.i,x:s.x,y:s.y,k:n.k,n:1})}}for(let e=i.burn.length-1;e>=0;e--){const n=i.burn[e];if(n.t-=vt,n.t<=0){i.burn.splice(e,1);continue}for(let s=0;s<i.tops.length;s++){const a=i.tops[s];i.teams[s]===i.teams[n.i]||!Qe(a)||a.airT>0||Math.hypot(a.x-n.x,a.y-n.y)<.9+$e(a)*.5&&(a.lg.burnT=.4)}}}function r0(i,t,e){const n=i.tops[t],s=n.lg;let a=0;if(Nn(n,"bank")&&!s.bankUsed&&rn(n,"bank")>0&&vn(n)<.25&&(a+=s.bank,e.push({type:"legend",id:"bank",i:t,x:n.x,y:n.y,n:s.bank}),s.bank=0,s.bankUsed=1),Nn(n,"scorch")&&n.airT<=0&&(s.scorchT=rn(n,"scorchT")-vt,s.scorchT<=0&&Math.hypot(n.vx,n.vy)>5&&(s.scorchT=.09,i.burn.push({i:t,x:n.x,y:n.y,t:2.2}),i.burn.length>70&&i.burn.shift(),e.push({type:"legend",id:"scorch",i:t,x:n.x,y:n.y}))),rn(n,"burnT")>0&&(s.burnT-=vt,a-=3.2*vt,_n(i,t,.008*vt,e),s.burnTick=rn(n,"burnTick")-vt,s.burnTick<=0&&(s.burnTick=.2,e.push({type:"legend",id:"scorch",i:t,x:n.x,y:n.y,n:1}))),rn(n,"bleed")>0&&(s.bleed-=vt,_n(i,t,.012*vt,e),s.bleedTick=rn(n,"bleedTick")-vt,s.bleedTick<=0&&(s.bleedTick=.3,e.push({type:"legend",id:"rend",i:t,x:n.x,y:n.y,n:1}))),rn(n,"twin")===1&&(s.twinT-=vt,s.twinT<=0&&(s.twin=0,n.abilityCd=Math.max(n.abilityCd,Js(n.spec)))),rn(n,"opener")===1&&(s.openerT-=vt,s.openerT<=0&&(s.opener=0)),rn(n,"echoT")>0&&(s.echoT-=vt,s.echoT<=0)){const r=Math.max(...n.spec.elements.map(o=>ke[o].super.dur));s.halfT=r,n.superT=r,n.pulseT=0,e.push({type:"super",i:t,elements:n.spec.elements}),e.push({type:"legend",id:"echo",i:t,x:n.x,y:n.y});for(const o of n.spec.elements){const l=ke[o].super;l.start&&lo(i,t,o,l.start,e)}}return rn(n,"halfT")>0&&(s.halfT-=vt),a}function nh(i,t,e,n,s,a,r){const o=[];return i.tops.forEach((l,c)=>{i.teams[c]===i.teams[t]||!Qe(l)||l.airT>0||Math.hypot(l.x-e,l.y-n)>s+$e(l)*.6||(o.push(c),Ma(l,e,n,22*a),xa(l,3*a),l.stunT=Math.max(l.stunT,.35),_n(i,c,.02*a,r))}),o}function o0(i,t,e,n){const s=i.tops[t];s.bossMove=null,s.bossCd=1.3,s.bossChain=0,i.tops.forEach((a,r)=>{i.teams[r]===i.teams[t]||!Qe(a)||a.airT>0||Math.hypot(a.x-s.x,a.y-s.y)<5.5&&Ma(a,s.x,s.y,15)}),n.push({type:"boss",i:t,phase:e})}function l0(i,t){for(let e=i.zones.length-1;e>=0;e--){const n=i.zones[e];if(n.t-=vt,n.t>0)continue;i.zones.splice(e,1);const s=nh(i,n.i,n.x,n.y,n.r,.8,t);t.push({type:"zone",i:n.i,phase:"hit",x:n.x,y:n.y,r:n.r,dur:0,targets:s})}}function c0(i,t,e,n){const s=i.tops[t],a=es[s.spec.boss.kind],r=Math.min(2,s.stage),o=i.stadium.radius;s.bossCd=Math.max(0,s.bossCd-vt);const l=(f,d,m,x)=>{s.bossMove=f,s.bossStage=0,s.bossT=s.bossDur=d,s.bossDx=m,s.bossDy=x,s.bossCount++;const p=f==="vortex"?Ae.VORTEX_R:f==="charge"?Ae.CHARGE_LANE:Ae.SLAM_R;n.push({type:"telegraph",i:t,move:f,x:s.x,y:s.y,dx:m,dy:x,dur:d,r:p})},c=()=>{s.bossMove=null,s.bossCd=a.cd[r]*(.85+Va(i)*.3)};if(!s.bossMove){if(s.bossCd>0)return e;const f=Yl(i,t);if(!f)return e;const d=f.x-s.x,m=f.y-s.y,x=Math.hypot(d,m)||1,p=a.moves[r][s.bossCount%a.moves[r].length];return(p==="slam"||p==="vortex")&&x>11||p==="charge"&&x<4.5?(s.bossCd=.4,s.bossCount++,e):(p==="drops"?l("drops",Ae.DROP_WIND,d/x,m/x):p==="charge"?(l("charge",Ae.CHARGE_WIND,d/x,m/x),s.bossChain=a.chain[r]?1:0):l(p,p==="slam"?Ae.SLAM_WIND:Ae.VORTEX_WIND,d/x,m/x),$i)}const h=s.bossMove;if(s.bossT-=vt,s.bossStage===0){if(s.vx*=.9,s.vy*=.9,h==="vortex"&&i.tops.forEach((f,d)=>{if(i.teams[d]===i.teams[t]||!Qe(f)||f.airT>0)return;const m=s.x-f.x,x=s.y-f.y,p=Math.hypot(m,x);p<Ae.VORTEX_R&&p>.5&&(f.vx+=m/p*Ae.VORTEX_PULL*vt,f.vy+=x/p*Ae.VORTEX_PULL*vt)}),s.bossT>0)return $i;if(h==="slam"||h==="vortex"){const f=nh(i,t,s.x,s.y,Ae.SLAM_R,h==="vortex"?1.15:1,n);n.push({type:"bossmove",i:t,move:"slam",x:s.x,y:s.y,dx:0,dy:0,r:Ae.SLAM_R,targets:f}),c()}else if(h==="drops"){const f=a.drops[r]+1;i.tops.forEach((d,m)=>{if(!(i.teams[m]===i.teams[t]||!Qe(d)))for(let x=0;x<f;x++){const p=x===0?.5:.2;let g=d.x+d.vx*p+(x?(Va(i)-.5)*7:0),S=d.y+d.vy*p+(x?(Va(i)-.5)*7:0);const y=Math.hypot(g,S);y>o-2&&(g*=(o-2)/y,S*=(o-2)/y),i.zones.push({i:t,x:g,y:S,r:Ae.DROP_R,t:Ae.DROP_DELAY,dur:Ae.DROP_DELAY}),n.push({type:"zone",i:t,phase:"warn",x:g,y:S,r:Ae.DROP_R,dur:Ae.DROP_DELAY,targets:[]})}}),c()}else s.bossStage=1,s.bossT=Ae.CHARGE_T,n.push({type:"bossmove",i:t,move:"charge",x:s.x,y:s.y,dx:s.bossDx,dy:s.bossDy,r:Ae.CHARGE_LANE,targets:[]});return $i}s.vx=s.bossDx*Ae.CHARGE_SPEED,s.vy=s.bossDy*Ae.CHARGE_SPEED,s.dashT=Math.max(s.dashT,.1);const u=Math.hypot(s.x,s.y)>o-$e(s)-.5&&s.x*s.bossDx+s.y*s.bossDy>0;if(u&&(s.stunT=Math.max(s.stunT,Ae.CRASH_STUN),xa(s,3),_n(i,t,.03,n),s.bossChain=0),u||s.bossT<=0){if(s.vx*=.35,s.vy*=.35,s.bossChain>0&&!u){s.bossChain--;const f=Yl(i,t);if(f){const d=Math.hypot(f.x-s.x,f.y-s.y)||1;return l("charge",Ae.CHAIN_WIND,(f.x-s.x)/d,(f.y-s.y)/d),$i}}c()}return $i}function sl(i,t){const e=[],n=i.stadium,s=n.radius;if(i.time+=vt,n.collapse){const a=n.collapse;for(let r=0;r<a.sectors;r++){const o=(r+.5)/a.sectors*Math.PI*2,l=Math.cos(o)*s*(1+a.inner)*.5,c=Math.sin(o)*s*(1+a.inner)*.5;i.floorPhase[r]===0&&i.time>=i.floorT[r]-a.warn&&(i.floorPhase[r]=1,e.push({type:"floor",sector:r,phase:"warn",x:l,y:c})),i.floorPhase[r]===1&&i.time>=i.floorT[r]&&(i.floorPhase[r]=2,e.push({type:"floor",sector:r,phase:"fall",x:l,y:c}))}}for(let a=0;a<i.pairCd.length;a++)i.pairCd[a]>0&&(i.pairCd[a]-=vt);l0(i,e),a0(i,e);for(let a=0;a<i.tops.length;a++){const r=i.tops[a];if(r.px=r.x,r.py=r.y,r.onRail=!1,!r.inPlay||r.out==="burst"||r.out==="broken")continue;const o=r.spec,l=$e(r);if(r.leaving&&r.sink>0){r.sink+=vt,r.vx*=Math.exp(-1.2*vt),r.vy*=Math.exp(-1.2*vt),r.x+=r.vx*vt,r.y+=r.vy*vt,r.phase+=r.spin*vt,!r.out&&r.sink>.8&&(r.out="ringout",e.push({type:"out",i:a,reason:"ringout"}));continue}if(r.leaving){r.x+=r.vx*vt,r.y+=r.vy*vt,r.phase+=r.spin*vt,!r.out&&Math.hypot(r.x,r.y)>s+1.6&&(r.out="ringout",e.push({type:"out",i:a,reason:"ringout"}));continue}const c=Math.hypot(r.x,r.y);let h=-n.pull*r.x,u=-n.pull*r.y;if(r.out==="spinout"){r.vx=(r.vx+h*vt)*Math.exp(-4*vt),r.vy=(r.vy+u*vt)*Math.exp(-4*vt),r.x+=r.vx*vt,r.y+=r.vy*vt;continue}const f=r.stunT>0;let d=f?$i:t[a]??$i;o.boss&&!f&&(d=c0(i,a,d,e));const m=(r.status.cryo>0?.55:1)*(f?0:1),x=vn(r),p=x<.25?(.25-x)/.25:0;if(o.shift){const D=Math.max(0,Math.min(1,(.6-x)/.2)),B=r.shift;r.shift+=Math.max(-2.5*vt,Math.min(2.5*vt,D-r.shift)),B<.5!=r.shift<.5&&e.push({type:"shift",i:a,guard:r.shift>=.5})}const g=c>.05?-r.y/c:1,S=c>.05?r.x/c:0,y=o.drive*Math.min(1,x*1.5)*m*Vh(r);h+=g*y*o.spinDir,u+=S*y*o.spinDir;let _=d.sx,C=d.sy;const w=Math.hypot(_,C);w>1&&(_/=w,C/=w),r.steerX=_,r.steerY=C;let T=Math.abs(r.spin);if(w>.01){const D=o.steer*dt.STEER_MULT*(.5+.5*x)*m*$l(r,"steer")*Vh(r);h+=_*D,u+=C*D}const M=Xl(n,Math.atan2(r.y,r.x));if(n.rail&&c>s-l-n.rail.width&&i.segHp[M]>0){const D=r.vx*g+r.vy*S,B=Math.abs(D)>1?Math.sign(D):o.spinDir;Math.abs(D)<n.rail.max&&(h+=g*B*n.rail.accel,u+=S*B*n.rail.accel),r.onRail=Math.abs(D)>6}p>0&&(h+=(Va(i)-.5)*p*14,u+=(Va(i)-.5)*p*14);const v=()=>{if(w>.01)return[_,C];const D=Math.hypot(r.vx,r.vy);return D>.5?[r.vx/D,r.vy/D]:c>.05?[-r.x/c,-r.y/c]:[1,0]};r.abilityCd=Math.max(0,r.abilityCd-vt),r.braceT=Math.max(0,r.braceT-vt);const b=r.brakeT>0;r.brakeT=Math.max(0,r.brakeT-vt),r.counterT=Math.max(0,r.counterT-vt),r.airT>0&&(r.airT=Math.max(0,r.airT-vt),r.airT<=0&&i0(i,a,e)),r.dashT=Math.max(0,r.dashT-vt),r.boostCd=Math.max(0,r.boostCd-vt),r.boostT=Math.max(0,r.boostT-vt),r.strikeCd=Math.max(0,r.strikeCd-vt),r.strikeT=Math.max(0,r.strikeT-vt),r.comboT=Math.max(0,r.comboT-vt),r.comboT<=0&&(r.combo=0);for(const D of No)r.status[D]>0&&(r.status[D]-=vt);if(r.reactCd=Math.max(0,r.reactCd-vt),r.stunT=Math.max(0,r.stunT-vt),r.status.thermal>0&&(T-=dt.HEAT_DRAIN*vt),r.status.plasma>0&&_n(i,a,.012*vt,e),r.status.resonance>0&&(r.superMeter=Math.max(0,r.superMeter-.07*vt)),r.status.gravity>0){const D=Math.hypot(r.x,r.y)||1;h+=r.x/D*10,u+=r.y/D*10}if(r.status.mag>0){const D=i.tops[r.statusBy];if(D&&Qe(D)){const B=D.x-r.x,N=D.y-r.y,H=Math.hypot(B,N)||1;h+=B/H*12,u+=N/H*12}}if(T=Math.min(o.maxSpin,Math.max(0,T+r0(i,a,e))),r.superMeter=Math.min(1,r.superMeter+dt.SUPER_PASSIVE*o.superGain*vt),d.super&&r.superMeter>=1&&r.superT<=0){r.superMeter=0,r.superT=Math.max(...o.elements.map(D=>ke[D].super.dur)),r.pulseT=0,Nn(r,"echo")&&(r.lg.echoT=3),e.push({type:"super",i:a,elements:o.elements});for(const D of o.elements){const B=ke[D].super;B.start&&lo(i,a,D,B.start,e)}}if(r.superT>0){r.superT-=vt,r.pulseT-=vt;for(const D of o.elements){const B=ke[D].super;if(B.pull){const N=B.pull;i.tops.forEach((H,K)=>{if(i.teams[K]===i.teams[a]||!Qe(H))return;const j=r.x-H.x,ot=r.y-H.y,ut=Math.hypot(j,ot);ut<N.radius&&ut>.5&&(H.vx+=j/ut*N.accel*vt,H.vy+=ot/ut*N.accel*vt)})}B.pulse&&r.pulseT<=0&&lo(i,a,D,B.pulse,e),B.end&&r.superT<=0&&lo(i,a,D,B.end,e)}r.pulseT<=0&&(r.pulseT=Math.min(...o.elements.map(D=>ke[D].super.pulse?.every??99)))}if(d.boost&&r.boostCd<=0){const[D,B]=v();r.vx+=D*dt.BOOST_IMPULSE,r.vy+=B*dt.BOOST_IMPULSE,r.boostCd=dt.BOOST_CD,r.boostT=dt.BOOST_T,T-=dt.BOOST_COST,e.push({type:"boost",i:a})}if(d.strike&&r.strikeCd<=0){r.strikeT=dt.STRIKE_T,r.strikeCd=dt.STRIKE_CD,T-=dt.STRIKE_COST,e.push({type:"strike",i:a});const D=r.counterT>0?Yl(i,a):null;if(D){const B=Math.hypot(D.x-r.x,D.y-r.y)||1,N=(D.x-r.x)/B,H=(D.y-r.y)/B;r.vx+=N*dt.COUNTER_IMPULSE,r.vy+=H*dt.COUNTER_IMPULSE,r.boostT=Math.max(r.boostT,dt.BOOST_T),r.counterT=0,e.push({type:"counter",i:a,x:r.x,y:r.y,dx:N,dy:H})}}if(b&&(r.brakeT<=0||d.ability&&r.brakeT<dt.BRAKE_T-dt.BRAKE_MINHOLD)){const[D,B]=w>.01?[_,C]:r.brakeSpeed>2?[r.brakeDx,r.brakeDy]:v(),N=Math.min(dt.BRAKE_MAX,Math.max(dt.BRAKE_MIN,r.brakeSpeed*dt.BRAKE_GAIN*(o.abil?.pow??1)+dt.BRAKE_PLUS));if(r.vx=D*N,r.vy=B*N,r.brakeT=0,r.dashT=dt.DASH_T*.7,e.push({type:"brake",i:a,phase:"release",x:r.x,y:r.y,dx:D,dy:B,speed:N}),Nn(r,"deadweight")){const H=nh(i,a,r.x,r.y,3.6,.7,e);e.push({type:"land",i:a,x:r.x,y:r.y,radius:3.6,targets:H})}}else if(d.ability&&r.abilityCd<=0){if(o.ability==="brake"){const D=Math.hypot(r.vx,r.vy);r.brakeSpeed=D,r.brakeDx=D>.5?r.vx/D:0,r.brakeDy=D>.5?r.vy/D:0,r.vx*=.1,r.vy*=.1,r.brakeT=dt.BRAKE_T,r.abilityCd=Js(o),T-=dt.BRAKE_COST,e.push({type:"brake",i:a,phase:"stop",x:r.x,y:r.y,dx:r.brakeDx,dy:r.brakeDy,speed:D})}else if(o.ability==="spring"){const[D,B]=v();r.vx+=D*dt.JUMP_HOP*(o.abil?.pow??1),r.vy+=B*dt.JUMP_HOP*(o.abil?.pow??1),r.airT=dt.JUMP_T*Math.sqrt(o.abil?.pow??1),r.abilityCd=Js(o),T-=dt.JUMP_COST}else if(o.ability==="dash"){const[D,B]=v();r.vx+=D*dt.DASH_IMPULSE*(o.abil?.pow??1),r.vy+=B*dt.DASH_IMPULSE*(o.abil?.pow??1),r.dashT=dt.DASH_T,T-=dt.DASH_COST,r.abilityCd=Js(o)}else r.braceT=dt.BRACE_T*(o.abil?.pow??1),r.abilityCd=Js(o);e.push({type:"ability",i:a,kind:o.ability}),Nn(r,"twin")&&(rn(r,"twin")!==1?(r.lg.twin=1,r.lg.twinT=6,r.abilityCd=.4,e.push({type:"legend",id:"twin",i:a,x:r.x,y:r.y})):r.lg.twin=0)}const R=r.brakeT>0,I=Math.exp(R?-14*vt:-o.drag*(r.braceT>0?2.5:1)*(f?3:1)*vt),O=R?.15:1;r.vx=(r.vx+h*vt*O)*I,r.vy=(r.vy+u*vt*O)*I,r.x+=r.vx*vt,r.y+=r.vy*vt,T-=o.spinDecay*oo(r,"decay")*(r.stage>=2?1.25:1)*(1+p)*vt,r.burst=Math.max(0,r.burst-dt.BURST_DRAIN*vt);for(let D=0;D<i.pillars.length;D++){const B=i.pillars[D];if(B.hp<=0||r.airT>0)continue;const N=r.x-B.x,H=r.y-B.y,K=Math.hypot(N,H),j=l+B.r;if(K>=j||K<1e-6)continue;const ot=N/K,ut=H/K;r.x=B.x+ot*j,r.y=B.y+ut*j;const k=-(r.vx*ot+r.vy*ut);k>0&&(r.vx+=(1+dt.RIM_E)*k*ot,r.vy+=(1+dt.RIM_E)*k*ut,T-=k*dt.RIM_SPIN,k>dt.COUNTER_SPEED&&(r.counterT=dt.COUNTER_WIN),B.hp=Wh(B.hp,k),k>1.5&&e.push({type:"rim",x:B.x+ot*B.r,y:B.y+ut*B.r,strength:Math.min(1,k/18),i:a}),B.hp<=0&&e.push({type:"break",kind:"pillar",index:D,x:B.x,y:B.y}))}const F=Math.hypot(r.x,r.y),X=s-l;if(F>X){const D=r.x/F,B=r.y/F,N=Xl(n,Math.atan2(r.y,r.x));if(i.segHp[N]<=0)r.airT<=0&&F>s-l*.35&&(r.leaving=!0);else{const H=r.vx*D+r.vy*B;r.x=D*X,r.y=B*X,H>0&&(r.vx-=(1+dt.RIM_E)*H*D,r.vy-=(1+dt.RIM_E)*H*B,T-=H*dt.RIM_SPIN,H>dt.COUNTER_SPEED&&(r.counterT=dt.COUNTER_WIN),i.segHp[N]=Wh(i.segHp[N],H),H>1.5&&e.push({type:"rim",x:r.x,y:r.y,strength:Math.min(1,H/18),i:a}),i.segHp[N]<=0&&e.push({type:"break",kind:"wall",index:N,x:D*s,y:B*s}))}}if(n.collapse&&r.airT<=0&&!r.leaving&&Math.hypot(r.x,r.y)>n.collapse.inner*s&&i.floorPhase[eh(n.collapse,Math.atan2(r.y,r.x))]===2&&(r.leaving=!0,r.sink=vt,e.push({type:"fall",i:a,x:r.x,y:r.y})),n.hazards&&r.airT<=0&&!r.leaving)for(const D of n.hazards){const B=th(D,i.time);let N,H,K,j,ot;if(D.kind==="bar"){const gt=Math.cos(B.a),Rt=Math.sin(B.a),Kt=Math.max(D.r0,Math.min(D.r1,r.x*gt+r.y*Rt));N=gt*Kt,H=Rt*Kt,K=-H*D.omega,j=N*D.omega,ot=D.width+l}else N=B.x,H=B.y,K=B.vx,j=B.vy,ot=D.r+l;const ut=r.x-N,k=r.y-H,q=Math.hypot(ut,k);if(q>=ot||q<1e-6)continue;const ct=ut/q,it=k/q;r.x=N+ct*ot,r.y=H+it*ot;const at=(r.vx-K)*ct+(r.vy-j)*it;if(at<0){r.vx-=(1+dt.HAZ_E)*at*ct,r.vy-=(1+dt.HAZ_E)*at*it,r.vx+=K*.6,r.vy+=j*.6;const gt=-at;T-=gt*dt.HAZ_SPIN,gt>dt.HAZ_ARMOUR_MIN&&_n(i,a,(gt-dt.HAZ_ARMOUR_MIN)*dt.HAZ_ARMOUR,e),r.stunT=Math.max(r.stunT,gt>12?.35:0),gt>2&&e.push({type:"hazard",i:a,x:N+ct*(D.kind==="bar"?D.width:D.r),y:H+it*(D.kind==="bar"?D.width:D.r),nx:ct,ny:it,strength:Math.min(1,gt/20)})}}T=Math.max(0,T),r.spin=T*o.spinDir,r.phase+=r.spin*vt,T<=0&&(r.out="spinout",e.push({type:"out",i:a,reason:"spinout"}))}for(let a=0;a<i.tops.length;a++)for(let r=a+1;r<i.tops.length;r++)h0(i,a,r,e);for(const a of e)a.type==="out"&&(i.lastOut=a.reason);if(!i.over){const a=new Set;if(i.tops.forEach((r,o)=>{r.out||a.add(i.teams[o])}),a.size<=1&&i.lastOut)i.over={winner:a.size?[...a][0]:-1,reason:i.lastOut};else if(i.time>=Gd){const r=new Map;i.tops.forEach((l,c)=>{l.out||r.set(i.teams[c],(r.get(i.teams[c])??0)+Math.abs(l.spin))});const o=[...r].sort((l,c)=>c[1]-l[1]);i.over={winner:o.length>1&&o[0][1]===o[1][1]?-1:o[0][0],reason:"time"}}}return e}function Xh(i,t){return .55+.45*Math.abs(Math.sin((t-i.phase)*i.spec.teeth/2))}function h0(i,t,e,n){const s=i.tops[t],a=i.tops[e];if(!Qe(s)||!Qe(a)||s.airT>0||a.airT>0)return;const r=a.x-s.x,o=a.y-s.y,l=Math.hypot(r,o),c=$e(s)+$e(a);if(l>=c||l<1e-6)return;const h=r/l,u=o/l,f=ql(s),d=ql(a),m=c-l;s.x-=h*m*(d/(f+d)),s.y-=u*m*(d/(f+d)),a.x+=h*m*(f/(f+d)),a.y+=u*m*(f/(f+d));const x=t*i.tops.length+e;if(i.pairCd[x]>0)return;i.pairCd[x]=dt.HIT_CD;const p=i.teams[t]===i.teams[e],g=p?0:1,S=-u,y=h,_=(a.vx-s.vx)*h+(a.vy-s.vy)*u,C=(s.vx-a.vx)*S+(s.vy-a.vy)*y+s.spin*$e(s)+a.spin*$e(a),w=Math.atan2(u,h),T=s.strikeT>0||rn(s,"opener")===1,M=a.strikeT>0||rn(a,"opener")===1,v=T&&M,b=T&&!v&&!p&&s.combo>=3,R=M&&!v&&!p&&a.combo>=3,I=(at,gt,Rt)=>(at.dashT>0?1.5:at.boostT>0?1.15:1)*(gt?v?1.3:Rt?Zp:dt.STRIKE_ATK:1)*$l(at,"atk")*(at.stage>=1?.9:1),O=Xh(s,w)*s.spec.attack*I(s,T,b)*oo(s,"attack")*Gh(s),F=Xh(a,w+Math.PI)*a.spec.attack*I(a,M,R)*oo(a,"attack")*Gh(a),X=f*d/(f+d),D=_<0?-1.6*_*X*(.6+.2*(O+F)):0,B=dt.SMASH*Math.abs(C)*X*(O+F),N=D+B,H=(at,gt)=>(at.braceT>0?.3:at.brakeT>0?dt.BRAKE_GUARD:1)*(gt&&!v?dt.STRIKE_GUARD:1)*oo(at,"guard")*$l(at,"guard"),K=at=>(at.status.gale>0?1.4:1)*(at.stage>=1?1.15:1),j=H(s,T)*(1+dt.WEAK_KB*(1-vn(s)))*(p?.5:1)*K(s),ot=H(a,M)*(1+dt.WEAK_KB*(1-vn(a)))*(p?.5:1)*K(a),ut=Math.sign(C)*dt.TANG;s.vx+=(-h-S*ut)*N*j/f,s.vy+=(-u-y*ut)*N*j/f,a.vx+=(h+S*ut)*N*ot/d,a.vy+=(u+y*ut)*N*ot/d;let k=Math.abs(s.spin),q=Math.abs(a.spin);const ct=k,it=q;if(k-=dt.SPINLOSS*N*F*H(s,T)*g*(s.status.volt>0?1.25:1),q-=dt.SPINLOSS*N*O*H(a,M)*g*(a.status.volt>0?1.25:1),!p)for(const[at,gt,Rt,Kt]of[[s,ct-k,a,e],[a,it-q,s,t]])!Nn(at,"thorn")||gt<.4||(Rt===a?q-=.35*gt:k-=.35*gt,n.push({type:"legend",id:"thorn",i:at===s?t:e,x:(s.x+a.x)/2,y:(s.y+a.y)/2,k:Kt,n:gt}));if(!p&&s.spec.spinDir!==a.spec.spinDir){const at=dt.EQ*(k-q);k-=at,q+=at;const gt=Math.min(q,s.spec.hook*1.5),Rt=Math.min(k,a.spec.hook*1.5);k+=gt-Rt,q+=Rt-gt}if(s.spin=Math.max(0,Math.min(s.spec.maxSpin,k))*s.spec.spinDir,a.spin=Math.max(0,Math.min(a.spec.maxSpin,q))*a.spec.spinDir,p||(Nn(s,"bank")&&(s.lg.bank=Math.min(40,rn(s,"bank")+.8*Math.max(0,ct-Math.abs(s.spin)))),Nn(a,"bank")&&(a.lg.bank=Math.min(40,rn(a,"bank")+.8*Math.max(0,it-Math.abs(a.spin)))),Nn(s,"rend")&&N*O>16&&(a.lg.bleed=4),Nn(a,"rend")&&N*F>16&&(s.lg.bleed=4)),s.burst+=g*dt.BURST*N*F*a.spec.burstDmg*(s.braceT>0?.5:1)/s.spec.burstRes,a.burst+=g*dt.BURST*N*O*s.spec.burstDmg*(a.braceT>0?.5:1)/a.spec.burstRes,!p){const at=N-dt.ARMOUR_MIN;at>0&&(_n(i,t,at*dt.ARMOUR*F*H(s,T)/s.spec.burstRes,n),_n(i,e,at*dt.ARMOUR*O*H(a,M)/a.spec.burstRes,n));const gt=Math.min(1,N/30)*6;if(s.superMeter=Math.min(1,s.superMeter+(dt.SUPER_HIT*(1+gt*O/(O+F))+(T?dt.SUPER_STRIKE:0))*s.spec.superGain),a.superMeter=Math.min(1,a.superMeter+(dt.SUPER_HIT*(1+gt*F/(O+F))+(M?dt.SUPER_STRIKE:0))*a.spec.superGain),T||s.superT>0)for(const Rt of s.spec.elements)vo(i,e,Rt,t,n);if(M||a.superT>0)for(const Rt of a.spec.elements)vo(i,t,Rt,e,n)}for(const[at,gt,Rt,Kt,nt]of[[s,T,b,t,e],[a,M,R,e,t]])gt&&(at.lg.opener=0,at.strikeT=0,at.strikeCd=dt.STRIKE_CD_HIT,!p&&(at.comboT=Qp,Rt?(at.combo=0,n.push({type:"finisher",i:Kt,target:nt,x:i.tops[nt].x,y:i.tops[nt].y}),_n(i,nt,Jp,n),Nn(at,"shard")&&s0(i,Kt,nt,n)):at.combo=Math.min(3,at.combo+1)));n.push({type:"hit",x:s.x+h*$e(s),y:s.y+u*$e(s),nx:h,ny:u,strength:Math.min(1,N/30),a:t,b:e,power:v?2:T?t:M?e:-1});for(const[at,gt]of[[t,s],[e,a]])!gt.out&&gt.burst>=1&&(gt.burst=0,gt.stunT=Math.max(gt.stunT,dt.STAGGER_T),n.push({type:"react",i:at,by:at===t?e:t,name:"STAGGER",color:16777215,x:gt.x,y:gt.y,team:!1}),_n(i,at,dt.STAGGER_ARMOUR,n))}function qh(i,t){const e=i()*Math.PI*2,s=(t?tr(t.stadium):6.5)*(.3+i()*.5);return{x:Math.cos(e)*s,y:Math.sin(e)*s,power:.7+i()*.3,tilt:(i()*2-1)*.8}}function $h(i,t,e){const n=Math.floor(i.time*4)*7919+t*104729;return(Math.imul(n,2654435761)>>>0)%100<e}function u0(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((a,r)=>{if(i.teams[r]===i.teams[t]||!Qe(a))return;const o=Math.hypot(a.x-e.x,a.y-e.y);o<s&&(s=o,n=a)}),n}function Xd(i,t){const e=i.tops[t],n={sx:0,sy:0,ability:!1,boost:!1,strike:!1};if(!Qe(e))return n;const s=e.spec.ai??{strike:60,boost:55},a=e.spec.boss?es[e.spec.boss.kind].persona[Math.min(2,e.stage)]:e.spec.ai?.persona,r=i.stadium.radius,o=Math.hypot(e.x,e.y),l=o>.01?(e.vx*e.x+e.vy*e.y)/o:0;let c=0,h=0;const u=Math.atan2(e.y+e.vy*.35,e.x+e.vx*.35),f=o>r*.55&&l>4&&i.segHp[Xl(i.stadium,u)]<=0,d=u0(i,t);let m=!1;const x=i.stadium.collapse;if(x&&o>r*x.inner-2.5){const w=Math.atan2(e.y,e.x),T=Math.PI*2/x.sectors;for(const M of[-.8,0,.8])i.floorPhase[eh(x,w+M*T)]>=1&&(m=!0)}let p=null;for(const w of i.stadium.hazards??[]){const T=th(w,i.time+.25);let M=T.x,v=T.y,b=0;if(w.kind==="bar"){const I=Math.cos(T.a),O=Math.sin(T.a),F=Math.max(w.r0,Math.min(w.r1,e.x*I+e.y*O));M=I*F,v=O*F,b=w.width}else b=w.r;const R=Math.hypot(e.x-M,e.y-v);R<b+$e(e)+2.2&&e.airT<=0&&(p=[(e.x-M)/(R||1),(e.y-v)/(R||1)])}let g=null,S=!1;const y=35+s.strike*.6,_=w=>(Math.imul(w*7919+t*104729,2654435761)>>>0)%100<y;i.tops.forEach((w,T)=>{if(!w.spec.boss||i.teams[T]===i.teams[t]||!w.bossMove||!Qe(w)||!_(w.bossCount+T*13))return;const M=e.x-w.x,v=e.y-w.y,b=Math.hypot(M,v)||1;if(w.bossMove==="slam"||w.bossMove==="vortex")w.bossStage===0&&b<Ae.SLAM_R+(w.bossMove==="vortex"?4:2.2)&&(g=[M/b,v/b],S=w.bossMove==="vortex"||w.bossT<.5);else if(w.bossMove==="charge"){const R=M*w.bossDx+v*w.bossDy,I=-M*w.bossDy+v*w.bossDx;if(R>-2.5&&Math.abs(I)<Ae.CHARGE_LANE+$e(e)+1.2){const O=I>=0?1:-1;g=[-w.bossDy*O,w.bossDx*O],S=w.bossStage===1||w.bossT<.45}}});for(const w of i.zones){if(i.teams[w.i]===i.teams[t])continue;const T=e.x-w.x,M=e.y-w.y,v=Math.hypot(T,M)||1;v<w.r+$e(e)+1&&_(Math.round(w.x*13+w.y*7))&&(g=[T/v,M/v],S=w.t<.6)}if(g)c=g[0],h=g[1],S&&(n.boost=!0),e.abilityCd<=0&&e.spec.ability==="spring"&&S&&e.airT<=0&&(n.ability=!0);else if(p)c=p[0],h=p[1],e.abilityCd<=0&&e.spec.ability==="spring"&&(n.ability=!0);else if(m||f||o>r*(a==="rider"?.88:.8))c=-e.x,h=-e.y,f&&o>r*.7&&(n.boost=!0);else if(d){const w=d.x+d.vx*.15-e.x,T=d.y+d.vy*.15-e.y,M=Math.hypot(w,T);let v=e.spec.role==="attack"||vn(e)<vn(d)-.04||M>r*.9;a==="rusher"?v=!0:a==="turtle"?v=M<4.5||i.time>35&&vn(e)<vn(d)-.02:a==="ambusher"?v=M<6.5:a==="rider"&&(v=M<5);const b=-((d.vx-e.vx)*w+(d.vy-e.vy)*T)/Math.max(M,.01),R=M-$e(e)-$e(d);if(v)c=w,h=T,M>3&&M<9&&$h(i,t,a==="rusher"?Math.min(100,s.boost+25):s.boost)&&(n.boost=!0),a==="ambusher"&&M>2.5&&M<6.5&&(n.boost=!0),e.spec.ability==="dash"&&e.abilityCd<=0&&M<6&&M>2.2&&(n.ability=!0);else if(a==="rider"){const I=o>.05?-e.y/o:1,O=o>.05?e.x/o:0,F=(r*.74-o)/r;c=I*e.spec.spinDir+e.x/Math.max(o,.05)*F*6,h=O*e.spec.spinDir+e.y/Math.max(o,.05)*F*6}else o>2&&(c=-e.x,h=-e.y);b>3&&R<b*.14&&$h(i,t,a==="ambusher"?Math.min(100,s.strike+25):s.strike)&&(n.strike=!0),e.spec.ability==="brace"&&e.abilityCd<=0&&M<(a==="turtle"?4.5:3.2)&&b>(a==="turtle"?6:9)&&(n.ability=!0),e.spec.ability==="brake"&&(e.brakeT>0?(M<4.5||e.brakeT<.15)&&(n.ability=!0):e.abilityCd<=0&&M<8&&M>3.5&&b>8&&(n.ability=!0)),e.spec.ability==="spring"&&e.abilityCd<=0&&e.airT<=0&&M<4.5&&M>1.5&&(b>10||v&&M<3.2)&&(n.ability=!0),e.counterT>0&&M<14&&e.strikeCd<=0&&(n.strike=!0),e.superMeter>=1&&M<7.5&&(n.super=!0)}else o>2&&(c=-e.x,h=-e.y);const C=Math.hypot(c,h);return C>.01&&(n.sx=c/C,n.sy=h/C),n}const qd=[{id:"shard",part:"talon",name:"Shardfang Talon",text:"FINISHER: the blow throws a shard that flies on and hits a second enemy (or the same one again)."},{id:"rend",part:"ripsaw",name:"Rendsaw",text:"A hard hit leaves the enemy bleeding armour for 4 seconds."},{id:"thorn",part:"bastion",name:"Thornwall Bastion",text:"Hits that cost you spin cost the attacker a third as much again."},{id:"bank",part:"flywheel",name:"Reservoir Flywheel",text:"Stores the spin hits take from it, and returns it once when your spin falls below a quarter."},{id:"scorch",part:"flatline",name:"Cinder Flatline",text:"Leaves a scorching trail on the floor: enemies crossing it burn, losing spin and armour."},{id:"twin",part:"surge",name:"Twincell Surge",text:"Your ability has two charges: the second comes back in under half a second."},{id:"deadweight",part:"anchor",name:"Deadweight Anchor",text:"Releasing a Brake fires a ground shockwave that throws enemies around you."},{id:"echo",part:"thermal",name:"Echo Reactor",text:"Your super fires again at half strength three seconds later."},{id:"opener",part:"string",name:"Overwound String",text:"A perfect launch makes your first hit a power hit (a free Strike)."}],ih=i=>qd.find(t=>t.id===i),d0={4:[1.081,1.115],6:[1.099,1.144],8:[1.052,1.073],10:[1.143,1.205],18:[1.09,1.129],22:[1.068,1.097],23:[1.002,1.003],24:[1.094,1.134],29:[.968,.955],30:[1.101,1.145],34:[1.057,1.081],35:[1.116,1.166],36:[1.007,1.008],38:[.857,.806],39:[1.005,1.007],40:[.971,.959],42:[1.079,1.113],43:[1.056,1.08],45:[1.11,1.158],54:[1.123,1.174],55:[1.037,1.051],57:[1.106,1.152],58:[1.17,1.245],60:[.951,.932],61:[1.028,1.039],62:[.886,.844],64:[1.057,1.08],66:[1.144,1.208],67:[1.104,1.149],69:[1.048,1.07],70:[1.051,1.072],74:[.906,.87],77:[.908,.875],78:[1.156,1.226],80:[.99,.986],82:[1.029,1.041],83:[1.077,1.109],84:[1.093,1.131],85:[.975,.966],90:[1.119,1.174],92:[1.014,1.021],94:[1.044,1.062],95:[1.122,1.175],98:[1.035,1.05],102:[1.057,1.079],103:[1.032,1.046],105:[1.022,1.03],106:[1.122,1.175],107:[1.016,1.022],109:[.923,.896],112:[1.053,1.076],114:[1.135,1.195],117:[1.037,1.051],118:[1.138,1.199],126:[1.121,1.175],127:[1.037,1.052],130:[1.044,1.063],132:[1.017,1.025],136:[.983,.975],138:[1.096,1.137],140:[.986,.981],144:[1.01,1.013],150:[1.098,1.14],153:[1.07,1.1],154:[1.078,1.111],155:[.978,.97],158:[.99,.986],160:[1.055,1.077],161:[.894,.855],162:[1.075,1.108],163:[1.037,1.051],164:[.982,.974],166:[1.065,1.093],167:[1.083,1.117],168:[1.043,1.061],169:[.947,.927],172:[1.059,1.084],173:[1.018,1.025],174:[1.04,1.059],177:[.991,.987],178:[1.027,1.039],186:[1.109,1.157],189:[1.077,1.112],190:[1.164,1.238],192:[1.009,1.013],194:[.888,.847],198:[1.168,1.242],200:[1.073,1.103],201:[.994,.991],202:[1.094,1.134],210:[1.039,1.057],214:[1.105,1.151],222:[1.124,1.177],224:[.972,.96],225:[1.102,1.145],226:[1.169,1.245],229:[.973,.963],234:[1.111,1.157],238:[1.046,1.065],246:[1.102,1.149],247:[.999,.997],250:[1.03,1.043],256:[.943,.922],258:[1.143,1.207],261:[1.023,1.033],262:[1.079,1.114],263:[1.076,1.107],264:[1.045,1.063],268:[1.017,1.026],269:[.994,.99],270:[1.131,1.187],274:[1.145,1.208],277:[1.02,1.028],282:[1.075,1.108],286:[1.033,1.046],287:[1.06,1.084],290:[1.037,1.056],294:[1.145,1.208],295:[.998,.998],296:[1.101,1.145],298:[1.04,1.056],299:[1.121,1.173],306:[1.138,1.202],310:[1.172,1.249],317:[.846,.792],318:[1.135,1.194],320:[1.106,1.152],326:[1.14,1.199],327:[1.075,1.106],330:[1.05,1.071],332:[.993,.991],334:[1.054,1.076],336:[1.078,1.11],342:[1.084,1.12],343:[1.022,1.03],344:[1.094,1.135],345:[.934,.908],350:[.912,.88],352:[1.114,1.164],353:[1.087,1.123],356:[1.09,1.126],357:[1.076,1.109],358:[1.101,1.144],361:[1.023,1.034],363:[1.029,1.044],364:[.984,.979],368:[1.074,1.105],370:[1.079,1.112],371:[.993,.991],373:[1.093,1.134],374:[.887,.845],377:[.493,.372],378:[1.102,1.143],380:[1.073,1.102],382:[1.092,1.131],383:[1.004,1.007],386:[1.102,1.145],387:[1.062,1.086],388:[.878,.833],392:[.825,.764],393:[1.023,1.029],394:[1.07,1.1],395:[.97,.959],396:[1.186,1.267],404:[1.131,1.187],406:[1.1,1.143],407:[.962,.948],408:[1.069,1.097],410:[1.118,1.17],413:[1.01,1.015],414:[1.068,1.097],417:[1.147,1.212],419:[1.045,1.062],420:[1.261,1.383],421:[1.079,1.114],422:[1.189,1.276],424:[.834,.777],430:[1.14,1.2],434:[1.052,1.074],437:[.971,.959],438:[.938,.917],439:[1.147,1.213],440:[1.071,1.102],443:[1.009,1.013],445:[.931,.904],446:[1.175,1.253],451:[.76,.681],452:[.877,.832],456:[1.144,1.207],457:[.871,.825],459:[1.01,1.013],460:[1.071,1.1],461:[1.132,1.19],466:[1.071,1.097],467:[1.078,1.11],472:[1.083,1.118],474:[1.049,1.067],475:[.97,.958],476:[.999,.999],478:[.904,.868],482:[1.105,1.15],483:[1.111,1.159],485:[1.045,1.067],486:[1.092,1.131],488:[1.046,1.066],489:[.887,.846],491:[1.091,1.127],492:[1.056,1.078],493:[1.038,1.054],495:[1.004,1.001],498:[1.058,1.083],502:[1.011,1.016],508:[1.132,1.189],512:[1.09,1.128],514:[1.039,1.056],518:[.871,.824],519:[1.078,1.11],524:[1.099,1.142],526:[1.033,1.048],527:[1.047,1.067],528:[1.106,1.152],534:[.886,.845],537:[.904,.868],538:[1.042,1.06],540:[1.077,1.109],544:[1.092,1.134],546:[1.041,1.058],550:[1.048,1.067],552:[1.086,1.122],553:[1.029,1.042],560:[1.077,1.108],563:[.812,.747],564:[1.065,1.092],569:[.986,.98],570:[1.05,1.068],571:[1.047,1.068],573:[.861,.811],575:[.887,.846],576:[1.18,1.259],578:[1.07,1.099],585:[1.011,1.015],586:[1.045,1.059],588:[1.039,1.055],590:[1.093,1.133],591:[1.021,1.029],592:[1.053,1.074],595:[1.066,1.094],596:[1.032,1.046],597:[1.061,1.086]},f0={2:[.905,.869],7:[.891,.851],9:[.855,.803],10:[.748,.667],15:[.735,.65],18:[.841,.785],23:[.891,.851],26:[.832,.773],28:[.852,.799],31:[.876,.831],38:[1.126,1.18],39:[.862,.812],42:[.892,.853],44:[.872,.826],50:[.892,.852],55:[.867,.818],57:[.869,.821],58:[.898,.86],63:[.884,.841]},p0={0:[1.11,1.157],7:[.764,.685],8:[1.208,1.304],13:[.906,.87],19:[.886,.844],23:[.877,.832],24:[1.126,1.181],32:[1.132,1.189],42:[.854,.802],47:[.889,.848],51:[.904,.869],56:[1.284,1.418],63:[.89,.849]},m0={1:[.828,.767],2:[1.14,1.201],4:[1.112,1.161],5:[.877,.832],6:[1.219,1.319],7:[1.152,1.219],8:[1.009,1.013],9:[.853,.801],10:[1.113,1.161],11:[1.122,1.174],12:[1.127,1.182],13:[.827,.766],14:[1.156,1.225],20:[1.136,1.196],22:[1.183,1.266],25:[.762,.683],29:[.889,.849],30:[1.18,1.261],31:[1.132,1.189],33:[.906,.871],34:[1.207,1.302],35:[1.115,1.165],36:[1.036,1.05],37:[.84,.783],38:[1.269,1.396]},g0=i=>i-Math.floor(i),Tn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Xi=[{f:(i,t)=>Math.pow(1-i,1.2+t*1.4),bite:.95,nouns:["Hook","Gaff","Grapnel","Sickle","Scythe","Barb"],shape:"swept hooks",folds:[2,3,3,4,5]},{f:i=>1-i,bite:.8,nouns:["Ripper","Rasp","Shredder","Serrate","Buzzcut","Sawline"],shape:"saw teeth",folds:[5,6,7,8,9,10]},{f:i=>i<.82?1-Math.pow(i/.82,4):0,bite:.45,hooks:!0,nouns:["Vane","Foil","Glider","Sail","Aileron","Rotor"],shape:"broad vanes",folds:[2,2,3,3,4]},{f:(i,t)=>Tn((.5+t*.1-Math.abs(i-.5))*9),bite:.7,nouns:["Maul","Sledge","Ram","Piston","Pounder","Drophammer"],shape:"hammer lugs",folds:[2,3,4,4,5,6]},{f:(i,t)=>Math.pow(1-Math.abs(2*i-1),1.5+t*2.5),bite:1,nouns:["Pike","Lance","Spire","Needle","Caltrop","Prong"],shape:"spikes",folds:[3,4,5,6,8]},{f:i=>Math.sqrt(Math.abs(Math.sin(Math.PI*i)))*(1-.55*i),bite:.6,hooks:!0,nouns:["Crescent","Arc","Eclipse","Halfmoon","Curve","Sweep"],shape:"crescent blades",folds:[2,3,3,4,5]},{f:(i,t)=>1-Math.pow(Math.abs(Math.cos(Math.PI*i)),6+t*10),bite:.1,nouns:["Bulwark","Rampart","Buckler","Barricade","Citadel","Plate"],shape:"armour segments",folds:[4,5,6,8,10,12]},{f:i=>1-Math.abs(2*i-1),bite:.75,nouns:["Star","Nova","Compass","Flare","Burst","Zenith"],shape:"star points",folds:[3,4,5,6,7,8]},{f:i=>i<.55?.5+.5*Math.pow(i/.55,2):i<.66?1:0,bite:.9,nouns:["Cleaver","Hatchet","Halberd","Splitter","Chopper","Edge"],shape:"axe heads",folds:[2,3,3,4,5]},{f:(i,t)=>Tn((.28+t*.12-Math.abs(i-.5))*14),bite:.5,nouns:["Cog","Sprocket","Gear","Ratchet","Pinion","Crankwheel"],shape:"gear teeth",folds:[6,8,9,10,12,14]},{f:i=>.5+.5*Math.cos(2*Math.PI*(i-.5)),bite:.25,nouns:["Tide","Ripple","Swell","Undertow","Breaker","Current"],shape:"rolling lobes",folds:[3,4,5,6,7]},{f:(i,t)=>Math.max(Math.pow(1-Math.abs(2*Tn(i/.6)-1),2+t),.7*Math.pow(1-Math.abs(2*Tn((i-.55)/.45)-1),2+t)),bite:.85,nouns:["Bident","Fork","Tine","Caliper","Splitpoint","Twinspike"],shape:"forked points",folds:[2,3,4,5,6]},{f:i=>1-Math.floor(i*4)*.21,bite:.4,nouns:["Terrace","Stairway","Ziggurat","Tier","Landing","Stepwell"],shape:"stepped terraces",folds:[3,4,5,6,8]},{f:i=>Math.pow(Math.sin(Math.min(1,i*1.25)*Math.PI*.5),.6)*(i<.8?1:(1-i)*5),bite:.65,hooks:!0,nouns:["Turbine","Impeller","Scoop","Bucket","Paddle","Runner"],shape:"turbine scoops",folds:[3,4,5,6,7,8]},{f:(i,t)=>i<.62?Math.pow(1-i/.62,.8+t*1.2):0,bite:.95,nouns:["Auger","Drill","Bore","Bit","Reamer","Gimlet"],shape:"drill flutes",folds:[4,5,6,7]},{f:i=>Math.pow(Math.abs(Math.sin(Math.PI*i*2)),.7),bite:.3,nouns:["Chainring","Link","Shackle","Cable","Hawser","Splice"],shape:"chain-link rims",folds:[4,5,6,7,8,9]},{f:i=>Math.sin(Math.PI*i*3)>.5?1:.55,bite:.2,nouns:["Rivet","Stud","Boss","Bolthead","Grommet","Clinch"],shape:"rivet rows",folds:[6,8,10,12]},{f:i=>i>.42&&i<.58?.15:1,bite:.35,nouns:["Vent","Louver","Grille","Baffle","Damper","Shutter"],shape:"vented armour",folds:[3,4,5,6,8]},{f:i=>i<.6?1-.25*i/.6:i<.7?(.7-i)/.1*.75:0,bite:.7,nouns:["Hinge","Flap","Gate","Hatch","Strap","Bulkhead"],shape:"hinged wing plates",folds:[2,3,3,4,5]},{f:i=>.45+.55*Math.abs(Math.sin(Math.PI*i*4)),bite:.5,nouns:["Fin","Stack","Radiator","Heatsink","Manifold","Rack"],shape:"stacked fins",folds:[3,4,5,6]},{f:i=>.35+.65*Math.pow(Math.sin(Math.PI*Math.pow(i,.7)),.8),bite:.55,hooks:!0,nouns:["Spring","Coil","Helix","Torsion","Mainspring","Whorl"],shape:"spring coils",folds:[3,4,5,6,7]},{f:i=>Math.max(Tn((.3-Math.abs(i-.25))*10),.6*Tn((.2-Math.abs(i-.72))*12)),bite:.5,nouns:["Gearbox","Cogset","Differential","Transmission","Idler","Driveline"],shape:"gear trains",folds:[4,5,6,8]},{f:i=>i<.12?i/.12:i<.72?1:(1-i)/.28,bite:.15,nouns:["Shield","Deflector","Visor","Mantlet","Glacis","Aegis"],shape:"blast shields",folds:[3,4,5,6]},{f:i=>i<.92?Math.pow(i/.92,1.3):0,bite:.8,nouns:["Wedge","Ramp","Chock","Incline","Slope","Gradient"],shape:"wedge ramps",folds:[3,4,5,6,8]},{f:i=>1-.9*Math.pow(2*i-1,2),bite:.25,nouns:["Halfpipe","Trough","Channel","Gutter","Flume","Chute"],shape:"half-pipe channels",folds:[3,4,5,6]},{f:(i,t)=>Math.max(...[.15,.5,.85].map(e=>Math.pow(Tn(1-Math.abs(i-e)*6),1+t))),bite:.9,nouns:["Trident","Trifork","Tripod","Triad","Tricorn","Rake"],shape:"three-prong forks",folds:[2,3,4,5]}],Yh=12,Kh=320,x0=17,$d=["Iron","Steel","Cobalt","Chrome","Titanium","Carbon","Tungsten","Nickel","Onyx","Obsidian","Granite","Basalt","Quartz","Flint","Slate","Ember","Cinder","Ash","Frost","Glacier","Storm","Thunder","Gale","Vortex","Rift","Void","Apex","Vector","Vertex","Prime","Omega","Delta","Sigma","Hyper","Turbo","Nitro","Mach","Sonic","Rapid","Solar","Lunar","Polar","Orbit","Comet","Meteor","Pulsar","Quasar","Neutron","Photon","Ion","Flux","Torque","Crank","Rivet","Forge","Crucible","Alloy","Magnet","Static","Tremor","Bronze","Copper","Mercury","Argon","Xenon","Krypton","Radial","Axial","Kinetic","Inertia"],M0=[...$d,"Zinc","Brass","Pewter","Monsoon","Squall","Blizzard","Sleet","Mistral","Zephyr","Gust","Cyclone","Dynamo","Gasket","Valve","Rotor","Stator","Servo","Relay","Diode","Solenoid","Fulcrum","Lever","Axle","Pulley","Hydraulic","Pneumatic","Magnetic","Spindle","Bellows","Capstan","Winch","Sprocket","Flange","Bearing","Ratchet","Crown","Anvil","Turbine","Piston"];function Wa(i,t){const e=Math.pow(g0(t*i.fold/(Math.PI*2)+i.rot),i.sweep);return 1-i.depth*(1-Tn(Xi[i.family].f(e,i.sharp)))}function v0(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const _0=600;function y0(i,t){const e=v0(24350+i*7919),n=k=>k[Math.floor(e()*k.length)],s=(k,q)=>k+e()*(q-k),a=i<Kh,r=a?Yh:Xi.length,o=a?i%Yh:(i-Kh)%Xi.length,l=Xi[o],c={family:o,fold:n(l.folds),depth:s(.2,.62)*(.55+.45*l.bite+.2*e()),sweep:n([.55,.7,1,1,1.4,1.9]),sharp:e(),rot:0};c.depth=Tn(c.depth,.1,.6);const h=e()<.45,u=h?o:Math.floor(e()*r),f={family:u,fold:h?c.fold:n([c.fold,c.fold*2,Math.max(2,Math.round(c.fold/2)),...Xi[u].folds]),depth:Tn(s(.1,.4),.06,.42),sweep:h?c.sweep:n([.6,1,1,1.6]),sharp:e(),rot:h?s(0,.25):e()},d=[c,f];if(e()<.6){const k=Math.floor(e()*r);d.push({family:k,fold:n(Xi[k].folds),depth:s(.12,.38),sweep:n([.7,1,1.5]),sharp:e(),rot:e()})}const m={radius:Math.round(s(.93,1.07)*100)/100,layers:d,windows:Math.floor(e()*4),lights:Math.floor(e()*4),crownMetal:e()<.5,swap:e()<.3,ornament:0,thick:.12};let x=0;for(let k=0;k<90;k++)x+=Wa(c,k/90*Math.PI*2);x/=90;const p=Tn(.55*l.bite+.45*(c.depth/.6)),g=Tn((c.fold-2)/8),S=l.hooks&&c.fold<=3?.6+.4*(1-p):0,y=k=>Math.round(k*100)/100,_={attack:y(.86+.42*p-(S?.08:0)),burstDmg:y(.8+.3*p+.55*g*l.bite),burstRes:y(.46*(1-p)),mass:y(.3+.32*Tn((x-.6)/.38)*(1-.3*p)),radius:m.radius,teeth:c.fold,hook:y(S),spinDecay:y(-.12*(1-p)*(1-g*.5))};let C="";for(let k=0;k<50&&(!C||t.has(C));k++)C=`${n(a?$d:M0)} ${n(l.nouns)}`;t.has(C)&&(C=`${C} ${i}`),t.add(C),m.ornament=e()<.2?0:1+Math.floor(e()*6),m.thick=Math.round(s(.1,.19)*100)/100;const[w,T,M,v,b,R,I,O,F,X]=[e(),e(),e(),e(),e(),e(),e(),e(),e(),e()];let D,B,N,H="";a||(w<.6&&(m.ornament=7+Math.floor(T*(x0-7))),m.relief=Math.floor(M*4),m.relief&&(m.thick=Math.max(m.thick,.13)),m.tone=v<.4?0:1+Math.floor(b*3),m.glass=R<.14,I<.125&&(m.mech=1+Math.floor(O*3),m.wstyle=Math.floor(X*4),m.ornament=0,m.mech===1?(m.arms=F<.15?2:F<.75?3:4,D={radius:y(.16+.12*X),attack:-.4,guard:-.35,decay:-.3},_.radius=y(m.radius*.9),_.attack=y(_.attack*1.12),H=` Its ${m.arms} hinged wings tuck in at high spin and swing out into a wide guard below half spin.`):m.mech===2?(m.arms=3+Math.floor(F*3),B={count:m.arms,mass:y(.05+.03*X),attack:.05,speed:y(.05+.03*F)},_.mass=y(_.mass+.1),_.burstRes=y(Math.max(_.burstRes,.3)),H=` ${m.arms} armour plates crack off as it takes damage: lighter and quicker with each one lost, but it hits softer.`):(m.arms=3+Math.floor(F*2),N={radius:y(.35+.15*X),attack:y(.7+.4*F)},_.radius=y(m.radius*.8),H=` ${m.arms} weighted arms swing out with spin: wide reach and heavy blows when fast, short and weak when slow.`),_.teeth=m.arms));const K=p>.7?"Hits hard, breaks easily.":p>.45?"A balance of bite and staying power.":S?"Spins long and steals spin from opposite-spin tops.":"Heavy and hard to break. Outlasts.",j=["","","Twin","Three","Four","Five","Six","Seven","Eight","Nine","Ten"][c.fold]??String(c.fold),ot={attack:_.attack,burstDmg:_.burstDmg},ut=d0[i];return ut&&(_.attack=Math.round(ot.attack*ut[0]*1e3)/1e3,_.burstDmg=Math.round(ot.burstDmg*ut[1]*1e3)/1e3),{id:`g${i}`,base:ot,name:C,blurb:`${j} ${l.shape}${d.length>2?" under a "+Xi[d[2].family].shape.replace(/s$/,"")+" crown":""}. ${K}${H}`,gen:m,mods:_,shift:D,plates:B,flail:N}}const b0=(()=>{const i=new Set,t=[];for(let e=0;e<_0;e++)t.push(y0(e,i));return t})();function sh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const on=i=>Math.round(i*100)/100,Bn=i=>Math.round(i*1e3)/1e3,jh=["Iron","Steel","Cobalt","Chrome","Titanium","Carbon","Tungsten","Nickel","Onyx","Granite","Basalt","Quartz","Flint","Slate","Ember","Cinder","Frost","Storm","Gale","Vortex","Apex","Vector","Prime","Delta","Sigma","Turbo","Nitro","Mach","Sonic","Solar","Lunar","Polar","Comet","Pulsar","Neutron","Photon","Flux","Torque","Rivet","Forge","Alloy","Static","Bronze","Copper","Mercury","Argon","Axial","Kinetic","Zinc","Brass","Pewter","Monsoon","Squall","Blizzard","Sleet","Mistral","Zephyr","Gust","Cyclone","Dynamo","Gasket","Valve","Rotor","Stator","Servo","Relay","Fulcrum","Lever","Axle","Pulley","Hydraulic","Pneumatic","Magnetic"],Zh=[{label:"rim-heavy rings",nouns:["Rimguard","Hoop","Girdle","Collar","Flange","Bandage"],blurb:"Weight out on the rim: spins long, slow to turn.",stats:{mass:.62,steer:-3,spinDecay:-.14,burstRes:0}},{label:"core-heavy hubs",nouns:["Hub","Kernel","Nucleus","Arbor","Spindle","Boss"],blurb:"Weight at the centre: quick to steer, short on spin time.",stats:{mass:.5,steer:3,spinDecay:0,burstRes:0}},{label:"offset cams",nouns:["Cam","Eccentric","Lobe","Tappet","Crank","Cogwheel"],blurb:"Weight to one side: it wobbles, so spin time suffers, but it turns on a coin.",stats:{mass:.55,steer:4,spinDecay:.07,burstRes:.06}},{label:"spoked wheels",nouns:["Spoke","Wheel","Armature","Lattice","Truss","Rigging"],blurb:"Light spokes: little weight, but it keeps its spin.",stats:{mass:.42,steer:3,spinDecay:-.07,burstRes:0}},{label:"layered stacks",nouns:["Laminate","Stack","Strata","Tier","Sheaf","Bulkhead"],blurb:"Plates bolted in layers: heavy and hard to burst.",stats:{mass:.74,steer:-3,spinDecay:-.02,burstRes:.12}},{label:"vented discs",nouns:["Vent","Louver","Grille","Mesh","Baffle","Radiator"],blurb:"Cut-through vents: very light and nimble, but thrown around.",stats:{mass:.36,steer:5,spinDecay:.05,burstRes:0}},{label:"solid slabs",nouns:["Slab","Ingot","Billet","Ballast","Plinth","Block"],blurb:"A solid lump: very hard to move, slow to turn.",stats:{mass:.86,steer:-4,spinDecay:.05,burstRes:.05}},{label:"stepped cones",nouns:["Ziggurat","Taper","Stepcone","Funnel","Pagoda","Terrace"],blurb:"Weight stepped toward the middle: balanced, with a tough core.",stats:{mass:.6,steer:0,spinDecay:-.04,burstRes:.1}}],S0=64;function w0(i,t){const e=t??[1,1];return{mass:Bn(i[0]*e[0]),steer:on(i[2]),spinDecay:Bn(i[1]-.1*(e[1]-1)),burstRes:on(i[3])}}const Jh=[{label:"flat bases",nouns:["Plate","Skid","Slider","Puck","Runner","Pad"],blurb:"Flat to the floor: fast and loose, it drifts wide and loses spin.",stats:{drive:4.2,drag:1,spinDecay:.04,steer:0}},{label:"sharp points",nouns:["Point","Pin","Stylus","Probe","Nib","Awl"],blurb:"A fine point: holds its ground and saves spin, slow to cross the bowl.",stats:{drive:1.4,drag:1.5,spinDecay:-.09,steer:-1}},{label:"ball tips",nouns:["Bearing","Marble","Pearl","Orb","Globe","Pellet"],blurb:"A rolling ball: steady, and a little harder to burst.",stats:{drive:2.4,drag:1.15,spinDecay:-.02,burstRes:.1}},{label:"rubber treads",nouns:["Grip","Tread","Cleat","Traction","Stud","Gasket"],blurb:"Rubber bites the floor: sharp turns, but it burns spin.",stats:{drive:3,drag:1.6,spinDecay:.16,steer:4}},{label:"roller races",nouns:["Roller","Race","Cage","Ballrace","Raceway","Axle"],blurb:"Bearings in a race: a long, smooth spin at a moderate pace.",stats:{drive:2.8,drag:1.1,spinDecay:-.06,steer:0}},{label:"wide feet",nouns:["Base","Foot","Pedestal","Stance","Platform","Footing"],blurb:"A broad foot: very stable and hard to burst, but slow to move.",stats:{drive:1.8,drag:1.8,spinDecay:.02,burstRes:.12,steer:-2}},{label:"offset skids",nouns:["Camber","Tilt","Slant","Lean","Skewer","Cant"],blurb:"Set off the axis: it swings out and turns hard, at a cost in spin.",stats:{drive:3.6,drag:1.2,spinDecay:.07,steer:3}},{label:"spring-loaded tips",nouns:["Spring","Shock","Piston","Damper","Strut","Plunger"],blurb:"A sprung tip soaks up hits: tough against bursting, with a moderate pace.",stats:{drive:3,drag:1.3,spinDecay:.05,burstRes:.2,steer:1}}],E0=64;function T0(i,t){const e=t??[1,1];return{drive:on(i[0]),drag:on(i[1]),spinDecay:Bn(i[2]-.1*(e[1]-1)),steer:on(i[3]),burstRes:Bn(i[4]+.25*(e[0]-1))}}const A0=["dash","brace","brake","spring"],Qh=[{label:"surge cores",nouns:["Surge","Jolt","Rush","Spark","Thrust","Lunge"],blurb:"DASH, a sudden lunge that hits harder",stats:{burstRes:1.15}},{label:"brace cores",nouns:["Brace","Clamp","Lock","Vice","Strut","Pawl"],blurb:"BRACE, dig in and take a fraction of the hit",stats:{burstRes:1.15}},{label:"brake cores",nouns:["Anchor","Drag","Stopper","Chock","Grapple","Capstan"],blurb:"BRAKE, stop dead then launch faster than you arrived",stats:{burstRes:1.2}},{label:"spring cores",nouns:["Coil","Pogo","Rebound","Catapult","Trampoline","Spindle"],blurb:"SPRING JUMP, hop over tops and gaps and land with a shockwave",stats:{burstRes:1.3}}],R0=40;function C0(i,t){const e=t??[1,1];return{mods:{burstRes:Bn(i[0]*e[0]),steer:on(i[2])},abil:{cd:i[3],pow:Bn(i[1]*e[1])}}}function Yd(i,t){return`${i.blurb}${t?" "+t:""}`}function ah(i,t,e,n){let s="";for(let a=0;a<60&&(!s||e.has(s));a++)s=`${jh[Math.floor(i()*jh.length)]} ${t.nouns[Math.floor(i()*t.nouns.length)]}`;return e.has(s)&&(s=`${s} ${n}`),e.add(s),s}function P0(i,t){const e=sh(53596+i*7919),n=i%Zh.length,s=Zh[n],a=Array.from({length:6},()=>on(e())),r=s.stats,o=(r.mass??.5)*(.88+.24*a[0]),l=(r.spinDecay??0)+.06*(a[1]-.5)*-1,c=(r.steer??0)+2.4*(.5-a[1])+1.2*(a[2]-.5),h=[Bn(o),Bn(l),on(c),on((r.burstRes??0)+.04*(a[3]-.5))],u=a[0]>.66?"Heavier than most of its kind.":a[0]<.33?"Lighter than most of its kind.":"";return{id:`d${i}`,slot:"disc",name:ah(e,s,t,i),blurb:Yd(s,u),family:s.label,recipe:{family:n,v:a},mods:w0(h,f0[i]),base:h}}function L0(i,t){const e=sh(29109+i*7919),n=i%Jh.length,s=Jh[n],a=Array.from({length:6},()=>on(e())),r=s.stats,o=[on((r.drive??2)*(.9+.2*a[0])),on((r.drag??1.2)*(.92+.16*a[1])),Bn((r.spinDecay??0)+.05*(a[2]-.5)),on((r.steer??0)+1.6*(a[3]-.5)),Bn((r.burstRes??0)+.04*(a[4]-.5))],l=a[0]>.66?"Quicker than most of its kind.":a[0]<.33?"Slower than most of its kind.":"";return{id:`t${i}`,slot:"tip",name:ah(e,s,t,i),blurb:Yd(s,l),family:s.label,recipe:{family:n,v:a},mods:T0(o,p0[i]),base:o}}function I0(i,t){const e=sh(49381+i*7919),n=i%Qh.length,s=Qh[n],a=A0[n],r=Array.from({length:6},()=>on(e())),o=.75+.65*r[0],l=Math.max(.55,Math.min(1.5,1.45-.9*r[1]+.25*(r[0]-.5))),c=(s.stats.burstRes??1.15)-.22*(o-1)-.12*(1/l-1)+.08*(r[2]-.5),h=[Bn(Math.max(.7,c)),Bn(o),on(1.5*(r[3]-.5)),on(l)],u=Math.round(({dash:6,brace:8,brake:7,spring:7}[a]??7)*l*10)/10,f=o>=1.1?"strong":o<=.9?"light":"even",d=`${s.blurb}. A ${f} effect on a ${u} s cooldown.`,m=C0(h,m0[i]);return{id:`c${i}`,slot:"core",name:ah(e,s,t,i),blurb:d,family:s.label,recipe:{family:n,v:r},mods:m.mods,abil:m.abil,ability:a,base:h}}const D0=(()=>{const i=new Set;return Array.from({length:S0},(t,e)=>P0(e,i))})(),N0=(()=>{const i=new Set;return Array.from({length:E0},(t,e)=>L0(e,i))})(),U0=(()=>{const i=new Set;return Array.from({length:R0},(t,e)=>I0(e,i))})(),Ci=["blade","disc","tip","core","launcher","reactor"],co={blade:"BLADE",disc:"DISC",tip:"TIP",core:"CORE",launcher:"LAUNCH",reactor:"ELEMENT"},k0={attack:0,burstDmg:0,burstRes:0,mass:.2,radius:0,teeth:0,hook:0,spinDecay:.8,drive:0,drag:0,steer:12,chargeTime:0,maxSpin:0,superGain:1,superPower:1},yn=[{id:"talon",slot:"blade",name:"Talon",blurb:"Three hooked claws. Huge hits, huge recoil.",mods:{attack:1.3,burstDmg:1.2,teeth:3,radius:1,mass:.35}},{id:"bastion",slot:"blade",name:"Bastion",blurb:"Round armoured ring. Shrugs off blows.",mods:{attack:1.05,burstDmg:1,teeth:6,radius:1.05,mass:.6,burstRes:.45,spinDecay:-.05}},{id:"ripsaw",slot:"blade",name:"Ripsaw",blurb:"Eight teeth that tear cores open. Best at bursting.",mods:{attack:1.14,burstDmg:1.65,teeth:8,radius:1,mass:.38}},{id:"halo",slot:"blade",name:"Halo",blurb:"Twin wings. Spins longest, steals spin from opposite-spin tops.",mods:{attack:.85,burstDmg:.8,teeth:2,radius:1.02,mass:.45,hook:1,spinDecay:-.12,burstRes:.15}},{id:"shifter",slot:"blade",name:"Shifter",blurb:"Three hinged wings. Tucked in to strike at high spin; below half spin they swing out into a wide guard.",mods:{attack:1.25,burstDmg:1.15,teeth:3,radius:.9,mass:.42},shift:{radius:.22,attack:-.4,guard:-.35,decay:-.3}},{id:"breakaway",slot:"blade",name:"Breakaway",blurb:"Four armour plates that crack off as it takes damage. Lighter and quicker with every one lost, but it hits softer.",mods:{attack:1.22,burstDmg:1.1,teeth:4,radius:1,mass:.5,burstRes:.42},plates:{count:4,mass:.07,attack:.05,speed:.07}},{id:"flail",slot:"blade",name:"Flail",blurb:"Three weights on hinged arms. They swing out with spin: wide reach and heavy blows when fast, short and weak when slow.",mods:{attack:1.2,burstDmg:1.1,teeth:3,radius:.8,mass:.4},flail:{radius:.45,attack:.9}},{id:"pivot",slot:"disc",name:"Pivot",blurb:"Weight at the centre. Quick to steer.",mods:{mass:.5,steer:3}},{id:"flywheel",slot:"disc",name:"Flywheel",blurb:"Weight at the rim. Long spin, slow to turn.",mods:{mass:.6,spinDecay:-.15,steer:-3}},{id:"anvil",slot:"disc",name:"Anvil",blurb:"A solid slab. Very hard to move.",mods:{mass:.85,steer:-4,spinDecay:.05}},{id:"feather",slot:"disc",name:"Feather",blurb:"Vented alloy. Darts around, gets thrown around.",mods:{mass:.38,steer:5,spinDecay:.04}},{id:"needle",slot:"tip",name:"Needle",blurb:"Sharp point. Holds the centre and saves spin.",mods:{drive:1.2,drag:1.5,spinDecay:-.1}},{id:"flatline",slot:"tip",name:"Flatline",blurb:"Flat base. Races around the bowl.",mods:{drive:4.95,drag:1.05,spinDecay:.02}},{id:"gripper",slot:"tip",name:"Gripper",blurb:"Rubber. Turns on the spot, burns spin fast.",mods:{drive:3.2,drag:1.6,steer:5,spinDecay:.2}},{id:"orbit",slot:"tip",name:"Orbit",blurb:"Ball bearing. Steady, hard to burst.",mods:{drive:2.2,drag:1.15,burstRes:.1}},{id:"surge",slot:"core",name:"Surge",blurb:"DASH: a sudden lunge that hits harder.",mods:{burstRes:1.15},ability:"dash"},{id:"viper",slot:"core",name:"Viper",blurb:"DASH, lighter lock. Nimble but bursts sooner.",mods:{burstRes:1.12,steer:4,spinDecay:-.06},ability:"dash"},{id:"rampart",slot:"core",name:"Rampart",blurb:"BRACE: dig in and take a fraction of the hit.",mods:{burstRes:1.12},ability:"brace"},{id:"lockjaw",slot:"core",name:"Lockjaw",blurb:"BRACE, four clamps. Nearly impossible to burst.",mods:{burstRes:1.2,mass:.05,steer:-2},ability:"brace"},{id:"anchor",slot:"core",name:"Anchor",blurb:"BRAKE: dig in and stop dead, then launch faster than you arrived.",mods:{burstRes:1.2,mass:.05},ability:"brake"},{id:"coil",slot:"core",name:"Coil",blurb:"SPRING JUMP: hop over tops and gaps, land with a shockwave.",mods:{burstRes:1.3,steer:2},ability:"spring"},{id:"ripcord",slot:"launcher",name:"Ripcord",blurb:"Balanced power and timing.",mods:{chargeTime:.9,maxSpin:100}},{id:"string",slot:"launcher",name:"String",blurb:"Most spin, very tight timing.",mods:{chargeTime:.55,maxSpin:106}},{id:"winder",slot:"launcher",name:"Winder",blurb:"Least spin, easy timing.",mods:{chargeTime:1.4,maxSpin:96}},{id:"geared",slot:"launcher",name:"Geared",blurb:"A little extra spin, slower meter.",mods:{chargeTime:1.1,maxSpin:102}}];yn.push(...Mo.map(i=>({id:i.id,slot:"reactor",name:i.name,blurb:i.blurb,mods:{}})));yn.push(...b0.map(i=>({id:i.id,slot:"blade",name:i.name,blurb:i.blurb,mods:i.mods,gen:i.gen,family:Xi[i.gen.layers[0].family].shape,shift:i.shift,plates:i.plates,flail:i.flail})));yn.push(...[...D0,...N0,...U0].map(i=>({id:i.id,slot:i.slot,name:i.name,blurb:i.blurb,mods:i.mods,family:i.family,recipe:i.recipe,ability:i.ability,abil:i.abil})));const Yi=i=>yn.filter(t=>t.slot===i),yr=i=>yn.filter(t=>t.slot===i&&!t.family),ze=i=>yn.find(t=>t.id===i)??yn[0],Kd=[16734751,15213357,16761370,3066970,1492928,2784255,9063935,15921909,2303535],jd=[16757575,16730955,16773226,7077770,7332863,5934079,12946431,16777215],Zd=["steel","chrome","gunmetal","gold","copper"],Ms={blade:"talon",disc:"pivot",tip:"flatline",core:"surge",launcher:"ripcord",reactor:"thermal",spinDir:1,paint:16734751,glow:16757575,metal:"steel"},O0={thermal:"Molten",cryo:"Frozen",volt:"Charged",gale:"Cyclonic",quake:"Seismic",mag:"Magnetic",plasma:"Ionised",gravity:"Graviton",resonance:"Resonant"},F0={ATTACK:{dash:"Ram",brace:"Breaker",brake:"Slingshot",spring:"Hammerfall"},DEFENCE:{dash:"Bulldozer",brace:"Fortress",brake:"Anchor",spring:"Dropfort"},STAMINA:{dash:"Dynamo",brace:"Gyro",brake:"Flywheel",spring:"Orbiter"},BALANCED:{dash:"Engine",brace:"Regulator",brake:"Governor",spring:"Rover"}};function rh(i){const t=va(i,""),e=dr(i.reactor),n=e.elements.length>1?e.name:O0[e.elements[0]]??e.name,s=F0[oh(ia(t))]?.[t.ability]??"Engine";return`${n} ${ze(i.blade).name} ${s}`.toUpperCase()}const B0={"flat bases":"DRIFTS WIDE","sharp points":"HOLDS GROUND","rubber treads":"SHARP TURNS","offset skids":"SWERVES","spring-loaded tips":"SHOCK PROOF","wide feet":"STABLE","offset cams":"WOBBLES","solid slabs":"IMMOVABLE","layered stacks":"LAYERED PLATES","vented discs":"LIGHT AND LOOSE"},tu={dash:"DASH",brace:"BRACE",brake:"BRAKE",spring:"JUMP"};function Uo(i){const t=ia(i),e=[];i.shift&&e.push("SHIFT WINGS"),i.plates&&e.push("SHEDS PLATES"),i.flail&&e.push("FLAIL ARMS"),i.elements.length>1&&e.push("FUSED REACTOR"),i.hook>.5&&e.push("SPIN THIEF");for(const s of[i.look.tip,i.look.disc]){const a=B0[ze(s).family??""];a&&e.push(a)}const n=ze(i.look.core);return n.abil&&n.abil.pow>=1.15?e.push(`STRONG ${tu[i.ability]}`):n.abil&&n.abil.cd<=.8&&e.push(`QUICK ${tu[i.ability]}`),i.burstDmg>1.45&&e.push("CORE BREAKER"),t.attack>.75&&e.push("HEAVY HITTER"),t.defence>.75&&e.push("ARMOURED"),t.stamina>.75&&e.push("LONG SPINNER"),t.speed>.75&&e.push("FAST"),t.weight>.75?e.push("HEAVY"):t.weight<.2&&e.push("LIGHT"),e.length||e.push(oh(t)),e.slice(0,3)}function va(i,t=rh(i)){const e={...k0};let n="dash",s,a,r,o;for(const l of Ci){const c=ze(i[l]);for(const[h,u]of Object.entries(c.mods))e[h]+=u;c.ability&&(n=c.ability),c.shift&&(s=c.shift),c.plates&&(a=c.plates),c.flail&&(r=c.flail),c.abil&&(o=c.abil)}return{name:t,role:e.attack>=1.05?"attack":"stamina",color:i.paint,accent:i.glow,spinDir:i.spinDir,radius:e.radius,mass:e.mass,maxSpin:e.maxSpin,attack:e.attack,burstDmg:e.burstDmg,burstRes:e.burstRes,spinDecay:e.spinDecay,drive:e.drive,drag:e.drag,steer:e.steer,teeth:e.teeth,spiky:e.attack>=1.05,hook:e.hook,shift:s,plates:a,flail:r,abil:o,elements:dr(i.reactor).elements,superGain:e.superGain,superPower:e.superPower,ability:n,chargeTime:e.chargeTime,look:{blade:i.blade,disc:i.disc,tip:i.tip,core:i.core,paint:i.paint,glow:i.glow,metal:i.metal}}}function z0(i,t){const e=a=>a[Math.floor(i()*a.length)],n=Kd.filter(a=>a!==t),s=i()<.2;return{blade:e(Yi("blade")).id,disc:e(Yi("disc")).id,tip:e(Yi("tip")).id,core:e(Yi("core")).id,launcher:e(Yi("launcher")).id,reactor:e(Mo.filter(a=>!Hd(a.id)).filter(a=>a.elements.length>1===s)).id,spinDir:i()<.5?1:-1,paint:e(n),glow:e(jd),metal:e(Zd)}}const er=["attack","defence","stamina","speed","weight","burst"],Jd={attack:"ATTACK",defence:"DEFENCE",stamina:"STAMINA",speed:"SPEED",weight:"WEIGHT",burst:"BURST RESIST"};function Qd(i){return{attack:i.attack*.6+i.burstDmg*.4,defence:i.mass*.55+i.burstRes*.45,stamina:i.maxSpin/i.spinDecay,speed:i.drive+i.steer*.3,weight:i.mass,burst:i.burstRes}}let al=null;function H0(){if(al)return al;const i={},t={};for(const e of er)i[e]=1/0,t[e]=-1/0;for(const e of yr("blade"))for(const n of yr("disc"))for(const s of yr("tip"))for(const a of yr("core"))for(const r of Yi("launcher")){const o=Qd(va({...Ms,blade:e.id,disc:n.id,tip:s.id,core:a.id,launcher:r.id},""));for(const l of er)i[l]=Math.min(i[l],o[l]),t[l]=Math.max(t[l],o[l])}return al={min:i,max:t}}function ia(i){const t=Qd(i),{min:e,max:n}=H0(),s={};for(const a of er)s[a]=Math.max(0,Math.min(1.25,(t[a]-e[a])/(n[a]-e[a]||1)));return s}function oh(i){const t=[["ATTACK",i.attack],["DEFENCE",i.defence],["STAMINA",i.stamina]];return t.sort((e,n)=>n[1]-e[1]),t[0][1]-t[1][1]>=.12?t[0][0]:"BALANCED"}const Si=[{name:"Common",color:10134453,rolls:0,weight:600},{name:"Uncommon",color:4972650,rolls:1,weight:270},{name:"Rare",color:4889599,rolls:2,weight:100},{name:"Epic",color:12084991,rolls:3,weight:26},{name:"Legendary",color:16761402,rolls:4,weight:4}],tf=[{key:"attack",label:"Attack",prefix:"Honed",min:3,max:8,slots:["blade","core"]},{key:"burstDmg",label:"Burst damage",prefix:"Jagged",min:4,max:10,slots:["blade"]},{key:"burstRes",label:"Burst resistance",prefix:"Bolted",min:4,max:10,slots:["core","disc","blade"]},{key:"mass",label:"Weight",prefix:"Dense",min:3,max:7,slots:["disc"]},{key:"steer",label:"Handling",prefix:"Nimble",min:4,max:9,slots:["tip","disc"]},{key:"drive",label:"Speed",prefix:"Swift",min:4,max:9,slots:["tip"]},{key:"spinDecay",label:"Spin time",prefix:"Balanced",min:3,max:8,slots:["tip","disc","blade","launcher"]},{key:"maxSpin",label:"Launch spin",prefix:"Wound",min:2,max:6,slots:["launcher","core"]},{key:"superGain",label:"Overdrive gain",prefix:"Primed",min:5,max:12,slots:["reactor","core"]},{key:"superPower",label:"Super power",prefix:"Overloaded",min:5,max:12,slots:["reactor"]}],ko=i=>tf.find(t=>t.key===i),nr=20;function ef(i,t,e={}){const n=Yi(e.slot??Ci[Math.floor(i()*Ci.length)]);let s=n[Math.floor(i()*n.length)];const a=Si.map((h,u)=>u<(e.minRarity??0)?0:h.weight*Math.pow(1+t*.07,u));let r=i()*a.reduce((h,u)=>h+u,0),o=Si.length-1;for(let h=0;h<a.length;h++)if(r-=a[h],r<0){o=h;break}if(s.slot==="reactor"&&o<zh(s.id)){const h=Yi("reactor").filter(u=>zh(u.id)===0);s=h[Math.floor(i()*h.length)]}let l;if(o===Si.length-1){const h=qd.filter(f=>!e.slot||ze(f.part).slot===e.slot),u=h[Math.floor(i()*h.length)];u&&(l=u.id,s=ze(u.part))}const c={uid:e.uid??"",part:s.id,rarity:o,level:t,affixes:[]};return l&&(c.legend=l),sf(c,i),c}const Kl=i=>.7+.05*i,G0=(i,t)=>Kl(i)*(1+.15*t),nf=(i,t,e,n)=>Math.round((i.min+t()*(i.max-i.min))*G0(e,n)*10)/10;function sf(i,t){const e=ze(i.part).slot,n=tf.filter(s=>s.slots.includes(e)&&!i.affixes.some(a=>a.key===s.key));for(let s=Math.min(Si[i.rarity].rolls,i.affixes.length+n.length)-i.affixes.length;s>0;s--){const a=n.splice(Math.floor(t()*n.length),1)[0];i.affixes.push({key:a.key,pct:nf(a,t,i.level,i.rarity)})}i.affixes.sort((s,a)=>a.pct-s.pct)}function jl(i){const t=i.legend&&ih(i.legend);if(t)return t.name;const e=ze(i.part).name;return i.affixes.length?`${ko(i.affixes[0].key).prefix} ${e}`:e}const _o=i=>i.legend&&ih(i.legend)?.text||"",Zl=i=>`+${i.pct}% ${ko(i.key).label}`,ji=i=>Math.round(10+i.rarity*12+i.level*2+i.affixes.reduce((t,e)=>t+e.pct,0)),Jl=i=>2+i.rarity*i.rarity*4+i.level,af=i=>i.tier+5,rf=i=>Math.round((4+i.level*2)*(1+i.rarity*.75)),Ql=i=>5+i.level+i.rarity*6;function V0(i,t){const e=i.items.find(a=>a.uid===t);if(!e||e.level>=af(i))return 0;const n=rf(e);if(i.scrap<n)return 0;i.scrap-=n;const s=Kl(e.level+1)/Kl(e.level);e.level++;for(const a of e.affixes)a.pct=Math.round(a.pct*s*10)/10;return n}function W0(i,t,e,n){const s=i.items.find(o=>o.uid===t);if(!s||!s.affixes[e])return 0;const a=Ql(s);if(i.scrap<a)return 0;i.scrap-=a;const r=s.affixes[e];return r.pct=nf(ko(r.key),n,s.level,s.rarity),s.affixes.sort((o,l)=>l.pct-o.pct),a}function X0(i,t){const e=new Set([...i.affixes.map(a=>a.key),...t?.affixes.map(a=>a.key)??[]]),n=(a,r)=>a?.affixes.find(o=>o.key===r)?.pct??0,s=[...e].map(a=>({key:a,label:ko(a).label,now:n(t,a),item:n(i,a),diff:Math.round((n(i,a)-n(t,a))*10)/10}));return s.sort((a,r)=>r.item-a.item),{rows:s,power:ji(i)-(t?ji(t):0)}}function q0(i,t,e,n){const s=r=>i.items.indexOf(r),a=(r,o)=>e==="newest"?s(o)-s(r):e==="rarity"&&o.rarity-r.rarity||ji(o)-ji(r);return[...t].sort((r,o)=>+(o.uid===n)-+(r.uid===n)||a(r,o))}function of(i,t){const e=Object.values(i.equipped);return i.items.filter(n=>n.rarity<=t&&!e.includes(n.uid))}function $0(i,t){let e=0;for(const n of of(i,t))e+=uf(i,n.uid);return e}const Y0=10;function K0(i){let t=i|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function lf(i,t){const e={...i},n=t.filter(s=>s.legend).map(s=>s.legend);n.length&&(e.legends=n);for(const s of t)for(const a of s.affixes)a.key==="spinDecay"?e.spinDecay/=1+a.pct/100:e[a.key]*=1+a.pct/100;return e}const j0=["talon","bastion","pivot","feather","flatline","needle","surge","rampart","ripcord","winder","thermal","cryo"];function Z0(){const i=j0.map((e,n)=>({uid:"s"+n,part:e,rarity:0,level:1,affixes:[]})),t={};for(const e of Ci)t[e]=i.find(n=>n.part===Ms[e]).uid;return{v:5,items:i,equipped:t,paint:Ms.paint,glow:Ms.glow,metal:Ms.metal,spinDir:1,scrap:0,tier:1,wins:0,nextUid:1,pity:0,bosses:[],tutorial:0,found:[...new Set(i.map(e=>e.part))]}}function eu(i){const t=Z0(),e=i?.v;if(!i||typeof i!="object"||e!==1&&e!==2&&e!==3&&e!==4&&e!==5||!Array.isArray(i.items))return t;const n={...t,...i,v:5};n.tutorial=e<4||n.tutorial===1?1:0,n.bosses=Array.isArray(n.bosses)?[...new Set(n.bosses.filter(s=>Number.isInteger(s)&&s>=5&&s<=nr&&s%5===0))]:[],n.pity=Math.max(0,Math.floor(n.pity)||0),n.items=n.items.filter(s=>s&&yn.some(a=>a.id===s.part)&&Array.isArray(s.affixes));for(const s of n.items)s.legend&&!ih(s.legend)&&delete s.legend;n.found=[...new Set([...Array.isArray(n.found)?n.found.filter(s=>yn.some(a=>a.id===s)):[],...n.items.map(s=>s.part)])];for(const s of Ci)if(!n.items.find(r=>r.uid===n.equipped?.[s]&&ze(r.part).slot===s)){let r=n.items.find(o=>ze(o.part).slot===s);r||(r={uid:"fix"+s,part:Ms[s],rarity:0,level:1,affixes:[]},n.items.push(r)),n.equipped={...n.equipped,[s]:r.uid}}return n.tier=Math.max(1,Math.min(nr,Math.floor(n.tier)||1)),n.scrap=Math.max(0,Math.floor(n.scrap)||0),n.spinDir=n.spinDir===-1?-1:1,n}const cf=(i,t)=>i.items.find(e=>e.uid===t),hf=i=>Ci.map(t=>cf(i,i.equipped[t]));function Xa(i){const t={spinDir:i.spinDir,paint:i.paint,glow:i.glow,metal:i.metal};for(const e of Ci)t[e]=cf(i,i.equipped[e]).part;return t}function sa(i,t){return lf(va(Xa(i),t),hf(i))}const J0=i=>hf(i).reduce((t,e)=>t+ji(e),0);function Q0(i,t){return i.pity>=Y0&&t.rarity<2&&(t.rarity=2,sf(t,K0(i.nextUid*7919+i.wins))),i.pity=t.rarity>=2?0:i.pity+1,t.uid="i"+i.nextUid++,i.items.push(t),i.found.includes(t.part)||i.found.push(t.part),t}function uf(i,t){if(Object.values(i.equipped).includes(t))return 0;const e=i.items.findIndex(s=>s.uid===t);if(e<0)return 0;const n=Jl(i.items[e]);return i.items.splice(e,1),i.scrap+=n,n}function tm(i,t,e,n,s,a=!1){const r=e?1+(i()<.55?1:0)+(s>=3?1:0)+(n?1:0):i()<.35?1:0;return Array.from({length:r},(o,l)=>ef(i,t,{minRarity:n&&e&&l===0?a&&t>=nr?4:2:0}))}const nu=["RUSTWIND","IRONVOLT","COGBREAKER","SLAGHAMMER","GRINDSTONE","HEXBOLT","TORQUE","CRANKSHAFT","GEARLOCK","RIVETER","DRILLBIT","FLINTLOCK","PISTON","CAMSHAFT","SPROCKET","BALLAST"],iu=["rusher","turtle","rider","ambusher"],em={rusher:"RUSHER",turtle:"TURTLE",rider:"WALL-RIDER",ambusher:"AMBUSHER"},nm={rusher:["RAMJET","BLITZ","THRUSTER","CANNONBALL","WRECKER","BATTERAM","OVERDRIVE","FLASHPOINT"],turtle:["BULWARK","GRANITE","VAULT","BUNKER","ANCHORAGE","KEEPSTONE","BARRICADE","DEADBOLT"],rider:["RIMRUNNER","LOOPLINE","ORBITER","CIRCUIT","TRACKLAYER","RAILGUN","MERRYGO","SLIPSTREAM"],ambusher:["TRIPWIRE","SNAPSPRING","DEADFALL","MOUSETRAP","HAIRTRIGGER","LANDMINE","POPGUN","JACKBOX"]},im={rusher:{blade:["talon","ripsaw","shifter"],tip:["flatline","gripper"],core:["surge","viper","anchor"]},turtle:{blade:["bastion","halo"],disc:["anvil","flywheel"],core:["rampart","lockjaw"]},rider:{tip:["flatline","orbit"],disc:["pivot","feather"],core:["surge","coil","viper"]},ambusher:{disc:["feather","pivot"],tip:["needle","gripper"],core:["anchor","coil","surge"]}},df=i=>i%5===0,sm=i=>es[Fd(i)].name,am=i=>({strike:Math.min(92,28+i*4),boost:Math.min(85,34+i*3)});function ff(i,t,e,n=[]){const s=z0(i,e),a=iu[Math.floor(i()*iu.length)];for(const[f,d]of Object.entries(im[a]))i()<.7&&(s[f]=d[Math.floor(i()*d.length)]);const r=Ci.map(f=>{const d=ef(i,t,{slot:f});return d.part=s[f],delete d.legend,d.affixes=d.affixes.filter(()=>i()<.5+t*.025),d}),l=(i()<.75?nm[a]:nu).filter(f=>!n.includes(f)),c=l[Math.floor(i()*l.length)]??nu.find(f=>!n.includes(f))??"FOE",h=lf(va(s,c),r);h.ai={...am(t),persona:a};const u=Math.max(0,3-t)/2;return u>0&&(h.maxSpin*=1-.07*u,h.mass*=1-.2*u,h.burstRes*=1-.15*u,h.attack*=1-.14*u,h.steer*=1-.2*u,h.ai={...h.ai,strike:h.ai.strike-6*u,boost:h.ai.boost-6*u,persona:a}),h}function rm(){const i=va({...Ms,blade:"bastion",disc:"anvil",tip:"needle",core:"lockjaw",paint:8226454,glow:13095656},"TRAINING DUMMY");return i.attack*=.3,i.burstRes*=6,i.drive=0,i.steer=0,i.spinDecay*=.1,i.superGain=0,i}function om(i,t,e){const n=ff(i,Math.min(nr,t+2),e),s=1.55;n.name=sm(t),n.role="attack",n.radius*=s,n.mass*=1.6,n.maxSpin*=1.7,n.burstRes*=1.4,n.attack*=.7,n.steer*=.75,n.spinDecay*=.9;const a=Fd(t),r=es[a];return n.boss={kind:a},n.elements=[r.element],n.color=r.paint,n.accent=r.glow,n.look={...n.look,blade:"boss_"+a,disc:"anvil",tip:"orbit",core:"lockjaw",paint:r.paint,glow:r.glow,metal:r.metal,scale:s},n.ai={strike:Math.min(95,50+t*2),boost:70},n}function lm(i,t,e,n){const s=[],a=o=>{const l=ff(i,o,n,s);return s.push(l.name),l},r=Array.from({length:e-1},()=>a(t));if(df(t)){const o=t>=10?Math.min(2,e):0;return{allies:r,enemies:[om(i,t,n),...Array.from({length:o},()=>a(t))],boss:!0}}return{allies:r,enemies:Array.from({length:e},()=>a(t)),boss:!1}}const cm=3.5,yo=.6;class pf{constructor(t,e,n=2,s=la,a){this.specs=t,this.seed=e,this.winsNeeded=n,this.stadium=s,this.teams=a,this.world=Hh(t,e,s,a)}world;phase="countdown";phaseT=3*yo;liveT=0;round=1;score=[0,0];tick(t,e){switch(this.phase){case"countdown":return this.phaseT-=vt,this.phaseT<=0&&(this.phase="live",this.liveT=0),[];case"live":{this.liveT+=vt;const n=[];return this.world.tops.forEach((s,a)=>{if(s.inPlay)return;const r=e[a]??(this.liveT>cm?{x:0,y:0,power:.5,tilt:0}:null);r&&Wd(this.world,a,r,n)}),n.push(...sl(this.world,t)),this.world.over&&(this.world.over.winner>=0&&this.score[this.world.over.winner]++,this.phase="roundEnd",this.phaseT=3),n}case"roundEnd":{this.phaseT-=vt;const n=sl(this.world,t);return this.phaseT<=0&&(this.score.some(s=>s>=this.winsNeeded)?this.phase="matchEnd":(this.round++,this.world=Hh(this.specs,this.seed+this.round*7919,this.stadium,this.teams),this.phase="countdown",this.phaseT=3*yo)),n}case"matchEnd":return sl(this.world,t)}}}function mf(){return new URLSearchParams(location.search).has("touch")||window.matchMedia("(pointer: coarse)").matches}function hm(i){const t=mf(),e={active:t,sx:0,sy:0,show:()=>{},update:()=>{}};if(!t)return e;document.body.classList.add("touch");const n=document.createElement("div");n.id="tc",n.className="hidden",n.innerHTML=`
    <div id="tcZone"><div id="tcBase"><div id="tcKnob"></div></div></div>
    <button id="tcSuper" class="tcb"><i></i><span></span></button>
    <button id="tcAbility" class="tcb"><i></i><span></span></button>
    <button id="tcBoost" class="tcb"><i></i><span>BOOST</span></button>
    <button id="tcMain" class="tcb"><i></i><span>STRIKE</span></button>`,document.body.appendChild(n);const s=()=>n.style.setProperty("--tcs",String(Fe.touchScale));s(),Oo(s);const a=w=>n.querySelector("#"+w),r=a("tcZone"),o=a("tcBase"),l=a("tcKnob"),c=56;let h=-1,u=0,f=0;const d=(w,T)=>{let M=w-u,v=T-f;const b=Math.hypot(M,v),R=c*Fe.touchScale;b>R&&(M*=R/b,v*=R/b),e.sx=M/R,e.sy=v/R,l.style.transform=`translate(${M}px, ${v}px)`},m=()=>{h=-1,e.sx=e.sy=0,o.classList.remove("on"),l.style.transform=""};r.addEventListener("pointerdown",w=>{h===-1&&(h=w.pointerId,r.setPointerCapture(w.pointerId),u=w.clientX,f=w.clientY,o.style.left=`${u}px`,o.style.top=`${f}px`,o.classList.add("on"),d(u,f),w.preventDefault())}),r.addEventListener("pointermove",w=>{w.pointerId===h&&d(w.clientX,w.clientY)});for(const w of["pointerup","pointercancel"])r.addEventListener(w,T=>{T.pointerId===h&&m()});const x=(w,T,M)=>{const v=a(w);v.addEventListener("pointerdown",b=>{v.setPointerCapture(b.pointerId),v.classList.add("down"),T(),b.preventDefault()});for(const b of["pointerup","pointercancel"])v.addEventListener(b,()=>{v.classList.remove("down"),M?.()});return v},p=x("tcMain",i.mainDown,i.mainUp),g=x("tcBoost",i.boost),S=x("tcAbility",i.ability),y=x("tcSuper",i.super),_=(w,T)=>w.firstElementChild.style.height=`${Math.max(0,Math.min(1,T))*100}%`,C=(w,T)=>{const M=w.lastElementChild;M.textContent!==T&&(M.textContent=T)};return e.show=w=>{n.classList.toggle("hidden",!w),w||m()},e.update=w=>{C(p,w.launching?"LAUNCH":"STRIKE"),C(S,w.ability),_(p,w.launching?0:w.strike),_(g,w.boost),_(S,w.abilityCd),g.classList.toggle("dim",w.launching),S.classList.toggle("dim",w.launching),C(y,w.superMeter>=1?w.superName:"OVERDRIVE"),_(y,1-w.superMeter),y.style.setProperty("--sc",w.superColor),y.classList.toggle("ready",w.superMeter>=1),y.classList.toggle("dim",w.launching)},e}const gf={low:{shadow:512,bloom:!1,sparks:300,pixelCap:1},medium:{shadow:1024,bloom:!0,sparks:600,pixelCap:1.5},high:{shadow:2048,bloom:!0,sparks:900,pixelCap:2}},um=[["SMALL",.85],["NORMAL",1],["LARGE",1.2]],tc="sf.settings",dm={volume:1,mute:!1,quality:"medium",measured:!1,qualityAuto:!1,touchScale:1};function fm(){const i={...dm};try{const t=JSON.parse(localStorage.getItem(tc)??"null");t&&typeof t=="object"&&Object.assign(i,t),localStorage.getItem("sf.mute")&&(i.mute=!0,localStorage.removeItem("sf.mute"),localStorage.setItem(tc,JSON.stringify(i)))}catch{}return xf(i)}function xf(i){const t=Number(i.volume);i.volume=Number.isFinite(t)?Math.max(0,Math.min(1,t)):1,i.mute=!!i.mute,i.quality in gf||(i.quality="medium"),i.measured=!!i.measured,i.qualityAuto=!!i.qualityAuto;const e=Number(i.touchScale);return i.touchScale=Number.isFinite(e)?Math.max(.7,Math.min(1.4,e)):1,i}const Fe=fm(),Mf=[],Oo=i=>Mf.push(i);function Ba(i){Object.assign(Fe,i),xf(Fe);try{localStorage.setItem(tc,JSON.stringify(Fe))}catch{}for(const t of Mf)t()}const pm=i=>i>26?"low":i>19?"medium":"high",mm=`<svg viewBox="-12 -12 24 24" width="24" height="24" aria-hidden="true"><g fill="currentColor">${Array.from({length:8},(t,e)=>`<rect x="-2.2" y="-11.5" width="4.4" height="5" rx="0.8" transform="rotate(${e*45})"/>`).join("")}</g><circle r="6.4" fill="none" stroke="currentColor" stroke-width="3.2"/></svg>`,gm=()=>mm;function xm(i){const t=document.createElement("div");t.id="st",t.className="hidden";const e=mf();t.innerHTML=`
    <div class="st-card" role="dialog" aria-label="Settings">
      <header><h2>SETTINGS</h2><button id="stDone" class="st-btn go">DONE</button></header>
      <div class="st-row"><label>SOUND</label>
        <div class="st-ctl"><input id="stVol" type="range" min="0" max="100" step="5" aria-label="Volume" /><output id="stVolN"></output><button id="stMute" class="st-btn"></button></div></div>
      <div class="st-row"><label>GRAPHICS</label>
        <div class="st-ctl"><div class="st-seg" id="stQ">${["low","medium","high"].map(o=>`<button data-q="${o}">${o.toUpperCase()}</button>`).join("")}</div></div>
        <small id="stAuto"></small></div>
      ${e?`<div class="st-row"><label>CONTROL SIZE</label><div class="st-ctl"><div class="st-seg" id="stS">${um.map(([o,l])=>`<button data-s="${l}">${o}</button>`).join("")}</div></div></div>`:""}
    </div>`,document.body.appendChild(t);const n=o=>t.querySelector(o),s=n("#stVol"),a=()=>{s.value=String(Math.round(Fe.volume*100)),n("#stVolN").textContent=Fe.mute?"OFF":`${Math.round(Fe.volume*100)}%`,n("#stMute").textContent=Fe.mute?"UNMUTE":"MUTE",n("#stMute").classList.toggle("on",Fe.mute),t.querySelectorAll("[data-q]").forEach(o=>o.classList.toggle("on",o.dataset.q===Fe.quality)),n("#stAuto").textContent=Fe.qualityAuto?"PICKED FOR THIS DEVICE":"",t.querySelectorAll("[data-s]").forEach(o=>o.classList.toggle("on",Math.abs(Number(o.dataset.s)-Fe.touchScale)<.01))};Oo(a),a(),s.addEventListener("input",()=>Ba({volume:Number(s.value)/100,mute:!1})),s.addEventListener("change",i),n("#stMute").addEventListener("click",()=>Ba({mute:!Fe.mute})),t.querySelectorAll("[data-q]").forEach(o=>o.addEventListener("click",()=>Ba({quality:o.dataset.q,measured:!0,qualityAuto:!1}))),t.querySelectorAll("[data-s]").forEach(o=>o.addEventListener("click",()=>Ba({touchScale:Number(o.dataset.s)})));const r=()=>t.classList.add("hidden");return n("#stDone").addEventListener("click",r),t.addEventListener("pointerdown",o=>{o.target===t&&r()}),window.addEventListener("keydown",o=>{o.code==="Escape"&&!t.classList.contains("hidden")&&r()}),()=>{a(),t.classList.remove("hidden")}}class Mm{ctx=null;master;noise;hums=[];start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createDynamicsCompressor();this.master=t.createGain(),this.applyVolume(),Oo(()=>this.applyVolume()),this.master.connect(e).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;for(let s=0;s<2;s++){const a=t.createOscillator();a.type="sawtooth";const r=t.createOscillator();r.type="triangle";const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=3;const l=t.createGain();l.gain.value=0,a.connect(o),r.connect(o),o.connect(l).connect(this.master),a.start(),r.start(),this.hums.push({osc:a,sub:r,filter:o,gain:l})}}setHum(t,e,n){if(!this.ctx)return;const s=this.hums[t],a=this.ctx.currentTime,r=55+210*e+t*9;s.osc.frequency.setTargetAtTime(r,a,.05),s.sub.frequency.setTargetAtTime(r/2,a,.05),s.filter.frequency.setTargetAtTime(200+1400*e,a,.05),s.gain.gain.setTargetAtTime(n?.035+.05*e:0,a,.08)}burstNoise(t,e,n,s,a="bandpass",r=0,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loopStart=Math.random()*.5;const h=l.createBiquadFilter();h.type=a,h.frequency.value=t,h.Q.value=e;const u=l.createGain(),f=l.currentTime+r;o&&h.frequency.exponentialRampToValueAtTime(o,f+s),u.gain.setValueAtTime(n,f),u.gain.exponentialRampToValueAtTime(1e-4,f+s),c.connect(h).connect(u).connect(this.master),c.start(f,Math.random()*.5,s+.05)}tone(t,e,n,s="sine",a,r=0){const o=this.ctx,l=o.createOscillator();l.type=s;const c=o.createGain(),h=o.currentTime+r;l.frequency.setValueAtTime(t,h),a&&l.frequency.exponentialRampToValueAtTime(a,h+n),c.gain.setValueAtTime(e,h),c.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(this.master),l.start(h),l.stop(h+n+.02)}clash(t){if(!this.ctx)return;const e=620+Math.random()*520,n=.15+t*.85;for(const[s,a]of[[1,.2],[2.76,.14],[5.4,.09],[8.93,.05]])this.tone(e*s,a*n,.12+.45*t*(1/Math.sqrt(s)));this.burstNoise(3500+Math.random()*2500,1.2,.5*n,.07+.08*t),t>.5&&this.tone(140,.5*t,.18,"sine",50)}rim(t){this.ctx&&(this.tone(260+Math.random()*60,.25*t+.05,.2,"triangle",150),this.burstNoise(1800,2,.25*t+.05,.08))}burst(){if(this.ctx){this.burstNoise(900,.6,1,.5,"lowpass"),this.burstNoise(5200,.8,.7,.18),this.tone(110,.9,.45,"sine",35);for(let t=0;t<4;t++)this.tone(900+Math.random()*2600,.12,.5+Math.random()*.5)}}ringOut(){this.ctx&&(this.tone(700,.3,.6,"sawtooth",90),this.burstNoise(1200,.7,.5,.5))}spinOut(){this.ctx&&(this.tone(180,.35,.7,"triangle",40),this.burstNoise(600,1,.3,.4))}applyVolume(){this.ctx&&(this.master.gain.value=Fe.mute?0:.7*Fe.volume*Fe.volume)}launch(t){this.ctx&&(this.tone(180,.3,.3,"sawtooth",t?1500:900),this.burstNoise(2600,.8,.35,.22),t&&this.tone(1760,.15,.35))}ability(t){this.ctx&&(t==="brake"?(this.burstNoise(900,1.2,.5,.28,"lowpass"),this.tone(160,.3,.3,"sawtooth",50)):t==="spring"?(this.tone(220,.3,.3,"triangle",720),this.tone(330,.2,.2,"sine",980)):t==="dash"?(this.burstNoise(1500,.9,.5,.25),this.tone(300,.25,.22,"sawtooth",1100)):(this.tone(220,.35,.3,"square",180),this.tone(1320,.1,.25)))}land(){this.ctx&&(this.tone(110,.55,.45,"sine",40),this.burstNoise(500,.8,.8,.25,"lowpass"),this.tone(1500,.12,.3,"triangle",500))}release(){this.ctx&&(this.burstNoise(3e3,1,.45,.22),this.tone(200,.3,.3,"sawtooth",1500),this.tone(1800,.15,.25))}boost(){this.ctx&&(this.burstNoise(2200,.7,.4,.2),this.tone(220,.18,.18,"sawtooth",900))}strike(){this.ctx&&(this.burstNoise(5200,1.5,.3,.09),this.tone(1400,.1,.1,"triangle",2400))}power(){this.ctx&&(this.tone(95,.9,.35,"sine",38),this.burstNoise(700,.6,.7,.22,"lowpass"),this.tone(2100,.16,.5))}wallBreak(){if(this.ctx){this.burstNoise(500,.5,1,.6,"lowpass"),this.burstNoise(3800,.9,.5,.25),this.tone(70,.8,.5,"sine",30);for(let t=0;t<5;t++)this.tone(500+Math.random()*1800,.1,.3+Math.random()*.5)}}superFx(){if(this.ctx){this.tone(120,.4,.45,"sawtooth",1800),this.tone(60,1,.7,"sine",28),this.burstNoise(400,.5,1,.7,"lowpass"),this.burstNoise(6e3,.7,.4,.35);for(let t=0;t<3;t++)this.tone(700+t*520,.14,.7)}}superEl(t){if(this.ctx)switch(t){case"thermal":this.burstNoise(180,.7,1,1.6,"lowpass",0,900),this.tone(70,.5,1.4,"sawtooth",240);for(let e=0;e<6;e++)this.burstNoise(2500+Math.random()*3e3,3,.25,.05,"bandpass",.2+e*.2);break;case"cryo":[3900,3100,2350,1750].forEach((e,n)=>this.tone(e,.16,.7,"sine",e*.985,n*.06)),this.burstNoise(7e3,.8,.5,.6,"highpass"),this.burstNoise(1800,4,.8,.07,"bandpass",.22),this.tone(85,.7,.4,"sine",40,.22);break;case"volt":this.tone(100,.3,1.2,"square"),this.tone(151,.2,1.2,"sawtooth");for(let e=0;e<9;e++)this.burstNoise(3500+Math.random()*4e3,2.5,.45,.05,"bandpass",e*.11+Math.random()*.05);break;case"gale":this.burstNoise(300,2.2,1,2,"bandpass",0,2600),this.burstNoise(700,1.2,.5,2,"bandpass",0,4200),this.burstNoise(3e3,.7,.9,.25,"bandpass",2.1);break;case"quake":this.tone(58,1,1.3,"sine",22),this.burstNoise(120,.6,1,1.4,"lowpass");for(let e=0;e<6;e++)this.tone(90+Math.random()*90,.45,.16,"triangle",45,.1+e*.13);break;case"plasma":this.tone(300,.3,.35,"sawtooth",3200),this.burstNoise(5e3,1.2,1,.5,"bandpass",.3,900),this.tone(2400,.4,.5,"square",200,.3);break;case"gravity":this.tone(160,.7,2.4,"sine",30),this.tone(164,.5,2.4,"triangle",31),this.burstNoise(900,1.5,.5,2.4,"bandpass",0,90),this.tone(40,1,.5,"sine",160,2.5);break;case"resonance":for(let e=0;e<4;e++)for(const[n,s]of[[1,.3],[2.76,.16],[5.4,.08]])this.tone(330*n,s,.55,"sine",void 0,e*.6);break;case"mag":this.tone(520,.35,.7,"sine",80),this.tone(529,.35,.7,"sine",84),this.tone(80,.5,.5,"sawtooth",900,.7),this.burstNoise(1500,.8,.7,.3,"bandpass",.7);break}}zap(){this.ctx&&(this.burstNoise(4200+Math.random()*2e3,2,.35,.09),this.tone(1800,.08,.08,"square",500))}bossWind(t){if(this.ctx){this.tone(70,.5,t,"sawtooth",240),this.burstNoise(300,.8,.4,t,"lowpass",0,900);for(let e=0;e<4;e++)this.tone(520,.12,.06,"square",void 0,t*(.4+.15*e))}}bossSlam(){this.ctx&&(this.tone(60,1,.7,"sine",24),this.burstNoise(300,.5,1,.7,"lowpass"),this.burstNoise(2500,.8,.45,.3))}bossPhase(){this.ctx&&(this.tone(50,1,1,"sawtooth",160),this.burstNoise(500,.5,1,.8,"lowpass"),this.tone(1200,.14,.7,"triangle",300))}beep(t){this.ctx&&this.tone(t?990:495,.2,t?.4:.14,"square")}}const di=[{id:"steer",title:"STEER",touch:"Drag the left stick. Before launch it picks where your top lands; afterwards it steers.",keys:"Move the mouse (or press WASD). Before launch it picks where your top lands; afterwards it steers.",hlTouch:["#tcZone"],hlKeys:[],done:"Good. Steering is how you aim every hit."},{id:"launch",title:"LAUNCH",touch:"Hold the big button, then let go while the meter is inside the bright band.",keys:"Hold the mouse button, then let go while the meter is inside the bright band.",hlTouch:["#tcMain"],hlKeys:["#launch"],done:"A release inside the band is a perfect launch with full spin."},{id:"strike",title:"STRIKE",touch:"Steer into the dummy and tap the big button just as you hit it. A Strike hits much harder.",keys:"Steer into the dummy and click just as you hit it. A Strike hits much harder.",hlTouch:["#tcMain"],hlKeys:["#cds .cd:first-child"],done:"That was a power hit."},{id:"boost",title:"BOOST",touch:"Tap BOOST to lunge in the direction you steer. Use it to close a gap or escape.",keys:"Press Shift (or right click) to lunge in the direction you steer. Use it to close a gap or escape.",hlTouch:["#tcBoost"],hlKeys:["#cds .cd:nth-child(2)"],done:"Boost costs a little spin, so spend it with a purpose."},{id:"ability",title:"CORE ABILITY",touch:"Tap the ability button. Your core decides what it does (a dash, a brace, a brake or a jump).",keys:"Press Space. Your core decides what it does (a dash, a brace, a brake or a jump).",hlTouch:["#tcAbility"],hlKeys:["#ability"],done:"It then needs time to recharge."},{id:"overdrive",title:"OVERDRIVE",touch:"Hits fill the OVERDRIVE bar. Keep hitting the dummy, then tap the glowing button when it is READY.",keys:"Hits fill the OVERDRIVE bar. Keep hitting the dummy, then press F when it says READY.",hlTouch:["#tcSuper"],hlKeys:["#od"],done:"Your reactor's element decides what the super does."},{id:"finisher",title:"FINISHER",touch:"Land three Strikes in a row (the pips under the timer fill), then the fourth Strike is a FINISHER.",keys:"Land three Strikes in a row (the pips fill), then the fourth Strike is a FINISHER.",hlTouch:["#tcMain","#combo"],hlKeys:["#cds .cd:first-child","#combo"],done:"That is the whole fight."}],vm=`
#tut{position:fixed;left:50%;bottom:10px;transform:translateX(-50%);width:min(43vw,420px);z-index:8;display:none;padding:10px 14px 12px;color:var(--ink,#eef2fa);font:600 13px/1.35 system-ui,sans-serif;background:var(--glass-strong,rgba(10,13,21,.82));border:1px solid var(--hair-strong,rgba(255,255,255,.18));border-top:3px solid #ffd36a;border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.4);backdrop-filter:blur(14px)}
#tut .tp{display:flex;gap:5px;margin-bottom:6px}
#tut .tp i{flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,.14)}
#tut .tp i.on{background:#ffd36a}
#tut .tp i.now{background:#ffd36a;opacity:.55;animation:tutb .7s infinite alternate}
#tut b{display:block;font-size:11px;letter-spacing:.16em;color:#ffd36a;margin-bottom:3px}
#tut p{margin:0;min-height:2.7em}
#tut p.ok{color:#8dffb0}
#tut .row{display:flex;justify-content:flex-end;gap:8px;margin-top:6px}
#tut button{font:700 11px system-ui,sans-serif;letter-spacing:.1em;padding:6px 12px;border-radius:9px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.07);color:#eef2fa;cursor:pointer}
#tut button.go{background:#ffd36a;color:#1a1306;border-color:#ffd36a}
.tut-hl{outline:3px solid #ffd36a !important;outline-offset:2px;box-shadow:0 0 22px #ffd36a !important;animation:tutp .7s infinite alternate}
@keyframes tutp{from{outline-color:#ffd36a}to{outline-color:#fff}}
@keyframes tutb{to{opacity:1}}
@media (max-height:520px){#tut{font-size:11px;padding:7px 10px 8px;bottom:6px}#tut p{min-height:2.4em}}
`;class _m{constructor(t){this.api=t;const e=document.createElement("style");e.textContent=vm,document.head.append(e),this.el=document.createElement("div"),this.el.id="tut",this.el.innerHTML='<div class="tp"></div><b></b><p></p><div class="row"><button class="skip">SKIP TUTORIAL</button><button class="go">TO THE FORGE</button></div>',document.body.append(this.el);for(const n of["pointerdown","mousedown","touchstart"])this.el.addEventListener(n,s=>s.stopPropagation());this.el.querySelector(".skip").addEventListener("click",()=>this.end()),this.el.querySelector(".go").addEventListener("click",()=>this.end())}active=!1;step=0;el;doneT=0;finished=!1;aim0=null;last=null;travelled=0;note="";shown="";start(){this.active=!0,this.finished=!1,this.step=0,this.doneT=0,this.aim0=null,this.travelled=0,this.last=null,this.note="",this.el.style.display="block",this.render()}end(){this.hide(),this.active=!1,this.api.end()}hide(){this.el.style.display="none",this.clearHl()}advance(){this.finished||this.doneT>0||(this.doneT=1.1,this.note=di[this.step].done,this.render())}event(t){if(!this.active||this.finished||this.doneT>0)return;const e=this.api.me;switch(di[this.step].id){case"launch":t.type==="launch"&&t.i===e&&(this.advance(),this.note=(t.perfect?"A perfect launch! ":"Launched. Aim for the bright band next time. ")+di[this.step].done,this.render());break;case"strike":t.type==="hit"&&t.power===e&&this.advance();break;case"boost":t.type==="boost"&&t.i===e&&this.advance();break;case"ability":t.type==="ability"&&t.i===e&&this.advance();break;case"overdrive":t.type==="super"&&t.i===e&&this.advance();break;case"finisher":t.type==="finisher"&&t.i===e&&this.advance();break}}frame(t){if(!this.active)return;const e=di[this.step];if(this.doneT>0)this.doneT-=t,this.doneT<=0&&(this.note="",this.step+1>=di.length?(this.finished=!0,this.render()):(this.step++,this.render()));else if(!this.finished&&e.id==="steer"){const n=this.api.top();if(n.inPlay)this.last&&(this.travelled+=Math.hypot(n.x-this.last.x,n.y-this.last.y)),this.last={x:n.x,y:n.y};else{const s=this.api.aim();this.aim0??={x:s.x,y:s.y},this.travelled=Math.max(this.travelled,Math.hypot(s.x-this.aim0.x,s.y-this.aim0.y))}this.travelled>2.2&&this.advance()}this.render()}clearHl(){document.querySelectorAll(".tut-hl").forEach(t=>t.classList.remove("tut-hl"))}render(){const t=this.api.isTouch(),e=di[Math.min(this.step,di.length-1)],n=`${this.step}|${this.finished}|${t}|${this.note}|${this.doneT>0}`;if(n===this.shown)return;this.shown=n,this.el.querySelector(".tp").innerHTML=di.map((l,c)=>`<i class="${c<this.step||this.finished?"on":c===this.step?"now":""}"></i>`).join("");const s=this.el.querySelector("b"),a=this.el.querySelector("p"),r=this.el.querySelector(".go"),o=this.el.querySelector(".skip");if(this.clearHl(),this.finished){s.textContent="TRAINING COMPLETE",a.className="ok",a.textContent="You know the whole kit. Go to the forge, build your top and start the ladder.",r.style.display="",o.style.display="none";return}if(r.style.display="none",o.style.display="",s.textContent=`${this.step+1} OF ${di.length}  ·  ${e.title}`,this.doneT>0)a.className="ok",a.textContent=this.note;else{a.className="",a.textContent=t?e.touch:e.keys;for(const l of t?e.hlTouch:e.hlKeys)document.querySelectorAll(l).forEach(c=>c.classList.add("tut-hl"))}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="170",ym=0,su=1,bm=2,vf=1,_f=2,Mi=3,Ji=0,mn=1,je=2,wi=0,aa=1,qe=2,au=3,ru=4,Sm=5,ms=100,wm=101,Em=102,Tm=103,Am=104,Rm=200,Cm=201,Pm=202,Lm=203,ec=204,nc=205,Im=206,Dm=207,Nm=208,Um=209,km=210,Om=211,Fm=212,Bm=213,zm=214,ic=0,sc=1,ac=2,ca=3,rc=4,oc=5,lc=6,cc=7,yf=0,Hm=1,Gm=2,Zi=0,bf=1,Sf=2,wf=3,ch=4,Vm=5,Ef=6,Tf=7,Af=300,ha=301,ua=302,hc=303,uc=304,Fo=306,dc=1e3,vs=1001,fc=1002,Rn=1003,Wm=1004,br=1005,oi=1006,rl=1007,_s=1008,Pi=1009,Rf=1010,Cf=1011,ir=1012,hh=1013,ws=1014,li=1015,Ei=1016,uh=1017,dh=1018,da=1020,Pf=35902,Lf=1021,If=1022,Yn=1023,Df=1024,Nf=1025,ra=1026,fa=1027,fh=1028,ph=1029,Uf=1030,mh=1031,gh=1033,ho=33776,uo=33777,fo=33778,po=33779,pc=35840,mc=35841,gc=35842,xc=35843,Mc=36196,vc=37492,_c=37496,yc=37808,bc=37809,Sc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Lc=37818,Ic=37819,Dc=37820,Nc=37821,mo=36492,Uc=36494,kc=36495,kf=36283,Oc=36284,Fc=36285,Bc=36286,Xm=3200,qm=3201,Of=0,$m=1,Ki="",Dn="srgb",_a="srgb-linear",Bo="linear",me="srgb",Is=7680,ou=519,Ym=512,Km=513,jm=514,Ff=515,Zm=516,Jm=517,Qm=518,tg=519,zc=35044,lu="300 es",_i=2e3,bo=2001;class ya{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Hc=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function eg(i,t){return(i%t+t)%t}function ll(i,t,e){return(1-e)*i+e*t}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,a,r,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],S=s[1],y=s[4],_=s[7],C=s[2],w=s[5],T=s[8];return a[0]=r*x+o*S+l*C,a[3]=r*p+o*y+l*w,a[6]=r*g+o*_+l*T,a[1]=c*x+h*S+u*C,a[4]=c*p+h*y+u*w,a[7]=c*g+h*_+u*T,a[2]=f*x+d*S+m*C,a[5]=f*p+d*y+m*w,a[8]=f*g+d*_+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,f=o*l-h*a,d=c*a-r*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*r)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*a-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new ee;function Bf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ng(){const i=So("canvas");return i.style.display="block",i}const cu={};function za(i){i in cu||(cu[i]=!0,console.warn(i))}function ig(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function sg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ag(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=oa(i.r),i.g=oa(i.g),i.b=oa(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?Bo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hu=[.64,.33,.3,.6,.15,.06],uu=[.2126,.7152,.0722],du=[.3127,.329],fu=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[_a]:{primaries:hu,whitePoint:du,transfer:Bo,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:uu,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:hu,whitePoint:du,transfer:me,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:uu,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}});let Ds;class rg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=So("canvas")),Ds.width=t.width,Ds.height=t.height;const n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=So("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ai(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let og=0;class zf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(hl(s[r].image)):a.push(hl(s[r]))}else a=hl(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lg=0;class ln extends ya{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=vs,s=vs,a=oi,r=_s,o=Yn,l=Pi,c=ln.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Ti(),this.name="",this.source=new zf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Af;ln.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,C=(g+1)/2,w=(h+f)/4,T=(u+x)/4,M=(m+p)/4;return y>_&&y>C?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=w/n,a=T/n):_>C?_<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),n=w/s,a=M/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=T/a,s=M/a),this.set(n,s,a,e),this}let S=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cg extends ya{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends cg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hf extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hg extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=a[r+0],d=a[r+1],m=a[r+2],x=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let p=1-o;const g=l*f+c*d+h*m+u*x,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,g*S);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const _=o*S;if(l=l*p+f*_,c=c*p+d*_,h=h*p+m*_,u=u*p+x*_,p===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],f=a[r+1],d=a[r+2],m=a[r+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),f=l(n/2),d=l(s/2),m=l(a/2);switch(r){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new L,mu=new Cs;class Li{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Wn):Wn.fromBufferAttribute(a,r),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),wr.subVectors(this.max,Ra),Ns.subVectors(t.a,Ra),Us.subVectors(t.b,Ra),ks.subVectors(t.c,Ra),ki.subVectors(Us,Ns),Oi.subVectors(ks,Us),as.subVectors(Ns,ks);let e=[0,-ki.z,ki.y,0,-Oi.z,Oi.y,0,-as.z,as.y,ki.z,0,-ki.x,Oi.z,0,-Oi.x,as.z,0,-as.x,-ki.y,ki.x,0,-Oi.y,Oi.x,0,-as.y,as.x,0];return!dl(e,Ns,Us,ks,wr)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,Ns,Us,ks,wr))?!1:(Er.crossVectors(ki,Oi),e=[Er.x,Er.y,Er.z],dl(e,Ns,Us,ks,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,Sr=new Li,Ns=new L,Us=new L,ks=new L,ki=new L,Oi=new L,as=new L,Ra=new L,wr=new L,Er=new L,rs=new L;function dl(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){rs.fromArray(i,a);const o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ug=new Li,Ca=new L,fl=new L;class Ii{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ug.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);const e=Ca.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ca,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(fl)),this.expandByPoint(Ca.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new L,pl=new L,Tr=new L,Fi=new L,ml=new L,Ar=new L,gl=new L;class zo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(pl);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Tr),o=Fi.dot(this.direction),l=-Fi.dot(Tr),c=Fi.lengthSq(),h=Math.abs(1-r*r);let u,f,d,m;if(h>0)if(u=r*l-o,f=r*o-l,m=a*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),d=-u*u+f*(f+2*l)+c);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pl).addScaledVector(Tr,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,a){ml.subVectors(e,t),Ar.subVectors(n,t),gl.crossVectors(ml,Ar);let r=this.direction.dot(gl),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(Ar.crossVectors(Fi,Ar));if(l<0)return null;const c=o*this.direction.dot(ml.cross(Fi));if(c<0||l+c>r)return null;const h=-o*Fi.dot(gl);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,a,r,o,l,c,h,u,f,d,m,x,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,u,f,d,m,x,p)}set(t,e,n,s,a,r,o,l,c,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=a,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),a=1/Os.setFromMatrixColumn(t,1).length(),r=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const f=r*h,d=r*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-r*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=r*h,e[9]=x-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*l,d=r*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dg,t,fg)}lookAt(t,e,n){const s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(n,wn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(n,wn)),Bi.normalize(),Rr.crossVectors(wn,Bi),s[0]=Bi.x,s[4]=Rr.x,s[8]=wn.x,s[1]=Bi.y,s[5]=Rr.y,s[9]=wn.y,s[2]=Bi.z,s[6]=Rr.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],S=n[3],y=n[7],_=n[11],C=n[15],w=s[0],T=s[4],M=s[8],v=s[12],b=s[1],R=s[5],I=s[9],O=s[13],F=s[2],X=s[6],D=s[10],B=s[14],N=s[3],H=s[7],K=s[11],j=s[15];return a[0]=r*w+o*b+l*F+c*N,a[4]=r*T+o*R+l*X+c*H,a[8]=r*M+o*I+l*D+c*K,a[12]=r*v+o*O+l*B+c*j,a[1]=h*w+u*b+f*F+d*N,a[5]=h*T+u*R+f*X+d*H,a[9]=h*M+u*I+f*D+d*K,a[13]=h*v+u*O+f*B+d*j,a[2]=m*w+x*b+p*F+g*N,a[6]=m*T+x*R+p*X+g*H,a[10]=m*M+x*I+p*D+g*K,a[14]=m*v+x*O+p*B+g*j,a[3]=S*w+y*b+_*F+C*N,a[7]=S*T+y*R+_*X+C*H,a[11]=S*M+y*I+_*D+C*K,a[15]=S*v+y*O+_*B+C*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+a*l*u-s*c*u-a*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+a*r*f-s*r*d+s*c*h-a*l*h)+p*(+e*c*u-e*o*d-a*r*u+n*r*d+a*o*h-n*c*h)+g*(-s*o*h-e*l*u+e*o*f+s*r*u-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],S=u*p*c-x*f*c+x*l*d-o*p*d-u*l*g+o*f*g,y=m*f*c-h*p*c-m*l*d+r*p*d+h*l*g-r*f*g,_=h*x*c-m*u*c+m*o*d-r*x*d-h*o*g+r*u*g,C=m*u*l-h*x*l-m*o*f+r*x*f+h*o*p-r*u*p,w=e*S+n*y+s*_+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=S*T,t[1]=(x*f*a-u*p*a-x*s*d+n*p*d+u*s*g-n*f*g)*T,t[2]=(o*p*a-x*l*a+x*s*c-n*p*c-o*s*g+n*l*g)*T,t[3]=(u*l*a-o*f*a-u*s*c+n*f*c+o*s*d-n*l*d)*T,t[4]=y*T,t[5]=(h*p*a-m*f*a+m*s*d-e*p*d-h*s*g+e*f*g)*T,t[6]=(m*l*a-r*p*a-m*s*c+e*p*c+r*s*g-e*l*g)*T,t[7]=(r*f*a-h*l*a+h*s*c-e*f*c-r*s*d+e*l*d)*T,t[8]=_*T,t[9]=(m*u*a-h*x*a-m*n*d+e*x*d+h*n*g-e*u*g)*T,t[10]=(r*x*a-m*o*a+m*n*c-e*x*c-r*n*g+e*o*g)*T,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*d-e*o*d)*T,t[12]=C*T,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*p+e*u*p)*T,t[14]=(m*o*s-r*x*s-m*n*l+e*x*l+r*n*p-e*o*p)*T,t[15]=(r*u*s-h*o*s+h*n*l-e*u*l-r*n*f+e*o*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,f=a*c,d=a*h,m=a*u,x=r*h,p=r*u,g=o*u,S=l*c,y=l*h,_=l*u,C=n.x,w=n.y,T=n.z;return s[0]=(1-(x+g))*C,s[1]=(d+_)*C,s[2]=(m-y)*C,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+g))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(m+y)*T,s[9]=(p-S)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Os.set(s[0],s[1],s[2]).length();const r=Os.set(s[4],s[5],s[6]).length(),o=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);const c=1/a,h=1/r,u=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=_i){const l=this.elements,c=2*a/(e-t),h=2*a/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,m;if(o===_i)d=-(r+a)/(r-a),m=-2*r*a/(r-a);else if(o===bo)d=-r/(r-a),m=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=_i){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-a),f=(e+t)*c,d=(n+s)*h;let m,x;if(o===_i)m=(r+a)*u,x=-2*u;else if(o===bo)m=a*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Os=new L,Xn=new ce,dg=new L(0,0,0),fg=new L(1,1,1),Bi=new L,Rr=new L,wn=new L,gu=new ce,xu=new Cs;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pg=0;const Mu=new L,Fs=new Cs,mi=new ce,Cr=new L,Pa=new L,mg=new L,gg=new Cs,vu=new L(1,0,0),_u=new L(0,1,0),yu=new L(0,0,1),bu={type:"added"},xg={type:"removed"},Bs={type:"childadded",child:null},xl={type:"childremoved",child:null};class De extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new L,e=new Zn,n=new Cs,s=new L(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Pa,Cr,this.up):mi.lookAt(Cr,Pa,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(mi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xg),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,t,mg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),m=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new L,gi=new L,Ml=new L,xi=new L,zs=new L,Hs=new L,Su=new L,vl=new L,_l=new L,yl=new L,bl=new ve,Sl=new ve,wl=new ve;class Un{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){qn.subVectors(s,e),gi.subVectors(n,e),Ml.subVectors(t,e);const r=qn.dot(qn),o=qn.dot(gi),l=qn.dot(Ml),c=gi.dot(gi),h=gi.dot(Ml),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(r*h-o*l)*f;return a.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,xi.x),l.addScaledVector(r,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return bl.setScalar(0),Sl.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bl,a.x),r.addScaledVector(Sl,a.y),r.addScaledVector(wl,a.z),r}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),gi.subVectors(t,e),qn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;zs.subVectors(s,n),Hs.subVectors(a,n),vl.subVectors(t,n);const l=zs.dot(vl),c=Hs.dot(vl);if(l<=0&&c<=0)return e.copy(n);_l.subVectors(t,s);const h=zs.dot(_l),u=Hs.dot(_l);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(zs,r);yl.subVectors(t,a);const d=zs.dot(yl),m=Hs.dot(yl);if(m>=0&&d<=m)return e.copy(a);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Hs,o);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Su.subVectors(a,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Su,o);const g=1/(p+x+f);return r=x*g,o=f*g,e.copy(n).addScaledVector(zs,r).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function El(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=eg(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=El(r,a,t+1/3),this.g=El(r,a,t),this.b=El(r,a,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Dn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return le.fromWorkingColorSpace(sn.copy(this),t),Math.round(Ye(sn.r*255,0,255))*65536+Math.round(Ye(sn.g*255,0,255))*256+Math.round(Ye(sn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,s=sn.g,a=sn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Dn){le.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,s=sn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Pr);const n=ll(zi.h,Pr.h,e),s=ll(zi.s,Pr.s,e),a=ll(zi.l,Pr.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new It;It.NAMES=Gf;let Mg=0;class ns extends ya{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Ti(),this.name="",this.blending=aa,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new L,Lr=new Q;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),a=Me(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}}class Vf extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wf extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vg=0;const Pn=new ce,Tl=new De,Gs=new L,En=new Li,La=new Li,We=new L;class _e extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bf(t)?Wf:Vf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ee().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];En.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];La.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(En.min,La.min),En.expandByPoint(We),We.addVectors(En.max,La.max),En.expandByPoint(We)):(En.expandByPoint(La.min),En.expandByPoint(La.max))}En.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)We.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(We));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(t,c),We.add(Gs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new L,l[M]=new L;const c=new L,h=new L,u=new L,f=new Q,d=new Q,m=new Q,x=new L,p=new L;function g(M,v,b){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(a,M),d.fromBufferAttribute(a,v),m.fromBufferAttribute(a,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(R),o[M].add(x),o[v].add(x),o[b].add(x),l[M].add(p),l[v].add(p),l[b].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let M=0,v=S.length;M<v;++M){const b=S[M],R=b.start,I=b.count;for(let O=R,F=R+I;O<F;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new L,_=new L,C=new L,w=new L;function T(M){C.fromBufferAttribute(s,M),w.copy(C);const v=o[M];y.copy(v),y.sub(C.multiplyScalar(C.dot(v))).normalize(),_.crossVectors(w,v);const R=_.dot(l[M])<0?-1:1;r.setXYZW(M,y.x,y.y,y.z,R)}for(let M=0,v=S.length;M<v;++M){const b=S[M],R=b.start,I=b.count;for(let O=R,F=R+I;O<F;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,a=new L,r=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new ce,os=new zo,Ir=new Ii,Eu=new L,Dr=new L,Nr=new L,Ur=new L,Al=new L,kr=new L,Tu=new L,Or=new L;class lt extends De{constructor(t=new _e,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){kr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Al.fromBufferAttribute(u,t),r?kr.addScaledVector(Al,h):kr.addScaledVector(Al.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(a),os.copy(t.ray).recast(t.near),!(Ir.containsPoint(os.origin)===!1&&(os.intersectSphere(Ir,Eu)===null||os.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(wu.copy(a).invert(),os.copy(t.ray).applyMatrix4(wu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,C=y;_<C;_+=3){const w=o.getX(_),T=o.getX(_+1),M=o.getX(_+2);s=Fr(this,g,t,n,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const S=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);s=Fr(this,r,t,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,C=y;_<C;_+=3){const w=_,T=_+1,M=_+2;s=Fr(this,g,t,n,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const S=p,y=p+1,_=p+2;s=Fr(this,r,t,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function _g(i,t,e,n,s,a,r,o){let l;if(t.side===mn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===Ji,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function Fr(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,Dr),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Ur);const h=_g(i,t,e,n,Dr,Nr,Ur,Tu);if(h){const u=new L;Un.getBarycoord(Tu,Dr,Nr,Ur,u),s&&(h.uv=Un.getInterpolatedAttribute(s,o,l,c,u,new Q)),a&&(h.uv1=Un.getInterpolatedAttribute(a,o,l,c,u,new Q)),r&&(h.normal=Un.getInterpolatedAttribute(r,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Un.getNormal(Dr,Nr,Ur,f.normal),h.face=f,h.barycoord=u}return h}class Ht extends _e{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,r,a,0),m("z","y","x",1,-1,n,e,-t,r,a,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,a,4),m("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(x,p,g,S,y,_,C,w,T,M,v){const b=_/T,R=C/M,I=_/2,O=C/2,F=w/2,X=T+1,D=M+1;let B=0,N=0;const H=new L;for(let K=0;K<D;K++){const j=K*R-O;for(let ot=0;ot<X;ot++){const ut=ot*b-I;H[x]=ut*S,H[p]=j*y,H[g]=F,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[g]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(ot/T),u.push(1-K/M),B+=1}}for(let K=0;K<M;K++)for(let j=0;j<T;j++){const ot=f+j+X*K,ut=f+j+X*(K+1),k=f+(j+1)+X*(K+1),q=f+(j+1)+X*K;l.push(ot,ut,q),l.push(ut,k,q),N+=6}o.addGroup(d,N,v),d+=N,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pa(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){const t={};for(let e=0;e<i.length;e++){const n=pa(i[e]);for(const s in n)t[s]=n[s]}return t}function yg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const sr={clone:pa,merge:un};var bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pa(t.uniforms),this.uniformsGroups=yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qf extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,Au=new Q,Ru=new Q;class dn extends qf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Au,Ru),e.subVectors(Ru,Au)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ol*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vs=-90,Ws=1;class wg extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Vs,Ws,t,e);s.layers=this.layers,this.add(s);const a=new dn(Vs,Ws,t,e);a.layers=this.layers,this.add(a);const r=new dn(Vs,Ws,t,e);r.layers=this.layers,this.add(r);const o=new dn(Vs,Ws,t,e);o.layers=this.layers,this.add(o);const l=new dn(Vs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new dn(Vs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class $f extends ln{constructor(t,e,n,s,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ha,super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eg extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $f(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ht(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:pa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:wi});a.uniforms.tEquirect.value=e;const r=new lt(s,a),o=e.minFilter;return e.minFilter===_s&&(e.minFilter=oi),new wg(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const Rl=new L,Tg=new L,Ag=new ee;class fs{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Rl.subVectors(n,e).cross(Tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ag.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Ii,Br=new L;class Mh{constructor(t=new fs,e=new fs,n=new fs,s=new fs,a=new fs,r=new fs){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],p=s[11],g=s[12],S=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-a,f-c,p-d,_-g).normalize(),n[1].setComponents(l+a,f+c,p+d,_+g).normalize(),n[2].setComponents(l+r,f+h,p+m,_+S).normalize(),n[3].setComponents(l-r,f-h,p-m,_-S).normalize(),n[4].setComponents(l-o,f-u,p-x,_-y).normalize(),e===_i)n[5].setComponents(l+o,f+u,p+x,_+y).normalize();else if(e===bo)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yf(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Rg(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Ho extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const S=g*f-r;for(let y=0;y<c;y++){const _=y*u-a;m.push(_,-S,0),x.push(0,0,1),p.push(y/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const y=S+c*g,_=S+c*(g+1),C=S+1+c*(g+1),w=S+1+c*g;d.push(y,_,w),d.push(_,C,w)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Lg,alphamap_pars_fragment:Ig,alphatest_fragment:Dg,alphatest_pars_fragment:Ng,aomap_fragment:Ug,aomap_pars_fragment:kg,batching_pars_vertex:Og,batching_vertex:Fg,begin_vertex:Bg,beginnormal_vertex:zg,bsdfs:Hg,iridescence_fragment:Gg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:$g,color_fragment:Yg,color_pars_fragment:Kg,color_pars_vertex:jg,color_vertex:Zg,common:Jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:t1,displacementmap_pars_vertex:e1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:s1,colorspace_fragment:a1,colorspace_pars_fragment:r1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:c1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:y1,envmap_vertex:u1,fog_vertex:d1,fog_pars_vertex:f1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_pars_fragment:x1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:v1,lights_pars_begin:_1,lights_toon_fragment:b1,lights_toon_pars_fragment:S1,lights_phong_fragment:w1,lights_phong_pars_fragment:E1,lights_physical_fragment:T1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:C1,lights_fragment_end:P1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:N1,map_fragment:U1,map_pars_fragment:k1,map_particle_fragment:O1,map_particle_pars_fragment:F1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:W1,morphtarget_vertex:X1,normal_fragment_begin:q1,normal_fragment_maps:$1,normal_pars_fragment:Y1,normal_pars_vertex:K1,normal_vertex:j1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:tx,iridescence_pars_fragment:ex,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:ax,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:lx,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:ux,shadowmap_vertex:dx,shadowmask_pars_fragment:fx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:xx,specularmap_fragment:Mx,specularmap_pars_fragment:vx,tonemapping_fragment:_x,tonemapping_pars_fragment:yx,transmission_fragment:bx,transmission_pars_fragment:Sx,uv_pars_fragment:wx,uv_pars_vertex:Ex,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Rx,background_frag:Cx,backgroundCube_vert:Px,backgroundCube_frag:Lx,cube_vert:Ix,cube_frag:Dx,depth_vert:Nx,depth_frag:Ux,distanceRGBA_vert:kx,distanceRGBA_frag:Ox,equirect_vert:Fx,equirect_frag:Bx,linedashed_vert:zx,linedashed_frag:Hx,meshbasic_vert:Gx,meshbasic_frag:Vx,meshlambert_vert:Wx,meshlambert_frag:Xx,meshmatcap_vert:qx,meshmatcap_frag:$x,meshnormal_vert:Yx,meshnormal_frag:Kx,meshphong_vert:jx,meshphong_frag:Zx,meshphysical_vert:Jx,meshphysical_frag:Qx,meshtoon_vert:tM,meshtoon_frag:eM,points_vert:nM,points_frag:iM,shadow_vert:sM,shadow_frag:aM,sprite_vert:rM,sprite_frag:oM},yt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},ai={basic:{uniforms:un([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:un([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:un([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:un([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:un([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:un([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:un([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:un([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:un([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:un([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:un([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:un([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:un([yt.lights,yt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ai.physical={uniforms:un([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const zr={r:0,b:0,g:0},cs=new Zn,lM=new ce;function cM(i,t,e,n,s,a,r){const o=new It(0);let l=a===!0?0:1,c,h,u=null,f=0,d=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1;const _=m(S);_===null?g(o,l):_&&_.isColor&&(g(_,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Fo)?(h===void 0&&(h=new lt(new Ht(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:pa(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler(cs)),h.material.toneMapped=le.getTransfer(_.colorSpace)!==me,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new Ho(2,2),new pn({name:"BackgroundMaterial",uniforms:pa(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,y){S.getRGB(zr,Xf(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(o,l)},render:x,addToRenderList:p}}function hM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,r=!1;function o(b,R,I,O,F){let X=!1;const D=u(O,I,R);a!==D&&(a=D,c(a.object)),X=d(b,O,I,F),X&&m(b,O,I,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,_(b,R,I,O),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,R,I){const O=I.wireframe===!0;let F=n[b.id];F===void 0&&(F={},n[b.id]=F);let X=F[R.id];X===void 0&&(X={},F[R.id]=X);let D=X[O];return D===void 0&&(D=f(l()),X[O]=D),D}function f(b){const R=[],I=[],O=[];for(let F=0;F<e;F++)R[F]=0,I[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,R,I,O){const F=a.attributes,X=R.attributes;let D=0;const B=I.getAttributes();for(const N in B)if(B[N].location>=0){const K=F[N];let j=X[N];if(j===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),K===void 0||K.attribute!==j||j&&K.data!==j.data)return!0;D++}return a.attributesNum!==D||a.index!==O}function m(b,R,I,O){const F={},X=R.attributes;let D=0;const B=I.getAttributes();for(const N in B)if(B[N].location>=0){let K=X[N];K===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const j={};j.attribute=K,K&&K.data&&(j.data=K.data),F[N]=j,D++}a.attributes=F,a.attributesNum=D,a.index=O}function x(){const b=a.newAttributes;for(let R=0,I=b.length;R<I;R++)b[R]=0}function p(b){g(b,0)}function g(b,R){const I=a.newAttributes,O=a.enabledAttributes,F=a.attributeDivisors;I[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),F[b]!==R&&(i.vertexAttribDivisor(b,R),F[b]=R)}function S(){const b=a.newAttributes,R=a.enabledAttributes;for(let I=0,O=R.length;I<O;I++)R[I]!==b[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function y(b,R,I,O,F,X,D){D===!0?i.vertexAttribIPointer(b,R,I,F,X):i.vertexAttribPointer(b,R,I,O,F,X)}function _(b,R,I,O){x();const F=O.attributes,X=I.getAttributes(),D=R.defaultAttributeValues;for(const B in X){const N=X[B];if(N.location>=0){let H=F[B];if(H===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),H!==void 0){const K=H.normalized,j=H.itemSize,ot=t.get(H);if(ot===void 0)continue;const ut=ot.buffer,k=ot.type,q=ot.bytesPerElement,ct=k===i.INT||k===i.UNSIGNED_INT||H.gpuType===hh;if(H.isInterleavedBufferAttribute){const it=H.data,at=it.stride,gt=H.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<N.locationSize;Rt++)g(N.location+Rt,it.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<N.locationSize;Rt++)p(N.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Rt=0;Rt<N.locationSize;Rt++)y(N.location+Rt,j/N.locationSize,k,K,at*q,(gt+j/N.locationSize*Rt)*q,ct)}else{if(H.isInstancedBufferAttribute){for(let it=0;it<N.locationSize;it++)g(N.location+it,H.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let it=0;it<N.locationSize;it++)p(N.location+it);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let it=0;it<N.locationSize;it++)y(N.location+it,j/N.locationSize,k,K,j*q,j/N.locationSize*it*q,ct)}}else if(D!==void 0){const K=D[B];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(N.location,K);break;case 3:i.vertexAttrib3fv(N.location,K);break;case 4:i.vertexAttrib4fv(N.location,K);break;default:i.vertexAttrib1fv(N.location,K)}}}}S()}function C(){M();for(const b in n){const R=n[b];for(const I in R){const O=R[I];for(const F in O)h(O[F].object),delete O[F];delete R[I]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const I in R){const O=R[I];for(const F in O)h(O[F].object),delete O[F];delete R[I]}delete n[b.id]}function T(b){for(const R in n){const I=n[R];if(I[b.id]===void 0)continue;const O=I[b.id];for(const F in O)h(O[F].object),delete O[F];delete I[b.id]}}function M(){v(),r=!0,a!==s&&(a=s,c(a.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function uM(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)r(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dM(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const M=T===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!M)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function fM(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new fs,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||a&&!p)a?h(null):c();else{const S=a?0:n,y=S*4;let _=g.clippingState||null;l.value=_,_=h(m,f,y,d);for(let C=0;C!==y;++C)_[C]=e[C];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=d+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,_=d;y!==x;++y,_+=4)r.copy(u[y]).applyMatrix4(S,o),r.normal.toArray(p,_),p[_+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function pM(i){let t=new WeakMap;function e(r,o){return o===hc?r.mapping=ha:o===uc&&(r.mapping=ua),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===hc||o===uc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Eg(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class vh extends qf{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qs=4,Cu=[.125,.215,.35,.446,.526,.582],gs=20,Cl=new vh,Pu=new It;let Pl=null,Ll=0,Il=0,Dl=!1;const ps=(1+Math.sqrt(5))/2,Xs=1/ps,Lu=[new L(-ps,Xs,0),new L(ps,Xs,0),new L(-Xs,0,ps),new L(Xs,0,ps),new L(0,ps,-Xs),new L(0,ps,Xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Ll,Il),this._renderer.xr.enabled=Dl,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ha||t.mapping===ua?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ei,format:Yn,colorSpace:_a,depthBuffer:!1},s=Iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mM(a)),this._blurMaterial=gM(a,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,s){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pu),h.toneMapping=Zi,h.autoClear=!1;const d=new Re({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new lt(new Ht,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Pu),x=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;Hr(s,S*y,g>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ha||t.mapping===ua;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Lu[(s-a-1)%Lu.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*gs-1),x=a/m,p=isFinite(a)?1+Math.floor(h*x):gs;p>gs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const g=[];let S=0;for(let T=0;T<gs;++T){const M=T/x,v=Math.exp(-M*M/2);g.push(v),T===0?S+=v:T<p&&(S+=2*v)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const _=this._sizeLods[s],C=3*_*(s>y-Qs?s-y+Qs:0),w=4*(this._cubeSize-_);Hr(e,C,w,3*_,2*_),l.setRenderTarget(e),l.render(u,Cl)}}function mM(i){const t=[],e=[],n=[];let s=i;const a=i-Qs+1+Cu.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>i-Qs?l=Cu[r-i+Qs-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,S=new Float32Array(x*m*d),y=new Float32Array(p*m*d),_=new Float32Array(g*m*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,M=w>2?0:-1,v=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];S.set(v,x*m*w),y.set(f,p*m*w);const b=[w,w,w,w,w,w];_.set(b,g*m*w)}const C=new _e;C.setAttribute("position",new Ce(S,x)),C.setAttribute("uv",new Ce(y,p)),C.setAttribute("faceIndex",new Ce(_,g)),t.push(C),s>Qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Iu(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gM(i,t,e){const n=new Float32Array(gs),s=new L(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Du(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Nu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xM(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hc||l===uc,h=l===ha||l===ua;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new wo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function MM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vM(i,t,e,n){const s={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}f.removeEventListener("dispose",r),delete s[f.id];const d=a.get(f);d&&(t.remove(d),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const x=d[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let y=0,_=S.length;y<_;y+=3){const C=S[y+0],w=S[y+1],T=S[y+2];f.push(C,w,w,T,T,C)}}else if(m!==void 0){const S=m.array;x=m.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const C=y+0,w=y+1,T=y+2;f.push(C,w,w,T,T,C)}}else return;const p=new(Bf(f)?Wf:Vf)(f,1);p.version=x;const g=a.get(u);g&&t.remove(g),a.set(u,p)}function h(u){const f=a.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _M(i,t,e){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,a,f*r),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,a,f*r,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/r,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,a,f,0,x,0,m);let g=0;for(let S=0;S<m;S++)g+=d[S]*x[S];e.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bM(i,t,e){const n=new WeakMap,s=new ve;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let C=o.attributes.position.count*_,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*w*4*u),M=new Hf(T,C,w,u);M.type=li,M.needsUpdate=!0;const v=_*4;for(let R=0;R<u;R++){const I=g[R],O=S[R],F=y[R],X=C*w*4*R;for(let D=0;D<I.count;D++){const B=D*v;m===!0&&(s.fromBufferAttribute(I,D),T[X+B+0]=s.x,T[X+B+1]=s.y,T[X+B+2]=s.z,T[X+B+3]=0),x===!0&&(s.fromBufferAttribute(O,D),T[X+B+4]=s.x,T[X+B+5]=s.y,T[X+B+6]=s.z,T[X+B+7]=0),p===!0&&(s.fromBufferAttribute(F,D),T[X+B+8]=s.x,T[X+B+9]=s.y,T[X+B+10]=s.z,T[X+B+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:M,size:new Q(C,w)},n.set(o,f),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function SM(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Kf extends ln{constructor(t,e,n,s,a,r,o,l,c,h=ra){if(h!==ra&&h!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ra&&(n=ws),n===void 0&&h===fa&&(n=da),super(null,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jf=new ln,Uu=new Kf(1,1),Zf=new Hf,Jf=new hg,Qf=new $f,ku=[],Ou=[],Fu=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function ba(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=ku[s];if(a===void 0&&(a=new Float32Array(s),ku[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function EM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function TM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function AM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function RM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),Ve(e,n)}}function CM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Bu.set(n),i.uniformMatrix3fv(this.addr,!1,Bu),Ve(e,n)}}function PM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Fu.set(n),i.uniformMatrix4fv(this.addr,!1,Fu),Ve(e,n)}}function LM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function IM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function DM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function NM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function UM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function OM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function FM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function BM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Uu.compareFunction=Ff,a=Uu):a=jf,e.setTexture2D(t||a,s)}function zM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function HM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qf,s)}function GM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zf,s)}function VM(i){switch(i){case 5126:return wM;case 35664:return EM;case 35665:return TM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return IM;case 35668:case 35672:return DM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return kM;case 36295:return OM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(i,t){i.uniform1fv(this.addr,t)}function XM(i,t){const e=ba(t,this.size,2);i.uniform2fv(this.addr,e)}function qM(i,t){const e=ba(t,this.size,3);i.uniform3fv(this.addr,e)}function $M(i,t){const e=ba(t,this.size,4);i.uniform4fv(this.addr,e)}function YM(i,t){const e=ba(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function KM(i,t){const e=ba(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jM(i,t){const e=ba(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ZM(i,t){i.uniform1iv(this.addr,t)}function JM(i,t){i.uniform2iv(this.addr,t)}function QM(i,t){i.uniform3iv(this.addr,t)}function tv(i,t){i.uniform4iv(this.addr,t)}function ev(i,t){i.uniform1uiv(this.addr,t)}function nv(i,t){i.uniform2uiv(this.addr,t)}function iv(i,t){i.uniform3uiv(this.addr,t)}function sv(i,t){i.uniform4uiv(this.addr,t)}function av(i,t,e){const n=this.cache,s=t.length,a=Go(e,s);Ge(n,a)||(i.uniform1iv(this.addr,a),Ve(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||jf,a[r])}function rv(i,t,e){const n=this.cache,s=t.length,a=Go(e,s);Ge(n,a)||(i.uniform1iv(this.addr,a),Ve(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Jf,a[r])}function ov(i,t,e){const n=this.cache,s=t.length,a=Go(e,s);Ge(n,a)||(i.uniform1iv(this.addr,a),Ve(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Qf,a[r])}function lv(i,t,e){const n=this.cache,s=t.length,a=Go(e,s);Ge(n,a)||(i.uniform1iv(this.addr,a),Ve(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Zf,a[r])}function cv(i){switch(i){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return $M;case 35674:return YM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}class hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=VM(e.type)}}class uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cv(e.type)}}class dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Hu(i,t){i.seq.push(t),i.map[t.id]=t}function fv(i,t,e){const n=i.name,s=n.length;for(Nl.lastIndex=0;;){const a=Nl.exec(n),r=Nl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Hu(e,c===void 0?new hv(o,i,t):new uv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new dv(o),Hu(e,u)),e=u}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);fv(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Gu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pv=37297;let mv=0;function gv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Vu=new ee;function xv(i){le._getMatrix(Vu,le.workingColorSpace,i);const t=`mat3( ${Vu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Bo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+gv(i.getShaderSource(t),r)}else return s}function Mv(i,t){const e=xv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vv(i,t){let e;switch(t){case bf:e="Linear";break;case Sf:e="Reinhard";break;case wf:e="Cineon";break;case ch:e="ACESFilmic";break;case Ef:e="AgX";break;case Tf:e="Neutral";break;case Vm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gr=new L;function _v(){le.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function bv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Ha(i){return i!==""}function Xu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(wv,Tv)}const Ev=new Map;function Tv(i,t){let e=ie[t];if(e===void 0){const n=Ev.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(Av,Rv)}function Rv(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_f?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Pv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ha:case ua:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ua:t="ENVMAP_MODE_REFRACTION";break}return t}function Iv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yf:t="ENVMAP_BLENDING_MULTIPLY";break;case Hm:t="ENVMAP_BLENDING_MIX";break;case Gm:t="ENVMAP_BLENDING_ADD";break}return t}function Dv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Nv(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Cv(e),c=Pv(e),h=Lv(e),u=Iv(e),f=Dv(e),d=yv(e),m=bv(a),x=s.createProgram();let p,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ha).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(p=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Zi?vv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Mv("linearToOutputTexel",e.outputColorSpace),_v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),r=Gc(r),r=Xu(r,e),r=qu(r,e),o=Gc(o),o=Xu(o,e),o=qu(o,e),r=$u(r),o=$u(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+p+r,_=S+g+o,C=Gu(s,s.VERTEX_SHADER,y),w=Gu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,C),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(w).trim();let X=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,w);else{const B=Wu(s,C,"vertex"),N=Wu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+B+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||F==="")&&(D=!1);D&&(R.diagnostics={runnable:X,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:F,prefix:g}})}s.deleteShader(C),s.deleteShader(w),M=new go(s,x),v=Sv(s,x)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,pv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let Uv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ov(t),e.set(t,n)),n}}class Ov{constructor(t){this.id=Uv++,this.code=t,this.usedTimes=0}}function Fv(i,t,e,n,s,a,r){const o=new xh,l=new kv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,b,R,I,O){const F=I.fog,X=O.geometry,D=v.isMeshStandardMaterial?I.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||D),N=B&&B.mapping===Fo?B.image.height:null,H=m[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,j=K!==void 0?K.length:0;let ot=0;X.morphAttributes.position!==void 0&&(ot=1),X.morphAttributes.normal!==void 0&&(ot=2),X.morphAttributes.color!==void 0&&(ot=3);let ut,k,q,ct;if(H){const pe=ai[H];ut=pe.vertexShader,k=pe.fragmentShader}else ut=v.vertexShader,k=v.fragmentShader,l.update(v),q=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const it=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),gt=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,Kt=!!v.map,nt=!!v.matcap,ft=!!B,U=!!v.aoMap,kt=!!v.lightMap,ht=!!v.bumpMap,Lt=!!v.normalMap,Mt=!!v.displacementMap,Vt=!!v.emissiveMap,Ct=!!v.metalnessMap,P=!!v.roughnessMap,E=v.anisotropy>0,W=v.clearcoat>0,tt=v.dispersion>0,rt=v.iridescence>0,et=v.sheen>0,Ot=v.transmission>0,St=E&&!!v.anisotropyMap,Pt=W&&!!v.clearcoatMap,ae=W&&!!v.clearcoatNormalMap,pt=W&&!!v.clearcoatRoughnessMap,Dt=rt&&!!v.iridescenceMap,Wt=rt&&!!v.iridescenceThicknessMap,$t=et&&!!v.sheenColorMap,Nt=et&&!!v.sheenRoughnessMap,oe=!!v.specularMap,ne=!!v.specularColorMap,be=!!v.specularIntensityMap,z=Ot&&!!v.transmissionMap,wt=Ot&&!!v.thicknessMap,Z=!!v.gradientMap,st=!!v.alphaMap,At=v.alphaTest>0,Et=!!v.alphaHash,Qt=!!v.extensions;let Le=Zi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Le=i.toneMapping);const en={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:ut,fragmentShader:k,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:gt,instancingColor:gt&&O.instanceColor!==null,instancingMorph:gt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:_a,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:nt,envMap:ft,envMapMode:ft&&B.mapping,envMapCubeUVHeight:N,aoMap:U,lightMap:kt,bumpMap:ht,normalMap:Lt,displacementMap:f&&Mt,emissiveMap:Vt,normalMapObjectSpace:Lt&&v.normalMapType===$m,normalMapTangentSpace:Lt&&v.normalMapType===Of,metalnessMap:Ct,roughnessMap:P,anisotropy:E,anisotropyMap:St,clearcoat:W,clearcoatMap:Pt,clearcoatNormalMap:ae,clearcoatRoughnessMap:pt,dispersion:tt,iridescence:rt,iridescenceMap:Dt,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:Nt,specularMap:oe,specularColorMap:ne,specularIntensityMap:be,transmission:Ot,transmissionMap:z,thicknessMap:wt,gradientMap:Z,opaque:v.transparent===!1&&v.blending===aa&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:At,alphaHash:Et,combine:v.combine,mapUv:Kt&&x(v.map.channel),aoMapUv:U&&x(v.aoMap.channel),lightMapUv:kt&&x(v.lightMap.channel),bumpMapUv:ht&&x(v.bumpMap.channel),normalMapUv:Lt&&x(v.normalMap.channel),displacementMapUv:Mt&&x(v.displacementMap.channel),emissiveMapUv:Vt&&x(v.emissiveMap.channel),metalnessMapUv:Ct&&x(v.metalnessMap.channel),roughnessMapUv:P&&x(v.roughnessMap.channel),anisotropyMapUv:St&&x(v.anisotropyMap.channel),clearcoatMapUv:Pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(v.sheenRoughnessMap.channel),specularMapUv:oe&&x(v.specularMap.channel),specularColorMapUv:ne&&x(v.specularColorMap.channel),specularIntensityMapUv:be&&x(v.specularIntensityMap.channel),transmissionMapUv:z&&x(v.transmissionMap.channel),thicknessMapUv:wt&&x(v.thicknessMap.channel),alphaMapUv:st&&x(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Lt||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Kt||st),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:at,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===je,flipSided:v.side===mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&v.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function g(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(S(b,v),y(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function _(v){const b=m[v.type];let R;if(b){const I=ai[b];R=sr.clone(I.uniforms)}else R=v.uniforms;return R}function C(v,b){let R;for(let I=0,O=h.length;I<O;I++){const F=h[I];if(F.cacheKey===b){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Nv(i,b,v,a),h.push(R)),R}function w(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function M(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:M}}function Bv(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,d,m,x,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function o(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||zv),n.length>1&&n.sort(f||Ku),s.length>1&&s.sort(f||Ku)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function Hv(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new ju,i.set(n,[r])):s>=a.length?(r=new ju,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wv=0;function Xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qv(i){const t=new Gv,e=Vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,a=new ce,r=new ce;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,S=0,y=0,_=0,C=0,w=0,T=0;c.sort(Xv);for(let v=0,b=c.length;v<b;v++){const R=c[v],I=R.color,O=R.intensity,F=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*O,u+=I.g*O,f+=I.b*O;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],O);T++}else if(R.isDirectionalLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,N=e.get(R);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=D,d++}else if(R.isSpotLight){const D=t.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(I).multiplyScalar(O),D.distance=F,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[x]=D;const B=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,B.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=B.matrix,R.castShadow){const N=e.get(R);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.spotShadow[x]=N,n.spotShadowMap[x]=X,_++}x++}else if(R.isRectAreaLight){const D=t.get(R);D.color.copy(I).multiplyScalar(O),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=D,p++}else if(R.isPointLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const B=R.shadow,N=e.get(R);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=D,m++}else if(R.isHemisphereLight){const D=t.get(R);D.skyColor.copy(R.color).multiplyScalar(O),D.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[g]=D,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==d||M.pointLength!==m||M.spotLength!==x||M.rectAreaLength!==p||M.hemiLength!==g||M.numDirectionalShadows!==S||M.numPointShadows!==y||M.numSpotShadows!==_||M.numSpotMaps!==C||M.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,M.directionalLength=d,M.pointLength=m,M.spotLength=x,M.rectAreaLength=p,M.hemiLength=g,M.numDirectionalShadows=S,M.numPointShadows=y,M.numSpotShadows=_,M.numSpotMaps=C,M.numLightProbes=T,n.version=Wv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const y=c[g];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Zu(i){const t=new qv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function $v(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Zu(i),t.set(s,[o])):a>=r.length?(o=new Zu(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yv extends ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kv extends ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jv(i,t,e){let n=new Mh;const s=new Q,a=new Q,r=new ve,o=new Yv({depthPacking:qm}),l=new Kv,c={},h=e.maxTextureSize,u={[Ji]:mn,[mn]:Ji,[je]:je},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:jv,fragmentShader:Zv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let g=this.type;this.render=function(w,T,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const v=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=g!==Mi&&this.type===Mi,F=g===Mi&&this.type!==Mi;for(let X=0,D=w.length;X<D;X++){const B=w[X],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),a.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/H.x),s.x=a.x*H.x,N.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/H.y),s.y=a.y*H.y,N.mapSize.y=a.y)),N.map===null||O===!0||F===!0){const j=this.type!==Mi?{minFilter:Rn,magFilter:Rn}:{};N.map!==null&&N.map.dispose(),N.map=new jn(s.x,s.y,j),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const K=N.getViewportCount();for(let j=0;j<K;j++){const ot=N.getViewport(j);r.set(a.x*ot.x,a.y*ot.y,a.x*ot.z,a.y*ot.w),I.viewport(r),N.updateMatrices(B,j),n=N.getFrustum(),_(T,M,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===Mi&&S(N,M),N.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(v,b,R)};function S(w,T){const M=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,M,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,M,d,x,null)}function y(w,T,M,v){let b=null;const R=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)b=R;else if(b=M.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=b.uuid,O=T.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let X=F[O];X===void 0&&(X=b.clone(),F[O]=X,T.addEventListener("dispose",C)),b=X}if(b.visible=T.visible,b.wireframe=T.wireframe,v===Mi?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=i.properties.get(b);I.light=M}return b}function _(w,T,M,v,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const O=t.update(w),F=w.material;if(Array.isArray(F)){const X=O.groups;for(let D=0,B=X.length;D<B;D++){const N=X[D],H=F[N.materialIndex];if(H&&H.visible){const K=y(w,H,v,b);w.onBeforeShadow(i,w,T,M,O,K,N),i.renderBufferDirect(M,null,O,K,w,N),w.onAfterShadow(i,w,T,M,O,K,N)}}}else if(F.visible){const X=y(w,F,v,b);w.onBeforeShadow(i,w,T,M,O,X,null),i.renderBufferDirect(M,null,O,X,w,null),w.onAfterShadow(i,w,T,M,O,X,null)}}const I=w.children;for(let O=0,F=I.length;O<F;O++)_(I[O],T,M,v,b)}function C(w){w.target.removeEventListener("dispose",C);for(const M in c){const v=c[M],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Qv={[ic]:sc,[ac]:lc,[rc]:cc,[ca]:oc,[sc]:ic,[lc]:ac,[cc]:rc,[oc]:ca};function t_(i,t){function e(){let z=!1;const wt=new ve;let Z=null;const st=new ve(0,0,0,0);return{setMask:function(At){Z!==At&&!z&&(i.colorMask(At,At,At,At),Z=At)},setLocked:function(At){z=At},setClear:function(At,Et,Qt,Le,en){en===!0&&(At*=Le,Et*=Le,Qt*=Le),wt.set(At,Et,Qt,Le),st.equals(wt)===!1&&(i.clearColor(At,Et,Qt,Le),st.copy(wt))},reset:function(){z=!1,Z=null,st.set(-1,0,0,0)}}}function n(){let z=!1,wt=!1,Z=null,st=null,At=null;return{setReversed:function(Et){if(wt!==Et){const Qt=t.get("EXT_clip_control");wt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const Le=At;At=null,this.setClear(Le)}wt=Et},getReversed:function(){return wt},setTest:function(Et){Et?it(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Et){Z!==Et&&!z&&(i.depthMask(Et),Z=Et)},setFunc:function(Et){if(wt&&(Et=Qv[Et]),st!==Et){switch(Et){case ic:i.depthFunc(i.NEVER);break;case sc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Et}},setLocked:function(Et){z=Et},setClear:function(Et){At!==Et&&(wt&&(Et=1-Et),i.clearDepth(Et),At=Et)},reset:function(){z=!1,Z=null,st=null,At=null,wt=!1}}}function s(){let z=!1,wt=null,Z=null,st=null,At=null,Et=null,Qt=null,Le=null,en=null;return{setTest:function(pe){z||(pe?it(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(pe){wt!==pe&&!z&&(i.stencilMask(pe),wt=pe)},setFunc:function(pe,Gn,hi){(Z!==pe||st!==Gn||At!==hi)&&(i.stencilFunc(pe,Gn,hi),Z=pe,st=Gn,At=hi)},setOp:function(pe,Gn,hi){(Et!==pe||Qt!==Gn||Le!==hi)&&(i.stencilOp(pe,Gn,hi),Et=pe,Qt=Gn,Le=hi)},setLocked:function(pe){z=pe},setClear:function(pe){en!==pe&&(i.clearStencil(pe),en=pe)},reset:function(){z=!1,wt=null,Z=null,st=null,At=null,Et=null,Qt=null,Le=null,en=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,S=null,y=null,_=null,C=null,w=null,T=new It(0,0,0),M=0,v=!1,b=null,R=null,I=null,O=null,F=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=B>=2);let H=null,K={};const j=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),ut=new ve().fromArray(j),k=new ve().fromArray(ot);function q(z,wt,Z,st){const At=new Uint8Array(4),Et=i.createTexture();i.bindTexture(z,Et),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<Z;Qt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(wt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Et}const ct={};ct[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(i.DEPTH_TEST),r.setFunc(ca),ht(!1),Lt(su),it(i.CULL_FACE),U(wi);function it(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function at(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function gt(z,wt){return u[z]!==wt?(i.bindFramebuffer(z,wt),u[z]=wt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Rt(z,wt){let Z=d,st=!1;if(z){Z=f.get(wt),Z===void 0&&(Z=[],f.set(wt,Z));const At=z.textures;if(Z.length!==At.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Qt=At.length;Et<Qt;Et++)Z[Et]=i.COLOR_ATTACHMENT0+Et;Z.length=At.length,st=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,st=!0);st&&i.drawBuffers(Z)}function Kt(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const nt={[ms]:i.FUNC_ADD,[wm]:i.FUNC_SUBTRACT,[Em]:i.FUNC_REVERSE_SUBTRACT};nt[Tm]=i.MIN,nt[Am]=i.MAX;const ft={[Rm]:i.ZERO,[Cm]:i.ONE,[Pm]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[km]:i.SRC_ALPHA_SATURATE,[Nm]:i.DST_COLOR,[Im]:i.DST_ALPHA,[Lm]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[Um]:i.ONE_MINUS_DST_COLOR,[Dm]:i.ONE_MINUS_DST_ALPHA,[Om]:i.CONSTANT_COLOR,[Fm]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function U(z,wt,Z,st,At,Et,Qt,Le,en,pe){if(z===wi){x===!0&&(at(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),z!==Sm){if(z!==p||pe!==v){if((g!==ms||_!==ms)&&(i.blendEquation(i.FUNC_ADD),g=ms,_=ms),pe)switch(z){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,y=null,C=null,w=null,T.set(0,0,0),M=0,p=z,v=pe}return}At=At||wt,Et=Et||Z,Qt=Qt||st,(wt!==g||At!==_)&&(i.blendEquationSeparate(nt[wt],nt[At]),g=wt,_=At),(Z!==S||st!==y||Et!==C||Qt!==w)&&(i.blendFuncSeparate(ft[Z],ft[st],ft[Et],ft[Qt]),S=Z,y=st,C=Et,w=Qt),(Le.equals(T)===!1||en!==M)&&(i.blendColor(Le.r,Le.g,Le.b,en),T.copy(Le),M=en),p=z,v=!1}function kt(z,wt){z.side===je?at(i.CULL_FACE):it(i.CULL_FACE);let Z=z.side===mn;wt&&(Z=!Z),ht(Z),z.blending===aa&&z.transparent===!1?U(wi):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),a.setMask(z.colorWrite);const st=z.stencilWrite;o.setTest(st),st&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function Lt(z){z!==ym?(it(i.CULL_FACE),z!==R&&(z===su?i.cullFace(i.BACK):z===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),R=z}function Mt(z){z!==I&&(D&&i.lineWidth(z),I=z)}function Vt(z,wt,Z){z?(it(i.POLYGON_OFFSET_FILL),(O!==wt||F!==Z)&&(i.polygonOffset(wt,Z),O=wt,F=Z)):at(i.POLYGON_OFFSET_FILL)}function Ct(z){z?it(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+X-1),H!==z&&(i.activeTexture(z),H=z)}function E(z,wt,Z){Z===void 0&&(H===null?Z=i.TEXTURE0+X-1:Z=H);let st=K[Z];st===void 0&&(st={type:void 0,texture:void 0},K[Z]=st),(st.type!==z||st.texture!==wt)&&(H!==Z&&(i.activeTexture(Z),H=Z),i.bindTexture(z,wt||ct[z]),st.type=z,st.texture=wt)}function W(){const z=K[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $t(z){ut.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ut.copy(z))}function Nt(z){k.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),k.copy(z))}function oe(z,wt){let Z=c.get(wt);Z===void 0&&(Z=new WeakMap,c.set(wt,Z));let st=Z.get(z);st===void 0&&(st=i.getUniformBlockIndex(wt,z.name),Z.set(z,st))}function ne(z,wt){const st=c.get(wt).get(z);l.get(wt)!==st&&(i.uniformBlockBinding(wt,st,z.__bindingPointIndex),l.set(wt,st))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,K={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,S=null,y=null,_=null,C=null,w=null,T=new It(0,0,0),M=0,v=!1,b=null,R=null,I=null,O=null,F=null,ut.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:it,disable:at,bindFramebuffer:gt,drawBuffers:Rt,useProgram:Kt,setBlending:U,setMaterial:kt,setFlipSided:ht,setCullFace:Lt,setLineWidth:Mt,setPolygonOffset:Vt,setScissorTest:Ct,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:Dt,texImage3D:Wt,updateUBOMapping:oe,uniformBlockBinding:ne,texStorage2D:ae,texStorage3D:pt,texSubImage2D:et,texSubImage3D:Ot,compressedTexSubImage2D:St,compressedTexSubImage3D:Pt,scissor:$t,viewport:Nt,reset:be}}function Ju(i,t,e,n){const s=e_(n);switch(e){case Lf:return i*t;case Df:return i*t;case Nf:return i*t*2;case fh:return i*t/s.components*s.byteLength;case ph:return i*t/s.components*s.byteLength;case Uf:return i*t*2/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case If:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case gh:return i*t*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:case xc:return Math.max(i,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(t,8)/2;case Mc:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case Uc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kf:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(i){switch(i){case Pi:case Rf:return{byteLength:1,components:1};case ir:case Cf:case Ei:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case ws:case hh:case li:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return d?new OffscreenCanvas(P,E):So("canvas")}function x(P,E,W){let tt=1;const rt=Ct(P);if((rt.width>W||rt.height>W)&&(tt=W/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(tt*rt.width),Ot=Math.floor(tt*rt.height);u===void 0&&(u=m(et,Ot));const St=E?m(et,Ot):u;return St.width=et,St.height=Ot,St.getContext("2d").drawImage(P,0,0,et,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+Ot+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,E,W,tt,rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),E===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),E===i.RGBA){const Ot=rt?Bo:le.getTransfer(tt);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=Ot===me?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(P,E){let W;return P?E===null||E===ws||E===da?W=i.DEPTH24_STENCIL8:E===li?W=i.DEPTH32F_STENCIL8:E===ir&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ws||E===da?W=i.DEPTH_COMPONENT24:E===li?W=i.DEPTH_COMPONENT32F:E===ir&&(W=i.DEPTH_COMPONENT16),W}function C(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==oi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),M(E),E.isVideoTexture&&h.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),b(E)}function M(P){const E=n.get(P);if(E.__webglInit===void 0)return;const W=P.source,tt=f.get(W);if(tt){const rt=tt[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&v(P),Object.keys(tt).length===0&&f.delete(W)}n.remove(P)}function v(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const W=P.source,tt=f.get(W);delete tt[E.__cacheKey],r.memory.textures--}function b(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let rt=0;rt<E.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(E.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let tt=0,rt=W.length;tt<rt;tt++){const et=n.get(W[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(W[tt])}n.remove(P)}let R=0;function I(){R=0}function O(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const W=n.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(W,P,E);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function D(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){k(W,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function B(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){k(W,P,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function N(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){q(W,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const H={[dc]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},K={[Rn]:i.NEAREST,[Wm]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},j={[Ym]:i.NEVER,[tg]:i.ALWAYS,[Km]:i.LESS,[Ff]:i.LEQUAL,[jm]:i.EQUAL,[Qm]:i.GEQUAL,[Zm]:i.GREATER,[Jm]:i.NOTEQUAL};function ot(P,E){if(E.type===li&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===oi||E.magFilter===rl||E.magFilter===br||E.magFilter===_s||E.minFilter===oi||E.minFilter===rl||E.minFilter===br||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,H[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,H[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,H[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,K[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==br&&E.minFilter!==_s||E.type===li&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ut(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const tt=E.source;let rt=f.get(tt);rt===void 0&&(rt={},f.set(tt,rt));const et=F(E);if(et!==P.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),rt[et].usedTimes++;const Ot=rt[P.__cacheKey];Ot!==void 0&&(rt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&v(E)),P.__cacheKey=et,P.__webglTexture=rt[et].texture}return W}function k(P,E,W){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);const rt=ut(P,E),et=E.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+W);const Ot=n.get(et);if(et.version!==Ot.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);const St=le.getPrimaries(le.workingColorSpace),Pt=E.colorSpace===Ki?null:le.getPrimaries(E.colorSpace),ae=E.colorSpace===Ki||St===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let pt=x(E.image,!1,s.maxTextureSize);pt=Vt(E,pt);const Dt=a.convert(E.format,E.colorSpace),Wt=a.convert(E.type);let $t=y(E.internalFormat,Dt,Wt,E.colorSpace,E.isVideoTexture);ot(tt,E);let Nt;const oe=E.mipmaps,ne=E.isVideoTexture!==!0,be=Ot.__version===void 0||rt===!0,z=et.dataReady,wt=C(E,pt);if(E.isDepthTexture)$t=_(E.format===fa,E.type),be&&(ne?e.texStorage2D(i.TEXTURE_2D,1,$t,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,$t,pt.width,pt.height,0,Dt,Wt,null));else if(E.isDataTexture)if(oe.length>0){ne&&be&&e.texStorage2D(i.TEXTURE_2D,wt,$t,oe[0].width,oe[0].height);for(let Z=0,st=oe.length;Z<st;Z++)Nt=oe[Z],ne?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Dt,Wt,Nt.data):e.texImage2D(i.TEXTURE_2D,Z,$t,Nt.width,Nt.height,0,Dt,Wt,Nt.data);E.generateMipmaps=!1}else ne?(be&&e.texStorage2D(i.TEXTURE_2D,wt,$t,pt.width,pt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Dt,Wt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,pt.width,pt.height,0,Dt,Wt,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,$t,oe[0].width,oe[0].height,pt.depth);for(let Z=0,st=oe.length;Z<st;Z++)if(Nt=oe[Z],E.format!==Yn)if(Dt!==null)if(ne){if(z)if(E.layerUpdates.size>0){const At=Ju(Nt.width,Nt.height,E.format,E.type);for(const Et of E.layerUpdates){const Qt=Nt.data.subarray(Et*At/Nt.data.BYTES_PER_ELEMENT,(Et+1)*At/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Et,Nt.width,Nt.height,1,Dt,Qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Nt.width,Nt.height,pt.depth,Dt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,$t,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Nt.width,Nt.height,pt.depth,Dt,Wt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,$t,Nt.width,Nt.height,pt.depth,0,Dt,Wt,Nt.data)}else{ne&&be&&e.texStorage2D(i.TEXTURE_2D,wt,$t,oe[0].width,oe[0].height);for(let Z=0,st=oe.length;Z<st;Z++)Nt=oe[Z],E.format!==Yn?Dt!==null?ne?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Dt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,$t,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Nt.width,Nt.height,Dt,Wt,Nt.data):e.texImage2D(i.TEXTURE_2D,Z,$t,Nt.width,Nt.height,0,Dt,Wt,Nt.data)}else if(E.isDataArrayTexture)if(ne){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,$t,pt.width,pt.height,pt.depth),z)if(E.layerUpdates.size>0){const Z=Ju(pt.width,pt.height,E.format,E.type);for(const st of E.layerUpdates){const At=pt.data.subarray(st*Z/pt.data.BYTES_PER_ELEMENT,(st+1)*Z/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,pt.width,pt.height,1,Dt,Wt,At)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Dt,Wt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,pt.width,pt.height,pt.depth,0,Dt,Wt,pt.data);else if(E.isData3DTexture)ne?(be&&e.texStorage3D(i.TEXTURE_3D,wt,$t,pt.width,pt.height,pt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Dt,Wt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,pt.width,pt.height,pt.depth,0,Dt,Wt,pt.data);else if(E.isFramebufferTexture){if(be)if(ne)e.texStorage2D(i.TEXTURE_2D,wt,$t,pt.width,pt.height);else{let Z=pt.width,st=pt.height;for(let At=0;At<wt;At++)e.texImage2D(i.TEXTURE_2D,At,$t,Z,st,0,Dt,Wt,null),Z>>=1,st>>=1}}else if(oe.length>0){if(ne&&be){const Z=Ct(oe[0]);e.texStorage2D(i.TEXTURE_2D,wt,$t,Z.width,Z.height)}for(let Z=0,st=oe.length;Z<st;Z++)Nt=oe[Z],ne?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Dt,Wt,Nt):e.texImage2D(i.TEXTURE_2D,Z,$t,Dt,Wt,Nt);E.generateMipmaps=!1}else if(ne){if(be){const Z=Ct(pt);e.texStorage2D(i.TEXTURE_2D,wt,$t,Z.width,Z.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Wt,pt)}else e.texImage2D(i.TEXTURE_2D,0,$t,Dt,Wt,pt);p(E)&&g(tt),Ot.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,W){if(E.image.length!==6)return;const tt=ut(P,E),rt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const et=n.get(rt);if(rt.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);const Ot=le.getPrimaries(le.workingColorSpace),St=E.colorSpace===Ki?null:le.getPrimaries(E.colorSpace),Pt=E.colorSpace===Ki||Ot===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,pt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let st=0;st<6;st++)!ae&&!pt?Dt[st]=x(E.image[st],!0,s.maxCubemapSize):Dt[st]=pt?E.image[st].image:E.image[st],Dt[st]=Vt(E,Dt[st]);const Wt=Dt[0],$t=a.convert(E.format,E.colorSpace),Nt=a.convert(E.type),oe=y(E.internalFormat,$t,Nt,E.colorSpace),ne=E.isVideoTexture!==!0,be=et.__version===void 0||tt===!0,z=rt.dataReady;let wt=C(E,Wt);ot(i.TEXTURE_CUBE_MAP,E);let Z;if(ae){ne&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,Wt.width,Wt.height);for(let st=0;st<6;st++){Z=Dt[st].mipmaps;for(let At=0;At<Z.length;At++){const Et=Z[At];E.format!==Yn?$t!==null?ne?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Et.width,Et.height,$t,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,oe,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Et.width,Et.height,$t,Nt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,oe,Et.width,Et.height,0,$t,Nt,Et.data)}}}else{if(Z=E.mipmaps,ne&&be){Z.length>0&&wt++;const st=Ct(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,st.width,st.height)}for(let st=0;st<6;st++)if(pt){ne?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt[st].width,Dt[st].height,$t,Nt,Dt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,oe,Dt[st].width,Dt[st].height,0,$t,Nt,Dt[st].data);for(let At=0;At<Z.length;At++){const Qt=Z[At].image[st].image;ne?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Qt.width,Qt.height,$t,Nt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,oe,Qt.width,Qt.height,0,$t,Nt,Qt.data)}}else{ne?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,$t,Nt,Dt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,oe,$t,Nt,Dt[st]);for(let At=0;At<Z.length;At++){const Et=Z[At];ne?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,$t,Nt,Et.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,oe,$t,Nt,Et.image[st])}}}p(E)&&g(i.TEXTURE_CUBE_MAP),et.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ct(P,E,W,tt,rt,et){const Ot=a.convert(W.format,W.colorSpace),St=a.convert(W.type),Pt=y(W.internalFormat,Ot,St,W.colorSpace),ae=n.get(E),pt=n.get(W);if(pt.__renderTarget=E,!ae.__hasExternalTextures){const Dt=Math.max(1,E.width>>et),Wt=Math.max(1,E.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,Pt,Dt,Wt,E.depth,0,Ot,St,null):e.texImage2D(rt,et,Pt,Dt,Wt,0,Ot,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,pt.__webglTexture,0,ht(E)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,pt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const tt=E.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,et=_(E.stencilBuffer,rt),Ot=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=ht(E);Lt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,et,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,et,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,P)}else{const tt=E.textures;for(let rt=0;rt<tt.length;rt++){const et=tt[rt],Ot=a.convert(et.format,et.colorSpace),St=a.convert(et.type),Pt=y(et.internalFormat,Ot,St,et.colorSpace),ae=ht(E);W&&Lt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Pt,E.width,E.height):Lt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const rt=tt.__webglTexture,et=ht(E);if(E.depthTexture.format===ra)Lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(E.depthTexture.format===fa)Lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function gt(P){const E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=tt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),it(E.__webglDepthbuffer[tt],P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),it(E.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(P,E,W){const tt=n.get(P);E!==void 0&&ct(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&gt(P)}function Kt(P){const E=P.texture,W=n.get(P),tt=n.get(E);P.addEventListener("dispose",T);const rt=P.textures,et=P.isWebGLCubeRenderTarget===!0,Ot=rt.length>1;if(Ot||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,r.memory.textures++),et){W.__webglFramebuffer=[];for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[St]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)W.__webglFramebuffer[St][Pt]=i.createFramebuffer()}else W.__webglFramebuffer[St]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)W.__webglFramebuffer[St]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let St=0,Pt=rt.length;St<Pt;St++){const ae=n.get(rt[St]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&Lt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let St=0;St<rt.length;St++){const Pt=rt[St];W.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[St]);const ae=a.convert(Pt.format,Pt.colorSpace),pt=a.convert(Pt.type),Dt=y(Pt.internalFormat,ae,pt,Pt.colorSpace,P.isXRRenderTarget===!0),Wt=ht(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Dt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,W.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),it(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ot(i.TEXTURE_CUBE_MAP,E);for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)ct(W.__webglFramebuffer[St][Pt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt);else ct(W.__webglFramebuffer[St],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let St=0,Pt=rt.length;St<Pt;St++){const ae=rt[St],pt=n.get(ae);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),ot(i.TEXTURE_2D,ae),ct(W.__webglFramebuffer,P,ae,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),p(ae)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,tt.__webglTexture),ot(St,E),E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)ct(W.__webglFramebuffer[Pt],P,E,i.COLOR_ATTACHMENT0,St,Pt);else ct(W.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,St,0);p(E)&&g(St),e.unbindTexture()}P.depthBuffer&&gt(P)}function nt(P){const E=P.textures;for(let W=0,tt=E.length;W<tt;W++){const rt=E[W];if(p(rt)){const et=S(P),Ot=n.get(rt).__webglTexture;e.bindTexture(et,Ot),g(et),e.unbindTexture()}}}const ft=[],U=[];function kt(P){if(P.samples>0){if(Lt(P)===!1){const E=P.textures,W=P.width,tt=P.height;let rt=i.COLOR_BUFFER_BIT;const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(P),St=E.length>1;if(St)for(let Pt=0;Pt<E.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const ae=n.get(E[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,W,tt,0,0,W,tt,rt,i.NEAREST),l===!0&&(ft.length=0,U.length=0,ft.push(i.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(et),U.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Pt=0;Pt<E.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const ae=n.get(E[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ht(P){return Math.min(s.maxSamples,P.samples)}function Lt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Vt(P,E){const W=P.colorSpace,tt=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==_a&&W!==Ki&&(le.getTransfer(W)===me?(tt!==Yn||rt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=N,this.rebindTextures=Rt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Lt}function i_(i,t){function e(n,s=Ki){let a;const r=le.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===hh)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Lf)return i.ALPHA;if(n===If)return i.RGB;if(n===Yn)return i.RGBA;if(n===Df)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===ra)return i.DEPTH_COMPONENT;if(n===fa)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===ph)return i.RED_INTEGER;if(n===Uf)return i.RG;if(n===mh)return i.RG_INTEGER;if(n===gh)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(r===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===xc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===pc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===vc||n===_c)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Mc||n===vc)return r===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===_c)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Nc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===yc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return r===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===Uc||n===kc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===mo)return r===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===Oc||n===Fc||n===Bc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===mo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===da?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class s_ extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:r_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends ya{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=new l_,p=e.getContextAttributes();let g=null,S=null;const y=[],_=[],C=new Q;let w=null;const T=new dn;T.viewport=new ve;const M=new dn;M.viewport=new ve;const v=[T,M],b=new s_;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=y[k];return q===void 0&&(q=new Ul,y[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=y[k];return q===void 0&&(q=new Ul,y[k]=q),q.getGripSpace()},this.getHand=function(k){let q=y[k];return q===void 0&&(q=new Ul,y[k]=q),q.getHandSpace()};function O(k){const q=_.indexOf(k.inputSource);if(q===-1)return;const ct=y[q];ct!==void 0&&(ct.update(k.inputSource,k.frame,c||r),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let k=0;k<y.length;k++){const q=_[k];q!==null&&(_[k]=null,y[k].disconnect(q))}R=null,I=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new jn(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,ct=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?fa:ra,ct=p.stencil?da:ws);const at={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:a};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new jn(f.textureWidth,f.textureHeight,{format:Yn,type:Pi,depthTexture:new Kf(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(k){for(let q=0;q<k.removed.length;q++){const ct=k.removed[q],it=_.indexOf(ct);it>=0&&(_[it]=null,y[it].disconnect(ct))}for(let q=0;q<k.added.length;q++){const ct=k.added[q];let it=_.indexOf(ct);if(it===-1){for(let gt=0;gt<y.length;gt++)if(gt>=_.length){_.push(ct),it=gt;break}else if(_[gt]===null){_[gt]=ct,it=gt;break}if(it===-1)break}const at=y[it];at&&at.connect(ct)}}const D=new L,B=new L;function N(k,q,ct){D.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);const it=D.distanceTo(B),at=q.projectionMatrix.elements,gt=ct.projectionMatrix.elements,Rt=at[14]/(at[10]-1),Kt=at[14]/(at[10]+1),nt=(at[9]+1)/at[5],ft=(at[9]-1)/at[5],U=(at[8]-1)/at[0],kt=(gt[8]+1)/gt[0],ht=Rt*U,Lt=Rt*kt,Mt=it/(-U+kt),Vt=Mt*-U;if(q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Vt),k.translateZ(Mt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),at[10]===-1)k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Ct=Rt+Mt,P=Kt+Mt,E=ht-Vt,W=Lt+(it-Vt),tt=nt*Kt/P*Ct,rt=ft*Kt/P*Ct;k.projectionMatrix.makePerspective(E,W,tt,rt,Ct,P),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function H(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let q=k.near,ct=k.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),b.near=M.near=T.near=q,b.far=M.far=T.far=ct,(R!==b.near||I!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,I=b.far),T.layers.mask=k.layers.mask|2,M.layers.mask=k.layers.mask|4,b.layers.mask=T.layers.mask|M.layers.mask;const it=k.parent,at=b.cameras;H(b,it);for(let gt=0;gt<at.length;gt++)H(at[gt],it);at.length===2?N(b,T,M):b.projectionMatrix.copy(T.projectionMatrix),K(k,b,it)};function K(k,q,ct){ct===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Hc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let j=null;function ot(k,q){if(h=q.getViewerPose(c||r),m=q,h!==null){const ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let it=!1;ct.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let gt=0;gt<ct.length;gt++){const Rt=ct[gt];let Kt=null;if(d!==null)Kt=d.getViewport(Rt);else{const ft=u.getViewSubImage(f,Rt);Kt=ft.viewport,gt===0&&(t.setRenderTargetTextures(S,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(S))}let nt=v[gt];nt===void 0&&(nt=new dn,nt.layers.enable(gt),nt.viewport=new ve,v[gt]=nt),nt.matrix.fromArray(Rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),gt===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(nt)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const gt=u.getDepthInformation(ct[0]);gt&&gt.isValid&&gt.texture&&x.init(t,gt,s.renderState)}}for(let ct=0;ct<y.length;ct++){const it=_[ct],at=y[ct];it!==null&&at!==void 0&&at.update(it,q,c||r)}j&&j(k,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}const ut=new Yf;ut.setAnimationLoop(ot),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}const hs=new Zn,h_=new ce;function u_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Xf(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,S,y,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(p,g):g.isMeshToonMaterial?(a(p,g),u(p,g)):g.isMeshPhongMaterial?(a(p,g),h(p,g)):g.isMeshStandardMaterial?(a(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,_)):g.isMeshMatcapMaterial?(a(p,g),m(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),x(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,S,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=t.get(g),y=S.envMap,_=S.envMapRotation;y&&(p.envMap.value=y,hs.copy(_),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(hs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=y*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const S=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d_(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const _=y.program;n.uniformBlockBinding(S,_)}function c(S,y){let _=s[S.id];_===void 0&&(m(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(S,C);const w=t.render.frame;a[S.id]!==w&&(f(S),a[S.id]=w)}function h(S){const y=u();S.__bindingPointIndex=y;const _=i.createBuffer(),C=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],_=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=_.length;w<T;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,b=M.length;v<b;v++){const R=M[v];if(d(R,w,v,C)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let X=0;X<O.length;X++){const D=O[X],B=x(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,I+F,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,F),F+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,_,C){const w=S.value,T=y+"_"+_;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const M=C[T];if(typeof w=="number"||typeof w=="boolean"){if(M!==w)return C[T]=w,!0}else if(M.equals(w)===!1)return M.copy(w),!0}return!1}function m(S){const y=S.uniforms;let _=0;const C=16;for(let T=0,M=y.length;T<M;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,R=v.length;b<R;b++){const I=v[b],O=Array.isArray(I.value)?I.value:[I.value];for(let F=0,X=O.length;F<X;F++){const D=O[F],B=x(D),N=_%C,H=N%B.boundary,K=N+H;_+=H,K!==0&&C-K<B.storage&&(_+=C-K),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=B.storage}}}const w=_%C;return w>0&&(_+=C-w),S.__size=_,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},a={}}return{bind:l,update:c,dispose:g}}class f_{constructor(t={}){const{canvas:e=ng(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),x=new Int32Array(4);let p=null,g=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let C=!1,w=0,T=0,M=null,v=-1,b=null;const R=new ve,I=new ve;let O=null;const F=new It(0);let X=0,D=e.width,B=e.height,N=1,H=null,K=null;const j=new ve(0,0,D,B),ot=new ve(0,0,D,B);let ut=!1;const k=new Mh;let q=!1,ct=!1;const it=new ce,at=new ce,gt=new L,Rt=new ve,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ft(){return M===null?N:1}let U=n;function kt(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),U===null){const G="webgl2";if(U=kt(G,A),U===null)throw kt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,Lt,Mt,Vt,Ct,P,E,W,tt,rt,et,Ot,St,Pt,ae,pt,Dt,Wt,$t,Nt,oe,ne,be,z;function wt(){ht=new MM(U),ht.init(),ne=new i_(U,ht),Lt=new dM(U,ht,t,ne),Mt=new t_(U,ht),Lt.reverseDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),Vt=new yM(U),Ct=new Bv,P=new n_(U,ht,Mt,Ct,Lt,ne,Vt),E=new pM(_),W=new xM(_),tt=new Rg(U),be=new hM(U,tt),rt=new vM(U,tt,Vt,be),et=new SM(U,rt,tt,Vt),$t=new bM(U,Lt,P),pt=new fM(Ct),Ot=new Fv(_,E,W,ht,Lt,be,pt),St=new u_(_,Ct),Pt=new Hv,ae=new $v(ht),Wt=new cM(_,E,W,Mt,et,d,l),Dt=new Jv(_,et,Lt),z=new d_(U,Vt,Lt,Mt),Nt=new uM(U,ht,Vt),oe=new _M(U,ht,Vt),Vt.programs=Ot.programs,_.capabilities=Lt,_.extensions=ht,_.properties=Ct,_.renderLists=Pt,_.shadowMap=Dt,_.state=Mt,_.info=Vt}wt();const Z=new c_(_,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(D,B,!1))},this.getSize=function(A){return A.set(D,B)},this.setSize=function(A,G,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,B=G,e.width=Math.floor(A*N),e.height=Math.floor(G*N),$===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(D*N,B*N).floor()},this.setDrawingBufferSize=function(A,G,$){D=A,B=G,N=$,e.width=Math.floor(A*$),e.height=Math.floor(G*$),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,G,$,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,G,$,Y),Mt.viewport(R.copy(j).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,G,$,Y){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,G,$,Y),Mt.scissor(I.copy(ot).multiplyScalar(N).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){Mt.setScissorTest(ut=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(A=!0,G=!0,$=!0){let Y=0;if(A){let V=!1;if(M!==null){const mt=M.texture.format;V=mt===gh||mt===mh||mt===ph}if(V){const mt=M.texture.type,Tt=mt===Pi||mt===ws||mt===ir||mt===da||mt===uh||mt===dh,Ft=Wt.getClearColor(),Bt=Wt.getClearAlpha(),jt=Ft.r,te=Ft.g,zt=Ft.b;Tt?(m[0]=jt,m[1]=te,m[2]=zt,m[3]=Bt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=jt,x[1]=te,x[2]=zt,x[3]=Bt,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}G&&(Y|=U.DEPTH_BUFFER_BIT),$&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Pt.dispose(),ae.dispose(),Ct.dispose(),E.dispose(),W.dispose(),et.dispose(),be.dispose(),z.dispose(),Ot.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Lh),Z.removeEventListener("sessionend",Ih),ss.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Vt.autoReset,G=Dt.enabled,$=Dt.autoUpdate,Y=Dt.needsUpdate,V=Dt.type;wt(),Vt.autoReset=A,Dt.enabled=G,Dt.autoUpdate=$,Dt.needsUpdate=Y,Dt.type=V}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){const G=A.target;G.removeEventListener("dispose",Qt),Le(G)}function Le(A){en(A),Ct.remove(A)}function en(A){const G=Ct.get(A).programs;G!==void 0&&(G.forEach(function($){Ot.releaseProgram($)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,$,Y,V,mt){G===null&&(G=Kt);const Tt=V.isMesh&&V.matrixWorld.determinant()<0,Ft=Op(A,G,$,Y,V);Mt.setMaterial(Y,Tt);let Bt=$.index,jt=1;if(Y.wireframe===!0){if(Bt=rt.getWireframeAttribute($),Bt===void 0)return;jt=2}const te=$.drawRange,zt=$.attributes.position;let he=te.start*jt,Se=(te.start+te.count)*jt;mt!==null&&(he=Math.max(he,mt.start*jt),Se=Math.min(Se,(mt.start+mt.count)*jt)),Bt!==null?(he=Math.max(he,0),Se=Math.min(Se,Bt.count)):zt!=null&&(he=Math.max(he,0),Se=Math.min(Se,zt.count));const Ee=Se-he;if(Ee<0||Ee===1/0)return;be.setup(V,Y,Ft,$,Bt);let gn,de=Nt;if(Bt!==null&&(gn=tt.get(Bt),de=oe,de.setIndex(gn)),V.isMesh)Y.wireframe===!0?(Mt.setLineWidth(Y.wireframeLinewidth*ft()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(V.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),Mt.setLineWidth(Gt*ft()),V.isLineSegments?de.setMode(U.LINES):V.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else V.isPoints?de.setMode(U.POINTS):V.isSprite&&de.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)de.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))de.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Gt=V._multiDrawStarts,ui=V._multiDrawCounts,fe=V._multiDrawCount,Vn=Bt?tt.get(Bt).bytesPerElement:1,Ls=Ct.get(Y).currentProgram.getUniforms();for(let Sn=0;Sn<fe;Sn++)Ls.setValue(U,"_gl_DrawID",Sn),de.render(Gt[Sn]/Vn,ui[Sn])}else if(V.isInstancedMesh)de.renderInstances(he,Ee,V.count);else if($.isInstancedBufferGeometry){const Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ui=Math.min($.instanceCount,Gt);de.renderInstances(he,Ee,ui)}else de.render(he,Ee)};function pe(A,G,$){A.transparent===!0&&A.side===je&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,_r(A,G,$),A.side=Ji,A.needsUpdate=!0,_r(A,G,$),A.side=je):_r(A,G,$)}this.compile=function(A,G,$=null){$===null&&($=A),g=ae.get($),g.init(G),y.push(g),$.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const Y=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){const Ft=mt[Tt];pe(Ft,$,V),Y.add(Ft)}else pe(mt,$,V),Y.add(mt)}),y.pop(),g=null,Y},this.compileAsync=function(A,G,$=null){const Y=this.compile(A,G,$);return new Promise(V=>{function mt(){if(Y.forEach(function(Tt){Ct.get(Tt).currentProgram.isReady()&&Y.delete(Tt)}),Y.size===0){V(A);return}setTimeout(mt,10)}ht.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Gn=null;function hi(A){Gn&&Gn(A)}function Lh(){ss.stop()}function Ih(){ss.start()}const ss=new Yf;ss.setAnimationLoop(hi),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(A){Gn=A,Z.setAnimationLoop(A),A===null?ss.stop():ss.start()},Z.addEventListener("sessionstart",Lh),Z.addEventListener("sessionend",Ih),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,G,M),g=ae.get(A,y.length),g.init(G),y.push(g),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k.setFromProjectionMatrix(at),ct=this.localClippingEnabled,q=pt.init(this.clippingPlanes,ct),p=Pt.get(A,S.length),p.init(),S.push(p),Z.enabled===!0&&Z.isPresenting===!0){const mt=_.xr.getDepthSensingMesh();mt!==null&&el(mt,G,-1/0,_.sortObjects)}el(A,G,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(H,K),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&Wt.addToRenderList(p,A),this.info.render.frame++,q===!0&&pt.beginShadows();const $=g.state.shadowsArray;Dt.render($,A,G),q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,V=p.transmissive;if(g.setupLights(),G.isArrayCamera){const mt=G.cameras;if(V.length>0)for(let Tt=0,Ft=mt.length;Tt<Ft;Tt++){const Bt=mt[Tt];Nh(Y,V,A,Bt)}nt&&Wt.render(A);for(let Tt=0,Ft=mt.length;Tt<Ft;Tt++){const Bt=mt[Tt];Dh(p,A,Bt,Bt.viewport)}}else V.length>0&&Nh(Y,V,A,G),nt&&Wt.render(A),Dh(p,A,G);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(_,A,G),be.resetDefaultState(),v=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],q===!0&&pt.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function el(A,G,$,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||k.intersectsSprite(A)){Y&&Rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const Tt=et.update(A),Ft=A.material;Ft.visible&&p.push(A,Tt,Ft,$,Rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||k.intersectsObject(A))){const Tt=et.update(A),Ft=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Rt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Rt.copy(Tt.boundingSphere.center)),Rt.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(Ft)){const Bt=Tt.groups;for(let jt=0,te=Bt.length;jt<te;jt++){const zt=Bt[jt],he=Ft[zt.materialIndex];he&&he.visible&&p.push(A,Tt,he,$,Rt.z,zt)}}else Ft.visible&&p.push(A,Tt,Ft,$,Rt.z,null)}}const mt=A.children;for(let Tt=0,Ft=mt.length;Tt<Ft;Tt++)el(mt[Tt],G,$,Y)}function Dh(A,G,$,Y){const V=A.opaque,mt=A.transmissive,Tt=A.transparent;g.setupLightsView($),q===!0&&pt.setGlobalState(_.clippingPlanes,$),Y&&Mt.viewport(R.copy(Y)),V.length>0&&vr(V,G,$),mt.length>0&&vr(mt,G,$),Tt.length>0&&vr(Tt,G,$),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Nh(A,G,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new jn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ei:Pi,minFilter:_s,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const mt=g.state.transmissionRenderTarget[Y.id],Tt=Y.viewport||R;mt.setSize(Tt.z,Tt.w);const Ft=_.getRenderTarget();_.setRenderTarget(mt),_.getClearColor(F),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Wt.render($);const Bt=_.toneMapping;_.toneMapping=Zi;const jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),q===!0&&pt.setGlobalState(_.clippingPlanes,Y),vr(A,$,Y),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let zt=0,he=G.length;zt<he;zt++){const Se=G[zt],Ee=Se.object,gn=Se.geometry,de=Se.material,Gt=Se.group;if(de.side===je&&Ee.layers.test(Y.layers)){const ui=de.side;de.side=mn,de.needsUpdate=!0,Uh(Ee,$,Y,gn,de,Gt),de.side=ui,de.needsUpdate=!0,te=!0}}te===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}_.setRenderTarget(Ft),_.setClearColor(F,X),jt!==void 0&&(Y.viewport=jt),_.toneMapping=Bt}function vr(A,G,$){const Y=G.isScene===!0?G.overrideMaterial:null;for(let V=0,mt=A.length;V<mt;V++){const Tt=A[V],Ft=Tt.object,Bt=Tt.geometry,jt=Y===null?Tt.material:Y,te=Tt.group;Ft.layers.test($.layers)&&Uh(Ft,G,$,Bt,jt,te)}}function Uh(A,G,$,Y,V,mt){A.onBeforeRender(_,G,$,Y,V,mt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(_,G,$,Y,A,mt),V.transparent===!0&&V.side===je&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,_.renderBufferDirect($,G,Y,V,A,mt),V.side=Ji,V.needsUpdate=!0,_.renderBufferDirect($,G,Y,V,A,mt),V.side=je):_.renderBufferDirect($,G,Y,V,A,mt),A.onAfterRender(_,G,$,Y,V,mt)}function _r(A,G,$){G.isScene!==!0&&(G=Kt);const Y=Ct.get(A),V=g.state.lights,mt=g.state.shadowsArray,Tt=V.state.version,Ft=Ot.getParameters(A,V.state,mt,G,$),Bt=Ot.getProgramCacheKey(Ft);let jt=Y.programs;Y.environment=A.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(A.isMeshStandardMaterial?W:E).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",Qt),jt=new Map,Y.programs=jt);let te=jt.get(Bt);if(te!==void 0){if(Y.currentProgram===te&&Y.lightsStateVersion===Tt)return Oh(A,Ft),te}else Ft.uniforms=Ot.getUniforms(A),A.onBeforeCompile(Ft,_),te=Ot.acquireProgram(Ft,Bt),jt.set(Bt,te),Y.uniforms=Ft.uniforms;const zt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=pt.uniform),Oh(A,Ft),Y.needsLights=Bp(A),Y.lightsStateVersion=Tt,Y.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=te,Y.uniformsList=null,te}function kh(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=go.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Oh(A,G){const $=Ct.get(A);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Op(A,G,$,Y,V){G.isScene!==!0&&(G=Kt),P.resetTextureUnits();const mt=G.fog,Tt=Y.isMeshStandardMaterial?G.environment:null,Ft=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:_a,Bt=(Y.isMeshStandardMaterial?W:E).get(Y.envMap||Tt),jt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color;let Ee=Zi;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ee=_.toneMapping);const gn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,de=gn!==void 0?gn.length:0,Gt=Ct.get(Y),ui=g.state.lights;if(q===!0&&(ct===!0||A!==b)){const Cn=A===b&&Y.id===v;pt.setState(Y,A,Cn)}let fe=!1;Y.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ui.state.version||Gt.outputColorSpace!==Ft||V.isBatchedMesh&&Gt.batching===!1||!V.isBatchedMesh&&Gt.batching===!0||V.isBatchedMesh&&Gt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Gt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Gt.instancing===!1||!V.isInstancedMesh&&Gt.instancing===!0||V.isSkinnedMesh&&Gt.skinning===!1||!V.isSkinnedMesh&&Gt.skinning===!0||V.isInstancedMesh&&Gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Gt.instancingMorph===!1&&V.morphTexture!==null||Gt.envMap!==Bt||Y.fog===!0&&Gt.fog!==mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==jt||Gt.vertexTangents!==te||Gt.morphTargets!==zt||Gt.morphNormals!==he||Gt.morphColors!==Se||Gt.toneMapping!==Ee||Gt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Gt.__version=Y.version);let Vn=Gt.currentProgram;fe===!0&&(Vn=_r(Y,G,V));let Ls=!1,Sn=!1,Ta=!1;const Te=Vn.getUniforms(),ti=Gt.uniforms;if(Mt.useProgram(Vn.program)&&(Ls=!0,Sn=!0,Ta=!0),Y.id!==v&&(v=Y.id,Sn=!0),Ls||b!==A){Mt.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),sg(it),ag(it),Te.setValue(U,"projectionMatrix",it)):Te.setValue(U,"projectionMatrix",A.projectionMatrix),Te.setValue(U,"viewMatrix",A.matrixWorldInverse);const Ni=Te.map.cameraPosition;Ni!==void 0&&Ni.setValue(U,gt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Te.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Sn=!0,Ta=!0)}if(V.isSkinnedMesh){Te.setOptional(U,V,"bindMatrix"),Te.setOptional(U,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Te.setValue(U,"boneTexture",Cn.boneTexture,P))}V.isBatchedMesh&&(Te.setOptional(U,V,"batchingTexture"),Te.setValue(U,"batchingTexture",V._matricesTexture,P),Te.setOptional(U,V,"batchingIdTexture"),Te.setValue(U,"batchingIdTexture",V._indirectTexture,P),Te.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Te.setValue(U,"batchingColorTexture",V._colorsTexture,P));const Aa=$.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&$t.update(V,$,Vn),(Sn||Gt.receiveShadow!==V.receiveShadow)&&(Gt.receiveShadow=V.receiveShadow,Te.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ti.envMap.value=Bt,ti.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(ti.envMapIntensity.value=G.environmentIntensity),Sn&&(Te.setValue(U,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&Fp(ti,Ta),mt&&Y.fog===!0&&St.refreshFogUniforms(ti,mt),St.refreshMaterialUniforms(ti,Y,N,B,g.state.transmissionRenderTarget[A.id]),go.upload(U,kh(Gt),ti,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(go.upload(U,kh(Gt),ti,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(U,"center",V.center),Te.setValue(U,"modelViewMatrix",V.modelViewMatrix),Te.setValue(U,"normalMatrix",V.normalMatrix),Te.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Cn=Y.uniformsGroups;for(let Ni=0,Ui=Cn.length;Ni<Ui;Ni++){const Fh=Cn[Ni];z.update(Fh,Vn),z.bind(Fh,Vn)}}return Vn}function Fp(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Bp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,G,$){Ct.get(A.texture).__webglTexture=G,Ct.get(A.depthTexture).__webglTexture=$;const Y=Ct.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const $=Ct.get(A);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,$=0){M=A,w=G,T=$;let Y=!0,V=null,mt=!1,Tt=!1;if(A){const Bt=Ct.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Bt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Bt.__hasExternalTextures)P.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Bt.__boundDepthTexture!==zt){if(zt!==null&&Ct.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Tt=!0);const te=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[G])?V=te[G][$]:V=te[G],mt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?V=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?V=te[$]:V=te,R.copy(A.viewport),I.copy(A.scissor),O=A.scissorTest}else R.copy(j).multiplyScalar(N).floor(),I.copy(ot).multiplyScalar(N).floor(),O=ut;if(Mt.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&Mt.drawBuffers(A,V),Mt.viewport(R),Mt.scissor(I),Mt.setScissorTest(O),mt){const Bt=Ct.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,$)}else if(Tt){const Bt=Ct.get(A.texture),jt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,$||0,jt)}v=-1},this.readRenderTargetPixels=function(A,G,$,Y,V,mt,Tt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){Mt.bindFramebuffer(U.FRAMEBUFFER,Ft);try{const Bt=A.texture,jt=Bt.format,te=Bt.type;if(!Lt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&$>=0&&$<=A.height-V&&U.readPixels(G,$,Y,V,ne.convert(jt),ne.convert(te),mt)}finally{const Bt=M!==null?Ct.get(M).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,G,$,Y,V,mt,Tt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){const Bt=A.texture,jt=Bt.format,te=Bt.type;if(!Lt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-Y&&$>=0&&$<=A.height-V){Mt.bindFramebuffer(U.FRAMEBUFFER,Ft);const zt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,zt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(G,$,Y,V,ne.convert(jt),ne.convert(te),0);const he=M!==null?Ct.get(M).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,he);const Se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ig(U,Se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,zt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.deleteBuffer(zt),U.deleteSync(Se),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,$=0){A.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-$),V=Math.floor(A.image.width*Y),mt=Math.floor(A.image.height*Y),Tt=G!==null?G.x:0,Ft=G!==null?G.y:0;P.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Tt,Ft,V,mt),Mt.unbindTexture()},this.copyTextureToTexture=function(A,G,$=null,Y=null,V=0){A.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],G=arguments[2],V=arguments[3]||0,$=null);let mt,Tt,Ft,Bt,jt,te,zt,he,Se;const Ee=A.isCompressedTexture?A.mipmaps[V]:A.image;$!==null?(mt=$.max.x-$.min.x,Tt=$.max.y-$.min.y,Ft=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,jt=$.min.y,te=$.isBox3?$.min.z:0):(mt=Ee.width,Tt=Ee.height,Ft=Ee.depth||1,Bt=0,jt=0,te=0),Y!==null?(zt=Y.x,he=Y.y,Se=Y.z):(zt=0,he=0,Se=0);const gn=ne.convert(G.format),de=ne.convert(G.type);let Gt;G.isData3DTexture?(P.setTexture3D(G,0),Gt=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Gt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const ui=U.getParameter(U.UNPACK_ROW_LENGTH),fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Vn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ls=U.getParameter(U.UNPACK_SKIP_ROWS),Sn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,te);const Ta=A.isDataArrayTexture||A.isData3DTexture,Te=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const ti=Ct.get(A),Aa=Ct.get(G),Cn=Ct.get(ti.__renderTarget),Ni=Ct.get(Aa.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ui=0;Ui<Ft;Ui++)Ta&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,V,te+Ui),A.isDepthTexture?(Te&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(G).__webglTexture,V,Se+Ui),U.blitFramebuffer(Bt,jt,mt,Tt,zt,he,mt,Tt,U.DEPTH_BUFFER_BIT,U.NEAREST)):Te?U.copyTexSubImage3D(Gt,V,zt,he,Se+Ui,Bt,jt,mt,Tt):U.copyTexSubImage2D(Gt,V,zt,he,Se+Ui,Bt,jt,mt,Tt);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Te?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Gt,V,zt,he,Se,mt,Tt,Ft,gn,de,Ee.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Gt,V,zt,he,Se,mt,Tt,Ft,gn,Ee.data):U.texSubImage3D(Gt,V,zt,he,Se,mt,Tt,Ft,gn,de,Ee):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,zt,he,mt,Tt,gn,de,Ee.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,zt,he,Ee.width,Ee.height,gn,Ee.data):U.texSubImage2D(U.TEXTURE_2D,V,zt,he,mt,Tt,gn,de,Ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ls),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Sn),V===0&&G.generateMipmaps&&U.generateMipmap(Gt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,$=null,Y=null,V=0){return A.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],G=arguments[3],V=arguments[4]||0),za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,$,Y,V)},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,Mt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class Vo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eo extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new L;class To{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),a=Me(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vc extends ns{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qs;const Ia=new L,$s=new L,Ys=new L,Ks=new Q,Da=new Q,tp=new ce,Vr=new L,Na=new L,Wr=new L,Qu=new Q,kl=new Q,td=new Q;class ed extends De{constructor(t=new Vc){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new p_(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new To(n,3,0,!1)),qs.setAttribute("uv",new To(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),tp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ys.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Xr(Vr.set(-.5,-.5,0),Ys,r,$s,s,a),Xr(Na.set(.5,-.5,0),Ys,r,$s,s,a),Xr(Wr.set(.5,.5,0),Ys,r,$s,s,a),Qu.set(0,0),kl.set(1,0),td.set(1,1);let o=t.ray.intersectTriangle(Vr,Na,Wr,!1,Ia);if(o===null&&(Xr(Na.set(-.5,.5,0),Ys,r,$s,s,a),kl.set(0,1),o=t.ray.intersectTriangle(Vr,Wr,Na,!1,Ia),o===null))return;const l=t.ray.origin.distanceTo(Ia);l<t.near||l>t.far||e.push({distance:l,point:Ia.clone(),uv:Un.getInterpolation(Ia,Vr,Na,Wr,Qu,kl,td,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,a){Ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Da.x=a*Ks.x-s*Ks.y,Da.y=s*Ks.x+a*Ks.y):Da.copy(Ks),i.copy(t),i.x+=Da.x,i.y+=Da.y,i.applyMatrix4(tp)}class m_ extends ln{constructor(t=null,e=1,n=1,s,a,r,o,l,c=Rn,h=Rn,u,f){super(null,r,o,l,c,h,s,a,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nd extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const js=new ce,id=new ce,qr=[],sd=new Li,g_=new ce,Ua=new lt,ka=new Ii;class ep extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),sd.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(sd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),ka.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(ka)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(n),t.ray.intersectsSphere(ka)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,js),id.multiplyMatrices(n,js),Ua.matrixWorld=id,Ua.raycast(t,qr);for(let r=0,o=qr.length;r<o;r++){const l=qr[r];l.instanceId=a,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new m_(new Float32Array(s*this.count),s,this.count,fh,li));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yh extends ns{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new L,Ro=new L,ad=new ce,Oa=new zo,$r=new Ii,Ol=new L,rd=new L;class np extends De{constructor(t=new _e,e=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)Ao.fromBufferAttribute(e,s-1),Ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ao.distanceTo(Ro);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=a,t.ray.intersectsSphere($r)===!1)return;ad.copy(s).invert(),Oa.copy(t.ray).applyMatrix4(ad);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=c){const g=h.getX(x),S=h.getX(x+1),y=Yr(this,t,Oa,l,g,S);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(d),g=Yr(this,t,Oa,l,x,p);g&&e.push(g)}}else{const d=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=c){const g=Yr(this,t,Oa,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Yr(this,t,Oa,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Yr(i,t,e,n,s,a){const r=i.geometry.attributes.position;if(Ao.fromBufferAttribute(r,s),Ro.fromBufferAttribute(r,a),e.distanceSqToSegment(Ao,Ro,Ol,rd)>n)return;Ol.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ol);if(!(l<t.near||l>t.far))return{distance:l,point:rd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const od=new L,ld=new L;class x_ extends np{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)od.fromBufferAttribute(e,s),ld.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+od.distanceTo(ld);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ip extends ns{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cd=new ce,Wc=new zo,Kr=new Ii,jr=new L;class M_ extends De{constructor(t=new _e,e=new ip){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=a,t.ray.intersectsSphere(Kr)===!1)return;cd.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(cd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let m=f,x=d;m<x;m++){const p=c.getX(m);jr.fromBufferAttribute(u,p),hd(jr,p,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=f,x=d;m<x;m++)jr.fromBufferAttribute(u,m),hd(jr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function hd(i,t,e,n,s,a,r){const o=Wc.distanceSqToPoint(i);if(o<e){const l=new L;Wc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class bh extends ln{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],f=n[s+1]-h,d=(r-h)/f;return(s+d)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new Q:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],a=[],r=[],o=new L,l=new ce;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new L)}a[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,m))}r[d].crossVectors(s[d],a[d])}if(e===!0){let d=Math.acos(Ye(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let m=1;m<=t;m++)a[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],a[m])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sh extends Hn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v_ extends Sh{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function wh(){let i=0,t=0,e=0,n=0;function s(a,r,o,l){i=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let f=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+u)+(l-o)/u;f*=h,d*=h,s(r,o,f,d)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const Zr=new L,Fl=new wh,Bl=new wh,zl=new wh;class sp extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(Zr.subVectors(s[0],s[1]).add(s[0]),c=Zr);const u=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Zr.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Fl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,p),Bl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,p),zl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Bl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),zl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Fl.calc(l),Bl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ud(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*i+e}function __(i,t){const e=1-i;return e*e*t}function y_(i,t){return 2*(1-i)*i*t}function b_(i,t){return i*i*t}function qa(i,t,e,n){return __(i,t)+y_(i,e)+b_(i,n)}function S_(i,t){const e=1-i;return e*e*e*t}function w_(i,t){const e=1-i;return 3*e*e*i*t}function E_(i,t){return 3*(1-i)*i*i*t}function T_(i,t){return i*i*i*t}function $a(i,t,e,n,s){return S_(i,t)+w_(i,e)+E_(i,n)+T_(i,s)}class ap extends Hn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($a(t,s.x,a.x,r.x,o.x),$a(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A_ extends Hn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($a(t,s.x,a.x,r.x,o.x),$a(t,s.y,a.y,r.y,o.y),$a(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rp extends Hn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R_ extends Hn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class op extends Hn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(qa(t,s.x,a.x,r.x),qa(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends Hn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(qa(t,s.x,a.x,r.x),qa(t,s.y,a.y,r.y),qa(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cp extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(ud(o,l.x,c.x,h.x,u.x),ud(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:v_,CatmullRomCurve3:sp,CubicBezierCurve:ap,CubicBezierCurve3:A_,EllipseCurve:Sh,LineCurve:rp,LineCurve3:R_,QuadraticBezierCurve:op,QuadraticBezierCurve3:lp,SplineCurve:cp});class C_ extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}}class ar extends C_{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new rp(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new op(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new ap(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,a,r,o,l),this}absellipse(t,e,n,s,a,r,o,l){const c=new Sh(t,e,n,s,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ys extends _e{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/e,u=new L,f=new Q,d=new L,m=new L,x=new L;let p=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let S=0;S<=e;S++){const y=n+S*h*s,_=Math.sin(y),C=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*C,r.push(u.x,u.y,u.z),f.x=S/e,f.y=w/(t.length-1),o.push(f.x,f.y);const T=l[3*w+0]*_,M=l[3*w+1],v=l[3*w+0]*C;c.push(T,M,v)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const _=y+S*t.length,C=_,w=_+t.length,T=_+t.length+1,M=_+1;a.push(C,w,M),a.push(T,M,w)}this.setIndex(a),this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.points,t.segments,t.phiStart,t.phiLength)}}class ma extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new L,h=new Q;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bt extends _e{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],f=[],d=[];let m=0;const x=[],p=n/2;let g=0;S(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function S(){const _=new L,C=new L;let w=0;const T=(e-t)/n;for(let M=0;M<=a;M++){const v=[],b=M/a,R=b*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,F=O*l+o,X=Math.sin(F),D=Math.cos(F);C.x=R*X,C.y=-b*n+p,C.z=R*D,u.push(C.x,C.y,C.z),_.set(X,T,D).normalize(),f.push(_.x,_.y,_.z),d.push(O,1-b),v.push(m++)}x.push(v)}for(let M=0;M<s;M++)for(let v=0;v<a;v++){const b=x[v][M],R=x[v+1][M],I=x[v+1][M+1],O=x[v][M+1];(t>0||v!==0)&&(h.push(b,R,O),w+=3),(e>0||v!==a-1)&&(h.push(R,I,O),w+=3)}c.addGroup(g,w,0),g+=w}function y(_){const C=m,w=new Q,T=new L;let M=0;const v=_===!0?t:e,b=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*b,0),f.push(0,b,0),d.push(.5,.5),m++;const R=m;for(let I=0;I<=s;I++){const F=I/s*l+o,X=Math.cos(F),D=Math.sin(F);T.x=v*D,T.y=p*b,T.z=v*X,u.push(T.x,T.y,T.z),f.push(0,b,0),w.x=X*.5+.5,w.y=D*.5*b+.5,d.push(w.x,w.y),m++}for(let I=0;I<s;I++){const O=C+I,F=R+I;_===!0?h.push(F,F+1,O):h.push(F+1,F,O),M+=3}c.addGroup(g,M,_===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Di extends bt{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Di(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(a.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new L,_=new L,C=new L;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],_),d(e[w+2],C),l(y,_,C,S)}function l(S,y,_,C){const w=C+1,T=[];for(let M=0;M<=w;M++){T[M]=[];const v=S.clone().lerp(_,M/w),b=y.clone().lerp(_,M/w),R=w-M;for(let I=0;I<=R;I++)I===0&&M===w?T[M][I]=v:T[M][I]=v.clone().lerp(b,I/R)}for(let M=0;M<w;M++)for(let v=0;v<2*(w-M)-1;v++){const b=Math.floor(v/2);v%2===0?(f(T[M][b+1]),f(T[M+1][b]),f(T[M][b])):(f(T[M][b+1]),f(T[M+1][b+1]),f(T[M+1][b]))}}function c(S){const y=new L;for(let _=0;_<a.length;_+=3)y.x=a[_+0],y.y=a[_+1],y.z=a[_+2],y.normalize().multiplyScalar(S),a[_+0]=y.x,a[_+1]=y.y,a[_+2]=y.z}function h(){const S=new L;for(let y=0;y<a.length;y+=3){S.x=a[y+0],S.y=a[y+1],S.z=a[y+2];const _=p(S)/2/Math.PI+.5,C=g(S)/Math.PI+.5;r.push(_,1-C)}m(),u()}function u(){for(let S=0;S<r.length;S+=6){const y=r[S+0],_=r[S+2],C=r[S+4],w=Math.max(y,_,C),T=Math.min(y,_,C);w>.9&&T<.1&&(y<.2&&(r[S+0]+=1),_<.2&&(r[S+2]+=1),C<.2&&(r[S+4]+=1))}}function f(S){a.push(S.x,S.y,S.z)}function d(S,y){const _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const S=new L,y=new L,_=new L,C=new L,w=new Q,T=new Q,M=new Q;for(let v=0,b=0;v<a.length;v+=9,b+=6){S.set(a[v+0],a[v+1],a[v+2]),y.set(a[v+3],a[v+4],a[v+5]),_.set(a[v+6],a[v+7],a[v+8]),w.set(r[b+0],r[b+1]),T.set(r[b+2],r[b+3]),M.set(r[b+4],r[b+5]),C.copy(S).add(y).add(_).divideScalar(3);const R=p(C);x(w,b+0,S,R),x(T,b+2,y,R),x(M,b+4,_,R)}}function x(S,y,_,C){C<0&&S.x===1&&(r[y]=S.x-1),_.x===0&&_.z===0&&(r[y]=C/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.vertices,t.indices,t.radius,t.details)}}class Wo extends Sa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wo(t.radius,t.detail)}}class tn extends ar{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ar().fromJSON(s))}return this}}const P_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=hp(i,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c,h,u,f,d;if(n&&(a=U_(i,t,a,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return rr(a,r,e,o,l,d,0),r}};function hp(i,t,e,n,s){let a,r;if(s===q_(i,t,e,n)>0)for(a=t;a<e;a+=n)r=dd(a,i[a],i[a+1],r);else for(a=e-n;a>=t;a-=n)r=dd(a,i[a],i[a+1],r);return r&&Xo(r,r.next)&&(lr(r),r=r.next),r}function Es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rr(i,t,e,n,s,a,r){if(!i)return;!r&&a&&z_(i,n,s,a);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,a?I_(i,n,s,a):L_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=D_(Es(i),t,e),rr(i,t,e,n,s,a,2)):r===2&&N_(i,t,e,n,s,a):rr(Es(i),t,e,n,s,a,1);break}}}function L_(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=s<a?s<r?s:r:a<r?a:r,u=o<l?o<c?o:c:l<c?l:c,f=s>a?s>r?s:r:a>r?a:r,d=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ta(s,o,a,l,r,c,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function I_(i,t,e,n){const s=i.prev,a=i,r=i.next;if(Pe(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,u=a.y,f=r.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=Xc(d,m,t,e,n),S=Xc(x,p,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=g&&_&&_.z<=S;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==r&&ta(o,h,l,u,c,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==r&&ta(o,h,l,u,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==r&&ta(o,h,l,u,c,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==r&&ta(o,h,l,u,c,f,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D_(i,t,e){let n=i;do{const s=n.prev,a=n.next.next;!Xo(s,a)&&up(s,n,n.next,a)&&or(s,a)&&or(a,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(a.i/e|0),lr(n),lr(n.next),n=i=a),n=n.next}while(n!==i);return Es(n)}function N_(i,t,e,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&V_(r,o)){let l=dp(r,o);r=Es(r,r.next),l=Es(l,l.next),rr(r,t,e,n,s,a,0),rr(l,t,e,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function U_(i,t,e,n){const s=[];let a,r,o,l,c;for(a=0,r=t.length;a<r;a++)o=t[a]*n,l=a<r-1?t[a+1]*n:i.length,c=hp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(G_(c));for(s.sort(k_),a=0;a<s.length;a++)e=O_(s[a],e);return e}function k_(i,t){return i.x-t.x}function O_(i,t){const e=F_(i,t);if(!e)return t;const n=dp(e,i);return Es(n,n.next),Es(e,e.next)}function F_(i,t){let e=t,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=a&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===a))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do a>=e.x&&e.x>=l&&a!==e.x&&ta(r<c?a:n,r,l,c,r<c?n:a,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(a-e.x),or(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&B_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function B_(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function z_(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,H_(s)}function H_(i){let t,e,n,s,a,r,o,l,c=1;do{for(e=i,i=null,a=null,r=0;e;){for(r++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;e=n}a.nextZ=null,c*=2}while(r>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ta(i,t,e,n,s,a,r,o){return(s-r)*(t-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(n-o)}function V_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!W_(i,t)&&(or(i,t)&&or(t,i)&&X_(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Xo(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xo(i,t){return i.x===t.x&&i.y===t.y}function up(i,t,e,n){const s=Qr(Pe(i,t,e)),a=Qr(Pe(i,t,n)),r=Qr(Pe(e,n,i)),o=Qr(Pe(e,n,t));return!!(s!==a&&r!==o||s===0&&Jr(i,e,t)||a===0&&Jr(i,n,t)||r===0&&Jr(e,i,n)||o===0&&Jr(e,t,n))}function Jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qr(i){return i>0?1:i<0?-1:0}function W_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&up(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function X_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dp(i,t){const e=new qc(i.i,i.x,i.y),n=new qc(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function dd(i,t,e,n){const s=new qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q_(i,t,e,n){let s=0;for(let a=t,r=e-n;a<e;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class Ya{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return Ya.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];fd(t),pd(n,t);let r=t.length;e.forEach(fd);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,pd(n,e[l]);const o=P_.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function fd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jn extends _e{constructor(t=new tn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:$_;let y,_=!1,C,w,T,M;g&&(y=g.getSpacedPoints(h),_=!0,f=!1,C=g.computeFrenetFrames(h,!1),w=new L,T=new L,M=new L),f||(p=0,d=0,m=0,x=0);const v=o.extractPoints(c);let b=v.shape;const R=v.holes;if(!Ya.isClockWise(b)){b=b.reverse();for(let nt=0,ft=R.length;nt<ft;nt++){const U=R[nt];Ya.isClockWise(U)&&(R[nt]=U.reverse())}}const O=Ya.triangulateShape(b,R),F=b;for(let nt=0,ft=R.length;nt<ft;nt++){const U=R[nt];b=b.concat(U)}function X(nt,ft,U){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ft,U)}const D=b.length,B=O.length;function N(nt,ft,U){let kt,ht,Lt;const Mt=nt.x-ft.x,Vt=nt.y-ft.y,Ct=U.x-nt.x,P=U.y-nt.y,E=Mt*Mt+Vt*Vt,W=Mt*P-Vt*Ct;if(Math.abs(W)>Number.EPSILON){const tt=Math.sqrt(E),rt=Math.sqrt(Ct*Ct+P*P),et=ft.x-Vt/tt,Ot=ft.y+Mt/tt,St=U.x-P/rt,Pt=U.y+Ct/rt,ae=((St-et)*P-(Pt-Ot)*Ct)/(Mt*P-Vt*Ct);kt=et+Mt*ae-nt.x,ht=Ot+Vt*ae-nt.y;const pt=kt*kt+ht*ht;if(pt<=2)return new Q(kt,ht);Lt=Math.sqrt(pt/2)}else{let tt=!1;Mt>Number.EPSILON?Ct>Number.EPSILON&&(tt=!0):Mt<-Number.EPSILON?Ct<-Number.EPSILON&&(tt=!0):Math.sign(Vt)===Math.sign(P)&&(tt=!0),tt?(kt=-Vt,ht=Mt,Lt=Math.sqrt(E)):(kt=Mt,ht=Vt,Lt=Math.sqrt(E/2))}return new Q(kt/Lt,ht/Lt)}const H=[];for(let nt=0,ft=F.length,U=ft-1,kt=nt+1;nt<ft;nt++,U++,kt++)U===ft&&(U=0),kt===ft&&(kt=0),H[nt]=N(F[nt],F[U],F[kt]);const K=[];let j,ot=H.concat();for(let nt=0,ft=R.length;nt<ft;nt++){const U=R[nt];j=[];for(let kt=0,ht=U.length,Lt=ht-1,Mt=kt+1;kt<ht;kt++,Lt++,Mt++)Lt===ht&&(Lt=0),Mt===ht&&(Mt=0),j[kt]=N(U[kt],U[Lt],U[Mt]);K.push(j),ot=ot.concat(j)}for(let nt=0;nt<p;nt++){const ft=nt/p,U=d*Math.cos(ft*Math.PI/2),kt=m*Math.sin(ft*Math.PI/2)+x;for(let ht=0,Lt=F.length;ht<Lt;ht++){const Mt=X(F[ht],H[ht],kt);it(Mt.x,Mt.y,-U)}for(let ht=0,Lt=R.length;ht<Lt;ht++){const Mt=R[ht];j=K[ht];for(let Vt=0,Ct=Mt.length;Vt<Ct;Vt++){const P=X(Mt[Vt],j[Vt],kt);it(P.x,P.y,-U)}}}const ut=m+x;for(let nt=0;nt<D;nt++){const ft=f?X(b[nt],ot[nt],ut):b[nt];_?(T.copy(C.normals[0]).multiplyScalar(ft.x),w.copy(C.binormals[0]).multiplyScalar(ft.y),M.copy(y[0]).add(T).add(w),it(M.x,M.y,M.z)):it(ft.x,ft.y,0)}for(let nt=1;nt<=h;nt++)for(let ft=0;ft<D;ft++){const U=f?X(b[ft],ot[ft],ut):b[ft];_?(T.copy(C.normals[nt]).multiplyScalar(U.x),w.copy(C.binormals[nt]).multiplyScalar(U.y),M.copy(y[nt]).add(T).add(w),it(M.x,M.y,M.z)):it(U.x,U.y,u/h*nt)}for(let nt=p-1;nt>=0;nt--){const ft=nt/p,U=d*Math.cos(ft*Math.PI/2),kt=m*Math.sin(ft*Math.PI/2)+x;for(let ht=0,Lt=F.length;ht<Lt;ht++){const Mt=X(F[ht],H[ht],kt);it(Mt.x,Mt.y,u+U)}for(let ht=0,Lt=R.length;ht<Lt;ht++){const Mt=R[ht];j=K[ht];for(let Vt=0,Ct=Mt.length;Vt<Ct;Vt++){const P=X(Mt[Vt],j[Vt],kt);_?it(P.x,P.y+y[h-1].y,y[h-1].x+U):it(P.x,P.y,u+U)}}}k(),q();function k(){const nt=s.length/3;if(f){let ft=0,U=D*ft;for(let kt=0;kt<B;kt++){const ht=O[kt];at(ht[2]+U,ht[1]+U,ht[0]+U)}ft=h+p*2,U=D*ft;for(let kt=0;kt<B;kt++){const ht=O[kt];at(ht[0]+U,ht[1]+U,ht[2]+U)}}else{for(let ft=0;ft<B;ft++){const U=O[ft];at(U[2],U[1],U[0])}for(let ft=0;ft<B;ft++){const U=O[ft];at(U[0]+D*h,U[1]+D*h,U[2]+D*h)}}n.addGroup(nt,s.length/3-nt,0)}function q(){const nt=s.length/3;let ft=0;ct(F,ft),ft+=F.length;for(let U=0,kt=R.length;U<kt;U++){const ht=R[U];ct(ht,ft),ft+=ht.length}n.addGroup(nt,s.length/3-nt,1)}function ct(nt,ft){let U=nt.length;for(;--U>=0;){const kt=U;let ht=U-1;ht<0&&(ht=nt.length-1);for(let Lt=0,Mt=h+p*2;Lt<Mt;Lt++){const Vt=D*Lt,Ct=D*(Lt+1),P=ft+kt+Vt,E=ft+ht+Vt,W=ft+ht+Ct,tt=ft+kt+Ct;gt(P,E,W,tt)}}}function it(nt,ft,U){l.push(nt),l.push(ft),l.push(U)}function at(nt,ft,U){Rt(nt),Rt(ft),Rt(U);const kt=s.length/3,ht=S.generateTopUV(n,s,kt-3,kt-2,kt-1);Kt(ht[0]),Kt(ht[1]),Kt(ht[2])}function gt(nt,ft,U,kt){Rt(nt),Rt(ft),Rt(kt),Rt(ft),Rt(U),Rt(kt);const ht=s.length/3,Lt=S.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);Kt(Lt[0]),Kt(Lt[1]),Kt(Lt[3]),Kt(Lt[1]),Kt(Lt[2]),Kt(Lt[3])}function Rt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Kt(nt){a.push(nt.x),a.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Y_(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new Jn(n,t.options)}}const $_={generateTopUV:function(i,t,e,n,s){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(a,r),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[a*3],p=t[a*3+1],g=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new Q(r,1-l),new Q(c,1-u),new Q(f,1-m),new Q(x,1-g)]:[new Q(o,1-l),new Q(h,1-u),new Q(d,1-m),new Q(p,1-g)]}};function Y_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qo extends Sa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class Qi extends Sa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qi(t.radius,t.detail)}}class $o extends _e{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new L,m=new Q;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const g=a+p/n*r;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){const p=x*(n+1);for(let g=0;g<n;g++){const S=g+p,y=S,_=S+n+1,C=S+n+2,w=S+1;o.push(y,_,w),o.push(_,C,w)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zn extends _e{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const S=[],y=g/n;let _=0;g===0&&r===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(s+w*a)*Math.sin(r+y*o),u.y=t*Math.cos(r+y*o),u.z=t*Math.sin(s+w*a)*Math.sin(r+y*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(w+_,1-y),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const y=h[g][S+1],_=h[g][S],C=h[g+1][S],w=h[g+1][S+1];(g!==0||r>0)&&d.push(y,_,w),(g!==n-1||l<Math.PI)&&d.push(_,C,w)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yo extends Sa{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yo(t.radius,t.detail)}}class Zt extends _e{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*a,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,S=(s+1)*d+m;r.push(x,p,S),r.push(p,g,S)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wa extends _e{constructor(t=new lp(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new L,l=new L,c=new Q;let h=new L;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function x(){for(let y=0;y<e;y++)p(y);p(a===!1?e:0),S(),g()}function p(y){h=t.getPointAt(y/e,h);const _=r.normals[y],C=r.binormals[y];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,M=Math.sin(T),v=-Math.cos(T);l.x=v*_.x+M*C.x,l.y=v*_.y+M*C.y,l.z=v*_.z+M*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const C=(s+1)*(y-1)+(_-1),w=(s+1)*y+(_-1),T=(s+1)*y+_,M=(s+1)*(y-1)+_;m.push(C,w,M),m.push(w,T,M)}}function S(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wa(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K_ extends pn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class re extends ns{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $c extends re{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Eh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class fp extends Eh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hl=new ce,md=new L,gd=new L;class pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xd=new ce,Fa=new L,Gl=new L;class j_ extends pp{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Fa.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fa),Gl.copy(n.position),Gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gl),n.updateMatrixWorld(),s.makeTranslation(-Fa.x,-Fa.y,-Fa.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class ga extends Eh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Z_ extends pp{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends Eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Z_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Md();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Md(){return performance.now()}const vd=new ce;class Q_{constructor(t,e,n=0,s=1/0){this.ray=new zo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(_d),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)Kc(t[s],this,n,e);return n.sort(_d),n}}function _d(i,t){return i.distance-t.distance}function Kc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Kc(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);class mp extends Eo{constructor(){super();const t=new Ht;t.deleteAttribute("uv");const e=new re({side:mn}),n=new re,s=new ga(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new lt(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new lt(t,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new lt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new lt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new lt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new lt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new lt(t,Zs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new lt(t,Zs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new lt(t,Zs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const x=new lt(t,Zs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new lt(t,Zs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const g=new lt(t,Zs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zs(i){const t=new Re;return t.color.setScalar(i),t}const gp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ty=new vh(-1,1,1,-1,0,1);class ey extends _e{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const ny=new ey;class Th{constructor(t){this._mesh=new lt(ny,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ty)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class iy extends Ea{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sr.clone(t.uniforms),this.material=new pn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Th(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yd extends Ea{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class sy extends Ea{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class xp{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new iy(gp),this.copyPass.material.blending=wi,this.clock=new J_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yd!==void 0&&(r instanceof yd?n=!0:r instanceof sy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ay={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mp extends Ea{constructor(){super();const t=ay;this.uniforms=sr.clone(t.uniforms),this.material=new K_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Th(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ef?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vp extends Ea{constructor(t,e,n=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const ry={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ts extends Ea{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new jn(a,r,{type:Ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new jn(a,r,{type:Ei});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new jn(a,r,{type:Ei});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}const o=ry;this.highPassUniforms=sr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=gp;this.copyUniforms=sr.clone(h.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new Re,this.fsQuad=new Th(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new pn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ts.BlurDirectionX=new Q(1,0);Ts.BlurDirectionY=new Q(0,1);const Fn=i=>Math.min(1,Math.max(0,i)),Ss=i=>1-Math.pow(1-Fn(i),3),Ut=(i,t)=>i+Math.random()*(t-i),Be=Math.PI*2,Qn=(i,t=1.5,e=1381916)=>new re({color:e,emissive:i,emissiveIntensity:t,roughness:.3,metalness:.6,flatShading:!0}),_p=()=>new re({color:2303534,roughness:.35,metalness:.9,flatShading:!0}),fr=(i,t,e=.18,n=.25)=>Ss(i/e)*Fn((t-i)/n),pr=(i,t,e)=>{let n=i*t;for(;n>0;)(n>=1||Math.random()<n)&&e(),n-=1};function oy(i){const t=new xt,e=new xt,n=Qn(16734751,2),s=Qn(16761466,2.4),a=[];for(let o=0;o<10;o++){const l=new xt;l.rotation.y=o/10*Be;const c=new lt(new Di(.42,o%2?3.4:2.4,3),o%2?n:s);c.geometry.translate(0,(o%2?3.4:2.4)/2,0),c.position.set(1.25,.4,0),c.rotation.z=-(o%2?.95:.5),c.castShadow=!0,l.add(c),e.add(l),a.push(c)}const r=[];for(let o=0;o<7;o++){const l=new lt(new Wo(Ut(.22,.42),0),n);l.castShadow=!0,t.add(l),r.push({m:l,r:Ut(2.6,4.2),h:Ut(.8,3.2),sp:Ut(2.5,4.5)*(o%2?1:-1),ph:Ut(0,Be)})}return t.add(e),{group:t,dur:i,follow:!0,update(o,l,c){const h=fr(o,i,.22,.35);e.rotation.y=o*3.6,e.scale.setScalar(Math.max(.001,h)),a.forEach((u,f)=>u.scale.y=.8+.3*Math.sin(o*14+f*1.9));for(const u of r){const f=u.ph+o*u.sp;u.m.position.set(Math.cos(f)*u.r*h,u.h+Math.sin(o*5+u.ph)*.4,Math.sin(f)*u.r*h),u.m.rotation.set(o*6,o*4+u.ph,0),u.m.scale.setScalar(Math.max(.001,h))}pr(90*h,l,()=>{const u=Ut(0,Be),f=Ut(.8,2.6);c(Math.cos(u)*f,Ut(.4,2),Math.sin(u)*f,-Math.sin(u)*5,Ut(9,20),Math.cos(u)*5,Ut(.35,.8),Math.random()<.3?16769184:16738848)})}}}function ly(i,t){const e=new xt,n=new re({color:13628671,emissive:5228799,emissiveIntensity:.75,roughness:.12,metalness:.3,flatShading:!0}),s=[],a=(r,o,l,c,h,u)=>{for(let f=0;f<r;f++){const d=f/r*Be+o,m=l*(.7+.6*(f*7%5)/4),x=new lt(new bt(0,c,m,5),n);x.geometry.translate(0,m/2,0);const p=Math.cos(d)*o,g=Math.sin(d)*o;x.position.set(p,t(p,g)-.1,g),x.rotation.set(Math.sin(d)*h,f,-Math.cos(d)*h),x.castShadow=!0,e.add(x),s.push({m:x,delay:u,x:p,z:g,done:!1})}};return a(7,2.1,4.4,.6,.28,0),a(11,4.3,3.1,.52,.5,.07),a(15,6.3,2.1,.44,.75,.14),{group:e,dur:i,follow:!1,update(r,o,l){const c=Fn((i-r)/.35);for(const h of s){const u=Ss((r-h.delay)/.1),f=1+.3*Fn(1-(r-h.delay)/.28);if(h.m.scale.set(Math.max(.001,u*c),Math.max(.001,u*f*c),Math.max(.001,u*c)),!h.done&&r>=h.delay){h.done=!0;for(let d=0;d<5;d++){const m=Ut(0,Be);l(h.x,h.m.position.y+.4,h.z,Math.cos(m)*Ut(2,8),Ut(5,13),Math.sin(m)*Ut(2,8),Ut(.4,.8),d%2?16777215:9429247)}}}}}}function cy(i){const t=new xt,e=new xt;t.add(e);const n=[],s=_p(),a=Qn(16773226,2.6);for(let m=0;m<4;m++){const x=m/4*Be,p=new xt;p.position.set(Math.cos(x)*3.7,0,Math.sin(x)*3.7);const g=new lt(new bt(.12,.34,3.6,6),s);g.position.y=1.8,g.castShadow=!0;const S=new lt(new Qi(.42),a);S.position.y=3.9;const y=new lt(new bt(.3,.3,.16,6),a);y.position.y=2.6,p.add(g,S,y),e.add(p),n.push(new L(p.position.x,3.9,p.position.z))}const r=8,o=7,l=new Float32Array(r*o*6),c=new _e;c.setAttribute("position",new Ce(l,3));const h=new x_(c,new yh({color:16776144,transparent:!0,blending:qe,depthWrite:!1}));h.frustumCulled=!1,e.add(h);const u=new L(0,1.3,0),f=new L,d=new L;return{group:t,dur:i,follow:!0,update(m,x,p){const g=fr(m,i,.16,.25);e.rotation.y=m*2.2,e.scale.set(1,Math.max(.001,g),1);let S=0;for(let y=0;y<r;y++){const _=y<4?u:n[y%4],C=y<4?n[y]:n[(y+1)%4],w=Math.random()<.7;f.copy(_);for(let T=1;T<=o;T++)d.copy(_).lerp(C,T/o),T<o&&d.add(new L(Ut(-.45,.45),Ut(-.45,.45),Ut(-.45,.45))),w?l.set([f.x,f.y,f.z,d.x,d.y,d.z],S):l.fill(0,S,S+6),S+=6,f.copy(d)}c.attributes.position.needsUpdate=!0,pr(40*g,x,()=>{const y=n[Math.floor(Math.random()*4)].clone().applyAxisAngle(new L(0,1,0),e.rotation.y);p(y.x,y.y,y.z,Ut(-7,7),Ut(-2,8),Ut(-7,7),Ut(.15,.4),16774816)})}}}function hy(i){const t=new xt,e=Qn(10354640,1.2,2766128),n=[];for(let a=0;a<16;a++){const r=new lt(new Yo(Ut(.16,.36),0),e);r.castShadow=!0,t.add(r),n.push({m:r,h:Ut(.4,7),ph:Ut(0,Be)})}const s=a=>.7+a/7.5*(a/7.5)*4.4;return{group:t,dur:i,follow:!0,update(a,r,o){const l=fr(a,i,.3,.2),c=1-.35*Fn(a/i);for(const h of n){const u=(h.h+a*3.2)%7.2+.3,f=s(u)*c*l,d=h.ph+a*(13-u);h.m.position.set(Math.cos(d)*f,u*l,Math.sin(d)*f),h.m.rotation.set(a*9+h.ph,a*7,0),h.m.scale.setScalar(Math.max(.001,l))}pr(260*l,r,()=>{const h=Ut(.2,7.5),u=s(h)*c,f=Ut(0,Be),d=13+(7.5-h)*1.6;o(Math.cos(f)*u,h,Math.sin(f)*u,-Math.sin(f)*d,Ut(1,4),Math.cos(f)*d,Ut(.12,.3),Math.random()<.3?16777215:9431232)})}}}function uy(i,t){const n=new xt,s=new Re({color:16757850,transparent:!0,blending:qe,depthWrite:!1}),a=Qn(14251066,.35,4866104),r=[],o=[],l=9;for(let c=0;c<l;c++){const h=c/l*Be+.3,u=5.5+c*5%4*.6,f=new xt;f.rotation.y=-h,n.add(f);for(let d=0;d<2;d++){const m=new lt(new Ht(u/2,.06,.22-d*.08),s);m.geometry.translate(u/4,0,0);const x=d*u/2+u/4;m.position.set(d*(u/2)*.97,t(Math.cos(h)*x,Math.sin(h)*x)+.12,d*.25),m.rotation.y=d?c%2?.3:-.3:c%2?-.1:.1,f.add(m),r.push(m)}for(let d=0;d<2;d++){const m=2.6+d*2.6+c%3*.3,x=2.8-d*.9+c%2*.6,p=new lt(new bt(.25,.8,x,5),a);p.geometry.translate(0,x/2,0);const g=h+.22,S=Math.cos(g)*m,y=Math.sin(g)*m;p.rotation.set(Math.sin(g)*.4,c,-Math.cos(g)*.4),p.castShadow=!0,n.add(p),o.push({m:p,x:S,z:y,y:t(S,y),h:x,delay:.03+d*.07,done:!1})}}return{group:n,dur:1.7,follow:!1,update(c,h,u){s.opacity=Fn((1.7-c)/.6);const f=Ss(c/.16);r.forEach(d=>d.scale.set(Math.max(.001,f),1,1+1.5*Fn(1-c/.5)));for(const d of o){const m=Ss((c-d.delay)/.09),x=Fn((c-1)/.7);if(d.m.position.set(d.x,d.y-d.h*(1-m)-d.h*x-.05,d.z),!d.done&&c>=d.delay){d.done=!0;for(let p=0;p<6;p++)u(d.x,d.y+.3,d.z,Ut(-5,5),Ut(6,15),Ut(-5,5),Ut(.4,.9),p%3?14263386:16763008)}}}}}function dy(i){const e=new xt,n=new xt;n.position.y=2.6,e.add(n);const s=[1.7,2.7,3.7],a=10,r=6,o=new ep(new Ht(.07,.5,.07),Qn(12946431,1.8,2761267),s.length*a*r),l=new ce,c=new Cs,h=new L(0,1,0),u=new L;let f=0;for(const x of s)for(let p=0;p<a;p++){const g=p/a*Be+x;for(let S=0;S<r;S++){const y=.45+S/(r-1)*(Math.PI-.9),_=Math.sin(y),C=Math.cos(y),w=x*_*_*_,T=x*_*_*C,M=3*x*_*_*C,v=x*(2*_*C*C-_*_*_);u.set(M*Math.cos(g),v,M*Math.sin(g)).normalize(),c.setFromUnitVectors(h,u),l.compose(new L(w*Math.cos(g),T,w*Math.sin(g)),c,new L(1,1,1)),o.setMatrixAt(f++,l)}}n.add(o);const d=Qn(16777215,2);for(const x of[1.5,-1.5]){const p=new lt(new Qi(.5),d);p.position.y=x,n.add(p)}let m=!1;return{group:e,dur:1.25,follow:!0,update(x,p,g){const S=Fn(x/.7),y=Ss((x-.7)/.3);if(n.scale.setScalar(Math.max(.001,(2.3-1.6*Ss(S)+y*2.8)*Ss(x/.1)*Fn((1.25-x)/.2))),n.rotation.y=x*(2+S*9),!m&&x>=.7){m=!0;for(let _=0;_<70;_++){const C=Ut(0,Be),w=Ut(9,24);g(Math.cos(C),Ut(.5,3),Math.sin(C),Math.cos(C)*w,Ut(0,7),Math.sin(C)*w,Ut(.25,.55),_%3?12946431:16777215)}}}}}function fy(i){const e=new xt,n=new xt,s=Qn(16732120,2.4),a=Qn(16766708,3),r=new lt(new Qi(1,0),a);r.scale.set(.34,4.6,.34),r.castShadow=!0,n.add(r);for(let l=0;l<4;l++){const c=new lt(new Di(.5,2.2,3),s);c.position.set(Math.cos(l/4*Be)*.5,2.6,Math.sin(l/4*Be)*.5),c.rotation.set(Math.sin(l/4*Be)*.5,0,-Math.cos(l/4*Be)*.5),n.add(c)}n.rotation.z=.12,e.add(n);let o=!1;return{group:e,dur:1.3,follow:!1,update(l,c,h){const u=Fn(l/.12);if(n.position.y=26-22.5*u*u,n.rotation.y=l*3,n.scale.setScalar(Math.max(.001,Fn((1.3-l)/.3))),!o&&u>=1){o=!0;for(let f=0;f<90;f++){const d=Ut(0,Be),m=Ut(5,26);h(0,.4,0,Math.cos(d)*m,Ut(2,16),Math.sin(d)*m,Ut(.3,.7),f%3?16736224:16777215)}}pr(o?30:400,c,()=>h(Ut(-.3,.3),n.position.y+Ut(0,6),Ut(-.3,.3),Ut(-2,2),o?Ut(3,9):Ut(20,40),Ut(-2,2),Ut(.15,.4),16747240))}}}function py(i){const t=new xt,e=new lt(new qo(1.15,2),new Re({color:0}));e.position.y=2.8,t.add(e);const n=46,s=new ep(new Wo(.2,0),Qn(6978559,1.3,1842732),n);s.castShadow=!0,t.add(s);const a=Array.from({length:n},()=>({ph:Ut(0,Be),off:Math.random(),tilt:Ut(-.35,.35),size:Ut(.5,1.7)})),r=new ce,o=new Cs,l=new Zn;return{group:t,dur:i,follow:!0,update(c,h,u){const f=fr(c,i,.35,.18);e.scale.setScalar(Math.max(.001,f*(1+.05*Math.sin(c*24)))),a.forEach((d,m)=>{const x=(d.off+c*.55)%1,p=1.3+(1-x)*(1-x)*5.2,g=d.ph+c*2+9/(.5+p);l.set(c*5+d.ph,c*3,0),o.setFromEuler(l);const S=Math.max(.001,f*d.size*(.4+.6*(1-x)));r.compose(new L(Math.cos(g)*p,2.8+Math.sin(g)*p*d.tilt,Math.sin(g)*p),o,new L(S,S,S)),s.setMatrixAt(m,r)}),s.instanceMatrix.needsUpdate=!0,pr(150*f,h,()=>{const d=Ut(0,Be),m=Ut(5,10),x=Ut(12,22);u(Math.cos(d)*m,Ut(.2,5.5),Math.sin(d)*m,-Math.cos(d)*x-Math.sin(d)*6,Ut(-1,3),-Math.sin(d)*x+Math.cos(d)*6,m/x,Math.random()<.25?16777215:8359167)})}}}function my(i){const t=new xt,e=Qn(5242848,1.8),n=_p(),s=20,a=[];for(let o=0;o<s;o++){const l=o/s*Be,c=new lt(new Ht(.24,1,.24),o%2?e:n);c.geometry.translate(0,.5,0),c.position.set(Math.cos(l)*2.9,.15,Math.sin(l)*2.9),c.rotation.y=-l,c.castShadow=!0,t.add(c),a.push(c)}let r=-1;return{group:t,dur:i,follow:!0,update(o,l,c){const h=fr(o,i,.2,.3),u=o%.6/.6,f=Math.pow(1-u,2);a.forEach((m,x)=>m.scale.set(1,Math.max(.001,h*(.5+4.2*f*(.35+.65*Math.abs(Math.sin(x*Math.PI*3/s+Math.floor(o/.6)))))),1)),t.rotation.y=Math.floor(o/.6)*.31;const d=Math.floor(o/.6);if(d!==r){r=d;for(let m=0;m<80;m++){const x=Ut(0,Be),p=Ut(10,22);c(Math.cos(x)*3,.2,Math.sin(x)*3,Math.cos(x)*p,Ut(.5,3.5),Math.sin(x)*p,Ut(.2,.4),m%4?5242848:16777215)}}}}}function gy(i,t){const e=ke[i].super.dur;switch(i){case"thermal":return oy(e);case"cryo":return ly(e,t);case"volt":return cy(e);case"gale":return hy(e);case"quake":return uy(e,t);case"mag":return dy();case"plasma":return fy();case"gravity":return py(e);case"resonance":return my(e)}}function ea(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in a){const u=bd(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<r[h].length;++x)d.push(r[h][x][f]);const m=bd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function bd(i){let t,e,n,s=-1,a=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}const r=new t(a),o=new Ce(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Ke=Math.PI*2;function to(i,t=200){const e=new tn;for(let n=0;n<=t;n++){const s=n/t*Ke,a=i(s);n===0?e.moveTo(Math.cos(s)*a,Math.sin(s)*a):e.lineTo(Math.cos(s)*a,Math.sin(s)*a)}return e}function us(i,t,e,n){const s=new ar;s.absarc(t,e,n,0,Ke,!0),i.holes.push(s)}function xy(i,t,e,n,s){const a=new ar,r=n/2/e,o=6;for(let l=0;l<=o;l++){const c=t-r+l/o*r*2,h=Math.cos(c)*(e+s/2),u=Math.sin(c)*(e+s/2);l===0?a.moveTo(h,u):a.lineTo(h,u)}for(let l=o;l>=0;l--){const c=t-r+l/o*r*2;a.lineTo(Math.cos(c)*(e-s/2),Math.sin(c)*(e-s/2))}a.closePath(),i.holes.push(a)}function Ne(i,t,e=0){const n=new lt(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function eo(i,t,e,n,s){const a=new Jn(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:20});return a.rotateX(-Math.PI/2),a.translate(0,e,0),Ne(a,n,s)}function Sd(i){let t=0,e=-1;const n=Ke/i.fold;for(let s=0;s<40;s++){const a=s/40*n,r=Wa(i,a);r>e+1e-6&&(e=r,t=a)}return t}function My(i,t,e,n=150){const s=(l,c)=>l===0?e:Math.max(e+.02,l*t(c)),a=[],r=(l,c)=>{const h=c/n*Ke,u=s(l[0],h);return[Math.cos(h)*u,l[1],-Math.sin(h)*u]};for(let l=0;l<i.length;l++){const c=i[l],h=i[(l+1)%i.length];for(let u=0;u<n;u++){const f=r(c,u),d=r(c,u+1),m=r(h,u+1),x=r(h,u);a.push(...f,...d,...m,...f,...m,...x)}}const o=new _e;return o.setAttribute("position",new se(a,3)),o.computeVertexNormals(),o}const vy=.6,wd=[[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]],[[-.1,-.1],[.35,-.14],[.52,-.32],[.78,-.2],[.74,.12],[.4,.09],[-.1,.1]],[[-.1,-.07],[.4,-.07],[.62,-.17],[.82,-.12],[.82,.12],[.62,.17],[.4,.07],[-.1,.07]],[[-.1,-.1],[.4,-.15],[.7,-.1],[.88,.06],[.72,0],[.5,.15],[-.1,.1]]];function Ed(i,t){const e=new tn;return i.forEach(([n,s],a)=>a===0?e.moveTo(n*t,s):e.lineTo(n*t,s)),e.closePath(),e}function _y(i,t,e,n){const s=t.arms??3,a=.8+.1*((t.arms??3)===2?1:0),r=wd[(t.wstyle??0)%wd.length],o=Ed(r,a),l=Ed(r.map(([u,f])=>[u*.78+.04,f*.55]),a),c=[],h=.56*t.radius*.95;for(let u=0;u<s;u++){const f=u/s*Ke,d=new xt;d.position.set(Math.cos(f)*h,.05,-Math.sin(f)*h),d.add(Ne(new Jn(o,{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:1}).rotateX(-Math.PI/2),e.metal)),d.add(Ne(new Jn(l,{depth:.04,bevelEnabled:!1}).rotateX(-Math.PI/2),n,.15));const m=Ne(new Ht(.4*a,.02,.03),e.glow,.205);m.position.x=.32*a,d.add(m),d.add(Ne(new bt(.065,.065,.26,6),e.dark,.1)),d.add(Ne(new bt(.035,.035,.02,12),e.glow,.24)),i.add(d),c.push({pivot:d,base:f+Math.PI/2})}i.userData.wings=c}function yy(i,t,e,n){const s=t.arms??4,a=[],r=.8*(Ke/s),o=.98*t.radius,l=.56*t.radius,c=(o+l)/2;for(let h=0;h<s;h++){const u=h/s*Ke+Math.PI/s,f=Math.cos(u)*c,d=Math.sin(u)*c,m=new tn,x=(w,T)=>[Math.cos(T)*w-f,Math.sin(T)*w-d],p=u-r/2,g=u+r/2,S=8;for(let w=0;w<=S;w++){const T=w/S,[M,v]=x(o*(1-.07*Math.sin(T*Math.PI))*(t.wstyle===1?1-.12*T:1),p+(g-p)*T);w===0?m.moveTo(M,v):m.lineTo(M,v)}for(let w=S;w>=0;w--){const[T,M]=x(l,p+.04+(g-p-.08)*(w/S));m.lineTo(T,M)}const y=new xt;y.position.set(f,.15,-d);const _=new Jn(m,{depth:.09,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:1}).rotateX(-Math.PI/2);y.add(Ne(_,h%2===1&&t.wstyle===2?n:e.paint,0));const C=Ne(new Ht(.3*t.radius,.02,.035),e.glow,.13);C.rotation.y=u,y.add(C);for(const w of[-1,1]){const T=Ne(new bt(.035,.035,.03,8),e.dark,.13);T.position.set(Math.cos(u+w*.4)*c-f,.13,-(Math.sin(u+w*.4)*c-d)),y.add(T)}i.add(y),a.push(y)}i.userData.plates=a}function by(i,t,e,n){const s=t.arms??3,a=[],r=(t.wstyle??0)%4,o=.34+.05*((t.wstyle??0)%3),l=.5*t.radius*.95;for(let c=0;c<s;c++){const h=c/s*Ke,u=new xt;u.position.set(Math.cos(h)*l,.07,-Math.sin(h)*l),u.add(Ne(new bt(.075,.075,.2,8),e.dark,.04)),u.add(Ne(new bt(.04,.04,.03,12),e.glow,.15)),u.add(Ne(new Ht(o,.05,.08),e.metal,.03).translateX(o/2+.01));const f=new xt;if(f.position.set(o+.06,.02,0),r===0)f.add(Ne(new bt(.13,.15,.2,6),e.metal),Ne(new bt(.1,.13,.05,6),n,.125));else if(r===1)f.add(Ne(new zn(.15,14,10),e.metal),Ne(new Zt(.15,.025,6,16),e.glow));else if(r===2){f.add(Ne(new zn(.12,12,8),n));for(const[d,m,x]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){const p=Ne(new Di(.04,.12,6),e.metal);p.position.set(d*.15,m*.15,x*.15),p.quaternion.setFromUnitVectors(new L(0,1,0),new L(d,m,x)),f.add(p)}}else f.add(Ne(new Ht(.26,.18,.22),e.metal),Ne(new Ht(.2,.04,.16),n,.11));u.add(f),i.add(u),a.push({pivot:u,base:h,weight:f})}i.userData.arms=a}function Sy(i,t){const e=new xt,n=i.mech??0,s=i.radius*(n?vy:1),[a,r,o]=i.layers,l=i.relief??0,c=i.tone??0,h=c?t.alt[c-1]:t.paint,u=I=>s*Math.max(.47,Wa(a,I)),f=i.thick-.12,d=I=>Math.max(.5*s,Math.min(u(I)*.9,s*.9*Wa(r,I))),m=.44*s;if(l===0){const I=to(u);us(I,0,0,.36*s),e.add(eo(I,i.thick,.03,t.metal,0))}else{const I=i.thick,O=[[[0,0],[.93,0],[1,.05],[1,I-.04],[.9,I+.03],[.62,I+.03],[0,I+.03]],[[0,0],[.82,0],[.82,.05],[1,.08],[1,I],[.8,I+.02],[0,I+.02]],[[0,0],[1,0],[1,.035],[.66,I+.07],[0,I+.07]]];e.add(Ne(My(O[(l-1)%3],u,.36*s),l===3?h:t.metal))}const x=new xt;if(x.position.y=f,e.add(x),i.lights>=2){const I=to(O=>Math.min(u(O)*.96,d(O)+.035*s));us(I,0,0,m),x.add(eo(I,.025,0,t.glow,.155))}const p=to(d);us(p,0,0,m);const g=Math.min(12,Math.max(r.fold,3)),S=Sd(r);for(let I=0;I<g&&i.windows>0;I++){const O=S+I/g*Ke,F=d(O)-m;if(F<.2*s)continue;const X=m+F*.5;if(i.windows===1)us(p,Math.cos(O)*X,Math.sin(O)*X,Math.min(.1*s,F*.26));else if(i.windows===2){const D=Math.min(.055*s,F*.16);us(p,Math.cos(O)*(m+F*.32),Math.sin(O)*(m+F*.32),D),us(p,Math.cos(O)*(m+F*.68),Math.sin(O)*(m+F*.68),D)}else xy(p,O,X,Math.min(.32*s,Ke/g*X*.55),Math.min(.07*s,F*.25))}const y=i.glass?t.glass:i.swap?t.metal:t.paint,_=eo(p,.07,.02,y,.18);i.glass&&(_.castShadow=!1,_.renderOrder=2),x.add(_);let C=.295;if(o){const O=to(F=>Math.max(.47*s,Math.min(d(F)*.86,s*.72*Wa(o,F))));us(O,0,0,m),x.add(eo(O,.05,.015,i.swap?t.paint:i.crownMetal?t.metal:c?h:t.dark,.275)),C=.36}const w=Math.min(14,a.fold),T=Sd(a),M=[];for(let I=0;I<w;I++){const O=T+I/w*Ke,F=d(O);if(i.lights===1){const X=new bt(.035*s,.035*s,.03,8),D=Math.max(m+.08,F-.1*s);X.translate(Math.cos(O)*D,.29,-Math.sin(O)*D),M.push(X)}else if(i.lights!==2){const X=Math.min(.26*s,F-.5*s);if(X<.08)continue;const D=new Ht(X,.02,.04*s);D.rotateY(O);const B=F-X/2-.05*s;D.translate(Math.cos(O)*B,.285,-Math.sin(O)*B),M.push(D)}}if(M.length){const I=new lt(ea(M),t.glow);x.add(I)}const v=[],b=Math.max(4,Math.min(8,a.fold));for(let I=0;I<b;I++){const O=(I+.5)/b*Ke,F=new bt(.032*s,.032*s,.05,6);F.translate(Math.cos(O)*.4*s,C-.06,-Math.sin(O)*.4*s),v.push(F)}const R=new lt(ea(v),t.metal);if(R.castShadow=!0,x.add(R),i.ornament&&!n){const I={metal:[],paint:[],dark:[],glow:[]},O=w>8?2:1,F=i.ornament;for(let D=0;D<w;D+=O){const B=T+D/w*Ke,N=u(B);if(N-m<.3*s)continue;const H=m+(N-m)*.55,K=.25,j=(k,q,ct=H,it=K)=>(k.rotateY(B+q),k.translate(Math.cos(B)*ct,it,-Math.sin(B)*ct),k),ot=Math.min(.5*s,(N-m)*.95),ut=(k,q)=>I[k].push(q.index?q.toNonIndexed():q);if(F===1){const k=new Di(.085*s,ot*1.15,4);k.rotateZ(-Math.PI/2),k.scale(1,.55,1),ut("metal",j(k,.35,H+.04,K+.05))}else if(F===2){const k=new tn;k.moveTo(-ot/2,0),k.lineTo(ot/2,0),k.lineTo(ot/2,.17),k.closePath();const q=.16*s,ct=new Jn(k,{depth:q,bevelEnabled:!1});ct.translate(0,0,-q/2),ut(i.swap?"metal":"paint",j(ct,0))}else if(F===3)ut("dark",j(new Ht(ot*.7,.11,.24*s),0,H,K+.055)),ut("glow",j(new Ht(ot*.5,.02,.05*s),0,H,K+.12));else if(F===4)for(const k of[-.07,.07]){const q=new Ht(ot,.07,.035*s);q.translate(0,0,k*s),ut("metal",j(q,0,H,K+.035))}else if(F===5)ut("metal",j(new zn(.1*s,10,6,0,Ke,0,Math.PI/2),0,H,K)),ut("glow",j(new bt(.03*s,.03*s,.02,6),0,H,K+.1*s+.005));else if(F===6){const k=new tn;k.moveTo(-ot/2,0),k.lineTo(ot/2,0),k.quadraticCurveTo(ot*.3,.24,-ot*.1,.2),k.closePath();const q=new Jn(k,{depth:.035,bevelEnabled:!1});q.translate(0,0,-.0175),ut(i.swap?"metal":"paint",j(q,.5))}else if(F===7){const k=new Ht(ot*.8,.03,.2*s);k.translate(ot*.4,0,0),k.rotateZ(.3),k.translate(-ot*.4,0,0),ut("paint",j(k,0,H,K+.04)),ut("dark",j(new bt(.03,.03,.22*s,8).rotateX(Math.PI/2),0,H-ot*.4,K+.03))}else if(F===8)for(let k=0;k<3;k++){const q=new Ht(ot*(.9-k*.12),.05+k*.05,.028*s);q.translate(0,0,(k-1)*.07*s),ut(k===1?"paint":"metal",j(q,0,H-k*.03,K+(.05+k*.05)/2))}else if(F===9)for(let k=0;k<2;k++){const q=new Zt(.06*s,.017,6,12);q.scale(1.5,1,1),k===0&&q.rotateX(Math.PI/2),ut("metal",j(q,0,H+(k-.5)*.12*s,K+.02+k*.01))}else if(F===10){const k=new bt(.11*s,.11*s,ot*.8,10,1,!0,0,Math.PI/2);k.rotateX(Math.PI/2),k.rotateY(Math.PI/2),ut(i.swap?"metal":"paint",j(k,0,H,K+.04)),ut("dark",j(new Ht(ot*.8,.02,.2*s),0,H,K+.005))}else if(F===11)for(const k of[0,Math.PI/3]){const q=new Di(.08*s,ot*1.2,3);q.rotateY(k),q.rotateZ(-Math.PI/2),ut("metal",j(q,0,H+.03,K+.06))}else if(F===12)for(let k=0;k<3;k++)ut(k===2?"paint":"metal",j(new Ht(ot*(.75-k*.2),.045,.2*s*(1-k*.25)),0,H,K+.0225+k*.045));else if(F===13)for(let k=0;k<4;k++)ut("metal",j(new zn(.035*s,8,5,0,Ke,0,Math.PI/2),0,H+(k-1.5)*.085*s*1.4,K));else if(F===14){ut("paint",j(new Ht(ot*.75,.1,.22*s),0,H,K+.05));for(let k=-1;k<=1;k++)ut("dark",j(new Ht(.03,.02,.17*s),0,H+k*.07*s,K+.101))}else if(F===15)for(let k=0;k<2;k++){const q=[new bt(.075*s,.075*s,.04,14).toNonIndexed()];for(let ct=0;ct<8;ct++){const it=new Ht(.03*s,.04,.03*s),at=ct/8*Ke;it.translate(Math.cos(at)*.085*s,0,Math.sin(at)*.085*s),q.push(it.toNonIndexed())}ut(k===0?"dark":"metal",j(ea(q),0,H+(k===0?-.1:.1)*s,K+.02))}else if(F===16){const k=[];for(let q=0;q<=40;q++){const ct=q/40*Ke*3;k.push(new L(Math.cos(ct)*.06*s,q/40*.17,Math.sin(ct)*.06*s))}ut("metal",j(new wa(new sp(k),40,.013,5,!1),0,H,K)),ut("glow",j(new bt(.05*s,.05*s,.02,8),0,H,K+.18))}}const X={metal:t.metal,paint:c?h:t.paint,dark:t.dark,glow:t.glow};for(const D of Object.keys(I)){if(!I[D].length)continue;const B=new lt(ea(I[D]),X[D]);B.castShadow=D!=="glow",x.add(B)}}return n===1?_y(e,i,t,h):n===2?yy(e,i,t,h):n===3&&by(e,i,t,h),e}const On=Math.PI*2,As=(i,t,e)=>new Ht(i,t,e);function ye(i,t,e=0,n=0,s=0){const a=new lt(i,t);return a.position.set(e,n,s),a.castShadow=!0,a.receiveShadow=!0,a}function Ka(i,t,e=.02){const n=new Jn(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:10});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function wy(i,t,e,n){const s=new tn;return s.absarc(0,0,t,e,n,!1),s.absarc(0,0,i,n,e,!0),s.closePath(),s}function Ko(i){return new re({color:1182472,emissive:i,emissiveIntensity:1,roughness:.45,flatShading:!0})}function Ey(i,t){const e=new xt,n=Ko(t);e.add(ye(new bt(1.08,1,.2,40),i.dark,0,.1,0)),e.add(ye(new bt(.46,.5,.5,20),n,0,.42,0));for(let l=0;l<10;l++){const c=l/10*On;e.add(ye(As(.06,.62,.06),i.metal,Math.cos(c)*.55,.45,Math.sin(c)*.55))}const s=[];for(let l=0;l<6;l++){const c=l/6*On,h=ye(As(.34,.72,.7),i.paint,Math.cos(c)*.9,.5,-Math.sin(c)*.9);h.rotation.y=c,h.rotation.z=-.22,s.push(h),e.add(h)}const a=new xt;for(let l=0;l<3;l++){const c=l/3*On+.5,h=new xt;h.add(ye(new bt(.1,.13,.9,10),i.dark,0,.45,0),ye(new bt(.15,.1,.1,10),n,0,.93,0)),h.position.set(Math.cos(c)*.5,.45,Math.sin(c)*.5),a.add(h)}e.add(a);const r=new tn;for(let l=0;l<=160;l++){const c=l/160*On,h=.86+.16*(Math.abs(Math.sin(c*5))>.55?1:0);l===0?r.moveTo(Math.cos(c)*h,Math.sin(c)*h):r.lineTo(Math.cos(c)*h,Math.sin(c)*h)}const o=ye(Ka(r,.16),i.metal,0,.28,0);return o.visible=!1,e.add(o),e.userData.anim=l=>{a.scale.y=1+.7*l.rear,a.rotation.y=.2*Math.sin(l.t*2),n.emissiveIntensity=.7+.5*Math.sin(l.t*5)+.9*l.rear+.3*l.stage,o.visible=l.stage>=1,o.rotation.y=l.t*(1.5+l.stage),s.forEach((c,h)=>c.position.y=.5+l.rear*.12*Math.sin(h*1.7+l.t*30))},e}function Ty(i,t){const e=new xt,n=Ko(t),s=new tn;for(let f=0;f<6;f++){const d=f/6*On;f===0?s.moveTo(Math.cos(d)*1.05,Math.sin(d)*1.05):s.lineTo(Math.cos(d)*1.05,Math.sin(d)*1.05)}s.closePath(),e.add(ye(Ka(s,.2,.03),i.dark,0,0,0));for(let f=0;f<4;f++){const d=f/4*On+.78,m=new xt;m.add(ye(new bt(.09,.12,.7,10),i.metal,0,.35,0),ye(new bt(.1,.1,.05,10),n,0,.72,0)),m.position.set(Math.cos(d)*.78,.15,Math.sin(d)*.78),e.add(m)}const a=new xt,r=new xt,o=new tn;o.moveTo(-.55,-.62),o.lineTo(.95,-.14),o.lineTo(1.25,0),o.lineTo(.95,.14),o.lineTo(-.55,.62),o.closePath();const l=ye(Ka(o,.5,.03),i.paint,0,.2,0);l.rotation.y=0;const c=ye(Ka(o,.08,.02),i.paint,0,.7,0);c.scale.set(.8,1,.55);const h=ye(As(1.5,.06,.09),n,.25,.8,0),u=ye(As(.34,.4,.3),i.metal,1.12,.4,0);r.add(l,c,h,u),a.add(r);for(const f of[-.36,.36]){const d=ye(new bt(.07,.07,1.2,10),i.metal,0,.45,f);d.rotation.z=Math.PI/2,d.position.x=.1,a.add(d)}return e.add(a),e.userData.anim=f=>{a.rotation.y=f.aim,r.position.x=-.38*f.rear+.22*f.act,n.emissiveIntensity=.8+1*f.rear+.6*f.act+.3*f.stage,r.rotation.z=.05*Math.sin(f.t*60)*f.rear},e}function Ay(i,t){const e=new xt,n=Ko(t);e.add(ye(new bt(.95,1,.16,36),i.dark,0,.08,0)),e.add(ye(new bt(.3,.42,.7,20),i.metal,0,.5,0)),e.add(ye(new zn(.3,16,10,0,On,0,Math.PI/2),n,0,.85,0));const s=[];for(let l=0;l<8;l++){const c=l/8*On,h=ye(As(.5,.05,.26),i.paint,Math.cos(c)*.66,.5,-Math.sin(c)*.66);h.rotation.set(0,c,.5),s.push(h),e.add(h)}const a=[];for(let l=0;l<3;l++){const c=l/3*On+.4,h=new xt;h.add(ye(As(.8,.07,.1),i.metal,.4,0,0),ye(new zn(.17,12,8),i.dark,.85,0,0)),h.rotation.y=c,h.position.y=.22,a.push(h),e.add(h)}const r=new xt,o=new xt;return r.add(ye(new Zt(.92,.07,8,36,Math.PI),i.metal)),o.add(ye(new Zt(.76,.07,8,36,Math.PI),n)),r.position.y=.5,o.position.y=.5,e.add(r,o),e.userData.anim=l=>{const c=1+l.rear*4+l.stage*.8;r.rotation.set(0,l.t*1.6*c,0),o.rotation.set(0,-l.t*2.3*c,Math.PI/2),r.rotation.x=.3*Math.sin(l.t*1.3),a.forEach(h=>h.scale.x=1-.45*l.rear),n.emissiveIntensity=.8+.4*Math.sin(l.t*6)+1*l.rear+.3*l.stage,s.forEach((h,u)=>h.rotation.x=.35*Math.sin(l.t*9+u)*l.rear)},e}function Ry(i,t){const e=new xt,n=Ko(t);e.add(ye(new bt(.28,.4,1.05,18),i.metal,0,.52,0));for(const r of[.3,.62,.92])e.add(ye(new bt(.31,.31,.06,18),n,0,r,0));const s=[];for(let r=0;r<6;r++){const o=r/6*On+.26,l=ye(As(.78,.1,.12),i.metal,Math.cos(o)*.62,.3,-Math.sin(o)*.62);l.rotation.y=o,s.push(l),e.add(l)}const a=[];for(let r=0;r<6;r++){const o=r/6*On+.05,l=(r+1)/6*On-.05,c=ye(Ka(wy(.9,1.15,o,l),.42,.03),i.paint,0,.1,0);c.rotation.x=0,c.userData.mid=(o+l)/2,a.push(c),e.add(c)}return e.userData.anim=r=>{a.forEach(o=>{const l=o.userData.mid,c=.16*r.rear+.04*Math.sin(r.t*3+l);o.position.set(Math.cos(l)*c,.1,-Math.sin(l)*c)}),s.forEach((o,l)=>{o.rotation.z=r.stage>=2?.12*Math.sin(r.t*7+l*2):0}),n.emissiveIntensity=.8+.5*Math.sin(r.t*4)+1*r.rear+.3*r.stage},e}function Cy(i,t,e){return i==="warden"?Ey(t,e):i==="piledriver"?Ty(t,e):i==="gyre"?Ay(t,e):Ry(t,e)}const yi=Math.PI*2,fn=(i,t,e)=>t+Math.min(e-t,Math.floor(i*(e-t+1)));function Ah(i,t){return[i.paint,i.alt[0],i.alt[1],i.alt[2],i.metal][Math.floor(t*5)%5]}function Vl(i,t,e=0){const n=mr(t,.12);switch(i%4){case 1:return s=>n(s+e);case 2:return s=>.93+.07*Math.cos(t*(s+e));case 3:return s=>((s+e)*t/yi%1+1)%1<.55?1:.9;default:return()=>1}}class yp extends Hn{constructor(t,e,n){super(),this.r=t,this.h=e,this.turns=n}getPoint(t,e=new L){const n=t*yi*this.turns;return e.set(Math.cos(n)*this.r,t*this.h,Math.sin(n)*this.r)}}function Py(i,t){const e=new xt,n=i.v,s=.62+.1*n[0],a=Ah(t,n[4]),r=Math.floor(n[3]*4),o=fn(n[5],5,12),l=Vl(r,o),c=(f,d,m,x,p=0,g=[],S=.015)=>{const y=Vl(r,o,p),_=Je(C=>f*y(C),140);Ze(_,0,0,.18);for(const[C,w,T]of g)Ze(_,C,w,T);e.add(J(Ie(_,d,S),m,x))};let h=.23;switch(i.family){case 0:{const f=fn(n[2],4,8);c(s,.06,t.dark,0,0,Array.from({length:f},(p,g)=>[Math.cos(g/f*yi)*s*.6,Math.sin(g/f*yi)*s*.6,.11]));const d=.06+.05*n[1],m=J(new Zt(s-.02,d,16,96),t.metal,.1);m.rotation.x=Math.PI/2;const x=J(new Zt(s-.02,.013,8,96),t.glow,.1+d);x.rotation.x=Math.PI/2,e.add(m,x,J(new bt(.26,.28,.16,40),a,.08)),h=.2;break}case 1:{const f=.34+.1*n[1],d=[40,6,4,8][Math.floor(n[1]*4)%4];e.add(J(new bt(f,f+.06,.23,d),t.metal,.115)),c(s,.04,a,.04),e.add(Ue(()=>new bt(.03,.03,.05,6),fn(n[2],4,8),f*.8,.23,t.dark));break}case 2:{const f=.7+.3*n[1],d=1.6+2*n[2],m=Je(p=>s*(.74+.26*Math.pow(Math.max(0,Math.cos(p)),d))*f*l(p),120);Ze(m,0,0,.2),e.add(J(Ie(m,.16,.02),t.metal,.04));const x=Je(p=>s*.7*(.74+.26*Math.pow(Math.max(0,Math.cos(p)),d))*f,120);Ze(x,0,0,.2),e.add(J(Ie(x,.03,.01),a,.215)),e.add(J(new bt(.05,.05,.03,12),t.glow,.25).translateX(-s*.5)),h=.25;break}case 3:{const f=fn(n[2],4,9),d=J(new Zt(s-.04,.045+.02*n[1],10,r===1?Math.max(6,o):80),t.metal,.09);d.rotation.x=Math.PI/2,e.add(d,J(new bt(.2,.22,.16,28),a,.08));const m=(n[1]-.5)*.9;if(e.add(Ue(()=>new Ht(s-.2,.05,.05+.03*n[1]).translate((s-.2)/2+.15,0,0).rotateY(m),f,0,.09,t.dark)),n[5]>.5){const x=J(new Zt(s*.55,.02,8,60),a,.09);x.rotation.x=Math.PI/2,e.add(x)}h=.17;break}case 4:{const f=[t.metal,a,t.dark];for(let d=0;d<3;d++)c(s*(1-d*(.12+.08*n[1])),.05+.02*n[2],f[d],d*.075,d*.35,[],.012);h=.22;break}case 5:{const f=fn(n[2],6,12),d=[];for(let x=0;x<f;x++){const p=x/f*yi;d.push([Math.cos(p)*s*.45,Math.sin(p)*s*.45,.04+.04*n[1]],[Math.cos(p+Math.PI/f)*s*.75,Math.sin(p+Math.PI/f)*s*.75,.03+.03*n[1]])}c(s,.05,a,.05,0,d);const m=J(new Zt(s,.025,8,96),t.metal,.09);m.rotation.x=Math.PI/2,e.add(m,J(new bt(.22,.24,.16,36),t.metal,.08)),h=.1;break}case 6:{const f=.22+.08*n[1];c(s,f,t.metal,0,0,[],.03),e.add(Ue(()=>new Ht(.035,.1,.05),36,s+.01,f/2,t.dark)),e.add(J(xe([[s*.3,f+.03],[s*.85,f+.03],[s*.85,f+.045],[s*.3,f+.045]]),a)),h=f+.05;break}default:{const f=fn(n[2],3,5);for(let d=0;d<f;d++){const m=Vl(r,o,d*.25),x=s*(1-d/(f+.6)),p=Je(g=>x*m(g),120);Ze(p,0,0,.18),e.add(J(Ie(p,.075,.012),d%2?a:t.metal,d*.075))}h=f*.075}}const u=Math.floor(n[1]*4)%4;return u===1?e.add(Ue(()=>new bt(.028,.028,.03,8),o,s*.78,h,t.glow)):u===2?e.add(Ue(()=>new Ht(.16,.012,.03).translate(.08,0,0),o,s*.4,h,t.glow)):u===3&&e.add(J(new Zt(s*.55,.014,6,60),t.dark,h).rotateX(Math.PI/2)),e}const Td=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];function Ly(i,t){const e=new xt,n=i.v,s=Ah(t,n[4]),a=()=>{const o=Math.floor(n[5]*4);o===1?e.add(J(new bt(.31,.3,.2,6),t.metal,.4),J(xe([[.2,.3],[.22,.36],[.28,.3]]),t.metal)):o===2?e.add(J(xe([[.2,.3],[.24,.38],[.36,.43],[.36,.5],[0,.5]]),t.metal)):o===3?(e.add(J(xe(Td),t.metal)),e.add(J(new Zt(.31,.02,8,64),s,.46).rotateX(Math.PI/2))):e.add(J(xe(Td),t.metal))},r=(o,l,c=t.glow)=>e.add(J(new Zt(o,.014,8,64),c,l).rotateX(Math.PI/2));switch(i.family){case 0:{const o=.22+.1*n[0];e.add(J(xe([[0,0],[o,0],[o+.03,.04],[o+.03,.1+.08*n[1]],[o*.7,.24],[.2,.3]]),s)),a(),r(o+.035,.07);break}case 1:{const o=[[0,0],[.025,.02],[.07+.05*n[1],.14+.1*n[0]],[.2,.3]];e.add(J(xe(o),t.metal)),a(),e.add(J(new Zt(.215,.022,10,64),s,.345).rotateX(Math.PI/2)),n[2]>.5&&e.add(J(xe([[.05,.1],[.12,.2],[.11,.22],[.045,.12]]),s));break}case 2:{const o=.11+.06*n[0];e.add(J(new zn(o,28,18),new re({color:16054010,metalness:1,roughness:.05}),o)),e.add(J(xe([[o*.85,o+.01],[.19,.17],[.22,.26],[.2,.3]]),s)),a();break}case 3:{const o=fn(n[2],12,24);e.add(J(xe([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),e.add(Ue(()=>new Ht(.03,.13,.035),o,.272,.13,t.dark)),a(),r(.225,.34,s);break}case 4:{e.add(J(xe([[0,0],[.06,.02],[.1,.14],[.2,.3]]),t.metal));const o=J(new Zt(.16,.03,8,40),t.dark,.1);o.rotation.x=Math.PI/2,e.add(o);const l=fn(n[2],6,10);e.add(Ue(()=>new zn(.035,10,6),l,.16,.1,new re({color:16054010,metalness:1,roughness:.08}))),a(),r(.23,.33,s);break}case 5:{const o=.3+.08*n[0];e.add(J(xe([[0,0],[o,0],[o+.02,.03],[o-.04,.14],[.2,.3]]),t.metal)),e.add(J(xe([[o*.8,.035],[o+.005,.035],[o-.01,.06],[o*.8,.06]]),s)),a(),e.add(Ue(()=>new bt(.025,.025,.03,6),fn(n[2],5,8),o*.88,.04,t.glow));break}case 6:{const o=new xt;o.add(J(xe([[0,0],[.16,0],[.19,.04],[.15,.2],[.08,.24]]),s)),o.rotation.z=.18+.2*n[0],o.position.x=.05,e.add(o),e.add(J(xe([[.1,.22],[.2,.3]]),t.metal)),a(),r(.23,.34);break}default:e.add(J(xe([[0,0],[.12,0],[.16,.03],[.14,.08],[.05,.1]]),t.metal)),e.add(J(new wa(new yp(.09,.2,fn(n[2],4,7)),60,.022,6,!1),s,.1)),e.add(J(xe([[.04,.29],[.2,.3]]),t.dark)),a()}return e}function Iy(i,t,e){const n=new xt,s=i.v,a=Ah(e,s[4]),r=[3,4,5,6,8,10][Math.floor(s[2]*6)%6],o=.29+.12*s[1],l=Math.floor(s[3]*4),c=mr(r,.05+.4*s[3]),h=d=>l===1?.78+.22*Math.cos(r*d)**2:l===2?.88+.12*Math.cos(r*d):l===3?Math.floor((d%yi+yi)%yi/(yi/(r*2)))%2?.9:1:c(d),u=.12+.1*s[5];n.add(J(new bt(.33,.33,.2,48),e.metal,.1)),n.add(J(Ie(Je(d=>o*h(d),160),u,.03),a,.2));const f=.2+u+.03;if(t==="dash"){const d=fn(s[0],1,3);for(let m=0;m<d;m++){const x=J(Sp(o*.32),e.glow,f);x.position.z=.1-m*.11,n.add(x)}n.add(Ue(()=>new Ht(.14,.05,.03),fn(s[0],2,4),o*1.05,.3,e.metal))}else if(t==="brace")n.add(Ue(()=>new Ht(.15,.18+.06*s[0],.1),fn(s[0],3,6),o*.95,.3,e.metal,Math.PI/r)),n.add(J(new Zt(o*.42,.022,8,48),e.glow,f+.005).rotateX(Math.PI/2));else if(t==="brake"){for(const d of[-.1,.1]){const m=J(new Ht(.075,.03,.3),e.glow,f+.01);m.position.x=d,n.add(m)}n.add(Ue(()=>new Ht(.2,.24,.05),fn(s[0],3,5),o,.22,e.metal,Math.PI/r))}else n.add(J(new wa(new yp(.2-.04*s[1],.34,fn(s[0],3,6)),100,.032,8,!1),e.metal,f)),n.add(J(new bt(.19,.19,.03,24),e.glow,f+.36));return n.add(Ue(()=>new bt(.03,.03,.04,6),r,o*.75,f,e.metal,Math.PI/r)),n}const bn=Math.PI*2,Ad=i=>i-Math.floor(i),jc={steel:{name:"Steel",color:12173516,rough:.24},chrome:{name:"Chrome",color:16054010,rough:.06},gunmetal:{name:"Gunmetal",color:4014674,rough:.34},gold:{name:"Gold",color:14854973,rough:.2},copper:{name:"Copper",color:13201727,rough:.26}};function Dy(i){const t={h:0,s:0,l:0};new It(i).getHSL(t);const e=(n,s,a)=>new $c({color:n,metalness:s,roughness:a,clearcoat:1,clearcoatRoughness:.08});return{alt:[e(new It().setHSL((t.h+.5)%1,Math.min(1,t.s*.9+.1),Math.min(.6,Math.max(.38,t.l))),.5,.34),e(new It().setHSL(t.h,t.s,t.l*.38),.6,.38),e(new It().setHSL(t.h,t.s*.3,.72),1,.2)],glass:new $c({color:new It(i).lerp(new It(16777215),.25),metalness:0,roughness:.08,transparent:!0,opacity:.5,clearcoat:1,clearcoatRoughness:.03,depthWrite:!1})}}function ja(i){const t=jc[i.metal]??jc.steel;return{metal:new re({color:t.color,metalness:1,roughness:t.rough}),paint:new $c({color:i.paint,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.08}),glow:new re({color:789776,emissive:i.glow,emissiveIntensity:1,roughness:.4}),rubber:new re({color:1381914,metalness:0,roughness:.92}),dark:new re({color:1645346,metalness:.7,roughness:.42}),...Dy(i.paint)}}function Je(i,t=220){const e=new tn;for(let n=0;n<=t;n++){const s=n/t*bn,a=i(s);n===0?e.moveTo(Math.cos(s)*a,Math.sin(s)*a):e.lineTo(Math.cos(s)*a,Math.sin(s)*a)}return e}function Ze(i,t,e,n){const s=new ar;s.absarc(t,e,n,0,bn,!0),i.holes.push(s)}function Ie(i,t,e){const n=new Jn(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:28});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function xe(i,t=72){return new ys(i.map(([e,n])=>new Q(e,n)),t)}function J(i,t,e=0){const n=new lt(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function Ue(i,t,e,n,s,a=0){const r=[];for(let o=0;o<t;o++){const l=a+o/t*bn,c=i();c.rotateY(l),c.translate(Math.cos(l)*e,n,-Math.sin(l)*e),r.push(c)}return J(ea(r),s)}const Rd={talon:i=>.6+.4*Math.pow(1-Ad(i*3/bn),1.8),bastion:i=>.94+.06*Math.cos(6*i),ripsaw:i=>.84+.16*(1-Ad(i*8/bn)),halo:i=>.7+.3*Math.pow(Math.abs(Math.cos(i)),5)},Ny={talon:3,bastion:6,ripsaw:8,halo:2},Uy={talon:1,bastion:1.05,ripsaw:1,halo:1.02},Cd=.25,ky=-.85;function Zc(i,t){for(const e of i)e.pivot.rotation.y=e.base+Cd+(ky-Cd)*t}function Oy(i){const t=new xt,e=c=>.52+.1*Math.pow(Math.max(0,Math.cos(3*c)),2),n=Je(e);Ze(n,0,0,.36),t.add(J(Ie(n,.12,.03),i.metal));const s=Je(c=>e(c)*.9);Ze(s,0,0,.4),t.add(J(Ie(s,.05,.02),i.paint,.18));const a=J(new Zt(.455,.014,8,96),i.glow,.272);a.rotation.x=Math.PI/2,t.add(a);const r=new tn;for(const[c,[h,u]]of[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]].entries())c===0?r.moveTo(h,u):r.lineTo(h,u);const o=new tn;for(const[c,[h,u]]of[[.04,-.06],[.28,-.11],[.54,-.06],[.64,.01],[.3,.05],[.04,.05]].entries())c===0?o.moveTo(h,u):o.lineTo(h,u);const l=[];for(let c=0;c<3;c++){const h=c/3*bn,u=new xt;u.position.set(Math.cos(h)*.56,.05,-Math.sin(h)*.56),u.add(J(Ie(r,.1,.025),i.metal)),u.add(J(Ie(o,.04,.015),i.paint,.15));const f=J(new Ht(.4,.02,.03),i.glow,.225);f.position.x=.32,u.add(f),u.add(J(new bt(.065,.065,.26,6),i.dark,.1)),u.add(J(new bt(.035,.035,.02,12),i.glow,.24)),t.add(u),l.push({pivot:u,base:h+Math.PI/2})}return Zc(l,.5),t.userData.wings=l,t}function Fy(i){const t=new xt,n=Je(o=>.62+.06*Math.pow(Math.max(0,Math.cos(4*o)),2));Ze(n,0,0,.36),t.add(J(Ie(n,.12,.03),i.metal));const s=J(new Zt(.5,.016,8,96),i.glow,.178);s.rotation.x=Math.PI/2,t.add(s);const a=[],r=.4*Math.PI;for(let o=0;o<4;o++){const l=o/4*bn+Math.PI/4,c=.78,h=Math.cos(l)*c,u=Math.sin(l)*c,f=new tn,d=(C,w)=>[Math.cos(w)*C-h,Math.sin(w)*C-u],m=l-r/2,x=l+r/2,p=1,g=.56,S=8;for(let C=0;C<=S;C++){const[w,T]=d(p*(1-.07*Math.sin(C/S*Math.PI)),m+(x-m)*C/S);C===0?f.moveTo(w,T):f.lineTo(w,T)}for(let C=S;C>=0;C--){const[w,T]=d(g,m+.04+(x-m-.08)*C/S);f.lineTo(w,T)}const y=new xt;y.position.set(h,.15,-u),y.add(J(Ie(f,.09,.025),i.paint,0));const _=J(new Ht(.34,.02,.035),i.glow,.13);_.rotation.y=l,y.add(_);for(const C of[-1,1]){const w=J(new bt(.035,.035,.03,8),i.dark,.13);w.position.set(Math.cos(l+C*.45)*c-h,.13,-(Math.sin(l+C*.45)*c-u)),y.add(w)}t.add(y),a.push(y)}return t.userData.plates=a,t}const By=2.1;function bp(i,t){for(const e of i)e.pivot.rotation.y=e.base+By*(1-t),e.weight.position.y=.02+.03*t}function zy(i){const t=new xt,e=Je(r=>.5+.06*Math.pow(Math.max(0,Math.cos(3*r)),2));Ze(e,0,0,.34),t.add(J(Ie(e,.14,.03),i.metal));const n=Je(()=>.44);Ze(n,0,0,.38),t.add(J(Ie(n,.05,.02),i.paint,.19));const s=J(new Zt(.41,.013,8,64),i.glow,.265);s.rotation.x=Math.PI/2,t.add(s);const a=[];for(let r=0;r<3;r++){const o=r/3*bn,l=new xt;l.position.set(Math.cos(o)*.5,.07,-Math.sin(o)*.5),l.add(J(new bt(.075,.075,.2,8),i.dark,.04)),l.add(J(new bt(.04,.04,.03,12),i.glow,.15)),l.add(J(new Ht(.34,.05,.08),i.metal,.03).translateX(.18));const c=new xt;c.position.set(.4,.02,0);const h=J(new bt(.13,.15,.2,6),i.metal),u=J(new bt(.1,.13,.05,6),i.paint,.125),f=J(new bt(.152,.152,.03,6),i.glow,-.02);c.add(h,u,f),l.add(c),t.add(l),a.push({pivot:l,base:o,weight:c})}return bp(a,1),t.userData.arms=a,t}function Hy(i,t){const e=ze(i).gen;if(e)return Sy(e,t);if(i==="shifter")return Oy(t);if(i==="breakaway")return Fy(t);if(i==="flail")return zy(t);const n=new xt,s=Rd[i]??Rd.talon,a=Ny[i]??3,r=Uy[i]??1,o=m=>r*Math.max(.52,s(m)*.86-.02),l=Je(m=>r*s(m));Ze(l,0,0,.36*r),n.add(J(Ie(l,.12,.03),t.metal));const c=Je(o);Ze(c,0,0,.44*r);const h=Math.max(a,4);for(let m=0;m<h;m++){const x=(m+.22)/h*bn,g=o(x)-.44*r;if(g<.2*r)continue;const S=.44*r+g*.5;Ze(c,Math.cos(x)*S,Math.sin(x)*S,Math.min(.1*r,g*.26))}n.add(J(Ie(c,.06,.02),t.paint,.18));const u=.285,f=J(new Zt(.47*r,.016,8,96),t.glow,u);f.rotation.x=Math.PI/2,n.add(f);const d=[];for(let m=0;m<a;m++){const x=(m+.1)/a*bn,p=o(x),g=Math.min(.26*r,p-.5*r);if(g<.08)continue;const S=new Ht(g,.02,.04*r);S.rotateY(x);const y=p-g/2-.05*r;S.translate(Math.cos(x)*y,u,-Math.sin(x)*y),d.push(S)}return d.length&&n.add(J(ea(d),t.glow)),n.add(Ue(()=>new bt(.035*r,.035*r,.05,6),h,.4*r,.2,t.metal,.6/h)),n}function Gy(i,t){const e=ze(i).recipe;if(e)return Py(e,t);const n=new xt;if(i==="flywheel"){const s=Je(()=>.72,96);Ze(s,0,0,.2);for(let o=0;o<6;o++){const l=o/6*bn;Ze(s,Math.cos(l)*.45,Math.sin(l)*.45,.13)}n.add(J(Ie(s,.06,.02),t.dark));const a=J(new Zt(.7,.085,18,96),t.metal,.1);a.rotation.x=Math.PI/2;const r=J(new Zt(.7,.014,8,96),t.glow,.187);r.rotation.x=Math.PI/2,n.add(a,r,J(new bt(.26,.28,.16,48),t.metal,.08))}else if(i==="anvil")n.add(J(xe([[0,0],[.5,0],[.72,.04],[.75,.08],[.75,.19],[.7,.23],[.3,.23],[0,.23]]),t.metal)),n.add(Ue(()=>new Ht(.035,.11,.05),40,.755,.135,t.dark)),n.add(J(xe([[.42,.231],[.6,.231],[.6,.245],[.42,.245]]),t.paint));else if(i==="feather"){const s=Je(()=>.66,96);Ze(s,0,0,.18);for(let r=0;r<8;r++){const o=r/8*bn;Ze(s,Math.cos(o)*.44,Math.sin(o)*.44,.1)}n.add(J(Ie(s,.05,.015),t.paint,.05));const a=J(new Zt(.67,.03,10,96),t.metal,.09);a.rotation.x=Math.PI/2,n.add(a,J(new bt(.22,.24,.16,40),t.metal,.08))}else n.add(J(xe([[0,0],[.3,0],[.4,.04],[.42,.1],[.64,.12],[.7,.14],[.7,.19],[.64,.21],[.44,.2],[.38,.23],[0,.23]]),t.metal)),n.add(J(xe([[.47,.207],[.61,.212],[.61,.225],[.47,.22]]),t.paint)),n.add(Ue(()=>new bt(.03,.03,.04,6),6,.67,.2,t.dark));return n}function Vy(i,t){const e=ze(i).recipe;if(e)return Ly(e,t);const n=new xt,s=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];if(i==="needle"){n.add(J(xe([[0,0],[.025,.02],[.1,.24],[.2,.3],...s]),t.metal));const a=J(new Zt(.215,.022,10,64),t.paint,.345);a.rotation.x=Math.PI/2,n.add(a)}else if(i==="flatline"){n.add(J(xe([[0,0],[.2,0],[.25,.04],[.25,.18],[.17,.24],[.2,.3]]),t.paint)),n.add(J(xe(s),t.metal));const a=J(new Zt(.255,.012,8,64),t.glow,.11);a.rotation.x=Math.PI/2,n.add(a)}else if(i==="gripper"){n.add(J(xe([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),n.add(Ue(()=>new Ht(.03,.13,.035),18,.272,.13,t.dark)),n.add(J(xe(s),t.metal));const a=J(new Zt(.225,.014,8,64),t.glow,.34);a.rotation.x=Math.PI/2,n.add(a)}else{const a=J(new zn(.13,32,20),new re({color:16054010,metalness:1,roughness:.05}),.13);n.add(a),n.add(J(xe([[.11,.14],[.19,.17],[.22,.26],[.2,.3]]),t.paint)),n.add(J(xe(s),t.metal))}return n}const mr=(i,t)=>e=>{const n=bn/i,s=Math.cos(Math.PI/i)/Math.cos((e%n+n)%n-n/2);return s+(1-s)*t};function Sp(i){const t=new tn;return t.moveTo(-i,-i*.9),t.lineTo(0,-i*.35),t.lineTo(i,-i*.9),t.lineTo(i,-i*.35),t.lineTo(0,i*.25),t.lineTo(-i,-i*.35),t.closePath(),Ie(t,.012,0)}function Wy(i){const t=new xt;t.add(J(new bt(.33,.33,.2,48),i.metal,.1));const e=mr(8,.1);t.add(J(Ie(Je(s=>.38*e(s),180),.16,.03),i.paint,.2));const n=.422;for(const s of[-.1,.1]){const a=J(new Ht(.075,.03,.3),i.glow,n+.01);a.position.x=s,t.add(a)}return t.add(Ue(()=>new Ht(.2,.26,.05),4,.38,.22,i.metal,Math.PI/4)),t.add(Ue(()=>new bt(.03,.03,.04,6),8,.3,n,i.metal)),t}class Xy extends Hn{constructor(){super()}getPoint(t,e=new L){const n=t*bn*3.5,s=.22-.03*Math.sin(t*Math.PI);return e.set(Math.cos(n)*s,t*.36,Math.sin(n)*s)}}function qy(i){const t=new xt;t.add(J(new bt(.33,.33,.2,48),i.metal,.1));const e=mr(5,.2);t.add(J(Ie(Je(s=>.36*e(s),180),.1,.03),i.paint,.2));const n=.35;return t.add(J(new wa(new Xy,120,.034,8,!1),i.metal,n)),t.add(J(new bt(.2,.2,.03,24),i.glow,n+.37)),t}function $y(i,t){const e=ze(i).recipe;if(e)return Iy(e,ze(i).ability??"dash",t);if(i==="anchor")return Wy(t);if(i==="coil")return qy(t);const n=new xt,s=i==="surge"?3:i==="lockjaw"?4:i==="rampart"?6:24,a=i==="surge"?.4:i==="viper"?.29:.35,r=i==="surge"?.42:i==="lockjaw"?.3:.12,o=i==="surge"||i==="viper";n.add(J(new bt(.33,.33,.2,48),t.metal,.1));const l=mr(s,r),c=Je(u=>a*l(u),180);n.add(J(Ie(c,.16,.03),t.paint,.2));const h=.422;if(o)for(const u of[.02,-.1]){const f=J(Sp(a*.36),t.glow,h);f.position.z=u,n.add(f)}else{const u=J(new Zt(a*.42,.022,8,48),t.glow,h+.01);u.rotation.x=Math.PI/2,n.add(u,J(new bt(a*.16,a*.16,.02,6),t.glow,h+.005))}return i==="lockjaw"?n.add(Ue(()=>new Ht(.16,.2,.12),4,a*.95,.3,t.metal,Math.PI/4)):i==="viper"?n.add(Ue(()=>new Ht(.14,.05,.03),3,a*1.05,.3,t.metal)):n.add(Ue(()=>new bt(.03,.03,.04,6),s,a*.72,h,t.metal,Math.PI/s)),n}function Yy(i,t){const e=new xt,n=s=>{const a=new tn;return s.forEach(([r,o],l)=>l?a.lineTo(r,o):a.moveTo(r,o)),J(Ie(a,.03,0),t)};if(i==="thermal")e.add(n([[-.3,-.2],[-.17,.1],[-.04,-.2]]),n([[-.12,-.2],[.03,.32],[.18,-.2]]),n([[.1,-.2],[.21,.06],[.32,-.2]]));else if(i==="cryo")for(const[s,a,r]of[[0,0,.17],[-.2,.12,.11],[.2,.1,.11],[.02,-.22,.09]]){const o=J(new bt(r,r,.05+r*.5,6),t,.04);o.position.x=s,o.position.z=a,e.add(o)}else if(i==="volt")e.add(n([[.06,.32],[-.2,-.02],[-.03,-.02],[-.1,-.32],[.2,.06],[.03,.06]]));else if(i==="gale")for(const[s,a]of[[.12,0],[.21,.9],[.3,1.8]]){const r=J(new Zt(s,.028,6,24,2.4),t,.02);r.rotation.set(Math.PI/2,0,a),e.add(r)}else if(i==="quake")for(const[s,a]of[[-.06,.18],[.08,0],[-.04,-.18]]){const r=J(new Ht(.48,.04,.11),t,.02);r.position.x=s,r.position.z=a,e.add(r)}else if(i==="plasma"){const s=J(new Zt(.16,.03,6,24),t,.03);s.rotation.x=Math.PI/2;const a=J(new Ht(.72,.04,.05),t,.03);a.rotation.y=.6,e.add(s,a)}else if(i==="gravity")for(const[s,a]of[[.3,.05],[.2,.03],[.1,.01]]){const r=J(new Zt(s,.022,6,28),t,a);r.rotation.x=Math.PI/2,e.add(r)}else if(i==="resonance")[.1,.22,.34,.22,.1,.22,.34].forEach((s,a)=>{const r=J(new Ht(.06,.04,s*1.6),t,.02);r.position.x=-.3+a*.1,e.add(r)});else{const s=J(new Zt(.2,.055,8,24,Math.PI),t,.03);s.rotation.x=-Math.PI/2,e.add(s);for(const a of[-.2,.2]){const r=J(new Ht(.11,.06,.2),t,.03);r.position.set(a,.03,.1),e.add(r)}}return e}function Ky(i){const t=new xt,e=dr(i).elements,n=new re({color:1645346,metalness:.8,roughness:.35});return t.add(J(new bt(.52,.58,.12,6),n,.06)),e.forEach((s,a)=>{const r=new re({color:789776,emissive:ke[s].color,emissiveIntensity:1.3}),o=J(new Zt(.47,.02,6,48,Math.PI*2/e.length),r,.125);o.rotation.set(Math.PI/2,0,a*Math.PI*2/e.length);const l=Yy(s,r);l.position.y=.125,e.length>1&&(l.scale.setScalar(.6),l.position.x=a?.2:-.2),t.add(o,l)}),t}const vi=["tip","disc","blade","core"],cr={tip:0,disc:.46,blade:.64,core:.7},jy={tip:0,disc:.85,blade:1.55,core:2.35};function Jc(i,t,e){return i==="blade"?Hy(t,e):i==="disc"?Gy(t,e):i==="tip"?Vy(t,e):$y(t,e)}function wp(i){const t=ja(i),e=new xt,n={};for(const r of vi){const o=r==="blade"&&i.blade.startsWith("boss_")?Cy(i.blade.slice(5),t,i.glow):Jc(r,i[r],t);o.position.y=cr[r],n[r]=o,e.add(o)}const s=n.blade.userData.wings??[];Zc(s,0);const a=n.blade.userData.arms??[];return{root:e,parts:n,mats:t,shift:r=>Zc(s,r),flail:r=>bp(a,r),boss:n.blade.userData.anim??null}}function Za(i){i.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const In=2.4;let ge=la.radius;const Jt=i=>In*Math.min(i/ge,1)**2,xn=(i,t)=>Jt(Math.min(ge,Math.hypot(i,t))),ds=18,Wi=14;function Zy(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.4,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[n,s]of[[128,5],[5,128]]){const a=n>s?t.createLinearGradient(0,0,128,0):t.createLinearGradient(0,0,0,128);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.5,"rgba(255,255,255,0.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(64-n/2,64-s/2,n,s)}return new bh(i)}function Pd(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new bh(i)}function Jy(){const i=document.createElement("canvas");i.width=32,i.height=8;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,32,0);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.65,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,8),new bh(i)}const Gi=new It;class Qy{mesh;pts=[];pos=new Float32Array(ds*2*3);col=new Float32Array(ds*2*3);color;constructor(t){this.color=new It(t);const e=new _e;e.setAttribute("position",new Ce(this.pos,3)),e.setAttribute("color",new Ce(this.col,3));const n=[];for(let s=0;s<ds-1;s++){const a=s*2;n.push(a,a+1,a+2,a+1,a+3,a+2)}e.setIndex(n),this.mesh=new lt(e,new Re({vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1,side:je})),this.mesh.frustumCulled=!1}reset(){this.pts.length=0}update(t,e,n){t?this.pts.unshift(t.clone()):this.pts.length&&this.pts.pop(),this.pts.length>ds&&(this.pts.length=ds);const s=this.pts.length;for(let a=0;a<ds;a++){const r=Math.min(a,s-1),o=a*6;if(s<2){this.pos.fill(0,o,o+6),this.col.fill(0,o,o+6);continue}const l=this.pts[r],c=this.pts[Math.max(0,r-1)],h=this.pts[Math.min(s-1,r+1)];let u=c.x-h.x,f=c.z-h.z;const d=Math.hypot(u,f)||1;u/=d,f/=d;const m=1-a/ds,x=n*m;this.pos[o]=l.x-f*x,this.pos[o+1]=l.y,this.pos[o+2]=l.z+u*x,this.pos[o+3]=l.x+f*x,this.pos[o+4]=l.y,this.pos[o+5]=l.z-u*x;const p=a<s?m*m*e:0;for(let g=0;g<2;g++)this.col[o+g*3]=this.color.r*p,this.col[o+g*3+1]=this.color.g*p,this.col[o+g*3+2]=this.color.b*p}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}class tb{mesh;pts=[];pos=new Float32Array(Wi*3*3);col=new Float32Array(Wi*3*3);accent=new It;hotC=new It;constructor(t){this.accent.setHex(t),this.hotC.setHex(t).lerp(new It(16773328),.5);const e=new _e;e.setAttribute("position",new Ce(this.pos,3)),e.setAttribute("color",new Ce(this.col,3));const n=[];for(let s=0;s<Wi-1;s++){const a=s*3;n.push(a,a+1,a+3,a+1,a+4,a+3,a+1,a+2,a+4,a+2,a+5,a+4)}e.setIndex(n),this.mesh=new lt(e,new Re({vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1,side:je})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(){this.pts.length=0}update(t,e,n){t&&e?this.pts.unshift({a:t.clone(),b:e.clone()}):this.pts.length&&this.pts.pop(),this.pts.length>Wi&&(this.pts.length=Wi);const s=this.pts.length;if(this.mesh.visible=s>1,!(s<2)){for(let a=0;a<Wi;a++){const r=Math.min(a,s-1),o=this.pts[r],l=r/(Wi-1),c=Math.pow(1-l,.85)*(r===0?.7:1),h=(o.a.x+o.b.x)/2,u=(o.a.y+o.b.y)/2,f=(o.a.z+o.b.z)/2,d=(o.a.x-o.b.x)/2,m=(o.a.y-o.b.y)/2,x=(o.a.z-o.b.z)/2,p=a*9;this.pos[p]=h+d*c,this.pos[p+1]=u+m*c,this.pos[p+2]=f+x*c;const g=.3+.25*Math.sin(l*Math.PI);this.pos[p+3]=h+d*c*g,this.pos[p+4]=u+m*c*g+.05*c,this.pos[p+5]=f+x*c*g,this.pos[p+6]=h-d*c*.8,this.pos[p+7]=u-m*c*.8,this.pos[p+8]=f-x*c*.8;const S=a<s?c*c*n:0,y=(_,C,w)=>{this.col[p+_*3]=C.r*w*S,this.col[p+_*3+1]=C.g*w*S,this.col[p+_*3+2]=C.b*w*S};y(0,this.accent,.55),y(1,this.hotC,.8),y(2,this.accent,.08)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}}class eb{constructor(t){this.spec=t;const e=t.radius,n=wp(t.look);this.glowMat=n.mats.glow,this.poseShift=n.shift,this.model=n,this.parts=vi.map(r=>n.parts[r]),n.root.scale.setScalar(t.look.scale??1),this.spinner.add(n.root),this.blur=new lt(new $o(e*.32,e*1.03,56),new Re({color:t.accent,transparent:!0,opacity:.3,blending:qe,depthWrite:!1,side:je})),this.blur.rotation.x=-Math.PI/2,this.blur.position.y=.95,this.shield=new lt(new Zt(e*1.3,.05,8,48),new Re({color:16777215,transparent:!0,blending:qe,depthWrite:!1})),this.shield.rotation.x=Math.PI/2,this.shield.position.y=.7,this.shield.visible=!1,this.light=new ga(t.accent,0,9,2),this.light.position.y=1.4;const s=new Map;n.parts.blade.traverse(r=>{const o=r;if(o.isMesh&&(o.material===n.mats.paint||o.material===n.mats.metal)){let l=s.get(o.material);l||(l=o.material.clone(),s.set(o.material,l),this.bladeMats.push(l)),o.material=l,l.color.getHex()===n.mats.paint.color.getHex()&&l.isMeshPhysicalMaterial&&(this.bladePaint=l)}}),this.chipPaint=n.mats.paint,this.chipMetal=n.mats.metal,this.tilt.add(this.spinner,this.blur,this.shield,this.markOut,this.markIn),this.swing=new tb(t.accent);const a=new Qi(.2,0);a.scale(.8,1.5,.8);for(let r=0;r<3;r++){const o=new lt(a,this.markMat);o.visible=!1,o.castShadow=!0,this.markShards.push(o)}this.aura.visible=!1,this.squash.add(this.unyaw),this.unyaw.add(this.tilt),this.group.add(this.squash,this.light,this.aura,...this.markShards),this.group.visible=!1,this.trail=new Qy(t.accent)}group=new xt;tilt=new xt;spinner=new xt;parts=[];blur;shield;light;trail;glowMat;poseShift;model;seen=!1;dropT=0;dropMax=.3;bossAct=0;bossFx=1;bossFz=0;justLanded=!1;recoilX=0;recoilZ=0;markShards=[];markMat=new re({color:16777215,emissive:16777215,emissiveIntensity:1.6,metalness:.3,roughness:.35,flatShading:!0});markOn=0;sunk=!1;flailV=1;prevAir=0;landSq=0;dig=0;braking=!1;brakeDir=[0,1];damageStage=0;seamMat=new Re({color:16742948,toneMapped:!1});scorchMat=new Re({color:328965,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});smoke=null;aura=new xt;stage=0;flash=0;bursted=!1;y=0;yVel=0;airborne=!1;fallen=0;precess=Math.random()*6;tumble=0;seed=Math.random()*6;fx=null;vx=0;vz=0;discGone=!1;prevStun=0;stagMax=1;stagDx=0;stagDz=1;stagClock=0;toppleT=0;topL=0;topV=0;leanNow=0;bladeMats=[];bladePaint=null;chipPaint;chipMetal;swing;markOut=new De;markIn=new De;prevStrike=0;stDx=0;stDz=1;bladeExtra=0;swingTail=0;stLunge=0;swA=new L;swB=new L;hot=0;squash=new xt;unyaw=new xt;sqX=0;sqV=0;sqYaw=0;sqDx=0;sqDz=0;recoil(t,e,n){this.recoilX+=t*(.25+n*.55),this.recoilZ+=e*(.25+n*.55),this.sqYaw=Math.atan2(-e,t),this.sqDx=t,this.sqDz=e,this.sqV+=55+n*120,this.hot=1}partBounds(t){t.updateWorldMatrix(!0,!0);const e=new L;let n=0,s=0;return t.traverse(a=>{const r=a;if(!r.isMesh||!r.visible)return;r.geometry.computeBoundingBox();const o=r.geometry.boundingBox;for(let l=0;l<8;l++)e.set(l&1?o.max.x:o.min.x,l&2?o.max.y:o.min.y,l&4?o.max.z:o.min.z).applyMatrix4(r.matrixWorld),t.worldToLocal(e),n=Math.max(n,e.y),s=Math.max(s,Math.hypot(e.x,e.z))}),{top:n,rad:s}}seams(t,e,n,s,a){const{top:r,rad:o}=this.partBounds(t);if(!(o<.2))for(let l=0;l<e;l++){const c=n+l/e*Math.PI*2+l%2*.2,h=o*s,u=o*(s+a)*.55,f=o*a,d=c+.2*(l%2?1:-1),m=[[Math.cos(c)*h,Math.sin(c)*h],[Math.cos(d)*u,Math.sin(d)*u],[Math.cos(c+.05)*f,Math.sin(c+.05)*f]];for(let p=0;p<2;p++){const g=m[p+1][0]-m[p][0],S=m[p+1][1]-m[p][1],y=Math.hypot(g,S),_=new lt(new Ht(y,.03,.045),this.seamMat);_.position.set((m[p][0]+m[p+1][0])/2,r+.018,(m[p][1]+m[p+1][1])/2),_.rotation.y=-Math.atan2(S,g),t.add(_)}const x=new lt(new ma(o*.2,7),this.scorchMat);x.rotation.x=-Math.PI/2,x.scale.set(1.5,.8,1),x.position.set(Math.cos(d+.35)*u,r+.008,Math.sin(d+.35)*u),x.rotation.z=d,t.add(x)}}addDamage(t){for(;this.damageStage<t;)this.damageStage++,this.damageStage===1?(this.seams(this.model.parts.disc,4,this.seed,.35,.92),this.seams(this.model.parts.core,3,this.seed+1,.15,.85)):(this.seams(this.model.parts.core,4,this.seed+3,.1,.95),this.seams(this.model.parts.tip,2,this.seed+4,.2,.9))}dropPlate(t){const n=(this.model.parts.blade.userData.plates??[])[t];return!n||!n.parent?null:(this.group.updateWorldMatrix(!0,!0),n)}setStage(t){t<=this.stage||(this.stage=t,this.addDamage(t),t>=1&&this.model.parts.blade.traverse(e=>{e.isMesh&&e.material===this.bladePaint&&(e.visible=!1)}))}shed(t,e){const n=[];if(this.group.updateWorldMatrix(!0,!0),t===1){const s=[];this.model.parts.blade.traverse(a=>{const r=a;r.isMesh&&r.material===this.bladePaint&&r.visible&&s.push(r)});for(const a of s.slice(0,10)){a.updateWorldMatrix(!0,!1);const r=new lt(a.geometry,a.material);r.castShadow=!0,a.matrixWorld.decompose(r.position,r.quaternion,r.scale),e.add(r),n.push(r)}}else t===2&&!this.discGone&&(this.discGone=!0,e.attach(this.model.parts.disc),n.push(this.model.parts.disc));return n}update(t,e,n,s,a=null){if(this.flash=Math.max(0,this.flash-n*5),!t.inPlay||this.bursted){this.group.visible=!1,this.trail.update(null,0,0),this.swing.update(null,null,0);return}this.group.visible=!0,this.seen||(this.seen=!0,this.dropMax=this.spec.boss?.8:.3,this.dropT=this.dropMax);const r=t.px+(t.x-t.px)*e,o=t.py+(t.y-t.py)*e,l=Math.hypot(r,o),c=vn(t);(t.leaving||t.out==="ringout")&&l>ge-.4?(this.airborne||(this.airborne=!0,this.y=In,this.yVel=5),this.yVel-=24*n,this.y+=this.yVel*n,this.tumble+=n*7):this.y=Jt(l),this.dropT>0&&(this.dropT-=n,this.dropT<=0&&(this.justLanded=!0));const h=t.airT>0?1-t.airT/dt.JUMP_T:0,u=t.airT>0?Math.sin(Math.PI*Math.max(0,(h-.1)/.9))*2.6:0;let f=1;t.airT>0&&(h<.1?f=1-.3*Math.sin(h/.1*(Math.PI/2)):h<.4?f=1+.2*(1-(h-.1)/.3):h>.85&&(f=1+.1*((h-.85)/.15))),this.prevAir>0&&t.airT<=0&&(this.landSq=1),this.prevAir=t.airT,this.landSq=Math.max(0,this.landSq-n/.24),f*=1-.32*this.landSq*Math.cos((1-this.landSq)*4.2);const d=1/Math.sqrt(f);this.sunk=t.sink>0;const m=t.sink>0?16*t.sink*t.sink:0;t.sink>0&&(this.tumble+=n*5),this.group.position.set(r,this.y+u-m+(this.dropT>0?(this.dropT/this.dropMax)**2*(this.spec.boss?24:8):0),o),this.spinner.rotation.y=-t.phase,this.poseShift(t.shift),this.spec.flail&&(this.flailV+=(Math.max(0,Math.min(1,(c-.08)/.8))-this.flailV)*(1-Math.exp(-n*7)),this.model.flail(this.flailV));const x=Math.hypot(t.vx,t.vy);this.vx=t.vx,this.vz=t.vy;const p=Math.pow(Math.max(0,(.55-c)/.55),1.4);this.precess+=n*(3+p*16);let g=.025+p*.5;const S=Math.sin(s*(26+p*22))*p*.05,y=Math.exp(-n*6);this.recoilX*=y,this.recoilZ*=y;let _=0,C=0,w=0,T=0;if(t.stunT>0&&t.stunT>this.prevStun+.01){this.stagMax=Math.max(.3,t.stunT),this.stagClock=0;const N=x>.5?Math.atan2(t.vy,t.vx):Math.random()*6.28;this.stagDx=Math.cos(N),this.stagDz=Math.sin(N)}if(this.prevStun=t.stunT,t.stunT>0){this.stagClock+=n;const N=Math.min(1,1-t.stunT/this.stagMax),H=.62*Math.exp(-N*4.5)*Math.min(1,N/.06),K=.5*Math.pow(1-N,1.4),j=this.stagClock*(17-N*7);_=this.stagDz*H+Math.sin(j)*K,C=-this.stagDx*H+Math.cos(j)*K,w=Math.sin(j*2.3)*.07*(1-N),T=Math.cos(j*1.9)*.07*(1-N)}let M=0;if(t.out==="spinout"){this.toppleT+=n;const N=1.3-g;this.topV+=((N-this.topL)*70-this.topV*7.5)*n,this.topL+=this.topV*n,this.precess+=n*(9*Math.exp(-this.toppleT*1.5)-3),g+=Math.max(0,this.topL);const H=g;M=Math.max(0,this.spec.radius*Math.sin(H)-.55*Math.cos(H))*.85;const K=38*Math.exp(-this.toppleT*1.3);if(this.fx&&Math.random()<K*n&&x<6){const j=-Math.cos(this.precess)*g,ot=Math.sin(this.precess)*g,ut=Math.hypot(j,ot)||1,k=r+j/ut*this.spec.radius*.95,q=o+ot/ut*this.spec.radius*.95,ct=-ot/ut,it=j/ut,at=3+Math.random()*6;this.fx(k,this.y+.1,q,ct*at+(Math.random()-.5)*2,1+Math.random()*3,it*at+(Math.random()-.5)*2,.2+Math.random()*.25,1,.65,.25)}}let v=0,b=0;const R=t.strikeT>0;if(R&&this.prevStrike<=0&&(this.swing.reset(),a?(this.stDx=a[0],this.stDz=a[1]):x>1?(this.stDx=t.vx/x,this.stDz=t.vy/x):(this.stDx=Math.cos(this.precess),this.stDz=Math.sin(this.precess))),this.prevStrike=t.strikeT,R){const N=1-t.strikeT/dt.STRIKE_T;v=N<.3?-.4*Math.sin(N/.3*(Math.PI/2)):-.4+.9*Math.sin(Math.min(1,(N-.3)/.25)*(Math.PI/2))*(1-Math.max(0,(N-.55)/.45)*.55),b=Math.sin(N*Math.PI),this.swingTail=Wi}this.bladeExtra+=n*38*b;const I=this.model.parts.blade;if(I.rotation.y=this.bladeExtra,I.scale.setScalar(1+.1*b),this.model.boss){const N=t.bossMove&&t.bossStage===0?1-t.bossT/Math.max(.01,t.bossDur):0;this.bossAct+=((t.bossMove==="charge"&&t.bossStage===1?1:0)-this.bossAct)*(1-Math.exp(-n*12)),t.bossMove?(this.bossFx=t.bossDx,this.bossFz=t.bossDy):x>1&&(this.bossFx=t.vx/x,this.bossFz=t.vy/x),this.model.boss({t:s,stage:t.stage,rear:N,act:this.bossAct,aim:-Math.atan2(this.bossFz,this.bossFx)+t.phase-this.bladeExtra,move:t.bossMove})}if(R||this.swingTail>0){const N=this.spec.radius;this.markOut.position.set(this.stDx*N*1.5,.95,this.stDz*N*1.5),this.markIn.position.set(this.stDx*N*.95,.7,this.stDz*N*.95)}this.braking=t.brakeT>0,this.dig+=((this.braking?1:0)-this.dig)*(1-Math.exp(-n*(this.braking?40:10)));let O=0;if(this.dig>.01){const N=Math.hypot(t.brakeDx,t.brakeDy);N>.1&&(this.brakeDir=[t.brakeDx/N,t.brakeDy/N]),O=.3*this.dig;const H=this.dig*.05;if(w+=Math.sin(s*91)*H,T+=Math.cos(s*83)*H,this.braking&&this.fx){const[K,j]=this.brakeDir,ot=n*110,ut=Math.floor(ot)+(Math.random()<ot-Math.floor(ot)?1:0);for(let k=0;k<ut;k++){const q=5+Math.random()*9,ct=(Math.random()-.5)*.9,it=Math.cos(ct),at=Math.sin(ct);this.fx(r+K*.25,this.y+.08,o+j*.25,(K*it-j*at)*q,.6+Math.random()*2.4,(K*at+j*it)*q,.12+Math.random()*.22,1,.7+Math.random()*.3,.3,10)}}}this.leanNow=g,this.group.position.y+=M,this.group.position.x+=w,this.group.position.z+=T,this.tilt.rotation.set(Math.sin(this.precess)*g+S+t.steerY*.3+this.recoilZ+this.tumble+_+this.stDz*v+this.brakeDir[1]*O,0,Math.cos(this.precess)*g+S*.7-t.steerX*.3-this.recoilX+this.tumble*.6+C-this.stDx*v-this.brakeDir[0]*O),this.stLunge=v>0?v:0;{const N=Math.min(1,Math.max(t.stage*.34,1-t.armour)+(t.stunT>0?.45:0));vi.forEach((H,K)=>{if(H==="disc"&&this.discGone)return;const j=this.model.parts[H];if(N<.06||H==="tip"){j.position.set(0,cr[H],0),j.rotation.x=j.rotation.z=0;return}const ot=N*.04*(H==="core"?1.4:1),ut=K*2.1+this.seed;j.position.set(Math.sin(s*47+ut)*ot,cr[H]+Math.sin(s*61+ut*1.3)*ot*.6,Math.sin(s*41+ut*1.7)*ot),j.rotation.x=Math.sin(s*39+ut)*N*.06,j.rotation.z=Math.sin(s*33+ut*.7)*N*.06})}{this.sqV+=(-30*30*this.sqX-2*30*this.sqV)*n,this.sqX+=this.sqV*n;const H=Math.max(-.4,Math.min(1,this.sqX));this.squash.rotation.y=this.sqYaw,this.unyaw.rotation.y=-this.sqYaw;const K=1-.12*this.dig;this.squash.scale.set((1-H*.2)*d*(1+.06*this.dig),(1+H*.05)*f*K,(1+H*.1)*d*(1+.06*this.dig)),this.squash.position.set(this.sqDx*H*.16+this.stDx*this.stLunge*.7,0,this.sqDz*H*.16+this.stDz*this.stLunge*.7)}this.hot=Math.max(0,this.hot-n/.08);for(const N of this.bladeMats)N.emissive.setScalar(this.hot>0?1:0),N.emissiveIntensity=this.hot>0?.4+2.6*this.hot:1;if(this.blur.material.opacity=.16*c,this.glowMat.emissiveIntensity=.7+1.1*c+this.flash*5,this.light.intensity=4*c+this.flash*30,this.shield.visible=t.braceT>0,this.shield.visible){const N=1+.08*Math.sin(s*30);this.shield.scale.set(N,N,1),this.shield.material.color.setHex(16777215)}R?(this.markOut.getWorldPosition(this.swA),this.markIn.getWorldPosition(this.swB),this.swA.y=Math.max(this.swA.y,this.y+.15),this.swB.y=Math.max(this.swB.y,this.y+.1),this.swing.update(this.swA,this.swB,1)):(this.swingTail=Math.max(0,this.swingTail-1),this.swing.update(null,null,1));let F=null;for(const N of No)t.status[N]>0&&(!F||t.status[N]>t.status[F])&&(F=N);if(this.smoke&&(t.stage>=1||t.armour<.5)&&!t.out){const N=t.stage>=2?16:t.stage>=1?9:4;if(Math.random()<N*n){const H=Math.random()*Math.PI*2,K=this.spec.radius*.5;this.smoke(r+Math.cos(H)*K-t.vx*.02,this.y+.7+u,o+Math.sin(H)*K-t.vy*.02,-t.vx*.12+(Math.random()-.5)*.8,1.3+Math.random()*1.2,-t.vy*.12+(Math.random()-.5)*.8,.3+Math.random()*.25,.9+Math.random()*.6)}}if(this.markOn=F?Math.min(1,this.markOn+n*7):Math.max(0,this.markOn-n*7),F){const N=ke[F].color;this.markMat.color.setHex(N),this.markMat.emissive.setHex(N)}const X=this.spec.radius*(1.1+.35*this.markOn)+.15;if(this.markShards.forEach((N,H)=>{N.visible=this.markOn>.02;const K=s*3.2+H*Math.PI*2/3;N.position.set(Math.cos(K)*X,.85+Math.sin(s*5+H*2)*.12,Math.sin(K)*X),N.rotation.set(s*4+H,K,s*3+H*2),N.scale.setScalar(this.markOn*(1+.1*Math.sin(s*14+H)))}),this.aura.visible=t.superT>0,t.superT>0){for(const N of this.aura.children)N.userData.spin&&(N.rotation.z+=N.userData.spin*n);this.aura.scale.setScalar(1+.06*Math.sin(s*22))}const D=Math.hypot(t.vx,t.vy),B=!t.out&&!this.airborne;this.trail.update(B?new L(r,this.y+.1,o):null,Math.min(1,D/18)*(t.dashT>0||t.boostT>0?.4:.1),.08+Math.min(.1,D/200)+(t.dashT>0?.06:0))}}const hn=900;class nb{constructor(t){this.canvas=t,this.renderer=new f_({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_f,this.renderer.toneMapping=ch,this.renderer.toneMappingExposure=1,this.scene.background=new It(329483),this.scene.fog=new Vo(329483,34,80);const e=new wo(this.renderer);this.scene.environment=e.fromScene(new mp,.04).texture,this.scene.environmentIntensity=.55;const n=this.sun=new Yc(16777215,2.4);n.position.set(7,20,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-13,s.right=s.top=13,s.near=1,s.far=50,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,this.scene.add(n,new fp(9413887,329226,.45));const a=new ga(16742963,110,40,2);a.position.set(-14,5,-4);const r=new ga(3385599,110,40,2);r.position.set(14,5,-4),this.scene.add(a,r),this.setStadium(la);const o=new _e;this.sparkPos.fill(-999),o.setAttribute("position",new Ce(this.sparkPos,3)),o.setAttribute("color",new Ce(this.sparkCol,3)),this.sparks=new M_(o,new ip({size:.22,map:Pd(),vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1})),this.sparks.frustumCulled=!1,this.scene.add(this.sparks);const l=new _e;this.streakPos.fill(-999),l.setAttribute("position",new Ce(this.streakPos,3)),l.setAttribute("color",new Ce(this.streakCol,3));const c=new Float32Array(hn*8),h=new Uint32Array(hn*6);for(let d=0;d<hn;d++){c.set([0,1,1,1,0,0,1,0],d*8);const m=d*4;h.set([m,m+1,m+2,m+1,m+3,m+2],d*6)}l.setAttribute("uv",new Ce(c,2)),l.setIndex(new Ce(h,1)),this.streaks=new lt(l,new Re({map:Jy(),vertexColors:!0,transparent:!0,blending:qe,depthWrite:!1,side:je,fog:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);const u=Zy();for(let d=0;d<10;d++){const m=new ed(new Vc({map:u,color:16777215,transparent:!0,opacity:0,blending:qe,depthWrite:!1}));m.visible=!1,this.scene.add(m),this.shocks.push({mesh:m,life:0,max:1,size:1})}const f=new lt(new $o(.95,1.08,48),new Re({color:16777215,transparent:!0,opacity:.9,blending:qe,depthWrite:!1,depthTest:!1,side:je}));f.rotation.x=-Math.PI/2,this.aimArrow=new lt(new Di(.22,.7,3),new Re({color:16777215,transparent:!0,opacity:.9,blending:qe,depthWrite:!1,depthTest:!1})),this.aim.add(f,this.aimArrow),this.aim.visible=!1,this.scene.add(this.aim),this.composer=new xp(this.renderer),this.composer.addPass(new vp(this.scene,this.camera)),this.bloom=new Ts(new Q(1,1),.38,.4,.92),this.composer.addPass(this.bloom),this.composer.addPass(new Mp),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new Eo;camera=new dn(42,1,.1,200);composer;bloom;tops=[];debugCam=null;pieces=[];chips=[];puffs=[];puffGeo=new qo(.2,0);smokeMat=new re({color:2369068,roughness:1,flatShading:!0});dustMat=new re({color:9209464,roughness:1,flatShading:!0});stoneMat=new re({color:7039600,roughness:.9,flatShading:!0});world=null;shove=new L;shoveV=new L;finT=0;finDur=1;finTarget=-1;finEnv=0;fx3=0;trauma=0;focus=new L;zoom=1;distScale=1;aim=new xt;aimArrow;raycaster=new Q_;arena=new xt;stadium=la;segs=[];pillarMeshes=[];dangerMat=new Re({color:16726820});fovKick=0;bolts=[];constructs=[];sun;beams=[];plates=[];floorPhase=[];hazards=[];slabGeo=new Ht(1,.3,1);marks=[];spikeGeo=new Di(.26,1,5);chevGeo=(()=>{const t=new tn;t.moveTo(-.45,-.55),t.lineTo(.55,0),t.lineTo(-.45,.55),t.lineTo(-.15,0),t.closePath();const e=new Jn(t,{depth:.1,bevelEnabled:!1});return e.rotateX(-Math.PI/2),e})();warnMat=new re({color:2755846,emissive:16730650,emissiveIntensity:1.5,flatShading:!0});heavyMat=new re({color:3816774,metalness:.8,roughness:.4,flatShading:!0});introT=0;introDur=3;introTarget=0;introEnv=0;shardPool=[];scorchPool=[];shardGeo=(()=>{const t=new Qi(.28,0);return t.scale(.7,.7,2.2),t})();shardMat=new re({color:16773824,emissive:16765802,emissiveIntensity:2,flatShading:!0});scorchGeo=new ma(.6,7);scorchMat=new re({color:722437,emissive:8004104,emissiveIntensity:.35,roughness:1,flatShading:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2});sparkPos=new Float32Array(hn*3);sparkCol=new Float32Array(hn*3);sparkVel=new Float32Array(hn*3);sparkLife=new Float32Array(hn);sparkMax=new Float32Array(hn);sparkBase=new Float32Array(hn*3);sparkCap=hn;sparkGrav=new Float32Array(hn);streakPos=new Float32Array(hn*12);streakCol=new Float32Array(hn*12);streaks;sparkNext=0;sparks;shocks=[];applyQuality(t){const e=gf[t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap)),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap));const n=this.sun.shadow;n.mapSize.x!==e.shadow&&(n.mapSize.set(e.shadow,e.shadow),n.map?.dispose(),n.map=null),this.bloom.enabled=e.bloom,this.sparkCap=e.sparks,this.sparkNext%=this.sparkCap,this.resize()}setStadium(t){this.scene.remove(this.arena),this.arena.traverse(p=>p.geometry?.dispose()),this.arena=new xt,this.scene.add(this.arena),this.stadium=t,ge=t.radius;const e=t.radius,n=e+3,s=this.sun.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.far=90,s.updateProjectionMatrix(),this.sun.position.set(7,20,9).multiplyScalar(Math.max(1,e/10));for(const p of this.beams)this.scene.remove(p.beam,p.gem);this.beams=[];const a=[],r=t.collapse?t.collapse.inner*e:e;for(let p=0;p<=48;p++){const g=r*p/48;a.push(new Q(g,Jt(g)))}t.collapse?a.push(new Q(r,-.35)):a.push(new Q(e+.7,In),new Q(e+.9,-1.2));const o=new re({color:t.theme.floor,metalness:.75,roughness:.26,side:je}),l=new lt(new ys(a,96),o);if(l.receiveShadow=!0,this.arena.add(l),this.plates=[],this.floorPhase=t.collapse?new Array(t.collapse.sectors).fill(0):[],t.collapse){const p=t.collapse,g=Math.PI*2/p.sectors;for(let S=0;S<p.sectors;S++){const y=Math.PI/2-(S+1)*g+.012,_=[];for(let M=0;M<=14;M++){const v=r+(e-r)*M/14;_.push(new Q(v,Jt(v)))}_.push(new Q(e+.7,In),new Q(e+.9,-1.2),new Q(r,-.35),new Q(r,Jt(r)));const C=o.clone();C.emissive=new It(16734744),C.emissiveIntensity=0;const w=new lt(new ys(_,6,y,g-.024),C);w.receiveShadow=!0,this.arena.add(w);const T=new lt(new ys([new Q(r,-.9),new Q(e+.8,-.9)],6,y,g-.024),new Re({color:4855304,side:je}));T.visible=!1,this.arena.add(T),this.plates.push({mesh:w,mat:C,ember:T})}}this.hazards=[];const c=new re({color:t.theme.wall,metalness:1,roughness:.3}),h=new Re({color:t.theme.strip});for(const p of t.hazards??[]){const g=new xt;if(p.kind==="bar"){const y=(p.r1-p.r0)/7;for(let C=0;C<7;C++){const w=p.r0+(C+.5)*y,T=Math.atan((Jt(w+.2)-Jt(w-.2))/.4),M=new lt(new Ht(y*.97,.7,p.width*2),c);M.position.set(w,Jt(w)+.35,0),M.rotation.z=T,M.castShadow=!0;const v=new lt(new Ht(y*.6,.05,p.width*1.1),h);v.position.set(w,Jt(w)+.72,0),v.rotation.z=T,g.add(M,v)}const _=new lt(new bt(p.width*1.4,p.width*1.6,.9,6),c);_.position.set(p.r0,Jt(p.r0)+.4,0),_.castShadow=!0,g.add(_)}else{const S=new lt(new bt(p.r*.92,p.r,1.1,6),c);S.position.y=.55,S.castShadow=!0;const y=new lt(new bt(p.r*1.01,p.r*1.01,.09,6),h);y.position.y=.78;const _=new lt(new bt(p.r*.6,p.r*.75,.12,6),c);_.position.y=1.14,g.add(S,y,_)}this.arena.add(g),this.hazards.push({h:p,obj:g})}const u=new Re({color:2899819});for(const p of[e*.33,e*.6]){const g=new lt(new Zt(p,.022,6,96),u);g.rotation.x=Math.PI/2,g.position.y=Jt(p)+.012,this.arena.add(g)}if(t.rail){const p=e-t.rail.width-.9,g=new lt(new ys([new Q(p,Jt(p)+.015),new Q(e-.25,Jt(e-.25)+.015)],96),new Re({color:t.theme.strip,transparent:!0,opacity:.05,blending:qe,depthWrite:!1,side:je})),S=new lt(new Zt(p,.03,6,128),new Re({color:t.theme.strip}));S.rotation.x=Math.PI/2,S.position.y=Jt(p)+.02,this.arena.add(g,S)}const f=new Re({color:t.theme.strip}),d=Math.PI*2/t.segments,m=d-.03;this.segs=[];for(let p=0;p<t.segments;p++){const g=new xt;g.rotation.y=-(p*d-d/2+.015),this.arena.add(g);const S=new re({color:t.theme.wall,metalness:1,roughness:.24,emissive:16724736,emissiveIntensity:0}),y=new lt(new Zt(e+.2,.34,12,10,m),S);y.rotation.x=Math.PI/2,y.position.y=In+.1,y.castShadow=!0;const _=new lt(new Zt(e-.16,.035,6,10,m),f);_.rotation.x=Math.PI/2,_.position.y=In-.05;const C=new lt(new Zt(e+.15,.05,6,8,m),this.dangerMat);C.rotation.x=Math.PI/2,C.position.y=In+.03;const w=t.openSegs.includes(p);y.visible=_.visible=!w,C.visible=w,g.add(y,_,C),this.segs.push({wall:y,glow:_,lip:C,mat:S,open:w})}this.pillarMeshes=t.pillars.map(p=>{const g=new xt,S=new lt(new bt(p.r*.92,p.r*1.08,1.7,6),new re({color:t.theme.wall,metalness:1,roughness:.3,emissive:16724736,emissiveIntensity:0}));S.castShadow=!0;const y=new lt(new Zt(p.r*1.02,.04,6,24),f);return y.rotation.x=Math.PI/2,y.position.y=.45,g.add(S,y),g.position.set(p.x,Jt(Math.hypot(p.x,p.y))+.85,p.y),this.arena.add(g),g});const x=new lt(new ma(90,48),new re({color:461070,roughness:.9,metalness:.2}));x.rotation.x=-Math.PI/2,x.position.y=-1.2,x.receiveShadow=!0,this.arena.add(x)}chunks(t,e,n,s,a,r,o){const l=new re({color:a,metalness:1,roughness:.3});for(let c=0;c<s;c++){const h=.18+Math.random()*.3,u=new lt(new Ht(h*1.4,h,h*.9),l);u.castShadow=!0,u.position.set(t+(Math.random()-.5)*1.6,e+Math.random()*.5,n+(Math.random()-.5)*1.6),this.scene.add(u);const f=3+Math.random()*9;this.pieces.push({obj:u,v:new L(r*f+(Math.random()-.5)*5,4+Math.random()*8,o*f+(Math.random()-.5)*5),w:new L(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:5})}}breakPiece(t,e,n,s){const a=Math.hypot(n,s)||1;if(t==="wall"){const r=this.segs[e];if(!r||r.open)return;r.open=!0,r.wall.visible=r.glow.visible=!1,r.lip.visible=!0,this.chunks(n,In+.2,s,9,this.stadium.theme.wall,n/a,s/a),this.shock(n,In+.2,s,7,.5,16738874)}else{const r=this.pillarMeshes[e];if(!r||!r.visible)return;r.visible=!1,this.chunks(n,r.position.y,s,10,this.stadium.theme.wall,0,0),this.shock(n,r.position.y,s,5,.45,16765088)}for(let r=0;r<70;r++){const o=Math.random()*Math.PI*2,l=3+Math.random()*13;this.spark(n,In*(t==="wall"?1:.5)+.4,s,Math.cos(o)*l,3+Math.random()*10,Math.sin(o)*l,.3+Math.random()*.6,1,.6,.3)}this.trauma=Math.min(1,this.trauma+.8),this.fovKick=Math.max(this.fovKick,5)}kick(t){this.fovKick=Math.max(this.fovKick,t)}burstSparks(t,e,n,s,a,r){Gi.setHex(r);for(let o=0;o<s;o++){const l=Math.random()*Math.PI*2,c=a*(.3+Math.random());this.spark(t,e,n,Math.cos(l)*c,2+Math.random()*a*.7,Math.sin(l)*c,.3+Math.random()*.5,Gi.r,Gi.g,Gi.b)}}bolt(t,e,n,s,a){const r=[];for(let c=0;c<=9;c++){const h=c/9,u=c===0||c===9?0:.7,f=t+(n-t)*h+(Math.random()-.5)*u,d=e+(s-e)*h+(Math.random()-.5)*u;r.push(new L(f,Jt(Math.min(ge,Math.hypot(f,d)))+1+Math.sin(h*Math.PI)*1.2,d))}const l=new np(new _e().setFromPoints(r),new yh({color:a,transparent:!0,blending:qe,depthWrite:!1}));l.frustumCulled=!1,this.scene.add(l),this.bolts.push({line:l,life:.22})}superFx(t,e){const n=this.tops[t];if(!n)return;const s=n.group.position;e.forEach((a,r)=>{const o=ke[a].color,l=Jt(Math.min(ge,Math.hypot(s.x,s.z))),c=gy(a,(h,u)=>Jt(Math.min(ge,Math.hypot(s.x+h,s.z+u)))-l);c.group.position.set(s.x,l,s.z),c.group.rotation.y=r*.5,c.update(0,0,()=>{}),this.scene.add(c.group),this.constructs.push({c,i:t,t:0,el:a}),this.shock(s.x,s.y+.3,s.z,8+r*2,.4,o),this.burstSparks(s.x,s.y+.6,s.z,130,22,o)}),this.trauma=1,this.fovKick=Math.max(this.fovKick,10)}pulseFx(t,e){const n=ke[t.element].color,s=Jt(Math.min(ge,Math.hypot(t.x,t.y)))+.3;if(t.element==="plasma"&&t.targets.length){const a=e.tops[t.targets[0]],r=this.constructs.find(o=>o.i===t.i&&o.el==="plasma"&&o.t<.1);a&&r&&r.c.group.position.set(a.x,Jt(Math.min(ge,Math.hypot(a.x,a.y))),a.y)}this.shock(t.x,s,t.y,t.radius*1.9,.3,n);for(const a of t.targets){const r=e.tops[a];r&&(this.bolt(t.x,t.y,r.x,r.y,n),this.burstSparks(r.x,Jt(Math.min(ge,Math.hypot(r.x,r.y)))+.7,r.y,22,9,n),this.tops[a]&&(this.tops[a].flash=1))}this.trauma=Math.min(1,this.trauma+.25)}reactFx(t,e,n){const s=Jt(Math.min(ge,Math.hypot(t,e)))+.7;this.shock(t,s,e,9,.45,n),this.shock(t,s+.4,e,5,.3,16777215),this.burstSparks(t,s,e,120,19,n),this.trauma=Math.min(1,this.trauma+.7),this.fovKick=Math.max(this.fovKick,6)}flashTop(t,e,n){this.shock(t,e,n,4.5,.3,16767408)}crackTop(t,e){const n=this.tops[t];if(!n||n.bursted)return;n.setStage(e);const s=n.group.position,a=n.shed(e,this.scene);Math.hypot(s.x,s.z);for(const r of a){const o=Math.atan2(s.z,s.x)+(Math.random()-.5)*2.6,l=5+Math.random()*8;this.pieces.push({obj:r,v:new L(Math.cos(o)*l+n.vx*.5,6+Math.random()*6,Math.sin(o)*l+n.vz*.5),w:new L(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),life:5,flat:e===2,hot:1})}this.flashTop(s.x,s.y+.6,s.z),this.burstSparks(s.x,s.y+.6,s.z,46,14,16756832),this.trauma=Math.min(1,this.trauma+.6)}dropLoot(t,e,n){n.forEach((s,a)=>{const r=a/Math.max(1,n.length)*Math.PI*2+.6,o=n.length>1?1.8:0,l=t+Math.cos(r)*o,c=e+Math.sin(r)*o,h=Jt(Math.min(ge,Math.hypot(l,c))),u=new ed(new Vc({map:Pd(),color:s,transparent:!0,opacity:0,blending:qe,depthWrite:!1}));u.scale.setScalar(3.2),u.position.set(l,h+1.1,c);const f=new lt(new Qi(.5),new re({color:1052950,emissive:s,emissiveIntensity:2.2,metalness:.7,roughness:.2,flatShading:!0}));f.scale.set(.75,1.25,.75),f.position.set(l,h+1.1,c),this.scene.add(u,f),this.beams.push({beam:u,gem:f,life:0}),this.shock(l,h+.2,c,3.5,.5,s);const d=new It(s);for(let m=0;m<40;m++){const x=Math.random()*Math.PI*2,p=2+Math.random()*7;this.spark(l,h+.5,c,Math.cos(x)*p,5+Math.random()*10,Math.sin(x)*p,.5+Math.random()*.6,d.r,d.g,d.b)}})}inHole(t,e){const n=this.stadium.collapse;return!n||Math.hypot(t,e)<n.inner*this.stadium.radius?!1:this.floorPhase[eh(n,Math.atan2(e,t))]===2}wedgePoint(t){const e=this.stadium.collapse,n=this.stadium.radius,s=(t+.1+Math.random()*.8)/e.sectors*Math.PI*2,a=e.inner*n+.3+Math.random()*(n-e.inner*n-.6);return[Math.cos(s)*a,Math.sin(s)*a]}floorWarn(t){!this.plates[t]||this.floorPhase[t]>=1||(this.floorPhase[t]=1,this.trauma=Math.min(1,this.trauma+.2))}floorFall(t){const e=this.plates[t];if(e){this.floorPhase[t]=2,e.mesh.visible=!1,e.ember.visible=!0;for(let n=0;n<9;n++){const[s,a]=this.wedgePoint(t),r=new lt(this.slabGeo,e.mat);r.scale.set(1.6+Math.random()*1.8,1,1.4+Math.random()*1.6),r.position.set(s,Jt(Math.hypot(s,a))+.1,a),r.rotation.set((Math.random()-.5)*.3,Math.random()*6,(Math.random()-.5)*.3),r.castShadow=!0,this.scene.add(r),this.pieces.push({obj:r,v:new L((Math.random()-.5)*2,-1-Math.random()*3,(Math.random()-.5)*2),w:new L((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),life:3}),n%2===0&&this.puff(s,Jt(Math.hypot(s,a))+.3,a,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,1.2+Math.random()*.8,.8+Math.random()*.5,!0)}for(let n=0;n<50;n++){const[s,a]=this.wedgePoint(t);this.spark(s,Jt(Math.hypot(s,a))+.2,a,(Math.random()-.5)*8,4+Math.random()*8,(Math.random()-.5)*8,.3+Math.random()*.4,1,.6,.25,12)}this.trauma=Math.min(1,this.trauma+.6),this.fovKick=Math.max(this.fovKick,4)}}fallFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;for(let s=0;s<20;s++){const a=Math.random()*6.28;this.spark(n.x,n.y+.3,n.z,Math.cos(a)*3,2+Math.random()*3,Math.sin(a)*3,.3+Math.random()*.3,1,.7,.3,10)}this.trauma=Math.min(1,this.trauma+.3)}legendFx(t){const e=xn(t.x,t.y),n=this.tops[t.i],s=n?.spec.accent??16761402;switch(t.id){case"shard":t.n?(this.burstSparks(t.x,e+.8,t.y,40,14,16773296),this.shock(t.x,e+.3,t.y,3.2,.25,16770720),this.trauma=Math.min(1,this.trauma+.35),t.k!==void 0&&this.tops[t.k]?.recoil(0,.01,.8)):this.burstSparks(t.x,e+.8,t.y,24,9,16773296);break;case"bank":{const a=n?.group.position;if(!a)break;for(let r=0;r<50;r++){const o=Math.random()*Math.PI*2,l=2+Math.random()*2.5;this.spark(a.x+Math.cos(o)*l,a.y+.5+Math.random(),a.z+Math.sin(o)*l,-Math.cos(o)*14,0,-Math.sin(o)*14,.3,.5,.9,1,0)}this.shock(a.x,a.y+.3,a.z,4,.3,10479871),n&&(n.hot=1);break}case"twin":case"opener":this.burstSparks(t.x,e+.7,t.y,30,10,s),this.shock(t.x,e+.3,t.y,2.6,.2,s);break;case"echo":this.burstSparks(t.x,e+.7,t.y,60,13,s),this.trauma=Math.min(1,this.trauma+.4);break;case"thorn":for(let a=0;a<16;a++){const r=Math.random()*Math.PI*2;this.spark(t.x,e+.6,t.y,Math.cos(r)*9,1+Math.random()*3,Math.sin(r)*9,.2+Math.random()*.2,1,.85,.35,8)}break;case"rend":{const a=this.tops[t.i]?.group.position;if(a)for(let r=0;r<3;r++)this.spark(a.x+(Math.random()-.5),a.y+.5,a.z+(Math.random()-.5),(Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3,.4,1,.2,.15,12);break}case"scorch":{if(t.n){const a=this.tops[t.i]?.group.position;a&&this.spark(a.x+(Math.random()-.5),a.y+.4,a.z+(Math.random()-.5),(Math.random()-.5)*2,2+Math.random()*3,(Math.random()-.5)*2,.35,1,.5,.1,10)}break}}}bossIntro(t,e){this.introTarget=t,this.introDur=e,this.introT=e}telegraphFx(t){if(t.move==="drops")return;const e=new xt,n=[],s=(o,l,c,h=this.warnMat)=>{const u=new lt(o,h);return u.position.set(l,xn(l,c),c),u.castShadow=!0,e.add(u),n.push(u),u};let a,r=t.dur;if(t.move==="slam"){for(let l=0;l<14;l++){const c=l/14*Math.PI*2;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.97,t.y+Math.sin(c)*t.r*.97)}for(let l=0;l<7;l++){const c=l/7*Math.PI*2+.3;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.55,t.y+Math.sin(c)*t.r*.55)}a=(l,c)=>n.forEach((h,u)=>{const f=Math.min(1,l*3.2)*(u<14?1.5:.9)*(.9+.2*Math.sin(c*(12+40*l)+u));h.scale.set(1,Math.max(.01,f),1),h.position.y=xn(h.position.x,h.position.z)+f*.5,h.rotation.y=c*2+u})}else if(t.move==="charge"){const l=Math.floor(14.73684210526316),c=-Math.atan2(t.dy,t.dx);let h=0;for(let u=0;u<l;u++){const f=t.x+t.dx*(2.6+u*1.9),d=t.y+t.dy*(2.6+u*1.9);if(Math.hypot(f,d)>ge-.3)break;const m=s(this.chevGeo,f,d);if(m.rotation.y=c,m.scale.set(1.3,1,t.r*.85),h++,u%2===0)for(const x of[-1,1]){const p=f-t.dy*x*t.r,g=d+t.dx*x*t.r;Math.hypot(p,g)<ge-.3&&s(this.spikeGeo,p,g).scale.set(.8,1.1,.8)}}r=t.dur+.75,a=(u,f)=>{let d=0;n.forEach(m=>{m.geometry===this.chevGeo&&(m.visible=d<h*Math.min(1,u*2.4),m.scale.y=1+.9*Math.max(0,Math.sin(f*16-d*.9)),d++)})}}else[5,8.5].forEach((o,l)=>{for(let c=0;c<9;c++){const h=s(this.chevGeo,t.x,t.y);h.userData={a:c/9*Math.PI*2+l*.3,r0:o,row:l},h.scale.set(1.2,1,.9)}}),a=(o,l,c)=>{n.forEach(u=>{const{a:f,r0:d,row:m}=u.userData,x=(l*.9+m*.5)%1,p=d*(1-.4*x)+1.2,g=t.x+Math.cos(f)*p,S=t.y+Math.sin(f)*p;u.position.set(g,xn(g,S)+.05,S),u.rotation.y=-(f+Math.PI),u.scale.y=.6+.8*Math.min(1,o*3)*(1-x*.4)});const h=c*160;for(let u=0;u<Math.floor(h)+(Math.random()<h-Math.floor(h)?1:0);u++){const f=Math.random()*Math.PI*2,d=4+Math.random()*8,m=t.x+Math.cos(f)*d,x=t.y+Math.sin(f)*d;this.spark(m,xn(m,x)+.15,x,-Math.cos(f)*(9+Math.random()*6),.4,-Math.sin(f)*(9+Math.random()*6),.3,.6,.85,1,2)}};this.scene.add(e),this.marks.push({g:e,life:r,max:r,tick:a})}bossmoveFx(t){const e=xn(t.x,t.y);if(t.move==="slam"){for(let n=0;n<90;n++){const s=Math.random()*Math.PI*2,a=6+Math.random()*16;this.spark(t.x+Math.cos(s)*1.5,e+.2,t.y+Math.sin(s)*1.5,Math.cos(s)*a,.5+Math.random()*4,Math.sin(s)*a,.2+Math.random()*.4,1,.6,.2,10)}this.shock(t.x,e,t.y,t.r*1.4,.35,16760928),this.floorChips(t.x,e,t.y,30,null,1);for(let n=0;n<8;n++){const s=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(s)*2,e+.3,t.y+Math.sin(s)*2,Math.cos(s)*5,1+Math.random()*2,Math.sin(s)*5,1.2+Math.random(),1,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,8),this.recoilAll(t.x,t.y,t.targets,1)}else{for(let n=0;n<50;n++)this.spark(t.x-t.dx*2,e+.2,t.y-t.dy*2,-t.dx*(8+Math.random()*14)+(Math.random()-.5)*8,.5+Math.random()*4,-t.dy*(8+Math.random()*14)+(Math.random()-.5)*8,.2+Math.random()*.3,1,.7,.3,10);this.floorChips(t.x,e,t.y,16,[-t.dx,-t.dy],.8),this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,5)}}recoilAll(t,e,n,s){for(const a of n){const r=this.world?.tops[a];if(!r)continue;const o=Math.hypot(r.x-t,r.y-e)||1;this.tops[a]?.recoil((r.x-t)/o,(r.y-e)/o,s)}}zoneWarnFx(t){const e=new xt,n=[];for(let r=0;r<7;r++){const o=r/7*Math.PI*2,l=t.x+Math.cos(o)*t.r*.9,c=t.y+Math.sin(o)*t.r*.9,h=new lt(this.spikeGeo,this.warnMat);h.position.set(l,xn(l,c),c),h.scale.set(.8,.01,.8),n.push(h),e.add(h)}const s=new lt(new bt(t.r*.8,t.r*.8,1.4,6),this.heavyMat);s.castShadow=!0,e.add(s);const a=xn(t.x,t.y);this.scene.add(e),this.marks.push({g:e,life:t.dur,max:t.dur,tick:(r,o)=>{s.position.set(t.x,a+.7+(1-r*r)*18,t.y),s.rotation.y=o*.8+r*3,n.forEach((l,c)=>{const h=Math.min(1,r*4)*(.9+.3*Math.sin(o*(14+30*r)+c));l.scale.y=Math.max(.01,h),l.position.y=xn(l.position.x,l.position.z)+h*.5})}})}zoneHitFx(t){const e=xn(t.x,t.y);for(let s=0;s<50;s++){const a=Math.random()*Math.PI*2,r=4+Math.random()*11;this.spark(t.x+Math.cos(a)*.8,e+.2,t.y+Math.sin(a)*.8,Math.cos(a)*r,.5+Math.random()*4,Math.sin(a)*r,.2+Math.random()*.35,1,.7,.25,10)}this.shock(t.x,e,t.y,t.r*2.2,.3,16765072),this.floorChips(t.x,e,t.y,14,null,.8);for(let s=0;s<4;s++){const a=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(a),e+.3,t.y+Math.sin(a),Math.cos(a)*2.5,1+Math.random(),Math.sin(a)*2.5,1+Math.random()*.6,1,!0)}const n=new lt(new bt(t.r*.8,t.r*.8,.7,6),this.heavyMat);n.castShadow=!0,n.position.set(t.x,e+.4,t.y),this.scene.add(n),this.pieces.push({obj:n,v:new L,w:new L,life:3,ttl:1.6}),this.trauma=Math.min(1,this.trauma+.55),this.recoilAll(t.x,t.y,t.targets,.8)}bossPhaseFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.burstSparks(n.x,n.y+.8,n.z,120,16,e.spec.accent),this.floorChips(n.x,n.y,n.z,24,null,1),this.trauma=1,this.fovKick=Math.max(this.fovKick,7),e.hot=1}hazardHit(t){const e=Jt(Math.min(ge,Math.hypot(t.x,t.y)))+.55;for(let n=0;n<8+t.strength*30;n++){const s=Math.atan2(t.ny,t.nx)+(Math.random()-.5)*1.3,a=5+Math.random()*12*(.4+t.strength);this.spark(t.x,e,t.y,Math.cos(s)*a,.5+Math.random()*4,Math.sin(s)*a,.15+Math.random()*.3,1,.85,.4,8)}t.strength>.25&&this.shock(t.x,e-.3,t.y,2+t.strength*3,.25,15265952),this.tops[t.i]?.recoil(t.nx,t.ny,t.strength),this.trauma=Math.min(1,this.trauma+t.strength*.4),this.shoveV.x+=t.nx*t.strength*14,this.shoveV.z+=t.ny*t.strength*14}puff(t,e,n,s,a,r,o,l,c){if(this.puffs.length>=60){const u=this.puffs.shift();this.scene.remove(u.m)}const h=new lt(this.puffGeo,c?this.dustMat:this.smokeMat);h.position.set(t,e,n),h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),h.scale.setScalar(.01),this.scene.add(h),this.puffs.push({m:h,v:new L(s,a,r),w:new L(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2),life:l,max:l,s0:o})}plateFx(t,e){const n=this.tops[t];if(!n||n.bursted)return;const s=n.dropPlate(e-1);if(!s)return;this.scene.attach(s);const a=n.group.position,r=s.position.x-a.x,o=s.position.z-a.z,l=Math.hypot(r,o)||1,c=7+Math.random()*5;this.pieces.push({obj:s,v:new L(r/l*c+n.vx*.5,7+Math.random()*4,o/l*c+n.vz*.5),w:new L((Math.random()-.5)*20,(Math.random()-.5)*30,(Math.random()-.5)*20),life:5,flat:!0,hot:1});for(let h=0;h<28;h++){const u=Math.atan2(o,r)+(Math.random()-.5)*1.6,f=5+Math.random()*12;this.spark(s.position.x,s.position.y+.1,s.position.z,Math.cos(u)*f,1+Math.random()*5,Math.sin(u)*f,.15+Math.random()*.3,1,.75,.35,8)}this.flashTop(s.position.x,s.position.y,s.position.z),n.hot=1,this.trauma=Math.min(1,this.trauma+.3)}floorChips(t,e,n,s,a,r){for(let o=0;o<s;o++){const l=a?Math.atan2(a[1],a[0])+(Math.random()-.5)*1.6:Math.random()*Math.PI*2;this.chip(t,e+.2,n,Math.cos(l),Math.sin(l),r,this.stoneMat)}}brakeFx(t){const e=Jt(Math.min(ge,Math.hypot(t.x,t.y))),n=Math.min(1,t.speed/22);if(t.phase==="stop"){const s=[t.dx,t.dy];this.shock(t.x,e+.15,t.y,2+n*1.5,.3,16769712);for(let a=0;a<40+n*50;a++){const r=Math.atan2(s[1],s[0])+(Math.random()-.5)*1.2,o=6+Math.random()*(10+n*14);this.spark(t.x,e+.15,t.y,Math.cos(r)*o,.5+Math.random()*3.5,Math.sin(r)*o,.15+Math.random()*.3,1,.75+Math.random()*.25,.35,8)}this.floorChips(t.x,e,t.y,5+Math.floor(n*6),s,.4+n);for(let a=0;a<4;a++)this.puff(t.x+s[0]*a*.4,e+.3,t.y+s[1]*a*.4,s[0]*4+(Math.random()-.5)*3,.8+Math.random(),s[1]*4+(Math.random()-.5)*3,.9+Math.random()*.5,.6+Math.random()*.4,!0);this.trauma=Math.min(1,this.trauma+.25+n*.3),this.shoveV.x+=s[0]*12*n,this.shoveV.z+=s[1]*12*n}else{this.floorChips(t.x,e,t.y,6,[-t.dx,-t.dy],.9);for(let s=0;s<50;s++){const a=s*.32,r=1+Math.random()*3;this.spark(t.x-t.dx*a,e+.5,t.y-t.dy*a,-t.dx*r,.5+Math.random(),-t.dy*r,.25+Math.random()*.3,.8,.95,1)}for(let s=0;s<40;s++){const a=Math.atan2(-t.dy,-t.dx)+(Math.random()-.5)*.9,r=8+Math.random()*14;this.spark(t.x,e+.2,t.y,Math.cos(a)*r,.5+Math.random()*2,Math.sin(a)*r,.15+Math.random()*.25,1,.9,.6,8)}this.shoveV.x-=t.dx*16,this.shoveV.z-=t.dy*16,this.trauma=Math.min(1,this.trauma+.3),this.fovKick=Math.max(this.fovKick,8)}}jumpFx(t,e){const n=e.tops[t];if(!n)return;const s=Jt(Math.min(ge,Math.hypot(n.x,n.y)));this.floorChips(n.x,s,n.y,7,null,.6);for(let a=0;a<5;a++){const r=Math.random()*Math.PI*2;this.puff(n.x+Math.cos(r)*.5,s+.25,n.y+Math.sin(r)*.5,Math.cos(r)*3.5,.5+Math.random()*.8,Math.sin(r)*3.5,.8+Math.random()*.5,.5+Math.random()*.35,!0)}for(let a=0;a<26;a++){const r=Math.random()*Math.PI*2,o=4+Math.random()*8;this.spark(n.x,s+.2,n.y,Math.cos(r)*o,.3+Math.random()*1.5,Math.sin(r)*o,.14+Math.random()*.2,1,.95,.8,8)}this.trauma=Math.min(1,this.trauma+.12)}landFx(t,e){const n=Jt(Math.min(ge,Math.hypot(t.x,t.y)));this.shock(t.x,n+.2,t.y,t.radius*1.8,.35,16771496),this.burstSparks(t.x,n+.4,t.y,60,13,16769184),this.floorChips(t.x,n,t.y,10+(t.targets.length?4:0),null,1.2);for(let s=0;s<7;s++){const a=s/7*Math.PI*2+Math.random()*.5;this.puff(t.x+Math.cos(a)*.6,n+.3,t.y+Math.sin(a)*.6,Math.cos(a)*5,.8+Math.random(),Math.sin(a)*5,1+Math.random()*.6,.6+Math.random()*.4,!0)}this.trauma=Math.min(1,this.trauma+(t.targets.length?.6:.35)),this.fovKick=Math.max(this.fovKick,5);for(const s of t.targets)this.tops[s]&&(this.tops[s].flash=1)}counterFx(t){const e=Jt(Math.min(ge,Math.hypot(t.x,t.y)));for(let n=0;n<30;n++){const s=n*.3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*2,1+Math.random(),-t.dy*2,.25+Math.random()*.2,1,.8,.3)}this.shock(t.x,e+.3,t.y,5,.35,16760896),this.fovKick=Math.max(this.fovKick,7)}boostFx(t,e){const n=e.tops[t];if(!n)return;const s=Math.hypot(n.vx,n.vy)||1,a=Jt(Math.hypot(n.x,n.y))+.4;for(let r=0;r<26;r++){const o=4+Math.random()*10;this.spark(n.x,a,n.y,-n.vx/s*o+(Math.random()-.5)*6,1+Math.random()*4,-n.vy/s*o+(Math.random()-.5)*6,.2+Math.random()*.3,.7,.85,1)}}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.camera.aspect=t/e,this.distScale=Math.max(1.15,1.5/this.camera.aspect),this.camera.updateProjectionMatrix()}setTops(t,e=this.stadium){this.setStadium(e);for(const n of this.tops)this.scene.remove(n.group,n.trail.mesh,n.swing.mesh);for(const n of this.pieces)this.scene.remove(n.obj);this.pieces=[];for(const n of this.puffs)this.scene.remove(n.m);this.puffs=[];for(const n of this.marks)this.scene.remove(n.g);this.marks=[],this.introT=0,this.introEnv=0,this.tops=t.map(n=>new eb(n));for(const n of this.tops)n.smoke=(s,a,r,o,l,c,h,u)=>this.puff(s,a,r,o,l,c,h,u,!1);for(const n of this.tops)n.fx=(s,a,r,o,l,c,h,u,f,d,m)=>this.spark(s,a,r,o,l,c,h,u,f,d,m);for(const n of this.tops)this.scene.add(n.group,n.trail.mesh,n.swing.mesh)}spark(t,e,n,s,a,r,o,l,c,h,u=26){const f=this.sparkNext;this.sparkGrav[f]=u,this.sparkNext=(f+1)%this.sparkCap,this.sparkPos.set([t,e,n],f*3),this.sparkVel.set([s,a,r],f*3),this.sparkBase.set([l,c,h],f*3),this.sparkLife[f]=this.sparkMax[f]=o}shock(t,e,n,s,a,r){const o=this.shocks.reduce((h,u)=>h.life<u.life?h:u);o.life=o.max=a*.55,o.size=s*.75,o.mesh.position.set(t,e+.4,n),o.mesh.material.color.setHex(r),o.mesh.material.rotation=Math.random()*Math.PI,o.mesh.visible=!0;const l=new It(r),c=Math.min(110,Math.floor(14+s*8));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,f=s/a*(.35+Math.random()*.75),d=.6+Math.random()*.4;this.spark(t+Math.cos(u)*.3,e+Math.random()*.25,n+Math.sin(u)*.3,Math.cos(u)*f,Math.random()*2.2,Math.sin(u)*f,a*(.5+Math.random()*.7),Math.min(1,l.r+(1-d)),Math.min(1,l.g*d+(1-d)),Math.min(1,l.b*d+(1-d)),3)}}hit(t,e,n,s,a,r,o,l=-1){const c=Jt(Math.hypot(t,e))+.75;if(l>=0){const S=l===2?16777215:this.tops[l]?.spec.accent??16777215;this.shock(t,c,e,6+a*5,.42,S);for(let y=0;y<60;y++){const _=Math.random()*Math.PI*2,C=6+Math.random()*16;this.spark(t,c,e,Math.cos(_)*C,2+Math.random()*8,Math.sin(_)*C,.3+Math.random()*.4,1,1,1)}this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,4)}const h=this.tops[r],u=this.tops[o],f=this.world?.tops[r],d=this.world?.tops[o];let m=0;if(f&&d){const S=-s,y=n,_=f.spec.radius,C=d.spec.radius;m=(f.vx-d.vx)*S+(f.vy-d.vy)*y+f.spin*_*.15+d.spin*C*.15}const x=m>=0?1:-1,p=Math.min(22,5+Math.abs(m)*.4),g=Math.floor(6+a*46);for(let S=0;S<g;S++){const y=Math.random()<.82?x:-x,_=p*(.35+Math.random()*.75)*(.5+a),C=(Math.random()-.5)*.7,w=-s*y+n*C,T=n*y+s*C,M=Math.random();this.spark(t,c,e,w*_,1.5+Math.random()*6*(.3+a),T*_,.25+Math.random()*.5,1,.55+M*.45,.15+M*.5)}if(a>.4)for(const[S,y]of[[h,-1],[u,1]]){if(!S)continue;const _=1+Math.floor(a*3);for(let C=0;C<_;C++)this.chip(t,c,e,n*y,s*y,a,C%2?S.chipMetal:S.chipPaint)}if(a>.35&&this.shock(t,c,e,1.5+a*4.5,.32,16769712),this.trauma=Math.min(1,this.trauma+a*.75),this.tops[r]&&(this.tops[r].flash=a),this.tops[o]&&(this.tops[o].flash=a),this.tops[r]?.recoil(-n,-s,a),this.tops[o]?.recoil(n,s,a),a>.3){const S=(a-.2)*22;this.shoveV.x+=n*S,this.shoveV.z+=s*S}}chipGeo=new Yo(.16);chip(t,e,n,s,a,r,o){if(this.chips.length>=70){const d=this.chips.shift();d.ttl=0}const l=new lt(this.chipGeo,o);l.castShadow=!0;const c=.7+Math.random()*.9;l.scale.set(c,c*(.5+Math.random()*.5),c),l.position.set(t,e,n),l.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(l);const h=Math.atan2(a,s)+(Math.random()-.5)*1.8,u=4+Math.random()*7*(.5+r),f={obj:l,v:new L(Math.cos(h)*u,4+Math.random()*6,Math.sin(h)*u),w:new L(Math.random()*24-12,Math.random()*24-12,Math.random()*24-12),life:2,ttl:2.4+Math.random()*1.2};this.pieces.push(f),this.chips.push(f)}finisherFx(t,e,n){const s=this.tops[e],a=this.tops[t];if(!s||!a)return;const r=s.group.position,o=a.group.position,l=r.x-o.x,c=r.z-o.z,h=Math.hypot(l,c)||1,u=l/h,f=c/h;for(let d=0;d<14;d++)this.chip(r.x,r.y+.8,r.z,u+(Math.random()-.5)*.8,f+(Math.random()-.5)*.8,1,d%2?s.chipMetal:s.chipPaint);for(let d=0;d<4;d++)this.chip(r.x,r.y+.8,r.z,u,f,1,d%2?a.chipMetal:a.chipPaint);for(let d=0;d<70;d++){const m=Math.atan2(f,u)+(Math.random()-.5)*1.5,x=8+Math.random()*20;this.spark(r.x,r.y+.8,r.z,Math.cos(m)*x,1+Math.random()*7,Math.sin(m)*x,.3+Math.random()*.5,1,.8+Math.random()*.2,.5+Math.random()*.5)}s.hot=1,s.recoil(u,f,1),this.shoveV.x+=u*34,this.shoveV.z+=f*34,this.trauma=Math.min(1,this.trauma+.8),this.finDur=n?1.2:.7,this.finT=this.finDur,this.finTarget=e}rimHit(t,e,n){const s=In+.3,a=Math.hypot(t,e)||1;for(let r=0;r<6+n*26;r++){const o=2+Math.random()*8,l=Math.atan2(e,t)+Math.PI+(Math.random()-.5)*2.2;this.spark(t/a*ge,s,e/a*ge,Math.cos(l)*o,2+Math.random()*6,Math.sin(l)*o,.2+Math.random()*.35,.6,.8,1)}this.trauma=Math.min(1,this.trauma+n*.35)}burstTop(t){const e=this.tops[t];if(!e||e.bursted)return;e.bursted=!0;const n=e.group.position.clone(),s={tip:.7,disc:1,blade:1.1,core:1.5};vi.forEach((a,r)=>{const o=e.parts[r];if(a==="disc"&&e.discGone)return;this.scene.attach(o);const l=Math.random()*Math.PI*2,c=(4+Math.random()*7)*(s[a]??1);this.pieces.push({obj:o,v:new L(Math.cos(l)*c+e.vx*.7,(a==="tip"?5:7)*(s[a]??1)+Math.random()*5,Math.sin(l)*c+e.vz*.7),w:new L(Math.random()*14-7,(Math.random()-.5)*30,Math.random()*14-7),life:4,flat:a==="disc"||a==="blade",hot:1})});for(let a=0;a<160;a++){const r=Math.random()*Math.PI*2,o=3+Math.random()*16;this.spark(n.x,n.y+.7,n.z,Math.cos(r)*o,3+Math.random()*12,Math.sin(r)*o,.4+Math.random()*.7,1,.8,.5)}this.shock(n.x,n.y+.6,n.z,9,.5,16777215),this.trauma=1}ringOut(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.shock(n.x,e.sunk?Math.max(-.4,n.y):In+.2,n.z,6,.45,16733491),this.trauma=Math.min(1,this.trauma+.6)}setAim(t,e=0,n=0,s=0,a=1){if(this.aim.visible=t,!t)return;const r=Math.hypot(e,n);if(this.aim.position.set(e,Jt(r)+.3,n),this.aimArrow.visible=Math.abs(s)>.01&&r>.05,this.aimArrow.visible){const o=-n/r*a*Math.sign(s),l=e/r*a*Math.sign(s),c=1.3+Math.abs(s)*.9;this.aimArrow.position.set(o*c,.02,l*c),this.aimArrow.quaternion.setFromUnitVectors(new L(0,1,0),new L(o,0,l)),this.aimArrow.scale.setScalar(.7+Math.abs(s)*.8)}}simToScreen(t,e){const n=new L(t,Jt(Math.min(ge,Math.hypot(t,e)))+.6,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(n.x+1)/2*s.width,y:s.top+(1-n.y)/2*s.height,behind:n.z>1}}screenToSim(t,e){const n=this.canvas.getBoundingClientRect(),s=new Q((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const a=this.raycaster.ray.origin,r=this.raycaster.ray.direction;let o=.8,l=0,c=0;for(let h=0;h<5;h++){const u=(o-a.y)/r.y;l=a.x+r.x*u,c=a.z+r.z*u,o=Jt(Math.hypot(l,c))}return{x:l,y:c}}frame(t,e,n,s,a=0){this.world=t,t.tops.forEach((M,v)=>{let b=null;if(M.strikeT>0){let R=1e9;t.tops.forEach((I,O)=>{if(O===v||t.teams[O]===t.teams[v]||!I.inPlay||I.out)return;const F=Math.hypot(I.x-M.x,I.y-M.y);F<R&&F>.01&&(R=F,b=[(I.x-M.x)/F,(I.y-M.y)/F])})}this.tops[v]?.update(M,e,n,s,b)});for(const M of this.tops){if(!M.justLanded)continue;M.justLanded=!1;const v=M.group.position;if(M.spec.boss){this.shock(v.x,v.y+.15,v.z,11,.5,M.spec.accent),this.burstSparks(v.x,v.y+.3,v.z,150,18,M.spec.accent),this.floorChips(v.x,v.y,v.z,40,null,1);for(let b=0;b<14;b++){const R=Math.random()*6.28;this.puff(v.x+Math.cos(R)*1.5,v.y+.3,v.z+Math.sin(R)*1.5,Math.cos(R)*4,1+Math.random()*2,Math.sin(R)*4,1.4+Math.random(),1+Math.random()*.6,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,9)}else this.shock(v.x,v.y+.15,v.z,4.5,.35,M.spec.accent),this.burstSparks(v.x,v.y+.3,v.z,46,11,M.spec.accent),this.trauma=Math.min(1,this.trauma+.3)}for(const{h:M,obj:v}of this.hazards){const b=th(M,t.time);M.kind==="bar"?v.rotation.y=-b.a:v.position.set(b.x,Jt(Math.min(ge,Math.hypot(b.x,b.y))),b.y)}this.plates.forEach((M,v)=>{if(this.floorPhase[v]!==1){M.mesh.position.set(0,0,0),M.mesh.rotation.set(0,0,0),M.mat.emissiveIntensity=0;return}const b=s*60+v*7;if(M.mesh.position.set(Math.sin(b*1.3)*.05,Math.sin(b*1.7)*.07,Math.cos(b*1.1)*.05),M.mesh.rotation.set(Math.sin(b)*.004,0,Math.cos(b*1.3)*.004),M.mat.emissiveIntensity=.14+.1*Math.sin(s*40),Math.random()<n*40){const[R,I]=this.wedgePoint(v),O=Jt(Math.hypot(R,I))+.1;this.spark(R,O,I,(Math.random()-.5)*3,3+Math.random()*5,(Math.random()-.5)*3,.25+Math.random()*.3,1,.55,.15,12)}if(Math.random()<n*8){const[R,I]=this.wedgePoint(v);this.puff(R,Jt(Math.hypot(R,I))+.2,I,(Math.random()-.5)*1.5,.8+Math.random(),(Math.random()-.5)*1.5,.5+Math.random()*.4,.7,!0)}});{const M=t.shots;for(;this.shardPool.length<M.length;){const b=new lt(this.shardGeo,this.shardMat);b.castShadow=!0,this.scene.add(b),this.shardPool.push(b)}this.shardPool.forEach((b,R)=>{const I=M[R];if(b.visible=!!I,!I)return;const O=t.tops[I.k];b.position.set(I.x,xn(I.x,I.y)+.9,I.y),O&&(b.rotation.y=-Math.atan2(O.y-I.y,O.x-I.x)+Math.PI/2),b.rotation.z+=n*18,n>0&&this.spark(I.x,xn(I.x,I.y)+.9,I.y,(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3,.25,1,.8,.3,4)});const v=t.burn;for(;this.scorchPool.length<Math.min(70,v.length);){const b=new lt(this.scorchGeo,this.scorchMat);b.rotation.x=-Math.PI/2,b.receiveShadow=!0,this.scene.add(b),this.scorchPool.push(b)}this.scorchPool.forEach((b,R)=>{const I=v[R];if(b.visible=!!I,!I)return;const O=Math.min(1,I.t/.6);b.position.set(I.x,xn(I.x,I.y)+.06,I.y),b.scale.setScalar(.6+.5*O),b.rotation.z=R*1.7,n>0&&Math.random()<n*3&&this.spark(I.x,xn(I.x,I.y)+.1,I.y,Math.random()-.5,1.5+Math.random()*2,Math.random()-.5,.4,1,.45,.1,4)})}this.marks=this.marks.filter(M=>(M.life-=n,M.life<=0?(this.scene.remove(M.g),!1):(M.tick(1-M.life/M.max,s,n),!0)));for(let M=0;M<t.tops.length;M++){const v=t.tops[M],b=this.tops[M];if(!v.spec.boss||!b||!v.inPlay||v.out||n<=0)continue;const R=b.group.position;if(v.bossMove==="charge"&&v.bossStage===1){for(let I=0;I<4;I++)this.spark(R.x-v.bossDx*2+(Math.random()-.5)*2,R.y+.15,R.z-v.bossDy*2+(Math.random()-.5)*2,-v.bossDx*(6+Math.random()*8)+(Math.random()-.5)*4,.5+Math.random()*3,-v.bossDy*(6+Math.random()*8)+(Math.random()-.5)*4,.2+Math.random()*.25,1,.7,.3,10);Math.random()<n*20&&this.puff(R.x-v.bossDx*2,R.y+.3,R.z-v.bossDy*2,-v.bossDx*3,.8,-v.bossDy*3,1+Math.random()*.6,.8,!0)}else if(v.bossMove&&v.bossStage===0&&Math.random()<n*30){const I=Math.random()*6.28,O=b.spec.radius*1.3;this.spark(R.x+Math.cos(I)*O,R.y+.15,R.z+Math.sin(I)*O,Math.cos(I)*2,2+Math.random()*4,Math.sin(I)*2,.25+Math.random()*.3,1,.6,.2,12)}}for(let M=0;M<t.tops.length;M++){const v=t.tops[M],b=this.tops[M];if(!b||!v.inPlay||v.out)continue;const R=b.group.position;if(b.braking&&Math.random()<n*14){const I=b.brakeDir;this.chip(R.x,R.y+.2,R.z,I[0],I[1],.3,this.stoneMat)}if(v.airT>0)for(let I=0;I<3;I++)this.spark(R.x+(Math.random()-.5)*.4,R.y+.2,R.z+(Math.random()-.5)*.4,(Math.random()-.5)*1.5,-1-Math.random()*2,(Math.random()-.5)*1.5,.25+Math.random()*.2,.85,.92,1,4)}this.puffs=this.puffs.filter(M=>{if(M.life-=n,M.life<=0)return this.scene.remove(M.m),!1;const v=M.life/M.max;return M.m.position.addScaledVector(M.v,n),M.v.multiplyScalar(Math.exp(-n*1.6)),M.v.y+=n*.6,M.m.rotation.x+=M.w.x*n,M.m.rotation.y+=M.w.y*n,M.m.scale.setScalar(M.s0*(.5+.7*(1-v))*Math.min(1,v*3.5)*Math.min(1,(1-v)*8+.2)),!0});for(let M=0;M<t.tops.length;M++){const v=t.tops[M],b=this.tops[M];if(!(!b||v.out||!v.inPlay||v.armour>.9)&&Math.random()<(1-v.armour)*n*24){const R=b.group.position,I=Math.random()*Math.PI*2;this.spark(R.x,R.y+.5,R.z,Math.cos(I)*4,3+Math.random()*5,Math.sin(I)*4,.35+Math.random()*.4,1,.5+Math.random()*.35,.2)}}this.constructs=this.constructs.filter(M=>{M.t+=n;const v=this.tops[M.i];if(M.c.follow&&v&&!v.bursted){const b=v.group.position;M.c.group.position.set(b.x,Jt(Math.min(ge,Math.hypot(b.x,b.z))),b.z)}if(M.t<M.c.dur){const b=M.c.group.position;return M.c.update(M.t,n,(R,I,O,F,X,D,B,N)=>{Gi.setHex(N),this.spark(b.x+R,b.y+I,b.z+O,F,X,D,B,Gi.r,Gi.g,Gi.b,7)}),!0}return this.scene.remove(M.c.group),M.c.group.traverse(b=>{const R=b;R.geometry?.dispose(),R.material?.dispose?.()}),!1}),this.bolts=this.bolts.filter(M=>(M.life-=n,M.line.material.opacity=Math.max(0,M.life/.22),M.life>0?!0:(this.scene.remove(M.line),M.line.geometry.dispose(),!1)));const r=t.stadium.segHp;t.segHp.forEach((M,v)=>{const b=this.segs[v];b&&!b.open&&(b.mat.emissiveIntensity=(1-M/r)*.9)}),t.pillars.forEach((M,v)=>{const b=this.pillarMeshes[v]?.children[0];b&&(b.material.emissiveIntensity=(1-M.hp/t.stadium.pillars[v].hp)*.9)});for(const M of t.tops){if(!M.onRail||n<=0)continue;const v=Math.hypot(M.vx,M.vy)||1;this.spark(M.x,Jt(Math.hypot(M.x,M.y))+.15,M.y,-M.vx/v*6+(Math.random()-.5)*3,1+Math.random()*3,-M.vy/v*6+(Math.random()-.5)*3,.25,.5,.75,1)}this.fovKick=Math.max(0,this.fovKick-n*14);const o=42+this.fovKick;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix());for(let M=0;M<hn;M++){if(this.sparkLife[M]<=0)continue;this.sparkLife[M]-=n;const v=M*3;if(this.sparkLife[M]<=0){this.sparkPos[v+1]=-999;continue}this.sparkVel[v+1]-=this.sparkGrav[M]*n,this.sparkPos[v]+=this.sparkVel[v]*n,this.sparkPos[v+1]+=this.sparkVel[v+1]*n,this.sparkPos[v+2]+=this.sparkVel[v+2]*n;const b=this.sparkLife[M]/this.sparkMax[M];this.sparkCol[v]=this.sparkBase[v]*b,this.sparkCol[v+1]=this.sparkBase[v+1]*b*b,this.sparkCol[v+2]=this.sparkBase[v+2]*b*b*b}const l=this.camera.position;for(let M=0;M<hn;M++){const v=M*3,b=M*12;if(this.sparkLife[M]<=0){for(let kt=0;kt<4;kt++)this.streakPos[b+kt*3+1]=-999;continue}const R=this.sparkPos[v],I=this.sparkPos[v+1],O=this.sparkPos[v+2],F=this.sparkVel[v],X=this.sparkVel[v+1],D=this.sparkVel[v+2],B=Math.hypot(F,X,D)||1,N=Math.min(2.6,Math.max(.18,B*.055)),H=F/B,K=X/B,j=D/B,ot=l.x-R,ut=l.y-I,k=l.z-O;let q=K*k-j*ut,ct=j*ot-H*k,it=H*ut-K*ot;const at=Math.hypot(q,ct,it)||1,gt=this.sparkLife[M]/this.sparkMax[M],Rt=(.04+.05*Math.min(1,gt*1.5))/at;q*=Rt,ct*=Rt,it*=Rt;const Kt=R-H*N,nt=I-K*N,ft=O-j*N,U=.25;this.streakPos.set([R-q,I-ct,O-it,R+q,I+ct,O+it,Kt-q*U,nt-ct*U,ft-it*U,Kt+q*U,nt+ct*U,ft+it*U],b),this.streakCol.set([this.sparkCol[v],this.sparkCol[v+1],this.sparkCol[v+2],this.sparkCol[v],this.sparkCol[v+1],this.sparkCol[v+2],0,0,0,0,0,0],b)}this.streaks.geometry.attributes.position.needsUpdate=!0,this.streaks.geometry.attributes.color.needsUpdate=!0,this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(const M of this.shocks){if(M.life<=0)continue;M.life-=n;const v=1-Math.max(0,M.life)/M.max;M.mesh.scale.setScalar(M.size*(.5+.5*(1-(1-v)*(1-v)))),M.mesh.material.opacity=(1-v)*(1-v),M.life<=0&&(M.mesh.visible=!1)}for(const M of this.beams){if(M.life+=n,M.beam.material.opacity=Math.min(1,M.life*3)*(.5+.2*Math.sin(M.life*6)),M.beam.position.y=M.gem.position.y,Math.random()<n*16){const v=M.gem.material.emissive,b=Math.random()*Math.PI*2;this.spark(M.gem.position.x+Math.cos(b)*.5,M.gem.position.y-.4,M.gem.position.z+Math.sin(b)*.5,-Math.sin(b)*1.5,2.5+Math.random()*2,Math.cos(b)*1.5,.7,v.r,v.g,v.b,0)}M.gem.rotation.y+=n*3,M.gem.position.y+=Math.sin(M.life*3)*n*.3}for(const M of this.pieces){M.life-=n,M.v.y-=24*n,M.obj.position.addScaledVector(M.v,n);const v=M.obj.position,b=Math.hypot(v.x,v.z),R=this.inHole(v.x,v.z)?-50:Jt(b)+.15,I=v.y<=R+.02&&b<ge;if(M.hot&&M.hot>0&&this.fx3<40&&(M.hot=Math.max(0,M.hot-n*.6),Math.random()<n*40*M.hot&&(this.fx3++,this.spark(v.x,v.y,v.z,-M.v.x*.15+(Math.random()-.5)*3,Math.random()*2,-M.v.z*.15+(Math.random()-.5)*3,.2+Math.random()*.2,1,.6,.2,14))),v.y<R&&M.v.y<0&&b<ge){const O=-M.v.y;if(v.y=R,M.v.y*=-.42,M.v.x*=.72,M.v.z*=.72,M.w.multiplyScalar(.6),M.bounces=(M.bounces??0)+1,O>4){const F=Math.min(10,Math.floor(O*.8));for(let X=0;X<F;X++){const D=Math.random()*6.28;this.spark(v.x,R+.1,v.z,Math.cos(D)*(2+Math.random()*5)+M.v.x*.4,1+Math.random()*O*.35,Math.sin(D)*(2+Math.random()*5)+M.v.z*.4,.2+Math.random()*.25,1,.7,.3,20)}this.trauma=Math.min(1,this.trauma+Math.min(.12,O*.01))}}if(I){const O=Math.exp(-n*2.2);if(M.v.x*=O,M.v.z*=O,M.w.multiplyScalar(Math.exp(-n*2.5)),M.flat&&(M.bounces??0)>=2){const F=M.obj.rotation,X=1-Math.exp(-n*7);F.x+=(Math.round(F.x/Math.PI)*Math.PI-F.x)*X,F.z+=(Math.round(F.z/Math.PI)*Math.PI-F.z)*X}}M.obj.rotation.x+=M.w.x*n,M.obj.rotation.y+=M.w.y*n,M.obj.rotation.z+=M.w.z*n}this.fx3=0;for(const M of this.pieces)M.ttl!==void 0&&(M.ttl-=n,M.ttl<.4&&M.obj.scale.multiplyScalar(Math.max(.01,M.ttl/.4)**.2),M.ttl<=0&&(M.obj.position.y=-999));if(this.chips=this.chips.filter(M=>(M.ttl??0)>0),this.pieces.length){const M=this.pieces.filter(v=>v.obj.position.y<-40);if(M.length){for(const v of M)this.scene.remove(v.obj);this.pieces=this.pieces.filter(v=>v.obj.position.y>=-40)}}const c=t.tops.filter(M=>M.inPlay&&!M.out);let h=0,u=0,f=1;if(c.length){for(const M of c)h+=M.x/c.length,u+=M.y/c.length;if(c.length===2){const M=Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y);f=.7+.3*Math.min(1,M/11)}}const d=1-Math.exp(-n*3),m=Math.max(0,1-11/ge),x=t.tops[a],p=x&&x.inPlay&&!x.out?x:null,g=h*.45*(1-m)+(p?p.x:h)*m,S=u*.45*(1-m)+(p?p.y:u)*m;this.focus.x+=(g-this.focus.x)*d,this.focus.z+=(S-this.focus.z)*d,this.zoom+=(f-this.zoom)*d,this.finT>0&&(this.finT=Math.max(0,this.finT-n));{const M=1-this.finT/this.finDur,b=(this.finT>0?1:0)?Math.min(1,M/.18)*(M<.55?1:Math.max(0,1-(M-.55)/.45)):0;this.finEnv+=(b-this.finEnv)*(1-Math.exp(-n*14));const R=t.tops[this.finTarget];this.finEnv>.001&&R&&(this.focus.x+=(R.x-this.focus.x)*this.finEnv*.25,this.focus.z+=(R.y-this.focus.z)*this.finEnv*.25)}this.introT>0&&(this.introT=Math.max(0,this.introT-n));{const M=1-this.introT/this.introDur,v=this.introT>0?Math.min(1,M/.2)*(M<.74?1:Math.max(0,1-(M-.74)/.26)):0;this.introEnv+=(v-this.introEnv)*(1-Math.exp(-n*6))}const y=t.tops[this.introTarget],_=this.focus.x+((y&&y.inPlay?y.x:0)-this.focus.x)*this.introEnv,C=this.focus.z+((y&&y.inPlay?y.y:0)-this.focus.z)*this.introEnv;this.shoveV.x+=(-12*12*this.shove.x-2*12*this.shoveV.x)*n,this.shoveV.z+=(-12*12*this.shove.z-2*12*this.shoveV.z)*n,this.shove.x+=this.shoveV.x*n,this.shove.z+=this.shoveV.z*n,this.trauma=Math.max(0,this.trauma-n*2.2);const w=this.trauma*this.trauma*.9,T=this.distScale*this.zoom*Math.min(ge,11.5)/10*(1-.34*this.finEnv)*(1-.45*this.introEnv);if(this.camera.position.set(_+this.shove.x+(Math.random()-.5)*w,20.5*T*(1-.3*this.introEnv)+(Math.random()-.5)*w,C+this.shove.z+13.5*T+(Math.random()-.5)*w),this.camera.lookAt(_+this.shove.x*.4,.9+1.3*this.introEnv,C+this.shove.z*.4+.9),this.debugCam){const M=this.debugCam;this.camera.position.set(M[0],M[1],M[2]),this.camera.lookAt(M[3],M[4],M[5])}this.composer.render()}}const ib=["blade","disc","tip","core"],sb={blade:"BLADES",disc:"DISCS",tip:"TIPS",core:"CORES"};class ab{constructor(t,e,n,s){this.save=e,this.hooks=n,this.onToggle=s,this.el=document.createElement("div"),this.el.id="wsCat",this.el.className="hidden",this.el.innerHTML=`
      <section class="ws-panel cat-list">
        <div class="cat-head"><b>CATALOGUE</b><span id="catCount"></span><nav id="catTabs"></nav><button id="catClose" aria-label="Close catalogue">CLOSE</button></div>
        <div id="catFilters"></div>
        <div id="catGrid"></div>
      </section>
      <section class="ws-panel cat-detail hidden" id="catDetail"></section>`,t.appendChild(this.el),this.q("#catClose").addEventListener("click",()=>this.close()),this.q("#catTabs").addEventListener("click",a=>{const r=a.target.dataset.slot;r&&(this.slot=r,this.family="",this.render())}),this.q("#catFilters").addEventListener("click",a=>{const r=a.target.dataset.f;r!==void 0&&(this.family=r,this.render())}),this.q("#catGrid").addEventListener("click",a=>{const r=a.target.closest(".cat-cell")?.dataset.id;r&&this.detail(r)}),this.q("#catDetail").addEventListener("click",a=>{a.target.closest("[data-back]")&&this.detail(null)})}el;slot="blade";family="";open=!1;queue=[];obs=null;busy=!1;q(t){return this.el.querySelector(t)}isOpen(){return this.open}foundSet(){return new Set([...this.save.found,...this.save.items.map(t=>t.part)])}show(){this.open=!0,this.el.classList.remove("hidden"),this.onToggle(!0),this.render()}close(){this.open=!1,this.detail(null),this.el.classList.add("hidden"),this.obs?.disconnect(),this.queue=[],this.onToggle(!1)}parts(){return yn.filter(t=>t.slot===this.slot&&(!this.family||t.family===this.family))}render(){const t=this.foundSet(),e=yn.filter(r=>r.slot===this.slot),n=e.filter(r=>t.has(r.id)).length;this.q("#catCount").textContent=`${n} / ${e.length} FOUND`,this.q("#catTabs").innerHTML=ib.map(r=>{const o=yn.filter(l=>l.slot===r).length;return`<button data-slot="${r}" class="${r===this.slot?"on":""}">${sb[r]} ${o}</button>`}).join("");const s=[...new Set(e.map(r=>r.family).filter(r=>!!r))];this.q("#catFilters").innerHTML=s.length?`<button data-f="" class="${this.family===""?"on":""}">ALL</button>`+s.map(r=>`<button data-f="${r}" class="${this.family===r?"on":""}">${r.toUpperCase()}</button>`).join(""):"";const a=this.q("#catGrid");a.innerHTML=this.parts().map(r=>{const o=t.has(r.id);return`<button class="cat-cell ${o?"found":"lost"}" data-id="${r.id}" aria-label="${o?r.name:"Not found yet"}"><img alt="" /><span>${o?r.name:"?"}</span></button>`}).join(""),a.scrollTop=0,this.observe()}observe(){this.obs?.disconnect(),this.queue=[],this.obs=new IntersectionObserver(t=>{for(const e of t){if(!e.isIntersecting)continue;const n=e.target.dataset.id;this.obs?.unobserve(e.target),this.queue.includes(n)||this.queue.push(n)}this.pump()},{root:this.q("#catGrid"),rootMargin:"120px"}),this.q("#catGrid").querySelectorAll(".cat-cell").forEach(t=>this.obs.observe(t))}pump(){this.busy||!this.queue.length||(this.busy=!0,requestAnimationFrame(()=>{if(this.busy=!1,!this.open)return;const t=this.queue.splice(0,4),e=this.hooks.pictures(t);t.forEach((n,s)=>{const a=this.q("#catGrid").querySelector(`.cat-cell[data-id="${n}"] img`);a&&e[s]&&(a.src=e[s])}),this.pump()}))}detail(t){const e=this.q("#catDetail");if(this.q(".cat-list").classList.toggle("hidden",!!t),e.classList.toggle("hidden",!t),!t){this.hooks.showPart(null,!1,0);return}const n=ze(t),s=this.foundSet().has(t),a=this.save.items.filter(h=>h.part===t),r={...Xa(this.save),[n.slot]:t},o=va(r),l=ia(o),c=er.map(h=>`<div class="ws-stat"><label>${Jd[h]}${s?"":" ?"}</label><div class="ws-bar"><span class="cur" style="width:${s?Math.min(100,6+l[h]*94):0}%"></span></div></div>`).join("");e.innerHTML=`
      <button class="cat-back" data-back>BACK</button>
      <h2>${s?n.name:"???"}</h2>
      <div class="cat-sub">${n.slot.toUpperCase()}${n.family?" · "+n.family.toUpperCase():""}</div>
      <p>${s?n.blurb:"Not found yet. Keep fighting: it can drop from any foe or boss."}</p>
      ${s?`<div class="cat-top"><small>NAMED</small><b>${rh(r)}</b><em>${Uo(o).join(" · ")}</em></div>`:""}
      <div class="cat-stats"><small>${s?"YOUR TOP WITH THIS "+n.slot.toUpperCase():"STATS ?"}</small>${c}</div>
      <div class="cat-own">${s?a.length?"YOU HOLD "+a.length:"FOUND, NOT HELD NOW":"UNKNOWN"}</div>`,this.hooks.showPart(t,!s,300)}}const Ep=Math.PI*2;function we(i,t,e=0,n=0,s=0){const a=new lt(i,t);return a.position.set(e,n,s),a.castShadow=!0,a.receiveShadow=!0,a}const ii=(i,t,e,n=24)=>new bt(i,t,e,n),Mn=(i,t,e)=>new Ht(i,t,e);function rb(i,t,e,n,s){const a=new xt;a.add(we(ii(t,t,n,28),i.dark));for(let r=0;r<e;r++){const o=r/e*Ep,l=we(Mn(t*.28,n,t*.2),i.metal,Math.cos(o)*t*1.05,0,Math.sin(o)*t*1.05);l.rotation.y=-o,a.add(l)}return a.add(we(ii(t*.3,t*.3,n*1.5,14),s)),a}function Tp(i,t){const e=new xt;e.add(we(ii(.5,.58,.22,6),t.dark,0,-.02,0)),e.add(we(ii(.42,.42,.06,36),t.glow,0,.12,0));for(let a=0;a<3;a++){const r=a/3*Ep+.5,o=we(Mn(.12,.2,.2),t.metal,Math.cos(r)*.5,.18,Math.sin(r)*.5);o.rotation.y=-r,e.add(o)}const n=we(Mn(.34,.95,.3),t.paint,-.18,-.62,0);n.rotation.z=.12,e.add(n,we(Mn(.36,.55,.12),t.rubber,-.2,-.66,.16),we(Mn(.36,.55,.12),t.rubber,-.2,-.66,-.16)),e.add(we(Mn(.12,.3,.1),t.metal,.12,-.35,0));let s=()=>{};if(i==="string"){e.add(we(Mn(2.1,.08,.16),t.dark,1.15,.08,0));for(const l of[-.1,.1])e.add(we(Mn(2.1,.03,.03),t.metal,1.15,.15,l));const a=we(ii(.014,.014,1,6),t.glow);a.rotation.z=Math.PI/2;const r=we(new Zt(.15,.035,10,24),t.glow);r.rotation.y=Math.PI/2,r.position.y=.12;const o=we(Mn(.18,.14,.2),t.paint,0,.12,0);e.add(a,r,o),s=(l,c)=>{const h=.7+c*1.3;r.position.x=h+.15,o.position.x=h,a.scale.y=Math.max(.01,h-.3),a.position.set(.3+(h-.3)/2,.12,0),a.position.y=.12+.015*Math.sin(l*60)*c}}else if(i==="winder"){const a=we(ii(.34,.34,.55,28),t.dark,.85,.05,0);a.rotation.x=Math.PI/2,e.add(a);const r=new xt;for(let l=0;l<6;l++){const c=we(new Zt(.1+l*.035,.012,6,24),t.glow);r.add(c)}r.position.set(.85,.05,.3),e.add(r);const o=new xt;o.add(we(Mn(.75,.07,.1),t.metal,.37,0,0),we(ii(.07,.07,.3,12),t.paint,.75,.15,0)),o.position.set(.85,.05,-.34),o.rotation.x=0,e.add(o),s=(l,c)=>{o.rotation.z=l*2.4+c*8,r.scale.set(1-.35*c,1-.35*c,1)}}else if(i==="geared"){const a=[{x:.7,r:.38,n:16},{x:1.3,r:.26,n:11},{x:1.75,r:.17,n:7}].map(o=>{const l=rb(t,o.r,o.n,.1,t.glow);return l.position.set(o.x,.06,0),e.add(l),{gr:l,...o}});e.add(we(Mn(1.6,.06,.12),t.dark,1.25,-.04,0));const r=we(Mn(.1,.1,.5),t.paint,.7,.2,-.5);e.add(r),s=(o,l)=>{a.forEach((c,h)=>c.gr.rotation.y=(h%2?-1:1)*(o*1.2*(.38/c.r)+l*10*(.38/c.r))),r.rotation.y=-.5*l}}else{const a=we(ii(.3,.3,.34,28),t.dark,.55,.12,0);a.rotation.x=Math.PI/2;const r=we(ii(.31,.31,.06,28),t.glow,.55,.12,0);r.rotation.x=Math.PI/2;const o=we(ii(.014,.014,1,6),t.dark);o.rotation.z=Math.PI/2;const l=we(Mn(.1,.16,.36),t.glow);e.add(a,r,o,l,we(Mn(.3,.1,.1),t.metal,.4,.12,0)),s=(c,h)=>{const u=.85+h*1.5;l.position.set(u,.12,0),o.scale.y=Math.max(.01,u-.55),o.position.set(.55+(u-.55)/2,.12,0),a.rotation.y=h*14,r.rotation.y=h*14}}return e.userData.anim=s,e}const no=i=>1-(1-i)*(1-i),Vi=i=>Math.max(0,Math.min(1,i)),ob=1.5,lb=1.8,Ld=1;class cb{constructor(t){this.scene=t;const e=new Re({color:16756832,blending:qe,transparent:!0,depthWrite:!1,toneMapped:!1});for(let u=0;u<160;u++){const f=new lt(this.geo,e.clone());f.visible=!1,this.group.add(f),this.sparks.push({m:f,v:new L,life:0,max:1})}const n=new re({color:9081508,metalness:1,roughness:.3}),s=new re({color:1843241,metalness:.8,roughness:.45}),a=new re({color:1182472,emissive:16747056,emissiveIntensity:1.2}),r=new lt(new bt(.06,.07,2,12),s);r.position.y=-1;const o=new lt(new Ht(.72,.42,.42),n);o.position.y=-2;const l=new lt(new Ht(.1,.44,.44),a);l.position.set(.22,-2,0);const c=new lt(new Ht(.14,.34,.34),s);c.position.set(-.4,-2,0);const h=new lt(new zn(.1,12,8),n);for(const u of[r,o,l,c,h])u.castShadow=!0;this.hammer.add(r,o,l,c,h),this.hammer.visible=!1,this.hammer.scale.setScalar(.7),this.group.add(this.hammer,this.launcher),t.add(this.group)}group=new xt;sparks=[];sparkNext=0;geo=new Ht(.025,.025,.26);ghosts=[];fit=null;temper=null;reroll=null;freeze=0;heated=null;hammer=new xt;launcher=new xt;launcherId="";launcherShow=0;launcherWant=!1;launcherT=0;launcherFit=-1;burst(t,e,n,s,a,r,o=2,l=0){const c=new It(r);for(let h=0;h<s;h++){const u=this.sparks[this.sparkNext++%this.sparks.length],f=Math.random()*Math.PI*2,d=a*(.4+Math.random()*.8);u.m.position.set(t+Math.cos(f)*l,e,n+Math.sin(f)*l),u.v.set(Math.cos(f)*d,Math.random()*o,Math.sin(f)*d),u.life=u.max=.3+Math.random()*.4,u.m.material.color.copy(c).lerp(new It(1,1,1),Math.random()*.5),u.m.visible=!0}}startFit(t,e){this.fit={slot:t,t:0,locked:!1},e&&(this.scene.attach(e),this.ghosts.push({obj:e,t:0,y0:e.position.y}))}startTemper(t){this.endHeat(),this.temper={slot:t,t:0,struck:!1},this.hammer.visible=!0}startReroll(t){this.endHeat(),this.reroll={slot:t,t:0}}get busy(){return!!(this.fit||this.temper||this.reroll)}setLauncher(t,e){if(t===this.launcherId)return null;let n=null;return this.launcher.children.length&&(n=this.launcher.children[0],this.scene.attach(n)),this.launcherId=t,this.launcher.add(Tp(t,ja(e))),n}recolourLauncher(t){const e=this.launcherId;if(!e)return;this.launcherId="";const n=this.setLauncher(e,t);n&&(this.scene.remove(n),Za(n))}showLauncher(t){this.launcherWant=t}pullLauncher(){this.launcherT=0,this.launcherFit=0}heat(t,e,n){if(!this.heated||this.heated.part!==t){this.endHeat();const a=new Map;t.traverse(r=>{const o=r;if(!o.isMesh)return;const l=o.material;if(!l.isMeshStandardMaterial)return;let c=a.get(l);c||(c=l.clone(),a.set(l,c)),o.userData.orig=l,o.material=c}),this.heated={part:t,map:a}}const s=new It(e).lerp(new It(1,1,1),Vi((n-.5)*2));for(const a of this.heated.map.values())a.emissive.copy(s),a.emissiveIntensity=n*2.6}endHeat(){if(this.heated){this.heated.part.traverse(t=>{const e=t;e.isMesh&&e.userData.orig&&(e.material=e.userData.orig,delete e.userData.orig)});for(const t of this.heated.map.values())t.dispose();this.heated=null}}update(t){let e=1;this.freeze>0&&(this.freeze-=t,e=0,t=0);for(const r of this.sparks)if(!(r.life<=0)){if(r.life-=t,r.life<=0){r.m.visible=!1;continue}r.v.y-=9*t,r.m.position.addScaledVector(r.v,t),r.m.lookAt(r.m.position.x+r.v.x,r.m.position.y+r.v.y,r.m.position.z+r.v.z),r.m.scale.set(1,1,.4+Math.min(1.6,r.v.length()*.12)),r.m.material.opacity=Vi(r.life/r.max)}this.ghosts=this.ghosts.filter(r=>{r.t+=t;const o=Vi(r.t/.45);return r.obj.position.y=r.y0+3.2*no(o),r.obj.rotation.y+=t*16,r.obj.scale.setScalar(1-.5*o),o>=1?(this.burst(r.obj.position.x,r.obj.position.y,r.obj.position.z,14,5,16767392,3),this.scene.remove(r.obj),Za(r.obj),!1):!0}),this.launcherShow+=((this.launcherWant?1:0)-this.launcherShow)*(1-Math.exp(-t*6)),this.launcher.visible=this.launcherShow>.02,this.launcherT+=t;let n=0;this.launcherFit>=0&&(this.launcherFit+=t,this.launcherFit>1.4&&(this.launcherFit=-1));const s=this.launcherT%3.4;return this.launcherFit>=0?n=Math.sin(Vi((this.launcherFit-.1)/1)*Math.PI):s<1.1&&(n=Math.sin(s/1.1*Math.PI)),n=Math.pow(n,.7),this.launcher.children[0]?.userData.anim?.(this.launcherT,n),this.launcher.position.set(-.85-(1-this.launcherShow)*2.2,.55,1.5),this.launcher.scale.setScalar(.5),this.launcher.rotation.y=-.35+Math.sin(this.launcherT*.5)*.2,e}apply(t,e,n,s){if(!t)return;let a=0;if(this.fit){const r=this.fit;r.t+=e;const o=r.slot in t.parts?t.parts[r.slot]:null;if(o){if(o.visible=r.t>=.3,r.t>=.3&&r.t<.7){const l=(r.t-.3)/.4;o.position.y=n[r.slot]+(1-l*l)*2,o.rotation.y=18*(1-l)}else if(r.t>=.7){const l=Vi((r.t-.7)/.8),c=Math.exp(-(r.t-.7)*9)*Math.cos((r.t-.7)*30);o.rotation.y=14*(1-l)*(1-l),o.scale.set(1+.08*c,1-.16*c,1+.08*c),a=-.06*c,r.locked||(r.locked=!0,this.burst(0,n[r.slot]+.1,0,36,7,16763008,2.5,.9),this.freeze=.05)}}else r.t>=.5&&!r.locked&&(r.locked=!0,r.slot==="launcher"?this.pullLauncher():this.burst(0,.9,0,30,6,16763008,2.5,.6));r.t>=ob&&(o&&(o.visible=!0,o.rotation.y=0),this.fit=null)}if(this.temper){const r=this.temper;r.t+=e;const o=t.parts[r.slot],l=n[r.slot]+.3,c=r.t;let h=c<.72?Vi(c/.7)*.75:c<.8?1:Math.max(0,1-(c-.8)/.95);c>=.72&&c<.8&&(h=1.15),this.heat(o,16742944,h);const u=1.65,f=l+1.17;let d;if(c<.2?d=2.5-.9*no(c/.2):c<.6?d=1.6+.15*Math.sin((c-.2)/.4*Math.PI):c<.72?d=1.6-.7*Math.pow((c-.6)/.12,2):c<1?d=.9+.35*no((c-.72)/.28):d=1.25+1.6*no(Vi((c-1)/.35)),this.hammer.position.set(u,f,0),this.hammer.rotation.z=-d,this.hammer.visible=c<1.4,!r.struck&&c>=.72&&(r.struck=!0,this.freeze=.13,this.burst(.5,l+.15,0,80,10,16769184,5,.3),this.burst(.5,l+.15,0,30,6,16777215,3,.2)),c>.72){const m=Math.exp(-(c-.72)*10)*Math.cos((c-.72)*26);o.scale.set(1+.16*m,1-.3*m,1+.16*m),a=-.1*m}c>=lb&&(this.endHeat(),o.scale.setScalar(1),this.hammer.visible=!1,this.temper=null)}if(this.reroll){const r=this.reroll;r.t+=e;const o=Vi(r.t/Ld),l=t.parts[r.slot],c=.05*(1-o);l.position.x=Math.sin(r.t*71)*c,l.position.z=Math.cos(r.t*63)*c,l.rotation.y+=Math.sin(r.t*40)*.2*(1-o),this.heat(l,6998271,(.35+.3*Math.sin(r.t*50))*(1-o)),Math.random()<e*40*(1-o)&&this.burst(0,n[r.slot]+.3,0,1,5,10477823,3,.9),r.t>=Ld&&(this.endHeat(),l.position.x=l.position.z=0,l.rotation.y=0,this.reroll=null)}s.position.y=a}reset(){this.endHeat(),this.fit=this.temper=this.reroll=null,this.hammer.visible=!1}}const io=i=>"#"+i.toString(16).padStart(6,"0");class hb{constructor(t,e,n){this.renderer=t,this.save=e,this.cb=n;const s=this.scene;s.background=new It(526864),s.fog=new Vo(526864,14,40),s.environment=new wo(t).fromScene(new mp,.04).texture,s.environmentIntensity=.5;const a=new Yc(16777215,1.5);a.position.set(3.5,7,4.5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);const r=a.shadow.camera;r.left=r.bottom=-3.5,r.right=r.top=3.5,r.near=1,r.far=20,a.shadow.bias=-3e-4,a.shadow.normalBias=.02;const o=new ga(8368383,16,30,2);o.position.set(-5,2.5,2),this.backLight.position.set(0,3,-5),s.add(a,o,this.backLight,new fp(10466559,395018,.2));const l=new re({color:1777708,metalness:.9,roughness:.3}),c=new lt(new bt(1.75,1.95,.3,96),l);c.position.y=-.15,c.receiveShadow=!0;const h=new lt(new Zt(1.76,.022,8,128),this.ringMat);h.rotation.x=Math.PI/2,h.position.y=.005;const u=new lt(new Zt(1.1,.008,6,96),new Re({color:3359071}));u.rotation.x=Math.PI/2,u.position.y=.004;const f=new lt(new ma(40,64),new re({color:658708,metalness:.5,roughness:.55}));f.rotation.x=-Math.PI/2,f.position.y=-.3,f.receiveShadow=!0,s.add(c,h,u,f,this.holder),this.fx=new cb(s),this.composer=new xp(t),this.composer.addPass(new vp(s,this.camera)),this.composer.addPass(new Ts(new Q(1,1),.22,.35,.96)),this.composer.addPass(new Mp),this.el=document.createElement("div"),this.el.id="ws",this.el.className="hidden",this.tier=e.tier,this.el.innerHTML=`
      <header><h1>SPINFORGE</h1><span>FORGE</span></header>
      <button id="wsGear" aria-label="Settings">${gm()}</button>
      <aside id="wsLeft" class="ws-panel"><nav id="wsTabs"></nav><div id="wsTools"></div><div id="wsCards"></div></aside>
      <aside id="wsRight" class="ws-panel">
        <div><div id="wsName"></div><div id="wsType"></div><div id="wsMeta"></div></div>
        <div class="ws-row" id="wsSetup"><h4>NEXT FIGHT</h4>
          <div class="ws-step"><button data-step="mode" data-d="-1">◀</button><span id="wsMode"></span><button data-step="mode" data-d="1">▶</button></div>
          <div class="ws-step"><button data-step="tier" data-d="-1">◀</button><span id="wsTier"></span><button data-step="tier" data-d="1">▶</button></div>
        </div>
        <div id="wsStats"></div>
        <div class="ws-row"><h4>SPIN DIRECTION</h4><div class="ws-seg" id="wsSpin"></div></div>
        <div class="ws-row"><h4>PAINT</h4><div class="ws-sw" id="wsPaint"></div></div>
        <div class="ws-row"><h4>GLOW</h4><div class="ws-sw" id="wsGlow"></div></div>
        <div class="ws-row"><h4>METAL</h4><div class="ws-seg" id="wsMetal"></div></div>
      </aside>
      <div id="wsLabels">${vi.map(d=>`<div class="ws-lb" data-s="${d}"><i></i><b></b><span></span></div>`).join("")}</div>
      <div id="wsHint">DRAG TO ROTATE</div>
      <footer><button id="wsExplode">EXPLODED VIEW</button><button id="wsBattle" class="go">BATTLE</button><button id="wsCatBtn">CATALOGUE</button></footer>`,document.body.appendChild(this.el),this.q("#wsGear").addEventListener("click",()=>n.onSettings()),this.labels=[...this.el.querySelectorAll(".ws-lb")],this.wire(),this.rebuild(),this.renderThumbs(),this.renderAll(),this.resize(),window.addEventListener("resize",()=>this.resize())}active=!1;perTeam=1;tier=1;time=0;scene=new Eo;camera=new dn(30,1,.1,100);composer;holder=new xt;model=null;ringMat=new Re({color:16777215});backLight=new ga(16777215,18,30,2);exploded=!1;explode=0;fx;labels=[];slot="blade";hover=null;sel=null;sort="power";bulk="off";bulkMax=0;yaw=.6;pitch=.42;dragging=!1;distScale=1;thumbs={};el;cat;catHolder=new xt;catPart=null;q(t){return this.el.querySelector(t)}show(t){this.active=t,this.el.classList.toggle("hidden",!t),t&&this.resize()}refresh(){this.tier=Math.min(this.tier,this.save.tier),this.rebuild(),this.renderAll()}wire(){this.q("#wsTabs").addEventListener("click",r=>{const o=r.target.dataset.slot;o&&(this.slot=o,this.hover=null,this.sel=null,this.renderAll())}),this.q("#wsTools").addEventListener("click",r=>{const o=r.target.closest("[data-tool]")?.dataset.tool;if(o){if(o==="sort")this.sort=this.sort==="power"?"rarity":this.sort==="rarity"?"newest":"power";else if(o==="bulk")this.bulk=this.bulk==="off"?"pick":"off";else if(o==="step")this.bulkMax=(this.bulkMax+Number(r.target.closest("[data-d]").dataset.d)+4)%4;else if(o==="ask")this.bulk="confirm";else if(o==="no")this.bulk="off";else if(o==="yes"){$0(this.save,this.bulkMax),this.bulk="off",this.sel=null,this.hover=null,this.changed(!1);return}this.renderAll()}});const t=this.q("#wsCards");t.addEventListener("click",r=>{const o=r.target,l=o.closest("[data-act]"),c=o.closest(".ws-card")?.dataset.uid;if(c){if(l){const h=l.dataset.act;if(h==="salv")uf(this.save,c),this.sel=null,this.hover=null;else if(h==="fit"){const u=this.slot,f=this.model&&vi.includes(u)?this.model.parts[u]:null;f?.removeFromParent(),this.save.equipped[u]=c,this.sel=null,this.hover=null,this.changed(!1),this.fx.startFit(u,f);return}else if(h==="temper"){const u=this.slot;V0(this.save,c)>0&&(vi.includes(u)?this.fx.startTemper(u):this.fx.burst(0,.9,0,40,7,16767392,4,.6)),this.changed(!1,!1);return}else if(h==="reroll"){const u=Number(l.dataset.i),f=this.save.items.find(d=>d.uid===c)?.affixes[u]?.key;W0(this.save,c,u,Math.random)>0&&(vi.includes(this.slot)&&this.fx.startReroll(this.slot),f&&this.shuffle(c,f)),this.changed(!1,!1);return}this.changed(!1);return}this.sel=this.sel===c?null:c,this.renderAll()}}),t.addEventListener("mouseover",r=>{const o=r.target.closest(".ws-card")?.dataset.uid??null;o!==this.hover&&(this.hover=o,this.renderStats())}),t.addEventListener("mouseleave",()=>{this.hover=null,this.renderStats()});const e=(r,o)=>this.q(r).addEventListener("click",l=>{const c=l.target.dataset.v;c!==void 0&&(this.save[o]=Number(c),this.changed(!0))});e("#wsPaint","paint"),e("#wsGlow","glow"),this.q("#wsMetal").addEventListener("click",r=>{const o=r.target.dataset.v;o&&(this.save.metal=o,this.changed(!0))}),this.q("#wsSpin").addEventListener("click",r=>{const o=r.target.dataset.v;o&&(this.save.spinDir=o==="-1"?-1:1,this.changed(!1))}),this.q("#wsSetup").addEventListener("click",r=>{const o=r.target.closest("[data-step]");if(!o)return;const l=Number(o.dataset.d);o.dataset.step==="mode"?this.perTeam=Math.max(1,Math.min(5,this.perTeam+l)):this.tier=Math.max(1,Math.min(this.save.tier,this.tier+l)),this.renderAll()}),this.q("#wsExplode").addEventListener("click",()=>{this.exploded=!this.exploded,this.q("#wsExplode").textContent=this.exploded?"ASSEMBLE":"EXPLODED VIEW"}),this.q("#wsBattle").addEventListener("click",()=>this.cb.onBattle()),this.scene.add(this.catHolder),this.cat=new ab(this.el,this.save,{pictures:r=>this.pictures(r),showPart:(r,o,l)=>this.showCatPart(r,o,l)},r=>this.el.classList.toggle("cat",r)),this.q("#wsCatBtn").addEventListener("click",()=>this.cat.show());const n=this.renderer.domElement;let s=0,a=0;n.addEventListener("pointerdown",r=>{this.active&&(this.dragging=!0,s=r.clientX,a=r.clientY)}),window.addEventListener("pointermove",r=>{!this.active||!this.dragging||(this.yaw+=(r.clientX-s)*.01,this.pitch=Math.max(.08,Math.min(1.25,this.pitch+(r.clientY-a)*.006)),s=r.clientX,a=r.clientY)}),window.addEventListener("pointerup",()=>this.dragging=!1)}changed(t,e=!0){e&&this.rebuild(),t&&(this.thumbs={},this.fx.recolourLauncher(Xa(this.save))),this.renderAll(),this.cb.onChange()}rebuild(){this.model&&(this.holder.remove(this.model.root),Za(this.model.root));const t=Xa(this.save);this.fx.reset(),this.model=wp({blade:t.blade,disc:t.disc,tip:t.tip,core:t.core,paint:t.paint,glow:t.glow,metal:t.metal}),this.holder.add(this.model.root);const e=this.fx.setLauncher(t.launcher,t);e&&this.fx.startFit("launcher",e),this.ringMat.color.setHex(t.glow),this.backLight.color.setHex(t.paint),this.el.style.setProperty("--glow",io(t.glow))}pictures(t){return this.renderThumbs(t),t.map(e=>this.thumbs[e]??"")}renderThumbs(t=[]){const e=new Set([...this.save.items.map(d=>d.part),...t]);if(yn.every(d=>this.thumbs[d.id]||d.family&&!e.has(d.id)))return;const n=this.renderer,s=144,a=new Eo;a.background=new It(856345),a.environment=this.scene.environment;const r=new Yc(16777215,1.4);a.environmentIntensity=.55,r.position.set(2,5,3),a.add(r);const o=new dn(26,1,.05,50),l=ja(this.save),c=n.getSize(new Q),h=n.getPixelRatio();n.setPixelRatio(1),n.setSize(s,s,!1);const u=new Li,f=new Ii;for(const d of yn){if(this.thumbs[d.id]||d.family&&!e.has(d.id))continue;const m=d.slot==="launcher"?Tp(d.id,l):d.slot==="reactor"?Ky(d.id):Jc(d.slot,d.id,l);a.add(m),u.setFromObject(m).getBoundingSphere(f);const x=f.radius/Math.sin(13*Math.PI/180);o.position.copy(f.center).add(new L(.3,d.slot==="blade"||d.slot==="disc"||d.slot==="reactor"?.95:d.slot==="tip"?.05:.5,.5).normalize().multiplyScalar(x*1.02)),o.lookAt(f.center),n.render(a,o),this.thumbs[d.id]=n.domElement.toDataURL("image/png"),a.remove(m),Za(m)}n.setPixelRatio(h),n.setSize(c.x,c.y,!1)}showCatPart(t,e,n){for(const u of[...this.catHolder.children])this.catHolder.remove(u),Za(u);if(this.catPart=t,!t)return;const s=ze(t),a=ja(e?{paint:658190,glow:658190,metal:"gunmetal"}:this.save),r=Jc(s.slot,t,a),o=new Li().setFromObject(r).getBoundingSphere(new Ii),l=Math.min(2.6,1.5/o.radius);r.scale.setScalar(l),r.position.set(-o.center.x*l,.75-o.center.y*l,-o.center.z*l),this.catHolder.add(r);const c=this.renderer.domElement.clientWidth||window.innerWidth,h=2*6.8*this.distScale*Math.tan(15*Math.PI/180)*this.camera.aspect;this.catHolder.position.x=n/2/c*h}resize(){const t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.composer.setSize(e,n),this.camera.aspect=e/n,this.distScale=Math.max(1,.85/this.camera.aspect),e<900&&n>e?(this.distScale=Math.max(1.9,1.2/this.camera.aspect),this.camera.setViewOffset(e,n,0,n*.02,e,n)):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}frame(t){t*=this.fx.update(t),this.fx.showLauncher(this.slot==="launcher"),this.time+=t,this.model?.shift(Math.max(0,Math.min(1,.5-.9*Math.cos(this.time*1.4)))),this.model?.flail(Math.max(0,Math.min(1,.5-.7*Math.cos(this.time*1.1)))),this.dragging||(this.yaw+=t*.4),this.holder.rotation.y=this.yaw,this.holder.visible=!this.catPart,this.catHolder.visible=!!this.catPart,this.catHolder.rotation.y=this.yaw;const e=this.exploded?1:0;this.explode+=Math.sign(e-this.explode)*Math.min(Math.abs(e-this.explode),t*1.15);const n={tip:0,disc:0,blade:0,core:0};if(this.model){const r={tip:0,disc:0,blade:1,core:2};for(const o of vi){const l=this.model.parts[o],c=this.exploded?r[o]:2-r[o],h=Math.max(0,Math.min(1,(this.explode*1.7-c*.25)/.8)),u=1+2.2*Math.pow(h-1,3)+1.2*Math.pow(h-1,2);n[o]=cr[o]+(jy[o]-cr[o])*(o==="tip"?0:u),l.position.y=n[o];const f=this.slot===o&&this.explode>.5?1.05:1;l.scale.setScalar(f)}this.fx.apply(this.model,t,n,this.model.root),this.placeLabels(n)}const s=.55+this.explode*.95,a=(6.8+this.explode*2.6)*this.distScale;this.camera.position.set(0,s+Math.sin(this.pitch)*a,Math.cos(this.pitch)*a),this.camera.lookAt(0,s,0),this.composer.render()}placeLabels(t){const e=this.renderer.domElement,n=e.clientWidth||window.innerWidth,s=e.clientHeight||window.innerHeight,a=new L;this.labels.forEach(r=>{const o=r.dataset.s,l=Math.max(0,Math.min(1,(this.explode-.55)*2.6));if(r.style.opacity=String(l),l<=.01)return;a.set(0,t[o],0),this.holder.localToWorld(a),a.project(this.camera),r.style.transform=`translate(${(a.x+1)/2*n+56}px, ${(1-a.y)/2*s}px)`;const c=this.save.items.find(d=>d.uid===this.save.equipped[o]),h=r.querySelector("b"),u=r.querySelector("span"),f=c?jl(c):"";h.textContent!==f&&(h.textContent=f),u.textContent!==co[o]&&(u.textContent=co[o])})}shuffle(t,e){const n=performance.now(),s=()=>{const a=this.save.items.find(h=>h.uid===t),r=a?.affixes.find(h=>h.key===e),o=this.el.querySelector(`.ws-card[data-uid="${t}"] .af[data-key="${e}"]`);if(!a||!r||!o)return;const l=Zl(r),c=.7-(performance.now()-n)/1e3;if(c<=0){o.textContent=l,o.classList.remove("shuf");return}o.classList.add("shuf"),o.textContent=l.replace(/[0-9]/g,h=>Math.random()<1-c/.9?h:String(Math.floor(Math.random()*10))),requestAnimationFrame(s)};requestAnimationFrame(s)}renderAll(){this.renderThumbs();const t=this.save;this.q("#wsTabs").innerHTML=Ci.map(l=>`<button data-slot="${l}" class="${l===this.slot?"on":""}">${co[l]}</button>`).join("");const e=t.equipped[this.slot],n=q0(t,t.items.filter(l=>ze(l.part).slot===this.slot),this.sort,e);this.sel&&!n.some(l=>l.uid===this.sel)&&(this.sel=null);const s=this.q("#wsCards"),a=s.scrollTop;s.innerHTML=n.map(l=>{const c=Si[l.rarity],h=l.uid===e,u=l.uid===this.sel,d=(_o(l)?`<p class="lg">${_o(l)}</p>`:"")+(l.affixes.length?l.affixes.map(x=>`<span class="af" data-key="${x.key}">${Zl(x)}</span>`).join(""):`<p>${ze(l.part).blurb}</p>`),m=h?"<em>FITTED</em>":"";return`
        <div class="ws-card ${h?"on":""} ${u?"open":""}" data-uid="${l.uid}" style="--rc:${io(c.color)}">
          <img src="${this.thumbs[l.part]??""}" alt="" />
          <div class="ws-main"><b style="color:${io(c.color)}">${jl(l)}</b><span class="lv">${c.name.toUpperCase()} · LEVEL ${l.level}</span>${d}${m}</div>
          ${u?this.detail(l,h,t.items.find(x=>x.uid===e)):""}
        </div>`}).join(""),s.scrollTop=a,this.renderTools();const r=sa(t);this.q("#wsName").textContent=rh(Xa(t)),this.q("#wsType").textContent=[`${oh(ia(r))} TYPE`,Vd[r.ability],r.elements.map(l=>ke[l].super.name).join(" + "),...Uo(r)].join("  ·  "),this.q("#wsMeta").textContent=`GEAR ${J0(t)}  ·  SCRAP ${t.scrap}  ·  ${t.items.length} PARTS`,this.q("#wsMode").textContent=`${this.perTeam} V ${this.perTeam}`,this.q("#wsTier").textContent=`TIER ${this.tier}${df(this.tier)?" · BOSS":""}`,this.q("#wsSpin").innerHTML=[[1,"RIGHT"],[-1,"LEFT"]].map(([l,c])=>`<button data-v="${l}" class="${t.spinDir===l?"on":""}">${c}</button>`).join("");const o=(l,c)=>l.map(h=>`<button data-v="${h}" class="${h===c?"on":""}" style="background:${io(h)}"></button>`).join("");this.q("#wsPaint").innerHTML=o(Kd,t.paint),this.q("#wsGlow").innerHTML=o(jd,t.glow),this.q("#wsMetal").innerHTML=Zd.map(l=>`<button data-v="${l}" class="${t.metal===l?"on":""}">${jc[l].name.toUpperCase()}</button>`).join(""),this.renderStats()}detail(t,e,n){const s=this.save,a=X0(t,e?void 0:n),r=a.rows.map(d=>{const m=t.affixes.findIndex(y=>y.key===d.key),x=d.diff>0?"up":d.diff<0?"down":"",p=e?`+${d.item}%`:`${d.now?"+"+d.now+"%":"-"} → ${d.item?"+"+d.item+"%":"-"}`,g=!e&&d.diff?`<i class="${x}">${d.diff>0?"+":""}${d.diff}</i>`:"",S=m<0?"":`<button class="ws-act ws-re" data-act="reroll" data-i="${m}" ${s.scrap<Ql(t)?"disabled":""} aria-label="Reroll ${d.label}">REROLL ${Ql(t)}</button>`;return`<div class="ws-cmp"><span class="k">${d.label}</span><span class="v">${p}</span>${g}${S}</div>`}).join(""),o=e?"":`<div class="ws-cmp"><span class="k">Power</span><span class="v">${ji(t)}</span><i class="${a.power>0?"up":a.power<0?"down":""}">${a.power>0?"+":""}${a.power}</i></div>`,l=t.level>=af(s),c=rf(t),h=`<button class="ws-act" data-act="temper" ${l||s.scrap<c?"disabled":""}>${l?"MAX LEVEL "+t.level:`TEMPER L${t.level+1} · ${c}`}</button>`,u=e?"":'<button class="ws-act go" data-act="fit">FIT</button>',f=e?"":`<button class="ws-act" data-act="salv">SALVAGE +${Jl(t)}</button>`;return`<div class="ws-detail">${r||'<div class="ws-cmp"><span class="k">No stat rolls</span></div>'}${o}<div class="ws-acts">${u}${h}${f}</div></div>`}renderTools(){const t=this.save,e=of(t,this.bulkMax),n=e.reduce((r,o)=>r+Jl(o),0),s=Si.slice(0,4).map(r=>r.name.toUpperCase());let a="";this.bulk==="pick"?a=`<div class="ws-bulk"><div class="ws-step"><button data-tool="step" data-d="-1">◀</button><span>UP TO ${s[this.bulkMax]}</span><button data-tool="step" data-d="1">▶</button></div>
        <button class="ws-act" data-tool="ask" ${e.length?"":"disabled"}>SALVAGE ${e.length} · +${n}</button><small>Fitted parts are never salvaged. All slots.</small></div>`:this.bulk==="confirm"&&(a=`<div class="ws-bulk"><small>Salvage ${e.length} parts up to ${s[this.bulkMax]} for ${n} scrap? This cannot be undone.</small>
        <div class="ws-acts"><button class="ws-act go" data-tool="yes">YES, SALVAGE</button><button class="ws-act" data-tool="no">CANCEL</button></div></div>`),this.q("#wsTools").innerHTML=`<div class="ws-acts"><button class="ws-act" data-tool="sort">SORT: ${this.sort.toUpperCase()}</button><button class="ws-act ${this.bulk==="off"?"":"on"}" data-tool="bulk">BULK SALVAGE</button></div>${a}`}renderStats(){const t=this.save,e=ia(sa(t)),n=this.hover??this.sel,a=n&&n!==t.equipped[this.slot]&&t.items.some(o=>o.uid===n)?ia(sa({...t,equipped:{...t.equipped,[this.slot]:n}})):e,r=o=>Math.min(100,6+o*94);this.q("#wsStats").innerHTML=er.map(o=>{const l=r(e[o]),c=r(a[o]),h=Math.round((a[o]-e[o])*100),u=h===0?"":`<i class="${h>0?"up":"down"}">${h>0?"+":""}${h}</i>`,f=h===0?"":`<span class="${h>0?"up":"down"}" style="width:${Math.max(l,c)}%"></span>`;return`<div class="ws-stat"><label>${Jd[o]}${u}</label><div class="ws-bar">${f}<span class="cur" style="width:${Math.min(l,c)}%"></span></div></div>`}).join("")}}const Xt=0,ni=i=>{try{navigator.vibrate?.(i)}catch{}};{const i=document.createElement("style");i.textContent=`
#arrows{position:fixed;inset:0;pointer-events:none;z-index:5}
#arrows i{position:absolute;left:0;top:0;width:0;height:0;margin:-9px 0 0 -9px;border-left:18px solid var(--c);border-top:9px solid transparent;border-bottom:9px solid transparent;filter:drop-shadow(0 0 6px var(--c));opacity:.9}
#combo{position:fixed;left:50%;bottom:74px;transform:translateX(-50%);display:flex;gap:6px;align-items:center;pointer-events:none;z-index:5;font:700 10px/1 system-ui,sans-serif;letter-spacing:.12em;color:#fff}
body.touch #combo{bottom:auto;top:92px}
#combo i{width:22px;height:5px;border-radius:3px;background:rgba(255,255,255,.16);transition:background .12s,box-shadow .12s}
#combo i.on{background:var(--me,#ff7a33);box-shadow:0 0 10px var(--me,#ff7a33)}
#combo.full i{background:#fff;box-shadow:0 0 14px #fff}
#combo span{opacity:0;transition:opacity .12s}
#combo.full span{opacity:1}
#bossbar{position:fixed;left:50%;top:92px;transform:translateX(-50%);width:min(34vw,360px);pointer-events:none;z-index:5;display:none;color:#fff;font:700 11px/1 system-ui,sans-serif;letter-spacing:.14em}
#bossbar .bn{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:5px;text-shadow:0 1px 6px #000}
#bossbar .bn em{font-style:normal;color:var(--foe);font-size:9px}
#bossbar .bb{position:relative;height:9px;border-radius:5px;background:rgba(10,13,21,.78);border:1px solid rgba(255,255,255,.16);overflow:hidden}
#bossbar .bb i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--foe),#fff);box-shadow:0 0 10px var(--foe);transition:width .12s}
#bossbar .bb u{position:absolute;top:0;bottom:0;width:2px;background:rgba(0,0,0,.7)}
#bossbar .mv{height:12px;margin-top:5px;text-align:center;font-size:10px;color:#ffd7a0;opacity:0}
#bossbar .mv.on{opacity:1;animation:bmv .22s steps(2) infinite}
@keyframes bmv{50%{color:#ff5a3a}}
@media (max-height:520px){#bossbar{top:66px}}
#bossplate{position:fixed;left:0;right:0;top:56%;text-align:center;pointer-events:none;z-index:6;opacity:0;color:#fff;font:850 italic clamp(26px,6vw,64px)/1 system-ui,sans-serif;letter-spacing:.04em;text-shadow:0 0 26px var(--foe),0 4px 0 rgba(0,0,0,.5)}
#bossplate small{display:block;margin-top:8px;font:600 normal clamp(11px,1.8vw,16px)/1 system-ui,sans-serif;letter-spacing:.22em;color:#ffe2b0}
#bossplate.show{animation:bplate 1.7s ease-out forwards}
@keyframes bplate{0%{opacity:0;transform:scale(1.35)}12%{opacity:1;transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(.98)}}`,document.head.append(i);const t=document.createElement("div");t.id="arrows";const e=document.createElement("div");e.id="combo",e.innerHTML="<i></i><i></i><i></i><span>FINISHER</span>";const n=document.createElement("div");n.id="bossbar",n.innerHTML='<div class="bn"><b id="bossName"></b><em id="bossPhase"></em></div><div class="bb"><i id="bossFill"></i><u style="left:33.3%"></u><u style="left:66.6%"></u></div><div class="mv" id="bossMove"></div>';const s=document.createElement("div");s.id="bossplate",s.innerHTML="<span></span><small></small>",t.style.display=e.style.display="none",document.body.append(t,e,n,s)}const Ap="spinforge.save.v1",ue=i=>document.getElementById(i),ci=i=>"#"+i.toString(16).padStart(6,"0"),ub=i=>i[Math.floor(Math.random()*i.length)],gr=ue("game"),Yt=new nb(gr),qt=new Mm,Po=new URLSearchParams(location.search),ts=Po.has("demo");function db(){try{return eu(JSON.parse(localStorage.getItem(Ap)??"null"))}catch{return eu(null)}}function Rh(){try{localStorage.setItem(Ap,JSON.stringify(He))}catch{}}const He=db();let Xe=null,_t,Lo=null,is="workshop",jo=!1;const fb=xm(()=>{qt.start(),qt.strike()});Yt.applyQuality(Fe.quality);Oo(()=>Yt.applyQuality(Fe.quality));const Kn=new hb(Yt.renderer,He,{onChange:Rh,onBattle:()=>ur("new"),onSettings:fb});ts&&Po.get("demo")&&(Kn.perTeam=Math.max(1,Math.min(5,Number(Po.get("demo"))||1)));const Ps=document.createElement("div");Ps.id="endbar";Ps.className="hidden";document.body.appendChild(Ps);Ps.addEventListener("click",i=>{const t=i.target.dataset.a;t==="again"&&ur("again"),t==="next"&&ur("next"),t==="shop"&&Mr("workshop")});const Ch=document.createElement("div");Ch.id="cds";Ch.innerHTML='<div class="cd"><i id="cdStrike"></i><span>STRIKE</span><small>CLICK</small></div><div class="cd"><i id="cdBoost"></i><span>BOOST</span><small>SHIFT</small></div>';ue("hud").appendChild(Ch);const pb=ue("cdStrike"),mb=ue("cdBoost"),An=hm({mainDown:()=>{is==="battle"&&(_t.world.tops[Xt].inPlay?Qo=!0:Lp())},mainUp:()=>Ip(),boost:()=>xr=!0,ability:()=>Jo=!0,super:()=>tl=!0}),Rs=new _m({me:Xt,isTouch:()=>An.active,aim:()=>Ph(),top:()=>{const i=_t?.world.tops[Xt];return i?{inPlay:i.inPlay,x:i.x,y:i.y}:{inPlay:!1,x:0,y:0}},end:()=>{He.tutorial=1,Rh(),Mr("workshop")}});for(const i of["pointerdown","keydown"])window.addEventListener(i,()=>qt.start(),{once:!0});const $n=new Set;let Zo=!1,bi={x:0,y:3},kn=0,Ri=!1,hr=0,Jo=!1,xr=!1,Qo=!1,tl=!1,Io=null,Rp=[];const Qc=3;let Ja=0,Ga=0,na=0,an=0,si=0,Do=performance.now(),Wl=0,xo=0,Id="";function Mr(i){is=i,Kn.show(i==="workshop"),i==="workshop"&&Kn.refresh(),ue("hud").classList.toggle("hidden",i!=="battle"),Ps.classList.add("hidden"),An.show(i==="battle"),window.__sfBusy=i==="battle";for(const t of["arrows","combo"]){const e=document.getElementById(t);e&&(e.style.display=i==="battle"?"":"none")}i==="workshop"?(Rs.hide(),Rs.active=!1,qt.setHum(0,0,!1),qt.setHum(1,0,!1)):Yt.resize()}function ur(i){if(qt.start(),i==="next"&&(Kn.tier=Math.min(He.tier,Kn.tier+1)),i!=="again"||!Xe){const t=Kn.perTeam,e=Kn.tier,n=lm(Math.random,e,t,He.paint);Xe={perTeam:t,tier:e,boss:n.boss,stadium:ub(Bd(t)),specs:[sa(He),...n.allies,...n.enemies],teams:[...new Array(t).fill(0),...n.enemies.map(()=>1)]}}else Xe.specs[Xt]=sa(He);document.documentElement.style.setProperty("--me",ci(Xe.specs[Xt].accent)),document.documentElement.style.setProperty("--foe",ci(Xe.specs[Xe.perTeam].accent)),_t=new pf(Xe.specs,Math.random()*1e9|0,2,Xe.stadium,Xe.teams),jo=!1,Lo=null,na=0,Mr("battle")}function Cp(){const i=[sa(He),rm()];i[Xt].superGain*=6,Xe={perTeam:1,tier:1,boss:!1,tutorial:!0,stadium:Bd(1)[0],specs:i,teams:[0,1]},document.documentElement.style.setProperty("--me",ci(i[Xt].accent)),document.documentElement.style.setProperty("--foe",ci(i[1].accent)),_t=new pf(i,Math.random()*1e9|0,99,Xe.stadium,Xe.teams),jo=!1,Lo=null,na=0,Mr("battle"),Rs.start()}const Pp=()=>{const i=hr/_t.specs[Xt].chargeTime%2;return i>1?2-i:i};function Ph(){const i=Math.hypot(bi.x,bi.y),t=tr(_t.world.stadium),e=i>t?t/i:1;return{x:bi.x*e,y:bi.y*e}}function Lp(){Zo=!0,!ts&&_t.phase==="live"&&!_t.world.tops[Xt].inPlay&&!Ri&&(Ri=!0,hr=0)}function Ip(){if(Zo=!1,Ri){Ri=!1;const i=Ph();Io={x:i.x,y:i.y,power:Pp(),tilt:kn}}}function gb(){Yt.setTops(_t.specs,_t.stadium),Ri=!1,hr=0,Io=null,si=0,Rp=_t.specs.map(()=>.25+Math.random()*.7),bb(),yb();const i=_t.specs.findIndex(t=>t.boss);Ja=0,Ga=0,i>=0&&_t.round===1&&(Ja=Qc,Yt.bossIntro(i,Qc))}function xb(i){if(ts)return Xd(i,Xt);const t={sx:0,sy:0,ability:Jo,boost:xr,strike:Qo,super:tl};if(An.active)return t.sx=An.sx,t.sy=An.sy,t;($n.has("KeyA")||$n.has("ArrowLeft"))&&(t.sx-=1),($n.has("KeyD")||$n.has("ArrowRight"))&&(t.sx+=1),($n.has("KeyW")||$n.has("ArrowUp"))&&(t.sy-=1),($n.has("KeyS")||$n.has("ArrowDown"))&&(t.sy+=1);const e=i.tops[Xt];if(t.sx===0&&t.sy===0&&e.inPlay){const n=bi.x-e.x,s=bi.y-e.y,a=Math.hypot(n,s);a>.5&&(t.sx=n/a,t.sy=s/a)}return t}const bs=document.createElement("div");bs.id="od";bs.innerHTML="<i></i><span></span>";ue("hud").appendChild(bs);const xs=document.createElement("div");xs.id="banner";ue("hud").appendChild(xs);const qi=document.createElement("div");qi.id="flash";document.body.appendChild(qi);function so(i,t,e){xs.textContent=i,xs.style.setProperty("--bc",ci(t)),xs.className="",xs.offsetWidth,xs.className=e?"show big":"show"}function ao(i,t){qi.style.background=ci(i),qi.style.transition="none",qi.style.opacity=String(t),qi.offsetWidth,qi.style.transition="opacity 0.35s ease-out",qi.style.opacity="0"}function Ln(i){ue("toast").textContent=i,ue("toast").style.opacity="1",xo=1.3}function Dp(i){switch(i.type){case"hit":{Yt.hit(i.x,i.y,i.nx,i.ny,i.strength,i.a,i.b,i.power),qt.clash(i.strength);const t=i.a===Xt||i.b===Xt;t&&i.strength>.5&&(an=Math.max(an,.02+.05*i.strength)),t&&i.strength>.25&&ni(8+30*i.strength),i.power>=0&&(qt.power(),t&&(an=Math.max(an,.09)),i.power===2&&t?Ln("CLASH!"):i.power===Xt&&Ln("POWER HIT"));break}case"break":Yt.breakPiece(i.kind,i.index,i.x,i.y),qt.wallBreak(),Ln(i.kind==="wall"?"WALL DOWN":"PILLAR DOWN");break;case"boost":Yt.boostFx(i.i,_t.world),i.i===Xt&&Yt.kick(6),qt.boost();break;case"shift":qt.ability("brace"),i.i===Xt&&Ln(i.guard?"GUARD FORM":"ATTACK FORM");break;case"strike":qt.strike();break;case"super":{Yt.superFx(i.i,i.elements),qt.superFx();for(const t of i.elements)qt.superEl(t);si=Math.max(si,i.i===Xt?.6:.35),so(i.elements.map(t=>ke[t].super.name).join(" + "),ke[i.elements[0]].color,!0),ao(ke[i.elements[0]].color,.5);break}case"pulse":Yt.pulseFx(i,_t.world),i.targets.length&&qt.zap();break;case"react":Yt.reactFx(i.x,i.y,i.color),qt.power(),so(i.team?`TEAM COMBO  ·  ${i.name}`:i.name,i.color,i.team),ao(i.color,i.team?.5:.35),(i.i===Xt||i.by===Xt)&&(an=Math.max(an,.1));break;case"finisher":{const t=i.i===Xt||i.target===Xt;Yt.reactFx(i.x,i.y,16777215),Yt.finisherFx(i.i,i.target,t),Yt.kick(9),qt.power(),qt.wallBreak(),so("FINISHER",Xe.specs[i.i].accent,!0),si=Math.max(si,t?.8:.4),an=Math.max(an,t?.2:.08),t&&ni(70);break}case"floor":i.phase==="warn"?(Yt.floorWarn(i.sector),qt.rim(.7),Ln("FLOOR CRACKING")):(Yt.floorFall(i.sector),qt.wallBreak());break;case"fall":Yt.fallFx(i.i),i.i===Xt&&ni(80);break;case"hazard":Yt.hazardHit(i),qt.rim(i.strength),i.i===Xt&&i.strength>.3&&ni(40);break;case"plate":Yt.plateFx(i.i,i.lost),qt.wallBreak(),i.i===Xt&&ni(50),Ln(i.i===Xt?i.left?`PLATE LOST (${i.left} LEFT)`:"LAST PLATE LOST":i.left?"PLATE OFF":"PLATES GONE");break;case"crack":i.i===Xt&&ni(90),i.stage<3&&(Yt.crackTop(i.i,i.stage),qt.wallBreak(),Ln(i.i===Xt?i.stage===1?"YOUR ARMOUR BROKE":"YOUR DISC SHEARED OFF":i.stage===1?"ARMOUR BREAK":"DISC BREAK"),i.i===Xt&&ao(16724770,.4));break;case"rim":Yt.rimHit(i.x,i.y,i.strength),qt.rim(i.strength);break;case"out":i.reason==="burst"||i.reason==="broken"?(Yt.burstTop(i.i),qt.burst(),an=Math.max(an,.1)):i.reason==="ringout"?(Yt.ringOut(i.i),qt.ringOut()):qt.spinOut(),_t.world.over?si=1.3:i.i===Xt&&Ln("YOU ARE OUT");break;case"ability":qt.ability(i.kind),i.kind==="spring"&&Yt.jumpFx(i.i,_t.world);break;case"brake":Yt.brakeFx(i),i.phase==="stop"?qt.ability("brake"):(qt.release(),i.i===Xt&&Yt.kick(8));break;case"land":Yt.landFx(i,_t.world),qt.land(),i.i===Xt&&ni(40);break;case"counter":Yt.counterFx(i),qt.strike(),qt.power(),i.i===Xt&&(Ln("COUNTER"),Yt.kick(8));break;case"legend":if(Yt.legendFx(i),i.i===Xt){const t={shard:"SHARD THROWN",bank:"RESERVOIR RELEASED",twin:"SECOND CHARGE READY",echo:"ECHO",opener:"OPENER READY",thorn:"THORNS"};t[i.id]&&!(i.id==="shard"&&i.n)&&!(i.id==="thorn"&&Math.random()<.7)&&Ln(t[i.id])}i.id==="shard"&&i.n&&qt.power(),(i.id==="bank"||i.id==="echo")&&qt.zap();break;case"telegraph":Yt.telegraphFx(i),qt.bossWind(i.dur),Ln(i.move==="slam"?"SLAM: GET OUT OF THE RING":i.move==="charge"?"CHARGE: SIDESTEP THE LANE":i.move==="vortex"?"PULLING IN: BREAK AWAY":"SLABS INCOMING");break;case"bossmove":Yt.bossmoveFx(i),qt.bossSlam(),i.targets.includes(Xt)&&(ni(80),an=Math.max(an,.12));break;case"zone":i.phase==="warn"?(Yt.zoneWarnFx(i),qt.rim(.5)):(Yt.zoneHitFx(i),qt.bossSlam(),i.targets.includes(Xt)&&(ni(60),an=Math.max(an,.1)));break;case"boss":{const t=es[_t.specs[i.i].boss.kind];Yt.bossPhaseFx(i.i),qt.bossPhase(),so(t.phaseName[i.phase],_t.specs[i.i].accent,!0),ao(_t.specs[i.i].accent,.4),si=Math.max(si,.45);break}case"launch":qt.launch(i.perfect),i.i===Xt&&i.perfect&&Ln("PERFECT LAUNCH");break}}function Mb(){const i=_t.world,t=i.tops.map(()=>null);if(_t.phase==="live"){i.tops[Xt].inPlay||(ts?_t.liveT>.4&&(t[Xt]=qh(Math.random,i)):(Zo&&!Ri&&(Ri=!0,hr=0),Ri&&(hr+=vt),t[Xt]=Io));for(let s=1;s<i.tops.length;s++)!i.tops[s].inPlay&&_t.liveT>=Rp[s]&&(t[s]=Xe?.tutorial?{x:0,y:0,power:1,tilt:0}:qh(Math.random,i))}Io=null;const e=_t.phase,n=_t.tick(i.tops.map((s,a)=>a===Xt?xb(i):Xe?.tutorial?$i:Xd(i,a)),t);if(Jo=xr=Qo=tl=!1,n.forEach(s=>{Dp(s),Rs.event(s)}),_t.phase==="countdown"){const s=Math.ceil(_t.phaseT/yo);s!==Wl&&(Wl=s,qt.beep(!1))}else e==="countdown"&&(Wl=0,qt.beep(!0));_t.phase==="matchEnd"&&!jo&&vb()}function vb(){jo=!0;const i=Xe,t=_t.score[0]>_t.score[1];let e=[],n=!1;if(!ts){const o=i.boss&&t&&!He.bosses.includes(i.tier);e=tm(Math.random,i.tier,t,i.boss,i.perTeam,o).map(l=>Q0(He,l)),o&&He.bosses.push(i.tier),t&&(He.wins++,i.tier===He.tier&&He.tier<nr&&(He.tier++,n=!0)),Rh()}if(e.length){const o=_t.world.tops[i.perTeam],l=Math.hypot(o.x,o.y),c=l>i.stadium.radius*.7?i.stadium.radius*.7/l:1;Yt.dropLoot(o.x*c,o.y*c,e.map(h=>Si[h.rarity].color)),qt.launch(e.some(h=>h.rarity>=2))}const s=e.map((o,l)=>`
      <div class="lc" style="--rc:${ci(Si[o.rarity].color)};animation-delay:${.25+l*.18}s">
        <b>${jl(o)}</b><small>${Si[o.rarity].name.toUpperCase()} · LEVEL ${o.level} · ${co[ze(o.part).slot]}</small>
        ${_o(o)?`<span class="lgt">${_o(o)}</span>`:""}
        ${o.affixes.map(c=>`<span>${Zl(c)}</span>`).join("")}
      </div>`).join(""),a=ts?"":e.length?n?`LOOT  ·  TIER ${He.tier} UNLOCKED`:"LOOT":t?"NO DROPS THIS TIME":"NOTHING SALVAGED",r=t&&i.tier<He.tier?'<button data-a="next">NEXT TIER</button>':"";Ps.innerHTML=`<div id="lootTitle">${a}</div><div id="loot">${s}</div><div class="btns">${r}<button data-a="again">REMATCH</button><button data-a="shop">FORGE</button></div>`}const _b={ringout:"RING-OUT",burst:"BURST",spinout:"SPIN-OUT",broken:"DESTROYED",time:"TIME"};function ro(i,t=""){if(i!==Id){Id=i;const e=ue("big");e.textContent=i,e.classList.remove("pop"),e.offsetWidth,i&&e.classList.add("pop")}ue("sub").textContent=t}let Dd=0;function yb(){let i=document.getElementById("lineup");i||(i=document.createElement("div"),i.id="lineup",document.getElementById("hud")?.appendChild(i));const t=_t.specs.map((e,n)=>n).filter(e=>_t.world.teams[e]!==_t.world.teams[Xt]);if(_t.round!==1||t.length<2){i.classList.remove("on");return}i.innerHTML="<b>ENEMY LINE-UP</b>"+t.map(e=>`<div><span>${_t.specs[e].name}</span><em>${Uo(_t.specs[e]).join(" · ")}</em></div>`).join(""),i.classList.add("on"),clearTimeout(Dd),Dd=window.setTimeout(()=>i.classList.remove("on"),4500)}function Nd(i){const t=_t.specs[i].ai?.persona;return t&&!(_t.world.teams[i]===0&&i===Xt)?` <em class="tag">${em[t]}</em>`:""}function bb(){for(const i of[0,1]){const t=document.querySelector(i?".panel.right":".panel.left"),e=_t.specs.map((s,a)=>a).filter(s=>_t.world.teams[s]===i),n=e.length>1;t.classList.toggle("many",n),t.innerHTML=`<div class="name${!n&&_t.specs[e[0]].name.length>17?" long":""}"><span>${n?i?"ENEMY TEAM":"YOUR TEAM":_t.specs[e[0]].name+Nd(e[0])}</span><span class="pips" id="p${i}"></span></div>`+(n?"":`<div class="threat">${Uo(_t.specs[e[0]]).join("  ·  ")}</div>`)+e.map(s=>`<div class="row" id="r${s}">${n?`<span class="nm">${s===Xt?"YOU":_t.specs[s].name+Nd(s)}</span>`:""}<div class="bar spin"><i id="s${s}"></i></div><div class="bar burst"><i id="b${s}"></i></div><div class="bar arm"><i id="a${s}"></i></div></div>`).join("")}}function Ud(i,t,e){i.childElementCount!==e&&(i.innerHTML="<i></i>".repeat(e)),[...i.children].forEach((n,s)=>n.classList.toggle("on",s<t))}function Sb(i){const t=_t.world;t.tops.forEach((S,y)=>{ue(`s${y}`).style.width=`${(S.inPlay?Math.min(1,vn(S)):1)*100}%`,ue(`b${y}`).style.width=`${Math.min(1,S.burst)*100}%`,ue(`a${y}`).style.width=`${S.armour*100}%`,ue(`r${y}`).classList.toggle("out",!!S.out)});const e=_t.specs.findIndex(S=>S.boss),n=ue("bossbar");if(e>=0&&t.tops[e].inPlay&&!t.tops[e].out){const S=t.tops[e],y=es[_t.specs[e].boss.kind];n.style.display="block",n.style.setProperty("--foe",ci(_t.specs[e].accent)),ue("bossName").textContent=y.name,ue("bossPhase").textContent=`PHASE ${Math.min(2,S.stage)+1}  ·  ${y.phaseName[Math.min(2,S.stage)]}`,ue("bossFill").style.width=`${S.armour*100}%`;const _=ue("bossMove"),C=S.bossMove&&S.bossStage===0;_.textContent=C?{slam:"SLAM",charge:"CHARGE",vortex:"PULL",drops:"SLABS"}[S.bossMove]:"",_.classList.toggle("on",!!C)}else n.style.display="none";Ud(ue("p0"),_t.score[0],_t.winsNeeded),Ud(ue("p1"),_t.score[1],_t.winsNeeded),ue("timer").textContent=String(Math.max(0,Math.ceil(Gd-t.time))),ue("round").textContent=`${_t.stadium.name}  ·  TIER ${Xe.tier}  ·  ROUND ${_t.round}`;const s=t.tops[Xt],a=document.getElementById("combo");for(let S=0;S<3;S++)a.children[S].classList.toggle("on",s.combo>S);a.classList.toggle("full",s.combo>=3);const r=document.getElementById("arrows"),o=innerWidth,l=innerHeight;t.tops.forEach((S,y)=>{let _=r.children[y];_||(_=document.createElement("i"),r.append(_));const C=y!==Xt&&S.inPlay&&!S.out?Yt.simToScreen(S.x,S.y):null;if(!C||!C.behind&&C.x>0&&C.x<o&&C.y>0&&C.y<l){_.style.display="none";return}const w=(C.x-o/2)*(C.behind?-1:1),T=(C.y-l/2)*(C.behind?-1:1),M=Math.min((o/2-30)/Math.max(1,Math.abs(w)),(l/2-30)/Math.max(1,Math.abs(T)));_.style.display="",_.style.setProperty("--c",t.teams[y]===t.teams[Xt]?"var(--me)":"var(--foe)"),_.style.transform=`translate(${o/2+w*M}px,${l/2+T*M}px) rotate(${Math.atan2(T,w)}rad)`});for(let S=t.tops.length;S<r.children.length;S++)r.children[S].style.display="none";_t.phase==="countdown"?ro(String(Math.ceil(_t.phaseT/yo))):_t.phase==="live"?ro(_t.liveT<.9?"LAUNCH!":""):t.over&&(_t.phase==="matchEnd"?ro(_t.score[0]>_t.score[1]?"VICTORY":"DEFEAT"):ro(_b[t.over.reason],t.over.winner<0?"DRAW":t.over.winner===0?"ROUND WON":"ROUND LOST")),Ps.classList.toggle("hidden",_t.phase!=="matchEnd");const c=!ts&&!s.inPlay&&(_t.phase==="countdown"||_t.phase==="live");if(ue("launch").classList.toggle("hidden",!c),c&&An.active&&(bi={x:An.sx*tr(t.stadium)*.9,y:An.sy*tr(t.stadium)*.9}),c){ue("pw").style.width=`${(Ri?Pp():0)*100}%`;const S=kn===0?"FLAT":(kn<0?"◀ ":"")+`${Math.round(Math.abs(kn)*100)}%`+(kn>0?" ▶":"");ue("tilt").textContent=`TILT  ${S}`;const y=Ph();Yt.setAim(!0,y.x,y.y,kn,s.spec.spinDir)}else Yt.setAim(!1);const h=Js(s.spec),u=s.brakeT>0?"RELEASE":Vd[s.spec.ability]+(s.lg.twin===1?" x2":"");ue("abName").textContent=u,pb.style.height=`${s.strikeCd/dt.STRIKE_CD*100}%`,mb.style.height=`${s.boostCd/dt.BOOST_CD*100}%`,ue("abFill").style.height=`${s.abilityCd/h*100}%`,ue("ability").classList.toggle("ready",s.inPlay&&!s.out&&s.abilityCd<=0),xo>0&&(xo-=i,xo<=0&&(ue("toast").style.opacity="0")),qt.setHum(0,vn(s),s.inPlay&&!s.out);let f=null,d=1/0;t.tops.forEach((S,y)=>{const _=Math.hypot(S.x-s.x,S.y-s.y);t.teams[y]!==0&&Qe(S)&&_<d&&(d=_,f=S)}),qt.setHum(1,f?vn(f):0,!!f);const m=s.spec.elements,x=m.map(S=>ke[S].super.name).join(" + "),p=ci(ke[m[0]].color),g=s.superMeter>=1;bs.style.setProperty("--sc",p),bs.firstElementChild.style.width=`${s.superMeter*100}%`,bs.lastElementChild.textContent=g?`${x} READY${An.active?"":"  ·  F"}`:"OVERDRIVE",bs.classList.toggle("ready",g),Rs.active&&Rs.frame(i),An.update({superMeter:s.superMeter,superName:x,superColor:p,launching:c,ability:u,strike:s.strikeCd/dt.STRIKE_CD,boost:s.boostCd/dt.BOOST_CD,abilityCd:s.abilityCd/h})}let kd=0,Od=0,Np=!1;function Up(i){requestAnimationFrame(Up),Np?Do=i:kp(i)}function kp(i){const t=Math.max(0,Math.min(.05,(i-Do)/1e3));if(Do=i,is==="workshop"){Kn.frame(t);return}Fe.measured||(++kd>40&&(Od+=Math.min(.1,t)),kd>=130&&Ba({quality:pm(Od/90*1e3),measured:!0,qualityAuto:!0}));let e=1,n=-1;if(si>0&&(si-=t,e=.22),an>0&&(an-=t,e=0),Ja>0){Ja-=t,e=0,n=1;const s=Qc-Ja,a=_t.specs.findIndex(r=>r.boss);if(Ga===0&&s>.55&&a>=0){Ga=1;const r=[];Wd(_t.world,a,{x:0,y:0,power:1,tilt:0},r),r.forEach(Dp)}if(Ga===1&&s>1.35){Ga=2,qt.bossSlam(),ni(120);const r=es[_t.specs[a].boss.kind],o=ue("bossplate");o.style.setProperty("--foe",ci(_t.specs[a].accent)),o.firstElementChild.textContent=r.name,o.lastElementChild.textContent=r.epithet.toUpperCase(),o.classList.remove("show"),o.offsetWidth,o.classList.add("show")}}for(na+=t*e;na>=vt;)Mb(),na-=vt;_t.world!==Lo&&(Lo=_t.world,gb()),Sb(t),Yt.frame(_t.world,na/vt,t*(n>=0?n:e),i/1e3,Xt)}window.addEventListener("keydown",i=>{is==="battle"&&(i.code==="Space"&&(Jo=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(xr=!0),i.code==="KeyF"&&(tl=!0),i.code==="KeyQ"&&(kn=Math.max(-1,kn-.25)),i.code==="KeyE"&&(kn=Math.min(1,kn+.25)),$n.add(i.code))});window.addEventListener("keyup",i=>$n.delete(i.code));window.addEventListener("blur",()=>{$n.clear(),Zo=!1});gr.addEventListener("mousemove",i=>{is==="battle"&&!An.active&&(bi=Yt.screenToSim(i.clientX,i.clientY))});gr.addEventListener("mousedown",i=>{if(!(is!=="battle"||An.active)){if(bi=Yt.screenToSim(i.clientX,i.clientY),i.button===2){xr=!0;return}i.button===0&&(_t.world.tops[Xt].inPlay&&(Qo=!0),Lp())}});window.addEventListener("mouseup",i=>{i.button===0&&!An.active&&Ip()});gr.addEventListener("wheel",i=>{is==="battle"&&(kn=Math.max(-1,Math.min(1,kn+(i.deltaY>0?.25:-.25))),i.preventDefault())},{passive:!1});gr.addEventListener("contextmenu",i=>i.preventDefault());Object.assign(window,{sf:{get match(){return _t},get mode(){return is},get fight(){return Xe},save:He,view:Yt,workshop:Kn,tut:Rs,tutorial(){Cp()},start(i,t=1){Kn.tier=i,Kn.perTeam=t,ur("new")},pause(i=!0){Np=i},step(i,t=16.67){for(let e=0;e<i;e++)kp(Do+t)}}});ts?ur("new"):!He.tutorial||Po.has("tutorial")?Cp():Mr("workshop");window.__sfReady?.();requestAnimationFrame(Up);
