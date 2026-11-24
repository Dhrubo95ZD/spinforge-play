(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ui={warden:{kind:"warden",name:"THE FOUNDRY WARDEN",epithet:"A furnace in a plate shell",element:"thermal",paint:12866074,glow:16752688,metal:"gunmetal",moves:[["slam"],["slam"],["slam","drops"]],cd:[6.5,4.6,4.2],speed:[1,1.35,1.5],persona:["turtle","rusher","rusher"],phaseName:["SHELL ON","SHELL SHED","SLAG FALL"],drops:[0,0,1],chain:[!1,!1,!1]},piledriver:{kind:"piledriver",name:"THE PILEDRIVER",epithet:"A ram that runs the arena",element:"quake",paint:14200864,glow:16765498,metal:"steel",moves:[["charge"],["charge"],["charge","slam"]],cd:[6,4.6,3.6],speed:[1,1.2,1.3],persona:["ambusher","rusher","rider"],phaseName:["RAM READY","DOUBLE CHARGE","CHARGE AND CRUSH"],drops:[0,0,0],chain:[!1,!0,!1]},gyre:{kind:"gyre",name:"THE GYRE ENGINE",epithet:"A gyroscope that drags you in",element:"volt",paint:2789304,glow:6480639,metal:"chrome",moves:[["vortex"],["drops","vortex"],["vortex","charge"]],cd:[7,5,4],speed:[1,1.25,1.4],persona:["turtle","ambusher","rusher"],phaseName:["GYRO SPIN","PYLON RAIN","OVERSPEED"],drops:[0,2,0],chain:[!1,!1,!1]},flywheel:{kind:"flywheel",name:"THE LAST FLYWHEEL",epithet:"Stored spin of every machine before it",element:"mag",paint:9313324,glow:16730716,metal:"copper",moves:[["charge","slam"],["charge","drops","vortex"],["charge","slam","drops","vortex"]],cd:[5.5,4.2,3.2],speed:[1,1.25,1.4],persona:["rider","rusher","rusher"],phaseName:["FULL RIM","SPOKES OUT","RUNAWAY"],drops:[0,1,2],chain:[!1,!1,!0]}},Xf=["warden","piledriver","gyre","flywheel"],qu=i=>Xf[(Math.floor(i/5)-1+4)%4],we={SLAM_WIND:.9,SLAM_R:4.4,CHARGE_WIND:1.1,CHAIN_WIND:.55,CHARGE_T:.75,CHARGE_SPEED:30,CHARGE_LANE:2.6,VORTEX_WIND:1.4,VORTEX_R:12,VORTEX_PULL:15,DROP_WIND:.5,DROP_DELAY:1.3,DROP_R:2.3,CRASH_STUN:.9},zs={id:"foundry",name:"THE FOUNDRY",radius:10,pull:1.3,segments:24,segHp:3,openSegs:[6,14,22],rail:{width:1.6,accel:16,max:26},pillars:[],theme:{floor:1382950,wall:8950440,strip:4029439}},Ar=(i,t,e,n,s=0)=>Array.from({length:i},(r,a)=>{const o=s+a/i*Math.PI*2;return{x:Math.cos(o)*t,y:Math.sin(o)*t,r:e,hp:n}}),qf={id:"pillaryard",name:"PILLAR YARD",radius:10,pull:1,segments:24,segHp:2,openSegs:[0,12],rail:{width:1.6,accel:12,max:22},pillars:Ar(4,4.6,.75,4,Math.PI/4),theme:{floor:1840914,wall:10521192,strip:16747050}},Yf={id:"crucible",name:"THE CRUCIBLE",radius:14,pull:.9,segments:32,segHp:3.5,openSegs:[0,8,16,24],rail:{width:1.8,accel:18,max:30},pillars:Ar(6,7.2,.9,5),theme:{floor:1905684,wall:10129295,strip:16730682}},$f={id:"ironbasin",name:"IRON BASIN",radius:14,pull:1,segments:32,segHp:2.5,openSegs:[5,16,27],rail:{width:1.8,accel:20,max:32},pillars:[],theme:{floor:1054746,wall:8362656,strip:2807496}},Kf={id:"colosseum",name:"THE COLOSSEUM",radius:18,pull:.7,segments:40,segHp:4,openSegs:[0,10,20,30],rail:{width:2,accel:20,max:34},pillars:[...Ar(4,5.5,1.1,7),...Ar(8,12,.9,5,Math.PI/8)],theme:{floor:1446940,wall:11116736,strip:10120191}},Eo=i=>({id:`crumble${i}`,name:"THE CRUMBLE",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:[],rail:null,pillars:i===18?Ar(4,6,1,6,Math.PI/4):[],theme:{floor:2365974,wall:10850168,strip:16742954},collapse:i===10?{sectors:8,inner:.38,start:12,every:3.4,warn:1.4}:i===14?{sectors:10,inner:.34,start:11,every:3,warn:1.4}:{sectors:12,inner:.3,start:10,every:2.6,warn:1.4}}),wo=i=>{const t=i,e=t===10?[{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:0},{kind:"bar",r0:1.8,r1:8.2,width:.4,omega:.9,phase:Math.PI}]:t===14?[{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:0},{kind:"bar",r0:2.6,r1:12,width:.5,omega:.75,phase:Math.PI},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:7.5,period:7,phase:0,r:1.1},{kind:"block",x:0,y:0,ang:0,amp:7.5,period:7,phase:3.5,r:1.1}]:[{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:0},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*2/3},{kind:"bar",r0:3,r1:16,width:.55,omega:.6,phase:Math.PI*4/3},{kind:"block",x:0,y:0,ang:Math.PI/4,amp:11,period:8,phase:0,r:1.3},{kind:"block",x:0,y:0,ang:-Math.PI/4,amp:11,period:8,phase:4,r:1.3},{kind:"block",x:0,y:0,ang:Math.PI/2,amp:11,period:9,phase:2,r:1.3},{kind:"block",x:0,y:0,ang:0,amp:11,period:9,phase:6.5,r:1.3}];return{id:`thresher${i}`,name:"THE THRESHER",radius:i,pull:i===10?1.1:i===14?.95:.75,segments:i===10?24:i===14?32:40,segHp:3,openSegs:i===10?[3,15]:i===14?[4,20]:[5,25],rail:null,pillars:[],theme:{floor:1318940,wall:8364176,strip:11992890},hazards:e}},Zf=[zs,qf,Yf,$f,Kf,Eo(10),Eo(14),Eo(18),wo(10),wo(14),wo(18)];function Sc(i,t){if(i.kind==="bar")return{a:i.phase+i.omega*t,x:0,y:0,vx:0,vy:0};const e=Math.PI*2/i.period,n=Math.sin(e*t+i.phase),s=Math.cos(e*t+i.phase);return{a:i.ang,x:i.x+Math.cos(i.ang)*i.amp*n,y:i.y+Math.sin(i.ang)*i.amp*n,vx:Math.cos(i.ang)*i.amp*e*s,vy:Math.sin(i.ang)*i.amp*e*s}}function Ec(i,t){const e=(t%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return Math.min(i.sectors-1,Math.floor(e/(Math.PI*2)*i.sectors))}function Jf(i){const t=i<=2?10:i<=4?14:18;return Zf.filter(e=>e.radius===t)}const no=["thermal","cryo","volt","gale","quake","mag","plasma","gravity","resonance"],jf=["plasma","gravity","resonance"],Ue={thermal:{name:"Thermal",color:16734751,status:"HEATED",statusText:"loses spin steadily",super:{name:"MELTDOWN",dur:4,atk:1.6,steer:1.35,start:{radius:4,impulse:9,status:!0},pulse:{every:.5,radius:3.4,spin:1.6,status:!0}}},cryo:{name:"Cryo",color:8379647,status:"CHILLED",statusText:"steers and travels at about half speed",super:{name:"ABSOLUTE ZERO",dur:2.2,guard:.5,start:{radius:6.5,stun:1.4,armour:.08,status:!0}}},volt:{name:"Volt",color:16773226,status:"CHARGED",statusText:"takes extra spin damage from hits",super:{name:"ARC STORM",dur:3,pulse:{every:.35,radius:9,nearest:!0,spin:3.2,stun:.12,status:!0}}},gale:{name:"Gale",color:10354640,status:"LIFTED",statusText:"is thrown much further by hits",super:{name:"CYCLONE",dur:2.2,pull:{radius:8,accel:26},end:{radius:5.5,impulse:27,status:!0}}},quake:{name:"Quake",color:14263386,status:"CRACKED",statusText:"takes extra armour damage",super:{name:"FAULT LINE",dur:1,start:{radius:7,impulse:20,armour:.15,status:!0,wreck:2.6}}},mag:{name:"Mag",color:12946431,status:"PULLED",statusText:"is dragged toward whoever marked it",super:{name:"POLARITY",dur:.7,guard:.6,start:{radius:40,nearest:!0,impulse:-24,status:!0},end:{radius:4,impulse:32}}},plasma:{name:"Plasma",color:16732120,status:"IONISED",statusText:"has its armour eaten away",super:{name:"NOVA LANCE",dur:1.1,atk:1.3,start:{radius:15,nearest:!0,armour:.2,spin:5,impulse:16,status:!0}}},gravity:{name:"Gravity",color:6978559,status:"SLUNG",statusText:"slides outward toward the rim",super:{name:"SINGULARITY",dur:2.6,guard:.7,pull:{radius:11,accel:34},pulse:{every:.4,radius:3,spin:1.4,armour:.02},end:{radius:5.5,impulse:30,status:!0}}},resonance:{name:"Resonance",color:5242848,status:"RINGING",statusText:"bleeds Overdrive charge",super:{name:"HARMONIC",dur:2.4,pulse:{every:.6,radius:6.5,stun:.35,armour:.05,impulse:8,wreck:.8,status:!0}}}},Qf=4,tp=[{a:"thermal",b:"cryo",name:"THERMAL SHOCK",color:16777215,armour:.22},{a:"thermal",b:"gale",name:"FIRESTORM",color:16747050,spin:13},{a:"cryo",b:"quake",name:"SHATTER",color:12578815,armour:.28},{a:"volt",b:"mag",name:"RAILSHOT",color:14721279,impulse:34},{a:"cryo",b:"volt",name:"SUPERCONDUCT",color:11465983,stun:1.3,spin:4},{a:"thermal",b:"quake",name:"ERUPTION",color:16738874,impulse:20,armour:.14},{a:"gale",b:"volt",name:"TEMPEST",color:14221194,spin:9,impulse:14},{a:"gale",b:"quake",name:"SANDBLAST",color:15255696,armour:.12,spin:6},{a:"mag",b:"quake",name:"IRON TIDE",color:12098815,impulse:22,armour:.1},{a:"plasma",b:"volt",name:"OVERLOAD",color:16752880,stun:1,armour:.16},{a:"plasma",b:"cryo",name:"FLASH FREEZE",color:14731519,stun:.6,armour:.2},{a:"plasma",b:"gravity",name:"EVENT HORIZON",color:11559167,armour:.3,spin:8},{a:"gravity",b:"quake",name:"COLLAPSE",color:9081087,armour:.26},{a:"gravity",b:"gale",name:"SLINGSHOT",color:9494783,impulse:38},{a:"resonance",b:"quake",name:"AFTERSHOCK",color:10479808,armour:.15,stun:.8},{a:"resonance",b:"volt",name:"FEEDBACK",color:13172634,spin:12},{a:"resonance",b:"thermal",name:"BOILOVER",color:16760970,spin:10,armour:.08}],Yu=(i,t)=>tp.find(e=>e.a===i&&e.b===t||e.a===t&&e.b===i),ep=i=>{const t=Ue[i];return{id:i,name:t.name,elements:[i],blurb:`${t.super.name}. Marks foes ${t.status}: a marked top ${t.statusText}.`}},Gn=(i,t,e,n)=>({id:i,name:t,elements:[e,n],blurb:`Fused ${Ue[e].name} and ${Ue[n].name}. Fires both supers at once, and its strikes set off ${Yu(e,n)?.name??"both statuses"} on their own.`}),Ga=[...no.map(ep),Gn("firestorm","Firestorm","thermal","gale"),Gn("glacier","Glacier","cryo","quake"),Gn("railgun","Railgun","volt","mag"),Gn("superconductor","Superconductor","cryo","volt"),Gn("magma","Magma","thermal","quake"),Gn("tempest","Tempest","gale","volt"),Gn("horizon","Event Horizon","plasma","gravity"),Gn("overload","Overload","plasma","volt"),Gn("collapse","Collapse","gravity","quake"),Gn("feedback","Feedback","resonance","volt")],io=i=>Ga.find(t=>t.id===i)??Ga[0],sh=i=>io(i).elements.length>1,$u=i=>io(i).elements.some(t=>jf.includes(t)),rh=i=>$u(i)?sh(i)?4:3:sh(i)?2:0,Pt=1/60,Ku=60,at={SMASH:.03,TANG:.3,SPINLOSS:.025,EQ:.05,BURST:.0024,BURST_DRAIN:.01,STEER_MULT:2.8,RIM_E:.6,RIM_SPIN:.03,HIT_CD:.07,WEAK_KB:1,WALL_MIN:7,WALL_DIV:11,ARMOUR_MIN:11,ARMOUR:.002,STAGGER_T:.9,STAGGER_ARMOUR:.2,HEAT_DRAIN:1,SUPER_PASSIVE:.012,SUPER_HIT:.011,SUPER_STRIKE:.1,BOOST_IMPULSE:18,BOOST_CD:.9,BOOST_COST:.5,BOOST_T:.3,STRIKE_T:.22,STRIKE_CD:1.1,STRIKE_CD_HIT:.45,STRIKE_COST:.8,STRIKE_ATK:1.7,STRIKE_GUARD:.55,DASH_IMPULSE:24,DASH_CD:6,DASH_COST:2,DASH_T:.6,BRACE_T:1.5,BRACE_CD:8,BRAKE_T:.6,BRAKE_MINHOLD:.12,BRAKE_CD:7,BRAKE_COST:1,BRAKE_GAIN:1.3,BRAKE_PLUS:6,BRAKE_MIN:14,BRAKE_MAX:34,BRAKE_GUARD:.35,JUMP_T:.45,JUMP_CD:7,JUMP_COST:1.5,JUMP_HOP:9,LAND_R:3.4,LAND_IMPULSE:12,LAND_SPIN:2,LAND_ARMOUR:.015,HAZ_E:.5,HAZ_SPIN:.5,HAZ_ARMOUR_MIN:8,HAZ_ARMOUR:.006,COUNTER_WIN:.35,COUNTER_SPEED:11,COUNTER_IMPULSE:16,LAUNCH_FRAC:.65},Zu={dash:"SURGE",brace:"BRACE",brake:"BRAKE",spring:"SPRING"},Zi={sx:0,sy:0,ability:!1,boost:!1,strike:!1};function np(i,t){const e=i.collapse;if(!e)return{floorT:[],floorPhase:[]};let n=t^1540483477|0;const s=()=>{n=n+1831565813|0;let o=Math.imul(n^n>>>15,1|n);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296},r=Array.from({length:e.sectors},(o,l)=>l);for(let o=r.length-1;o>0;o--){const l=Math.floor(s()*(o+1));[r[o],r[l]]=[r[l],r[o]]}const a=new Array(e.sectors).fill(0);return r.forEach((o,l)=>a[o]=e.start+e.warn+l*e.every),{floorT:a,floorPhase:new Array(e.sectors).fill(0)}}function ah(i,t,e=zs,n=i.map((s,r)=>r%2)){return{teams:n,pairCd:new Array(i.length*i.length).fill(0),lastOut:null,zones:[],stadium:e,segHp:Array.from({length:e.segments},(s,r)=>e.openSegs.includes(r)?0:e.segHp),pillars:e.pillars.map(s=>({...s})),...np(e,t),tops:i.map(s=>({spec:s,x:0,y:0,vx:0,vy:0,px:0,py:0,spin:0,phase:0,burst:0,inPlay:!1,leaving:!1,out:null,steerX:0,steerY:0,abilityCd:0,braceT:0,dashT:0,brakeT:0,brakeSpeed:0,brakeDx:0,brakeDy:0,airT:0,counterT:0,boostCd:0,boostT:0,strikeT:0,combo:0,comboT:0,statusFrom:{},strikeCd:0,onRail:!1,shift:0,plates:0,sink:0,status:{thermal:0,cryo:0,volt:0,gale:0,quake:0,mag:0,plasma:0,gravity:0,resonance:0},statusBy:0,reactCd:0,stunT:0,superMeter:0,superT:0,pulseT:0,armour:1,stage:0,bossMove:null,bossStage:0,bossT:0,bossDur:1,bossDx:0,bossDy:1,bossCd:2.2,bossCount:0,bossChain:0})),time:0,rng:t|0,over:null}}function Mr(i){i.rng=i.rng+1831565813|0;let t=Math.imul(i.rng^i.rng>>>15,1|i.rng);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}const cn=i=>Math.abs(i.spin)/i.spec.maxSpin,ip=i=>i.ability==="dash"?at.DASH_CD:i.ability==="brake"?at.BRAKE_CD:i.ability==="spring"?at.JUMP_CD:at.BRACE_CD,Ye=i=>i.spec.radius+(i.spec.shift?.radius??0)*i.shift+(i.spec.flail?i.spec.flail.radius*Math.min(1,cn(i)):0),oh=i=>(i.spec.flail?1+i.spec.flail.attack*(Math.min(1,cn(i))-.5):1)*(i.spec.plates?1-i.spec.plates.attack*i.plates:1),lh=i=>(i.spec.plates?1+i.spec.plates.speed*i.plates:1)*(i.spec.boss?Ui[i.spec.boss.kind].speed[Math.min(2,i.stage)]:1),Ua=(i,t)=>1+(i.spec.shift?.[t]??0)*i.shift,en=i=>i.inPlay&&!i.out&&!i.leaving;function pl(i,t){const e=i.segments;return(Math.round(t/(Math.PI*2)*e)%e+e)%e}const Rr=i=>i.radius*at.LAUNCH_FRAC;function Ju(i,t,e,n){const s=i.tops[t];if(s.inPlay)return;let{x:r,y:a}=e;const o=Math.hypot(r,a),l=Rr(i.stadium);o>l&&(r*=l/o,a*=l/o);const c=Math.max(0,Math.min(1,e.power)),h=c>=.9,u=Math.max(-1,Math.min(1,e.tilt));s.x=s.px=r,s.y=s.py=a,s.spin=s.spec.spinDir*s.spec.maxSpin*(h?1:.6+.4*c);const d=Math.hypot(r,a),f=d>.05?-a/d:1,g=d>.05?r/d:0;s.vx=f*u*14*s.spec.spinDir,s.vy=g*u*14*s.spec.spinDir,s.inPlay=!0,n.push({type:"launch",i:t,perfect:h})}function ch(i,t){return t<at.WALL_MIN?i:Math.max(0,i-t/at.WALL_DIV)}const ml=i=>i.spec.mass*(i.stage>=2?.85:1)*(i.spec.plates?1-i.spec.plates.mass*i.plates:1);function gl(i,t){if(i.superT<=0)return 1;let e=1;for(const n of i.spec.elements){const s=Ue[n].super[t];s!==void 0&&(e=t==="guard"?Math.min(e,s):Math.max(e,s))}return e}const Hr=(i,t)=>{i.spin=Math.max(0,Math.abs(i.spin)-t)*i.spec.spinDir},Gr=(i,t,e,n)=>{const s=i.x-t,r=i.y-e,a=Math.hypot(s,r)||1,o=Math.sqrt(ml(i)/1.1);i.vx+=s/a*n/o,i.vy+=r/a*n/o},sp=2,rp=.05,ap=3.5,op=1.2,lp=.15,cp=.07;function Dn(i,t,e,n){const s=i.tops[t];if(s.out||e<=0)return;if(s.armour=Math.max(0,s.armour-e*(s.status.quake>0?1.6:1)*(s.braceT>0||s.brakeT>0?.4:1)),s.spec.plates){const a=Math.min(s.spec.plates.count,Math.floor((1-s.armour)/cp));for(;s.plates<a;)s.plates++,n.push({type:"plate",i:t,lost:s.plates,left:s.spec.plates.count-s.plates})}const r=s.armour<=0?3:s.armour<.34?2:s.armour<.67?1:0;r>s.stage&&(s.stage=r,n.push({type:"crack",i:t,stage:r}),s.spec.boss&&r<3&&up(i,t,r,n),r===3&&(s.out="broken",n.push({type:"out",i:t,reason:"broken"})))}function xl(i,t,e,n,s){const r=i.tops[t];if(!r.out){if(r.reactCd<=0)for(const a of no){if(a===e||r.status[a]<=0)continue;const o=Yu(e,a);if(!o)continue;const l=i.tops[n],c=r.statusFrom[a],h=c!==void 0&&c!==n&&i.teams[c]===i.teams[n],u=l.spec.superPower*(h?op:1);if(h)for(const d of[c,n])i.tops[d].superMeter=Math.min(1,i.tops[d].superMeter+lp);r.status[a]=0,r.status[e]=0,r.reactCd=1.5,o.spin&&Hr(r,o.spin*u),o.stun&&(r.stunT=Math.max(r.stunT,o.stun)),o.impulse&&Gr(r,l.x,l.y,o.impulse),s.push({type:"react",i:t,by:n,name:o.name,color:o.color,x:r.x,y:r.y,team:h}),o.armour&&Dn(i,t,o.armour*u,s);return}r.status[e]=Qf,r.statusFrom[e]=n,e==="mag"&&(r.statusBy=n)}}function To(i,t,e,n,s){const r=i.tops[t],a=r.spec.superPower,o=c=>Math.hypot(i.tops[c].x-r.x,i.tops[c].y-r.y);let l=[];i.tops.forEach((c,h)=>{i.teams[h]!==i.teams[t]&&en(c)&&c.airT<=0&&o(h)<=n.radius+Ye(c)&&l.push(h)}),n.nearest&&l.length>1&&(l=[l.sort((c,h)=>o(c)-o(h))[0]]);for(const c of l){const h=i.tops[c];n.impulse&&Gr(h,r.x,r.y,n.impulse),n.spin&&Hr(h,n.spin*a),n.stun&&(h.stunT=Math.max(h.stunT,n.stun)),n.status&&xl(i,c,e,t,s),n.armour&&Dn(i,c,n.armour*a,s)}if(n.wreck){i.pillars.forEach((u,d)=>{u.hp<=0||Math.hypot(u.x-r.x,u.y-r.y)>n.radius||(u.hp=Math.max(0,u.hp-n.wreck),u.hp<=0&&s.push({type:"break",kind:"pillar",index:d,x:u.x,y:u.y}))});const c=i.stadium.radius,h=Math.hypot(r.x,r.y);if(h>.5&&c-h<n.radius){const u=Math.acos(Math.max(-1,Math.min(1,(c*c+h*h-n.radius*n.radius)/(2*c*h)))),d=Math.atan2(r.y,r.x),f=i.stadium.segments;for(let g=0;g<f;g++){const x=g/f*Math.PI*2,p=Math.atan2(Math.sin(x-d),Math.cos(x-d));Math.abs(p)>u||i.segHp[g]<=0||(i.segHp[g]=Math.max(0,i.segHp[g]-n.wreck*.6),i.segHp[g]<=0&&s.push({type:"break",kind:"wall",index:g,x:Math.cos(x)*c,y:Math.sin(x)*c}))}}}s.push({type:"pulse",i:t,x:r.x,y:r.y,radius:Math.min(n.radius,12),element:e,targets:l})}function vl(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!en(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function hp(i,t,e){const n=i.tops[t],s=[];i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!en(r)||r.airT>0||Math.hypot(r.x-n.x,r.y-n.y)>at.LAND_R+Ye(r)||(s.push(a),Gr(r,n.x,n.y,at.LAND_IMPULSE),Hr(r,at.LAND_SPIN),Dn(i,a,at.LAND_ARMOUR,e))}),e.push({type:"land",i:t,x:n.x,y:n.y,radius:at.LAND_R,targets:s})}function ju(i,t,e,n,s,r,a){const o=[];return i.tops.forEach((l,c)=>{i.teams[c]===i.teams[t]||!en(l)||l.airT>0||Math.hypot(l.x-e,l.y-n)>s+Ye(l)*.6||(o.push(c),Gr(l,e,n,22*r),Hr(l,3*r),l.stunT=Math.max(l.stunT,.35),Dn(i,c,.02*r,a))}),o}function up(i,t,e,n){const s=i.tops[t];s.bossMove=null,s.bossCd=1.3,s.bossChain=0,i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!en(r)||r.airT>0||Math.hypot(r.x-s.x,r.y-s.y)<5.5&&Gr(r,s.x,s.y,15)}),n.push({type:"boss",i:t,phase:e})}function dp(i,t){for(let e=i.zones.length-1;e>=0;e--){const n=i.zones[e];if(n.t-=Pt,n.t>0)continue;i.zones.splice(e,1);const s=ju(i,n.i,n.x,n.y,n.r,.8,t);t.push({type:"zone",i:n.i,phase:"hit",x:n.x,y:n.y,r:n.r,dur:0,targets:s})}}function fp(i,t,e,n){const s=i.tops[t],r=Ui[s.spec.boss.kind],a=Math.min(2,s.stage),o=i.stadium.radius;s.bossCd=Math.max(0,s.bossCd-Pt);const l=(d,f,g,x)=>{s.bossMove=d,s.bossStage=0,s.bossT=s.bossDur=f,s.bossDx=g,s.bossDy=x,s.bossCount++;const p=d==="vortex"?we.VORTEX_R:d==="charge"?we.CHARGE_LANE:we.SLAM_R;n.push({type:"telegraph",i:t,move:d,x:s.x,y:s.y,dx:g,dy:x,dur:f,r:p})},c=()=>{s.bossMove=null,s.bossCd=r.cd[a]*(.85+Mr(i)*.3)};if(!s.bossMove){if(s.bossCd>0)return e;const d=vl(i,t);if(!d)return e;const f=d.x-s.x,g=d.y-s.y,x=Math.hypot(f,g)||1,p=r.moves[a][s.bossCount%r.moves[a].length];return(p==="slam"||p==="vortex")&&x>11||p==="charge"&&x<4.5?(s.bossCd=.4,s.bossCount++,e):(p==="drops"?l("drops",we.DROP_WIND,f/x,g/x):p==="charge"?(l("charge",we.CHARGE_WIND,f/x,g/x),s.bossChain=r.chain[a]?1:0):l(p,p==="slam"?we.SLAM_WIND:we.VORTEX_WIND,f/x,g/x),Zi)}const h=s.bossMove;if(s.bossT-=Pt,s.bossStage===0){if(s.vx*=.9,s.vy*=.9,h==="vortex"&&i.tops.forEach((d,f)=>{if(i.teams[f]===i.teams[t]||!en(d)||d.airT>0)return;const g=s.x-d.x,x=s.y-d.y,p=Math.hypot(g,x);p<we.VORTEX_R&&p>.5&&(d.vx+=g/p*we.VORTEX_PULL*Pt,d.vy+=x/p*we.VORTEX_PULL*Pt)}),s.bossT>0)return Zi;if(h==="slam"||h==="vortex"){const d=ju(i,t,s.x,s.y,we.SLAM_R,h==="vortex"?1.15:1,n);n.push({type:"bossmove",i:t,move:"slam",x:s.x,y:s.y,dx:0,dy:0,r:we.SLAM_R,targets:d}),c()}else if(h==="drops"){const d=r.drops[a]+1;i.tops.forEach((f,g)=>{if(!(i.teams[g]===i.teams[t]||!en(f)))for(let x=0;x<d;x++){const p=x===0?.5:.2;let m=f.x+f.vx*p+(x?(Mr(i)-.5)*7:0),b=f.y+f.vy*p+(x?(Mr(i)-.5)*7:0);const y=Math.hypot(m,b);y>o-2&&(m*=(o-2)/y,b*=(o-2)/y),i.zones.push({i:t,x:m,y:b,r:we.DROP_R,t:we.DROP_DELAY,dur:we.DROP_DELAY}),n.push({type:"zone",i:t,phase:"warn",x:m,y:b,r:we.DROP_R,dur:we.DROP_DELAY,targets:[]})}}),c()}else s.bossStage=1,s.bossT=we.CHARGE_T,n.push({type:"bossmove",i:t,move:"charge",x:s.x,y:s.y,dx:s.bossDx,dy:s.bossDy,r:we.CHARGE_LANE,targets:[]});return Zi}s.vx=s.bossDx*we.CHARGE_SPEED,s.vy=s.bossDy*we.CHARGE_SPEED,s.dashT=Math.max(s.dashT,.1);const u=Math.hypot(s.x,s.y)>o-Ye(s)-.5&&s.x*s.bossDx+s.y*s.bossDy>0;if(u&&(s.stunT=Math.max(s.stunT,we.CRASH_STUN),Hr(s,3),Dn(i,t,.03,n),s.bossChain=0),u||s.bossT<=0){if(s.vx*=.35,s.vy*=.35,s.bossChain>0&&!u){s.bossChain--;const d=vl(i,t);if(d){const f=Math.hypot(d.x-s.x,d.y-s.y)||1;return l("charge",we.CHAIN_WIND,(d.x-s.x)/f,(d.y-s.y)/f),Zi}}c()}return Zi}function Ao(i,t){const e=[],n=i.stadium,s=n.radius;if(i.time+=Pt,n.collapse){const r=n.collapse;for(let a=0;a<r.sectors;a++){const o=(a+.5)/r.sectors*Math.PI*2,l=Math.cos(o)*s*(1+r.inner)*.5,c=Math.sin(o)*s*(1+r.inner)*.5;i.floorPhase[a]===0&&i.time>=i.floorT[a]-r.warn&&(i.floorPhase[a]=1,e.push({type:"floor",sector:a,phase:"warn",x:l,y:c})),i.floorPhase[a]===1&&i.time>=i.floorT[a]&&(i.floorPhase[a]=2,e.push({type:"floor",sector:a,phase:"fall",x:l,y:c}))}}for(let r=0;r<i.pairCd.length;r++)i.pairCd[r]>0&&(i.pairCd[r]-=Pt);dp(i,e);for(let r=0;r<i.tops.length;r++){const a=i.tops[r];if(a.px=a.x,a.py=a.y,a.onRail=!1,!a.inPlay||a.out==="burst"||a.out==="broken")continue;const o=a.spec,l=Ye(a);if(a.leaving&&a.sink>0){a.sink+=Pt,a.vx*=Math.exp(-1.2*Pt),a.vy*=Math.exp(-1.2*Pt),a.x+=a.vx*Pt,a.y+=a.vy*Pt,a.phase+=a.spin*Pt,!a.out&&a.sink>.8&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}if(a.leaving){a.x+=a.vx*Pt,a.y+=a.vy*Pt,a.phase+=a.spin*Pt,!a.out&&Math.hypot(a.x,a.y)>s+1.6&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}const c=Math.hypot(a.x,a.y);let h=-n.pull*a.x,u=-n.pull*a.y;if(a.out==="spinout"){a.vx=(a.vx+h*Pt)*Math.exp(-4*Pt),a.vy=(a.vy+u*Pt)*Math.exp(-4*Pt),a.x+=a.vx*Pt,a.y+=a.vy*Pt;continue}const d=a.stunT>0;let f=d?Zi:t[r]??Zi;o.boss&&!d&&(f=fp(i,r,f,e));const g=(a.status.cryo>0?.55:1)*(d?0:1),x=cn(a),p=x<.25?(.25-x)/.25:0;if(o.shift){const U=Math.max(0,Math.min(1,(.6-x)/.2)),H=a.shift;a.shift+=Math.max(-2.5*Pt,Math.min(2.5*Pt,U-a.shift)),H<.5!=a.shift<.5&&e.push({type:"shift",i:r,guard:a.shift>=.5})}const m=c>.05?-a.y/c:1,b=c>.05?a.x/c:0,y=o.drive*Math.min(1,x*1.5)*g*lh(a);h+=m*y*o.spinDir,u+=b*y*o.spinDir;let _=f.sx,R=f.sy;const E=Math.hypot(_,R);E>1&&(_/=E,R/=E),a.steerX=_,a.steerY=R;let T=Math.abs(a.spin);if(E>.01){const U=o.steer*at.STEER_MULT*(.5+.5*x)*g*gl(a,"steer")*lh(a);h+=_*U,u+=R*U}const v=pl(n,Math.atan2(a.y,a.x));if(n.rail&&c>s-l-n.rail.width&&i.segHp[v]>0){const U=a.vx*m+a.vy*b,H=Math.abs(U)>1?Math.sign(U):o.spinDir;Math.abs(U)<n.rail.max&&(h+=m*H*n.rail.accel,u+=b*H*n.rail.accel),a.onRail=Math.abs(U)>6}p>0&&(h+=(Mr(i)-.5)*p*14,u+=(Mr(i)-.5)*p*14);const M=()=>{if(E>.01)return[_,R];const U=Math.hypot(a.vx,a.vy);return U>.5?[a.vx/U,a.vy/U]:c>.05?[-a.x/c,-a.y/c]:[1,0]};a.abilityCd=Math.max(0,a.abilityCd-Pt),a.braceT=Math.max(0,a.braceT-Pt);const S=a.brakeT>0;a.brakeT=Math.max(0,a.brakeT-Pt),a.counterT=Math.max(0,a.counterT-Pt),a.airT>0&&(a.airT=Math.max(0,a.airT-Pt),a.airT<=0&&hp(i,r,e)),a.dashT=Math.max(0,a.dashT-Pt),a.boostCd=Math.max(0,a.boostCd-Pt),a.boostT=Math.max(0,a.boostT-Pt),a.strikeCd=Math.max(0,a.strikeCd-Pt),a.strikeT=Math.max(0,a.strikeT-Pt),a.comboT=Math.max(0,a.comboT-Pt),a.comboT<=0&&(a.combo=0);for(const U of no)a.status[U]>0&&(a.status[U]-=Pt);if(a.reactCd=Math.max(0,a.reactCd-Pt),a.stunT=Math.max(0,a.stunT-Pt),a.status.thermal>0&&(T-=at.HEAT_DRAIN*Pt),a.status.plasma>0&&Dn(i,r,.012*Pt,e),a.status.resonance>0&&(a.superMeter=Math.max(0,a.superMeter-.07*Pt)),a.status.gravity>0){const U=Math.hypot(a.x,a.y)||1;h+=a.x/U*10,u+=a.y/U*10}if(a.status.mag>0){const U=i.tops[a.statusBy];if(U&&en(U)){const H=U.x-a.x,D=U.y-a.y,V=Math.hypot(H,D)||1;h+=H/V*12,u+=D/V*12}}if(a.superMeter=Math.min(1,a.superMeter+at.SUPER_PASSIVE*o.superGain*Pt),f.super&&a.superMeter>=1&&a.superT<=0){a.superMeter=0,a.superT=Math.max(...o.elements.map(U=>Ue[U].super.dur)),a.pulseT=0,e.push({type:"super",i:r,elements:o.elements});for(const U of o.elements){const H=Ue[U].super;H.start&&To(i,r,U,H.start,e)}}if(a.superT>0){a.superT-=Pt,a.pulseT-=Pt;for(const U of o.elements){const H=Ue[U].super;if(H.pull){const D=H.pull;i.tops.forEach((V,et)=>{if(i.teams[et]===i.teams[r]||!en(V))return;const st=a.x-V.x,gt=a.y-V.y,At=Math.hypot(st,gt);At<D.radius&&At>.5&&(V.vx+=st/At*D.accel*Pt,V.vy+=gt/At*D.accel*Pt)})}H.pulse&&a.pulseT<=0&&To(i,r,U,H.pulse,e),H.end&&a.superT<=0&&To(i,r,U,H.end,e)}a.pulseT<=0&&(a.pulseT=Math.min(...o.elements.map(U=>Ue[U].super.pulse?.every??99)))}if(f.boost&&a.boostCd<=0){const[U,H]=M();a.vx+=U*at.BOOST_IMPULSE,a.vy+=H*at.BOOST_IMPULSE,a.boostCd=at.BOOST_CD,a.boostT=at.BOOST_T,T-=at.BOOST_COST,e.push({type:"boost",i:r})}if(f.strike&&a.strikeCd<=0){a.strikeT=at.STRIKE_T,a.strikeCd=at.STRIKE_CD,T-=at.STRIKE_COST,e.push({type:"strike",i:r});const U=a.counterT>0?vl(i,r):null;if(U){const H=Math.hypot(U.x-a.x,U.y-a.y)||1,D=(U.x-a.x)/H,V=(U.y-a.y)/H;a.vx+=D*at.COUNTER_IMPULSE,a.vy+=V*at.COUNTER_IMPULSE,a.boostT=Math.max(a.boostT,at.BOOST_T),a.counterT=0,e.push({type:"counter",i:r,x:a.x,y:a.y,dx:D,dy:V})}}if(S&&(a.brakeT<=0||f.ability&&a.brakeT<at.BRAKE_T-at.BRAKE_MINHOLD)){const[U,H]=E>.01?[_,R]:a.brakeSpeed>2?[a.brakeDx,a.brakeDy]:M(),D=Math.min(at.BRAKE_MAX,Math.max(at.BRAKE_MIN,a.brakeSpeed*at.BRAKE_GAIN+at.BRAKE_PLUS));a.vx=U*D,a.vy=H*D,a.brakeT=0,a.dashT=at.DASH_T*.7,e.push({type:"brake",i:r,phase:"release",x:a.x,y:a.y,dx:U,dy:H,speed:D})}else if(f.ability&&a.abilityCd<=0){if(o.ability==="brake"){const U=Math.hypot(a.vx,a.vy);a.brakeSpeed=U,a.brakeDx=U>.5?a.vx/U:0,a.brakeDy=U>.5?a.vy/U:0,a.vx*=.1,a.vy*=.1,a.brakeT=at.BRAKE_T,a.abilityCd=at.BRAKE_CD,T-=at.BRAKE_COST,e.push({type:"brake",i:r,phase:"stop",x:a.x,y:a.y,dx:a.brakeDx,dy:a.brakeDy,speed:U})}else if(o.ability==="spring"){const[U,H]=M();a.vx+=U*at.JUMP_HOP,a.vy+=H*at.JUMP_HOP,a.airT=at.JUMP_T,a.abilityCd=at.JUMP_CD,T-=at.JUMP_COST}else if(o.ability==="dash"){const[U,H]=M();a.vx+=U*at.DASH_IMPULSE,a.vy+=H*at.DASH_IMPULSE,a.dashT=at.DASH_T,T-=at.DASH_COST,a.abilityCd=at.DASH_CD}else a.braceT=at.BRACE_T,a.abilityCd=at.BRACE_CD;e.push({type:"ability",i:r,kind:o.ability})}const C=a.brakeT>0,N=Math.exp(C?-14*Pt:-o.drag*(a.braceT>0?2.5:1)*(d?3:1)*Pt),O=C?.15:1;a.vx=(a.vx+h*Pt*O)*N,a.vy=(a.vy+u*Pt*O)*N,a.x+=a.vx*Pt,a.y+=a.vy*Pt,T-=o.spinDecay*Ua(a,"decay")*(a.stage>=2?1.25:1)*(1+p)*Pt,a.burst=Math.max(0,a.burst-at.BURST_DRAIN*Pt);for(let U=0;U<i.pillars.length;U++){const H=i.pillars[U];if(H.hp<=0||a.airT>0)continue;const D=a.x-H.x,V=a.y-H.y,et=Math.hypot(D,V),st=l+H.r;if(et>=st||et<1e-6)continue;const gt=D/et,At=V/et;a.x=H.x+gt*st,a.y=H.y+At*st;const q=-(a.vx*gt+a.vy*At);q>0&&(a.vx+=(1+at.RIM_E)*q*gt,a.vy+=(1+at.RIM_E)*q*At,T-=q*at.RIM_SPIN,q>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),H.hp=ch(H.hp,q),q>1.5&&e.push({type:"rim",x:H.x+gt*H.r,y:H.y+At*H.r,strength:Math.min(1,q/18),i:r}),H.hp<=0&&e.push({type:"break",kind:"pillar",index:U,x:H.x,y:H.y}))}const z=Math.hypot(a.x,a.y),Y=s-l;if(z>Y){const U=a.x/z,H=a.y/z,D=pl(n,Math.atan2(a.y,a.x));if(i.segHp[D]<=0)a.airT<=0&&z>s-l*.35&&(a.leaving=!0);else{const V=a.vx*U+a.vy*H;a.x=U*Y,a.y=H*Y,V>0&&(a.vx-=(1+at.RIM_E)*V*U,a.vy-=(1+at.RIM_E)*V*H,T-=V*at.RIM_SPIN,V>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),i.segHp[D]=ch(i.segHp[D],V),V>1.5&&e.push({type:"rim",x:a.x,y:a.y,strength:Math.min(1,V/18),i:r}),i.segHp[D]<=0&&e.push({type:"break",kind:"wall",index:D,x:U*s,y:H*s}))}}if(n.collapse&&a.airT<=0&&!a.leaving&&Math.hypot(a.x,a.y)>n.collapse.inner*s&&i.floorPhase[Ec(n.collapse,Math.atan2(a.y,a.x))]===2&&(a.leaving=!0,a.sink=Pt,e.push({type:"fall",i:r,x:a.x,y:a.y})),n.hazards&&a.airT<=0&&!a.leaving)for(const U of n.hazards){const H=Sc(U,i.time);let D,V,et,st,gt;if(U.kind==="bar"){const Nt=Math.cos(H.a),Dt=Math.sin(H.a),ee=Math.max(U.r0,Math.min(U.r1,a.x*Nt+a.y*Dt));D=Nt*ee,V=Dt*ee,et=-V*U.omega,st=D*U.omega,gt=U.width+l}else D=H.x,V=H.y,et=H.vx,st=H.vy,gt=U.r+l;const At=a.x-D,q=a.y-V,Q=Math.hypot(At,q);if(Q>=gt||Q<1e-6)continue;const tt=At/Q,K=q/Q;a.x=D+tt*gt,a.y=V+K*gt;const pt=(a.vx-et)*tt+(a.vy-st)*K;if(pt<0){a.vx-=(1+at.HAZ_E)*pt*tt,a.vy-=(1+at.HAZ_E)*pt*K,a.vx+=et*.6,a.vy+=st*.6;const Nt=-pt;T-=Nt*at.HAZ_SPIN,Nt>at.HAZ_ARMOUR_MIN&&Dn(i,r,(Nt-at.HAZ_ARMOUR_MIN)*at.HAZ_ARMOUR,e),a.stunT=Math.max(a.stunT,Nt>12?.35:0),Nt>2&&e.push({type:"hazard",i:r,x:D+tt*(U.kind==="bar"?U.width:U.r),y:V+K*(U.kind==="bar"?U.width:U.r),nx:tt,ny:K,strength:Math.min(1,Nt/20)})}}T=Math.max(0,T),a.spin=T*o.spinDir,a.phase+=a.spin*Pt,T<=0&&(a.out="spinout",e.push({type:"out",i:r,reason:"spinout"}))}for(let r=0;r<i.tops.length;r++)for(let a=r+1;a<i.tops.length;a++)pp(i,r,a,e);for(const r of e)r.type==="out"&&(i.lastOut=r.reason);if(!i.over){const r=new Set;if(i.tops.forEach((a,o)=>{a.out||r.add(i.teams[o])}),r.size<=1&&i.lastOut)i.over={winner:r.size?[...r][0]:-1,reason:i.lastOut};else if(i.time>=Ku){const a=new Map;i.tops.forEach((l,c)=>{l.out||a.set(i.teams[c],(a.get(i.teams[c])??0)+Math.abs(l.spin))});const o=[...a].sort((l,c)=>c[1]-l[1]);i.over={winner:o.length>1&&o[0][1]===o[1][1]?-1:o[0][0],reason:"time"}}}return e}function hh(i,t){return .55+.45*Math.abs(Math.sin((t-i.phase)*i.spec.teeth/2))}function pp(i,t,e,n){const s=i.tops[t],r=i.tops[e];if(!en(s)||!en(r)||s.airT>0||r.airT>0)return;const a=r.x-s.x,o=r.y-s.y,l=Math.hypot(a,o),c=Ye(s)+Ye(r);if(l>=c||l<1e-6)return;const h=a/l,u=o/l,d=ml(s),f=ml(r),g=c-l;s.x-=h*g*(f/(d+f)),s.y-=u*g*(f/(d+f)),r.x+=h*g*(d/(d+f)),r.y+=u*g*(d/(d+f));const x=t*i.tops.length+e;if(i.pairCd[x]>0)return;i.pairCd[x]=at.HIT_CD;const p=i.teams[t]===i.teams[e],m=p?0:1,b=-u,y=h,_=(r.vx-s.vx)*h+(r.vy-s.vy)*u,R=(s.vx-r.vx)*b+(s.vy-r.vy)*y+s.spin*Ye(s)+r.spin*Ye(r),E=Math.atan2(u,h),T=s.strikeT>0,v=r.strikeT>0,M=T&&v,S=T&&!M&&!p&&s.combo>=3,C=v&&!M&&!p&&r.combo>=3,N=(tt,K,pt)=>(tt.dashT>0?1.5:tt.boostT>0?1.15:1)*(K?M?1.3:pt?sp:at.STRIKE_ATK:1)*gl(tt,"atk")*(tt.stage>=1?.9:1),O=hh(s,E)*s.spec.attack*N(s,T,S)*Ua(s,"attack")*oh(s),z=hh(r,E+Math.PI)*r.spec.attack*N(r,v,C)*Ua(r,"attack")*oh(r),Y=d*f/(d+f),U=_<0?-1.6*_*Y*(.6+.2*(O+z)):0,H=at.SMASH*Math.abs(R)*Y*(O+z),D=U+H,V=(tt,K)=>(tt.braceT>0?.3:tt.brakeT>0?at.BRAKE_GUARD:1)*(K&&!M?at.STRIKE_GUARD:1)*Ua(tt,"guard")*gl(tt,"guard"),et=tt=>(tt.status.gale>0?1.4:1)*(tt.stage>=1?1.15:1),st=V(s,T)*(1+at.WEAK_KB*(1-cn(s)))*(p?.5:1)*et(s),gt=V(r,v)*(1+at.WEAK_KB*(1-cn(r)))*(p?.5:1)*et(r),At=Math.sign(R)*at.TANG;s.vx+=(-h-b*At)*D*st/d,s.vy+=(-u-y*At)*D*st/d,r.vx+=(h+b*At)*D*gt/f,r.vy+=(u+y*At)*D*gt/f;let q=Math.abs(s.spin),Q=Math.abs(r.spin);if(q-=at.SPINLOSS*D*z*V(s,T)*m*(s.status.volt>0?1.25:1),Q-=at.SPINLOSS*D*O*V(r,v)*m*(r.status.volt>0?1.25:1),!p&&s.spec.spinDir!==r.spec.spinDir){const tt=at.EQ*(q-Q);q-=tt,Q+=tt;const K=Math.min(Q,s.spec.hook*1.5),pt=Math.min(q,r.spec.hook*1.5);q+=K-pt,Q+=pt-K}if(s.spin=Math.max(0,Math.min(s.spec.maxSpin,q))*s.spec.spinDir,r.spin=Math.max(0,Math.min(r.spec.maxSpin,Q))*r.spec.spinDir,s.burst+=m*at.BURST*D*z*r.spec.burstDmg*(s.braceT>0?.5:1)/s.spec.burstRes,r.burst+=m*at.BURST*D*O*s.spec.burstDmg*(r.braceT>0?.5:1)/r.spec.burstRes,!p){const tt=D-at.ARMOUR_MIN;tt>0&&(Dn(i,t,tt*at.ARMOUR*z*V(s,T)/s.spec.burstRes,n),Dn(i,e,tt*at.ARMOUR*O*V(r,v)/r.spec.burstRes,n));const K=Math.min(1,D/30)*6;if(s.superMeter=Math.min(1,s.superMeter+(at.SUPER_HIT*(1+K*O/(O+z))+(T?at.SUPER_STRIKE:0))*s.spec.superGain),r.superMeter=Math.min(1,r.superMeter+(at.SUPER_HIT*(1+K*z/(O+z))+(v?at.SUPER_STRIKE:0))*r.spec.superGain),T||s.superT>0)for(const pt of s.spec.elements)xl(i,e,pt,t,n);if(v||r.superT>0)for(const pt of r.spec.elements)xl(i,t,pt,e,n)}for(const[tt,K,pt,Nt,Dt]of[[s,T,S,t,e],[r,v,C,e,t]])K&&(tt.strikeT=0,tt.strikeCd=at.STRIKE_CD_HIT,!p&&(tt.comboT=ap,pt?(tt.combo=0,n.push({type:"finisher",i:Nt,target:Dt,x:i.tops[Dt].x,y:i.tops[Dt].y}),Dn(i,Dt,rp,n)):tt.combo=Math.min(3,tt.combo+1)));n.push({type:"hit",x:s.x+h*Ye(s),y:s.y+u*Ye(s),nx:h,ny:u,strength:Math.min(1,D/30),a:t,b:e,power:M?2:T?t:v?e:-1});for(const[tt,K]of[[t,s],[e,r]])!K.out&&K.burst>=1&&(K.burst=0,K.stunT=Math.max(K.stunT,at.STAGGER_T),n.push({type:"react",i:tt,by:tt===t?e:t,name:"STAGGER",color:16777215,x:K.x,y:K.y,team:!1}),Dn(i,tt,at.STAGGER_ARMOUR,n))}function uh(i,t){const e=i()*Math.PI*2,s=(t?Rr(t.stadium):6.5)*(.3+i()*.5);return{x:Math.cos(e)*s,y:Math.sin(e)*s,power:.7+i()*.3,tilt:(i()*2-1)*.8}}function dh(i,t,e){const n=Math.floor(i.time*4)*7919+t*104729;return(Math.imul(n,2654435761)>>>0)%100<e}function mp(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!en(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function Qu(i,t){const e=i.tops[t],n={sx:0,sy:0,ability:!1,boost:!1,strike:!1};if(!en(e))return n;const s=e.spec.ai??{strike:60,boost:55},r=e.spec.boss?Ui[e.spec.boss.kind].persona[Math.min(2,e.stage)]:e.spec.ai?.persona,a=i.stadium.radius,o=Math.hypot(e.x,e.y),l=o>.01?(e.vx*e.x+e.vy*e.y)/o:0;let c=0,h=0;const u=Math.atan2(e.y+e.vy*.35,e.x+e.vx*.35),d=o>a*.55&&l>4&&i.segHp[pl(i.stadium,u)]<=0,f=mp(i,t);let g=!1;const x=i.stadium.collapse;if(x&&o>a*x.inner-2.5){const E=Math.atan2(e.y,e.x),T=Math.PI*2/x.sectors;for(const v of[-.8,0,.8])i.floorPhase[Ec(x,E+v*T)]>=1&&(g=!0)}let p=null;for(const E of i.stadium.hazards??[]){const T=Sc(E,i.time+.25);let v=T.x,M=T.y,S=0;if(E.kind==="bar"){const N=Math.cos(T.a),O=Math.sin(T.a),z=Math.max(E.r0,Math.min(E.r1,e.x*N+e.y*O));v=N*z,M=O*z,S=E.width}else S=E.r;const C=Math.hypot(e.x-v,e.y-M);C<S+Ye(e)+2.2&&e.airT<=0&&(p=[(e.x-v)/(C||1),(e.y-M)/(C||1)])}let m=null,b=!1;const y=35+s.strike*.6,_=E=>(Math.imul(E*7919+t*104729,2654435761)>>>0)%100<y;i.tops.forEach((E,T)=>{if(!E.spec.boss||i.teams[T]===i.teams[t]||!E.bossMove||!en(E)||!_(E.bossCount+T*13))return;const v=e.x-E.x,M=e.y-E.y,S=Math.hypot(v,M)||1;if(E.bossMove==="slam"||E.bossMove==="vortex")E.bossStage===0&&S<we.SLAM_R+(E.bossMove==="vortex"?4:2.2)&&(m=[v/S,M/S],b=E.bossMove==="vortex"||E.bossT<.5);else if(E.bossMove==="charge"){const C=v*E.bossDx+M*E.bossDy,N=-v*E.bossDy+M*E.bossDx;if(C>-2.5&&Math.abs(N)<we.CHARGE_LANE+Ye(e)+1.2){const O=N>=0?1:-1;m=[-E.bossDy*O,E.bossDx*O],b=E.bossStage===1||E.bossT<.45}}});for(const E of i.zones){if(i.teams[E.i]===i.teams[t])continue;const T=e.x-E.x,v=e.y-E.y,M=Math.hypot(T,v)||1;M<E.r+Ye(e)+1&&_(Math.round(E.x*13+E.y*7))&&(m=[T/M,v/M],b=E.t<.6)}if(m)c=m[0],h=m[1],b&&(n.boost=!0),e.abilityCd<=0&&e.spec.ability==="spring"&&b&&e.airT<=0&&(n.ability=!0);else if(p)c=p[0],h=p[1],e.abilityCd<=0&&e.spec.ability==="spring"&&(n.ability=!0);else if(g||d||o>a*(r==="rider"?.88:.8))c=-e.x,h=-e.y,d&&o>a*.7&&(n.boost=!0);else if(f){const E=f.x+f.vx*.15-e.x,T=f.y+f.vy*.15-e.y,v=Math.hypot(E,T);let M=e.spec.role==="attack"||cn(e)<cn(f)-.04||v>a*.9;r==="rusher"?M=!0:r==="turtle"?M=v<4.5||i.time>35&&cn(e)<cn(f)-.02:r==="ambusher"?M=v<6.5:r==="rider"&&(M=v<5);const S=-((f.vx-e.vx)*E+(f.vy-e.vy)*T)/Math.max(v,.01),C=v-Ye(e)-Ye(f);if(M)c=E,h=T,v>3&&v<9&&dh(i,t,r==="rusher"?Math.min(100,s.boost+25):s.boost)&&(n.boost=!0),r==="ambusher"&&v>2.5&&v<6.5&&(n.boost=!0),e.spec.ability==="dash"&&e.abilityCd<=0&&v<6&&v>2.2&&(n.ability=!0);else if(r==="rider"){const N=o>.05?-e.y/o:1,O=o>.05?e.x/o:0,z=(a*.74-o)/a;c=N*e.spec.spinDir+e.x/Math.max(o,.05)*z*6,h=O*e.spec.spinDir+e.y/Math.max(o,.05)*z*6}else o>2&&(c=-e.x,h=-e.y);S>3&&C<S*.14&&dh(i,t,r==="ambusher"?Math.min(100,s.strike+25):s.strike)&&(n.strike=!0),e.spec.ability==="brace"&&e.abilityCd<=0&&v<(r==="turtle"?4.5:3.2)&&S>(r==="turtle"?6:9)&&(n.ability=!0),e.spec.ability==="brake"&&(e.brakeT>0?(v<4.5||e.brakeT<.15)&&(n.ability=!0):e.abilityCd<=0&&v<8&&v>3.5&&S>8&&(n.ability=!0)),e.spec.ability==="spring"&&e.abilityCd<=0&&e.airT<=0&&v<4.5&&v>1.5&&(S>10||M&&v<3.2)&&(n.ability=!0),e.counterT>0&&v<14&&e.strikeCd<=0&&(n.strike=!0),e.superMeter>=1&&v<7.5&&(n.super=!0)}else o>2&&(c=-e.x,h=-e.y);const R=Math.hypot(c,h);return R>.01&&(n.sx=c/R,n.sy=h/R),n}const gp=i=>i-Math.floor(i),qn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ei=[{f:(i,t)=>Math.pow(1-i,1.2+t*1.4),bite:.95,nouns:["Hook","Gaff","Grapnel","Sickle","Scythe","Barb"],shape:"swept hooks",folds:[2,3,3,4,5]},{f:i=>1-i,bite:.8,nouns:["Ripper","Rasp","Shredder","Serrate","Buzzcut","Sawline"],shape:"saw teeth",folds:[5,6,7,8,9,10]},{f:i=>i<.82?1-Math.pow(i/.82,4):0,bite:.45,hooks:!0,nouns:["Vane","Foil","Glider","Sail","Aileron","Rotor"],shape:"broad vanes",folds:[2,2,3,3,4]},{f:(i,t)=>qn((.5+t*.1-Math.abs(i-.5))*9),bite:.7,nouns:["Maul","Sledge","Ram","Piston","Pounder","Drophammer"],shape:"hammer lugs",folds:[2,3,4,4,5,6]},{f:(i,t)=>Math.pow(1-Math.abs(2*i-1),1.5+t*2.5),bite:1,nouns:["Pike","Lance","Spire","Needle","Caltrop","Prong"],shape:"spikes",folds:[3,4,5,6,8]},{f:i=>Math.sqrt(Math.abs(Math.sin(Math.PI*i)))*(1-.55*i),bite:.6,hooks:!0,nouns:["Crescent","Arc","Eclipse","Halfmoon","Curve","Sweep"],shape:"crescent blades",folds:[2,3,3,4,5]},{f:(i,t)=>1-Math.pow(Math.abs(Math.cos(Math.PI*i)),6+t*10),bite:.1,nouns:["Bulwark","Rampart","Buckler","Barricade","Citadel","Plate"],shape:"armour segments",folds:[4,5,6,8,10,12]},{f:i=>1-Math.abs(2*i-1),bite:.75,nouns:["Star","Nova","Compass","Flare","Burst","Zenith"],shape:"star points",folds:[3,4,5,6,7,8]},{f:i=>i<.55?.5+.5*Math.pow(i/.55,2):i<.66?1:0,bite:.9,nouns:["Cleaver","Hatchet","Halberd","Splitter","Chopper","Edge"],shape:"axe heads",folds:[2,3,3,4,5]},{f:(i,t)=>qn((.28+t*.12-Math.abs(i-.5))*14),bite:.5,nouns:["Cog","Sprocket","Gear","Ratchet","Pinion","Crankwheel"],shape:"gear teeth",folds:[6,8,9,10,12,14]},{f:i=>.5+.5*Math.cos(2*Math.PI*(i-.5)),bite:.25,nouns:["Tide","Ripple","Swell","Undertow","Breaker","Current"],shape:"rolling lobes",folds:[3,4,5,6,7]},{f:(i,t)=>Math.max(Math.pow(1-Math.abs(2*qn(i/.6)-1),2+t),.7*Math.pow(1-Math.abs(2*qn((i-.55)/.45)-1),2+t)),bite:.85,nouns:["Bident","Fork","Tine","Caliper","Splitpoint","Twinspike"],shape:"forked points",folds:[2,3,4,5,6]}],xp=["Iron","Steel","Cobalt","Chrome","Titanium","Carbon","Tungsten","Nickel","Onyx","Obsidian","Granite","Basalt","Quartz","Flint","Slate","Ember","Cinder","Ash","Frost","Glacier","Storm","Thunder","Gale","Vortex","Rift","Void","Apex","Vector","Vertex","Prime","Omega","Delta","Sigma","Hyper","Turbo","Nitro","Mach","Sonic","Rapid","Solar","Lunar","Polar","Orbit","Comet","Meteor","Pulsar","Quasar","Neutron","Photon","Ion","Flux","Torque","Crank","Rivet","Forge","Crucible","Alloy","Magnet","Static","Tremor","Bronze","Copper","Mercury","Argon","Xenon","Krypton","Radial","Axial","Kinetic","Inertia"];function _r(i,t){const e=Math.pow(gp(t*i.fold/(Math.PI*2)+i.rot),i.sweep);return 1-i.depth*(1-qn(Ei[i.family].f(e,i.sharp)))}function vp(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Mp=320;function _p(i,t){const e=vp(24350+i*7919),n=E=>E[Math.floor(e()*E.length)],s=(E,T)=>E+e()*(T-E),r=i%Ei.length,a=Ei[r],o={family:r,fold:n(a.folds),depth:s(.12,.46)*(.55+.45*a.bite+.2*e()),sweep:n([.55,.7,1,1,1.4,1.9]),sharp:e(),rot:0};o.depth=qn(o.depth,.06,.48);const l=e()<.45,c=l?r:Math.floor(e()*Ei.length),h={family:c,fold:l?o.fold:n([o.fold,o.fold*2,Math.max(2,Math.round(o.fold/2)),...Ei[c].folds]),depth:qn(s(.1,.4),.06,.42),sweep:l?o.sweep:n([.6,1,1,1.6]),sharp:e(),rot:l?s(0,.25):e()},u=[o,h];if(e()<.6){const E=Math.floor(e()*Ei.length);u.push({family:E,fold:n(Ei[E].folds),depth:s(.12,.38),sweep:n([.7,1,1.5]),sharp:e(),rot:e()})}const d={radius:Math.round(s(.93,1.07)*100)/100,layers:u,windows:Math.floor(e()*4),lights:Math.floor(e()*4),crownMetal:e()<.5,swap:e()<.3};let f=0;for(let E=0;E<90;E++)f+=_r(o,E/90*Math.PI*2);f/=90;const g=qn(.55*a.bite+.45*(o.depth/.48)),x=qn((o.fold-2)/8),p=a.hooks&&o.fold<=3?.6+.4*(1-g):0,m=E=>Math.round(E*100)/100,b={attack:m(.88+.44*g-(p?.08:0)),burstDmg:m(.8+.3*g+.55*x*a.bite),burstRes:m(.46*(1-g)),mass:m(.3+.32*qn((f-.6)/.38)*(1-.3*g)),radius:d.radius,teeth:o.fold,hook:m(p),spinDecay:m(-.12*(1-g)*(1-x*.5))};let y="";for(let E=0;E<50&&(!y||t.has(y));E++)y=`${n(xp)} ${n(a.nouns)}`;t.has(y)&&(y=`${y} ${i}`),t.add(y);const _=g>.7?"Hits hard, breaks easily.":g>.45?"A balance of bite and staying power.":p?"Spins long and steals spin from opposite-spin tops.":"Heavy and hard to break. Outlasts.",R=["","","Twin","Three","Four","Five","Six","Seven","Eight","Nine","Ten"][o.fold]??String(o.fold);return{id:`g${i}`,name:y,blurb:`${R} ${a.shape}${u.length>2?" under a "+Ei[u[2].family].shape.replace(/s$/,"")+" crown":""}. ${_}`,gen:d,mods:b}}const yp=(()=>{const i=new Set,t=[];for(let e=0;e<Mp;e++)t.push(_p(e,i));return t})(),di=["blade","disc","tip","core","launcher","reactor"],td={blade:"BLADE",disc:"DISC",tip:"TIP",core:"CORE",launcher:"LAUNCH",reactor:"ELEMENT"},bp={attack:0,burstDmg:0,burstRes:0,mass:.2,radius:0,teeth:0,hook:0,spinDecay:.8,drive:0,drag:0,steer:12,chargeTime:0,maxSpin:0,superGain:1,superPower:1},fi=[{id:"talon",slot:"blade",name:"Talon",blurb:"Three hooked claws. Huge hits, huge recoil.",mods:{attack:1.3,burstDmg:1.2,teeth:3,radius:1,mass:.35}},{id:"bastion",slot:"blade",name:"Bastion",blurb:"Round armoured ring. Shrugs off blows.",mods:{attack:1.05,burstDmg:1,teeth:6,radius:1.05,mass:.6,burstRes:.45,spinDecay:-.05}},{id:"ripsaw",slot:"blade",name:"Ripsaw",blurb:"Eight teeth that tear cores open. Best at bursting.",mods:{attack:1.14,burstDmg:1.65,teeth:8,radius:1,mass:.38}},{id:"halo",slot:"blade",name:"Halo",blurb:"Twin wings. Spins longest, steals spin from opposite-spin tops.",mods:{attack:.85,burstDmg:.8,teeth:2,radius:1.02,mass:.45,hook:1,spinDecay:-.12,burstRes:.15}},{id:"shifter",slot:"blade",name:"Shifter",blurb:"Three hinged wings. Tucked in to strike at high spin; below half spin they swing out into a wide guard.",mods:{attack:1.25,burstDmg:1.15,teeth:3,radius:.9,mass:.42},shift:{radius:.22,attack:-.4,guard:-.35,decay:-.3}},{id:"breakaway",slot:"blade",name:"Breakaway",blurb:"Four armour plates that crack off as it takes damage. Lighter and quicker with every one lost, but it hits softer.",mods:{attack:1.22,burstDmg:1.1,teeth:4,radius:1,mass:.5,burstRes:.42},plates:{count:4,mass:.07,attack:.05,speed:.07}},{id:"flail",slot:"blade",name:"Flail",blurb:"Three weights on hinged arms. They swing out with spin: wide reach and heavy blows when fast, short and weak when slow.",mods:{attack:1.2,burstDmg:1.1,teeth:3,radius:.8,mass:.4},flail:{radius:.45,attack:.9}},{id:"pivot",slot:"disc",name:"Pivot",blurb:"Weight at the centre. Quick to steer.",mods:{mass:.5,steer:3}},{id:"flywheel",slot:"disc",name:"Flywheel",blurb:"Weight at the rim. Long spin, slow to turn.",mods:{mass:.6,spinDecay:-.15,steer:-3}},{id:"anvil",slot:"disc",name:"Anvil",blurb:"A solid slab. Very hard to move.",mods:{mass:.85,steer:-4,spinDecay:.05}},{id:"feather",slot:"disc",name:"Feather",blurb:"Vented alloy. Darts around, gets thrown around.",mods:{mass:.38,steer:5,spinDecay:.04}},{id:"needle",slot:"tip",name:"Needle",blurb:"Sharp point. Holds the centre and saves spin.",mods:{drive:1.2,drag:1.5,spinDecay:-.1}},{id:"flatline",slot:"tip",name:"Flatline",blurb:"Flat base. Races around the bowl.",mods:{drive:4.95,drag:1.05,spinDecay:.02}},{id:"gripper",slot:"tip",name:"Gripper",blurb:"Rubber. Turns on the spot, burns spin fast.",mods:{drive:3.2,drag:1.6,steer:5,spinDecay:.2}},{id:"orbit",slot:"tip",name:"Orbit",blurb:"Ball bearing. Steady, hard to burst.",mods:{drive:2.2,drag:1.15,burstRes:.1}},{id:"surge",slot:"core",name:"Surge",blurb:"DASH: a sudden lunge that hits harder.",mods:{burstRes:1.15},ability:"dash"},{id:"viper",slot:"core",name:"Viper",blurb:"DASH, lighter lock. Nimble but bursts sooner.",mods:{burstRes:1.12,steer:4,spinDecay:-.06},ability:"dash"},{id:"rampart",slot:"core",name:"Rampart",blurb:"BRACE: dig in and take a fraction of the hit.",mods:{burstRes:1.12},ability:"brace"},{id:"lockjaw",slot:"core",name:"Lockjaw",blurb:"BRACE, four clamps. Nearly impossible to burst.",mods:{burstRes:1.2,mass:.05,steer:-2},ability:"brace"},{id:"anchor",slot:"core",name:"Anchor",blurb:"BRAKE: dig in and stop dead, then launch faster than you arrived.",mods:{burstRes:1.2,mass:.05},ability:"brake"},{id:"coil",slot:"core",name:"Coil",blurb:"SPRING JUMP: hop over tops and gaps, land with a shockwave.",mods:{burstRes:1.3,steer:2},ability:"spring"},{id:"ripcord",slot:"launcher",name:"Ripcord",blurb:"Balanced power and timing.",mods:{chargeTime:.9,maxSpin:100}},{id:"string",slot:"launcher",name:"String",blurb:"Most spin, very tight timing.",mods:{chargeTime:.55,maxSpin:106}},{id:"winder",slot:"launcher",name:"Winder",blurb:"Least spin, easy timing.",mods:{chargeTime:1.4,maxSpin:96}},{id:"geared",slot:"launcher",name:"Geared",blurb:"A little extra spin, slower meter.",mods:{chargeTime:1.1,maxSpin:102}}];fi.push(...Ga.map(i=>({id:i.id,slot:"reactor",name:i.name,blurb:i.blurb,mods:{}})));fi.push(...yp.map(i=>({id:i.id,slot:"blade",name:i.name,blurb:i.blurb,mods:i.mods,gen:i.gen})));const In=i=>fi.filter(t=>t.slot===i),Sp=i=>fi.filter(t=>t.slot===i&&!t.gen),Fn=i=>fi.find(t=>t.id===i)??fi[0],ed=[16734751,15213357,16761370,3066970,1492928,2784255,9063935,15921909,2303535],nd=[16757575,16730955,16773226,7077770,7332863,5934079,12946431,16777215],id=["steel","chrome","gunmetal","gold","copper"],Us={blade:"talon",disc:"pivot",tip:"flatline",core:"surge",launcher:"ripcord",reactor:"thermal",spinDir:1,paint:16734751,glow:16757575,metal:"steel"},sd=i=>`${Fn(i.blade).name} ${Fn(i.tip).name}`.toUpperCase();function wc(i,t=sd(i)){const e={...bp};let n="dash",s,r,a;for(const o of di){const l=Fn(i[o]);for(const[c,h]of Object.entries(l.mods))e[c]+=h;l.ability&&(n=l.ability),l.shift&&(s=l.shift),l.plates&&(r=l.plates),l.flail&&(a=l.flail)}return{name:t,role:e.attack>=1.05?"attack":"stamina",color:i.paint,accent:i.glow,spinDir:i.spinDir,radius:e.radius,mass:e.mass,maxSpin:e.maxSpin,attack:e.attack,burstDmg:e.burstDmg,burstRes:e.burstRes,spinDecay:e.spinDecay,drive:e.drive,drag:e.drag,steer:e.steer,teeth:e.teeth,spiky:e.attack>=1.05,hook:e.hook,shift:s,plates:r,flail:a,elements:io(i.reactor).elements,superGain:e.superGain,superPower:e.superPower,ability:n,chargeTime:e.chargeTime,look:{blade:i.blade,disc:i.disc,tip:i.tip,core:i.core,paint:i.paint,glow:i.glow,metal:i.metal}}}function Ep(i,t){const e=r=>r[Math.floor(i()*r.length)],n=ed.filter(r=>r!==t),s=i()<.2;return{blade:e(In("blade")).id,disc:e(In("disc")).id,tip:e(In("tip")).id,core:e(In("core")).id,launcher:e(In("launcher")).id,reactor:e(Ga.filter(r=>!$u(r.id)).filter(r=>r.elements.length>1===s)).id,spinDir:i()<.5?1:-1,paint:e(n),glow:e(nd),metal:e(id)}}const Va=["attack","defence","stamina","speed","weight","burst"],wp={attack:"ATTACK",defence:"DEFENCE",stamina:"STAMINA",speed:"SPEED",weight:"WEIGHT",burst:"BURST RESIST"};function rd(i){return{attack:i.attack*.6+i.burstDmg*.4,defence:i.mass*.55+i.burstRes*.45,stamina:i.maxSpin/i.spinDecay,speed:i.drive+i.steer*.3,weight:i.mass,burst:i.burstRes}}let Ro=null;function Tp(){if(Ro)return Ro;const i={},t={};for(const e of Va)i[e]=1/0,t[e]=-1/0;for(const e of Sp("blade"))for(const n of In("disc"))for(const s of In("tip"))for(const r of In("core"))for(const a of In("launcher")){const o=rd(wc({...Us,blade:e.id,disc:n.id,tip:s.id,core:r.id,launcher:a.id}));for(const l of Va)i[l]=Math.min(i[l],o[l]),t[l]=Math.max(t[l],o[l])}return Ro={min:i,max:t}}function Co(i){const t=rd(i),{min:e,max:n}=Tp(),s={};for(const r of Va)s[r]=Math.max(0,Math.min(1.25,(t[r]-e[r])/(n[r]-e[r]||1)));return s}function Ap(i){const t=[["ATTACK",i.attack],["DEFENCE",i.defence],["STAMINA",i.stamina]];return t.sort((e,n)=>n[1]-e[1]),t[0][1]-t[1][1]>=.12?t[0][0]:"BALANCED"}const Ci=[{name:"Common",color:10134453,rolls:0,weight:600},{name:"Uncommon",color:4972650,rolls:1,weight:270},{name:"Rare",color:4889599,rolls:2,weight:100},{name:"Epic",color:12084991,rolls:3,weight:26},{name:"Legendary",color:16751146,rolls:4,weight:4}],ad=[{key:"attack",label:"Attack",prefix:"Honed",min:3,max:8,slots:["blade","core"]},{key:"burstDmg",label:"Burst damage",prefix:"Jagged",min:4,max:10,slots:["blade"]},{key:"burstRes",label:"Burst resistance",prefix:"Bolted",min:4,max:10,slots:["core","disc","blade"]},{key:"mass",label:"Weight",prefix:"Dense",min:3,max:7,slots:["disc"]},{key:"steer",label:"Handling",prefix:"Nimble",min:4,max:9,slots:["tip","disc"]},{key:"drive",label:"Speed",prefix:"Swift",min:4,max:9,slots:["tip"]},{key:"spinDecay",label:"Spin time",prefix:"Balanced",min:3,max:8,slots:["tip","disc","blade","launcher"]},{key:"maxSpin",label:"Launch spin",prefix:"Wound",min:2,max:6,slots:["launcher","core"]},{key:"superGain",label:"Overdrive gain",prefix:"Primed",min:5,max:12,slots:["reactor","core"]},{key:"superPower",label:"Super power",prefix:"Overloaded",min:5,max:12,slots:["reactor"]}],so=i=>ad.find(t=>t.key===i),Cr=20;function od(i,t,e={}){const n=In(e.slot??di[Math.floor(i()*di.length)]);let s=n[Math.floor(i()*n.length)];const r=Ci.map((c,h)=>h<(e.minRarity??0)?0:c.weight*Math.pow(1+t*.07,h));let a=i()*r.reduce((c,h)=>c+h,0),o=Ci.length-1;for(let c=0;c<r.length;c++)if(a-=r[c],a<0){o=c;break}if(s.slot==="reactor"&&o<rh(s.id)){const c=In("reactor").filter(h=>rh(h.id)===0);s=c[Math.floor(i()*c.length)]}const l={uid:e.uid??"",part:s.id,rarity:o,level:t,affixes:[]};return cd(l,i),l}const Ml=i=>.7+.05*i,Rp=(i,t)=>Ml(i)*(1+.15*t),ld=(i,t,e,n)=>Math.round((i.min+t()*(i.max-i.min))*Rp(e,n)*10)/10;function cd(i,t){const e=Fn(i.part).slot,n=ad.filter(s=>s.slots.includes(e)&&!i.affixes.some(r=>r.key===s.key));for(let s=Math.min(Ci[i.rarity].rolls,i.affixes.length+n.length)-i.affixes.length;s>0;s--){const r=n.splice(Math.floor(t()*n.length),1)[0];i.affixes.push({key:r.key,pct:ld(r,t,i.level,i.rarity)})}i.affixes.sort((s,r)=>r.pct-s.pct)}function hd(i){const t=Fn(i.part).name;return i.affixes.length?`${so(i.affixes[0].key).prefix} ${t}`:t}const ud=i=>`+${i.pct}% ${so(i.key).label}`,Ri=i=>Math.round(10+i.rarity*12+i.level*2+i.affixes.reduce((t,e)=>t+e.pct,0)),_l=i=>2+i.rarity*i.rarity*4+i.level,dd=i=>i.tier+5,fd=i=>Math.round((4+i.level*2)*(1+i.rarity*.75)),yl=i=>5+i.level+i.rarity*6;function Cp(i,t){const e=i.items.find(r=>r.uid===t);if(!e||e.level>=dd(i))return 0;const n=fd(e);if(i.scrap<n)return 0;i.scrap-=n;const s=Ml(e.level+1)/Ml(e.level);e.level++;for(const r of e.affixes)r.pct=Math.round(r.pct*s*10)/10;return n}function Pp(i,t,e,n){const s=i.items.find(o=>o.uid===t);if(!s||!s.affixes[e])return 0;const r=yl(s);if(i.scrap<r)return 0;i.scrap-=r;const a=s.affixes[e];return a.pct=ld(so(a.key),n,s.level,s.rarity),s.affixes.sort((o,l)=>l.pct-o.pct),r}function Lp(i,t){const e=new Set([...i.affixes.map(r=>r.key),...t?.affixes.map(r=>r.key)??[]]),n=(r,a)=>r?.affixes.find(o=>o.key===a)?.pct??0,s=[...e].map(r=>({key:r,label:so(r).label,now:n(t,r),item:n(i,r),diff:Math.round((n(i,r)-n(t,r))*10)/10}));return s.sort((r,a)=>a.item-r.item),{rows:s,power:Ri(i)-(t?Ri(t):0)}}function Ip(i,t,e,n){const s=a=>i.items.indexOf(a),r=(a,o)=>e==="newest"?s(o)-s(a):e==="rarity"&&o.rarity-a.rarity||Ri(o)-Ri(a);return[...t].sort((a,o)=>+(o.uid===n)-+(a.uid===n)||r(a,o))}function pd(i,t){const e=Object.values(i.equipped);return i.items.filter(n=>n.rarity<=t&&!e.includes(n.uid))}function Dp(i,t){let e=0;for(const n of pd(i,t))e+=vd(i,n.uid);return e}const Up=10;function Np(i){let t=i|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function md(i,t){const e={...i};for(const n of t)for(const s of n.affixes)s.key==="spinDecay"?e.spinDecay/=1+s.pct/100:e[s.key]*=1+s.pct/100;return e}const Op=["talon","bastion","pivot","feather","flatline","needle","surge","rampart","ripcord","winder","thermal","cryo"];function Fp(){const i=Op.map((e,n)=>({uid:"s"+n,part:e,rarity:0,level:1,affixes:[]})),t={};for(const e of di)t[e]=i.find(n=>n.part===Us[e]).uid;return{v:3,items:i,equipped:t,paint:Us.paint,glow:Us.glow,metal:Us.metal,spinDir:1,scrap:0,tier:1,wins:0,nextUid:1,pity:0,bosses:[]}}function fh(i){const t=Fp(),e=i?.v;if(!i||typeof i!="object"||e!==1&&e!==2&&e!==3||!Array.isArray(i.items))return t;const n={...t,...i,v:3};n.bosses=Array.isArray(n.bosses)?[...new Set(n.bosses.filter(s=>Number.isInteger(s)&&s>=5&&s<=Cr&&s%5===0))]:[],n.pity=Math.max(0,Math.floor(n.pity)||0),n.items=n.items.filter(s=>s&&fi.some(r=>r.id===s.part)&&Array.isArray(s.affixes));for(const s of di)if(!n.items.find(a=>a.uid===n.equipped?.[s]&&Fn(a.part).slot===s)){let a=n.items.find(o=>Fn(o.part).slot===s);a||(a={uid:"fix"+s,part:Us[s],rarity:0,level:1,affixes:[]},n.items.push(a)),n.equipped={...n.equipped,[s]:a.uid}}return n.tier=Math.max(1,Math.min(Cr,Math.floor(n.tier)||1)),n.scrap=Math.max(0,Math.floor(n.scrap)||0),n.spinDir=n.spinDir===-1?-1:1,n}const gd=(i,t)=>i.items.find(e=>e.uid===t),xd=i=>di.map(t=>gd(i,i.equipped[t]));function bl(i){const t={spinDir:i.spinDir,paint:i.paint,glow:i.glow,metal:i.metal};for(const e of di)t[e]=gd(i,i.equipped[e]).part;return t}function yr(i,t){return md(wc(bl(i),t),xd(i))}const kp=i=>xd(i).reduce((t,e)=>t+Ri(e),0);function Bp(i,t){return i.pity>=Up&&t.rarity<2&&(t.rarity=2,cd(t,Np(i.nextUid*7919+i.wins))),i.pity=t.rarity>=2?0:i.pity+1,t.uid="i"+i.nextUid++,i.items.push(t),t}function vd(i,t){if(Object.values(i.equipped).includes(t))return 0;const e=i.items.findIndex(s=>s.uid===t);if(e<0)return 0;const n=_l(i.items[e]);return i.items.splice(e,1),i.scrap+=n,n}function zp(i,t,e,n,s,r=!1){const a=e?1+(i()<.55?1:0)+(s>=3?1:0)+(n?1:0):i()<.35?1:0;return Array.from({length:a},(o,l)=>od(i,t,{minRarity:n&&e&&l===0?r&&t>=Cr?4:2:0}))}const ph=["RUSTWIND","IRONVOLT","COGBREAKER","SLAGHAMMER","GRINDSTONE","HEXBOLT","TORQUE","CRANKSHAFT","GEARLOCK","RIVETER","DRILLBIT","FLINTLOCK","PISTON","CAMSHAFT","SPROCKET","BALLAST"],mh=["rusher","turtle","rider","ambusher"],Hp={rusher:"RUSHER",turtle:"TURTLE",rider:"WALL-RIDER",ambusher:"AMBUSHER"},Gp={rusher:["RAMJET","BLITZ","THRUSTER","CANNONBALL","WRECKER","BATTERAM","OVERDRIVE","FLASHPOINT"],turtle:["BULWARK","GRANITE","VAULT","BUNKER","ANCHORAGE","KEEPSTONE","BARRICADE","DEADBOLT"],rider:["RIMRUNNER","LOOPLINE","ORBITER","CIRCUIT","TRACKLAYER","RAILGUN","MERRYGO","SLIPSTREAM"],ambusher:["TRIPWIRE","SNAPSPRING","DEADFALL","MOUSETRAP","HAIRTRIGGER","LANDMINE","POPGUN","JACKBOX"]},Vp={rusher:{blade:["talon","ripsaw","shifter"],tip:["flatline","gripper"],core:["surge","viper","anchor"]},turtle:{blade:["bastion","halo"],disc:["anvil","flywheel"],core:["rampart","lockjaw"]},rider:{tip:["flatline","orbit"],disc:["pivot","feather"],core:["surge","coil","viper"]},ambusher:{disc:["feather","pivot"],tip:["needle","gripper"],core:["anchor","coil","surge"]}},Md=i=>i%5===0,Wp=i=>Ui[qu(i)].name,Xp=i=>({strike:Math.min(92,28+i*4),boost:Math.min(85,34+i*3)});function _d(i,t,e,n=[]){const s=Ep(i,e),r=mh[Math.floor(i()*mh.length)];for(const[d,f]of Object.entries(Vp[r]))i()<.7&&(s[d]=f[Math.floor(i()*f.length)]);const a=di.map(d=>{const f=od(i,t,{slot:d});return f.part=s[d],f.affixes=f.affixes.filter(()=>i()<.5+t*.025),f}),l=(i()<.75?Gp[r]:ph).filter(d=>!n.includes(d)),c=l[Math.floor(i()*l.length)]??ph.find(d=>!n.includes(d))??"FOE",h=md(wc(s,c),a);h.ai={...Xp(t),persona:r};const u=Math.max(0,3-t)/2;return u>0&&(h.maxSpin*=1-.07*u,h.mass*=1-.2*u,h.burstRes*=1-.15*u,h.attack*=1-.14*u,h.steer*=1-.2*u,h.ai={...h.ai,strike:h.ai.strike-6*u,boost:h.ai.boost-6*u,persona:r}),h}function qp(i,t,e){const n=_d(i,Math.min(Cr,t+2),e),s=1.55;n.name=Wp(t),n.role="attack",n.radius*=s,n.mass*=1.6,n.maxSpin*=1.7,n.burstRes*=1.4,n.attack*=.7,n.steer*=.75,n.spinDecay*=.9;const r=qu(t),a=Ui[r];return n.boss={kind:r},n.elements=[a.element],n.color=a.paint,n.accent=a.glow,n.look={...n.look,blade:"boss_"+r,disc:"anvil",tip:"orbit",core:"lockjaw",paint:a.paint,glow:a.glow,metal:a.metal,scale:s},n.ai={strike:Math.min(95,50+t*2),boost:70},n}function Yp(i,t,e,n){const s=[],r=o=>{const l=_d(i,o,n,s);return s.push(l.name),l},a=Array.from({length:e-1},()=>r(t));if(Md(t)){const o=t>=10?Math.min(2,e):0;return{allies:a,enemies:[qp(i,t,n),...Array.from({length:o},()=>r(t))],boss:!0}}return{allies:a,enemies:Array.from({length:e},()=>r(t)),boss:!1}}const $p=3.5,Wa=.6;class Kp{constructor(t,e,n=2,s=zs,r){this.specs=t,this.seed=e,this.winsNeeded=n,this.stadium=s,this.teams=r,this.world=ah(t,e,s,r)}world;phase="countdown";phaseT=3*Wa;liveT=0;round=1;score=[0,0];tick(t,e){switch(this.phase){case"countdown":return this.phaseT-=Pt,this.phaseT<=0&&(this.phase="live",this.liveT=0),[];case"live":{this.liveT+=Pt;const n=[];return this.world.tops.forEach((s,r)=>{if(s.inPlay)return;const a=e[r]??(this.liveT>$p?{x:0,y:0,power:.5,tilt:0}:null);a&&Ju(this.world,r,a,n)}),n.push(...Ao(this.world,t)),this.world.over&&(this.world.over.winner>=0&&this.score[this.world.over.winner]++,this.phase="roundEnd",this.phaseT=3),n}case"roundEnd":{this.phaseT-=Pt;const n=Ao(this.world,t);return this.phaseT<=0&&(this.score.some(s=>s>=this.winsNeeded)?this.phase="matchEnd":(this.round++,this.world=ah(this.specs,this.seed+this.round*7919,this.stadium,this.teams),this.phase="countdown",this.phaseT=3*Wa)),n}case"matchEnd":return Ao(this.world,t)}}}function yd(){return new URLSearchParams(location.search).has("touch")||window.matchMedia("(pointer: coarse)").matches}function Zp(i){const t=yd(),e={active:t,sx:0,sy:0,show:()=>{},update:()=>{}};if(!t)return e;document.body.classList.add("touch");const n=document.createElement("div");n.id="tc",n.className="hidden",n.innerHTML=`
    <div id="tcZone"><div id="tcBase"><div id="tcKnob"></div></div></div>
    <button id="tcSuper" class="tcb"><i></i><span></span></button>
    <button id="tcAbility" class="tcb"><i></i><span></span></button>
    <button id="tcBoost" class="tcb"><i></i><span>BOOST</span></button>
    <button id="tcMain" class="tcb"><i></i><span>STRIKE</span></button>`,document.body.appendChild(n);const s=()=>n.style.setProperty("--tcs",String(Ie.touchScale));s(),ro(s);const r=E=>n.querySelector("#"+E),a=r("tcZone"),o=r("tcBase"),l=r("tcKnob"),c=56;let h=-1,u=0,d=0;const f=(E,T)=>{let v=E-u,M=T-d;const S=Math.hypot(v,M),C=c*Ie.touchScale;S>C&&(v*=C/S,M*=C/S),e.sx=v/C,e.sy=M/C,l.style.transform=`translate(${v}px, ${M}px)`},g=()=>{h=-1,e.sx=e.sy=0,o.classList.remove("on"),l.style.transform=""};a.addEventListener("pointerdown",E=>{h===-1&&(h=E.pointerId,a.setPointerCapture(E.pointerId),u=E.clientX,d=E.clientY,o.style.left=`${u}px`,o.style.top=`${d}px`,o.classList.add("on"),f(u,d),E.preventDefault())}),a.addEventListener("pointermove",E=>{E.pointerId===h&&f(E.clientX,E.clientY)});for(const E of["pointerup","pointercancel"])a.addEventListener(E,T=>{T.pointerId===h&&g()});const x=(E,T,v)=>{const M=r(E);M.addEventListener("pointerdown",S=>{M.setPointerCapture(S.pointerId),M.classList.add("down"),T(),S.preventDefault()});for(const S of["pointerup","pointercancel"])M.addEventListener(S,()=>{M.classList.remove("down"),v?.()});return M},p=x("tcMain",i.mainDown,i.mainUp),m=x("tcBoost",i.boost),b=x("tcAbility",i.ability),y=x("tcSuper",i.super),_=(E,T)=>E.firstElementChild.style.height=`${Math.max(0,Math.min(1,T))*100}%`,R=(E,T)=>{const v=E.lastElementChild;v.textContent!==T&&(v.textContent=T)};return e.show=E=>{n.classList.toggle("hidden",!E),E||g()},e.update=E=>{R(p,E.launching?"LAUNCH":"STRIKE"),R(b,E.ability),_(p,E.launching?0:E.strike),_(m,E.boost),_(b,E.abilityCd),m.classList.toggle("dim",E.launching),b.classList.toggle("dim",E.launching),R(y,E.superMeter>=1?E.superName:"OVERDRIVE"),_(y,1-E.superMeter),y.style.setProperty("--sc",E.superColor),y.classList.toggle("ready",E.superMeter>=1),y.classList.toggle("dim",E.launching)},e}const bd={low:{shadow:512,bloom:!1,sparks:300,pixelCap:1},medium:{shadow:1024,bloom:!0,sparks:600,pixelCap:1.5},high:{shadow:2048,bloom:!0,sparks:900,pixelCap:2}},Jp=[["SMALL",.85],["NORMAL",1],["LARGE",1.2]],Sl="sf.settings",jp={volume:1,mute:!1,quality:"medium",measured:!1,qualityAuto:!1,touchScale:1};function Qp(){const i={...jp};try{const t=JSON.parse(localStorage.getItem(Sl)??"null");t&&typeof t=="object"&&Object.assign(i,t),localStorage.getItem("sf.mute")&&(i.mute=!0,localStorage.removeItem("sf.mute"),localStorage.setItem(Sl,JSON.stringify(i)))}catch{}return Sd(i)}function Sd(i){const t=Number(i.volume);i.volume=Number.isFinite(t)?Math.max(0,Math.min(1,t)):1,i.mute=!!i.mute,i.quality in bd||(i.quality="medium"),i.measured=!!i.measured,i.qualityAuto=!!i.qualityAuto;const e=Number(i.touchScale);return i.touchScale=Number.isFinite(e)?Math.max(.7,Math.min(1.4,e)):1,i}const Ie=Qp(),Ed=[],ro=i=>Ed.push(i);function pr(i){Object.assign(Ie,i),Sd(Ie);try{localStorage.setItem(Sl,JSON.stringify(Ie))}catch{}for(const t of Ed)t()}const tm=i=>i>26?"low":i>19?"medium":"high",em=`<svg viewBox="-12 -12 24 24" width="24" height="24" aria-hidden="true"><g fill="currentColor">${Array.from({length:8},(t,e)=>`<rect x="-2.2" y="-11.5" width="4.4" height="5" rx="0.8" transform="rotate(${e*45})"/>`).join("")}</g><circle r="6.4" fill="none" stroke="currentColor" stroke-width="3.2"/></svg>`,nm=()=>em;function im(i){const t=document.createElement("div");t.id="st",t.className="hidden";const e=yd();t.innerHTML=`
    <div class="st-card" role="dialog" aria-label="Settings">
      <header><h2>SETTINGS</h2><button id="stDone" class="st-btn go">DONE</button></header>
      <div class="st-row"><label>SOUND</label>
        <div class="st-ctl"><input id="stVol" type="range" min="0" max="100" step="5" aria-label="Volume" /><output id="stVolN"></output><button id="stMute" class="st-btn"></button></div></div>
      <div class="st-row"><label>GRAPHICS</label>
        <div class="st-ctl"><div class="st-seg" id="stQ">${["low","medium","high"].map(o=>`<button data-q="${o}">${o.toUpperCase()}</button>`).join("")}</div></div>
        <small id="stAuto"></small></div>
      ${e?`<div class="st-row"><label>CONTROL SIZE</label><div class="st-ctl"><div class="st-seg" id="stS">${Jp.map(([o,l])=>`<button data-s="${l}">${o}</button>`).join("")}</div></div></div>`:""}
    </div>`,document.body.appendChild(t);const n=o=>t.querySelector(o),s=n("#stVol"),r=()=>{s.value=String(Math.round(Ie.volume*100)),n("#stVolN").textContent=Ie.mute?"OFF":`${Math.round(Ie.volume*100)}%`,n("#stMute").textContent=Ie.mute?"UNMUTE":"MUTE",n("#stMute").classList.toggle("on",Ie.mute),t.querySelectorAll("[data-q]").forEach(o=>o.classList.toggle("on",o.dataset.q===Ie.quality)),n("#stAuto").textContent=Ie.qualityAuto?"PICKED FOR THIS DEVICE":"",t.querySelectorAll("[data-s]").forEach(o=>o.classList.toggle("on",Math.abs(Number(o.dataset.s)-Ie.touchScale)<.01))};ro(r),r(),s.addEventListener("input",()=>pr({volume:Number(s.value)/100,mute:!1})),s.addEventListener("change",i),n("#stMute").addEventListener("click",()=>pr({mute:!Ie.mute})),t.querySelectorAll("[data-q]").forEach(o=>o.addEventListener("click",()=>pr({quality:o.dataset.q,measured:!0,qualityAuto:!1}))),t.querySelectorAll("[data-s]").forEach(o=>o.addEventListener("click",()=>pr({touchScale:Number(o.dataset.s)})));const a=()=>t.classList.add("hidden");return n("#stDone").addEventListener("click",a),t.addEventListener("pointerdown",o=>{o.target===t&&a()}),window.addEventListener("keydown",o=>{o.code==="Escape"&&!t.classList.contains("hidden")&&a()}),()=>{r(),t.classList.remove("hidden")}}class sm{ctx=null;master;noise;hums=[];start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createDynamicsCompressor();this.master=t.createGain(),this.applyVolume(),ro(()=>this.applyVolume()),this.master.connect(e).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;for(let s=0;s<2;s++){const r=t.createOscillator();r.type="sawtooth";const a=t.createOscillator();a.type="triangle";const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=3;const l=t.createGain();l.gain.value=0,r.connect(o),a.connect(o),o.connect(l).connect(this.master),r.start(),a.start(),this.hums.push({osc:r,sub:a,filter:o,gain:l})}}setHum(t,e,n){if(!this.ctx)return;const s=this.hums[t],r=this.ctx.currentTime,a=55+210*e+t*9;s.osc.frequency.setTargetAtTime(a,r,.05),s.sub.frequency.setTargetAtTime(a/2,r,.05),s.filter.frequency.setTargetAtTime(200+1400*e,r,.05),s.gain.gain.setTargetAtTime(n?.035+.05*e:0,r,.08)}burstNoise(t,e,n,s,r="bandpass",a=0,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loopStart=Math.random()*.5;const h=l.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=e;const u=l.createGain(),d=l.currentTime+a;o&&h.frequency.exponentialRampToValueAtTime(o,d+s),u.gain.setValueAtTime(n,d),u.gain.exponentialRampToValueAtTime(1e-4,d+s),c.connect(h).connect(u).connect(this.master),c.start(d,Math.random()*.5,s+.05)}tone(t,e,n,s="sine",r,a=0){const o=this.ctx,l=o.createOscillator();l.type=s;const c=o.createGain(),h=o.currentTime+a;l.frequency.setValueAtTime(t,h),r&&l.frequency.exponentialRampToValueAtTime(r,h+n),c.gain.setValueAtTime(e,h),c.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(this.master),l.start(h),l.stop(h+n+.02)}clash(t){if(!this.ctx)return;const e=620+Math.random()*520,n=.15+t*.85;for(const[s,r]of[[1,.2],[2.76,.14],[5.4,.09],[8.93,.05]])this.tone(e*s,r*n,.12+.45*t*(1/Math.sqrt(s)));this.burstNoise(3500+Math.random()*2500,1.2,.5*n,.07+.08*t),t>.5&&this.tone(140,.5*t,.18,"sine",50)}rim(t){this.ctx&&(this.tone(260+Math.random()*60,.25*t+.05,.2,"triangle",150),this.burstNoise(1800,2,.25*t+.05,.08))}burst(){if(this.ctx){this.burstNoise(900,.6,1,.5,"lowpass"),this.burstNoise(5200,.8,.7,.18),this.tone(110,.9,.45,"sine",35);for(let t=0;t<4;t++)this.tone(900+Math.random()*2600,.12,.5+Math.random()*.5)}}ringOut(){this.ctx&&(this.tone(700,.3,.6,"sawtooth",90),this.burstNoise(1200,.7,.5,.5))}spinOut(){this.ctx&&(this.tone(180,.35,.7,"triangle",40),this.burstNoise(600,1,.3,.4))}applyVolume(){this.ctx&&(this.master.gain.value=Ie.mute?0:.7*Ie.volume*Ie.volume)}launch(t){this.ctx&&(this.tone(180,.3,.3,"sawtooth",t?1500:900),this.burstNoise(2600,.8,.35,.22),t&&this.tone(1760,.15,.35))}ability(t){this.ctx&&(t==="brake"?(this.burstNoise(900,1.2,.5,.28,"lowpass"),this.tone(160,.3,.3,"sawtooth",50)):t==="spring"?(this.tone(220,.3,.3,"triangle",720),this.tone(330,.2,.2,"sine",980)):t==="dash"?(this.burstNoise(1500,.9,.5,.25),this.tone(300,.25,.22,"sawtooth",1100)):(this.tone(220,.35,.3,"square",180),this.tone(1320,.1,.25)))}land(){this.ctx&&(this.tone(110,.55,.45,"sine",40),this.burstNoise(500,.8,.8,.25,"lowpass"),this.tone(1500,.12,.3,"triangle",500))}release(){this.ctx&&(this.burstNoise(3e3,1,.45,.22),this.tone(200,.3,.3,"sawtooth",1500),this.tone(1800,.15,.25))}boost(){this.ctx&&(this.burstNoise(2200,.7,.4,.2),this.tone(220,.18,.18,"sawtooth",900))}strike(){this.ctx&&(this.burstNoise(5200,1.5,.3,.09),this.tone(1400,.1,.1,"triangle",2400))}power(){this.ctx&&(this.tone(95,.9,.35,"sine",38),this.burstNoise(700,.6,.7,.22,"lowpass"),this.tone(2100,.16,.5))}wallBreak(){if(this.ctx){this.burstNoise(500,.5,1,.6,"lowpass"),this.burstNoise(3800,.9,.5,.25),this.tone(70,.8,.5,"sine",30);for(let t=0;t<5;t++)this.tone(500+Math.random()*1800,.1,.3+Math.random()*.5)}}superFx(){if(this.ctx){this.tone(120,.4,.45,"sawtooth",1800),this.tone(60,1,.7,"sine",28),this.burstNoise(400,.5,1,.7,"lowpass"),this.burstNoise(6e3,.7,.4,.35);for(let t=0;t<3;t++)this.tone(700+t*520,.14,.7)}}superEl(t){if(this.ctx)switch(t){case"thermal":this.burstNoise(180,.7,1,1.6,"lowpass",0,900),this.tone(70,.5,1.4,"sawtooth",240);for(let e=0;e<6;e++)this.burstNoise(2500+Math.random()*3e3,3,.25,.05,"bandpass",.2+e*.2);break;case"cryo":[3900,3100,2350,1750].forEach((e,n)=>this.tone(e,.16,.7,"sine",e*.985,n*.06)),this.burstNoise(7e3,.8,.5,.6,"highpass"),this.burstNoise(1800,4,.8,.07,"bandpass",.22),this.tone(85,.7,.4,"sine",40,.22);break;case"volt":this.tone(100,.3,1.2,"square"),this.tone(151,.2,1.2,"sawtooth");for(let e=0;e<9;e++)this.burstNoise(3500+Math.random()*4e3,2.5,.45,.05,"bandpass",e*.11+Math.random()*.05);break;case"gale":this.burstNoise(300,2.2,1,2,"bandpass",0,2600),this.burstNoise(700,1.2,.5,2,"bandpass",0,4200),this.burstNoise(3e3,.7,.9,.25,"bandpass",2.1);break;case"quake":this.tone(58,1,1.3,"sine",22),this.burstNoise(120,.6,1,1.4,"lowpass");for(let e=0;e<6;e++)this.tone(90+Math.random()*90,.45,.16,"triangle",45,.1+e*.13);break;case"plasma":this.tone(300,.3,.35,"sawtooth",3200),this.burstNoise(5e3,1.2,1,.5,"bandpass",.3,900),this.tone(2400,.4,.5,"square",200,.3);break;case"gravity":this.tone(160,.7,2.4,"sine",30),this.tone(164,.5,2.4,"triangle",31),this.burstNoise(900,1.5,.5,2.4,"bandpass",0,90),this.tone(40,1,.5,"sine",160,2.5);break;case"resonance":for(let e=0;e<4;e++)for(const[n,s]of[[1,.3],[2.76,.16],[5.4,.08]])this.tone(330*n,s,.55,"sine",void 0,e*.6);break;case"mag":this.tone(520,.35,.7,"sine",80),this.tone(529,.35,.7,"sine",84),this.tone(80,.5,.5,"sawtooth",900,.7),this.burstNoise(1500,.8,.7,.3,"bandpass",.7);break}}zap(){this.ctx&&(this.burstNoise(4200+Math.random()*2e3,2,.35,.09),this.tone(1800,.08,.08,"square",500))}bossWind(t){if(this.ctx){this.tone(70,.5,t,"sawtooth",240),this.burstNoise(300,.8,.4,t,"lowpass",0,900);for(let e=0;e<4;e++)this.tone(520,.12,.06,"square",void 0,t*(.4+.15*e))}}bossSlam(){this.ctx&&(this.tone(60,1,.7,"sine",24),this.burstNoise(300,.5,1,.7,"lowpass"),this.burstNoise(2500,.8,.45,.3))}bossPhase(){this.ctx&&(this.tone(50,1,1,"sawtooth",160),this.burstNoise(500,.5,1,.8,"lowpass"),this.tone(1200,.14,.7,"triangle",300))}beep(t){this.ctx&&this.tone(t?990:495,.2,t?.4:.14,"square")}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="170",rm=0,gh=1,am=2,wd=1,Td=2,si=3,Li=0,tn=1,ze=2,oi=0,Fs=1,Be=2,xh=3,vh=4,om=5,Ji=100,lm=101,cm=102,hm=103,um=104,dm=200,fm=201,pm=202,mm=203,El=204,wl=205,gm=206,xm=207,vm=208,Mm=209,_m=210,ym=211,bm=212,Sm=213,Em=214,Tl=0,Al=1,Rl=2,Hs=3,Cl=4,Pl=5,Ll=6,Il=7,Ad=0,wm=1,Tm=2,Pi=0,Rd=1,Cd=2,Pd=3,Ac=4,Am=5,Ld=6,Id=7,Dd=300,Gs=301,Vs=302,Dl=303,Ul=304,ao=306,Nl=1e3,ts=1001,Ol=1002,hn=1003,Rm=1004,Zr=1005,$n=1006,Po=1007,es=1008,pi=1009,Ud=1010,Nd=1011,Pr=1012,Rc=1013,as=1014,Kn=1015,li=1016,Cc=1017,Pc=1018,Ws=1020,Od=35902,Fd=1021,kd=1022,Un=1023,Bd=1024,zd=1025,ks=1026,Xs=1027,Lc=1028,Ic=1029,Hd=1030,Dc=1031,Uc=1033,Na=33776,Oa=33777,Fa=33778,ka=33779,Fl=35840,kl=35841,Bl=35842,zl=35843,Hl=36196,Gl=37492,Vl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,Ba=36492,sc=36494,rc=36495,Gd=36283,ac=36284,oc=36285,lc=36286,Cm=3200,Pm=3201,Vd=0,Lm=1,Ai="",mn="srgb",Ks="srgb-linear",oo="linear",pe="srgb",ps=7680,Mh=519,Im=512,Dm=513,Um=514,Wd=515,Nm=516,Om=517,Fm=518,km=519,cc=35044,_h="300 es",ri=2e3,Xa=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lo=Math.PI/180,hc=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Bm(i,t){return(i%t+t)%t}function Io(i,t,e){return(1-e)*i+e*t}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],b=s[1],y=s[4],_=s[7],R=s[2],E=s[5],T=s[8];return r[0]=a*x+o*b+l*R,r[3]=a*p+o*y+l*E,r[6]=a*m+o*_+l*T,r[1]=c*x+h*b+u*R,r[4]=c*p+h*y+u*E,r[7]=c*m+h*_+u*T,r[2]=d*x+f*b+g*R,r[5]=d*p+f*y+g*E,r[8]=d*m+f*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new jt;function Xd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zm(){const i=qa("canvas");return i.style.display="block",i}const yh={};function mr(i){i in yh||(yh[i]=!0,console.warn(i))}function Hm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bh=[.64,.33,.3,.6,.15,.06],Sh=[.2126,.7152,.0722],Eh=[.3127,.329],wh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Ks]:{primaries:bh,whitePoint:Eh,transfer:oo,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:Sh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:bh,whitePoint:Eh,transfer:pe,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:Sh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let ms;class Wm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=qa("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xm=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class $e extends Zs{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=ts,s=ts,r=$n,a=es,o=Un,l=pi,c=$e.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ci(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nl:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nl:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Dd;$e.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,R=(m+1)/2,E=(h+d)/4,T=(u+x)/4,v=(g+p)/4;return y>_&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=T/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=v/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ym extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Ym{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yd extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-o;const m=l*d+c*f+h*g+u*x,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),E=Math.atan2(R,m*b);p=Math.sin(p*E)/R,o=Math.sin(o*E)/R}const _=o*b;if(l=l*p+d*_,c=c*p+f*_,h=h*p+g*_,u=u*p+x*_,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new L,Ah=new hs;class Ni{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),jr.subVectors(this.max,ir),gs.subVectors(t.a,ir),xs.subVectors(t.b,ir),vs.subVectors(t.c,ir),xi.subVectors(xs,gs),vi.subVectors(vs,xs),zi.subVectors(gs,vs);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-zi.z,zi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,zi.z,0,-zi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-zi.y,zi.x,0];return!Oo(e,gs,xs,vs,jr)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,gs,xs,vs,jr))?!1:(Qr.crossVectors(xi,vi),e=[Qr.x,Qr.y,Qr.z],Oo(e,gs,xs,vs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Jr=new Ni,gs=new L,xs=new L,vs=new L,xi=new L,vi=new L,zi=new L,ir=new L,jr=new L,Qr=new L,Hi=new L;function Oo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);const o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Km=new Ni,sr=new L,Fo=new L;class Oi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Km.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Fo)),this.expandByPoint(sr.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new L,ko=new L,ta=new L,Mi=new L,Bo=new L,ea=new L,zo=new L;class lo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ko.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(ko);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ta),o=Mi.dot(this.direction),l=-Mi.dot(ta),c=Mi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ko).addScaledVector(ta,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){Bo.subVectors(e,t),ea.subVectors(n,t),zo.crossVectors(Bo,ea);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const l=o*this.direction.dot(ea.crossVectors(Mi,ea));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Mi));if(c<0||l+c>a)return null;const h=-o*Mi.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Jm)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(n,an),_i.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(n,an)),_i.normalize(),na.crossVectors(an,_i),s[0]=_i.x,s[4]=na.x,s[8]=an.x,s[1]=_i.y,s[5]=na.y,s[9]=an.y,s[2]=_i.z,s[6]=na.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],b=n[3],y=n[7],_=n[11],R=n[15],E=s[0],T=s[4],v=s[8],M=s[12],S=s[1],C=s[5],N=s[9],O=s[13],z=s[2],Y=s[6],U=s[10],H=s[14],D=s[3],V=s[7],et=s[11],st=s[15];return r[0]=a*E+o*S+l*z+c*D,r[4]=a*T+o*C+l*Y+c*V,r[8]=a*v+o*N+l*U+c*et,r[12]=a*M+o*O+l*H+c*st,r[1]=h*E+u*S+d*z+f*D,r[5]=h*T+u*C+d*Y+f*V,r[9]=h*v+u*N+d*U+f*et,r[13]=h*M+u*O+d*H+f*st,r[2]=g*E+x*S+p*z+m*D,r[6]=g*T+x*C+p*Y+m*V,r[10]=g*v+x*N+p*U+m*et,r[14]=g*M+x*O+p*H+m*st,r[3]=b*E+y*S+_*z+R*D,r[7]=b*T+y*C+_*Y+R*V,r[11]=b*v+y*N+_*U+R*et,r[15]=b*M+y*O+_*H+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*d*c+x*l*f-o*p*f-u*l*m+o*d*m,y=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,_=h*x*c-g*u*c+g*o*f-a*x*f-h*o*m+a*u*m,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*p-a*u*p,E=e*b+n*y+s*_+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=b*T,t[1]=(x*d*r-u*p*r-x*s*f+n*p*f+u*s*m-n*d*m)*T,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,t[4]=y*T,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*T,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*T,t[8]=_*T,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*m-e*u*m)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=R*T,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*p+e*u*p)*T,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,b=l*c,y=l*h,_=l*u,R=n.x,E=n.y,T=n.z;return s[0]=(1-(x+m))*R,s[1]=(f+_)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+m))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(g+y)*T,s[9]=(p-b)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const a=Ms.set(s[4],s[5],s[6]).length(),o=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ri){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===ri)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ri){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,x;if(o===ri)g=(a+r)*u,x=-2*u;else if(o===Xa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new L,An=new oe,Zm=new L(0,0,0),Jm=new L(1,1,1),_i=new L,na=new L,an=new L,Rh=new oe,Ch=new hs;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jm=0;const Ph=new L,_s=new hs,ti=new oe,ia=new L,rr=new L,Qm=new L,t0=new hs,Lh=new L(1,0,0),Ih=new L(0,1,0),Dh=new L(0,0,1),Uh={type:"added"},e0={type:"removed"},ys={type:"childadded",child:null},Ho={type:"childremoved",child:null};class Pe extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new L,e=new kn,n=new hs,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(rr,ia,this.up):ti.lookAt(ia,rr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ti),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e0),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Qm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new L,ei=new L,Go=new L,ni=new L,bs=new L,Ss=new L,Nh=new L,Vo=new L,Wo=new L,Xo=new L,qo=new ve,Yo=new ve,$o=new ve;class gn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),ei.subVectors(n,e),Go.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(ei),l=Rn.dot(Go),c=ei.dot(ei),h=ei.dot(Go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return qo.setScalar(0),Yo.setScalar(0),$o.setScalar(0),qo.fromBufferAttribute(t,e),Yo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),ei.subVectors(t,e),Rn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bs.subVectors(s,n),Ss.subVectors(r,n),Vo.subVectors(t,n);const l=bs.dot(Vo),c=Ss.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,s);const h=bs.dot(Wo),u=Ss.dot(Wo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);Xo.subVectors(t,r);const f=bs.dot(Xo),g=Ss.dot(Xo);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ss,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Nh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Nh,o);const m=1/(p+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Bm(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ko(a,r,t+1/3),this.g=Ko(a,r,t),this.b=Ko(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ae.fromWorkingColorSpace(We.copy(this),t),Math.round(ke(We.r*255,0,255))*65536+Math.round(ke(We.g*255,0,255))*256+Math.round(ke(We.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=mn){ae.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(sa);const n=Io(yi.h,sa.h,e),s=Io(yi.s,sa.s,e),r=Io(yi.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Ht;Ht.NAMES=$d;let n0=0;class Fi extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ci(),this.name="",this.blending=Fs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new L,ra=new Z;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Kd extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zd extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let i0=0;const fn=new oe,Zo=new Pe,Es=new L,on=new Ni,ar=new Ni,Fe=new L;class _e extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?Zd:Kd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(on.min,ar.min),on.expandByPoint(Fe),Fe.addVectors(on.max,ar.max),on.expandByPoint(Fe)):(on.expandByPoint(ar.min),on.expandByPoint(ar.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),Fe.add(Es)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new L,l[v]=new L;const c=new L,h=new L,u=new L,d=new Z,f=new Z,g=new Z,x=new L,p=new L;function m(v,M,S){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[v].add(x),o[M].add(x),o[S].add(x),l[v].add(p),l[M].add(p),l[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,M=b.length;v<M;++v){const S=b[v],C=S.start,N=S.count;for(let O=C,z=C+N;O<z;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new L,_=new L,R=new L,E=new L;function T(v){R.fromBufferAttribute(s,v),E.copy(R);const M=o[v];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(E,M);const C=_.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,C)}for(let v=0,M=b.length;v<M;++v){const S=b[v],C=S.start,N=S.count;for(let O=C,z=C+N;O<z;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new oe,Gi=new lo,aa=new Oi,Fh=new L,oa=new L,la=new L,ca=new L,Jo=new L,ha=new L,kh=new L,ua=new L;class ht extends Pe{constructor(t=new _e,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Jo.fromBufferAttribute(u,t),a?ha.addScaledVector(Jo,h):ha.addScaledVector(Jo.sub(e),h))}e.add(ha)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(aa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(aa,Fh)===null||Gi.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,R=y;_<R;_+=3){const E=o.getX(_),T=o.getX(_+1),v=o.getX(_+2);s=da(this,m,t,n,c,h,u,E,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const b=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);s=da(this,a,t,n,c,h,u,b,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,R=y;_<R;_+=3){const E=_,T=_+1,v=_+2;s=da(this,m,t,n,c,h,u,E,T,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const b=p,y=p+1,_=p+2;s=da(this,a,t,n,c,h,u,b,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function s0(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;ua.copy(o),ua.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,oa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);const h=s0(i,t,e,n,oa,la,ca,kh);if(h){const u=new L;gn.getBarycoord(kh,oa,la,ca,u),s&&(h.uv=gn.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};gn.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}class ne extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,p,m,b,y,_,R,E,T,v,M){const S=_/T,C=R/v,N=_/2,O=R/2,z=E/2,Y=T+1,U=v+1;let H=0,D=0;const V=new L;for(let et=0;et<U;et++){const st=et*C-O;for(let gt=0;gt<Y;gt++){const At=gt*S-N;V[x]=At*b,V[p]=st*y,V[m]=z,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),u.push(gt/T),u.push(1-et/v),H+=1}}for(let et=0;et<v;et++)for(let st=0;st<T;st++){const gt=d+st+Y*et,At=d+st+Y*(et+1),q=d+(st+1)+Y*(et+1),Q=d+(st+1)+Y*et;l.push(gt,At,Q),l.push(At,q,Q),D+=6}o.addGroup(f,D,M),f+=D,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=qs(i[e]);for(const s in n)t[s]=n[s]}return t}function r0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Lr={clone:qs,merge:Je};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new L,Bh=new Z,zh=new Z;class je extends jd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,zh),e.subVectors(zh,Bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ws=-90,Ts=1;class l0 extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(ws,Ts,t,e);s.layers=this.layers,this.add(s);const r=new je(ws,Ts,t,e);r.layers=this.layers,this.add(r);const a=new je(ws,Ts,t,e);a.layers=this.layers,this.add(a);const o=new je(ws,Ts,t,e);o.layers=this.layers,this.add(o);const l=new je(ws,Ts,t,e);l.layers=this.layers,this.add(l);const c=new je(ws,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qd extends $e{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c0 extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:oi});r.uniforms.tEquirect.value=e;const a=new ht(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=$n),new l0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const jo=new L,h0=new L,u0=new jt;class $i{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=jo.subVectors(n,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||u0.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Oi,fa=new L;class Oc{constructor(t=new $i,e=new $i,n=new $i,s=new $i,r=new $i,a=new $i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],b=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,p-f,_-m).normalize(),n[1].setComponents(l+r,d+c,p+f,_+m).normalize(),n[2].setComponents(l+a,d+h,p+g,_+b).normalize(),n[3].setComponents(l-a,d-h,p-g,_-b).normalize(),n[4].setComponents(l-o,d-u,p-x,_-y).normalize(),e===ri)n[5].setComponents(l+o,d+u,p+x,_+y).normalize();else if(e===Xa)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function d0(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class co extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const b=m*d-a;for(let y=0;y<c;y++){const _=y*u-r;g.push(_,-b,0),x.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const y=b+c*m,_=b+c*(m+1),R=b+1+c*(m+1),E=b+1+c*m;f.push(y,_,E),f.push(_,R,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.width,t.height,t.widthSegments,t.heightSegments)}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,ug=`struct PhysicalMaterial {
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
}`,dg=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define NORMAL
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Bx=`#define TOON
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
}`,zx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Wx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:v0,aomap_fragment:M0,aomap_pars_fragment:_0,batching_pars_vertex:y0,batching_vertex:b0,begin_vertex:S0,beginnormal_vertex:E0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:I0,color_pars_fragment:D0,color_pars_vertex:U0,color_vertex:N0,common:O0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:k0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:rg,envmap_vertex:K0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tg,lightmap_pars_fragment:eg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:vg,map_fragment:Mg,map_pars_fragment:_g,map_particle_fragment:yg,map_particle_pars_fragment:bg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Ig,normal_pars_vertex:Dg,normal_vertex:Ug,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:Hg,premultiplied_alpha_fragment:Gg,project_vertex:Vg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Kg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:jg,skinning_pars_vertex:Qg,skinning_vertex:tx,skinnormal_vertex:ex,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ax,transmission_pars_fragment:ox,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:hx,worldpos_vertex:ux,background_vert:dx,background_frag:fx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:vx,depth_frag:Mx,distanceRGBA_vert:_x,distanceRGBA_frag:yx,equirect_vert:bx,equirect_frag:Sx,linedashed_vert:Ex,linedashed_frag:wx,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:Rx,meshlambert_frag:Cx,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Ux,meshphong_frag:Nx,meshphysical_vert:Ox,meshphysical_frag:Fx,meshtoon_vert:kx,meshtoon_frag:Bx,points_vert:zx,points_frag:Hx,shadow_vert:Gx,shadow_frag:Vx,sprite_vert:Wx,sprite_frag:Xx},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Xn={basic:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([mt.points,mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([mt.common,mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([mt.sprite,mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xn.physical={uniforms:Je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const pa={r:0,b:0,g:0},Wi=new kn,qx=new oe;function Yx(i,t,e,n,s,r,a){const o=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const _=g(b);_===null?m(o,l):_&&_.isColor&&(m(_,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===ao)?(h===void 0&&(h=new ht(new ne(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:qs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Wi)),h.material.toneMapped=ae.getTransfer(_.colorSpace)!==pe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new co(2,2),new Qe({name:"BackgroundMaterial",uniforms:qs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(pa,Jd(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:x,addToRenderList:p}}function $x(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,C,N,O,z){let Y=!1;const U=u(O,N,C);r!==U&&(r=U,c(r.object)),Y=f(S,O,N,z),Y&&g(S,O,N,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(S,C,N,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,C,N){const O=N.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let Y=z[C.id];Y===void 0&&(Y={},z[C.id]=Y);let U=Y[O];return U===void 0&&(U=d(l()),Y[O]=U),U}function d(S){const C=[],N=[],O=[];for(let z=0;z<e;z++)C[z]=0,N[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,C,N,O){const z=r.attributes,Y=C.attributes;let U=0;const H=N.getAttributes();for(const D in H)if(H[D].location>=0){const et=z[D];let st=Y[D];if(st===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function g(S,C,N,O){const z={},Y=C.attributes;let U=0;const H=N.getAttributes();for(const D in H)if(H[D].location>=0){let et=Y[D];et===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(et=S.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),z[D]=st,U++}r.attributes=z,r.attributesNum=U,r.index=O}function x(){const S=r.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function p(S){m(S,0)}function m(S,C){const N=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;N[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),z[S]!==C&&(i.vertexAttribDivisor(S,C),z[S]=C)}function b(){const S=r.newAttributes,C=r.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==S[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(S,C,N,O,z,Y,U){U===!0?i.vertexAttribIPointer(S,C,N,z,Y):i.vertexAttribPointer(S,C,N,O,z,Y)}function _(S,C,N,O){x();const z=O.attributes,Y=N.getAttributes(),U=C.defaultAttributeValues;for(const H in Y){const D=Y[H];if(D.location>=0){let V=z[H];if(V===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const et=V.normalized,st=V.itemSize,gt=t.get(V);if(gt===void 0)continue;const At=gt.buffer,q=gt.type,Q=gt.bytesPerElement,tt=q===i.INT||q===i.UNSIGNED_INT||V.gpuType===Rc;if(V.isInterleavedBufferAttribute){const K=V.data,pt=K.stride,Nt=V.offset;if(K.isInstancedInterleavedBuffer){for(let Dt=0;Dt<D.locationSize;Dt++)m(D.location+Dt,K.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Dt=0;Dt<D.locationSize;Dt++)p(D.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Dt=0;Dt<D.locationSize;Dt++)y(D.location+Dt,st/D.locationSize,q,et,pt*Q,(Nt+st/D.locationSize*Dt)*Q,tt)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<D.locationSize;K++)m(D.location+K,V.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<D.locationSize;K++)p(D.location+K);i.bindBuffer(i.ARRAY_BUFFER,At);for(let K=0;K<D.locationSize;K++)y(D.location+K,st/D.locationSize,q,et,st*Q,st/D.locationSize*K*Q,tt)}}else if(U!==void 0){const et=U[H];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(D.location,et);break;case 3:i.vertexAttrib3fv(D.location,et);break;case 4:i.vertexAttrib4fv(D.location,et);break;default:i.vertexAttrib1fv(D.location,et)}}}}b()}function R(){v();for(const S in n){const C=n[S];for(const N in C){const O=C[N];for(const z in O)h(O[z].object),delete O[z];delete C[N]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const N in C){const O=C[N];for(const z in O)h(O[z].object),delete O[z];delete C[N]}delete n[S.id]}function T(S){for(const C in n){const N=n[C];if(N[S.id]===void 0)continue;const O=N[S.id];for(const z in O)h(O[z].object),delete O[z];delete N[S.id]}}function v(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:v,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Kx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const v=T===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==pi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!v)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:E}}function Jx(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new $i,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,y=b*4;let _=m.clippingState||null;l.value=_,_=h(g,d,y,f);for(let R=0;R!==y;++R)_[R]=e[R];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function jx(i){let t=new WeakMap;function e(a,o){return o===Dl?a.mapping=Gs:o===Ul&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dl||o===Ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fc extends jd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,Hh=[.125,.215,.35,.446,.526,.582],ji=20,Qo=new Fc,Gh=new Ht;let tl=null,el=0,nl=0,il=!1;const Ki=(1+Math.sqrt(5))/2,As=1/Ki,Vh=[new L(-Ki,As,0),new L(Ki,As,0),new L(-As,0,Ki),new L(As,0,Ki),new L(0,Ki,-As),new L(0,Ki,As),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:li,format:Un,colorSpace:Ks,depthBuffer:!1},s=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=tv(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gh),h.toneMapping=Pi,h.autoClear=!1;const f=new Te({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ht(new ne,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Gh),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;ma(s,b*y,m>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gs||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(s-r-1)%Vh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let b=0;for(let T=0;T<ji;++T){const v=T/x,M=Math.exp(-v*v/2);m.push(M),T===0?b+=M:T<p&&(b+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],R=3*_*(s>y-Ns?s-y+Ns:0),E=4*(this._cubeSize-_);ma(e,R,E,3*_,2*_),l.setRenderTarget(e),l.render(u,Qo)}}function Qx(i){const t=[],e=[],n=[];let s=i;const r=i-Ns+1+Hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ns?l=Hh[a-i+Ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,b=new Float32Array(x*g*f),y=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,v=E>2?0:-1,M=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];b.set(M,x*g*E),y.set(d,p*g*E);const S=[E,E,E,E,E,E];_.set(S,m*g*E)}const R=new _e;R.setAttribute("position",new Ae(b,x)),R.setAttribute("uv",new Ae(y,p)),R.setAttribute("faceIndex",new Ae(_,m)),t.push(R),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wh(i,t,e){const n=new On(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tv(i,t,e){const n=new Float32Array(ji),s=new L(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Xh(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function qh(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function ev(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Dl||l===Ul,h=l===Gs||l===Vs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function iv(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let y=0,_=b.length;y<_;y+=3){const R=b[y+0],E=b[y+1],T=b[y+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){const b=g.array;x=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const R=y+0,E=y+1,T=y+2;d.push(R,E,E,T,T,R)}}else return;const p=new(Xd(d)?Zd:Kd)(d,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sv(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b]*x[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function av(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let R=o.attributes.position.count*_,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*E*4*u),v=new Yd(T,R,E,u);v.type=Kn,v.needsUpdate=!0;const M=_*4;for(let C=0;C<u;C++){const N=m[C],O=b[C],z=y[C],Y=R*E*4*C;for(let U=0;U<N.count;U++){const H=U*M;g===!0&&(s.fromBufferAttribute(N,U),T[Y+H+0]=s.x,T[Y+H+1]=s.y,T[Y+H+2]=s.z,T[Y+H+3]=0),x===!0&&(s.fromBufferAttribute(O,U),T[Y+H+4]=s.x,T[Y+H+5]=s.y,T[Y+H+6]=s.z,T[Y+H+7]=0),p===!0&&(s.fromBufferAttribute(z,U),T[Y+H+8]=s.x,T[Y+H+9]=s.y,T[Y+H+10]=s.z,T[Y+H+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new Z(R,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ov(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ef extends $e{constructor(t,e,n,s,r,a,o,l,c,h=ks){if(h!==ks&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=as),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nf=new $e,Yh=new ef(1,1),sf=new Yd,rf=new $m,af=new Qd,$h=[],Kh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),jh=new Float32Array(4);function Js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=Kh[t];e===void 0&&(e=new Int32Array(t),Kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function dv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Oe(e,n)}}function fv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Jh.set(n),i.uniformMatrix3fv(this.addr,!1,Jh),Oe(e,n)}}function pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Oe(e,n)}}function mv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Mv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Sv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=Wd,r=Yh):r=nf,e.setTexture2D(t||r,s)}function Ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rf,s)}function wv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||af,s)}function Tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sf,s)}function Av(i){switch(i){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return Mv;case 36294:return _v;case 36295:return yv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Tv}}function Rv(i,t){i.uniform1fv(this.addr,t)}function Cv(i,t){const e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function Pv(i,t){const e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function Lv(i,t){const e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function Iv(i,t){const e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dv(i,t){const e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Uv(i,t){const e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nv(i,t){i.uniform1iv(this.addr,t)}function Ov(i,t){i.uniform2iv(this.addr,t)}function Fv(i,t){i.uniform3iv(this.addr,t)}function kv(i,t){i.uniform4iv(this.addr,t)}function Bv(i,t){i.uniform1uiv(this.addr,t)}function zv(i,t){i.uniform2uiv(this.addr,t)}function Hv(i,t){i.uniform3uiv(this.addr,t)}function Gv(i,t){i.uniform4uiv(this.addr,t)}function Vv(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nf,r[a])}function Wv(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rf,r[a])}function Xv(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||af,r[a])}function qv(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sf,r[a])}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Lv;case 35674:return Iv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Ov;case 35668:case 35672:return Fv;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class $v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}}class Kv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}}class Zv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Qh(i,t){i.seq.push(t),i.map[t.id]=t}function Jv(i,t,e){const n=i.name,s=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),a=sl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qh(e,c===void 0?new $v(o,i,t):new Kv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Zv(o),Qh(e,u)),e=u}}}class za{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function tu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jv=37297;let Qv=0;function tM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eu=new jt;function eM(i){ae._getMatrix(eu,ae.workingColorSpace,i);const t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case oo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tM(i.getShaderSource(t),a)}else return s}function nM(i,t){const e=eM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function iM(i,t){let e;switch(t){case Rd:e="Linear";break;case Cd:e="Reinhard";break;case Pd:e="Cineon";break;case Ac:e="ACESFilmic";break;case Ld:e="AgX";break;case Id:e="Neutral";break;case Am:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ga=new L;function sM(){ae.getLuminanceCoefficients(ga);const i=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function aM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gr(i){return i!==""}function iu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(i){return i.replace(lM,hM)}const cM=new Map;function hM(i,t){let e=te[t];if(e===void 0){const n=cM.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(uM,dM)}function dM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function pM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function gM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case wm:t="ENVMAP_BLENDING_MIX";break;case Tm:t="ENVMAP_BLENDING_ADD";break}return t}function xM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vM(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fM(e),c=pM(e),h=mM(e),u=gM(e),d=xM(e),f=rM(e),g=aM(r),x=s.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(p=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?te.tonemapping_pars_fragment:"",e.toneMapping!==Pi?iM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,nM("linearToOutputTexel",e.outputColorSpace),sM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=uc(a),a=iu(a,e),a=su(a,e),o=uc(o),o=iu(o,e),o=su(o,e),a=ru(a),o=ru(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+p+a,_=b+m+o,R=tu(s,s.VERTEX_SHADER,y),E=tu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(E).trim();let Y=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{const H=nu(s,R,"vertex"),D=nu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+H+`
`+D)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||z==="")&&(U=!1);U&&(C.diagnostics={runnable:Y,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(R),s.deleteShader(E),v=new za(s,x),M=oM(s,x)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,jv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}let MM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yM(t),e.set(t,n)),n}}class yM{constructor(t){this.id=MM++,this.code=t,this.usedTimes=0}}function bM(i,t,e,n,s,r,a){const o=new Nc,l=new _M,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,C,N,O){const z=N.fog,Y=O.geometry,U=M.isMeshStandardMaterial?N.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),D=H&&H.mapping===ao?H.image.height:null,V=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,st=et!==void 0?et.length:0;let gt=0;Y.morphAttributes.position!==void 0&&(gt=1),Y.morphAttributes.normal!==void 0&&(gt=2),Y.morphAttributes.color!==void 0&&(gt=3);let At,q,Q,tt;if(V){const fe=Xn[V];At=fe.vertexShader,q=fe.fragmentShader}else At=M.vertexShader,q=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),tt=l.getFragmentShaderID(M);const K=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,ee=!!M.map,nt=!!M.matcap,lt=!!H,I=!!M.aoMap,It=!!M.lightMap,ot=!!M.bumpMap,wt=!!M.normalMap,ft=!!M.displacementMap,Gt=!!M.emissiveMap,bt=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,G=M.clearcoat>0,J=M.dispersion>0,rt=M.iridescence>0,j=M.sheen>0,Ut=M.transmission>0,xt=w&&!!M.anisotropyMap,St=G&&!!M.clearcoatMap,se=G&&!!M.clearcoatNormalMap,ct=G&&!!M.clearcoatRoughnessMap,Rt=rt&&!!M.iridescenceMap,Vt=rt&&!!M.iridescenceThicknessMap,Wt=j&&!!M.sheenColorMap,Ct=j&&!!M.sheenRoughnessMap,re=!!M.specularMap,Qt=!!M.specularColorMap,ye=!!M.specularIntensityMap,F=Ut&&!!M.transmissionMap,vt=Ut&&!!M.thicknessMap,$=!!M.gradientMap,it=!!M.alphaMap,yt=M.alphaTest>0,Mt=!!M.alphaHash,Zt=!!M.extensions;let Ce=Pi;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ge={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:At,fragmentShader:q,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:nt,envMap:lt,envMapMode:lt&&H.mapping,envMapCubeUVHeight:D,aoMap:I,lightMap:It,bumpMap:ot,normalMap:wt,displacementMap:d&&ft,emissiveMap:Gt,normalMapObjectSpace:wt&&M.normalMapType===Lm,normalMapTangentSpace:wt&&M.normalMapType===Vd,metalnessMap:bt,roughnessMap:P,anisotropy:w,anisotropyMap:xt,clearcoat:G,clearcoatMap:St,clearcoatNormalMap:se,clearcoatRoughnessMap:ct,dispersion:J,iridescence:rt,iridescenceMap:Rt,iridescenceThicknessMap:Vt,sheen:j,sheenColorMap:Wt,sheenRoughnessMap:Ct,specularMap:re,specularColorMap:Qt,specularIntensityMap:ye,transmission:Ut,transmissionMap:F,thicknessMap:vt,gradientMap:$,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Mt,combine:M.combine,mapUv:ee&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:It&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:wt&&x(M.normalMap.channel),displacementMapUv:ft&&x(M.displacementMap.channel),emissiveMapUv:Gt&&x(M.emissiveMap.channel),metalnessMapUv:bt&&x(M.metalnessMap.channel),roughnessMapUv:P&&x(M.roughnessMap.channel),anisotropyMapUv:xt&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(M.sheenRoughnessMap.channel),specularMapUv:re&&x(M.specularMap.channel),specularColorMapUv:Qt&&x(M.specularColorMap.channel),specularIntensityMapUv:ye&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:vt&&x(M.thicknessMap.channel),alphaMapUv:it&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(wt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(ee||it),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(S,M),y(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const S=g[M.type];let C;if(S){const N=Xn[S];C=Lr.clone(N.uniforms)}else C=M.uniforms;return C}function R(M,S){let C;for(let N=0,O=h.length;N<O;N++){const z=h[N];if(z.cacheKey===S){C=z,++C.usedTimes;break}}return C===void 0&&(C=new vM(i,S,M,r),h.push(C)),C}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function v(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:v}}function SM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function EM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function o(u,d,f,g,x,p){const m=a(u,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,x,p){const m=a(u,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||EM),n.length>1&&n.sort(d||ou),s.length>1&&s.sort(d||ou)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new lu,i.set(n,[a])):s>=r.length?(a=new lu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function TM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function AM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let RM=0;function CM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function PM(i){const t=new TM,e=AM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,b=0,y=0,_=0,R=0,E=0,T=0;c.sort(CM);for(let M=0,S=c.length;M<S;M++){const C=c[M],N=C.color,O=C.intensity,z=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*O,u+=N.g*O,d+=N.b*O;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],O);T++}else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,D=e.get(C);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=U,f++}else if(C.isSpotLight){const U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(N).multiplyScalar(O),U.distance=z,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[x]=U;const H=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,H.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=H.matrix,C.castShadow){const D=e.get(C);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,n.spotShadow[x]=D,n.spotShadowMap[x]=Y,_++}x++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(N).multiplyScalar(O),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=U,p++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const H=C.shadow,D=e.get(C);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=U,g++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(O),U.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==b||v.numPointShadows!==y||v.numSpotShadows!==_||v.numSpotMaps!==R||v.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=b,v.numPointShadows=y,v.numSpotShadows=_,v.numSpotMaps=R,v.numLightProbes=T,n.version=RM++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const y=c[m];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function cu(i){const t=new PM(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function LM(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new cu(i),t.set(s,[o])):r>=a.length?(o=new cu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class IM extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`;function OM(i,t,e){let n=new Oc;const s=new Z,r=new Z,a=new ve,o=new IM({depthPacking:Pm}),l=new DM,c={},h=e.maxTextureSize,u={[Li]:tn,[tn]:Li,[ze]:ze},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:UM,fragmentShader:NM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let m=this.type;this.render=function(E,T,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==si&&this.type===si,z=m===si&&this.type!==si;for(let Y=0,U=E.length;Y<U;Y++){const H=E[Y],D=H.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const V=D.getFrameExtents();if(s.multiply(V),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null||O===!0||z===!0){const st=this.type!==si?{minFilter:hn,magFilter:hn}:{};D.map!==null&&D.map.dispose(),D.map=new On(s.x,s.y,st),D.map.texture.name=H.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const et=D.getViewportCount();for(let st=0;st<et;st++){const gt=D.getViewport(st);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),N.viewport(a),D.updateMatrices(H,st),n=D.getFrustum(),_(T,v,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===si&&b(D,v),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,C)};function b(E,T){const v=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,v,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,v,f,x,null)}function y(E,T,v,M){let S=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=v.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=S.uuid,O=T.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let Y=z[O];Y===void 0&&(Y=S.clone(),z[O]=Y,T.addEventListener("dispose",R)),S=Y}if(S.visible=T.visible,S.wireframe=T.wireframe,M===si?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=v}return S}function _(E,T,v,M,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=t.update(E),z=E.material;if(Array.isArray(z)){const Y=O.groups;for(let U=0,H=Y.length;U<H;U++){const D=Y[U],V=z[D.materialIndex];if(V&&V.visible){const et=y(E,V,M,S);E.onBeforeShadow(i,E,T,v,O,et,D),i.renderBufferDirect(v,null,O,et,E,D),E.onAfterShadow(i,E,T,v,O,et,D)}}}else if(z.visible){const Y=y(E,z,M,S);E.onBeforeShadow(i,E,T,v,O,Y,null),i.renderBufferDirect(v,null,O,Y,E,null),E.onAfterShadow(i,E,T,v,O,Y,null)}}const N=E.children;for(let O=0,z=N.length;O<z;O++)_(N[O],T,v,M,S)}function R(E){E.target.removeEventListener("dispose",R);for(const v in c){const M=c[v],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const FM={[Tl]:Al,[Rl]:Ll,[Cl]:Il,[Hs]:Pl,[Al]:Tl,[Ll]:Rl,[Il]:Cl,[Pl]:Hs};function kM(i,t){function e(){let F=!1;const vt=new ve;let $=null;const it=new ve(0,0,0,0);return{setMask:function(yt){$!==yt&&!F&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){F=yt},setClear:function(yt,Mt,Zt,Ce,Ge){Ge===!0&&(yt*=Ce,Mt*=Ce,Zt*=Ce),vt.set(yt,Mt,Zt,Ce),it.equals(vt)===!1&&(i.clearColor(yt,Mt,Zt,Ce),it.copy(vt))},reset:function(){F=!1,$=null,it.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,$=null,it=null,yt=null;return{setReversed:function(Mt){if(vt!==Mt){const Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=yt;yt=null,this.setClear(Ce)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?K(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Mt){$!==Mt&&!F&&(i.depthMask(Mt),$=Mt)},setFunc:function(Mt){if(vt&&(Mt=FM[Mt]),it!==Mt){switch(Mt){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Mt}},setLocked:function(Mt){F=Mt},setClear:function(Mt){yt!==Mt&&(vt&&(Mt=1-Mt),i.clearDepth(Mt),yt=Mt)},reset:function(){F=!1,$=null,it=null,yt=null,vt=!1}}}function s(){let F=!1,vt=null,$=null,it=null,yt=null,Mt=null,Zt=null,Ce=null,Ge=null;return{setTest:function(fe){F||(fe?K(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(fe){vt!==fe&&!F&&(i.stencilMask(fe),vt=fe)},setFunc:function(fe,En,Zn){($!==fe||it!==En||yt!==Zn)&&(i.stencilFunc(fe,En,Zn),$=fe,it=En,yt=Zn)},setOp:function(fe,En,Zn){(Mt!==fe||Zt!==En||Ce!==Zn)&&(i.stencilOp(fe,En,Zn),Mt=fe,Zt=En,Ce=Zn)},setLocked:function(fe){F=fe},setClear:function(fe){Ge!==fe&&(i.clearStencil(fe),Ge=fe)},reset:function(){F=!1,vt=null,$=null,it=null,yt=null,Mt=null,Zt=null,Ce=null,Ge=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,b=null,y=null,_=null,R=null,E=null,T=new Ht(0,0,0),v=0,M=!1,S=null,C=null,N=null,O=null,z=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=H>=1):D.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=H>=2);let V=null,et={};const st=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),At=new ve().fromArray(st),q=new ve().fromArray(gt);function Q(F,vt,$,it){const yt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(F,Mt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(vt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Mt}const tt={};tt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Hs),ot(!1),wt(gh),K(i.CULL_FACE),I(oi);function K(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Nt(F,vt){return u[F]!==vt?(i.bindFramebuffer(F,vt),u[F]=vt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Dt(F,vt){let $=f,it=!1;if(F){$=d.get(vt),$===void 0&&($=[],d.set(vt,$));const yt=F.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Zt=yt.length;Mt<Zt;Mt++)$[Mt]=i.COLOR_ATTACHMENT0+Mt;$.length=yt.length,it=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,it=!0);it&&i.drawBuffers($)}function ee(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const nt={[Ji]:i.FUNC_ADD,[lm]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};nt[hm]=i.MIN,nt[um]=i.MAX;const lt={[dm]:i.ZERO,[fm]:i.ONE,[pm]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[_m]:i.SRC_ALPHA_SATURATE,[vm]:i.DST_COLOR,[gm]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Mm]:i.ONE_MINUS_DST_COLOR,[xm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Em]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,vt,$,it,yt,Mt,Zt,Ce,Ge,fe){if(F===oi){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),F!==om){if(F!==p||fe!==M){if((m!==Ji||_!==Ji)&&(i.blendEquation(i.FUNC_ADD),m=Ji,_=Ji),fe)switch(F){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,y=null,R=null,E=null,T.set(0,0,0),v=0,p=F,M=fe}return}yt=yt||vt,Mt=Mt||$,Zt=Zt||it,(vt!==m||yt!==_)&&(i.blendEquationSeparate(nt[vt],nt[yt]),m=vt,_=yt),($!==b||it!==y||Mt!==R||Zt!==E)&&(i.blendFuncSeparate(lt[$],lt[it],lt[Mt],lt[Zt]),b=$,y=it,R=Mt,E=Zt),(Ce.equals(T)===!1||Ge!==v)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ge),T.copy(Ce),v=Ge),p=F,M=!1}function It(F,vt){F.side===ze?pt(i.CULL_FACE):K(i.CULL_FACE);let $=F.side===tn;vt&&($=!$),ot($),F.blending===Fs&&F.transparent===!1?I(oi):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const it=F.stencilWrite;o.setTest(it),it&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function wt(F){F!==rm?(K(i.CULL_FACE),F!==C&&(F===gh?i.cullFace(i.BACK):F===am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),C=F}function ft(F){F!==N&&(U&&i.lineWidth(F),N=F)}function Gt(F,vt,$){F?(K(i.POLYGON_OFFSET_FILL),(O!==vt||z!==$)&&(i.polygonOffset(vt,$),O=vt,z=$)):pt(i.POLYGON_OFFSET_FILL)}function bt(F){F?K(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+Y-1),V!==F&&(i.activeTexture(F),V=F)}function w(F,vt,$){$===void 0&&(V===null?$=i.TEXTURE0+Y-1:$=V);let it=et[$];it===void 0&&(it={type:void 0,texture:void 0},et[$]=it),(it.type!==F||it.texture!==vt)&&(V!==$&&(i.activeTexture($),V=$),i.bindTexture(F,vt||tt[F]),it.type=F,it.texture=vt)}function G(){const F=et[V];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(F){At.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),At.copy(F))}function Ct(F){q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function re(F,vt){let $=c.get(vt);$===void 0&&($=new WeakMap,c.set(vt,$));let it=$.get(F);it===void 0&&(it=i.getUniformBlockIndex(vt,F.name),$.set(F,it))}function Qt(F,vt){const it=c.get(vt).get(F);l.get(vt)!==it&&(i.uniformBlockBinding(vt,it,F.__bindingPointIndex),l.set(vt,it))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,et={},u={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,b=null,y=null,_=null,R=null,E=null,T=new Ht(0,0,0),v=0,M=!1,S=null,C=null,N=null,O=null,z=null,At.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:pt,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:ee,setBlending:I,setMaterial:It,setFlipSided:ot,setCullFace:wt,setLineWidth:ft,setPolygonOffset:Gt,setScissorTest:bt,activeTexture:P,bindTexture:w,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:Rt,texImage3D:Vt,updateUBOMapping:re,uniformBlockBinding:Qt,texStorage2D:se,texStorage3D:ct,texSubImage2D:j,texSubImage3D:Ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Wt,viewport:Ct,reset:ye}}function hu(i,t,e,n){const s=BM(n);switch(e){case Fd:return i*t;case Bd:return i*t;case zd:return i*t*2;case Lc:return i*t/s.components*s.byteLength;case Ic:return i*t/s.components*s.byteLength;case Hd:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case kd:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Uc:return i*t*4/s.components*s.byteLength;case Na:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:case zl:return Math.max(i,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(t,8)/2;case Hl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gd:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function BM(i){switch(i){case pi:case Ud:return{byteLength:1,components:1};case Pr:case Nd:case li:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case as:case Rc:case Kn:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zM(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return f?new OffscreenCanvas(P,w):qa("canvas")}function x(P,w,G){let J=1;const rt=bt(P);if((rt.width>G||rt.height>G)&&(J=G/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(J*rt.width),Ut=Math.floor(J*rt.height);u===void 0&&(u=g(j,Ut));const xt=w?g(j,Ut):u;return xt.width=j,xt.height=Ut,xt.getContext("2d").drawImage(P,0,0,j,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+j+"x"+Ut+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,w,G,J,rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=w;if(w===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),w===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),w===i.RGBA){const Ut=rt?oo:ae.getTransfer(J);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Ut===pe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(P,w){let G;return P?w===null||w===as||w===Ws?G=i.DEPTH24_STENCIL8:w===Kn?G=i.DEPTH32F_STENCIL8:w===Pr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===as||w===Ws?G=i.DEPTH_COMPONENT24:w===Kn?G=i.DEPTH_COMPONENT32F:w===Pr&&(G=i.DEPTH_COMPONENT16),G}function R(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),v(w),w.isVideoTexture&&h.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),S(w)}function v(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,J=d.get(G);if(J){const rt=J[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(P),Object.keys(J).length===0&&d.delete(G)}n.remove(P)}function M(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const G=P.source,J=d.get(G);delete J[w.__cacheKey],a.memory.textures--}function S(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let rt=0;rt<w.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let J=0,rt=G.length;J<rt;J++){const j=n.get(G[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(P)}let C=0;function N(){C=0}function O(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Y(P,w){const G=n.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,P,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function U(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){q(G,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function H(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){q(G,P,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function D(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const V={[Nl]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},et={[hn]:i.NEAREST,[Rm]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},st={[Im]:i.NEVER,[km]:i.ALWAYS,[Dm]:i.LESS,[Wd]:i.LEQUAL,[Um]:i.EQUAL,[Fm]:i.GEQUAL,[Nm]:i.GREATER,[Om]:i.NOTEQUAL};function gt(P,w){if(w.type===Kn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===$n||w.magFilter===Po||w.magFilter===Zr||w.magFilter===es||w.minFilter===$n||w.minFilter===Po||w.minFilter===Zr||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,V[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,V[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,V[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hn||w.minFilter!==Zr&&w.minFilter!==es||w.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function At(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let rt=d.get(J);rt===void 0&&(rt={},d.set(J,rt));const j=z(w);if(j!==P.__cacheKey){rt[j]===void 0&&(rt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),rt[j].usedTimes++;const Ut=rt[P.__cacheKey];Ut!==void 0&&(rt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(w)),P.__cacheKey=j,P.__webglTexture=rt[j].texture}return G}function q(P,w,G){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const rt=At(P,w),j=w.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+G);const Ut=n.get(j);if(j.version!==Ut.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const xt=ae.getPrimaries(ae.workingColorSpace),St=w.colorSpace===Ai?null:ae.getPrimaries(w.colorSpace),se=w.colorSpace===Ai||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ct=x(w.image,!1,s.maxTextureSize);ct=Gt(w,ct);const Rt=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type);let Wt=y(w.internalFormat,Rt,Vt,w.colorSpace,w.isVideoTexture);gt(J,w);let Ct;const re=w.mipmaps,Qt=w.isVideoTexture!==!0,ye=Ut.__version===void 0||rt===!0,F=j.dataReady,vt=R(w,ct);if(w.isDepthTexture)Wt=_(w.format===Xs,w.type),ye&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Wt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Wt,ct.width,ct.height,0,Rt,Vt,null));else if(w.isDataTexture)if(re.length>0){Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,vt,Wt,re[0].width,re[0].height);for(let $=0,it=re.length;$<it;$++)Ct=re[$],Qt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Vt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Rt,Vt,Ct.data);w.generateMipmaps=!1}else Qt?(ye&&e.texStorage2D(i.TEXTURE_2D,vt,Wt,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Rt,Vt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,ct.width,ct.height,0,Rt,Vt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Wt,re[0].width,re[0].height,ct.depth);for(let $=0,it=re.length;$<it;$++)if(Ct=re[$],w.format!==Un)if(Rt!==null)if(Qt){if(F)if(w.layerUpdates.size>0){const yt=hu(Ct.width,Ct.height,w.format,w.type);for(const Mt of w.layerUpdates){const Zt=Ct.data.subarray(Mt*yt/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*yt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Mt,Ct.width,Ct.height,1,Rt,Zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Wt,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,Rt,Vt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Wt,Ct.width,Ct.height,ct.depth,0,Rt,Vt,Ct.data)}else{Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,vt,Wt,re[0].width,re[0].height);for(let $=0,it=re.length;$<it;$++)Ct=re[$],w.format!==Un?Rt!==null?Qt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Rt,Vt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Wt,Ct.width,Ct.height,0,Rt,Vt,Ct.data)}else if(w.isDataArrayTexture)if(Qt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Wt,ct.width,ct.height,ct.depth),F)if(w.layerUpdates.size>0){const $=hu(ct.width,ct.height,w.format,w.type);for(const it of w.layerUpdates){const yt=ct.data.subarray(it*$/ct.data.BYTES_PER_ELEMENT,(it+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Rt,Vt,yt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Rt,Vt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,ct.width,ct.height,ct.depth,0,Rt,Vt,ct.data);else if(w.isData3DTexture)Qt?(ye&&e.texStorage3D(i.TEXTURE_3D,vt,Wt,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Rt,Vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,ct.width,ct.height,ct.depth,0,Rt,Vt,ct.data);else if(w.isFramebufferTexture){if(ye)if(Qt)e.texStorage2D(i.TEXTURE_2D,vt,Wt,ct.width,ct.height);else{let $=ct.width,it=ct.height;for(let yt=0;yt<vt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Wt,$,it,0,Rt,Vt,null),$>>=1,it>>=1}}else if(re.length>0){if(Qt&&ye){const $=bt(re[0]);e.texStorage2D(i.TEXTURE_2D,vt,Wt,$.width,$.height)}for(let $=0,it=re.length;$<it;$++)Ct=re[$],Qt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Rt,Vt,Ct):e.texImage2D(i.TEXTURE_2D,$,Wt,Rt,Vt,Ct);w.generateMipmaps=!1}else if(Qt){if(ye){const $=bt(ct);e.texStorage2D(i.TEXTURE_2D,vt,Wt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Vt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Rt,Vt,ct);p(w)&&m(J),Ut.__version=j.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,G){if(w.image.length!==6)return;const J=At(P,w),rt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const j=n.get(rt);if(rt.version!==j.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Ut=ae.getPrimaries(ae.workingColorSpace),xt=w.colorSpace===Ai?null:ae.getPrimaries(w.colorSpace),St=w.colorSpace===Ai||Ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const se=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let it=0;it<6;it++)!se&&!ct?Rt[it]=x(w.image[it],!0,s.maxCubemapSize):Rt[it]=ct?w.image[it].image:w.image[it],Rt[it]=Gt(w,Rt[it]);const Vt=Rt[0],Wt=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type),re=y(w.internalFormat,Wt,Ct,w.colorSpace),Qt=w.isVideoTexture!==!0,ye=j.__version===void 0||J===!0,F=rt.dataReady;let vt=R(w,Vt);gt(i.TEXTURE_CUBE_MAP,w);let $;if(se){Qt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,re,Vt.width,Vt.height);for(let it=0;it<6;it++){$=Rt[it].mipmaps;for(let yt=0;yt<$.length;yt++){const Mt=$[yt];w.format!==Un?Wt!==null?Qt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Wt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,re,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Wt,Ct,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,re,Mt.width,Mt.height,0,Wt,Ct,Mt.data)}}}else{if($=w.mipmaps,Qt&&ye){$.length>0&&vt++;const it=bt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,re,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Rt[it].width,Rt[it].height,Wt,Ct,Rt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,re,Rt[it].width,Rt[it].height,0,Wt,Ct,Rt[it].data);for(let yt=0;yt<$.length;yt++){const Zt=$[yt].image[it].image;Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Zt.width,Zt.height,Wt,Ct,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,re,Zt.width,Zt.height,0,Wt,Ct,Zt.data)}}else{Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Wt,Ct,Rt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,re,Wt,Ct,Rt[it]);for(let yt=0;yt<$.length;yt++){const Mt=$[yt];Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Wt,Ct,Mt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,re,Wt,Ct,Mt.image[it])}}}p(w)&&m(i.TEXTURE_CUBE_MAP),j.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function tt(P,w,G,J,rt,j){const Ut=r.convert(G.format,G.colorSpace),xt=r.convert(G.type),St=y(G.internalFormat,Ut,xt,G.colorSpace),se=n.get(w),ct=n.get(G);if(ct.__renderTarget=w,!se.__hasExternalTextures){const Rt=Math.max(1,w.width>>j),Vt=Math.max(1,w.height>>j);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,j,St,Rt,Vt,w.depth,0,Ut,xt,null):e.texImage2D(rt,j,St,Rt,Vt,0,Ut,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,ct.__webglTexture,0,ot(w)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,ct.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(P,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,rt=J&&J.isDepthTexture?J.type:null,j=_(w.stencilBuffer,rt),Ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=ot(w);wt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,j,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,P)}else{const J=w.textures;for(let rt=0;rt<J.length;rt++){const j=J[rt],Ut=r.convert(j.format,j.colorSpace),xt=r.convert(j.type),St=y(j.internalFormat,Ut,xt,j.colorSpace),se=ot(w);G&&wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,St,w.width,w.height):wt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const rt=J.__webglTexture,j=ot(w);if(w.depthTexture.format===ks)wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(w.depthTexture.format===Xs)wt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Nt(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");pt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),K(w.__webglDepthbuffer[J],P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),K(w.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(P,w,G){const J=n.get(P);w!==void 0&&tt(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Nt(P)}function ee(P){const w=P.texture,G=n.get(P),J=n.get(w);P.addEventListener("dispose",T);const rt=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ut=rt.length>1;if(Ut||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let St=0;St<w.mipmaps.length;St++)G.__webglFramebuffer[xt][St]=i.createFramebuffer()}else G.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)G.__webglFramebuffer[xt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let xt=0,St=rt.length;xt<St;xt++){const se=n.get(rt[xt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&wt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){const St=rt[xt];G.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[xt]);const se=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),Rt=y(St.internalFormat,se,ct,St.colorSpace,P.isXRRenderTarget===!0),Vt=ot(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Rt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,G.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),K(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),gt(i.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)tt(G.__webglFramebuffer[xt][St],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else tt(G.__webglFramebuffer[xt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,St=rt.length;xt<St;xt++){const se=rt[xt],ct=n.get(se);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),gt(i.TEXTURE_2D,se),tt(G.__webglFramebuffer,P,se,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),p(se)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),gt(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)tt(G.__webglFramebuffer[St],P,w,i.COLOR_ATTACHMENT0,xt,St);else tt(G.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,xt,0);p(w)&&m(xt),e.unbindTexture()}P.depthBuffer&&Nt(P)}function nt(P){const w=P.textures;for(let G=0,J=w.length;G<J;G++){const rt=w[G];if(p(rt)){const j=b(P),Ut=n.get(rt).__webglTexture;e.bindTexture(j,Ut),m(j),e.unbindTexture()}}}const lt=[],I=[];function It(P){if(P.samples>0){if(wt(P)===!1){const w=P.textures,G=P.width,J=P.height;let rt=i.COLOR_BUFFER_BIT;const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(P),xt=w.length>1;if(xt)for(let St=0;St<w.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let St=0;St<w.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);const se=n.get(w[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,rt,i.NEAREST),l===!0&&(lt.length=0,I.length=0,lt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(lt.push(j),I.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<w.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);const se=n.get(w[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Gt(P,w){const G=P.colorSpace,J=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ks&&G!==Ai&&(ae.getTransfer(G)===pe?(J!==Un||rt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=D,this.rebindTextures=Dt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=wt}function HM(i,t){function e(n,s=Ai){let r;const a=ae.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return i.BYTE;if(n===Nd)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===Fd)return i.ALPHA;if(n===kd)return i.RGB;if(n===Un)return i.RGBA;if(n===Bd)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Hd)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===Na||n===Oa||n===Fa||n===ka)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===kl||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Gl||n===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Gl)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===ac||n===oc||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class GM extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qe({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new co(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends Zs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new qM,p=e.getContextAttributes();let m=null,b=null;const y=[],_=[],R=new Z;let E=null;const T=new je;T.viewport=new ve;const v=new je;v.viewport=new ve;const M=[T,v],S=new GM;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new rl,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new rl,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new rl,y[q]=Q),Q.getHandSpace()};function O(q){const Q=_.indexOf(q.inputSource);if(Q===-1)return;const tt=y[Q];tt!==void 0&&(tt.update(q.inputSource,q.frame,c||a),tt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){const Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}C=null,N=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new On(f.framebufferWidth,f.framebufferHeight,{format:Un,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,tt=null,K=null;p.depth&&(K=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Xs:ks,tt=p.stencil?Ws:as);const pt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new On(d.textureWidth,d.textureHeight,{format:Un,type:pi,depthTexture:new ef(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let Q=0;Q<q.removed.length;Q++){const tt=q.removed[Q],K=_.indexOf(tt);K>=0&&(_[K]=null,y[K].disconnect(tt))}for(let Q=0;Q<q.added.length;Q++){const tt=q.added[Q];let K=_.indexOf(tt);if(K===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=_.length){_.push(tt),K=Nt;break}else if(_[Nt]===null){_[Nt]=tt,K=Nt;break}if(K===-1)break}const pt=y[K];pt&&pt.connect(tt)}}const U=new L,H=new L;function D(q,Q,tt){U.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(tt.matrixWorld);const K=U.distanceTo(H),pt=Q.projectionMatrix.elements,Nt=tt.projectionMatrix.elements,Dt=pt[14]/(pt[10]-1),ee=pt[14]/(pt[10]+1),nt=(pt[9]+1)/pt[5],lt=(pt[9]-1)/pt[5],I=(pt[8]-1)/pt[0],It=(Nt[8]+1)/Nt[0],ot=Dt*I,wt=Dt*It,ft=K/(-I+It),Gt=ft*-I;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const bt=Dt+ft,P=ee+ft,w=ot-Gt,G=wt+(K-Gt),J=nt*ee/P*bt,rt=lt*ee/P*bt;q.projectionMatrix.makePerspective(w,G,J,rt,bt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function V(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,tt=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(tt=x.depthFar)),S.near=v.near=T.near=Q,S.far=v.far=T.far=tt,(C!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,N=S.far),T.layers.mask=q.layers.mask|2,v.layers.mask=q.layers.mask|4,S.layers.mask=T.layers.mask|v.layers.mask;const K=q.parent,pt=S.cameras;V(S,K);for(let Nt=0;Nt<pt.length;Nt++)V(pt[Nt],K);pt.length===2?D(S,T,v):S.projectionMatrix.copy(T.projectionMatrix),et(q,S,K)};function et(q,Q,tt){tt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(tt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let st=null;function gt(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let K=!1;tt.length!==S.cameras.length&&(S.cameras.length=0,K=!0);for(let Nt=0;Nt<tt.length;Nt++){const Dt=tt[Nt];let ee=null;if(f!==null)ee=f.getViewport(Dt);else{const lt=u.getViewSubImage(d,Dt);ee=lt.viewport,Nt===0&&(t.setRenderTargetTextures(b,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(b))}let nt=M[Nt];nt===void 0&&(nt=new je,nt.layers.enable(Nt),nt.viewport=new ve,M[Nt]=nt),nt.matrix.fromArray(Dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ee.x,ee.y,ee.width,ee.height),Nt===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),K===!0&&S.cameras.push(nt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const Nt=u.getDepthInformation(tt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let tt=0;tt<y.length;tt++){const K=_[tt],pt=y[tt];K!==null&&pt!==void 0&&pt.update(K,Q,c||a)}st&&st(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const At=new tf;At.setAnimationLoop(gt),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}}const Xi=new kn,$M=new oe;function KM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Jd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),y=b.envMap,_=b.envMapRotation;y&&(p.envMap.value=y,Xi.copy(_),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),p.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(Xi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ZM(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const _=y.program;n.uniformBlockBinding(b,_)}function c(b,y){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",p));const R=y.program;n.updateUBOMapping(b,R);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const y=u();b.__bindingPointIndex=y;const _=i.createBuffer(),R=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],_=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=_.length;E<T;E++){const v=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,S=v.length;M<S;M++){const C=v[M];if(f(C,E,M,R)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let Y=0;Y<O.length;Y++){const U=O[Y],H=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+z,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,z),z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,_,R){const E=b.value,T=y+"_"+_;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const v=R[T];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return R[T]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function g(b){const y=b.uniforms;let _=0;const R=16;for(let T=0,v=y.length;T<v;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,C=M.length;S<C;S++){const N=M[S],O=Array.isArray(N.value)?N.value:[N.value];for(let z=0,Y=O.length;z<Y;z++){const U=O[z],H=x(U),D=_%R,V=D%H.boundary,et=D+V;_+=V,et!==0&&R-et<H.storage&&(_+=R-et),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=H.storage}}}const E=_%R;return E>0&&(_+=R-E),b.__size=_,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class JM{constructor(t={}){const{canvas:e=zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Pi,this.toneMappingExposure=1;const _=this;let R=!1,E=0,T=0,v=null,M=-1,S=null;const C=new ve,N=new ve;let O=null;const z=new Ht(0);let Y=0,U=e.width,H=e.height,D=1,V=null,et=null;const st=new ve(0,0,U,H),gt=new ve(0,0,U,H);let At=!1;const q=new Oc;let Q=!1,tt=!1;const K=new oe,pt=new oe,Nt=new L,Dt=new ve,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function lt(){return v===null?D:1}let I=n;function It(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const k="webgl2";if(I=It(k,A),I===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,wt,ft,Gt,bt,P,w,G,J,rt,j,Ut,xt,St,se,ct,Rt,Vt,Wt,Ct,re,Qt,ye,F;function vt(){ot=new nv(I),ot.init(),Qt=new HM(I,ot),wt=new Zx(I,ot,t,Qt),ft=new kM(I,ot),wt.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),Gt=new rv(I),bt=new SM,P=new zM(I,ot,ft,bt,wt,Qt,Gt),w=new jx(_),G=new ev(_),J=new d0(I),ye=new $x(I,J),rt=new iv(I,J,Gt,ye),j=new ov(I,rt,J,Gt),Wt=new av(I,wt,P),ct=new Jx(bt),Ut=new bM(_,w,G,ot,wt,ye,ct),xt=new KM(_,bt),St=new wM,se=new LM(ot),Vt=new Yx(_,w,G,ft,j,f,l),Rt=new OM(_,j,wt),F=new ZM(I,Gt,wt,ft),Ct=new Kx(I,ot,Gt),re=new sv(I,ot,Gt),Gt.programs=Ut.programs,_.capabilities=wt,_.extensions=ot,_.properties=bt,_.renderLists=St,_.shadowMap=Rt,_.state=ft,_.info=Gt}vt();const $=new YM(_,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(U,H,!1))},this.getSize=function(A){return A.set(U,H)},this.setSize=function(A,k,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,H=k,e.width=Math.floor(A*D),e.height=Math.floor(k*D),W===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(U*D,H*D).floor()},this.setDrawingBufferSize=function(A,k,W){U=A,H=k,D=W,e.width=Math.floor(A*W),e.height=Math.floor(k*W),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,k,W,X){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,k,W,X),ft.viewport(C.copy(st).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,k,W,X){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,k,W,X),ft.scissor(N.copy(gt).multiplyScalar(D).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){ft.setScissorTest(At=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,k=!0,W=!0){let X=0;if(A){let B=!1;if(v!==null){const ut=v.texture.format;B=ut===Uc||ut===Dc||ut===Ic}if(B){const ut=v.texture.type,_t=ut===pi||ut===as||ut===Pr||ut===Ws||ut===Cc||ut===Pc,Ot=Vt.getClearColor(),Ft=Vt.getClearAlpha(),Xt=Ot.r,Jt=Ot.g,kt=Ot.b;_t?(g[0]=Xt,g[1]=Jt,g[2]=kt,g[3]=Ft,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Xt,x[1]=Jt,x[2]=kt,x[3]=Ft,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),se.dispose(),bt.dispose(),w.dispose(),G.dispose(),j.dispose(),ye.dispose(),F.dispose(),Ut.dispose(),$.dispose(),$.removeEventListener("sessionstart",Zc),$.removeEventListener("sessionend",Jc),Bi.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=Gt.autoReset,k=Rt.enabled,W=Rt.autoUpdate,X=Rt.needsUpdate,B=Rt.type;vt(),Gt.autoReset=A,Rt.enabled=k,Rt.autoUpdate=W,Rt.needsUpdate=X,Rt.type=B}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){const k=A.target;k.removeEventListener("dispose",Zt),Ce(k)}function Ce(A){Ge(A),bt.remove(A)}function Ge(A){const k=bt.get(A).programs;k!==void 0&&(k.forEach(function(W){Ut.releaseProgram(W)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,W,X,B,ut){k===null&&(k=ee);const _t=B.isMesh&&B.matrixWorld.determinant()<0,Ot=Gf(A,k,W,X,B);ft.setMaterial(X,_t);let Ft=W.index,Xt=1;if(X.wireframe===!0){if(Ft=rt.getWireframeAttribute(W),Ft===void 0)return;Xt=2}const Jt=W.drawRange,kt=W.attributes.position;let le=Jt.start*Xt,be=(Jt.start+Jt.count)*Xt;ut!==null&&(le=Math.max(le,ut.start*Xt),be=Math.min(be,(ut.start+ut.count)*Xt)),Ft!==null?(le=Math.max(le,0),be=Math.min(be,Ft.count)):kt!=null&&(le=Math.max(le,0),be=Math.min(be,kt.count));const Se=be-le;if(Se<0||Se===1/0)return;ye.setup(B,X,Ot,W,Ft);let nn,ue=Ct;if(Ft!==null&&(nn=J.get(Ft),ue=re,ue.setIndex(nn)),B.isMesh)X.wireframe===!0?(ft.setLineWidth(X.wireframeLinewidth*lt()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(B.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),ft.setLineWidth(Bt*lt()),B.isLineSegments?ue.setMode(I.LINES):B.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else B.isPoints?ue.setMode(I.POINTS):B.isSprite&&ue.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ue.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ue.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,Jn=B._multiDrawCounts,de=B._multiDrawCount,wn=Ft?J.get(Ft).bytesPerElement:1,fs=bt.get(X).currentProgram.getUniforms();for(let rn=0;rn<de;rn++)fs.setValue(I,"_gl_DrawID",rn),ue.render(Bt[rn]/wn,Jn[rn])}else if(B.isInstancedMesh)ue.renderInstances(le,Se,B.count);else if(W.isInstancedBufferGeometry){const Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jn=Math.min(W.instanceCount,Bt);ue.renderInstances(le,Se,Jn)}else ue.render(le,Se)};function fe(A,k,W){A.transparent===!0&&A.side===ze&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Kr(A,k,W),A.side=Li,A.needsUpdate=!0,Kr(A,k,W),A.side=ze):Kr(A,k,W)}this.compile=function(A,k,W=null){W===null&&(W=A),m=se.get(W),m.init(k),y.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){const Ot=ut[_t];fe(Ot,W,B),X.add(Ot)}else fe(ut,W,B),X.add(ut)}),y.pop(),m=null,X},this.compileAsync=function(A,k,W=null){const X=this.compile(A,k,W);return new Promise(B=>{function ut(){if(X.forEach(function(_t){bt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){B(A);return}setTimeout(ut,10)}ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let En=null;function Zn(A){En&&En(A)}function Zc(){Bi.stop()}function Jc(){Bi.start()}const Bi=new tf;Bi.setAnimationLoop(Zn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){En=A,$.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},$.addEventListener("sessionstart",Zc),$.addEventListener("sessionend",Jc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,v),m=se.get(A,y.length),m.init(k),y.push(m),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(pt),tt=this.localClippingEnabled,Q=ct.init(this.clippingPlanes,tt),p=St.get(A,b.length),p.init(),b.push(p),$.enabled===!0&&$.isPresenting===!0){const ut=_.xr.getDepthSensingMesh();ut!==null&&So(ut,k,-1/0,_.sortObjects)}So(A,k,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(V,et),nt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,nt&&Vt.addToRenderList(p,A),this.info.render.frame++,Q===!0&&ct.beginShadows();const W=m.state.shadowsArray;Rt.render(W,A,k),Q===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,B=p.transmissive;if(m.setupLights(),k.isArrayCamera){const ut=k.cameras;if(B.length>0)for(let _t=0,Ot=ut.length;_t<Ot;_t++){const Ft=ut[_t];Qc(X,B,A,Ft)}nt&&Vt.render(A);for(let _t=0,Ot=ut.length;_t<Ot;_t++){const Ft=ut[_t];jc(p,A,Ft,Ft.viewport)}}else B.length>0&&Qc(X,B,A,k),nt&&Vt.render(A),jc(p,A,k);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(_,A,k),ye.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],Q===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function So(A,k,W,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){X&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const _t=j.update(A),Ot=A.material;Ot.visible&&p.push(A,_t,Ot,W,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const _t=j.update(A),Ot=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Dt.copy(_t.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Ot)){const Ft=_t.groups;for(let Xt=0,Jt=Ft.length;Xt<Jt;Xt++){const kt=Ft[Xt],le=Ot[kt.materialIndex];le&&le.visible&&p.push(A,_t,le,W,Dt.z,kt)}}else Ot.visible&&p.push(A,_t,Ot,W,Dt.z,null)}}const ut=A.children;for(let _t=0,Ot=ut.length;_t<Ot;_t++)So(ut[_t],k,W,X)}function jc(A,k,W,X){const B=A.opaque,ut=A.transmissive,_t=A.transparent;m.setupLightsView(W),Q===!0&&ct.setGlobalState(_.clippingPlanes,W),X&&ft.viewport(C.copy(X)),B.length>0&&$r(B,k,W),ut.length>0&&$r(ut,k,W),_t.length>0&&$r(_t,k,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Qc(A,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new On(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?li:pi,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ut=m.state.transmissionRenderTarget[X.id],_t=X.viewport||C;ut.setSize(_t.z,_t.w);const Ot=_.getRenderTarget();_.setRenderTarget(ut),_.getClearColor(z),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Vt.render(W);const Ft=_.toneMapping;_.toneMapping=Pi;const Xt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Q===!0&&ct.setGlobalState(_.clippingPlanes,X),$r(A,W,X),P.updateMultisampleRenderTarget(ut),P.updateRenderTargetMipmap(ut),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let kt=0,le=k.length;kt<le;kt++){const be=k[kt],Se=be.object,nn=be.geometry,ue=be.material,Bt=be.group;if(ue.side===ze&&Se.layers.test(X.layers)){const Jn=ue.side;ue.side=tn,ue.needsUpdate=!0,th(Se,W,X,nn,ue,Bt),ue.side=Jn,ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(P.updateMultisampleRenderTarget(ut),P.updateRenderTargetMipmap(ut))}_.setRenderTarget(Ot),_.setClearColor(z,Y),Xt!==void 0&&(X.viewport=Xt),_.toneMapping=Ft}function $r(A,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ut=A.length;B<ut;B++){const _t=A[B],Ot=_t.object,Ft=_t.geometry,Xt=X===null?_t.material:X,Jt=_t.group;Ot.layers.test(W.layers)&&th(Ot,k,W,Ft,Xt,Jt)}}function th(A,k,W,X,B,ut){A.onBeforeRender(_,k,W,X,B,ut),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(_,k,W,X,A,ut),B.transparent===!0&&B.side===ze&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,_.renderBufferDirect(W,k,X,B,A,ut),B.side=Li,B.needsUpdate=!0,_.renderBufferDirect(W,k,X,B,A,ut),B.side=ze):_.renderBufferDirect(W,k,X,B,A,ut),A.onAfterRender(_,k,W,X,B,ut)}function Kr(A,k,W){k.isScene!==!0&&(k=ee);const X=bt.get(A),B=m.state.lights,ut=m.state.shadowsArray,_t=B.state.version,Ot=Ut.getParameters(A,B.state,ut,k,W),Ft=Ut.getProgramCacheKey(Ot);let Xt=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Zt),Xt=new Map,X.programs=Xt);let Jt=Xt.get(Ft);if(Jt!==void 0){if(X.currentProgram===Jt&&X.lightsStateVersion===_t)return nh(A,Ot),Jt}else Ot.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Ot,_),Jt=Ut.acquireProgram(Ot,Ft),Xt.set(Ft,Jt),X.uniforms=Ot.uniforms;const kt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=ct.uniform),nh(A,Ot),X.needsLights=Wf(A),X.lightsStateVersion=_t,X.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Jt,X.uniformsList=null,Jt}function eh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=za.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function nh(A,k){const W=bt.get(A);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Gf(A,k,W,X,B){k.isScene!==!0&&(k=ee),P.resetTextureUnits();const ut=k.fog,_t=X.isMeshStandardMaterial?k.environment:null,Ot=v===null?_.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Ks,Ft=(X.isMeshStandardMaterial?G:w).get(X.envMap||_t),Xt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Jt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,be=!!W.morphAttributes.color;let Se=Pi;X.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Se=_.toneMapping);const nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=nn!==void 0?nn.length:0,Bt=bt.get(X),Jn=m.state.lights;if(Q===!0&&(tt===!0||A!==S)){const dn=A===S&&X.id===M;ct.setState(X,A,dn)}let de=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Jn.state.version||Bt.outputColorSpace!==Ot||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==Ft||X.fog===!0&&Bt.fog!==ut||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==Jt||Bt.morphTargets!==kt||Bt.morphNormals!==le||Bt.morphColors!==be||Bt.toneMapping!==Se||Bt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Bt.__version=X.version);let wn=Bt.currentProgram;de===!0&&(wn=Kr(X,k,B));let fs=!1,rn=!1,er=!1;const Ee=wn.getUniforms(),Hn=Bt.uniforms;if(ft.useProgram(wn.program)&&(fs=!0,rn=!0,er=!0),X.id!==M&&(M=X.id,rn=!0),fs||S!==A){ft.buffers.depth.getReversed()?(K.copy(A.projectionMatrix),Gm(K),Vm(K),Ee.setValue(I,"projectionMatrix",K)):Ee.setValue(I,"projectionMatrix",A.projectionMatrix),Ee.setValue(I,"viewMatrix",A.matrixWorldInverse);const mi=Ee.map.cameraPosition;mi!==void 0&&mi.setValue(I,Nt.setFromMatrixPosition(A.matrixWorld)),wt.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,rn=!0,er=!0)}if(B.isSkinnedMesh){Ee.setOptional(I,B,"bindMatrix"),Ee.setOptional(I,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ee.setValue(I,"boneTexture",dn.boneTexture,P))}B.isBatchedMesh&&(Ee.setOptional(I,B,"batchingTexture"),Ee.setValue(I,"batchingTexture",B._matricesTexture,P),Ee.setOptional(I,B,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",B._indirectTexture,P),Ee.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",B._colorsTexture,P));const nr=W.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&Wt.update(B,W,wn),(rn||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,Ee.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Hn.envMap.value=Ft,Hn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),rn&&(Ee.setValue(I,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&Vf(Hn,er),ut&&X.fog===!0&&xt.refreshFogUniforms(Hn,ut),xt.refreshMaterialUniforms(Hn,X,D,H,m.state.transmissionRenderTarget[A.id]),za.upload(I,eh(Bt),Hn,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(za.upload(I,eh(Bt),Hn,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(I,"center",B.center),Ee.setValue(I,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(I,"normalMatrix",B.normalMatrix),Ee.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const dn=X.uniformsGroups;for(let mi=0,gi=dn.length;mi<gi;mi++){const ih=dn[mi];F.update(ih,wn),F.bind(ih,wn)}}return wn}function Vf(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Wf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,k,W){bt.get(A.texture).__webglTexture=k,bt.get(A.depthTexture).__webglTexture=W;const X=bt.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const W=bt.get(A);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,W=0){v=A,E=k,T=W;let X=!0,B=null,ut=!1,_t=!1;if(A){const Ft=bt.get(A);if(Ft.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ft.__hasExternalTextures)P.rebindTextures(A,bt.get(A.texture).__webglTexture,bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&bt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(_t=!0);const Jt=bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?B=Jt[k][W]:B=Jt[k],ut=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?B=bt.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?B=Jt[W]:B=Jt,C.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else C.copy(st).multiplyScalar(D).floor(),N.copy(gt).multiplyScalar(D).floor(),O=At;if(ft.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&ft.drawBuffers(A,B),ft.viewport(C),ft.scissor(N),ft.setScissorTest(O),ut){const Ft=bt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,W)}else if(_t){const Ft=bt.get(A.texture),Xt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,W||0,Xt)}M=-1},this.readRenderTargetPixels=function(A,k,W,X,B,ut,_t){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Ot=Ot[_t]),Ot){ft.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Ft=A.texture,Xt=Ft.format,Jt=Ft.type;if(!wt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&W>=0&&W<=A.height-B&&I.readPixels(k,W,X,B,Qt.convert(Xt),Qt.convert(Jt),ut)}finally{const Ft=v!==null?bt.get(v).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,k,W,X,B,ut,_t){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Ot=Ot[_t]),Ot){const Ft=A.texture,Xt=Ft.format,Jt=Ft.type;if(!wt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-X&&W>=0&&W<=A.height-B){ft.bindFramebuffer(I.FRAMEBUFFER,Ot);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,ut.byteLength,I.STREAM_READ),I.readPixels(k,W,X,B,Qt.convert(Xt),Qt.convert(Jt),0);const le=v!==null?bt.get(v).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,le);const be=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hm(I,be,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ut),I.deleteBuffer(kt),I.deleteSync(be),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,W=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(A.image.width*X),ut=Math.floor(A.image.height*X),_t=k!==null?k.x:0,Ot=k!==null?k.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,_t,Ot,B,ut),ft.unbindTexture()},this.copyTextureToTexture=function(A,k,W=null,X=null,B=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let ut,_t,Ot,Ft,Xt,Jt,kt,le,be;const Se=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(ut=W.max.x-W.min.x,_t=W.max.y-W.min.y,Ot=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Xt=W.min.y,Jt=W.isBox3?W.min.z:0):(ut=Se.width,_t=Se.height,Ot=Se.depth||1,Ft=0,Xt=0,Jt=0),X!==null?(kt=X.x,le=X.y,be=X.z):(kt=0,le=0,be=0);const nn=Qt.convert(k.format),ue=Qt.convert(k.type);let Bt;k.isData3DTexture?(P.setTexture3D(k,0),Bt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Bt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Jn=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),fs=I.getParameter(I.UNPACK_SKIP_ROWS),rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt);const er=A.isDataArrayTexture||A.isData3DTexture,Ee=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Hn=bt.get(A),nr=bt.get(k),dn=bt.get(Hn.__renderTarget),mi=bt.get(nr.__renderTarget);ft.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Ot;gi++)er&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,B,Jt+gi),A.isDepthTexture?(Ee&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,B,be+gi),I.blitFramebuffer(Ft,Xt,ut,_t,kt,le,ut,_t,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ee?I.copyTexSubImage3D(Bt,B,kt,le,be+gi,Ft,Xt,ut,_t):I.copyTexSubImage2D(Bt,B,kt,le,be+gi,Ft,Xt,ut,_t);ft.bindFramebuffer(I.READ_FRAMEBUFFER,null),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ee?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Bt,B,kt,le,be,ut,_t,Ot,nn,ue,Se.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Bt,B,kt,le,be,ut,_t,Ot,nn,Se.data):I.texSubImage3D(Bt,B,kt,le,be,ut,_t,Ot,nn,ue,Se):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,kt,le,ut,_t,nn,ue,Se.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,kt,le,Se.width,Se.height,nn,Se.data):I.texSubImage2D(I.TEXTURE_2D,B,kt,le,ut,_t,nn,ue,Se);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,fs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),B===0&&k.generateMipmaps&&I.generateMipmap(Bt),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,k,W=null,X=null,B=0){return A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,W,X,B)},this.initRenderTarget=function(A){bt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){E=0,T=0,v=null,ft.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class uo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new uo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $a extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new L;class Ka{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ka(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dc extends Fi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rs;const or=new L,Cs=new L,Ps=new L,Ls=new Z,lr=new Z,of=new oe,xa=new L,cr=new L,va=new L,uu=new Z,al=new Z,du=new Z;class fu extends Pe{constructor(t=new dc){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jM(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Ka(n,3,0,!1)),Rs.setAttribute("uv",new Ka(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ma(xa.set(-.5,-.5,0),Ps,a,Cs,s,r),Ma(cr.set(.5,-.5,0),Ps,a,Cs,s,r),Ma(va.set(.5,.5,0),Ps,a,Cs,s,r),uu.set(0,0),al.set(1,0),du.set(1,1);let o=t.ray.intersectTriangle(xa,cr,va,!1,or);if(o===null&&(Ma(cr.set(-.5,.5,0),Ps,a,Cs,s,r),al.set(0,1),o=t.ray.intersectTriangle(xa,va,cr,!1,or),o===null))return;const l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:gn.getInterpolation(or,xa,cr,va,uu,al,du,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ma(i,t,e,n,s,r){Ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*Ls.x-s*Ls.y,lr.y=s*Ls.x+r*Ls.y):lr.copy(Ls),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(of)}class QM extends $e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hn,h=hn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Is=new oe,mu=new oe,_a=[],gu=new Ni,t_=new oe,hr=new ht,ur=new Oi;class lf extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),gu.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(gu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),ur.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),mu.multiplyMatrices(n,Is),hr.matrixWorld=mu,hr.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){const l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new QM(new Float32Array(s*this.count),s,this.count,Lc,Kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bc extends Fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Za=new L,Ja=new L,xu=new oe,dr=new lo,ya=new Oi,ol=new L,vu=new L;class cf extends Pe{constructor(t=new _e,e=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Za.fromBufferAttribute(e,s-1),Ja.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Za.distanceTo(Ja);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;xu.copy(s).invert(),dr.copy(t.ray).applyMatrix4(xu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){const m=h.getX(x),b=h.getX(x+1),y=ba(this,t,dr,l,m,b);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(f),m=ba(this,t,dr,l,x,p);m&&e.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){const m=ba(this,t,dr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=ba(this,t,dr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ba(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),e.distanceSqToSegment(Za,Ja,ol,vu)>n)return;ol.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ol);if(!(l<t.near||l>t.far))return{distance:l,point:vu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Mu=new L,_u=new L;class e_ extends cf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),_u.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mu.distanceTo(_u);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hf extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yu=new oe,fc=new lo,Sa=new Oi,Ea=new L;class n_ extends Pe{constructor(t=new _e,e=new hf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;yu.copy(s).invert(),fc.copy(t.ray).applyMatrix4(yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const p=c.getX(g);Ea.fromBufferAttribute(u,p),bu(Ea,p,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Ea.fromBufferAttribute(u,g),bu(Ea,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bu(i,t,e,n,s,r,a){const o=fc.distanceSqToPoint(i);if(o<e){const l=new L;fc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zc extends $e{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Z:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,l=new oe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hc extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Z){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class i_ extends Hc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const wa=new L,ll=new Gc,cl=new Gc,hl=new Gc;class s_ extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),c=wa);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ll.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),cl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),cl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ll.calc(l),cl.calc(l),hl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Su(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function r_(i,t){const e=1-i;return e*e*t}function a_(i,t){return 2*(1-i)*i*t}function o_(i,t){return i*i*t}function br(i,t,e,n){return r_(i,t)+a_(i,e)+o_(i,n)}function l_(i,t){const e=1-i;return e*e*e*t}function c_(i,t){const e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return l_(i,t)+c_(i,e)+h_(i,n)+u_(i,s)}class uf extends zn{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,s.x,r.x,a.x,o.x),Sr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class d_ extends zn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,s.x,r.x,a.x,o.x),Sr(t,s.y,r.y,a.y,o.y),Sr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends zn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends zn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(br(t,s.x,r.x,a.x),br(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends zn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(br(t,s.x,r.x,a.x),br(t,s.y,r.y,a.y),br(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Su(o,l.x,c.x,h.x,u.x),Su(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this}}var ja=Object.freeze({__proto__:null,ArcCurve:i_,CatmullRomCurve3:s_,CubicBezierCurve:uf,CubicBezierCurve3:d_,EllipseCurve:Hc,LineCurve:df,LineCurve3:f_,QuadraticBezierCurve:ff,QuadraticBezierCurve3:pf,SplineCurve:mf});class p_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ja[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ja[s.type]().fromJSON(s))}return this}}class Ir extends p_{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new df(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ff(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new uf(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Hc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ns extends _e{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new Z,f=new L,g=new L,x=new L;let p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=e;b++){const y=n+b*h*s,_=Math.sin(y),R=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*_,u.y=t[E].y,u.z=t[E].x*R,a.push(u.x,u.y,u.z),d.x=b/e,d.y=E/(t.length-1),o.push(d.x,d.y);const T=l[3*E+0]*_,v=l[3*E+1],M=l[3*E+0]*R;c.push(T,v,M)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const _=y+b*t.length,R=_,E=_+t.length,T=_+t.length+1,v=_+1;r.push(R,E,v),r.push(T,v,E)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.points,t.segments,t.phiStart,t.phiLength)}}class Vr extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],p=n/2;let m=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function b(){const _=new L,R=new L;let E=0;const T=(e-t)/n;for(let v=0;v<=r;v++){const M=[],S=v/r,C=S*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,z=O*l+o,Y=Math.sin(z),U=Math.cos(z);R.x=C*Y,R.y=-S*n+p,R.z=C*U,u.push(R.x,R.y,R.z),_.set(Y,T,U).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-S),M.push(g++)}x.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){const S=x[M][v],C=x[M+1][v],N=x[M+1][v+1],O=x[M][v+1];(t>0||M!==0)&&(h.push(S,C,O),E+=3),(e>0||M!==r-1)&&(h.push(C,N,O),E+=3)}c.addGroup(m,E,0),m+=E}function y(_){const R=g,E=new Z,T=new L;let v=0;const M=_===!0?t:e,S=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const z=N/s*l+o,Y=Math.cos(z),U=Math.sin(z);T.x=M*U,T.y=p*S,T.z=M*Y,u.push(T.x,T.y,T.z),d.push(0,S,0),E.x=Y*.5+.5,E.y=U*.5*S+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const O=R+N,z=C+N;_===!0?h.push(z,z+1,O):h.push(z+1,z,O),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ys extends zt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ys(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class js extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new L,_=new L,R=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],_),f(e[E+2],R),l(y,_,R,b)}function l(b,y,_,R){const E=R+1,T=[];for(let v=0;v<=E;v++){T[v]=[];const M=b.clone().lerp(_,v/E),S=y.clone().lerp(_,v/E),C=E-v;for(let N=0;N<=C;N++)N===0&&v===E?T[v][N]=M:T[v][N]=M.clone().lerp(S,N/C)}for(let v=0;v<E;v++)for(let M=0;M<2*(E-v)-1;M++){const S=Math.floor(M/2);M%2===0?(d(T[v][S+1]),d(T[v+1][S]),d(T[v][S])):(d(T[v][S+1]),d(T[v+1][S+1]),d(T[v+1][S]))}}function c(b){const y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(b),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const b=new L;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const _=p(b)/2/Math.PI+.5,R=m(b)/Math.PI+.5;a.push(_,1-R)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const y=a[b+0],_=a[b+2],R=a[b+4],E=Math.max(y,_,R),T=Math.min(y,_,R);E>.9&&T<.1&&(y<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){const _=b*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const b=new L,y=new L,_=new L,R=new L,E=new Z,T=new Z,v=new Z;for(let M=0,S=0;M<r.length;M+=9,S+=6){b.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),E.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),v.set(a[S+4],a[S+5]),R.copy(b).add(y).add(_).divideScalar(3);const C=p(R);x(E,S+0,b,C),x(T,S+2,y,C),x(v,S+4,_,C)}}function x(b,y,_,R){R<0&&b.x===1&&(a[y]=b.x-1),_.x===0&&_.z===0&&(a[y]=R/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.vertices,t.indices,t.radius,t.details)}}class fo extends js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fo(t.radius,t.detail)}}class un extends Ir{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}}const m_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=gf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=__(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Dr(r,a,e,o,l,f,0),a}};function gf(i,t,e,n,s){let r,a;if(s===L_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Eu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Eu(r,i[r],i[r+1],a);return a&&po(a,a.next)&&(Nr(a),a=a.next),a}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(po(e,e.next)||Re(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&w_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?x_(i,n,s,r):g_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=v_(os(i),t,e),Dr(i,t,e,n,s,r,2)):a===2&&M_(i,t,e,n,s,r):Dr(os(i),t,e,n,s,r,1);break}}}function g_(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Os(s,o,r,l,a,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Re(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=pc(f,g,t,e,n),b=pc(x,p,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Os(o,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Os(o,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Os(o,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Os(o,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!po(s,r)&&xf(s,n,n.next,r)&&Ur(s,r)&&Ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Nr(n),Nr(n.next),n=i=r),n=n.next}while(n!==i);return os(n)}function M_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&R_(a,o)){let l=vf(a,o);a=os(a,a.next),l=os(l,l.next),Dr(a,t,e,n,s,r,0),Dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function __(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=gf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(A_(c));for(s.sort(y_),r=0;r<s.length;r++)e=b_(s[r],e);return e}function y_(i,t){return i.x-t.x}function b_(i,t){const e=S_(i,t);if(!e)return t;const n=vf(e,i);return os(n,n.next),os(e,e.next)}function S_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Os(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ur(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&E_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function E_(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function w_(i,t,e,n){let s=i;do s.z===0&&(s.z=pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,T_(s)}function T_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function A_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Os(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function R_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!C_(i,t)&&(Ur(i,t)&&Ur(t,i)&&P_(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||po(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function po(i,t){return i.x===t.x&&i.y===t.y}function xf(i,t,e,n){const s=Aa(Re(i,t,e)),r=Aa(Re(i,t,n)),a=Aa(Re(e,n,i)),o=Aa(Re(e,n,t));return!!(s!==r&&a!==o||s===0&&Ta(i,e,t)||r===0&&Ta(i,n,t)||a===0&&Ta(e,i,n)||o===0&&Ta(e,t,n))}function Ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Aa(i){return i>0?1:i<0?-1:0}function C_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ur(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function P_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vf(i,t){const e=new mc(i.i,i.x,i.y),n=new mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eu(i,t,e,n){const s=new mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Er{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Er.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wu(t),Tu(n,t);let a=t.length;e.forEach(wu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tu(n,e[l]);const o=m_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function wu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qs extends _e{constructor(t=new un([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:I_;let y,_=!1,R,E,T,v;m&&(y=m.getSpacedPoints(h),_=!0,d=!1,R=m.computeFrenetFrames(h,!1),E=new L,T=new L,v=new L),d||(p=0,f=0,g=0,x=0);const M=o.extractPoints(c);let S=M.shape;const C=M.holes;if(!Er.isClockWise(S)){S=S.reverse();for(let nt=0,lt=C.length;nt<lt;nt++){const I=C[nt];Er.isClockWise(I)&&(C[nt]=I.reverse())}}const O=Er.triangulateShape(S,C),z=S;for(let nt=0,lt=C.length;nt<lt;nt++){const I=C[nt];S=S.concat(I)}function Y(nt,lt,I){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(lt,I)}const U=S.length,H=O.length;function D(nt,lt,I){let It,ot,wt;const ft=nt.x-lt.x,Gt=nt.y-lt.y,bt=I.x-nt.x,P=I.y-nt.y,w=ft*ft+Gt*Gt,G=ft*P-Gt*bt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(w),rt=Math.sqrt(bt*bt+P*P),j=lt.x-Gt/J,Ut=lt.y+ft/J,xt=I.x-P/rt,St=I.y+bt/rt,se=((xt-j)*P-(St-Ut)*bt)/(ft*P-Gt*bt);It=j+ft*se-nt.x,ot=Ut+Gt*se-nt.y;const ct=It*It+ot*ot;if(ct<=2)return new Z(It,ot);wt=Math.sqrt(ct/2)}else{let J=!1;ft>Number.EPSILON?bt>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?bt<-Number.EPSILON&&(J=!0):Math.sign(Gt)===Math.sign(P)&&(J=!0),J?(It=-Gt,ot=ft,wt=Math.sqrt(w)):(It=ft,ot=Gt,wt=Math.sqrt(w/2))}return new Z(It/wt,ot/wt)}const V=[];for(let nt=0,lt=z.length,I=lt-1,It=nt+1;nt<lt;nt++,I++,It++)I===lt&&(I=0),It===lt&&(It=0),V[nt]=D(z[nt],z[I],z[It]);const et=[];let st,gt=V.concat();for(let nt=0,lt=C.length;nt<lt;nt++){const I=C[nt];st=[];for(let It=0,ot=I.length,wt=ot-1,ft=It+1;It<ot;It++,wt++,ft++)wt===ot&&(wt=0),ft===ot&&(ft=0),st[It]=D(I[It],I[wt],I[ft]);et.push(st),gt=gt.concat(st)}for(let nt=0;nt<p;nt++){const lt=nt/p,I=f*Math.cos(lt*Math.PI/2),It=g*Math.sin(lt*Math.PI/2)+x;for(let ot=0,wt=z.length;ot<wt;ot++){const ft=Y(z[ot],V[ot],It);K(ft.x,ft.y,-I)}for(let ot=0,wt=C.length;ot<wt;ot++){const ft=C[ot];st=et[ot];for(let Gt=0,bt=ft.length;Gt<bt;Gt++){const P=Y(ft[Gt],st[Gt],It);K(P.x,P.y,-I)}}}const At=g+x;for(let nt=0;nt<U;nt++){const lt=d?Y(S[nt],gt[nt],At):S[nt];_?(T.copy(R.normals[0]).multiplyScalar(lt.x),E.copy(R.binormals[0]).multiplyScalar(lt.y),v.copy(y[0]).add(T).add(E),K(v.x,v.y,v.z)):K(lt.x,lt.y,0)}for(let nt=1;nt<=h;nt++)for(let lt=0;lt<U;lt++){const I=d?Y(S[lt],gt[lt],At):S[lt];_?(T.copy(R.normals[nt]).multiplyScalar(I.x),E.copy(R.binormals[nt]).multiplyScalar(I.y),v.copy(y[nt]).add(T).add(E),K(v.x,v.y,v.z)):K(I.x,I.y,u/h*nt)}for(let nt=p-1;nt>=0;nt--){const lt=nt/p,I=f*Math.cos(lt*Math.PI/2),It=g*Math.sin(lt*Math.PI/2)+x;for(let ot=0,wt=z.length;ot<wt;ot++){const ft=Y(z[ot],V[ot],It);K(ft.x,ft.y,u+I)}for(let ot=0,wt=C.length;ot<wt;ot++){const ft=C[ot];st=et[ot];for(let Gt=0,bt=ft.length;Gt<bt;Gt++){const P=Y(ft[Gt],st[Gt],It);_?K(P.x,P.y+y[h-1].y,y[h-1].x+I):K(P.x,P.y,u+I)}}}q(),Q();function q(){const nt=s.length/3;if(d){let lt=0,I=U*lt;for(let It=0;It<H;It++){const ot=O[It];pt(ot[2]+I,ot[1]+I,ot[0]+I)}lt=h+p*2,I=U*lt;for(let It=0;It<H;It++){const ot=O[It];pt(ot[0]+I,ot[1]+I,ot[2]+I)}}else{for(let lt=0;lt<H;lt++){const I=O[lt];pt(I[2],I[1],I[0])}for(let lt=0;lt<H;lt++){const I=O[lt];pt(I[0]+U*h,I[1]+U*h,I[2]+U*h)}}n.addGroup(nt,s.length/3-nt,0)}function Q(){const nt=s.length/3;let lt=0;tt(z,lt),lt+=z.length;for(let I=0,It=C.length;I<It;I++){const ot=C[I];tt(ot,lt),lt+=ot.length}n.addGroup(nt,s.length/3-nt,1)}function tt(nt,lt){let I=nt.length;for(;--I>=0;){const It=I;let ot=I-1;ot<0&&(ot=nt.length-1);for(let wt=0,ft=h+p*2;wt<ft;wt++){const Gt=U*wt,bt=U*(wt+1),P=lt+It+Gt,w=lt+ot+Gt,G=lt+ot+bt,J=lt+It+bt;Nt(P,w,G,J)}}}function K(nt,lt,I){l.push(nt),l.push(lt),l.push(I)}function pt(nt,lt,I){Dt(nt),Dt(lt),Dt(I);const It=s.length/3,ot=b.generateTopUV(n,s,It-3,It-2,It-1);ee(ot[0]),ee(ot[1]),ee(ot[2])}function Nt(nt,lt,I,It){Dt(nt),Dt(lt),Dt(It),Dt(lt),Dt(I),Dt(It);const ot=s.length/3,wt=b.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);ee(wt[0]),ee(wt[1]),ee(wt[3]),ee(wt[1]),ee(wt[2]),ee(wt[3])}function Dt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ee(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return D_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ja[s.type]().fromJSON(s)),new Qs(n,t.options)}}const I_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-g),new Z(x,1-m)]:[new Z(o,1-l),new Z(h,1-u),new Z(f,1-g),new Z(p,1-m)]}};function D_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mo extends js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mo(t.radius,t.detail)}}class us extends js{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new us(t.radius,t.detail)}}class go extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new L,g=new Z;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const b=m+p,y=b,_=b+n+1,R=b+n+2,E=b+1;o.push(y,_,E),o.push(_,R,E)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Or extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const b=[],y=m/n;let _=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(E+_,1-y),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const y=h[m][b+1],_=h[m][b],R=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&f.push(y,_,E),(m!==n-1||l<Math.PI)&&f.push(_,R,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xo extends js{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xo(t.radius,t.detail)}}class he extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,p,b),a.push(p,m,b)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vc extends _e{constructor(t=new pf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new Z;let h=new L;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),b(),m()}function p(y){h=t.getPointAt(y/e,h);const _=a.normals[y],R=a.binormals[y];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,v=Math.sin(T),M=-Math.cos(T);l.x=M*_.x+v*R.x,l.y=M*_.y+v*R.y,l.z=M*_.z+v*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const R=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),T=(s+1)*y+_,v=(s+1)*(y-1)+_;g.push(R,E,v),g.push(E,T,v)}}function b(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vc(new ja[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class U_ extends Qe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class me extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class N_ extends me{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Wc extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mf extends Wc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ul=new oe,Au=new L,Ru=new L;class _f{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cu=new oe,fr=new L,dl=new L;class O_ extends _f{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),dl.copy(n.position),dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dl),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu)}}class $s extends Wc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class F_ extends _f{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends Wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class k_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pu(){return performance.now()}const Lu=new oe;class B_{constructor(t,e,n=0,s=1/0){this.ray=new lo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(t,e=!0,n=[]){return xc(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xc(t[s],this,n,e);return n.sort(Iu),n}}function Iu(i,t){return i.distance-t.distance}function xc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)xc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);class yf extends $a{constructor(){super();const t=new ne;t.deleteAttribute("uv");const e=new me({side:tn}),n=new me,s=new $s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ht(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new ht(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ht(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new ht(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ht(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new ht(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ht(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new ht(t,Ds(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ht(t,Ds(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new ht(t,Ds(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new ht(t,Ds(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new ht(t,Ds(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new ht(t,Ds(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ds(i){const t=new Te;return t.color.setScalar(i),t}const bf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const z_=new Fc(-1,1,1,-1,0,1);class H_ extends _e{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const G_=new H_;class Xc{constructor(t){this._mesh=new ht(G_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,z_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class V_ extends tr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Lr.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Du extends tr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class W_ extends tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Sf{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V_(bf),this.copyPass.material.blending=oi,this.clock=new k_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(a instanceof Du?n=!0:a instanceof W_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const X_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ef extends tr{constructor(){super();const t=X_;this.uniforms=Lr.clone(t.uniforms),this.material=new U_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ld?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Id&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wf extends tr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const q_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ls extends tr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new On(r,a,{type:li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new On(r,a,{type:li});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new On(r,a,{type:li});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=q_;this.highPassUniforms=Lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bf;this.copyUniforms=Lr.clone(h.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new Xc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ls.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ls.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ls.BlurDirectionX=new Z(1,0);ls.BlurDirectionY=new Z(0,1);const yn=i=>Math.min(1,Math.max(0,i)),rs=i=>1-Math.pow(1-yn(i),3),Lt=(i,t)=>i+Math.random()*(t-i),De=Math.PI*2,Bn=(i,t=1.5,e=1381916)=>new me({color:e,emissive:i,emissiveIntensity:t,roughness:.3,metalness:.6,flatShading:!0}),Tf=()=>new me({color:2303534,roughness:.35,metalness:.9,flatShading:!0}),Wr=(i,t,e=.18,n=.25)=>rs(i/e)*yn((t-i)/n),Xr=(i,t,e)=>{let n=i*t;for(;n>0;)(n>=1||Math.random()<n)&&e(),n-=1};function Y_(i){const t=new Tt,e=new Tt,n=Bn(16734751,2),s=Bn(16761466,2.4),r=[];for(let o=0;o<10;o++){const l=new Tt;l.rotation.y=o/10*De;const c=new ht(new Ys(.42,o%2?3.4:2.4,3),o%2?n:s);c.geometry.translate(0,(o%2?3.4:2.4)/2,0),c.position.set(1.25,.4,0),c.rotation.z=-(o%2?.95:.5),c.castShadow=!0,l.add(c),e.add(l),r.push(c)}const a=[];for(let o=0;o<7;o++){const l=new ht(new fo(Lt(.22,.42),0),n);l.castShadow=!0,t.add(l),a.push({m:l,r:Lt(2.6,4.2),h:Lt(.8,3.2),sp:Lt(2.5,4.5)*(o%2?1:-1),ph:Lt(0,De)})}return t.add(e),{group:t,dur:i,follow:!0,update(o,l,c){const h=Wr(o,i,.22,.35);e.rotation.y=o*3.6,e.scale.setScalar(Math.max(.001,h)),r.forEach((u,d)=>u.scale.y=.8+.3*Math.sin(o*14+d*1.9));for(const u of a){const d=u.ph+o*u.sp;u.m.position.set(Math.cos(d)*u.r*h,u.h+Math.sin(o*5+u.ph)*.4,Math.sin(d)*u.r*h),u.m.rotation.set(o*6,o*4+u.ph,0),u.m.scale.setScalar(Math.max(.001,h))}Xr(90*h,l,()=>{const u=Lt(0,De),d=Lt(.8,2.6);c(Math.cos(u)*d,Lt(.4,2),Math.sin(u)*d,-Math.sin(u)*5,Lt(9,20),Math.cos(u)*5,Lt(.35,.8),Math.random()<.3?16769184:16738848)})}}}function $_(i,t){const e=new Tt,n=new me({color:13628671,emissive:5228799,emissiveIntensity:.75,roughness:.12,metalness:.3,flatShading:!0}),s=[],r=(a,o,l,c,h,u)=>{for(let d=0;d<a;d++){const f=d/a*De+o,g=l*(.7+.6*(d*7%5)/4),x=new ht(new zt(0,c,g,5),n);x.geometry.translate(0,g/2,0);const p=Math.cos(f)*o,m=Math.sin(f)*o;x.position.set(p,t(p,m)-.1,m),x.rotation.set(Math.sin(f)*h,d,-Math.cos(f)*h),x.castShadow=!0,e.add(x),s.push({m:x,delay:u,x:p,z:m,done:!1})}};return r(7,2.1,4.4,.6,.28,0),r(11,4.3,3.1,.52,.5,.07),r(15,6.3,2.1,.44,.75,.14),{group:e,dur:i,follow:!1,update(a,o,l){const c=yn((i-a)/.35);for(const h of s){const u=rs((a-h.delay)/.1),d=1+.3*yn(1-(a-h.delay)/.28);if(h.m.scale.set(Math.max(.001,u*c),Math.max(.001,u*d*c),Math.max(.001,u*c)),!h.done&&a>=h.delay){h.done=!0;for(let f=0;f<5;f++){const g=Lt(0,De);l(h.x,h.m.position.y+.4,h.z,Math.cos(g)*Lt(2,8),Lt(5,13),Math.sin(g)*Lt(2,8),Lt(.4,.8),f%2?16777215:9429247)}}}}}}function K_(i){const t=new Tt,e=new Tt;t.add(e);const n=[],s=Tf(),r=Bn(16773226,2.6);for(let g=0;g<4;g++){const x=g/4*De,p=new Tt;p.position.set(Math.cos(x)*3.7,0,Math.sin(x)*3.7);const m=new ht(new zt(.12,.34,3.6,6),s);m.position.y=1.8,m.castShadow=!0;const b=new ht(new us(.42),r);b.position.y=3.9;const y=new ht(new zt(.3,.3,.16,6),r);y.position.y=2.6,p.add(m,b,y),e.add(p),n.push(new L(p.position.x,3.9,p.position.z))}const a=8,o=7,l=new Float32Array(a*o*6),c=new _e;c.setAttribute("position",new Ae(l,3));const h=new e_(c,new Bc({color:16776144,transparent:!0,blending:Be,depthWrite:!1}));h.frustumCulled=!1,e.add(h);const u=new L(0,1.3,0),d=new L,f=new L;return{group:t,dur:i,follow:!0,update(g,x,p){const m=Wr(g,i,.16,.25);e.rotation.y=g*2.2,e.scale.set(1,Math.max(.001,m),1);let b=0;for(let y=0;y<a;y++){const _=y<4?u:n[y%4],R=y<4?n[y]:n[(y+1)%4],E=Math.random()<.7;d.copy(_);for(let T=1;T<=o;T++)f.copy(_).lerp(R,T/o),T<o&&f.add(new L(Lt(-.45,.45),Lt(-.45,.45),Lt(-.45,.45))),E?l.set([d.x,d.y,d.z,f.x,f.y,f.z],b):l.fill(0,b,b+6),b+=6,d.copy(f)}c.attributes.position.needsUpdate=!0,Xr(40*m,x,()=>{const y=n[Math.floor(Math.random()*4)].clone().applyAxisAngle(new L(0,1,0),e.rotation.y);p(y.x,y.y,y.z,Lt(-7,7),Lt(-2,8),Lt(-7,7),Lt(.15,.4),16774816)})}}}function Z_(i){const t=new Tt,e=Bn(10354640,1.2,2766128),n=[];for(let r=0;r<16;r++){const a=new ht(new xo(Lt(.16,.36),0),e);a.castShadow=!0,t.add(a),n.push({m:a,h:Lt(.4,7),ph:Lt(0,De)})}const s=r=>.7+r/7.5*(r/7.5)*4.4;return{group:t,dur:i,follow:!0,update(r,a,o){const l=Wr(r,i,.3,.2),c=1-.35*yn(r/i);for(const h of n){const u=(h.h+r*3.2)%7.2+.3,d=s(u)*c*l,f=h.ph+r*(13-u);h.m.position.set(Math.cos(f)*d,u*l,Math.sin(f)*d),h.m.rotation.set(r*9+h.ph,r*7,0),h.m.scale.setScalar(Math.max(.001,l))}Xr(260*l,a,()=>{const h=Lt(.2,7.5),u=s(h)*c,d=Lt(0,De),f=13+(7.5-h)*1.6;o(Math.cos(d)*u,h,Math.sin(d)*u,-Math.sin(d)*f,Lt(1,4),Math.cos(d)*f,Lt(.12,.3),Math.random()<.3?16777215:9431232)})}}}function J_(i,t){const n=new Tt,s=new Te({color:16757850,transparent:!0,blending:Be,depthWrite:!1}),r=Bn(14251066,.35,4866104),a=[],o=[],l=9;for(let c=0;c<l;c++){const h=c/l*De+.3,u=5.5+c*5%4*.6,d=new Tt;d.rotation.y=-h,n.add(d);for(let f=0;f<2;f++){const g=new ht(new ne(u/2,.06,.22-f*.08),s);g.geometry.translate(u/4,0,0);const x=f*u/2+u/4;g.position.set(f*(u/2)*.97,t(Math.cos(h)*x,Math.sin(h)*x)+.12,f*.25),g.rotation.y=f?c%2?.3:-.3:c%2?-.1:.1,d.add(g),a.push(g)}for(let f=0;f<2;f++){const g=2.6+f*2.6+c%3*.3,x=2.8-f*.9+c%2*.6,p=new ht(new zt(.25,.8,x,5),r);p.geometry.translate(0,x/2,0);const m=h+.22,b=Math.cos(m)*g,y=Math.sin(m)*g;p.rotation.set(Math.sin(m)*.4,c,-Math.cos(m)*.4),p.castShadow=!0,n.add(p),o.push({m:p,x:b,z:y,y:t(b,y),h:x,delay:.03+f*.07,done:!1})}}return{group:n,dur:1.7,follow:!1,update(c,h,u){s.opacity=yn((1.7-c)/.6);const d=rs(c/.16);a.forEach(f=>f.scale.set(Math.max(.001,d),1,1+1.5*yn(1-c/.5)));for(const f of o){const g=rs((c-f.delay)/.09),x=yn((c-1)/.7);if(f.m.position.set(f.x,f.y-f.h*(1-g)-f.h*x-.05,f.z),!f.done&&c>=f.delay){f.done=!0;for(let p=0;p<6;p++)u(f.x,f.y+.3,f.z,Lt(-5,5),Lt(6,15),Lt(-5,5),Lt(.4,.9),p%3?14263386:16763008)}}}}}function j_(i){const e=new Tt,n=new Tt;n.position.y=2.6,e.add(n);const s=[1.7,2.7,3.7],r=10,a=6,o=new lf(new ne(.07,.5,.07),Bn(12946431,1.8,2761267),s.length*r*a),l=new oe,c=new hs,h=new L(0,1,0),u=new L;let d=0;for(const x of s)for(let p=0;p<r;p++){const m=p/r*De+x;for(let b=0;b<a;b++){const y=.45+b/(a-1)*(Math.PI-.9),_=Math.sin(y),R=Math.cos(y),E=x*_*_*_,T=x*_*_*R,v=3*x*_*_*R,M=x*(2*_*R*R-_*_*_);u.set(v*Math.cos(m),M,v*Math.sin(m)).normalize(),c.setFromUnitVectors(h,u),l.compose(new L(E*Math.cos(m),T,E*Math.sin(m)),c,new L(1,1,1)),o.setMatrixAt(d++,l)}}n.add(o);const f=Bn(16777215,2);for(const x of[1.5,-1.5]){const p=new ht(new us(.5),f);p.position.y=x,n.add(p)}let g=!1;return{group:e,dur:1.25,follow:!0,update(x,p,m){const b=yn(x/.7),y=rs((x-.7)/.3);if(n.scale.setScalar(Math.max(.001,(2.3-1.6*rs(b)+y*2.8)*rs(x/.1)*yn((1.25-x)/.2))),n.rotation.y=x*(2+b*9),!g&&x>=.7){g=!0;for(let _=0;_<70;_++){const R=Lt(0,De),E=Lt(9,24);m(Math.cos(R),Lt(.5,3),Math.sin(R),Math.cos(R)*E,Lt(0,7),Math.sin(R)*E,Lt(.25,.55),_%3?12946431:16777215)}}}}}function Q_(i){const e=new Tt,n=new Tt,s=Bn(16732120,2.4),r=Bn(16766708,3),a=new ht(new us(1,0),r);a.scale.set(.34,4.6,.34),a.castShadow=!0,n.add(a);for(let l=0;l<4;l++){const c=new ht(new Ys(.5,2.2,3),s);c.position.set(Math.cos(l/4*De)*.5,2.6,Math.sin(l/4*De)*.5),c.rotation.set(Math.sin(l/4*De)*.5,0,-Math.cos(l/4*De)*.5),n.add(c)}n.rotation.z=.12,e.add(n);let o=!1;return{group:e,dur:1.3,follow:!1,update(l,c,h){const u=yn(l/.12);if(n.position.y=26-22.5*u*u,n.rotation.y=l*3,n.scale.setScalar(Math.max(.001,yn((1.3-l)/.3))),!o&&u>=1){o=!0;for(let d=0;d<90;d++){const f=Lt(0,De),g=Lt(5,26);h(0,.4,0,Math.cos(f)*g,Lt(2,16),Math.sin(f)*g,Lt(.3,.7),d%3?16736224:16777215)}}Xr(o?30:400,c,()=>h(Lt(-.3,.3),n.position.y+Lt(0,6),Lt(-.3,.3),Lt(-2,2),o?Lt(3,9):Lt(20,40),Lt(-2,2),Lt(.15,.4),16747240))}}}function ty(i){const t=new Tt,e=new ht(new mo(1.15,2),new Te({color:0}));e.position.y=2.8,t.add(e);const n=46,s=new lf(new fo(.2,0),Bn(6978559,1.3,1842732),n);s.castShadow=!0,t.add(s);const r=Array.from({length:n},()=>({ph:Lt(0,De),off:Math.random(),tilt:Lt(-.35,.35),size:Lt(.5,1.7)})),a=new oe,o=new hs,l=new kn;return{group:t,dur:i,follow:!0,update(c,h,u){const d=Wr(c,i,.35,.18);e.scale.setScalar(Math.max(.001,d*(1+.05*Math.sin(c*24)))),r.forEach((f,g)=>{const x=(f.off+c*.55)%1,p=1.3+(1-x)*(1-x)*5.2,m=f.ph+c*2+9/(.5+p);l.set(c*5+f.ph,c*3,0),o.setFromEuler(l);const b=Math.max(.001,d*f.size*(.4+.6*(1-x)));a.compose(new L(Math.cos(m)*p,2.8+Math.sin(m)*p*f.tilt,Math.sin(m)*p),o,new L(b,b,b)),s.setMatrixAt(g,a)}),s.instanceMatrix.needsUpdate=!0,Xr(150*d,h,()=>{const f=Lt(0,De),g=Lt(5,10),x=Lt(12,22);u(Math.cos(f)*g,Lt(.2,5.5),Math.sin(f)*g,-Math.cos(f)*x-Math.sin(f)*6,Lt(-1,3),-Math.sin(f)*x+Math.cos(f)*6,g/x,Math.random()<.25?16777215:8359167)})}}}function ey(i){const t=new Tt,e=Bn(5242848,1.8),n=Tf(),s=20,r=[];for(let o=0;o<s;o++){const l=o/s*De,c=new ht(new ne(.24,1,.24),o%2?e:n);c.geometry.translate(0,.5,0),c.position.set(Math.cos(l)*2.9,.15,Math.sin(l)*2.9),c.rotation.y=-l,c.castShadow=!0,t.add(c),r.push(c)}let a=-1;return{group:t,dur:i,follow:!0,update(o,l,c){const h=Wr(o,i,.2,.3),u=o%.6/.6,d=Math.pow(1-u,2);r.forEach((g,x)=>g.scale.set(1,Math.max(.001,h*(.5+4.2*d*(.35+.65*Math.abs(Math.sin(x*Math.PI*3/s+Math.floor(o/.6)))))),1)),t.rotation.y=Math.floor(o/.6)*.31;const f=Math.floor(o/.6);if(f!==a){a=f;for(let g=0;g<80;g++){const x=Lt(0,De),p=Lt(10,22);c(Math.cos(x)*3,.2,Math.sin(x)*3,Math.cos(x)*p,Lt(.5,3.5),Math.sin(x)*p,Lt(.2,.4),g%4?5242848:16777215)}}}}}function ny(i,t){const e=Ue[i].super.dur;switch(i){case"thermal":return Y_(e);case"cryo":return $_(e,t);case"volt":return K_(e);case"gale":return Z_(e);case"quake":return J_(e,t);case"mag":return j_();case"plasma":return Q_();case"gravity":return ty(e);case"resonance":return ey(e)}}function Qa(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Uu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const g=Uu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Uu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ae(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const is=Math.PI*2;function Ra(i,t=200){const e=new un;for(let n=0;n<=t;n++){const s=n/t*is,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function qi(i,t,e,n){const s=new Ir;s.absarc(t,e,n,0,is,!0),i.holes.push(s)}function iy(i,t,e,n,s){const r=new Ir,a=n/2/e,o=6;for(let l=0;l<=o;l++){const c=t-a+l/o*a*2,h=Math.cos(c)*(e+s/2),u=Math.sin(c)*(e+s/2);l===0?r.moveTo(h,u):r.lineTo(h,u)}for(let l=o;l>=0;l--){const c=t-a+l/o*a*2;r.lineTo(Math.cos(c)*(e-s/2),Math.sin(c)*(e-s/2))}r.closePath(),i.holes.push(r)}function Ca(i,t,e,n,s){const r=new Qs(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:20});r.rotateX(-Math.PI/2),r.translate(0,e,0);const a=new ht(r,n);return a.position.y=s,a.castShadow=!0,a.receiveShadow=!0,a}function Nu(i){let t=0,e=-1;const n=is/i.fold;for(let s=0;s<40;s++){const r=s/40*n,a=_r(i,r);a>e+1e-6&&(e=a,t=r)}return t}function sy(i,t){const e=new Tt,n=i.radius,[s,r,a]=i.layers,o=R=>n*_r(s,R),l=R=>Math.max(.5*n,Math.min(o(R)*.9,n*.9*_r(r,R))),c=.44*n,h=Ra(o);if(qi(h,0,0,.36*n),e.add(Ca(h,.12,.03,t.metal,0)),i.lights>=2){const R=Ra(E=>Math.min(o(E)*.96,l(E)+.035*n));qi(R,0,0,c),e.add(Ca(R,.025,0,t.glow,.155))}const u=Ra(l);qi(u,0,0,c);const d=Math.min(12,Math.max(r.fold,3)),f=Nu(r);for(let R=0;R<d&&i.windows>0;R++){const E=f+R/d*is,T=l(E)-c;if(T<.2*n)continue;const v=c+T*.5;if(i.windows===1)qi(u,Math.cos(E)*v,Math.sin(E)*v,Math.min(.1*n,T*.26));else if(i.windows===2){const M=Math.min(.055*n,T*.16);qi(u,Math.cos(E)*(c+T*.32),Math.sin(E)*(c+T*.32),M),qi(u,Math.cos(E)*(c+T*.68),Math.sin(E)*(c+T*.68),M)}else iy(u,E,v,Math.min(.32*n,is/d*v*.55),Math.min(.07*n,T*.25))}e.add(Ca(u,.07,.02,i.swap?t.metal:t.paint,.18));let g=.295;if(a){const E=Ra(T=>Math.max(.47*n,Math.min(l(T)*.86,n*.72*_r(a,T))));qi(E,0,0,c),e.add(Ca(E,.05,.015,i.swap?t.paint:i.crownMetal?t.metal:t.dark,.275)),g=.36}const x=Math.min(14,s.fold),p=Nu(s),m=[];for(let R=0;R<x;R++){const E=p+R/x*is,T=l(E);if(i.lights===1){const v=new zt(.035*n,.035*n,.03,8),M=Math.max(c+.08,T-.1*n);v.translate(Math.cos(E)*M,.29,-Math.sin(E)*M),m.push(v)}else if(i.lights!==2){const v=Math.min(.26*n,T-.5*n);if(v<.08)continue;const M=new ne(v,.02,.04*n);M.rotateY(E);const S=T-v/2-.05*n;M.translate(Math.cos(E)*S,.285,-Math.sin(E)*S),m.push(M)}}if(m.length){const R=new ht(Qa(m),t.glow);e.add(R)}const b=[],y=Math.max(4,Math.min(8,s.fold));for(let R=0;R<y;R++){const E=(R+.5)/y*is,T=new zt(.032*n,.032*n,.05,6);T.translate(Math.cos(E)*.4*n,g-.06,-Math.sin(E)*.4*n),b.push(T)}const _=new ht(Qa(b),t.metal);return _.castShadow=!0,e.add(_),e}const Mn=Math.PI*2,cs=(i,t,e)=>new ne(i,t,e);function Me(i,t,e=0,n=0,s=0){const r=new ht(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function wr(i,t,e=.02){const n=new Qs(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:10});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function ry(i,t,e,n){const s=new un;return s.absarc(0,0,t,e,n,!1),s.absarc(0,0,i,n,e,!0),s.closePath(),s}function vo(i){return new me({color:1182472,emissive:i,emissiveIntensity:1,roughness:.45,flatShading:!0})}function ay(i,t){const e=new Tt,n=vo(t);e.add(Me(new zt(1.08,1,.2,40),i.dark,0,.1,0)),e.add(Me(new zt(.46,.5,.5,20),n,0,.42,0));for(let l=0;l<10;l++){const c=l/10*Mn;e.add(Me(cs(.06,.62,.06),i.metal,Math.cos(c)*.55,.45,Math.sin(c)*.55))}const s=[];for(let l=0;l<6;l++){const c=l/6*Mn,h=Me(cs(.34,.72,.7),i.paint,Math.cos(c)*.9,.5,-Math.sin(c)*.9);h.rotation.y=c,h.rotation.z=-.22,s.push(h),e.add(h)}const r=new Tt;for(let l=0;l<3;l++){const c=l/3*Mn+.5,h=new Tt;h.add(Me(new zt(.1,.13,.9,10),i.dark,0,.45,0),Me(new zt(.15,.1,.1,10),n,0,.93,0)),h.position.set(Math.cos(c)*.5,.45,Math.sin(c)*.5),r.add(h)}e.add(r);const a=new un;for(let l=0;l<=160;l++){const c=l/160*Mn,h=.86+.16*(Math.abs(Math.sin(c*5))>.55?1:0);l===0?a.moveTo(Math.cos(c)*h,Math.sin(c)*h):a.lineTo(Math.cos(c)*h,Math.sin(c)*h)}const o=Me(wr(a,.16),i.metal,0,.28,0);return o.visible=!1,e.add(o),e.userData.anim=l=>{r.scale.y=1+.7*l.rear,r.rotation.y=.2*Math.sin(l.t*2),n.emissiveIntensity=.7+.5*Math.sin(l.t*5)+.9*l.rear+.3*l.stage,o.visible=l.stage>=1,o.rotation.y=l.t*(1.5+l.stage),s.forEach((c,h)=>c.position.y=.5+l.rear*.12*Math.sin(h*1.7+l.t*30))},e}function oy(i,t){const e=new Tt,n=vo(t),s=new un;for(let d=0;d<6;d++){const f=d/6*Mn;d===0?s.moveTo(Math.cos(f)*1.05,Math.sin(f)*1.05):s.lineTo(Math.cos(f)*1.05,Math.sin(f)*1.05)}s.closePath(),e.add(Me(wr(s,.2,.03),i.dark,0,0,0));for(let d=0;d<4;d++){const f=d/4*Mn+.78,g=new Tt;g.add(Me(new zt(.09,.12,.7,10),i.metal,0,.35,0),Me(new zt(.1,.1,.05,10),n,0,.72,0)),g.position.set(Math.cos(f)*.78,.15,Math.sin(f)*.78),e.add(g)}const r=new Tt,a=new Tt,o=new un;o.moveTo(-.55,-.62),o.lineTo(.95,-.14),o.lineTo(1.25,0),o.lineTo(.95,.14),o.lineTo(-.55,.62),o.closePath();const l=Me(wr(o,.5,.03),i.paint,0,.2,0);l.rotation.y=0;const c=Me(wr(o,.08,.02),i.paint,0,.7,0);c.scale.set(.8,1,.55);const h=Me(cs(1.5,.06,.09),n,.25,.8,0),u=Me(cs(.34,.4,.3),i.metal,1.12,.4,0);a.add(l,c,h,u),r.add(a);for(const d of[-.36,.36]){const f=Me(new zt(.07,.07,1.2,10),i.metal,0,.45,d);f.rotation.z=Math.PI/2,f.position.x=.1,r.add(f)}return e.add(r),e.userData.anim=d=>{r.rotation.y=d.aim,a.position.x=-.38*d.rear+.22*d.act,n.emissiveIntensity=.8+1*d.rear+.6*d.act+.3*d.stage,a.rotation.z=.05*Math.sin(d.t*60)*d.rear},e}function ly(i,t){const e=new Tt,n=vo(t);e.add(Me(new zt(.95,1,.16,36),i.dark,0,.08,0)),e.add(Me(new zt(.3,.42,.7,20),i.metal,0,.5,0)),e.add(Me(new Or(.3,16,10,0,Mn,0,Math.PI/2),n,0,.85,0));const s=[];for(let l=0;l<8;l++){const c=l/8*Mn,h=Me(cs(.5,.05,.26),i.paint,Math.cos(c)*.66,.5,-Math.sin(c)*.66);h.rotation.set(0,c,.5),s.push(h),e.add(h)}const r=[];for(let l=0;l<3;l++){const c=l/3*Mn+.4,h=new Tt;h.add(Me(cs(.8,.07,.1),i.metal,.4,0,0),Me(new Or(.17,12,8),i.dark,.85,0,0)),h.rotation.y=c,h.position.y=.22,r.push(h),e.add(h)}const a=new Tt,o=new Tt;return a.add(Me(new he(.92,.07,8,36,Math.PI),i.metal)),o.add(Me(new he(.76,.07,8,36,Math.PI),n)),a.position.y=.5,o.position.y=.5,e.add(a,o),e.userData.anim=l=>{const c=1+l.rear*4+l.stage*.8;a.rotation.set(0,l.t*1.6*c,0),o.rotation.set(0,-l.t*2.3*c,Math.PI/2),a.rotation.x=.3*Math.sin(l.t*1.3),r.forEach(h=>h.scale.x=1-.45*l.rear),n.emissiveIntensity=.8+.4*Math.sin(l.t*6)+1*l.rear+.3*l.stage,s.forEach((h,u)=>h.rotation.x=.35*Math.sin(l.t*9+u)*l.rear)},e}function cy(i,t){const e=new Tt,n=vo(t);e.add(Me(new zt(.28,.4,1.05,18),i.metal,0,.52,0));for(const a of[.3,.62,.92])e.add(Me(new zt(.31,.31,.06,18),n,0,a,0));const s=[];for(let a=0;a<6;a++){const o=a/6*Mn+.26,l=Me(cs(.78,.1,.12),i.metal,Math.cos(o)*.62,.3,-Math.sin(o)*.62);l.rotation.y=o,s.push(l),e.add(l)}const r=[];for(let a=0;a<6;a++){const o=a/6*Mn+.05,l=(a+1)/6*Mn-.05,c=Me(wr(ry(.9,1.15,o,l),.42,.03),i.paint,0,.1,0);c.rotation.x=0,c.userData.mid=(o+l)/2,r.push(c),e.add(c)}return e.userData.anim=a=>{r.forEach(o=>{const l=o.userData.mid,c=.16*a.rear+.04*Math.sin(a.t*3+l);o.position.set(Math.cos(l)*c,.1,-Math.sin(l)*c)}),s.forEach((o,l)=>{o.rotation.z=a.stage>=2?.12*Math.sin(a.t*7+l*2):0}),n.emissiveIntensity=.8+.5*Math.sin(a.t*4)+1*a.rear+.3*a.stage},e}function hy(i,t,e){return i==="warden"?ay(t,e):i==="piledriver"?oy(t,e):i==="gyre"?ly(t,e):cy(t,e)}const sn=Math.PI*2,Ou=i=>i-Math.floor(i),vc={steel:{name:"Steel",color:12173516,rough:.24},chrome:{name:"Chrome",color:16054010,rough:.06},gunmetal:{name:"Gunmetal",color:4014674,rough:.34},gold:{name:"Gold",color:14854973,rough:.2},copper:{name:"Copper",color:13201727,rough:.26}};function Af(i){const t=vc[i.metal]??vc.steel;return{metal:new me({color:t.color,metalness:1,roughness:t.rough}),paint:new N_({color:i.paint,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.08}),glow:new me({color:789776,emissive:i.glow,emissiveIntensity:1,roughness:.4}),rubber:new me({color:1381914,metalness:0,roughness:.92}),dark:new me({color:1645346,metalness:.7,roughness:.42})}}function Sn(i,t=220){const e=new un;for(let n=0;n<=t;n++){const s=n/t*sn,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function _n(i,t,e,n){const s=new Ir;s.absarc(t,e,n,0,sn,!0),i.holes.push(s)}function He(i,t,e){const n=new Qs(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:28});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function Ln(i,t=72){return new ns(i.map(([e,n])=>new Z(e,n)),t)}function dt(i,t,e=0){const n=new ht(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function bn(i,t,e,n,s,r=0){const a=[];for(let o=0;o<t;o++){const l=r+o/t*sn,c=i();c.rotateY(l),c.translate(Math.cos(l)*e,n,-Math.sin(l)*e),a.push(c)}return dt(Qa(a),s)}const Fu={talon:i=>.6+.4*Math.pow(1-Ou(i*3/sn),1.8),bastion:i=>.94+.06*Math.cos(6*i),ripsaw:i=>.84+.16*(1-Ou(i*8/sn)),halo:i=>.7+.3*Math.pow(Math.abs(Math.cos(i)),5)},uy={talon:3,bastion:6,ripsaw:8,halo:2},dy={talon:1,bastion:1.05,ripsaw:1,halo:1.02},ku=.25,fy=-.85;function Mc(i,t){for(const e of i)e.pivot.rotation.y=e.base+ku+(fy-ku)*t}function py(i){const t=new Tt,e=c=>.52+.1*Math.pow(Math.max(0,Math.cos(3*c)),2),n=Sn(e);_n(n,0,0,.36),t.add(dt(He(n,.12,.03),i.metal));const s=Sn(c=>e(c)*.9);_n(s,0,0,.4),t.add(dt(He(s,.05,.02),i.paint,.18));const r=dt(new he(.455,.014,8,96),i.glow,.272);r.rotation.x=Math.PI/2,t.add(r);const a=new un;for(const[c,[h,u]]of[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]].entries())c===0?a.moveTo(h,u):a.lineTo(h,u);const o=new un;for(const[c,[h,u]]of[[.04,-.06],[.28,-.11],[.54,-.06],[.64,.01],[.3,.05],[.04,.05]].entries())c===0?o.moveTo(h,u):o.lineTo(h,u);const l=[];for(let c=0;c<3;c++){const h=c/3*sn,u=new Tt;u.position.set(Math.cos(h)*.56,.05,-Math.sin(h)*.56),u.add(dt(He(a,.1,.025),i.metal)),u.add(dt(He(o,.04,.015),i.paint,.15));const d=dt(new ne(.4,.02,.03),i.glow,.225);d.position.x=.32,u.add(d),u.add(dt(new zt(.065,.065,.26,6),i.dark,.1)),u.add(dt(new zt(.035,.035,.02,12),i.glow,.24)),t.add(u),l.push({pivot:u,base:h+Math.PI/2})}return Mc(l,.5),t.userData.wings=l,t}function my(i){const t=new Tt,n=Sn(o=>.62+.06*Math.pow(Math.max(0,Math.cos(4*o)),2));_n(n,0,0,.36),t.add(dt(He(n,.12,.03),i.metal));const s=dt(new he(.5,.016,8,96),i.glow,.178);s.rotation.x=Math.PI/2,t.add(s);const r=[],a=.4*Math.PI;for(let o=0;o<4;o++){const l=o/4*sn+Math.PI/4,c=.78,h=Math.cos(l)*c,u=Math.sin(l)*c,d=new un,f=(R,E)=>[Math.cos(E)*R-h,Math.sin(E)*R-u],g=l-a/2,x=l+a/2,p=1,m=.56,b=8;for(let R=0;R<=b;R++){const[E,T]=f(p*(1-.07*Math.sin(R/b*Math.PI)),g+(x-g)*R/b);R===0?d.moveTo(E,T):d.lineTo(E,T)}for(let R=b;R>=0;R--){const[E,T]=f(m,g+.04+(x-g-.08)*R/b);d.lineTo(E,T)}const y=new Tt;y.position.set(h,.15,-u),y.add(dt(He(d,.09,.025),i.paint,0));const _=dt(new ne(.34,.02,.035),i.glow,.13);_.rotation.y=l,y.add(_);for(const R of[-1,1]){const E=dt(new zt(.035,.035,.03,8),i.dark,.13);E.position.set(Math.cos(l+R*.45)*c-h,.13,-(Math.sin(l+R*.45)*c-u)),y.add(E)}t.add(y),r.push(y)}return t.userData.plates=r,t}const gy=2.1;function Rf(i,t){for(const e of i)e.pivot.rotation.y=e.base+gy*(1-t),e.weight.position.y=.02+.03*t}function xy(i){const t=new Tt,e=Sn(a=>.5+.06*Math.pow(Math.max(0,Math.cos(3*a)),2));_n(e,0,0,.34),t.add(dt(He(e,.14,.03),i.metal));const n=Sn(()=>.44);_n(n,0,0,.38),t.add(dt(He(n,.05,.02),i.paint,.19));const s=dt(new he(.41,.013,8,64),i.glow,.265);s.rotation.x=Math.PI/2,t.add(s);const r=[];for(let a=0;a<3;a++){const o=a/3*sn,l=new Tt;l.position.set(Math.cos(o)*.5,.07,-Math.sin(o)*.5),l.add(dt(new zt(.075,.075,.2,8),i.dark,.04)),l.add(dt(new zt(.04,.04,.03,12),i.glow,.15)),l.add(dt(new ne(.34,.05,.08),i.metal,.03).translateX(.18));const c=new Tt;c.position.set(.4,.02,0);const h=dt(new zt(.13,.15,.2,6),i.metal),u=dt(new zt(.1,.13,.05,6),i.paint,.125),d=dt(new zt(.152,.152,.03,6),i.glow,-.02);c.add(h,u,d),l.add(c),t.add(l),r.push({pivot:l,base:o,weight:c})}return Rf(r,1),t.userData.arms=r,t}function vy(i,t){const e=Fn(i).gen;if(e)return sy(e,t);if(i==="shifter")return py(t);if(i==="breakaway")return my(t);if(i==="flail")return xy(t);const n=new Tt,s=Fu[i]??Fu.talon,r=uy[i]??3,a=dy[i]??1,o=g=>a*Math.max(.52,s(g)*.86-.02),l=Sn(g=>a*s(g));_n(l,0,0,.36*a),n.add(dt(He(l,.12,.03),t.metal));const c=Sn(o);_n(c,0,0,.44*a);const h=Math.max(r,4);for(let g=0;g<h;g++){const x=(g+.22)/h*sn,m=o(x)-.44*a;if(m<.2*a)continue;const b=.44*a+m*.5;_n(c,Math.cos(x)*b,Math.sin(x)*b,Math.min(.1*a,m*.26))}n.add(dt(He(c,.06,.02),t.paint,.18));const u=.285,d=dt(new he(.47*a,.016,8,96),t.glow,u);d.rotation.x=Math.PI/2,n.add(d);const f=[];for(let g=0;g<r;g++){const x=(g+.1)/r*sn,p=o(x),m=Math.min(.26*a,p-.5*a);if(m<.08)continue;const b=new ne(m,.02,.04*a);b.rotateY(x);const y=p-m/2-.05*a;b.translate(Math.cos(x)*y,u,-Math.sin(x)*y),f.push(b)}return f.length&&n.add(dt(Qa(f),t.glow)),n.add(bn(()=>new zt(.035*a,.035*a,.05,6),h,.4*a,.2,t.metal,.6/h)),n}function My(i,t){const e=new Tt;if(i==="flywheel"){const n=Sn(()=>.72,96);_n(n,0,0,.2);for(let a=0;a<6;a++){const o=a/6*sn;_n(n,Math.cos(o)*.45,Math.sin(o)*.45,.13)}e.add(dt(He(n,.06,.02),t.dark));const s=dt(new he(.7,.085,18,96),t.metal,.1);s.rotation.x=Math.PI/2;const r=dt(new he(.7,.014,8,96),t.glow,.187);r.rotation.x=Math.PI/2,e.add(s,r,dt(new zt(.26,.28,.16,48),t.metal,.08))}else if(i==="anvil")e.add(dt(Ln([[0,0],[.5,0],[.72,.04],[.75,.08],[.75,.19],[.7,.23],[.3,.23],[0,.23]]),t.metal)),e.add(bn(()=>new ne(.035,.11,.05),40,.755,.135,t.dark)),e.add(dt(Ln([[.42,.231],[.6,.231],[.6,.245],[.42,.245]]),t.paint));else if(i==="feather"){const n=Sn(()=>.66,96);_n(n,0,0,.18);for(let r=0;r<8;r++){const a=r/8*sn;_n(n,Math.cos(a)*.44,Math.sin(a)*.44,.1)}e.add(dt(He(n,.05,.015),t.paint,.05));const s=dt(new he(.67,.03,10,96),t.metal,.09);s.rotation.x=Math.PI/2,e.add(s,dt(new zt(.22,.24,.16,40),t.metal,.08))}else e.add(dt(Ln([[0,0],[.3,0],[.4,.04],[.42,.1],[.64,.12],[.7,.14],[.7,.19],[.64,.21],[.44,.2],[.38,.23],[0,.23]]),t.metal)),e.add(dt(Ln([[.47,.207],[.61,.212],[.61,.225],[.47,.22]]),t.paint)),e.add(bn(()=>new zt(.03,.03,.04,6),6,.67,.2,t.dark));return e}function _y(i,t){const e=new Tt,n=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];if(i==="needle"){e.add(dt(Ln([[0,0],[.025,.02],[.1,.24],[.2,.3],...n]),t.metal));const s=dt(new he(.215,.022,10,64),t.paint,.345);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="flatline"){e.add(dt(Ln([[0,0],[.2,0],[.25,.04],[.25,.18],[.17,.24],[.2,.3]]),t.paint)),e.add(dt(Ln(n),t.metal));const s=dt(new he(.255,.012,8,64),t.glow,.11);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="gripper"){e.add(dt(Ln([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),e.add(bn(()=>new ne(.03,.13,.035),18,.272,.13,t.dark)),e.add(dt(Ln(n),t.metal));const s=dt(new he(.225,.014,8,64),t.glow,.34);s.rotation.x=Math.PI/2,e.add(s)}else{const s=dt(new Or(.13,32,20),new me({color:16054010,metalness:1,roughness:.05}),.13);e.add(s),e.add(dt(Ln([[.11,.14],[.19,.17],[.22,.26],[.2,.3]]),t.paint)),e.add(dt(Ln(n),t.metal))}return e}const qc=(i,t)=>e=>{const n=sn/i,s=Math.cos(Math.PI/i)/Math.cos((e%n+n)%n-n/2);return s+(1-s)*t};function yy(i){const t=new un;return t.moveTo(-i,-i*.9),t.lineTo(0,-i*.35),t.lineTo(i,-i*.9),t.lineTo(i,-i*.35),t.lineTo(0,i*.25),t.lineTo(-i,-i*.35),t.closePath(),He(t,.012,0)}function by(i){const t=new Tt;t.add(dt(new zt(.33,.33,.2,48),i.metal,.1));const e=qc(8,.1);t.add(dt(He(Sn(s=>.38*e(s),180),.16,.03),i.paint,.2));const n=.422;for(const s of[-.1,.1]){const r=dt(new ne(.075,.03,.3),i.glow,n+.01);r.position.x=s,t.add(r)}return t.add(bn(()=>new ne(.2,.26,.05),4,.38,.22,i.metal,Math.PI/4)),t.add(bn(()=>new zt(.03,.03,.04,6),8,.3,n,i.metal)),t}class Sy extends zn{constructor(){super()}getPoint(t,e=new L){const n=t*sn*3.5,s=.22-.03*Math.sin(t*Math.PI);return e.set(Math.cos(n)*s,t*.36,Math.sin(n)*s)}}function Ey(i){const t=new Tt;t.add(dt(new zt(.33,.33,.2,48),i.metal,.1));const e=qc(5,.2);t.add(dt(He(Sn(s=>.36*e(s),180),.1,.03),i.paint,.2));const n=.35;return t.add(dt(new Vc(new Sy,120,.034,8,!1),i.metal,n)),t.add(dt(new zt(.2,.2,.03,24),i.glow,n+.37)),t}function wy(i,t){if(i==="anchor")return by(t);if(i==="coil")return Ey(t);const e=new Tt,n=i==="surge"?3:i==="lockjaw"?4:i==="rampart"?6:24,s=i==="surge"?.4:i==="viper"?.29:.35,r=i==="surge"?.42:i==="lockjaw"?.3:.12,a=i==="surge"||i==="viper";e.add(dt(new zt(.33,.33,.2,48),t.metal,.1));const o=qc(n,r),l=Sn(h=>s*o(h),180);e.add(dt(He(l,.16,.03),t.paint,.2));const c=.422;if(a)for(const h of[.02,-.1]){const u=dt(yy(s*.36),t.glow,c);u.position.z=h,e.add(u)}else{const h=dt(new he(s*.42,.022,8,48),t.glow,c+.01);h.rotation.x=Math.PI/2,e.add(h,dt(new zt(s*.16,s*.16,.02,6),t.glow,c+.005))}return i==="lockjaw"?e.add(bn(()=>new ne(.16,.2,.12),4,s*.95,.3,t.metal,Math.PI/4)):i==="viper"?e.add(bn(()=>new ne(.14,.05,.03),3,s*1.05,.3,t.metal)):e.add(bn(()=>new zt(.03,.03,.04,6),n,s*.72,c,t.metal,Math.PI/n)),e}function Ty(i,t){const e=new Tt,n=s=>{const r=new un;return s.forEach(([a,o],l)=>l?r.lineTo(a,o):r.moveTo(a,o)),dt(He(r,.03,0),t)};if(i==="thermal")e.add(n([[-.3,-.2],[-.17,.1],[-.04,-.2]]),n([[-.12,-.2],[.03,.32],[.18,-.2]]),n([[.1,-.2],[.21,.06],[.32,-.2]]));else if(i==="cryo")for(const[s,r,a]of[[0,0,.17],[-.2,.12,.11],[.2,.1,.11],[.02,-.22,.09]]){const o=dt(new zt(a,a,.05+a*.5,6),t,.04);o.position.x=s,o.position.z=r,e.add(o)}else if(i==="volt")e.add(n([[.06,.32],[-.2,-.02],[-.03,-.02],[-.1,-.32],[.2,.06],[.03,.06]]));else if(i==="gale")for(const[s,r]of[[.12,0],[.21,.9],[.3,1.8]]){const a=dt(new he(s,.028,6,24,2.4),t,.02);a.rotation.set(Math.PI/2,0,r),e.add(a)}else if(i==="quake")for(const[s,r]of[[-.06,.18],[.08,0],[-.04,-.18]]){const a=dt(new ne(.48,.04,.11),t,.02);a.position.x=s,a.position.z=r,e.add(a)}else if(i==="plasma"){const s=dt(new he(.16,.03,6,24),t,.03);s.rotation.x=Math.PI/2;const r=dt(new ne(.72,.04,.05),t,.03);r.rotation.y=.6,e.add(s,r)}else if(i==="gravity")for(const[s,r]of[[.3,.05],[.2,.03],[.1,.01]]){const a=dt(new he(s,.022,6,28),t,r);a.rotation.x=Math.PI/2,e.add(a)}else if(i==="resonance")[.1,.22,.34,.22,.1,.22,.34].forEach((s,r)=>{const a=dt(new ne(.06,.04,s*1.6),t,.02);a.position.x=-.3+r*.1,e.add(a)});else{const s=dt(new he(.2,.055,8,24,Math.PI),t,.03);s.rotation.x=-Math.PI/2,e.add(s);for(const r of[-.2,.2]){const a=dt(new ne(.11,.06,.2),t,.03);a.position.set(r,.03,.1),e.add(a)}}return e}function Ay(i){const t=new Tt,e=io(i).elements,n=new me({color:1645346,metalness:.8,roughness:.35});return t.add(dt(new zt(.52,.58,.12,6),n,.06)),e.forEach((s,r)=>{const a=new me({color:789776,emissive:Ue[s].color,emissiveIntensity:1.3}),o=dt(new he(.47,.02,6,48,Math.PI*2/e.length),a,.125);o.rotation.set(Math.PI/2,0,r*Math.PI*2/e.length);const l=Ty(s,a);l.position.y=.125,e.length>1&&(l.scale.setScalar(.6),l.position.x=r?.2:-.2),t.add(o,l)}),t}function Ry(i,t){const e=new Tt,n=dt(new ne(.34,.95,.28),t.paint,-.55),s=dt(new ne(.36,.5,.2),t.rubber,-.6),r=dt(new zt(.46,.46,.3,48),t.metal,.1),a=dt(new zt(.3,.34,.08,6),t.dark,.29),o=dt(new he(.465,.014,8,64),t.glow,.1);if(o.rotation.x=Math.PI/2,e.add(n,s,r,a,o),e.add(bn(()=>new zt(.05,.05,.22,12),3,.2,-.12,t.metal)),i==="string"){const l=dt(new zt(.012,.012,.9,6),t.dark);l.rotation.z=Math.PI/2,l.position.set(.9,.1,0);const c=dt(new he(.13,.03,10,32),t.glow);c.position.set(1.45,.1,0),e.add(l,c)}else if(i==="winder"){const l=dt(new ne(.6,.05,.1),t.metal,.36);l.position.x=.25;const c=dt(new zt(.07,.07,.2,16),t.paint,.48);c.position.x=.5,e.add(l,c)}else if(i==="geared")for(const[l,c]of[[.52,.24],[.86,.16]]){const h=dt(new zt(c,c,.08,14),t.dark,.1);h.position.x=l,e.add(h,bn(()=>new ne(.05,.08,.05),14,c,.1,t.metal).translateX(l))}else{const l=dt(new ne(1.5,.03,.09),t.dark,.1);l.position.x=.4;const c=dt(new ne(.1,.16,.34),t.glow,.1);c.position.x=1.2,e.add(l,c,bn(()=>new ne(.03,.035,.09),1,0,0,t.metal))}return e}const Fr=["tip","disc","blade","core"],kr={tip:0,disc:.46,blade:.64,core:.7},Cy={tip:0,disc:.85,blade:1.55,core:2.35};function Cf(i,t,e){return i==="blade"?vy(t,e):i==="disc"?My(t,e):i==="tip"?_y(t,e):wy(t,e)}function Pf(i){const t=Af(i),e=new Tt,n={};for(const a of Fr){const o=a==="blade"&&i.blade.startsWith("boss_")?hy(i.blade.slice(5),t,i.glow):Cf(a,i[a],t);o.position.y=kr[a],n[a]=o,e.add(o)}const s=n.blade.userData.wings??[];Mc(s,0);const r=n.blade.userData.arms??[];return{root:e,parts:n,mats:t,shift:a=>Mc(s,a),flail:a=>Rf(r,a),boss:n.blade.userData.anim??null}}function Bu(i){i.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const pn=2.4;let ge=zs.radius;const $t=i=>pn*Math.min(i/ge,1)**2,ii=(i,t)=>$t(Math.min(ge,Math.hypot(i,t))),Yi=18,wi=14;function Py(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.4,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[n,s]of[[128,5],[5,128]]){const r=n>s?t.createLinearGradient(0,0,128,0):t.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-n/2,64-s/2,n,s)}return new zc(i)}function zu(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new zc(i)}function Ly(){const i=document.createElement("canvas");i.width=32,i.height=8;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,32,0);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.65,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,8),new zc(i)}const Si=new Ht;class Iy{mesh;pts=[];pos=new Float32Array(Yi*2*3);col=new Float32Array(Yi*2*3);color;constructor(t){this.color=new Ht(t);const e=new _e;e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("color",new Ae(this.col,3));const n=[];for(let s=0;s<Yi-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}e.setIndex(n),this.mesh=new ht(e,new Te({vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1,side:ze})),this.mesh.frustumCulled=!1}reset(){this.pts.length=0}update(t,e,n){t?this.pts.unshift(t.clone()):this.pts.length&&this.pts.pop(),this.pts.length>Yi&&(this.pts.length=Yi);const s=this.pts.length;for(let r=0;r<Yi;r++){const a=Math.min(r,s-1),o=r*6;if(s<2){this.pos.fill(0,o,o+6),this.col.fill(0,o,o+6);continue}const l=this.pts[a],c=this.pts[Math.max(0,a-1)],h=this.pts[Math.min(s-1,a+1)];let u=c.x-h.x,d=c.z-h.z;const f=Math.hypot(u,d)||1;u/=f,d/=f;const g=1-r/Yi,x=n*g;this.pos[o]=l.x-d*x,this.pos[o+1]=l.y,this.pos[o+2]=l.z+u*x,this.pos[o+3]=l.x+d*x,this.pos[o+4]=l.y,this.pos[o+5]=l.z-u*x;const p=r<s?g*g*e:0;for(let m=0;m<2;m++)this.col[o+m*3]=this.color.r*p,this.col[o+m*3+1]=this.color.g*p,this.col[o+m*3+2]=this.color.b*p}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}class Dy{mesh;pts=[];pos=new Float32Array(wi*3*3);col=new Float32Array(wi*3*3);accent=new Ht;hotC=new Ht;constructor(t){this.accent.setHex(t),this.hotC.setHex(t).lerp(new Ht(16773328),.5);const e=new _e;e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("color",new Ae(this.col,3));const n=[];for(let s=0;s<wi-1;s++){const r=s*3;n.push(r,r+1,r+3,r+1,r+4,r+3,r+1,r+2,r+4,r+2,r+5,r+4)}e.setIndex(n),this.mesh=new ht(e,new Te({vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1,side:ze})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(){this.pts.length=0}update(t,e,n){t&&e?this.pts.unshift({a:t.clone(),b:e.clone()}):this.pts.length&&this.pts.pop(),this.pts.length>wi&&(this.pts.length=wi);const s=this.pts.length;if(this.mesh.visible=s>1,!(s<2)){for(let r=0;r<wi;r++){const a=Math.min(r,s-1),o=this.pts[a],l=a/(wi-1),c=Math.pow(1-l,.85)*(a===0?.7:1),h=(o.a.x+o.b.x)/2,u=(o.a.y+o.b.y)/2,d=(o.a.z+o.b.z)/2,f=(o.a.x-o.b.x)/2,g=(o.a.y-o.b.y)/2,x=(o.a.z-o.b.z)/2,p=r*9;this.pos[p]=h+f*c,this.pos[p+1]=u+g*c,this.pos[p+2]=d+x*c;const m=.3+.25*Math.sin(l*Math.PI);this.pos[p+3]=h+f*c*m,this.pos[p+4]=u+g*c*m+.05*c,this.pos[p+5]=d+x*c*m,this.pos[p+6]=h-f*c*.8,this.pos[p+7]=u-g*c*.8,this.pos[p+8]=d-x*c*.8;const b=r<s?c*c*n:0,y=(_,R,E)=>{this.col[p+_*3]=R.r*E*b,this.col[p+_*3+1]=R.g*E*b,this.col[p+_*3+2]=R.b*E*b};y(0,this.accent,.55),y(1,this.hotC,.8),y(2,this.accent,.08)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}}class Uy{constructor(t){this.spec=t;const e=t.radius,n=Pf(t.look);this.glowMat=n.mats.glow,this.poseShift=n.shift,this.model=n,this.parts=Fr.map(a=>n.parts[a]),n.root.scale.setScalar(t.look.scale??1),this.spinner.add(n.root),this.blur=new ht(new go(e*.32,e*1.03,56),new Te({color:t.accent,transparent:!0,opacity:.3,blending:Be,depthWrite:!1,side:ze})),this.blur.rotation.x=-Math.PI/2,this.blur.position.y=.95,this.shield=new ht(new he(e*1.3,.05,8,48),new Te({color:16777215,transparent:!0,blending:Be,depthWrite:!1})),this.shield.rotation.x=Math.PI/2,this.shield.position.y=.7,this.shield.visible=!1,this.light=new $s(t.accent,0,9,2),this.light.position.y=1.4;const s=new Map;n.parts.blade.traverse(a=>{const o=a;if(o.isMesh&&(o.material===n.mats.paint||o.material===n.mats.metal)){let l=s.get(o.material);l||(l=o.material.clone(),s.set(o.material,l),this.bladeMats.push(l)),o.material=l,l.color.getHex()===n.mats.paint.color.getHex()&&l.isMeshPhysicalMaterial&&(this.bladePaint=l)}}),this.chipPaint=n.mats.paint,this.chipMetal=n.mats.metal,this.tilt.add(this.spinner,this.blur,this.shield,this.markOut,this.markIn),this.swing=new Dy(t.accent);const r=new us(.2,0);r.scale(.8,1.5,.8);for(let a=0;a<3;a++){const o=new ht(r,this.markMat);o.visible=!1,o.castShadow=!0,this.markShards.push(o)}this.aura.visible=!1,this.squash.add(this.unyaw),this.unyaw.add(this.tilt),this.group.add(this.squash,this.light,this.aura,...this.markShards),this.group.visible=!1,this.trail=new Iy(t.accent)}group=new Tt;tilt=new Tt;spinner=new Tt;parts=[];blur;shield;light;trail;glowMat;poseShift;model;seen=!1;dropT=0;dropMax=.3;bossAct=0;bossFx=1;bossFz=0;justLanded=!1;recoilX=0;recoilZ=0;markShards=[];markMat=new me({color:16777215,emissive:16777215,emissiveIntensity:1.6,metalness:.3,roughness:.35,flatShading:!0});markOn=0;sunk=!1;flailV=1;prevAir=0;landSq=0;dig=0;braking=!1;brakeDir=[0,1];damageStage=0;seamMat=new Te({color:16742948,toneMapped:!1});scorchMat=new Te({color:328965,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});smoke=null;aura=new Tt;stage=0;flash=0;bursted=!1;y=0;yVel=0;airborne=!1;fallen=0;precess=Math.random()*6;tumble=0;seed=Math.random()*6;fx=null;vx=0;vz=0;discGone=!1;prevStun=0;stagMax=1;stagDx=0;stagDz=1;stagClock=0;toppleT=0;topL=0;topV=0;leanNow=0;bladeMats=[];bladePaint=null;chipPaint;chipMetal;swing;markOut=new Pe;markIn=new Pe;prevStrike=0;stDx=0;stDz=1;bladeExtra=0;swingTail=0;stLunge=0;swA=new L;swB=new L;hot=0;squash=new Tt;unyaw=new Tt;sqX=0;sqV=0;sqYaw=0;sqDx=0;sqDz=0;recoil(t,e,n){this.recoilX+=t*(.25+n*.55),this.recoilZ+=e*(.25+n*.55),this.sqYaw=Math.atan2(-e,t),this.sqDx=t,this.sqDz=e,this.sqV+=55+n*120,this.hot=1}partBounds(t){t.updateWorldMatrix(!0,!0);const e=new L;let n=0,s=0;return t.traverse(r=>{const a=r;if(!a.isMesh||!a.visible)return;a.geometry.computeBoundingBox();const o=a.geometry.boundingBox;for(let l=0;l<8;l++)e.set(l&1?o.max.x:o.min.x,l&2?o.max.y:o.min.y,l&4?o.max.z:o.min.z).applyMatrix4(a.matrixWorld),t.worldToLocal(e),n=Math.max(n,e.y),s=Math.max(s,Math.hypot(e.x,e.z))}),{top:n,rad:s}}seams(t,e,n,s,r){const{top:a,rad:o}=this.partBounds(t);if(!(o<.2))for(let l=0;l<e;l++){const c=n+l/e*Math.PI*2+l%2*.2,h=o*s,u=o*(s+r)*.55,d=o*r,f=c+.2*(l%2?1:-1),g=[[Math.cos(c)*h,Math.sin(c)*h],[Math.cos(f)*u,Math.sin(f)*u],[Math.cos(c+.05)*d,Math.sin(c+.05)*d]];for(let p=0;p<2;p++){const m=g[p+1][0]-g[p][0],b=g[p+1][1]-g[p][1],y=Math.hypot(m,b),_=new ht(new ne(y,.03,.045),this.seamMat);_.position.set((g[p][0]+g[p+1][0])/2,a+.018,(g[p][1]+g[p+1][1])/2),_.rotation.y=-Math.atan2(b,m),t.add(_)}const x=new ht(new Vr(o*.2,7),this.scorchMat);x.rotation.x=-Math.PI/2,x.scale.set(1.5,.8,1),x.position.set(Math.cos(f+.35)*u,a+.008,Math.sin(f+.35)*u),x.rotation.z=f,t.add(x)}}addDamage(t){for(;this.damageStage<t;)this.damageStage++,this.damageStage===1?(this.seams(this.model.parts.disc,4,this.seed,.35,.92),this.seams(this.model.parts.core,3,this.seed+1,.15,.85)):(this.seams(this.model.parts.core,4,this.seed+3,.1,.95),this.seams(this.model.parts.tip,2,this.seed+4,.2,.9))}dropPlate(t){const n=(this.model.parts.blade.userData.plates??[])[t];return!n||!n.parent?null:(this.group.updateWorldMatrix(!0,!0),n)}setStage(t){t<=this.stage||(this.stage=t,this.addDamage(t),t>=1&&this.model.parts.blade.traverse(e=>{e.isMesh&&e.material===this.bladePaint&&(e.visible=!1)}))}shed(t,e){const n=[];if(this.group.updateWorldMatrix(!0,!0),t===1){const s=[];this.model.parts.blade.traverse(r=>{const a=r;a.isMesh&&a.material===this.bladePaint&&a.visible&&s.push(a)});for(const r of s.slice(0,10)){r.updateWorldMatrix(!0,!1);const a=new ht(r.geometry,r.material);a.castShadow=!0,r.matrixWorld.decompose(a.position,a.quaternion,a.scale),e.add(a),n.push(a)}}else t===2&&!this.discGone&&(this.discGone=!0,e.attach(this.model.parts.disc),n.push(this.model.parts.disc));return n}update(t,e,n,s,r=null){if(this.flash=Math.max(0,this.flash-n*5),!t.inPlay||this.bursted){this.group.visible=!1,this.trail.update(null,0,0),this.swing.update(null,null,0);return}this.group.visible=!0,this.seen||(this.seen=!0,this.dropMax=this.spec.boss?.8:.3,this.dropT=this.dropMax);const a=t.px+(t.x-t.px)*e,o=t.py+(t.y-t.py)*e,l=Math.hypot(a,o),c=cn(t);(t.leaving||t.out==="ringout")&&l>ge-.4?(this.airborne||(this.airborne=!0,this.y=pn,this.yVel=5),this.yVel-=24*n,this.y+=this.yVel*n,this.tumble+=n*7):this.y=$t(l),this.dropT>0&&(this.dropT-=n,this.dropT<=0&&(this.justLanded=!0));const h=t.airT>0?1-t.airT/at.JUMP_T:0,u=t.airT>0?Math.sin(Math.PI*Math.max(0,(h-.1)/.9))*2.6:0;let d=1;t.airT>0&&(h<.1?d=1-.3*Math.sin(h/.1*(Math.PI/2)):h<.4?d=1+.2*(1-(h-.1)/.3):h>.85&&(d=1+.1*((h-.85)/.15))),this.prevAir>0&&t.airT<=0&&(this.landSq=1),this.prevAir=t.airT,this.landSq=Math.max(0,this.landSq-n/.24),d*=1-.32*this.landSq*Math.cos((1-this.landSq)*4.2);const f=1/Math.sqrt(d);this.sunk=t.sink>0;const g=t.sink>0?16*t.sink*t.sink:0;t.sink>0&&(this.tumble+=n*5),this.group.position.set(a,this.y+u-g+(this.dropT>0?(this.dropT/this.dropMax)**2*(this.spec.boss?24:8):0),o),this.spinner.rotation.y=-t.phase,this.poseShift(t.shift),this.spec.flail&&(this.flailV+=(Math.max(0,Math.min(1,(c-.08)/.8))-this.flailV)*(1-Math.exp(-n*7)),this.model.flail(this.flailV));const x=Math.hypot(t.vx,t.vy);this.vx=t.vx,this.vz=t.vy;const p=Math.pow(Math.max(0,(.55-c)/.55),1.4);this.precess+=n*(3+p*16);let m=.025+p*.5;const b=Math.sin(s*(26+p*22))*p*.05,y=Math.exp(-n*6);this.recoilX*=y,this.recoilZ*=y;let _=0,R=0,E=0,T=0;if(t.stunT>0&&t.stunT>this.prevStun+.01){this.stagMax=Math.max(.3,t.stunT),this.stagClock=0;const D=x>.5?Math.atan2(t.vy,t.vx):Math.random()*6.28;this.stagDx=Math.cos(D),this.stagDz=Math.sin(D)}if(this.prevStun=t.stunT,t.stunT>0){this.stagClock+=n;const D=Math.min(1,1-t.stunT/this.stagMax),V=.62*Math.exp(-D*4.5)*Math.min(1,D/.06),et=.5*Math.pow(1-D,1.4),st=this.stagClock*(17-D*7);_=this.stagDz*V+Math.sin(st)*et,R=-this.stagDx*V+Math.cos(st)*et,E=Math.sin(st*2.3)*.07*(1-D),T=Math.cos(st*1.9)*.07*(1-D)}let v=0;if(t.out==="spinout"){this.toppleT+=n;const D=1.3-m;this.topV+=((D-this.topL)*70-this.topV*7.5)*n,this.topL+=this.topV*n,this.precess+=n*(9*Math.exp(-this.toppleT*1.5)-3),m+=Math.max(0,this.topL);const V=m;v=Math.max(0,this.spec.radius*Math.sin(V)-.55*Math.cos(V))*.85;const et=38*Math.exp(-this.toppleT*1.3);if(this.fx&&Math.random()<et*n&&x<6){const st=-Math.cos(this.precess)*m,gt=Math.sin(this.precess)*m,At=Math.hypot(st,gt)||1,q=a+st/At*this.spec.radius*.95,Q=o+gt/At*this.spec.radius*.95,tt=-gt/At,K=st/At,pt=3+Math.random()*6;this.fx(q,this.y+.1,Q,tt*pt+(Math.random()-.5)*2,1+Math.random()*3,K*pt+(Math.random()-.5)*2,.2+Math.random()*.25,1,.65,.25)}}let M=0,S=0;const C=t.strikeT>0;if(C&&this.prevStrike<=0&&(this.swing.reset(),r?(this.stDx=r[0],this.stDz=r[1]):x>1?(this.stDx=t.vx/x,this.stDz=t.vy/x):(this.stDx=Math.cos(this.precess),this.stDz=Math.sin(this.precess))),this.prevStrike=t.strikeT,C){const D=1-t.strikeT/at.STRIKE_T;M=D<.3?-.4*Math.sin(D/.3*(Math.PI/2)):-.4+.9*Math.sin(Math.min(1,(D-.3)/.25)*(Math.PI/2))*(1-Math.max(0,(D-.55)/.45)*.55),S=Math.sin(D*Math.PI),this.swingTail=wi}this.bladeExtra+=n*38*S;const N=this.model.parts.blade;if(N.rotation.y=this.bladeExtra,N.scale.setScalar(1+.1*S),this.model.boss){const D=t.bossMove&&t.bossStage===0?1-t.bossT/Math.max(.01,t.bossDur):0;this.bossAct+=((t.bossMove==="charge"&&t.bossStage===1?1:0)-this.bossAct)*(1-Math.exp(-n*12)),t.bossMove?(this.bossFx=t.bossDx,this.bossFz=t.bossDy):x>1&&(this.bossFx=t.vx/x,this.bossFz=t.vy/x),this.model.boss({t:s,stage:t.stage,rear:D,act:this.bossAct,aim:-Math.atan2(this.bossFz,this.bossFx)+t.phase-this.bladeExtra,move:t.bossMove})}if(C||this.swingTail>0){const D=this.spec.radius;this.markOut.position.set(this.stDx*D*1.5,.95,this.stDz*D*1.5),this.markIn.position.set(this.stDx*D*.95,.7,this.stDz*D*.95)}this.braking=t.brakeT>0,this.dig+=((this.braking?1:0)-this.dig)*(1-Math.exp(-n*(this.braking?40:10)));let O=0;if(this.dig>.01){const D=Math.hypot(t.brakeDx,t.brakeDy);D>.1&&(this.brakeDir=[t.brakeDx/D,t.brakeDy/D]),O=.3*this.dig;const V=this.dig*.05;if(E+=Math.sin(s*91)*V,T+=Math.cos(s*83)*V,this.braking&&this.fx){const[et,st]=this.brakeDir,gt=n*110,At=Math.floor(gt)+(Math.random()<gt-Math.floor(gt)?1:0);for(let q=0;q<At;q++){const Q=5+Math.random()*9,tt=(Math.random()-.5)*.9,K=Math.cos(tt),pt=Math.sin(tt);this.fx(a+et*.25,this.y+.08,o+st*.25,(et*K-st*pt)*Q,.6+Math.random()*2.4,(et*pt+st*K)*Q,.12+Math.random()*.22,1,.7+Math.random()*.3,.3,10)}}}this.leanNow=m,this.group.position.y+=v,this.group.position.x+=E,this.group.position.z+=T,this.tilt.rotation.set(Math.sin(this.precess)*m+b+t.steerY*.3+this.recoilZ+this.tumble+_+this.stDz*M+this.brakeDir[1]*O,0,Math.cos(this.precess)*m+b*.7-t.steerX*.3-this.recoilX+this.tumble*.6+R-this.stDx*M-this.brakeDir[0]*O),this.stLunge=M>0?M:0;{const D=Math.min(1,Math.max(t.stage*.34,1-t.armour)+(t.stunT>0?.45:0));Fr.forEach((V,et)=>{if(V==="disc"&&this.discGone)return;const st=this.model.parts[V];if(D<.06||V==="tip"){st.position.set(0,kr[V],0),st.rotation.x=st.rotation.z=0;return}const gt=D*.04*(V==="core"?1.4:1),At=et*2.1+this.seed;st.position.set(Math.sin(s*47+At)*gt,kr[V]+Math.sin(s*61+At*1.3)*gt*.6,Math.sin(s*41+At*1.7)*gt),st.rotation.x=Math.sin(s*39+At)*D*.06,st.rotation.z=Math.sin(s*33+At*.7)*D*.06})}{this.sqV+=(-30*30*this.sqX-2*30*this.sqV)*n,this.sqX+=this.sqV*n;const V=Math.max(-.4,Math.min(1,this.sqX));this.squash.rotation.y=this.sqYaw,this.unyaw.rotation.y=-this.sqYaw;const et=1-.12*this.dig;this.squash.scale.set((1-V*.2)*f*(1+.06*this.dig),(1+V*.05)*d*et,(1+V*.1)*f*(1+.06*this.dig)),this.squash.position.set(this.sqDx*V*.16+this.stDx*this.stLunge*.7,0,this.sqDz*V*.16+this.stDz*this.stLunge*.7)}this.hot=Math.max(0,this.hot-n/.08);for(const D of this.bladeMats)D.emissive.setScalar(this.hot>0?1:0),D.emissiveIntensity=this.hot>0?.4+2.6*this.hot:1;if(this.blur.material.opacity=.16*c,this.glowMat.emissiveIntensity=.7+1.1*c+this.flash*5,this.light.intensity=4*c+this.flash*30,this.shield.visible=t.braceT>0,this.shield.visible){const D=1+.08*Math.sin(s*30);this.shield.scale.set(D,D,1),this.shield.material.color.setHex(16777215)}C?(this.markOut.getWorldPosition(this.swA),this.markIn.getWorldPosition(this.swB),this.swA.y=Math.max(this.swA.y,this.y+.15),this.swB.y=Math.max(this.swB.y,this.y+.1),this.swing.update(this.swA,this.swB,1)):(this.swingTail=Math.max(0,this.swingTail-1),this.swing.update(null,null,1));let z=null;for(const D of no)t.status[D]>0&&(!z||t.status[D]>t.status[z])&&(z=D);if(this.smoke&&(t.stage>=1||t.armour<.5)&&!t.out){const D=t.stage>=2?16:t.stage>=1?9:4;if(Math.random()<D*n){const V=Math.random()*Math.PI*2,et=this.spec.radius*.5;this.smoke(a+Math.cos(V)*et-t.vx*.02,this.y+.7+u,o+Math.sin(V)*et-t.vy*.02,-t.vx*.12+(Math.random()-.5)*.8,1.3+Math.random()*1.2,-t.vy*.12+(Math.random()-.5)*.8,.3+Math.random()*.25,.9+Math.random()*.6)}}if(this.markOn=z?Math.min(1,this.markOn+n*7):Math.max(0,this.markOn-n*7),z){const D=Ue[z].color;this.markMat.color.setHex(D),this.markMat.emissive.setHex(D)}const Y=this.spec.radius*(1.1+.35*this.markOn)+.15;if(this.markShards.forEach((D,V)=>{D.visible=this.markOn>.02;const et=s*3.2+V*Math.PI*2/3;D.position.set(Math.cos(et)*Y,.85+Math.sin(s*5+V*2)*.12,Math.sin(et)*Y),D.rotation.set(s*4+V,et,s*3+V*2),D.scale.setScalar(this.markOn*(1+.1*Math.sin(s*14+V)))}),this.aura.visible=t.superT>0,t.superT>0){for(const D of this.aura.children)D.userData.spin&&(D.rotation.z+=D.userData.spin*n);this.aura.scale.setScalar(1+.06*Math.sin(s*22))}const U=Math.hypot(t.vx,t.vy),H=!t.out&&!this.airborne;this.trail.update(H?new L(a,this.y+.1,o):null,Math.min(1,U/18)*(t.dashT>0||t.boostT>0?.4:.1),.08+Math.min(.1,U/200)+(t.dashT>0?.06:0))}}const Ze=900;class Ny{constructor(t){this.canvas=t,this.renderer=new JM({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Td,this.renderer.toneMapping=Ac,this.renderer.toneMappingExposure=1,this.scene.background=new Ht(329483),this.scene.fog=new uo(329483,34,80);const e=new Ya(this.renderer);this.scene.environment=e.fromScene(new yf,.04).texture,this.scene.environmentIntensity=.55;const n=this.sun=new gc(16777215,2.4);n.position.set(7,20,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-13,s.right=s.top=13,s.near=1,s.far=50,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,this.scene.add(n,new Mf(9413887,329226,.45));const r=new $s(16742963,110,40,2);r.position.set(-14,5,-4);const a=new $s(3385599,110,40,2);a.position.set(14,5,-4),this.scene.add(r,a),this.setStadium(zs);const o=new _e;this.sparkPos.fill(-999),o.setAttribute("position",new Ae(this.sparkPos,3)),o.setAttribute("color",new Ae(this.sparkCol,3)),this.sparks=new n_(o,new hf({size:.22,map:zu(),vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1})),this.sparks.frustumCulled=!1,this.scene.add(this.sparks);const l=new _e;this.streakPos.fill(-999),l.setAttribute("position",new Ae(this.streakPos,3)),l.setAttribute("color",new Ae(this.streakCol,3));const c=new Float32Array(Ze*8),h=new Uint32Array(Ze*6);for(let f=0;f<Ze;f++){c.set([0,1,1,1,0,0,1,0],f*8);const g=f*4;h.set([g,g+1,g+2,g+1,g+3,g+2],f*6)}l.setAttribute("uv",new Ae(c,2)),l.setIndex(new Ae(h,1)),this.streaks=new ht(l,new Te({map:Ly(),vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1,side:ze,fog:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);const u=Py();for(let f=0;f<10;f++){const g=new fu(new dc({map:u,color:16777215,transparent:!0,opacity:0,blending:Be,depthWrite:!1}));g.visible=!1,this.scene.add(g),this.shocks.push({mesh:g,life:0,max:1,size:1})}const d=new ht(new go(.95,1.08,48),new Te({color:16777215,transparent:!0,opacity:.9,blending:Be,depthWrite:!1,depthTest:!1,side:ze}));d.rotation.x=-Math.PI/2,this.aimArrow=new ht(new Ys(.22,.7,3),new Te({color:16777215,transparent:!0,opacity:.9,blending:Be,depthWrite:!1,depthTest:!1})),this.aim.add(d,this.aimArrow),this.aim.visible=!1,this.scene.add(this.aim),this.composer=new Sf(this.renderer),this.composer.addPass(new wf(this.scene,this.camera)),this.bloom=new ls(new Z(1,1),.38,.4,.92),this.composer.addPass(this.bloom),this.composer.addPass(new Ef),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new $a;camera=new je(42,1,.1,200);composer;bloom;tops=[];debugCam=null;pieces=[];chips=[];puffs=[];puffGeo=new mo(.2,0);smokeMat=new me({color:2369068,roughness:1,flatShading:!0});dustMat=new me({color:9209464,roughness:1,flatShading:!0});stoneMat=new me({color:7039600,roughness:.9,flatShading:!0});world=null;shove=new L;shoveV=new L;finT=0;finDur=1;finTarget=-1;finEnv=0;fx3=0;trauma=0;focus=new L;zoom=1;distScale=1;aim=new Tt;aimArrow;raycaster=new B_;arena=new Tt;stadium=zs;segs=[];pillarMeshes=[];dangerMat=new Te({color:16726820});fovKick=0;bolts=[];constructs=[];sun;beams=[];plates=[];floorPhase=[];hazards=[];slabGeo=new ne(1,.3,1);marks=[];spikeGeo=new Ys(.26,1,5);chevGeo=(()=>{const t=new un;t.moveTo(-.45,-.55),t.lineTo(.55,0),t.lineTo(-.45,.55),t.lineTo(-.15,0),t.closePath();const e=new Qs(t,{depth:.1,bevelEnabled:!1});return e.rotateX(-Math.PI/2),e})();warnMat=new me({color:2755846,emissive:16730650,emissiveIntensity:1.5,flatShading:!0});heavyMat=new me({color:3816774,metalness:.8,roughness:.4,flatShading:!0});introT=0;introDur=3;introTarget=0;introEnv=0;sparkPos=new Float32Array(Ze*3);sparkCol=new Float32Array(Ze*3);sparkVel=new Float32Array(Ze*3);sparkLife=new Float32Array(Ze);sparkMax=new Float32Array(Ze);sparkBase=new Float32Array(Ze*3);sparkCap=Ze;sparkGrav=new Float32Array(Ze);streakPos=new Float32Array(Ze*12);streakCol=new Float32Array(Ze*12);streaks;sparkNext=0;sparks;shocks=[];applyQuality(t){const e=bd[t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap)),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap));const n=this.sun.shadow;n.mapSize.x!==e.shadow&&(n.mapSize.set(e.shadow,e.shadow),n.map?.dispose(),n.map=null),this.bloom.enabled=e.bloom,this.sparkCap=e.sparks,this.sparkNext%=this.sparkCap,this.resize()}setStadium(t){this.scene.remove(this.arena),this.arena.traverse(p=>p.geometry?.dispose()),this.arena=new Tt,this.scene.add(this.arena),this.stadium=t,ge=t.radius;const e=t.radius,n=e+3,s=this.sun.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.far=90,s.updateProjectionMatrix(),this.sun.position.set(7,20,9).multiplyScalar(Math.max(1,e/10));for(const p of this.beams)this.scene.remove(p.beam,p.gem);this.beams=[];const r=[],a=t.collapse?t.collapse.inner*e:e;for(let p=0;p<=48;p++){const m=a*p/48;r.push(new Z(m,$t(m)))}t.collapse?r.push(new Z(a,-.35)):r.push(new Z(e+.7,pn),new Z(e+.9,-1.2));const o=new me({color:t.theme.floor,metalness:.75,roughness:.26,side:ze}),l=new ht(new ns(r,96),o);if(l.receiveShadow=!0,this.arena.add(l),this.plates=[],this.floorPhase=t.collapse?new Array(t.collapse.sectors).fill(0):[],t.collapse){const p=t.collapse,m=Math.PI*2/p.sectors;for(let b=0;b<p.sectors;b++){const y=Math.PI/2-(b+1)*m+.012,_=[];for(let v=0;v<=14;v++){const M=a+(e-a)*v/14;_.push(new Z(M,$t(M)))}_.push(new Z(e+.7,pn),new Z(e+.9,-1.2),new Z(a,-.35),new Z(a,$t(a)));const R=o.clone();R.emissive=new Ht(16734744),R.emissiveIntensity=0;const E=new ht(new ns(_,6,y,m-.024),R);E.receiveShadow=!0,this.arena.add(E);const T=new ht(new ns([new Z(a,-.9),new Z(e+.8,-.9)],6,y,m-.024),new Te({color:4855304,side:ze}));T.visible=!1,this.arena.add(T),this.plates.push({mesh:E,mat:R,ember:T})}}this.hazards=[];const c=new me({color:t.theme.wall,metalness:1,roughness:.3}),h=new Te({color:t.theme.strip});for(const p of t.hazards??[]){const m=new Tt;if(p.kind==="bar"){const y=(p.r1-p.r0)/7;for(let R=0;R<7;R++){const E=p.r0+(R+.5)*y,T=Math.atan(($t(E+.2)-$t(E-.2))/.4),v=new ht(new ne(y*.97,.7,p.width*2),c);v.position.set(E,$t(E)+.35,0),v.rotation.z=T,v.castShadow=!0;const M=new ht(new ne(y*.6,.05,p.width*1.1),h);M.position.set(E,$t(E)+.72,0),M.rotation.z=T,m.add(v,M)}const _=new ht(new zt(p.width*1.4,p.width*1.6,.9,6),c);_.position.set(p.r0,$t(p.r0)+.4,0),_.castShadow=!0,m.add(_)}else{const b=new ht(new zt(p.r*.92,p.r,1.1,6),c);b.position.y=.55,b.castShadow=!0;const y=new ht(new zt(p.r*1.01,p.r*1.01,.09,6),h);y.position.y=.78;const _=new ht(new zt(p.r*.6,p.r*.75,.12,6),c);_.position.y=1.14,m.add(b,y,_)}this.arena.add(m),this.hazards.push({h:p,obj:m})}const u=new Te({color:2899819});for(const p of[e*.33,e*.6]){const m=new ht(new he(p,.022,6,96),u);m.rotation.x=Math.PI/2,m.position.y=$t(p)+.012,this.arena.add(m)}if(t.rail){const p=e-t.rail.width-.9,m=new ht(new ns([new Z(p,$t(p)+.015),new Z(e-.25,$t(e-.25)+.015)],96),new Te({color:t.theme.strip,transparent:!0,opacity:.05,blending:Be,depthWrite:!1,side:ze})),b=new ht(new he(p,.03,6,128),new Te({color:t.theme.strip}));b.rotation.x=Math.PI/2,b.position.y=$t(p)+.02,this.arena.add(m,b)}const d=new Te({color:t.theme.strip}),f=Math.PI*2/t.segments,g=f-.03;this.segs=[];for(let p=0;p<t.segments;p++){const m=new Tt;m.rotation.y=-(p*f-f/2+.015),this.arena.add(m);const b=new me({color:t.theme.wall,metalness:1,roughness:.24,emissive:16724736,emissiveIntensity:0}),y=new ht(new he(e+.2,.34,12,10,g),b);y.rotation.x=Math.PI/2,y.position.y=pn+.1,y.castShadow=!0;const _=new ht(new he(e-.16,.035,6,10,g),d);_.rotation.x=Math.PI/2,_.position.y=pn-.05;const R=new ht(new he(e+.15,.05,6,8,g),this.dangerMat);R.rotation.x=Math.PI/2,R.position.y=pn+.03;const E=t.openSegs.includes(p);y.visible=_.visible=!E,R.visible=E,m.add(y,_,R),this.segs.push({wall:y,glow:_,lip:R,mat:b,open:E})}this.pillarMeshes=t.pillars.map(p=>{const m=new Tt,b=new ht(new zt(p.r*.92,p.r*1.08,1.7,6),new me({color:t.theme.wall,metalness:1,roughness:.3,emissive:16724736,emissiveIntensity:0}));b.castShadow=!0;const y=new ht(new he(p.r*1.02,.04,6,24),d);return y.rotation.x=Math.PI/2,y.position.y=.45,m.add(b,y),m.position.set(p.x,$t(Math.hypot(p.x,p.y))+.85,p.y),this.arena.add(m),m});const x=new ht(new Vr(90,48),new me({color:461070,roughness:.9,metalness:.2}));x.rotation.x=-Math.PI/2,x.position.y=-1.2,x.receiveShadow=!0,this.arena.add(x)}chunks(t,e,n,s,r,a,o){const l=new me({color:r,metalness:1,roughness:.3});for(let c=0;c<s;c++){const h=.18+Math.random()*.3,u=new ht(new ne(h*1.4,h,h*.9),l);u.castShadow=!0,u.position.set(t+(Math.random()-.5)*1.6,e+Math.random()*.5,n+(Math.random()-.5)*1.6),this.scene.add(u);const d=3+Math.random()*9;this.pieces.push({obj:u,v:new L(a*d+(Math.random()-.5)*5,4+Math.random()*8,o*d+(Math.random()-.5)*5),w:new L(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:5})}}breakPiece(t,e,n,s){const r=Math.hypot(n,s)||1;if(t==="wall"){const a=this.segs[e];if(!a||a.open)return;a.open=!0,a.wall.visible=a.glow.visible=!1,a.lip.visible=!0,this.chunks(n,pn+.2,s,9,this.stadium.theme.wall,n/r,s/r),this.shock(n,pn+.2,s,7,.5,16738874)}else{const a=this.pillarMeshes[e];if(!a||!a.visible)return;a.visible=!1,this.chunks(n,a.position.y,s,10,this.stadium.theme.wall,0,0),this.shock(n,a.position.y,s,5,.45,16765088)}for(let a=0;a<70;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*13;this.spark(n,pn*(t==="wall"?1:.5)+.4,s,Math.cos(o)*l,3+Math.random()*10,Math.sin(o)*l,.3+Math.random()*.6,1,.6,.3)}this.trauma=Math.min(1,this.trauma+.8),this.fovKick=Math.max(this.fovKick,5)}kick(t){this.fovKick=Math.max(this.fovKick,t)}burstSparks(t,e,n,s,r,a){Si.setHex(a);for(let o=0;o<s;o++){const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.spark(t,e,n,Math.cos(l)*c,2+Math.random()*r*.7,Math.sin(l)*c,.3+Math.random()*.5,Si.r,Si.g,Si.b)}}bolt(t,e,n,s,r){const a=[];for(let c=0;c<=9;c++){const h=c/9,u=c===0||c===9?0:.7,d=t+(n-t)*h+(Math.random()-.5)*u,f=e+(s-e)*h+(Math.random()-.5)*u;a.push(new L(d,$t(Math.min(ge,Math.hypot(d,f)))+1+Math.sin(h*Math.PI)*1.2,f))}const l=new cf(new _e().setFromPoints(a),new Bc({color:r,transparent:!0,blending:Be,depthWrite:!1}));l.frustumCulled=!1,this.scene.add(l),this.bolts.push({line:l,life:.22})}superFx(t,e){const n=this.tops[t];if(!n)return;const s=n.group.position;e.forEach((r,a)=>{const o=Ue[r].color,l=$t(Math.min(ge,Math.hypot(s.x,s.z))),c=ny(r,(h,u)=>$t(Math.min(ge,Math.hypot(s.x+h,s.z+u)))-l);c.group.position.set(s.x,l,s.z),c.group.rotation.y=a*.5,c.update(0,0,()=>{}),this.scene.add(c.group),this.constructs.push({c,i:t,t:0,el:r}),this.shock(s.x,s.y+.3,s.z,8+a*2,.4,o),this.burstSparks(s.x,s.y+.6,s.z,130,22,o)}),this.trauma=1,this.fovKick=Math.max(this.fovKick,10)}pulseFx(t,e){const n=Ue[t.element].color,s=$t(Math.min(ge,Math.hypot(t.x,t.y)))+.3;if(t.element==="plasma"&&t.targets.length){const r=e.tops[t.targets[0]],a=this.constructs.find(o=>o.i===t.i&&o.el==="plasma"&&o.t<.1);r&&a&&a.c.group.position.set(r.x,$t(Math.min(ge,Math.hypot(r.x,r.y))),r.y)}this.shock(t.x,s,t.y,t.radius*1.9,.3,n);for(const r of t.targets){const a=e.tops[r];a&&(this.bolt(t.x,t.y,a.x,a.y,n),this.burstSparks(a.x,$t(Math.min(ge,Math.hypot(a.x,a.y)))+.7,a.y,22,9,n),this.tops[r]&&(this.tops[r].flash=1))}this.trauma=Math.min(1,this.trauma+.25)}reactFx(t,e,n){const s=$t(Math.min(ge,Math.hypot(t,e)))+.7;this.shock(t,s,e,9,.45,n),this.shock(t,s+.4,e,5,.3,16777215),this.burstSparks(t,s,e,120,19,n),this.trauma=Math.min(1,this.trauma+.7),this.fovKick=Math.max(this.fovKick,6)}flashTop(t,e,n){this.shock(t,e,n,4.5,.3,16767408)}crackTop(t,e){const n=this.tops[t];if(!n||n.bursted)return;n.setStage(e);const s=n.group.position,r=n.shed(e,this.scene);Math.hypot(s.x,s.z);for(const a of r){const o=Math.atan2(s.z,s.x)+(Math.random()-.5)*2.6,l=5+Math.random()*8;this.pieces.push({obj:a,v:new L(Math.cos(o)*l+n.vx*.5,6+Math.random()*6,Math.sin(o)*l+n.vz*.5),w:new L(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),life:5,flat:e===2,hot:1})}this.flashTop(s.x,s.y+.6,s.z),this.burstSparks(s.x,s.y+.6,s.z,46,14,16756832),this.trauma=Math.min(1,this.trauma+.6)}dropLoot(t,e,n){n.forEach((s,r)=>{const a=r/Math.max(1,n.length)*Math.PI*2+.6,o=n.length>1?1.8:0,l=t+Math.cos(a)*o,c=e+Math.sin(a)*o,h=$t(Math.min(ge,Math.hypot(l,c))),u=new fu(new dc({map:zu(),color:s,transparent:!0,opacity:0,blending:Be,depthWrite:!1}));u.scale.setScalar(3.2),u.position.set(l,h+1.1,c);const d=new ht(new us(.5),new me({color:1052950,emissive:s,emissiveIntensity:2.2,metalness:.7,roughness:.2,flatShading:!0}));d.scale.set(.75,1.25,.75),d.position.set(l,h+1.1,c),this.scene.add(u,d),this.beams.push({beam:u,gem:d,life:0}),this.shock(l,h+.2,c,3.5,.5,s);const f=new Ht(s);for(let g=0;g<40;g++){const x=Math.random()*Math.PI*2,p=2+Math.random()*7;this.spark(l,h+.5,c,Math.cos(x)*p,5+Math.random()*10,Math.sin(x)*p,.5+Math.random()*.6,f.r,f.g,f.b)}})}inHole(t,e){const n=this.stadium.collapse;return!n||Math.hypot(t,e)<n.inner*this.stadium.radius?!1:this.floorPhase[Ec(n,Math.atan2(e,t))]===2}wedgePoint(t){const e=this.stadium.collapse,n=this.stadium.radius,s=(t+.1+Math.random()*.8)/e.sectors*Math.PI*2,r=e.inner*n+.3+Math.random()*(n-e.inner*n-.6);return[Math.cos(s)*r,Math.sin(s)*r]}floorWarn(t){!this.plates[t]||this.floorPhase[t]>=1||(this.floorPhase[t]=1,this.trauma=Math.min(1,this.trauma+.2))}floorFall(t){const e=this.plates[t];if(e){this.floorPhase[t]=2,e.mesh.visible=!1,e.ember.visible=!0;for(let n=0;n<9;n++){const[s,r]=this.wedgePoint(t),a=new ht(this.slabGeo,e.mat);a.scale.set(1.6+Math.random()*1.8,1,1.4+Math.random()*1.6),a.position.set(s,$t(Math.hypot(s,r))+.1,r),a.rotation.set((Math.random()-.5)*.3,Math.random()*6,(Math.random()-.5)*.3),a.castShadow=!0,this.scene.add(a),this.pieces.push({obj:a,v:new L((Math.random()-.5)*2,-1-Math.random()*3,(Math.random()-.5)*2),w:new L((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),life:3}),n%2===0&&this.puff(s,$t(Math.hypot(s,r))+.3,r,(Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*3,1.2+Math.random()*.8,.8+Math.random()*.5,!0)}for(let n=0;n<50;n++){const[s,r]=this.wedgePoint(t);this.spark(s,$t(Math.hypot(s,r))+.2,r,(Math.random()-.5)*8,4+Math.random()*8,(Math.random()-.5)*8,.3+Math.random()*.4,1,.6,.25,12)}this.trauma=Math.min(1,this.trauma+.6),this.fovKick=Math.max(this.fovKick,4)}}fallFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;for(let s=0;s<20;s++){const r=Math.random()*6.28;this.spark(n.x,n.y+.3,n.z,Math.cos(r)*3,2+Math.random()*3,Math.sin(r)*3,.3+Math.random()*.3,1,.7,.3,10)}this.trauma=Math.min(1,this.trauma+.3)}bossIntro(t,e){this.introTarget=t,this.introDur=e,this.introT=e}telegraphFx(t){if(t.move==="drops")return;const e=new Tt,n=[],s=(o,l,c,h=this.warnMat)=>{const u=new ht(o,h);return u.position.set(l,ii(l,c),c),u.castShadow=!0,e.add(u),n.push(u),u};let r,a=t.dur;if(t.move==="slam"){for(let l=0;l<14;l++){const c=l/14*Math.PI*2;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.97,t.y+Math.sin(c)*t.r*.97)}for(let l=0;l<7;l++){const c=l/7*Math.PI*2+.3;s(this.spikeGeo,t.x+Math.cos(c)*t.r*.55,t.y+Math.sin(c)*t.r*.55)}r=(l,c)=>n.forEach((h,u)=>{const d=Math.min(1,l*3.2)*(u<14?1.5:.9)*(.9+.2*Math.sin(c*(12+40*l)+u));h.scale.set(1,Math.max(.01,d),1),h.position.y=ii(h.position.x,h.position.z)+d*.5,h.rotation.y=c*2+u})}else if(t.move==="charge"){const l=Math.floor(14.73684210526316),c=-Math.atan2(t.dy,t.dx);let h=0;for(let u=0;u<l;u++){const d=t.x+t.dx*(2.6+u*1.9),f=t.y+t.dy*(2.6+u*1.9);if(Math.hypot(d,f)>ge-.3)break;const g=s(this.chevGeo,d,f);if(g.rotation.y=c,g.scale.set(1.3,1,t.r*.85),h++,u%2===0)for(const x of[-1,1]){const p=d-t.dy*x*t.r,m=f+t.dx*x*t.r;Math.hypot(p,m)<ge-.3&&s(this.spikeGeo,p,m).scale.set(.8,1.1,.8)}}a=t.dur+.75,r=(u,d)=>{let f=0;n.forEach(g=>{g.geometry===this.chevGeo&&(g.visible=f<h*Math.min(1,u*2.4),g.scale.y=1+.9*Math.max(0,Math.sin(d*16-f*.9)),f++)})}}else[5,8.5].forEach((o,l)=>{for(let c=0;c<9;c++){const h=s(this.chevGeo,t.x,t.y);h.userData={a:c/9*Math.PI*2+l*.3,r0:o,row:l},h.scale.set(1.2,1,.9)}}),r=(o,l,c)=>{n.forEach(u=>{const{a:d,r0:f,row:g}=u.userData,x=(l*.9+g*.5)%1,p=f*(1-.4*x)+1.2,m=t.x+Math.cos(d)*p,b=t.y+Math.sin(d)*p;u.position.set(m,ii(m,b)+.05,b),u.rotation.y=-(d+Math.PI),u.scale.y=.6+.8*Math.min(1,o*3)*(1-x*.4)});const h=c*160;for(let u=0;u<Math.floor(h)+(Math.random()<h-Math.floor(h)?1:0);u++){const d=Math.random()*Math.PI*2,f=4+Math.random()*8,g=t.x+Math.cos(d)*f,x=t.y+Math.sin(d)*f;this.spark(g,ii(g,x)+.15,x,-Math.cos(d)*(9+Math.random()*6),.4,-Math.sin(d)*(9+Math.random()*6),.3,.6,.85,1,2)}};this.scene.add(e),this.marks.push({g:e,life:a,max:a,tick:r})}bossmoveFx(t){const e=ii(t.x,t.y);if(t.move==="slam"){for(let n=0;n<90;n++){const s=Math.random()*Math.PI*2,r=6+Math.random()*16;this.spark(t.x+Math.cos(s)*1.5,e+.2,t.y+Math.sin(s)*1.5,Math.cos(s)*r,.5+Math.random()*4,Math.sin(s)*r,.2+Math.random()*.4,1,.6,.2,10)}this.shock(t.x,e,t.y,t.r*1.4,.35,16760928),this.floorChips(t.x,e,t.y,30,null,1);for(let n=0;n<8;n++){const s=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(s)*2,e+.3,t.y+Math.sin(s)*2,Math.cos(s)*5,1+Math.random()*2,Math.sin(s)*5,1.2+Math.random(),1,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,8),this.recoilAll(t.x,t.y,t.targets,1)}else{for(let n=0;n<50;n++)this.spark(t.x-t.dx*2,e+.2,t.y-t.dy*2,-t.dx*(8+Math.random()*14)+(Math.random()-.5)*8,.5+Math.random()*4,-t.dy*(8+Math.random()*14)+(Math.random()-.5)*8,.2+Math.random()*.3,1,.7,.3,10);this.floorChips(t.x,e,t.y,16,[-t.dx,-t.dy],.8),this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,5)}}recoilAll(t,e,n,s){for(const r of n){const a=this.world?.tops[r];if(!a)continue;const o=Math.hypot(a.x-t,a.y-e)||1;this.tops[r]?.recoil((a.x-t)/o,(a.y-e)/o,s)}}zoneWarnFx(t){const e=new Tt,n=[];for(let a=0;a<7;a++){const o=a/7*Math.PI*2,l=t.x+Math.cos(o)*t.r*.9,c=t.y+Math.sin(o)*t.r*.9,h=new ht(this.spikeGeo,this.warnMat);h.position.set(l,ii(l,c),c),h.scale.set(.8,.01,.8),n.push(h),e.add(h)}const s=new ht(new zt(t.r*.8,t.r*.8,1.4,6),this.heavyMat);s.castShadow=!0,e.add(s);const r=ii(t.x,t.y);this.scene.add(e),this.marks.push({g:e,life:t.dur,max:t.dur,tick:(a,o)=>{s.position.set(t.x,r+.7+(1-a*a)*18,t.y),s.rotation.y=o*.8+a*3,n.forEach((l,c)=>{const h=Math.min(1,a*4)*(.9+.3*Math.sin(o*(14+30*a)+c));l.scale.y=Math.max(.01,h),l.position.y=ii(l.position.x,l.position.z)+h*.5})}})}zoneHitFx(t){const e=ii(t.x,t.y);for(let s=0;s<50;s++){const r=Math.random()*Math.PI*2,a=4+Math.random()*11;this.spark(t.x+Math.cos(r)*.8,e+.2,t.y+Math.sin(r)*.8,Math.cos(r)*a,.5+Math.random()*4,Math.sin(r)*a,.2+Math.random()*.35,1,.7,.25,10)}this.shock(t.x,e,t.y,t.r*2.2,.3,16765072),this.floorChips(t.x,e,t.y,14,null,.8);for(let s=0;s<4;s++){const r=Math.random()*Math.PI*2;this.puff(t.x+Math.cos(r),e+.3,t.y+Math.sin(r),Math.cos(r)*2.5,1+Math.random(),Math.sin(r)*2.5,1+Math.random()*.6,1,!0)}const n=new ht(new zt(t.r*.8,t.r*.8,.7,6),this.heavyMat);n.castShadow=!0,n.position.set(t.x,e+.4,t.y),this.scene.add(n),this.pieces.push({obj:n,v:new L,w:new L,life:3,ttl:1.6}),this.trauma=Math.min(1,this.trauma+.55),this.recoilAll(t.x,t.y,t.targets,.8)}bossPhaseFx(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.burstSparks(n.x,n.y+.8,n.z,120,16,e.spec.accent),this.floorChips(n.x,n.y,n.z,24,null,1),this.trauma=1,this.fovKick=Math.max(this.fovKick,7),e.hot=1}hazardHit(t){const e=$t(Math.min(ge,Math.hypot(t.x,t.y)))+.55;for(let n=0;n<8+t.strength*30;n++){const s=Math.atan2(t.ny,t.nx)+(Math.random()-.5)*1.3,r=5+Math.random()*12*(.4+t.strength);this.spark(t.x,e,t.y,Math.cos(s)*r,.5+Math.random()*4,Math.sin(s)*r,.15+Math.random()*.3,1,.85,.4,8)}t.strength>.25&&this.shock(t.x,e-.3,t.y,2+t.strength*3,.25,15265952),this.tops[t.i]?.recoil(t.nx,t.ny,t.strength),this.trauma=Math.min(1,this.trauma+t.strength*.4),this.shoveV.x+=t.nx*t.strength*14,this.shoveV.z+=t.ny*t.strength*14}puff(t,e,n,s,r,a,o,l,c){if(this.puffs.length>=60){const u=this.puffs.shift();this.scene.remove(u.m)}const h=new ht(this.puffGeo,c?this.dustMat:this.smokeMat);h.position.set(t,e,n),h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),h.scale.setScalar(.01),this.scene.add(h),this.puffs.push({m:h,v:new L(s,r,a),w:new L(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2),life:l,max:l,s0:o})}plateFx(t,e){const n=this.tops[t];if(!n||n.bursted)return;const s=n.dropPlate(e-1);if(!s)return;this.scene.attach(s);const r=n.group.position,a=s.position.x-r.x,o=s.position.z-r.z,l=Math.hypot(a,o)||1,c=7+Math.random()*5;this.pieces.push({obj:s,v:new L(a/l*c+n.vx*.5,7+Math.random()*4,o/l*c+n.vz*.5),w:new L((Math.random()-.5)*20,(Math.random()-.5)*30,(Math.random()-.5)*20),life:5,flat:!0,hot:1});for(let h=0;h<28;h++){const u=Math.atan2(o,a)+(Math.random()-.5)*1.6,d=5+Math.random()*12;this.spark(s.position.x,s.position.y+.1,s.position.z,Math.cos(u)*d,1+Math.random()*5,Math.sin(u)*d,.15+Math.random()*.3,1,.75,.35,8)}this.flashTop(s.position.x,s.position.y,s.position.z),n.hot=1,this.trauma=Math.min(1,this.trauma+.3)}floorChips(t,e,n,s,r,a){for(let o=0;o<s;o++){const l=r?Math.atan2(r[1],r[0])+(Math.random()-.5)*1.6:Math.random()*Math.PI*2;this.chip(t,e+.2,n,Math.cos(l),Math.sin(l),a,this.stoneMat)}}brakeFx(t){const e=$t(Math.min(ge,Math.hypot(t.x,t.y))),n=Math.min(1,t.speed/22);if(t.phase==="stop"){const s=[t.dx,t.dy];this.shock(t.x,e+.15,t.y,2+n*1.5,.3,16769712);for(let r=0;r<40+n*50;r++){const a=Math.atan2(s[1],s[0])+(Math.random()-.5)*1.2,o=6+Math.random()*(10+n*14);this.spark(t.x,e+.15,t.y,Math.cos(a)*o,.5+Math.random()*3.5,Math.sin(a)*o,.15+Math.random()*.3,1,.75+Math.random()*.25,.35,8)}this.floorChips(t.x,e,t.y,5+Math.floor(n*6),s,.4+n);for(let r=0;r<4;r++)this.puff(t.x+s[0]*r*.4,e+.3,t.y+s[1]*r*.4,s[0]*4+(Math.random()-.5)*3,.8+Math.random(),s[1]*4+(Math.random()-.5)*3,.9+Math.random()*.5,.6+Math.random()*.4,!0);this.trauma=Math.min(1,this.trauma+.25+n*.3),this.shoveV.x+=s[0]*12*n,this.shoveV.z+=s[1]*12*n}else{this.floorChips(t.x,e,t.y,6,[-t.dx,-t.dy],.9);for(let s=0;s<50;s++){const r=s*.32,a=1+Math.random()*3;this.spark(t.x-t.dx*r,e+.5,t.y-t.dy*r,-t.dx*a,.5+Math.random(),-t.dy*a,.25+Math.random()*.3,.8,.95,1)}for(let s=0;s<40;s++){const r=Math.atan2(-t.dy,-t.dx)+(Math.random()-.5)*.9,a=8+Math.random()*14;this.spark(t.x,e+.2,t.y,Math.cos(r)*a,.5+Math.random()*2,Math.sin(r)*a,.15+Math.random()*.25,1,.9,.6,8)}this.shoveV.x-=t.dx*16,this.shoveV.z-=t.dy*16,this.trauma=Math.min(1,this.trauma+.3),this.fovKick=Math.max(this.fovKick,8)}}jumpFx(t,e){const n=e.tops[t];if(!n)return;const s=$t(Math.min(ge,Math.hypot(n.x,n.y)));this.floorChips(n.x,s,n.y,7,null,.6);for(let r=0;r<5;r++){const a=Math.random()*Math.PI*2;this.puff(n.x+Math.cos(a)*.5,s+.25,n.y+Math.sin(a)*.5,Math.cos(a)*3.5,.5+Math.random()*.8,Math.sin(a)*3.5,.8+Math.random()*.5,.5+Math.random()*.35,!0)}for(let r=0;r<26;r++){const a=Math.random()*Math.PI*2,o=4+Math.random()*8;this.spark(n.x,s+.2,n.y,Math.cos(a)*o,.3+Math.random()*1.5,Math.sin(a)*o,.14+Math.random()*.2,1,.95,.8,8)}this.trauma=Math.min(1,this.trauma+.12)}landFx(t,e){const n=$t(Math.min(ge,Math.hypot(t.x,t.y)));this.shock(t.x,n+.2,t.y,t.radius*1.8,.35,16771496),this.burstSparks(t.x,n+.4,t.y,60,13,16769184),this.floorChips(t.x,n,t.y,10+(t.targets.length?4:0),null,1.2);for(let s=0;s<7;s++){const r=s/7*Math.PI*2+Math.random()*.5;this.puff(t.x+Math.cos(r)*.6,n+.3,t.y+Math.sin(r)*.6,Math.cos(r)*5,.8+Math.random(),Math.sin(r)*5,1+Math.random()*.6,.6+Math.random()*.4,!0)}this.trauma=Math.min(1,this.trauma+(t.targets.length?.6:.35)),this.fovKick=Math.max(this.fovKick,5);for(const s of t.targets)this.tops[s]&&(this.tops[s].flash=1)}counterFx(t){const e=$t(Math.min(ge,Math.hypot(t.x,t.y)));for(let n=0;n<30;n++){const s=n*.3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*2,1+Math.random(),-t.dy*2,.25+Math.random()*.2,1,.8,.3)}this.shock(t.x,e+.3,t.y,5,.35,16760896),this.fovKick=Math.max(this.fovKick,7)}boostFx(t,e){const n=e.tops[t];if(!n)return;const s=Math.hypot(n.vx,n.vy)||1,r=$t(Math.hypot(n.x,n.y))+.4;for(let a=0;a<26;a++){const o=4+Math.random()*10;this.spark(n.x,r,n.y,-n.vx/s*o+(Math.random()-.5)*6,1+Math.random()*4,-n.vy/s*o+(Math.random()-.5)*6,.2+Math.random()*.3,.7,.85,1)}}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.camera.aspect=t/e,this.distScale=Math.max(1.15,1.5/this.camera.aspect),this.camera.updateProjectionMatrix()}setTops(t,e=this.stadium){this.setStadium(e);for(const n of this.tops)this.scene.remove(n.group,n.trail.mesh,n.swing.mesh);for(const n of this.pieces)this.scene.remove(n.obj);this.pieces=[];for(const n of this.puffs)this.scene.remove(n.m);this.puffs=[];for(const n of this.marks)this.scene.remove(n.g);this.marks=[],this.introT=0,this.introEnv=0,this.tops=t.map(n=>new Uy(n));for(const n of this.tops)n.smoke=(s,r,a,o,l,c,h,u)=>this.puff(s,r,a,o,l,c,h,u,!1);for(const n of this.tops)n.fx=(s,r,a,o,l,c,h,u,d,f,g)=>this.spark(s,r,a,o,l,c,h,u,d,f,g);for(const n of this.tops)this.scene.add(n.group,n.trail.mesh,n.swing.mesh)}spark(t,e,n,s,r,a,o,l,c,h,u=26){const d=this.sparkNext;this.sparkGrav[d]=u,this.sparkNext=(d+1)%this.sparkCap,this.sparkPos.set([t,e,n],d*3),this.sparkVel.set([s,r,a],d*3),this.sparkBase.set([l,c,h],d*3),this.sparkLife[d]=this.sparkMax[d]=o}shock(t,e,n,s,r,a){const o=this.shocks.reduce((h,u)=>h.life<u.life?h:u);o.life=o.max=r*.55,o.size=s*.75,o.mesh.position.set(t,e+.4,n),o.mesh.material.color.setHex(a),o.mesh.material.rotation=Math.random()*Math.PI,o.mesh.visible=!0;const l=new Ht(a),c=Math.min(110,Math.floor(14+s*8));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,d=s/r*(.35+Math.random()*.75),f=.6+Math.random()*.4;this.spark(t+Math.cos(u)*.3,e+Math.random()*.25,n+Math.sin(u)*.3,Math.cos(u)*d,Math.random()*2.2,Math.sin(u)*d,r*(.5+Math.random()*.7),Math.min(1,l.r+(1-f)),Math.min(1,l.g*f+(1-f)),Math.min(1,l.b*f+(1-f)),3)}}hit(t,e,n,s,r,a,o,l=-1){const c=$t(Math.hypot(t,e))+.75;if(l>=0){const b=l===2?16777215:this.tops[l]?.spec.accent??16777215;this.shock(t,c,e,6+r*5,.42,b);for(let y=0;y<60;y++){const _=Math.random()*Math.PI*2,R=6+Math.random()*16;this.spark(t,c,e,Math.cos(_)*R,2+Math.random()*8,Math.sin(_)*R,.3+Math.random()*.4,1,1,1)}this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,4)}const h=this.tops[a],u=this.tops[o],d=this.world?.tops[a],f=this.world?.tops[o];let g=0;if(d&&f){const b=-s,y=n,_=d.spec.radius,R=f.spec.radius;g=(d.vx-f.vx)*b+(d.vy-f.vy)*y+d.spin*_*.15+f.spin*R*.15}const x=g>=0?1:-1,p=Math.min(22,5+Math.abs(g)*.4),m=Math.floor(6+r*46);for(let b=0;b<m;b++){const y=Math.random()<.82?x:-x,_=p*(.35+Math.random()*.75)*(.5+r),R=(Math.random()-.5)*.7,E=-s*y+n*R,T=n*y+s*R,v=Math.random();this.spark(t,c,e,E*_,1.5+Math.random()*6*(.3+r),T*_,.25+Math.random()*.5,1,.55+v*.45,.15+v*.5)}if(r>.4)for(const[b,y]of[[h,-1],[u,1]]){if(!b)continue;const _=1+Math.floor(r*3);for(let R=0;R<_;R++)this.chip(t,c,e,n*y,s*y,r,R%2?b.chipMetal:b.chipPaint)}if(r>.35&&this.shock(t,c,e,1.5+r*4.5,.32,16769712),this.trauma=Math.min(1,this.trauma+r*.75),this.tops[a]&&(this.tops[a].flash=r),this.tops[o]&&(this.tops[o].flash=r),this.tops[a]?.recoil(-n,-s,r),this.tops[o]?.recoil(n,s,r),r>.3){const b=(r-.2)*22;this.shoveV.x+=n*b,this.shoveV.z+=s*b}}chipGeo=new xo(.16);chip(t,e,n,s,r,a,o){if(this.chips.length>=70){const f=this.chips.shift();f.ttl=0}const l=new ht(this.chipGeo,o);l.castShadow=!0;const c=.7+Math.random()*.9;l.scale.set(c,c*(.5+Math.random()*.5),c),l.position.set(t,e,n),l.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(l);const h=Math.atan2(r,s)+(Math.random()-.5)*1.8,u=4+Math.random()*7*(.5+a),d={obj:l,v:new L(Math.cos(h)*u,4+Math.random()*6,Math.sin(h)*u),w:new L(Math.random()*24-12,Math.random()*24-12,Math.random()*24-12),life:2,ttl:2.4+Math.random()*1.2};this.pieces.push(d),this.chips.push(d)}finisherFx(t,e,n){const s=this.tops[e],r=this.tops[t];if(!s||!r)return;const a=s.group.position,o=r.group.position,l=a.x-o.x,c=a.z-o.z,h=Math.hypot(l,c)||1,u=l/h,d=c/h;for(let f=0;f<14;f++)this.chip(a.x,a.y+.8,a.z,u+(Math.random()-.5)*.8,d+(Math.random()-.5)*.8,1,f%2?s.chipMetal:s.chipPaint);for(let f=0;f<4;f++)this.chip(a.x,a.y+.8,a.z,u,d,1,f%2?r.chipMetal:r.chipPaint);for(let f=0;f<70;f++){const g=Math.atan2(d,u)+(Math.random()-.5)*1.5,x=8+Math.random()*20;this.spark(a.x,a.y+.8,a.z,Math.cos(g)*x,1+Math.random()*7,Math.sin(g)*x,.3+Math.random()*.5,1,.8+Math.random()*.2,.5+Math.random()*.5)}s.hot=1,s.recoil(u,d,1),this.shoveV.x+=u*34,this.shoveV.z+=d*34,this.trauma=Math.min(1,this.trauma+.8),this.finDur=n?1.2:.7,this.finT=this.finDur,this.finTarget=e}rimHit(t,e,n){const s=pn+.3,r=Math.hypot(t,e)||1;for(let a=0;a<6+n*26;a++){const o=2+Math.random()*8,l=Math.atan2(e,t)+Math.PI+(Math.random()-.5)*2.2;this.spark(t/r*ge,s,e/r*ge,Math.cos(l)*o,2+Math.random()*6,Math.sin(l)*o,.2+Math.random()*.35,.6,.8,1)}this.trauma=Math.min(1,this.trauma+n*.35)}burstTop(t){const e=this.tops[t];if(!e||e.bursted)return;e.bursted=!0;const n=e.group.position.clone(),s={tip:.7,disc:1,blade:1.1,core:1.5};Fr.forEach((r,a)=>{const o=e.parts[a];if(r==="disc"&&e.discGone)return;this.scene.attach(o);const l=Math.random()*Math.PI*2,c=(4+Math.random()*7)*(s[r]??1);this.pieces.push({obj:o,v:new L(Math.cos(l)*c+e.vx*.7,(r==="tip"?5:7)*(s[r]??1)+Math.random()*5,Math.sin(l)*c+e.vz*.7),w:new L(Math.random()*14-7,(Math.random()-.5)*30,Math.random()*14-7),life:4,flat:r==="disc"||r==="blade",hot:1})});for(let r=0;r<160;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*16;this.spark(n.x,n.y+.7,n.z,Math.cos(a)*o,3+Math.random()*12,Math.sin(a)*o,.4+Math.random()*.7,1,.8,.5)}this.shock(n.x,n.y+.6,n.z,9,.5,16777215),this.trauma=1}ringOut(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.shock(n.x,e.sunk?Math.max(-.4,n.y):pn+.2,n.z,6,.45,16733491),this.trauma=Math.min(1,this.trauma+.6)}setAim(t,e=0,n=0,s=0,r=1){if(this.aim.visible=t,!t)return;const a=Math.hypot(e,n);if(this.aim.position.set(e,$t(a)+.3,n),this.aimArrow.visible=Math.abs(s)>.01&&a>.05,this.aimArrow.visible){const o=-n/a*r*Math.sign(s),l=e/a*r*Math.sign(s),c=1.3+Math.abs(s)*.9;this.aimArrow.position.set(o*c,.02,l*c),this.aimArrow.quaternion.setFromUnitVectors(new L(0,1,0),new L(o,0,l)),this.aimArrow.scale.setScalar(.7+Math.abs(s)*.8)}}simToScreen(t,e){const n=new L(t,$t(Math.min(ge,Math.hypot(t,e)))+.6,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(n.x+1)/2*s.width,y:s.top+(1-n.y)/2*s.height,behind:n.z>1}}screenToSim(t,e){const n=this.canvas.getBoundingClientRect(),s=new Z((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.raycaster.ray.origin,a=this.raycaster.ray.direction;let o=.8,l=0,c=0;for(let h=0;h<5;h++){const u=(o-r.y)/a.y;l=r.x+a.x*u,c=r.z+a.z*u,o=$t(Math.hypot(l,c))}return{x:l,y:c}}frame(t,e,n,s,r=0){this.world=t,t.tops.forEach((v,M)=>{let S=null;if(v.strikeT>0){let C=1e9;t.tops.forEach((N,O)=>{if(O===M||t.teams[O]===t.teams[M]||!N.inPlay||N.out)return;const z=Math.hypot(N.x-v.x,N.y-v.y);z<C&&z>.01&&(C=z,S=[(N.x-v.x)/z,(N.y-v.y)/z])})}this.tops[M]?.update(v,e,n,s,S)});for(const v of this.tops){if(!v.justLanded)continue;v.justLanded=!1;const M=v.group.position;if(v.spec.boss){this.shock(M.x,M.y+.15,M.z,11,.5,v.spec.accent),this.burstSparks(M.x,M.y+.3,M.z,150,18,v.spec.accent),this.floorChips(M.x,M.y,M.z,40,null,1);for(let S=0;S<14;S++){const C=Math.random()*6.28;this.puff(M.x+Math.cos(C)*1.5,M.y+.3,M.z+Math.sin(C)*1.5,Math.cos(C)*4,1+Math.random()*2,Math.sin(C)*4,1.4+Math.random(),1+Math.random()*.6,!0)}this.trauma=1,this.fovKick=Math.max(this.fovKick,9)}else this.shock(M.x,M.y+.15,M.z,4.5,.35,v.spec.accent),this.burstSparks(M.x,M.y+.3,M.z,46,11,v.spec.accent),this.trauma=Math.min(1,this.trauma+.3)}for(const{h:v,obj:M}of this.hazards){const S=Sc(v,t.time);v.kind==="bar"?M.rotation.y=-S.a:M.position.set(S.x,$t(Math.min(ge,Math.hypot(S.x,S.y))),S.y)}this.plates.forEach((v,M)=>{if(this.floorPhase[M]!==1){v.mesh.position.set(0,0,0),v.mesh.rotation.set(0,0,0),v.mat.emissiveIntensity=0;return}const S=s*60+M*7;if(v.mesh.position.set(Math.sin(S*1.3)*.05,Math.sin(S*1.7)*.07,Math.cos(S*1.1)*.05),v.mesh.rotation.set(Math.sin(S)*.004,0,Math.cos(S*1.3)*.004),v.mat.emissiveIntensity=.14+.1*Math.sin(s*40),Math.random()<n*40){const[C,N]=this.wedgePoint(M),O=$t(Math.hypot(C,N))+.1;this.spark(C,O,N,(Math.random()-.5)*3,3+Math.random()*5,(Math.random()-.5)*3,.25+Math.random()*.3,1,.55,.15,12)}if(Math.random()<n*8){const[C,N]=this.wedgePoint(M);this.puff(C,$t(Math.hypot(C,N))+.2,N,(Math.random()-.5)*1.5,.8+Math.random(),(Math.random()-.5)*1.5,.5+Math.random()*.4,.7,!0)}}),this.marks=this.marks.filter(v=>(v.life-=n,v.life<=0?(this.scene.remove(v.g),!1):(v.tick(1-v.life/v.max,s,n),!0)));for(let v=0;v<t.tops.length;v++){const M=t.tops[v],S=this.tops[v];if(!M.spec.boss||!S||!M.inPlay||M.out||n<=0)continue;const C=S.group.position;if(M.bossMove==="charge"&&M.bossStage===1){for(let N=0;N<4;N++)this.spark(C.x-M.bossDx*2+(Math.random()-.5)*2,C.y+.15,C.z-M.bossDy*2+(Math.random()-.5)*2,-M.bossDx*(6+Math.random()*8)+(Math.random()-.5)*4,.5+Math.random()*3,-M.bossDy*(6+Math.random()*8)+(Math.random()-.5)*4,.2+Math.random()*.25,1,.7,.3,10);Math.random()<n*20&&this.puff(C.x-M.bossDx*2,C.y+.3,C.z-M.bossDy*2,-M.bossDx*3,.8,-M.bossDy*3,1+Math.random()*.6,.8,!0)}else if(M.bossMove&&M.bossStage===0&&Math.random()<n*30){const N=Math.random()*6.28,O=S.spec.radius*1.3;this.spark(C.x+Math.cos(N)*O,C.y+.15,C.z+Math.sin(N)*O,Math.cos(N)*2,2+Math.random()*4,Math.sin(N)*2,.25+Math.random()*.3,1,.6,.2,12)}}for(let v=0;v<t.tops.length;v++){const M=t.tops[v],S=this.tops[v];if(!S||!M.inPlay||M.out)continue;const C=S.group.position;if(S.braking&&Math.random()<n*14){const N=S.brakeDir;this.chip(C.x,C.y+.2,C.z,N[0],N[1],.3,this.stoneMat)}if(M.airT>0)for(let N=0;N<3;N++)this.spark(C.x+(Math.random()-.5)*.4,C.y+.2,C.z+(Math.random()-.5)*.4,(Math.random()-.5)*1.5,-1-Math.random()*2,(Math.random()-.5)*1.5,.25+Math.random()*.2,.85,.92,1,4)}this.puffs=this.puffs.filter(v=>{if(v.life-=n,v.life<=0)return this.scene.remove(v.m),!1;const M=v.life/v.max;return v.m.position.addScaledVector(v.v,n),v.v.multiplyScalar(Math.exp(-n*1.6)),v.v.y+=n*.6,v.m.rotation.x+=v.w.x*n,v.m.rotation.y+=v.w.y*n,v.m.scale.setScalar(v.s0*(.5+.7*(1-M))*Math.min(1,M*3.5)*Math.min(1,(1-M)*8+.2)),!0});for(let v=0;v<t.tops.length;v++){const M=t.tops[v],S=this.tops[v];if(!(!S||M.out||!M.inPlay||M.armour>.9)&&Math.random()<(1-M.armour)*n*24){const C=S.group.position,N=Math.random()*Math.PI*2;this.spark(C.x,C.y+.5,C.z,Math.cos(N)*4,3+Math.random()*5,Math.sin(N)*4,.35+Math.random()*.4,1,.5+Math.random()*.35,.2)}}this.constructs=this.constructs.filter(v=>{v.t+=n;const M=this.tops[v.i];if(v.c.follow&&M&&!M.bursted){const S=M.group.position;v.c.group.position.set(S.x,$t(Math.min(ge,Math.hypot(S.x,S.z))),S.z)}if(v.t<v.c.dur){const S=v.c.group.position;return v.c.update(v.t,n,(C,N,O,z,Y,U,H,D)=>{Si.setHex(D),this.spark(S.x+C,S.y+N,S.z+O,z,Y,U,H,Si.r,Si.g,Si.b,7)}),!0}return this.scene.remove(v.c.group),v.c.group.traverse(S=>{const C=S;C.geometry?.dispose(),C.material?.dispose?.()}),!1}),this.bolts=this.bolts.filter(v=>(v.life-=n,v.line.material.opacity=Math.max(0,v.life/.22),v.life>0?!0:(this.scene.remove(v.line),v.line.geometry.dispose(),!1)));const a=t.stadium.segHp;t.segHp.forEach((v,M)=>{const S=this.segs[M];S&&!S.open&&(S.mat.emissiveIntensity=(1-v/a)*.9)}),t.pillars.forEach((v,M)=>{const S=this.pillarMeshes[M]?.children[0];S&&(S.material.emissiveIntensity=(1-v.hp/t.stadium.pillars[M].hp)*.9)});for(const v of t.tops){if(!v.onRail||n<=0)continue;const M=Math.hypot(v.vx,v.vy)||1;this.spark(v.x,$t(Math.hypot(v.x,v.y))+.15,v.y,-v.vx/M*6+(Math.random()-.5)*3,1+Math.random()*3,-v.vy/M*6+(Math.random()-.5)*3,.25,.5,.75,1)}this.fovKick=Math.max(0,this.fovKick-n*14);const o=42+this.fovKick;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix());for(let v=0;v<Ze;v++){if(this.sparkLife[v]<=0)continue;this.sparkLife[v]-=n;const M=v*3;if(this.sparkLife[v]<=0){this.sparkPos[M+1]=-999;continue}this.sparkVel[M+1]-=this.sparkGrav[v]*n,this.sparkPos[M]+=this.sparkVel[M]*n,this.sparkPos[M+1]+=this.sparkVel[M+1]*n,this.sparkPos[M+2]+=this.sparkVel[M+2]*n;const S=this.sparkLife[v]/this.sparkMax[v];this.sparkCol[M]=this.sparkBase[M]*S,this.sparkCol[M+1]=this.sparkBase[M+1]*S*S,this.sparkCol[M+2]=this.sparkBase[M+2]*S*S*S}const l=this.camera.position;for(let v=0;v<Ze;v++){const M=v*3,S=v*12;if(this.sparkLife[v]<=0){for(let It=0;It<4;It++)this.streakPos[S+It*3+1]=-999;continue}const C=this.sparkPos[M],N=this.sparkPos[M+1],O=this.sparkPos[M+2],z=this.sparkVel[M],Y=this.sparkVel[M+1],U=this.sparkVel[M+2],H=Math.hypot(z,Y,U)||1,D=Math.min(2.6,Math.max(.18,H*.055)),V=z/H,et=Y/H,st=U/H,gt=l.x-C,At=l.y-N,q=l.z-O;let Q=et*q-st*At,tt=st*gt-V*q,K=V*At-et*gt;const pt=Math.hypot(Q,tt,K)||1,Nt=this.sparkLife[v]/this.sparkMax[v],Dt=(.04+.05*Math.min(1,Nt*1.5))/pt;Q*=Dt,tt*=Dt,K*=Dt;const ee=C-V*D,nt=N-et*D,lt=O-st*D,I=.25;this.streakPos.set([C-Q,N-tt,O-K,C+Q,N+tt,O+K,ee-Q*I,nt-tt*I,lt-K*I,ee+Q*I,nt+tt*I,lt+K*I],S),this.streakCol.set([this.sparkCol[M],this.sparkCol[M+1],this.sparkCol[M+2],this.sparkCol[M],this.sparkCol[M+1],this.sparkCol[M+2],0,0,0,0,0,0],S)}this.streaks.geometry.attributes.position.needsUpdate=!0,this.streaks.geometry.attributes.color.needsUpdate=!0,this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(const v of this.shocks){if(v.life<=0)continue;v.life-=n;const M=1-Math.max(0,v.life)/v.max;v.mesh.scale.setScalar(v.size*(.5+.5*(1-(1-M)*(1-M)))),v.mesh.material.opacity=(1-M)*(1-M),v.life<=0&&(v.mesh.visible=!1)}for(const v of this.beams){if(v.life+=n,v.beam.material.opacity=Math.min(1,v.life*3)*(.5+.2*Math.sin(v.life*6)),v.beam.position.y=v.gem.position.y,Math.random()<n*16){const M=v.gem.material.emissive,S=Math.random()*Math.PI*2;this.spark(v.gem.position.x+Math.cos(S)*.5,v.gem.position.y-.4,v.gem.position.z+Math.sin(S)*.5,-Math.sin(S)*1.5,2.5+Math.random()*2,Math.cos(S)*1.5,.7,M.r,M.g,M.b,0)}v.gem.rotation.y+=n*3,v.gem.position.y+=Math.sin(v.life*3)*n*.3}for(const v of this.pieces){v.life-=n,v.v.y-=24*n,v.obj.position.addScaledVector(v.v,n);const M=v.obj.position,S=Math.hypot(M.x,M.z),C=this.inHole(M.x,M.z)?-50:$t(S)+.15,N=M.y<=C+.02&&S<ge;if(v.hot&&v.hot>0&&this.fx3<40&&(v.hot=Math.max(0,v.hot-n*.6),Math.random()<n*40*v.hot&&(this.fx3++,this.spark(M.x,M.y,M.z,-v.v.x*.15+(Math.random()-.5)*3,Math.random()*2,-v.v.z*.15+(Math.random()-.5)*3,.2+Math.random()*.2,1,.6,.2,14))),M.y<C&&v.v.y<0&&S<ge){const O=-v.v.y;if(M.y=C,v.v.y*=-.42,v.v.x*=.72,v.v.z*=.72,v.w.multiplyScalar(.6),v.bounces=(v.bounces??0)+1,O>4){const z=Math.min(10,Math.floor(O*.8));for(let Y=0;Y<z;Y++){const U=Math.random()*6.28;this.spark(M.x,C+.1,M.z,Math.cos(U)*(2+Math.random()*5)+v.v.x*.4,1+Math.random()*O*.35,Math.sin(U)*(2+Math.random()*5)+v.v.z*.4,.2+Math.random()*.25,1,.7,.3,20)}this.trauma=Math.min(1,this.trauma+Math.min(.12,O*.01))}}if(N){const O=Math.exp(-n*2.2);if(v.v.x*=O,v.v.z*=O,v.w.multiplyScalar(Math.exp(-n*2.5)),v.flat&&(v.bounces??0)>=2){const z=v.obj.rotation,Y=1-Math.exp(-n*7);z.x+=(Math.round(z.x/Math.PI)*Math.PI-z.x)*Y,z.z+=(Math.round(z.z/Math.PI)*Math.PI-z.z)*Y}}v.obj.rotation.x+=v.w.x*n,v.obj.rotation.y+=v.w.y*n,v.obj.rotation.z+=v.w.z*n}this.fx3=0;for(const v of this.pieces)v.ttl!==void 0&&(v.ttl-=n,v.ttl<.4&&v.obj.scale.multiplyScalar(Math.max(.01,v.ttl/.4)**.2),v.ttl<=0&&(v.obj.position.y=-999));if(this.chips=this.chips.filter(v=>(v.ttl??0)>0),this.pieces.length){const v=this.pieces.filter(M=>M.obj.position.y<-40);if(v.length){for(const M of v)this.scene.remove(M.obj);this.pieces=this.pieces.filter(M=>M.obj.position.y>=-40)}}const c=t.tops.filter(v=>v.inPlay&&!v.out);let h=0,u=0,d=1;if(c.length){for(const v of c)h+=v.x/c.length,u+=v.y/c.length;if(c.length===2){const v=Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y);d=.7+.3*Math.min(1,v/11)}}const f=1-Math.exp(-n*3),g=Math.max(0,1-11/ge),x=t.tops[r],p=x&&x.inPlay&&!x.out?x:null,m=h*.45*(1-g)+(p?p.x:h)*g,b=u*.45*(1-g)+(p?p.y:u)*g;this.focus.x+=(m-this.focus.x)*f,this.focus.z+=(b-this.focus.z)*f,this.zoom+=(d-this.zoom)*f,this.finT>0&&(this.finT=Math.max(0,this.finT-n));{const v=1-this.finT/this.finDur,S=(this.finT>0?1:0)?Math.min(1,v/.18)*(v<.55?1:Math.max(0,1-(v-.55)/.45)):0;this.finEnv+=(S-this.finEnv)*(1-Math.exp(-n*14));const C=t.tops[this.finTarget];this.finEnv>.001&&C&&(this.focus.x+=(C.x-this.focus.x)*this.finEnv*.25,this.focus.z+=(C.y-this.focus.z)*this.finEnv*.25)}this.introT>0&&(this.introT=Math.max(0,this.introT-n));{const v=1-this.introT/this.introDur,M=this.introT>0?Math.min(1,v/.2)*(v<.74?1:Math.max(0,1-(v-.74)/.26)):0;this.introEnv+=(M-this.introEnv)*(1-Math.exp(-n*6))}const y=t.tops[this.introTarget],_=this.focus.x+((y&&y.inPlay?y.x:0)-this.focus.x)*this.introEnv,R=this.focus.z+((y&&y.inPlay?y.y:0)-this.focus.z)*this.introEnv;this.shoveV.x+=(-12*12*this.shove.x-2*12*this.shoveV.x)*n,this.shoveV.z+=(-12*12*this.shove.z-2*12*this.shoveV.z)*n,this.shove.x+=this.shoveV.x*n,this.shove.z+=this.shoveV.z*n,this.trauma=Math.max(0,this.trauma-n*2.2);const E=this.trauma*this.trauma*.9,T=this.distScale*this.zoom*Math.min(ge,11.5)/10*(1-.34*this.finEnv)*(1-.45*this.introEnv);if(this.camera.position.set(_+this.shove.x+(Math.random()-.5)*E,20.5*T*(1-.3*this.introEnv)+(Math.random()-.5)*E,R+this.shove.z+13.5*T+(Math.random()-.5)*E),this.camera.lookAt(_+this.shove.x*.4,.9+1.3*this.introEnv,R+this.shove.z*.4+.9),this.debugCam){const v=this.debugCam;this.camera.position.set(v[0],v[1],v[2]),this.camera.lookAt(v[3],v[4],v[5])}this.composer.render()}}const Pa=i=>"#"+i.toString(16).padStart(6,"0");class Oy{constructor(t,e,n){this.renderer=t,this.save=e,this.cb=n;const s=this.scene;s.background=new Ht(526864),s.fog=new uo(526864,14,40),s.environment=new Ya(t).fromScene(new yf,.04).texture,s.environmentIntensity=.5;const r=new gc(16777215,1.5);r.position.set(3.5,7,4.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const a=r.shadow.camera;a.left=a.bottom=-3.5,a.right=a.top=3.5,a.near=1,a.far=20,r.shadow.bias=-3e-4,r.shadow.normalBias=.02;const o=new $s(8368383,16,30,2);o.position.set(-5,2.5,2),this.backLight.position.set(0,3,-5),s.add(r,o,this.backLight,new Mf(10466559,395018,.2));const l=new me({color:1777708,metalness:.9,roughness:.3}),c=new ht(new zt(1.75,1.95,.3,96),l);c.position.y=-.15,c.receiveShadow=!0;const h=new ht(new he(1.76,.022,8,128),this.ringMat);h.rotation.x=Math.PI/2,h.position.y=.005;const u=new ht(new he(1.1,.008,6,96),new Te({color:3359071}));u.rotation.x=Math.PI/2,u.position.y=.004;const d=new ht(new Vr(40,64),new me({color:658708,metalness:.5,roughness:.55}));d.rotation.x=-Math.PI/2,d.position.y=-.3,d.receiveShadow=!0,s.add(c,h,u,d,this.holder),this.composer=new Sf(t),this.composer.addPass(new wf(s,this.camera)),this.composer.addPass(new ls(new Z(1,1),.22,.35,.96)),this.composer.addPass(new Ef),this.el=document.createElement("div"),this.el.id="ws",this.el.className="hidden",this.tier=e.tier,this.el.innerHTML=`
      <header><h1>SPINFORGE</h1><span>FORGE</span></header>
      <button id="wsGear" aria-label="Settings">${nm()}</button>
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
      <footer><button id="wsExplode">EXPLODED VIEW</button><button id="wsBattle" class="go">BATTLE</button></footer>`,document.body.appendChild(this.el),this.q("#wsGear").addEventListener("click",()=>n.onSettings()),this.wire(),this.rebuild(),this.renderThumbs(),this.renderAll(),this.resize(),window.addEventListener("resize",()=>this.resize())}active=!1;perTeam=1;tier=1;time=0;scene=new $a;camera=new je(30,1,.1,100);composer;holder=new Tt;model=null;ringMat=new Te({color:16777215});backLight=new $s(16777215,18,30,2);exploded=!1;explode=0;drop={tip:0,disc:0,blade:0,core:0};slot="blade";hover=null;sel=null;sort="power";bulk="off";bulkMax=0;yaw=.6;pitch=.42;dragging=!1;distScale=1;thumbs={};el;q(t){return this.el.querySelector(t)}show(t){this.active=t,this.el.classList.toggle("hidden",!t),t&&this.resize()}refresh(){this.tier=Math.min(this.tier,this.save.tier),this.rebuild(),this.renderAll()}wire(){this.q("#wsTabs").addEventListener("click",a=>{const o=a.target.dataset.slot;o&&(this.slot=o,this.hover=null,this.sel=null,this.renderAll())}),this.q("#wsTools").addEventListener("click",a=>{const o=a.target.closest("[data-tool]")?.dataset.tool;if(o){if(o==="sort")this.sort=this.sort==="power"?"rarity":this.sort==="rarity"?"newest":"power";else if(o==="bulk")this.bulk=this.bulk==="off"?"pick":"off";else if(o==="step")this.bulkMax=(this.bulkMax+Number(a.target.closest("[data-d]").dataset.d)+4)%4;else if(o==="ask")this.bulk="confirm";else if(o==="no")this.bulk="off";else if(o==="yes"){Dp(this.save,this.bulkMax),this.bulk="off",this.sel=null,this.hover=null,this.changed(!1);return}this.renderAll()}});const t=this.q("#wsCards");t.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-act]"),c=o.closest(".ws-card")?.dataset.uid;if(c){if(l){const h=l.dataset.act;h==="salv"?(vd(this.save,c),this.sel=null,this.hover=null):h==="fit"?(this.save.equipped[this.slot]=c,this.sel=null,this.hover=null,this.slot in this.drop&&(this.drop[this.slot]=1)):h==="temper"?Cp(this.save,c):h==="reroll"&&Pp(this.save,c,Number(l.dataset.i),Math.random),this.changed(!1);return}this.sel=this.sel===c?null:c,this.renderAll()}}),t.addEventListener("mouseover",a=>{const o=a.target.closest(".ws-card")?.dataset.uid??null;o!==this.hover&&(this.hover=o,this.renderStats())}),t.addEventListener("mouseleave",()=>{this.hover=null,this.renderStats()});const e=(a,o)=>this.q(a).addEventListener("click",l=>{const c=l.target.dataset.v;c!==void 0&&(this.save[o]=Number(c),this.changed(!0))});e("#wsPaint","paint"),e("#wsGlow","glow"),this.q("#wsMetal").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.metal=o,this.changed(!0))}),this.q("#wsSpin").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.spinDir=o==="-1"?-1:1,this.changed(!1))}),this.q("#wsSetup").addEventListener("click",a=>{const o=a.target.closest("[data-step]");if(!o)return;const l=Number(o.dataset.d);o.dataset.step==="mode"?this.perTeam=Math.max(1,Math.min(5,this.perTeam+l)):this.tier=Math.max(1,Math.min(this.save.tier,this.tier+l)),this.renderAll()}),this.q("#wsExplode").addEventListener("click",()=>{this.exploded=!this.exploded,this.q("#wsExplode").textContent=this.exploded?"ASSEMBLE":"EXPLODED VIEW"}),this.q("#wsBattle").addEventListener("click",()=>this.cb.onBattle());const n=this.renderer.domElement;let s=0,r=0;n.addEventListener("pointerdown",a=>{this.active&&(this.dragging=!0,s=a.clientX,r=a.clientY)}),window.addEventListener("pointermove",a=>{!this.active||!this.dragging||(this.yaw+=(a.clientX-s)*.01,this.pitch=Math.max(.08,Math.min(1.25,this.pitch+(a.clientY-r)*.006)),s=a.clientX,r=a.clientY)}),window.addEventListener("pointerup",()=>this.dragging=!1)}changed(t){this.rebuild(),t&&(this.thumbs={}),this.renderAll(),this.cb.onChange()}rebuild(){this.model&&(this.holder.remove(this.model.root),Bu(this.model.root));const t=bl(this.save);this.model=Pf({blade:t.blade,disc:t.disc,tip:t.tip,core:t.core,paint:t.paint,glow:t.glow,metal:t.metal}),this.holder.add(this.model.root),this.ringMat.color.setHex(t.glow),this.backLight.color.setHex(t.paint),this.el.style.setProperty("--glow",Pa(t.glow))}renderThumbs(){const t=new Set(this.save.items.map(d=>d.part));if(fi.every(d=>this.thumbs[d.id]||d.gen&&!t.has(d.id)))return;const e=this.renderer,n=144,s=new $a;s.background=new Ht(856345),s.environment=this.scene.environment;const r=new gc(16777215,1.4);s.environmentIntensity=.55,r.position.set(2,5,3),s.add(r);const a=new je(26,1,.05,50),o=Af(this.save),l=e.getSize(new Z),c=e.getPixelRatio();e.setPixelRatio(1),e.setSize(n,n,!1);const h=new Ni,u=new Oi;for(const d of fi){if(this.thumbs[d.id]||d.gen&&!t.has(d.id))continue;const f=d.slot==="launcher"?Ry(d.id,o):d.slot==="reactor"?Ay(d.id):Cf(d.slot,d.id,o);s.add(f),h.setFromObject(f).getBoundingSphere(u);const g=u.radius/Math.sin(13*Math.PI/180);a.position.copy(u.center).add(new L(.3,d.slot==="blade"||d.slot==="disc"||d.slot==="reactor"?.95:.5,.5).normalize().multiplyScalar(g*1.02)),a.lookAt(u.center),e.render(s,a),this.thumbs[d.id]=e.domElement.toDataURL("image/png"),s.remove(f),Bu(f)}e.setPixelRatio(c),e.setSize(l.x,l.y,!1)}resize(){const t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.composer.setSize(e,n),this.camera.aspect=e/n,this.distScale=Math.max(1,.85/this.camera.aspect),e<900&&n>e?(this.distScale=Math.max(1.9,1.2/this.camera.aspect),this.camera.setViewOffset(e,n,0,n*.02,e,n)):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}frame(t){if(this.time+=t,this.model?.shift(Math.max(0,Math.min(1,.5-.9*Math.cos(this.time*1.4)))),this.model?.flail(Math.max(0,Math.min(1,.5-.7*Math.cos(this.time*1.1)))),this.dragging||(this.yaw+=t*.4),this.holder.rotation.y=this.yaw,this.explode+=((this.exploded?1:0)-this.explode)*(1-Math.exp(-t*7)),this.model)for(const s of Fr){const r=this.model.parts[s],a=this.drop[s]=Math.max(0,this.drop[s]-t*2.6);r.position.y=kr[s]+(Cy[s]-kr[s])*this.explode+a*a*1.5,r.rotation.y=a*a*2.5;const o=this.slot===s&&this.explode>.5?1.05:1;r.scale.setScalar(o+.1*Math.sin(a*Math.PI))}const e=.55+this.explode*.95,n=(6.8+this.explode*2.6)*this.distScale;this.camera.position.set(0,e+Math.sin(this.pitch)*n,Math.cos(this.pitch)*n),this.camera.lookAt(0,e,0),this.composer.render()}renderAll(){this.renderThumbs();const t=this.save;this.q("#wsTabs").innerHTML=di.map(l=>`<button data-slot="${l}" class="${l===this.slot?"on":""}">${td[l]}</button>`).join("");const e=t.equipped[this.slot],n=Ip(t,t.items.filter(l=>Fn(l.part).slot===this.slot),this.sort,e);this.sel&&!n.some(l=>l.uid===this.sel)&&(this.sel=null);const s=this.q("#wsCards"),r=s.scrollTop;s.innerHTML=n.map(l=>{const c=Ci[l.rarity],h=l.uid===e,u=l.uid===this.sel,d=l.affixes.length?l.affixes.map(g=>`<span class="af">${ud(g)}</span>`).join(""):`<p>${Fn(l.part).blurb}</p>`,f=h?"<em>FITTED</em>":"";return`
        <div class="ws-card ${h?"on":""} ${u?"open":""}" data-uid="${l.uid}" style="--rc:${Pa(c.color)}">
          <img src="${this.thumbs[l.part]??""}" alt="" />
          <div class="ws-main"><b style="color:${Pa(c.color)}">${hd(l)}</b><span class="lv">${c.name.toUpperCase()} · LEVEL ${l.level}</span>${d}${f}</div>
          ${u?this.detail(l,h,t.items.find(g=>g.uid===e)):""}
        </div>`}).join(""),s.scrollTop=r,this.renderTools();const a=yr(t);this.q("#wsName").textContent=sd(bl(t)),this.q("#wsType").textContent=`${Ap(Co(a))} TYPE  ·  ${Zu[a.ability]}  ·  ${a.elements.map(l=>Ue[l].super.name).join(" + ")}`,this.q("#wsMeta").textContent=`GEAR ${kp(t)}  ·  SCRAP ${t.scrap}  ·  ${t.items.length} PARTS`,this.q("#wsMode").textContent=`${this.perTeam} V ${this.perTeam}`,this.q("#wsTier").textContent=`TIER ${this.tier}${Md(this.tier)?" · BOSS":""}`,this.q("#wsSpin").innerHTML=[[1,"RIGHT"],[-1,"LEFT"]].map(([l,c])=>`<button data-v="${l}" class="${t.spinDir===l?"on":""}">${c}</button>`).join("");const o=(l,c)=>l.map(h=>`<button data-v="${h}" class="${h===c?"on":""}" style="background:${Pa(h)}"></button>`).join("");this.q("#wsPaint").innerHTML=o(ed,t.paint),this.q("#wsGlow").innerHTML=o(nd,t.glow),this.q("#wsMetal").innerHTML=id.map(l=>`<button data-v="${l}" class="${t.metal===l?"on":""}">${vc[l].name.toUpperCase()}</button>`).join(""),this.renderStats()}detail(t,e,n){const s=this.save,r=Lp(t,e?void 0:n),a=r.rows.map(f=>{const g=t.affixes.findIndex(y=>y.key===f.key),x=f.diff>0?"up":f.diff<0?"down":"",p=e?`+${f.item}%`:`${f.now?"+"+f.now+"%":"-"} → ${f.item?"+"+f.item+"%":"-"}`,m=!e&&f.diff?`<i class="${x}">${f.diff>0?"+":""}${f.diff}</i>`:"",b=g<0?"":`<button class="ws-act ws-re" data-act="reroll" data-i="${g}" ${s.scrap<yl(t)?"disabled":""} aria-label="Reroll ${f.label}">REROLL ${yl(t)}</button>`;return`<div class="ws-cmp"><span class="k">${f.label}</span><span class="v">${p}</span>${m}${b}</div>`}).join(""),o=e?"":`<div class="ws-cmp"><span class="k">Power</span><span class="v">${Ri(t)}</span><i class="${r.power>0?"up":r.power<0?"down":""}">${r.power>0?"+":""}${r.power}</i></div>`,l=t.level>=dd(s),c=fd(t),h=`<button class="ws-act" data-act="temper" ${l||s.scrap<c?"disabled":""}>${l?"MAX LEVEL "+t.level:`TEMPER L${t.level+1} · ${c}`}</button>`,u=e?"":'<button class="ws-act go" data-act="fit">FIT</button>',d=e?"":`<button class="ws-act" data-act="salv">SALVAGE +${_l(t)}</button>`;return`<div class="ws-detail">${a||'<div class="ws-cmp"><span class="k">No stat rolls</span></div>'}${o}<div class="ws-acts">${u}${h}${d}</div></div>`}renderTools(){const t=this.save,e=pd(t,this.bulkMax),n=e.reduce((a,o)=>a+_l(o),0),s=Ci.slice(0,4).map(a=>a.name.toUpperCase());let r="";this.bulk==="pick"?r=`<div class="ws-bulk"><div class="ws-step"><button data-tool="step" data-d="-1">◀</button><span>UP TO ${s[this.bulkMax]}</span><button data-tool="step" data-d="1">▶</button></div>
        <button class="ws-act" data-tool="ask" ${e.length?"":"disabled"}>SALVAGE ${e.length} · +${n}</button><small>Fitted parts are never salvaged. All slots.</small></div>`:this.bulk==="confirm"&&(r=`<div class="ws-bulk"><small>Salvage ${e.length} parts up to ${s[this.bulkMax]} for ${n} scrap? This cannot be undone.</small>
        <div class="ws-acts"><button class="ws-act go" data-tool="yes">YES, SALVAGE</button><button class="ws-act" data-tool="no">CANCEL</button></div></div>`),this.q("#wsTools").innerHTML=`<div class="ws-acts"><button class="ws-act" data-tool="sort">SORT: ${this.sort.toUpperCase()}</button><button class="ws-act ${this.bulk==="off"?"":"on"}" data-tool="bulk">BULK SALVAGE</button></div>${r}`}renderStats(){const t=this.save,e=Co(yr(t)),n=this.hover??this.sel,r=n&&n!==t.equipped[this.slot]&&t.items.some(o=>o.uid===n)?Co(yr({...t,equipped:{...t.equipped,[this.slot]:n}})):e,a=o=>Math.min(100,6+o*94);this.q("#wsStats").innerHTML=Va.map(o=>{const l=a(e[o]),c=a(r[o]),h=Math.round((r[o]-e[o])*100),u=h===0?"":`<i class="${h>0?"up":"down"}">${h>0?"+":""}${h}</i>`,d=h===0?"":`<span class="${h>0?"up":"down"}" style="width:${Math.max(l,c)}%"></span>`;return`<div class="ws-stat"><label>${wp[o]}${u}</label><div class="ws-bar">${d}<span class="cur" style="width:${Math.min(l,c)}%"></span></div></div>`}).join("")}}const Kt=0,Vn=i=>{try{navigator.vibrate?.(i)}catch{}};{const i=document.createElement("style");i.textContent=`
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
@keyframes bplate{0%{opacity:0;transform:scale(1.35)}12%{opacity:1;transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(.98)}}`,document.head.append(i);const t=document.createElement("div");t.id="arrows";const e=document.createElement("div");e.id="combo",e.innerHTML="<i></i><i></i><i></i><span>FINISHER</span>";const n=document.createElement("div");n.id="bossbar",n.innerHTML='<div class="bn"><b id="bossName"></b><em id="bossPhase"></em></div><div class="bb"><i id="bossFill"></i><u style="left:33.3%"></u><u style="left:66.6%"></u></div><div class="mv" id="bossMove"></div>';const s=document.createElement("div");s.id="bossplate",s.innerHTML="<span></span><small></small>",t.style.display=e.style.display="none",document.body.append(t,e,n,s)}const Lf="spinforge.save.v1",ce=i=>document.getElementById(i),Ii=i=>"#"+i.toString(16).padStart(6,"0"),Fy=i=>i[Math.floor(Math.random()*i.length)],qr=ce("game"),Yt=new Ny(qr),qt=new sm,_c=new URLSearchParams(location.search),Di=_c.has("demo");function ky(){try{return fh(JSON.parse(localStorage.getItem(Lf)??"null"))}catch{return fh(null)}}function If(){try{localStorage.setItem(Lf,JSON.stringify(qe))}catch{}}const qe=ky();let ln=null,Et,yc=null,ki="workshop",Yc=!1;const By=im(()=>{qt.start(),qt.strike()});Yt.applyQuality(Ie.quality);ro(()=>Yt.applyQuality(Ie.quality));const Nn=new Oy(Yt.renderer,qe,{onChange:If,onBattle:()=>zr("new"),onSettings:By});Di&&_c.get("demo")&&(Nn.perTeam=Math.max(1,Math.min(5,Number(_c.get("demo"))||1)));const ds=document.createElement("div");ds.id="endbar";ds.className="hidden";document.body.appendChild(ds);ds.addEventListener("click",i=>{const t=i.target.dataset.a;t==="again"&&zr("again"),t==="next"&&zr("next"),t==="shop"&&Kc("workshop")});const $c=document.createElement("div");$c.id="cds";$c.innerHTML='<div class="cd"><i id="cdStrike"></i><span>STRIKE</span><small>CLICK</small></div><div class="cd"><i id="cdBoost"></i><span>BOOST</span><small>SHIFT</small></div>';ce("hud").appendChild($c);const zy=ce("cdStrike"),Hy=ce("cdBoost"),xn=Zp({mainDown:()=>{ki==="battle"&&(Et.world.tops[Kt].inPlay?yo=!0:Of())},mainUp:()=>Ff(),boost:()=>Yr=!0,ability:()=>_o=!0,super:()=>bo=!0}),Pn=new Set;let Mo=!1,ai={x:0,y:3},vn=0,ui=!1,Br=0,_o=!1,Yr=!1,yo=!1,bo=!1,to=null,Df=[];const bc=3;let Tr=0,xr=0,vr=0,Xe=0,Wn=0,eo=performance.now(),fl=0,Ha=0,Hu="";function Kc(i){ki=i,Nn.show(i==="workshop"),i==="workshop"&&Nn.refresh(),ce("hud").classList.toggle("hidden",i!=="battle"),ds.classList.add("hidden"),xn.show(i==="battle"),window.__sfBusy=i==="battle";for(const t of["arrows","combo"]){const e=document.getElementById(t);e&&(e.style.display=i==="battle"?"":"none")}i==="workshop"?(qt.setHum(0,0,!1),qt.setHum(1,0,!1)):Yt.resize()}function zr(i){if(qt.start(),i==="next"&&(Nn.tier=Math.min(qe.tier,Nn.tier+1)),i!=="again"||!ln){const t=Nn.perTeam,e=Nn.tier,n=Yp(Math.random,e,t,qe.paint);ln={perTeam:t,tier:e,boss:n.boss,stadium:Fy(Jf(t)),specs:[yr(qe),...n.allies,...n.enemies],teams:[...new Array(t).fill(0),...n.enemies.map(()=>1)]}}else ln.specs[Kt]=yr(qe);document.documentElement.style.setProperty("--me",Ii(ln.specs[Kt].accent)),document.documentElement.style.setProperty("--foe",Ii(ln.specs[ln.perTeam].accent)),Et=new Kp(ln.specs,Math.random()*1e9|0,2,ln.stadium,ln.teams),Yc=!1,yc=null,vr=0,Kc("battle")}const Uf=()=>{const i=Br/Et.specs[Kt].chargeTime%2;return i>1?2-i:i};function Nf(){const i=Math.hypot(ai.x,ai.y),t=Rr(Et.world.stadium),e=i>t?t/i:1;return{x:ai.x*e,y:ai.y*e}}function Of(){Mo=!0,!Di&&Et.phase==="live"&&!Et.world.tops[Kt].inPlay&&!ui&&(ui=!0,Br=0)}function Ff(){if(Mo=!1,ui){ui=!1;const i=Nf();to={x:i.x,y:i.y,power:Uf(),tilt:vn}}}function Gy(){Yt.setTops(Et.specs,Et.stadium),ui=!1,Br=0,to=null,Wn=0,Df=Et.specs.map(()=>.25+Math.random()*.7),Yy();const i=Et.specs.findIndex(t=>t.boss);Tr=0,xr=0,i>=0&&Et.round===1&&(Tr=bc,Yt.bossIntro(i,bc))}function Vy(i){if(Di)return Qu(i,Kt);const t={sx:0,sy:0,ability:_o,boost:Yr,strike:yo,super:bo};if(xn.active)return t.sx=xn.sx,t.sy=xn.sy,t;(Pn.has("KeyA")||Pn.has("ArrowLeft"))&&(t.sx-=1),(Pn.has("KeyD")||Pn.has("ArrowRight"))&&(t.sx+=1),(Pn.has("KeyW")||Pn.has("ArrowUp"))&&(t.sy-=1),(Pn.has("KeyS")||Pn.has("ArrowDown"))&&(t.sy+=1);const e=i.tops[Kt];if(t.sx===0&&t.sy===0&&e.inPlay){const n=ai.x-e.x,s=ai.y-e.y,r=Math.hypot(n,s);r>.5&&(t.sx=n/r,t.sy=s/r)}return t}const ss=document.createElement("div");ss.id="od";ss.innerHTML="<i></i><span></span>";ce("hud").appendChild(ss);const Qi=document.createElement("div");Qi.id="banner";ce("hud").appendChild(Qi);const Ti=document.createElement("div");Ti.id="flash";document.body.appendChild(Ti);function La(i,t,e){Qi.textContent=i,Qi.style.setProperty("--bc",Ii(t)),Qi.className="",Qi.offsetWidth,Qi.className=e?"show big":"show"}function Ia(i,t){Ti.style.background=Ii(i),Ti.style.transition="none",Ti.style.opacity=String(t),Ti.offsetWidth,Ti.style.transition="opacity 0.35s ease-out",Ti.style.opacity="0"}function Cn(i){ce("toast").textContent=i,ce("toast").style.opacity="1",Ha=1.3}function kf(i){switch(i.type){case"hit":{Yt.hit(i.x,i.y,i.nx,i.ny,i.strength,i.a,i.b,i.power),qt.clash(i.strength);const t=i.a===Kt||i.b===Kt;t&&i.strength>.5&&(Xe=Math.max(Xe,.02+.05*i.strength)),t&&i.strength>.25&&Vn(8+30*i.strength),i.power>=0&&(qt.power(),t&&(Xe=Math.max(Xe,.09)),i.power===2&&t?Cn("CLASH!"):i.power===Kt&&Cn("POWER HIT"));break}case"break":Yt.breakPiece(i.kind,i.index,i.x,i.y),qt.wallBreak(),Cn(i.kind==="wall"?"WALL DOWN":"PILLAR DOWN");break;case"boost":Yt.boostFx(i.i,Et.world),i.i===Kt&&Yt.kick(6),qt.boost();break;case"shift":qt.ability("brace"),i.i===Kt&&Cn(i.guard?"GUARD FORM":"ATTACK FORM");break;case"strike":qt.strike();break;case"super":{Yt.superFx(i.i,i.elements),qt.superFx();for(const t of i.elements)qt.superEl(t);Wn=Math.max(Wn,i.i===Kt?.6:.35),La(i.elements.map(t=>Ue[t].super.name).join(" + "),Ue[i.elements[0]].color,!0),Ia(Ue[i.elements[0]].color,.5);break}case"pulse":Yt.pulseFx(i,Et.world),i.targets.length&&qt.zap();break;case"react":Yt.reactFx(i.x,i.y,i.color),qt.power(),La(i.team?`TEAM COMBO  ·  ${i.name}`:i.name,i.color,i.team),Ia(i.color,i.team?.5:.35),(i.i===Kt||i.by===Kt)&&(Xe=Math.max(Xe,.1));break;case"finisher":{const t=i.i===Kt||i.target===Kt;Yt.reactFx(i.x,i.y,16777215),Yt.finisherFx(i.i,i.target,t),Yt.kick(9),qt.power(),qt.wallBreak(),La("FINISHER",ln.specs[i.i].accent,!0),Wn=Math.max(Wn,t?.8:.4),Xe=Math.max(Xe,t?.2:.08),t&&Vn(70);break}case"floor":i.phase==="warn"?(Yt.floorWarn(i.sector),qt.rim(.7),Cn("FLOOR CRACKING")):(Yt.floorFall(i.sector),qt.wallBreak());break;case"fall":Yt.fallFx(i.i),i.i===Kt&&Vn(80);break;case"hazard":Yt.hazardHit(i),qt.rim(i.strength),i.i===Kt&&i.strength>.3&&Vn(40);break;case"plate":Yt.plateFx(i.i,i.lost),qt.wallBreak(),i.i===Kt&&Vn(50),Cn(i.i===Kt?i.left?`PLATE LOST (${i.left} LEFT)`:"LAST PLATE LOST":i.left?"PLATE OFF":"PLATES GONE");break;case"crack":i.i===Kt&&Vn(90),i.stage<3&&(Yt.crackTop(i.i,i.stage),qt.wallBreak(),Cn(i.i===Kt?i.stage===1?"YOUR ARMOUR BROKE":"YOUR DISC SHEARED OFF":i.stage===1?"ARMOUR BREAK":"DISC BREAK"),i.i===Kt&&Ia(16724770,.4));break;case"rim":Yt.rimHit(i.x,i.y,i.strength),qt.rim(i.strength);break;case"out":i.reason==="burst"||i.reason==="broken"?(Yt.burstTop(i.i),qt.burst(),Xe=Math.max(Xe,.1)):i.reason==="ringout"?(Yt.ringOut(i.i),qt.ringOut()):qt.spinOut(),Et.world.over?Wn=1.3:i.i===Kt&&Cn("YOU ARE OUT");break;case"ability":qt.ability(i.kind),i.kind==="spring"&&Yt.jumpFx(i.i,Et.world);break;case"brake":Yt.brakeFx(i),i.phase==="stop"?qt.ability("brake"):(qt.release(),i.i===Kt&&Yt.kick(8));break;case"land":Yt.landFx(i,Et.world),qt.land(),i.i===Kt&&Vn(40);break;case"counter":Yt.counterFx(i),qt.strike(),qt.power(),i.i===Kt&&(Cn("COUNTER"),Yt.kick(8));break;case"telegraph":Yt.telegraphFx(i),qt.bossWind(i.dur),Cn(i.move==="slam"?"SLAM: GET OUT OF THE RING":i.move==="charge"?"CHARGE: SIDESTEP THE LANE":i.move==="vortex"?"PULLING IN: BREAK AWAY":"SLABS INCOMING");break;case"bossmove":Yt.bossmoveFx(i),qt.bossSlam(),i.targets.includes(Kt)&&(Vn(80),Xe=Math.max(Xe,.12));break;case"zone":i.phase==="warn"?(Yt.zoneWarnFx(i),qt.rim(.5)):(Yt.zoneHitFx(i),qt.bossSlam(),i.targets.includes(Kt)&&(Vn(60),Xe=Math.max(Xe,.1)));break;case"boss":{const t=Ui[Et.specs[i.i].boss.kind];Yt.bossPhaseFx(i.i),qt.bossPhase(),La(t.phaseName[i.phase],Et.specs[i.i].accent,!0),Ia(Et.specs[i.i].accent,.4),Wn=Math.max(Wn,.45);break}case"launch":qt.launch(i.perfect),i.i===Kt&&i.perfect&&Cn("PERFECT LAUNCH");break}}function Wy(){const i=Et.world,t=i.tops.map(()=>null);if(Et.phase==="live"){i.tops[Kt].inPlay||(Di?Et.liveT>.4&&(t[Kt]=uh(Math.random,i)):(Mo&&!ui&&(ui=!0,Br=0),ui&&(Br+=Pt),t[Kt]=to));for(let s=1;s<i.tops.length;s++)!i.tops[s].inPlay&&Et.liveT>=Df[s]&&(t[s]=uh(Math.random,i))}to=null;const e=Et.phase,n=Et.tick(i.tops.map((s,r)=>r===Kt?Vy(i):Qu(i,r)),t);if(_o=Yr=yo=bo=!1,n.forEach(kf),Et.phase==="countdown"){const s=Math.ceil(Et.phaseT/Wa);s!==fl&&(fl=s,qt.beep(!1))}else e==="countdown"&&(fl=0,qt.beep(!0));Et.phase==="matchEnd"&&!Yc&&Xy()}function Xy(){Yc=!0;const i=ln,t=Et.score[0]>Et.score[1];let e=[],n=!1;if(!Di){const o=i.boss&&t&&!qe.bosses.includes(i.tier);e=zp(Math.random,i.tier,t,i.boss,i.perTeam,o).map(l=>Bp(qe,l)),o&&qe.bosses.push(i.tier),t&&(qe.wins++,i.tier===qe.tier&&qe.tier<Cr&&(qe.tier++,n=!0)),If()}if(e.length){const o=Et.world.tops[i.perTeam],l=Math.hypot(o.x,o.y),c=l>i.stadium.radius*.7?i.stadium.radius*.7/l:1;Yt.dropLoot(o.x*c,o.y*c,e.map(h=>Ci[h.rarity].color)),qt.launch(e.some(h=>h.rarity>=2))}const s=e.map((o,l)=>`
      <div class="lc" style="--rc:${Ii(Ci[o.rarity].color)};animation-delay:${.25+l*.18}s">
        <b>${hd(o)}</b><small>${Ci[o.rarity].name.toUpperCase()} · LEVEL ${o.level} · ${td[Fn(o.part).slot]}</small>
        ${o.affixes.map(c=>`<span>${ud(c)}</span>`).join("")}
      </div>`).join(""),r=Di?"":e.length?n?`LOOT  ·  TIER ${qe.tier} UNLOCKED`:"LOOT":t?"NO DROPS THIS TIME":"NOTHING SALVAGED",a=t&&i.tier<qe.tier?'<button data-a="next">NEXT TIER</button>':"";ds.innerHTML=`<div id="lootTitle">${r}</div><div id="loot">${s}</div><div class="btns">${a}<button data-a="again">REMATCH</button><button data-a="shop">FORGE</button></div>`}const qy={ringout:"RING-OUT",burst:"BURST",spinout:"SPIN-OUT",broken:"DESTROYED",time:"TIME"};function Da(i,t=""){if(i!==Hu){Hu=i;const e=ce("big");e.textContent=i,e.classList.remove("pop"),e.offsetWidth,i&&e.classList.add("pop")}ce("sub").textContent=t}function Gu(i){const t=Et.specs[i].ai?.persona;return t&&!(Et.world.teams[i]===0&&i===Kt)?` <em class="tag">${Hp[t]}</em>`:""}function Yy(){for(const i of[0,1]){const t=document.querySelector(i?".panel.right":".panel.left"),e=Et.specs.map((s,r)=>r).filter(s=>Et.world.teams[s]===i),n=e.length>1;t.classList.toggle("many",n),t.innerHTML=`<div class="name"><span>${n?i?"ENEMY TEAM":"YOUR TEAM":Et.specs[e[0]].name+Gu(e[0])}</span><span class="pips" id="p${i}"></span></div>`+e.map(s=>`<div class="row" id="r${s}">${n?`<span class="nm">${s===Kt?"YOU":Et.specs[s].name+Gu(s)}</span>`:""}<div class="bar spin"><i id="s${s}"></i></div><div class="bar burst"><i id="b${s}"></i></div><div class="bar arm"><i id="a${s}"></i></div></div>`).join("")}}function Vu(i,t,e){i.childElementCount!==e&&(i.innerHTML="<i></i>".repeat(e)),[...i.children].forEach((n,s)=>n.classList.toggle("on",s<t))}function $y(i){const t=Et.world;t.tops.forEach((b,y)=>{ce(`s${y}`).style.width=`${(b.inPlay?Math.min(1,cn(b)):1)*100}%`,ce(`b${y}`).style.width=`${Math.min(1,b.burst)*100}%`,ce(`a${y}`).style.width=`${b.armour*100}%`,ce(`r${y}`).classList.toggle("out",!!b.out)});const e=Et.specs.findIndex(b=>b.boss),n=ce("bossbar");if(e>=0&&t.tops[e].inPlay&&!t.tops[e].out){const b=t.tops[e],y=Ui[Et.specs[e].boss.kind];n.style.display="block",n.style.setProperty("--foe",Ii(Et.specs[e].accent)),ce("bossName").textContent=y.name,ce("bossPhase").textContent=`PHASE ${Math.min(2,b.stage)+1}  ·  ${y.phaseName[Math.min(2,b.stage)]}`,ce("bossFill").style.width=`${b.armour*100}%`;const _=ce("bossMove"),R=b.bossMove&&b.bossStage===0;_.textContent=R?{slam:"SLAM",charge:"CHARGE",vortex:"PULL",drops:"SLABS"}[b.bossMove]:"",_.classList.toggle("on",!!R)}else n.style.display="none";Vu(ce("p0"),Et.score[0],Et.winsNeeded),Vu(ce("p1"),Et.score[1],Et.winsNeeded),ce("timer").textContent=String(Math.max(0,Math.ceil(Ku-t.time))),ce("round").textContent=`${Et.stadium.name}  ·  TIER ${ln.tier}  ·  ROUND ${Et.round}`;const s=t.tops[Kt],r=document.getElementById("combo");for(let b=0;b<3;b++)r.children[b].classList.toggle("on",s.combo>b);r.classList.toggle("full",s.combo>=3);const a=document.getElementById("arrows"),o=innerWidth,l=innerHeight;t.tops.forEach((b,y)=>{let _=a.children[y];_||(_=document.createElement("i"),a.append(_));const R=y!==Kt&&b.inPlay&&!b.out?Yt.simToScreen(b.x,b.y):null;if(!R||!R.behind&&R.x>0&&R.x<o&&R.y>0&&R.y<l){_.style.display="none";return}const E=(R.x-o/2)*(R.behind?-1:1),T=(R.y-l/2)*(R.behind?-1:1),v=Math.min((o/2-30)/Math.max(1,Math.abs(E)),(l/2-30)/Math.max(1,Math.abs(T)));_.style.display="",_.style.setProperty("--c",t.teams[y]===t.teams[Kt]?"var(--me)":"var(--foe)"),_.style.transform=`translate(${o/2+E*v}px,${l/2+T*v}px) rotate(${Math.atan2(T,E)}rad)`});for(let b=t.tops.length;b<a.children.length;b++)a.children[b].style.display="none";Et.phase==="countdown"?Da(String(Math.ceil(Et.phaseT/Wa))):Et.phase==="live"?Da(Et.liveT<.9?"LAUNCH!":""):t.over&&(Et.phase==="matchEnd"?Da(Et.score[0]>Et.score[1]?"VICTORY":"DEFEAT"):Da(qy[t.over.reason],t.over.winner<0?"DRAW":t.over.winner===0?"ROUND WON":"ROUND LOST")),ds.classList.toggle("hidden",Et.phase!=="matchEnd");const c=!Di&&!s.inPlay&&(Et.phase==="countdown"||Et.phase==="live");if(ce("launch").classList.toggle("hidden",!c),c&&xn.active&&(ai={x:xn.sx*Rr(t.stadium)*.9,y:xn.sy*Rr(t.stadium)*.9}),c){ce("pw").style.width=`${(ui?Uf():0)*100}%`;const b=vn===0?"FLAT":(vn<0?"◀ ":"")+`${Math.round(Math.abs(vn)*100)}%`+(vn>0?" ▶":"");ce("tilt").textContent=`TILT  ${b}`;const y=Nf();Yt.setAim(!0,y.x,y.y,vn,s.spec.spinDir)}else Yt.setAim(!1);const h=ip(s.spec),u=s.brakeT>0?"RELEASE":Zu[s.spec.ability];ce("abName").textContent=u,zy.style.height=`${s.strikeCd/at.STRIKE_CD*100}%`,Hy.style.height=`${s.boostCd/at.BOOST_CD*100}%`,ce("abFill").style.height=`${s.abilityCd/h*100}%`,ce("ability").classList.toggle("ready",s.inPlay&&!s.out&&s.abilityCd<=0),Ha>0&&(Ha-=i,Ha<=0&&(ce("toast").style.opacity="0")),qt.setHum(0,cn(s),s.inPlay&&!s.out);let d=null,f=1/0;t.tops.forEach((b,y)=>{const _=Math.hypot(b.x-s.x,b.y-s.y);t.teams[y]!==0&&en(b)&&_<f&&(f=_,d=b)}),qt.setHum(1,d?cn(d):0,!!d);const g=s.spec.elements,x=g.map(b=>Ue[b].super.name).join(" + "),p=Ii(Ue[g[0]].color),m=s.superMeter>=1;ss.style.setProperty("--sc",p),ss.firstElementChild.style.width=`${s.superMeter*100}%`,ss.lastElementChild.textContent=m?`${x} READY${xn.active?"":"  ·  F"}`:"OVERDRIVE",ss.classList.toggle("ready",m),xn.update({superMeter:s.superMeter,superName:x,superColor:p,launching:c,ability:u,strike:s.strikeCd/at.STRIKE_CD,boost:s.boostCd/at.BOOST_CD,abilityCd:s.abilityCd/h})}let Wu=0,Xu=0,Bf=!1;function zf(i){requestAnimationFrame(zf),Bf?eo=i:Hf(i)}function Hf(i){const t=Math.max(0,Math.min(.05,(i-eo)/1e3));if(eo=i,ki==="workshop"){Nn.frame(t);return}Ie.measured||(++Wu>40&&(Xu+=Math.min(.1,t)),Wu>=130&&pr({quality:tm(Xu/90*1e3),measured:!0,qualityAuto:!0}));let e=1,n=-1;if(Wn>0&&(Wn-=t,e=.22),Xe>0&&(Xe-=t,e=0),Tr>0){Tr-=t,e=0,n=1;const s=bc-Tr,r=Et.specs.findIndex(a=>a.boss);if(xr===0&&s>.55&&r>=0){xr=1;const a=[];Ju(Et.world,r,{x:0,y:0,power:1,tilt:0},a),a.forEach(kf)}if(xr===1&&s>1.35){xr=2,qt.bossSlam(),Vn(120);const a=Ui[Et.specs[r].boss.kind],o=ce("bossplate");o.style.setProperty("--foe",Ii(Et.specs[r].accent)),o.firstElementChild.textContent=a.name,o.lastElementChild.textContent=a.epithet.toUpperCase(),o.classList.remove("show"),o.offsetWidth,o.classList.add("show")}}for(vr+=t*e;vr>=Pt;)Wy(),vr-=Pt;Et.world!==yc&&(yc=Et.world,Gy()),$y(t),Yt.frame(Et.world,vr/Pt,t*(n>=0?n:e),i/1e3,Kt)}window.addEventListener("keydown",i=>{ki==="battle"&&(i.code==="Space"&&(_o=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(Yr=!0),i.code==="KeyF"&&(bo=!0),i.code==="KeyQ"&&(vn=Math.max(-1,vn-.25)),i.code==="KeyE"&&(vn=Math.min(1,vn+.25)),Pn.add(i.code))});window.addEventListener("keyup",i=>Pn.delete(i.code));window.addEventListener("blur",()=>{Pn.clear(),Mo=!1});qr.addEventListener("mousemove",i=>{ki==="battle"&&!xn.active&&(ai=Yt.screenToSim(i.clientX,i.clientY))});qr.addEventListener("mousedown",i=>{if(!(ki!=="battle"||xn.active)){if(ai=Yt.screenToSim(i.clientX,i.clientY),i.button===2){Yr=!0;return}i.button===0&&(Et.world.tops[Kt].inPlay&&(yo=!0),Of())}});window.addEventListener("mouseup",i=>{i.button===0&&!xn.active&&Ff()});qr.addEventListener("wheel",i=>{ki==="battle"&&(vn=Math.max(-1,Math.min(1,vn+(i.deltaY>0?.25:-.25))),i.preventDefault())},{passive:!1});qr.addEventListener("contextmenu",i=>i.preventDefault());Object.assign(window,{sf:{get match(){return Et},get mode(){return ki},get fight(){return ln},save:qe,view:Yt,workshop:Nn,start(i,t=1){Nn.tier=i,Nn.perTeam=t,zr("new")},pause(i=!0){Bf=i},step(i,t=16.67){for(let e=0;e<i;e++)Hf(eo+t)}}});Di?zr("new"):Kc("workshop");window.__sfReady?.();requestAnimationFrame(zf);
