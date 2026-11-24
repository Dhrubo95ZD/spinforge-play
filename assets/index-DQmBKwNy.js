(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Bi={warden:{kind:"warden",name:"THE FOUNDRY WARDEN",epithet:"A furnace in a plate shell",element:"thermal",paint:12866074,glow:16752688,metal:"gunmetal",moves:[["slam"],["slam"],["slam","drops"]],cd:[6.5,4.6,4.2],speed:[1,1.35,1.5],persona:["turtle","rusher","rusher"],phaseName:["SHELL ON","SHELL SHED","SLAG FALL"],drops:[0,0,1],chain:[!1,!1,!1]},piledriver:{kind:"piledriver",name:"THE PILEDRIVER",epithet:"A ram that runs the arena",element:"quake",paint:14200864,glow:16765498,metal:"steel",moves:[["charge"],["charge"],["charge","slam"]],cd:[6,4.6,3.6],speed:[1,1.2,1.3],persona:["ambusher","rusher","rider"],phaseName:["RAM READY","DOUBLE CHARGE","CHARGE AND CRUSH"],drops:[0,0,0],chain:[!1,!0,!1]},gyre:{kind:"gyre",name:"THE GYRE ENGINE",epithet:"A gyroscope that drags you in",element:"volt",paint:2789304,glow:6480639,metal:"chrome",moves:[["vortex"],["drops","vortex"],["vortex","charge"]],cd:[7,5,4],speed:[1,1.25,1.4],persona:["turtle","ambusher","rusher"],phaseName:["GYRO SPIN","PYLON RAIN","OVERSPEED"],drops:[0,2,0],chain:[!1,!1,!1]},flywheel:{kind:"flywheel",name:"THE LAST FLYWHEEL",epithet:"Stored spin of every machine before it",element:"mag",paint:9313324,glow:16730716,metal:"copper",moves:[["charge","slam"],["charge","drops","vortex"],["charge","slam","drops","vortex"]],cd:[5.5,4.2,3.2],speed:[1,1.25,1.4],persona:["rider","rusher","rusher"],phaseName:["FULL RIM","SPOKES OUT","RUNAWAY"],drops:[0,1,2],chain:[!1,!1,!0]}},Jf=["warden","piledriver","gyre","flywheel"],Ju=i=>Jf[(Math.floor(i/5)-1+4)%4],we={SLAM_WIND:.9,SLAM_R:4.4,CHARGE_WIND:1.1,CHAIN_WIND:.55,CHARGE_T:.75,CHARGE_SPEED:30,CHARGE_LANE:2.6,VORTEX_WIND:1.4,VORTEX_R:12,VORTEX_PULL:15,DROP_WIND:.5,DROP_DELAY:1.3,DROP_R:2.3,CRASH_STUN:.9},Xs={id:"foundry",name:"THE FOUNDRY",radius:10,pull:1.3,segments:24,segHp:3,openSegs:[6,14,22],rail:{width:1.6,accel:16,max:26},pillars:[],theme:{floor:1382950,wall:8950440,strip:4029439}},Ur=(i,t,e,n,s=0)=>Array.from({length:i},(r,a)=>{const o=s+a/i*Math.PI*2;return{x:Math.cos(o)*t,y:Math.sin(o)*t,r:e,hp:n}}),jf={id:"pillaryard",name:"PILLAR YARD",radius:10,pull:1,segments:24,segHp:2,openSegs:[0,12],rail:{width:1.6,accel:12,max:22},pillars:Ur(4,4.6,.75,4,Math.PI/4),theme:{floor:1840914,wall:10521192,strip:16747050}},Qf={id:"crucible",name:"THE CRUCIBLE",radius:14,pull:.9,segments:32,segHp:3.5,openSegs:[0,8,16,24],rail:{width:1.8,accel:18,max:30},pillars:Ur(6,7.2,.9,5),theme:{floor:1905684,wall:10129295,strip:16730682}},tp={id:"ironbasin",name:"IRON BASIN",radius:14,pull:1,segments:32,segHp:2.5,openSegs:[5,16,27],rail:{width:1.8,accel:20,max:32},pillars:[],theme:{floor:1054746,wall:8362656,strip:2807496}},ep={id:"colosseum",name:"THE COLOSSEUM",radius:18,pull:.7,segments:40,segHp:4,openSegs:[0,10,20,30],rail:{width:2,accel:20,max:34},pillars:[...Ur(4,5.5,1.1,7),...Ur(8,12,.9,5,Math.PI/8)],theme:{floor:1446940,wall:11116736,strip:10120191}},Co=i=>({id:`crumble${i}`,name:"THE CRUMBLE",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:[],rail:null,pillars:i===18?Ur(4,6,1,6,Math.PI/4):[],theme:{floor:2365974,wall:10850168,strip:16742954},collapse:i===10?{sectors:8,inner:.38,start:12,every:3.4,warn:1.4}:i===14?{sectors:10,inner:.34,start:11,every:3,warn:1.4}:{sectors:12,inner:.3,start:10,every:2.6,warn:1.4}}),Po=i=>{const t=i,e=t===10?[{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:0},{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:Math.PI}]:t===14?[{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:0},{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:Math.PI},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:7.5,period:7,phase:0,r:1.1},{kind:"block",x:0,y:0,ang:0,amp:7.5,period:7,phase:3.5,r:1.1}]:[{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:0},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*2/3},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*4/3},{kind:"block",x:0,y:0,ang:Math.PI/4,amp:11,period:8,phase:0,r:1.3},{kind:"block",x:0,y:0,ang:-Math.PI/4,amp:11,period:8,phase:4,r:1.3},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:11,period:9,phase:2,r:1.3},{kind:"block",x:0,y:0,ang:0,amp:11,period:9,phase:6.5,r:1.3}];return{id:`thresher${i}`,name:"THE THRESHER",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:i===10?[3,15]:i===14?[4,20]:[5,25],rail:null,pillars:[],theme:{floor:1318940,wall:8364176,strip:11992890},hazards:e}},np=[Xs,jf,Qf,tp,ep,Co(10),Co(14),Co(18),Po(10),Po(14),Po(18)];function Tc(i,t){if(i.kind==="bar")return{a:i.phase+i.omega*t,x:0,y:0,vx:0,vy:0};const e=Math.PI*2/i.period,n=Math.sin(e*t+i.phase),s=Math.cos(e*t+i.phase);return{a:i.ang,x:i.x+Math.cos(i.ang)*i.amp*n,y:i.y+Math.sin(i.ang)*i.amp*n,vx:Math.cos(i.ang)*i.amp*e*s,vy:Math.sin(i.ang)*i.amp*e*s}}function Ac(i,t){const e=(t%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return Math.min(i.sectors-1,Math.floor(e/(Math.PI*2)*i.sectors))}function ip(i){const t=i<=2?10:i<=4?14:18;return np.filter(e=>e.radius===t)}const oo=["thermal","cryo","volt","gale","quake","mag","plasma","gravity","resonance"],sp=["plasma","gravity","resonance"],Le={thermal:{name:"Thermal",color:16734751,status:"HEATED",statusText:"loses spin steadily",super:{name:"MELTDOWN",dur:4,atk:1.6,steer:1.35,start:{radius:4,impulse:9,status:!0},pulse:{every:.5,radius:3.4,spin:1.6,status:!0}}},cryo:{name:"Cryo",color:8379647,status:"CHILLED",statusText:"steers and travels at about half speed",super:{name:"ABSOLUTE ZERO",dur:2.2,guard:.5,start:{radius:6.5,stun:1.4,armour:.08,status:!0}}},volt:{name:"Volt",color:16773226,status:"CHARGED",statusText:"takes extra spin damage from hits",super:{name:"ARC STORM",dur:3,pulse:{every:.35,radius:9,nearest:!0,spin:3.2,stun:.12,status:!0}}},gale:{name:"Gale",color:10354640,status:"LIFTED",statusText:"is thrown much further by hits",super:{name:"CYCLONE",dur:2.2,pull:{radius:8,accel:26},end:{radius:5.5,impulse:27,status:!0}}},quake:{name:"Quake",color:14263386,status:"CRACKED",statusText:"takes extra armour damage",super:{name:"FAULT LINE",dur:1,start:{radius:7,impulse:20,armour:.15,status:!0,wreck:2.6}}},mag:{name:"Mag",color:12946431,status:"PULLED",statusText:"is dragged toward whoever marked it",super:{name:"POLARITY",dur:.7,guard:.6,start:{radius:40,nearest:!0,impulse:-24,status:!0},end:{radius:4,impulse:32}}},plasma:{name:"Plasma",color:16732120,status:"IONISED",statusText:"has its armour eaten away",super:{name:"NOVA LANCE",dur:1.1,atk:1.3,start:{radius:15,nearest:!0,armour:.2,spin:5,impulse:16,status:!0}}},gravity:{name:"Gravity",color:6978559,status:"SLUNG",statusText:"slides outward toward the rim",super:{name:"SINGULARITY",dur:2.6,guard:.7,pull:{radius:11,accel:34},pulse:{every:.4,radius:3,spin:1.4,armour:.02},end:{radius:5.5,impulse:30,status:!0}}},resonance:{name:"Resonance",color:5242848,status:"RINGING",statusText:"bleeds Overdrive charge",super:{name:"HARMONIC",dur:2.4,pulse:{every:.6,radius:6.5,stun:.35,armour:.05,impulse:8,wreck:.8,status:!0}}}},rp=4,ap=[{a:"thermal",b:"cryo",name:"THERMAL SHOCK",color:16777215,armour:.22},{a:"thermal",b:"gale",name:"FIRESTORM",color:16747050,spin:13},{a:"cryo",b:"quake",name:"SHATTER",color:12578815,armour:.28},{a:"volt",b:"mag",name:"RAILSHOT",color:14721279,impulse:34},{a:"cryo",b:"volt",name:"SUPERCONDUCT",color:11465983,stun:1.3,spin:4},{a:"thermal",b:"quake",name:"ERUPTION",color:16738874,impulse:20,armour:.14},{a:"gale",b:"volt",name:"TEMPEST",color:14221194,spin:9,impulse:14},{a:"gale",b:"quake",name:"SANDBLAST",color:15255696,armour:.12,spin:6},{a:"mag",b:"quake",name:"IRON TIDE",color:12098815,impulse:22,armour:.1},{a:"plasma",b:"volt",name:"OVERLOAD",color:16752880,stun:1,armour:.16},{a:"plasma",b:"cryo",name:"FLASH FREEZE",color:14731519,stun:.6,armour:.2},{a:"plasma",b:"gravity",name:"EVENT HORIZON",color:11559167,armour:.3,spin:8},{a:"gravity",b:"quake",name:"COLLAPSE",color:9081087,armour:.26},{a:"gravity",b:"gale",name:"SLINGSHOT",color:9494783,impulse:38},{a:"resonance",b:"quake",name:"AFTERSHOCK",color:10479808,armour:.15,stun:.8},{a:"resonance",b:"volt",name:"FEEDBACK",color:13172634,spin:12},{a:"resonance",b:"thermal",name:"BOILOVER",color:16760970,spin:10,armour:.08}],ju=(i,t)=>ap.find(e=>e.a===i&&e.b===t||e.a===t&&e.b===i),op=i=>{const t=Le[i];return{id:i,name:t.name,elements:[i],blurb:`${t.super.name}. Marks foes ${t.status}: a marked top ${t.statusText}.`}},Xn=(i,t,e,n)=>({id:i,name:t,elements:[e,n],blurb:`Fused ${Le[e].name} and ${Le[n].name}. Fires both supers at once, and its strikes set off ${ju(e,n)?.name??"both statuses"} on their own.`}),qa=[...oo.map(op),Xn("firestorm","Firestorm","thermal","gale"),Xn("glacier","Glacier","cryo","quake"),Xn("railgun","Railgun","volt","mag"),Xn("superconductor","Superconductor","cryo","volt"),Xn("magma","Magma","thermal","quake"),Xn("tempest","Tempest","gale","volt"),Xn("horizon","Event Horizon","plasma","gravity"),Xn("overload","Overload","plasma","volt"),Xn("collapse","Collapse","gravity","quake"),Xn("feedback","Feedback","resonance","volt")],lo=i=>qa.find(t=>t.id===i)??qa[0],ch=i=>lo(i).elements.length>1,Qu=i=>lo(i).elements.some(t=>sp.includes(t)),hh=i=>Qu(i)?ch(i)?4:3:ch(i)?2:0,gt=1/60,td=60,at={SMASH:.03,TANG:.3,SPINLOSS:.025,EQ:.05,BURST:.0024,BURST_DRAIN:.01,STEER_MULT:2.8,RIM_E:.6,RIM_SPIN:.03,HIT_CD:.07,WEAK_KB:1,WALL_MIN:7,WALL_DIV:11,ARMOUR_MIN:11,ARMOUR:.002,STAGGER_T:.9,STAGGER_ARMOUR:.2,HEAT_DRAIN:1,SUPER_PASSIVE:.012,SUPER_HIT:.011,SUPER_STRIKE:.1,BOOST_IMPULSE:18,BOOST_CD:.9,BOOST_COST:.5,BOOST_T:.3,STRIKE_T:.22,STRIKE_CD:1.1,STRIKE_CD_HIT:.45,STRIKE_COST:.8,STRIKE_ATK:1.7,STRIKE_GUARD:.55,DASH_IMPULSE:24,DASH_CD:6,DASH_COST:2,DASH_T:.6,BRACE_T:1.5,BRACE_CD:8,BRAKE_T:.6,BRAKE_MINHOLD:.12,BRAKE_CD:7,BRAKE_COST:1,BRAKE_GAIN:1.3,BRAKE_PLUS:6,BRAKE_MIN:14,BRAKE_MAX:34,BRAKE_GUARD:.35,JUMP_T:.45,JUMP_CD:7,JUMP_COST:1.5,JUMP_HOP:9,LAND_R:3.4,LAND_IMPULSE:12,LAND_SPIN:2,LAND_ARMOUR:.015,HAZ_E:.5,HAZ_SPIN:.5,HAZ_ARMOUR_MIN:8,HAZ_ARMOUR:.006,COUNTER_WIN:.35,COUNTER_SPEED:11,COUNTER_IMPULSE:16,LAUNCH_FRAC:.65},ed={dash:"SURGE",brace:"BRACE",brake:"BRAKE",spring:"SPRING"},es={sx:0,sy:0,ability:!1,boost:!1,strike:!1};function lp(i,t){const e=i.collapse;if(!e)return{floorT:[],floorPhase:[]};let n=t^1540483477|0;const s=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296},r=Array.from({length:e.sectors},(o,l)=>l);for(let o=r.length-1;o>0;o--){const l=Math.floor(s()*(o+1));[r[o],r[l]]=[r[l],r[o]]}const a=new Array(e.sectors).fill(0);return r.forEach((o,l)=>a[o]=e.start+e.warn+l*e.every),{floorT:a,floorPhase:new Array(e.sectors).fill(0)}}function uh(i,t,e=Xs,n=i.map((s,r)=>r%2)){return{teams:n,pairCd:new Array(i.length*i.length).fill(0),lastOut:null,zones:[],shots:[],burn:[],stadium:e,segHp:Array.from({length:e.segments},(s,r)=>e.openSegs.includes(r)?0:e.segHp),pillars:e.pillars.map(s=>({...s})),...lp(e,t),tops:i.map(s=>({spec:s,x:0,y:0,vx:0,vy:0,px:0,py:0,spin:0,phase:0,burst:0,inPlay:!1,leaving:!1,out:null,steerX:0,steerY:0,abilityCd:0,braceT:0,dashT:0,brakeT:0,brakeSpeed:0,brakeDx:0,brakeDy:0,airT:0,counterT:0,boostCd:0,boostT:0,strikeT:0,combo:0,comboT:0,statusFrom:{},strikeCd:0,onRail:!1,shift:0,plates:0,sink:0,status:{thermal:0,cryo:0,volt:0,gale:0,quake:0,mag:0,plasma:0,gravity:0,resonance:0},statusBy:0,reactCd:0,stunT:0,superMeter:0,superT:0,pulseT:0,armour:1,stage:0,bossMove:null,bossStage:0,bossT:0,bossDur:1,bossDx:0,bossDy:1,bossCd:2.2,bossCount:0,bossChain:0,lg:{}})),time:0,rng:t|0,over:null}}function Tr(i){i.rng=i.rng+1831565813|0;let t=Math.imul(i.rng^i.rng>>>15,1|i.rng);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}const on=i=>Math.abs(i.spin)/i.spec.maxSpin,nd=i=>i.ability==="dash"?at.DASH_CD:i.ability==="brake"?at.BRAKE_CD:i.ability==="spring"?at.JUMP_CD:at.BRACE_CD,ke=i=>i.spec.radius+(i.spec.shift?.radius??0)*i.shift+(i.spec.flail?i.spec.flail.radius*Math.min(1,on(i)):0),dh=i=>(i.spec.flail?1+i.spec.flail.attack*(Math.min(1,on(i))-.5):1)*(i.spec.plates?1-i.spec.plates.attack*i.plates:1),fh=i=>(i.spec.plates?1+i.spec.plates.speed*i.plates:1)*(i.spec.boss?Bi[i.spec.boss.kind].speed[Math.min(2,i.stage)]:1),Fa=(i,t)=>1+(i.spec.shift?.[t]??0)*i.shift,Ve=i=>i.inPlay&&!i.out&&!i.leaving,yn=(i,t)=>!!i.spec.legends?.includes(t),$e=(i,t)=>i.lg[t]??0;function vl(i,t){const e=i.segments;return(Math.round(t/(Math.PI*2)*e)%e+e)%e}const Nr=i=>i.radius*at.LAUNCH_FRAC;function id(i,t,e,n){const s=i.tops[t];if(s.inPlay)return;let{x:r,y:a}=e;const o=Math.hypot(r,a),l=Nr(i.stadium);o>l&&(r*=l/o,a*=l/o);const c=Math.max(0,Math.min(1,e.power)),h=c>=.9,u=Math.max(-1,Math.min(1,e.tilt));s.x=s.px=r,s.y=s.py=a,s.spin=s.spec.spinDir*s.spec.maxSpin*(h?1:.6+.4*c);const f=Math.hypot(r,a),d=f>.05?-a/f:1,g=f>.05?r/f:0;s.vx=d*u*14*s.spec.spinDir,s.vy=g*u*14*s.spec.spinDir,s.inPlay=!0,h&&yn(s,"opener")&&(s.lg.opener=1,s.lg.openerT=4,n.push({type:"legend",id:"opener",i:t,x:r,y:a})),n.push({type:"launch",i:t,perfect:h})}function ph(i,t){return t<at.WALL_MIN?i:Math.max(0,i-t/at.WALL_DIV)}const Ml=i=>i.spec.mass*(i.stage>=2?.85:1)*(i.spec.plates?1-i.spec.plates.mass*i.plates:1);function _l(i,t){if(i.superT<=0)return 1;let e=1;for(const n of i.spec.elements){const s=Le[n].super[t];s!==void 0&&(e=t==="guard"?Math.min(e,s):Math.max(e,s))}return e}const er=(i,t)=>{i.spin=Math.max(0,Math.abs(i.spin)-t)*i.spec.spinDir},nr=(i,t,e,n)=>{const s=i.x-t,r=i.y-e,a=Math.hypot(s,r)||1,o=Math.sqrt(Ml(i)/1.1);i.vx+=s/a*n/o,i.vy+=r/a*n/o},cp=2,hp=.05,up=3.5,dp=1.2,fp=.15,pp=.07;function ln(i,t,e,n){const s=i.tops[t];if(s.out||e<=0)return;if(s.armour=Math.max(0,s.armour-e*(s.status.quake>0?1.6:1)*(s.braceT>0||s.brakeT>0?.4:1)),s.spec.plates){const a=Math.min(s.spec.plates.count,Math.floor((1-s.armour)/pp));for(;s.plates<a;)s.plates++,n.push({type:"plate",i:t,lost:s.plates,left:s.spec.plates.count-s.plates})}const r=s.armour<=0?3:s.armour<.34?2:s.armour<.67?1:0;r>s.stage&&(s.stage=r,n.push({type:"crack",i:t,stage:r}),s.spec.boss&&r<3&&Mp(i,t,r,n),r===3&&(s.out="broken",n.push({type:"out",i:t,reason:"broken"})))}function Ya(i,t,e,n,s){const r=i.tops[t];if(!r.out){if(r.reactCd<=0)for(const a of oo){if(a===e||r.status[a]<=0)continue;const o=ju(e,a);if(!o)continue;const l=i.tops[n],c=r.statusFrom[a],h=c!==void 0&&c!==n&&i.teams[c]===i.teams[n],u=l.spec.superPower*(h?dp:1);if(h)for(const f of[c,n])i.tops[f].superMeter=Math.min(1,i.tops[f].superMeter+fp);r.status[a]=0,r.status[e]=0,r.reactCd=1.5,o.spin&&er(r,o.spin*u),o.stun&&(r.stunT=Math.max(r.stunT,o.stun)),o.impulse&&nr(r,l.x,l.y,o.impulse),s.push({type:"react",i:t,by:n,name:o.name,color:o.color,x:r.x,y:r.y,team:h}),o.armour&&ln(i,t,o.armour*u,s);return}r.status[e]=rp,r.statusFrom[e]=n,e==="mag"&&(r.statusBy=n)}}function ka(i,t,e,n,s){const r=i.tops[t],a=r.spec.superPower*($e(r,"halfT")>0?.5:1),o=c=>Math.hypot(i.tops[c].x-r.x,i.tops[c].y-r.y);let l=[];i.tops.forEach((c,h)=>{i.teams[h]!==i.teams[t]&&Ve(c)&&c.airT<=0&&o(h)<=n.radius+ke(c)&&l.push(h)}),n.nearest&&l.length>1&&(l=[l.sort((c,h)=>o(c)-o(h))[0]]);for(const c of l){const h=i.tops[c];n.impulse&&nr(h,r.x,r.y,n.impulse),n.spin&&er(h,n.spin*a),n.stun&&(h.stunT=Math.max(h.stunT,n.stun)),n.status&&Ya(i,c,e,t,s),n.armour&&ln(i,c,n.armour*a,s)}if(n.wreck){i.pillars.forEach((u,f)=>{u.hp<=0||Math.hypot(u.x-r.x,u.y-r.y)>n.radius||(u.hp=Math.max(0,u.hp-n.wreck),u.hp<=0&&s.push({type:"break",kind:"pillar",index:f,x:u.x,y:u.y}))});const c=i.stadium.radius,h=Math.hypot(r.x,r.y);if(h>.5&&c-h<n.radius){const u=Math.acos(Math.max(-1,Math.min(1,(c*c+h*h-n.radius*n.radius)/(2*c*h)))),f=Math.atan2(r.y,r.x),d=i.stadium.segments;for(let g=0;g<d;g++){const x=g/d*Math.PI*2,p=Math.atan2(Math.sin(x-f),Math.cos(x-f));Math.abs(p)>u||i.segHp[g]<=0||(i.segHp[g]=Math.max(0,i.segHp[g]-n.wreck*.6),i.segHp[g]<=0&&s.push({type:"break",kind:"wall",index:g,x:Math.cos(x)*c,y:Math.sin(x)*c}))}}}s.push({type:"pulse",i:t,x:r.x,y:r.y,radius:Math.min(n.radius,12),element:e,targets:l})}function yl(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!Ve(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function mp(i,t,e){const n=i.tops[t],s=[];i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!Ve(r)||r.airT>0||Math.hypot(r.x-n.x,r.y-n.y)>at.LAND_R+ke(r)||(s.push(a),nr(r,n.x,n.y,at.LAND_IMPULSE),er(r,at.LAND_SPIN),ln(i,a,at.LAND_ARMOUR,e))}),e.push({type:"land",i:t,x:n.x,y:n.y,radius:at.LAND_R,targets:s})}function gp(i,t,e,n){const s=i.tops[e];let r=e,a=1/0;i.tops.forEach((c,h)=>{if(h===e||i.teams[h]===i.teams[t]||!Ve(c))return;const u=Math.hypot(c.x-s.x,c.y-s.y);u<a&&(a=u,r=h)});let o=s.x,l=s.y;if(r===e){const c=i.tops[t],h=Math.hypot(s.x-c.x,s.y-c.y)||1;o+=(s.x-c.x)/h*3,l+=(s.y-c.y)/h*3}i.shots.push({i:t,k:r,x:o,y:l,t:2,power:r===e?.5:1}),n.push({type:"legend",id:"shard",i:t,x:o,y:l,k:r})}function xp(i,t){for(let e=i.shots.length-1;e>=0;e--){const n=i.shots[e],s=i.tops[n.k];if(n.t-=gt,n.t<=0||!s||s.out){i.shots.splice(e,1);continue}const r=s.x-n.x,a=s.y-n.y,o=Math.hypot(r,a)||1;if(n.x+=r/o*34*gt,n.y+=a/o*34*gt,o<ke(s)+.5&&s.airT<=0){i.shots.splice(e,1),nr(s,n.x-r/o*2,n.y-a/o*2,14*n.power),er(s,4*n.power),s.stunT=Math.max(s.stunT,.25),ln(i,n.k,.05*n.power,t);for(const l of i.tops[n.i].spec.elements)Ya(i,n.k,l,n.i,t);t.push({type:"legend",id:"shard",i:n.i,x:s.x,y:s.y,k:n.k,n:1})}}for(let e=i.burn.length-1;e>=0;e--){const n=i.burn[e];if(n.t-=gt,n.t<=0){i.burn.splice(e,1);continue}for(let s=0;s<i.tops.length;s++){const r=i.tops[s];i.teams[s]===i.teams[n.i]||!Ve(r)||r.airT>0||Math.hypot(r.x-n.x,r.y-n.y)<.9+ke(r)*.5&&(r.lg.burnT=.4)}}}function vp(i,t,e){const n=i.tops[t],s=n.lg;let r=0;if(yn(n,"bank")&&!s.bankUsed&&$e(n,"bank")>0&&on(n)<.25&&(r+=s.bank,e.push({type:"legend",id:"bank",i:t,x:n.x,y:n.y,n:s.bank}),s.bank=0,s.bankUsed=1),yn(n,"scorch")&&n.airT<=0&&(s.scorchT=$e(n,"scorchT")-gt,s.scorchT<=0&&Math.hypot(n.vx,n.vy)>5&&(s.scorchT=.09,i.burn.push({i:t,x:n.x,y:n.y,t:2.2}),i.burn.length>70&&i.burn.shift(),e.push({type:"legend",id:"scorch",i:t,x:n.x,y:n.y}))),$e(n,"burnT")>0&&(s.burnT-=gt,r-=3.2*gt,ln(i,t,.008*gt,e),s.burnTick=$e(n,"burnTick")-gt,s.burnTick<=0&&(s.burnTick=.2,e.push({type:"legend",id:"scorch",i:t,x:n.x,y:n.y,n:1}))),$e(n,"bleed")>0&&(s.bleed-=gt,ln(i,t,.012*gt,e),s.bleedTick=$e(n,"bleedTick")-gt,s.bleedTick<=0&&(s.bleedTick=.3,e.push({type:"legend",id:"rend",i:t,x:n.x,y:n.y,n:1}))),$e(n,"twin")===1&&(s.twinT-=gt,s.twinT<=0&&(s.twin=0,n.abilityCd=Math.max(n.abilityCd,nd(n.spec)))),$e(n,"opener")===1&&(s.openerT-=gt,s.openerT<=0&&(s.opener=0)),$e(n,"echoT")>0&&(s.echoT-=gt,s.echoT<=0)){const a=Math.max(...n.spec.elements.map(o=>Le[o].super.dur));s.halfT=a,n.superT=a,n.pulseT=0,e.push({type:"super",i:t,elements:n.spec.elements}),e.push({type:"legend",id:"echo",i:t,x:n.x,y:n.y});for(const o of n.spec.elements){const l=Le[o].super;l.start&&ka(i,t,o,l.start,e)}}return $e(n,"halfT")>0&&(s.halfT-=gt),r}function Rc(i,t,e,n,s,r,a){const o=[];return i.tops.forEach((l,c)=>{i.teams[c]===i.teams[t]||!Ve(l)||l.airT>0||Math.hypot(l.x-e,l.y-n)>s+ke(l)*.6||(o.push(c),nr(l,e,n,22*r),er(l,3*r),l.stunT=Math.max(l.stunT,.35),ln(i,c,.02*r,a))}),o}function Mp(i,t,e,n){const s=i.tops[t];s.bossMove=null,s.bossCd=1.3,s.bossChain=0,i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!Ve(r)||r.airT>0||Math.hypot(r.x-s.x,r.y-s.y)<5.5&&nr(r,s.x,s.y,15)}),n.push({type:"boss",i:t,phase:e})}function _p(i,t){for(let e=i.zones.length-1;e>=0;e--){const n=i.zones[e];if(n.t-=gt,n.t>0)continue;i.zones.splice(e,1);const s=Rc(i,n.i,n.x,n.y,n.r,.8,t);t.push({type:"zone",i:n.i,phase:"hit",x:n.x,y:n.y,r:n.r,dur:0,targets:s})}}function yp(i,t,e,n){const s=i.tops[t],r=Bi[s.spec.boss.kind],a=Math.min(2,s.stage),o=i.stadium.radius;s.bossCd=Math.max(0,s.bossCd-gt);const l=(f,d,g,x)=>{s.bossMove=f,s.bossStage=0,s.bossT=s.bossDur=d,s.bossDx=g,s.bossDy=x,s.bossCount++;const p=f==="vortex"?we.VORTEX_R:f==="charge"?we.CHARGE_LANE:we.SLAM_R;n.push({type:"telegraph",i:t,move:f,x:s.x,y:s.y,dx:g,dy:x,dur:d,r:p})},c=()=>{s.bossMove=null,s.bossCd=r.cd[a]*(.85+Tr(i)*.3)};if(!s.bossMove){if(s.bossCd>0)return e;const f=yl(i,t);if(!f)return e;const d=f.x-s.x,g=f.y-s.y,x=Math.hypot(d,g)||1,p=r.moves[a][s.bossCount%r.moves[a].length];return(p==="slam"||p==="vortex")&&x>11||p==="charge"&&x<4.5?(s.bossCd=.4,s.bossCount++,e):(p==="drops"?l("drops",we.DROP_WIND,d/x,g/x):p==="charge"?(l("charge",we.CHARGE_WIND,d/x,g/x),s.bossChain=r.chain[a]?1:0):l(p,p==="slam"?we.SLAM_WIND:we.VORTEX_WIND,d/x,g/x),es)}const h=s.bossMove;if(s.bossT-=gt,s.bossStage===0){if(s.vx*=.9,s.vy*=.9,h==="vortex"&&i.tops.forEach((f,d)=>{if(i.teams[d]===i.teams[t]||!Ve(f)||f.airT>0)return;const g=s.x-f.x,x=s.y-f.y,p=Math.hypot(g,x);p<we.VORTEX_R&&p>.5&&(f.vx+=g/p*we.VORTEX_PULL*gt,f.vy+=x/p*we.VORTEX_PULL*gt)}),s.bossT>0)return es;if(h==="slam"||h==="vortex"){const f=Rc(i,t,s.x,s.y,we.SLAM_R,h==="vortex"?1.15:1,n);n.push({type:"bossmove",i:t,move:"slam",x:s.x,y:s.y,dx:0,dy:0,r:we.SLAM_R,targets:f}),c()}else if(h==="drops"){const f=r.drops[a]+1;i.tops.forEach((d,g)=>{if(!(i.teams[g]===i.teams[t]||!Ve(d)))for(let x=0;x<f;x++){const p=x===0?.5:.2;let m=d.x+d.vx*p+(x?(Tr(i)-.5)*7:0),S=d.y+d.vy*p+(x?(Tr(i)-.5)*7:0);const b=Math.hypot(m,S);b>o-2&&(m*=(o-2)/b,S*=(o-2)/b),i.zones.push({i:t,x:m,y:S,r:we.DROP_R,t:we.DROP_DELAY,dur:we.DROP_DELAY}),n.push({type:"zone",i:t,phase:"warn",x:m,y:S,r:we.DROP_R,dur:we.DROP_DELAY,targets:[]})}}),c()}else s.bossStage=1,s.bossT=we.CHARGE_T,n.push({type:"bossmove",i:t,move:"charge",x:s.x,y:s.y,dx:s.bossDx,dy:s.bossDy,r:we.CHARGE_LANE,targets:[]});return es}s.vx=s.bossDx*we.CHARGE_SPEED,s.vy=s.bossDy*we.CHARGE_SPEED,s.dashT=Math.max(s.dashT,.1);const u=Math.hypot(s.x,s.y)>o-ke(s)-.5&&s.x*s.bossDx+s.y*s.bossDy>0;if(u&&(s.stunT=Math.max(s.stunT,we.CRASH_STUN),er(s,3),ln(i,t,.03,n),s.bossChain=0),u||s.bossT<=0){if(s.vx*=.35,s.vy*=.35,s.bossChain>0&&!u){s.bossChain--;const f=yl(i,t);if(f){const d=Math.hypot(f.x-s.x,f.y-s.y)||1;return l("charge",we.CHAIN_WIND,(f.x-s.x)/d,(f.y-s.y)/d),es}}c()}return es}function Lo(i,t){const e=[],n=i.stadium,s=n.radius;if(i.time+=gt,n.collapse){const r=n.collapse;for(let a=0;a<r.sectors;a++){const o=(a+.5)/r.sectors*Math.PI*2,l=Math.cos(o)*s*(1+r.inner)*.5,c=Math.sin(o)*s*(1+r.inner)*.5;i.floorPhase[a]===0&&i.time>=i.floorT[a]-r.warn&&(i.floorPhase[a]=1,e.push({type:"floor",sector:a,phase:"warn",x:l,y:c})),i.floorPhase[a]===1&&i.time>=i.floorT[a]&&(i.floorPhase[a]=2,e.push({type:"floor",sector:a,phase:"fall",x:l,y:c}))}}for(let r=0;r<i.pairCd.length;r++)i.pairCd[r]>0&&(i.pairCd[r]-=gt);_p(i,e),xp(i,e);for(let r=0;r<i.tops.length;r++){const a=i.tops[r];if(a.px=a.x,a.py=a.y,a.onRail=!1,!a.inPlay||a.out==="burst"||a.out==="broken")continue;const o=a.spec,l=ke(a);if(a.leaving&&a.sink>0){a.sink+=gt,a.vx*=Math.exp(-1.2*gt),a.vy*=Math.exp(-1.2*gt),a.x+=a.vx*gt,a.y+=a.vy*gt,a.phase+=a.spin*gt,!a.out&&a.sink>.8&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}if(a.leaving){a.x+=a.vx*gt,a.y+=a.vy*gt,a.phase+=a.spin*gt,!a.out&&Math.hypot(a.x,a.y)>s+1.6&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}const c=Math.hypot(a.x,a.y);let h=-n.pull*a.x,u=-n.pull*a.y;if(a.out==="spinout"){a.vx=(a.vx+h*gt)*Math.exp(-4*gt),a.vy=(a.vy+u*gt)*Math.exp(-4*gt),a.x+=a.vx*gt,a.y+=a.vy*gt;continue}const f=a.stunT>0;let d=f?es:t[r]??es;o.boss&&!f&&(d=yp(i,r,d,e));const g=(a.status.cryo>0?.55:1)*(f?0:1),x=on(a),p=x<.25?(.25-x)/.25:0;if(o.shift){const U=Math.max(0,Math.min(1,(.6-x)/.2)),F=a.shift;a.shift+=Math.max(-2.5*gt,Math.min(2.5*gt,U-a.shift)),F<.5!=a.shift<.5&&e.push({type:"shift",i:r,guard:a.shift>=.5})}const m=c>.05?-a.y/c:1,S=c>.05?a.x/c:0,b=o.drive*Math.min(1,x*1.5)*g*fh(a);h+=m*b*o.spinDir,u+=S*b*o.spinDir;let y=d.sx,C=d.sy;const E=Math.hypot(y,C);E>1&&(y/=E,C/=E),a.steerX=y,a.steerY=C;let w=Math.abs(a.spin);if(E>.01){const U=o.steer*at.STEER_MULT*(.5+.5*x)*g*_l(a,"steer")*fh(a);h+=y*U,u+=C*U}const v=vl(n,Math.atan2(a.y,a.x));if(n.rail&&c>s-l-n.rail.width&&i.segHp[v]>0){const U=a.vx*m+a.vy*S,F=Math.abs(U)>1?Math.sign(U):o.spinDir;Math.abs(U)<n.rail.max&&(h+=m*F*n.rail.accel,u+=S*F*n.rail.accel),a.onRail=Math.abs(U)>6}p>0&&(h+=(Tr(i)-.5)*p*14,u+=(Tr(i)-.5)*p*14);const M=()=>{if(E>.01)return[y,C];const U=Math.hypot(a.vx,a.vy);return U>.5?[a.vx/U,a.vy/U]:c>.05?[-a.x/c,-a.y/c]:[1,0]};a.abilityCd=Math.max(0,a.abilityCd-gt),a.braceT=Math.max(0,a.braceT-gt);const _=a.brakeT>0;a.brakeT=Math.max(0,a.brakeT-gt),a.counterT=Math.max(0,a.counterT-gt),a.airT>0&&(a.airT=Math.max(0,a.airT-gt),a.airT<=0&&mp(i,r,e)),a.dashT=Math.max(0,a.dashT-gt),a.boostCd=Math.max(0,a.boostCd-gt),a.boostT=Math.max(0,a.boostT-gt),a.strikeCd=Math.max(0,a.strikeCd-gt),a.strikeT=Math.max(0,a.strikeT-gt),a.comboT=Math.max(0,a.comboT-gt),a.comboT<=0&&(a.combo=0);for(const U of oo)a.status[U]>0&&(a.status[U]-=gt);if(a.reactCd=Math.max(0,a.reactCd-gt),a.stunT=Math.max(0,a.stunT-gt),a.status.thermal>0&&(w-=at.HEAT_DRAIN*gt),a.status.plasma>0&&ln(i,r,.012*gt,e),a.status.resonance>0&&(a.superMeter=Math.max(0,a.superMeter-.07*gt)),a.status.gravity>0){const U=Math.hypot(a.x,a.y)||1;h+=a.x/U*10,u+=a.y/U*10}if(a.status.mag>0){const U=i.tops[a.statusBy];if(U&&Ve(U)){const F=U.x-a.x,I=U.y-a.y,G=Math.hypot(F,I)||1;h+=F/G*12,u+=I/G*12}}if(w=Math.min(o.maxSpin,Math.max(0,w+vp(i,r,e))),a.superMeter=Math.min(1,a.superMeter+at.SUPER_PASSIVE*o.superGain*gt),d.super&&a.superMeter>=1&&a.superT<=0){a.superMeter=0,a.superT=Math.max(...o.elements.map(U=>Le[U].super.dur)),a.pulseT=0,yn(a,"echo")&&(a.lg.echoT=3),e.push({type:"super",i:r,elements:o.elements});for(const U of o.elements){const F=Le[U].super;F.start&&ka(i,r,U,F.start,e)}}if(a.superT>0){a.superT-=gt,a.pulseT-=gt;for(const U of o.elements){const F=Le[U].super;if(F.pull){const I=F.pull;i.tops.forEach((G,j)=>{if(i.teams[j]===i.teams[r]||!Ve(G))return;const nt=a.x-G.x,vt=a.y-G.y,Pt=Math.hypot(nt,vt);Pt<I.radius&&Pt>.5&&(G.vx+=nt/Pt*I.accel*gt,G.vy+=vt/Pt*I.accel*gt)})}F.pulse&&a.pulseT<=0&&ka(i,r,U,F.pulse,e),F.end&&a.superT<=0&&ka(i,r,U,F.end,e)}a.pulseT<=0&&(a.pulseT=Math.min(...o.elements.map(U=>Le[U].super.pulse?.every??99)))}if(d.boost&&a.boostCd<=0){const[U,F]=M();a.vx+=U*at.BOOST_IMPULSE,a.vy+=F*at.BOOST_IMPULSE,a.boostCd=at.BOOST_CD,a.boostT=at.BOOST_T,w-=at.BOOST_COST,e.push({type:"boost",i:r})}if(d.strike&&a.strikeCd<=0){a.strikeT=at.STRIKE_T,a.strikeCd=at.STRIKE_CD,w-=at.STRIKE_COST,e.push({type:"strike",i:r});const U=a.counterT>0?yl(i,r):null;if(U){const F=Math.hypot(U.x-a.x,U.y-a.y)||1,I=(U.x-a.x)/F,G=(U.y-a.y)/F;a.vx+=I*at.COUNTER_IMPULSE,a.vy+=G*at.COUNTER_IMPULSE,a.boostT=Math.max(a.boostT,at.BOOST_T),a.counterT=0,e.push({type:"counter",i:r,x:a.x,y:a.y,dx:I,dy:G})}}if(_&&(a.brakeT<=0||d.ability&&a.brakeT<at.BRAKE_T-at.BRAKE_MINHOLD)){const[U,F]=E>.01?[y,C]:a.brakeSpeed>2?[a.brakeDx,a.brakeDy]:M(),I=Math.min(at.BRAKE_MAX,Math.max(at.BRAKE_MIN,a.brakeSpeed*at.BRAKE_GAIN+at.BRAKE_PLUS));if(a.vx=U*I,a.vy=F*I,a.brakeT=0,a.dashT=at.DASH_T*.7,e.push({type:"brake",i:r,phase:"release",x:a.x,y:a.y,dx:U,dy:F,speed:I}),yn(a,"deadweight")){const G=Rc(i,r,a.x,a.y,3.6,.7,e);e.push({type:"land",i:r,x:a.x,y:a.y,radius:3.6,targets:G})}}else if(d.ability&&a.abilityCd<=0){if(o.ability==="brake"){const U=Math.hypot(a.vx,a.vy);a.brakeSpeed=U,a.brakeDx=U>.5?a.vx/U:0,a.brakeDy=U>.5?a.vy/U:0,a.vx*=.1,a.vy*=.1,a.brakeT=at.BRAKE_T,a.abilityCd=at.BRAKE_CD,w-=at.BRAKE_COST,e.push({type:"brake",i:r,phase:"stop",x:a.x,y:a.y,dx:a.brakeDx,dy:a.brakeDy,speed:U})}else if(o.ability==="spring"){const[U,F]=M();a.vx+=U*at.JUMP_HOP,a.vy+=F*at.JUMP_HOP,a.airT=at.JUMP_T,a.abilityCd=at.JUMP_CD,w-=at.JUMP_COST}else if(o.ability==="dash"){const[U,F]=M();a.vx+=U*at.DASH_IMPULSE,a.vy+=F*at.DASH_IMPULSE,a.dashT=at.DASH_T,w-=at.DASH_COST,a.abilityCd=at.DASH_CD}else a.braceT=at.BRACE_T,a.abilityCd=at.BRACE_CD;e.push({type:"ability",i:r,kind:o.ability}),yn(a,"twin")&&($e(a,"twin")!==1?(a.lg.twin=1,a.lg.twinT=6,a.abilityCd=.4,e.push({type:"legend",id:"twin",i:r,x:a.x,y:a.y})):a.lg.twin=0)}const A=a.brakeT>0,N=Math.exp(A?-14*gt:-o.drag*(a.braceT>0?2.5:1)*(f?3:1)*gt),O=A?.15:1;a.vx=(a.vx+h*gt*O)*N,a.vy=(a.vy+u*gt*O)*N,a.x+=a.vx*gt,a.y+=a.vy*gt,w-=o.spinDecay*Fa(a,"decay")*(a.stage>=2?1.25:1)*(1+p)*gt,a.burst=Math.max(0,a.burst-at.BURST_DRAIN*gt);for(let U=0;U<i.pillars.length;U++){const F=i.pillars[U];if(F.hp<=0||a.airT>0)continue;const I=a.x-F.x,G=a.y-F.y,j=Math.hypot(I,G),nt=l+F.r;if(j>=nt||j<1e-6)continue;const vt=I/j,Pt=G/j;a.x=F.x+vt*nt,a.y=F.y+Pt*nt;const W=-(a.vx*vt+a.vy*Pt);W>0&&(a.vx+=(1+at.RIM_E)*W*vt,a.vy+=(1+at.RIM_E)*W*Pt,w-=W*at.RIM_SPIN,W>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),F.hp=ph(F.hp,W),W>1.5&&e.push({type:"rim",x:F.x+vt*F.r,y:F.y+Pt*F.r,strength:Math.min(1,W/18),i:r}),F.hp<=0&&e.push({type:"break",kind:"pillar",index:U,x:F.x,y:F.y}))}const B=Math.hypot(a.x,a.y),q=s-l;if(B>q){const U=a.x/B,F=a.y/B,I=vl(n,Math.atan2(a.y,a.x));if(i.segHp[I]<=0)a.airT<=0&&B>s-l*.35&&(a.leaving=!0);else{const G=a.vx*U+a.vy*F;a.x=U*q,a.y=F*q,G>0&&(a.vx-=(1+at.RIM_E)*G*U,a.vy-=(1+at.RIM_E)*G*F,w-=G*at.RIM_SPIN,G>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),i.segHp[I]=ph(i.segHp[I],G),G>1.5&&e.push({type:"rim",x:a.x,y:a.y,strength:Math.min(1,G/18),i:r}),i.segHp[I]<=0&&e.push({type:"break",kind:"wall",index:I,x:U*s,y:F*s}))}}if(n.collapse&&a.airT<=0&&!a.leaving&&Math.hypot(a.x,a.y)>n.collapse.inner*s&&i.floorPhase[Ac(n.collapse,Math.atan2(a.y,a.x))]===2&&(a.leaving=!0,a.sink=gt,e.push({type:"fall",i:r,x:a.x,y:a.y})),n.hazards&&a.airT<=0&&!a.leaving)for(const U of n.hazards){const F=Tc(U,i.time);let I,G,j,nt,vt;if(U.kind==="bar"){const pt=Math.cos(F.a),Et=Math.sin(F.a),Yt=Math.max(U.r0,Math.min(U.r1,a.x*pt+a.y*Et));I=pt*Yt,G=Et*Yt,j=-G*U.omega,nt=I*U.omega,vt=U.width+l}else I=F.x,G=F.y,j=F.vx,nt=F.vy,vt=U.r+l;const Pt=a.x-I,W=a.y-G,tt=Math.hypot(Pt,W);if(tt>=vt||tt<1e-6)continue;const ft=Pt/tt,it=W/tt;a.x=I+ft*vt,a.y=G+it*vt;const st=(a.vx-j)*ft+(a.vy-nt)*it;if(st<0){a.vx-=(1+at.HAZ_E)*st*ft,a.vy-=(1+at.HAZ_E)*st*it,a.vx+=j*.6,a.vy+=nt*.6;const pt=-st;w-=pt*at.HAZ_SPIN,pt>at.HAZ_ARMOUR_MIN&&ln(i,r,(pt-at.HAZ_ARMOUR_MIN)*at.HAZ_ARMOUR,e),a.stunT=Math.max(a.stunT,pt>12?.35:0),pt>2&&e.push({type:"hazard",i:r,x:I+ft*(U.kind==="bar"?U.width:U.r),y:G+it*(U.kind==="bar"?U.width:U.r),nx:ft,ny:it,strength:Math.min(1,pt/20)})}}w=Math.max(0,w),a.spin=w*o.spinDir,a.phase+=a.spin*gt,w<=0&&(a.out="spinout",e.push({type:"out",i:r,reason:"spinout"}))}for(let r=0;r<i.tops.length;r++)for(let a=r+1;a<i.tops.length;a++)bp(i,r,a,e);for(const r of e)r.type==="out"&&(i.lastOut=r.reason);if(!i.over){const r=new Set;if(i.tops.forEach((a,o)=>{a.out||r.add(i.teams[o])}),r.size<=1&&i.lastOut)i.over={winner:r.size?[...r][0]:-1,reason:i.lastOut};else if(i.time>=td){const a=new Map;i.tops.forEach((l,c)=>{l.out||a.set(i.teams[c],(a.get(i.teams[c])??0)+Math.abs(l.spin))});const o=[...a].sort((l,c)=>c[1]-l[1]);i.over={winner:o.length>1&&o[0][1]===o[1][1]?-1:o[0][0],reason:"time"}}}return e}function mh(i,t){return .55+.45*Math.abs(Math.sin((t-i.phase)*i.spec.teeth/2))}function bp(i,t,e,n){const s=i.tops[t],r=i.tops[e];if(!Ve(s)||!Ve(r)||s.airT>0||r.airT>0)return;const a=r.x-s.x,o=r.y-s.y,l=Math.hypot(a,o),c=ke(s)+ke(r);if(l>=c||l<1e-6)return;const h=a/l,u=o/l,f=Ml(s),d=Ml(r),g=c-l;s.x-=h*g*(d/(f+d)),s.y-=u*g*(d/(f+d)),r.x+=h*g*(f/(f+d)),r.y+=u*g*(f/(f+d));const x=t*i.tops.length+e;if(i.pairCd[x]>0)return;i.pairCd[x]=at.HIT_CD;const p=i.teams[t]===i.teams[e],m=p?0:1,S=-u,b=h,y=(r.vx-s.vx)*h+(r.vy-s.vy)*u,C=(s.vx-r.vx)*S+(s.vy-r.vy)*b+s.spin*ke(s)+r.spin*ke(r),E=Math.atan2(u,h),w=s.strikeT>0||$e(s,"opener")===1,v=r.strikeT>0||$e(r,"opener")===1,M=w&&v,_=w&&!M&&!p&&s.combo>=3,A=v&&!M&&!p&&r.combo>=3,N=(st,pt,Et)=>(st.dashT>0?1.5:st.boostT>0?1.15:1)*(pt?M?1.3:Et?cp:at.STRIKE_ATK:1)*_l(st,"atk")*(st.stage>=1?.9:1),O=mh(s,E)*s.spec.attack*N(s,w,_)*Fa(s,"attack")*dh(s),B=mh(r,E+Math.PI)*r.spec.attack*N(r,v,A)*Fa(r,"attack")*dh(r),q=f*d/(f+d),U=y<0?-1.6*y*q*(.6+.2*(O+B)):0,F=at.SMASH*Math.abs(C)*q*(O+B),I=U+F,G=(st,pt)=>(st.braceT>0?.3:st.brakeT>0?at.BRAKE_GUARD:1)*(pt&&!M?at.STRIKE_GUARD:1)*Fa(st,"guard")*_l(st,"guard"),j=st=>(st.status.gale>0?1.4:1)*(st.stage>=1?1.15:1),nt=G(s,w)*(1+at.WEAK_KB*(1-on(s)))*(p?.5:1)*j(s),vt=G(r,v)*(1+at.WEAK_KB*(1-on(r)))*(p?.5:1)*j(r),Pt=Math.sign(C)*at.TANG;s.vx+=(-h-S*Pt)*I*nt/f,s.vy+=(-u-b*Pt)*I*nt/f,r.vx+=(h+S*Pt)*I*vt/d,r.vy+=(u+b*Pt)*I*vt/d;let W=Math.abs(s.spin),tt=Math.abs(r.spin);const ft=W,it=tt;if(W-=at.SPINLOSS*I*B*G(s,w)*m*(s.status.volt>0?1.25:1),tt-=at.SPINLOSS*I*O*G(r,v)*m*(r.status.volt>0?1.25:1),!p)for(const[st,pt,Et,Yt]of[[s,ft-W,r,e],[r,it-tt,s,t]])!yn(st,"thorn")||pt<.4||(Et===r?tt-=.35*pt:W-=.35*pt,n.push({type:"legend",id:"thorn",i:st===s?t:e,x:(s.x+r.x)/2,y:(s.y+r.y)/2,k:Yt,n:pt}));if(!p&&s.spec.spinDir!==r.spec.spinDir){const st=at.EQ*(W-tt);W-=st,tt+=st;const pt=Math.min(tt,s.spec.hook*1.5),Et=Math.min(W,r.spec.hook*1.5);W+=pt-Et,tt+=Et-pt}if(s.spin=Math.max(0,Math.min(s.spec.maxSpin,W))*s.spec.spinDir,r.spin=Math.max(0,Math.min(r.spec.maxSpin,tt))*r.spec.spinDir,p||(yn(s,"bank")&&(s.lg.bank=Math.min(40,$e(s,"bank")+.8*Math.max(0,ft-Math.abs(s.spin)))),yn(r,"bank")&&(r.lg.bank=Math.min(40,$e(r,"bank")+.8*Math.max(0,it-Math.abs(r.spin)))),yn(s,"rend")&&I*O>16&&(r.lg.bleed=4),yn(r,"rend")&&I*B>16&&(s.lg.bleed=4)),s.burst+=m*at.BURST*I*B*r.spec.burstDmg*(s.braceT>0?.5:1)/s.spec.burstRes,r.burst+=m*at.BURST*I*O*s.spec.burstDmg*(r.braceT>0?.5:1)/r.spec.burstRes,!p){const st=I-at.ARMOUR_MIN;st>0&&(ln(i,t,st*at.ARMOUR*B*G(s,w)/s.spec.burstRes,n),ln(i,e,st*at.ARMOUR*O*G(r,v)/r.spec.burstRes,n));const pt=Math.min(1,I/30)*6;if(s.superMeter=Math.min(1,s.superMeter+(at.SUPER_HIT*(1+pt*O/(O+B))+(w?at.SUPER_STRIKE:0))*s.spec.superGain),r.superMeter=Math.min(1,r.superMeter+(at.SUPER_HIT*(1+pt*B/(O+B))+(v?at.SUPER_STRIKE:0))*r.spec.superGain),w||s.superT>0)for(const Et of s.spec.elements)Ya(i,e,Et,t,n);if(v||r.superT>0)for(const Et of r.spec.elements)Ya(i,t,Et,e,n)}for(const[st,pt,Et,Yt,Q]of[[s,w,_,t,e],[r,v,A,e,t]])pt&&(st.lg.opener=0,st.strikeT=0,st.strikeCd=at.STRIKE_CD_HIT,!p&&(st.comboT=up,Et?(st.combo=0,n.push({type:"finisher",i:Yt,target:Q,x:i.tops[Q].x,y:i.tops[Q].y}),ln(i,Q,hp,n),yn(st,"shard")&&gp(i,Yt,Q,n)):st.combo=Math.min(3,st.combo+1)));n.push({type:"hit",x:s.x+h*ke(s),y:s.y+u*ke(s),nx:h,ny:u,strength:Math.min(1,I/30),a:t,b:e,power:M?2:w?t:v?e:-1});for(const[st,pt]of[[t,s],[e,r]])!pt.out&&pt.burst>=1&&(pt.burst=0,pt.stunT=Math.max(pt.stunT,at.STAGGER_T),n.push({type:"react",i:st,by:st===t?e:t,name:"STAGGER",color:16777215,x:pt.x,y:pt.y,team:!1}),ln(i,st,at.STAGGER_ARMOUR,n))}function gh(i,t){const e=i()*Math.PI*2,s=(t?Nr(t.stadium):6.5)*(.3+i()*.5);return{x:Math.cos(e)*s,y:Math.sin(e)*s,power:.7+i()*.3,tilt:(i()*2-1)*.8}}function xh(i,t,e){const n=Math.floor(i.time*4)*7919+t*104729;return(Math.imul(n,2654435761)>>>0)%100<e}function Sp(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!Ve(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function sd(i,t){const e=i.tops[t],n={sx:0,sy:0,ability:!1,boost:!1,strike:!1};if(!Ve(e))return n;const s=e.spec.ai??{strike:60,boost:55},r=e.spec.boss?Bi[e.spec.boss.kind].persona[Math.min(2,e.stage)]:e.spec.ai?.persona,a=i.stadium.radius,o=Math.hypot(e.x,e.y),l=o>.01?(e.vx*e.x+e.vy*e.y)/o:0;let c=0,h=0;const u=Math.atan2(e.y+e.vy*.35,e.x+e.vx*.35),f=o>a*.55&&l>4&&i.segHp[vl(i.stadium,u)]<=0,d=Sp(i,t);let g=!1;const x=i.stadium.collapse;if(x&&o>a*x.inner-2.5){const E=Math.atan2(e.y,e.x),w=Math.PI*2/x.sectors;for(const v of[-.8,0,.8])i.floorPhase[Ac(x,E+v*w)]>=1&&(g=!0)}let p=null;for(const E of i.stadium.hazards??[]){const w=Tc(E,i.time+.25);let v=w.x,M=w.y,_=0;if(E.kind==="bar"){const N=Math.cos(w.a),O=Math.sin(w.a),B=Math.max(E.r0,Math.min(E.r1,e.x*N+e.y*O));v=N*B,M=O*B,_=E.width}else _=E.r;const A=Math.hypot(e.x-v,e.y-M);A<_+ke(e)+2.2&&e.airT<=0&&(p=[(e.x-v)/(A||1),(e.y-M)/(A||1)])}let m=null,S=!1;const b=35+s.strike*.6,y=E=>(Math.imul(E*7919+t*104729,2654435761)>>>0)%100<b;i.tops.forEach((E,w)=>{if(!E.spec.boss||i.teams[w]===i.teams[t]||!E.bossMove||!Ve(E)||!y(E.bossCount+w*13))return;const v=e.x-E.x,M=e.y-E.y,_=Math.hypot(v,M)||1;if(E.bossMove==="slam"||E.bossMove==="vortex")E.bossStage===0&&_<we.SLAM_R+(E.bossMove==="vortex"?4:2.2)&&(m=[v/_,M/_],S=E.bossMove==="vortex"||E.bossT<.5);else if(E.bossMove==="charge"){const A=v*E.bossDx+M*E.bossDy,N=-v*E.bossDy+M*E.bossDx;if(A>-2.5&&Math.abs(N)<we.CHARGE_LANE+ke(e)+1.2){const O=N>=0?1:-1;m=[-E.bossDy*O,E.bossDx*O],S=E.bossStage===1||E.bossT<.45}}});for(const E of i.zones){if(i.teams[E.i]===i.teams[t])continue;const w=e.x-E.x,v=e.y-E.y,M=Math.hypot(w,v)||1;M<E.r+ke(e)+1&&y(Math.round(E.x*13+E.y*7))&&(m=[w/M,v/M],S=E.t<.6)}if(m)c=m[0],h=m[1],S&&(n.boost=!0),e.abilityCd<=0&&e.spec.ability==="spring"&&S&&e.airT<=0&&(n.ability=!0);else if(p)c=p[0],h=p[1],e.abilityCd<=0&&e.spec.ability==="spring"&&(n.ability=!0);else if(g||f||o>a*(r==="rider"?.88:.8))c=-e.x,h=-e.y,f&&o>a*.7&&(n.boost=!0);else if(d){const E=d.x+d.vx*.15-e.x,w=d.y+d.vy*.15-e.y,v=Math.hypot(E,w);let M=e.spec.role==="attack"||on(e)<on(d)-.04||v>a*.9;r==="rusher"?M=!0:r==="turtle"?M=v<4.5||i.time>35&&on(e)<on(d)-.02:r==="ambusher"?M=v<6.5:r==="rider"&&(M=v<5);const _=-((d.vx-e.vx)*E+(d.vy-e.vy)*w)/Math.max(v,.01),A=v-ke(e)-ke(d);if(M)c=E,h=w,v>3&&v<9&&xh(i,t,r==="rusher"?Math.min(100,s.boost+25):s.boost)&&(n.boost=!0),r==="ambusher"&&v>2.5&&v<6.5&&(n.boost=!0),e.spec.ability==="dash"&&e.abilityCd<=0&&v<6&&v>2.2&&(n.ability=!0);else if(r==="rider"){const N=o>.05?-e.y/o:1,O=o>.05?e.x/o:0,B=(a*.74-o)/a;c=N*e.spec.spinDir+e.x/Math.max(o,.05)*B*6,h=O*e.spec.spinDir+e.y/Math.max(o,.05)*B*6}else o>2&&(c=-e.x,h=-e.y);_>3&&A<_*.14&&xh(i,t,r==="ambusher"?Math.min(100,s.strike+25):s.strike)&&(n.strike=!0),e.spec.ability==="brace"&&e.abilityCd<=0&&v<(r==="turtle"?4.5:3.2)&&_>(r==="turtle"?6:9)&&(n.ability=!0),e.spec.ability==="brake"&&(e.brakeT>0?(v<4.5||e.brakeT<.15)&&(n.ability=!0):e.abilityCd<=0&&v<8&&v>3.5&&_>8&&(n.ability=!0)),e.spec.ability==="spring"&&e.abilityCd<=0&&e.airT<=0&&v<4.5&&v>1.5&&(_>10||M&&v<3.2)&&(n.ability=!0),e.counterT>0&&v<14&&e.strikeCd<=0&&(n.strike=!0),e.superMeter>=1&&v<7.5&&(n.super=!0)}else o>2&&(c=-e.x,h=-e.y);const C=Math.hypot(c,h);return C>.01&&(n.sx=c/C,n.sy=h/C),n}const rd=[{id:"shard",part:"talon",name:"Shardfang Talon",text:"FINISHER: the blow throws a shard that flies on and hits a second enemy (or the same one again)."},{id:"rend",part:"ripsaw",name:"Rendsaw",text:"A hard hit leaves the enemy bleeding armour for 4 seconds."},{id:"thorn",part:"bastion",name:"Thornwall Bastion",text:"Hits that cost you spin cost the attacker a third as much again."},{id:"bank",part:"flywheel",name:"Reservoir Flywheel",text:"Stores the spin hits take from it, and returns it once when your spin falls below a quarter."},{id:"scorch",part:"flatline",name:"Cinder Flatline",text:"Leaves a scorching trail on the floor: enemies crossing it burn, losing spin and armour."},{id:"twin",part:"surge",name:"Twincell Surge",text:"Your ability has two charges: the second comes back in under half a second."},{id:"deadweight",part:"anchor",name:"Deadweight Anchor",text:"Releasing a Brake fires a ground shockwave that throws enemies around you."},{id:"echo",part:"thermal",name:"Echo Reactor",text:"Your super fires again at half strength three seconds later."},{id:"opener",part:"string",name:"Overwound String",text:"A perfect launch makes your first hit a power hit (a free Strike)."}],Cc=i=>rd.find(t=>t.id===i),Ep=i=>i-Math.floor(i),Kn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ri=[{f:(i,t)=>Math.pow(1-i,1.2+t*1.4),bite:.95,nouns:["Hook","Gaff","Grapnel","Sickle","Scythe","Barb"],shape:"swept hooks",folds:[2,3,3,4,5]},{f:i=>1-i,bite:.8,nouns:["Ripper","Rasp","Shredder","Serrate","Buzzcut","Sawline"],shape:"saw teeth",folds:[5,6,7,8,9,10]},{f:i=>i<.82?1-Math.pow(i/.82,4):0,bite:.45,hooks:!0,nouns:["Vane","Foil","Glider","Sail","Aileron","Rotor"],shape:"broad vanes",folds:[2,2,3,3,4]},{f:(i,t)=>Kn((.5+t*.1-Math.abs(i-.5))*9),bite:.7,nouns:["Maul","Sledge","Ram","Piston","Pounder","Drophammer"],shape:"hammer lugs",folds:[2,3,4,4,5,6]},{f:(i,t)=>Math.pow(1-Math.abs(2*i-1),1.5+t*2.5),bite:1,nouns:["Pike","Lance","Spire","Needle","Caltrop","Prong"],shape:"spikes",folds:[3,4,5,6,8]},{f:i=>Math.sqrt(Math.abs(Math.sin(Math.PI*i)))*(1-.55*i),bite:.6,hooks:!0,nouns:["Crescent","Arc","Eclipse","Halfmoon","Curve","Sweep"],shape:"crescent blades",folds:[2,3,3,4,5]},{f:(i,t)=>1-Math.pow(Math.abs(Math.cos(Math.PI*i)),6+t*10),bite:.1,nouns:["Bulwark","Rampart","Buckler","Barricade","Citadel","Plate"],shape:"armour segments",folds:[4,5,6,8,10,12]},{f:i=>1-Math.abs(2*i-1),bite:.75,nouns:["Star","Nova","Compass","Flare","Burst","Zenith"],shape:"star points",folds:[3,4,5,6,7,8]},{f:i=>i<.55?.5+.5*Math.pow(i/.55,2):i<.66?1:0,bite:.9,nouns:["Cleaver","Hatchet","Halberd","Splitter","Chopper","Edge"],shape:"axe heads",folds:[2,3,3,4,5]},{f:(i,t)=>Kn((.28+t*.12-Math.abs(i-.5))*14),bite:.5,nouns:["Cog","Sprocket","Gear","Ratchet","Pinion","Crankwheel"],shape:"gear teeth",folds:[6,8,9,10,12,14]},{f:i=>.5+.5*Math.cos(2*Math.PI*(i-.5)),bite:.25,nouns:["Tide","Ripple","Swell","Undertow","Breaker","Current"],shape:"rolling lobes",folds:[3,4,5,6,7]},{f:(i,t)=>Math.max(Math.pow(1-Math.abs(2*Kn(i/.6)-1),2+t),.7*Math.pow(1-Math.abs(2*Kn((i-.55)/.45)-1),2+t)),bite:.85,nouns:["Bident","Fork","Tine","Caliper","Splitpoint","Twinspike"],shape:"forked points",folds:[2,3,4,5,6]}],wp=["Iron","Steel","Cobalt","Chrome","Titanium","Carbon","Tungsten","Nickel","Onyx","Obsidian","Granite","Basalt","Quartz","Flint","Slate","Ember","Cinder","Ash","Frost","Glacier","Storm","Thunder","Gale","Vortex","Rift","Void","Apex","Vector","Vertex","Prime","Omega","Delta","Sigma","Hyper","Turbo","Nitro","Mach","Sonic","Rapid","Solar","Lunar","Polar","Orbit","Comet","Meteor","Pulsar","Quasar","Neutron","Photon","Ion","Flux","Torque","Crank","Rivet","Forge","Crucible","Alloy","Magnet","Static","Tremor","Bronze","Copper","Mercury","Argon","Xenon","Krypton","Radial","Axial","Kinetic","Inertia"];function Ar(i,t){const e=Math.pow(Ep(t*i.fold/(Math.PI*2)+i.rot),i.sweep);return 1-i.depth*(1-Kn(Ri[i.family].f(e,i.sharp)))}function Tp(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Ap=320;function Rp(i,t){const e=Tp(24350+i*7919),n=E=>E[Math.floor(e()*E.length)],s=(E,w)=>E+e()*(w-E),r=i%Ri.length,a=Ri[r],o={family:r,fold:n(a.folds),depth:s(.2,.62)*(.55+.45*a.bite+.2*e()),sweep:n([.55,.7,1,1,1.4,1.9]),sharp:e(),rot:0};o.depth=Kn(o.depth,.1,.6);const l=e()<.45,c=l?r:Math.floor(e()*Ri.length),h={family:c,fold:l?o.fold:n([o.fold,o.fold*2,Math.max(2,Math.round(o.fold/2)),...Ri[c].folds]),depth:Kn(s(.1,.4),.06,.42),sweep:l?o.sweep:n([.6,1,1,1.6]),sharp:e(),rot:l?s(0,.25):e()},u=[o,h];if(e()<.6){const E=Math.floor(e()*Ri.length);u.push({family:E,fold:n(Ri[E].folds),depth:s(.12,.38),sweep:n([.7,1,1.5]),sharp:e(),rot:e()})}const f={radius:Math.round(s(.93,1.07)*100)/100,layers:u,windows:Math.floor(e()*4),lights:Math.floor(e()*4),crownMetal:e()<.5,swap:e()<.3,ornament:0,thick:.12};let d=0;for(let E=0;E<90;E++)d+=Ar(o,E/90*Math.PI*2);d/=90;const g=Kn(.55*a.bite+.45*(o.depth/.6)),x=Kn((o.fold-2)/8),p=a.hooks&&o.fold<=3?.6+.4*(1-g):0,m=E=>Math.round(E*100)/100,S={attack:m(.86+.42*g-(p?.08:0)),burstDmg:m(.8+.3*g+.55*x*a.bite),burstRes:m(.46*(1-g)),mass:m(.3+.32*Kn((d-.6)/.38)*(1-.3*g)),radius:f.radius,teeth:o.fold,hook:m(p),spinDecay:m(-.12*(1-g)*(1-x*.5))};let b="";for(let E=0;E<50&&(!b||t.has(b));E++)b=`${n(wp)} ${n(a.nouns)}`;t.has(b)&&(b=`${b} ${i}`),t.add(b),f.ornament=e()<.2?0:1+Math.floor(e()*6),f.thick=Math.round(s(.1,.19)*100)/100;const y=g>.7?"Hits hard, breaks easily.":g>.45?"A balance of bite and staying power.":p?"Spins long and steals spin from opposite-spin tops.":"Heavy and hard to break. Outlasts.",C=["","","Twin","Three","Four","Five","Six","Seven","Eight","Nine","Ten"][o.fold]??String(o.fold);return{id:`g${i}`,name:b,blurb:`${C} ${a.shape}${u.length>2?" under a "+Ri[u[2].family].shape.replace(/s$/,"")+" crown":""}. ${y}`,gen:f,mods:S}}const Cp=(()=>{const i=new Set,t=[];for(let e=0;e<Ap;e++)t.push(Rp(e,i));return t})(),gi=["blade","disc","tip","core","launcher","reactor"],ad={blade:"BLADE",disc:"DISC",tip:"TIP",core:"CORE",launcher:"LAUNCH",reactor:"ELEMENT"},Pp={attack:0,burstDmg:0,burstRes:0,mass:.2,radius:0,teeth:0,hook:0,spinDecay:.8,drive:0,drag:0,steer:12,chargeTime:0,maxSpin:0,superGain:1,superPower:1},xi=[{id:"talon",slot:"blade",name:"Talon",blurb:"Three hooked claws. Huge hits, huge recoil.",mods:{attack:1.3,burstDmg:1.2,teeth:3,radius:1,mass:.35}},{id:"bastion",slot:"blade",name:"Bastion",blurb:"Round armoured ring. Shrugs off blows.",mods:{attack:1.05,burstDmg:1,teeth:6,radius:1.05,mass:.6,burstRes:.45,spinDecay:-.05}},{id:"ripsaw",slot:"blade",name:"Ripsaw",blurb:"Eight teeth that tear cores open. Best at bursting.",mods:{attack:1.14,burstDmg:1.65,teeth:8,radius:1,mass:.38}},{id:"halo",slot:"blade",name:"Halo",blurb:"Twin wings. Spins longest, steals spin from opposite-spin tops.",mods:{attack:.85,burstDmg:.8,teeth:2,radius:1.02,mass:.45,hook:1,spinDecay:-.12,burstRes:.15}},{id:"shifter",slot:"blade",name:"Shifter",blurb:"Three hinged wings. Tucked in to strike at high spin; below half spin they swing out into a wide guard.",mods:{attack:1.25,burstDmg:1.15,teeth:3,radius:.9,mass:.42},shift:{radius:.22,attack:-.4,guard:-.35,decay:-.3}},{id:"breakaway",slot:"blade",name:"Breakaway",blurb:"Four armour plates that crack off as it takes damage. Lighter and quicker with every one lost, but it hits softer.",mods:{attack:1.22,burstDmg:1.1,teeth:4,radius:1,mass:.5,burstRes:.42},plates:{count:4,mass:.07,attack:.05,speed:.07}},{id:"flail",slot:"blade",name:"Flail",blurb:"Three weights on hinged arms. They swing out with spin: wide reach and heavy blows when fast, short and weak when slow.",mods:{attack:1.2,burstDmg:1.1,teeth:3,radius:.8,mass:.4},flail:{radius:.45,attack:.9}},{id:"pivot",slot:"disc",name:"Pivot",blurb:"Weight at the centre. Quick to steer.",mods:{mass:.5,steer:3}},{id:"flywheel",slot:"disc",name:"Flywheel",blurb:"Weight at the rim. Long spin, slow to turn.",mods:{mass:.6,spinDecay:-.15,steer:-3}},{id:"anvil",slot:"disc",name:"Anvil",blurb:"A solid slab. Very hard to move.",mods:{mass:.85,steer:-4,spinDecay:.05}},{id:"feather",slot:"disc",name:"Feather",blurb:"Vented alloy. Darts around, gets thrown around.",mods:{mass:.38,steer:5,spinDecay:.04}},{id:"needle",slot:"tip",name:"Needle",blurb:"Sharp point. Holds the centre and saves spin.",mods:{drive:1.2,drag:1.5,spinDecay:-.1}},{id:"flatline",slot:"tip",name:"Flatline",blurb:"Flat base. Races around the bowl.",mods:{drive:4.95,drag:1.05,spinDecay:.02}},{id:"gripper",slot:"tip",name:"Gripper",blurb:"Rubber. Turns on the spot, burns spin fast.",mods:{drive:3.2,drag:1.6,steer:5,spinDecay:.2}},{id:"orbit",slot:"tip",name:"Orbit",blurb:"Ball bearing. Steady, hard to burst.",mods:{drive:2.2,drag:1.15,burstRes:.1}},{id:"surge",slot:"core",name:"Surge",blurb:"DASH: a sudden lunge that hits harder.",mods:{burstRes:1.15},ability:"dash"},{id:"viper",slot:"core",name:"Viper",blurb:"DASH, lighter lock. Nimble but bursts sooner.",mods:{burstRes:1.12,steer:4,spinDecay:-.06},ability:"dash"},{id:"rampart",slot:"core",name:"Rampart",blurb:"BRACE: dig in and take a fraction of the hit.",mods:{burstRes:1.12},ability:"brace"},{id:"lockjaw",slot:"core",name:"Lockjaw",blurb:"BRACE, four clamps. Nearly impossible to burst.",mods:{burstRes:1.2,mass:.05,steer:-2},ability:"brace"},{id:"anchor",slot:"core",name:"Anchor",blurb:"BRAKE: dig in and stop dead, then launch faster than you arrived.",mods:{burstRes:1.2,mass:.05},ability:"brake"},{id:"coil",slot:"core",name:"Coil",blurb:"SPRING JUMP: hop over tops and gaps, land with a shockwave.",mods:{burstRes:1.3,steer:2},ability:"spring"},{id:"ripcord",slot:"launcher",name:"Ripcord",blurb:"Balanced power and timing.",mods:{chargeTime:.9,maxSpin:100}},{id:"string",slot:"launcher",name:"String",blurb:"Most spin, very tight timing.",mods:{chargeTime:.55,maxSpin:106}},{id:"winder",slot:"launcher",name:"Winder",blurb:"Least spin, easy timing.",mods:{chargeTime:1.4,maxSpin:96}},{id:"geared",slot:"launcher",name:"Geared",blurb:"A little extra spin, slower meter.",mods:{chargeTime:1.1,maxSpin:102}}];xi.push(...qa.map(i=>({id:i.id,slot:"reactor",name:i.name,blurb:i.blurb,mods:{}})));xi.push(...Cp.map(i=>({id:i.id,slot:"blade",name:i.name,blurb:i.blurb,mods:i.mods,gen:i.gen})));const Fn=i=>xi.filter(t=>t.slot===i),Lp=i=>xi.filter(t=>t.slot===i&&!t.gen),mn=i=>xi.find(t=>t.id===i)??xi[0],od=[16734751,15213357,16761370,3066970,1492928,2784255,9063935,15921909,2303535],ld=[16757575,16730955,16773226,7077770,7332863,5934079,12946431,16777215],cd=["steel","chrome","gunmetal","gold","copper"],ks={blade:"talon",disc:"pivot",tip:"flatline",core:"surge",launcher:"ripcord",reactor:"thermal",spinDir:1,paint:16734751,glow:16757575,metal:"steel"},hd=i=>`${mn(i.blade).name} ${mn(i.tip).name}`.toUpperCase();function Pc(i,t=hd(i)){const e={...Pp};let n="dash",s,r,a;for(const o of gi){const l=mn(i[o]);for(const[c,h]of Object.entries(l.mods))e[c]+=h;l.ability&&(n=l.ability),l.shift&&(s=l.shift),l.plates&&(r=l.plates),l.flail&&(a=l.flail)}return{name:t,role:e.attack>=1.05?"attack":"stamina",color:i.paint,accent:i.glow,spinDir:i.spinDir,radius:e.radius,mass:e.mass,maxSpin:e.maxSpin,attack:e.attack,burstDmg:e.burstDmg,burstRes:e.burstRes,spinDecay:e.spinDecay,drive:e.drive,drag:e.drag,steer:e.steer,teeth:e.teeth,spiky:e.attack>=1.05,hook:e.hook,shift:s,plates:r,flail:a,elements:lo(i.reactor).elements,superGain:e.superGain,superPower:e.superPower,ability:n,chargeTime:e.chargeTime,look:{blade:i.blade,disc:i.disc,tip:i.tip,core:i.core,paint:i.paint,glow:i.glow,metal:i.metal}}}function Ip(i,t){const e=r=>r[Math.floor(i()*r.length)],n=od.filter(r=>r!==t),s=i()<.2;return{blade:e(Fn("blade")).id,disc:e(Fn("disc")).id,tip:e(Fn("tip")).id,core:e(Fn("core")).id,launcher:e(Fn("launcher")).id,reactor:e(qa.filter(r=>!Qu(r.id)).filter(r=>r.elements.length>1===s)).id,spinDir:i()<.5?1:-1,paint:e(n),glow:e(ld),metal:e(cd)}}const $a=["attack","defence","stamina","speed","weight","burst"],Dp={attack:"ATTACK",defence:"DEFENCE",stamina:"STAMINA",speed:"SPEED",weight:"WEIGHT",burst:"BURST RESIST"};function ud(i){return{attack:i.attack*.6+i.burstDmg*.4,defence:i.mass*.55+i.burstRes*.45,stamina:i.maxSpin/i.spinDecay,speed:i.drive+i.steer*.3,weight:i.mass,burst:i.burstRes}}let Io=null;function Up(){if(Io)return Io;const i={},t={};for(const e of $a)i[e]=1/0,t[e]=-1/0;for(const e of Lp("blade"))for(const n of Fn("disc"))for(const s of Fn("tip"))for(const r of Fn("core"))for(const a of Fn("launcher")){const o=ud(Pc({...ks,blade:e.id,disc:n.id,tip:s.id,core:r.id,launcher:a.id}));for(const l of $a)i[l]=Math.min(i[l],o[l]),t[l]=Math.max(t[l],o[l])}return Io={min:i,max:t}}function Do(i){const t=ud(i),{min:e,max:n}=Up(),s={};for(const r of $a)s[r]=Math.max(0,Math.min(1.25,(t[r]-e[r])/(n[r]-e[r]||1)));return s}function Np(i){const t=[["ATTACK",i.attack],["DEFENCE",i.defence],["STAMINA",i.stamina]];return t.sort((e,n)=>n[1]-e[1]),t[0][1]-t[1][1]>=.12?t[0][0]:"BALANCED"}const hi=[{name:"Common",color:10134453,rolls:0,weight:600},{name:"Uncommon",color:4972650,rolls:1,weight:270},{name:"Rare",color:4889599,rolls:2,weight:100},{name:"Epic",color:12084991,rolls:3,weight:26},{name:"Legendary",color:16761402,rolls:4,weight:4}],dd=[{key:"attack",label:"Attack",prefix:"Honed",min:3,max:8,slots:["blade","core"]},{key:"burstDmg",label:"Burst damage",prefix:"Jagged",min:4,max:10,slots:["blade"]},{key:"burstRes",label:"Burst resistance",prefix:"Bolted",min:4,max:10,slots:["core","disc","blade"]},{key:"mass",label:"Weight",prefix:"Dense",min:3,max:7,slots:["disc"]},{key:"steer",label:"Handling",prefix:"Nimble",min:4,max:9,slots:["tip","disc"]},{key:"drive",label:"Speed",prefix:"Swift",min:4,max:9,slots:["tip"]},{key:"spinDecay",label:"Spin time",prefix:"Balanced",min:3,max:8,slots:["tip","disc","blade","launcher"]},{key:"maxSpin",label:"Launch spin",prefix:"Wound",min:2,max:6,slots:["launcher","core"]},{key:"superGain",label:"Overdrive gain",prefix:"Primed",min:5,max:12,slots:["reactor","core"]},{key:"superPower",label:"Super power",prefix:"Overloaded",min:5,max:12,slots:["reactor"]}],co=i=>dd.find(t=>t.key===i),Or=20;function fd(i,t,e={}){const n=Fn(e.slot??gi[Math.floor(i()*gi.length)]);let s=n[Math.floor(i()*n.length)];const r=hi.map((h,u)=>u<(e.minRarity??0)?0:h.weight*Math.pow(1+t*.07,u));let a=i()*r.reduce((h,u)=>h+u,0),o=hi.length-1;for(let h=0;h<r.length;h++)if(a-=r[h],a<0){o=h;break}if(s.slot==="reactor"&&o<hh(s.id)){const h=Fn("reactor").filter(u=>hh(u.id)===0);s=h[Math.floor(i()*h.length)]}let l;if(o===hi.length-1){const h=rd.filter(f=>!e.slot||mn(f.part).slot===e.slot),u=h[Math.floor(i()*h.length)];u&&(l=u.id,s=mn(u.part))}const c={uid:e.uid??"",part:s.id,rarity:o,level:t,affixes:[]};return l&&(c.legend=l),md(c,i),c}const bl=i=>.7+.05*i,Op=(i,t)=>bl(i)*(1+.15*t),pd=(i,t,e,n)=>Math.round((i.min+t()*(i.max-i.min))*Op(e,n)*10)/10;function md(i,t){const e=mn(i.part).slot,n=dd.filter(s=>s.slots.includes(e)&&!i.affixes.some(r=>r.key===s.key));for(let s=Math.min(hi[i.rarity].rolls,i.affixes.length+n.length)-i.affixes.length;s>0;s--){const r=n.splice(Math.floor(t()*n.length),1)[0];i.affixes.push({key:r.key,pct:pd(r,t,i.level,i.rarity)})}i.affixes.sort((s,r)=>r.pct-s.pct)}function gd(i){const t=i.legend&&Cc(i.legend);if(t)return t.name;const e=mn(i.part).name;return i.affixes.length?`${co(i.affixes[0].key).prefix} ${e}`:e}const Ka=i=>i.legend&&Cc(i.legend)?.text||"",xd=i=>`+${i.pct}% ${co(i.key).label}`,Ii=i=>Math.round(10+i.rarity*12+i.level*2+i.affixes.reduce((t,e)=>t+e.pct,0)),Sl=i=>2+i.rarity*i.rarity*4+i.level,vd=i=>i.tier+5,Md=i=>Math.round((4+i.level*2)*(1+i.rarity*.75)),El=i=>5+i.level+i.rarity*6;function Fp(i,t){const e=i.items.find(r=>r.uid===t);if(!e||e.level>=vd(i))return 0;const n=Md(e);if(i.scrap<n)return 0;i.scrap-=n;const s=bl(e.level+1)/bl(e.level);e.level++;for(const r of e.affixes)r.pct=Math.round(r.pct*s*10)/10;return n}function kp(i,t,e,n){const s=i.items.find(o=>o.uid===t);if(!s||!s.affixes[e])return 0;const r=El(s);if(i.scrap<r)return 0;i.scrap-=r;const a=s.affixes[e];return a.pct=pd(co(a.key),n,s.level,s.rarity),s.affixes.sort((o,l)=>l.pct-o.pct),r}function Bp(i,t){const e=new Set([...i.affixes.map(r=>r.key),...t?.affixes.map(r=>r.key)??[]]),n=(r,a)=>r?.affixes.find(o=>o.key===a)?.pct??0,s=[...e].map(r=>({key:r,label:co(r).label,now:n(t,r),item:n(i,r),diff:Math.round((n(i,r)-n(t,r))*10)/10}));return s.sort((r,a)=>a.item-r.item),{rows:s,power:Ii(i)-(t?Ii(t):0)}}function zp(i,t,e,n){const s=a=>i.items.indexOf(a),r=(a,o)=>e==="newest"?s(o)-s(a):e==="rarity"&&o.rarity-a.rarity||Ii(o)-Ii(a);return[...t].sort((a,o)=>+(o.uid===n)-+(a.uid===n)||r(a,o))}function _d(i,t){const e=Object.values(i.equipped);return i.items.filter(n=>n.rarity<=t&&!e.includes(n.uid))}function Hp(i,t){let e=0;for(const n of _d(i,t))e+=Ed(i,n.uid);return e}const Gp=10;function Vp(i){let t=i|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function yd(i,t){const e={...i},n=t.filter(s=>s.legend).map(s=>s.legend);n.length&&(e.legends=n);for(const s of t)for(const r of s.affixes)r.key==="spinDecay"?e.spinDecay/=1+r.pct/100:e[r.key]*=1+r.pct/100;return e}const Wp=["talon","bastion","pivot","feather","flatline","needle","surge","rampart","ripcord","winder","thermal","cryo"];function Xp(){const i=Wp.map((e,n)=>({uid:"s"+n,part:e,rarity:0,level:1,affixes:[]})),t={};for(const e of gi)t[e]=i.find(n=>n.part===ks[e]).uid;return{v:3,items:i,equipped:t,paint:ks.paint,glow:ks.glow,metal:ks.metal,spinDir:1,scrap:0,tier:1,wins:0,nextUid:1,pity:0,bosses:[]}}function vh(i){const t=Xp(),e=i?.v;if(!i||typeof i!="object"||e!==1&&e!==2&&e!==3||!Array.isArray(i.items))return t;const n={...t,...i,v:3};n.bosses=Array.isArray(n.bosses)?[...new Set(n.bosses.filter(s=>Number.isInteger(s)&&s>=5&&s<=Or&&s%5===0))]:[],n.pity=Math.max(0,Math.floor(n.pity)||0),n.items=n.items.filter(s=>s&&xi.some(r=>r.id===s.part)&&Array.isArray(s.affixes));for(const s of n.items)s.legend&&!Cc(s.legend)&&delete s.legend;for(const s of gi)if(!n.items.find(a=>a.uid===n.equipped?.[s]&&mn(a.part).slot===s)){let a=n.items.find(o=>mn(o.part).slot===s);a||(a={uid:"fix"+s,part:ks[s],rarity:0,level:1,affixes:[]},n.items.push(a)),n.equipped={...n.equipped,[s]:a.uid}}return n.tier=Math.max(1,Math.min(Or,Math.floor(n.tier)||1)),n.scrap=Math.max(0,Math.floor(n.scrap)||0),n.spinDir=n.spinDir===-1?-1:1,n}const bd=(i,t)=>i.items.find(e=>e.uid===t),Sd=i=>gi.map(t=>bd(i,i.equipped[t]));function wl(i){const t={spinDir:i.spinDir,paint:i.paint,glow:i.glow,metal:i.metal};for(const e of gi)t[e]=bd(i,i.equipped[e]).part;return t}function Rr(i,t){return yd(Pc(wl(i),t),Sd(i))}const qp=i=>Sd(i).reduce((t,e)=>t+Ii(e),0);function Yp(i,t){return i.pity>=Gp&&t.rarity<2&&(t.rarity=2,md(t,Vp(i.nextUid*7919+i.wins))),i.pity=t.rarity>=2?0:i.pity+1,t.uid="i"+i.nextUid++,i.items.push(t),t}function Ed(i,t){if(Object.values(i.equipped).includes(t))return 0;const e=i.items.findIndex(s=>s.uid===t);if(e<0)return 0;const n=Sl(i.items[e]);return i.items.splice(e,1),i.scrap+=n,n}function $p(i,t,e,n,s,r=!1){const a=e?1+(i()<.55?1:0)+(s>=3?1:0)+(n?1:0):i()<.35?1:0;return Array.from({length:a},(o,l)=>fd(i,t,{minRarity:n&&e&&l===0?r&&t>=Or?4:2:0}))}const Mh=["RUSTWIND","IRONVOLT","COGBREAKER","SLAGHAMMER","GRINDSTONE","HEXBOLT","TORQUE","CRANKSHAFT","GEARLOCK","RIVETER","DRILLBIT","FLINTLOCK","PISTON","CAMSHAFT","SPROCKET","BALLAST"],_h=["rusher","turtle","rider","ambusher"],Kp={rusher:"RUSHER",turtle:"TURTLE",rider:"WALL-RIDER",ambusher:"AMBUSHER"},Zp={rusher:["RAMJET","BLITZ","THRUSTER","CANNONBALL","WRECKER","BATTERAM","OVERDRIVE","FLASHPOINT"],turtle:["BULWARK","GRANITE","VAULT","BUNKER","ANCHORAGE","KEEPSTONE","BARRICADE","DEADBOLT"],rider:["RIMRUNNER","LOOPLINE","ORBITER","CIRCUIT","TRACKLAYER","RAILGUN","MERRYGO","SLIPSTREAM"],ambusher:["TRIPWIRE","SNAPSPRING","DEADFALL","MOUSETRAP","HAIRTRIGGER","LANDMINE","POPGUN","JACKBOX"]},Jp={rusher:{blade:["talon","ripsaw","shifter"],tip:["flatline","gripper"],core:["surge","viper","anchor"]},turtle:{blade:["bastion","halo"],disc:["anvil","flywheel"],core:["rampart","lockjaw"]},rider:{tip:["flatline","orbit"],disc:["pivot","feather"],core:["surge","coil","viper"]},ambusher:{disc:["feather","pivot"],tip:["needle","gripper"],core:["anchor","coil","surge"]}},wd=i=>i%5===0,jp=i=>Bi[Ju(i)].name,Qp=i=>({strike:Math.min(92,28+i*4),boost:Math.min(85,34+i*3)});function Td(i,t,e,n=[]){const s=Ip(i,e),r=_h[Math.floor(i()*_h.length)];for(const[f,d]of Object.entries(Jp[r]))i()<.7&&(s[f]=d[Math.floor(i()*d.length)]);const a=gi.map(f=>{const d=fd(i,t,{slot:f});return d.part=s[f],delete d.legend,d.affixes=d.affixes.filter(()=>i()<.5+t*.025),d}),l=(i()<.75?Zp[r]:Mh).filter(f=>!n.includes(f)),c=l[Math.floor(i()*l.length)]??Mh.find(f=>!n.includes(f))??"FOE",h=yd(Pc(s,c),a);h.ai={...Qp(t),persona:r};const u=Math.max(0,3-t)/2;return u>0&&(h.maxSpin*=1-.07*u,h.mass*=1-.2*u,h.burstRes*=1-.15*u,h.attack*=1-.14*u,h.steer*=1-.2*u,h.ai={...h.ai,strike:h.ai.strike-6*u,boost:h.ai.boost-6*u,persona:r}),h}function tm(i,t,e){const n=Td(i,Math.min(Or,t+2),e),s=1.55;n.name=jp(t),n.role="attack",n.radius*=s,n.mass*=1.6,n.maxSpin*=1.7,n.burstRes*=1.4,n.attack*=.7,n.steer*=.75,n.spinDecay*=.9;const r=Ju(t),a=Bi[r];return n.boss={kind:r},n.elements=[a.element],n.color=a.paint,n.accent=a.glow,n.look={...n.look,blade:"boss_"+r,disc:"anvil",tip:"orbit",core:"lockjaw",paint:a.paint,glow:a.glow,metal:a.metal,scale:s},n.ai={strike:Math.min(95,50+t*2),boost:70},n}function em(i,t,e,n){const s=[],r=o=>{const l=Td(i,o,n,s);return s.push(l.name),l},a=Array.from({length:e-1},()=>r(t));if(wd(t)){const o=t>=10?Math.min(2,e):0;return{allies:a,enemies:[tm(i,t,n),...Array.from({length:o},()=>r(t))],boss:!0}}return{allies:a,enemies:Array.from({length:e},()=>r(t)),boss:!1}}const nm=3.5,Za=.6;class im{constructor(t,e,n=2,s=Xs,r){this.specs=t,this.seed=e,this.winsNeeded=n,this.stadium=s,this.teams=r,this.world=uh(t,e,s,r)}world;phase="countdown";phaseT=3*Za;liveT=0;round=1;score=[0,0];tick(t,e){switch(this.phase){case"countdown":return this.phaseT-=gt,this.phaseT<=0&&(this.phase="live",this.liveT=0),[];case"live":{this.liveT+=gt;const n=[];return this.world.tops.forEach((s,r)=>{if(s.inPlay)return;const a=e[r]??(this.liveT>nm?{x:0,y:0,power:.5,tilt:0}:null);a&&id(this.world,r,a,n)}),n.push(...Lo(this.world,t)),this.world.over&&(this.world.over.winner>=0&&this.score[this.world.over.winner]++,this.phase="roundEnd",this.phaseT=3),n}case"roundEnd":{this.phaseT-=gt;const n=Lo(this.world,t);return this.phaseT<=0&&(this.score.some(s=>s>=this.winsNeeded)?this.phase="matchEnd":(this.round++,this.world=uh(this.specs,this.seed+this.round*7919,this.stadium,this.teams),this.phase="countdown",this.phaseT=3*Za)),n}case"matchEnd":return Lo(this.world,t)}}}function Ad(){return new URLSearchParams(location.search).has("touch")||window.matchMedia("(pointer: coarse)").matches}function sm(i){const t=Ad(),e={active:t,sx:0,sy:0,show:()=>{},update:()=>{}};if(!t)return e;document.body.classList.add("touch");const n=document.createElement("div");n.id="tc",n.className="hidden",n.innerHTML=`
    <div id="tcZone"><div id="tcBase"><div id="tcKnob"></div></div></div>
    <button id="tcSuper" class="tcb"><i></i><span></span></button>
    <button id="tcAbility" class="tcb"><i></i><span></span></button>
    <button id="tcBoost" class="tcb"><i></i><span>BOOST</span></button>
    <button id="tcMain" class="tcb"><i></i><span>STRIKE</span></button>`,document.body.appendChild(n);const s=()=>n.style.setProperty("--tcs",String(De.touchScale));s(),ho(s);const r=E=>n.querySelector("#"+E),a=r("tcZone"),o=r("tcBase"),l=r("tcKnob"),c=56;let h=-1,u=0,f=0;const d=(E,w)=>{let v=E-u,M=w-f;const _=Math.hypot(v,M),A=c*De.touchScale;_>A&&(v*=A/_,M*=A/_),e.sx=v/A,e.sy=M/A,l.style.transform=`translate(${v}px, ${M}px)`},g=()=>{h=-1,e.sx=e.sy=0,o.classList.remove("on"),l.style.transform=""};a.addEventListener("pointerdown",E=>{h===-1&&(h=E.pointerId,a.setPointerCapture(E.pointerId),u=E.clientX,f=E.clientY,o.style.left=`${u}px`,o.style.top=`${f}px`,o.classList.add("on"),d(u,f),E.preventDefault())}),a.addEventListener("pointermove",E=>{E.pointerId===h&&d(E.clientX,E.clientY)});for(const E of["pointerup","pointercancel"])a.addEventListener(E,w=>{w.pointerId===h&&g()});const x=(E,w,v)=>{const M=r(E);M.addEventListener("pointerdown",_=>{M.setPointerCapture(_.pointerId),M.classList.add("down"),w(),_.preventDefault()});for(const _ of["pointerup","pointercancel"])M.addEventListener(_,()=>{M.classList.remove("down"),v?.()});return M},p=x("tcMain",i.mainDown,i.mainUp),m=x("tcBoost",i.boost),S=x("tcAbility",i.ability),b=x("tcSuper",i.super),y=(E,w)=>E.firstElementChild.style.height=`${Math.max(0,Math.min(1,w))*100}%`,C=(E,w)=>{const v=E.lastElementChild;v.textContent!==w&&(v.textContent=w)};return e.show=E=>{n.classList.toggle("hidden",!E),E||g()},e.update=E=>{C(p,E.launching?"LAUNCH":"STRIKE"),C(S,E.ability),y(p,E.launching?0:E.strike),y(m,E.boost),y(S,E.abilityCd),m.classList.toggle("dim",E.launching),S.classList.toggle("dim",E.launching),C(b,E.superMeter>=1?E.superName:"OVERDRIVE"),y(b,1-E.superMeter),b.style.setProperty("--sc",E.superColor),b.classList.toggle("ready",E.superMeter>=1),b.classList.toggle("dim",E.launching)},e}const Rd={low:{shadow:512,bloom:!1,sparks:300,pixelCap:1},medium:{shadow:1024,bloom:!0,sparks:600,pixelCap:1.5},high:{shadow:2048,bloom:!0,sparks:900,pixelCap:2}},rm=[["SMALL",.85],["NORMAL",1],["LARGE",1.2]],Tl="sf.settings",am={volume:1,mute:!1,quality:"medium",measured:!1,qualityAuto:!1,touchScale:1};function om(){const i={...am};try{const t=JSON.parse(localStorage.getItem(Tl)??"null");t&&typeof t=="object"&&Object.assign(i,t),localStorage.getItem("sf.mute")&&(i.mute=!0,localStorage.removeItem("sf.mute"),localStorage.setItem(Tl,JSON.stringify(i)))}catch{}return Cd(i)}function Cd(i){const t=Number(i.volume);i.volume=Number.isFinite(t)?Math.max(0,Math.min(1,t)):1,i.mute=!!i.mute,i.quality in Rd||(i.quality="medium"),i.measured=!!i.measured,i.qualityAuto=!!i.qualityAuto;const e=Number(i.touchScale);return i.touchScale=Number.isFinite(e)?Math.max(.7,Math.min(1.4,e)):1,i}const De=om(),Pd=[],ho=i=>Pd.push(i);function yr(i){Object.assign(De,i),Cd(De);try{localStorage.setItem(Tl,JSON.stringify(De))}catch{}for(const t of Pd)t()}const lm=i=>i>26?"low":i>19?"medium":"high",cm=`<svg viewBox="-12 -12 24 24" width="24" height="24" aria-hidden="true"><g fill="currentColor">${Array.from({length:8},(t,e)=>`<rect x="-2.2" y="-11.5" width="4.4" height="5" rx="0.8" transform="rotate(${e*45})"/>`).join("")}</g><circle r="6.4" fill="none" stroke="currentColor" stroke-width="3.2"/></svg>`,hm=()=>cm;function um(i){const t=document.createElement("div");t.id="st",t.className="hidden";const e=Ad();t.innerHTML=`
    <div class="st-card" role="dialog" aria-label="Settings">
      <header><h2>SETTINGS</h2><button id="stDone" class="st-btn go">DONE</button></header>
      <div class="st-row"><label>SOUND</label>
        <div class="st-ctl"><input id="stVol" type="range" min="0" max="100" step="5" aria-label="Volume" /><output id="stVolN"></output><button id="stMute" class="st-btn"></button></div></div>
      <div class="st-row"><label>GRAPHICS</label>
        <div class="st-ctl"><div class="st-seg" id="stQ">${["low","medium","high"].map(o=>`<button data-q="${o}">${o.toUpperCase()}</button>`).join("")}</div></div>
        <small id="stAuto"></small></div>
      ${e?`<div class="st-row"><label>CONTROL SIZE</label><div class="st-ctl"><div class="st-seg" id="stS">${rm.map(([o,l])=>`<button data-s="${l}">${o}</button>`).join("")}</div></div></div>`:""}
    </div>`,document.body.appendChild(t);const n=o=>t.querySelector(o),s=n("#stVol"),r=()=>{s.value=String(Math.round(De.volume*100)),n("#stVolN").textContent=De.mute?"OFF":`${Math.round(De.volume*100)}%`,n("#stMute").textContent=De.mute?"UNMUTE":"MUTE",n("#stMute").classList.toggle("on",De.mute),t.querySelectorAll("[data-q]").forEach(o=>o.classList.toggle("on",o.dataset.q===De.quality)),n("#stAuto").textContent=De.qualityAuto?"PICKED FOR THIS DEVICE":"",t.querySelectorAll("[data-s]").forEach(o=>o.classList.toggle("on",Math.abs(Number(o.dataset.s)-De.touchScale)<.01))};ho(r),r(),s.addEventListener("input",()=>yr({volume:Number(s.value)/100,mute:!1})),s.addEventListener("change",i),n("#stMute").addEventListener("click",()=>yr({mute:!De.mute})),t.querySelectorAll("[data-q]").forEach(o=>o.addEventListener("click",()=>yr({quality:o.dataset.q,measured:!0,qualityAuto:!1}))),t.querySelectorAll("[data-s]").forEach(o=>o.addEventListener("click",()=>yr({touchScale:Number(o.dataset.s)})));const a=()=>t.classList.add("hidden");return n("#stDone").addEventListener("click",a),t.addEventListener("pointerdown",o=>{o.target===t&&a()}),window.addEventListener("keydown",o=>{o.code==="Escape"&&!t.classList.contains("hidden")&&a()}),()=>{r(),t.classList.remove("hidden")}}class dm{ctx=null;master;noise;hums=[];start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createDynamicsCompressor();this.master=t.createGain(),this.applyVolume(),ho(()=>this.applyVolume()),this.master.connect(e).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;for(let s=0;s<2;s++){const r=t.createOscillator();r.type="sawtooth";const a=t.createOscillator();a.type="triangle";const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=3;const l=t.createGain();l.gain.value=0,r.connect(o),a.connect(o),o.connect(l).connect(this.master),r.start(),a.start(),this.hums.push({osc:r,sub:a,filter:o,gain:l})}}setHum(t,e,n){if(!this.ctx)return;const s=this.hums[t],r=this.ctx.currentTime,a=55+210*e+t*9;s.osc.frequency.setTargetAtTime(a,r,.05),s.sub.frequency.setTargetAtTime(a/2,r,.05),s.filter.frequency.setTargetAtTime(200+1400*e,r,.05),s.gain.gain.setTargetAtTime(n?.035+.05*e:0,r,.08)}burstNoise(t,e,n,s,r="bandpass",a=0,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loopStart=Math.random()*.5;const h=l.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=e;const u=l.createGain(),f=l.currentTime+a;o&&h.frequency.exponentialRampToValueAtTime(o,f+s),u.gain.setValueAtTime(n,f),u.gain.exponentialRampToValueAtTime(1e-4,f+s),c.connect(h).connect(u).connect(this.master),c.start(f,Math.random()*.5,s+.05)}tone(t,e,n,s="sine",r,a=0){const o=this.ctx,l=o.createOscillator();l.type=s;const c=o.createGain(),h=o.currentTime+a;l.frequency.setValueAtTime(t,h),r&&l.frequency.exponentialRampToValueAtTime(r,h+n),c.gain.setValueAtTime(e,h),c.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(this.master),l.start(h),l.stop(h+n+.02)}clash(t){if(!this.ctx)return;const e=620+Math.random()*520,n=.15+t*.85;for(const[s,r]of[[1,.2],[2.76,.14],[5.4,.09],[8.93,.05]])this.tone(e*s,r*n,.12+.45*t*(1/Math.sqrt(s)));this.burstNoise(3500+Math.random()*2500,1.2,.5*n,.07+.08*t),t>.5&&this.tone(140,.5*t,.18,"sine",50)}rim(t){this.ctx&&(this.tone(260+Math.random()*60,.25*t+.05,.2,"triangle",150),this.burstNoise(1800,2,.25*t+.05,.08))}burst(){if(this.ctx){this.burstNoise(900,.6,1,.5,"lowpass"),this.burstNoise(5200,.8,.7,.18),this.tone(110,.9,.45,"sine",35);for(let t=0;t<4;t++)this.tone(900+Math.random()*2600,.12,.5+Math.random()*.5)}}ringOut(){this.ctx&&(this.tone(700,.3,.6,"sawtooth",90),this.burstNoise(1200,.7,.5,.5))}spinOut(){this.ctx&&(this.tone(180,.35,.7,"triangle",40),this.burstNoise(600,1,.3,.4))}applyVolume(){this.ctx&&(this.master.gain.value=De.mute?0:.7*De.volume*De.volume)}launch(t){this.ctx&&(this.tone(180,.3,.3,"sawtooth",t?1500:900),this.burstNoise(2600,.8,.35,.22),t&&this.tone(1760,.15,.35))}ability(t){this.ctx&&(t==="brake"?(this.burstNoise(900,1.2,.5,.28,"lowpass"),this.tone(160,.3,.3,"sawtooth",50)):t==="spring"?(this.tone(220,.3,.3,"triangle",720),this.tone(330,.2,.2,"sine",980)):t==="dash"?(this.burstNoise(1500,.9,.5,.25),this.tone(300,.25,.22,"sawtooth",1100)):(this.tone(220,.35,.3,"square",180),this.tone(1320,.1,.25)))}land(){this.ctx&&(this.tone(110,.55,.45,"sine",40),this.burstNoise(500,.8,.8,.25,"lowpass"),this.tone(1500,.12,.3,"triangle",500))}release(){this.ctx&&(this.burstNoise(3e3,1,.45,.22),this.tone(200,.3,.3,"sawtooth",1500),this.tone(1800,.15,.25))}boost(){this.ctx&&(this.burstNoise(2200,.7,.4,.2),this.tone(220,.18,.18,"sawtooth",900))}strike(){this.ctx&&(this.burstNoise(5200,1.5,.3,.09),this.tone(1400,.1,.1,"triangle",2400))}power(){this.ctx&&(this.tone(95,.9,.35,"sine",38),this.burstNoise(700,.6,.7,.22,"lowpass"),this.tone(2100,.16,.5))}wallBreak(){if(this.ctx){this.burstNoise(500,.5,1,.6,"lowpass"),this.burstNoise(3800,.9,.5,.25),this.tone(70,.8,.5,"sine",30);for(let t=0;t<5;t++)this.tone(500+Math.random()*1800,.1,.3+Math.random()*.5)}}superFx(){if(this.ctx){this.tone(120,.4,.45,"sawtooth",1800),this.tone(60,1,.7,"sine",28),this.burstNoise(400,.5,1,.7,"lowpass"),this.burstNoise(6e3,.7,.4,.35);for(let t=0;t<3;t++)this.tone(700+t*520,.14,.7)}}superEl(t){if(this.ctx)switch(t){case"thermal":this.burstNoise(180,.7,1,1.6,"lowpass",0,900),this.tone(70,.5,1.4,"sawtooth",240);for(let e=0;e<6;e++)this.burstNoise(2500+Math.random()*3e3,3,.25,.05,"bandpass",.2+e*.2);break;case"cryo":[3900,3100,2350,1750].forEach((e,n)=>this.tone(e,.16,.7,"sine",e*.985,n*.06)),this.burstNoise(7e3,.8,.5,.6,"highpass"),this.burstNoise(1800,4,.8,.07,"bandpass",.22),this.tone(85,.7,.4,"sine",40,.22);break;case"volt":this.tone(100,.3,1.2,"square"),this.tone(151,.2,1.2,"sawtooth");for(let e=0;e<9;e++)this.burstNoise(3500+Math.random()*4e3,2.5,.45,.05,"bandpass",e*.11+Math.random()*.05);break;case"gale":this.burstNoise(300,2.2,1,2,"bandpass",0,2600),this.burstNoise(700,1.2,.5,2,"bandpass",0,4200),this.burstNoise(3e3,.7,.9,.25,"bandpass",2.1);break;case"quake":this.tone(58,1,1.3,"sine",22),this.burstNoise(120,.6,1,1.4,"lowpass");for(let e=0;e<6;e++)this.tone(90+Math.random()*90,.45,.16,"triangle",45,.1+e*.13);break;case"plasma":this.tone(300,.3,.35,"sawtooth",3200),this.burstNoise(5e3,1.2,1,.5,"bandpass",.3,900),this.tone(2400,.4,.5,"square",200,.3);break;case"gravity":this.tone(160,.7,2.4,"sine",30),this.tone(164,.5,2.4,"triangle",31),this.burstNoise(900,1.5,.5,2.4,"bandpass",0,90),this.tone(40,1,.5,"sine",160,2.5);break;case"resonance":for(let e=0;e<4;e++)for(const[n,s]of[[1,.3],[2.76,.16],[5.4,.08]])this.tone(330*n,s,.55,"sine",void 0,e*.6);break;case"mag":this.tone(520,.35,.7,"sine",80),this.tone(529,.35,.7,"sine",84),this.tone(80,.5,.5,"sawtooth",900,.7),this.burstNoise(1500,.8,.7,.3,"bandpass",.7);break}}zap(){this.ctx&&(this.burstNoise(4200+Math.random()*2e3,2,.35,.09),this.tone(1800,.08,.08,"square",500))}bossWind(t){if(this.ctx){this.tone(70,.5,t,"sawtooth",240),this.burstNoise(300,.8,.4,t,"lowpass",0,900);for(let e=0;e<4;e++)this.tone(520,.12,.06,"square",void 0,t*(.4+.15*e))}}bossSlam(){this.ctx&&(this.tone(60,1,.7,"sine",24),this.burstNoise(300,.5,1,.7,"lowpass"),this.burstNoise(2500,.8,.45,.3))}bossPhase(){this.ctx&&(this.tone(50,1,1,"sawtooth",160),this.burstNoise(500,.5,1,.8,"lowpass"),this.tone(1200,.14,.7,"triangle",300))}beep(t){this.ctx&&this.tone(t?990:495,.2,t?.4:.14,"square")}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="170",fm=0,yh=1,pm=2,Ld=1,Id=2,ai=3,Ui=0,nn=1,He=2,ui=0,Gs=1,ze=2,bh=3,Sh=4,mm=5,ns=100,gm=101,xm=102,vm=103,Mm=104,_m=200,ym=201,bm=202,Sm=203,Al=204,Rl=205,Em=206,wm=207,Tm=208,Am=209,Rm=210,Cm=211,Pm=212,Lm=213,Im=214,Cl=0,Pl=1,Ll=2,qs=3,Il=4,Dl=5,Ul=6,Nl=7,Dd=0,Dm=1,Um=2,Di=0,Ud=1,Nd=2,Od=3,Ic=4,Nm=5,Fd=6,kd=7,Bd=300,Ys=301,$s=302,Ol=303,Fl=304,uo=306,kl=1e3,rs=1001,Bl=1002,pn=1003,Om=1004,Qr=1005,Jn=1006,Uo=1007,as=1008,vi=1009,zd=1010,Hd=1011,Fr=1012,Dc=1013,hs=1014,jn=1015,di=1016,Uc=1017,Nc=1018,Ks=1020,Gd=35902,Vd=1021,Wd=1022,kn=1023,Xd=1024,qd=1025,Vs=1026,Zs=1027,Oc=1028,Fc=1029,Yd=1030,kc=1031,Bc=1033,Ba=33776,za=33777,Ha=33778,Ga=33779,zl=35840,Hl=35841,Gl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,$l=37809,Kl=37810,Zl=37811,Jl=37812,jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,Va=36492,oc=36494,lc=36495,$d=36283,cc=36284,hc=36285,uc=36286,Fm=3200,km=3201,Kd=0,Bm=1,Li="",_n="srgb",ir="srgb-linear",fo="linear",me="srgb",vs=7680,Eh=519,zm=512,Hm=513,Gm=514,Zd=515,Vm=516,Wm=517,Xm=518,qm=519,dc=35044,wh="300 es",li=2e3,Ja=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=Math.PI/180,fc=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Ym(i,t){return(i%t+t)%t}function Oo(i,t,e){return(1-e)*i+e*t}function Zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class K{constructor(t=0,e=0){K.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],S=s[1],b=s[4],y=s[7],C=s[2],E=s[5],w=s[8];return r[0]=a*x+o*S+l*C,r[3]=a*p+o*b+l*E,r[6]=a*m+o*y+l*w,r[1]=c*x+h*S+u*C,r[4]=c*p+h*b+u*E,r[7]=c*m+h*y+u*w,r[2]=f*x+d*S+g*C,r[5]=f*p+d*b+g*E,r[8]=f*m+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Qt;function Jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $m(){const i=ja("canvas");return i.style.display="block",i}const Th={};function br(i){i in Th||(Th[i]=!0,console.warn(i))}function Km(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ah=[.64,.33,.3,.6,.15,.06],Rh=[.2126,.7152,.0722],Ch=[.3127,.329],Ph=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[ir]:{primaries:Ah,whitePoint:Ch,transfer:fo,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Ah,whitePoint:Ch,transfer:me,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});let Ms;class jm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=ja("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qm=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Ze extends sr{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=rs,s=rs,r=Jn,a=as,o=kn,l=vi,c=Ze.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=fi(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Bd;Ze.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(d+1)/2,C=(m+1)/2,E=(h+f)/4,w=(u+x)/4,v=(g+p)/4;return b>y&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=w/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends e0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qd extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-o;const m=l*f+c*d+h*g+u*x,S=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const C=Math.sqrt(b),E=Math.atan2(C,m*S);p=Math.sin(p*E)/C,o=Math.sin(o*E)/C}const y=o*S;if(l=l*p+f*y,c=c*p+d*y,h=h*p+g*y,u=u*p+x*y,p===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new L,Ih=new ms;class zi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),ea.subVectors(this.max,hr),_s.subVectors(t.a,hr),ys.subVectors(t.b,hr),bs.subVectors(t.c,hr),yi.subVectors(ys,_s),bi.subVectors(bs,ys),Xi.subVectors(_s,bs);let e=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!zo(e,_s,ys,bs,ea)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,_s,ys,bs,ea))?!1:(na.crossVectors(yi,bi),e=[na.x,na.y,na.z],zo(e,_s,ys,bs,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,ta=new zi,_s=new L,ys=new L,bs=new L,yi=new L,bi=new L,Xi=new L,hr=new L,ea=new L,na=new L,qi=new L;function zo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);const o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const i0=new zi,ur=new L,Ho=new L;class Hi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):i0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Ho)),this.expandByPoint(ur.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new L,Go=new L,ia=new L,Si=new L,Vo=new L,sa=new L,Wo=new L;class po{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Go.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Go);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ia),o=Si.dot(this.direction),l=-Si.dot(ia),c=Si.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Go).addScaledVector(ia,f),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){Vo.subVectors(e,t),sa.subVectors(n,t),Wo.crossVectors(Vo,sa);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,t);const l=o*this.direction.dot(sa.crossVectors(Si,sa));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(Si));if(c<0||l+c>a)return null;const h=-o*Si.dot(Wo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),a=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,r0)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ei.crossVectors(n,un),Ei.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ei.crossVectors(n,un)),Ei.normalize(),ra.crossVectors(un,Ei),s[0]=Ei.x,s[4]=ra.x,s[8]=un.x,s[1]=Ei.y,s[5]=ra.y,s[9]=un.y,s[2]=Ei.z,s[6]=ra.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],S=n[3],b=n[7],y=n[11],C=n[15],E=s[0],w=s[4],v=s[8],M=s[12],_=s[1],A=s[5],N=s[9],O=s[13],B=s[2],q=s[6],U=s[10],F=s[14],I=s[3],G=s[7],j=s[11],nt=s[15];return r[0]=a*E+o*_+l*B+c*I,r[4]=a*w+o*A+l*q+c*G,r[8]=a*v+o*N+l*U+c*j,r[12]=a*M+o*O+l*F+c*nt,r[1]=h*E+u*_+f*B+d*I,r[5]=h*w+u*A+f*q+d*G,r[9]=h*v+u*N+f*U+d*j,r[13]=h*M+u*O+f*F+d*nt,r[2]=g*E+x*_+p*B+m*I,r[6]=g*w+x*A+p*q+m*G,r[10]=g*v+x*N+p*U+m*j,r[14]=g*M+x*O+p*F+m*nt,r[3]=S*E+b*_+y*B+C*I,r[7]=S*w+b*A+y*q+C*G,r[11]=S*v+b*N+y*U+C*j,r[15]=S*M+b*O+y*F+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],S=u*p*c-x*f*c+x*l*d-o*p*d-u*l*m+o*f*m,b=g*f*c-h*p*c-g*l*d+a*p*d+h*l*m-a*f*m,y=h*x*c-g*u*c+g*o*d-a*x*d-h*o*m+a*u*m,C=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,E=e*S+n*b+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=S*w,t[1]=(x*f*r-u*p*r-x*s*d+n*p*d+u*s*m-n*f*m)*w,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=b*w,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=y*w,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*m-e*u*m)*w,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=C*w,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*p+e*u*p)*w,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,p=a*u,m=o*u,S=l*c,b=l*h,y=l*u,C=n.x,E=n.y,w=n.z;return s[0]=(1-(x+m))*C,s[1]=(d+y)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+b)*w,s[9]=(p-S)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,h=1/a,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=li){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===li)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ja)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=li){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let g,x;if(o===li)g=(a+r)*u,x=-2*u;else if(o===Ja)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new L,Dn=new oe,s0=new L(0,0,0),r0=new L(1,1,1),Ei=new L,ra=new L,un=new L,Dh=new oe,Uh=new ms;class Hn{constructor(t=0,e=0,n=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a0=0;const Nh=new L,Es=new ms,ii=new oe,aa=new L,dr=new L,o0=new L,l0=new ms,Oh=new L(1,0,0),Fh=new L(0,1,0),kh=new L(0,0,1),Bh={type:"added"},c0={type:"removed"},ws={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Pe extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new L,e=new Hn,n=new ms,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(dr,aa,this.up):ii.lookAt(aa,dr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ii),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c0),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,o0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,l0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,si=new L,qo=new L,ri=new L,Ts=new L,As=new L,zh=new L,Yo=new L,$o=new L,Ko=new L,Zo=new ve,Jo=new ve,jo=new ve;class bn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),si.subVectors(n,e),qo.subVectors(t,e);const a=Un.dot(Un),o=Un.dot(si),l=Un.dot(qo),c=si.dot(si),h=si.dot(qo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zo.setScalar(0),Jo.setScalar(0),jo.setScalar(0),Zo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(jo,r.z),a}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),si.subVectors(t,e),Un.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ts.subVectors(s,n),As.subVectors(r,n),Yo.subVectors(t,n);const l=Ts.dot(Yo),c=As.dot(Yo);if(l<=0&&c<=0)return e.copy(n);$o.subVectors(t,s);const h=Ts.dot($o),u=As.dot($o);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ts,a);Ko.subVectors(t,r);const d=Ts.dot(Ko),g=As.dot(Ko);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(As,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return zh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(zh,o);const m=1/(p+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(Ts,a).addScaledVector(As,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Ym(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qo(a,r,t+1/3),this.g=Qo(a,r,t),this.b=Qo(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return ae.fromWorkingColorSpace(qe.copy(this),t),Math.round(Be(qe.r*255,0,255))*65536+Math.round(Be(qe.g*255,0,255))*256+Math.round(Be(qe.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=_n){ae.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(oa);const n=Oo(wi.h,oa.h,e),s=Oo(wi.s,oa.s,e),r=Oo(wi.l,oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Ht;Ht.NAMES=tf;let h0=0;class Gi extends sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=fi(),this.name="",this.blending=Gs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new L,la=new K;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dc&&(t.usage=this.usage),t}}class ef extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nf extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let u0=0;const xn=new oe,tl=new Pe,Rs=new L,dn=new zi,fr=new zi,Fe=new L;class _e extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?nf:ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(dn.min,fr.min),dn.expandByPoint(Fe),Fe.addVectors(dn.max,fr.max),dn.expandByPoint(Fe)):(dn.expandByPoint(fr.min),dn.expandByPoint(fr.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),Fe.add(Rs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new L,l[v]=new L;const c=new L,h=new L,u=new L,f=new K,d=new K,g=new K,x=new L,p=new L;function m(v,M,_){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),o[v].add(x),o[M].add(x),o[_].add(x),l[v].add(p),l[M].add(p),l[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,M=S.length;v<M;++v){const _=S[v],A=_.start,N=_.count;for(let O=A,B=A+N;O<B;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new L,y=new L,C=new L,E=new L;function w(v){C.fromBufferAttribute(s,v),E.copy(C);const M=o[v];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(E,M);const A=y.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,A)}for(let v=0,M=S.length;v<M;++v){const _=S[v],A=_.start,N=_.count;for(let O=A,B=A+N;O<B;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new oe,Yi=new po,ca=new Hi,Gh=new L,ha=new L,ua=new L,da=new L,el=new L,fa=new L,Vh=new L,pa=new L;class lt extends Pe{constructor(t=new _e,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,t),a?fa.addScaledVector(el,h):fa.addScaledVector(el.sub(e),h))}e.add(fa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(ca.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ca,Gh)===null||Yi.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const E=o.getX(y),w=o.getX(y+1),v=o.getX(y+2);s=ma(this,m,t,n,c,h,u,E,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);s=ma(this,a,t,n,c,h,u,S,b,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const E=y,w=y+1,v=y+2;s=ma(this,m,t,n,c,h,u,E,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=p,b=p+1,y=p+2;s=ma(this,a,t,n,c,h,u,S,b,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function d0(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ui,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pa);return c<e.near||c>e.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ha),i.getVertexPosition(l,ua),i.getVertexPosition(c,da);const h=d0(i,t,e,n,ha,ua,da,Vh);if(h){const u=new L;bn.getBarycoord(Vh,ha,ua,da,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,l,c,u,new K)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new K)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};bn.getNormal(ha,ua,da,f.normal),h.face=f,h.barycoord=u}return h}class ne extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,p,m,S,b,y,C,E,w,v,M){const _=y/w,A=C/v,N=y/2,O=C/2,B=E/2,q=w+1,U=v+1;let F=0,I=0;const G=new L;for(let j=0;j<U;j++){const nt=j*A-O;for(let vt=0;vt<q;vt++){const Pt=vt*_-N;G[x]=Pt*S,G[p]=nt*b,G[m]=B,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(vt/w),u.push(1-j/v),F+=1}}for(let j=0;j<v;j++)for(let nt=0;nt<w;nt++){const vt=f+nt+q*j,Pt=f+nt+q*(j+1),W=f+(nt+1)+q*(j+1),tt=f+(nt+1)+q*j;l.push(vt,Pt,tt),l.push(Pt,W,tt),I+=6}o.addGroup(d,I,M),d+=I,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Js(i[e]);for(const s in n)t[s]=n[s]}return t}function f0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const kr={clone:Js,merge:Qe};var p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rf extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new L,Wh=new K,Xh=new K;class tn extends rf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class g0 extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new tn(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const a=new tn(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const o=new tn(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const l=new tn(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new tn(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class af extends Ze{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x0 extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new af(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ui});r.uniforms.tEquirect.value=e;const a=new lt(s,r),o=e.minFilter;return e.minFilter===as&&(e.minFilter=Jn),new g0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const nl=new L,v0=new L,M0=new Qt;class Qi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nl.subVectors(n,e).cross(v0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||M0.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Hi,ga=new L;class Hc{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,r=new Qi,a=new Qi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],S=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+a,f+h,p+g,y+S).normalize(),n[3].setComponents(l-a,f-h,p-g,y-S).normalize(),n[4].setComponents(l-o,f-u,p-x,y-b).normalize(),e===li)n[5].setComponents(l+o,f+u,p+x,y+b).normalize();else if(e===Ja)n[5].setComponents(o,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function of(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _0(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class mo extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const S=m*f-a;for(let b=0;b<c;b++){const y=b*u-r;g.push(y,-S,0),x.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const b=S+c*m,y=S+c*(m+1),C=S+1+c*(m+1),E=S+1+c*m;d.push(b,y,E),d.push(y,C,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,Mg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rx=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Rx=`#define DISTANCE
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
}`,Cx=`#define DISTANCE
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,Bx=`#define MATCAP
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
}`,zx=`#define NORMAL
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
}`,Hx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Vx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Yx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,Jx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:y0,alphahash_pars_fragment:b0,alphamap_fragment:S0,alphamap_pars_fragment:E0,alphatest_fragment:w0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:L0,beginnormal_vertex:I0,bsdfs:D0,iridescence_fragment:U0,bumpmap_pars_fragment:N0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:B0,color_fragment:z0,color_pars_fragment:H0,color_pars_vertex:G0,color_vertex:V0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:j0,envmap_fragment:Q0,envmap_common_pars_fragment:tg,envmap_pars_fragment:eg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:ag,fog_pars_fragment:og,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:ug,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:Mg,lights_fragment_begin:_g,lights_fragment_maps:yg,lights_fragment_end:bg,logdepthbuf_fragment:Sg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Tg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Ig,morphinstance_vertex:Dg,morphcolor_vertex:Ug,morphnormal_vertex:Ng,morphtarget_pars_vertex:Og,morphtarget_vertex:Fg,normal_fragment_begin:kg,normal_fragment_maps:Bg,normal_pars_fragment:zg,normal_pars_vertex:Hg,normal_vertex:Gg,normalmap_pars_fragment:Vg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Yg,opaque_fragment:$g,packing:Kg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:dx,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:xx,uv_vertex:vx,worldpos_vertex:Mx,background_vert:_x,background_frag:yx,backgroundCube_vert:bx,backgroundCube_frag:Sx,cube_vert:Ex,cube_frag:wx,depth_vert:Tx,depth_frag:Ax,distanceRGBA_vert:Rx,distanceRGBA_frag:Cx,equirect_vert:Px,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Dx,meshbasic_vert:Ux,meshbasic_frag:Nx,meshlambert_vert:Ox,meshlambert_frag:Fx,meshmatcap_vert:kx,meshmatcap_frag:Bx,meshnormal_vert:zx,meshnormal_frag:Hx,meshphong_vert:Gx,meshphong_frag:Vx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:$x,points_frag:Kx,shadow_vert:Zx,shadow_frag:Jx,sprite_vert:jx,sprite_frag:Qx},xt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},$n={basic:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Qe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Qe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Qe([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Qe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Qe([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Qe([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Qe([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Qe([xt.lights,xt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};$n.physical={uniforms:Qe([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const xa={r:0,b:0,g:0},Ki=new Hn,tv=new oe;function ev(i,t,e,n,s,r,a){const o=new Ht(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function x(S){let b=!1;const y=g(S);y===null?m(o,l):y&&y.isColor&&(m(y,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===uo)?(h===void 0&&(h=new lt(new ne(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Js($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(b.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Ki)),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new mo(2,2),new en({name:"BackgroundMaterial",uniforms:Js($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,b){S.getRGB(xa,sf(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:x,addToRenderList:p}}function nv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,A,N,O,B){let q=!1;const U=u(O,N,A);r!==U&&(r=U,c(r.object)),q=d(_,O,N,B),q&&g(_,O,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(_,A,N,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,A,N){const O=N.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let q=B[A.id];q===void 0&&(q={},B[A.id]=q);let U=q[O];return U===void 0&&(U=f(l()),q[O]=U),U}function f(_){const A=[],N=[],O=[];for(let B=0;B<e;B++)A[B]=0,N[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:O,object:_,attributes:{},index:null}}function d(_,A,N,O){const B=r.attributes,q=A.attributes;let U=0;const F=N.getAttributes();for(const I in F)if(F[I].location>=0){const j=B[I];let nt=q[I];if(nt===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function g(_,A,N,O){const B={},q=A.attributes;let U=0;const F=N.getAttributes();for(const I in F)if(F[I].location>=0){let j=q[I];j===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),B[I]=nt,U++}r.attributes=B,r.attributesNum=U,r.index=O}function x(){const _=r.newAttributes;for(let A=0,N=_.length;A<N;A++)_[A]=0}function p(_){m(_,0)}function m(_,A){const N=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;N[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),B[_]!==A&&(i.vertexAttribDivisor(_,A),B[_]=A)}function S(){const _=r.newAttributes,A=r.enabledAttributes;for(let N=0,O=A.length;N<O;N++)A[N]!==_[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function b(_,A,N,O,B,q,U){U===!0?i.vertexAttribIPointer(_,A,N,B,q):i.vertexAttribPointer(_,A,N,O,B,q)}function y(_,A,N,O){x();const B=O.attributes,q=N.getAttributes(),U=A.defaultAttributeValues;for(const F in q){const I=q[F];if(I.location>=0){let G=B[F];if(G===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),G!==void 0){const j=G.normalized,nt=G.itemSize,vt=t.get(G);if(vt===void 0)continue;const Pt=vt.buffer,W=vt.type,tt=vt.bytesPerElement,ft=W===i.INT||W===i.UNSIGNED_INT||G.gpuType===Dc;if(G.isInterleavedBufferAttribute){const it=G.data,st=it.stride,pt=G.offset;if(it.isInstancedInterleavedBuffer){for(let Et=0;Et<I.locationSize;Et++)m(I.location+Et,it.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Et=0;Et<I.locationSize;Et++)p(I.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Et=0;Et<I.locationSize;Et++)b(I.location+Et,nt/I.locationSize,W,j,st*tt,(pt+nt/I.locationSize*Et)*tt,ft)}else{if(G.isInstancedBufferAttribute){for(let it=0;it<I.locationSize;it++)m(I.location+it,G.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let it=0;it<I.locationSize;it++)p(I.location+it);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let it=0;it<I.locationSize;it++)b(I.location+it,nt/I.locationSize,W,j,nt*tt,nt/I.locationSize*it*tt,ft)}}else if(U!==void 0){const j=U[F];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(I.location,j);break;case 3:i.vertexAttrib3fv(I.location,j);break;case 4:i.vertexAttrib4fv(I.location,j);break;default:i.vertexAttrib1fv(I.location,j)}}}}S()}function C(){v();for(const _ in n){const A=n[_];for(const N in A){const O=A[N];for(const B in O)h(O[B].object),delete O[B];delete A[N]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const A=n[_.id];for(const N in A){const O=A[N];for(const B in O)h(O[B].object),delete O[B];delete A[N]}delete n[_.id]}function w(_){for(const A in n){const N=n[A];if(N[_.id]===void 0)continue;const O=N[_.id];for(const B in O)h(O[B].object),delete O[B];delete N[_.id]}}function v(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:v,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function iv(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==vi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==jn&&!v)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function rv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Qi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,b=S*4;let y=m.clippingState||null;l.value=y,y=h(g,f,b,d);for(let C=0;C!==b;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=d;b!==x;++b,y+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function av(i){let t=new WeakMap;function e(a,o){return o===Ol?a.mapping=Ys:o===Fl&&(a.mapping=$s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ol||o===Fl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x0(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gc extends rf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,qh=[.125,.215,.35,.446,.526,.582],is=20,il=new Gc,Yh=new Ht;let sl=null,rl=0,al=0,ol=!1;const ts=(1+Math.sqrt(5))/2,Ls=1/ts,$h=[new L(-ts,Ls,0),new L(ts,Ls,0),new L(-Ls,0,ts),new L(Ls,0,ts),new L(0,ts,-Ls),new L(0,ts,Ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=ol,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:di,format:kn,colorSpace:ir,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ov(r)),this._blurMaterial=lv(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,s){const o=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yh),h.toneMapping=Di,h.autoClear=!1;const d=new Te({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new lt(new ne,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Yh),x=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const b=this._cubeSize;va(s,S*b,m>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ys||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,il)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):is;p>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);const m=[];let S=0;for(let w=0;w<is;++w){const v=w/x,M=Math.exp(-v*v/2);m.push(M),w===0?S+=M:w<p&&(S+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[s],C=3*y*(s>b-Bs?s-b+Bs:0),E=4*(this._cubeSize-y);va(e,C,E,3*y,2*y),l.setRenderTarget(e),l.render(u,il)}}function ov(i){const t=[],e=[],n=[];let s=i;const r=i-Bs+1+qh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Bs?l=qh[a-i+Bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,S=new Float32Array(x*g*d),b=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,v=E>2?0:-1,M=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];S.set(M,x*g*E),b.set(f,p*g*E);const _=[E,E,E,E,E,E];y.set(_,m*g*E)}const C=new _e;C.setAttribute("position",new Ae(S,x)),C.setAttribute("uv",new Ae(b,p)),C.setAttribute("faceIndex",new Ae(y,m)),t.push(C),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lv(i,t,e){const n=new Float32Array(is),s=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Zh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jh(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function cv(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ol||l===Fl,h=l===Ys||l===$s;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Qa(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Qa(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uv(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let b=0,y=S.length;b<y;b+=3){const C=S[b+0],E=S[b+1],w=S[b+2];f.push(C,E,E,w,w,C)}}else if(g!==void 0){const S=g.array;x=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const C=b+0,E=b+1,w=b+2;f.push(C,E,E,w,w,C)}}else return;const p=new(Jd(f)?nf:ef)(f,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function dv(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S]*x[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pv(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let C=o.attributes.position.count*y,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*E*4*u),v=new Qd(w,C,E,u);v.type=jn,v.needsUpdate=!0;const M=y*4;for(let A=0;A<u;A++){const N=m[A],O=S[A],B=b[A],q=C*E*4*A;for(let U=0;U<N.count;U++){const F=U*M;g===!0&&(s.fromBufferAttribute(N,U),w[q+F+0]=s.x,w[q+F+1]=s.y,w[q+F+2]=s.z,w[q+F+3]=0),x===!0&&(s.fromBufferAttribute(O,U),w[q+F+4]=s.x,w[q+F+5]=s.y,w[q+F+6]=s.z,w[q+F+7]=0),p===!0&&(s.fromBufferAttribute(B,U),w[q+F+8]=s.x,w[q+F+9]=s.y,w[q+F+10]=s.z,w[q+F+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new K(C,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function mv(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class lf extends Ze{constructor(t,e,n,s,r,a,o,l,c,h=Vs){if(h!==Vs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=hs),n===void 0&&h===Zs&&(n=Ks),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cf=new Ze,jh=new lf(1,1),hf=new Qd,uf=new n0,df=new af,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function _v(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),Oe(e,n)}}function yv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),Oe(e,n)}}function bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;eu.set(n),i.uniformMatrix4fv(this.addr,!1,eu),Oe(e,n)}}function Sv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Av(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Lv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=Zd,r=jh):r=cf,e.setTexture2D(t||r,s)}function Iv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uf,s)}function Dv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||df,s)}function Uv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hf,s)}function Nv(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return vv;case 35666:return Mv;case 35674:return _v;case 35675:return yv;case 35676:return bv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(i,t){i.uniform1fv(this.addr,t)}function Fv(i,t){const e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function kv(i,t){const e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Bv(i,t){const e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function zv(i,t){const e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hv(i,t){const e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gv(i,t){const e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vv(i,t){i.uniform1iv(this.addr,t)}function Wv(i,t){i.uniform2iv(this.addr,t)}function Xv(i,t){i.uniform3iv(this.addr,t)}function qv(i,t){i.uniform4iv(this.addr,t)}function Yv(i,t){i.uniform1uiv(this.addr,t)}function $v(i,t){i.uniform2uiv(this.addr,t)}function Kv(i,t){i.uniform3uiv(this.addr,t)}function Zv(i,t){i.uniform4uiv(this.addr,t)}function Jv(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||cf,r[a])}function jv(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||uf,r[a])}function Qv(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||df,r[a])}function tM(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||hf,r[a])}function eM(i){switch(i){case 5126:return Ov;case 35664:return Fv;case 35665:return kv;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return $v;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return tM}}class nM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}}class sM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function su(i,t){i.seq.push(t),i.map[t.id]=t}function rM(i,t,e){const n=i.name,s=n.length;for(ll.lastIndex=0;;){const r=ll.exec(n),a=ll.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){su(e,c===void 0?new nM(o,i,t):new iM(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new sM(o),su(e,u)),e=u}}}class Wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);rM(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ru(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const aM=37297;let oM=0;function lM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const au=new Qt;function cM(i){ae._getMatrix(au,ae.workingColorSpace,i);const t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case fo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ou(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lM(i.getShaderSource(t),a)}else return s}function hM(i,t){const e=cM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uM(i,t){let e;switch(t){case Ud:e="Linear";break;case Nd:e="Reinhard";break;case Od:e="Cineon";break;case Ic:e="ACESFilmic";break;case Fd:e="AgX";break;case kd:e="Neutral";break;case Nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ma=new L;function dM(){ae.getLuminanceCoefficients(Ma);const i=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function pM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Sr(i){return i!==""}function lu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(gM,vM)}const xM=new Map;function vM(i,t){let e=ee[t];if(e===void 0){const n=xM.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(MM,_M)}function _M(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Id?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function bM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case $s:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function EM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dd:t="ENVMAP_BLENDING_MULTIPLY";break;case Dm:t="ENVMAP_BLENDING_MIX";break;case Um:t="ENVMAP_BLENDING_ADD";break}return t}function wM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function TM(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=yM(e),c=bM(e),h=SM(e),u=EM(e),f=wM(e),d=fM(e),g=pM(r),x=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(p=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?ee.tonemapping_pars_fragment:"",e.toneMapping!==Di?uM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,hM("linearToOutputTexel",e.outputColorSpace),dM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=pc(a),a=lu(a,e),a=cu(a,e),o=pc(o),o=lu(o,e),o=cu(o,e),a=hu(a),o=hu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=S+p+a,y=S+m+o,C=ru(s,s.VERTEX_SHADER,b),E=ru(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(A){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(E).trim();let q=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,E);else{const F=ou(s,C,"vertex"),I=ou(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+F+`
`+I)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||B==="")&&(U=!1);U&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(C),s.deleteShader(E),v=new Wa(s,x),M=mM(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,aM)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}let AM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new CM(t),e.set(t,n)),n}}class CM{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}}function PM(i,t,e,n,s,r,a){const o=new zc,l=new RM,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,_,A,N,O){const B=N.fog,q=O.geometry,U=M.isMeshStandardMaterial?N.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),I=F&&F.mapping===uo?F.image.height:null,G=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=j!==void 0?j.length:0;let vt=0;q.morphAttributes.position!==void 0&&(vt=1),q.morphAttributes.normal!==void 0&&(vt=2),q.morphAttributes.color!==void 0&&(vt=3);let Pt,W,tt,ft;if(G){const pe=$n[G];Pt=pe.vertexShader,W=pe.fragmentShader}else Pt=M.vertexShader,W=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const it=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),pt=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,Yt=!!M.map,Q=!!M.matcap,ct=!!F,D=!!M.aoMap,Ut=!!M.lightMap,ot=!!M.bumpMap,Ct=!!M.normalMap,mt=!!M.displacementMap,Gt=!!M.emissiveMap,wt=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,V=M.clearcoat>0,Z=M.dispersion>0,rt=M.iridescence>0,J=M.sheen>0,Nt=M.transmission>0,Mt=T&&!!M.anisotropyMap,Tt=V&&!!M.clearcoatMap,se=V&&!!M.clearcoatNormalMap,ht=V&&!!M.clearcoatRoughnessMap,Lt=rt&&!!M.iridescenceMap,Vt=rt&&!!M.iridescenceThicknessMap,Xt=J&&!!M.sheenColorMap,It=J&&!!M.sheenRoughnessMap,re=!!M.specularMap,te=!!M.specularColorMap,ye=!!M.specularIntensityMap,k=Nt&&!!M.transmissionMap,_t=Nt&&!!M.thicknessMap,$=!!M.gradientMap,et=!!M.alphaMap,St=M.alphaTest>0,yt=!!M.alphaHash,Jt=!!M.extensions;let Ce=Di;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const We={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:Pt,fragmentShader:W,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:pt,instancingColor:pt&&O.instanceColor!==null,instancingMorph:pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ir,alphaToCoverage:!!M.alphaToCoverage,map:Yt,matcap:Q,envMap:ct,envMapMode:ct&&F.mapping,envMapCubeUVHeight:I,aoMap:D,lightMap:Ut,bumpMap:ot,normalMap:Ct,displacementMap:f&&mt,emissiveMap:Gt,normalMapObjectSpace:Ct&&M.normalMapType===Bm,normalMapTangentSpace:Ct&&M.normalMapType===Kd,metalnessMap:wt,roughnessMap:P,anisotropy:T,anisotropyMap:Mt,clearcoat:V,clearcoatMap:Tt,clearcoatNormalMap:se,clearcoatRoughnessMap:ht,dispersion:Z,iridescence:rt,iridescenceMap:Lt,iridescenceThicknessMap:Vt,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:It,specularMap:re,specularColorMap:te,specularIntensityMap:ye,transmission:Nt,transmissionMap:k,thicknessMap:_t,gradientMap:$,opaque:M.transparent===!1&&M.blending===Gs&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:St,alphaHash:yt,combine:M.combine,mapUv:Yt&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:Ut&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:Ct&&x(M.normalMap.channel),displacementMapUv:mt&&x(M.displacementMap.channel),emissiveMapUv:Gt&&x(M.emissiveMap.channel),metalnessMapUv:wt&&x(M.metalnessMap.channel),roughnessMapUv:P&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:Tt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(M.sheenRoughnessMap.channel),specularMapUv:re&&x(M.specularMap.channel),specularColorMapUv:te&&x(M.specularColorMap.channel),specularIntensityMapUv:ye&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:_t&&x(M.thicknessMap.channel),alphaMapUv:et&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ct||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Yt||et),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:vt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Yt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Jt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&M.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)_.push(A),_.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(S(_,M),b(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function S(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function b(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const _=g[M.type];let A;if(_){const N=$n[_];A=kr.clone(N.uniforms)}else A=M.uniforms;return A}function C(M,_){let A;for(let N=0,O=h.length;N<O;N++){const B=h[N];if(B.cacheKey===_){A=B,++A.usedTimes;break}}return A===void 0&&(A=new TM(i,_,M,r),h.push(A)),A}function E(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function v(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:v}}function LM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function IM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function o(u,f,d,g,x,p){const m=a(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,x,p){const m=a(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||IM),n.length>1&&n.sort(f||du),s.length>1&&s.sort(f||du)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function DM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fu,i.set(n,[a])):s>=r.length?(a=new fu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function UM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function NM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let OM=0;function FM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kM(i){const t=new UM,e=NM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new oe,a=new oe;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,S=0,b=0,y=0,C=0,E=0,w=0;c.sort(FM);for(let M=0,_=c.length;M<_;M++){const A=c[M],N=A.color,O=A.intensity,B=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*O,u+=N.g*O,f+=N.b*O;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],O);w++}else if(A.isDirectionalLight){const U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const F=A.shadow,I=e.get(A);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=A.shadow.matrix,S++}n.directional[d]=U,d++}else if(A.isSpotLight){const U=t.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(N).multiplyScalar(O),U.distance=B,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[x]=U;const F=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,F.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=F.matrix,A.castShadow){const I=e.get(A);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=q,y++}x++}else if(A.isRectAreaLight){const U=t.get(A);U.color.copy(N).multiplyScalar(O),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=U,p++}else if(A.isPointLight){const U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){const F=A.shadow,I=e.get(A);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=U,g++}else if(A.isHemisphereLight){const U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(O),U.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==y||v.numSpotMaps!==C||v.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,v.directionalLength=d,v.pointLength=g,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=y,v.numSpotMaps=C,v.numLightProbes=w,n.version=OM++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function pu(i){const t=new kM(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function BM(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new pu(i),t.set(s,[o])):r>=a.length?(o=new pu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zM extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`;function WM(i,t,e){let n=new Hc;const s=new K,r=new K,a=new ve,o=new zM({depthPacking:km}),l=new HM,c={},h=e.maxTextureSize,u={[Ui]:nn,[nn]:Ui,[He]:He},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let m=this.type;this.render=function(E,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==ai&&this.type===ai,B=m===ai&&this.type!==ai;for(let q=0,U=E.length;q<U;q++){const F=E[q],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const G=I.getFrameExtents();if(s.multiply(G),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,I.mapSize.y=r.y)),I.map===null||O===!0||B===!0){const nt=this.type!==ai?{minFilter:pn,magFilter:pn}:{};I.map!==null&&I.map.dispose(),I.map=new zn(s.x,s.y,nt),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const j=I.getViewportCount();for(let nt=0;nt<j;nt++){const vt=I.getViewport(nt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),N.viewport(a),I.updateMatrices(F,nt),n=I.getFrustum(),y(w,v,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===ai&&S(I,v),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,_,A)};function S(E,w){const v=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,v,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,v,d,x,null)}function b(E,w,v,M){let _=null;const A=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)_=A;else if(_=v.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=_.uuid,O=w.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let q=B[O];q===void 0&&(q=_.clone(),B[O]=q,w.addEventListener("dispose",C)),_=q}if(_.visible=w.visible,_.wireframe=w.wireframe,M===ai?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,v.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=v}return _}function y(E,w,v,M,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=t.update(E),B=E.material;if(Array.isArray(B)){const q=O.groups;for(let U=0,F=q.length;U<F;U++){const I=q[U],G=B[I.materialIndex];if(G&&G.visible){const j=b(E,G,M,_);E.onBeforeShadow(i,E,w,v,O,j,I),i.renderBufferDirect(v,null,O,j,E,I),E.onAfterShadow(i,E,w,v,O,j,I)}}}else if(B.visible){const q=b(E,B,M,_);E.onBeforeShadow(i,E,w,v,O,q,null),i.renderBufferDirect(v,null,O,q,E,null),E.onAfterShadow(i,E,w,v,O,q,null)}}const N=E.children;for(let O=0,B=N.length;O<B;O++)y(N[O],w,v,M,_)}function C(E){E.target.removeEventListener("dispose",C);for(const v in c){const M=c[v],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const XM={[Cl]:Pl,[Ll]:Ul,[Il]:Nl,[qs]:Dl,[Pl]:Cl,[Ul]:Ll,[Nl]:Il,[Dl]:qs};function qM(i,t){function e(){let k=!1;const _t=new ve;let $=null;const et=new ve(0,0,0,0);return{setMask:function(St){$!==St&&!k&&(i.colorMask(St,St,St,St),$=St)},setLocked:function(St){k=St},setClear:function(St,yt,Jt,Ce,We){We===!0&&(St*=Ce,yt*=Ce,Jt*=Ce),_t.set(St,yt,Jt,Ce),et.equals(_t)===!1&&(i.clearColor(St,yt,Jt,Ce),et.copy(_t))},reset:function(){k=!1,$=null,et.set(-1,0,0,0)}}}function n(){let k=!1,_t=!1,$=null,et=null,St=null;return{setReversed:function(yt){if(_t!==yt){const Jt=t.get("EXT_clip_control");_t?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=St;St=null,this.setClear(Ce)}_t=yt},getReversed:function(){return _t},setTest:function(yt){yt?it(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(yt){$!==yt&&!k&&(i.depthMask(yt),$=yt)},setFunc:function(yt){if(_t&&(yt=XM[yt]),et!==yt){switch(yt){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=yt}},setLocked:function(yt){k=yt},setClear:function(yt){St!==yt&&(_t&&(yt=1-yt),i.clearDepth(yt),St=yt)},reset:function(){k=!1,$=null,et=null,St=null,_t=!1}}}function s(){let k=!1,_t=null,$=null,et=null,St=null,yt=null,Jt=null,Ce=null,We=null;return{setTest:function(pe){k||(pe?it(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(pe){_t!==pe&&!k&&(i.stencilMask(pe),_t=pe)},setFunc:function(pe,Pn,Qn){($!==pe||et!==Pn||St!==Qn)&&(i.stencilFunc(pe,Pn,Qn),$=pe,et=Pn,St=Qn)},setOp:function(pe,Pn,Qn){(yt!==pe||Jt!==Pn||Ce!==Qn)&&(i.stencilOp(pe,Pn,Qn),yt=pe,Jt=Pn,Ce=Qn)},setLocked:function(pe){k=pe},setClear:function(pe){We!==pe&&(i.clearStencil(pe),We=pe)},reset:function(){k=!1,_t=null,$=null,et=null,St=null,yt=null,Jt=null,Ce=null,We=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,S=null,b=null,y=null,C=null,E=null,w=new Ht(0,0,0),v=0,M=!1,_=null,A=null,N=null,O=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),U=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),U=F>=2);let G=null,j={};const nt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Pt=new ve().fromArray(nt),W=new ve().fromArray(vt);function tt(k,_t,$,et){const St=new Uint8Array(4),yt=i.createTexture();i.bindTexture(k,yt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<$;Jt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(_t+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return yt}const ft={};ft[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(qs),ot(!1),Ct(yh),it(i.CULL_FACE),D(ui);function it(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function st(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function pt(k,_t){return u[k]!==_t?(i.bindFramebuffer(k,_t),u[k]=_t,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Et(k,_t){let $=d,et=!1;if(k){$=f.get(_t),$===void 0&&($=[],f.set(_t,$));const St=k.textures;if($.length!==St.length||$[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Jt=St.length;yt<Jt;yt++)$[yt]=i.COLOR_ATTACHMENT0+yt;$.length=St.length,et=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,et=!0);et&&i.drawBuffers($)}function Yt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const Q={[ns]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};Q[vm]=i.MIN,Q[Mm]=i.MAX;const ct={[_m]:i.ZERO,[ym]:i.ONE,[bm]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Rm]:i.SRC_ALPHA_SATURATE,[Tm]:i.DST_COLOR,[Em]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[Am]:i.ONE_MINUS_DST_COLOR,[wm]:i.ONE_MINUS_DST_ALPHA,[Cm]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Lm]:i.CONSTANT_ALPHA,[Im]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,_t,$,et,St,yt,Jt,Ce,We,pe){if(k===ui){x===!0&&(st(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),k!==mm){if(k!==p||pe!==M){if((m!==ns||y!==ns)&&(i.blendEquation(i.FUNC_ADD),m=ns,y=ns),pe)switch(k){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ze:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ze:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,b=null,C=null,E=null,w.set(0,0,0),v=0,p=k,M=pe}return}St=St||_t,yt=yt||$,Jt=Jt||et,(_t!==m||St!==y)&&(i.blendEquationSeparate(Q[_t],Q[St]),m=_t,y=St),($!==S||et!==b||yt!==C||Jt!==E)&&(i.blendFuncSeparate(ct[$],ct[et],ct[yt],ct[Jt]),S=$,b=et,C=yt,E=Jt),(Ce.equals(w)===!1||We!==v)&&(i.blendColor(Ce.r,Ce.g,Ce.b,We),w.copy(Ce),v=We),p=k,M=!1}function Ut(k,_t){k.side===He?st(i.CULL_FACE):it(i.CULL_FACE);let $=k.side===nn;_t&&($=!$),ot($),k.blending===Gs&&k.transparent===!1?D(ui):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const et=k.stencilWrite;o.setTest(et),et&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(k){_!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),_=k)}function Ct(k){k!==fm?(it(i.CULL_FACE),k!==A&&(k===yh?i.cullFace(i.BACK):k===pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),A=k}function mt(k){k!==N&&(U&&i.lineWidth(k),N=k)}function Gt(k,_t,$){k?(it(i.POLYGON_OFFSET_FILL),(O!==_t||B!==$)&&(i.polygonOffset(_t,$),O=_t,B=$)):st(i.POLYGON_OFFSET_FILL)}function wt(k){k?it(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+q-1),G!==k&&(i.activeTexture(k),G=k)}function T(k,_t,$){$===void 0&&(G===null?$=i.TEXTURE0+q-1:$=G);let et=j[$];et===void 0&&(et={type:void 0,texture:void 0},j[$]=et),(et.type!==k||et.texture!==_t)&&(G!==$&&(i.activeTexture($),G=$),i.bindTexture(k,_t||ft[k]),et.type=k,et.texture=_t)}function V(){const k=j[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(k){Pt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Pt.copy(k))}function It(k){W.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function re(k,_t){let $=c.get(_t);$===void 0&&($=new WeakMap,c.set(_t,$));let et=$.get(k);et===void 0&&(et=i.getUniformBlockIndex(_t,k.name),$.set(k,et))}function te(k,_t){const et=c.get(_t).get(k);l.get(_t)!==et&&(i.uniformBlockBinding(_t,et,k.__bindingPointIndex),l.set(_t,et))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,j={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,S=null,b=null,y=null,C=null,E=null,w=new Ht(0,0,0),v=0,M=!1,_=null,A=null,N=null,O=null,B=null,Pt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:st,bindFramebuffer:pt,drawBuffers:Et,useProgram:Yt,setBlending:D,setMaterial:Ut,setFlipSided:ot,setCullFace:Ct,setLineWidth:mt,setPolygonOffset:Gt,setScissorTest:wt,activeTexture:P,bindTexture:T,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:rt,texImage2D:Lt,texImage3D:Vt,updateUBOMapping:re,uniformBlockBinding:te,texStorage2D:se,texStorage3D:ht,texSubImage2D:J,texSubImage3D:Nt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Tt,scissor:Xt,viewport:It,reset:ye}}function mu(i,t,e,n){const s=YM(n);switch(e){case Vd:return i*t;case Xd:return i*t;case qd:return i*t*2;case Oc:return i*t/s.components*s.byteLength;case Fc:return i*t/s.components*s.byteLength;case Yd:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Wd:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case zl:case Gl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case oc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $d:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function YM(i){switch(i){case vi:case zd:return{byteLength:1,components:1};case Fr:case Hd:case di:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case hs:case Dc:case jn:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $M(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):ja("canvas")}function x(P,T,V){let Z=1;const rt=wt(P);if((rt.width>V||rt.height>V)&&(Z=V/Math.max(rt.width,rt.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Z*rt.width),Nt=Math.floor(Z*rt.height);u===void 0&&(u=g(J,Nt));const Mt=T?g(J,Nt):u;return Mt.width=J,Mt.height=Nt,Mt.getContext("2d").drawImage(P,0,0,J,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+J+"x"+Nt+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,T,V,Z,rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=T;if(T===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),T===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),T===i.RGBA){const Nt=rt?fo:ae.getTransfer(Z);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Nt===me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(P,T){let V;return P?T===null||T===hs||T===Ks?V=i.DEPTH24_STENCIL8:T===jn?V=i.DEPTH32F_STENCIL8:T===Fr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hs||T===Ks?V=i.DEPTH_COMPONENT24:T===jn?V=i.DEPTH_COMPONENT32F:T===Fr&&(V=i.DEPTH_COMPONENT16),V}function C(P,T){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==Jn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){const T=P.target;T.removeEventListener("dispose",E),v(T),T.isVideoTexture&&h.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),_(T)}function v(P){const T=n.get(P);if(T.__webglInit===void 0)return;const V=P.source,Z=f.get(V);if(Z){const rt=Z[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(P),Object.keys(Z).length===0&&f.delete(V)}n.remove(P)}function M(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const V=P.source,Z=f.get(V);delete Z[T.__cacheKey],a.memory.textures--}function _(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let rt=0;rt<T.__webglFramebuffer[Z].length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[Z][rt]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=P.textures;for(let Z=0,rt=V.length;Z<rt;Z++){const J=n.get(V[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(P)}let A=0;function N(){A=0}function O(){const P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function B(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function q(P,T){const V=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,P,T);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function U(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){W(V,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function F(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){W(V,P,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function I(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){tt(V,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const G={[kl]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},j={[pn]:i.NEAREST,[Om]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},nt={[zm]:i.NEVER,[qm]:i.ALWAYS,[Hm]:i.LESS,[Zd]:i.LEQUAL,[Gm]:i.EQUAL,[Xm]:i.GEQUAL,[Vm]:i.GREATER,[Wm]:i.NOTEQUAL};function vt(P,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Jn||T.magFilter===Uo||T.magFilter===Qr||T.magFilter===as||T.minFilter===Jn||T.minFilter===Uo||T.minFilter===Qr||T.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,G[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,G[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,G[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Qr&&T.minFilter!==as||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pt(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const Z=T.source;let rt=f.get(Z);rt===void 0&&(rt={},f.set(Z,rt));const J=B(T);if(J!==P.__cacheKey){rt[J]===void 0&&(rt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),rt[J].usedTimes++;const Nt=rt[P.__cacheKey];Nt!==void 0&&(rt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&M(T)),P.__cacheKey=J,P.__webglTexture=rt[J].texture}return V}function W(P,T,V){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const rt=Pt(P,T),J=T.source;e.bindTexture(Z,P.__webglTexture,i.TEXTURE0+V);const Nt=n.get(J);if(J.version!==Nt.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);const Mt=ae.getPrimaries(ae.workingColorSpace),Tt=T.colorSpace===Li?null:ae.getPrimaries(T.colorSpace),se=T.colorSpace===Li||Mt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ht=x(T.image,!1,s.maxTextureSize);ht=Gt(T,ht);const Lt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type);let Xt=b(T.internalFormat,Lt,Vt,T.colorSpace,T.isVideoTexture);vt(Z,T);let It;const re=T.mipmaps,te=T.isVideoTexture!==!0,ye=Nt.__version===void 0||rt===!0,k=J.dataReady,_t=C(T,ht);if(T.isDepthTexture)Xt=y(T.format===Zs,T.type),ye&&(te?e.texStorage2D(i.TEXTURE_2D,1,Xt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Xt,ht.width,ht.height,0,Lt,Vt,null));else if(T.isDataTexture)if(re.length>0){te&&ye&&e.texStorage2D(i.TEXTURE_2D,_t,Xt,re[0].width,re[0].height);for(let $=0,et=re.length;$<et;$++)It=re[$],te?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,Lt,Vt,It.data):e.texImage2D(i.TEXTURE_2D,$,Xt,It.width,It.height,0,Lt,Vt,It.data);T.generateMipmaps=!1}else te?(ye&&e.texStorage2D(i.TEXTURE_2D,_t,Xt,ht.width,ht.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Lt,Vt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,ht.width,ht.height,0,Lt,Vt,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Xt,re[0].width,re[0].height,ht.depth);for(let $=0,et=re.length;$<et;$++)if(It=re[$],T.format!==kn)if(Lt!==null)if(te){if(k)if(T.layerUpdates.size>0){const St=mu(It.width,It.height,T.format,T.type);for(const yt of T.layerUpdates){const Jt=It.data.subarray(yt*St/It.data.BYTES_PER_ELEMENT,(yt+1)*St/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,yt,It.width,It.height,1,Lt,Jt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,ht.depth,Lt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,It.width,It.height,ht.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,ht.depth,Lt,Vt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,It.width,It.height,ht.depth,0,Lt,Vt,It.data)}else{te&&ye&&e.texStorage2D(i.TEXTURE_2D,_t,Xt,re[0].width,re[0].height);for(let $=0,et=re.length;$<et;$++)It=re[$],T.format!==kn?Lt!==null?te?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,Lt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,Lt,Vt,It.data):e.texImage2D(i.TEXTURE_2D,$,Xt,It.width,It.height,0,Lt,Vt,It.data)}else if(T.isDataArrayTexture)if(te){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Xt,ht.width,ht.height,ht.depth),k)if(T.layerUpdates.size>0){const $=mu(ht.width,ht.height,T.format,T.type);for(const et of T.layerUpdates){const St=ht.data.subarray(et*$/ht.data.BYTES_PER_ELEMENT,(et+1)*$/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ht.width,ht.height,1,Lt,Vt,St)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Lt,Vt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,ht.width,ht.height,ht.depth,0,Lt,Vt,ht.data);else if(T.isData3DTexture)te?(ye&&e.texStorage3D(i.TEXTURE_3D,_t,Xt,ht.width,ht.height,ht.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Lt,Vt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,ht.width,ht.height,ht.depth,0,Lt,Vt,ht.data);else if(T.isFramebufferTexture){if(ye)if(te)e.texStorage2D(i.TEXTURE_2D,_t,Xt,ht.width,ht.height);else{let $=ht.width,et=ht.height;for(let St=0;St<_t;St++)e.texImage2D(i.TEXTURE_2D,St,Xt,$,et,0,Lt,Vt,null),$>>=1,et>>=1}}else if(re.length>0){if(te&&ye){const $=wt(re[0]);e.texStorage2D(i.TEXTURE_2D,_t,Xt,$.width,$.height)}for(let $=0,et=re.length;$<et;$++)It=re[$],te?k&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Lt,Vt,It):e.texImage2D(i.TEXTURE_2D,$,Xt,Lt,Vt,It);T.generateMipmaps=!1}else if(te){if(ye){const $=wt(ht);e.texStorage2D(i.TEXTURE_2D,_t,Xt,$.width,$.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Vt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Lt,Vt,ht);p(T)&&m(Z),Nt.__version=J.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function tt(P,T,V){if(T.image.length!==6)return;const Z=Pt(P,T),rt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const J=n.get(rt);if(rt.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);const Nt=ae.getPrimaries(ae.workingColorSpace),Mt=T.colorSpace===Li?null:ae.getPrimaries(T.colorSpace),Tt=T.colorSpace===Li||Nt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const se=T.isCompressedTexture||T.image[0].isCompressedTexture,ht=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let et=0;et<6;et++)!se&&!ht?Lt[et]=x(T.image[et],!0,s.maxCubemapSize):Lt[et]=ht?T.image[et].image:T.image[et],Lt[et]=Gt(T,Lt[et]);const Vt=Lt[0],Xt=r.convert(T.format,T.colorSpace),It=r.convert(T.type),re=b(T.internalFormat,Xt,It,T.colorSpace),te=T.isVideoTexture!==!0,ye=J.__version===void 0||Z===!0,k=rt.dataReady;let _t=C(T,Vt);vt(i.TEXTURE_CUBE_MAP,T);let $;if(se){te&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,re,Vt.width,Vt.height);for(let et=0;et<6;et++){$=Lt[et].mipmaps;for(let St=0;St<$.length;St++){const yt=$[St];T.format!==kn?Xt!==null?te?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,re,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,yt.width,yt.height,Xt,It,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,re,yt.width,yt.height,0,Xt,It,yt.data)}}}else{if($=T.mipmaps,te&&ye){$.length>0&&_t++;const et=wt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,re,et.width,et.height)}for(let et=0;et<6;et++)if(ht){te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt[et].width,Lt[et].height,Xt,It,Lt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,Lt[et].width,Lt[et].height,0,Xt,It,Lt[et].data);for(let St=0;St<$.length;St++){const Jt=$[St].image[et].image;te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Jt.width,Jt.height,Xt,It,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,re,Jt.width,Jt.height,0,Xt,It,Jt.data)}}else{te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Xt,It,Lt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,re,Xt,It,Lt[et]);for(let St=0;St<$.length;St++){const yt=$[St];te?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,Xt,It,yt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,re,Xt,It,yt.image[et])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),J.__version=rt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,V,Z,rt,J){const Nt=r.convert(V.format,V.colorSpace),Mt=r.convert(V.type),Tt=b(V.internalFormat,Nt,Mt,V.colorSpace),se=n.get(T),ht=n.get(V);if(ht.__renderTarget=T,!se.__hasExternalTextures){const Lt=Math.max(1,T.width>>J),Vt=Math.max(1,T.height>>J);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,J,Tt,Lt,Vt,T.depth,0,Nt,Mt,null):e.texImage2D(rt,J,Tt,Lt,Vt,0,Nt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ct(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,rt,ht.__webglTexture,0,ot(T)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,rt,ht.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const Z=T.depthTexture,rt=Z&&Z.isDepthTexture?Z.type:null,J=y(T.stencilBuffer,rt),Nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=ot(T);Ct(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,J,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,P)}else{const Z=T.textures;for(let rt=0;rt<Z.length;rt++){const J=Z[rt],Nt=r.convert(J.format,J.colorSpace),Mt=r.convert(J.type),Tt=b(J.internalFormat,Nt,Mt,J.colorSpace),se=ot(T);V&&Ct(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Tt,T.width,T.height):Ct(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Tt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const rt=Z.__webglTexture,J=ot(T);if(T.depthTexture.format===Vs)Ct(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(T.depthTexture.format===Zs)Ct(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function pt(P){const T=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",rt)};Z.addEventListener("dispose",rt),T.__depthDisposeCallback=rt}T.__boundDepthTexture=Z}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");st(T.__webglFramebuffer,P)}else if(V){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),it(T.__webglDepthbuffer[Z],P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),it(T.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,T,V){const Z=n.get(P);T!==void 0&&ft(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&pt(P)}function Yt(P){const T=P.texture,V=n.get(P),Z=n.get(T);P.addEventListener("dispose",w);const rt=P.textures,J=P.isWebGLCubeRenderTarget===!0,Nt=rt.length>1;if(Nt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[Mt]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)V.__webglFramebuffer[Mt][Tt]=i.createFramebuffer()}else V.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)V.__webglFramebuffer[Mt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let Mt=0,Tt=rt.length;Mt<Tt;Mt++){const se=n.get(rt[Mt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ct(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Mt=0;Mt<rt.length;Mt++){const Tt=rt[Mt];V.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Mt]);const se=r.convert(Tt.format,Tt.colorSpace),ht=r.convert(Tt.type),Lt=b(Tt.internalFormat,se,ht,Tt.colorSpace,P.isXRRenderTarget===!0),Vt=ot(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),it(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),vt(i.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)ft(V.__webglFramebuffer[Mt][Tt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Tt);else ft(V.__webglFramebuffer[Mt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);p(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let Mt=0,Tt=rt.length;Mt<Tt;Mt++){const se=rt[Mt],ht=n.get(se);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),vt(i.TEXTURE_2D,se),ft(V.__webglFramebuffer,P,se,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),p(se)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Z.__webglTexture),vt(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)ft(V.__webglFramebuffer[Tt],P,T,i.COLOR_ATTACHMENT0,Mt,Tt);else ft(V.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Mt,0);p(T)&&m(Mt),e.unbindTexture()}P.depthBuffer&&pt(P)}function Q(P){const T=P.textures;for(let V=0,Z=T.length;V<Z;V++){const rt=T[V];if(p(rt)){const J=S(P),Nt=n.get(rt).__webglTexture;e.bindTexture(J,Nt),m(J),e.unbindTexture()}}}const ct=[],D=[];function Ut(P){if(P.samples>0){if(Ct(P)===!1){const T=P.textures,V=P.width,Z=P.height;let rt=i.COLOR_BUFFER_BIT;const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(P),Mt=T.length>1;if(Mt)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const se=n.get(T[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,rt,i.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(i.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const se=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ot(P){return Math.min(s.maxSamples,P.samples)}function Ct(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function mt(P){const T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Gt(P,T){const V=P.colorSpace,Z=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ir&&V!==Li&&(ae.getTransfer(V)===me?(Z!==kn||rt!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=I,this.rebindTextures=Et,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ct}function KM(i,t){function e(n,s=Li){let r;const a=ae.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return i.BYTE;if(n===Hd)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===di)return i.HALF_FLOAT;if(n===Vd)return i.ALPHA;if(n===Wd)return i.RGB;if(n===kn)return i.RGBA;if(n===Xd)return i.LUMINANCE;if(n===qd)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===Yd)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Ba||n===za||n===Ha||n===Ga)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Gl||n===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===oc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$d||n===cc||n===hc||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ZM extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:jM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends sr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=new t_,p=e.getContextAttributes();let m=null,S=null;const b=[],y=[],C=new K;let E=null;const w=new tn;w.viewport=new ve;const v=new tn;v.viewport=new ve;const M=[w,v],_=new ZM;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=b[W];return tt===void 0&&(tt=new cl,b[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=b[W];return tt===void 0&&(tt=new cl,b[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=b[W];return tt===void 0&&(tt=new cl,b[W]=tt),tt.getHandSpace()};function O(W){const tt=y.indexOf(W.inputSource);if(tt===-1)return;const ft=b[tt];ft!==void 0&&(ft.update(W.inputSource,W.frame,c||a),ft.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let W=0;W<b.length;W++){const tt=y[W];tt!==null&&(y[W]=null,b[W].disconnect(tt))}A=null,N=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,S=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new zn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ft=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Zs:Vs,ft=p.stencil?Ks:hs);const st={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(st),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new zn(f.textureWidth,f.textureHeight,{format:kn,type:vi,depthTexture:new lf(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(W){for(let tt=0;tt<W.removed.length;tt++){const ft=W.removed[tt],it=y.indexOf(ft);it>=0&&(y[it]=null,b[it].disconnect(ft))}for(let tt=0;tt<W.added.length;tt++){const ft=W.added[tt];let it=y.indexOf(ft);if(it===-1){for(let pt=0;pt<b.length;pt++)if(pt>=y.length){y.push(ft),it=pt;break}else if(y[pt]===null){y[pt]=ft,it=pt;break}if(it===-1)break}const st=b[it];st&&st.connect(ft)}}const U=new L,F=new L;function I(W,tt,ft){U.setFromMatrixPosition(tt.matrixWorld),F.setFromMatrixPosition(ft.matrixWorld);const it=U.distanceTo(F),st=tt.projectionMatrix.elements,pt=ft.projectionMatrix.elements,Et=st[14]/(st[10]-1),Yt=st[14]/(st[10]+1),Q=(st[9]+1)/st[5],ct=(st[9]-1)/st[5],D=(st[8]-1)/st[0],Ut=(pt[8]+1)/pt[0],ot=Et*D,Ct=Et*Ut,mt=it/(-D+Ut),Gt=mt*-D;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Gt),W.translateZ(mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),st[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Et+mt,P=Yt+mt,T=ot-Gt,V=Ct+(it-Gt),Z=Q*Yt/P*wt,rt=ct*Yt/P*wt;W.projectionMatrix.makePerspective(T,V,Z,rt,wt,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function G(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,ft=W.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),_.near=v.near=w.near=tt,_.far=v.far=w.far=ft,(A!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,N=_.far),w.layers.mask=W.layers.mask|2,v.layers.mask=W.layers.mask|4,_.layers.mask=w.layers.mask|v.layers.mask;const it=W.parent,st=_.cameras;G(_,it);for(let pt=0;pt<st.length;pt++)G(st[pt],it);st.length===2?I(_,w,v):_.projectionMatrix.copy(w.projectionMatrix),j(W,_,it)};function j(W,tt,ft){ft===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(ft.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let nt=null;function vt(W,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const ft=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let it=!1;ft.length!==_.cameras.length&&(_.cameras.length=0,it=!0);for(let pt=0;pt<ft.length;pt++){const Et=ft[pt];let Yt=null;if(d!==null)Yt=d.getViewport(Et);else{const ct=u.getViewSubImage(f,Et);Yt=ct.viewport,pt===0&&(t.setRenderTargetTextures(S,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(S))}let Q=M[pt];Q===void 0&&(Q=new tn,Q.layers.enable(pt),Q.viewport=new ve,M[pt]=Q),Q.matrix.fromArray(Et.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Et.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),pt===0&&(_.matrix.copy(Q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),it===!0&&_.cameras.push(Q)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){const pt=u.getDepthInformation(ft[0]);pt&&pt.isValid&&pt.texture&&x.init(t,pt,s.renderState)}}for(let ft=0;ft<b.length;ft++){const it=y[ft],st=b[ft];it!==null&&st!==void 0&&st.update(it,tt,c||a)}nt&&nt(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Pt=new of;Pt.setAnimationLoop(vt),this.setAnimationLoop=function(W){nt=W},this.dispose=function(){}}}const Zi=new Hn,n_=new oe;function i_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),b=S.envMap,y=S.envMapRotation;b&&(p.envMap.value=b,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Zi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function c(S,b){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",p));const C=b.program;n.updateUBOMapping(S,C);const E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function h(S){const b=u();S.__bindingPointIndex=b;const y=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,w=y.length;E<w;E++){const v=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,_=v.length;M<_;M++){const A=v[M];if(d(A,E,M,C)===!0){const N=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let q=0;q<O.length;q++){const U=O[q],F=x(U);typeof U=="number"||typeof U=="boolean"?(A.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+B,A.__data)):U.isMatrix3?(A.__data[0]=U.elements[0],A.__data[1]=U.elements[1],A.__data[2]=U.elements[2],A.__data[3]=0,A.__data[4]=U.elements[3],A.__data[5]=U.elements[4],A.__data[6]=U.elements[5],A.__data[7]=0,A.__data[8]=U.elements[6],A.__data[9]=U.elements[7],A.__data[10]=U.elements[8],A.__data[11]=0):(U.toArray(A.__data,B),B+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,y,C){const E=S.value,w=b+"_"+y;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const v=C[w];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return C[w]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function g(S){const b=S.uniforms;let y=0;const C=16;for(let w=0,v=b.length;w<v;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let _=0,A=M.length;_<A;_++){const N=M[_],O=Array.isArray(N.value)?N.value:[N.value];for(let B=0,q=O.length;B<q;B++){const U=O[B],F=x(U),I=y%C,G=I%F.boundary,j=I+G;y+=G,j!==0&&C-j<F.storage&&(y+=C-j),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}const E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class r_{constructor(t={}){const{canvas:e=$m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Di,this.toneMappingExposure=1;const y=this;let C=!1,E=0,w=0,v=null,M=-1,_=null;const A=new ve,N=new ve;let O=null;const B=new Ht(0);let q=0,U=e.width,F=e.height,I=1,G=null,j=null;const nt=new ve(0,0,U,F),vt=new ve(0,0,U,F);let Pt=!1;const W=new Hc;let tt=!1,ft=!1;const it=new oe,st=new oe,pt=new L,Et=new ve,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ct(){return v===null?I:1}let D=n;function Ut(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",yt,!1),D===null){const z="webgl2";if(D=Ut(z,R),D===null)throw Ut(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,Ct,mt,Gt,wt,P,T,V,Z,rt,J,Nt,Mt,Tt,se,ht,Lt,Vt,Xt,It,re,te,ye,k;function _t(){ot=new hv(D),ot.init(),te=new KM(D,ot),Ct=new sv(D,ot,t,te),mt=new qM(D,ot),Ct.reverseDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),Gt=new fv(D),wt=new LM,P=new $M(D,ot,mt,wt,Ct,te,Gt),T=new av(y),V=new cv(y),Z=new _0(D),ye=new nv(D,Z),rt=new uv(D,Z,Gt,ye),J=new mv(D,rt,Z,Gt),Xt=new pv(D,Ct,P),ht=new rv(wt),Nt=new PM(y,T,V,ot,Ct,ye,ht),Mt=new i_(y,wt),Tt=new DM,se=new BM(ot),Vt=new ev(y,T,V,mt,J,d,l),Lt=new WM(y,J,Ct),k=new s_(D,Gt,Ct,mt),It=new iv(D,ot,Gt),re=new dv(D,ot,Gt),Gt.programs=Nt.programs,y.capabilities=Ct,y.extensions=ot,y.properties=wt,y.renderLists=Tt,y.shadowMap=Lt,y.state=mt,y.info=Gt}_t();const $=new e_(y,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(U,F,!1))},this.getSize=function(R){return R.set(U,F)},this.setSize=function(R,z,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,F=z,e.width=Math.floor(R*I),e.height=Math.floor(z*I),X===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(U*I,F*I).floor()},this.setDrawingBufferSize=function(R,z,X){U=R,F=z,I=X,e.width=Math.floor(R*X),e.height=Math.floor(z*X),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,z,X,Y){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,z,X,Y),mt.viewport(A.copy(nt).multiplyScalar(I).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,z,X,Y){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,z,X,Y),mt.scissor(N.copy(vt).multiplyScalar(I).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(R){mt.setScissorTest(Pt=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(R=!0,z=!0,X=!0){let Y=0;if(R){let H=!1;if(v!==null){const ut=v.texture.format;H=ut===Bc||ut===kc||ut===Fc}if(H){const ut=v.texture.type,bt=ut===vi||ut===hs||ut===Fr||ut===Ks||ut===Uc||ut===Nc,Ot=Vt.getClearColor(),Ft=Vt.getClearAlpha(),$t=Ot.r,jt=Ot.g,kt=Ot.b;bt?(g[0]=$t,g[1]=jt,g[2]=kt,g[3]=Ft,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=$t,x[1]=jt,x[2]=kt,x[3]=Ft,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Tt.dispose(),se.dispose(),wt.dispose(),T.dispose(),V.dispose(),J.dispose(),ye.dispose(),k.dispose(),Nt.dispose(),$.dispose(),$.removeEventListener("sessionstart",eh),$.removeEventListener("sessionend",nh),Wi.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=Gt.autoReset,z=Lt.enabled,X=Lt.autoUpdate,Y=Lt.needsUpdate,H=Lt.type;_t(),Gt.autoReset=R,Lt.enabled=z,Lt.autoUpdate=X,Lt.needsUpdate=Y,Lt.type=H}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jt(R){const z=R.target;z.removeEventListener("dispose",Jt),Ce(z)}function Ce(R){We(R),wt.remove(R)}function We(R){const z=wt.get(R).programs;z!==void 0&&(z.forEach(function(X){Nt.releaseProgram(X)}),R.isShaderMaterial&&Nt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,X,Y,H,ut){z===null&&(z=Yt);const bt=H.isMesh&&H.matrixWorld.determinant()<0,Ot=$f(R,z,X,Y,H);mt.setMaterial(Y,bt);let Ft=X.index,$t=1;if(Y.wireframe===!0){if(Ft=rt.getWireframeAttribute(X),Ft===void 0)return;$t=2}const jt=X.drawRange,kt=X.attributes.position;let le=jt.start*$t,be=(jt.start+jt.count)*$t;ut!==null&&(le=Math.max(le,ut.start*$t),be=Math.min(be,(ut.start+ut.count)*$t)),Ft!==null?(le=Math.max(le,0),be=Math.min(be,Ft.count)):kt!=null&&(le=Math.max(le,0),be=Math.min(be,kt.count));const Se=be-le;if(Se<0||Se===1/0)return;ye.setup(H,Y,Ot,X,Ft);let rn,de=It;if(Ft!==null&&(rn=Z.get(Ft),de=re,de.setIndex(rn)),H.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*ct()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(H.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),mt.setLineWidth(Bt*ct()),H.isLineSegments?de.setMode(D.LINES):H.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else H.isPoints?de.setMode(D.POINTS):H.isSprite&&de.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)de.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Bt=H._multiDrawStarts,ti=H._multiDrawCounts,fe=H._multiDrawCount,Ln=Ft?Z.get(Ft).bytesPerElement:1,xs=wt.get(Y).currentProgram.getUniforms();for(let hn=0;hn<fe;hn++)xs.setValue(D,"_gl_DrawID",hn),de.render(Bt[hn]/Ln,ti[hn])}else if(H.isInstancedMesh)de.renderInstances(le,Se,H.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ti=Math.min(X.instanceCount,Bt);de.renderInstances(le,Se,ti)}else de.render(le,Se)};function pe(R,z,X){R.transparent===!0&&R.side===He&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,jr(R,z,X),R.side=Ui,R.needsUpdate=!0,jr(R,z,X),R.side=He):jr(R,z,X)}this.compile=function(R,z,X=null){X===null&&(X=R),m=se.get(X),m.init(z),b.push(m),X.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==X&&R.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const Y=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ut=H.material;if(ut)if(Array.isArray(ut))for(let bt=0;bt<ut.length;bt++){const Ot=ut[bt];pe(Ot,X,H),Y.add(Ot)}else pe(ut,X,H),Y.add(ut)}),b.pop(),m=null,Y},this.compileAsync=function(R,z,X=null){const Y=this.compile(R,z,X);return new Promise(H=>{function ut(){if(Y.forEach(function(bt){wt.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){H(R);return}setTimeout(ut,10)}ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Pn=null;function Qn(R){Pn&&Pn(R)}function eh(){Wi.stop()}function nh(){Wi.start()}const Wi=new of;Wi.setAnimationLoop(Qn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){Pn=R,$.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},$.addEventListener("sessionstart",eh),$.addEventListener("sessionend",nh),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,z,v),m=se.get(R,b.length),m.init(z),b.push(m),st.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(st),ft=this.localClippingEnabled,tt=ht.init(this.clippingPlanes,ft),p=Tt.get(R,S.length),p.init(),S.push(p),$.enabled===!0&&$.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&Ro(ut,z,-1/0,y.sortObjects)}Ro(R,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(G,j),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Vt.addToRenderList(p,R),this.info.render.frame++,tt===!0&&ht.beginShadows();const X=m.state.shadowsArray;Lt.render(X,R,z),tt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,H=p.transmissive;if(m.setupLights(),z.isArrayCamera){const ut=z.cameras;if(H.length>0)for(let bt=0,Ot=ut.length;bt<Ot;bt++){const Ft=ut[bt];sh(Y,H,R,Ft)}Q&&Vt.render(R);for(let bt=0,Ot=ut.length;bt<Ot;bt++){const Ft=ut[bt];ih(p,R,Ft,Ft.viewport)}}else H.length>0&&sh(Y,H,R,z),Q&&Vt.render(R),ih(p,R,z);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(y,R,z),ye.resetDefaultState(),M=-1,_=null,b.pop(),b.length>0?(m=b[b.length-1],tt===!0&&ht.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ro(R,z,X,Y){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){Y&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);const bt=J.update(R),Ot=R.material;Ot.visible&&p.push(R,bt,Ot,X,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const bt=J.update(R),Ot=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Et.copy(bt.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(Ot)){const Ft=bt.groups;for(let $t=0,jt=Ft.length;$t<jt;$t++){const kt=Ft[$t],le=Ot[kt.materialIndex];le&&le.visible&&p.push(R,bt,le,X,Et.z,kt)}}else Ot.visible&&p.push(R,bt,Ot,X,Et.z,null)}}const ut=R.children;for(let bt=0,Ot=ut.length;bt<Ot;bt++)Ro(ut[bt],z,X,Y)}function ih(R,z,X,Y){const H=R.opaque,ut=R.transmissive,bt=R.transparent;m.setupLightsView(X),tt===!0&&ht.setGlobalState(y.clippingPlanes,X),Y&&mt.viewport(A.copy(Y)),H.length>0&&Jr(H,z,X),ut.length>0&&Jr(ut,z,X),bt.length>0&&Jr(bt,z,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function sh(R,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?di:vi,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ut=m.state.transmissionRenderTarget[Y.id],bt=Y.viewport||A;ut.setSize(bt.z,bt.w);const Ot=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(B),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Q&&Vt.render(X);const Ft=y.toneMapping;y.toneMapping=Di;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),tt===!0&&ht.setGlobalState(y.clippingPlanes,Y),Jr(R,X,Y),P.updateMultisampleRenderTarget(ut),P.updateRenderTargetMipmap(ut),ot.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,le=z.length;kt<le;kt++){const be=z[kt],Se=be.object,rn=be.geometry,de=be.material,Bt=be.group;if(de.side===He&&Se.layers.test(Y.layers)){const ti=de.side;de.side=nn,de.needsUpdate=!0,rh(Se,X,Y,rn,de,Bt),de.side=ti,de.needsUpdate=!0,jt=!0}}jt===!0&&(P.updateMultisampleRenderTarget(ut),P.updateRenderTargetMipmap(ut))}y.setRenderTarget(Ot),y.setClearColor(B,q),$t!==void 0&&(Y.viewport=$t),y.toneMapping=Ft}function Jr(R,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ut=R.length;H<ut;H++){const bt=R[H],Ot=bt.object,Ft=bt.geometry,$t=Y===null?bt.material:Y,jt=bt.group;Ot.layers.test(X.layers)&&rh(Ot,z,X,Ft,$t,jt)}}function rh(R,z,X,Y,H,ut){R.onBeforeRender(y,z,X,Y,H,ut),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(y,z,X,Y,R,ut),H.transparent===!0&&H.side===He&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,y.renderBufferDirect(X,z,Y,H,R,ut),H.side=Ui,H.needsUpdate=!0,y.renderBufferDirect(X,z,Y,H,R,ut),H.side=He):y.renderBufferDirect(X,z,Y,H,R,ut),R.onAfterRender(y,z,X,Y,H,ut)}function jr(R,z,X){z.isScene!==!0&&(z=Yt);const Y=wt.get(R),H=m.state.lights,ut=m.state.shadowsArray,bt=H.state.version,Ot=Nt.getParameters(R,H.state,ut,z,X),Ft=Nt.getProgramCacheKey(Ot);let $t=Y.programs;Y.environment=R.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(R.isMeshStandardMaterial?V:T).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Jt),$t=new Map,Y.programs=$t);let jt=$t.get(Ft);if(jt!==void 0){if(Y.currentProgram===jt&&Y.lightsStateVersion===bt)return oh(R,Ot),jt}else Ot.uniforms=Nt.getUniforms(R),R.onBeforeCompile(Ot,y),jt=Nt.acquireProgram(Ot,Ft),$t.set(Ft,jt),Y.uniforms=Ot.uniforms;const kt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=ht.uniform),oh(R,Ot),Y.needsLights=Zf(R),Y.lightsStateVersion=bt,Y.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=jt,Y.uniformsList=null,jt}function ah(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Wa.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function oh(R,z){const X=wt.get(R);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function $f(R,z,X,Y,H){z.isScene!==!0&&(z=Yt),P.resetTextureUnits();const ut=z.fog,bt=Y.isMeshStandardMaterial?z.environment:null,Ot=v===null?y.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:ir,Ft=(Y.isMeshStandardMaterial?V:T).get(Y.envMap||bt),$t=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,be=!!X.morphAttributes.color;let Se=Di;Y.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Se=y.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=rn!==void 0?rn.length:0,Bt=wt.get(Y),ti=m.state.lights;if(tt===!0&&(ft===!0||R!==_)){const gn=R===_&&Y.id===M;ht.setState(Y,R,gn)}let fe=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ti.state.version||Bt.outputColorSpace!==Ot||H.isBatchedMesh&&Bt.batching===!1||!H.isBatchedMesh&&Bt.batching===!0||H.isBatchedMesh&&Bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Bt.instancing===!1||!H.isInstancedMesh&&Bt.instancing===!0||H.isSkinnedMesh&&Bt.skinning===!1||!H.isSkinnedMesh&&Bt.skinning===!0||H.isInstancedMesh&&Bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Bt.instancingMorph===!1&&H.morphTexture!==null||Bt.envMap!==Ft||Y.fog===!0&&Bt.fog!==ut||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==$t||Bt.vertexTangents!==jt||Bt.morphTargets!==kt||Bt.morphNormals!==le||Bt.morphColors!==be||Bt.toneMapping!==Se||Bt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Bt.__version=Y.version);let Ln=Bt.currentProgram;fe===!0&&(Ln=jr(Y,z,H));let xs=!1,hn=!1,lr=!1;const Ee=Ln.getUniforms(),Wn=Bt.uniforms;if(mt.useProgram(Ln.program)&&(xs=!0,hn=!0,lr=!0),Y.id!==M&&(M=Y.id,hn=!0),xs||_!==R){mt.buffers.depth.getReversed()?(it.copy(R.projectionMatrix),Zm(it),Jm(it),Ee.setValue(D,"projectionMatrix",it)):Ee.setValue(D,"projectionMatrix",R.projectionMatrix),Ee.setValue(D,"viewMatrix",R.matrixWorldInverse);const Mi=Ee.map.cameraPosition;Mi!==void 0&&Mi.setValue(D,pt.setFromMatrixPosition(R.matrixWorld)),Ct.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,hn=!0,lr=!0)}if(H.isSkinnedMesh){Ee.setOptional(D,H,"bindMatrix"),Ee.setOptional(D,H,"bindMatrixInverse");const gn=H.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ee.setValue(D,"boneTexture",gn.boneTexture,P))}H.isBatchedMesh&&(Ee.setOptional(D,H,"batchingTexture"),Ee.setValue(D,"batchingTexture",H._matricesTexture,P),Ee.setOptional(D,H,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",H._indirectTexture,P),Ee.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",H._colorsTexture,P));const cr=X.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Xt.update(H,X,Ln),(hn||Bt.receiveShadow!==H.receiveShadow)&&(Bt.receiveShadow=H.receiveShadow,Ee.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wn.envMap.value=Ft,Wn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Wn.envMapIntensity.value=z.environmentIntensity),hn&&(Ee.setValue(D,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&Kf(Wn,lr),ut&&Y.fog===!0&&Mt.refreshFogUniforms(Wn,ut),Mt.refreshMaterialUniforms(Wn,Y,I,F,m.state.transmissionRenderTarget[R.id]),Wa.upload(D,ah(Bt),Wn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wa.upload(D,ah(Bt),Wn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(D,"center",H.center),Ee.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(D,"normalMatrix",H.normalMatrix),Ee.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const gn=Y.uniformsGroups;for(let Mi=0,_i=gn.length;Mi<_i;Mi++){const lh=gn[Mi];k.update(lh,Ln),k.bind(lh,Ln)}}return Ln}function Kf(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Zf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,z,X){wt.get(R.texture).__webglTexture=z,wt.get(R.depthTexture).__webglTexture=X;const Y=wt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const X=wt.get(R);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,X=0){v=R,E=z,w=X;let Y=!0,H=null,ut=!1,bt=!1;if(R){const Ft=wt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ft.__hasExternalTextures)P.rebindTextures(R,wt.get(R.texture).__webglTexture,wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&wt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);const jt=wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[z])?H=jt[z][X]:H=jt[z],ut=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?H=wt.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?H=jt[X]:H=jt,A.copy(R.viewport),N.copy(R.scissor),O=R.scissorTest}else A.copy(nt).multiplyScalar(I).floor(),N.copy(vt).multiplyScalar(I).floor(),O=Pt;if(mt.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&mt.drawBuffers(R,H),mt.viewport(A),mt.scissor(N),mt.setScissorTest(O),ut){const Ft=wt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ft.__webglTexture,X)}else if(bt){const Ft=wt.get(R.texture),$t=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,X||0,$t)}M=-1},this.readRenderTargetPixels=function(R,z,X,Y,H,ut,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){mt.bindFramebuffer(D.FRAMEBUFFER,Ot);try{const Ft=R.texture,$t=Ft.format,jt=Ft.type;if(!Ct.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Y&&X>=0&&X<=R.height-H&&D.readPixels(z,X,Y,H,te.convert($t),te.convert(jt),ut)}finally{const Ft=v!==null?wt.get(v).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,z,X,Y,H,ut,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Ft=R.texture,$t=Ft.format,jt=Ft.type;if(!Ct.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-Y&&X>=0&&X<=R.height-H){mt.bindFramebuffer(D.FRAMEBUFFER,Ot);const kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(z,X,Y,H,te.convert($t),te.convert(jt),0);const le=v!==null?wt.get(v).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,le);const be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Km(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(kt),D.deleteSync(be),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,X=0){R.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-X),H=Math.floor(R.image.width*Y),ut=Math.floor(R.image.height*Y),bt=z!==null?z.x:0,Ot=z!==null?z.y:0;P.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,bt,Ot,H,ut),mt.unbindTexture()},this.copyTextureToTexture=function(R,z,X=null,Y=null,H=0){R.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],z=arguments[2],H=arguments[3]||0,X=null);let ut,bt,Ot,Ft,$t,jt,kt,le,be;const Se=R.isCompressedTexture?R.mipmaps[H]:R.image;X!==null?(ut=X.max.x-X.min.x,bt=X.max.y-X.min.y,Ot=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,$t=X.min.y,jt=X.isBox3?X.min.z:0):(ut=Se.width,bt=Se.height,Ot=Se.depth||1,Ft=0,$t=0,jt=0),Y!==null?(kt=Y.x,le=Y.y,be=Y.z):(kt=0,le=0,be=0);const rn=te.convert(z.format),de=te.convert(z.type);let Bt;z.isData3DTexture?(P.setTexture3D(z,0),Bt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Bt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ti=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter(D.UNPACK_SKIP_PIXELS),xs=D.getParameter(D.UNPACK_SKIP_ROWS),hn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt);const lr=R.isDataArrayTexture||R.isData3DTexture,Ee=z.isDataArrayTexture||z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Wn=wt.get(R),cr=wt.get(z),gn=wt.get(Wn.__renderTarget),Mi=wt.get(cr.__renderTarget);mt.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let _i=0;_i<Ot;_i++)lr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(R).__webglTexture,H,jt+_i),R.isDepthTexture?(Ee&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(z).__webglTexture,H,be+_i),D.blitFramebuffer(Ft,$t,ut,bt,kt,le,ut,bt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ee?D.copyTexSubImage3D(Bt,H,kt,le,be+_i,Ft,$t,ut,bt):D.copyTexSubImage2D(Bt,H,kt,le,be+_i,Ft,$t,ut,bt);mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Bt,H,kt,le,be,ut,bt,Ot,rn,de,Se.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,H,kt,le,be,ut,bt,Ot,rn,Se.data):D.texSubImage3D(Bt,H,kt,le,be,ut,bt,Ot,rn,de,Se):R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,kt,le,ut,bt,rn,de,Se.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,kt,le,Se.width,Se.height,rn,Se.data):D.texSubImage2D(D.TEXTURE_2D,H,kt,le,ut,bt,rn,de,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,ti),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,xs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hn),H===0&&z.generateMipmaps&&D.generateMipmap(Bt),mt.unbindTexture()},this.copyTextureToTexture3D=function(R,z,X=null,Y=null,H=0){return R.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],z=arguments[3],H=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,X,Y,H)},this.initRenderTarget=function(R){wt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){E=0,w=0,v=null,mt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class to extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class a_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new L;class eo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mc extends Gi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const pr=new L,Ds=new L,Us=new L,Ns=new K,mr=new K,ff=new oe,_a=new L,gr=new L,ya=new L,gu=new K,hl=new K,xu=new K;class vu extends Pe{constructor(t=new mc){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new a_(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new eo(n,3,0,!1)),Is.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ba(_a.set(-.5,-.5,0),Us,a,Ds,s,r),ba(gr.set(.5,-.5,0),Us,a,Ds,s,r),ba(ya.set(.5,.5,0),Us,a,Ds,s,r),gu.set(0,0),hl.set(1,0),xu.set(1,1);let o=t.ray.intersectTriangle(_a,gr,ya,!1,pr);if(o===null&&(ba(gr.set(-.5,.5,0),Us,a,Ds,s,r),hl.set(0,1),o=t.ray.intersectTriangle(_a,ya,gr,!1,pr),o===null))return;const l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:bn.getInterpolation(pr,_a,gr,ya,gu,hl,xu,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ba(i,t,e,n,s,r){Ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ns.x-s*Ns.y,mr.y=s*Ns.x+r*Ns.y):mr.copy(Ns),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(ff)}class o_ extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=pn,h=pn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new oe,_u=new oe,Sa=[],yu=new zi,l_=new oe,xr=new lt,vr=new Hi;class pf extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,l_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),yu.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),vr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),_u.multiplyMatrices(n,Os),xr.matrixWorld=_u,xr.raycast(t,Sa);for(let a=0,o=Sa.length;a<o;a++){const l=Sa[a];l.instanceId=r,l.object=this,e.push(l)}Sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new o_(new Float32Array(s*this.count),s,this.count,Oc,jn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wc extends Gi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const no=new L,io=new L,bu=new oe,Mr=new po,Ea=new Hi,ul=new L,Su=new L;class mf extends Pe{constructor(t=new _e,e=new Wc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)no.fromBufferAttribute(e,s-1),io.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=no.distanceTo(io);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;bu.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(bu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=h.getX(x),S=h.getX(x+1),b=wa(this,t,Mr,l,m,S);b&&e.push(b)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(d),m=wa(this,t,Mr,l,x,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,p=g-1;x<p;x+=c){const m=wa(this,t,Mr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=wa(this,t,Mr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wa(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(no.fromBufferAttribute(a,s),io.fromBufferAttribute(a,r),e.distanceSqToSegment(no,io,ul,Su)>n)return;ul.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ul);if(!(l<t.near||l>t.far))return{distance:l,point:Su.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Eu=new L,wu=new L;class c_ extends mf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),wu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(wu);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gf extends Gi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tu=new oe,gc=new po,Ta=new Hi,Aa=new L;class h_ extends Pe{constructor(t=new _e,e=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Tu.copy(s).invert(),gc.copy(t.ray).applyMatrix4(Tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){const p=c.getX(g);Aa.fromBufferAttribute(u,p),Au(Aa,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Aa.fromBufferAttribute(u,g),Au(Aa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Au(i,t,e,n,s,r,a){const o=gc.distanceSqToPoint(i);if(o<e){const l=new L;gc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xc extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new K:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,l=new oe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qc extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new K){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u_ extends qc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ra=new L,dl=new Yc,fl=new Yc,pl=new Yc;class d_ extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),c=Ra);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),dl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),fl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),pl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),pl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(dl.calc(l),fl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ru(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function f_(i,t){const e=1-i;return e*e*t}function p_(i,t){return 2*(1-i)*i*t}function m_(i,t){return i*i*t}function Cr(i,t,e,n){return f_(i,t)+p_(i,e)+m_(i,n)}function g_(i,t){const e=1-i;return e*e*e*t}function x_(i,t){const e=1-i;return 3*e*e*i*t}function v_(i,t){return 3*(1-i)*i*i*t}function M_(i,t){return i*i*i*t}function Pr(i,t,e,n,s){return g_(i,t)+x_(i,e)+v_(i,n)+M_(i,s)}class xf extends Vn{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class __ extends Vn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y),Pr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vf extends Vn{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y_ extends Vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends Vn{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y),Cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ru(o,l.x,c.x,h.x,u.x),Ru(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new K().fromArray(s))}return this}}var so=Object.freeze({__proto__:null,ArcCurve:u_,CatmullRomCurve3:d_,CubicBezierCurve:xf,CubicBezierCurve3:__,EllipseCurve:qc,LineCurve:vf,LineCurve3:y_,QuadraticBezierCurve:Mf,QuadraticBezierCurve3:_f,SplineCurve:yf});class b_ extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new so[s.type]().fromJSON(s))}return this}}class Br extends b_{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vf(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Mf(this.currentPoint.clone(),new K(t,e),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xf(this.currentPoint.clone(),new K(t,e),new K(n,s),new K(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new qc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class os extends _e{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,f=new K,d=new L,g=new L,x=new L;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){const b=n+S*h*s,y=Math.sin(b),C=Math.cos(b);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*C,a.push(u.x,u.y,u.z),f.x=S/e,f.y=E/(t.length-1),o.push(f.x,f.y);const w=l[3*E+0]*y,v=l[3*E+1],M=l[3*E+0]*C;c.push(w,v,M)}}for(let S=0;S<e;S++)for(let b=0;b<t.length-1;b++){const y=b+S*t.length,C=y,E=y+t.length,w=y+t.length+1,v=y+1;r.push(C,E,v),r.push(w,v,E)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.points,t.segments,t.phiStart,t.phiLength)}}class js extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new K;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],p=n/2;let m=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function S(){const y=new L,C=new L;let E=0;const w=(e-t)/n;for(let v=0;v<=r;v++){const M=[],_=v/r,A=_*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,B=O*l+o,q=Math.sin(B),U=Math.cos(B);C.x=A*q,C.y=-_*n+p,C.z=A*U,u.push(C.x,C.y,C.z),y.set(q,w,U).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-_),M.push(g++)}x.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){const _=x[M][v],A=x[M+1][v],N=x[M+1][v+1],O=x[M][v+1];(t>0||M!==0)&&(h.push(_,A,O),E+=3),(e>0||M!==r-1)&&(h.push(A,N,O),E+=3)}c.addGroup(m,E,0),m+=E}function b(y){const C=g,E=new K,w=new L;let v=0;const M=y===!0?t:e,_=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;const A=g;for(let N=0;N<=s;N++){const B=N/s*l+o,q=Math.cos(B),U=Math.sin(B);w.x=M*U,w.y=p*_,w.z=M*q,u.push(w.x,w.y,w.z),f.push(0,_,0),E.x=q*.5+.5,E.y=U*.5*_+.5,d.push(E.x,E.y),g++}for(let N=0;N<s;N++){const O=C+N,B=A+N;y===!0?h.push(B,B+1,O):h.push(B+1,B,O),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends zt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new us(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ar extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const b=new L,y=new L,C=new L;for(let E=0;E<e.length;E+=3)d(e[E+0],b),d(e[E+1],y),d(e[E+2],C),l(b,y,C,S)}function l(S,b,y,C){const E=C+1,w=[];for(let v=0;v<=E;v++){w[v]=[];const M=S.clone().lerp(y,v/E),_=b.clone().lerp(y,v/E),A=E-v;for(let N=0;N<=A;N++)N===0&&v===E?w[v][N]=M:w[v][N]=M.clone().lerp(_,N/A)}for(let v=0;v<E;v++)for(let M=0;M<2*(E-v)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[v][_+1]),f(w[v+1][_]),f(w[v][_])):(f(w[v][_+1]),f(w[v+1][_+1]),f(w[v+1][_]))}}function c(S){const b=new L;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(S),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){const S=new L;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const y=p(S)/2/Math.PI+.5,C=m(S)/Math.PI+.5;a.push(y,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const b=a[S+0],y=a[S+2],C=a[S+4],E=Math.max(b,y,C),w=Math.min(b,y,C);E>.9&&w<.1&&(b<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,b){const y=S*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){const S=new L,b=new L,y=new L,C=new L,E=new K,w=new K,v=new K;for(let M=0,_=0;M<r.length;M+=9,_+=6){S.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),v.set(a[_+4],a[_+5]),C.copy(S).add(b).add(y).divideScalar(3);const A=p(C);x(E,_+0,S,A),x(w,_+2,b,A),x(v,_+4,y,A)}}function x(S,b,y,C){C<0&&S.x===1&&(a[b]=S.x-1),y.x===0&&y.z===0&&(a[b]=C/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.vertices,t.indices,t.radius,t.details)}}class vo extends ar{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class sn extends Br{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}}const S_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=bf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=R_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return zr(r,a,e,o,l,d,0),a}};function bf(i,t,e,n,s){let r,a;if(s===B_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Cu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Cu(r,i[r],i[r+1],a);return a&&Mo(a,a.next)&&(Gr(a),a=a.next),a}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||Re(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&D_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?w_(i,n,s,r):E_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=T_(ds(i),t,e),zr(i,t,e,n,s,r,2)):a===2&&A_(i,t,e,n,s,r):zr(ds(i),t,e,n,s,r,1);break}}}function E_(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&zs(s,o,r,l,a,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Re(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=xc(d,g,t,e,n),S=xc(x,p,t,e,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=S;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&zs(o,h,l,u,c,f,b.x,b.y)&&Re(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&zs(o,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&zs(o,h,l,u,c,f,b.x,b.y)&&Re(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&zs(o,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function T_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Mo(s,r)&&Sf(s,n,n.next,r)&&Hr(s,r)&&Hr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Gr(n),Gr(n.next),n=i=r),n=n.next}while(n!==i);return ds(n)}function A_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O_(a,o)){let l=Ef(a,o);a=ds(a,a.next),l=ds(l,l.next),zr(a,t,e,n,s,r,0),zr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function R_(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=bf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(N_(c));for(s.sort(C_),r=0;r<s.length;r++)e=P_(s[r],e);return e}function C_(i,t){return i.x-t.x}function P_(i,t){const e=L_(i,t);if(!e)return t;const n=Ef(e,i);return ds(n,n.next),ds(e,e.next)}function L_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&zs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Hr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&I_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function I_(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function D_(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,U_(s)}function U_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function O_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F_(i,t)&&(Hr(i,t)&&Hr(t,i)&&k_(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Mo(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Sf(i,t,e,n){const s=Pa(Re(i,t,e)),r=Pa(Re(i,t,n)),a=Pa(Re(e,n,i)),o=Pa(Re(e,n,t));return!!(s!==r&&a!==o||s===0&&Ca(i,e,t)||r===0&&Ca(i,n,t)||a===0&&Ca(e,i,n)||o===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pa(i){return i>0?1:i<0?-1:0}function F_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function k_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ef(i,t){const e=new vc(i.i,i.x,i.y),n=new vc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cu(i,t,e,n){const s=new vc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Lr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Lr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pu(t),Lu(n,t);let a=t.length;e.forEach(Pu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Lu(n,e[l]);const o=S_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ni extends _e{constructor(t=new sn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:z_;let b,y=!1,C,E,w,v;m&&(b=m.getSpacedPoints(h),y=!0,f=!1,C=m.computeFrenetFrames(h,!1),E=new L,w=new L,v=new L),f||(p=0,d=0,g=0,x=0);const M=o.extractPoints(c);let _=M.shape;const A=M.holes;if(!Lr.isClockWise(_)){_=_.reverse();for(let Q=0,ct=A.length;Q<ct;Q++){const D=A[Q];Lr.isClockWise(D)&&(A[Q]=D.reverse())}}const O=Lr.triangulateShape(_,A),B=_;for(let Q=0,ct=A.length;Q<ct;Q++){const D=A[Q];_=_.concat(D)}function q(Q,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,D)}const U=_.length,F=O.length;function I(Q,ct,D){let Ut,ot,Ct;const mt=Q.x-ct.x,Gt=Q.y-ct.y,wt=D.x-Q.x,P=D.y-Q.y,T=mt*mt+Gt*Gt,V=mt*P-Gt*wt;if(Math.abs(V)>Number.EPSILON){const Z=Math.sqrt(T),rt=Math.sqrt(wt*wt+P*P),J=ct.x-Gt/Z,Nt=ct.y+mt/Z,Mt=D.x-P/rt,Tt=D.y+wt/rt,se=((Mt-J)*P-(Tt-Nt)*wt)/(mt*P-Gt*wt);Ut=J+mt*se-Q.x,ot=Nt+Gt*se-Q.y;const ht=Ut*Ut+ot*ot;if(ht<=2)return new K(Ut,ot);Ct=Math.sqrt(ht/2)}else{let Z=!1;mt>Number.EPSILON?wt>Number.EPSILON&&(Z=!0):mt<-Number.EPSILON?wt<-Number.EPSILON&&(Z=!0):Math.sign(Gt)===Math.sign(P)&&(Z=!0),Z?(Ut=-Gt,ot=mt,Ct=Math.sqrt(T)):(Ut=mt,ot=Gt,Ct=Math.sqrt(T/2))}return new K(Ut/Ct,ot/Ct)}const G=[];for(let Q=0,ct=B.length,D=ct-1,Ut=Q+1;Q<ct;Q++,D++,Ut++)D===ct&&(D=0),Ut===ct&&(Ut=0),G[Q]=I(B[Q],B[D],B[Ut]);const j=[];let nt,vt=G.concat();for(let Q=0,ct=A.length;Q<ct;Q++){const D=A[Q];nt=[];for(let Ut=0,ot=D.length,Ct=ot-1,mt=Ut+1;Ut<ot;Ut++,Ct++,mt++)Ct===ot&&(Ct=0),mt===ot&&(mt=0),nt[Ut]=I(D[Ut],D[Ct],D[mt]);j.push(nt),vt=vt.concat(nt)}for(let Q=0;Q<p;Q++){const ct=Q/p,D=d*Math.cos(ct*Math.PI/2),Ut=g*Math.sin(ct*Math.PI/2)+x;for(let ot=0,Ct=B.length;ot<Ct;ot++){const mt=q(B[ot],G[ot],Ut);it(mt.x,mt.y,-D)}for(let ot=0,Ct=A.length;ot<Ct;ot++){const mt=A[ot];nt=j[ot];for(let Gt=0,wt=mt.length;Gt<wt;Gt++){const P=q(mt[Gt],nt[Gt],Ut);it(P.x,P.y,-D)}}}const Pt=g+x;for(let Q=0;Q<U;Q++){const ct=f?q(_[Q],vt[Q],Pt):_[Q];y?(w.copy(C.normals[0]).multiplyScalar(ct.x),E.copy(C.binormals[0]).multiplyScalar(ct.y),v.copy(b[0]).add(w).add(E),it(v.x,v.y,v.z)):it(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<U;ct++){const D=f?q(_[ct],vt[ct],Pt):_[ct];y?(w.copy(C.normals[Q]).multiplyScalar(D.x),E.copy(C.binormals[Q]).multiplyScalar(D.y),v.copy(b[Q]).add(w).add(E),it(v.x,v.y,v.z)):it(D.x,D.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const ct=Q/p,D=d*Math.cos(ct*Math.PI/2),Ut=g*Math.sin(ct*Math.PI/2)+x;for(let ot=0,Ct=B.length;ot<Ct;ot++){const mt=q(B[ot],G[ot],Ut);it(mt.x,mt.y,u+D)}for(let ot=0,Ct=A.length;ot<Ct;ot++){const mt=A[ot];nt=j[ot];for(let Gt=0,wt=mt.length;Gt<wt;Gt++){const P=q(mt[Gt],nt[Gt],Ut);y?it(P.x,P.y+b[h-1].y,b[h-1].x+D):it(P.x,P.y,u+D)}}}W(),tt();function W(){const Q=s.length/3;if(f){let ct=0,D=U*ct;for(let Ut=0;Ut<F;Ut++){const ot=O[Ut];st(ot[2]+D,ot[1]+D,ot[0]+D)}ct=h+p*2,D=U*ct;for(let Ut=0;Ut<F;Ut++){const ot=O[Ut];st(ot[0]+D,ot[1]+D,ot[2]+D)}}else{for(let ct=0;ct<F;ct++){const D=O[ct];st(D[2],D[1],D[0])}for(let ct=0;ct<F;ct++){const D=O[ct];st(D[0]+U*h,D[1]+U*h,D[2]+U*h)}}n.addGroup(Q,s.length/3-Q,0)}function tt(){const Q=s.length/3;let ct=0;ft(B,ct),ct+=B.length;for(let D=0,Ut=A.length;D<Ut;D++){const ot=A[D];ft(ot,ct),ct+=ot.length}n.addGroup(Q,s.length/3-Q,1)}function ft(Q,ct){let D=Q.length;for(;--D>=0;){const Ut=D;let ot=D-1;ot<0&&(ot=Q.length-1);for(let Ct=0,mt=h+p*2;Ct<mt;Ct++){const Gt=U*Ct,wt=U*(Ct+1),P=ct+Ut+Gt,T=ct+ot+Gt,V=ct+ot+wt,Z=ct+Ut+wt;pt(P,T,V,Z)}}}function it(Q,ct,D){l.push(Q),l.push(ct),l.push(D)}function st(Q,ct,D){Et(Q),Et(ct),Et(D);const Ut=s.length/3,ot=S.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);Yt(ot[0]),Yt(ot[1]),Yt(ot[2])}function pt(Q,ct,D,Ut){Et(Q),Et(ct),Et(Ut),Et(ct),Et(D),Et(Ut);const ot=s.length/3,Ct=S.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Yt(Ct[0]),Yt(Ct[1]),Yt(Ct[3]),Yt(Ct[1]),Yt(Ct[2]),Yt(Ct[3])}function Et(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Yt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return H_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new so[s.type]().fromJSON(s)),new Ni(n,t.options)}}const z_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-u),new K(f,1-g),new K(x,1-m)]:[new K(o,1-l),new K(h,1-u),new K(d,1-g),new K(p,1-m)]}};function H_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _o extends ar{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class Oi extends ar{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oi(t.radius,t.detail)}}class yo extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new L,g=new K;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const S=m+p,b=S,y=S+n+1,C=S+n+2,E=S+1;o.push(b,y,E),o.push(y,C,E)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qs extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const S=[],b=m/n;let y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+y,1-b),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const b=h[m][S+1],y=h[m][S],C=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&d.push(b,y,E),(m!==n-1||l<Math.PI)&&d.push(y,C,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bo extends ar{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class ue extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,S=(s+1)*d+g;a.push(x,p,S),a.push(p,m,S)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $c extends _e{constructor(t=new _f(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new K;let h=new L;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function x(){for(let b=0;b<e;b++)p(b);p(r===!1?e:0),S(),m()}function p(b){h=t.getPointAt(b/e,h);const y=a.normals[b],C=a.binormals[b];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,v=Math.sin(w),M=-Math.cos(w);l.x=M*y.x+v*C.x,l.y=M*y.y+v*C.y,l.z=M*y.z+v*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){const C=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),w=(s+1)*b+y,v=(s+1)*(b-1)+y;g.push(C,E,v),g.push(E,w,v)}}function S(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $c(new so[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class G_ extends en{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class he extends Gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kd,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V_ extends he{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kc extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wf extends Kc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new oe,Iu=new L,Du=new L;class Tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Du),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uu=new oe,_r=new L,gl=new L;class W_ extends Tf{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),gl.copy(n.position),gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gl),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}}class tr extends Kc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class X_ extends Tf{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends Kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new X_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class q_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nu(){return performance.now()}const Ou=new oe;class Y_{constructor(t,e,n=0,s=1/0){this.ray=new po(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ou),this}intersectObject(t,e=!0,n=[]){return _c(t,this,n,e),n.sort(Fu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_c(t[s],this,n,e);return n.sort(Fu),n}}function Fu(i,t){return i.distance-t.distance}function _c(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)_c(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);class Af extends to{constructor(){super();const t=new ne;t.deleteAttribute("uv");const e=new he({side:nn}),n=new he,s=new tr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new lt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new lt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new lt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new lt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new lt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new lt(t,Fs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new lt(t,Fs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new lt(t,Fs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new lt(t,Fs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new lt(t,Fs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new lt(t,Fs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Fs(i){const t=new Te;return t.color.setScalar(i),t}const Rf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $_=new Gc(-1,1,1,-1,0,1);class K_ extends _e{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const Z_=new K_;class Zc{constructor(t){this._mesh=new lt(Z_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class J_ extends or{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof en?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=kr.clone(t.uniforms),this.material=new en({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Zc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ku extends or{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class j_ extends or{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Cf{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new K);this._width=n.width,this._height=n.height,e=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new J_(Rf),this.copyPass.material.blending=ui,this.clock=new q_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ku!==void 0&&(a instanceof ku?n=!0:a instanceof j_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Q_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Pf extends or{constructor(){super();const t=Q_;this.uniforms=kr.clone(t.uniforms),this.material=new G_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Zc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ud?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lf extends or{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const ty={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class fs extends or{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(r,a,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new zn(r,a,{type:di});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new zn(r,a,{type:di});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=ty;this.highPassUniforms=kr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Rf;this.copyUniforms=kr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ze,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new Zc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=fs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new en({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new en({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}fs.BlurDirectionX=new K(1,0);fs.BlurDirectionY=new K(0,1);const An=i=>Math.min(1,Math.max(0,i)),cs=i=>1-Math.pow(1-An(i),3),Dt=(i,t)=>i+Math.random()*(t-i),Ue=Math.PI*2,Gn=(i,t=1.5,e=1381916)=>new he({color:e,emissive:i,emissiveIntensity:t,roughness:.3,metalness:.6,flatShading:!0}),If=()=>new he({color:2303534,roughness:.35,metalness:.9,flatShading:!0}),Yr=(i,t,e=.18,n=.25)=>cs(i/e)*An((t-i)/n),$r=(i,t,e)=>{let n=i*t;for(;n>0;)(n>=1||Math.random()<n)&&e(),n-=1};function ey(i){const t=new Rt,e=new Rt,n=Gn(16734751,2),s=Gn(16761466,2.4),r=[];for(let o=0;o<10;o++){const l=new Rt;l.rotation.y=o/10*Ue;const c=new lt(new us(.42,o%2?3.4:2.4,3),o%2?n:s);c.geometry.translate(0,(o%2?3.4:2.4)/2,0),c.position.set(1.25,.4,0),c.rotation.z=-(o%2?.95:.5),c.castShadow=!0,l.add(c),e.add(l),r.push(c)}const a=[];for(let o=0;o<7;o++){const l=new lt(new vo(Dt(.22,.42),0),n);l.castShadow=!0,t.add(l),a.push({m:l,r:Dt(2.6,4.2),h:Dt(.8,3.2),sp:Dt(2.5,4.5)*(o%2?1:-1),ph:Dt(0,Ue)})}return t.add(e),{group:t,dur:i,follow:!0,update(o,l,c){const h=Yr(o,i,.22,.35);e.rotation.y=o*3.6,e.scale.setScalar(Math.max(.001,h)),r.forEach((u,f)=>u.scale.y=.8+.3*Math.sin(o*14+f*1.9));for(const u of a){const f=u.ph+o*u.sp;u.m.position.set(Math.cos(f)*u.r*h,u.h+Math.sin(o*5+u.ph)*.4,Math.sin(f)*u.r*h),u.m.rotation.set(o*6,o*4+u.ph,0),u.m.scale.setScalar(Math.max(.001,h))}$r(90*h,l,()=>{const u=Dt(0,Ue),f=Dt(.8,2.6);c(Math.cos(u)*f,Dt(.4,2),Math.sin(u)*f,-Math.sin(u)*5,Dt(9,20),Math.cos(u)*5,Dt(.35,.8),Math.random()<.3?16769184:16738848)})}}}function ny(i,t){const e=new Rt,n=new he({color:13628671,emissive:5228799,emissiveIntensity:.75,roughness:.12,metalness:.3,flatShading:!0}),s=[],r=(a,o,l,c,h,u)=>{for(let f=0;f<a;f++){const d=f/a*Ue+o,g=l*(.7+.6*(f*7%5)/4),x=new lt(new zt(0,c,g,5),n);x.geometry.translate(0,g/2,0);const p=Math.cos(d)*o,m=Math.sin(d)*o;x.position.set(p,t(p,m)-.1,m),x.rotation.set(Math.sin(d)*h,f,-Math.cos(d)*h),x.castShadow=!0,e.add(x),s.push({m:x,delay:u,x:p,z:m,done:!1})}};return r(7,2.1,4.4,.6,.28,0),r(11,4.3,3.1,.52,.5,.07),r(15,6.3,2.1,.44,.75,.14),{group:e,dur:i,follow:!1,update(a,o,l){const c=An((i-a)/.35);for(const h of s){const u=cs((a-h.delay)/.1),f=1+.3*An(1-(a-h.delay)/.28);if(h.m.scale.set(Math.max(.001,u*c),Math.max(.001,u*f*c),Math.max(.001,u*c)),!h.done&&a>=h.delay){h.done=!0;for(let d=0;d<5;d++){const g=Dt(0,Ue);l(h.x,h.m.position.y+.4,h.z,Math.cos(g)*Dt(2,8),Dt(5,13),Math.sin(g)*Dt(2,8),Dt(.4,.8),d%2?16777215:9429247)}}}}}}function iy(i){const t=new Rt,e=new Rt;t.add(e);const n=[],s=If(),r=Gn(16773226,2.6);for(let g=0;g<4;g++){const x=g/4*Ue,p=new Rt;p.position.set(Math.cos(x)*3.7,0,Math.sin(x)*3.7);const m=new lt(new zt(.12,.34,3.6,6),s);m.position.y=1.8,m.castShadow=!0;const S=new lt(new Oi(.42),r);S.position.y=3.9;const b=new lt(new zt(.3,.3,.16,6),r);b.position.y=2.6,p.add(m,S,b),e.add(p),n.push(new L(p.position.x,3.9,p.position.z))}const a=8,o=7,l=new Float32Array(a*o*6),c=new _e;c.setAttribute("position",new Ae(l,3));const h=new c_(c,new Wc({color:16776144,transparent:!0,blending:ze,depthWrite:!1}));h.frustumCulled=!1,e.add(h);const u=new L(0,1.3,0),f=new L,d=new L;return{group:t,dur:i,follow:!0,update(g,x,p){const m=Yr(g,i,.16,.25);e.rotation.y=g*2.2,e.scale.set(1,Math.max(.001,m),1);let S=0;for(let b=0;b<a;b++){const y=b<4?u:n[b%4],C=b<4?n[b]:n[(b+1)%4],E=Math.random()<.7;f.copy(y);for(let w=1;w<=o;w++)d.copy(y).lerp(C,w/o),w<o&&d.add(new L(Dt(-.45,.45),Dt(-.45,.45),Dt(-.45,.45))),E?l.set([f.x,f.y,f.z,d.x,d.y,d.z],S):l.fill(0,S,S+6),S+=6,f.copy(d)}c.attributes.position.needsUpdate=!0,$r(40*m,x,()=>{const b=n[Math.floor(Math.random()*4)].clone().applyAxisAngle(new L(0,1,0),e.rotation.y);p(b.x,b.y,b.z,Dt(-7,7),Dt(-2,8),Dt(-7,7),Dt(.15,.4),16774816)})}}}function sy(i){const t=new Rt,e=Gn(10354640,1.2,2766128),n=[];for(let r=0;r<16;r++){const a=new lt(new bo(Dt(.16,.36),0),e);a.castShadow=!0,t.add(a),n.push({m:a,h:Dt(.4,7),ph:Dt(0,Ue)})}const s=r=>.7+r/7.5*(r/7.5)*4.4;return{group:t,dur:i,follow:!0,update(r,a,o){const l=Yr(r,i,.3,.2),c=1-.35*An(r/i);for(const h of n){const u=(h.h+r*3.2)%7.2+.3,f=s(u)*c*l,d=h.ph+r*(13-u);h.m.position.set(Math.cos(d)*f,u*l,Math.sin(d)*f),h.m.rotation.set(r*9+h.ph,r*7,0),h.m.scale.setScalar(Math.max(.001,l))}$r(260*l,a,()=>{const h=Dt(.2,7.5),u=s(h)*c,f=Dt(0,Ue),d=13+(7.5-h)*1.6;o(Math.cos(f)*u,h,Math.sin(f)*u,-Math.sin(f)*d,Dt(1,4),Math.cos(f)*d,Dt(.12,.3),Math.random()<.3?16777215:9431232)})}}}function ry(i,t){const n=new Rt,s=new Te({color:16757850,transparent:!0,blending:ze,depthWrite:!1}),r=Gn(14251066,.35,4866104),a=[],o=[],l=9;for(let c=0;c<l;c++){const h=c/l*Ue+.3,u=5.5+c*5%4*.6,f=new Rt;f.rotation.y=-h,n.add(f);for(let d=0;d<2;d++){const g=new lt(new ne(u/2,.06,.22-d*.08),s);g.geometry.translate(u/4,0,0);const x=d*u/2+u/4;g.position.set(d*(u/2)*.97,t(Math.cos(h)*x,Math.sin(h)*x)+.12,d*.25),g.rotation.y=d?c%2?.3:-.3:c%2?-.1:.1,f.add(g),a.push(g)}for(let d=0;d<2;d++){const g=2.6+d*2.6+c%3*.3,x=2.8-d*.9+c%2*.6,p=new lt(new zt(.25,.8,x,5),r);p.geometry.translate(0,x/2,0);const m=h+.22,S=Math.cos(m)*g,b=Math.sin(m)*g;p.rotation.set(Math.sin(m)*.4,c,-Math.cos(m)*.4),p.castShadow=!0,n.add(p),o.push({m:p,x:S,z:b,y:t(S,b),h:x,delay:.03+d*.07,done:!1})}}return{group:n,dur:1.7,follow:!1,update(c,h,u){s.opacity=An((1.7-c)/.6);const f=cs(c/.16);a.forEach(d=>d.scale.set(Math.max(.001,f),1,1+1.5*An(1-c/.5)));for(const d of o){const g=cs((c-d.delay)/.09),x=An((c-1)/.7);if(d.m.position.set(d.x,d.y-d.h*(1-g)-d.h*x-.05,d.z),!d.done&&c>=d.delay){d.done=!0;for(let p=0;p<6;p++)u(d.x,d.y+.3,d.z,Dt(-5,5),Dt(6,15),Dt(-5,5),Dt(.4,.9),p%3?14263386:16763008)}}}}}function ay(i){const e=new Rt,n=new Rt;n.position.y=2.6,e.add(n);const s=[1.7,2.7,3.7],r=10,a=6,o=new pf(new ne(.07,.5,.07),Gn(12946431,1.8,2761267),s.length*r*a),l=new oe,c=new ms,h=new L(0,1,0),u=new L;let f=0;for(const x of s)for(let p=0;p<r;p++){const m=p/r*Ue+x;for(let S=0;S<a;S++){const b=.45+S/(a-1)*(Math.PI-.9),y=Math.sin(b),C=Math.cos(b),E=x*y*y*y,w=x*y*y*C,v=3*x*y*y*C,M=x*(2*y*C*C-y*y*y);u.set(v*Math.cos(m),M,v*Math.sin(m)).normalize(),c.setFromUnitVectors(h,u),l.compose(new L(E*Math.cos(m),w,E*Math.sin(m)),c,new L(1,1,1)),o.setMatrixAt(f++,l)}}n.add(o);const d=Gn(16777215,2);for(const x of[1.5,-1.5]){const p=new lt(new Oi(.5),d);p.position.y=x,n.add(p)}let g=!1;return{group:e,dur:1.25,follow:!0,update(x,p,m){const S=An(x/.7),b=cs((x-.7)/.3);if(n.scale.setScalar(Math.max(.001,(2.3-1.6*cs(S)+b*2.8)*cs(x/.1)*An((1.25-x)/.2))),n.rotation.y=x*(2+S*9),!g&&x>=.7){g=!0;for(let y=0;y<70;y++){const C=Dt(0,Ue),E=Dt(9,24);m(Math.cos(C),Dt(.5,3),Math.sin(C),Math.cos(C)*E,Dt(0,7),Math.sin(C)*E,Dt(.25,.55),y%3?12946431:16777215)}}}}}function oy(i){const e=new Rt,n=new Rt,s=Gn(16732120,2.4),r=Gn(16766708,3),a=new lt(new Oi(1,0),r);a.scale.set(.34,4.6,.34),a.castShadow=!0,n.add(a);for(let l=0;l<4;l++){const c=new lt(new us(.5,2.2,3),s);c.position.set(Math.cos(l/4*Ue)*.5,2.6,Math.sin(l/4*Ue)*.5),c.rotation.set(Math.sin(l/4*Ue)*.5,0,-Math.cos(l/4*Ue)*.5),n.add(c)}n.rotation.z=.12,e.add(n);let o=!1;return{group:e,dur:1.3,follow:!1,update(l,c,h){const u=An(l/.12);if(n.position.y=26-22.5*u*u,n.rotation.y=l*3,n.scale.setScalar(Math.max(.001,An((1.3-l)/.3))),!o&&u>=1){o=!0;for(let f=0;f<90;f++){const d=Dt(0,Ue),g=Dt(5,26);h(0,.4,0,Math.cos(d)*g,Dt(2,16),Math.sin(d)*g,Dt(.3,.7),f%3?16736224:16777215)}}$r(o?30:400,c,()=>h(Dt(-.3,.3),n.position.y+Dt(0,6),Dt(-.3,.3),Dt(-2,2),o?Dt(3,9):Dt(20,40),Dt(-2,2),Dt(.15,.4),16747240))}}}function ly(i){const t=new Rt,e=new lt(new _o(1.15,2),new Te({color:0}));e.position.y=2.8,t.add(e);const n=46,s=new pf(new vo(.2,0),Gn(6978559,1.3,1842732),n);s.castShadow=!0,t.add(s);const r=Array.from({length:n},()=>({ph:Dt(0,Ue),off:Math.random(),tilt:Dt(-.35,.35),size:Dt(.5,1.7)})),a=new oe,o=new ms,l=new Hn;return{group:t,dur:i,follow:!0,update(c,h,u){const f=Yr(c,i,.35,.18);e.scale.setScalar(Math.max(.001,f*(1+.05*Math.sin(c*24)))),r.forEach((d,g)=>{const x=(d.off+c*.55)%1,p=1.3+(1-x)*(1-x)*5.2,m=d.ph+c*2+9/(.5+p);l.set(c*5+d.ph,c*3,0),o.setFromEuler(l);const S=Math.max(.001,f*d.size*(.4+.6*(1-x)));a.compose(new L(Math.cos(m)*p,2.8+Math.sin(m)*p*d.tilt,Math.sin(m)*p),o,new L(S,S,S)),s.setMatrixAt(g,a)}),s.instanceMatrix.needsUpdate=!0,$r(150*f,h,()=>{const d=Dt(0,Ue),g=Dt(5,10),x=Dt(12,22);u(Math.cos(d)*g,Dt(.2,5.5),Math.sin(d)*g,-Math.cos(d)*x-Math.sin(d)*6,Dt(-1,3),-Math.sin(d)*x+Math.cos(d)*6,g/x,Math.random()<.25?16777215:8359167)})}}}function cy(i){const t=new Rt,e=Gn(5242848,1.8),n=If(),s=20,r=[];for(let o=0;o<s;o++){const l=o/s*Ue,c=new lt(new ne(.24,1,.24),o%2?e:n);c.geometry.translate(0,.5,0),c.position.set(Math.cos(l)*2.9,.15,Math.sin(l)*2.9),c.rotation.y=-l,c.castShadow=!0,t.add(c),r.push(c)}let a=-1;return{group:t,dur:i,follow:!0,update(o,l,c){const h=Yr(o,i,.2,.3),u=o%.6/.6,f=Math.pow(1-u,2);r.forEach((g,x)=>g.scale.set(1,Math.max(.001,h*(.5+4.2*f*(.35+.65*Math.abs(Math.sin(x*Math.PI*3/s+Math.floor(o/.6)))))),1)),t.rotation.y=Math.floor(o/.6)*.31;const d=Math.floor(o/.6);if(d!==a){a=d;for(let g=0;g<80;g++){const x=Dt(0,Ue),p=Dt(10,22);c(Math.cos(x)*3,.2,Math.sin(x)*3,Math.cos(x)*p,Dt(.5,3.5),Math.sin(x)*p,Dt(.2,.4),g%4?5242848:16777215)}}}}}function hy(i,t){const e=Le[i].super.dur;switch(i){case"thermal":return ey(e);case"cryo":return ny(e,t);case"volt":return iy(e);case"gale":return sy(e);case"quake":return ry(e,t);case"mag":return ay();case"plasma":return oy();case"gravity":return ly(e);case"resonance":return cy(e)}}function Hs(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Bu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);const g=Bu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ae(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const oi=Math.PI*2;function La(i,t=200){const e=new sn;for(let n=0;n<=t;n++){const s=n/t*oi,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function Ji(i,t,e,n){const s=new Br;s.absarc(t,e,n,0,oi,!0),i.holes.push(s)}function uy(i,t,e,n,s){const r=new Br,a=n/2/e,o=6;for(let l=0;l<=o;l++){const c=t-a+l/o*a*2,h=Math.cos(c)*(e+s/2),u=Math.sin(c)*(e+s/2);l===0?r.moveTo(h,u):r.lineTo(h,u)}for(let l=o;l>=0;l--){const c=t-a+l/o*a*2;r.lineTo(Math.cos(c)*(e-s/2),Math.sin(c)*(e-s/2))}r.closePath(),i.holes.push(r)}function Ia(i,t,e,n,s){const r=new Ni(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:20});r.rotateX(-Math.PI/2),r.translate(0,e,0);const a=new lt(r,n);return a.position.y=s,a.castShadow=!0,a.receiveShadow=!0,a}function zu(i){let t=0,e=-1;const n=oi/i.fold;for(let s=0;s<40;s++){const r=s/40*n,a=Ar(i,r);a>e+1e-6&&(e=a,t=r)}return t}function dy(i,t){const e=new Rt,n=i.radius,[s,r,a]=i.layers,o=w=>n*Math.max(.47,Ar(s,w)),l=i.thick-.12,c=w=>Math.max(.5*n,Math.min(o(w)*.9,n*.9*Ar(r,w))),h=.44*n,u=La(o);Ji(u,0,0,.36*n),e.add(Ia(u,i.thick,.03,t.metal,0));const f=new Rt;if(f.position.y=l,e.add(f),i.lights>=2){const w=La(v=>Math.min(o(v)*.96,c(v)+.035*n));Ji(w,0,0,h),f.add(Ia(w,.025,0,t.glow,.155))}const d=La(c);Ji(d,0,0,h);const g=Math.min(12,Math.max(r.fold,3)),x=zu(r);for(let w=0;w<g&&i.windows>0;w++){const v=x+w/g*oi,M=c(v)-h;if(M<.2*n)continue;const _=h+M*.5;if(i.windows===1)Ji(d,Math.cos(v)*_,Math.sin(v)*_,Math.min(.1*n,M*.26));else if(i.windows===2){const A=Math.min(.055*n,M*.16);Ji(d,Math.cos(v)*(h+M*.32),Math.sin(v)*(h+M*.32),A),Ji(d,Math.cos(v)*(h+M*.68),Math.sin(v)*(h+M*.68),A)}else uy(d,v,_,Math.min(.32*n,oi/g*_*.55),Math.min(.07*n,M*.25))}f.add(Ia(d,.07,.02,i.swap?t.metal:t.paint,.18));let p=.295;if(a){const v=La(M=>Math.max(.47*n,Math.min(c(M)*.86,n*.72*Ar(a,M))));Ji(v,0,0,h),f.add(Ia(v,.05,.015,i.swap?t.paint:i.crownMetal?t.metal:t.dark,.275)),p=.36}const m=Math.min(14,s.fold),S=zu(s),b=[];for(let w=0;w<m;w++){const v=S+w/m*oi,M=c(v);if(i.lights===1){const _=new zt(.035*n,.035*n,.03,8),A=Math.max(h+.08,M-.1*n);_.translate(Math.cos(v)*A,.29,-Math.sin(v)*A),b.push(_)}else if(i.lights!==2){const _=Math.min(.26*n,M-.5*n);if(_<.08)continue;const A=new ne(_,.02,.04*n);A.rotateY(v);const N=M-_/2-.05*n;A.translate(Math.cos(v)*N,.285,-Math.sin(v)*N),b.push(A)}}if(b.length){const w=new lt(Hs(b),t.glow);f.add(w)}const y=[],C=Math.max(4,Math.min(8,s.fold));for(let w=0;w<C;w++){const v=(w+.5)/C*oi,M=new zt(.032*n,.032*n,.05,6);M.translate(Math.cos(v)*.4*n,p-.06,-Math.sin(v)*.4*n),y.push(M)}const E=new lt(Hs(y),t.metal);if(E.castShadow=!0,f.add(E),i.ornament){const w=[],v=[],M=m>8?2:1;for(let A=0;A<m;A+=M){const N=S+A/m*oi,O=o(N);if(O-h<.3*n)continue;const B=h+(O-h)*.55,q=.25,U=(I,G,j=B,nt=q)=>(I.rotateY(N+G),I.translate(Math.cos(N)*j,nt,-Math.sin(N)*j),I),F=Math.min(.5*n,(O-h)*.95);if(i.ornament===1){const I=new us(.085*n,F*1.15,4);I.rotateZ(-Math.PI/2),I.scale(1,.55,1),w.push(U(I,.35,B+.04,q+.05))}else if(i.ornament===2){const I=new sn;I.moveTo(-F/2,0),I.lineTo(F/2,0),I.lineTo(F/2,.17),I.closePath();const G=.16*n,j=new Ni(I,{depth:G,bevelEnabled:!1});j.translate(0,0,-G/2),w.push(U(j,0))}else if(i.ornament===3)w.push(U(new ne(F*.7,.11,.24*n),0,B,q+.055)),v.push(U(new ne(F*.5,.02,.05*n),0,B,q+.12));else if(i.ornament===4)for(const I of[-.07,.07]){const G=new ne(F,.07,.035*n);G.translate(0,0,I*n),w.push(U(G,0,B,q+.035))}else if(i.ornament===5){const I=new Qs(.1*n,10,6,0,oi,0,Math.PI/2);w.push(U(I,0,B,q)),v.push(U(new zt(.03*n,.03*n,.02,6),0,B,q+.1*n+.005))}else{const I=new sn;I.moveTo(-F/2,0),I.lineTo(F/2,0),I.quadraticCurveTo(F*.3,.24,-F*.1,.2),I.closePath();const G=new Ni(I,{depth:.035,bevelEnabled:!1});G.translate(0,0,-.0175),w.push(U(G,.5))}}const _=i.ornament===3?t.dark:i.ornament===2||i.ornament===6?i.swap?t.metal:t.paint:t.metal;if(w.length){const A=new lt(Hs(w.map(N=>N.toNonIndexed())),_);A.castShadow=!0,f.add(A)}v.length&&f.add(new lt(Hs(v.map(A=>A.toNonIndexed())),t.glow))}return e}const wn=Math.PI*2,ps=(i,t,e)=>new ne(i,t,e);function Me(i,t,e=0,n=0,s=0){const r=new lt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Ir(i,t,e=.02){const n=new Ni(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:10});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function fy(i,t,e,n){const s=new sn;return s.absarc(0,0,t,e,n,!1),s.absarc(0,0,i,n,e,!0),s.closePath(),s}function So(i){return new he({color:1182472,emissive:i,emissiveIntensity:1,roughness:.45,flatShading:!0})}function py(i,t){const e=new Rt,n=So(t);e.add(Me(new zt(1.08,1,.2,40),i.dark,0,.1,0)),e.add(Me(new zt(.46,.5,.5,20),n,0,.42,0));for(let l=0;l<10;l++){const c=l/10*wn;e.add(Me(ps(.06,.62,.06),i.metal,Math.cos(c)*.55,.45,Math.sin(c)*.55))}const s=[];for(let l=0;l<6;l++){const c=l/6*wn,h=Me(ps(.34,.72,.7),i.paint,Math.cos(c)*.9,.5,-Math.sin(c)*.9);h.rotation.y=c,h.rotation.z=-.22,s.push(h),e.add(h)}const r=new Rt;for(let l=0;l<3;l++){const c=l/3*wn+.5,h=new Rt;h.add(Me(new zt(.1,.13,.9,10),i.dark,0,.45,0),Me(new zt(.15,.1,.1,10),n,0,.93,0)),h.position.set(Math.cos(c)*.5,.45,Math.sin(c)*.5),r.add(h)}e.add(r);const a=new sn;for(let l=0;l<=160;l++){const c=l/160*wn,h=.86+.16*(Math.abs(Math.sin(c*5))>.55?1:0);l===0?a.moveTo(Math.cos(c)*h,Math.sin(c)*h):a.lineTo(Math.cos(c)*h,Math.sin(c)*h)}const o=Me(Ir(a,.16),i.metal,0,.28,0);return o.visible=!1,e.add(o),e.userData.anim=l=>{r.scale.y=1+.7*l.rear,r.rotation.y=.2*Math.sin(l.t*2),n.emissiveIntensity=.7+.5*Math.sin(l.t*5)+.9*l.rear+.3*l.stage,o.visible=l.stage>=1,o.rotation.y=l.t*(1.5+l.stage),s.forEach((c,h)=>c.position.y=.5+l.rear*.12*Math.sin(h*1.7+l.t*30))},e}function my(i,t){const e=new Rt,n=So(t),s=new sn;for(let f=0;f<6;f++){const d=f/6*wn;f===0?s.moveTo(Math.cos(d)*1.05,Math.sin(d)*1.05):s.lineTo(Math.cos(d)*1.05,Math.sin(d)*1.05)}s.closePath(),e.add(Me(Ir(s,.2,.03),i.dark,0,0,0));for(let f=0;f<4;f++){const d=f/4*wn+.78,g=new Rt;g.add(Me(new zt(.09,.12,.7,10),i.metal,0,.35,0),Me(new zt(.1,.1,.05,10),n,0,.72,0)),g.position.set(Math.cos(d)*.78,.15,Math.sin(d)*.78),e.add(g)}const r=new Rt,a=new Rt,o=new sn;o.moveTo(-.55,-.62),o.lineTo(.95,-.14),o.lineTo(1.25,0),o.lineTo(.95,.14),o.lineTo(-.55,.62),o.closePath();const l=Me(Ir(o,.5,.03),i.paint,0,.2,0);l.rotation.y=0;const c=Me(Ir(o,.08,.02),i.paint,0,.7,0);c.scale.set(.8,1,.55);const h=Me(ps(1.5,.06,.09),n,.25,.8,0),u=Me(ps(.34,.4,.3),i.metal,1.12,.4,0);a.add(l,c,h,u),r.add(a);for(const f of[-.36,.36]){const d=Me(new zt(.07,.07,1.2,10),i.metal,0,.45,f);d.rotation.z=Math.PI/2,d.position.x=.1,r.add(d)}return e.add(r),e.userData.anim=f=>{r.rotation.y=f.aim,a.position.x=-.38*f.rear+.22*f.act,n.emissiveIntensity=.8+1*f.rear+.6*f.act+.3*f.stage,a.rotation.z=.05*Math.sin(f.t*60)*f.rear},e}function gy(i,t){const e=new Rt,n=So(t);e.add(Me(new zt(.95,1,.16,36),i.dark,0,.08,0)),e.add(Me(new zt(.3,.42,.7,20),i.metal,0,.5,0)),e.add(Me(new Qs(.3,16,10,0,wn,0,Math.PI/2),n,0,.85,0));const s=[];for(let l=0;l<8;l++){const c=l/8*wn,h=Me(ps(.5,.05,.26),i.paint,Math.cos(c)*.66,.5,-Math.sin(c)*.66);h.rotation.set(0,c,.5),s.push(h),e.add(h)}const r=[];for(let l=0;l<3;l++){const c=l/3*wn+.4,h=new Rt;h.add(Me(ps(.8,.07,.1),i.metal,.4,0,0),Me(new Qs(.17,12,8),i.dark,.85,0,0)),h.rotation.y=c,h.position.y=.22,r.push(h),e.add(h)}const a=new Rt,o=new Rt;return a.add(Me(new ue(.92,.07,8,36,Math.PI),i.metal)),o.add(Me(new ue(.76,.07,8,36,Math.PI),n)),a.position.y=.5,o.position.y=.5,e.add(a,o),e.userData.anim=l=>{const c=1+l.rear*4+l.stage*.8;a.rotation.set(0,l.t*1.6*c,0),o.rotation.set(0,-l.t*2.3*c,Math.PI/2),a.rotation.x=.3*Math.sin(l.t*1.3),r.forEach(h=>h.scale.x=1-.45*l.rear),n.emissiveIntensity=.8+.4*Math.sin(l.t*6)+1*l.rear+.3*l.stage,s.forEach((h,u)=>h.rotation.x=.35*Math.sin(l.t*9+u)*l.rear)},e}function xy(i,t){const e=new Rt,n=So(t);e.add(Me(new zt(.28,.4,1.05,18),i.metal,0,.52,0));for(const a of[.3,.62,.92])e.add(Me(new zt(.31,.31,.06,18),n,0,a,0));const s=[];for(let a=0;a<6;a++){const o=a/6*wn+.26,l=Me(ps(.78,.1,.12),i.metal,Math.cos(o)*.62,.3,-Math.sin(o)*.62);l.rotation.y=o,s.push(l),e.add(l)}const r=[];for(let a=0;a<6;a++){const o=a/6*wn+.05,l=(a+1)/6*wn-.05,c=Me(Ir(fy(.9,1.15,o,l),.42,.03),i.paint,0,.1,0);c.rotation.x=0,c.userData.mid=(o+l)/2,r.push(c),e.add(c)}return e.userData.anim=a=>{r.forEach(o=>{const l=o.userData.mid,c=.16*a.rear+.04*Math.sin(a.t*3+l);o.position.set(Math.cos(l)*c,.1,-Math.sin(l)*c)}),s.forEach((o,l)=>{o.rotation.z=a.stage>=2?.12*Math.sin(a.t*7+l*2):0}),n.emissiveIntensity=.8+.5*Math.sin(a.t*4)+1*a.rear+.3*a.stage},e}function vy(i,t,e){return i==="warden"?py(t,e):i==="piledriver"?my(t,e):i==="gyre"?gy(t,e):xy(t,e)}const cn=Math.PI*2,Hu=i=>i-Math.floor(i),yc={steel:{name:"Steel",color:12173516,rough:.24},chrome:{name:"Chrome",color:16054010,rough:.06},gunmetal:{name:"Gunmetal",color:4014674,rough:.34},gold:{name:"Gold",color:14854973,rough:.2},copper:{name:"Copper",color:13201727,rough:.26}};function Df(i){const t=yc[i.metal]??yc.steel;return{metal:new he({color:t.color,metalness:1,roughness:t.rough}),paint:new V_({color:i.paint,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.08}),glow:new he({color:789776,emissive:i.glow,emissiveIntensity:1,roughness:.4}),rubber:new he({color:1381914,metalness:0,roughness:.92}),dark:new he({color:1645346,metalness:.7,roughness:.42})}}function Cn(i,t=220){const e=new sn;for(let n=0;n<=t;n++){const s=n/t*cn,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function Tn(i,t,e,n){const s=new Br;s.absarc(t,e,n,0,cn,!0),i.holes.push(s)}function Ge(i,t,e){const n=new Ni(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:28});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function On(i,t=72){return new os(i.map(([e,n])=>new K(e,n)),t)}function dt(i,t,e=0){const n=new lt(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function Rn(i,t,e,n,s,r=0){const a=[];for(let o=0;o<t;o++){const l=r+o/t*cn,c=i();c.rotateY(l),c.translate(Math.cos(l)*e,n,-Math.sin(l)*e),a.push(c)}return dt(Hs(a),s)}const Gu={talon:i=>.6+.4*Math.pow(1-Hu(i*3/cn),1.8),bastion:i=>.94+.06*Math.cos(6*i),ripsaw:i=>.84+.16*(1-Hu(i*8/cn)),halo:i=>.7+.3*Math.pow(Math.abs(Math.cos(i)),5)},My={talon:3,bastion:6,ripsaw:8,halo:2},_y={talon:1,bastion:1.05,ripsaw:1,halo:1.02},Vu=.25,yy=-.85;function bc(i,t){for(const e of i)e.pivot.rotation.y=e.base+Vu+(yy-Vu)*t}function by(i){const t=new Rt,e=c=>.52+.1*Math.pow(Math.max(0,Math.cos(3*c)),2),n=Cn(e);Tn(n,0,0,.36),t.add(dt(Ge(n,.12,.03),i.metal));const s=Cn(c=>e(c)*.9);Tn(s,0,0,.4),t.add(dt(Ge(s,.05,.02),i.paint,.18));const r=dt(new ue(.455,.014,8,96),i.glow,.272);r.rotation.x=Math.PI/2,t.add(r);const a=new sn;for(const[c,[h,u]]of[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]].entries())c===0?a.moveTo(h,u):a.lineTo(h,u);const o=new sn;for(const[c,[h,u]]of[[.04,-.06],[.28,-.11],[.54,-.06],[.64,.01],[.3,.05],[.04,.05]].entries())c===0?o.moveTo(h,u):o.lineTo(h,u);const l=[];for(let c=0;c<3;c++){const h=c/3*cn,u=new Rt;u.position.set(Math.cos(h)*.56,.05,-Math.sin(h)*.56),u.add(dt(Ge(a,.1,.025),i.metal)),u.add(dt(Ge(o,.04,.015),i.paint,.15));const f=dt(new ne(.4,.02,.03),i.glow,.225);f.position.x=.32,u.add(f),u.add(dt(new zt(.065,.065,.26,6),i.dark,.1)),u.add(dt(new zt(.035,.035,.02,12),i.glow,.24)),t.add(u),l.push({pivot:u,base:h+Math.PI/2})}return bc(l,.5),t.userData.wings=l,t}function Sy(i){const t=new Rt,n=Cn(o=>.62+.06*Math.pow(Math.max(0,Math.cos(4*o)),2));Tn(n,0,0,.36),t.add(dt(Ge(n,.12,.03),i.metal));const s=dt(new ue(.5,.016,8,96),i.glow,.178);s.rotation.x=Math.PI/2,t.add(s);const r=[],a=.4*Math.PI;for(let o=0;o<4;o++){const l=o/4*cn+Math.PI/4,c=.78,h=Math.cos(l)*c,u=Math.sin(l)*c,f=new sn,d=(C,E)=>[Math.cos(E)*C-h,Math.sin(E)*C-u],g=l-a/2,x=l+a/2,p=1,m=.56,S=8;for(let C=0;C<=S;C++){const[E,w]=d(p*(1-.07*Math.sin(C/S*Math.PI)),g+(x-g)*C/S);C===0?f.moveTo(E,w):f.lineTo(E,w)}for(let C=S;C>=0;C--){const[E,w]=d(m,g+.04+(x-g-.08)*C/S);f.lineTo(E,w)}const b=new Rt;b.position.set(h,.15,-u),b.add(dt(Ge(f,.09,.025),i.paint,0));const y=dt(new ne(.34,.02,.035),i.glow,.13);y.rotation.y=l,b.add(y);for(const C of[-1,1]){const E=dt(new zt(.035,.035,.03,8),i.dark,.13);E.position.set(Math.cos(l+C*.45)*c-h,.13,-(Math.sin(l+C*.45)*c-u)),b.add(E)}t.add(b),r.push(b)}return t.userData.plates=r,t}const Ey=2.1;function Uf(i,t){for(const e of i)e.pivot.rotation.y=e.base+Ey*(1-t),e.weight.position.y=.02+.03*t}function wy(i){const t=new Rt,e=Cn(a=>.5+.06*Math.pow(Math.max(0,Math.cos(3*a)),2));Tn(e,0,0,.34),t.add(dt(Ge(e,.14,.03),i.metal));const n=Cn(()=>.44);Tn(n,0,0,.38),t.add(dt(Ge(n,.05,.02),i.paint,.19));const s=dt(new ue(.41,.013,8,64),i.glow,.265);s.rotation.x=Math.PI/2,t.add(s);const r=[];for(let a=0;a<3;a++){const o=a/3*cn,l=new Rt;l.position.set(Math.cos(o)*.5,.07,-Math.sin(o)*.5),l.add(dt(new zt(.075,.075,.2,8),i.dark,.04)),l.add(dt(new zt(.04,.04,.03,12),i.glow,.15)),l.add(dt(new ne(.34,.05,.08),i.metal,.03).translateX(.18));const c=new Rt;c.position.set(.4,.02,0);const h=dt(new zt(.13,.15,.2,6),i.metal),u=dt(new zt(.1,.13,.05,6),i.paint,.125),f=dt(new zt(.152,.152,.03,6),i.glow,-.02);c.add(h,u,f),l.add(c),t.add(l),r.push({pivot:l,base:o,weight:c})}return Uf(r,1),t.userData.arms=r,t}function Ty(i,t){const e=mn(i).gen;if(e)return dy(e,t);if(i==="shifter")return by(t);if(i==="breakaway")return Sy(t);if(i==="flail")return wy(t);const n=new Rt,s=Gu[i]??Gu.talon,r=My[i]??3,a=_y[i]??1,o=g=>a*Math.max(.52,s(g)*.86-.02),l=Cn(g=>a*s(g));Tn(l,0,0,.36*a),n.add(dt(Ge(l,.12,.03),t.metal));const c=Cn(o);Tn(c,0,0,.44*a);const h=Math.max(r,4);for(let g=0;g<h;g++){const x=(g+.22)/h*cn,m=o(x)-.44*a;if(m<.2*a)continue;const S=.44*a+m*.5;Tn(c,Math.cos(x)*S,Math.sin(x)*S,Math.min(.1*a,m*.26))}n.add(dt(Ge(c,.06,.02),t.paint,.18));const u=.285,f=dt(new ue(.47*a,.016,8,96),t.glow,u);f.rotation.x=Math.PI/2,n.add(f);const d=[];for(let g=0;g<r;g++){const x=(g+.1)/r*cn,p=o(x),m=Math.min(.26*a,p-.5*a);if(m<.08)continue;const S=new ne(m,.02,.04*a);S.rotateY(x);const b=p-m/2-.05*a;S.translate(Math.cos(x)*b,u,-Math.sin(x)*b),d.push(S)}return d.length&&n.add(dt(Hs(d),t.glow)),n.add(Rn(()=>new zt(.035*a,.035*a,.05,6),h,.4*a,.2,t.metal,.6/h)),n}function Ay(i,t){const e=new Rt;if(i==="flywheel"){const n=Cn(()=>.72,96);Tn(n,0,0,.2);for(let a=0;a<6;a++){const o=a/6*cn;Tn(n,Math.cos(o)*.45,Math.sin(o)*.45,.13)}e.add(dt(Ge(n,.06,.02),t.dark));const s=dt(new ue(.7,.085,18,96),t.metal,.1);s.rotation.x=Math.PI/2;const r=dt(new ue(.7,.014,8,96),t.glow,.187);r.rotation.x=Math.PI/2,e.add(s,r,dt(new zt(.26,.28,.16,48),t.metal,.08))}else if(i==="anvil")e.add(dt(On([[0,0],[.5,0],[.72,.04],[.75,.08],[.75,.19],[.7,.23],[.3,.23],[0,.23]]),t.metal)),e.add(Rn(()=>new ne(.035,.11,.05),40,.755,.135,t.dark)),e.add(dt(On([[.42,.231],[.6,.231],[.6,.245],[.42,.245]]),t.paint));else if(i==="feather"){const n=Cn(()=>.66,96);Tn(n,0,0,.18);for(let r=0;r<8;r++){const a=r/8*cn;Tn(n,Math.cos(a)*.44,Math.sin(a)*.44,.1)}e.add(dt(Ge(n,.05,.015),t.paint,.05));const s=dt(new ue(.67,.03,10,96),t.metal,.09);s.rotation.x=Math.PI/2,e.add(s,dt(new zt(.22,.24,.16,40),t.metal,.08))}else e.add(dt(On([[0,0],[.3,0],[.4,.04],[.42,.1],[.64,.12],[.7,.14],[.7,.19],[.64,.21],[.44,.2],[.38,.23],[0,.23]]),t.metal)),e.add(dt(On([[.47,.207],[.61,.212],[.61,.225],[.47,.22]]),t.paint)),e.add(Rn(()=>new zt(.03,.03,.04,6),6,.67,.2,t.dark));return e}function Ry(i,t){const e=new Rt,n=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];if(i==="needle"){e.add(dt(On([[0,0],[.025,.02],[.1,.24],[.2,.3],...n]),t.metal));const s=dt(new ue(.215,.022,10,64),t.paint,.345);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="flatline"){e.add(dt(On([[0,0],[.2,0],[.25,.04],[.25,.18],[.17,.24],[.2,.3]]),t.paint)),e.add(dt(On(n),t.metal));const s=dt(new ue(.255,.012,8,64),t.glow,.11);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="gripper"){e.add(dt(On([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),e.add(Rn(()=>new ne(.03,.13,.035),18,.272,.13,t.dark)),e.add(dt(On(n),t.metal));const s=dt(new ue(.225,.014,8,64),t.glow,.34);s.rotation.x=Math.PI/2,e.add(s)}else{const s=dt(new Qs(.13,32,20),new he({color:16054010,metalness:1,roughness:.05}),.13);e.add(s),e.add(dt(On([[.11,.14],[.19,.17],[.22,.26],[.2,.3]]),t.paint)),e.add(dt(On(n),t.metal))}return e}const Jc=(i,t)=>e=>{const n=cn/i,s=Math.cos(Math.PI/i)/Math.cos((e%n+n)%n-n/2);return s+(1-s)*t};function Cy(i){const t=new sn;return t.moveTo(-i,-i*.9),t.lineTo(0,-i*.35),t.lineTo(i,-i*.9),t.lineTo(i,-i*.35),t.lineTo(0,i*.25),t.lineTo(-i,-i*.35),t.closePath(),Ge(t,.012,0)}function Py(i){const t=new Rt;t.add(dt(new zt(.33,.33,.2,48),i.metal,.1));const e=Jc(8,.1);t.add(dt(Ge(Cn(s=>.38*e(s),180),.16,.03),i.paint,.2));const n=.422;for(const s of[-.1,.1]){const r=dt(new ne(.075,.03,.3),i.glow,n+.01);r.position.x=s,t.add(r)}return t.add(Rn(()=>new ne(.2,.26,.05),4,.38,.22,i.metal,Math.PI/4)),t.add(Rn(()=>new zt(.03,.03,.04,6),8,.3,n,i.metal)),t}class Ly extends Vn{constructor(){super()}getPoint(t,e=new L){const n=t*cn*3.5,s=.22-.03*Math.sin(t*Math.PI);return e.set(Math.cos(n)*s,t*.36,Math.sin(n)*s)}}function Iy(i){const t=new Rt;t.add(dt(new zt(.33,.33,.2,48),i.metal,.1));const e=Jc(5,.2);t.add(dt(Ge(Cn(s=>.36*e(s),180),.1,.03),i.paint,.2));const n=.35;return t.add(dt(new $c(new Ly,120,.034,8,!1),i.metal,n)),t.add(dt(new zt(.2,.2,.03,24),i.glow,n+.37)),t}function Dy(i,t){if(i==="anchor")return Py(t);if(i==="coil")return Iy(t);const e=new Rt,n=i==="surge"?3:i==="lockjaw"?4:i==="rampart"?6:24,s=i==="surge"?.4:i==="viper"?.29:.35,r=i==="surge"?.42:i==="lockjaw"?.3:.12,a=i==="surge"||i==="viper";e.add(dt(new zt(.33,.33,.2,48),t.metal,.1));const o=Jc(n,r),l=Cn(h=>s*o(h),180);e.add(dt(Ge(l,.16,.03),t.paint,.2));const c=.422;if(a)for(const h of[.02,-.1]){const u=dt(Cy(s*.36),t.glow,c);u.position.z=h,e.add(u)}else{const h=dt(new ue(s*.42,.022,8,48),t.glow,c+.01);h.rotation.x=Math.PI/2,e.add(h,dt(new zt(s*.16,s*.16,.02,6),t.glow,c+.005))}return i==="lockjaw"?e.add(Rn(()=>new ne(.16,.2,.12),4,s*.95,.3,t.metal,Math.PI/4)):i==="viper"?e.add(Rn(()=>new ne(.14,.05,.03),3,s*1.05,.3,t.metal)):e.add(Rn(()=>new zt(.03,.03,.04,6),n,s*.72,c,t.metal,Math.PI/n)),e}function Uy(i,t){const e=new Rt,n=s=>{const r=new sn;return s.forEach(([a,o],l)=>l?r.lineTo(a,o):r.moveTo(a,o)),dt(Ge(r,.03,0),t)};if(i==="thermal")e.add(n([[-.3,-.2],[-.17,.1],[-.04,-.2]]),n([[-.12,-.2],[.03,.32],[.18,-.2]]),n([[.1,-.2],[.21,.06],[.32,-.2]]));else if(i==="cryo")for(const[s,r,a]of[[0,0,.17],[-.2,.12,.11],[.2,.1,.11],[.02,-.22,.09]]){const o=dt(new zt(a,a,.05+a*.5,6),t,.04);o.position.x=s,o.position.z=r,e.add(o)}else if(i==="volt")e.add(n([[.06,.32],[-.2,-.02],[-.03,-.02],[-.1,-.32],[.2,.06],[.03,.06]]));else if(i==="gale")for(const[s,r]of[[.12,0],[.21,.9],[.3,1.8]]){const a=dt(new ue(s,.028,6,24,2.4),t,.02);a.rotation.set(Math.PI/2,0,r),e.add(a)}else if(i==="quake")for(const[s,r]of[[-.06,.18],[.08,0],[-.04,-.18]]){const a=dt(new ne(.48,.04,.11),t,.02);a.position.x=s,a.position.z=r,e.add(a)}else if(i==="plasma"){const s=dt(new ue(.16,.03,6,24),t,.03);s.rotation.x=Math.PI/2;const r=dt(new ne(.72,.04,.05),t,.03);r.rotation.y=.6,e.add(s,r)}else if(i==="gravity")for(const[s,r]of[[.3,.05],[.2,.03],[.1,.01]]){const a=dt(new ue(s,.022,6,28),t,r);a.rotation.x=Math.PI/2,e.add(a)}else if(i==="resonance")[.1,.22,.34,.22,.1,.22,.34].forEach((s,r)=>{const a=dt(new ne(.06,.04,s*1.6),t,.02);a.position.x=-.3+r*.1,e.add(a)});else{const s=dt(new ue(.2,.055,8,24,Math.PI),t,.03);s.rotation.x=-Math.PI/2,e.add(s);for(const r of[-.2,.2]){const a=dt(new ne(.11,.06,.2),t,.03);a.position.set(r,.03,.1),e.add(a)}}return e}function Ny(i){const t=new Rt,e=lo(i).elements,n=new he({color:1645346,metalness:.8,roughness:.35});return t.add(dt(new zt(.52,.58,.12,6),n,.06)),e.forEach((s,r)=>{const a=new he({color:789776,emissive:Le[s].color,emissiveIntensity:1.3}),o=dt(new ue(.47,.02,6,48,Math.PI*2/e.length),a,.125);o.rotation.set(Math.PI/2,0,r*Math.PI*2/e.length);const l=Uy(s,a);l.position.y=.125,e.length>1&&(l.scale.setScalar(.6),l.position.x=r?.2:-.2),t.add(o,l)}),t}function Oy(i,t){const e=new Rt,n=dt(new ne(.34,.95,.28),t.paint,-.55),s=dt(new ne(.36,.5,.2),t.rubber,-.6),r=dt(new zt(.46,.46,.3,48),t.metal,.1),a=dt(new zt(.3,.34,.08,6),t.dark,.29),o=dt(new ue(.465,.014,8,64),t.glow,.1);if(o.rotation.x=Math.PI/2,e.add(n,s,r,a,o),e.add(Rn(()=>new zt(.05,.05,.22,12),3,.2,-.12,t.metal)),i==="string"){const l=dt(new zt(.012,.012,.9,6),t.dark);l.rotation.z=Math.PI/2,l.position.set(.9,.1,0);const c=dt(new ue(.13,.03,10,32),t.glow);c.position.set(1.45,.1,0),e.add(l,c)}else if(i==="winder"){const l=dt(new ne(.6,.05,.1),t.metal,.36);l.position.x=.25;const c=dt(new zt(.07,.07,.2,16),t.paint,.48);c.position.x=.5,e.add(l,c)}else if(i==="geared")for(const[l,c]of[[.52,.24],[.86,.16]]){const h=dt(new zt(c,c,.08,14),t.dark,.1);h.position.x=l,e.add(h,Rn(()=>new ne(.05,.08,.05),14,c,.1,t.metal).translateX(l))}else{const l=dt(new ne(1.5,.03,.09),t.dark,.1);l.position.x=.4;const c=dt(new ne(.1,.16,.34),t.glow,.1);c.position.x=1.2,e.add(l,c,Rn(()=>new ne(.03,.035,.09),1,0,0,t.metal))}return e}const Vr=["tip","disc","blade","core"],Wr={tip:0,disc:.46,blade:.64,core:.7},Fy={tip:0,disc:.85,blade:1.55,core:2.35};function Nf(i,t,e){return i==="blade"?Ty(t,e):i==="disc"?Ay(t,e):i==="tip"?Ry(t,e):Dy(t,e)}function Of(i){const t=Df(i),e=new Rt,n={};for(const a of Vr){const o=a==="blade"&&i.blade.startsWith("boss_")?vy(i.blade.slice(5),t,i.glow):Nf(a,i[a],t);o.position.y=Wr[a],n[a]=o,e.add(o)}const s=n.blade.userData.wings??[];bc(s,0);const r=n.blade.userData.arms??[];return{root:e,parts:n,mats:t,shift:a=>bc(s,a),flail:a=>Uf(r,a),boss:n.blade.userData.anim??null}}function Wu(i){i.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const Mn=2.4;let ge=Xs.radius;const Zt=i=>Mn*Math.min(i/ge,1)**2,an=(i,t)=>Zt(Math.min(ge,Math.hypot(i,t))),ji=18,Ci=14;function ky(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.4,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[n,s]of[[128,5],[5,128]]){const r=n>s?t.createLinearGradient(0,0,128,0):t.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-n/2,64-s/2,n,s)}return new Xc(i)}function Xu(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Xc(i)}function By(){const i=document.createElement("canvas");i.width=32,i.height=8;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,32,0);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.65,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,8),new Xc(i)}const Ai=new Ht;class zy{mesh;pts=[];pos=new Float32Array(ji*2*3);col=new Float32Array(ji*2*3);color;constructor(t){this.color=new Ht(t);const e=new _e;e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("color",new Ae(this.col,3));const n=[];for(let s=0;s<ji-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}e.setIndex(n),this.mesh=new lt(e,new Te({vertexColors:!0,transparent:!0,blending:ze,depthWrite:!1,side:He})),this.mesh.frustumCulled=!1}reset(){this.pts.length=0}update(t,e,n){t?this.pts.unshift(t.clone()):this.pts.length&&this.pts.pop(),this.pts.length>ji&&(this.pts.length=ji);const s=this.pts.length;for(let r=0;r<ji;r++){const a=Math.min(r,s-1),o=r*6;if(s<2){this.pos.fill(0,o,o+6),this.col.fill(0,o,o+6);continue}const l=this.pts[a],c=this.pts[Math.max(0,a-1)],h=this.pts[Math.min(s-1,a+1)];let u=c.x-h.x,f=c.z-h.z;const d=Math.hypot(u,f)||1;u/=d,f/=d;const g=1-r/ji,x=n*g;this.pos[o]=l.x-f*x,this.pos[o+1]=l.y,this.pos[o+2]=l.z+u*x,this.pos[o+3]=l.x+f*x,this.pos[o+4]=l.y,this.pos[o+5]=l.z-u*x;const p=r<s?g*g*e:0;for(let m=0;m<2;m++)this.col[o+m*3]=this.color.r*p,this.col[o+m*3+1]=this.color.g*p,this.col[o+m*3+2]=this.color.b*p}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}class Hy{mesh;pts=[];pos=new Float32Array(Ci*3*3);col=new Float32Array(Ci*3*3);accent=new Ht;hotC=new Ht;constructor(t){this.accent.setHex(t),this.hotC.setHex(t).lerp(new Ht(16773328),.5);const e=new _e;e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("color",new Ae(this.col,3));const n=[];for(let s=0;s<Ci-1;s++){const r=s*3;n.push(r,r+1,r+3,r+1,r+4,r+3,r+1,r+2,r+4,r+2,r+5,r+4)}e.setIndex(n),this.mesh=new lt(e,new Te({vertexColors:!0,transparent:!0,blending:ze,depthWrite:!1,side:He})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(){this.pts.length=0}update(t,e,n){t&&e?this.pts.unshift({a:t.clone(),b:e.clone()}):this.pts.length&&this.pts.pop(),this.pts.length>Ci&&(this.pts.length=Ci);const s=this.pts.length;if(this.mesh.visible=s>1,!(s<2)){for(let r=0;r<Ci;r++){const a=Math.min(r,s-1),o=this.pts[a],l=a/(Ci-1),c=Math.pow(1-l,.85)*(a===0?.7:1),h=(o.a.x+o.b.x)/2,u=(o.a.y+o.b.y)/2,f=(o.a.z+o.b.z)/2,d=(o.a.x-o.b.x)/2,g=(o.a.y-o.b.y)/2,x=(o.a.z-o.b.z)/2,p=r*9;this.pos[p]=h+d*c,this.pos[p+1]=u+g*c,this.pos[p+2]=f+x*c;const m=.3+.25*Math.sin(l*Math.PI);this.pos[p+3]=h+d*c*m,this.pos[p+4]=u+g*c*m+.05*c,this.pos[p+5]=f+x*c*m,this.pos[p+6]=h-d*c*.8,this.pos[p+7]=u-g*c*.8,this.pos[p+8]=f-x*c*.8;const S=r<s?c*c*n:0,b=(y,C,E)=>{this.col[p+y*3]=C.r*E*S,this.col[p+y*3+1]=C.g*E*S,this.col[p+y*3+2]=C.b*E*S};b(0,this.accent,.55),b(1,this.hotC,.8),b(2,this.accent,.08)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}}class Gy{constructor(t){this.spec=t;const e=t.radius,n=Of(t.look);this.glowMat=n.mats.glow,this.poseShift=n.shift,this.model=n,this.parts=Vr.map(a=>n.parts[a]),n.root.scale.setScalar(t.look.scale??1),this.spinner.add(n.root),this.blur=new lt(new yo(e*.32,e*1.03,56),new Te({color:t.accent,transparent:!0,opacity:.3,blending:ze,depthWrite:!1,side:He})),this.blur.rotation.x=-Math.PI/2,this.blur.position.y=.95,this.shield=new lt(new ue(e*1.3,.05,8,48),new Te({color:16777215,transparent:!0,blending:ze,depthWrite:!1})),this.shield.rotation.x=Math.PI/2,this.shield.position.y=.7,this.shield.visible=!1,this.light=new tr(t.accent,0,9,2),this.light.position.y=1.4;const s=new Map;n.parts.blade.traverse(a=>{const o=a;if(o.isMesh&&(o.material===n.mats.paint||o.material===n.mats.metal)){let l=s.get(o.material);l||(l=o.material.clone(),s.set(o.material,l),this.bladeMats.push(l)),o.material=l,l.color.getHex()===n.mats.paint.color.getHex()&&l.isMeshPhysicalMaterial&&(this.bladePaint=l)}}),this.chipPaint=n.mats.paint,this.chipMetal=n.mats.metal,this.tilt.add(this.spinner,this.blur,this.shield,this.markOut,this.markIn),this.swing=new Hy(t.accent);const r=new Oi(.2,0);r.scale(.8,1.5,.8);for(let a=0;a<3;a++){const o=new lt(r,this.markMat);o.visible=!1,o.castShadow=!0,this.markShards.push(o)}this.aura.visible=!1,this.squash.add(this.unyaw),this.unyaw.add(this.tilt),this.group.add(this.squash,this.light,this.aura,...this.markShards),this.group.visible=!1,this.trail=new zy(t.accent)}group=new Rt;tilt=new Rt;spinner=new Rt;parts=[];blur;shield;light;trail;glowMat;poseShift;model;seen=!1;dropT=0;dropMax=.3;bossAct=0;bossFx=1;bossFz=0;justLanded=!1;recoilX=0;recoilZ=0;markShards=[];markMat=new he({color:16777215,emissive:16777215,emissiveIntensity:1.6,metalness:.3,roughness:.35,flatShading:!0});markOn=0;sunk=!1;flailV=1;prevAir=0;landSq=0;dig=0;braking=!1;brakeDir=[0,1];damageStage=0;seamMat=new Te({color:16742948,toneMapped:!1});scorchMat=new Te({color:328965,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});smoke=null;aura=new Rt;stage=0;flash=0;bursted=!1;y=0;yVel=0;airborne=!1;fallen=0;precess=Math.random()*6;tumble=0;seed=Math.random()*6;fx=null;vx=0;vz=0;discGone=!1;prevStun=0;stagMax=1;stagDx=0;stagDz=1;stagClock=0;toppleT=0;topL=0;topV=0;leanNow=0;bladeMats=[];bladePaint=null;chipPaint;chipMetal;swing;markOut=new Pe;markIn=new Pe;prevStrike=0;stDx=0;stDz=1;bladeExtra=0;swingTail=0;stLunge=0;swA=new L;swB=new L;hot=0;squash=new Rt;unyaw=new Rt;sqX=0;sqV=0;sqYaw=0;sqDx=0;sqDz=0;recoil(t,e,n){this.recoilX+=t*(.25+n*.55),this.recoilZ+=e*(.25+n*.55),this.sqYaw=Math.atan2(-e,t),this.sqDx=t,this.sqDz=e,this.sqV+=55+n*120,this.hot=1}partBounds(t){t.updateWorldMatrix(!0,!0);const e=new L;let n=0,s=0;return t.traverse(r=>{const a=r;if(!a.isMesh||!a.visible)return;a.geometry.computeBoundingBox();const o=a.geometry.boundingBox;for(let l=0;l<8;l++)e.set(l&1?o.max.x:o.min.x,l&2?o.max.y:o.min.y,l&4?o.max.z:o.min.z).applyMatrix4(a.matrixWorld),t.worldToLocal(e),n=Math.max(n,e.y),s=Math.max(s,Math.hypot(e.x,e.z))}),{top:n,rad:s}}seams(t,e,n,s,r){const{top:a,rad:o}=this.partBounds(t);if(!(o<.2))for(let l=0;l<e;l++){const c=n+l/e*Math.PI*2+l%2*.2,h=o*s,u=o*(s+r)*.55,f=o*r,d=c+.2*(l%2?1:-1),g=[[Math.cos(c)*h,Math.sin(c)*h],[Math.cos(d)*u,Math.sin(d)*u],[Math.cos(c+.05)*f,Math.sin(c+.05)*f]];for(let p=0;p<2;p++){const m=g[p+1][0]-g[p][0],S=g[p+1][1]-g[p][1],b=Math.hypot(m,S),y=new lt(new ne(b,.03,.045),this.seamMat);y.position.set((g[p][0]+g[p+1][0])/2,a+.018,(g[p][1]+g[p+1][1])/2),y.rotation.y=-Math.atan2(S,m),t.add(y)}const x=new lt(new js(o*.2,7),this.scorchMat);x.rotation.x=-Math.PI/2,x.scale.set(1.5,.8,1),x.position.set(Math.cos(d+.35)*u,a+.008,Math.sin(d+.35)*u),x.rotation.z=d,t.add(x)}}addDamage(t){for(;this.damageStage<t;)this.damageStage++,this.damageStage===1?(this.seams(this.model.parts.disc,4,this.seed,.35,.92),this.seams(this.model.parts.core,3,this.seed+1,.15,.85)):(this.seams(this.model.parts.core,4,this.seed+3,.1,.95),this.seams(this.model.parts.tip,2,this.seed+4,.2,.9))}dropPlate(t){const n=(this.model.parts.blade.userData.plates??[])[t];return!n||!n.parent?null:(this.group.updateWorldMatrix(!0,!0),n)}setStage(t){t<=this.stage||(this.stage=t,this.addDamage(t),t>=1&&this.model.parts.blade.traverse(e=>{e.isMesh&&e.material===this.bladePaint&&(e.visible=!1)}))}shed(t,e){const n=[];if(this.group.updateWorldMatrix(!0,!0),t===1){const s=[];this.model.parts.blade.traverse(r=>{const a=r;a.isMesh&&a.material===this.bladePaint&&a.visible&&s.push(a)});for(const r of s.slice(0,10)){r.updateWorldMatrix(!0,!1);const a=new lt(r.geometry,r.material);a.castShadow=!0,r.matrixWorld.decompose(a.position,a.quaternion,a.scale),e.add(a),n.push(a)}}else t===2&&!this.discGone&&(this.discGone=!0,e.attach(this.model.parts.disc),n.push(this.model.parts.disc));return n}update(t,e,n,s,r=null){if(this.flash=Math.max(0,this.flash-n*5),!t.inPlay||this.bursted){this.group.visible=!1,this.trail.update(null,0,0),this.swing.update(null,null,0);return}this.group.visible=!0,this.seen||(this.seen=!0,this.dropMax=this.spec.boss?.8:.3,this.dropT=this.dropMax);const a=t.px+(t.x-t.px)*e,o=t.py+(t.y-t.py)*e,l=Math.hypot(a,o),c=on(t);(t.leaving||t.out==="ringout")&&l>ge-.4?(this.airborne||(this.airborne=!0,this.y=Mn,this.yVel=5),this.yVel-=24*n,this.y+=this.yVel*n,this.tumble+=n*7):this.y=Zt(l),this.dropT>0&&(this.dropT-=n,this.dropT<=0&&(this.justLanded=!0));const h=t.airT>0?1-t.airT/at.JUMP_T:0,u=t.airT>0?Math.sin(Math.PI*Math.max(0,(h-.1)/.9))*2.6:0;let f=1;t.airT>0&&(h<.1?f=1-.3*Math.sin(h/.1*(Math.PI/2)):h<.4?f=1+.2*(1-(h-.1)/.3):h>.85&&(f=1+.1*((h-.85)/.15))),this.prevAir>0&&t.airT<=0&&(this.landSq=1),this.prevAir=t.airT,this.landSq=Math.max(0,this.landSq-n/.24),f*=1-.32*this.landSq*Math.cos((1-this.landSq)*4.2);const d=1/Math.sqrt(f);this.sunk=t.sink>0;const g=t.sink>0?16*t.sink*t.sink:0;t.sink>0&&(this.tumble+=n*5),this.group.position.set(a,this.y+u-g+(this.dropT>0?(this.dropT/this.dropMax)**2*(this.spec.boss?24:8):0),o),this.spinner.rotation.y=-t.phase,this.poseShift(t.shift),this.spec.flail&&(this.flailV+=(Math.max(0,Math.min(1,(c-.08)/.8))-this.flailV)*(1-Math.exp(-n*7)),this.model.flail(this.flailV));const x=Math.hypot(t.vx,t.vy);this.vx=t.vx,this.vz=t.vy;const p=Math.pow(Math.max(0,(.55-c)/.55),1.4);this.precess+=n*(3+p*16);let m=.025+p*.5;const S=Math.sin(s*(26+p*22))*p*.05,b=Math.exp(-n*6);this.recoilX*=b,this.recoilZ*=b;let y=0,C=0,E=0,w=0;if(t.stunT>0&&t.stunT>this.prevStun+.01){this.stagMax=Math.max(.3,t.stunT),this.stagClock=0;const I=x>.5?Math.atan2(t.vy,t.vx):Math.random()*6.28;this.stagDx=Math.cos(I),this.stagDz=Math.sin(I)}if(this.prevStun=t.stunT,t.stunT>0){this.stagClock+=n;const I=Math.min(1,1-t.stunT/this.stagMax),G=.62*Math.exp(-I*4.5)*Math.min(1,I/.06),j=.5*Math.pow(1-I,1.4),nt=this.stagClock*(17-I*7);y=this.stagDz*G+Math.sin(nt)*j,C=-this.stagDx*G+Math.cos(nt)*j,E=Math.sin(nt*2.3)*.07*(1-I),w=Math.cos(nt*1.9)*.07*(1-I)}let v=0;if(t.out==="spinout"){this.toppleT+=n;const I=1.3-m;this.topV+=((I-this.topL)*70-this.topV*7.5)*n,this.topL+=this.topV*n,this.precess+=n*(9*Math.exp(-this.toppleT*1.5)-3),m+=Math.max(0,this.topL);const G=m;v=Math.max(0,this.spec.radius*Math.sin(G)-.55*Math.cos(G))*.85;const j=38*Math.exp(-this.toppleT*1.3);if(this.fx&&Math.random()<j*n&&x<6){const nt=-Math.cos(this.precess)*m,vt=Math.sin(this.precess)*m,Pt=Math.hypot(nt,vt)||1,W=a+nt/Pt*this.spec.radius*.95,tt=o+vt/Pt*this.spec.radius*.95,ft=-vt/Pt,it=nt/Pt,st=3+Math.random()*6;this.fx(W,this.y+.1,tt,ft*st+(Math.random()-.5)*2,1+Math.random()*3,it*st+(Math.random()-.5)*2,.2+Math.random()*.25,1,.65,.25)}}let M=0,_=0;const A=t.strikeT>0;if(A&&this.prevStrike<=0&&(this.swing.reset(),r?(this.stDx=r[0],this.stDz=r[1]):x>1?(this.stDx=t.vx/x,this.stDz=t.vy/x):(this.stDx=Math.cos(this.precess),this.stDz=Math.sin(this.precess))),this.prevStrike=t.strikeT,A){const I=1-t.strikeT/at.STRIKE_T;M=I<.3?-.4*Math.sin(I/.3*(Math.PI/2)):-.4+.9*Math.sin(Math.min(1,(I-.3)/.25)*(Math.PI/2))*(1-Math.max(0,(I-.55)/.45)*.55),_=Math.sin(I*Math.PI),this.swingTail=Ci}this.bladeExtra+=n*38*_;const N=this.model.parts.blade;if(N.rotation.y=this.bladeExtra,N.scale.setScalar(1+.1*_),this.model.boss){const I=t.bossMove&&t.bossStage===0?1-t.bossT/Math.max(.01,t.bossDur):0;this.bossAct+=((t.bossMove==="charge"&&t.bossStage===1?1:0)-this.bossAct)*(1-Math.exp(-n*12)),t.bossMove?(this.bossFx=t.bossDx,this.bossFz=t.bossDy):x>1&&(this.bossFx=t.vx/x,this.bossFz=t.vy/x),this.model.boss({t:s,stage:t.stage,rear:I,act:this.bossAct,aim:-Math.atan2(this.bossFz,this.bossFx)+t.phase-this.bladeExtra,move:t.bossMove})}if(A||this.swingTail>0){const I=this.spec.radius;this.markOut.position.set(this.stDx*I*1.5,.95,this.stDz*I*1.5),this.markIn.position.set(this.stDx*I*.95,.7,this.stDz*I*.95)}this.braking=t.brakeT>0,this.dig+=((this.braking?1:0)-this.dig)*(1-Math.exp(-n*(this.braking?40:10)));let O=0;if(this.dig>.01){const I=Math.hypot(t.brakeDx,t.brakeDy);I>.1&&(this.brakeDir=[t.brakeDx/I,t.brakeDy/I]),O=.3*this.dig;const G=this.dig*.05;if(E+=Math.sin(s*91)*G,w+=Math.cos(s*83)*G,this.braking&&this.fx){const[j,nt]=this.brakeDir,vt=n*110,Pt=Math.floor(vt)+(Math.random()<vt-Math.floor(vt)?1:0);for(let W=0;W<Pt;W++){const tt=5+Math.random()*9,ft=(Math.random()-.5)*.9,it=Math.cos(ft),st=Math.sin(ft);this.fx(a+j*.25,this.y+.08,o+nt*.25,(j*it-nt*st)*tt,.6+Math.random()*2.4,(j*st+nt*it)*tt,.12+Math.random()*.22,1,.7+Math.random()*.3,.3,10)}}}this.leanNow=m,this.group.position.y+=v,this.group.position.x+=E,this.group.position.z+=w,this.tilt.rotation.set(Math.sin(this.precess)*m+S+t.steerY*.3+this.recoilZ+this.tumble+y+this.stDz*M+this.brakeDir[1]*O,0,Math.cos(this.precess)*m+S*.7-t.steerX*.3-this.recoilX+this.tumble*.6+C-this.stDx*M-this.brakeDir[0]*O),this.stLunge=M>0?M:0;{const I=Math.min(1,Math.max(t.stage*.34,1-t.armour)+(t.stunT>0?.45:0));Vr.forEach((G,j)=>{if(G==="disc"&&this.discGone)return;const nt=this.model.parts[G];if(I<.06||G==="tip"){nt.position.set(0,Wr[G],0),nt.rotation.x=nt.rotation.z=0;return}const vt=I*.04*(G==="core"?1.4:1),Pt=j*2.1+this.seed;nt.position.set(Math.sin(s*47+Pt)*vt,Wr[G]+Math.sin(s*61+Pt*1.3)*vt*.6,Math.sin(s*41+Pt*1.7)*vt),nt.rotation.x=Math.sin(s*39+Pt)*I*.06,nt.rotation.z=Math.sin(s*33+Pt*.7)*I*.06})}{this.sqV+=(-30*30*this.sqX-2*30*this.sqV)*n,this.sqX+=this.sqV*n;const G=Math.max(-.4,Math.min(1,this.sqX));this.squash.rotation.y=this.sqYaw,this.unyaw.rotation.y=-this.sqYaw;const j=1-.12*this.dig;this.squash.scale.set((1-G*.2)*d*(1+.06*this.dig),(1+G*.05)*f*j,(1+G*.1)*d*(1+.06*this.dig)),this.squash.position.set(this.sqDx*G*.16+this.stDx*this.stLunge*.7,0,this.sqDz*G*.16+this.stDz*this.stLunge*.7)}this.hot=Math.max(0,this.hot-n/.08);for(const I of this.bladeMats)I.emissive.setScalar(this.hot>0?1:0),I.emissiveIntensity=this.hot>0?.4+2.6*this.hot:1;if(this.blur.material.opacity=.16*c,this.glowMat.emissiveIntensity=.7+1.1*c+this.flash*5,this.light.intensity=4*c+this.flash*30,this.shield.visible=t.braceT>0,this.shield.visible){const I=1+.08*Math.sin(s*30);this.shield.scale.set(I,I,1),this.shield.material.color.setHex(16777215)}A?(this.markOut.getWorldPosition(this.swA),this.markIn.getWorldPosition(this.swB),this.swA.y=Math.max(this.swA.y,this.y+.15),this.swB.y=Math.max(this.swB.y,this.y+.1),this.swing.update(this.swA,this.swB,1)):(this.swingTail=Math.max(0,this.swingTail-1),this.swing.update(null,null,1));let B=null;for(const I of oo)t.status[I]>0&&(!B||t.status[I]>t.status[B])&&(B=I);if(this.smoke&&(t.stage>=1||t.armour<.5)&&!t.out){const I=t.stage>=2?16:t.stage>=1?9:4;if(Math.random()<I*n){const G=Math.random()*Math.PI*2,j=this.spec.radius*.5;this.smoke(a+Math.cos(G)*j-t.vx*.02,this.y+.7+u,o+Math.sin(G)*j-t.vy*.02,-t.vx*.12+(Math.random()-.5)*.8,1.3+Math.random()*1.2,-t.vy*.12+(Math.random()-.5)*.8,.3+Math.random()*.25,.9+Math.random()*.6)}}if(this.markOn=B?Math.min(1,this.markOn+n*7):Math.max(0,this.markOn-n*7),B){const I=Le[B].color;this.markMat.color.setHex(I),this.markMat.emissive.setHex(I)}const q=this.spec.radius*(1.1+.35*this.markOn)+.15;if(this.markShards.forEach((I,G)=>{I.visible=this.markOn>.02;const j=s*3.2+G*Math.PI*2/3;I.position.set(Math.cos(j)*q,.85+Math.sin(s*5+G*2)*.12,Math.sin(j)*q),I.rotation.set(s*4+G,j,s*3+G*2),I.scale.setScalar(this.markOn*(1+.1*Math.sin(s*14+G)))}),this.aura.visible=t.superT>0,t.superT>0){for(const I of this.aura.children)I.userData.spin&&(I.rotation.z+=I.userData.spin*n);this.aura.scale.setScalar(1+.06*Math.sin(s*22))}const U=Math.hypot(t.vx,t.vy),F=!t.out&&!this.airborne;this.trail.update(F?new L(a,this.y+.1,o):null,Math.min(1,U/18)*(t.dashT>0||t.boostT>0?.4:.1),.08+Math.min(.1,U/200)+(t.dashT>0?.06:0))}}const je=900;class Vy{constructor(t){this.canvas=t,this.renderer=new r_({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Id,this.renderer.toneMapping=Ic,this.renderer.toneMappingExposure=1,this.scene.background=new Ht(329483),this.scene.fog=new xo(329483,34,80);const e=new Qa(this.renderer);this.scene.environment=e.fromScene(new Af,.04).texture,this.scene.environmentIntensity=.55;const n=this.sun=new Mc(16777215,2.4);n.position.set(7,20,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-13,s.right=s.top=13,s.near=1,s.far=50,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,this.scene.add(n,new wf(9413887,329226,.45));const r=new tr(16742963,110,40,2);r.position.set(-14,5,-4);const a=new tr(3385599,110,40,2);a.position.set(14,5,-4),this.scene.add(r,a),this.setStadium(Xs);const o=new _e;this.sparkPos.fill(-999),o.setAttribute("position",new Ae(this.sparkPos,3)),o.setAttribute("color",new Ae(this.sparkCol,3)),this.sparks=new h_(o,new gf({size:.22,map:Xu(),vertexColors:!0,transparent:!0,blending:ze,depthWrite:!1})),this.sparks.frustumCulled=!1,this.scene.add(this.sparks);const l=new _e;this.streakPos.fill(-999),l.setAttribute("position",new Ae(this.streakPos,3)),l.setAttribute("color",new Ae(this.streakCol,3));const c=new Float32Array(je*8),h=new Uint32Array(je*6);for(let d=0;d<je;d++){c.set([0,1,1,1,0,0,1,0],d*8);const g=d*4;h.set([g,g+1,g+2,g+1,g+3,g+2],d*6)}l.setAttribute("uv",new Ae(c,2)),l.setIndex(new Ae(h,1)),this.streaks=new lt(l,new Te({map:By(),vertexColors:!0,transparent:!0,blending:ze,depthWrite:!1,side:He,fog:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);const u=ky();for(let d=0;d<10;d++){const g=new vu(new mc({map:u,color:16777215,transparent:!0,opacity:0,blending:ze,depthWrite:!1}));g.visible=!1,this.scene.add(g),this.shocks.push({mesh:g,life:0,max:1,size:1})}const f=new lt(new yo(.95,1.08,48),new Te({color:16777215,transparent:!0,opacity:.9,blending:ze,depthWrite:!1,depthTest:!1,side:He}));f.rotation.x=-Math.PI/2,this.aimArrow=new lt(new us(.22,.7,3),new Te({color:16777215,transparent:!0,opacity:.9,blending:ze,depthWrite:!1,depthTest:!1})),this.aim.add(f,this.aimArrow),this.aim.visible=!1,this.scene.add(this.aim),this.composer=new Cf(this.renderer),this.composer.addPass(new Lf(this.scene,this.camera)),this.bloom=new fs(new K(1,1),.38,.4,.92),this.composer.addPass(this.bloom),this.composer.addPass(new Pf),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new to;camera=new tn(42,1,.1,200);composer;bloom;tops=[];debugCam=null;pieces=[];chips=[];puffs=[];puffGeo=new _o(.2,0);smokeMat=new he({color:2369068,roughness:1,flatShading:!0});dustMat=new he({color:9209464,roughness:1,flatShading:!0});stoneMat=new he({color:7039600,roughness:.9,flatShading:!0});world=null;shove=new L;shoveV=new L;finT=0;finDur=1;finTarget=-1;finEnv=0;fx3=0;trauma=0;focus=new L;zoom=1;distScale=1;aim=new Rt;aimArrow;raycaster=new Y_;arena=new Rt;stadium=Xs;segs=[];pillarMeshes=[];dangerMat=new Te({color:16726820});fovKick=0;bolts=[];constructs=[];sun;beams=[];plates=[];floorPhase=[];hazards=[];slabGeo=new ne(1,.3,1);marks=[];spikeGeo=new us(.26,1,5);chevGeo=(()=>{const t=new sn;t.moveTo(-.45,-.55),t.lineTo(.55,0),t.lineTo(-.45,.55),t.lineTo(-.15,0),t.closePath();const e=new Ni(t,{depth:.1,bevelEnabled:!1});return e.rotateX(-Math.PI/2),e})();warnMat=new he({color:2755846,emissive:16730650,emissiveIntensity:1.5,flatShading:!0});heavyMat=new he({color:3816774,metalness:.8,roughness:.4,flatShading:!0});introT=0;introDur=3;introTarget=0;introEnv=0;shardPool=[];scorchPool=[];shardGeo=(()=>{const t=new Oi(.28,0);return t.scale(.7,.7,2.2),t})();shardMat=new he({color:16773824,emissive:16765802,emissiveIntensity:2,flatShading:!0});scorchGeo=new js(.6,7);scorchMat=new he({color:722437,emissive:8004104,emissiveIntensity:.35,roughness:1,flatShading:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2});sparkPos=new Float32Array(je*3);sparkCol=new Float32Array(je*3);sparkVel=new Float32Array(je*3);sparkLife=new Float32Array(je);sparkMax=new Float32Array(je);sparkBase=new Float32Array(je*3);sparkCap=je;sparkGrav=new Float32Array(je);streakPos=new Float32Array(je*12);streakCol=new Float32Array(je*12);streaks;sparkNext=0;sparks;shocks=[];applyQuality(t){const e=Rd[t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap)),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap));const n=this.sun.shadow;n.mapSize.x!==e.shadow&&(n.mapSize.set(e.shadow,e.shadow),n.map?.dispose(),n.map=null),this.bloom.enabled=e.bloom,this.sparkCap=e.sparks,this.sparkNext%=this.sparkCap,this.resize()}setStadium(t){this.scene.remove(this.arena),this.arena.traverse(p=>p.geometry?.dispose()),this.arena=new Rt,this.scene.add(this.arena),this.stadium=t,ge=t.radius;const e=t.radius,n=e+3,s=this.sun.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.far=90,s.updateProjectionMatrix(),this.sun.position.set(7,20,9).multiplyScalar(Math.max(1,e/10));for(const p of this.beams)this.scene.remove(p.beam,p.gem);this.beams=[];const r=[],a=t.collapse?t.collapse.inner*e:e;for(let p=0;p<=48;p++){const m=a*p/48;r.push(new K(m,Zt(m)))}t.collapse?r.push(new K(a,-.35)):r.push(new K(e+.7,Mn),new K(e+.9,-1.2));const o=new he({color:t.theme.floor,metalness:.75,roughness:.26,side:He}),l=new lt(new os(r,96),o);if(l.receiveShadow=!0,this.arena.add(l),this.plates=[],this.floorPhase=t.collapse?new Array(t.collapse.sectors).fill(0):[],t.collapse){const p=t.collapse,m=Math.PI*2/p.sectors;for(let S=0;S<p.sectors;S++){const b=Math.PI/2-(S+1)*m+.012,y=[];for(let v=0;v<=14;v++){const M=a+(e-a)*v/14;y.push(new K(M,Zt(M)))}y.push(new K(e+.7,Mn),new K(e+.9,-1.2),new K(a,-.35),new K(a,Zt(a)));const C=o.clone();C.emissive=new Ht(16734744),C.emissiveIntensity=0;const E=new lt(new os(y,6,b,m-.024),C);E.receiveShadow=!0,this.arena.add(E);const w=new lt(new os([new K(a,-.9),new K(e+.8,-.9)],6,b,m-.024),new Te({color:4855304,side:He}));w.visible=!1,this.arena.add(w),this.plates.push({mesh:E,mat:C,ember:w})}}this.hazards=[];const c=new he({color:t.theme.wall,metalness:1,roughness:.3}),h=new Te({color:t.theme.strip});for(const p of t.hazards??[]){const m=new Rt;if(p.kind==="bar"){const b=(p.r1-p.r0)/7;for(let C=0;C<7;C++){const E=p.r0+(C+.5)*b,w=Math.atan((Zt(E+.2)-Zt(E-.2))/.4),v=new lt(new ne(b*.97,.7,p.width*2),c);v.position.set(E,Zt(E)+.35,0),v.rotation.z=w,v.castShadow=!0;const M=new lt(new ne(b*.6,.05,p.width*1.1),h);M.position.set(E,Zt(E)+.72,0),M.rotation.z=w,m.add(v,M)}const y=new lt(new zt(p.width*1.4,p.width*1.6,.9,6),c);y.position.set(p.r0,Zt(p.r0)+.4,0),y.castShadow=!0,m.add(y)}else{const S=new lt(new zt(p.r*.92,p.r,1.1,6),c);S.position.y=.55,S.castShadow=!0;const b=new lt(new zt(p.r*1.01,p.r*1.01,.09,6),h);b.position.y=.78;const y=new lt(new zt(p.r*.6,p.r*.75,.12,6),c);y.position.y=1.14,m.add(S,b,y)}this.arena.add(m),this.hazards.push({h:p,obj:m})}const u=new Te({color:2899819});for(const p of[e*.33,e*.6]){const m=new lt(new ue(p,.022,6,96),u);m.rotation.x=Math.PI/2,m.position.y=Zt(p)+.012,this.arena.add(m)}if(t.rail){const p=e-t.rail.width-.9,m=new lt(new os([new K(p,Zt(p)+.015),new K(e-.25,Zt(e-.25)+.015)],96),new Te({color:t.theme.strip,transparent:!0,opacity:.05,blending:ze,depthWrite:!1,side:He})),S=new lt(new ue(p,.03,6,128),new Te({color:t.theme.strip}));S.rotation.x=Math.PI/2,S.position.y=Zt(p)+.02,this.arena.add(m,S)}const f=new Te({color:t.theme.strip}),d=Math.PI*2/t.segments,g=d-.03;this.segs=[];for(let p=0;p<t.segments;p++){const m=new Rt;m.rotation.y=-(p*d-d/2+.015),this.arena.add(m);const S=new he({color:t.theme.wall,metalness:1,roughness:.24,emissive:16724736,emissiveIntensity:0}),b=new lt(new ue(e+.2,.34,12,10,g),S);b.rotation.x=Math.PI/2,b.position.y=Mn+.1,b.castShadow=!0;const y=new lt(new ue(e-.16,.035,6,10,g),f);y.rotation.x=Math.PI/2,y.position.y=Mn-.05;const C=new lt(new ue(e+.15,.05,6,8,g),this.dangerMat);C.rotation.x=Math.PI/2,C.position.y=Mn+.03;const E=t.openSegs.includes(p);b.visible=y.visible=!E,C.visible=E,m.add(b,y,C),this.segs.push({wall:b,glow:y,lip:C,mat:S,open:E})}this.pillarMeshes=t.pillars.map(p=>{const m=new Rt,S=new lt(new zt(p.r*.92,p.r*1.08,1.7,6),new he({color:t.theme.wall,metalness:1,roughness:.3,emissive:16724736,emissiveIntensity:0}));S.castShadow=!0;const b=new lt(new ue(p.r*1.02,.04,6,24),f);return b.rotation.x=Math.PI/2,b.position.y=.45,m.add(S,b),m.position.set(p.x,Zt(Math.hypot(p.x,p.y))+.85,p.y),this.arena.add(m),m});const x=new lt(new js(90,48),new he({color:461070,roughness:.9,metalness:.2}));x.rotation.x=-Math.PI/2,x.position.y=-1.2,x.receiveShadow=!0,this.arena.add(x)}chunks(t,e,n,s,r,a,o){const l=new he({color:r,metalness:1,roughness:.3});for(let c=0;c<s;c++){const h=.18+Math.random()*.3,u=new lt(new ne(h*1.4,h,h*.9),l);u.castShadow=!0,u.position.set(t+(Math.random()-.5)*1.6,e+Math.random()*.5,n+(Math.random()-.5)*1.6),this.scene.add(u);const f=3+Math.random()*9;this.pieces.push({obj:u,v:new L(a*f+(Math.random()-.5)*5,4+Math.random()*8,o*f+(Math.random()-.5)*5),w:new L(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:5})}}breakPiece(t,e,n,s){const r=Math.hypot(n,s)||1;if(t==="wall"){const a=this.segs[e];if(!a||a.open)return;a.open=!0,a.wall.visible=a.glow.visible=!1,a.lip.visible=!0,this.chunks(n,Mn+.2,s,9,this.stadium.theme.wall,n/r,s/r),this.shock(n,Mn+.2,s,7,.5,16738874)}else{const a=this.pillarMeshes[e];if(!a||!a.visible)return;a.visible=!1,this.chunks(n,a.position.y,s,10,this.stadium.theme.wall,0,0),this.shock(n,a.position.y,s,5,.45,16765088)}for(let a=0;a<70;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*13;this.spark(n,Mn*(t==="wall"?1:.5)+.4,s,Math.cos(o)*l,3+Math.random()*10,Math.sin(o)*l,.3+Math.random()*.6,1,.6,.3)}this.trauma=Math.min(1,this.trauma+.8),this.fovKick=Math.max(this.fovKick,5)}kick(t){this.fovKick=Math.max(this.fovKick,t)}burstSparks(t,e,n,s,r,a){Ai.setHex(a);for(let o=0;o<s;o++){const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.spark(t,e,n,Math.cos(l)*c,2+Math.random()*r*.7,Math.sin(l)*c,.3+Math.random()*.5,Ai.r,Ai.g,Ai.b)}}bolt(t,e,n,s,r){const a=[];for(let c=0;c<=9;c++){const h=c/9,u=c===0||c===9?0:.7,f=t+(n-t)*h+(Math.random()-.5)*u,d=e+(s-e)*h+(Math.random()-.5)*u;a.push(new L(f,Zt(Math.min(ge,Math.hypot(f,d)))+1+Math.sin(h*Math.PI)*1.2,d))}const l=new mf(new _e().setFromPoints(a),new Wc({color:r,transparent:!0,blending:ze,depthWrite:!1}));l.frustumCulled=!1,this.scene.add(l),this.bolts.push({line:l,life:.22})}superFx(t,e){const n=this.tops[t];if(!n)return;const s=n.group.position;e.forEach((r,a)=>{const o=Le[r].color,l=Zt(Math.min(ge,Math.hypot(s.x,s.z))),c=hy(r,(h,u)=>Zt(Math.min(ge,Math.hypot(s.x+h,s.z+u)))-l);c.group.position.set(s.x,l,s.z),c.group.rotation.y=a*.5,c.update(0,0,()=>{}),this.scene.add(c.group),this.constructs.push({c,i:t,t:0,el:r}),this.shock(s.x,s.y+.3,s.z,8+a*2,.4,o),this.burstSparks(s.x,s.y+.6,s.z,130,22,o)}),this.trauma=1,this.fovKick=Math.max(this.fovKick,10)}pulseFx(t,e){const n=Le[t.element].color,s=Zt(Math.min(ge,Math.hypot(t.x,t.y)))+.3;if(t.element==="plasma"&&t.targets.length){const r=e.tops[t.targets[0]],a=this.constructs.find(o=>o.i===t.i&&o.el==="plasma"&&o.t<.1);r&&a&&a.c.group.position.set(r.x,Zt(Math.min(ge,Math.hypot(r.x,r.y))),r.y)}this.shock(t.x,s,t.y,t.radius*1.9,.3,n);for(const r of t.targets){const a=e.tops[r];a&&(this.bolt(t.x,t.y,a.x,a.y,n),this.burstSparks(a.x,Zt(Math.min(ge,Math.hypot(a.x,a.y)))+.7,a.y,22,9,n),this.tops[r]&&(this.tops[r].flash=1))}this.trauma=Math.min(1,this.trauma+.25)}reactFx(t,e,n){const s=Zt(Math.min(ge,Math.hypot(t,e)))+.7;this.shock(t,s,e,9,.45,n),this.shock(t,s+.4,e,5,.3,16777215),this.burstSparks(t,s,e,120,19,n),this.trauma=Math.min(1,this.trauma+.7),this.fovKick=Math.max(this.fovKick,6)}flashTop(t,e,n){this.shock(t,e,n,4.5,.3,16767408)}crackTop(t,e){const n=this.tops[t];if(!n||n.bursted)return;n.setStage(e);const s=n.group.position,r=n.shed(e,this.scene);Math.hypot(s.x,s.z);for(const a of r){const o=Math.atan2(s.z,s.x)+(Math.random()-.5)*2.6,l=5+Math.random()*8;this.pieces.push({obj:a,v:new L(Math.cos(o)*l+n.vx*.5,6+Math.random()*6,Math.sin(o)*l+n.vz*.5),w:new L(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),life:5,flat:e===2,hot:1})}this.flashTop(s.x,s.y+.6,s.z),this.burstSparks(s.x,s.y+.6,s.z,46,14,16756832),this.trauma=Math.min(1,this.trauma+.6)}dropLoot(t,e,n){n.forEach((s,r)=>{const a=r/Math.max(1,n.length)*Math.PI*2+.6,o=n.length>1?1.8:0,l=t+Math.cos(a)*o,c=e+Math.sin(a)*o,h=Zt(Math.min(ge,Math.hypot(l,c))),u=new vu(new mc({map:Xu(),color:s,transparent:!0,opacity:0,blending:ze,depthWrite:!1}));u.scale.setScalar(3.2),u.position.set(l,h+1.1,c);const f=new lt(new Oi(.5),new he({color:1052950,emissive:s,emissiveIntensity:2.2,metalness:.7,roughness:.2,flatShading:!0}));f.scale.set(.75,1.25,.75),f.position.set(l,h+1.1,c),this.scene.add(u,f),this.beams.push({beam:u,gem:f,life:0}),this.shock(l,h+.2,c,3.5,.5,s);const d=new Ht(s);for(let g=0;g<40;g++){const x=Math.random()*Math.PI*2,p=2+Math.random()*7;this.spark(l,h+.5,c,Math.cos(x)*p,5+Math.random()*10,Math.sin(x)*p,.5+Math.random()*.6,d.r,d.g,d.b)}})}inHole(t,e){const n=this.stadium.collapse;return!n||Math.hypot(t,e)<n.inner*this.stadium.radius?!1:this.floorPhase[Ac(n,Math.atan2(e,t))]===2}wedgePoint(t){const e=this.stadium.collapse,n=this.stadium.radius,s=(t+.1+Math.random()*.8)/e.sectors*Math.PI*2,r=e.inner*n+.3+Math.random()*(n-e.inner*n-.6);return[Math.cos(s)*r,Math.sin(s)*r]}floorWarn(t){!this.plates[t]||this.floorPhase[t]>=1||(this.floorPhase[t]=1,this.trauma=Math.min(1,this.trauma+.2))}floorFall(t){const e=this.plates[t];if(e){this.floorPhase[t]=2,e.mesh.visible=!1,e.ember.visible=!0;for(let n=0;n<9;n++){const[s,r]=this.wedgePoint(t),a=new lt(this.slabGeo,e.mat);a.scale.set(1.6+Math.random()*1.8,1,1.4+Math.random()*1.6),a.position.set(s,Zt(Math.hypot(s,r))+.1,r),a.rotation.set((Math.random()-.5)*.3,Math.random()*6,(Math.random()-.5)*.3),a.castShadow=!0,this.scene.add(a),this.pieces.push({obj:a,v:new L((Math.random()-.5)*2,-1-Math.random()*3,(Math.random()-.5)*2),w:new L((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),life:3}),n%2===0&&this.puff(s,Zt(Math.hypot(s,r))+.3,r,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,1.2+Math.random()*.8,.8+Math.random()*.5,!0)}for(let n=0;n<50;n++){const[s,r]=this.wedgePoint(t);this.spark(s,Zt(Math.hypot(s,r))+.2,r,(Math.random()-.5)*8,4+Math.random()*8,(Math.random()-.5)*8,.3+Math.random()*.4,1,.6,.25,12)}this.trauma=Math.min(1,this.trauma+.6),this.fovKick=Math.max(this.fovKick,4)}}fallFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;for(let s=0;s<20;s++){const r=Math.random()*6.28;this.spark(n.x,n.y+.3,n.z,Math.cos(r)*3,2+Math.random()*3,Math.sin(r)*3,.3+Math.random()*.3,1,.7,.3,10)}this.trauma=Math.min(1,this.trauma+.3)}legendFx(t){const e=an(t.x,t.y),n=this.tops[t.i],s=n?.spec.accent??16761402;switch(t.id){case"shard":t.n?(this.burstSparks(t.x,e+.8,t.y,40,14,16773296),this.shock(t.x,e+.3,t.y,3.2,.25,16770720),this.trauma=Math.min(1,this.trauma+.35),t.k!==void 0&&this.tops[t.k]?.recoil(0,.01,.8)):this.burstSparks(t.x,e+.8,t.y,24,9,16773296);break;case"bank":{const r=n?.group.position;if(!r)break;for(let a=0;a<50;a++){const o=Math.random()*Math.PI*2,l=2+Math.random()*2.5;this.spark(r.x+Math.cos(o)*l,r.y+.5+Math.random(),r.z+Math.sin(o)*l,-Math.cos(o)*14,0,-Math.sin(o)*14,.3,.5,.9,1,0)}this.shock(r.x,r.y+.3,r.z,4,.3,10479871),n&&(n.hot=1);break}case"twin":case"opener":this.burstSparks(t.x,e+.7,t.y,30,10,s),this.shock(t.x,e+.3,t.y,2.6,.2,s);break;case"echo":this.burstSparks(t.x,e+.7,t.y,60,13,s),this.trauma=Math.min(1,this.trauma+.4);break;case"thorn":for(let r=0;r<16;r++){const a=Math.random()*Math.PI*2;this.spark(t.x,e+.6,t.y,Math.cos(a)*9,1+Math.random()*3,Math.sin(a)*9,.2+Math.random()*.2,1,.85,.35,8)}break;case"rend":{const r=this.tops[t.i]?.group.position;if(r)for(let a=0;a<3;a++)this.spark(r.x+(Math.random()-.5),r.y+.5,r.z+(Math.random()-.5),(Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3,.4,1,.2,.15,12);break}case"scorch":{if(t.n){const r=this.tops[t.i]?.group.position;r&&this.spark(r.x+(Math.random()-.5),r.y+.4,r.z+(Math.random()-.5),(Math.random()-.5)*2,2+Math.random()*3,(Math.random()-.5)*2,.35,1,.5,.1,10)}break}}}bossIntro(t,e){this.introTarget=t,this.introDur=e,this.introT=e}telegraphFx(t){if(t.move==="drops")return;const e=new Rt,n=[],s=(o,l,c,h=this.warnMat)=>{const u=new lt(o,h);return u.position.set(l,an(l,c),c),u.castShadow=!0,e.add(u),n.push(u),u};let r,a=t.dur;if(t.move==="slam"){for(let l=0;l<14;l++){const c=l/14*Math.PI*2;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.97,t.y+Math.sin(c)*t.r*.97)}for(let l=0;l<7;l++){const c=l/7*Math.PI*2+.3;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.55,t.y+Math.sin(c)*t.r*.55)}r=(l,c)=>n.forEach((h,u)=>{const f=Math.min(1,l*3.2)*(u<14?1.5:.9)*(.9+.2*Math.sin(c*(12+40*l)+u));h.scale.set(1,Math.max(.01,f),1),h.position.y=an(h.position.x,h.position.z)+f*.5,h.rotation.y=c*2+u})}else if(t.move==="charge"){const l=Math.floor(14.73684210526316),c=-Math.atan2(t.dy,t.dx);let h=0;for(let u=0;u<l;u++){const f=t.x+t.dx*(2.6+u*1.9),d=t.y+t.dy*(2.6+u*1.9);if(Math.hypot(f,d)>ge-.3)break;const g=s(this.chevGeo,f,d);if(g.rotation.y=c,g.scale.set(1.3,1,t.r*.85),h++,u%2===0)for(const x of[-1,1]){const p=f-t.dy*x*t.r,m=d+t.dx*x*t.r;Math.hypot(p,m)<ge-.3&&s(this.spikeGeo,p,m).scale.set(.8,1.1,.8)}}a=t.dur+.75,r=(u,f)=>{let d=0;n.forEach(g=>{g.geometry===this.chevGeo&&(g.visible=d<h*Math.min(1,u*2.4),g.scale.y=1+.9*Math.max(0,Math.sin(f*16-d*.9)),d++)})}}else[5,8.5].forEach((o,l)=>{for(let c=0;c<9;c++){const h=s(this.chevGeo,t.x,t.y);h.userData={a:c/9*Math.PI*2+l*.3,r0:o,row:l},h.scale.set(1.2,1,.9)}}),r=(o,l,c)=>{n.forEach(u=>{const{a:f,r0:d,row:g}=u.userData,x=(l*.9+g*.5)%1,p=d*(1-.4*x)+1.2,m=t.x+Math.cos(f)*p,S=t.y+Math.sin(f)*p;u.position.set(m,an(m,S)+.05,S),u.rotation.y=-(f+Math.PI),u.scale.y=.6+.8*Math.min(1,o*3)*(1-x*.4)});const h=c*160;for(let u=0;u<Math.floor(h)+(Math.random()<h-Math.floor(h)?1:0);u++){const f=Math.random()*Math.PI*2,d=4+Math.random()*8,g=t.x+Math.cos(f)*d,x=t.y+Math.sin(f)*d;this.spark(g,an(g,x)+.15,x,-Math.cos(f)*(9+Math.random()*6),.4,-Math.sin(f)*(9+Math.random()*6),.3,.6,.85,1,2)}};this.scene.add(e),this.marks.push({g:e,life:a,max:a,tick:r})}bossmoveFx(t){const e=an(t.x,t.y);if(t.move==="slam"){for(let n=0;n<90;n++){const s=Math.random()*Math.PI*2,r=6+Math.random()*16;this.spark(t.x+Math.cos(s)*1.5,e+.2,t.y+Math.sin(s)*1.5,Math.cos(s)*r,.5+Math.random()*4,Math.sin(s)*r,.2+Math.random()*.4,1,.6,.2,10)}this.shock(t.x,e,t.y,t.r*1.4,.35,16760928),this.floorChips(t.x,e,t.y,30,null,1);for(let n=0;n<8;n++){const s=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(s)*2,e+.3,t.y+Math.sin(s)*2,Math.cos(s)*5,1+Math.random()*2,Math.sin(s)*5,1.2+Math.random(),1,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,8),this.recoilAll(t.x,t.y,t.targets,1)}else{for(let n=0;n<50;n++)this.spark(t.x-t.dx*2,e+.2,t.y-t.dy*2,-t.dx*(8+Math.random()*14)+(Math.random()-.5)*8,.5+Math.random()*4,-t.dy*(8+Math.random()*14)+(Math.random()-.5)*8,.2+Math.random()*.3,1,.7,.3,10);this.floorChips(t.x,e,t.y,16,[-t.dx,-t.dy],.8),this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,5)}}recoilAll(t,e,n,s){for(const r of n){const a=this.world?.tops[r];if(!a)continue;const o=Math.hypot(a.x-t,a.y-e)||1;this.tops[r]?.recoil((a.x-t)/o,(a.y-e)/o,s)}}zoneWarnFx(t){const e=new Rt,n=[];for(let a=0;a<7;a++){const o=a/7*Math.PI*2,l=t.x+Math.cos(o)*t.r*.9,c=t.y+Math.sin(o)*t.r*.9,h=new lt(this.spikeGeo,this.warnMat);h.position.set(l,an(l,c),c),h.scale.set(.8,.01,.8),n.push(h),e.add(h)}const s=new lt(new zt(t.r*.8,t.r*.8,1.4,6),this.heavyMat);s.castShadow=!0,e.add(s);const r=an(t.x,t.y);this.scene.add(e),this.marks.push({g:e,life:t.dur,max:t.dur,tick:(a,o)=>{s.position.set(t.x,r+.7+(1-a*a)*18,t.y),s.rotation.y=o*.8+a*3,n.forEach((l,c)=>{const h=Math.min(1,a*4)*(.9+.3*Math.sin(o*(14+30*a)+c));l.scale.y=Math.max(.01,h),l.position.y=an(l.position.x,l.position.z)+h*.5})}})}zoneHitFx(t){const e=an(t.x,t.y);for(let s=0;s<50;s++){const r=Math.random()*Math.PI*2,a=4+Math.random()*11;this.spark(t.x+Math.cos(r)*.8,e+.2,t.y+Math.sin(r)*.8,Math.cos(r)*a,.5+Math.random()*4,Math.sin(r)*a,.2+Math.random()*.35,1,.7,.25,10)}this.shock(t.x,e,t.y,t.r*2.2,.3,16765072),this.floorChips(t.x,e,t.y,14,null,.8);for(let s=0;s<4;s++){const r=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(r),e+.3,t.y+Math.sin(r),Math.cos(r)*2.5,1+Math.random(),Math.sin(r)*2.5,1+Math.random()*.6,1,!0)}const n=new lt(new zt(t.r*.8,t.r*.8,.7,6),this.heavyMat);n.castShadow=!0,n.position.set(t.x,e+.4,t.y),this.scene.add(n),this.pieces.push({obj:n,v:new L,w:new L,life:3,ttl:1.6}),this.trauma=Math.min(1,this.trauma+.55),this.recoilAll(t.x,t.y,t.targets,.8)}bossPhaseFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.burstSparks(n.x,n.y+.8,n.z,120,16,e.spec.accent),this.floorChips(n.x,n.y,n.z,24,null,1),this.trauma=1,this.fovKick=Math.max(this.fovKick,7),e.hot=1}hazardHit(t){const e=Zt(Math.min(ge,Math.hypot(t.x,t.y)))+.55;for(let n=0;n<8+t.strength*30;n++){const s=Math.atan2(t.ny,t.nx)+(Math.random()-.5)*1.3,r=5+Math.random()*12*(.4+t.strength);this.spark(t.x,e,t.y,Math.cos(s)*r,.5+Math.random()*4,Math.sin(s)*r,.15+Math.random()*.3,1,.85,.4,8)}t.strength>.25&&this.shock(t.x,e-.3,t.y,2+t.strength*3,.25,15265952),this.tops[t.i]?.recoil(t.nx,t.ny,t.strength),this.trauma=Math.min(1,this.trauma+t.strength*.4),this.shoveV.x+=t.nx*t.strength*14,this.shoveV.z+=t.ny*t.strength*14}puff(t,e,n,s,r,a,o,l,c){if(this.puffs.length>=60){const u=this.puffs.shift();this.scene.remove(u.m)}const h=new lt(this.puffGeo,c?this.dustMat:this.smokeMat);h.position.set(t,e,n),h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),h.scale.setScalar(.01),this.scene.add(h),this.puffs.push({m:h,v:new L(s,r,a),w:new L(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2),life:l,max:l,s0:o})}plateFx(t,e){const n=this.tops[t];if(!n||n.bursted)return;const s=n.dropPlate(e-1);if(!s)return;this.scene.attach(s);const r=n.group.position,a=s.position.x-r.x,o=s.position.z-r.z,l=Math.hypot(a,o)||1,c=7+Math.random()*5;this.pieces.push({obj:s,v:new L(a/l*c+n.vx*.5,7+Math.random()*4,o/l*c+n.vz*.5),w:new L((Math.random()-.5)*20,(Math.random()-.5)*30,(Math.random()-.5)*20),life:5,flat:!0,hot:1});for(let h=0;h<28;h++){const u=Math.atan2(o,a)+(Math.random()-.5)*1.6,f=5+Math.random()*12;this.spark(s.position.x,s.position.y+.1,s.position.z,Math.cos(u)*f,1+Math.random()*5,Math.sin(u)*f,.15+Math.random()*.3,1,.75,.35,8)}this.flashTop(s.position.x,s.position.y,s.position.z),n.hot=1,this.trauma=Math.min(1,this.trauma+.3)}floorChips(t,e,n,s,r,a){for(let o=0;o<s;o++){const l=r?Math.atan2(r[1],r[0])+(Math.random()-.5)*1.6:Math.random()*Math.PI*2;this.chip(t,e+.2,n,Math.cos(l),Math.sin(l),a,this.stoneMat)}}brakeFx(t){const e=Zt(Math.min(ge,Math.hypot(t.x,t.y))),n=Math.min(1,t.speed/22);if(t.phase==="stop"){const s=[t.dx,t.dy];this.shock(t.x,e+.15,t.y,2+n*1.5,.3,16769712);for(let r=0;r<40+n*50;r++){const a=Math.atan2(s[1],s[0])+(Math.random()-.5)*1.2,o=6+Math.random()*(10+n*14);this.spark(t.x,e+.15,t.y,Math.cos(a)*o,.5+Math.random()*3.5,Math.sin(a)*o,.15+Math.random()*.3,1,.75+Math.random()*.25,.35,8)}this.floorChips(t.x,e,t.y,5+Math.floor(n*6),s,.4+n);for(let r=0;r<4;r++)this.puff(t.x+s[0]*r*.4,e+.3,t.y+s[1]*r*.4,s[0]*4+(Math.random()-.5)*3,.8+Math.random(),s[1]*4+(Math.random()-.5)*3,.9+Math.random()*.5,.6+Math.random()*.4,!0);this.trauma=Math.min(1,this.trauma+.25+n*.3),this.shoveV.x+=s[0]*12*n,this.shoveV.z+=s[1]*12*n}else{this.floorChips(t.x,e,t.y,6,[-t.dx,-t.dy],.9);for(let s=0;s<50;s++){const r=s*.32,a=1+Math.random()*3;this.spark(t.x-t.dx*r,e+.5,t.y-t.dy*r,-t.dx*a,.5+Math.random(),-t.dy*a,.25+Math.random()*.3,.8,.95,1)}for(let s=0;s<40;s++){const r=Math.atan2(-t.dy,-t.dx)+(Math.random()-.5)*.9,a=8+Math.random()*14;this.spark(t.x,e+.2,t.y,Math.cos(r)*a,.5+Math.random()*2,Math.sin(r)*a,.15+Math.random()*.25,1,.9,.6,8)}this.shoveV.x-=t.dx*16,this.shoveV.z-=t.dy*16,this.trauma=Math.min(1,this.trauma+.3),this.fovKick=Math.max(this.fovKick,8)}}jumpFx(t,e){const n=e.tops[t];if(!n)return;const s=Zt(Math.min(ge,Math.hypot(n.x,n.y)));this.floorChips(n.x,s,n.y,7,null,.6);for(let r=0;r<5;r++){const a=Math.random()*Math.PI*2;this.puff(n.x+Math.cos(a)*.5,s+.25,n.y+Math.sin(a)*.5,Math.cos(a)*3.5,.5+Math.random()*.8,Math.sin(a)*3.5,.8+Math.random()*.5,.5+Math.random()*.35,!0)}for(let r=0;r<26;r++){const a=Math.random()*Math.PI*2,o=4+Math.random()*8;this.spark(n.x,s+.2,n.y,Math.cos(a)*o,.3+Math.random()*1.5,Math.sin(a)*o,.14+Math.random()*.2,1,.95,.8,8)}this.trauma=Math.min(1,this.trauma+.12)}landFx(t,e){const n=Zt(Math.min(ge,Math.hypot(t.x,t.y)));this.shock(t.x,n+.2,t.y,t.radius*1.8,.35,16771496),this.burstSparks(t.x,n+.4,t.y,60,13,16769184),this.floorChips(t.x,n,t.y,10+(t.targets.length?4:0),null,1.2);for(let s=0;s<7;s++){const r=s/7*Math.PI*2+Math.random()*.5;this.puff(t.x+Math.cos(r)*.6,n+.3,t.y+Math.sin(r)*.6,Math.cos(r)*5,.8+Math.random(),Math.sin(r)*5,1+Math.random()*.6,.6+Math.random()*.4,!0)}this.trauma=Math.min(1,this.trauma+(t.targets.length?.6:.35)),this.fovKick=Math.max(this.fovKick,5);for(const s of t.targets)this.tops[s]&&(this.tops[s].flash=1)}counterFx(t){const e=Zt(Math.min(ge,Math.hypot(t.x,t.y)));for(let n=0;n<30;n++){const s=n*.3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*2,1+Math.random(),-t.dy*2,.25+Math.random()*.2,1,.8,.3)}this.shock(t.x,e+.3,t.y,5,.35,16760896),this.fovKick=Math.max(this.fovKick,7)}boostFx(t,e){const n=e.tops[t];if(!n)return;const s=Math.hypot(n.vx,n.vy)||1,r=Zt(Math.hypot(n.x,n.y))+.4;for(let a=0;a<26;a++){const o=4+Math.random()*10;this.spark(n.x,r,n.y,-n.vx/s*o+(Math.random()-.5)*6,1+Math.random()*4,-n.vy/s*o+(Math.random()-.5)*6,.2+Math.random()*.3,.7,.85,1)}}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.camera.aspect=t/e,this.distScale=Math.max(1.15,1.5/this.camera.aspect),this.camera.updateProjectionMatrix()}setTops(t,e=this.stadium){this.setStadium(e);for(const n of this.tops)this.scene.remove(n.group,n.trail.mesh,n.swing.mesh);for(const n of this.pieces)this.scene.remove(n.obj);this.pieces=[];for(const n of this.puffs)this.scene.remove(n.m);this.puffs=[];for(const n of this.marks)this.scene.remove(n.g);this.marks=[],this.introT=0,this.introEnv=0,this.tops=t.map(n=>new Gy(n));for(const n of this.tops)n.smoke=(s,r,a,o,l,c,h,u)=>this.puff(s,r,a,o,l,c,h,u,!1);for(const n of this.tops)n.fx=(s,r,a,o,l,c,h,u,f,d,g)=>this.spark(s,r,a,o,l,c,h,u,f,d,g);for(const n of this.tops)this.scene.add(n.group,n.trail.mesh,n.swing.mesh)}spark(t,e,n,s,r,a,o,l,c,h,u=26){const f=this.sparkNext;this.sparkGrav[f]=u,this.sparkNext=(f+1)%this.sparkCap,this.sparkPos.set([t,e,n],f*3),this.sparkVel.set([s,r,a],f*3),this.sparkBase.set([l,c,h],f*3),this.sparkLife[f]=this.sparkMax[f]=o}shock(t,e,n,s,r,a){const o=this.shocks.reduce((h,u)=>h.life<u.life?h:u);o.life=o.max=r*.55,o.size=s*.75,o.mesh.position.set(t,e+.4,n),o.mesh.material.color.setHex(a),o.mesh.material.rotation=Math.random()*Math.PI,o.mesh.visible=!0;const l=new Ht(a),c=Math.min(110,Math.floor(14+s*8));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,f=s/r*(.35+Math.random()*.75),d=.6+Math.random()*.4;this.spark(t+Math.cos(u)*.3,e+Math.random()*.25,n+Math.sin(u)*.3,Math.cos(u)*f,Math.random()*2.2,Math.sin(u)*f,r*(.5+Math.random()*.7),Math.min(1,l.r+(1-d)),Math.min(1,l.g*d+(1-d)),Math.min(1,l.b*d+(1-d)),3)}}hit(t,e,n,s,r,a,o,l=-1){const c=Zt(Math.hypot(t,e))+.75;if(l>=0){const S=l===2?16777215:this.tops[l]?.spec.accent??16777215;this.shock(t,c,e,6+r*5,.42,S);for(let b=0;b<60;b++){const y=Math.random()*Math.PI*2,C=6+Math.random()*16;this.spark(t,c,e,Math.cos(y)*C,2+Math.random()*8,Math.sin(y)*C,.3+Math.random()*.4,1,1,1)}this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,4)}const h=this.tops[a],u=this.tops[o],f=this.world?.tops[a],d=this.world?.tops[o];let g=0;if(f&&d){const S=-s,b=n,y=f.spec.radius,C=d.spec.radius;g=(f.vx-d.vx)*S+(f.vy-d.vy)*b+f.spin*y*.15+d.spin*C*.15}const x=g>=0?1:-1,p=Math.min(22,5+Math.abs(g)*.4),m=Math.floor(6+r*46);for(let S=0;S<m;S++){const b=Math.random()<.82?x:-x,y=p*(.35+Math.random()*.75)*(.5+r),C=(Math.random()-.5)*.7,E=-s*b+n*C,w=n*b+s*C,v=Math.random();this.spark(t,c,e,E*y,1.5+Math.random()*6*(.3+r),w*y,.25+Math.random()*.5,1,.55+v*.45,.15+v*.5)}if(r>.4)for(const[S,b]of[[h,-1],[u,1]]){if(!S)continue;const y=1+Math.floor(r*3);for(let C=0;C<y;C++)this.chip(t,c,e,n*b,s*b,r,C%2?S.chipMetal:S.chipPaint)}if(r>.35&&this.shock(t,c,e,1.5+r*4.5,.32,16769712),this.trauma=Math.min(1,this.trauma+r*.75),this.tops[a]&&(this.tops[a].flash=r),this.tops[o]&&(this.tops[o].flash=r),this.tops[a]?.recoil(-n,-s,r),this.tops[o]?.recoil(n,s,r),r>.3){const S=(r-.2)*22;this.shoveV.x+=n*S,this.shoveV.z+=s*S}}chipGeo=new bo(.16);chip(t,e,n,s,r,a,o){if(this.chips.length>=70){const d=this.chips.shift();d.ttl=0}const l=new lt(this.chipGeo,o);l.castShadow=!0;const c=.7+Math.random()*.9;l.scale.set(c,c*(.5+Math.random()*.5),c),l.position.set(t,e,n),l.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(l);const h=Math.atan2(r,s)+(Math.random()-.5)*1.8,u=4+Math.random()*7*(.5+a),f={obj:l,v:new L(Math.cos(h)*u,4+Math.random()*6,Math.sin(h)*u),w:new L(Math.random()*24-12,Math.random()*24-12,Math.random()*24-12),life:2,ttl:2.4+Math.random()*1.2};this.pieces.push(f),this.chips.push(f)}finisherFx(t,e,n){const s=this.tops[e],r=this.tops[t];if(!s||!r)return;const a=s.group.position,o=r.group.position,l=a.x-o.x,c=a.z-o.z,h=Math.hypot(l,c)||1,u=l/h,f=c/h;for(let d=0;d<14;d++)this.chip(a.x,a.y+.8,a.z,u+(Math.random()-.5)*.8,f+(Math.random()-.5)*.8,1,d%2?s.chipMetal:s.chipPaint);for(let d=0;d<4;d++)this.chip(a.x,a.y+.8,a.z,u,f,1,d%2?r.chipMetal:r.chipPaint);for(let d=0;d<70;d++){const g=Math.atan2(f,u)+(Math.random()-.5)*1.5,x=8+Math.random()*20;this.spark(a.x,a.y+.8,a.z,Math.cos(g)*x,1+Math.random()*7,Math.sin(g)*x,.3+Math.random()*.5,1,.8+Math.random()*.2,.5+Math.random()*.5)}s.hot=1,s.recoil(u,f,1),this.shoveV.x+=u*34,this.shoveV.z+=f*34,this.trauma=Math.min(1,this.trauma+.8),this.finDur=n?1.2:.7,this.finT=this.finDur,this.finTarget=e}rimHit(t,e,n){const s=Mn+.3,r=Math.hypot(t,e)||1;for(let a=0;a<6+n*26;a++){const o=2+Math.random()*8,l=Math.atan2(e,t)+Math.PI+(Math.random()-.5)*2.2;this.spark(t/r*ge,s,e/r*ge,Math.cos(l)*o,2+Math.random()*6,Math.sin(l)*o,.2+Math.random()*.35,.6,.8,1)}this.trauma=Math.min(1,this.trauma+n*.35)}burstTop(t){const e=this.tops[t];if(!e||e.bursted)return;e.bursted=!0;const n=e.group.position.clone(),s={tip:.7,disc:1,blade:1.1,core:1.5};Vr.forEach((r,a)=>{const o=e.parts[a];if(r==="disc"&&e.discGone)return;this.scene.attach(o);const l=Math.random()*Math.PI*2,c=(4+Math.random()*7)*(s[r]??1);this.pieces.push({obj:o,v:new L(Math.cos(l)*c+e.vx*.7,(r==="tip"?5:7)*(s[r]??1)+Math.random()*5,Math.sin(l)*c+e.vz*.7),w:new L(Math.random()*14-7,(Math.random()-.5)*30,Math.random()*14-7),life:4,flat:r==="disc"||r==="blade",hot:1})});for(let r=0;r<160;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*16;this.spark(n.x,n.y+.7,n.z,Math.cos(a)*o,3+Math.random()*12,Math.sin(a)*o,.4+Math.random()*.7,1,.8,.5)}this.shock(n.x,n.y+.6,n.z,9,.5,16777215),this.trauma=1}ringOut(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.shock(n.x,e.sunk?Math.max(-.4,n.y):Mn+.2,n.z,6,.45,16733491),this.trauma=Math.min(1,this.trauma+.6)}setAim(t,e=0,n=0,s=0,r=1){if(this.aim.visible=t,!t)return;const a=Math.hypot(e,n);if(this.aim.position.set(e,Zt(a)+.3,n),this.aimArrow.visible=Math.abs(s)>.01&&a>.05,this.aimArrow.visible){const o=-n/a*r*Math.sign(s),l=e/a*r*Math.sign(s),c=1.3+Math.abs(s)*.9;this.aimArrow.position.set(o*c,.02,l*c),this.aimArrow.quaternion.setFromUnitVectors(new L(0,1,0),new L(o,0,l)),this.aimArrow.scale.setScalar(.7+Math.abs(s)*.8)}}simToScreen(t,e){const n=new L(t,Zt(Math.min(ge,Math.hypot(t,e)))+.6,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(n.x+1)/2*s.width,y:s.top+(1-n.y)/2*s.height,behind:n.z>1}}screenToSim(t,e){const n=this.canvas.getBoundingClientRect(),s=new K((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.raycaster.ray.origin,a=this.raycaster.ray.direction;let o=.8,l=0,c=0;for(let h=0;h<5;h++){const u=(o-r.y)/a.y;l=r.x+a.x*u,c=r.z+a.z*u,o=Zt(Math.hypot(l,c))}return{x:l,y:c}}frame(t,e,n,s,r=0){this.world=t,t.tops.forEach((v,M)=>{let _=null;if(v.strikeT>0){let A=1e9;t.tops.forEach((N,O)=>{if(O===M||t.teams[O]===t.teams[M]||!N.inPlay||N.out)return;const B=Math.hypot(N.x-v.x,N.y-v.y);B<A&&B>.01&&(A=B,_=[(N.x-v.x)/B,(N.y-v.y)/B])})}this.tops[M]?.update(v,e,n,s,_)});for(const v of this.tops){if(!v.justLanded)continue;v.justLanded=!1;const M=v.group.position;if(v.spec.boss){this.shock(M.x,M.y+.15,M.z,11,.5,v.spec.accent),this.burstSparks(M.x,M.y+.3,M.z,150,18,v.spec.accent),this.floorChips(M.x,M.y,M.z,40,null,1);for(let _=0;_<14;_++){const A=Math.random()*6.28;this.puff(M.x+Math.cos(A)*1.5,M.y+.3,M.z+Math.sin(A)*1.5,Math.cos(A)*4,1+Math.random()*2,Math.sin(A)*4,1.4+Math.random(),1+Math.random()*.6,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,9)}else this.shock(M.x,M.y+.15,M.z,4.5,.35,v.spec.accent),this.burstSparks(M.x,M.y+.3,M.z,46,11,v.spec.accent),this.trauma=Math.min(1,this.trauma+.3)}for(const{h:v,obj:M}of this.hazards){const _=Tc(v,t.time);v.kind==="bar"?M.rotation.y=-_.a:M.position.set(_.x,Zt(Math.min(ge,Math.hypot(_.x,_.y))),_.y)}this.plates.forEach((v,M)=>{if(this.floorPhase[M]!==1){v.mesh.position.set(0,0,0),v.mesh.rotation.set(0,0,0),v.mat.emissiveIntensity=0;return}const _=s*60+M*7;if(v.mesh.position.set(Math.sin(_*1.3)*.05,Math.sin(_*1.7)*.07,Math.cos(_*1.1)*.05),v.mesh.rotation.set(Math.sin(_)*.004,0,Math.cos(_*1.3)*.004),v.mat.emissiveIntensity=.14+.1*Math.sin(s*40),Math.random()<n*40){const[A,N]=this.wedgePoint(M),O=Zt(Math.hypot(A,N))+.1;this.spark(A,O,N,(Math.random()-.5)*3,3+Math.random()*5,(Math.random()-.5)*3,.25+Math.random()*.3,1,.55,.15,12)}if(Math.random()<n*8){const[A,N]=this.wedgePoint(M);this.puff(A,Zt(Math.hypot(A,N))+.2,N,(Math.random()-.5)*1.5,.8+Math.random(),(Math.random()-.5)*1.5,.5+Math.random()*.4,.7,!0)}});{const v=t.shots;for(;this.shardPool.length<v.length;){const _=new lt(this.shardGeo,this.shardMat);_.castShadow=!0,this.scene.add(_),this.shardPool.push(_)}this.shardPool.forEach((_,A)=>{const N=v[A];if(_.visible=!!N,!N)return;const O=t.tops[N.k];_.position.set(N.x,an(N.x,N.y)+.9,N.y),O&&(_.rotation.y=-Math.atan2(O.y-N.y,O.x-N.x)+Math.PI/2),_.rotation.z+=n*18,n>0&&this.spark(N.x,an(N.x,N.y)+.9,N.y,(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3,.25,1,.8,.3,4)});const M=t.burn;for(;this.scorchPool.length<Math.min(70,M.length);){const _=new lt(this.scorchGeo,this.scorchMat);_.rotation.x=-Math.PI/2,_.receiveShadow=!0,this.scene.add(_),this.scorchPool.push(_)}this.scorchPool.forEach((_,A)=>{const N=M[A];if(_.visible=!!N,!N)return;const O=Math.min(1,N.t/.6);_.position.set(N.x,an(N.x,N.y)+.06,N.y),_.scale.setScalar(.6+.5*O),_.rotation.z=A*1.7,n>0&&Math.random()<n*3&&this.spark(N.x,an(N.x,N.y)+.1,N.y,Math.random()-.5,1.5+Math.random()*2,Math.random()-.5,.4,1,.45,.1,4)})}this.marks=this.marks.filter(v=>(v.life-=n,v.life<=0?(this.scene.remove(v.g),!1):(v.tick(1-v.life/v.max,s,n),!0)));for(let v=0;v<t.tops.length;v++){const M=t.tops[v],_=this.tops[v];if(!M.spec.boss||!_||!M.inPlay||M.out||n<=0)continue;const A=_.group.position;if(M.bossMove==="charge"&&M.bossStage===1){for(let N=0;N<4;N++)this.spark(A.x-M.bossDx*2+(Math.random()-.5)*2,A.y+.15,A.z-M.bossDy*2+(Math.random()-.5)*2,-M.bossDx*(6+Math.random()*8)+(Math.random()-.5)*4,.5+Math.random()*3,-M.bossDy*(6+Math.random()*8)+(Math.random()-.5)*4,.2+Math.random()*.25,1,.7,.3,10);Math.random()<n*20&&this.puff(A.x-M.bossDx*2,A.y+.3,A.z-M.bossDy*2,-M.bossDx*3,.8,-M.bossDy*3,1+Math.random()*.6,.8,!0)}else if(M.bossMove&&M.bossStage===0&&Math.random()<n*30){const N=Math.random()*6.28,O=_.spec.radius*1.3;this.spark(A.x+Math.cos(N)*O,A.y+.15,A.z+Math.sin(N)*O,Math.cos(N)*2,2+Math.random()*4,Math.sin(N)*2,.25+Math.random()*.3,1,.6,.2,12)}}for(let v=0;v<t.tops.length;v++){const M=t.tops[v],_=this.tops[v];if(!_||!M.inPlay||M.out)continue;const A=_.group.position;if(_.braking&&Math.random()<n*14){const N=_.brakeDir;this.chip(A.x,A.y+.2,A.z,N[0],N[1],.3,this.stoneMat)}if(M.airT>0)for(let N=0;N<3;N++)this.spark(A.x+(Math.random()-.5)*.4,A.y+.2,A.z+(Math.random()-.5)*.4,(Math.random()-.5)*1.5,-1-Math.random()*2,(Math.random()-.5)*1.5,.25+Math.random()*.2,.85,.92,1,4)}this.puffs=this.puffs.filter(v=>{if(v.life-=n,v.life<=0)return this.scene.remove(v.m),!1;const M=v.life/v.max;return v.m.position.addScaledVector(v.v,n),v.v.multiplyScalar(Math.exp(-n*1.6)),v.v.y+=n*.6,v.m.rotation.x+=v.w.x*n,v.m.rotation.y+=v.w.y*n,v.m.scale.setScalar(v.s0*(.5+.7*(1-M))*Math.min(1,M*3.5)*Math.min(1,(1-M)*8+.2)),!0});for(let v=0;v<t.tops.length;v++){const M=t.tops[v],_=this.tops[v];if(!(!_||M.out||!M.inPlay||M.armour>.9)&&Math.random()<(1-M.armour)*n*24){const A=_.group.position,N=Math.random()*Math.PI*2;this.spark(A.x,A.y+.5,A.z,Math.cos(N)*4,3+Math.random()*5,Math.sin(N)*4,.35+Math.random()*.4,1,.5+Math.random()*.35,.2)}}this.constructs=this.constructs.filter(v=>{v.t+=n;const M=this.tops[v.i];if(v.c.follow&&M&&!M.bursted){const _=M.group.position;v.c.group.position.set(_.x,Zt(Math.min(ge,Math.hypot(_.x,_.z))),_.z)}if(v.t<v.c.dur){const _=v.c.group.position;return v.c.update(v.t,n,(A,N,O,B,q,U,F,I)=>{Ai.setHex(I),this.spark(_.x+A,_.y+N,_.z+O,B,q,U,F,Ai.r,Ai.g,Ai.b,7)}),!0}return this.scene.remove(v.c.group),v.c.group.traverse(_=>{const A=_;A.geometry?.dispose(),A.material?.dispose?.()}),!1}),this.bolts=this.bolts.filter(v=>(v.life-=n,v.line.material.opacity=Math.max(0,v.life/.22),v.life>0?!0:(this.scene.remove(v.line),v.line.geometry.dispose(),!1)));const a=t.stadium.segHp;t.segHp.forEach((v,M)=>{const _=this.segs[M];_&&!_.open&&(_.mat.emissiveIntensity=(1-v/a)*.9)}),t.pillars.forEach((v,M)=>{const _=this.pillarMeshes[M]?.children[0];_&&(_.material.emissiveIntensity=(1-v.hp/t.stadium.pillars[M].hp)*.9)});for(const v of t.tops){if(!v.onRail||n<=0)continue;const M=Math.hypot(v.vx,v.vy)||1;this.spark(v.x,Zt(Math.hypot(v.x,v.y))+.15,v.y,-v.vx/M*6+(Math.random()-.5)*3,1+Math.random()*3,-v.vy/M*6+(Math.random()-.5)*3,.25,.5,.75,1)}this.fovKick=Math.max(0,this.fovKick-n*14);const o=42+this.fovKick;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix());for(let v=0;v<je;v++){if(this.sparkLife[v]<=0)continue;this.sparkLife[v]-=n;const M=v*3;if(this.sparkLife[v]<=0){this.sparkPos[M+1]=-999;continue}this.sparkVel[M+1]-=this.sparkGrav[v]*n,this.sparkPos[M]+=this.sparkVel[M]*n,this.sparkPos[M+1]+=this.sparkVel[M+1]*n,this.sparkPos[M+2]+=this.sparkVel[M+2]*n;const _=this.sparkLife[v]/this.sparkMax[v];this.sparkCol[M]=this.sparkBase[M]*_,this.sparkCol[M+1]=this.sparkBase[M+1]*_*_,this.sparkCol[M+2]=this.sparkBase[M+2]*_*_*_}const l=this.camera.position;for(let v=0;v<je;v++){const M=v*3,_=v*12;if(this.sparkLife[v]<=0){for(let Ut=0;Ut<4;Ut++)this.streakPos[_+Ut*3+1]=-999;continue}const A=this.sparkPos[M],N=this.sparkPos[M+1],O=this.sparkPos[M+2],B=this.sparkVel[M],q=this.sparkVel[M+1],U=this.sparkVel[M+2],F=Math.hypot(B,q,U)||1,I=Math.min(2.6,Math.max(.18,F*.055)),G=B/F,j=q/F,nt=U/F,vt=l.x-A,Pt=l.y-N,W=l.z-O;let tt=j*W-nt*Pt,ft=nt*vt-G*W,it=G*Pt-j*vt;const st=Math.hypot(tt,ft,it)||1,pt=this.sparkLife[v]/this.sparkMax[v],Et=(.04+.05*Math.min(1,pt*1.5))/st;tt*=Et,ft*=Et,it*=Et;const Yt=A-G*I,Q=N-j*I,ct=O-nt*I,D=.25;this.streakPos.set([A-tt,N-ft,O-it,A+tt,N+ft,O+it,Yt-tt*D,Q-ft*D,ct-it*D,Yt+tt*D,Q+ft*D,ct+it*D],_),this.streakCol.set([this.sparkCol[M],this.sparkCol[M+1],this.sparkCol[M+2],this.sparkCol[M],this.sparkCol[M+1],this.sparkCol[M+2],0,0,0,0,0,0],_)}this.streaks.geometry.attributes.position.needsUpdate=!0,this.streaks.geometry.attributes.color.needsUpdate=!0,this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(const v of this.shocks){if(v.life<=0)continue;v.life-=n;const M=1-Math.max(0,v.life)/v.max;v.mesh.scale.setScalar(v.size*(.5+.5*(1-(1-M)*(1-M)))),v.mesh.material.opacity=(1-M)*(1-M),v.life<=0&&(v.mesh.visible=!1)}for(const v of this.beams){if(v.life+=n,v.beam.material.opacity=Math.min(1,v.life*3)*(.5+.2*Math.sin(v.life*6)),v.beam.position.y=v.gem.position.y,Math.random()<n*16){const M=v.gem.material.emissive,_=Math.random()*Math.PI*2;this.spark(v.gem.position.x+Math.cos(_)*.5,v.gem.position.y-.4,v.gem.position.z+Math.sin(_)*.5,-Math.sin(_)*1.5,2.5+Math.random()*2,Math.cos(_)*1.5,.7,M.r,M.g,M.b,0)}v.gem.rotation.y+=n*3,v.gem.position.y+=Math.sin(v.life*3)*n*.3}for(const v of this.pieces){v.life-=n,v.v.y-=24*n,v.obj.position.addScaledVector(v.v,n);const M=v.obj.position,_=Math.hypot(M.x,M.z),A=this.inHole(M.x,M.z)?-50:Zt(_)+.15,N=M.y<=A+.02&&_<ge;if(v.hot&&v.hot>0&&this.fx3<40&&(v.hot=Math.max(0,v.hot-n*.6),Math.random()<n*40*v.hot&&(this.fx3++,this.spark(M.x,M.y,M.z,-v.v.x*.15+(Math.random()-.5)*3,Math.random()*2,-v.v.z*.15+(Math.random()-.5)*3,.2+Math.random()*.2,1,.6,.2,14))),M.y<A&&v.v.y<0&&_<ge){const O=-v.v.y;if(M.y=A,v.v.y*=-.42,v.v.x*=.72,v.v.z*=.72,v.w.multiplyScalar(.6),v.bounces=(v.bounces??0)+1,O>4){const B=Math.min(10,Math.floor(O*.8));for(let q=0;q<B;q++){const U=Math.random()*6.28;this.spark(M.x,A+.1,M.z,Math.cos(U)*(2+Math.random()*5)+v.v.x*.4,1+Math.random()*O*.35,Math.sin(U)*(2+Math.random()*5)+v.v.z*.4,.2+Math.random()*.25,1,.7,.3,20)}this.trauma=Math.min(1,this.trauma+Math.min(.12,O*.01))}}if(N){const O=Math.exp(-n*2.2);if(v.v.x*=O,v.v.z*=O,v.w.multiplyScalar(Math.exp(-n*2.5)),v.flat&&(v.bounces??0)>=2){const B=v.obj.rotation,q=1-Math.exp(-n*7);B.x+=(Math.round(B.x/Math.PI)*Math.PI-B.x)*q,B.z+=(Math.round(B.z/Math.PI)*Math.PI-B.z)*q}}v.obj.rotation.x+=v.w.x*n,v.obj.rotation.y+=v.w.y*n,v.obj.rotation.z+=v.w.z*n}this.fx3=0;for(const v of this.pieces)v.ttl!==void 0&&(v.ttl-=n,v.ttl<.4&&v.obj.scale.multiplyScalar(Math.max(.01,v.ttl/.4)**.2),v.ttl<=0&&(v.obj.position.y=-999));if(this.chips=this.chips.filter(v=>(v.ttl??0)>0),this.pieces.length){const v=this.pieces.filter(M=>M.obj.position.y<-40);if(v.length){for(const M of v)this.scene.remove(M.obj);this.pieces=this.pieces.filter(M=>M.obj.position.y>=-40)}}const c=t.tops.filter(v=>v.inPlay&&!v.out);let h=0,u=0,f=1;if(c.length){for(const v of c)h+=v.x/c.length,u+=v.y/c.length;if(c.length===2){const v=Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y);f=.7+.3*Math.min(1,v/11)}}const d=1-Math.exp(-n*3),g=Math.max(0,1-11/ge),x=t.tops[r],p=x&&x.inPlay&&!x.out?x:null,m=h*.45*(1-g)+(p?p.x:h)*g,S=u*.45*(1-g)+(p?p.y:u)*g;this.focus.x+=(m-this.focus.x)*d,this.focus.z+=(S-this.focus.z)*d,this.zoom+=(f-this.zoom)*d,this.finT>0&&(this.finT=Math.max(0,this.finT-n));{const v=1-this.finT/this.finDur,_=(this.finT>0?1:0)?Math.min(1,v/.18)*(v<.55?1:Math.max(0,1-(v-.55)/.45)):0;this.finEnv+=(_-this.finEnv)*(1-Math.exp(-n*14));const A=t.tops[this.finTarget];this.finEnv>.001&&A&&(this.focus.x+=(A.x-this.focus.x)*this.finEnv*.25,this.focus.z+=(A.y-this.focus.z)*this.finEnv*.25)}this.introT>0&&(this.introT=Math.max(0,this.introT-n));{const v=1-this.introT/this.introDur,M=this.introT>0?Math.min(1,v/.2)*(v<.74?1:Math.max(0,1-(v-.74)/.26)):0;this.introEnv+=(M-this.introEnv)*(1-Math.exp(-n*6))}const b=t.tops[this.introTarget],y=this.focus.x+((b&&b.inPlay?b.x:0)-this.focus.x)*this.introEnv,C=this.focus.z+((b&&b.inPlay?b.y:0)-this.focus.z)*this.introEnv;this.shoveV.x+=(-12*12*this.shove.x-2*12*this.shoveV.x)*n,this.shoveV.z+=(-12*12*this.shove.z-2*12*this.shoveV.z)*n,this.shove.x+=this.shoveV.x*n,this.shove.z+=this.shoveV.z*n,this.trauma=Math.max(0,this.trauma-n*2.2);const E=this.trauma*this.trauma*.9,w=this.distScale*this.zoom*Math.min(ge,11.5)/10*(1-.34*this.finEnv)*(1-.45*this.introEnv);if(this.camera.position.set(y+this.shove.x+(Math.random()-.5)*E,20.5*w*(1-.3*this.introEnv)+(Math.random()-.5)*E,C+this.shove.z+13.5*w+(Math.random()-.5)*E),this.camera.lookAt(y+this.shove.x*.4,.9+1.3*this.introEnv,C+this.shove.z*.4+.9),this.debugCam){const v=this.debugCam;this.camera.position.set(v[0],v[1],v[2]),this.camera.lookAt(v[3],v[4],v[5])}this.composer.render()}}const Da=i=>"#"+i.toString(16).padStart(6,"0");class Wy{constructor(t,e,n){this.renderer=t,this.save=e,this.cb=n;const s=this.scene;s.background=new Ht(526864),s.fog=new xo(526864,14,40),s.environment=new Qa(t).fromScene(new Af,.04).texture,s.environmentIntensity=.5;const r=new Mc(16777215,1.5);r.position.set(3.5,7,4.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const a=r.shadow.camera;a.left=a.bottom=-3.5,a.right=a.top=3.5,a.near=1,a.far=20,r.shadow.bias=-3e-4,r.shadow.normalBias=.02;const o=new tr(8368383,16,30,2);o.position.set(-5,2.5,2),this.backLight.position.set(0,3,-5),s.add(r,o,this.backLight,new wf(10466559,395018,.2));const l=new he({color:1777708,metalness:.9,roughness:.3}),c=new lt(new zt(1.75,1.95,.3,96),l);c.position.y=-.15,c.receiveShadow=!0;const h=new lt(new ue(1.76,.022,8,128),this.ringMat);h.rotation.x=Math.PI/2,h.position.y=.005;const u=new lt(new ue(1.1,.008,6,96),new Te({color:3359071}));u.rotation.x=Math.PI/2,u.position.y=.004;const f=new lt(new js(40,64),new he({color:658708,metalness:.5,roughness:.55}));f.rotation.x=-Math.PI/2,f.position.y=-.3,f.receiveShadow=!0,s.add(c,h,u,f,this.holder),this.composer=new Cf(t),this.composer.addPass(new Lf(s,this.camera)),this.composer.addPass(new fs(new K(1,1),.22,.35,.96)),this.composer.addPass(new Pf),this.el=document.createElement("div"),this.el.id="ws",this.el.className="hidden",this.tier=e.tier,this.el.innerHTML=`
      <header><h1>SPINFORGE</h1><span>FORGE</span></header>
      <button id="wsGear" aria-label="Settings">${hm()}</button>
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
      <div id="wsHint">DRAG TO ROTATE</div>
      <footer><button id="wsExplode">EXPLODED VIEW</button><button id="wsBattle" class="go">BATTLE</button></footer>`,document.body.appendChild(this.el),this.q("#wsGear").addEventListener("click",()=>n.onSettings()),this.wire(),this.rebuild(),this.renderThumbs(),this.renderAll(),this.resize(),window.addEventListener("resize",()=>this.resize())}active=!1;perTeam=1;tier=1;time=0;scene=new to;camera=new tn(30,1,.1,100);composer;holder=new Rt;model=null;ringMat=new Te({color:16777215});backLight=new tr(16777215,18,30,2);exploded=!1;explode=0;drop={tip:0,disc:0,blade:0,core:0};slot="blade";hover=null;sel=null;sort="power";bulk="off";bulkMax=0;yaw=.6;pitch=.42;dragging=!1;distScale=1;thumbs={};el;q(t){return this.el.querySelector(t)}show(t){this.active=t,this.el.classList.toggle("hidden",!t),t&&this.resize()}refresh(){this.tier=Math.min(this.tier,this.save.tier),this.rebuild(),this.renderAll()}wire(){this.q("#wsTabs").addEventListener("click",a=>{const o=a.target.dataset.slot;o&&(this.slot=o,this.hover=null,this.sel=null,this.renderAll())}),this.q("#wsTools").addEventListener("click",a=>{const o=a.target.closest("[data-tool]")?.dataset.tool;if(o){if(o==="sort")this.sort=this.sort==="power"?"rarity":this.sort==="rarity"?"newest":"power";else if(o==="bulk")this.bulk=this.bulk==="off"?"pick":"off";else if(o==="step")this.bulkMax=(this.bulkMax+Number(a.target.closest("[data-d]").dataset.d)+4)%4;else if(o==="ask")this.bulk="confirm";else if(o==="no")this.bulk="off";else if(o==="yes"){Hp(this.save,this.bulkMax),this.bulk="off",this.sel=null,this.hover=null,this.changed(!1);return}this.renderAll()}});const t=this.q("#wsCards");t.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-act]"),c=o.closest(".ws-card")?.dataset.uid;if(c){if(l){const h=l.dataset.act;h==="salv"?(Ed(this.save,c),this.sel=null,this.hover=null):h==="fit"?(this.save.equipped[this.slot]=c,this.sel=null,this.hover=null,this.slot in this.drop&&(this.drop[this.slot]=1)):h==="temper"?Fp(this.save,c):h==="reroll"&&kp(this.save,c,Number(l.dataset.i),Math.random),this.changed(!1);return}this.sel=this.sel===c?null:c,this.renderAll()}}),t.addEventListener("mouseover",a=>{const o=a.target.closest(".ws-card")?.dataset.uid??null;o!==this.hover&&(this.hover=o,this.renderStats())}),t.addEventListener("mouseleave",()=>{this.hover=null,this.renderStats()});const e=(a,o)=>this.q(a).addEventListener("click",l=>{const c=l.target.dataset.v;c!==void 0&&(this.save[o]=Number(c),this.changed(!0))});e("#wsPaint","paint"),e("#wsGlow","glow"),this.q("#wsMetal").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.metal=o,this.changed(!0))}),this.q("#wsSpin").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.spinDir=o==="-1"?-1:1,this.changed(!1))}),this.q("#wsSetup").addEventListener("click",a=>{const o=a.target.closest("[data-step]");if(!o)return;const l=Number(o.dataset.d);o.dataset.step==="mode"?this.perTeam=Math.max(1,Math.min(5,this.perTeam+l)):this.tier=Math.max(1,Math.min(this.save.tier,this.tier+l)),this.renderAll()}),this.q("#wsExplode").addEventListener("click",()=>{this.exploded=!this.exploded,this.q("#wsExplode").textContent=this.exploded?"ASSEMBLE":"EXPLODED VIEW"}),this.q("#wsBattle").addEventListener("click",()=>this.cb.onBattle());const n=this.renderer.domElement;let s=0,r=0;n.addEventListener("pointerdown",a=>{this.active&&(this.dragging=!0,s=a.clientX,r=a.clientY)}),window.addEventListener("pointermove",a=>{!this.active||!this.dragging||(this.yaw+=(a.clientX-s)*.01,this.pitch=Math.max(.08,Math.min(1.25,this.pitch+(a.clientY-r)*.006)),s=a.clientX,r=a.clientY)}),window.addEventListener("pointerup",()=>this.dragging=!1)}changed(t){this.rebuild(),t&&(this.thumbs={}),this.renderAll(),this.cb.onChange()}rebuild(){this.model&&(this.holder.remove(this.model.root),Wu(this.model.root));const t=wl(this.save);this.model=Of({blade:t.blade,disc:t.disc,tip:t.tip,core:t.core,paint:t.paint,glow:t.glow,metal:t.metal}),this.holder.add(this.model.root),this.ringMat.color.setHex(t.glow),this.backLight.color.setHex(t.paint),this.el.style.setProperty("--glow",Da(t.glow))}pictures(t){return this.renderThumbs(t),t.map(e=>this.thumbs[e]??"")}renderThumbs(t=[]){const e=new Set([...this.save.items.map(d=>d.part),...t]);if(xi.every(d=>this.thumbs[d.id]||d.gen&&!e.has(d.id)))return;const n=this.renderer,s=144,r=new to;r.background=new Ht(856345),r.environment=this.scene.environment;const a=new Mc(16777215,1.4);r.environmentIntensity=.55,a.position.set(2,5,3),r.add(a);const o=new tn(26,1,.05,50),l=Df(this.save),c=n.getSize(new K),h=n.getPixelRatio();n.setPixelRatio(1),n.setSize(s,s,!1);const u=new zi,f=new Hi;for(const d of xi){if(this.thumbs[d.id]||d.gen&&!e.has(d.id))continue;const g=d.slot==="launcher"?Oy(d.id,l):d.slot==="reactor"?Ny(d.id):Nf(d.slot,d.id,l);r.add(g),u.setFromObject(g).getBoundingSphere(f);const x=f.radius/Math.sin(13*Math.PI/180);o.position.copy(f.center).add(new L(.3,d.slot==="blade"||d.slot==="disc"||d.slot==="reactor"?.95:.5,.5).normalize().multiplyScalar(x*1.02)),o.lookAt(f.center),n.render(r,o),this.thumbs[d.id]=n.domElement.toDataURL("image/png"),r.remove(g),Wu(g)}n.setPixelRatio(h),n.setSize(c.x,c.y,!1)}resize(){const t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.composer.setSize(e,n),this.camera.aspect=e/n,this.distScale=Math.max(1,.85/this.camera.aspect),e<900&&n>e?(this.distScale=Math.max(1.9,1.2/this.camera.aspect),this.camera.setViewOffset(e,n,0,n*.02,e,n)):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}frame(t){if(this.time+=t,this.model?.shift(Math.max(0,Math.min(1,.5-.9*Math.cos(this.time*1.4)))),this.model?.flail(Math.max(0,Math.min(1,.5-.7*Math.cos(this.time*1.1)))),this.dragging||(this.yaw+=t*.4),this.holder.rotation.y=this.yaw,this.explode+=((this.exploded?1:0)-this.explode)*(1-Math.exp(-t*7)),this.model)for(const s of Vr){const r=this.model.parts[s],a=this.drop[s]=Math.max(0,this.drop[s]-t*2.6);r.position.y=Wr[s]+(Fy[s]-Wr[s])*this.explode+a*a*1.5,r.rotation.y=a*a*2.5;const o=this.slot===s&&this.explode>.5?1.05:1;r.scale.setScalar(o+.1*Math.sin(a*Math.PI))}const e=.55+this.explode*.95,n=(6.8+this.explode*2.6)*this.distScale;this.camera.position.set(0,e+Math.sin(this.pitch)*n,Math.cos(this.pitch)*n),this.camera.lookAt(0,e,0),this.composer.render()}renderAll(){this.renderThumbs();const t=this.save;this.q("#wsTabs").innerHTML=gi.map(l=>`<button data-slot="${l}" class="${l===this.slot?"on":""}">${ad[l]}</button>`).join("");const e=t.equipped[this.slot],n=zp(t,t.items.filter(l=>mn(l.part).slot===this.slot),this.sort,e);this.sel&&!n.some(l=>l.uid===this.sel)&&(this.sel=null);const s=this.q("#wsCards"),r=s.scrollTop;s.innerHTML=n.map(l=>{const c=hi[l.rarity],h=l.uid===e,u=l.uid===this.sel,d=(Ka(l)?`<p class="lg">${Ka(l)}</p>`:"")+(l.affixes.length?l.affixes.map(x=>`<span class="af">${xd(x)}</span>`).join(""):`<p>${mn(l.part).blurb}</p>`),g=h?"<em>FITTED</em>":"";return`
        <div class="ws-card ${h?"on":""} ${u?"open":""}" data-uid="${l.uid}" style="--rc:${Da(c.color)}">
          <img src="${this.thumbs[l.part]??""}" alt="" />
          <div class="ws-main"><b style="color:${Da(c.color)}">${gd(l)}</b><span class="lv">${c.name.toUpperCase()} · LEVEL ${l.level}</span>${d}${g}</div>
          ${u?this.detail(l,h,t.items.find(x=>x.uid===e)):""}
        </div>`}).join(""),s.scrollTop=r,this.renderTools();const a=Rr(t);this.q("#wsName").textContent=hd(wl(t)),this.q("#wsType").textContent=`${Np(Do(a))} TYPE  ·  ${ed[a.ability]}  ·  ${a.elements.map(l=>Le[l].super.name).join(" + ")}`,this.q("#wsMeta").textContent=`GEAR ${qp(t)}  ·  SCRAP ${t.scrap}  ·  ${t.items.length} PARTS`,this.q("#wsMode").textContent=`${this.perTeam} V ${this.perTeam}`,this.q("#wsTier").textContent=`TIER ${this.tier}${wd(this.tier)?" · BOSS":""}`,this.q("#wsSpin").innerHTML=[[1,"RIGHT"],[-1,"LEFT"]].map(([l,c])=>`<button data-v="${l}" class="${t.spinDir===l?"on":""}">${c}</button>`).join("");const o=(l,c)=>l.map(h=>`<button data-v="${h}" class="${h===c?"on":""}" style="background:${Da(h)}"></button>`).join("");this.q("#wsPaint").innerHTML=o(od,t.paint),this.q("#wsGlow").innerHTML=o(ld,t.glow),this.q("#wsMetal").innerHTML=cd.map(l=>`<button data-v="${l}" class="${t.metal===l?"on":""}">${yc[l].name.toUpperCase()}</button>`).join(""),this.renderStats()}detail(t,e,n){const s=this.save,r=Bp(t,e?void 0:n),a=r.rows.map(d=>{const g=t.affixes.findIndex(b=>b.key===d.key),x=d.diff>0?"up":d.diff<0?"down":"",p=e?`+${d.item}%`:`${d.now?"+"+d.now+"%":"-"} → ${d.item?"+"+d.item+"%":"-"}`,m=!e&&d.diff?`<i class="${x}">${d.diff>0?"+":""}${d.diff}</i>`:"",S=g<0?"":`<button class="ws-act ws-re" data-act="reroll" data-i="${g}" ${s.scrap<El(t)?"disabled":""} aria-label="Reroll ${d.label}">REROLL ${El(t)}</button>`;return`<div class="ws-cmp"><span class="k">${d.label}</span><span class="v">${p}</span>${m}${S}</div>`}).join(""),o=e?"":`<div class="ws-cmp"><span class="k">Power</span><span class="v">${Ii(t)}</span><i class="${r.power>0?"up":r.power<0?"down":""}">${r.power>0?"+":""}${r.power}</i></div>`,l=t.level>=vd(s),c=Md(t),h=`<button class="ws-act" data-act="temper" ${l||s.scrap<c?"disabled":""}>${l?"MAX LEVEL "+t.level:`TEMPER L${t.level+1} · ${c}`}</button>`,u=e?"":'<button class="ws-act go" data-act="fit">FIT</button>',f=e?"":`<button class="ws-act" data-act="salv">SALVAGE +${Sl(t)}</button>`;return`<div class="ws-detail">${a||'<div class="ws-cmp"><span class="k">No stat rolls</span></div>'}${o}<div class="ws-acts">${u}${h}${f}</div></div>`}renderTools(){const t=this.save,e=_d(t,this.bulkMax),n=e.reduce((a,o)=>a+Sl(o),0),s=hi.slice(0,4).map(a=>a.name.toUpperCase());let r="";this.bulk==="pick"?r=`<div class="ws-bulk"><div class="ws-step"><button data-tool="step" data-d="-1">◀</button><span>UP TO ${s[this.bulkMax]}</span><button data-tool="step" data-d="1">▶</button></div>
        <button class="ws-act" data-tool="ask" ${e.length?"":"disabled"}>SALVAGE ${e.length} · +${n}</button><small>Fitted parts are never salvaged. All slots.</small></div>`:this.bulk==="confirm"&&(r=`<div class="ws-bulk"><small>Salvage ${e.length} parts up to ${s[this.bulkMax]} for ${n} scrap? This cannot be undone.</small>
        <div class="ws-acts"><button class="ws-act go" data-tool="yes">YES, SALVAGE</button><button class="ws-act" data-tool="no">CANCEL</button></div></div>`),this.q("#wsTools").innerHTML=`<div class="ws-acts"><button class="ws-act" data-tool="sort">SORT: ${this.sort.toUpperCase()}</button><button class="ws-act ${this.bulk==="off"?"":"on"}" data-tool="bulk">BULK SALVAGE</button></div>${r}`}renderStats(){const t=this.save,e=Do(Rr(t)),n=this.hover??this.sel,r=n&&n!==t.equipped[this.slot]&&t.items.some(o=>o.uid===n)?Do(Rr({...t,equipped:{...t.equipped,[this.slot]:n}})):e,a=o=>Math.min(100,6+o*94);this.q("#wsStats").innerHTML=$a.map(o=>{const l=a(e[o]),c=a(r[o]),h=Math.round((r[o]-e[o])*100),u=h===0?"":`<i class="${h>0?"up":"down"}">${h>0?"+":""}${h}</i>`,f=h===0?"":`<span class="${h>0?"up":"down"}" style="width:${Math.max(l,c)}%"></span>`;return`<div class="ws-stat"><label>${Dp[o]}${u}</label><div class="ws-bar">${f}<span class="cur" style="width:${Math.min(l,c)}%"></span></div></div>`}).join("")}}const Kt=0,qn=i=>{try{navigator.vibrate?.(i)}catch{}};{const i=document.createElement("style");i.textContent=`
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
@keyframes bplate{0%{opacity:0;transform:scale(1.35)}12%{opacity:1;transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(.98)}}`,document.head.append(i);const t=document.createElement("div");t.id="arrows";const e=document.createElement("div");e.id="combo",e.innerHTML="<i></i><i></i><i></i><span>FINISHER</span>";const n=document.createElement("div");n.id="bossbar",n.innerHTML='<div class="bn"><b id="bossName"></b><em id="bossPhase"></em></div><div class="bb"><i id="bossFill"></i><u style="left:33.3%"></u><u style="left:66.6%"></u></div><div class="mv" id="bossMove"></div>';const s=document.createElement("div");s.id="bossplate",s.innerHTML="<span></span><small></small>",t.style.display=e.style.display="none",document.body.append(t,e,n,s)}const Ff="spinforge.save.v1",ce=i=>document.getElementById(i),Fi=i=>"#"+i.toString(16).padStart(6,"0"),Xy=i=>i[Math.floor(Math.random()*i.length)],Kr=ce("game"),qt=new Vy(Kr),Wt=new dm,Sc=new URLSearchParams(location.search),ki=Sc.has("demo");function qy(){try{return vh(JSON.parse(localStorage.getItem(Ff)??"null"))}catch{return vh(null)}}function kf(){try{localStorage.setItem(Ff,JSON.stringify(Ke))}catch{}}const Ke=qy();let fn=null,At,Ec=null,Vi="workshop",jc=!1;const Yy=um(()=>{Wt.start(),Wt.strike()});qt.applyQuality(De.quality);ho(()=>qt.applyQuality(De.quality));const Bn=new Wy(qt.renderer,Ke,{onChange:kf,onBattle:()=>qr("new"),onSettings:Yy});ki&&Sc.get("demo")&&(Bn.perTeam=Math.max(1,Math.min(5,Number(Sc.get("demo"))||1)));const gs=document.createElement("div");gs.id="endbar";gs.className="hidden";document.body.appendChild(gs);gs.addEventListener("click",i=>{const t=i.target.dataset.a;t==="again"&&qr("again"),t==="next"&&qr("next"),t==="shop"&&th("workshop")});const Qc=document.createElement("div");Qc.id="cds";Qc.innerHTML='<div class="cd"><i id="cdStrike"></i><span>STRIKE</span><small>CLICK</small></div><div class="cd"><i id="cdBoost"></i><span>BOOST</span><small>SHIFT</small></div>';ce("hud").appendChild(Qc);const $y=ce("cdStrike"),Ky=ce("cdBoost"),Sn=sm({mainDown:()=>{Vi==="battle"&&(At.world.tops[Kt].inPlay?To=!0:Gf())},mainUp:()=>Vf(),boost:()=>Zr=!0,ability:()=>wo=!0,super:()=>Ao=!0}),Nn=new Set;let Eo=!1,ci={x:0,y:3},En=0,mi=!1,Xr=0,wo=!1,Zr=!1,To=!1,Ao=!1,ro=null,Bf=[];const wc=3;let Dr=0,Er=0,wr=0,Ye=0,Yn=0,ao=performance.now(),xl=0,Xa=0,qu="";function th(i){Vi=i,Bn.show(i==="workshop"),i==="workshop"&&Bn.refresh(),ce("hud").classList.toggle("hidden",i!=="battle"),gs.classList.add("hidden"),Sn.show(i==="battle"),window.__sfBusy=i==="battle";for(const t of["arrows","combo"]){const e=document.getElementById(t);e&&(e.style.display=i==="battle"?"":"none")}i==="workshop"?(Wt.setHum(0,0,!1),Wt.setHum(1,0,!1)):qt.resize()}function qr(i){if(Wt.start(),i==="next"&&(Bn.tier=Math.min(Ke.tier,Bn.tier+1)),i!=="again"||!fn){const t=Bn.perTeam,e=Bn.tier,n=em(Math.random,e,t,Ke.paint);fn={perTeam:t,tier:e,boss:n.boss,stadium:Xy(ip(t)),specs:[Rr(Ke),...n.allies,...n.enemies],teams:[...new Array(t).fill(0),...n.enemies.map(()=>1)]}}else fn.specs[Kt]=Rr(Ke);document.documentElement.style.setProperty("--me",Fi(fn.specs[Kt].accent)),document.documentElement.style.setProperty("--foe",Fi(fn.specs[fn.perTeam].accent)),At=new im(fn.specs,Math.random()*1e9|0,2,fn.stadium,fn.teams),jc=!1,Ec=null,wr=0,th("battle")}const zf=()=>{const i=Xr/At.specs[Kt].chargeTime%2;return i>1?2-i:i};function Hf(){const i=Math.hypot(ci.x,ci.y),t=Nr(At.world.stadium),e=i>t?t/i:1;return{x:ci.x*e,y:ci.y*e}}function Gf(){Eo=!0,!ki&&At.phase==="live"&&!At.world.tops[Kt].inPlay&&!mi&&(mi=!0,Xr=0)}function Vf(){if(Eo=!1,mi){mi=!1;const i=Hf();ro={x:i.x,y:i.y,power:zf(),tilt:En}}}function Zy(){qt.setTops(At.specs,At.stadium),mi=!1,Xr=0,ro=null,Yn=0,Bf=At.specs.map(()=>.25+Math.random()*.7),e1();const i=At.specs.findIndex(t=>t.boss);Dr=0,Er=0,i>=0&&At.round===1&&(Dr=wc,qt.bossIntro(i,wc))}function Jy(i){if(ki)return sd(i,Kt);const t={sx:0,sy:0,ability:wo,boost:Zr,strike:To,super:Ao};if(Sn.active)return t.sx=Sn.sx,t.sy=Sn.sy,t;(Nn.has("KeyA")||Nn.has("ArrowLeft"))&&(t.sx-=1),(Nn.has("KeyD")||Nn.has("ArrowRight"))&&(t.sx+=1),(Nn.has("KeyW")||Nn.has("ArrowUp"))&&(t.sy-=1),(Nn.has("KeyS")||Nn.has("ArrowDown"))&&(t.sy+=1);const e=i.tops[Kt];if(t.sx===0&&t.sy===0&&e.inPlay){const n=ci.x-e.x,s=ci.y-e.y,r=Math.hypot(n,s);r>.5&&(t.sx=n/r,t.sy=s/r)}return t}const ls=document.createElement("div");ls.id="od";ls.innerHTML="<i></i><span></span>";ce("hud").appendChild(ls);const ss=document.createElement("div");ss.id="banner";ce("hud").appendChild(ss);const Pi=document.createElement("div");Pi.id="flash";document.body.appendChild(Pi);function Ua(i,t,e){ss.textContent=i,ss.style.setProperty("--bc",Fi(t)),ss.className="",ss.offsetWidth,ss.className=e?"show big":"show"}function Na(i,t){Pi.style.background=Fi(i),Pi.style.transition="none",Pi.style.opacity=String(t),Pi.offsetWidth,Pi.style.transition="opacity 0.35s ease-out",Pi.style.opacity="0"}function vn(i){ce("toast").textContent=i,ce("toast").style.opacity="1",Xa=1.3}function Wf(i){switch(i.type){case"hit":{qt.hit(i.x,i.y,i.nx,i.ny,i.strength,i.a,i.b,i.power),Wt.clash(i.strength);const t=i.a===Kt||i.b===Kt;t&&i.strength>.5&&(Ye=Math.max(Ye,.02+.05*i.strength)),t&&i.strength>.25&&qn(8+30*i.strength),i.power>=0&&(Wt.power(),t&&(Ye=Math.max(Ye,.09)),i.power===2&&t?vn("CLASH!"):i.power===Kt&&vn("POWER HIT"));break}case"break":qt.breakPiece(i.kind,i.index,i.x,i.y),Wt.wallBreak(),vn(i.kind==="wall"?"WALL DOWN":"PILLAR DOWN");break;case"boost":qt.boostFx(i.i,At.world),i.i===Kt&&qt.kick(6),Wt.boost();break;case"shift":Wt.ability("brace"),i.i===Kt&&vn(i.guard?"GUARD FORM":"ATTACK FORM");break;case"strike":Wt.strike();break;case"super":{qt.superFx(i.i,i.elements),Wt.superFx();for(const t of i.elements)Wt.superEl(t);Yn=Math.max(Yn,i.i===Kt?.6:.35),Ua(i.elements.map(t=>Le[t].super.name).join(" + "),Le[i.elements[0]].color,!0),Na(Le[i.elements[0]].color,.5);break}case"pulse":qt.pulseFx(i,At.world),i.targets.length&&Wt.zap();break;case"react":qt.reactFx(i.x,i.y,i.color),Wt.power(),Ua(i.team?`TEAM COMBO  ·  ${i.name}`:i.name,i.color,i.team),Na(i.color,i.team?.5:.35),(i.i===Kt||i.by===Kt)&&(Ye=Math.max(Ye,.1));break;case"finisher":{const t=i.i===Kt||i.target===Kt;qt.reactFx(i.x,i.y,16777215),qt.finisherFx(i.i,i.target,t),qt.kick(9),Wt.power(),Wt.wallBreak(),Ua("FINISHER",fn.specs[i.i].accent,!0),Yn=Math.max(Yn,t?.8:.4),Ye=Math.max(Ye,t?.2:.08),t&&qn(70);break}case"floor":i.phase==="warn"?(qt.floorWarn(i.sector),Wt.rim(.7),vn("FLOOR CRACKING")):(qt.floorFall(i.sector),Wt.wallBreak());break;case"fall":qt.fallFx(i.i),i.i===Kt&&qn(80);break;case"hazard":qt.hazardHit(i),Wt.rim(i.strength),i.i===Kt&&i.strength>.3&&qn(40);break;case"plate":qt.plateFx(i.i,i.lost),Wt.wallBreak(),i.i===Kt&&qn(50),vn(i.i===Kt?i.left?`PLATE LOST (${i.left} LEFT)`:"LAST PLATE LOST":i.left?"PLATE OFF":"PLATES GONE");break;case"crack":i.i===Kt&&qn(90),i.stage<3&&(qt.crackTop(i.i,i.stage),Wt.wallBreak(),vn(i.i===Kt?i.stage===1?"YOUR ARMOUR BROKE":"YOUR DISC SHEARED OFF":i.stage===1?"ARMOUR BREAK":"DISC BREAK"),i.i===Kt&&Na(16724770,.4));break;case"rim":qt.rimHit(i.x,i.y,i.strength),Wt.rim(i.strength);break;case"out":i.reason==="burst"||i.reason==="broken"?(qt.burstTop(i.i),Wt.burst(),Ye=Math.max(Ye,.1)):i.reason==="ringout"?(qt.ringOut(i.i),Wt.ringOut()):Wt.spinOut(),At.world.over?Yn=1.3:i.i===Kt&&vn("YOU ARE OUT");break;case"ability":Wt.ability(i.kind),i.kind==="spring"&&qt.jumpFx(i.i,At.world);break;case"brake":qt.brakeFx(i),i.phase==="stop"?Wt.ability("brake"):(Wt.release(),i.i===Kt&&qt.kick(8));break;case"land":qt.landFx(i,At.world),Wt.land(),i.i===Kt&&qn(40);break;case"counter":qt.counterFx(i),Wt.strike(),Wt.power(),i.i===Kt&&(vn("COUNTER"),qt.kick(8));break;case"legend":if(qt.legendFx(i),i.i===Kt){const t={shard:"SHARD THROWN",bank:"RESERVOIR RELEASED",twin:"SECOND CHARGE READY",echo:"ECHO",opener:"OPENER READY",thorn:"THORNS"};t[i.id]&&!(i.id==="shard"&&i.n)&&!(i.id==="thorn"&&Math.random()<.7)&&vn(t[i.id])}i.id==="shard"&&i.n&&Wt.power(),(i.id==="bank"||i.id==="echo")&&Wt.zap();break;case"telegraph":qt.telegraphFx(i),Wt.bossWind(i.dur),vn(i.move==="slam"?"SLAM: GET OUT OF THE RING":i.move==="charge"?"CHARGE: SIDESTEP THE LANE":i.move==="vortex"?"PULLING IN: BREAK AWAY":"SLABS INCOMING");break;case"bossmove":qt.bossmoveFx(i),Wt.bossSlam(),i.targets.includes(Kt)&&(qn(80),Ye=Math.max(Ye,.12));break;case"zone":i.phase==="warn"?(qt.zoneWarnFx(i),Wt.rim(.5)):(qt.zoneHitFx(i),Wt.bossSlam(),i.targets.includes(Kt)&&(qn(60),Ye=Math.max(Ye,.1)));break;case"boss":{const t=Bi[At.specs[i.i].boss.kind];qt.bossPhaseFx(i.i),Wt.bossPhase(),Ua(t.phaseName[i.phase],At.specs[i.i].accent,!0),Na(At.specs[i.i].accent,.4),Yn=Math.max(Yn,.45);break}case"launch":Wt.launch(i.perfect),i.i===Kt&&i.perfect&&vn("PERFECT LAUNCH");break}}function jy(){const i=At.world,t=i.tops.map(()=>null);if(At.phase==="live"){i.tops[Kt].inPlay||(ki?At.liveT>.4&&(t[Kt]=gh(Math.random,i)):(Eo&&!mi&&(mi=!0,Xr=0),mi&&(Xr+=gt),t[Kt]=ro));for(let s=1;s<i.tops.length;s++)!i.tops[s].inPlay&&At.liveT>=Bf[s]&&(t[s]=gh(Math.random,i))}ro=null;const e=At.phase,n=At.tick(i.tops.map((s,r)=>r===Kt?Jy(i):sd(i,r)),t);if(wo=Zr=To=Ao=!1,n.forEach(Wf),At.phase==="countdown"){const s=Math.ceil(At.phaseT/Za);s!==xl&&(xl=s,Wt.beep(!1))}else e==="countdown"&&(xl=0,Wt.beep(!0));At.phase==="matchEnd"&&!jc&&Qy()}function Qy(){jc=!0;const i=fn,t=At.score[0]>At.score[1];let e=[],n=!1;if(!ki){const o=i.boss&&t&&!Ke.bosses.includes(i.tier);e=$p(Math.random,i.tier,t,i.boss,i.perTeam,o).map(l=>Yp(Ke,l)),o&&Ke.bosses.push(i.tier),t&&(Ke.wins++,i.tier===Ke.tier&&Ke.tier<Or&&(Ke.tier++,n=!0)),kf()}if(e.length){const o=At.world.tops[i.perTeam],l=Math.hypot(o.x,o.y),c=l>i.stadium.radius*.7?i.stadium.radius*.7/l:1;qt.dropLoot(o.x*c,o.y*c,e.map(h=>hi[h.rarity].color)),Wt.launch(e.some(h=>h.rarity>=2))}const s=e.map((o,l)=>`
      <div class="lc" style="--rc:${Fi(hi[o.rarity].color)};animation-delay:${.25+l*.18}s">
        <b>${gd(o)}</b><small>${hi[o.rarity].name.toUpperCase()} · LEVEL ${o.level} · ${ad[mn(o.part).slot]}</small>
        ${Ka(o)?`<span class="lgt">${Ka(o)}</span>`:""}
        ${o.affixes.map(c=>`<span>${xd(c)}</span>`).join("")}
      </div>`).join(""),r=ki?"":e.length?n?`LOOT  ·  TIER ${Ke.tier} UNLOCKED`:"LOOT":t?"NO DROPS THIS TIME":"NOTHING SALVAGED",a=t&&i.tier<Ke.tier?'<button data-a="next">NEXT TIER</button>':"";gs.innerHTML=`<div id="lootTitle">${r}</div><div id="loot">${s}</div><div class="btns">${a}<button data-a="again">REMATCH</button><button data-a="shop">FORGE</button></div>`}const t1={ringout:"RING-OUT",burst:"BURST",spinout:"SPIN-OUT",broken:"DESTROYED",time:"TIME"};function Oa(i,t=""){if(i!==qu){qu=i;const e=ce("big");e.textContent=i,e.classList.remove("pop"),e.offsetWidth,i&&e.classList.add("pop")}ce("sub").textContent=t}function Yu(i){const t=At.specs[i].ai?.persona;return t&&!(At.world.teams[i]===0&&i===Kt)?` <em class="tag">${Kp[t]}</em>`:""}function e1(){for(const i of[0,1]){const t=document.querySelector(i?".panel.right":".panel.left"),e=At.specs.map((s,r)=>r).filter(s=>At.world.teams[s]===i),n=e.length>1;t.classList.toggle("many",n),t.innerHTML=`<div class="name"><span>${n?i?"ENEMY TEAM":"YOUR TEAM":At.specs[e[0]].name+Yu(e[0])}</span><span class="pips" id="p${i}"></span></div>`+e.map(s=>`<div class="row" id="r${s}">${n?`<span class="nm">${s===Kt?"YOU":At.specs[s].name+Yu(s)}</span>`:""}<div class="bar spin"><i id="s${s}"></i></div><div class="bar burst"><i id="b${s}"></i></div><div class="bar arm"><i id="a${s}"></i></div></div>`).join("")}}function $u(i,t,e){i.childElementCount!==e&&(i.innerHTML="<i></i>".repeat(e)),[...i.children].forEach((n,s)=>n.classList.toggle("on",s<t))}function n1(i){const t=At.world;t.tops.forEach((S,b)=>{ce(`s${b}`).style.width=`${(S.inPlay?Math.min(1,on(S)):1)*100}%`,ce(`b${b}`).style.width=`${Math.min(1,S.burst)*100}%`,ce(`a${b}`).style.width=`${S.armour*100}%`,ce(`r${b}`).classList.toggle("out",!!S.out)});const e=At.specs.findIndex(S=>S.boss),n=ce("bossbar");if(e>=0&&t.tops[e].inPlay&&!t.tops[e].out){const S=t.tops[e],b=Bi[At.specs[e].boss.kind];n.style.display="block",n.style.setProperty("--foe",Fi(At.specs[e].accent)),ce("bossName").textContent=b.name,ce("bossPhase").textContent=`PHASE ${Math.min(2,S.stage)+1}  ·  ${b.phaseName[Math.min(2,S.stage)]}`,ce("bossFill").style.width=`${S.armour*100}%`;const y=ce("bossMove"),C=S.bossMove&&S.bossStage===0;y.textContent=C?{slam:"SLAM",charge:"CHARGE",vortex:"PULL",drops:"SLABS"}[S.bossMove]:"",y.classList.toggle("on",!!C)}else n.style.display="none";$u(ce("p0"),At.score[0],At.winsNeeded),$u(ce("p1"),At.score[1],At.winsNeeded),ce("timer").textContent=String(Math.max(0,Math.ceil(td-t.time))),ce("round").textContent=`${At.stadium.name}  ·  TIER ${fn.tier}  ·  ROUND ${At.round}`;const s=t.tops[Kt],r=document.getElementById("combo");for(let S=0;S<3;S++)r.children[S].classList.toggle("on",s.combo>S);r.classList.toggle("full",s.combo>=3);const a=document.getElementById("arrows"),o=innerWidth,l=innerHeight;t.tops.forEach((S,b)=>{let y=a.children[b];y||(y=document.createElement("i"),a.append(y));const C=b!==Kt&&S.inPlay&&!S.out?qt.simToScreen(S.x,S.y):null;if(!C||!C.behind&&C.x>0&&C.x<o&&C.y>0&&C.y<l){y.style.display="none";return}const E=(C.x-o/2)*(C.behind?-1:1),w=(C.y-l/2)*(C.behind?-1:1),v=Math.min((o/2-30)/Math.max(1,Math.abs(E)),(l/2-30)/Math.max(1,Math.abs(w)));y.style.display="",y.style.setProperty("--c",t.teams[b]===t.teams[Kt]?"var(--me)":"var(--foe)"),y.style.transform=`translate(${o/2+E*v}px,${l/2+w*v}px) rotate(${Math.atan2(w,E)}rad)`});for(let S=t.tops.length;S<a.children.length;S++)a.children[S].style.display="none";At.phase==="countdown"?Oa(String(Math.ceil(At.phaseT/Za))):At.phase==="live"?Oa(At.liveT<.9?"LAUNCH!":""):t.over&&(At.phase==="matchEnd"?Oa(At.score[0]>At.score[1]?"VICTORY":"DEFEAT"):Oa(t1[t.over.reason],t.over.winner<0?"DRAW":t.over.winner===0?"ROUND WON":"ROUND LOST")),gs.classList.toggle("hidden",At.phase!=="matchEnd");const c=!ki&&!s.inPlay&&(At.phase==="countdown"||At.phase==="live");if(ce("launch").classList.toggle("hidden",!c),c&&Sn.active&&(ci={x:Sn.sx*Nr(t.stadium)*.9,y:Sn.sy*Nr(t.stadium)*.9}),c){ce("pw").style.width=`${(mi?zf():0)*100}%`;const S=En===0?"FLAT":(En<0?"◀ ":"")+`${Math.round(Math.abs(En)*100)}%`+(En>0?" ▶":"");ce("tilt").textContent=`TILT  ${S}`;const b=Hf();qt.setAim(!0,b.x,b.y,En,s.spec.spinDir)}else qt.setAim(!1);const h=nd(s.spec),u=s.brakeT>0?"RELEASE":ed[s.spec.ability]+(s.lg.twin===1?" x2":"");ce("abName").textContent=u,$y.style.height=`${s.strikeCd/at.STRIKE_CD*100}%`,Ky.style.height=`${s.boostCd/at.BOOST_CD*100}%`,ce("abFill").style.height=`${s.abilityCd/h*100}%`,ce("ability").classList.toggle("ready",s.inPlay&&!s.out&&s.abilityCd<=0),Xa>0&&(Xa-=i,Xa<=0&&(ce("toast").style.opacity="0")),Wt.setHum(0,on(s),s.inPlay&&!s.out);let f=null,d=1/0;t.tops.forEach((S,b)=>{const y=Math.hypot(S.x-s.x,S.y-s.y);t.teams[b]!==0&&Ve(S)&&y<d&&(d=y,f=S)}),Wt.setHum(1,f?on(f):0,!!f);const g=s.spec.elements,x=g.map(S=>Le[S].super.name).join(" + "),p=Fi(Le[g[0]].color),m=s.superMeter>=1;ls.style.setProperty("--sc",p),ls.firstElementChild.style.width=`${s.superMeter*100}%`,ls.lastElementChild.textContent=m?`${x} READY${Sn.active?"":"  ·  F"}`:"OVERDRIVE",ls.classList.toggle("ready",m),Sn.update({superMeter:s.superMeter,superName:x,superColor:p,launching:c,ability:u,strike:s.strikeCd/at.STRIKE_CD,boost:s.boostCd/at.BOOST_CD,abilityCd:s.abilityCd/h})}let Ku=0,Zu=0,Xf=!1;function qf(i){requestAnimationFrame(qf),Xf?ao=i:Yf(i)}function Yf(i){const t=Math.max(0,Math.min(.05,(i-ao)/1e3));if(ao=i,Vi==="workshop"){Bn.frame(t);return}De.measured||(++Ku>40&&(Zu+=Math.min(.1,t)),Ku>=130&&yr({quality:lm(Zu/90*1e3),measured:!0,qualityAuto:!0}));let e=1,n=-1;if(Yn>0&&(Yn-=t,e=.22),Ye>0&&(Ye-=t,e=0),Dr>0){Dr-=t,e=0,n=1;const s=wc-Dr,r=At.specs.findIndex(a=>a.boss);if(Er===0&&s>.55&&r>=0){Er=1;const a=[];id(At.world,r,{x:0,y:0,power:1,tilt:0},a),a.forEach(Wf)}if(Er===1&&s>1.35){Er=2,Wt.bossSlam(),qn(120);const a=Bi[At.specs[r].boss.kind],o=ce("bossplate");o.style.setProperty("--foe",Fi(At.specs[r].accent)),o.firstElementChild.textContent=a.name,o.lastElementChild.textContent=a.epithet.toUpperCase(),o.classList.remove("show"),o.offsetWidth,o.classList.add("show")}}for(wr+=t*e;wr>=gt;)jy(),wr-=gt;At.world!==Ec&&(Ec=At.world,Zy()),n1(t),qt.frame(At.world,wr/gt,t*(n>=0?n:e),i/1e3,Kt)}window.addEventListener("keydown",i=>{Vi==="battle"&&(i.code==="Space"&&(wo=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(Zr=!0),i.code==="KeyF"&&(Ao=!0),i.code==="KeyQ"&&(En=Math.max(-1,En-.25)),i.code==="KeyE"&&(En=Math.min(1,En+.25)),Nn.add(i.code))});window.addEventListener("keyup",i=>Nn.delete(i.code));window.addEventListener("blur",()=>{Nn.clear(),Eo=!1});Kr.addEventListener("mousemove",i=>{Vi==="battle"&&!Sn.active&&(ci=qt.screenToSim(i.clientX,i.clientY))});Kr.addEventListener("mousedown",i=>{if(!(Vi!=="battle"||Sn.active)){if(ci=qt.screenToSim(i.clientX,i.clientY),i.button===2){Zr=!0;return}i.button===0&&(At.world.tops[Kt].inPlay&&(To=!0),Gf())}});window.addEventListener("mouseup",i=>{i.button===0&&!Sn.active&&Vf()});Kr.addEventListener("wheel",i=>{Vi==="battle"&&(En=Math.max(-1,Math.min(1,En+(i.deltaY>0?.25:-.25))),i.preventDefault())},{passive:!1});Kr.addEventListener("contextmenu",i=>i.preventDefault());Object.assign(window,{sf:{get match(){return At},get mode(){return Vi},get fight(){return fn},save:Ke,view:qt,workshop:Bn,start(i,t=1){Bn.tier=i,Bn.perTeam=t,qr("new")},pause(i=!0){Xf=i},step(i,t=16.67){for(let e=0;e<i;e++)Yf(ao+t)}}});ki?qr("new"):th("workshop");window.__sfReady?.();requestAnimationFrame(qf);
