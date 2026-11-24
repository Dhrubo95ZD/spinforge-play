(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ca=["thermal","cryo","volt","gale","quake","mag","plasma","gravity","resonance"],mf=["plasma","gravity","resonance"],De={thermal:{name:"Thermal",color:16734751,status:"HEATED",statusText:"loses spin steadily",super:{name:"MELTDOWN",dur:4,atk:1.6,steer:1.35,start:{radius:4,impulse:9,status:!0},pulse:{every:.5,radius:3.4,spin:1.6,status:!0}}},cryo:{name:"Cryo",color:8379647,status:"CHILLED",statusText:"steers and travels at about half speed",super:{name:"ABSOLUTE ZERO",dur:2.2,guard:.5,start:{radius:6.5,stun:1.4,armour:.08,status:!0}}},volt:{name:"Volt",color:16773226,status:"CHARGED",statusText:"takes extra spin damage from hits",super:{name:"ARC STORM",dur:3,pulse:{every:.35,radius:9,nearest:!0,spin:3.2,stun:.12,status:!0}}},gale:{name:"Gale",color:10354640,status:"LIFTED",statusText:"is thrown much further by hits",super:{name:"CYCLONE",dur:2.2,pull:{radius:8,accel:26},end:{radius:5.5,impulse:27,status:!0}}},quake:{name:"Quake",color:14263386,status:"CRACKED",statusText:"takes extra armour damage",super:{name:"FAULT LINE",dur:1,start:{radius:7,impulse:20,armour:.15,status:!0,wreck:2.6}}},mag:{name:"Mag",color:12946431,status:"PULLED",statusText:"is dragged toward whoever marked it",super:{name:"POLARITY",dur:.7,guard:.6,start:{radius:40,nearest:!0,impulse:-24,status:!0},end:{radius:4,impulse:32}}},plasma:{name:"Plasma",color:16732120,status:"IONISED",statusText:"has its armour eaten away",super:{name:"NOVA LANCE",dur:1.1,atk:1.3,start:{radius:15,nearest:!0,armour:.2,spin:5,impulse:16,status:!0}}},gravity:{name:"Gravity",color:6978559,status:"SLUNG",statusText:"slides outward toward the rim",super:{name:"SINGULARITY",dur:2.6,guard:.7,pull:{radius:11,accel:34},pulse:{every:.4,radius:3,spin:1.4,armour:.02},end:{radius:5.5,impulse:30,status:!0}}},resonance:{name:"Resonance",color:5242848,status:"RINGING",statusText:"bleeds Overdrive charge",super:{name:"HARMONIC",dur:2.4,pulse:{every:.6,radius:6.5,stun:.35,armour:.05,impulse:8,wreck:.8,status:!0}}}},gf=4,vf=[{a:"thermal",b:"cryo",name:"THERMAL SHOCK",color:16777215,armour:.22},{a:"thermal",b:"gale",name:"FIRESTORM",color:16747050,spin:13},{a:"cryo",b:"quake",name:"SHATTER",color:12578815,armour:.28},{a:"volt",b:"mag",name:"RAILSHOT",color:14721279,impulse:34},{a:"cryo",b:"volt",name:"SUPERCONDUCT",color:11465983,stun:1.3,spin:4},{a:"thermal",b:"quake",name:"ERUPTION",color:16738874,impulse:20,armour:.14},{a:"gale",b:"volt",name:"TEMPEST",color:14221194,spin:9,impulse:14},{a:"gale",b:"quake",name:"SANDBLAST",color:15255696,armour:.12,spin:6},{a:"mag",b:"quake",name:"IRON TIDE",color:12098815,impulse:22,armour:.1},{a:"plasma",b:"volt",name:"OVERLOAD",color:16752880,stun:1,armour:.16},{a:"plasma",b:"cryo",name:"FLASH FREEZE",color:14731519,stun:.6,armour:.2},{a:"plasma",b:"gravity",name:"EVENT HORIZON",color:11559167,armour:.3,spin:8},{a:"gravity",b:"quake",name:"COLLAPSE",color:9081087,armour:.26},{a:"gravity",b:"gale",name:"SLINGSHOT",color:9494783,impulse:38},{a:"resonance",b:"quake",name:"AFTERSHOCK",color:10479808,armour:.15,stun:.8},{a:"resonance",b:"volt",name:"FEEDBACK",color:13172634,spin:12},{a:"resonance",b:"thermal",name:"BOILOVER",color:16760970,spin:10,armour:.08}],Mu=(i,t)=>vf.find(e=>e.a===i&&e.b===t||e.a===t&&e.b===i),xf=i=>{const t=De[i];return{id:i,name:t.name,elements:[i],blurb:`${t.super.name}. Marks foes ${t.status}: a marked top ${t.statusText}.`}},Ln=(i,t,e,n)=>({id:i,name:t,elements:[e,n],blurb:`Fused ${De[e].name} and ${De[n].name}. Fires both supers at once, and its strikes set off ${Mu(e,n)?.name??"both statuses"} on their own.`}),pa=[...Ca.map(xf),Ln("firestorm","Firestorm","thermal","gale"),Ln("glacier","Glacier","cryo","quake"),Ln("railgun","Railgun","volt","mag"),Ln("superconductor","Superconductor","cryo","volt"),Ln("magma","Magma","thermal","quake"),Ln("tempest","Tempest","gale","volt"),Ln("horizon","Event Horizon","plasma","gravity"),Ln("overload","Overload","plasma","volt"),Ln("collapse","Collapse","gravity","quake"),Ln("feedback","Feedback","resonance","volt")],Pa=i=>pa.find(t=>t.id===i)??pa[0],Dc=i=>Pa(i).elements.length>1,yu=i=>Pa(i).elements.some(t=>mf.includes(t)),Ic=i=>yu(i)?Dc(i)?4:3:Dc(i)?2:0,Ts={id:"foundry",name:"THE FOUNDRY",radius:10,pull:1.3,segments:24,segHp:3,openSegs:[6,14,22],rail:{width:1.6,accel:16,max:26},pillars:[],theme:{floor:1382950,wall:8950440,strip:4029439}},ma=(i,t,e,n,s=0)=>Array.from({length:i},(r,a)=>{const o=s+a/i*Math.PI*2;return{x:Math.cos(o)*t,y:Math.sin(o)*t,r:e,hp:n}}),_f={id:"pillaryard",name:"PILLAR YARD",radius:10,pull:1,segments:24,segHp:2,openSegs:[0,12],rail:{width:1.6,accel:12,max:22},pillars:ma(4,4.6,.75,4,Math.PI/4),theme:{floor:1840914,wall:10521192,strip:16747050}},Mf={id:"crucible",name:"THE CRUCIBLE",radius:14,pull:.9,segments:32,segHp:3.5,openSegs:[0,8,16,24],rail:{width:1.8,accel:18,max:30},pillars:ma(6,7.2,.9,5),theme:{floor:1905684,wall:10129295,strip:16730682}},yf={id:"ironbasin",name:"IRON BASIN",radius:14,pull:1,segments:32,segHp:2.5,openSegs:[5,16,27],rail:{width:1.8,accel:20,max:32},pillars:[],theme:{floor:1054746,wall:8362656,strip:2807496}},Sf={id:"colosseum",name:"THE COLOSSEUM",radius:18,pull:.7,segments:40,segHp:4,openSegs:[0,10,20,30],rail:{width:2,accel:20,max:34},pillars:[...ma(4,5.5,1.1,7),...ma(8,12,.9,5,Math.PI/8)],theme:{floor:1446940,wall:11116736,strip:10120191}},bf=[Ts,_f,Mf,yf,Sf];function Ef(i){const t=i<=2?10:i<=4?14:18;return bf.filter(e=>e.radius===t)}const Bt=1/60,Su=60,ot={SMASH:.03,TANG:.3,SPINLOSS:.025,EQ:.05,BURST:.0024,BURST_DRAIN:.01,STEER_MULT:2.8,RIM_E:.6,RIM_SPIN:.03,HIT_CD:.07,WEAK_KB:1,WALL_MIN:7,WALL_DIV:11,ARMOUR_MIN:11,ARMOUR:.002,STAGGER_T:.9,STAGGER_ARMOUR:.2,HEAT_DRAIN:1,SUPER_PASSIVE:.012,SUPER_HIT:.011,SUPER_STRIKE:.1,BOOST_IMPULSE:18,BOOST_CD:.9,BOOST_COST:.5,BOOST_T:.3,STRIKE_T:.22,STRIKE_CD:1.1,STRIKE_CD_HIT:.45,STRIKE_COST:.8,STRIKE_ATK:1.7,STRIKE_GUARD:.55,DASH_IMPULSE:24,DASH_CD:6,DASH_COST:2,DASH_T:.6,BRACE_T:1.5,BRACE_CD:8,BRAKE_T:.6,BRAKE_MINHOLD:.12,BRAKE_CD:7,BRAKE_COST:1,BRAKE_GAIN:1.3,BRAKE_PLUS:6,BRAKE_MIN:14,BRAKE_MAX:34,BRAKE_GUARD:.35,JUMP_T:.45,JUMP_CD:7,JUMP_COST:1.5,JUMP_HOP:9,LAND_R:3.4,LAND_IMPULSE:12,LAND_SPIN:2,LAND_ARMOUR:.015,COUNTER_WIN:.35,COUNTER_SPEED:11,COUNTER_IMPULSE:16,LAUNCH_FRAC:.65},bu={dash:"SURGE",brace:"BRACE",brake:"BRAKE",spring:"SPRING"},Uc={sx:0,sy:0,ability:!1,boost:!1,strike:!1};function Nc(i,t,e=Ts,n=i.map((s,r)=>r%2)){return{teams:n,pairCd:new Array(i.length*i.length).fill(0),lastOut:null,stadium:e,segHp:Array.from({length:e.segments},(s,r)=>e.openSegs.includes(r)?0:e.segHp),pillars:e.pillars.map(s=>({...s})),tops:i.map(s=>({spec:s,x:0,y:0,vx:0,vy:0,px:0,py:0,spin:0,phase:0,burst:0,inPlay:!1,leaving:!1,out:null,steerX:0,steerY:0,abilityCd:0,braceT:0,dashT:0,brakeT:0,brakeSpeed:0,brakeDx:0,brakeDy:0,airT:0,counterT:0,boostCd:0,boostT:0,strikeT:0,combo:0,comboT:0,statusFrom:{},strikeCd:0,onRail:!1,shift:0,status:{thermal:0,cryo:0,volt:0,gale:0,quake:0,mag:0,plasma:0,gravity:0,resonance:0},statusBy:0,reactCd:0,stunT:0,superMeter:0,superT:0,pulseT:0,armour:1,stage:0})),time:0,rng:t|0,over:null}}function Oc(i){i.rng=i.rng+1831565813|0;let t=Math.imul(i.rng^i.rng>>>15,1|i.rng);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}const En=i=>Math.abs(i.spin)/i.spec.maxSpin,Tf=i=>i.ability==="dash"?ot.DASH_CD:i.ability==="brake"?ot.BRAKE_CD:i.ability==="spring"?ot.JUMP_CD:ot.BRACE_CD,bn=i=>i.spec.radius+(i.spec.shift?.radius??0)*i.shift,aa=(i,t)=>1+(i.spec.shift?.[t]??0)*i.shift,On=i=>i.inPlay&&!i.out&&!i.leaving;function zo(i,t){const e=i.segments;return(Math.round(t/(Math.PI*2)*e)%e+e)%e}const or=i=>i.radius*ot.LAUNCH_FRAC;function wf(i,t,e,n){const s=i.tops[t];if(s.inPlay)return;let{x:r,y:a}=e;const o=Math.hypot(r,a),l=or(i.stadium);o>l&&(r*=l/o,a*=l/o);const c=Math.max(0,Math.min(1,e.power)),h=c>=.9,u=Math.max(-1,Math.min(1,e.tilt));s.x=s.px=r,s.y=s.py=a,s.spin=s.spec.spinDir*s.spec.maxSpin*(h?1:.6+.4*c);const f=Math.hypot(r,a),d=f>.05?-a/f:1,g=f>.05?r/f:0;s.vx=d*u*14*s.spec.spinDir,s.vy=g*u*14*s.spec.spinDir,s.inPlay=!0,n.push({type:"launch",i:t,perfect:h})}function Fc(i,t){return t<ot.WALL_MIN?i:Math.max(0,i-t/ot.WALL_DIV)}const Ho=i=>i.spec.mass*(i.stage>=2?.85:1);function Go(i,t){if(i.superT<=0)return 1;let e=1;for(const n of i.spec.elements){const s=De[n].super[t];s!==void 0&&(e=t==="guard"?Math.min(e,s):Math.max(e,s))}return e}const $l=(i,t)=>{i.spin=Math.max(0,Math.abs(i.spin)-t)*i.spec.spinDir},Kl=(i,t,e,n)=>{const s=i.x-t,r=i.y-e,a=Math.hypot(s,r)||1,o=Math.sqrt(Ho(i)/1.1);i.vx+=s/a*n/o,i.vy+=r/a*n/o},Af=2,Rf=.05,Cf=3.5,Pf=1.2,Lf=.15;function vi(i,t,e,n){const s=i.tops[t];if(s.out||e<=0)return;s.armour=Math.max(0,s.armour-e*(s.status.quake>0?1.6:1)*(s.braceT>0||s.brakeT>0?.4:1));const r=s.armour<=0?3:s.armour<.34?2:s.armour<.67?1:0;r>s.stage&&(s.stage=r,n.push({type:"crack",i:t,stage:r}),r===3&&(s.out="broken",n.push({type:"out",i:t,reason:"broken"})))}function Vo(i,t,e,n,s){const r=i.tops[t];if(!r.out){if(r.reactCd<=0)for(const a of Ca){if(a===e||r.status[a]<=0)continue;const o=Mu(e,a);if(!o)continue;const l=i.tops[n],c=r.statusFrom[a],h=c!==void 0&&c!==n&&i.teams[c]===i.teams[n],u=l.spec.superPower*(h?Pf:1);if(h)for(const f of[c,n])i.tops[f].superMeter=Math.min(1,i.tops[f].superMeter+Lf);r.status[a]=0,r.status[e]=0,r.reactCd=1.5,o.spin&&$l(r,o.spin*u),o.stun&&(r.stunT=Math.max(r.stunT,o.stun)),o.impulse&&Kl(r,l.x,l.y,o.impulse),s.push({type:"react",i:t,by:n,name:o.name,color:o.color,x:r.x,y:r.y,team:h}),o.armour&&vi(i,t,o.armour*u,s);return}r.status[e]=gf,r.statusFrom[e]=n,e==="mag"&&(r.statusBy=n)}}function Ka(i,t,e,n,s){const r=i.tops[t],a=r.spec.superPower,o=c=>Math.hypot(i.tops[c].x-r.x,i.tops[c].y-r.y);let l=[];i.tops.forEach((c,h)=>{i.teams[h]!==i.teams[t]&&On(c)&&c.airT<=0&&o(h)<=n.radius+bn(c)&&l.push(h)}),n.nearest&&l.length>1&&(l=[l.sort((c,h)=>o(c)-o(h))[0]]);for(const c of l){const h=i.tops[c];n.impulse&&Kl(h,r.x,r.y,n.impulse),n.spin&&$l(h,n.spin*a),n.stun&&(h.stunT=Math.max(h.stunT,n.stun)),n.status&&Vo(i,c,e,t,s),n.armour&&vi(i,c,n.armour*a,s)}if(n.wreck){i.pillars.forEach((u,f)=>{u.hp<=0||Math.hypot(u.x-r.x,u.y-r.y)>n.radius||(u.hp=Math.max(0,u.hp-n.wreck),u.hp<=0&&s.push({type:"break",kind:"pillar",index:f,x:u.x,y:u.y}))});const c=i.stadium.radius,h=Math.hypot(r.x,r.y);if(h>.5&&c-h<n.radius){const u=Math.acos(Math.max(-1,Math.min(1,(c*c+h*h-n.radius*n.radius)/(2*c*h)))),f=Math.atan2(r.y,r.x),d=i.stadium.segments;for(let g=0;g<d;g++){const v=g/d*Math.PI*2,m=Math.atan2(Math.sin(v-f),Math.cos(v-f));Math.abs(m)>u||i.segHp[g]<=0||(i.segHp[g]=Math.max(0,i.segHp[g]-n.wreck*.6),i.segHp[g]<=0&&s.push({type:"break",kind:"wall",index:g,x:Math.cos(v)*c,y:Math.sin(v)*c}))}}}s.push({type:"pulse",i:t,x:r.x,y:r.y,radius:Math.min(n.radius,12),element:e,targets:l})}function Df(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!On(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function If(i,t,e){const n=i.tops[t],s=[];i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!On(r)||r.airT>0||Math.hypot(r.x-n.x,r.y-n.y)>ot.LAND_R+bn(r)||(s.push(a),Kl(r,n.x,n.y,ot.LAND_IMPULSE),$l(r,ot.LAND_SPIN),vi(i,a,ot.LAND_ARMOUR,e))}),e.push({type:"land",i:t,x:n.x,y:n.y,radius:ot.LAND_R,targets:s})}function Ja(i,t){const e=[],n=i.stadium,s=n.radius;i.time+=Bt;for(let r=0;r<i.pairCd.length;r++)i.pairCd[r]>0&&(i.pairCd[r]-=Bt);for(let r=0;r<i.tops.length;r++){const a=i.tops[r];if(a.px=a.x,a.py=a.y,a.onRail=!1,!a.inPlay||a.out==="burst"||a.out==="broken")continue;const o=a.spec,l=bn(a);if(a.leaving){a.x+=a.vx*Bt,a.y+=a.vy*Bt,a.phase+=a.spin*Bt,!a.out&&Math.hypot(a.x,a.y)>s+1.6&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}const c=Math.hypot(a.x,a.y);let h=-n.pull*a.x,u=-n.pull*a.y;if(a.out==="spinout"){a.vx=(a.vx+h*Bt)*Math.exp(-4*Bt),a.vy=(a.vy+u*Bt)*Math.exp(-4*Bt),a.x+=a.vx*Bt,a.y+=a.vy*Bt;continue}const f=a.stunT>0,d=f?Uc:t[r]??Uc,g=(a.status.cryo>0?.55:1)*(f?0:1),v=En(a),m=v<.25?(.25-v)/.25:0;if(o.shift){const U=Math.max(0,Math.min(1,(.6-v)/.2)),I=a.shift;a.shift+=Math.max(-2.5*Bt,Math.min(2.5*Bt,U-a.shift)),I<.5!=a.shift<.5&&e.push({type:"shift",i:r,guard:a.shift>=.5})}const p=c>.05?-a.y/c:1,S=c>.05?a.x/c:0,M=o.drive*Math.min(1,v*1.5)*g;h+=p*M*o.spinDir,u+=S*M*o.spinDir;let x=d.sx,_=d.sy;const y=Math.hypot(x,_);y>1&&(x/=y,_/=y),a.steerX=x,a.steerY=_;let w=Math.abs(a.spin);if(y>.01){const U=o.steer*ot.STEER_MULT*(.5+.5*v)*g*Go(a,"steer");h+=x*U,u+=_*U}const R=zo(n,Math.atan2(a.y,a.x));if(n.rail&&c>s-l-n.rail.width&&i.segHp[R]>0){const U=a.vx*p+a.vy*S,I=Math.abs(U)>1?Math.sign(U):o.spinDir;Math.abs(U)<n.rail.max&&(h+=p*I*n.rail.accel,u+=S*I*n.rail.accel),a.onRail=Math.abs(U)>6}m>0&&(h+=(Oc(i)-.5)*m*14,u+=(Oc(i)-.5)*m*14);const E=()=>{if(y>.01)return[x,_];const U=Math.hypot(a.vx,a.vy);return U>.5?[a.vx/U,a.vy/U]:c>.05?[-a.x/c,-a.y/c]:[1,0]};a.abilityCd=Math.max(0,a.abilityCd-Bt),a.braceT=Math.max(0,a.braceT-Bt);const b=a.brakeT>0;a.brakeT=Math.max(0,a.brakeT-Bt),a.counterT=Math.max(0,a.counterT-Bt),a.airT>0&&(a.airT=Math.max(0,a.airT-Bt),a.airT<=0&&If(i,r,e)),a.dashT=Math.max(0,a.dashT-Bt),a.boostCd=Math.max(0,a.boostCd-Bt),a.boostT=Math.max(0,a.boostT-Bt),a.strikeCd=Math.max(0,a.strikeCd-Bt),a.strikeT=Math.max(0,a.strikeT-Bt),a.comboT=Math.max(0,a.comboT-Bt),a.comboT<=0&&(a.combo=0);for(const U of Ca)a.status[U]>0&&(a.status[U]-=Bt);if(a.reactCd=Math.max(0,a.reactCd-Bt),a.stunT=Math.max(0,a.stunT-Bt),a.status.thermal>0&&(w-=ot.HEAT_DRAIN*Bt),a.status.plasma>0&&vi(i,r,.012*Bt,e),a.status.resonance>0&&(a.superMeter=Math.max(0,a.superMeter-.07*Bt)),a.status.gravity>0){const U=Math.hypot(a.x,a.y)||1;h+=a.x/U*10,u+=a.y/U*10}if(a.status.mag>0){const U=i.tops[a.statusBy];if(U&&On(U)){const I=U.x-a.x,N=U.y-a.y,q=Math.hypot(I,N)||1;h+=I/q*12,u+=N/q*12}}if(a.superMeter=Math.min(1,a.superMeter+ot.SUPER_PASSIVE*o.superGain*Bt),d.super&&a.superMeter>=1&&a.superT<=0){a.superMeter=0,a.superT=Math.max(...o.elements.map(U=>De[U].super.dur)),a.pulseT=0,e.push({type:"super",i:r,elements:o.elements});for(const U of o.elements){const I=De[U].super;I.start&&Ka(i,r,U,I.start,e)}}if(a.superT>0){a.superT-=Bt,a.pulseT-=Bt;for(const U of o.elements){const I=De[U].super;if(I.pull){const N=I.pull;i.tops.forEach((q,et)=>{if(i.teams[et]===i.teams[r]||!On(q))return;const lt=a.x-q.x,ft=a.y-q.y,Dt=Math.hypot(lt,ft);Dt<N.radius&&Dt>.5&&(q.vx+=lt/Dt*N.accel*Bt,q.vy+=ft/Dt*N.accel*Bt)})}I.pulse&&a.pulseT<=0&&Ka(i,r,U,I.pulse,e),I.end&&a.superT<=0&&Ka(i,r,U,I.end,e)}a.pulseT<=0&&(a.pulseT=Math.min(...o.elements.map(U=>De[U].super.pulse?.every??99)))}if(d.boost&&a.boostCd<=0){const[U,I]=E();a.vx+=U*ot.BOOST_IMPULSE,a.vy+=I*ot.BOOST_IMPULSE,a.boostCd=ot.BOOST_CD,a.boostT=ot.BOOST_T,w-=ot.BOOST_COST,e.push({type:"boost",i:r})}if(d.strike&&a.strikeCd<=0){a.strikeT=ot.STRIKE_T,a.strikeCd=ot.STRIKE_CD,w-=ot.STRIKE_COST,e.push({type:"strike",i:r});const U=a.counterT>0?Df(i,r):null;if(U){const I=Math.hypot(U.x-a.x,U.y-a.y)||1,N=(U.x-a.x)/I,q=(U.y-a.y)/I;a.vx+=N*ot.COUNTER_IMPULSE,a.vy+=q*ot.COUNTER_IMPULSE,a.boostT=Math.max(a.boostT,ot.BOOST_T),a.counterT=0,e.push({type:"counter",i:r,x:a.x,y:a.y,dx:N,dy:q})}}if(b&&(a.brakeT<=0||d.ability&&a.brakeT<ot.BRAKE_T-ot.BRAKE_MINHOLD)){const[U,I]=y>.01?[x,_]:a.brakeSpeed>2?[a.brakeDx,a.brakeDy]:E(),N=Math.min(ot.BRAKE_MAX,Math.max(ot.BRAKE_MIN,a.brakeSpeed*ot.BRAKE_GAIN+ot.BRAKE_PLUS));a.vx=U*N,a.vy=I*N,a.brakeT=0,a.dashT=ot.DASH_T*.7,e.push({type:"brake",i:r,phase:"release",x:a.x,y:a.y,dx:U,dy:I,speed:N})}else if(d.ability&&a.abilityCd<=0){if(o.ability==="brake"){const U=Math.hypot(a.vx,a.vy);a.brakeSpeed=U,a.brakeDx=U>.5?a.vx/U:0,a.brakeDy=U>.5?a.vy/U:0,a.vx*=.1,a.vy*=.1,a.brakeT=ot.BRAKE_T,a.abilityCd=ot.BRAKE_CD,w-=ot.BRAKE_COST,e.push({type:"brake",i:r,phase:"stop",x:a.x,y:a.y,dx:a.brakeDx,dy:a.brakeDy,speed:U})}else if(o.ability==="spring"){const[U,I]=E();a.vx+=U*ot.JUMP_HOP,a.vy+=I*ot.JUMP_HOP,a.airT=ot.JUMP_T,a.abilityCd=ot.JUMP_CD,w-=ot.JUMP_COST}else if(o.ability==="dash"){const[U,I]=E();a.vx+=U*ot.DASH_IMPULSE,a.vy+=I*ot.DASH_IMPULSE,a.dashT=ot.DASH_T,w-=ot.DASH_COST,a.abilityCd=ot.DASH_CD}else a.braceT=ot.BRACE_T,a.abilityCd=ot.BRACE_CD;e.push({type:"ability",i:r,kind:o.ability})}const L=a.brakeT>0,z=Math.exp(L?-14*Bt:-o.drag*(a.braceT>0?2.5:1)*(f?3:1)*Bt),k=L?.15:1;a.vx=(a.vx+h*Bt*k)*z,a.vy=(a.vy+u*Bt*k)*z,a.x+=a.vx*Bt,a.y+=a.vy*Bt,w-=o.spinDecay*aa(a,"decay")*(a.stage>=2?1.25:1)*(1+m)*Bt,a.burst=Math.max(0,a.burst-ot.BURST_DRAIN*Bt);for(let U=0;U<i.pillars.length;U++){const I=i.pillars[U];if(I.hp<=0||a.airT>0)continue;const N=a.x-I.x,q=a.y-I.y,et=Math.hypot(N,q),lt=l+I.r;if(et>=lt||et<1e-6)continue;const ft=N/et,Dt=q/et;a.x=I.x+ft*lt,a.y=I.y+Dt*lt;const W=-(a.vx*ft+a.vy*Dt);W>0&&(a.vx+=(1+ot.RIM_E)*W*ft,a.vy+=(1+ot.RIM_E)*W*Dt,w-=W*ot.RIM_SPIN,W>ot.COUNTER_SPEED&&(a.counterT=ot.COUNTER_WIN),I.hp=Fc(I.hp,W),W>1.5&&e.push({type:"rim",x:I.x+ft*I.r,y:I.y+Dt*I.r,strength:Math.min(1,W/18),i:r}),I.hp<=0&&e.push({type:"break",kind:"pillar",index:U,x:I.x,y:I.y}))}const G=Math.hypot(a.x,a.y),Y=s-l;if(G>Y){const U=a.x/G,I=a.y/G,N=zo(n,Math.atan2(a.y,a.x));if(i.segHp[N]<=0)a.airT<=0&&G>s-l*.35&&(a.leaving=!0);else{const q=a.vx*U+a.vy*I;a.x=U*Y,a.y=I*Y,q>0&&(a.vx-=(1+ot.RIM_E)*q*U,a.vy-=(1+ot.RIM_E)*q*I,w-=q*ot.RIM_SPIN,q>ot.COUNTER_SPEED&&(a.counterT=ot.COUNTER_WIN),i.segHp[N]=Fc(i.segHp[N],q),q>1.5&&e.push({type:"rim",x:a.x,y:a.y,strength:Math.min(1,q/18),i:r}),i.segHp[N]<=0&&e.push({type:"break",kind:"wall",index:N,x:U*s,y:I*s}))}}w=Math.max(0,w),a.spin=w*o.spinDir,a.phase+=a.spin*Bt,w<=0&&(a.out="spinout",e.push({type:"out",i:r,reason:"spinout"}))}for(let r=0;r<i.tops.length;r++)for(let a=r+1;a<i.tops.length;a++)Uf(i,r,a,e);for(const r of e)r.type==="out"&&(i.lastOut=r.reason);if(!i.over){const r=new Set;if(i.tops.forEach((a,o)=>{a.out||r.add(i.teams[o])}),r.size<=1&&i.lastOut)i.over={winner:r.size?[...r][0]:-1,reason:i.lastOut};else if(i.time>=Su){const a=new Map;i.tops.forEach((l,c)=>{l.out||a.set(i.teams[c],(a.get(i.teams[c])??0)+Math.abs(l.spin))});const o=[...a].sort((l,c)=>c[1]-l[1]);i.over={winner:o.length>1&&o[0][1]===o[1][1]?-1:o[0][0],reason:"time"}}}return e}function Bc(i,t){return .55+.45*Math.abs(Math.sin((t-i.phase)*i.spec.teeth/2))}function Uf(i,t,e,n){const s=i.tops[t],r=i.tops[e];if(!On(s)||!On(r)||s.airT>0||r.airT>0)return;const a=r.x-s.x,o=r.y-s.y,l=Math.hypot(a,o),c=bn(s)+bn(r);if(l>=c||l<1e-6)return;const h=a/l,u=o/l,f=Ho(s),d=Ho(r),g=c-l;s.x-=h*g*(d/(f+d)),s.y-=u*g*(d/(f+d)),r.x+=h*g*(f/(f+d)),r.y+=u*g*(f/(f+d));const v=t*i.tops.length+e;if(i.pairCd[v]>0)return;i.pairCd[v]=ot.HIT_CD;const m=i.teams[t]===i.teams[e],p=m?0:1,S=-u,M=h,x=(r.vx-s.vx)*h+(r.vy-s.vy)*u,_=(s.vx-r.vx)*S+(s.vy-r.vy)*M+s.spin*bn(s)+r.spin*bn(r),y=Math.atan2(u,h),w=s.strikeT>0,R=r.strikeT>0,E=w&&R,b=w&&!E&&!m&&s.combo>=3,L=R&&!E&&!m&&r.combo>=3,z=(st,Z,yt)=>(st.dashT>0?1.5:st.boostT>0?1.15:1)*(Z?E?1.3:yt?Af:ot.STRIKE_ATK:1)*Go(st,"atk")*(st.stage>=1?.9:1),k=Bc(s,y)*s.spec.attack*z(s,w,b)*aa(s,"attack"),G=Bc(r,y+Math.PI)*r.spec.attack*z(r,R,L)*aa(r,"attack"),Y=f*d/(f+d),U=x<0?-1.6*x*Y*(.6+.2*(k+G)):0,I=ot.SMASH*Math.abs(_)*Y*(k+G),N=U+I,q=(st,Z)=>(st.braceT>0?.3:st.brakeT>0?ot.BRAKE_GUARD:1)*(Z&&!E?ot.STRIKE_GUARD:1)*aa(st,"guard")*Go(st,"guard"),et=st=>(st.status.gale>0?1.4:1)*(st.stage>=1?1.15:1),lt=q(s,w)*(1+ot.WEAK_KB*(1-En(s)))*(m?.5:1)*et(s),ft=q(r,R)*(1+ot.WEAK_KB*(1-En(r)))*(m?.5:1)*et(r),Dt=Math.sign(_)*ot.TANG;s.vx+=(-h-S*Dt)*N*lt/f,s.vy+=(-u-M*Dt)*N*lt/f,r.vx+=(h+S*Dt)*N*ft/d,r.vy+=(u+M*Dt)*N*ft/d;let W=Math.abs(s.spin),it=Math.abs(r.spin);if(W-=ot.SPINLOSS*N*G*q(s,w)*p*(s.status.volt>0?1.25:1),it-=ot.SPINLOSS*N*k*q(r,R)*p*(r.status.volt>0?1.25:1),!m&&s.spec.spinDir!==r.spec.spinDir){const st=ot.EQ*(W-it);W-=st,it+=st;const Z=Math.min(it,s.spec.hook*1.5),yt=Math.min(W,r.spec.hook*1.5);W+=Z-yt,it+=yt-Z}if(s.spin=Math.max(0,Math.min(s.spec.maxSpin,W))*s.spec.spinDir,r.spin=Math.max(0,Math.min(r.spec.maxSpin,it))*r.spec.spinDir,s.burst+=p*ot.BURST*N*G*r.spec.burstDmg*(s.braceT>0?.5:1)/s.spec.burstRes,r.burst+=p*ot.BURST*N*k*s.spec.burstDmg*(r.braceT>0?.5:1)/r.spec.burstRes,!m){const st=N-ot.ARMOUR_MIN;st>0&&(vi(i,t,st*ot.ARMOUR*G*q(s,w)/s.spec.burstRes,n),vi(i,e,st*ot.ARMOUR*k*q(r,R)/r.spec.burstRes,n));const Z=Math.min(1,N/30)*6;if(s.superMeter=Math.min(1,s.superMeter+(ot.SUPER_HIT*(1+Z*k/(k+G))+(w?ot.SUPER_STRIKE:0))*s.spec.superGain),r.superMeter=Math.min(1,r.superMeter+(ot.SUPER_HIT*(1+Z*G/(k+G))+(R?ot.SUPER_STRIKE:0))*r.spec.superGain),w||s.superT>0)for(const yt of s.spec.elements)Vo(i,e,yt,t,n);if(R||r.superT>0)for(const yt of r.spec.elements)Vo(i,t,yt,e,n)}for(const[st,Z,yt,kt,Nt]of[[s,w,b,t,e],[r,R,L,e,t]])Z&&(st.strikeT=0,st.strikeCd=ot.STRIKE_CD_HIT,!m&&(st.comboT=Cf,yt?(st.combo=0,n.push({type:"finisher",i:kt,target:Nt,x:i.tops[Nt].x,y:i.tops[Nt].y}),vi(i,Nt,Rf,n)):st.combo=Math.min(3,st.combo+1)));n.push({type:"hit",x:s.x+h*bn(s),y:s.y+u*bn(s),nx:h,ny:u,strength:Math.min(1,N/30),a:t,b:e,power:E?2:w?t:R?e:-1});for(const[st,Z]of[[t,s],[e,r]])!Z.out&&Z.burst>=1&&(Z.burst=0,Z.stunT=Math.max(Z.stunT,ot.STAGGER_T),n.push({type:"react",i:st,by:st===t?e:t,name:"STAGGER",color:16777215,x:Z.x,y:Z.y,team:!1}),vi(i,st,ot.STAGGER_ARMOUR,n))}function kc(i,t){const e=i()*Math.PI*2,s=(t?or(t.stadium):6.5)*(.3+i()*.5);return{x:Math.cos(e)*s,y:Math.sin(e)*s,power:.7+i()*.3,tilt:(i()*2-1)*.8}}function zc(i,t,e){const n=Math.floor(i.time*4)*7919+t*104729;return(Math.imul(n,2654435761)>>>0)%100<e}function Nf(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!On(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function Eu(i,t){const e=i.tops[t],n={sx:0,sy:0,ability:!1,boost:!1,strike:!1};if(!On(e))return n;const s=e.spec.ai??{strike:60,boost:55},r=e.spec.ai?.persona,a=i.stadium.radius,o=Math.hypot(e.x,e.y),l=o>.01?(e.vx*e.x+e.vy*e.y)/o:0;let c=0,h=0;const u=Math.atan2(e.y+e.vy*.35,e.x+e.vx*.35),f=o>a*.55&&l>4&&i.segHp[zo(i.stadium,u)]<=0,d=Nf(i,t);if(f||o>a*(r==="rider"?.88:.8))c=-e.x,h=-e.y,f&&o>a*.7&&(n.boost=!0);else if(d){const v=d.x+d.vx*.15-e.x,m=d.y+d.vy*.15-e.y,p=Math.hypot(v,m);let S=e.spec.role==="attack"||En(e)<En(d)-.04||p>a*.9;r==="rusher"?S=!0:r==="turtle"?S=p<4.5||i.time>35&&En(e)<En(d)-.02:r==="ambusher"?S=p<6.5:r==="rider"&&(S=p<5);const M=-((d.vx-e.vx)*v+(d.vy-e.vy)*m)/Math.max(p,.01),x=p-bn(e)-bn(d);if(S)c=v,h=m,p>3&&p<9&&zc(i,t,r==="rusher"?Math.min(100,s.boost+25):s.boost)&&(n.boost=!0),r==="ambusher"&&p>2.5&&p<6.5&&(n.boost=!0),e.spec.ability==="dash"&&e.abilityCd<=0&&p<6&&p>2.2&&(n.ability=!0);else if(r==="rider"){const _=o>.05?-e.y/o:1,y=o>.05?e.x/o:0,w=(a*.74-o)/a;c=_*e.spec.spinDir+e.x/Math.max(o,.05)*w*6,h=y*e.spec.spinDir+e.y/Math.max(o,.05)*w*6}else o>2&&(c=-e.x,h=-e.y);M>3&&x<M*.14&&zc(i,t,r==="ambusher"?Math.min(100,s.strike+25):s.strike)&&(n.strike=!0),e.spec.ability==="brace"&&e.abilityCd<=0&&p<(r==="turtle"?4.5:3.2)&&M>(r==="turtle"?6:9)&&(n.ability=!0),e.spec.ability==="brake"&&(e.brakeT>0?(p<4.5||e.brakeT<.15)&&(n.ability=!0):e.abilityCd<=0&&p<8&&p>3.5&&M>8&&(n.ability=!0)),e.spec.ability==="spring"&&e.abilityCd<=0&&e.airT<=0&&p<4.5&&p>1.5&&(M>10||S&&p<3.2)&&(n.ability=!0),e.counterT>0&&p<14&&e.strikeCd<=0&&(n.strike=!0),e.superMeter>=1&&p<7.5&&(n.super=!0)}else o>2&&(c=-e.x,h=-e.y);const g=Math.hypot(c,h);return g>.01&&(n.sx=c/g,n.sy=h/g),n}const $i=["blade","disc","tip","core","launcher","reactor"],Tu={blade:"BLADE",disc:"DISC",tip:"TIP",core:"CORE",launcher:"LAUNCH",reactor:"ELEMENT"},Of={attack:0,burstDmg:0,burstRes:0,mass:.2,radius:0,teeth:0,hook:0,spinDecay:.8,drive:0,drag:0,steer:12,chargeTime:0,maxSpin:0,superGain:1,superPower:1},Wi=[{id:"talon",slot:"blade",name:"Talon",blurb:"Three hooked claws. Huge hits, huge recoil.",mods:{attack:1.3,burstDmg:1.2,teeth:3,radius:1,mass:.35}},{id:"bastion",slot:"blade",name:"Bastion",blurb:"Round armoured ring. Shrugs off blows.",mods:{attack:1.05,burstDmg:1,teeth:6,radius:1.05,mass:.6,burstRes:.45,spinDecay:-.05}},{id:"ripsaw",slot:"blade",name:"Ripsaw",blurb:"Eight teeth that tear cores open. Best at bursting.",mods:{attack:1.14,burstDmg:1.65,teeth:8,radius:1,mass:.38}},{id:"halo",slot:"blade",name:"Halo",blurb:"Twin wings. Spins longest, steals spin from opposite-spin tops.",mods:{attack:.85,burstDmg:.8,teeth:2,radius:1.02,mass:.45,hook:1,spinDecay:-.12,burstRes:.15}},{id:"shifter",slot:"blade",name:"Shifter",blurb:"Three hinged wings. Tucked in to strike at high spin; below half spin they swing out into a wide guard.",mods:{attack:1.25,burstDmg:1.15,teeth:3,radius:.9,mass:.42},shift:{radius:.22,attack:-.4,guard:-.35,decay:-.3}},{id:"pivot",slot:"disc",name:"Pivot",blurb:"Weight at the centre. Quick to steer.",mods:{mass:.5,steer:3}},{id:"flywheel",slot:"disc",name:"Flywheel",blurb:"Weight at the rim. Long spin, slow to turn.",mods:{mass:.6,spinDecay:-.15,steer:-3}},{id:"anvil",slot:"disc",name:"Anvil",blurb:"A solid slab. Very hard to move.",mods:{mass:.85,steer:-4,spinDecay:.05}},{id:"feather",slot:"disc",name:"Feather",blurb:"Vented alloy. Darts around, gets thrown around.",mods:{mass:.38,steer:5,spinDecay:.04}},{id:"needle",slot:"tip",name:"Needle",blurb:"Sharp point. Holds the centre and saves spin.",mods:{drive:1.2,drag:1.5,spinDecay:-.1}},{id:"flatline",slot:"tip",name:"Flatline",blurb:"Flat base. Races around the bowl.",mods:{drive:4.95,drag:1.05,spinDecay:.02}},{id:"gripper",slot:"tip",name:"Gripper",blurb:"Rubber. Turns on the spot, burns spin fast.",mods:{drive:3.2,drag:1.6,steer:5,spinDecay:.2}},{id:"orbit",slot:"tip",name:"Orbit",blurb:"Ball bearing. Steady, hard to burst.",mods:{drive:2.2,drag:1.15,burstRes:.1}},{id:"surge",slot:"core",name:"Surge",blurb:"DASH: a sudden lunge that hits harder.",mods:{burstRes:1.15},ability:"dash"},{id:"viper",slot:"core",name:"Viper",blurb:"DASH, lighter lock. Nimble but bursts sooner.",mods:{burstRes:1.12,steer:4,spinDecay:-.06},ability:"dash"},{id:"rampart",slot:"core",name:"Rampart",blurb:"BRACE: dig in and take a fraction of the hit.",mods:{burstRes:1.12},ability:"brace"},{id:"lockjaw",slot:"core",name:"Lockjaw",blurb:"BRACE, four clamps. Nearly impossible to burst.",mods:{burstRes:1.2,mass:.05,steer:-2},ability:"brace"},{id:"anchor",slot:"core",name:"Anchor",blurb:"BRAKE: dig in and stop dead, then launch faster than you arrived.",mods:{burstRes:1.2,mass:.05},ability:"brake"},{id:"coil",slot:"core",name:"Coil",blurb:"SPRING JUMP: hop over tops and gaps, land with a shockwave.",mods:{burstRes:1.3,steer:2},ability:"spring"},{id:"ripcord",slot:"launcher",name:"Ripcord",blurb:"Balanced power and timing.",mods:{chargeTime:.9,maxSpin:100}},{id:"string",slot:"launcher",name:"String",blurb:"Most spin, very tight timing.",mods:{chargeTime:.55,maxSpin:106}},{id:"winder",slot:"launcher",name:"Winder",blurb:"Least spin, easy timing.",mods:{chargeTime:1.4,maxSpin:96}},{id:"geared",slot:"launcher",name:"Geared",blurb:"A little extra spin, slower meter.",mods:{chargeTime:1.1,maxSpin:102}}];Wi.push(...pa.map(i=>({id:i.id,slot:"reactor",name:i.name,blurb:i.blurb,mods:{}})));const ln=i=>Wi.filter(t=>t.slot===i),Fn=i=>Wi.find(t=>t.id===i)??Wi[0],wu=[16734751,15213357,16761370,3066970,1492928,2784255,9063935,15921909,2303535],Au=[16757575,16730955,16773226,7077770,7332863,5934079,12946431,16777215],Ru=["steel","chrome","gunmetal","gold","copper"],_s={blade:"talon",disc:"pivot",tip:"flatline",core:"surge",launcher:"ripcord",reactor:"thermal",spinDir:1,paint:16734751,glow:16757575,metal:"steel"},Cu=i=>`${Fn(i.blade).name} ${Fn(i.tip).name}`.toUpperCase();function Jl(i,t=Cu(i)){const e={...Of};let n="dash",s;for(const r of $i){const a=Fn(i[r]);for(const[o,l]of Object.entries(a.mods))e[o]+=l;a.ability&&(n=a.ability),a.shift&&(s=a.shift)}return{name:t,role:e.attack>=1.05?"attack":"stamina",color:i.paint,accent:i.glow,spinDir:i.spinDir,radius:e.radius,mass:e.mass,maxSpin:e.maxSpin,attack:e.attack,burstDmg:e.burstDmg,burstRes:e.burstRes,spinDecay:e.spinDecay,drive:e.drive,drag:e.drag,steer:e.steer,teeth:e.teeth,spiky:e.attack>=1.05,hook:e.hook,shift:s,elements:Pa(i.reactor).elements,superGain:e.superGain,superPower:e.superPower,ability:n,chargeTime:e.chargeTime,look:{blade:i.blade,disc:i.disc,tip:i.tip,core:i.core,paint:i.paint,glow:i.glow,metal:i.metal}}}function Ff(i,t){const e=s=>s[Math.floor(i()*s.length)],n=wu.filter(s=>s!==t);return{blade:e(ln("blade")).id,disc:e(ln("disc")).id,tip:e(ln("tip")).id,core:e(ln("core")).id,launcher:e(ln("launcher")).id,reactor:e(pa.filter(s=>!yu(s.id)).filter(s=>s.elements.length>1==i()<.2)).id,spinDir:i()<.5?1:-1,paint:e(n),glow:e(Au),metal:e(Ru)}}const ga=["attack","defence","stamina","speed","weight","burst"],Bf={attack:"ATTACK",defence:"DEFENCE",stamina:"STAMINA",speed:"SPEED",weight:"WEIGHT",burst:"BURST RESIST"};function Pu(i){return{attack:i.attack*.6+i.burstDmg*.4,defence:i.mass*.55+i.burstRes*.45,stamina:i.maxSpin/i.spinDecay,speed:i.drive+i.steer*.3,weight:i.mass,burst:i.burstRes}}let Za=null;function kf(){if(Za)return Za;const i={},t={};for(const e of ga)i[e]=1/0,t[e]=-1/0;for(const e of ln("blade"))for(const n of ln("disc"))for(const s of ln("tip"))for(const r of ln("core"))for(const a of ln("launcher")){const o=Pu(Jl({..._s,blade:e.id,disc:n.id,tip:s.id,core:r.id,launcher:a.id}));for(const l of ga)i[l]=Math.min(i[l],o[l]),t[l]=Math.max(t[l],o[l])}return Za={min:i,max:t}}function ja(i){const t=Pu(i),{min:e,max:n}=kf(),s={};for(const r of ga)s[r]=Math.max(0,Math.min(1.25,(t[r]-e[r])/(n[r]-e[r]||1)));return s}function zf(i){const t=[["ATTACK",i.attack],["DEFENCE",i.defence],["STAMINA",i.stamina]];return t.sort((e,n)=>n[1]-e[1]),t[0][1]-t[1][1]>=.12?t[0][0]:"BALANCED"}const _i=[{name:"Common",color:10134453,rolls:0,weight:600},{name:"Uncommon",color:4972650,rolls:1,weight:270},{name:"Rare",color:4889599,rolls:2,weight:100},{name:"Epic",color:12084991,rolls:3,weight:26},{name:"Legendary",color:16751146,rolls:4,weight:4}],Lu=[{key:"attack",label:"Attack",prefix:"Honed",min:3,max:8,slots:["blade","core"]},{key:"burstDmg",label:"Burst damage",prefix:"Jagged",min:4,max:10,slots:["blade"]},{key:"burstRes",label:"Burst resistance",prefix:"Bolted",min:4,max:10,slots:["core","disc","blade"]},{key:"mass",label:"Weight",prefix:"Dense",min:3,max:7,slots:["disc"]},{key:"steer",label:"Handling",prefix:"Nimble",min:4,max:9,slots:["tip","disc"]},{key:"drive",label:"Speed",prefix:"Swift",min:4,max:9,slots:["tip"]},{key:"spinDecay",label:"Spin time",prefix:"Balanced",min:3,max:8,slots:["tip","disc","blade","launcher"]},{key:"maxSpin",label:"Launch spin",prefix:"Wound",min:2,max:6,slots:["launcher","core"]},{key:"superGain",label:"Overdrive gain",prefix:"Primed",min:5,max:12,slots:["reactor","core"]},{key:"superPower",label:"Super power",prefix:"Overloaded",min:5,max:12,slots:["reactor"]}],La=i=>Lu.find(t=>t.key===i),Zl=20;function Du(i,t,e={}){const n=e.slot?ln(e.slot):Wi;let s=n[Math.floor(i()*n.length)];const r=_i.map((c,h)=>h<(e.minRarity??0)?0:c.weight*Math.pow(1+t*.07,h));let a=i()*r.reduce((c,h)=>c+h,0),o=_i.length-1;for(let c=0;c<r.length;c++)if(a-=r[c],a<0){o=c;break}if(s.slot==="reactor"&&o<Ic(s.id)){const c=ln("reactor").filter(h=>Ic(h.id)===0);s=c[Math.floor(i()*c.length)]}const l={uid:e.uid??"",part:s.id,rarity:o,level:t,affixes:[]};return Uu(l,i),l}const Wo=i=>.7+.05*i,Hf=(i,t)=>Wo(i)*(1+.15*t),Iu=(i,t,e,n)=>Math.round((i.min+t()*(i.max-i.min))*Hf(e,n)*10)/10;function Uu(i,t){const e=Fn(i.part).slot,n=Lu.filter(s=>s.slots.includes(e)&&!i.affixes.some(r=>r.key===s.key));for(let s=Math.min(_i[i.rarity].rolls,i.affixes.length+n.length)-i.affixes.length;s>0;s--){const r=n.splice(Math.floor(t()*n.length),1)[0];i.affixes.push({key:r.key,pct:Iu(r,t,i.level,i.rarity)})}i.affixes.sort((s,r)=>r.pct-s.pct)}function Nu(i){const t=Fn(i.part).name;return i.affixes.length?`${La(i.affixes[0].key).prefix} ${t}`:t}const Ou=i=>`+${i.pct}% ${La(i.key).label}`,xi=i=>Math.round(10+i.rarity*12+i.level*2+i.affixes.reduce((t,e)=>t+e.pct,0)),Xo=i=>2+i.rarity*i.rarity*4+i.level,Fu=i=>i.tier+5,Bu=i=>Math.round((4+i.level*2)*(1+i.rarity*.75)),qo=i=>5+i.level+i.rarity*6;function Gf(i,t){const e=i.items.find(r=>r.uid===t);if(!e||e.level>=Fu(i))return 0;const n=Bu(e);if(i.scrap<n)return 0;i.scrap-=n;const s=Wo(e.level+1)/Wo(e.level);e.level++;for(const r of e.affixes)r.pct=Math.round(r.pct*s*10)/10;return n}function Vf(i,t,e,n){const s=i.items.find(o=>o.uid===t);if(!s||!s.affixes[e])return 0;const r=qo(s);if(i.scrap<r)return 0;i.scrap-=r;const a=s.affixes[e];return a.pct=Iu(La(a.key),n,s.level,s.rarity),s.affixes.sort((o,l)=>l.pct-o.pct),r}function Wf(i,t){const e=new Set([...i.affixes.map(r=>r.key),...t?.affixes.map(r=>r.key)??[]]),n=(r,a)=>r?.affixes.find(o=>o.key===a)?.pct??0,s=[...e].map(r=>({key:r,label:La(r).label,now:n(t,r),item:n(i,r),diff:Math.round((n(i,r)-n(t,r))*10)/10}));return s.sort((r,a)=>a.item-r.item),{rows:s,power:xi(i)-(t?xi(t):0)}}function Xf(i,t,e,n){const s=a=>i.items.indexOf(a),r=(a,o)=>e==="newest"?s(o)-s(a):e==="rarity"&&o.rarity-a.rarity||xi(o)-xi(a);return[...t].sort((a,o)=>+(o.uid===n)-+(a.uid===n)||r(a,o))}function ku(i,t){const e=Object.values(i.equipped);return i.items.filter(n=>n.rarity<=t&&!e.includes(n.uid))}function qf(i,t){let e=0;for(const n of ku(i,t))e+=Vu(i,n.uid);return e}const Yf=10;function $f(i){let t=i|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zu(i,t){const e={...i};for(const n of t)for(const s of n.affixes)s.key==="spinDecay"?e.spinDecay/=1+s.pct/100:e[s.key]*=1+s.pct/100;return e}const Kf=["talon","bastion","pivot","feather","flatline","needle","surge","rampart","ripcord","winder","thermal","cryo"];function Jf(){const i=Kf.map((e,n)=>({uid:"s"+n,part:e,rarity:0,level:1,affixes:[]})),t={};for(const e of $i)t[e]=i.find(n=>n.part===_s[e]).uid;return{v:2,items:i,equipped:t,paint:_s.paint,glow:_s.glow,metal:_s.metal,spinDir:1,scrap:0,tier:1,wins:0,nextUid:1,pity:0}}function Hc(i){const t=Jf(),e=i?.v;if(!i||typeof i!="object"||e!==1&&e!==2||!Array.isArray(i.items))return t;const n={...t,...i,v:2};n.pity=Math.max(0,Math.floor(n.pity)||0),n.items=n.items.filter(s=>s&&Wi.some(r=>r.id===s.part)&&Array.isArray(s.affixes));for(const s of $i)if(!n.items.find(a=>a.uid===n.equipped?.[s]&&Fn(a.part).slot===s)){let a=n.items.find(o=>Fn(o.part).slot===s);a||(a={uid:"fix"+s,part:_s[s],rarity:0,level:1,affixes:[]},n.items.push(a)),n.equipped={...n.equipped,[s]:a.uid}}return n.tier=Math.max(1,Math.min(Zl,Math.floor(n.tier)||1)),n.scrap=Math.max(0,Math.floor(n.scrap)||0),n.spinDir=n.spinDir===-1?-1:1,n}const Hu=(i,t)=>i.items.find(e=>e.uid===t),Gu=i=>$i.map(t=>Hu(i,i.equipped[t]));function Yo(i){const t={spinDir:i.spinDir,paint:i.paint,glow:i.glow,metal:i.metal};for(const e of $i)t[e]=Hu(i,i.equipped[e]).part;return t}function ir(i,t){return zu(Jl(Yo(i),t),Gu(i))}const Zf=i=>Gu(i).reduce((t,e)=>t+xi(e),0);function jf(i,t){return i.pity>=Yf&&t.rarity<2&&(t.rarity=2,Uu(t,$f(i.nextUid*7919+i.wins))),i.pity=t.rarity>=2?0:i.pity+1,t.uid="i"+i.nextUid++,i.items.push(t),t}function Vu(i,t){if(Object.values(i.equipped).includes(t))return 0;const e=i.items.findIndex(s=>s.uid===t);if(e<0)return 0;const n=Xo(i.items[e]);return i.items.splice(e,1),i.scrap+=n,n}function Qf(i,t,e,n,s){const r=e?1+(i()<.55?1:0)+(s>=3?1:0)+(n?1:0):i()<.35?1:0;return Array.from({length:r},(a,o)=>Du(i,t,{minRarity:n&&e&&o===0?2:0}))}const Gc=["RUSTWIND","IRONVOLT","COGBREAKER","SLAGHAMMER","GRINDSTONE","HEXBOLT","TORQUE","CRANKSHAFT","GEARLOCK","RIVETER","DRILLBIT","FLINTLOCK","PISTON","CAMSHAFT","SPROCKET","BALLAST"],Vc=["rusher","turtle","rider","ambusher"],tp={rusher:"RUSHER",turtle:"TURTLE",rider:"WALL-RIDER",ambusher:"AMBUSHER"},ep={rusher:["RAMJET","BLITZ","THRUSTER","CANNONBALL","WRECKER","BATTERAM","OVERDRIVE","FLASHPOINT"],turtle:["BULWARK","GRANITE","VAULT","BUNKER","ANCHORAGE","KEEPSTONE","BARRICADE","DEADBOLT"],rider:["RIMRUNNER","LOOPLINE","ORBITER","CIRCUIT","TRACKLAYER","RAILGUN","MERRYGO","SLIPSTREAM"],ambusher:["TRIPWIRE","SNAPSPRING","DEADFALL","MOUSETRAP","HAIRTRIGGER","LANDMINE","POPGUN","JACKBOX"]},np={rusher:{blade:["talon","ripsaw","shifter"],tip:["flatline","gripper"],core:["surge","viper","anchor"]},turtle:{blade:["bastion","halo"],disc:["anvil","flywheel"],core:["rampart","lockjaw"]},rider:{tip:["flatline","orbit"],disc:["pivot","feather"],core:["surge","coil","viper"]},ambusher:{disc:["feather","pivot"],tip:["needle","gripper"],core:["anchor","coil","surge"]}},Wc=["THE FOUNDRY WARDEN","THE PILEDRIVER","THE GYRE ENGINE","THE LAST FLYWHEEL"],Wu=i=>i%5===0,ip=i=>Wc[(Math.floor(i/5)-1)%Wc.length],sp=i=>({strike:Math.min(92,28+i*4),boost:Math.min(85,34+i*3)});function Xu(i,t,e,n=[]){const s=Ff(i,e),r=Vc[Math.floor(i()*Vc.length)];for(const[u,f]of Object.entries(np[r]))i()<.7&&(s[u]=f[Math.floor(i()*f.length)]);const a=$i.map(u=>{const f=Du(i,t,{slot:u});return f.part=s[u],f.affixes=f.affixes.filter(()=>i()<.5+t*.025),f}),l=(i()<.75?ep[r]:Gc).filter(u=>!n.includes(u)),c=l[Math.floor(i()*l.length)]??Gc.find(u=>!n.includes(u))??"FOE",h=zu(Jl(s,c),a);return h.ai={...sp(t),persona:r},h}function rp(i,t,e){const n=Xu(i,Math.min(Zl,t+2),e),s=1.55;return n.name=ip(t),n.role="attack",n.radius*=s,n.mass*=2.8,n.maxSpin*=1.7,n.burstRes*=2.6,n.attack*=1.15,n.steer*=.75,n.spinDecay*=.9,n.look={...n.look,scale:s},n.ai={strike:Math.min(95,50+t*2),boost:70},n}function ap(i,t,e,n){const s=[],r=o=>{const l=Xu(i,o,n,s);return s.push(l.name),l},a=Array.from({length:e-1},()=>r(t));if(Wu(t)){const o=t>=10?Math.min(2,e):0;return{allies:a,enemies:[rp(i,t,n),...Array.from({length:o},()=>r(t))],boss:!0}}return{allies:a,enemies:Array.from({length:e},()=>r(t)),boss:!1}}const op=3.5,va=.6;class lp{constructor(t,e,n=2,s=Ts,r){this.specs=t,this.seed=e,this.winsNeeded=n,this.stadium=s,this.teams=r,this.world=Nc(t,e,s,r)}world;phase="countdown";phaseT=3*va;liveT=0;round=1;score=[0,0];tick(t,e){switch(this.phase){case"countdown":return this.phaseT-=Bt,this.phaseT<=0&&(this.phase="live",this.liveT=0),[];case"live":{this.liveT+=Bt;const n=[];return this.world.tops.forEach((s,r)=>{if(s.inPlay)return;const a=e[r]??(this.liveT>op?{x:0,y:0,power:.5,tilt:0}:null);a&&wf(this.world,r,a,n)}),n.push(...Ja(this.world,t)),this.world.over&&(this.world.over.winner>=0&&this.score[this.world.over.winner]++,this.phase="roundEnd",this.phaseT=3),n}case"roundEnd":{this.phaseT-=Bt;const n=Ja(this.world,t);return this.phaseT<=0&&(this.score.some(s=>s>=this.winsNeeded)?this.phase="matchEnd":(this.round++,this.world=Nc(this.specs,this.seed+this.round*7919,this.stadium,this.teams),this.phase="countdown",this.phaseT=3*va)),n}case"matchEnd":return Ja(this.world,t)}}}function qu(){return new URLSearchParams(location.search).has("touch")||window.matchMedia("(pointer: coarse)").matches}function cp(i){const t=qu(),e={active:t,sx:0,sy:0,show:()=>{},update:()=>{}};if(!t)return e;document.body.classList.add("touch");const n=document.createElement("div");n.id="tc",n.className="hidden",n.innerHTML=`
    <div id="tcZone"><div id="tcBase"><div id="tcKnob"></div></div></div>
    <button id="tcSuper" class="tcb"><i></i><span></span></button>
    <button id="tcAbility" class="tcb"><i></i><span></span></button>
    <button id="tcBoost" class="tcb"><i></i><span>BOOST</span></button>
    <button id="tcMain" class="tcb"><i></i><span>STRIKE</span></button>`,document.body.appendChild(n);const s=()=>n.style.setProperty("--tcs",String(Pe.touchScale));s(),Da(s);const r=y=>n.querySelector("#"+y),a=r("tcZone"),o=r("tcBase"),l=r("tcKnob"),c=56;let h=-1,u=0,f=0;const d=(y,w)=>{let R=y-u,E=w-f;const b=Math.hypot(R,E),L=c*Pe.touchScale;b>L&&(R*=L/b,E*=L/b),e.sx=R/L,e.sy=E/L,l.style.transform=`translate(${R}px, ${E}px)`},g=()=>{h=-1,e.sx=e.sy=0,o.classList.remove("on"),l.style.transform=""};a.addEventListener("pointerdown",y=>{h===-1&&(h=y.pointerId,a.setPointerCapture(y.pointerId),u=y.clientX,f=y.clientY,o.style.left=`${u}px`,o.style.top=`${f}px`,o.classList.add("on"),d(u,f),y.preventDefault())}),a.addEventListener("pointermove",y=>{y.pointerId===h&&d(y.clientX,y.clientY)});for(const y of["pointerup","pointercancel"])a.addEventListener(y,w=>{w.pointerId===h&&g()});const v=(y,w,R)=>{const E=r(y);E.addEventListener("pointerdown",b=>{E.setPointerCapture(b.pointerId),E.classList.add("down"),w(),b.preventDefault()});for(const b of["pointerup","pointercancel"])E.addEventListener(b,()=>{E.classList.remove("down"),R?.()});return E},m=v("tcMain",i.mainDown,i.mainUp),p=v("tcBoost",i.boost),S=v("tcAbility",i.ability),M=v("tcSuper",i.super),x=(y,w)=>y.firstElementChild.style.height=`${Math.max(0,Math.min(1,w))*100}%`,_=(y,w)=>{const R=y.lastElementChild;R.textContent!==w&&(R.textContent=w)};return e.show=y=>{n.classList.toggle("hidden",!y),y||g()},e.update=y=>{_(m,y.launching?"LAUNCH":"STRIKE"),_(S,y.ability),x(m,y.launching?0:y.strike),x(p,y.boost),x(S,y.abilityCd),p.classList.toggle("dim",y.launching),S.classList.toggle("dim",y.launching),_(M,y.superMeter>=1?y.superName:"OVERDRIVE"),x(M,1-y.superMeter),M.style.setProperty("--sc",y.superColor),M.classList.toggle("ready",y.superMeter>=1),M.classList.toggle("dim",y.launching)},e}const Yu={low:{shadow:512,bloom:!1,sparks:300,pixelCap:1},medium:{shadow:1024,bloom:!0,sparks:600,pixelCap:1.5},high:{shadow:2048,bloom:!0,sparks:900,pixelCap:2}},hp=[["SMALL",.85],["NORMAL",1],["LARGE",1.2]],$o="sf.settings",up={volume:1,mute:!1,quality:"medium",measured:!1,qualityAuto:!1,touchScale:1};function dp(){const i={...up};try{const t=JSON.parse(localStorage.getItem($o)??"null");t&&typeof t=="object"&&Object.assign(i,t),localStorage.getItem("sf.mute")&&(i.mute=!0,localStorage.removeItem("sf.mute"),localStorage.setItem($o,JSON.stringify(i)))}catch{}return $u(i)}function $u(i){const t=Number(i.volume);i.volume=Number.isFinite(t)?Math.max(0,Math.min(1,t)):1,i.mute=!!i.mute,i.quality in Yu||(i.quality="medium"),i.measured=!!i.measured,i.qualityAuto=!!i.qualityAuto;const e=Number(i.touchScale);return i.touchScale=Number.isFinite(e)?Math.max(.7,Math.min(1.4,e)):1,i}const Pe=dp(),Ku=[],Da=i=>Ku.push(i);function Qs(i){Object.assign(Pe,i),$u(Pe);try{localStorage.setItem($o,JSON.stringify(Pe))}catch{}for(const t of Ku)t()}const fp=i=>i>26?"low":i>19?"medium":"high",pp=`<svg viewBox="-12 -12 24 24" width="24" height="24" aria-hidden="true"><g fill="currentColor">${Array.from({length:8},(t,e)=>`<rect x="-2.2" y="-11.5" width="4.4" height="5" rx="0.8" transform="rotate(${e*45})"/>`).join("")}</g><circle r="6.4" fill="none" stroke="currentColor" stroke-width="3.2"/></svg>`,mp=()=>pp;function gp(i){const t=document.createElement("div");t.id="st",t.className="hidden";const e=qu();t.innerHTML=`
    <div class="st-card" role="dialog" aria-label="Settings">
      <header><h2>SETTINGS</h2><button id="stDone" class="st-btn go">DONE</button></header>
      <div class="st-row"><label>SOUND</label>
        <div class="st-ctl"><input id="stVol" type="range" min="0" max="100" step="5" aria-label="Volume" /><output id="stVolN"></output><button id="stMute" class="st-btn"></button></div></div>
      <div class="st-row"><label>GRAPHICS</label>
        <div class="st-ctl"><div class="st-seg" id="stQ">${["low","medium","high"].map(o=>`<button data-q="${o}">${o.toUpperCase()}</button>`).join("")}</div></div>
        <small id="stAuto"></small></div>
      ${e?`<div class="st-row"><label>CONTROL SIZE</label><div class="st-ctl"><div class="st-seg" id="stS">${hp.map(([o,l])=>`<button data-s="${l}">${o}</button>`).join("")}</div></div></div>`:""}
    </div>`,document.body.appendChild(t);const n=o=>t.querySelector(o),s=n("#stVol"),r=()=>{s.value=String(Math.round(Pe.volume*100)),n("#stVolN").textContent=Pe.mute?"OFF":`${Math.round(Pe.volume*100)}%`,n("#stMute").textContent=Pe.mute?"UNMUTE":"MUTE",n("#stMute").classList.toggle("on",Pe.mute),t.querySelectorAll("[data-q]").forEach(o=>o.classList.toggle("on",o.dataset.q===Pe.quality)),n("#stAuto").textContent=Pe.qualityAuto?"PICKED FOR THIS DEVICE":"",t.querySelectorAll("[data-s]").forEach(o=>o.classList.toggle("on",Math.abs(Number(o.dataset.s)-Pe.touchScale)<.01))};Da(r),r(),s.addEventListener("input",()=>Qs({volume:Number(s.value)/100,mute:!1})),s.addEventListener("change",i),n("#stMute").addEventListener("click",()=>Qs({mute:!Pe.mute})),t.querySelectorAll("[data-q]").forEach(o=>o.addEventListener("click",()=>Qs({quality:o.dataset.q,measured:!0,qualityAuto:!1}))),t.querySelectorAll("[data-s]").forEach(o=>o.addEventListener("click",()=>Qs({touchScale:Number(o.dataset.s)})));const a=()=>t.classList.add("hidden");return n("#stDone").addEventListener("click",a),t.addEventListener("pointerdown",o=>{o.target===t&&a()}),window.addEventListener("keydown",o=>{o.code==="Escape"&&!t.classList.contains("hidden")&&a()}),()=>{r(),t.classList.remove("hidden")}}class vp{ctx=null;master;noise;hums=[];start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createDynamicsCompressor();this.master=t.createGain(),this.applyVolume(),Da(()=>this.applyVolume()),this.master.connect(e).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;for(let s=0;s<2;s++){const r=t.createOscillator();r.type="sawtooth";const a=t.createOscillator();a.type="triangle";const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=3;const l=t.createGain();l.gain.value=0,r.connect(o),a.connect(o),o.connect(l).connect(this.master),r.start(),a.start(),this.hums.push({osc:r,sub:a,filter:o,gain:l})}}setHum(t,e,n){if(!this.ctx)return;const s=this.hums[t],r=this.ctx.currentTime,a=55+210*e+t*9;s.osc.frequency.setTargetAtTime(a,r,.05),s.sub.frequency.setTargetAtTime(a/2,r,.05),s.filter.frequency.setTargetAtTime(200+1400*e,r,.05),s.gain.gain.setTargetAtTime(n?.035+.05*e:0,r,.08)}burstNoise(t,e,n,s,r="bandpass",a=0,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loopStart=Math.random()*.5;const h=l.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=e;const u=l.createGain(),f=l.currentTime+a;o&&h.frequency.exponentialRampToValueAtTime(o,f+s),u.gain.setValueAtTime(n,f),u.gain.exponentialRampToValueAtTime(1e-4,f+s),c.connect(h).connect(u).connect(this.master),c.start(f,Math.random()*.5,s+.05)}tone(t,e,n,s="sine",r,a=0){const o=this.ctx,l=o.createOscillator();l.type=s;const c=o.createGain(),h=o.currentTime+a;l.frequency.setValueAtTime(t,h),r&&l.frequency.exponentialRampToValueAtTime(r,h+n),c.gain.setValueAtTime(e,h),c.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(this.master),l.start(h),l.stop(h+n+.02)}clash(t){if(!this.ctx)return;const e=620+Math.random()*520,n=.15+t*.85;for(const[s,r]of[[1,.2],[2.76,.14],[5.4,.09],[8.93,.05]])this.tone(e*s,r*n,.12+.45*t*(1/Math.sqrt(s)));this.burstNoise(3500+Math.random()*2500,1.2,.5*n,.07+.08*t),t>.5&&this.tone(140,.5*t,.18,"sine",50)}rim(t){this.ctx&&(this.tone(260+Math.random()*60,.25*t+.05,.2,"triangle",150),this.burstNoise(1800,2,.25*t+.05,.08))}burst(){if(this.ctx){this.burstNoise(900,.6,1,.5,"lowpass"),this.burstNoise(5200,.8,.7,.18),this.tone(110,.9,.45,"sine",35);for(let t=0;t<4;t++)this.tone(900+Math.random()*2600,.12,.5+Math.random()*.5)}}ringOut(){this.ctx&&(this.tone(700,.3,.6,"sawtooth",90),this.burstNoise(1200,.7,.5,.5))}spinOut(){this.ctx&&(this.tone(180,.35,.7,"triangle",40),this.burstNoise(600,1,.3,.4))}applyVolume(){this.ctx&&(this.master.gain.value=Pe.mute?0:.7*Pe.volume*Pe.volume)}launch(t){this.ctx&&(this.tone(180,.3,.3,"sawtooth",t?1500:900),this.burstNoise(2600,.8,.35,.22),t&&this.tone(1760,.15,.35))}ability(t){this.ctx&&(t==="brake"?(this.burstNoise(900,1.2,.5,.28,"lowpass"),this.tone(160,.3,.3,"sawtooth",50)):t==="spring"?(this.tone(220,.3,.3,"triangle",720),this.tone(330,.2,.2,"sine",980)):t==="dash"?(this.burstNoise(1500,.9,.5,.25),this.tone(300,.25,.22,"sawtooth",1100)):(this.tone(220,.35,.3,"square",180),this.tone(1320,.1,.25)))}land(){this.ctx&&(this.tone(110,.55,.45,"sine",40),this.burstNoise(500,.8,.8,.25,"lowpass"),this.tone(1500,.12,.3,"triangle",500))}release(){this.ctx&&(this.burstNoise(3e3,1,.45,.22),this.tone(200,.3,.3,"sawtooth",1500),this.tone(1800,.15,.25))}boost(){this.ctx&&(this.burstNoise(2200,.7,.4,.2),this.tone(220,.18,.18,"sawtooth",900))}strike(){this.ctx&&(this.burstNoise(5200,1.5,.3,.09),this.tone(1400,.1,.1,"triangle",2400))}power(){this.ctx&&(this.tone(95,.9,.35,"sine",38),this.burstNoise(700,.6,.7,.22,"lowpass"),this.tone(2100,.16,.5))}wallBreak(){if(this.ctx){this.burstNoise(500,.5,1,.6,"lowpass"),this.burstNoise(3800,.9,.5,.25),this.tone(70,.8,.5,"sine",30);for(let t=0;t<5;t++)this.tone(500+Math.random()*1800,.1,.3+Math.random()*.5)}}superFx(){if(this.ctx){this.tone(120,.4,.45,"sawtooth",1800),this.tone(60,1,.7,"sine",28),this.burstNoise(400,.5,1,.7,"lowpass"),this.burstNoise(6e3,.7,.4,.35);for(let t=0;t<3;t++)this.tone(700+t*520,.14,.7)}}superEl(t){if(this.ctx)switch(t){case"thermal":this.burstNoise(180,.7,1,1.6,"lowpass",0,900),this.tone(70,.5,1.4,"sawtooth",240);for(let e=0;e<6;e++)this.burstNoise(2500+Math.random()*3e3,3,.25,.05,"bandpass",.2+e*.2);break;case"cryo":[3900,3100,2350,1750].forEach((e,n)=>this.tone(e,.16,.7,"sine",e*.985,n*.06)),this.burstNoise(7e3,.8,.5,.6,"highpass"),this.burstNoise(1800,4,.8,.07,"bandpass",.22),this.tone(85,.7,.4,"sine",40,.22);break;case"volt":this.tone(100,.3,1.2,"square"),this.tone(151,.2,1.2,"sawtooth");for(let e=0;e<9;e++)this.burstNoise(3500+Math.random()*4e3,2.5,.45,.05,"bandpass",e*.11+Math.random()*.05);break;case"gale":this.burstNoise(300,2.2,1,2,"bandpass",0,2600),this.burstNoise(700,1.2,.5,2,"bandpass",0,4200),this.burstNoise(3e3,.7,.9,.25,"bandpass",2.1);break;case"quake":this.tone(58,1,1.3,"sine",22),this.burstNoise(120,.6,1,1.4,"lowpass");for(let e=0;e<6;e++)this.tone(90+Math.random()*90,.45,.16,"triangle",45,.1+e*.13);break;case"plasma":this.tone(300,.3,.35,"sawtooth",3200),this.burstNoise(5e3,1.2,1,.5,"bandpass",.3,900),this.tone(2400,.4,.5,"square",200,.3);break;case"gravity":this.tone(160,.7,2.4,"sine",30),this.tone(164,.5,2.4,"triangle",31),this.burstNoise(900,1.5,.5,2.4,"bandpass",0,90),this.tone(40,1,.5,"sine",160,2.5);break;case"resonance":for(let e=0;e<4;e++)for(const[n,s]of[[1,.3],[2.76,.16],[5.4,.08]])this.tone(330*n,s,.55,"sine",void 0,e*.6);break;case"mag":this.tone(520,.35,.7,"sine",80),this.tone(529,.35,.7,"sine",84),this.tone(80,.5,.5,"sawtooth",900,.7),this.burstNoise(1500,.8,.7,.3,"bandpass",.7);break}}zap(){this.ctx&&(this.burstNoise(4200+Math.random()*2e3,2,.35,.09),this.tone(1800,.08,.08,"square",500))}beep(t){this.ctx&&this.tone(t?990:495,.2,t?.4:.14,"square")}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="170",xp=0,Xc=1,_p=2,Ju=1,Zu=2,Xn=3,yi=0,$e=1,He=2,Jn=0,Ss=1,Fe=2,qc=3,Yc=4,Mp=5,Fi=100,yp=101,Sp=102,bp=103,Ep=104,Tp=200,wp=201,Ap=202,Rp=203,Ko=204,Jo=205,Cp=206,Pp=207,Lp=208,Dp=209,Ip=210,Up=211,Np=212,Op=213,Fp=214,Zo=0,jo=1,Qo=2,ws=3,tl=4,el=5,nl=6,il=7,ju=0,Bp=1,kp=2,Mi=0,Qu=1,td=2,ed=3,Ql=4,zp=5,nd=6,id=7,sd=300,As=301,Rs=302,sl=303,rl=304,Ia=306,al=1e3,zi=1001,ol=1002,nn=1003,Hp=1004,Tr=1005,Un=1006,Qa=1007,Hi=1008,ei=1009,rd=1010,ad=1011,lr=1012,tc=1013,Xi=1014,Nn=1015,Zn=1016,ec=1017,nc=1018,Cs=1020,od=35902,ld=1021,cd=1022,Tn=1023,hd=1024,ud=1025,bs=1026,Ps=1027,ic=1028,sc=1029,dd=1030,rc=1031,ac=1033,oa=33776,la=33777,ca=33778,ha=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,vl=37810,xl=37811,_l=37812,Ml=37813,yl=37814,Sl=37815,bl=37816,El=37817,Tl=37818,wl=37819,Al=37820,Rl=37821,ua=36492,Cl=36494,Pl=36495,fd=36283,Ll=36284,Dl=36285,Il=36286,Gp=3200,Vp=3201,pd=0,Wp=1,mi="",on="srgb",Ns="srgb-linear",Ua="linear",ue="srgb",Qi=7680,$c=519,Xp=512,qp=513,Yp=514,md=515,$p=516,Kp=517,Jp=518,Zp=519,Ul=35044,Kc="300 es",qn=2e3,xa=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Nl=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function jp(i,t){return(i%t+t)%t}function eo(i,t,e){return(1-e)*i+e*t}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class j{constructor(t=0,e=0){j.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],M=s[4],x=s[7],_=s[2],y=s[5],w=s[8];return r[0]=a*v+o*S+l*_,r[3]=a*m+o*M+l*y,r[6]=a*p+o*x+l*w,r[1]=c*v+h*S+u*_,r[4]=c*m+h*M+u*y,r[7]=c*p+h*x+u*w,r[2]=f*v+d*S+g*_,r[5]=f*m+d*M+g*y,r[8]=f*p+d*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const no=new Yt;function gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){const i=_a("canvas");return i.style.display="block",i}const Jc={};function tr(i){i in Jc||(Jc[i]=!0,console.warn(i))}function tm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function em(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Qc=[.3127,.329],th=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ns]:{primaries:Zc,whitePoint:Qc,transfer:Ua,toXYZ:th,fromXYZ:eh,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:Zc,whitePoint:Qc,transfer:ue,toXYZ:th,fromXYZ:eh,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let ts;class im{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=_a("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_a("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sm=0;class vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(io(s[a].image)):r.push(io(s[a]))}else r=io(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?im.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rm=0;class Ge extends Os{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=zi,s=zi,r=Un,a=Hi,o=Tn,l=ei,c=Ge.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=jn(),this.name="",this.source=new vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case al:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case al:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=sd;Ge.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,_=(p+1)/2,y=(h+f)/4,w=(u+v)/4,R=(g+m)/4;return M>x&&M>_?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=y/n,r=w/n):x>_?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=R/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=w/r,s=R/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class am extends Os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends am{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class om extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const _=Math.sqrt(M),y=Math.atan2(_,p*S);m=Math.sin(m*y)/_,o=Math.sin(o*y)/_}const x=o*S;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new P,nh=new Ki;class bi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Ar.subVectors(this.max,Gs),es.subVectors(t.a,Gs),ns.subVectors(t.b,Gs),is.subVectors(t.c,Gs),ri.subVectors(ns,es),ai.subVectors(is,ns),Ri.subVectors(es,is);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ri.y,Ri.x,0];return!ro(e,es,ns,is,Ar)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,es,ns,is,Ar))?!1:(Rr.crossVectors(ri,ai),e=[Rr.x,Rr.y,Rr.z],ro(e,es,ns,is,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,wr=new bi,es=new P,ns=new P,is=new P,ri=new P,ai=new P,Ri=new P,Gs=new P,Ar=new P,Rr=new P,Ci=new P;function ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lm=new bi,Vs=new P,ao=new P;class Ei{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(ao)),this.expandByPoint(Vs.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new P,oo=new P,Cr=new P,oi=new P,lo=new P,Pr=new P,co=new P;class Na{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=oi.dot(this.direction),l=-oi.dot(Cr),c=oi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oo).addScaledVector(Cr,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){lo.subVectors(e,t),Pr.subVectors(n,t),co.crossVectors(lo,Pr);let a=this.direction.dot(co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(Pr.crossVectors(oi,Pr));if(l<0)return null;const c=o*this.direction.dot(lo.cross(oi));if(c<0||l+c>a)return null;const h=-o*oi.dot(co);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),li.crossVectors(n,je),li.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),li.crossVectors(n,je)),li.normalize(),Lr.crossVectors(je,li),s[0]=li.x,s[4]=Lr.x,s[8]=je.x,s[1]=li.y,s[5]=Lr.y,s[9]=je.y,s[2]=li.z,s[6]=Lr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],_=n[15],y=s[0],w=s[4],R=s[8],E=s[12],b=s[1],L=s[5],z=s[9],k=s[13],G=s[2],Y=s[6],U=s[10],I=s[14],N=s[3],q=s[7],et=s[11],lt=s[15];return r[0]=a*y+o*b+l*G+c*N,r[4]=a*w+o*L+l*Y+c*q,r[8]=a*R+o*z+l*U+c*et,r[12]=a*E+o*k+l*I+c*lt,r[1]=h*y+u*b+f*G+d*N,r[5]=h*w+u*L+f*Y+d*q,r[9]=h*R+u*z+f*U+d*et,r[13]=h*E+u*k+f*I+d*lt,r[2]=g*y+v*b+m*G+p*N,r[6]=g*w+v*L+m*Y+p*q,r[10]=g*R+v*z+m*U+p*et,r[14]=g*E+v*k+m*I+p*lt,r[3]=S*y+M*b+x*G+_*N,r[7]=S*w+M*L+x*Y+_*q,r[11]=S*R+M*z+x*U+_*et,r[15]=S*E+M*k+x*I+_*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,M=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,x=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,_=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,y=e*S+n*M+s*x+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return t[0]=S*w,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=M*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=x*w,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*w,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=_*w,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,S=l*c,M=l*h,x=l*u,_=n.x,y=n.y,w=n.z;return s[0]=(1-(v+p))*_,s[1]=(d+x)*_,s[2]=(g-M)*_,s[3]=0,s[4]=(d-x)*y,s[5]=(1-(f+p))*y,s[6]=(m+S)*y,s[7]=0,s[8]=(g+M)*w,s[9]=(m-S)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const c=1/r,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=qn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===qn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let g,v;if(o===qn)g=(a+r)*u,v=-2*u;else if(o===xa)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new P,xn=new se,cm=new P(0,0,0),hm=new P(1,1,1),li=new P,Lr=new P,je=new P,ih=new se,sh=new Ki;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let um=0;const rh=new P,rs=new Ki,Gn=new se,Dr=new P,Ws=new P,dm=new P,fm=new Ki,ah=new P(1,0,0),oh=new P(0,1,0),lh=new P(0,0,1),ch={type:"added"},pm={type:"removed"},as={type:"childadded",child:null},ho={type:"childremoved",child:null};class Re extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new P,e=new An,n=new Ki,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Yt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ws,Dr,this.up):Gn.lookAt(Dr,Ws,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Gn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new P(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Vn=new P,uo=new P,Wn=new P,os=new P,ls=new P,hh=new P,fo=new P,po=new P,mo=new P,go=new fe,vo=new fe,xo=new fe;class cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Vn.subVectors(n,e),uo.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Vn),l=_n.dot(uo),c=Vn.dot(Vn),h=Vn.dot(uo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return go.setScalar(0),vo.setScalar(0),xo.setScalar(0),go.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(go,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Vn.subVectors(t,e),_n.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),_n.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),ls.subVectors(r,n),fo.subVectors(t,n);const l=os.dot(fo),c=ls.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);const h=os.dot(po),u=ls.dot(po);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);mo.subVectors(t,r);const d=os.dot(mo),g=ls.dot(mo);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return hh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(hh,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function _o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=jp(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_o(a,r,t+1/3),this.g=_o(a,r,t),this.b=_o(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ne.fromWorkingColorSpace(ze.copy(this),t),Math.round(Oe(ze.r*255,0,255))*65536+Math.round(Oe(ze.g*255,0,255))*256+Math.round(Oe(ze.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=on){ne.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Ir);const n=eo(ci.h,Ir.h,e),s=eo(ci.s,Ir.s,e),r=eo(ci.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Ft;Ft.NAMES=_d;let mm=0;class Ti extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=jn(),this.name="",this.blending=Ss,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ae extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new P,Ur=new j;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class Md extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yd extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gm=0;const rn=new se,Mo=new Re,cs=new P,Qe=new bi,Xs=new bi,Ne=new P;class ge extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?yd:Md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Qe.min,Xs.min),Qe.expandByPoint(Ne),Ne.addVectors(Qe.max,Xs.max),Qe.expandByPoint(Ne)):(Qe.expandByPoint(Xs.min),Qe.expandByPoint(Xs.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Ne.add(cs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;const c=new P,h=new P,u=new P,f=new j,d=new j,g=new j,v=new P,m=new P;function p(R,E,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[R].add(v),o[E].add(v),o[b].add(v),l[R].add(m),l[E].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,E=S.length;R<E;++R){const b=S[R],L=b.start,z=b.count;for(let k=L,G=L+z;k<G;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new P,x=new P,_=new P,y=new P;function w(R){_.fromBufferAttribute(s,R),y.copy(_);const E=o[R];M.copy(E),M.sub(_.multiplyScalar(_.dot(E))).normalize(),x.crossVectors(y,E);const L=x.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,E=S.length;R<E;++R){const b=S[R],L=b.start,z=b.count;for(let k=L,G=L+z;k<G;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new se,Pi=new Na,Nr=new Ei,dh=new P,Or=new P,Fr=new P,Br=new P,yo=new P,kr=new P,fh=new P,zr=new P;class Mt extends Re{constructor(t=new ge,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(yo.fromBufferAttribute(u,t),a?kr.addScaledVector(yo,h):kr.addScaledVector(yo.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Nr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Nr,dh)===null||Pi.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,_=M;x<_;x+=3){const y=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);s=Hr(this,p,t,n,c,h,u,y,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=Hr(this,a,t,n,c,h,u,S,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,_=M;x<_;x+=3){const y=x,w=x+1,R=x+2;s=Hr(this,p,t,n,c,h,u,y,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,M=m+1,x=m+2;s=Hr(this,a,t,n,c,h,u,S,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vm(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===yi,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Br);const h=vm(i,t,e,n,Or,Fr,Br,fh);if(h){const u=new P;cn.getBarycoord(fh,Or,Fr,Br,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,u,new j)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new j)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Or,Fr,Br,f.normal),h.face=f,h.barycoord=u}return h}class le extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,p,S,M,x,_,y,w,R,E){const b=x/w,L=_/R,z=x/2,k=_/2,G=y/2,Y=w+1,U=R+1;let I=0,N=0;const q=new P;for(let et=0;et<U;et++){const lt=et*L-k;for(let ft=0;ft<Y;ft++){const Dt=ft*b-z;q[v]=Dt*S,q[m]=lt*M,q[p]=G,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=y>0?1:-1,h.push(q.x,q.y,q.z),u.push(ft/w),u.push(1-et/R),I+=1}}for(let et=0;et<R;et++)for(let lt=0;lt<w;lt++){const ft=f+lt+Y*et,Dt=f+lt+Y*(et+1),W=f+(lt+1)+Y*(et+1),it=f+(lt+1)+Y*et;l.push(ft,Dt,it),l.push(Dt,W,it),N+=6}o.addGroup(d,N,E),d+=N,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const s in n)t[s]=n[s]}return t}function xm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const cr={clone:Ls,merge:Xe};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bd extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,ph=new j,mh=new j;class qe extends bd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class ym extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new qe(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new qe(hs,us,t,e);a.layers=this.layers,this.add(a);const o=new qe(hs,us,t,e);o.layers=this.layers,this.add(o);const l=new qe(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new qe(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ed extends Ge{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sm extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ed(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Mt(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Un),new ym(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const So=new P,bm=new P,Em=new Yt;class Ni{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=So.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Em.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Ei,Gr=new P;class lc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+a,f+h,m+g,x+S).normalize(),n[3].setComponents(l-a,f-h,m-g,x-S).normalize(),n[4].setComponents(l-o,f-u,m-v,x-M).normalize(),e===qn)n[5].setComponents(l+o,f+u,m+v,x+M).normalize();else if(e===xa)n[5].setComponents(o,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tm(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Oa extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-S,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const M=S+c*p,x=S+c*(p+1),_=S+1+c*(p+1),y=S+1+c*p;d.push(M,x,y),d.push(x,_,y)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,E0=`struct PhysicalMaterial {
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
}`,T0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ig=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Zg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,tv=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,sv=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:wm,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Im,batching_pars_vertex:Um,batching_vertex:Nm,begin_vertex:Om,beginnormal_vertex:Fm,bsdfs:Bm,iridescence_fragment:km,bumpmap_pars_fragment:zm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:$m,common:Km,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:jm,displacementmap_vertex:Qm,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:a0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:h0,fog_fragment:u0,fog_pars_fragment:d0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:v0,lights_toon_fragment:_0,lights_toon_pars_fragment:M0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:b0,lights_physical_pars_fragment:E0,lights_fragment_begin:T0,lights_fragment_maps:w0,lights_fragment_end:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:D0,map_pars_fragment:I0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphinstance_vertex:B0,morphcolor_vertex:k0,morphnormal_vertex:z0,morphtarget_pars_vertex:H0,morphtarget_vertex:G0,normal_fragment_begin:V0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:j0,opaque_fragment:Q0,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:vg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:Mg,uv_pars_fragment:yg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:Eg,background_vert:Tg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Lg,depth_frag:Dg,distanceRGBA_vert:Ig,distanceRGBA_frag:Ug,equirect_vert:Ng,equirect_frag:Og,linedashed_vert:Fg,linedashed_frag:Bg,meshbasic_vert:kg,meshbasic_frag:zg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:$g,meshphysical_vert:Kg,meshphysical_frag:Jg,meshtoon_vert:Zg,meshtoon_frag:jg,points_vert:Qg,points_frag:tv,shadow_vert:ev,shadow_frag:nv,sprite_vert:iv,sprite_frag:sv},dt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Dn={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Dn.physical={uniforms:Xe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Vr={r:0,b:0,g:0},Di=new An,rv=new se;function av(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const x=g(S);x===null?p(o,l):x&&x.isColor&&(p(x,1),M=!0);const _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===Ia)?(h===void 0&&(h=new Mt(new le(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ls(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Di)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==ue,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Mt(new Oa(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ls(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Vr,Sd(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function ov(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,L,z,k,G){let Y=!1;const U=u(k,z,L);r!==U&&(r=U,c(r.object)),Y=d(b,k,z,G),Y&&g(b,k,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(b,L,z,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,z){const k=z.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let Y=G[L.id];Y===void 0&&(Y={},G[L.id]=Y);let U=Y[k];return U===void 0&&(U=f(l()),Y[k]=U),U}function f(b){const L=[],z=[],k=[];for(let G=0;G<e;G++)L[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,L,z,k){const G=r.attributes,Y=L.attributes;let U=0;const I=z.getAttributes();for(const N in I)if(I[N].location>=0){const et=G[N];let lt=Y[N];if(lt===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;U++}return r.attributesNum!==U||r.index!==k}function g(b,L,z,k){const G={},Y=L.attributes;let U=0;const I=z.getAttributes();for(const N in I)if(I[N].location>=0){let et=Y[N];et===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),G[N]=lt,U++}r.attributes=G,r.attributesNum=U,r.index=k}function v(){const b=r.newAttributes;for(let L=0,z=b.length;L<z;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){const z=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;z[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),G[b]!==L&&(i.vertexAttribDivisor(b,L),G[b]=L)}function S(){const b=r.newAttributes,L=r.enabledAttributes;for(let z=0,k=L.length;z<k;z++)L[z]!==b[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function M(b,L,z,k,G,Y,U){U===!0?i.vertexAttribIPointer(b,L,z,G,Y):i.vertexAttribPointer(b,L,z,k,G,Y)}function x(b,L,z,k){v();const G=k.attributes,Y=z.getAttributes(),U=L.defaultAttributeValues;for(const I in Y){const N=Y[I];if(N.location>=0){let q=G[I];if(q===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){const et=q.normalized,lt=q.itemSize,ft=t.get(q);if(ft===void 0)continue;const Dt=ft.buffer,W=ft.type,it=ft.bytesPerElement,st=W===i.INT||W===i.UNSIGNED_INT||q.gpuType===tc;if(q.isInterleavedBufferAttribute){const Z=q.data,yt=Z.stride,kt=q.offset;if(Z.isInstancedInterleavedBuffer){for(let Nt=0;Nt<N.locationSize;Nt++)p(N.location+Nt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)m(N.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Nt=0;Nt<N.locationSize;Nt++)M(N.location+Nt,lt/N.locationSize,W,et,yt*it,(kt+lt/N.locationSize*Nt)*it,st)}else{if(q.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)p(N.location+Z,q.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Z=0;Z<N.locationSize;Z++)m(N.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Z=0;Z<N.locationSize;Z++)M(N.location+Z,lt/N.locationSize,W,et,lt*it,lt/N.locationSize*Z*it,st)}}else if(U!==void 0){const et=U[I];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(N.location,et);break;case 3:i.vertexAttrib3fv(N.location,et);break;case 4:i.vertexAttrib4fv(N.location,et);break;default:i.vertexAttrib1fv(N.location,et)}}}}S()}function _(){R();for(const b in n){const L=n[b];for(const z in L){const k=L[z];for(const G in k)h(k[G].object),delete k[G];delete L[z]}delete n[b]}}function y(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const z in L){const k=L[z];for(const G in k)h(k[G].object),delete k[G];delete L[z]}delete n[b.id]}function w(b){for(const L in n){const z=n[L];if(z[b.id]===void 0)continue;const k=z[b.id];for(const G in k)h(k[G].object),delete k[G];delete z[b.id]}}function R(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function lv(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Tn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Nn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:_,maxSamples:y}}function hv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ni,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,M=S*4;let x=p.clippingState||null;l.value=x,x=h(g,f,M,d);for(let _=0;_!==M;++_)x[_]=e[_];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)a.copy(u[M]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function uv(i){let t=new WeakMap;function e(a,o){return o===sl?a.mapping=As:o===rl&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===sl||o===rl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class cc extends bd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,gh=[.125,.215,.35,.446,.526,.582],Bi=20,bo=new cc,vh=new Ft;let Eo=null,To=0,wo=0,Ao=!1;const Oi=(1+Math.sqrt(5))/2,ds=1/Oi,xh=[new P(-Oi,ds,0),new P(Oi,ds,0),new P(-ds,0,Oi),new P(ds,0,Oi),new P(0,Oi,-ds),new P(0,Oi,ds),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,To,wo),this._renderer.xr.enabled=Ao,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Zn,format:Tn,colorSpace:Ns,depthBuffer:!1},s=_h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(r)),this._blurMaterial=fv(r,t,e)}return s}_compileMaterial(t){const e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s){const o=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vh),h.toneMapping=Mi,h.autoClear=!1;const d=new Ae({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new Mt(new le,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(vh),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Wr(s,S*M,p>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===As||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xh[(s-r-1)%xh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Mt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let S=0;for(let w=0;w<Bi;++w){const R=w/v,E=Math.exp(-R*R/2);p.push(E),w===0?S+=E:w<m&&(S+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[s],_=3*x*(s>M-Ms?s-M+Ms:0),y=4*(this._cubeSize-x);Wr(e,_,y,3*x,2*x),l.setRenderTarget(e),l.render(u,bo)}}function dv(i){const t=[],e=[],n=[];let s=i;const r=i-Ms+1+gh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ms?l=gh[a-i+Ms-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let y=0;y<d;y++){const w=y%3*2/3-1,R=y>2?0:-1,E=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(E,v*g*y),M.set(f,m*g*y);const b=[y,y,y,y,y,y];x.set(b,p*g*y)}const _=new ge;_.setAttribute("position",new be(S,v)),_.setAttribute("uv",new be(M,m)),_.setAttribute("faceIndex",new be(x,p)),t.push(_),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _h(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fv(i,t,e){const n=new Float32Array(Bi),s=new P(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Mh(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function yh(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function pv(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===rl,h=l===As||l===Rs;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ma(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ma(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gv(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let M=0,x=S.length;M<x;M+=3){const _=S[M+0],y=S[M+1],w=S[M+2];f.push(_,y,y,w,w,_)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const _=M+0,y=M+1,w=M+2;f.push(_,y,y,w,w,_)}}else return;const m=new(gd(f)?yd:Md)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vv(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _v(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let _=o.attributes.position.count*x,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*y*4*u),R=new xd(w,_,y,u);R.type=Nn,R.needsUpdate=!0;const E=x*4;for(let L=0;L<u;L++){const z=p[L],k=S[L],G=M[L],Y=_*y*4*L;for(let U=0;U<z.count;U++){const I=U*E;g===!0&&(s.fromBufferAttribute(z,U),w[Y+I+0]=s.x,w[Y+I+1]=s.y,w[Y+I+2]=s.z,w[Y+I+3]=0),v===!0&&(s.fromBufferAttribute(k,U),w[Y+I+4]=s.x,w[Y+I+5]=s.y,w[Y+I+6]=s.z,w[Y+I+7]=0),m===!0&&(s.fromBufferAttribute(G,U),w[Y+I+8]=s.x,w[Y+I+9]=s.y,w[Y+I+10]=s.z,w[Y+I+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new j(_,y)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Mv(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class wd extends Ge{constructor(t,e,n,s,r,a,o,l,c,h=bs){if(h!==bs&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Xi),n===void 0&&h===Ps&&(n=Cs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ad=new Ge,Sh=new wd(1,1),Rd=new xd,Cd=new om,Pd=new Ed,bh=[],Eh=[],Th=new Float32Array(16),wh=new Float32Array(9),Ah=new Float32Array(4);function Fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fa(i,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Tv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),Ue(e,n)}}function wv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),Ue(e,n)}}function Av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),Ue(e,n)}}function Rv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Dv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Ov(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=md,r=Sh):r=Ad,e.setTexture2D(t||r,s)}function Fv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cd,s)}function Bv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pd,s)}function kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rd,s)}function zv(i){switch(i){case 5126:return yv;case 35664:return Sv;case 35665:return bv;case 35666:return Ev;case 35674:return Tv;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Iv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}function Hv(i,t){i.uniform1fv(this.addr,t)}function Gv(i,t){const e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Vv(i,t){const e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wv(i,t){const e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xv(i,t){const e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qv(i,t){const e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yv(i,t){const e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $v(i,t){i.uniform1iv(this.addr,t)}function Kv(i,t){i.uniform2iv(this.addr,t)}function Jv(i,t){i.uniform3iv(this.addr,t)}function Zv(i,t){i.uniform4iv(this.addr,t)}function jv(i,t){i.uniform1uiv(this.addr,t)}function Qv(i,t){i.uniform2uiv(this.addr,t)}function tx(i,t){i.uniform3uiv(this.addr,t)}function ex(i,t){i.uniform4uiv(this.addr,t)}function nx(i,t,e){const n=this.cache,s=t.length,r=Fa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ad,r[a])}function ix(i,t,e){const n=this.cache,s=t.length,r=Fa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cd,r[a])}function sx(i,t,e){const n=this.cache,s=t.length,r=Fa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pd,r[a])}function rx(i,t,e){const n=this.cache,s=t.length,r=Fa(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rd,r[a])}function ax(i){switch(i){case 5126:return Hv;case 35664:return Gv;case 35665:return Vv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return Kv;case 35668:case 35672:return Jv;case 35669:case 35673:return Zv;case 5125:return jv;case 36294:return Qv;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}class ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zv(e.type)}}class lx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}}class cx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function hx(i,t,e){const n=i.name,s=n.length;for(Ro.lastIndex=0;;){const r=Ro.exec(n),a=Ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(e,c===void 0?new ox(o,i,t):new lx(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new cx(o),Rh(e,u)),e=u}}}class da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hx(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ch(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ux=37297;let dx=0;function fx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ph=new Yt;function px(i){ne._getMatrix(Ph,ne.workingColorSpace,i);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Ua:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fx(i.getShaderSource(t),a)}else return s}function mx(i,t){const e=px(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gx(i,t){let e;switch(t){case Qu:e="Linear";break;case td:e="Reinhard";break;case ed:e="Cineon";break;case Ql:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new P;function vx(){ne.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function _x(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function Dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(yx,bx)}const Sx=new Map;function bx(i,t){let e=Jt[t];if(e===void 0){const n=Sx.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(Ex,Tx)}function Tx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function wx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ax(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Cx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ju:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function Px(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=wx(e),c=Ax(e),h=Rx(e),u=Cx(e),f=Px(e),d=xx(e),g=_x(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,mx("linearToOutputTexel",e.outputColorSpace),vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=Ol(a),a=Dh(a,e),a=Ih(a,e),o=Ol(o),o=Dh(o,e),o=Ih(o,e),a=Uh(a),o=Uh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+a,x=S+p+o,_=Ch(s,s.VERTEX_SHADER,M),y=Ch(s,s.FRAGMENT_SHADER,x);s.attachShader(v,_),s.attachShader(v,y),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(_).trim(),G=s.getShaderInfoLog(y).trim();let Y=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,_,y);else{const I=Lh(s,_,"vertex"),N=Lh(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+I+`
`+N)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(U=!1);U&&(L.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(_),s.deleteShader(y),R=new da(s,v),E=Mx(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,ux)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=_,this.fragmentShader=y,this}let Dx=0;class Ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ux(t),e.set(t,n)),n}}class Ux{constructor(t){this.id=Dx++,this.code=t,this.usedTimes=0}}function Nx(i,t,e,n,s,r,a){const o=new oc,l=new Ix,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,L,z,k){const G=z.fog,Y=k.geometry,U=E.isMeshStandardMaterial?z.environment:null,I=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),N=I&&I.mapping===Ia?I.image.height:null,q=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=et!==void 0?et.length:0;let ft=0;Y.morphAttributes.position!==void 0&&(ft=1),Y.morphAttributes.normal!==void 0&&(ft=2),Y.morphAttributes.color!==void 0&&(ft=3);let Dt,W,it,st;if(q){const he=Dn[q];Dt=he.vertexShader,W=he.fragmentShader}else Dt=E.vertexShader,W=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),st=l.getFragmentShaderID(E);const Z=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,$t=!!E.map,Q=!!E.matcap,ct=!!I,D=!!E.aoMap,It=!!E.lightMap,rt=!!E.bumpMap,Et=!!E.normalMap,ut=!!E.displacementMap,zt=!!E.emissiveMap,St=!!E.metalnessMap,C=!!E.roughnessMap,T=E.anisotropy>0,H=E.clearcoat>0,K=E.dispersion>0,nt=E.iridescence>0,J=E.sheen>0,Rt=E.transmission>0,pt=T&&!!E.anisotropyMap,bt=H&&!!E.clearcoatMap,jt=H&&!!E.clearcoatNormalMap,at=H&&!!E.clearcoatRoughnessMap,Tt=nt&&!!E.iridescenceMap,Ht=nt&&!!E.iridescenceThicknessMap,Gt=J&&!!E.sheenColorMap,wt=J&&!!E.sheenRoughnessMap,te=!!E.specularMap,Kt=!!E.specularColorMap,ve=!!E.specularIntensityMap,O=Rt&&!!E.transmissionMap,mt=Rt&&!!E.thicknessMap,$=!!E.gradientMap,tt=!!E.alphaMap,_t=E.alphaTest>0,vt=!!E.alphaHash,Xt=!!E.extensions;let we=Mi;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(we=i.toneMapping);const Be={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Dt,fragmentShader:W,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ns,alphaToCoverage:!!E.alphaToCoverage,map:$t,matcap:Q,envMap:ct,envMapMode:ct&&I.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:It,bumpMap:rt,normalMap:Et,displacementMap:f&&ut,emissiveMap:zt,normalMapObjectSpace:Et&&E.normalMapType===Wp,normalMapTangentSpace:Et&&E.normalMapType===pd,metalnessMap:St,roughnessMap:C,anisotropy:T,anisotropyMap:pt,clearcoat:H,clearcoatMap:bt,clearcoatNormalMap:jt,clearcoatRoughnessMap:at,dispersion:K,iridescence:nt,iridescenceMap:Tt,iridescenceThicknessMap:Ht,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:te,specularColorMap:Kt,specularIntensityMap:ve,transmission:Rt,transmissionMap:O,thicknessMap:mt,gradientMap:$,opaque:E.transparent===!1&&E.blending===Ss&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:vt,combine:E.combine,mapUv:$t&&v(E.map.channel),aoMapUv:D&&v(E.aoMap.channel),lightMapUv:It&&v(E.lightMap.channel),bumpMapUv:rt&&v(E.bumpMap.channel),normalMapUv:Et&&v(E.normalMap.channel),displacementMapUv:ut&&v(E.displacementMap.channel),emissiveMapUv:zt&&v(E.emissiveMap.channel),metalnessMapUv:St&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:pt&&v(E.anisotropyMap.channel),clearcoatMapUv:bt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(E.sheenRoughnessMap.channel),specularMapUv:te&&v(E.specularMap.channel),specularColorMapUv:Kt&&v(E.specularColorMap.channel),specularIntensityMapUv:ve&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:mt&&v(E.thicknessMap.channel),alphaMapUv:tt&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Et||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&($t||tt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:$t&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:zt&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===He,flipSided:E.side===$e,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)b.push(L),b.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(b,E),M(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const b=g[E.type];let L;if(b){const z=Dn[b];L=cr.clone(z.uniforms)}else L=E.uniforms;return L}function _(E,b){let L;for(let z=0,k=h.length;z<k;z++){const G=h[z];if(G.cacheKey===b){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Lx(i,b,E,r),h.push(L)),L}function y(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:_,releaseProgram:y,releaseShaderCache:w,programs:h,dispose:R}}function Ox(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Fx),n.length>1&&n.sort(f||Oh),s.length>1&&s.sort(f||Oh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Bx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ft};break;case"SpotLight":e={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function zx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hx=0;function Gx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vx(i){const t=new kx,e=zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new se,a=new se;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,M=0,x=0,_=0,y=0,w=0;c.sort(Gx);for(let E=0,b=c.length;E<b;E++){const L=c[E],z=L.color,k=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*k,u+=z.g*k,f+=z.b*k;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],k);w++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=U,d++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(z).multiplyScalar(k),U.distance=G,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;const I=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,I.updateMatrices(L),L.castShadow&&y++),n.spotLightMatrix[v]=I.matrix,L.castShadow){const N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=Y,x++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(z).multiplyScalar(k),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=U,m++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const I=L.shadow,N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,N.shadowCameraNear=I.camera.near,N.shadowCameraFar=I.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=U,g++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(k),U.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==_||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=_,R.numLightProbes=w,n.version=Hx++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Bh(i){const t=new Vx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bh(i),t.set(s,[o])):r>=a.length?(o=new Bh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xx extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qx extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function Kx(i,t,e){let n=new lc;const s=new j,r=new j,a=new fe,o=new Xx({depthPacking:Vp}),l=new qx,c={},h=e.maxTextureSize,u={[yi]:$e,[$e]:yi,[He]:He},f=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Yx,fragmentShader:$x}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let p=this.type;this.render=function(y,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Xn&&this.type===Xn,G=p===Xn&&this.type!==Xn;for(let Y=0,U=y.length;Y<U;Y++){const I=y[Y],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const q=N.getFrameExtents();if(s.multiply(q),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,N.mapSize.y=r.y)),N.map===null||k===!0||G===!0){const lt=this.type!==Xn?{minFilter:nn,magFilter:nn}:{};N.map!==null&&N.map.dispose(),N.map=new wn(s.x,s.y,lt),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const et=N.getViewportCount();for(let lt=0;lt<et;lt++){const ft=N.getViewport(lt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),z.viewport(a),N.updateMatrices(I,lt),n=N.getFrustum(),x(w,R,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===Xn&&S(N,R),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,L)};function S(y,w){const R=t.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,R,d,v,null)}function M(y,w,R,E){let b=null;const L=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=b.uuid,k=w.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let Y=G[k];Y===void 0&&(Y=b.clone(),G[k]=Y,w.addEventListener("dispose",_)),b=Y}if(b.visible=w.visible,b.wireframe=w.wireframe,E===Xn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=R}return b}function x(y,w,R,E,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Xn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const k=t.update(y),G=y.material;if(Array.isArray(G)){const Y=k.groups;for(let U=0,I=Y.length;U<I;U++){const N=Y[U],q=G[N.materialIndex];if(q&&q.visible){const et=M(y,q,E,b);y.onBeforeShadow(i,y,w,R,k,et,N),i.renderBufferDirect(R,null,k,et,y,N),y.onAfterShadow(i,y,w,R,k,et,N)}}}else if(G.visible){const Y=M(y,G,E,b);y.onBeforeShadow(i,y,w,R,k,Y,null),i.renderBufferDirect(R,null,k,Y,y,null),y.onAfterShadow(i,y,w,R,k,Y,null)}}const z=y.children;for(let k=0,G=z.length;k<G;k++)x(z[k],w,R,E,b)}function _(y){y.target.removeEventListener("dispose",_);for(const R in c){const E=c[R],b=y.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Jx={[Zo]:jo,[Qo]:nl,[tl]:il,[ws]:el,[jo]:Zo,[nl]:Qo,[il]:tl,[el]:ws};function Zx(i,t){function e(){let O=!1;const mt=new fe;let $=null;const tt=new fe(0,0,0,0);return{setMask:function(_t){$!==_t&&!O&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){O=_t},setClear:function(_t,vt,Xt,we,Be){Be===!0&&(_t*=we,vt*=we,Xt*=we),mt.set(_t,vt,Xt,we),tt.equals(mt)===!1&&(i.clearColor(_t,vt,Xt,we),tt.copy(mt))},reset:function(){O=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,$=null,tt=null,_t=null;return{setReversed:function(vt){if(mt!==vt){const Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const we=_t;_t=null,this.setClear(we)}mt=vt},getReversed:function(){return mt},setTest:function(vt){vt?Z(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(vt){$!==vt&&!O&&(i.depthMask(vt),$=vt)},setFunc:function(vt){if(mt&&(vt=Jx[vt]),tt!==vt){switch(vt){case Zo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=vt}},setLocked:function(vt){O=vt},setClear:function(vt){_t!==vt&&(mt&&(vt=1-vt),i.clearDepth(vt),_t=vt)},reset:function(){O=!1,$=null,tt=null,_t=null,mt=!1}}}function s(){let O=!1,mt=null,$=null,tt=null,_t=null,vt=null,Xt=null,we=null,Be=null;return{setTest:function(he){O||(he?Z(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(he){mt!==he&&!O&&(i.stencilMask(he),mt=he)},setFunc:function(he,mn,Bn){($!==he||tt!==mn||_t!==Bn)&&(i.stencilFunc(he,mn,Bn),$=he,tt=mn,_t=Bn)},setOp:function(he,mn,Bn){(vt!==he||Xt!==mn||we!==Bn)&&(i.stencilOp(he,mn,Bn),vt=he,Xt=mn,we=Bn)},setLocked:function(he){O=he},setClear:function(he){Be!==he&&(i.clearStencil(he),Be=he)},reset:function(){O=!1,mt=null,$=null,tt=null,_t=null,vt=null,Xt=null,we=null,Be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,M=null,x=null,_=null,y=null,w=new Ft(0,0,0),R=0,E=!1,b=null,L=null,z=null,k=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=I>=2);let q=null,et={};const lt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Dt=new fe().fromArray(lt),W=new fe().fromArray(ft);function it(O,mt,$,tt){const _t=new Uint8Array(4),vt=i.createTexture();i.bindTexture(O,vt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<$;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return vt}const st={};st[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ws),rt(!1),Et(Xc),Z(i.CULL_FACE),D(Jn);function Z(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function kt(O,mt){return u[O]!==mt?(i.bindFramebuffer(O,mt),u[O]=mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Nt(O,mt){let $=d,tt=!1;if(O){$=f.get(mt),$===void 0&&($=[],f.set(mt,$));const _t=O.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Xt=_t.length;vt<Xt;vt++)$[vt]=i.COLOR_ATTACHMENT0+vt;$.length=_t.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function $t(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Q={[Fi]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};Q[bp]=i.MIN,Q[Ep]=i.MAX;const ct={[Tp]:i.ZERO,[wp]:i.ONE,[Ap]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Ip]:i.SRC_ALPHA_SATURATE,[Lp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Rp]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Dp]:i.ONE_MINUS_DST_COLOR,[Pp]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[Np]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[Fp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,mt,$,tt,_t,vt,Xt,we,Be,he){if(O===Jn){v===!0&&(yt(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),O!==Mp){if(O!==m||he!==E){if((p!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,x=Fi),he)switch(O){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,M=null,_=null,y=null,w.set(0,0,0),R=0,m=O,E=he}return}_t=_t||mt,vt=vt||$,Xt=Xt||tt,(mt!==p||_t!==x)&&(i.blendEquationSeparate(Q[mt],Q[_t]),p=mt,x=_t),($!==S||tt!==M||vt!==_||Xt!==y)&&(i.blendFuncSeparate(ct[$],ct[tt],ct[vt],ct[Xt]),S=$,M=tt,_=vt,y=Xt),(we.equals(w)===!1||Be!==R)&&(i.blendColor(we.r,we.g,we.b,Be),w.copy(we),R=Be),m=O,E=!1}function It(O,mt){O.side===He?yt(i.CULL_FACE):Z(i.CULL_FACE);let $=O.side===$e;mt&&($=!$),rt($),O.blending===Ss&&O.transparent===!1?D(Jn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Et(O){O!==xp?(Z(i.CULL_FACE),O!==L&&(O===Xc?i.cullFace(i.BACK):O===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),L=O}function ut(O){O!==z&&(U&&i.lineWidth(O),z=O)}function zt(O,mt,$){O?(Z(i.POLYGON_OFFSET_FILL),(k!==mt||G!==$)&&(i.polygonOffset(mt,$),k=mt,G=$)):yt(i.POLYGON_OFFSET_FILL)}function St(O){O?Z(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function C(O){O===void 0&&(O=i.TEXTURE0+Y-1),q!==O&&(i.activeTexture(O),q=O)}function T(O,mt,$){$===void 0&&(q===null?$=i.TEXTURE0+Y-1:$=q);let tt=et[$];tt===void 0&&(tt={type:void 0,texture:void 0},et[$]=tt),(tt.type!==O||tt.texture!==mt)&&(q!==$&&(i.activeTexture($),q=$),i.bindTexture(O,mt||st[O]),tt.type=O,tt.texture=mt)}function H(){const O=et[q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(O){Dt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Dt.copy(O))}function wt(O){W.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),W.copy(O))}function te(O,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let tt=$.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(mt,O.name),$.set(O,tt))}function Kt(O,mt){const tt=c.get(mt).get(O);l.get(mt)!==tt&&(i.uniformBlockBinding(mt,tt,O.__bindingPointIndex),l.set(mt,tt))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,et={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,M=null,x=null,_=null,y=null,w=new Ft(0,0,0),R=0,E=!1,b=null,L=null,z=null,k=null,G=null,Dt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:yt,bindFramebuffer:kt,drawBuffers:Nt,useProgram:$t,setBlending:D,setMaterial:It,setFlipSided:rt,setCullFace:Et,setLineWidth:ut,setPolygonOffset:zt,setScissorTest:St,activeTexture:C,bindTexture:T,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:Tt,texImage3D:Ht,updateUBOMapping:te,uniformBlockBinding:Kt,texStorage2D:jt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:Gt,viewport:wt,reset:ve}}function kh(i,t,e,n){const s=jx(n);switch(e){case ld:return i*t;case hd:return i*t;case ud:return i*t*2;case ic:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case dd:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case cd:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fd:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jx(i){switch(i){case ei:case rd:return{byteLength:1,components:1};case lr:case ad:case Zn:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case Xi:case tc:case Nn:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return d?new OffscreenCanvas(C,T):_a("canvas")}function v(C,T,H){let K=1;const nt=St(C);if((nt.width>H||nt.height>H)&&(K=H/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(K*nt.width),Rt=Math.floor(K*nt.height);u===void 0&&(u=g(J,Rt));const pt=T?g(J,Rt):u;return pt.width=J,pt.height=Rt,pt.getContext("2d").drawImage(C,0,0,J,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Rt+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,T,H,K,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=T;if(T===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),T===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),T===i.RGBA){const Rt=nt?Ua:ne.getTransfer(K);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=Rt===ue?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,T){let H;return C?T===null||T===Xi||T===Cs?H=i.DEPTH24_STENCIL8:T===Nn?H=i.DEPTH32F_STENCIL8:T===lr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xi||T===Cs?H=i.DEPTH_COMPONENT24:T===Nn?H=i.DEPTH_COMPONENT32F:T===lr&&(H=i.DEPTH_COMPONENT16),H}function _(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function y(C){const T=C.target;T.removeEventListener("dispose",y),R(T),T.isVideoTexture&&h.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),b(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const H=C.source,K=f.get(H);if(K){const nt=K[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(C),Object.keys(K).length===0&&f.delete(H)}n.remove(C)}function E(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const H=C.source,K=f.get(H);delete K[T.__cacheKey],a.memory.textures--}function b(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let nt=0;nt<T.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=C.textures;for(let K=0,nt=H.length;K<nt;K++){const J=n.get(H[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(C)}let L=0;function z(){L=0}function k(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function G(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function Y(C,T){const H=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,C,T);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function U(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){W(H,C,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function I(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){W(H,C,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function N(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){it(H,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const q={[al]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[ol]:i.MIRRORED_REPEAT},et={[nn]:i.NEAREST,[Hp]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},lt={[Xp]:i.NEVER,[Zp]:i.ALWAYS,[qp]:i.LESS,[md]:i.LEQUAL,[Yp]:i.EQUAL,[Jp]:i.GEQUAL,[$p]:i.GREATER,[Kp]:i.NOTEQUAL};function ft(C,T){if(T.type===Nn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Un||T.magFilter===Qa||T.magFilter===Tr||T.magFilter===Hi||T.minFilter===Un||T.minFilter===Qa||T.minFilter===Tr||T.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,q[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,q[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,q[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,et[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,et[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==Tr&&T.minFilter!==Hi||T.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Dt(C,T){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",y));const K=T.source;let nt=f.get(K);nt===void 0&&(nt={},f.set(K,nt));const J=G(T);if(J!==C.__cacheKey){nt[J]===void 0&&(nt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[J].usedTimes++;const Rt=nt[C.__cacheKey];Rt!==void 0&&(nt[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(T)),C.__cacheKey=J,C.__webglTexture=nt[J].texture}return H}function W(C,T,H){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const nt=Dt(C,T),J=T.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+H);const Rt=n.get(J);if(J.version!==Rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);const pt=ne.getPrimaries(ne.workingColorSpace),bt=T.colorSpace===mi?null:ne.getPrimaries(T.colorSpace),jt=T.colorSpace===mi||pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let at=v(T.image,!1,s.maxTextureSize);at=zt(T,at);const Tt=r.convert(T.format,T.colorSpace),Ht=r.convert(T.type);let Gt=M(T.internalFormat,Tt,Ht,T.colorSpace,T.isVideoTexture);ft(K,T);let wt;const te=T.mipmaps,Kt=T.isVideoTexture!==!0,ve=Rt.__version===void 0||nt===!0,O=J.dataReady,mt=_(T,at);if(T.isDepthTexture)Gt=x(T.format===Ps,T.type),ve&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Gt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Gt,at.width,at.height,0,Tt,Ht,null));else if(T.isDataTexture)if(te.length>0){Kt&&ve&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,te[0].width,te[0].height);for(let $=0,tt=te.length;$<tt;$++)wt=te[$],Kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,Tt,Ht,wt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,Tt,Ht,wt.data);T.generateMipmaps=!1}else Kt?(ve&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,at.width,at.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Tt,Ht,at.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,at.width,at.height,0,Tt,Ht,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Kt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Gt,te[0].width,te[0].height,at.depth);for(let $=0,tt=te.length;$<tt;$++)if(wt=te[$],T.format!==Tn)if(Tt!==null)if(Kt){if(O)if(T.layerUpdates.size>0){const _t=kh(wt.width,wt.height,T.format,T.type);for(const vt of T.layerUpdates){const Xt=wt.data.subarray(vt*_t/wt.data.BYTES_PER_ELEMENT,(vt+1)*_t/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,vt,wt.width,wt.height,1,Tt,Xt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,at.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,wt.width,wt.height,at.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,at.depth,Tt,Ht,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,wt.width,wt.height,at.depth,0,Tt,Ht,wt.data)}else{Kt&&ve&&e.texStorage2D(i.TEXTURE_2D,mt,Gt,te[0].width,te[0].height);for(let $=0,tt=te.length;$<tt;$++)wt=te[$],T.format!==Tn?Tt!==null?Kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,Tt,Ht,wt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,Tt,Ht,wt.data)}else if(T.isDataArrayTexture)if(Kt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Gt,at.width,at.height,at.depth),O)if(T.layerUpdates.size>0){const $=kh(at.width,at.height,T.format,T.type);for(const tt of T.layerUpdates){const _t=at.data.subarray(tt*$/at.data.BYTES_PER_ELEMENT,(tt+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,Tt,Ht,_t)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,Ht,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,at.width,at.height,at.depth,0,Tt,Ht,at.data);else if(T.isData3DTexture)Kt?(ve&&e.texStorage3D(i.TEXTURE_3D,mt,Gt,at.width,at.height,at.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,Ht,at.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,at.width,at.height,at.depth,0,Tt,Ht,at.data);else if(T.isFramebufferTexture){if(ve)if(Kt)e.texStorage2D(i.TEXTURE_2D,mt,Gt,at.width,at.height);else{let $=at.width,tt=at.height;for(let _t=0;_t<mt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Gt,$,tt,0,Tt,Ht,null),$>>=1,tt>>=1}}else if(te.length>0){if(Kt&&ve){const $=St(te[0]);e.texStorage2D(i.TEXTURE_2D,mt,Gt,$.width,$.height)}for(let $=0,tt=te.length;$<tt;$++)wt=te[$],Kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt,Ht,wt):e.texImage2D(i.TEXTURE_2D,$,Gt,Tt,Ht,wt);T.generateMipmaps=!1}else if(Kt){if(ve){const $=St(at);e.texStorage2D(i.TEXTURE_2D,mt,Gt,$.width,$.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ht,at)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Tt,Ht,at);m(T)&&p(K),Rt.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function it(C,T,H){if(T.image.length!==6)return;const K=Dt(C,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const J=n.get(nt);if(nt.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Rt=ne.getPrimaries(ne.workingColorSpace),pt=T.colorSpace===mi?null:ne.getPrimaries(T.colorSpace),bt=T.colorSpace===mi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!jt&&!at?Tt[tt]=v(T.image[tt],!0,s.maxCubemapSize):Tt[tt]=at?T.image[tt].image:T.image[tt],Tt[tt]=zt(T,Tt[tt]);const Ht=Tt[0],Gt=r.convert(T.format,T.colorSpace),wt=r.convert(T.type),te=M(T.internalFormat,Gt,wt,T.colorSpace),Kt=T.isVideoTexture!==!0,ve=J.__version===void 0||K===!0,O=nt.dataReady;let mt=_(T,Ht);ft(i.TEXTURE_CUBE_MAP,T);let $;if(jt){Kt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,Ht.width,Ht.height);for(let tt=0;tt<6;tt++){$=Tt[tt].mipmaps;for(let _t=0;_t<$.length;_t++){const vt=$[_t];T.format!==Tn?Gt!==null?Kt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,vt.width,vt.height,Gt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,te,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,vt.width,vt.height,Gt,wt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,te,vt.width,vt.height,0,Gt,wt,vt.data)}}}else{if($=T.mipmaps,Kt&&ve){$.length>0&&mt++;const tt=St(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,te,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){Kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Gt,wt,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,Tt[tt].width,Tt[tt].height,0,Gt,wt,Tt[tt].data);for(let _t=0;_t<$.length;_t++){const Xt=$[_t].image[tt].image;Kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Xt.width,Xt.height,Gt,wt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,te,Xt.width,Xt.height,0,Gt,wt,Xt.data)}}else{Kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,wt,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,te,Gt,wt,Tt[tt]);for(let _t=0;_t<$.length;_t++){const vt=$[_t];Kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Gt,wt,vt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,te,Gt,wt,vt.image[tt])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),J.__version=nt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function st(C,T,H,K,nt,J){const Rt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),bt=M(H.internalFormat,Rt,pt,H.colorSpace),jt=n.get(T),at=n.get(H);if(at.__renderTarget=T,!jt.__hasExternalTextures){const Tt=Math.max(1,T.width>>J),Ht=Math.max(1,T.height>>J);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,bt,Tt,Ht,T.depth,0,Rt,pt,null):e.texImage2D(nt,J,bt,Tt,Ht,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,at.__webglTexture,0,rt(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(C,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){const K=T.depthTexture,nt=K&&K.isDepthTexture?K.type:null,J=x(T.stencilBuffer,nt),Rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=rt(T);Et(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{const K=T.textures;for(let nt=0;nt<K.length;nt++){const J=K[nt],Rt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),bt=M(J.internalFormat,Rt,pt,J.colorSpace),jt=rt(T);H&&Et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,bt,T.width,T.height):Et(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const nt=K.__webglTexture,J=rt(T);if(T.depthTexture.format===bs)Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(T.depthTexture.format===Ps)Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function kt(C){const T=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=K}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");yt(T.__webglFramebuffer,C)}else if(H){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Z(T.__webglDepthbuffer[K],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Z(T.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(C,T,H){const K=n.get(C);T!==void 0&&st(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&kt(C)}function $t(C){const T=C.texture,H=n.get(C),K=n.get(T);C.addEventListener("dispose",w);const nt=C.textures,J=C.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let bt=0;bt<T.mipmaps.length;bt++)H.__webglFramebuffer[pt][bt]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,bt=nt.length;pt<bt;pt++){const jt=n.get(nt[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const bt=nt[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const jt=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),Tt=M(bt.internalFormat,jt,at,bt.colorSpace,C.isXRRenderTarget===!0),Ht=rt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ft(i.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)st(H.__webglFramebuffer[pt][bt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else st(H.__webglFramebuffer[pt],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,bt=nt.length;pt<bt;pt++){const jt=nt[pt],at=n.get(jt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ft(i.TEXTURE_2D,jt),st(H.__webglFramebuffer,C,jt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),ft(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)st(H.__webglFramebuffer[bt],C,T,i.COLOR_ATTACHMENT0,pt,bt);else st(H.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,pt,0);m(T)&&p(pt),e.unbindTexture()}C.depthBuffer&&kt(C)}function Q(C){const T=C.textures;for(let H=0,K=T.length;H<K;H++){const nt=T[H];if(m(nt)){const J=S(C),Rt=n.get(nt).__webglTexture;e.bindTexture(J,Rt),p(J),e.unbindTexture()}}}const ct=[],D=[];function It(C){if(C.samples>0){if(Et(C)===!1){const T=C.textures,H=C.width,K=C.height;let nt=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),pt=T.length>1;if(pt)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const jt=n.get(T[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,nt,i.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const jt=n.get(T[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function rt(C){return Math.min(s.maxSamples,C.samples)}function Et(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ut(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function zt(C,T){const H=C.colorSpace,K=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ns&&H!==mi&&(ne.getTransfer(H)===ue?(K!==Tn||nt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=N,this.rebindTextures=Nt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Et}function t_(i,t){function e(n,s=mi){let r;const a=ne.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rd)return i.BYTE;if(n===ad)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===ld)return i.ALPHA;if(n===cd)return i.RGB;if(n===Tn)return i.RGBA;if(n===hd)return i.LUMINANCE;if(n===ud)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===dd)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===vl||n===xl||n===_l||n===Ml||n===yl||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Cl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fd||n===Ll||n===Dl||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class e_ extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new Oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends Os{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new r_,m=e.getContextAttributes();let p=null,S=null;const M=[],x=[],_=new j;let y=null;const w=new qe;w.viewport=new fe;const R=new qe;R.viewport=new fe;const E=[w,R],b=new e_;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=M[W];return it===void 0&&(it=new Co,M[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=M[W];return it===void 0&&(it=new Co,M[W]=it),it.getGripSpace()},this.getHand=function(W){let it=M[W];return it===void 0&&(it=new Co,M[W]=it),it.getHandSpace()};function k(W){const it=x.indexOf(W.inputSource);if(it===-1)return;const st=M[it];st!==void 0&&(st.update(W.inputSource,W.frame,c||a),st.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let W=0;W<M.length;W++){const it=x[W];it!==null&&(x[W]=null,M[W].disconnect(it))}L=null,z=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new wn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,st=null,Z=null;m.depth&&(Z=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Ps:bs,st=m.stencil?Cs:Xi);const yt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new wn(f.textureWidth,f.textureHeight,{format:Tn,type:ei,depthTexture:new wd(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(W){for(let it=0;it<W.removed.length;it++){const st=W.removed[it],Z=x.indexOf(st);Z>=0&&(x[Z]=null,M[Z].disconnect(st))}for(let it=0;it<W.added.length;it++){const st=W.added[it];let Z=x.indexOf(st);if(Z===-1){for(let kt=0;kt<M.length;kt++)if(kt>=x.length){x.push(st),Z=kt;break}else if(x[kt]===null){x[kt]=st,Z=kt;break}if(Z===-1)break}const yt=M[Z];yt&&yt.connect(st)}}const U=new P,I=new P;function N(W,it,st){U.setFromMatrixPosition(it.matrixWorld),I.setFromMatrixPosition(st.matrixWorld);const Z=U.distanceTo(I),yt=it.projectionMatrix.elements,kt=st.projectionMatrix.elements,Nt=yt[14]/(yt[10]-1),$t=yt[14]/(yt[10]+1),Q=(yt[9]+1)/yt[5],ct=(yt[9]-1)/yt[5],D=(yt[8]-1)/yt[0],It=(kt[8]+1)/kt[0],rt=Nt*D,Et=Nt*It,ut=Z/(-D+It),zt=ut*-D;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(zt),W.translateZ(ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const St=Nt+ut,C=$t+ut,T=rt-zt,H=Et+(Z-zt),K=Q*$t/C*St,nt=ct*$t/C*St;W.projectionMatrix.makePerspective(T,H,K,nt,St,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let it=W.near,st=W.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(st=v.depthFar)),b.near=R.near=w.near=it,b.far=R.far=w.far=st,(L!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,z=b.far),w.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,b.layers.mask=w.layers.mask|R.layers.mask;const Z=W.parent,yt=b.cameras;q(b,Z);for(let kt=0;kt<yt.length;kt++)q(yt[kt],Z);yt.length===2?N(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),et(W,b,Z)};function et(W,it,st){st===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Nl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let lt=null;function ft(W,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const st=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Z=!1;st.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let kt=0;kt<st.length;kt++){const Nt=st[kt];let $t=null;if(d!==null)$t=d.getViewport(Nt);else{const ct=u.getViewSubImage(f,Nt);$t=ct.viewport,kt===0&&(t.setRenderTargetTextures(S,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(S))}let Q=E[kt];Q===void 0&&(Q=new qe,Q.layers.enable(kt),Q.viewport=new fe,E[kt]=Q),Q.matrix.fromArray(Nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set($t.x,$t.y,$t.width,$t.height),kt===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Q)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const kt=u.getDepthInformation(st[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,s.renderState)}}for(let st=0;st<M.length;st++){const Z=x[st],yt=M[st];Z!==null&&yt!==void 0&&yt.update(Z,it,c||a)}lt&&lt(W,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Dt=new Td;Dt.setAnimationLoop(ft),this.setAnimationLoop=function(W){lt=W},this.dispose=function(){}}}const Ii=new An,o_=new se;function l_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,Ii.copy(x),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const _=M.program;n.updateUBOMapping(S,_);const y=t.render.frame;r[S.id]!==y&&(f(S),r[S.id]=y)}function h(S){const M=u();S.__bindingPointIndex=M;const x=i.createBuffer(),_=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,_,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=s[S.id],x=S.uniforms,_=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,w=x.length;y<w;y++){const R=Array.isArray(x[y])?x[y]:[x[y]];for(let E=0,b=R.length;E<b;E++){const L=R[E];if(d(L,y,E,_)===!0){const z=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let Y=0;Y<k.length;Y++){const U=k[Y],I=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,z+G,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,M,x,_){const y=S.value,w=M+"_"+x;if(_[w]===void 0)return typeof y=="number"||typeof y=="boolean"?_[w]=y:_[w]=y.clone(),!0;{const R=_[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return _[w]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function g(S){const M=S.uniforms;let x=0;const _=16;for(let w=0,R=M.length;w<R;w++){const E=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,L=E.length;b<L;b++){const z=E[b],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Y=k.length;G<Y;G++){const U=k[G],I=v(U),N=x%_,q=N%I.boundary,et=N+q;x+=q,et!==0&&_-et<I.storage&&(x+=_-et),z.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=I.storage}}}const y=x%_;return y>0&&(x+=_-y),S.__size=x,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class h_{constructor(t={}){const{canvas:e=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let _=!1,y=0,w=0,R=null,E=-1,b=null;const L=new fe,z=new fe;let k=null;const G=new Ft(0);let Y=0,U=e.width,I=e.height,N=1,q=null,et=null;const lt=new fe(0,0,U,I),ft=new fe(0,0,U,I);let Dt=!1;const W=new lc;let it=!1,st=!1;const Z=new se,yt=new se,kt=new P,Nt=new fe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ct(){return R===null?N:1}let D=n;function It(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",vt,!1),D===null){const F="webgl2";if(D=It(F,A),D===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,Et,ut,zt,St,C,T,H,K,nt,J,Rt,pt,bt,jt,at,Tt,Ht,Gt,wt,te,Kt,ve,O;function mt(){rt=new mv(D),rt.init(),Kt=new t_(D,rt),Et=new cv(D,rt,t,Kt),ut=new Zx(D,rt),Et.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),zt=new xv(D),St=new Ox,C=new Qx(D,rt,ut,St,Et,Kt,zt),T=new uv(x),H=new pv(x),K=new Tm(D),ve=new ov(D,K),nt=new gv(D,K,zt,ve),J=new Mv(D,nt,K,zt),Gt=new _v(D,Et,C),at=new hv(St),Rt=new Nx(x,T,H,rt,Et,ve,at),pt=new l_(x,St),bt=new Bx,jt=new Wx(rt),Ht=new av(x,T,H,ut,J,d,l),Tt=new Kx(x,J,Et),O=new c_(D,zt,Et,ut),wt=new lv(D,rt,zt),te=new vv(D,rt,zt),zt.programs=Rt.programs,x.capabilities=Et,x.extensions=rt,x.properties=St,x.renderLists=bt,x.shadowMap=Tt,x.state=ut,x.info=zt}mt();const $=new a_(x,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(U,I,!1))},this.getSize=function(A){return A.set(U,I)},this.setSize=function(A,F,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,I=F,e.width=Math.floor(A*N),e.height=Math.floor(F*N),V===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(U*N,I*N).floor()},this.setDrawingBufferSize=function(A,F,V){U=A,I=F,N=V,e.width=Math.floor(A*V),e.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(lt)},this.setViewport=function(A,F,V,X){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,F,V,X),ut.viewport(L.copy(lt).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,F,V,X){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,F,V,X),ut.scissor(z.copy(ft).multiplyScalar(N).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){ut.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,F=!0,V=!0){let X=0;if(A){let B=!1;if(R!==null){const ht=R.texture.format;B=ht===ac||ht===rc||ht===sc}if(B){const ht=R.texture.type,xt=ht===ei||ht===Xi||ht===lr||ht===Cs||ht===ec||ht===nc,Ct=Ht.getClearColor(),Pt=Ht.getClearAlpha(),Vt=Ct.r,qt=Ct.g,Lt=Ct.b;xt?(g[0]=Vt,g[1]=qt,g[2]=Lt,g[3]=Pt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Vt,v[1]=qt,v[2]=Lt,v[3]=Pt,D.clearBufferiv(D.COLOR,0,v))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),V&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),bt.dispose(),jt.dispose(),St.dispose(),T.dispose(),H.dispose(),J.dispose(),ve.dispose(),O.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ec),$.removeEventListener("sessionend",Tc),Ai.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=zt.autoReset,F=Tt.enabled,V=Tt.autoUpdate,X=Tt.needsUpdate,B=Tt.type;mt(),zt.autoReset=A,Tt.enabled=F,Tt.autoUpdate=V,Tt.needsUpdate=X,Tt.type=B}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xt(A){const F=A.target;F.removeEventListener("dispose",Xt),we(F)}function we(A){Be(A),St.remove(A)}function Be(A){const F=St.get(A).programs;F!==void 0&&(F.forEach(function(V){Rt.releaseProgram(V)}),A.isShaderMaterial&&Rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,X,B,ht){F===null&&(F=$t);const xt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=df(A,F,V,X,B);ut.setMaterial(X,xt);let Pt=V.index,Vt=1;if(X.wireframe===!0){if(Pt=nt.getWireframeAttribute(V),Pt===void 0)return;Vt=2}const qt=V.drawRange,Lt=V.attributes.position;let re=qt.start*Vt,xe=(qt.start+qt.count)*Vt;ht!==null&&(re=Math.max(re,ht.start*Vt),xe=Math.min(xe,(ht.start+ht.count)*Vt)),Pt!==null?(re=Math.max(re,0),xe=Math.min(xe,Pt.count)):Lt!=null&&(re=Math.max(re,0),xe=Math.min(xe,Lt.count));const Me=xe-re;if(Me<0||Me===1/0)return;ve.setup(B,X,Ct,V,Pt);let Ke,ae=wt;if(Pt!==null&&(Ke=K.get(Pt),ae=te,ae.setIndex(Ke)),B.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*ct()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(B.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*ct()),B.isLineSegments?ae.setMode(D.LINES):B.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else B.isPoints?ae.setMode(D.POINTS):B.isSprite&&ae.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ae.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,kn=B._multiDrawCounts,oe=B._multiDrawCount,gn=Pt?K.get(Pt).bytesPerElement:1,ji=St.get(X).currentProgram.getUniforms();for(let Ze=0;Ze<oe;Ze++)ji.setValue(D,"_gl_DrawID",Ze),ae.render(Ut[Ze]/gn,kn[Ze])}else if(B.isInstancedMesh)ae.renderInstances(re,Me,B.count);else if(V.isInstancedBufferGeometry){const Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kn=Math.min(V.instanceCount,Ut);ae.renderInstances(re,Me,kn)}else ae.render(re,Me)};function he(A,F,V){A.transparent===!0&&A.side===He&&A.forceSinglePass===!1?(A.side=$e,A.needsUpdate=!0,Er(A,F,V),A.side=yi,A.needsUpdate=!0,Er(A,F,V),A.side=He):Er(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),p=jt.get(V),p.init(F),M.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==V&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const Ct=ht[xt];he(Ct,V,B),X.add(Ct)}else he(ht,V,B),X.add(ht)}),M.pop(),p=null,X},this.compileAsync=function(A,F,V=null){const X=this.compile(A,F,V);return new Promise(B=>{function ht(){if(X.forEach(function(xt){St.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){B(A);return}setTimeout(ht,10)}rt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let mn=null;function Bn(A){mn&&mn(A)}function Ec(){Ai.stop()}function Tc(){Ai.start()}const Ai=new Td;Ai.setAnimationLoop(Bn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){mn=A,$.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},$.addEventListener("sessionstart",Ec),$.addEventListener("sessionend",Tc),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,R),p=jt.get(A,M.length),p.init(F),M.push(p),yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(yt),st=this.localClippingEnabled,it=at.init(this.clippingPlanes,st),m=bt.get(A,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&$a(ht,F,-1/0,x.sortObjects)}$a(A,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,et),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Ht.addToRenderList(m,A),this.info.render.frame++,it===!0&&at.beginShadows();const V=p.state.shadowsArray;Tt.render(V,A,F),it===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ht=F.cameras;if(B.length>0)for(let xt=0,Ct=ht.length;xt<Ct;xt++){const Pt=ht[xt];Ac(X,B,A,Pt)}Q&&Ht.render(A);for(let xt=0,Ct=ht.length;xt<Ct;xt++){const Pt=ht[xt];wc(m,A,Pt,Pt.viewport)}}else B.length>0&&Ac(X,B,A,F),Q&&Ht.render(A),wc(m,A,F);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,F),ve.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],it===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function $a(A,F,V,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){X&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const xt=J.update(A),Ct=A.material;Ct.visible&&m.push(A,xt,Ct,V,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const xt=J.update(A),Ct=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Nt.copy(xt.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){const Pt=xt.groups;for(let Vt=0,qt=Pt.length;Vt<qt;Vt++){const Lt=Pt[Vt],re=Ct[Lt.materialIndex];re&&re.visible&&m.push(A,xt,re,V,Nt.z,Lt)}}else Ct.visible&&m.push(A,xt,Ct,V,Nt.z,null)}}const ht=A.children;for(let xt=0,Ct=ht.length;xt<Ct;xt++)$a(ht[xt],F,V,X)}function wc(A,F,V,X){const B=A.opaque,ht=A.transmissive,xt=A.transparent;p.setupLightsView(V),it===!0&&at.setGlobalState(x.clippingPlanes,V),X&&ut.viewport(L.copy(X)),B.length>0&&br(B,F,V),ht.length>0&&br(ht,F,V),xt.length>0&&br(xt,F,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ac(A,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new wn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Zn:ei,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ht=p.state.transmissionRenderTarget[X.id],xt=X.viewport||L;ht.setSize(xt.z,xt.w);const Ct=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ht.render(V);const Pt=x.toneMapping;x.toneMapping=Mi;const Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),it===!0&&at.setGlobalState(x.clippingPlanes,X),br(A,V,X),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Lt=0,re=F.length;Lt<re;Lt++){const xe=F[Lt],Me=xe.object,Ke=xe.geometry,ae=xe.material,Ut=xe.group;if(ae.side===He&&Me.layers.test(X.layers)){const kn=ae.side;ae.side=$e,ae.needsUpdate=!0,Rc(Me,V,X,Ke,ae,Ut),ae.side=kn,ae.needsUpdate=!0,qt=!0}}qt===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}x.setRenderTarget(Ct),x.setClearColor(G,Y),Vt!==void 0&&(X.viewport=Vt),x.toneMapping=Pt}function br(A,F,V){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ht=A.length;B<ht;B++){const xt=A[B],Ct=xt.object,Pt=xt.geometry,Vt=X===null?xt.material:X,qt=xt.group;Ct.layers.test(V.layers)&&Rc(Ct,F,V,Pt,Vt,qt)}}function Rc(A,F,V,X,B,ht){A.onBeforeRender(x,F,V,X,B,ht),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,F,V,X,A,ht),B.transparent===!0&&B.side===He&&B.forceSinglePass===!1?(B.side=$e,B.needsUpdate=!0,x.renderBufferDirect(V,F,X,B,A,ht),B.side=yi,B.needsUpdate=!0,x.renderBufferDirect(V,F,X,B,A,ht),B.side=He):x.renderBufferDirect(V,F,X,B,A,ht),A.onAfterRender(x,F,V,X,B,ht)}function Er(A,F,V){F.isScene!==!0&&(F=$t);const X=St.get(A),B=p.state.lights,ht=p.state.shadowsArray,xt=B.state.version,Ct=Rt.getParameters(A,B.state,ht,F,V),Pt=Rt.getProgramCacheKey(Ct);let Vt=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?H:T).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",Xt),Vt=new Map,X.programs=Vt);let qt=Vt.get(Pt);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===xt)return Pc(A,Ct),qt}else Ct.uniforms=Rt.getUniforms(A),A.onBeforeCompile(Ct,x),qt=Rt.acquireProgram(Ct,Pt),Vt.set(Pt,qt),X.uniforms=Ct.uniforms;const Lt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=at.uniform),Pc(A,Ct),X.needsLights=pf(A),X.lightsStateVersion=xt,X.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function Cc(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=da.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Pc(A,F){const V=St.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function df(A,F,V,X,B){F.isScene!==!0&&(F=$t),C.resetTextureUnits();const ht=F.fog,xt=X.isMeshStandardMaterial?F.environment:null,Ct=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ns,Pt=(X.isMeshStandardMaterial?H:T).get(X.envMap||xt),Vt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!V.morphAttributes.position,re=!!V.morphAttributes.normal,xe=!!V.morphAttributes.color;let Me=Mi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Me=x.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=Ke!==void 0?Ke.length:0,Ut=St.get(X),kn=p.state.lights;if(it===!0&&(st===!0||A!==b)){const sn=A===b&&X.id===E;at.setState(X,A,sn)}let oe=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==kn.state.version||Ut.outputColorSpace!==Ct||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==Pt||X.fog===!0&&Ut.fog!==ht||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==Vt||Ut.vertexTangents!==qt||Ut.morphTargets!==Lt||Ut.morphNormals!==re||Ut.morphColors!==xe||Ut.toneMapping!==Me||Ut.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Ut.__version=X.version);let gn=Ut.currentProgram;oe===!0&&(gn=Er(X,F,B));let ji=!1,Ze=!1,zs=!1;const ye=gn.getUniforms(),Pn=Ut.uniforms;if(ut.useProgram(gn.program)&&(ji=!0,Ze=!0,zs=!0),X.id!==E&&(E=X.id,Ze=!0),ji||b!==A){ut.buffers.depth.getReversed()?(Z.copy(A.projectionMatrix),em(Z),nm(Z),ye.setValue(D,"projectionMatrix",Z)):ye.setValue(D,"projectionMatrix",A.projectionMatrix),ye.setValue(D,"viewMatrix",A.matrixWorldInverse);const ii=ye.map.cameraPosition;ii!==void 0&&ii.setValue(D,kt.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ye.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ze=!0,zs=!0)}if(B.isSkinnedMesh){ye.setOptional(D,B,"bindMatrix"),ye.setOptional(D,B,"bindMatrixInverse");const sn=B.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),ye.setValue(D,"boneTexture",sn.boneTexture,C))}B.isBatchedMesh&&(ye.setOptional(D,B,"batchingTexture"),ye.setValue(D,"batchingTexture",B._matricesTexture,C),ye.setOptional(D,B,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",B._indirectTexture,C),ye.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",B._colorsTexture,C));const Hs=V.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Gt.update(B,V,gn),(Ze||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,ye.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Pn.envMap.value=Pt,Pn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Pn.envMapIntensity.value=F.environmentIntensity),Ze&&(ye.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&ff(Pn,zs),ht&&X.fog===!0&&pt.refreshFogUniforms(Pn,ht),pt.refreshMaterialUniforms(Pn,X,N,I,p.state.transmissionRenderTarget[A.id]),da.upload(D,Cc(Ut),Pn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(da.upload(D,Cc(Ut),Pn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ye.setValue(D,"center",B.center),ye.setValue(D,"modelViewMatrix",B.modelViewMatrix),ye.setValue(D,"normalMatrix",B.normalMatrix),ye.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const sn=X.uniformsGroups;for(let ii=0,si=sn.length;ii<si;ii++){const Lc=sn[ii];O.update(Lc,gn),O.bind(Lc,gn)}}return gn}function ff(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function pf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,V){St.get(A.texture).__webglTexture=F,St.get(A.depthTexture).__webglTexture=V;const X=St.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=St.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){R=A,y=F,w=V;let X=!0,B=null,ht=!1,xt=!1;if(A){const Pt=St.get(A);if(Pt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Pt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Pt.__hasExternalTextures)C.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&St.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(xt=!0);const qt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?B=qt[F][V]:B=qt[F],ht=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?B=St.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?B=qt[V]:B=qt,L.copy(A.viewport),z.copy(A.scissor),k=A.scissorTest}else L.copy(lt).multiplyScalar(N).floor(),z.copy(ft).multiplyScalar(N).floor(),k=Dt;if(ut.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&ut.drawBuffers(A,B),ut.viewport(L),ut.scissor(z),ut.setScissorTest(k),ht){const Pt=St.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,V)}else if(xt){const Pt=St.get(A.texture),Vt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,Vt)}E=-1},this.readRenderTargetPixels=function(A,F,V,X,B,ht,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){ut.bindFramebuffer(D.FRAMEBUFFER,Ct);try{const Pt=A.texture,Vt=Pt.format,qt=Pt.type;if(!Et.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&V>=0&&V<=A.height-B&&D.readPixels(F,V,X,B,Kt.convert(Vt),Kt.convert(qt),ht)}finally{const Pt=R!==null?St.get(R).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,X,B,ht,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){const Pt=A.texture,Vt=Pt.format,qt=Pt.type;if(!Et.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-X&&V>=0&&V<=A.height-B){ut.bindFramebuffer(D.FRAMEBUFFER,Ct);const Lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(F,V,X,B,Kt.convert(Vt),Kt.convert(qt),0);const re=R!==null?St.get(R).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,re);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tm(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Lt),D.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-V),B=Math.floor(A.image.width*X),ht=Math.floor(A.image.height*X),xt=F!==null?F.x:0,Ct=F!==null?F.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,Ct,B,ht),ut.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,X=null,B=0){A.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],F=arguments[2],B=arguments[3]||0,V=null);let ht,xt,Ct,Pt,Vt,qt,Lt,re,xe;const Me=A.isCompressedTexture?A.mipmaps[B]:A.image;V!==null?(ht=V.max.x-V.min.x,xt=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Vt=V.min.y,qt=V.isBox3?V.min.z:0):(ht=Me.width,xt=Me.height,Ct=Me.depth||1,Pt=0,Vt=0,qt=0),X!==null?(Lt=X.x,re=X.y,xe=X.z):(Lt=0,re=0,xe=0);const Ke=Kt.convert(F.format),ae=Kt.convert(F.type);let Ut;F.isData3DTexture?(C.setTexture3D(F,0),Ut=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Ut=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const kn=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),ji=D.getParameter(D.UNPACK_SKIP_ROWS),Ze=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);const zs=A.isDataArrayTexture||A.isData3DTexture,ye=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Pn=St.get(A),Hs=St.get(F),sn=St.get(Pn.__renderTarget),ii=St.get(Hs.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,sn.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Ct;si++)zs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(A).__webglTexture,B,qt+si),A.isDepthTexture?(ye&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(F).__webglTexture,B,xe+si),D.blitFramebuffer(Pt,Vt,ht,xt,Lt,re,ht,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ye?D.copyTexSubImage3D(Ut,B,Lt,re,xe+si,Pt,Vt,ht,xt):D.copyTexSubImage2D(Ut,B,Lt,re,xe+si,Pt,Vt,ht,xt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ye?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ut,B,Lt,re,xe,ht,xt,Ct,Ke,ae,Me.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,B,Lt,re,xe,ht,xt,Ct,Ke,Me.data):D.texSubImage3D(Ut,B,Lt,re,xe,ht,xt,Ct,Ke,ae,Me):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Lt,re,ht,xt,Ke,ae,Me.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Lt,re,Me.width,Me.height,Ke,Me.data):D.texSubImage2D(D.TEXTURE_2D,B,Lt,re,ht,xt,Ke,ae,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,kn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ji),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze),B===0&&F.generateMipmaps&&D.generateMipmap(Ut),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,X=null,B=0){return A.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,A=arguments[2],F=arguments[3],B=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,V,X,B)},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){y=0,w=0,R=null,ut.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Ba{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ya extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class u_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new P;class Sa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fl extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const qs=new P,ps=new P,ms=new P,gs=new j,Ys=new j,Ld=new se,qr=new P,$s=new P,Yr=new P,zh=new j,Po=new j,Hh=new j;class Gh extends Re{constructor(t=new Fl){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new u_(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Sa(n,3,0,!1)),fs.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;$r(qr.set(-.5,-.5,0),ms,a,ps,s,r),$r($s.set(.5,-.5,0),ms,a,ps,s,r),$r(Yr.set(.5,.5,0),ms,a,ps,s,r),zh.set(0,0),Po.set(1,0),Hh.set(1,1);let o=t.ray.intersectTriangle(qr,$s,Yr,!1,qs);if(o===null&&($r($s.set(-.5,.5,0),ms,a,ps,s,r),Po.set(0,1),o=t.ray.intersectTriangle(qr,Yr,$s,!1,qs),o===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:cn.getInterpolation(qs,qr,$s,Yr,zh,Po,Hh,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(i,t,e,n,s,r){gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*gs.x-s*gs.y,Ys.y=s*gs.x+r*gs.y):Ys.copy(gs),i.copy(t),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(Ld)}class d_ extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new se,Wh=new se,Kr=[],Xh=new bi,f_=new se,Ks=new Mt,Js=new Ei;class Dd extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,f_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Xh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Js.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Wh.multiplyMatrices(n,vs),Ks.matrixWorld=Wh,Ks.raycast(t,Kr);for(let a=0,o=Kr.length;a<o;a++){const l=Kr[a];l.instanceId=r,l.object=this,e.push(l)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new d_(new Float32Array(s*this.count),s,this.count,ic,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class uc extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new P,Ea=new P,qh=new se,Zs=new Na,Jr=new Ei,Lo=new P,Yh=new P;class Id extends Re{constructor(t=new ge,e=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Ea);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;qh.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),S=h.getX(v+1),M=Zr(this,t,Zs,l,p,S);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Zr(this,t,Zs,l,v,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=Zr(this,t,Zs,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Zr(this,t,Zs,l,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,Ea,Lo,Yh)>n)return;Lo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Lo);if(!(l<t.near||l>t.far))return{distance:l,point:Yh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const $h=new P,Kh=new P;class p_ extends Id{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$h.fromBufferAttribute(e,s),Kh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(Kh);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ud extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jh=new se,Bl=new Na,jr=new Ei,Qr=new P;class m_ extends Re{constructor(t=new ge,e=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;Jh.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(Jh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);Qr.fromBufferAttribute(u,m),Zh(Qr,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Qr.fromBufferAttribute(u,g),Zh(Qr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zh(i,t,e,n,s,r,a){const o=Bl.distanceSqToPoint(i);if(o<e){const l=new P;Bl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class dc extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new j:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,l=new se;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fc extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new j){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class g_ extends fc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ta=new P,Do=new pc,Io=new pc,Uo=new pc;class v_ extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Do.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Io.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Uo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Io.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Uo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Do.calc(l),Io.calc(l),Uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function x_(i,t){const e=1-i;return e*e*t}function __(i,t){return 2*(1-i)*i*t}function M_(i,t){return i*i*t}function sr(i,t,e,n){return x_(i,t)+__(i,e)+M_(i,n)}function y_(i,t){const e=1-i;return e*e*e*t}function S_(i,t){const e=1-i;return 3*e*e*i*t}function b_(i,t){return 3*(1-i)*i*i*t}function E_(i,t){return i*i*i*t}function rr(i,t,e,n,s){return y_(i,t)+S_(i,e)+b_(i,n)+E_(i,s)}class Nd extends Cn{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class T_ extends Cn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y),rr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends Cn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w_ extends Cn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Cn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends Cn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y),sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jh(o,l.x,c.x,h.x,u.x),jh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new j().fromArray(s))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:v_,CubicBezierCurve:Nd,CubicBezierCurve3:T_,EllipseCurve:fc,LineCurve:Od,LineCurve3:w_,QuadraticBezierCurve:Fd,QuadraticBezierCurve3:Bd,SplineCurve:kd});class A_ extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}}class kl extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Od(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fd(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Nd(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new fc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hr extends ge{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,f=new j,d=new P,g=new P,v=new P;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const M=n+S*h*s,x=Math.sin(M),_=Math.cos(M);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*x,u.y=t[y].y,u.z=t[y].x*_,a.push(u.x,u.y,u.z),f.x=S/e,f.y=y/(t.length-1),o.push(f.x,f.y);const w=l[3*y+0]*x,R=l[3*y+1],E=l[3*y+0]*_;c.push(w,R,E)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const x=M+S*t.length,_=x,y=x+t.length,w=x+t.length+1,R=x+1;r.push(_,y,R),r.push(w,R,y)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.points,t.segments,t.phiStart,t.phiLength)}}class vr extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ce extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;S(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function S(){const x=new P,_=new P;let y=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const E=[],b=R/r,L=b*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,G=k*l+o,Y=Math.sin(G),U=Math.cos(G);_.x=L*Y,_.y=-b*n+m,_.z=L*U,u.push(_.x,_.y,_.z),x.set(Y,w,U).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-b),E.push(g++)}v.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const b=v[E][R],L=v[E+1][R],z=v[E+1][R+1],k=v[E][R+1];(t>0||E!==0)&&(h.push(b,L,k),y+=3),(e>0||E!==r-1)&&(h.push(L,z,k),y+=3)}c.addGroup(p,y,0),p+=y}function M(x){const _=g,y=new j,w=new P;let R=0;const E=x===!0?t:e,b=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const G=z/s*l+o,Y=Math.cos(G),U=Math.sin(G);w.x=E*U,w.y=m*b,w.z=E*Y,u.push(w.x,w.y,w.z),f.push(0,b,0),y.x=Y*.5+.5,y.y=U*.5*b+.5,d.push(y.x,y.y),g++}for(let z=0;z<s;z++){const k=_+z,G=L+z;x===!0?h.push(G,G+1,k):h.push(G+1,G,k),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xr extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new xr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bs extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new P,x=new P,_=new P;for(let y=0;y<e.length;y+=3)d(e[y+0],M),d(e[y+1],x),d(e[y+2],_),l(M,x,_,S)}function l(S,M,x,_){const y=_+1,w=[];for(let R=0;R<=y;R++){w[R]=[];const E=S.clone().lerp(x,R/y),b=M.clone().lerp(x,R/y),L=y-R;for(let z=0;z<=L;z++)z===0&&R===y?w[R][z]=E:w[R][z]=E.clone().lerp(b,z/L)}for(let R=0;R<y;R++)for(let E=0;E<2*(y-R)-1;E++){const b=Math.floor(E/2);E%2===0?(f(w[R][b+1]),f(w[R+1][b]),f(w[R][b])):(f(w[R][b+1]),f(w[R+1][b+1]),f(w[R+1][b]))}}function c(S){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(S),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const S=new P;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const x=m(S)/2/Math.PI+.5,_=p(S)/Math.PI+.5;a.push(x,1-_)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const M=a[S+0],x=a[S+2],_=a[S+4],y=Math.max(M,x,_),w=Math.min(M,x,_);y>.9&&w<.1&&(M<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),_<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){const x=S*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const S=new P,M=new P,x=new P,_=new P,y=new j,w=new j,R=new j;for(let E=0,b=0;E<r.length;E+=9,b+=6){S.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),y.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),_.copy(S).add(M).add(x).divideScalar(3);const L=m(_);v(y,b+0,S,L),v(w,b+2,M,L),v(R,b+4,x,L)}}function v(S,M,x,_){_<0&&S.x===1&&(a[M]=S.x-1),x.x===0&&x.z===0&&(a[M]=_/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.vertices,t.indices,t.radius,t.details)}}class ka extends Bs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ka(t.radius,t.detail)}}class Ds extends kl{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kl().fromJSON(s))}return this}}const R_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zd(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=I_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return ur(r,a,e,o,l,d,0),a}};function zd(i,t,e,n,s){let r,a;if(s===W_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Qh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Qh(r,i[r],i[r+1],a);return a&&za(a,a.next)&&(fr(a),a=a.next),a}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(za(e,e.next)||Te(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,a){if(!i)return;!a&&r&&B_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?P_(i,n,s,r):C_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=L_(qi(i),t,e),ur(i,t,e,n,s,r,2)):a===2&&D_(i,t,e,n,s,r):ur(qi(i),t,e,n,s,r,1);break}}}function C_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ys(s,o,r,l,a,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=zl(d,g,t,e,n),S=zl(v,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ys(o,h,l,u,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ys(o,h,l,u,c,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ys(o,h,l,u,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ys(o,h,l,u,c,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!za(s,r)&&Hd(s,n,n.next,r)&&dr(s,r)&&dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function D_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H_(a,o)){let l=Gd(a,o);a=qi(a,a.next),l=qi(l,l.next),ur(a,t,e,n,s,r,0),ur(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function I_(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(z_(c));for(s.sort(U_),r=0;r<s.length;r++)e=N_(s[r],e);return e}function U_(i,t){return i.x-t.x}function N_(i,t){const e=O_(i,t);if(!e)return t;const n=Gd(e,i);return qi(n,n.next),qi(e,e.next)}function O_(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ys(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&F_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function F_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function B_(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ys(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function H_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G_(i,t)&&(dr(i,t)&&dr(t,i)&&V_(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||za(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function za(i,t){return i.x===t.x&&i.y===t.y}function Hd(i,t,e,n){const s=na(Te(i,t,e)),r=na(Te(i,t,n)),a=na(Te(e,n,i)),o=na(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&ea(i,e,t)||r===0&&ea(i,n,t)||a===0&&ea(e,i,n)||o===0&&ea(e,t,n))}function ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function na(i){return i>0?1:i<0?-1:0}function G_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function V_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gd(i,t){const e=new Hl(i.i,i.x,i.y),n=new Hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qh(i,t,e,n){const s=new Hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ar{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];tu(t),eu(n,t);let a=t.length;e.forEach(tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,eu(n,e[l]);const o=R_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function tu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mc extends ge{constructor(t=new Ds([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:X_;let M,x=!1,_,y,w,R;p&&(M=p.getSpacedPoints(h),x=!0,f=!1,_=p.computeFrenetFrames(h,!1),y=new P,w=new P,R=new P),f||(m=0,d=0,g=0,v=0);const E=o.extractPoints(c);let b=E.shape;const L=E.holes;if(!ar.isClockWise(b)){b=b.reverse();for(let Q=0,ct=L.length;Q<ct;Q++){const D=L[Q];ar.isClockWise(D)&&(L[Q]=D.reverse())}}const k=ar.triangulateShape(b,L),G=b;for(let Q=0,ct=L.length;Q<ct;Q++){const D=L[Q];b=b.concat(D)}function Y(Q,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,D)}const U=b.length,I=k.length;function N(Q,ct,D){let It,rt,Et;const ut=Q.x-ct.x,zt=Q.y-ct.y,St=D.x-Q.x,C=D.y-Q.y,T=ut*ut+zt*zt,H=ut*C-zt*St;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(T),nt=Math.sqrt(St*St+C*C),J=ct.x-zt/K,Rt=ct.y+ut/K,pt=D.x-C/nt,bt=D.y+St/nt,jt=((pt-J)*C-(bt-Rt)*St)/(ut*C-zt*St);It=J+ut*jt-Q.x,rt=Rt+zt*jt-Q.y;const at=It*It+rt*rt;if(at<=2)return new j(It,rt);Et=Math.sqrt(at/2)}else{let K=!1;ut>Number.EPSILON?St>Number.EPSILON&&(K=!0):ut<-Number.EPSILON?St<-Number.EPSILON&&(K=!0):Math.sign(zt)===Math.sign(C)&&(K=!0),K?(It=-zt,rt=ut,Et=Math.sqrt(T)):(It=ut,rt=zt,Et=Math.sqrt(T/2))}return new j(It/Et,rt/Et)}const q=[];for(let Q=0,ct=G.length,D=ct-1,It=Q+1;Q<ct;Q++,D++,It++)D===ct&&(D=0),It===ct&&(It=0),q[Q]=N(G[Q],G[D],G[It]);const et=[];let lt,ft=q.concat();for(let Q=0,ct=L.length;Q<ct;Q++){const D=L[Q];lt=[];for(let It=0,rt=D.length,Et=rt-1,ut=It+1;It<rt;It++,Et++,ut++)Et===rt&&(Et=0),ut===rt&&(ut=0),lt[It]=N(D[It],D[Et],D[ut]);et.push(lt),ft=ft.concat(lt)}for(let Q=0;Q<m;Q++){const ct=Q/m,D=d*Math.cos(ct*Math.PI/2),It=g*Math.sin(ct*Math.PI/2)+v;for(let rt=0,Et=G.length;rt<Et;rt++){const ut=Y(G[rt],q[rt],It);Z(ut.x,ut.y,-D)}for(let rt=0,Et=L.length;rt<Et;rt++){const ut=L[rt];lt=et[rt];for(let zt=0,St=ut.length;zt<St;zt++){const C=Y(ut[zt],lt[zt],It);Z(C.x,C.y,-D)}}}const Dt=g+v;for(let Q=0;Q<U;Q++){const ct=f?Y(b[Q],ft[Q],Dt):b[Q];x?(w.copy(_.normals[0]).multiplyScalar(ct.x),y.copy(_.binormals[0]).multiplyScalar(ct.y),R.copy(M[0]).add(w).add(y),Z(R.x,R.y,R.z)):Z(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<U;ct++){const D=f?Y(b[ct],ft[ct],Dt):b[ct];x?(w.copy(_.normals[Q]).multiplyScalar(D.x),y.copy(_.binormals[Q]).multiplyScalar(D.y),R.copy(M[Q]).add(w).add(y),Z(R.x,R.y,R.z)):Z(D.x,D.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const ct=Q/m,D=d*Math.cos(ct*Math.PI/2),It=g*Math.sin(ct*Math.PI/2)+v;for(let rt=0,Et=G.length;rt<Et;rt++){const ut=Y(G[rt],q[rt],It);Z(ut.x,ut.y,u+D)}for(let rt=0,Et=L.length;rt<Et;rt++){const ut=L[rt];lt=et[rt];for(let zt=0,St=ut.length;zt<St;zt++){const C=Y(ut[zt],lt[zt],It);x?Z(C.x,C.y+M[h-1].y,M[h-1].x+D):Z(C.x,C.y,u+D)}}}W(),it();function W(){const Q=s.length/3;if(f){let ct=0,D=U*ct;for(let It=0;It<I;It++){const rt=k[It];yt(rt[2]+D,rt[1]+D,rt[0]+D)}ct=h+m*2,D=U*ct;for(let It=0;It<I;It++){const rt=k[It];yt(rt[0]+D,rt[1]+D,rt[2]+D)}}else{for(let ct=0;ct<I;ct++){const D=k[ct];yt(D[2],D[1],D[0])}for(let ct=0;ct<I;ct++){const D=k[ct];yt(D[0]+U*h,D[1]+U*h,D[2]+U*h)}}n.addGroup(Q,s.length/3-Q,0)}function it(){const Q=s.length/3;let ct=0;st(G,ct),ct+=G.length;for(let D=0,It=L.length;D<It;D++){const rt=L[D];st(rt,ct),ct+=rt.length}n.addGroup(Q,s.length/3-Q,1)}function st(Q,ct){let D=Q.length;for(;--D>=0;){const It=D;let rt=D-1;rt<0&&(rt=Q.length-1);for(let Et=0,ut=h+m*2;Et<ut;Et++){const zt=U*Et,St=U*(Et+1),C=ct+It+zt,T=ct+rt+zt,H=ct+rt+St,K=ct+It+St;kt(C,T,H,K)}}}function Z(Q,ct,D){l.push(Q),l.push(ct),l.push(D)}function yt(Q,ct,D){Nt(Q),Nt(ct),Nt(D);const It=s.length/3,rt=S.generateTopUV(n,s,It-3,It-2,It-1);$t(rt[0]),$t(rt[1]),$t(rt[2])}function kt(Q,ct,D,It){Nt(Q),Nt(ct),Nt(It),Nt(ct),Nt(D),Nt(It);const rt=s.length/3,Et=S.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);$t(Et[0]),$t(Et[1]),$t(Et[3]),$t(Et[1]),$t(Et[2]),$t(Et[3])}function Nt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function $t(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return q_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ta[s.type]().fromJSON(s)),new mc(n,t.options)}}const X_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-u),new j(f,1-g),new j(v,1-p)]:[new j(o,1-l),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ha extends Bs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ha(t.radius,t.detail)}}class Ji extends Bs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ji(t.radius,t.detail)}}class Ga extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new P,g=new j;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const S=p+m,M=S,x=S+n+1,_=S+n+2,y=S+1;o.push(M,x,y),o.push(x,_,y)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gc extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let _=0;_<=e;_++){const y=_/e;u.x=-t*Math.cos(s+y*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+y*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(y+x,1-M),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=h[p][S+1],x=h[p][S],_=h[p+1][S],y=h[p+1][S+1];(p!==0||a>0)&&d.push(M,x,y),(p!==n-1||l<Math.PI)&&d.push(x,_,y)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Va extends Bs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Va(t.radius,t.detail)}}class me extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vc extends ge{constructor(t=new Bd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new j;let h=new P;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){h=t.getPointAt(M/e,h);const x=a.normals[M],_=a.binormals[M];for(let y=0;y<=s;y++){const w=y/s*Math.PI*2,R=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+R*_.x,l.y=E*x.y+R*_.y,l.z=E*x.z+R*_.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const _=(s+1)*(M-1)+(x-1),y=(s+1)*M+(x-1),w=(s+1)*M+x,R=(s+1)*(M-1)+x;g.push(_,y,R),g.push(y,w,R)}}function S(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vc(new Ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Y_ extends Ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Se extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $_ extends Se{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xc extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vd extends xc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const No=new se,nu=new P,iu=new P;class Wd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new se,js=new P,Oo=new P;class K_ extends Wd{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),Oo.copy(n.position),Oo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oo),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su)}}class Is extends xc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class J_ extends Wd{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gl extends xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Z_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ru();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ru(){return performance.now()}const au=new se;class j_{constructor(t,e,n=0,s=1/0){this.ray=new Na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vl(t[s],this,n,e);return n.sort(ou),n}}function ou(i,t){return i.distance-t.distance}function Vl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Vl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);class Xd extends ya{constructor(){super();const t=new le;t.deleteAttribute("uv");const e=new Se({side:$e}),n=new Se,s=new Is(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Mt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Mt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Mt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Mt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Mt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Mt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Mt(t,xs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Mt(t,xs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Mt(t,xs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Mt(t,xs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Mt(t,xs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Mt(t,xs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function xs(i){const t=new Ae;return t.color.setScalar(i),t}const qd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q_=new cc(-1,1,1,-1,0,1);class tM extends ge{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const eM=new tM;class _c{constructor(t){this._mesh=new Mt(eM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class nM extends ks{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cr.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _c(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lu extends ks{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class iM extends ks{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Yd{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nM(qd),this.copyPass.material.blending=Jn,this.clock=new Z_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lu!==void 0&&(a instanceof lu?n=!0:a instanceof iM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const sM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $d extends ks{constructor(){super();const t=sM;this.uniforms=cr.clone(t.uniforms),this.material=new Y_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _c(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===td?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===id&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kd extends ks{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const rM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Yi extends ks{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,a,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new wn(r,a,{type:Zn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new wn(r,a,{type:Zn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=rM;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=qd;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new _c(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Yi.BlurDirectionX=new j(1,0);Yi.BlurDirectionY=new j(0,1);const dn=i=>Math.min(1,Math.max(0,i)),Vi=i=>1-Math.pow(1-dn(i),3),At=(i,t)=>i+Math.random()*(t-i),Le=Math.PI*2,Rn=(i,t=1.5,e=1381916)=>new Se({color:e,emissive:i,emissiveIntensity:t,roughness:.3,metalness:.6,flatShading:!0}),Jd=()=>new Se({color:2303534,roughness:.35,metalness:.9,flatShading:!0}),_r=(i,t,e=.18,n=.25)=>Vi(i/e)*dn((t-i)/n),Mr=(i,t,e)=>{let n=i*t;for(;n>0;)(n>=1||Math.random()<n)&&e(),n-=1};function aM(i){const t=new Wt,e=new Wt,n=Rn(16734751,2),s=Rn(16761466,2.4),r=[];for(let o=0;o<10;o++){const l=new Wt;l.rotation.y=o/10*Le;const c=new Mt(new xr(.42,o%2?3.4:2.4,3),o%2?n:s);c.geometry.translate(0,(o%2?3.4:2.4)/2,0),c.position.set(1.25,.4,0),c.rotation.z=-(o%2?.95:.5),c.castShadow=!0,l.add(c),e.add(l),r.push(c)}const a=[];for(let o=0;o<7;o++){const l=new Mt(new ka(At(.22,.42),0),n);l.castShadow=!0,t.add(l),a.push({m:l,r:At(2.6,4.2),h:At(.8,3.2),sp:At(2.5,4.5)*(o%2?1:-1),ph:At(0,Le)})}return t.add(e),{group:t,dur:i,follow:!0,update(o,l,c){const h=_r(o,i,.22,.35);e.rotation.y=o*3.6,e.scale.setScalar(Math.max(.001,h)),r.forEach((u,f)=>u.scale.y=.8+.3*Math.sin(o*14+f*1.9));for(const u of a){const f=u.ph+o*u.sp;u.m.position.set(Math.cos(f)*u.r*h,u.h+Math.sin(o*5+u.ph)*.4,Math.sin(f)*u.r*h),u.m.rotation.set(o*6,o*4+u.ph,0),u.m.scale.setScalar(Math.max(.001,h))}Mr(90*h,l,()=>{const u=At(0,Le),f=At(.8,2.6);c(Math.cos(u)*f,At(.4,2),Math.sin(u)*f,-Math.sin(u)*5,At(9,20),Math.cos(u)*5,At(.35,.8),Math.random()<.3?16769184:16738848)})}}}function oM(i,t){const e=new Wt,n=new Se({color:13628671,emissive:5228799,emissiveIntensity:.75,roughness:.12,metalness:.3,flatShading:!0}),s=[],r=(a,o,l,c,h,u)=>{for(let f=0;f<a;f++){const d=f/a*Le+o,g=l*(.7+.6*(f*7%5)/4),v=new Mt(new ce(0,c,g,5),n);v.geometry.translate(0,g/2,0);const m=Math.cos(d)*o,p=Math.sin(d)*o;v.position.set(m,t(m,p)-.1,p),v.rotation.set(Math.sin(d)*h,f,-Math.cos(d)*h),v.castShadow=!0,e.add(v),s.push({m:v,delay:u,x:m,z:p,done:!1})}};return r(7,2.1,4.4,.6,.28,0),r(11,4.3,3.1,.52,.5,.07),r(15,6.3,2.1,.44,.75,.14),{group:e,dur:i,follow:!1,update(a,o,l){const c=dn((i-a)/.35);for(const h of s){const u=Vi((a-h.delay)/.1),f=1+.3*dn(1-(a-h.delay)/.28);if(h.m.scale.set(Math.max(.001,u*c),Math.max(.001,u*f*c),Math.max(.001,u*c)),!h.done&&a>=h.delay){h.done=!0;for(let d=0;d<5;d++){const g=At(0,Le);l(h.x,h.m.position.y+.4,h.z,Math.cos(g)*At(2,8),At(5,13),Math.sin(g)*At(2,8),At(.4,.8),d%2?16777215:9429247)}}}}}}function lM(i){const t=new Wt,e=new Wt;t.add(e);const n=[],s=Jd(),r=Rn(16773226,2.6);for(let g=0;g<4;g++){const v=g/4*Le,m=new Wt;m.position.set(Math.cos(v)*3.7,0,Math.sin(v)*3.7);const p=new Mt(new ce(.12,.34,3.6,6),s);p.position.y=1.8,p.castShadow=!0;const S=new Mt(new Ji(.42),r);S.position.y=3.9;const M=new Mt(new ce(.3,.3,.16,6),r);M.position.y=2.6,m.add(p,S,M),e.add(m),n.push(new P(m.position.x,3.9,m.position.z))}const a=8,o=7,l=new Float32Array(a*o*6),c=new ge;c.setAttribute("position",new be(l,3));const h=new p_(c,new uc({color:16776144,transparent:!0,blending:Fe,depthWrite:!1}));h.frustumCulled=!1,e.add(h);const u=new P(0,1.3,0),f=new P,d=new P;return{group:t,dur:i,follow:!0,update(g,v,m){const p=_r(g,i,.16,.25);e.rotation.y=g*2.2,e.scale.set(1,Math.max(.001,p),1);let S=0;for(let M=0;M<a;M++){const x=M<4?u:n[M%4],_=M<4?n[M]:n[(M+1)%4],y=Math.random()<.7;f.copy(x);for(let w=1;w<=o;w++)d.copy(x).lerp(_,w/o),w<o&&d.add(new P(At(-.45,.45),At(-.45,.45),At(-.45,.45))),y?l.set([f.x,f.y,f.z,d.x,d.y,d.z],S):l.fill(0,S,S+6),S+=6,f.copy(d)}c.attributes.position.needsUpdate=!0,Mr(40*p,v,()=>{const M=n[Math.floor(Math.random()*4)].clone().applyAxisAngle(new P(0,1,0),e.rotation.y);m(M.x,M.y,M.z,At(-7,7),At(-2,8),At(-7,7),At(.15,.4),16774816)})}}}function cM(i){const t=new Wt,e=Rn(10354640,1.2,2766128),n=[];for(let r=0;r<16;r++){const a=new Mt(new Va(At(.16,.36),0),e);a.castShadow=!0,t.add(a),n.push({m:a,h:At(.4,7),ph:At(0,Le)})}const s=r=>.7+r/7.5*(r/7.5)*4.4;return{group:t,dur:i,follow:!0,update(r,a,o){const l=_r(r,i,.3,.2),c=1-.35*dn(r/i);for(const h of n){const u=(h.h+r*3.2)%7.2+.3,f=s(u)*c*l,d=h.ph+r*(13-u);h.m.position.set(Math.cos(d)*f,u*l,Math.sin(d)*f),h.m.rotation.set(r*9+h.ph,r*7,0),h.m.scale.setScalar(Math.max(.001,l))}Mr(260*l,a,()=>{const h=At(.2,7.5),u=s(h)*c,f=At(0,Le),d=13+(7.5-h)*1.6;o(Math.cos(f)*u,h,Math.sin(f)*u,-Math.sin(f)*d,At(1,4),Math.cos(f)*d,At(.12,.3),Math.random()<.3?16777215:9431232)})}}}function hM(i,t){const n=new Wt,s=new Ae({color:16757850,transparent:!0,blending:Fe,depthWrite:!1}),r=Rn(14251066,.35,4866104),a=[],o=[],l=9;for(let c=0;c<l;c++){const h=c/l*Le+.3,u=5.5+c*5%4*.6,f=new Wt;f.rotation.y=-h,n.add(f);for(let d=0;d<2;d++){const g=new Mt(new le(u/2,.06,.22-d*.08),s);g.geometry.translate(u/4,0,0);const v=d*u/2+u/4;g.position.set(d*(u/2)*.97,t(Math.cos(h)*v,Math.sin(h)*v)+.12,d*.25),g.rotation.y=d?c%2?.3:-.3:c%2?-.1:.1,f.add(g),a.push(g)}for(let d=0;d<2;d++){const g=2.6+d*2.6+c%3*.3,v=2.8-d*.9+c%2*.6,m=new Mt(new ce(.25,.8,v,5),r);m.geometry.translate(0,v/2,0);const p=h+.22,S=Math.cos(p)*g,M=Math.sin(p)*g;m.rotation.set(Math.sin(p)*.4,c,-Math.cos(p)*.4),m.castShadow=!0,n.add(m),o.push({m,x:S,z:M,y:t(S,M),h:v,delay:.03+d*.07,done:!1})}}return{group:n,dur:1.7,follow:!1,update(c,h,u){s.opacity=dn((1.7-c)/.6);const f=Vi(c/.16);a.forEach(d=>d.scale.set(Math.max(.001,f),1,1+1.5*dn(1-c/.5)));for(const d of o){const g=Vi((c-d.delay)/.09),v=dn((c-1)/.7);if(d.m.position.set(d.x,d.y-d.h*(1-g)-d.h*v-.05,d.z),!d.done&&c>=d.delay){d.done=!0;for(let m=0;m<6;m++)u(d.x,d.y+.3,d.z,At(-5,5),At(6,15),At(-5,5),At(.4,.9),m%3?14263386:16763008)}}}}}function uM(i){const e=new Wt,n=new Wt;n.position.y=2.6,e.add(n);const s=[1.7,2.7,3.7],r=10,a=6,o=new Dd(new le(.07,.5,.07),Rn(12946431,1.8,2761267),s.length*r*a),l=new se,c=new Ki,h=new P(0,1,0),u=new P;let f=0;for(const v of s)for(let m=0;m<r;m++){const p=m/r*Le+v;for(let S=0;S<a;S++){const M=.45+S/(a-1)*(Math.PI-.9),x=Math.sin(M),_=Math.cos(M),y=v*x*x*x,w=v*x*x*_,R=3*v*x*x*_,E=v*(2*x*_*_-x*x*x);u.set(R*Math.cos(p),E,R*Math.sin(p)).normalize(),c.setFromUnitVectors(h,u),l.compose(new P(y*Math.cos(p),w,y*Math.sin(p)),c,new P(1,1,1)),o.setMatrixAt(f++,l)}}n.add(o);const d=Rn(16777215,2);for(const v of[1.5,-1.5]){const m=new Mt(new Ji(.5),d);m.position.y=v,n.add(m)}let g=!1;return{group:e,dur:1.25,follow:!0,update(v,m,p){const S=dn(v/.7),M=Vi((v-.7)/.3);if(n.scale.setScalar(Math.max(.001,(2.3-1.6*Vi(S)+M*2.8)*Vi(v/.1)*dn((1.25-v)/.2))),n.rotation.y=v*(2+S*9),!g&&v>=.7){g=!0;for(let x=0;x<70;x++){const _=At(0,Le),y=At(9,24);p(Math.cos(_),At(.5,3),Math.sin(_),Math.cos(_)*y,At(0,7),Math.sin(_)*y,At(.25,.55),x%3?12946431:16777215)}}}}}function dM(i){const e=new Wt,n=new Wt,s=Rn(16732120,2.4),r=Rn(16766708,3),a=new Mt(new Ji(1,0),r);a.scale.set(.34,4.6,.34),a.castShadow=!0,n.add(a);for(let l=0;l<4;l++){const c=new Mt(new xr(.5,2.2,3),s);c.position.set(Math.cos(l/4*Le)*.5,2.6,Math.sin(l/4*Le)*.5),c.rotation.set(Math.sin(l/4*Le)*.5,0,-Math.cos(l/4*Le)*.5),n.add(c)}n.rotation.z=.12,e.add(n);let o=!1;return{group:e,dur:1.3,follow:!1,update(l,c,h){const u=dn(l/.12);if(n.position.y=26-22.5*u*u,n.rotation.y=l*3,n.scale.setScalar(Math.max(.001,dn((1.3-l)/.3))),!o&&u>=1){o=!0;for(let f=0;f<90;f++){const d=At(0,Le),g=At(5,26);h(0,.4,0,Math.cos(d)*g,At(2,16),Math.sin(d)*g,At(.3,.7),f%3?16736224:16777215)}}Mr(o?30:400,c,()=>h(At(-.3,.3),n.position.y+At(0,6),At(-.3,.3),At(-2,2),o?At(3,9):At(20,40),At(-2,2),At(.15,.4),16747240))}}}function fM(i){const t=new Wt,e=new Mt(new Ha(1.15,2),new Ae({color:0}));e.position.y=2.8,t.add(e);const n=46,s=new Dd(new ka(.2,0),Rn(6978559,1.3,1842732),n);s.castShadow=!0,t.add(s);const r=Array.from({length:n},()=>({ph:At(0,Le),off:Math.random(),tilt:At(-.35,.35),size:At(.5,1.7)})),a=new se,o=new Ki,l=new An;return{group:t,dur:i,follow:!0,update(c,h,u){const f=_r(c,i,.35,.18);e.scale.setScalar(Math.max(.001,f*(1+.05*Math.sin(c*24)))),r.forEach((d,g)=>{const v=(d.off+c*.55)%1,m=1.3+(1-v)*(1-v)*5.2,p=d.ph+c*2+9/(.5+m);l.set(c*5+d.ph,c*3,0),o.setFromEuler(l);const S=Math.max(.001,f*d.size*(.4+.6*(1-v)));a.compose(new P(Math.cos(p)*m,2.8+Math.sin(p)*m*d.tilt,Math.sin(p)*m),o,new P(S,S,S)),s.setMatrixAt(g,a)}),s.instanceMatrix.needsUpdate=!0,Mr(150*f,h,()=>{const d=At(0,Le),g=At(5,10),v=At(12,22);u(Math.cos(d)*g,At(.2,5.5),Math.sin(d)*g,-Math.cos(d)*v-Math.sin(d)*6,At(-1,3),-Math.sin(d)*v+Math.cos(d)*6,g/v,Math.random()<.25?16777215:8359167)})}}}function pM(i){const t=new Wt,e=Rn(5242848,1.8),n=Jd(),s=20,r=[];for(let o=0;o<s;o++){const l=o/s*Le,c=new Mt(new le(.24,1,.24),o%2?e:n);c.geometry.translate(0,.5,0),c.position.set(Math.cos(l)*2.9,.15,Math.sin(l)*2.9),c.rotation.y=-l,c.castShadow=!0,t.add(c),r.push(c)}let a=-1;return{group:t,dur:i,follow:!0,update(o,l,c){const h=_r(o,i,.2,.3),u=o%.6/.6,f=Math.pow(1-u,2);r.forEach((g,v)=>g.scale.set(1,Math.max(.001,h*(.5+4.2*f*(.35+.65*Math.abs(Math.sin(v*Math.PI*3/s+Math.floor(o/.6)))))),1)),t.rotation.y=Math.floor(o/.6)*.31;const d=Math.floor(o/.6);if(d!==a){a=d;for(let g=0;g<80;g++){const v=At(0,Le),m=At(10,22);c(Math.cos(v)*3,.2,Math.sin(v)*3,Math.cos(v)*m,At(.5,3.5),Math.sin(v)*m,At(.2,.4),g%4?5242848:16777215)}}}}}function mM(i,t){const e=De[i].super.dur;switch(i){case"thermal":return aM(e);case"cryo":return oM(e,t);case"volt":return lM(e);case"gale":return cM(e);case"quake":return hM(e,t);case"mag":return uM();case"plasma":return dM();case"gravity":return fM(e);case"resonance":return pM(e)}}function Zd(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ge;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=cu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=cu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function cu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new be(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const pn=Math.PI*2,hu=i=>i-Math.floor(i),Wl={steel:{name:"Steel",color:12173516,rough:.24},chrome:{name:"Chrome",color:16054010,rough:.06},gunmetal:{name:"Gunmetal",color:4014674,rough:.34},gold:{name:"Gold",color:14854973,rough:.2},copper:{name:"Copper",color:13201727,rough:.26}};function jd(i){const t=Wl[i.metal]??Wl.steel;return{metal:new Se({color:t.color,metalness:1,roughness:t.rough}),paint:new $_({color:i.paint,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.08}),glow:new Se({color:789776,emissive:i.glow,emissiveIntensity:1,roughness:.4}),rubber:new Se({color:1381914,metalness:0,roughness:.92}),dark:new Se({color:1645346,metalness:.7,roughness:.42})}}function ni(i,t=220){const e=new Ds;for(let n=0;n<=t;n++){const s=n/t*pn,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function Yn(i,t,e,n){const s=new kl;s.absarc(t,e,n,0,pn,!0),i.holes.push(s)}function en(i,t,e){const n=new mc(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:28});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function Sn(i,t=72){return new hr(i.map(([e,n])=>new j(e,n)),t)}function gt(i,t,e=0){const n=new Mt(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function fn(i,t,e,n,s,r=0){const a=[];for(let o=0;o<t;o++){const l=r+o/t*pn,c=i();c.rotateY(l),c.translate(Math.cos(l)*e,n,-Math.sin(l)*e),a.push(c)}return gt(Zd(a),s)}const uu={talon:i=>.6+.4*Math.pow(1-hu(i*3/pn),1.8),bastion:i=>.94+.06*Math.cos(6*i),ripsaw:i=>.84+.16*(1-hu(i*8/pn)),halo:i=>.7+.3*Math.pow(Math.abs(Math.cos(i)),5)},gM={talon:3,bastion:6,ripsaw:8,halo:2},vM={talon:1,bastion:1.05,ripsaw:1,halo:1.02},du=.25,xM=-.85;function Xl(i,t){for(const e of i)e.pivot.rotation.y=e.base+du+(xM-du)*t}function _M(i){const t=new Wt,e=c=>.52+.1*Math.pow(Math.max(0,Math.cos(3*c)),2),n=ni(e);Yn(n,0,0,.36),t.add(gt(en(n,.12,.03),i.metal));const s=ni(c=>e(c)*.9);Yn(s,0,0,.4),t.add(gt(en(s,.05,.02),i.paint,.18));const r=gt(new me(.455,.014,8,96),i.glow,.272);r.rotation.x=Math.PI/2,t.add(r);const a=new Ds;for(const[c,[h,u]]of[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]].entries())c===0?a.moveTo(h,u):a.lineTo(h,u);const o=new Ds;for(const[c,[h,u]]of[[.04,-.06],[.28,-.11],[.54,-.06],[.64,.01],[.3,.05],[.04,.05]].entries())c===0?o.moveTo(h,u):o.lineTo(h,u);const l=[];for(let c=0;c<3;c++){const h=c/3*pn,u=new Wt;u.position.set(Math.cos(h)*.56,.05,-Math.sin(h)*.56),u.add(gt(en(a,.1,.025),i.metal)),u.add(gt(en(o,.04,.015),i.paint,.15));const f=gt(new le(.4,.02,.03),i.glow,.225);f.position.x=.32,u.add(f),u.add(gt(new ce(.065,.065,.26,6),i.dark,.1)),u.add(gt(new ce(.035,.035,.02,12),i.glow,.24)),t.add(u),l.push({pivot:u,base:h+Math.PI/2})}return Xl(l,.5),t.userData.wings=l,t}function MM(i,t){if(i==="shifter")return _M(t);const e=new Wt,n=uu[i]??uu.talon,s=gM[i]??3,r=vM[i]??1,a=d=>r*Math.max(.52,n(d)*.86-.02),o=ni(d=>r*n(d));Yn(o,0,0,.36*r),e.add(gt(en(o,.12,.03),t.metal));const l=ni(a);Yn(l,0,0,.44*r);const c=Math.max(s,4);for(let d=0;d<c;d++){const g=(d+.22)/c*pn,m=a(g)-.44*r;if(m<.2*r)continue;const p=.44*r+m*.5;Yn(l,Math.cos(g)*p,Math.sin(g)*p,Math.min(.1*r,m*.26))}e.add(gt(en(l,.06,.02),t.paint,.18));const h=.285,u=gt(new me(.47*r,.016,8,96),t.glow,h);u.rotation.x=Math.PI/2,e.add(u);const f=[];for(let d=0;d<s;d++){const g=(d+.1)/s*pn,v=a(g),m=Math.min(.26*r,v-.5*r);if(m<.08)continue;const p=new le(m,.02,.04*r);p.rotateY(g);const S=v-m/2-.05*r;p.translate(Math.cos(g)*S,h,-Math.sin(g)*S),f.push(p)}return f.length&&e.add(gt(Zd(f),t.glow)),e.add(fn(()=>new ce(.035*r,.035*r,.05,6),c,.4*r,.2,t.metal,.6/c)),e}function yM(i,t){const e=new Wt;if(i==="flywheel"){const n=ni(()=>.72,96);Yn(n,0,0,.2);for(let a=0;a<6;a++){const o=a/6*pn;Yn(n,Math.cos(o)*.45,Math.sin(o)*.45,.13)}e.add(gt(en(n,.06,.02),t.dark));const s=gt(new me(.7,.085,18,96),t.metal,.1);s.rotation.x=Math.PI/2;const r=gt(new me(.7,.014,8,96),t.glow,.187);r.rotation.x=Math.PI/2,e.add(s,r,gt(new ce(.26,.28,.16,48),t.metal,.08))}else if(i==="anvil")e.add(gt(Sn([[0,0],[.5,0],[.72,.04],[.75,.08],[.75,.19],[.7,.23],[.3,.23],[0,.23]]),t.metal)),e.add(fn(()=>new le(.035,.11,.05),40,.755,.135,t.dark)),e.add(gt(Sn([[.42,.231],[.6,.231],[.6,.245],[.42,.245]]),t.paint));else if(i==="feather"){const n=ni(()=>.66,96);Yn(n,0,0,.18);for(let r=0;r<8;r++){const a=r/8*pn;Yn(n,Math.cos(a)*.44,Math.sin(a)*.44,.1)}e.add(gt(en(n,.05,.015),t.paint,.05));const s=gt(new me(.67,.03,10,96),t.metal,.09);s.rotation.x=Math.PI/2,e.add(s,gt(new ce(.22,.24,.16,40),t.metal,.08))}else e.add(gt(Sn([[0,0],[.3,0],[.4,.04],[.42,.1],[.64,.12],[.7,.14],[.7,.19],[.64,.21],[.44,.2],[.38,.23],[0,.23]]),t.metal)),e.add(gt(Sn([[.47,.207],[.61,.212],[.61,.225],[.47,.22]]),t.paint)),e.add(fn(()=>new ce(.03,.03,.04,6),6,.67,.2,t.dark));return e}function SM(i,t){const e=new Wt,n=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];if(i==="needle"){e.add(gt(Sn([[0,0],[.025,.02],[.1,.24],[.2,.3],...n]),t.metal));const s=gt(new me(.215,.022,10,64),t.paint,.345);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="flatline"){e.add(gt(Sn([[0,0],[.2,0],[.25,.04],[.25,.18],[.17,.24],[.2,.3]]),t.paint)),e.add(gt(Sn(n),t.metal));const s=gt(new me(.255,.012,8,64),t.glow,.11);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="gripper"){e.add(gt(Sn([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),e.add(fn(()=>new le(.03,.13,.035),18,.272,.13,t.dark)),e.add(gt(Sn(n),t.metal));const s=gt(new me(.225,.014,8,64),t.glow,.34);s.rotation.x=Math.PI/2,e.add(s)}else{const s=gt(new gc(.13,32,20),new Se({color:16054010,metalness:1,roughness:.05}),.13);e.add(s),e.add(gt(Sn([[.11,.14],[.19,.17],[.22,.26],[.2,.3]]),t.paint)),e.add(gt(Sn(n),t.metal))}return e}const Mc=(i,t)=>e=>{const n=pn/i,s=Math.cos(Math.PI/i)/Math.cos((e%n+n)%n-n/2);return s+(1-s)*t};function bM(i){const t=new Ds;return t.moveTo(-i,-i*.9),t.lineTo(0,-i*.35),t.lineTo(i,-i*.9),t.lineTo(i,-i*.35),t.lineTo(0,i*.25),t.lineTo(-i,-i*.35),t.closePath(),en(t,.012,0)}function EM(i){const t=new Wt;t.add(gt(new ce(.33,.33,.2,48),i.metal,.1));const e=Mc(8,.1);t.add(gt(en(ni(s=>.38*e(s),180),.16,.03),i.paint,.2));const n=.422;for(const s of[-.1,.1]){const r=gt(new le(.075,.03,.3),i.glow,n+.01);r.position.x=s,t.add(r)}return t.add(fn(()=>new le(.2,.26,.05),4,.38,.22,i.metal,Math.PI/4)),t.add(fn(()=>new ce(.03,.03,.04,6),8,.3,n,i.metal)),t}class TM extends Cn{constructor(){super()}getPoint(t,e=new P){const n=t*pn*3.5,s=.22-.03*Math.sin(t*Math.PI);return e.set(Math.cos(n)*s,t*.36,Math.sin(n)*s)}}function wM(i){const t=new Wt;t.add(gt(new ce(.33,.33,.2,48),i.metal,.1));const e=Mc(5,.2);t.add(gt(en(ni(s=>.36*e(s),180),.1,.03),i.paint,.2));const n=.35;return t.add(gt(new vc(new TM,120,.034,8,!1),i.metal,n)),t.add(gt(new ce(.2,.2,.03,24),i.glow,n+.37)),t}function AM(i,t){if(i==="anchor")return EM(t);if(i==="coil")return wM(t);const e=new Wt,n=i==="surge"?3:i==="lockjaw"?4:i==="rampart"?6:24,s=i==="surge"?.4:i==="viper"?.29:.35,r=i==="surge"?.42:i==="lockjaw"?.3:.12,a=i==="surge"||i==="viper";e.add(gt(new ce(.33,.33,.2,48),t.metal,.1));const o=Mc(n,r),l=ni(h=>s*o(h),180);e.add(gt(en(l,.16,.03),t.paint,.2));const c=.422;if(a)for(const h of[.02,-.1]){const u=gt(bM(s*.36),t.glow,c);u.position.z=h,e.add(u)}else{const h=gt(new me(s*.42,.022,8,48),t.glow,c+.01);h.rotation.x=Math.PI/2,e.add(h,gt(new ce(s*.16,s*.16,.02,6),t.glow,c+.005))}return i==="lockjaw"?e.add(fn(()=>new le(.16,.2,.12),4,s*.95,.3,t.metal,Math.PI/4)):i==="viper"?e.add(fn(()=>new le(.14,.05,.03),3,s*1.05,.3,t.metal)):e.add(fn(()=>new ce(.03,.03,.04,6),n,s*.72,c,t.metal,Math.PI/n)),e}function RM(i,t){const e=new Wt,n=s=>{const r=new Ds;return s.forEach(([a,o],l)=>l?r.lineTo(a,o):r.moveTo(a,o)),gt(en(r,.03,0),t)};if(i==="thermal")e.add(n([[-.3,-.2],[-.17,.1],[-.04,-.2]]),n([[-.12,-.2],[.03,.32],[.18,-.2]]),n([[.1,-.2],[.21,.06],[.32,-.2]]));else if(i==="cryo")for(const[s,r,a]of[[0,0,.17],[-.2,.12,.11],[.2,.1,.11],[.02,-.22,.09]]){const o=gt(new ce(a,a,.05+a*.5,6),t,.04);o.position.x=s,o.position.z=r,e.add(o)}else if(i==="volt")e.add(n([[.06,.32],[-.2,-.02],[-.03,-.02],[-.1,-.32],[.2,.06],[.03,.06]]));else if(i==="gale")for(const[s,r]of[[.12,0],[.21,.9],[.3,1.8]]){const a=gt(new me(s,.028,6,24,2.4),t,.02);a.rotation.set(Math.PI/2,0,r),e.add(a)}else if(i==="quake")for(const[s,r]of[[-.06,.18],[.08,0],[-.04,-.18]]){const a=gt(new le(.48,.04,.11),t,.02);a.position.x=s,a.position.z=r,e.add(a)}else if(i==="plasma"){const s=gt(new me(.16,.03,6,24),t,.03);s.rotation.x=Math.PI/2;const r=gt(new le(.72,.04,.05),t,.03);r.rotation.y=.6,e.add(s,r)}else if(i==="gravity")for(const[s,r]of[[.3,.05],[.2,.03],[.1,.01]]){const a=gt(new me(s,.022,6,28),t,r);a.rotation.x=Math.PI/2,e.add(a)}else if(i==="resonance")[.1,.22,.34,.22,.1,.22,.34].forEach((s,r)=>{const a=gt(new le(.06,.04,s*1.6),t,.02);a.position.x=-.3+r*.1,e.add(a)});else{const s=gt(new me(.2,.055,8,24,Math.PI),t,.03);s.rotation.x=-Math.PI/2,e.add(s);for(const r of[-.2,.2]){const a=gt(new le(.11,.06,.2),t,.03);a.position.set(r,.03,.1),e.add(a)}}return e}function CM(i){const t=new Wt,e=Pa(i).elements,n=new Se({color:1645346,metalness:.8,roughness:.35});return t.add(gt(new ce(.52,.58,.12,6),n,.06)),e.forEach((s,r)=>{const a=new Se({color:789776,emissive:De[s].color,emissiveIntensity:1.3}),o=gt(new me(.47,.02,6,48,Math.PI*2/e.length),a,.125);o.rotation.set(Math.PI/2,0,r*Math.PI*2/e.length);const l=RM(s,a);l.position.y=.125,e.length>1&&(l.scale.setScalar(.6),l.position.x=r?.2:-.2),t.add(o,l)}),t}function PM(i,t){const e=new Wt,n=gt(new le(.34,.95,.28),t.paint,-.55),s=gt(new le(.36,.5,.2),t.rubber,-.6),r=gt(new ce(.46,.46,.3,48),t.metal,.1),a=gt(new ce(.3,.34,.08,6),t.dark,.29),o=gt(new me(.465,.014,8,64),t.glow,.1);if(o.rotation.x=Math.PI/2,e.add(n,s,r,a,o),e.add(fn(()=>new ce(.05,.05,.22,12),3,.2,-.12,t.metal)),i==="string"){const l=gt(new ce(.012,.012,.9,6),t.dark);l.rotation.z=Math.PI/2,l.position.set(.9,.1,0);const c=gt(new me(.13,.03,10,32),t.glow);c.position.set(1.45,.1,0),e.add(l,c)}else if(i==="winder"){const l=gt(new le(.6,.05,.1),t.metal,.36);l.position.x=.25;const c=gt(new ce(.07,.07,.2,16),t.paint,.48);c.position.x=.5,e.add(l,c)}else if(i==="geared")for(const[l,c]of[[.52,.24],[.86,.16]]){const h=gt(new ce(c,c,.08,14),t.dark,.1);h.position.x=l,e.add(h,fn(()=>new le(.05,.08,.05),14,c,.1,t.metal).translateX(l))}else{const l=gt(new le(1.5,.03,.09),t.dark,.1);l.position.x=.4;const c=gt(new le(.1,.16,.34),t.glow,.1);c.position.x=1.2,e.add(l,c,fn(()=>new le(.03,.035,.09),1,0,0,t.metal))}return e}const pr=["tip","disc","blade","core"],mr={tip:0,disc:.46,blade:.64,core:.7},LM={tip:0,disc:.85,blade:1.55,core:2.35};function Qd(i,t,e){return i==="blade"?MM(t,e):i==="disc"?yM(t,e):i==="tip"?SM(t,e):AM(t,e)}function tf(i){const t=jd(i),e=new Wt,n={};for(const r of pr){const a=Qd(r,i[r],t);a.position.y=mr[r],n[r]=a,e.add(a)}const s=n.blade.userData.wings??[];return Xl(s,0),{root:e,parts:n,mats:t,shift:r=>Xl(s,r)}}function fu(i){i.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const Mn=2.4;let Ee=Ts.radius;const pe=i=>Mn*Math.min(i/Ee,1)**2,Ui=18,fi=14;function DM(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.4,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter";for(const[n,s]of[[128,5],[5,128]]){const r=n>s?t.createLinearGradient(0,0,128,0):t.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(64-n/2,64-s/2,n,s)}return new dc(i)}function pu(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new dc(i)}function IM(){const i=document.createElement("canvas");i.width=32,i.height=8;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,32,0);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(.65,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,8),new dc(i)}const ui=new Ft;class UM{mesh;pts=[];pos=new Float32Array(Ui*2*3);col=new Float32Array(Ui*2*3);color;constructor(t){this.color=new Ft(t);const e=new ge;e.setAttribute("position",new be(this.pos,3)),e.setAttribute("color",new be(this.col,3));const n=[];for(let s=0;s<Ui-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}e.setIndex(n),this.mesh=new Mt(e,new Ae({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:He})),this.mesh.frustumCulled=!1}reset(){this.pts.length=0}update(t,e,n){t?this.pts.unshift(t.clone()):this.pts.length&&this.pts.pop(),this.pts.length>Ui&&(this.pts.length=Ui);const s=this.pts.length;for(let r=0;r<Ui;r++){const a=Math.min(r,s-1),o=r*6;if(s<2){this.pos.fill(0,o,o+6),this.col.fill(0,o,o+6);continue}const l=this.pts[a],c=this.pts[Math.max(0,a-1)],h=this.pts[Math.min(s-1,a+1)];let u=c.x-h.x,f=c.z-h.z;const d=Math.hypot(u,f)||1;u/=d,f/=d;const g=1-r/Ui,v=n*g;this.pos[o]=l.x-f*v,this.pos[o+1]=l.y,this.pos[o+2]=l.z+u*v,this.pos[o+3]=l.x+f*v,this.pos[o+4]=l.y,this.pos[o+5]=l.z-u*v;const m=r<s?g*g*e:0;for(let p=0;p<2;p++)this.col[o+p*3]=this.color.r*m,this.col[o+p*3+1]=this.color.g*m,this.col[o+p*3+2]=this.color.b*m}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}class NM{mesh;pts=[];pos=new Float32Array(fi*3*3);col=new Float32Array(fi*3*3);accent=new Ft;hotC=new Ft;constructor(t){this.accent.setHex(t),this.hotC.setHex(t).lerp(new Ft(16773328),.5);const e=new ge;e.setAttribute("position",new be(this.pos,3)),e.setAttribute("color",new be(this.col,3));const n=[];for(let s=0;s<fi-1;s++){const r=s*3;n.push(r,r+1,r+3,r+1,r+4,r+3,r+1,r+2,r+4,r+2,r+5,r+4)}e.setIndex(n),this.mesh=new Mt(e,new Ae({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:He})),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(){this.pts.length=0}update(t,e,n){t&&e?this.pts.unshift({a:t.clone(),b:e.clone()}):this.pts.length&&this.pts.pop(),this.pts.length>fi&&(this.pts.length=fi);const s=this.pts.length;if(this.mesh.visible=s>1,!(s<2)){for(let r=0;r<fi;r++){const a=Math.min(r,s-1),o=this.pts[a],l=a/(fi-1),c=Math.pow(1-l,.85)*(a===0?.7:1),h=(o.a.x+o.b.x)/2,u=(o.a.y+o.b.y)/2,f=(o.a.z+o.b.z)/2,d=(o.a.x-o.b.x)/2,g=(o.a.y-o.b.y)/2,v=(o.a.z-o.b.z)/2,m=r*9;this.pos[m]=h+d*c,this.pos[m+1]=u+g*c,this.pos[m+2]=f+v*c;const p=.3+.25*Math.sin(l*Math.PI);this.pos[m+3]=h+d*c*p,this.pos[m+4]=u+g*c*p+.05*c,this.pos[m+5]=f+v*c*p,this.pos[m+6]=h-d*c*.8,this.pos[m+7]=u-g*c*.8,this.pos[m+8]=f-v*c*.8;const S=r<s?c*c*n:0,M=(x,_,y)=>{this.col[m+x*3]=_.r*y*S,this.col[m+x*3+1]=_.g*y*S,this.col[m+x*3+2]=_.b*y*S};M(0,this.accent,.55),M(1,this.hotC,.8),M(2,this.accent,.08)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}}class OM{constructor(t){this.spec=t;const e=t.radius,n=tf(t.look);this.glowMat=n.mats.glow,this.poseShift=n.shift,this.model=n,this.parts=pr.map(a=>n.parts[a]),n.root.scale.setScalar(t.look.scale??1),this.spinner.add(n.root),this.blur=new Mt(new Ga(e*.32,e*1.03,56),new Ae({color:t.accent,transparent:!0,opacity:.3,blending:Fe,depthWrite:!1,side:He})),this.blur.rotation.x=-Math.PI/2,this.blur.position.y=.95,this.shield=new Mt(new me(e*1.3,.05,8,48),new Ae({color:16777215,transparent:!0,blending:Fe,depthWrite:!1})),this.shield.rotation.x=Math.PI/2,this.shield.position.y=.7,this.shield.visible=!1,this.light=new Is(t.accent,0,9,2),this.light.position.y=1.4;const s=new Map;n.parts.blade.traverse(a=>{const o=a;if(o.isMesh&&(o.material===n.mats.paint||o.material===n.mats.metal)){let l=s.get(o.material);l||(l=o.material.clone(),s.set(o.material,l),this.bladeMats.push(l)),o.material=l,l.color.getHex()===n.mats.paint.color.getHex()&&l.isMeshPhysicalMaterial&&(this.bladePaint=l)}}),this.chipPaint=n.mats.paint,this.chipMetal=n.mats.metal,this.tilt.add(this.spinner,this.blur,this.shield,this.markOut,this.markIn),this.swing=new NM(t.accent);const r=new Ji(.2,0);r.scale(.8,1.5,.8);for(let a=0;a<3;a++){const o=new Mt(r,this.markMat);o.visible=!1,o.castShadow=!0,this.markShards.push(o)}this.aura.visible=!1,this.squash.add(this.unyaw),this.unyaw.add(this.tilt),this.group.add(this.squash,this.light,this.aura,...this.markShards),this.group.visible=!1,this.trail=new UM(t.accent)}group=new Wt;tilt=new Wt;spinner=new Wt;parts=[];blur;shield;light;trail;glowMat;poseShift;model;seen=!1;dropT=0;justLanded=!1;recoilX=0;recoilZ=0;markShards=[];markMat=new Se({color:16777215,emissive:16777215,emissiveIntensity:1.6,metalness:.3,roughness:.35,flatShading:!0});markOn=0;prevAir=0;landSq=0;dig=0;braking=!1;brakeDir=[0,1];damageStage=0;seamMat=new Ae({color:16742948,toneMapped:!1});scorchMat=new Ae({color:328965,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});smoke=null;aura=new Wt;stage=0;flash=0;bursted=!1;y=0;yVel=0;airborne=!1;fallen=0;precess=Math.random()*6;tumble=0;seed=Math.random()*6;fx=null;vx=0;vz=0;discGone=!1;prevStun=0;stagMax=1;stagDx=0;stagDz=1;stagClock=0;toppleT=0;topL=0;topV=0;leanNow=0;bladeMats=[];bladePaint=null;chipPaint;chipMetal;swing;markOut=new Re;markIn=new Re;prevStrike=0;stDx=0;stDz=1;bladeExtra=0;swingTail=0;stLunge=0;swA=new P;swB=new P;hot=0;squash=new Wt;unyaw=new Wt;sqX=0;sqV=0;sqYaw=0;sqDx=0;sqDz=0;recoil(t,e,n){this.recoilX+=t*(.25+n*.55),this.recoilZ+=e*(.25+n*.55),this.sqYaw=Math.atan2(-e,t),this.sqDx=t,this.sqDz=e,this.sqV+=55+n*120,this.hot=1}partBounds(t){t.updateWorldMatrix(!0,!0);const e=new P;let n=0,s=0;return t.traverse(r=>{const a=r;if(!a.isMesh||!a.visible)return;a.geometry.computeBoundingBox();const o=a.geometry.boundingBox;for(let l=0;l<8;l++)e.set(l&1?o.max.x:o.min.x,l&2?o.max.y:o.min.y,l&4?o.max.z:o.min.z).applyMatrix4(a.matrixWorld),t.worldToLocal(e),n=Math.max(n,e.y),s=Math.max(s,Math.hypot(e.x,e.z))}),{top:n,rad:s}}seams(t,e,n,s,r){const{top:a,rad:o}=this.partBounds(t);if(!(o<.2))for(let l=0;l<e;l++){const c=n+l/e*Math.PI*2+l%2*.2,h=o*s,u=o*(s+r)*.55,f=o*r,d=c+.2*(l%2?1:-1),g=[[Math.cos(c)*h,Math.sin(c)*h],[Math.cos(d)*u,Math.sin(d)*u],[Math.cos(c+.05)*f,Math.sin(c+.05)*f]];for(let m=0;m<2;m++){const p=g[m+1][0]-g[m][0],S=g[m+1][1]-g[m][1],M=Math.hypot(p,S),x=new Mt(new le(M,.03,.045),this.seamMat);x.position.set((g[m][0]+g[m+1][0])/2,a+.018,(g[m][1]+g[m+1][1])/2),x.rotation.y=-Math.atan2(S,p),t.add(x)}const v=new Mt(new vr(o*.2,7),this.scorchMat);v.rotation.x=-Math.PI/2,v.scale.set(1.5,.8,1),v.position.set(Math.cos(d+.35)*u,a+.008,Math.sin(d+.35)*u),v.rotation.z=d,t.add(v)}}addDamage(t){for(;this.damageStage<t;)this.damageStage++,this.damageStage===1?(this.seams(this.model.parts.disc,4,this.seed,.35,.92),this.seams(this.model.parts.core,3,this.seed+1,.15,.85)):(this.seams(this.model.parts.core,4,this.seed+3,.1,.95),this.seams(this.model.parts.tip,2,this.seed+4,.2,.9))}setStage(t){t<=this.stage||(this.stage=t,this.addDamage(t),t>=1&&this.model.parts.blade.traverse(e=>{e.isMesh&&e.material===this.bladePaint&&(e.visible=!1)}))}shed(t,e){const n=[];if(this.group.updateWorldMatrix(!0,!0),t===1){const s=[];this.model.parts.blade.traverse(r=>{const a=r;a.isMesh&&a.material===this.bladePaint&&a.visible&&s.push(a)});for(const r of s.slice(0,10)){r.updateWorldMatrix(!0,!1);const a=new Mt(r.geometry,r.material);a.castShadow=!0,r.matrixWorld.decompose(a.position,a.quaternion,a.scale),e.add(a),n.push(a)}}else t===2&&!this.discGone&&(this.discGone=!0,e.attach(this.model.parts.disc),n.push(this.model.parts.disc));return n}update(t,e,n,s,r=null){if(this.flash=Math.max(0,this.flash-n*5),!t.inPlay||this.bursted){this.group.visible=!1,this.trail.update(null,0,0),this.swing.update(null,null,0);return}this.group.visible=!0,this.seen||(this.seen=!0,this.dropT=.3);const a=t.px+(t.x-t.px)*e,o=t.py+(t.y-t.py)*e,l=Math.hypot(a,o),c=En(t);(t.leaving||t.out==="ringout")&&l>Ee-.4?(this.airborne||(this.airborne=!0,this.y=Mn,this.yVel=5),this.yVel-=24*n,this.y+=this.yVel*n,this.tumble+=n*7):this.y=pe(l),this.dropT>0&&(this.dropT-=n,this.dropT<=0&&(this.justLanded=!0));const h=t.airT>0?1-t.airT/ot.JUMP_T:0,u=t.airT>0?Math.sin(Math.PI*Math.max(0,(h-.1)/.9))*2.6:0;let f=1;t.airT>0&&(h<.1?f=1-.3*Math.sin(h/.1*(Math.PI/2)):h<.4?f=1+.2*(1-(h-.1)/.3):h>.85&&(f=1+.1*((h-.85)/.15))),this.prevAir>0&&t.airT<=0&&(this.landSq=1),this.prevAir=t.airT,this.landSq=Math.max(0,this.landSq-n/.24),f*=1-.32*this.landSq*Math.cos((1-this.landSq)*4.2);const d=1/Math.sqrt(f);this.group.position.set(a,this.y+u+(this.dropT>0?(this.dropT/.3)**2*8:0),o),this.spinner.rotation.y=-t.phase,this.poseShift(t.shift);const g=Math.hypot(t.vx,t.vy);this.vx=t.vx,this.vz=t.vy;const v=Math.pow(Math.max(0,(.55-c)/.55),1.4);this.precess+=n*(3+v*16);let m=.025+v*.5;const p=Math.sin(s*(26+v*22))*v*.05,S=Math.exp(-n*6);this.recoilX*=S,this.recoilZ*=S;let M=0,x=0,_=0,y=0;if(t.stunT>0&&t.stunT>this.prevStun+.01){this.stagMax=Math.max(.3,t.stunT),this.stagClock=0;const I=g>.5?Math.atan2(t.vy,t.vx):Math.random()*6.28;this.stagDx=Math.cos(I),this.stagDz=Math.sin(I)}if(this.prevStun=t.stunT,t.stunT>0){this.stagClock+=n;const I=Math.min(1,1-t.stunT/this.stagMax),N=.62*Math.exp(-I*4.5)*Math.min(1,I/.06),q=.5*Math.pow(1-I,1.4),et=this.stagClock*(17-I*7);M=this.stagDz*N+Math.sin(et)*q,x=-this.stagDx*N+Math.cos(et)*q,_=Math.sin(et*2.3)*.07*(1-I),y=Math.cos(et*1.9)*.07*(1-I)}let w=0;if(t.out==="spinout"){this.toppleT+=n;const I=1.3-m;this.topV+=((I-this.topL)*70-this.topV*7.5)*n,this.topL+=this.topV*n,this.precess+=n*(9*Math.exp(-this.toppleT*1.5)-3),m+=Math.max(0,this.topL);const N=m;w=Math.max(0,this.spec.radius*Math.sin(N)-.55*Math.cos(N))*.85;const q=38*Math.exp(-this.toppleT*1.3);if(this.fx&&Math.random()<q*n&&g<6){const et=-Math.cos(this.precess)*m,lt=Math.sin(this.precess)*m,ft=Math.hypot(et,lt)||1,Dt=a+et/ft*this.spec.radius*.95,W=o+lt/ft*this.spec.radius*.95,it=-lt/ft,st=et/ft,Z=3+Math.random()*6;this.fx(Dt,this.y+.1,W,it*Z+(Math.random()-.5)*2,1+Math.random()*3,st*Z+(Math.random()-.5)*2,.2+Math.random()*.25,1,.65,.25)}}let R=0,E=0;const b=t.strikeT>0;if(b&&this.prevStrike<=0&&(this.swing.reset(),r?(this.stDx=r[0],this.stDz=r[1]):g>1?(this.stDx=t.vx/g,this.stDz=t.vy/g):(this.stDx=Math.cos(this.precess),this.stDz=Math.sin(this.precess))),this.prevStrike=t.strikeT,b){const I=1-t.strikeT/ot.STRIKE_T;R=I<.3?-.4*Math.sin(I/.3*(Math.PI/2)):-.4+.9*Math.sin(Math.min(1,(I-.3)/.25)*(Math.PI/2))*(1-Math.max(0,(I-.55)/.45)*.55),E=Math.sin(I*Math.PI),this.swingTail=fi}this.bladeExtra+=n*38*E;const L=this.model.parts.blade;if(L.rotation.y=this.bladeExtra,L.scale.setScalar(1+.1*E),b||this.swingTail>0){const I=this.spec.radius;this.markOut.position.set(this.stDx*I*1.5,.95,this.stDz*I*1.5),this.markIn.position.set(this.stDx*I*.95,.7,this.stDz*I*.95)}this.braking=t.brakeT>0,this.dig+=((this.braking?1:0)-this.dig)*(1-Math.exp(-n*(this.braking?40:10)));let z=0;if(this.dig>.01){const I=Math.hypot(t.brakeDx,t.brakeDy);I>.1&&(this.brakeDir=[t.brakeDx/I,t.brakeDy/I]),z=.3*this.dig;const N=this.dig*.05;if(_+=Math.sin(s*91)*N,y+=Math.cos(s*83)*N,this.braking&&this.fx){const[q,et]=this.brakeDir,lt=n*110,ft=Math.floor(lt)+(Math.random()<lt-Math.floor(lt)?1:0);for(let Dt=0;Dt<ft;Dt++){const W=5+Math.random()*9,it=(Math.random()-.5)*.9,st=Math.cos(it),Z=Math.sin(it);this.fx(a+q*.25,this.y+.08,o+et*.25,(q*st-et*Z)*W,.6+Math.random()*2.4,(q*Z+et*st)*W,.12+Math.random()*.22,1,.7+Math.random()*.3,.3,10)}}}this.leanNow=m,this.group.position.y+=w,this.group.position.x+=_,this.group.position.z+=y,this.tilt.rotation.set(Math.sin(this.precess)*m+p+t.steerY*.3+this.recoilZ+this.tumble+M+this.stDz*R+this.brakeDir[1]*z,0,Math.cos(this.precess)*m+p*.7-t.steerX*.3-this.recoilX+this.tumble*.6+x-this.stDx*R-this.brakeDir[0]*z),this.stLunge=R>0?R:0;{const I=Math.min(1,Math.max(t.stage*.34,1-t.armour)+(t.stunT>0?.45:0));pr.forEach((N,q)=>{if(N==="disc"&&this.discGone)return;const et=this.model.parts[N];if(I<.06||N==="tip"){et.position.set(0,mr[N],0),et.rotation.x=et.rotation.z=0;return}const lt=I*.04*(N==="core"?1.4:1),ft=q*2.1+this.seed;et.position.set(Math.sin(s*47+ft)*lt,mr[N]+Math.sin(s*61+ft*1.3)*lt*.6,Math.sin(s*41+ft*1.7)*lt),et.rotation.x=Math.sin(s*39+ft)*I*.06,et.rotation.z=Math.sin(s*33+ft*.7)*I*.06})}{this.sqV+=(-30*30*this.sqX-2*30*this.sqV)*n,this.sqX+=this.sqV*n;const N=Math.max(-.4,Math.min(1,this.sqX));this.squash.rotation.y=this.sqYaw,this.unyaw.rotation.y=-this.sqYaw;const q=1-.12*this.dig;this.squash.scale.set((1-N*.2)*d*(1+.06*this.dig),(1+N*.05)*f*q,(1+N*.1)*d*(1+.06*this.dig)),this.squash.position.set(this.sqDx*N*.16+this.stDx*this.stLunge*.7,0,this.sqDz*N*.16+this.stDz*this.stLunge*.7)}this.hot=Math.max(0,this.hot-n/.08);for(const I of this.bladeMats)I.emissive.setScalar(this.hot>0?1:0),I.emissiveIntensity=this.hot>0?.4+2.6*this.hot:1;if(this.blur.material.opacity=.16*c,this.glowMat.emissiveIntensity=.7+1.1*c+this.flash*5,this.light.intensity=4*c+this.flash*30,this.shield.visible=t.braceT>0,this.shield.visible){const I=1+.08*Math.sin(s*30);this.shield.scale.set(I,I,1),this.shield.material.color.setHex(16777215)}b?(this.markOut.getWorldPosition(this.swA),this.markIn.getWorldPosition(this.swB),this.swA.y=Math.max(this.swA.y,this.y+.15),this.swB.y=Math.max(this.swB.y,this.y+.1),this.swing.update(this.swA,this.swB,1)):(this.swingTail=Math.max(0,this.swingTail-1),this.swing.update(null,null,1));let k=null;for(const I of Ca)t.status[I]>0&&(!k||t.status[I]>t.status[k])&&(k=I);if(this.smoke&&(t.stage>=1||t.armour<.5)&&!t.out){const I=t.stage>=2?16:t.stage>=1?9:4;if(Math.random()<I*n){const N=Math.random()*Math.PI*2,q=this.spec.radius*.5;this.smoke(a+Math.cos(N)*q-t.vx*.02,this.y+.7+u,o+Math.sin(N)*q-t.vy*.02,-t.vx*.12+(Math.random()-.5)*.8,1.3+Math.random()*1.2,-t.vy*.12+(Math.random()-.5)*.8,.3+Math.random()*.25,.9+Math.random()*.6)}}if(this.markOn=k?Math.min(1,this.markOn+n*7):Math.max(0,this.markOn-n*7),k){const I=De[k].color;this.markMat.color.setHex(I),this.markMat.emissive.setHex(I)}const G=this.spec.radius*(1.1+.35*this.markOn)+.15;if(this.markShards.forEach((I,N)=>{I.visible=this.markOn>.02;const q=s*3.2+N*Math.PI*2/3;I.position.set(Math.cos(q)*G,.85+Math.sin(s*5+N*2)*.12,Math.sin(q)*G),I.rotation.set(s*4+N,q,s*3+N*2),I.scale.setScalar(this.markOn*(1+.1*Math.sin(s*14+N)))}),this.aura.visible=t.superT>0,t.superT>0){for(const I of this.aura.children)I.userData.spin&&(I.rotation.z+=I.userData.spin*n);this.aura.scale.setScalar(1+.06*Math.sin(s*22))}const Y=Math.hypot(t.vx,t.vy),U=!t.out&&!this.airborne;this.trail.update(U?new P(a,this.y+.1,o):null,Math.min(1,Y/18)*(t.dashT>0||t.boostT>0?.4:.1),.08+Math.min(.1,Y/200)+(t.dashT>0?.06:0))}}const We=900;class FM{constructor(t){this.canvas=t,this.renderer=new h_({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zu,this.renderer.toneMapping=Ql,this.renderer.toneMappingExposure=1,this.scene.background=new Ft(329483),this.scene.fog=new Ba(329483,34,80);const e=new Ma(this.renderer);this.scene.environment=e.fromScene(new Xd,.04).texture,this.scene.environmentIntensity=.55;const n=this.sun=new Gl(16777215,2.4);n.position.set(7,20,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-13,s.right=s.top=13,s.near=1,s.far=50,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,this.scene.add(n,new Vd(9413887,329226,.45));const r=new Is(16742963,110,40,2);r.position.set(-14,5,-4);const a=new Is(3385599,110,40,2);a.position.set(14,5,-4),this.scene.add(r,a),this.setStadium(Ts);const o=new ge;this.sparkPos.fill(-999),o.setAttribute("position",new be(this.sparkPos,3)),o.setAttribute("color",new be(this.sparkCol,3)),this.sparks=new m_(o,new Ud({size:.22,map:pu(),vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1})),this.sparks.frustumCulled=!1,this.scene.add(this.sparks);const l=new ge;this.streakPos.fill(-999),l.setAttribute("position",new be(this.streakPos,3)),l.setAttribute("color",new be(this.streakCol,3));const c=new Float32Array(We*8),h=new Uint32Array(We*6);for(let d=0;d<We;d++){c.set([0,1,1,1,0,0,1,0],d*8);const g=d*4;h.set([g,g+1,g+2,g+1,g+3,g+2],d*6)}l.setAttribute("uv",new be(c,2)),l.setIndex(new be(h,1)),this.streaks=new Mt(l,new Ae({map:IM(),vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:He,fog:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);const u=DM();for(let d=0;d<10;d++){const g=new Gh(new Fl({map:u,color:16777215,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));g.visible=!1,this.scene.add(g),this.shocks.push({mesh:g,life:0,max:1,size:1})}const f=new Mt(new Ga(.95,1.08,48),new Ae({color:16777215,transparent:!0,opacity:.9,blending:Fe,depthWrite:!1,depthTest:!1,side:He}));f.rotation.x=-Math.PI/2,this.aimArrow=new Mt(new xr(.22,.7,3),new Ae({color:16777215,transparent:!0,opacity:.9,blending:Fe,depthWrite:!1,depthTest:!1})),this.aim.add(f,this.aimArrow),this.aim.visible=!1,this.scene.add(this.aim),this.composer=new Yd(this.renderer),this.composer.addPass(new Kd(this.scene,this.camera)),this.bloom=new Yi(new j(1,1),.38,.4,.92),this.composer.addPass(this.bloom),this.composer.addPass(new $d),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new ya;camera=new qe(42,1,.1,200);composer;bloom;tops=[];debugCam=null;pieces=[];chips=[];puffs=[];puffGeo=new Ha(.2,0);smokeMat=new Se({color:2369068,roughness:1,flatShading:!0});dustMat=new Se({color:9209464,roughness:1,flatShading:!0});stoneMat=new Se({color:7039600,roughness:.9,flatShading:!0});world=null;shove=new P;shoveV=new P;finT=0;finDur=1;finTarget=-1;finEnv=0;fx3=0;trauma=0;focus=new P;zoom=1;distScale=1;aim=new Wt;aimArrow;raycaster=new j_;arena=new Wt;stadium=Ts;segs=[];pillarMeshes=[];dangerMat=new Ae({color:16726820});fovKick=0;bolts=[];constructs=[];sun;beams=[];sparkPos=new Float32Array(We*3);sparkCol=new Float32Array(We*3);sparkVel=new Float32Array(We*3);sparkLife=new Float32Array(We);sparkMax=new Float32Array(We);sparkBase=new Float32Array(We*3);sparkCap=We;sparkGrav=new Float32Array(We);streakPos=new Float32Array(We*12);streakCol=new Float32Array(We*12);streaks;sparkNext=0;sparks;shocks=[];applyQuality(t){const e=Yu[t];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap)),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelCap));const n=this.sun.shadow;n.mapSize.x!==e.shadow&&(n.mapSize.set(e.shadow,e.shadow),n.map?.dispose(),n.map=null),this.bloom.enabled=e.bloom,this.sparkCap=e.sparks,this.sparkNext%=this.sparkCap,this.resize()}setStadium(t){this.scene.remove(this.arena),this.arena.traverse(f=>f.geometry?.dispose()),this.arena=new Wt,this.scene.add(this.arena),this.stadium=t,Ee=t.radius;const e=t.radius,n=e+3,s=this.sun.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.far=90,s.updateProjectionMatrix(),this.sun.position.set(7,20,9).multiplyScalar(Math.max(1,e/10));for(const f of this.beams)this.scene.remove(f.beam,f.gem);this.beams=[];const r=[];for(let f=0;f<=48;f++){const d=e*f/48;r.push(new j(d,pe(d)))}r.push(new j(e+.7,Mn),new j(e+.9,-1.2));const a=new Mt(new hr(r,96),new Se({color:t.theme.floor,metalness:.75,roughness:.26,side:He}));a.receiveShadow=!0,this.arena.add(a);const o=new Ae({color:2899819});for(const f of[e*.33,e*.6]){const d=new Mt(new me(f,.022,6,96),o);d.rotation.x=Math.PI/2,d.position.y=pe(f)+.012,this.arena.add(d)}if(t.rail){const f=e-t.rail.width-.9,d=new Mt(new hr([new j(f,pe(f)+.015),new j(e-.25,pe(e-.25)+.015)],96),new Ae({color:t.theme.strip,transparent:!0,opacity:.05,blending:Fe,depthWrite:!1,side:He})),g=new Mt(new me(f,.03,6,128),new Ae({color:t.theme.strip}));g.rotation.x=Math.PI/2,g.position.y=pe(f)+.02,this.arena.add(d,g)}const l=new Ae({color:t.theme.strip}),c=Math.PI*2/t.segments,h=c-.03;this.segs=[];for(let f=0;f<t.segments;f++){const d=new Wt;d.rotation.y=-(f*c-c/2+.015),this.arena.add(d);const g=new Se({color:t.theme.wall,metalness:1,roughness:.24,emissive:16724736,emissiveIntensity:0}),v=new Mt(new me(e+.2,.34,12,10,h),g);v.rotation.x=Math.PI/2,v.position.y=Mn+.1,v.castShadow=!0;const m=new Mt(new me(e-.16,.035,6,10,h),l);m.rotation.x=Math.PI/2,m.position.y=Mn-.05;const p=new Mt(new me(e+.15,.05,6,8,h),this.dangerMat);p.rotation.x=Math.PI/2,p.position.y=Mn+.03;const S=t.openSegs.includes(f);v.visible=m.visible=!S,p.visible=S,d.add(v,m,p),this.segs.push({wall:v,glow:m,lip:p,mat:g,open:S})}this.pillarMeshes=t.pillars.map(f=>{const d=new Wt,g=new Mt(new ce(f.r*.92,f.r*1.08,1.7,6),new Se({color:t.theme.wall,metalness:1,roughness:.3,emissive:16724736,emissiveIntensity:0}));g.castShadow=!0;const v=new Mt(new me(f.r*1.02,.04,6,24),l);return v.rotation.x=Math.PI/2,v.position.y=.45,d.add(g,v),d.position.set(f.x,pe(Math.hypot(f.x,f.y))+.85,f.y),this.arena.add(d),d});const u=new Mt(new vr(90,48),new Se({color:461070,roughness:.9,metalness:.2}));u.rotation.x=-Math.PI/2,u.position.y=-1.2,u.receiveShadow=!0,this.arena.add(u)}chunks(t,e,n,s,r,a,o){const l=new Se({color:r,metalness:1,roughness:.3});for(let c=0;c<s;c++){const h=.18+Math.random()*.3,u=new Mt(new le(h*1.4,h,h*.9),l);u.castShadow=!0,u.position.set(t+(Math.random()-.5)*1.6,e+Math.random()*.5,n+(Math.random()-.5)*1.6),this.scene.add(u);const f=3+Math.random()*9;this.pieces.push({obj:u,v:new P(a*f+(Math.random()-.5)*5,4+Math.random()*8,o*f+(Math.random()-.5)*5),w:new P(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:5})}}breakPiece(t,e,n,s){const r=Math.hypot(n,s)||1;if(t==="wall"){const a=this.segs[e];if(!a||a.open)return;a.open=!0,a.wall.visible=a.glow.visible=!1,a.lip.visible=!0,this.chunks(n,Mn+.2,s,9,this.stadium.theme.wall,n/r,s/r),this.shock(n,Mn+.2,s,7,.5,16738874)}else{const a=this.pillarMeshes[e];if(!a||!a.visible)return;a.visible=!1,this.chunks(n,a.position.y,s,10,this.stadium.theme.wall,0,0),this.shock(n,a.position.y,s,5,.45,16765088)}for(let a=0;a<70;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*13;this.spark(n,Mn*(t==="wall"?1:.5)+.4,s,Math.cos(o)*l,3+Math.random()*10,Math.sin(o)*l,.3+Math.random()*.6,1,.6,.3)}this.trauma=Math.min(1,this.trauma+.8),this.fovKick=Math.max(this.fovKick,5)}kick(t){this.fovKick=Math.max(this.fovKick,t)}burstSparks(t,e,n,s,r,a){ui.setHex(a);for(let o=0;o<s;o++){const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.spark(t,e,n,Math.cos(l)*c,2+Math.random()*r*.7,Math.sin(l)*c,.3+Math.random()*.5,ui.r,ui.g,ui.b)}}bolt(t,e,n,s,r){const a=[];for(let c=0;c<=9;c++){const h=c/9,u=c===0||c===9?0:.7,f=t+(n-t)*h+(Math.random()-.5)*u,d=e+(s-e)*h+(Math.random()-.5)*u;a.push(new P(f,pe(Math.min(Ee,Math.hypot(f,d)))+1+Math.sin(h*Math.PI)*1.2,d))}const l=new Id(new ge().setFromPoints(a),new uc({color:r,transparent:!0,blending:Fe,depthWrite:!1}));l.frustumCulled=!1,this.scene.add(l),this.bolts.push({line:l,life:.22})}superFx(t,e){const n=this.tops[t];if(!n)return;const s=n.group.position;e.forEach((r,a)=>{const o=De[r].color,l=pe(Math.min(Ee,Math.hypot(s.x,s.z))),c=mM(r,(h,u)=>pe(Math.min(Ee,Math.hypot(s.x+h,s.z+u)))-l);c.group.position.set(s.x,l,s.z),c.group.rotation.y=a*.5,c.update(0,0,()=>{}),this.scene.add(c.group),this.constructs.push({c,i:t,t:0,el:r}),this.shock(s.x,s.y+.3,s.z,8+a*2,.4,o),this.burstSparks(s.x,s.y+.6,s.z,130,22,o)}),this.trauma=1,this.fovKick=Math.max(this.fovKick,10)}pulseFx(t,e){const n=De[t.element].color,s=pe(Math.min(Ee,Math.hypot(t.x,t.y)))+.3;if(t.element==="plasma"&&t.targets.length){const r=e.tops[t.targets[0]],a=this.constructs.find(o=>o.i===t.i&&o.el==="plasma"&&o.t<.1);r&&a&&a.c.group.position.set(r.x,pe(Math.min(Ee,Math.hypot(r.x,r.y))),r.y)}this.shock(t.x,s,t.y,t.radius*1.9,.3,n);for(const r of t.targets){const a=e.tops[r];a&&(this.bolt(t.x,t.y,a.x,a.y,n),this.burstSparks(a.x,pe(Math.min(Ee,Math.hypot(a.x,a.y)))+.7,a.y,22,9,n),this.tops[r]&&(this.tops[r].flash=1))}this.trauma=Math.min(1,this.trauma+.25)}reactFx(t,e,n){const s=pe(Math.min(Ee,Math.hypot(t,e)))+.7;this.shock(t,s,e,9,.45,n),this.shock(t,s+.4,e,5,.3,16777215),this.burstSparks(t,s,e,120,19,n),this.trauma=Math.min(1,this.trauma+.7),this.fovKick=Math.max(this.fovKick,6)}flashTop(t,e,n){this.shock(t,e,n,4.5,.3,16767408)}crackTop(t,e){const n=this.tops[t];if(!n||n.bursted)return;n.setStage(e);const s=n.group.position,r=n.shed(e,this.scene);Math.hypot(s.x,s.z);for(const a of r){const o=Math.atan2(s.z,s.x)+(Math.random()-.5)*2.6,l=5+Math.random()*8;this.pieces.push({obj:a,v:new P(Math.cos(o)*l+n.vx*.5,6+Math.random()*6,Math.sin(o)*l+n.vz*.5),w:new P(Math.random()*18-9,Math.random()*18-9,Math.random()*18-9),life:5,flat:e===2,hot:1})}this.flashTop(s.x,s.y+.6,s.z),this.burstSparks(s.x,s.y+.6,s.z,46,14,16756832),this.trauma=Math.min(1,this.trauma+.6)}dropLoot(t,e,n){n.forEach((s,r)=>{const a=r/Math.max(1,n.length)*Math.PI*2+.6,o=n.length>1?1.8:0,l=t+Math.cos(a)*o,c=e+Math.sin(a)*o,h=pe(Math.min(Ee,Math.hypot(l,c))),u=new Gh(new Fl({map:pu(),color:s,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));u.scale.setScalar(3.2),u.position.set(l,h+1.1,c);const f=new Mt(new Ji(.5),new Se({color:1052950,emissive:s,emissiveIntensity:2.2,metalness:.7,roughness:.2,flatShading:!0}));f.scale.set(.75,1.25,.75),f.position.set(l,h+1.1,c),this.scene.add(u,f),this.beams.push({beam:u,gem:f,life:0}),this.shock(l,h+.2,c,3.5,.5,s);const d=new Ft(s);for(let g=0;g<40;g++){const v=Math.random()*Math.PI*2,m=2+Math.random()*7;this.spark(l,h+.5,c,Math.cos(v)*m,5+Math.random()*10,Math.sin(v)*m,.5+Math.random()*.6,d.r,d.g,d.b)}})}puff(t,e,n,s,r,a,o,l,c){if(this.puffs.length>=60){const u=this.puffs.shift();this.scene.remove(u.m)}const h=new Mt(this.puffGeo,c?this.dustMat:this.smokeMat);h.position.set(t,e,n),h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),h.scale.setScalar(.01),this.scene.add(h),this.puffs.push({m:h,v:new P(s,r,a),w:new P(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2),life:l,max:l,s0:o})}floorChips(t,e,n,s,r,a){for(let o=0;o<s;o++){const l=r?Math.atan2(r[1],r[0])+(Math.random()-.5)*1.6:Math.random()*Math.PI*2;this.chip(t,e+.2,n,Math.cos(l),Math.sin(l),a,this.stoneMat)}}brakeFx(t){const e=pe(Math.min(Ee,Math.hypot(t.x,t.y))),n=Math.min(1,t.speed/22);if(t.phase==="stop"){const s=[t.dx,t.dy];this.shock(t.x,e+.15,t.y,2+n*1.5,.3,16769712);for(let r=0;r<40+n*50;r++){const a=Math.atan2(s[1],s[0])+(Math.random()-.5)*1.2,o=6+Math.random()*(10+n*14);this.spark(t.x,e+.15,t.y,Math.cos(a)*o,.5+Math.random()*3.5,Math.sin(a)*o,.15+Math.random()*.3,1,.75+Math.random()*.25,.35,8)}this.floorChips(t.x,e,t.y,5+Math.floor(n*6),s,.4+n);for(let r=0;r<4;r++)this.puff(t.x+s[0]*r*.4,e+.3,t.y+s[1]*r*.4,s[0]*4+(Math.random()-.5)*3,.8+Math.random(),s[1]*4+(Math.random()-.5)*3,.9+Math.random()*.5,.6+Math.random()*.4,!0);this.trauma=Math.min(1,this.trauma+.25+n*.3),this.shoveV.x+=s[0]*12*n,this.shoveV.z+=s[1]*12*n}else{this.floorChips(t.x,e,t.y,6,[-t.dx,-t.dy],.9);for(let s=0;s<50;s++){const r=s*.32,a=1+Math.random()*3;this.spark(t.x-t.dx*r,e+.5,t.y-t.dy*r,-t.dx*a,.5+Math.random(),-t.dy*a,.25+Math.random()*.3,.8,.95,1)}for(let s=0;s<40;s++){const r=Math.atan2(-t.dy,-t.dx)+(Math.random()-.5)*.9,a=8+Math.random()*14;this.spark(t.x,e+.2,t.y,Math.cos(r)*a,.5+Math.random()*2,Math.sin(r)*a,.15+Math.random()*.25,1,.9,.6,8)}this.shoveV.x-=t.dx*16,this.shoveV.z-=t.dy*16,this.trauma=Math.min(1,this.trauma+.3),this.fovKick=Math.max(this.fovKick,8)}}jumpFx(t,e){const n=e.tops[t];if(!n)return;const s=pe(Math.min(Ee,Math.hypot(n.x,n.y)));this.floorChips(n.x,s,n.y,7,null,.6);for(let r=0;r<5;r++){const a=Math.random()*Math.PI*2;this.puff(n.x+Math.cos(a)*.5,s+.25,n.y+Math.sin(a)*.5,Math.cos(a)*3.5,.5+Math.random()*.8,Math.sin(a)*3.5,.8+Math.random()*.5,.5+Math.random()*.35,!0)}for(let r=0;r<26;r++){const a=Math.random()*Math.PI*2,o=4+Math.random()*8;this.spark(n.x,s+.2,n.y,Math.cos(a)*o,.3+Math.random()*1.5,Math.sin(a)*o,.14+Math.random()*.2,1,.95,.8,8)}this.trauma=Math.min(1,this.trauma+.12)}landFx(t,e){const n=pe(Math.min(Ee,Math.hypot(t.x,t.y)));this.shock(t.x,n+.2,t.y,t.radius*1.8,.35,16771496),this.burstSparks(t.x,n+.4,t.y,60,13,16769184),this.floorChips(t.x,n,t.y,10+(t.targets.length?4:0),null,1.2);for(let s=0;s<7;s++){const r=s/7*Math.PI*2+Math.random()*.5;this.puff(t.x+Math.cos(r)*.6,n+.3,t.y+Math.sin(r)*.6,Math.cos(r)*5,.8+Math.random(),Math.sin(r)*5,1+Math.random()*.6,.6+Math.random()*.4,!0)}this.trauma=Math.min(1,this.trauma+(t.targets.length?.6:.35)),this.fovKick=Math.max(this.fovKick,5);for(const s of t.targets)this.tops[s]&&(this.tops[s].flash=1)}counterFx(t){const e=pe(Math.min(Ee,Math.hypot(t.x,t.y)));for(let n=0;n<30;n++){const s=n*.3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*2,1+Math.random(),-t.dy*2,.25+Math.random()*.2,1,.8,.3)}this.shock(t.x,e+.3,t.y,5,.35,16760896),this.fovKick=Math.max(this.fovKick,7)}boostFx(t,e){const n=e.tops[t];if(!n)return;const s=Math.hypot(n.vx,n.vy)||1,r=pe(Math.hypot(n.x,n.y))+.4;for(let a=0;a<26;a++){const o=4+Math.random()*10;this.spark(n.x,r,n.y,-n.vx/s*o+(Math.random()-.5)*6,1+Math.random()*4,-n.vy/s*o+(Math.random()-.5)*6,.2+Math.random()*.3,.7,.85,1)}}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.camera.aspect=t/e,this.distScale=Math.max(1.15,1.5/this.camera.aspect),this.camera.updateProjectionMatrix()}setTops(t,e=this.stadium){this.setStadium(e);for(const n of this.tops)this.scene.remove(n.group,n.trail.mesh,n.swing.mesh);for(const n of this.pieces)this.scene.remove(n.obj);this.pieces=[];for(const n of this.puffs)this.scene.remove(n.m);this.puffs=[],this.tops=t.map(n=>new OM(n));for(const n of this.tops)n.smoke=(s,r,a,o,l,c,h,u)=>this.puff(s,r,a,o,l,c,h,u,!1);for(const n of this.tops)n.fx=(s,r,a,o,l,c,h,u,f,d,g)=>this.spark(s,r,a,o,l,c,h,u,f,d,g);for(const n of this.tops)this.scene.add(n.group,n.trail.mesh,n.swing.mesh)}spark(t,e,n,s,r,a,o,l,c,h,u=26){const f=this.sparkNext;this.sparkGrav[f]=u,this.sparkNext=(f+1)%this.sparkCap,this.sparkPos.set([t,e,n],f*3),this.sparkVel.set([s,r,a],f*3),this.sparkBase.set([l,c,h],f*3),this.sparkLife[f]=this.sparkMax[f]=o}shock(t,e,n,s,r,a){const o=this.shocks.reduce((h,u)=>h.life<u.life?h:u);o.life=o.max=r*.55,o.size=s*.75,o.mesh.position.set(t,e+.4,n),o.mesh.material.color.setHex(a),o.mesh.material.rotation=Math.random()*Math.PI,o.mesh.visible=!0;const l=new Ft(a),c=Math.min(110,Math.floor(14+s*8));for(let h=0;h<c;h++){const u=Math.random()*Math.PI*2,f=s/r*(.35+Math.random()*.75),d=.6+Math.random()*.4;this.spark(t+Math.cos(u)*.3,e+Math.random()*.25,n+Math.sin(u)*.3,Math.cos(u)*f,Math.random()*2.2,Math.sin(u)*f,r*(.5+Math.random()*.7),Math.min(1,l.r+(1-d)),Math.min(1,l.g*d+(1-d)),Math.min(1,l.b*d+(1-d)),3)}}hit(t,e,n,s,r,a,o,l=-1){const c=pe(Math.hypot(t,e))+.75;if(l>=0){const S=l===2?16777215:this.tops[l]?.spec.accent??16777215;this.shock(t,c,e,6+r*5,.42,S);for(let M=0;M<60;M++){const x=Math.random()*Math.PI*2,_=6+Math.random()*16;this.spark(t,c,e,Math.cos(x)*_,2+Math.random()*8,Math.sin(x)*_,.3+Math.random()*.4,1,1,1)}this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,4)}const h=this.tops[a],u=this.tops[o],f=this.world?.tops[a],d=this.world?.tops[o];let g=0;if(f&&d){const S=-s,M=n,x=f.spec.radius,_=d.spec.radius;g=(f.vx-d.vx)*S+(f.vy-d.vy)*M+f.spin*x*.15+d.spin*_*.15}const v=g>=0?1:-1,m=Math.min(22,5+Math.abs(g)*.4),p=Math.floor(6+r*46);for(let S=0;S<p;S++){const M=Math.random()<.82?v:-v,x=m*(.35+Math.random()*.75)*(.5+r),_=(Math.random()-.5)*.7,y=-s*M+n*_,w=n*M+s*_,R=Math.random();this.spark(t,c,e,y*x,1.5+Math.random()*6*(.3+r),w*x,.25+Math.random()*.5,1,.55+R*.45,.15+R*.5)}if(r>.4)for(const[S,M]of[[h,-1],[u,1]]){if(!S)continue;const x=1+Math.floor(r*3);for(let _=0;_<x;_++)this.chip(t,c,e,n*M,s*M,r,_%2?S.chipMetal:S.chipPaint)}if(r>.35&&this.shock(t,c,e,1.5+r*4.5,.32,16769712),this.trauma=Math.min(1,this.trauma+r*.75),this.tops[a]&&(this.tops[a].flash=r),this.tops[o]&&(this.tops[o].flash=r),this.tops[a]?.recoil(-n,-s,r),this.tops[o]?.recoil(n,s,r),r>.3){const S=(r-.2)*22;this.shoveV.x+=n*S,this.shoveV.z+=s*S}}chipGeo=new Va(.16);chip(t,e,n,s,r,a,o){if(this.chips.length>=70){const d=this.chips.shift();d.ttl=0}const l=new Mt(this.chipGeo,o);l.castShadow=!0;const c=.7+Math.random()*.9;l.scale.set(c,c*(.5+Math.random()*.5),c),l.position.set(t,e,n),l.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(l);const h=Math.atan2(r,s)+(Math.random()-.5)*1.8,u=4+Math.random()*7*(.5+a),f={obj:l,v:new P(Math.cos(h)*u,4+Math.random()*6,Math.sin(h)*u),w:new P(Math.random()*24-12,Math.random()*24-12,Math.random()*24-12),life:2,ttl:2.4+Math.random()*1.2};this.pieces.push(f),this.chips.push(f)}finisherFx(t,e,n){const s=this.tops[e],r=this.tops[t];if(!s||!r)return;const a=s.group.position,o=r.group.position,l=a.x-o.x,c=a.z-o.z,h=Math.hypot(l,c)||1,u=l/h,f=c/h;for(let d=0;d<14;d++)this.chip(a.x,a.y+.8,a.z,u+(Math.random()-.5)*.8,f+(Math.random()-.5)*.8,1,d%2?s.chipMetal:s.chipPaint);for(let d=0;d<4;d++)this.chip(a.x,a.y+.8,a.z,u,f,1,d%2?r.chipMetal:r.chipPaint);for(let d=0;d<70;d++){const g=Math.atan2(f,u)+(Math.random()-.5)*1.5,v=8+Math.random()*20;this.spark(a.x,a.y+.8,a.z,Math.cos(g)*v,1+Math.random()*7,Math.sin(g)*v,.3+Math.random()*.5,1,.8+Math.random()*.2,.5+Math.random()*.5)}s.hot=1,s.recoil(u,f,1),this.shoveV.x+=u*34,this.shoveV.z+=f*34,this.trauma=Math.min(1,this.trauma+.8),this.finDur=n?1.2:.7,this.finT=this.finDur,this.finTarget=e}rimHit(t,e,n){const s=Mn+.3,r=Math.hypot(t,e)||1;for(let a=0;a<6+n*26;a++){const o=2+Math.random()*8,l=Math.atan2(e,t)+Math.PI+(Math.random()-.5)*2.2;this.spark(t/r*Ee,s,e/r*Ee,Math.cos(l)*o,2+Math.random()*6,Math.sin(l)*o,.2+Math.random()*.35,.6,.8,1)}this.trauma=Math.min(1,this.trauma+n*.35)}burstTop(t){const e=this.tops[t];if(!e||e.bursted)return;e.bursted=!0;const n=e.group.position.clone(),s={tip:.7,disc:1,blade:1.1,core:1.5};pr.forEach((r,a)=>{const o=e.parts[a];if(r==="disc"&&e.discGone)return;this.scene.attach(o);const l=Math.random()*Math.PI*2,c=(4+Math.random()*7)*(s[r]??1);this.pieces.push({obj:o,v:new P(Math.cos(l)*c+e.vx*.7,(r==="tip"?5:7)*(s[r]??1)+Math.random()*5,Math.sin(l)*c+e.vz*.7),w:new P(Math.random()*14-7,(Math.random()-.5)*30,Math.random()*14-7),life:4,flat:r==="disc"||r==="blade",hot:1})});for(let r=0;r<160;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*16;this.spark(n.x,n.y+.7,n.z,Math.cos(a)*o,3+Math.random()*12,Math.sin(a)*o,.4+Math.random()*.7,1,.8,.5)}this.shock(n.x,n.y+.6,n.z,9,.5,16777215),this.trauma=1}ringOut(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.shock(n.x,Mn+.2,n.z,6,.45,16733491),this.trauma=Math.min(1,this.trauma+.6)}setAim(t,e=0,n=0,s=0,r=1){if(this.aim.visible=t,!t)return;const a=Math.hypot(e,n);if(this.aim.position.set(e,pe(a)+.3,n),this.aimArrow.visible=Math.abs(s)>.01&&a>.05,this.aimArrow.visible){const o=-n/a*r*Math.sign(s),l=e/a*r*Math.sign(s),c=1.3+Math.abs(s)*.9;this.aimArrow.position.set(o*c,.02,l*c),this.aimArrow.quaternion.setFromUnitVectors(new P(0,1,0),new P(o,0,l)),this.aimArrow.scale.setScalar(.7+Math.abs(s)*.8)}}simToScreen(t,e){const n=new P(t,pe(Math.min(Ee,Math.hypot(t,e)))+.6,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(n.x+1)/2*s.width,y:s.top+(1-n.y)/2*s.height,behind:n.z>1}}screenToSim(t,e){const n=this.canvas.getBoundingClientRect(),s=new j((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.raycaster.ray.origin,a=this.raycaster.ray.direction;let o=.8,l=0,c=0;for(let h=0;h<5;h++){const u=(o-r.y)/a.y;l=r.x+a.x*u,c=r.z+a.z*u,o=pe(Math.hypot(l,c))}return{x:l,y:c}}frame(t,e,n,s,r=0){this.world=t,t.tops.forEach((_,y)=>{let w=null;if(_.strikeT>0){let R=1e9;t.tops.forEach((E,b)=>{if(b===y||t.teams[b]===t.teams[y]||!E.inPlay||E.out)return;const L=Math.hypot(E.x-_.x,E.y-_.y);L<R&&L>.01&&(R=L,w=[(E.x-_.x)/L,(E.y-_.y)/L])})}this.tops[y]?.update(_,e,n,s,w)});for(const _ of this.tops){if(!_.justLanded)continue;_.justLanded=!1;const y=_.group.position;this.shock(y.x,y.y+.15,y.z,4.5,.35,_.spec.accent),this.burstSparks(y.x,y.y+.3,y.z,46,11,_.spec.accent),this.trauma=Math.min(1,this.trauma+.3)}for(let _=0;_<t.tops.length;_++){const y=t.tops[_],w=this.tops[_];if(!w||!y.inPlay||y.out)continue;const R=w.group.position;if(w.braking&&Math.random()<n*14){const E=w.brakeDir;this.chip(R.x,R.y+.2,R.z,E[0],E[1],.3,this.stoneMat)}if(y.airT>0)for(let E=0;E<3;E++)this.spark(R.x+(Math.random()-.5)*.4,R.y+.2,R.z+(Math.random()-.5)*.4,(Math.random()-.5)*1.5,-1-Math.random()*2,(Math.random()-.5)*1.5,.25+Math.random()*.2,.85,.92,1,4)}this.puffs=this.puffs.filter(_=>{if(_.life-=n,_.life<=0)return this.scene.remove(_.m),!1;const y=_.life/_.max;return _.m.position.addScaledVector(_.v,n),_.v.multiplyScalar(Math.exp(-n*1.6)),_.v.y+=n*.6,_.m.rotation.x+=_.w.x*n,_.m.rotation.y+=_.w.y*n,_.m.scale.setScalar(_.s0*(.5+.7*(1-y))*Math.min(1,y*3.5)*Math.min(1,(1-y)*8+.2)),!0});for(let _=0;_<t.tops.length;_++){const y=t.tops[_],w=this.tops[_];if(!(!w||y.out||!y.inPlay||y.armour>.9)&&Math.random()<(1-y.armour)*n*24){const R=w.group.position,E=Math.random()*Math.PI*2;this.spark(R.x,R.y+.5,R.z,Math.cos(E)*4,3+Math.random()*5,Math.sin(E)*4,.35+Math.random()*.4,1,.5+Math.random()*.35,.2)}}this.constructs=this.constructs.filter(_=>{_.t+=n;const y=this.tops[_.i];if(_.c.follow&&y&&!y.bursted){const w=y.group.position;_.c.group.position.set(w.x,pe(Math.min(Ee,Math.hypot(w.x,w.z))),w.z)}if(_.t<_.c.dur){const w=_.c.group.position;return _.c.update(_.t,n,(R,E,b,L,z,k,G,Y)=>{ui.setHex(Y),this.spark(w.x+R,w.y+E,w.z+b,L,z,k,G,ui.r,ui.g,ui.b,7)}),!0}return this.scene.remove(_.c.group),_.c.group.traverse(w=>{const R=w;R.geometry?.dispose(),R.material?.dispose?.()}),!1}),this.bolts=this.bolts.filter(_=>(_.life-=n,_.line.material.opacity=Math.max(0,_.life/.22),_.life>0?!0:(this.scene.remove(_.line),_.line.geometry.dispose(),!1)));const a=t.stadium.segHp;t.segHp.forEach((_,y)=>{const w=this.segs[y];w&&!w.open&&(w.mat.emissiveIntensity=(1-_/a)*.9)}),t.pillars.forEach((_,y)=>{const w=this.pillarMeshes[y]?.children[0];w&&(w.material.emissiveIntensity=(1-_.hp/t.stadium.pillars[y].hp)*.9)});for(const _ of t.tops){if(!_.onRail||n<=0)continue;const y=Math.hypot(_.vx,_.vy)||1;this.spark(_.x,pe(Math.hypot(_.x,_.y))+.15,_.y,-_.vx/y*6+(Math.random()-.5)*3,1+Math.random()*3,-_.vy/y*6+(Math.random()-.5)*3,.25,.5,.75,1)}this.fovKick=Math.max(0,this.fovKick-n*14);const o=42+this.fovKick;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix());for(let _=0;_<We;_++){if(this.sparkLife[_]<=0)continue;this.sparkLife[_]-=n;const y=_*3;if(this.sparkLife[_]<=0){this.sparkPos[y+1]=-999;continue}this.sparkVel[y+1]-=this.sparkGrav[_]*n,this.sparkPos[y]+=this.sparkVel[y]*n,this.sparkPos[y+1]+=this.sparkVel[y+1]*n,this.sparkPos[y+2]+=this.sparkVel[y+2]*n;const w=this.sparkLife[_]/this.sparkMax[_];this.sparkCol[y]=this.sparkBase[y]*w,this.sparkCol[y+1]=this.sparkBase[y+1]*w*w,this.sparkCol[y+2]=this.sparkBase[y+2]*w*w*w}const l=this.camera.position;for(let _=0;_<We;_++){const y=_*3,w=_*12;if(this.sparkLife[_]<=0){for(let Q=0;Q<4;Q++)this.streakPos[w+Q*3+1]=-999;continue}const R=this.sparkPos[y],E=this.sparkPos[y+1],b=this.sparkPos[y+2],L=this.sparkVel[y],z=this.sparkVel[y+1],k=this.sparkVel[y+2],G=Math.hypot(L,z,k)||1,Y=Math.min(2.6,Math.max(.18,G*.055)),U=L/G,I=z/G,N=k/G,q=l.x-R,et=l.y-E,lt=l.z-b;let ft=I*lt-N*et,Dt=N*q-U*lt,W=U*et-I*q;const it=Math.hypot(ft,Dt,W)||1,st=this.sparkLife[_]/this.sparkMax[_],Z=(.04+.05*Math.min(1,st*1.5))/it;ft*=Z,Dt*=Z,W*=Z;const yt=R-U*Y,kt=E-I*Y,Nt=b-N*Y,$t=.25;this.streakPos.set([R-ft,E-Dt,b-W,R+ft,E+Dt,b+W,yt-ft*$t,kt-Dt*$t,Nt-W*$t,yt+ft*$t,kt+Dt*$t,Nt+W*$t],w),this.streakCol.set([this.sparkCol[y],this.sparkCol[y+1],this.sparkCol[y+2],this.sparkCol[y],this.sparkCol[y+1],this.sparkCol[y+2],0,0,0,0,0,0],w)}this.streaks.geometry.attributes.position.needsUpdate=!0,this.streaks.geometry.attributes.color.needsUpdate=!0,this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(const _ of this.shocks){if(_.life<=0)continue;_.life-=n;const y=1-Math.max(0,_.life)/_.max;_.mesh.scale.setScalar(_.size*(.5+.5*(1-(1-y)*(1-y)))),_.mesh.material.opacity=(1-y)*(1-y),_.life<=0&&(_.mesh.visible=!1)}for(const _ of this.beams){if(_.life+=n,_.beam.material.opacity=Math.min(1,_.life*3)*(.5+.2*Math.sin(_.life*6)),_.beam.position.y=_.gem.position.y,Math.random()<n*16){const y=_.gem.material.emissive,w=Math.random()*Math.PI*2;this.spark(_.gem.position.x+Math.cos(w)*.5,_.gem.position.y-.4,_.gem.position.z+Math.sin(w)*.5,-Math.sin(w)*1.5,2.5+Math.random()*2,Math.cos(w)*1.5,.7,y.r,y.g,y.b,0)}_.gem.rotation.y+=n*3,_.gem.position.y+=Math.sin(_.life*3)*n*.3}for(const _ of this.pieces){_.life-=n,_.v.y-=24*n,_.obj.position.addScaledVector(_.v,n);const y=_.obj.position,w=Math.hypot(y.x,y.z),R=pe(w)+.15,E=y.y<=R+.02&&w<Ee;if(_.hot&&_.hot>0&&this.fx3<40&&(_.hot=Math.max(0,_.hot-n*.6),Math.random()<n*40*_.hot&&(this.fx3++,this.spark(y.x,y.y,y.z,-_.v.x*.15+(Math.random()-.5)*3,Math.random()*2,-_.v.z*.15+(Math.random()-.5)*3,.2+Math.random()*.2,1,.6,.2,14))),y.y<R&&_.v.y<0&&w<Ee){const b=-_.v.y;if(y.y=R,_.v.y*=-.42,_.v.x*=.72,_.v.z*=.72,_.w.multiplyScalar(.6),_.bounces=(_.bounces??0)+1,b>4){const L=Math.min(10,Math.floor(b*.8));for(let z=0;z<L;z++){const k=Math.random()*6.28;this.spark(y.x,R+.1,y.z,Math.cos(k)*(2+Math.random()*5)+_.v.x*.4,1+Math.random()*b*.35,Math.sin(k)*(2+Math.random()*5)+_.v.z*.4,.2+Math.random()*.25,1,.7,.3,20)}this.trauma=Math.min(1,this.trauma+Math.min(.12,b*.01))}}if(E){const b=Math.exp(-n*2.2);if(_.v.x*=b,_.v.z*=b,_.w.multiplyScalar(Math.exp(-n*2.5)),_.flat&&(_.bounces??0)>=2){const L=_.obj.rotation,z=1-Math.exp(-n*7);L.x+=(Math.round(L.x/Math.PI)*Math.PI-L.x)*z,L.z+=(Math.round(L.z/Math.PI)*Math.PI-L.z)*z}}_.obj.rotation.x+=_.w.x*n,_.obj.rotation.y+=_.w.y*n,_.obj.rotation.z+=_.w.z*n}this.fx3=0;for(const _ of this.pieces)_.ttl!==void 0&&(_.ttl-=n,_.ttl<.4&&_.obj.scale.multiplyScalar(Math.max(.01,_.ttl/.4)**.2),_.ttl<=0&&(_.obj.position.y=-999));if(this.chips=this.chips.filter(_=>(_.ttl??0)>0),this.pieces.length){const _=this.pieces.filter(y=>y.obj.position.y<-40);if(_.length){for(const y of _)this.scene.remove(y.obj);this.pieces=this.pieces.filter(y=>y.obj.position.y>=-40)}}const c=t.tops.filter(_=>_.inPlay&&!_.out);let h=0,u=0,f=1;if(c.length){for(const _ of c)h+=_.x/c.length,u+=_.y/c.length;if(c.length===2){const _=Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y);f=.7+.3*Math.min(1,_/11)}}const d=1-Math.exp(-n*3),g=Math.max(0,1-11/Ee),v=t.tops[r],m=v&&v.inPlay&&!v.out?v:null,p=h*.45*(1-g)+(m?m.x:h)*g,S=u*.45*(1-g)+(m?m.y:u)*g;this.focus.x+=(p-this.focus.x)*d,this.focus.z+=(S-this.focus.z)*d,this.zoom+=(f-this.zoom)*d,this.finT>0&&(this.finT=Math.max(0,this.finT-n));{const _=1-this.finT/this.finDur,w=(this.finT>0?1:0)?Math.min(1,_/.18)*(_<.55?1:Math.max(0,1-(_-.55)/.45)):0;this.finEnv+=(w-this.finEnv)*(1-Math.exp(-n*14));const R=t.tops[this.finTarget];this.finEnv>.001&&R&&(this.focus.x+=(R.x-this.focus.x)*this.finEnv*.25,this.focus.z+=(R.y-this.focus.z)*this.finEnv*.25)}this.shoveV.x+=(-12*12*this.shove.x-2*12*this.shoveV.x)*n,this.shoveV.z+=(-12*12*this.shove.z-2*12*this.shoveV.z)*n,this.shove.x+=this.shoveV.x*n,this.shove.z+=this.shoveV.z*n,this.trauma=Math.max(0,this.trauma-n*2.2);const M=this.trauma*this.trauma*.9,x=this.distScale*this.zoom*Math.min(Ee,11.5)/10*(1-.34*this.finEnv);if(this.camera.position.set(this.focus.x+this.shove.x+(Math.random()-.5)*M,20.5*x+(Math.random()-.5)*M,this.focus.z+this.shove.z+13.5*x+(Math.random()-.5)*M),this.camera.lookAt(this.focus.x+this.shove.x*.4,.9,this.focus.z+this.shove.z*.4+.9),this.debugCam){const _=this.debugCam;this.camera.position.set(_[0],_[1],_[2]),this.camera.lookAt(_[3],_[4],_[5])}this.composer.render()}}const ia=i=>"#"+i.toString(16).padStart(6,"0");class BM{constructor(t,e,n){this.renderer=t,this.save=e,this.cb=n;const s=this.scene;s.background=new Ft(526864),s.fog=new Ba(526864,14,40),s.environment=new Ma(t).fromScene(new Xd,.04).texture,s.environmentIntensity=.5;const r=new Gl(16777215,1.5);r.position.set(3.5,7,4.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const a=r.shadow.camera;a.left=a.bottom=-3.5,a.right=a.top=3.5,a.near=1,a.far=20,r.shadow.bias=-3e-4,r.shadow.normalBias=.02;const o=new Is(8368383,16,30,2);o.position.set(-5,2.5,2),this.backLight.position.set(0,3,-5),s.add(r,o,this.backLight,new Vd(10466559,395018,.2));const l=new Se({color:1777708,metalness:.9,roughness:.3}),c=new Mt(new ce(1.75,1.95,.3,96),l);c.position.y=-.15,c.receiveShadow=!0;const h=new Mt(new me(1.76,.022,8,128),this.ringMat);h.rotation.x=Math.PI/2,h.position.y=.005;const u=new Mt(new me(1.1,.008,6,96),new Ae({color:3359071}));u.rotation.x=Math.PI/2,u.position.y=.004;const f=new Mt(new vr(40,64),new Se({color:658708,metalness:.5,roughness:.55}));f.rotation.x=-Math.PI/2,f.position.y=-.3,f.receiveShadow=!0,s.add(c,h,u,f,this.holder),this.composer=new Yd(t),this.composer.addPass(new Kd(s,this.camera)),this.composer.addPass(new Yi(new j(1,1),.22,.35,.96)),this.composer.addPass(new $d),this.el=document.createElement("div"),this.el.id="ws",this.el.className="hidden",this.tier=e.tier,this.el.innerHTML=`
      <header><h1>SPINFORGE</h1><span>FORGE</span></header>
      <button id="wsGear" aria-label="Settings">${mp()}</button>
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
      <footer><button id="wsExplode">EXPLODED VIEW</button><button id="wsBattle" class="go">BATTLE</button></footer>`,document.body.appendChild(this.el),this.q("#wsGear").addEventListener("click",()=>n.onSettings()),this.wire(),this.rebuild(),this.renderThumbs(),this.renderAll(),this.resize(),window.addEventListener("resize",()=>this.resize())}active=!1;perTeam=1;tier=1;time=0;scene=new ya;camera=new qe(30,1,.1,100);composer;holder=new Wt;model=null;ringMat=new Ae({color:16777215});backLight=new Is(16777215,18,30,2);exploded=!1;explode=0;drop={tip:0,disc:0,blade:0,core:0};slot="blade";hover=null;sel=null;sort="power";bulk="off";bulkMax=0;yaw=.6;pitch=.42;dragging=!1;distScale=1;thumbs={};el;q(t){return this.el.querySelector(t)}show(t){this.active=t,this.el.classList.toggle("hidden",!t),t&&this.resize()}refresh(){this.tier=Math.min(this.tier,this.save.tier),this.rebuild(),this.renderAll()}wire(){this.q("#wsTabs").addEventListener("click",a=>{const o=a.target.dataset.slot;o&&(this.slot=o,this.hover=null,this.sel=null,this.renderAll())}),this.q("#wsTools").addEventListener("click",a=>{const o=a.target.closest("[data-tool]")?.dataset.tool;if(o){if(o==="sort")this.sort=this.sort==="power"?"rarity":this.sort==="rarity"?"newest":"power";else if(o==="bulk")this.bulk=this.bulk==="off"?"pick":"off";else if(o==="step")this.bulkMax=(this.bulkMax+Number(a.target.closest("[data-d]").dataset.d)+4)%4;else if(o==="ask")this.bulk="confirm";else if(o==="no")this.bulk="off";else if(o==="yes"){qf(this.save,this.bulkMax),this.bulk="off",this.sel=null,this.hover=null,this.changed(!1);return}this.renderAll()}});const t=this.q("#wsCards");t.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-act]"),c=o.closest(".ws-card")?.dataset.uid;if(c){if(l){const h=l.dataset.act;h==="salv"?(Vu(this.save,c),this.sel=null,this.hover=null):h==="fit"?(this.save.equipped[this.slot]=c,this.sel=null,this.hover=null,this.slot in this.drop&&(this.drop[this.slot]=1)):h==="temper"?Gf(this.save,c):h==="reroll"&&Vf(this.save,c,Number(l.dataset.i),Math.random),this.changed(!1);return}this.sel=this.sel===c?null:c,this.renderAll()}}),t.addEventListener("mouseover",a=>{const o=a.target.closest(".ws-card")?.dataset.uid??null;o!==this.hover&&(this.hover=o,this.renderStats())}),t.addEventListener("mouseleave",()=>{this.hover=null,this.renderStats()});const e=(a,o)=>this.q(a).addEventListener("click",l=>{const c=l.target.dataset.v;c!==void 0&&(this.save[o]=Number(c),this.changed(!0))});e("#wsPaint","paint"),e("#wsGlow","glow"),this.q("#wsMetal").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.metal=o,this.changed(!0))}),this.q("#wsSpin").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.spinDir=o==="-1"?-1:1,this.changed(!1))}),this.q("#wsSetup").addEventListener("click",a=>{const o=a.target.closest("[data-step]");if(!o)return;const l=Number(o.dataset.d);o.dataset.step==="mode"?this.perTeam=Math.max(1,Math.min(5,this.perTeam+l)):this.tier=Math.max(1,Math.min(this.save.tier,this.tier+l)),this.renderAll()}),this.q("#wsExplode").addEventListener("click",()=>{this.exploded=!this.exploded,this.q("#wsExplode").textContent=this.exploded?"ASSEMBLE":"EXPLODED VIEW"}),this.q("#wsBattle").addEventListener("click",()=>this.cb.onBattle());const n=this.renderer.domElement;let s=0,r=0;n.addEventListener("pointerdown",a=>{this.active&&(this.dragging=!0,s=a.clientX,r=a.clientY)}),window.addEventListener("pointermove",a=>{!this.active||!this.dragging||(this.yaw+=(a.clientX-s)*.01,this.pitch=Math.max(.08,Math.min(1.25,this.pitch+(a.clientY-r)*.006)),s=a.clientX,r=a.clientY)}),window.addEventListener("pointerup",()=>this.dragging=!1)}changed(t){this.rebuild(),t&&this.renderThumbs(),this.renderAll(),this.cb.onChange()}rebuild(){this.model&&(this.holder.remove(this.model.root),fu(this.model.root));const t=Yo(this.save);this.model=tf({blade:t.blade,disc:t.disc,tip:t.tip,core:t.core,paint:t.paint,glow:t.glow,metal:t.metal}),this.holder.add(this.model.root),this.ringMat.color.setHex(t.glow),this.backLight.color.setHex(t.paint),this.el.style.setProperty("--glow",ia(t.glow))}renderThumbs(){const t=this.renderer,e=144,n=new ya;n.background=new Ft(856345),n.environment=this.scene.environment;const s=new Gl(16777215,1.4);n.environmentIntensity=.55,s.position.set(2,5,3),n.add(s);const r=new qe(26,1,.05,50),a=jd(this.save),o=t.getSize(new j),l=t.getPixelRatio();t.setPixelRatio(1),t.setSize(e,e,!1);const c=new bi,h=new Ei;for(const u of Wi){const f=u.slot==="launcher"?PM(u.id,a):u.slot==="reactor"?CM(u.id):Qd(u.slot,u.id,a);n.add(f),c.setFromObject(f).getBoundingSphere(h);const d=h.radius/Math.sin(13*Math.PI/180);r.position.copy(h.center).add(new P(.3,u.slot==="blade"||u.slot==="disc"||u.slot==="reactor"?.95:.5,.5).normalize().multiplyScalar(d*1.02)),r.lookAt(h.center),t.render(n,r),this.thumbs[u.id]=t.domElement.toDataURL("image/png"),n.remove(f),fu(f)}t.setPixelRatio(l),t.setSize(o.x,o.y,!1)}resize(){const t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.composer.setSize(e,n),this.camera.aspect=e/n,this.distScale=Math.max(1,.85/this.camera.aspect),e<900&&n>e?(this.distScale=Math.max(1.9,1.2/this.camera.aspect),this.camera.setViewOffset(e,n,0,n*.02,e,n)):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}frame(t){if(this.time+=t,this.model?.shift(Math.max(0,Math.min(1,.5-.9*Math.cos(this.time*1.4)))),this.dragging||(this.yaw+=t*.4),this.holder.rotation.y=this.yaw,this.explode+=((this.exploded?1:0)-this.explode)*(1-Math.exp(-t*7)),this.model)for(const s of pr){const r=this.model.parts[s],a=this.drop[s]=Math.max(0,this.drop[s]-t*2.6);r.position.y=mr[s]+(LM[s]-mr[s])*this.explode+a*a*1.5,r.rotation.y=a*a*2.5;const o=this.slot===s&&this.explode>.5?1.05:1;r.scale.setScalar(o+.1*Math.sin(a*Math.PI))}const e=.55+this.explode*.95,n=(6.8+this.explode*2.6)*this.distScale;this.camera.position.set(0,e+Math.sin(this.pitch)*n,Math.cos(this.pitch)*n),this.camera.lookAt(0,e,0),this.composer.render()}renderAll(){const t=this.save;this.q("#wsTabs").innerHTML=$i.map(l=>`<button data-slot="${l}" class="${l===this.slot?"on":""}">${Tu[l]}</button>`).join("");const e=t.equipped[this.slot],n=Xf(t,t.items.filter(l=>Fn(l.part).slot===this.slot),this.sort,e);this.sel&&!n.some(l=>l.uid===this.sel)&&(this.sel=null);const s=this.q("#wsCards"),r=s.scrollTop;s.innerHTML=n.map(l=>{const c=_i[l.rarity],h=l.uid===e,u=l.uid===this.sel,f=l.affixes.length?l.affixes.map(g=>`<span class="af">${Ou(g)}</span>`).join(""):`<p>${Fn(l.part).blurb}</p>`,d=h?"<em>FITTED</em>":"";return`
        <div class="ws-card ${h?"on":""} ${u?"open":""}" data-uid="${l.uid}" style="--rc:${ia(c.color)}">
          <img src="${this.thumbs[l.part]??""}" alt="" />
          <div class="ws-main"><b style="color:${ia(c.color)}">${Nu(l)}</b><span class="lv">${c.name.toUpperCase()} · LEVEL ${l.level}</span>${f}${d}</div>
          ${u?this.detail(l,h,t.items.find(g=>g.uid===e)):""}
        </div>`}).join(""),s.scrollTop=r,this.renderTools();const a=ir(t);this.q("#wsName").textContent=Cu(Yo(t)),this.q("#wsType").textContent=`${zf(ja(a))} TYPE  ·  ${bu[a.ability]}  ·  ${a.elements.map(l=>De[l].super.name).join(" + ")}`,this.q("#wsMeta").textContent=`GEAR ${Zf(t)}  ·  SCRAP ${t.scrap}  ·  ${t.items.length} PARTS`,this.q("#wsMode").textContent=`${this.perTeam} V ${this.perTeam}`,this.q("#wsTier").textContent=`TIER ${this.tier}${Wu(this.tier)?" · BOSS":""}`,this.q("#wsSpin").innerHTML=[[1,"RIGHT"],[-1,"LEFT"]].map(([l,c])=>`<button data-v="${l}" class="${t.spinDir===l?"on":""}">${c}</button>`).join("");const o=(l,c)=>l.map(h=>`<button data-v="${h}" class="${h===c?"on":""}" style="background:${ia(h)}"></button>`).join("");this.q("#wsPaint").innerHTML=o(wu,t.paint),this.q("#wsGlow").innerHTML=o(Au,t.glow),this.q("#wsMetal").innerHTML=Ru.map(l=>`<button data-v="${l}" class="${t.metal===l?"on":""}">${Wl[l].name.toUpperCase()}</button>`).join(""),this.renderStats()}detail(t,e,n){const s=this.save,r=Wf(t,e?void 0:n),a=r.rows.map(d=>{const g=t.affixes.findIndex(M=>M.key===d.key),v=d.diff>0?"up":d.diff<0?"down":"",m=e?`+${d.item}%`:`${d.now?"+"+d.now+"%":"-"} → ${d.item?"+"+d.item+"%":"-"}`,p=!e&&d.diff?`<i class="${v}">${d.diff>0?"+":""}${d.diff}</i>`:"",S=g<0?"":`<button class="ws-act ws-re" data-act="reroll" data-i="${g}" ${s.scrap<qo(t)?"disabled":""} aria-label="Reroll ${d.label}">REROLL ${qo(t)}</button>`;return`<div class="ws-cmp"><span class="k">${d.label}</span><span class="v">${m}</span>${p}${S}</div>`}).join(""),o=e?"":`<div class="ws-cmp"><span class="k">Power</span><span class="v">${xi(t)}</span><i class="${r.power>0?"up":r.power<0?"down":""}">${r.power>0?"+":""}${r.power}</i></div>`,l=t.level>=Fu(s),c=Bu(t),h=`<button class="ws-act" data-act="temper" ${l||s.scrap<c?"disabled":""}>${l?"MAX LEVEL "+t.level:`TEMPER L${t.level+1} · ${c}`}</button>`,u=e?"":'<button class="ws-act go" data-act="fit">FIT</button>',f=e?"":`<button class="ws-act" data-act="salv">SALVAGE +${Xo(t)}</button>`;return`<div class="ws-detail">${a||'<div class="ws-cmp"><span class="k">No stat rolls</span></div>'}${o}<div class="ws-acts">${u}${h}${f}</div></div>`}renderTools(){const t=this.save,e=ku(t,this.bulkMax),n=e.reduce((a,o)=>a+Xo(o),0),s=_i.slice(0,4).map(a=>a.name.toUpperCase());let r="";this.bulk==="pick"?r=`<div class="ws-bulk"><div class="ws-step"><button data-tool="step" data-d="-1">◀</button><span>UP TO ${s[this.bulkMax]}</span><button data-tool="step" data-d="1">▶</button></div>
        <button class="ws-act" data-tool="ask" ${e.length?"":"disabled"}>SALVAGE ${e.length} · +${n}</button><small>Fitted parts are never salvaged. All slots.</small></div>`:this.bulk==="confirm"&&(r=`<div class="ws-bulk"><small>Salvage ${e.length} parts up to ${s[this.bulkMax]} for ${n} scrap? This cannot be undone.</small>
        <div class="ws-acts"><button class="ws-act go" data-tool="yes">YES, SALVAGE</button><button class="ws-act" data-tool="no">CANCEL</button></div></div>`),this.q("#wsTools").innerHTML=`<div class="ws-acts"><button class="ws-act" data-tool="sort">SORT: ${this.sort.toUpperCase()}</button><button class="ws-act ${this.bulk==="off"?"":"on"}" data-tool="bulk">BULK SALVAGE</button></div>${r}`}renderStats(){const t=this.save,e=ja(ir(t)),n=this.hover??this.sel,r=n&&n!==t.equipped[this.slot]&&t.items.some(o=>o.uid===n)?ja(ir({...t,equipped:{...t.equipped,[this.slot]:n}})):e,a=o=>Math.min(100,6+o*94);this.q("#wsStats").innerHTML=ga.map(o=>{const l=a(e[o]),c=a(r[o]),h=Math.round((r[o]-e[o])*100),u=h===0?"":`<i class="${h>0?"up":"down"}">${h>0?"+":""}${h}</i>`,f=h===0?"":`<span class="${h>0?"up":"down"}" style="width:${Math.max(l,c)}%"></span>`;return`<div class="ws-stat"><label>${Bf[o]}${u}</label><div class="ws-bar">${f}<span class="cur" style="width:${Math.min(l,c)}%"></span></div></div>`}).join("")}}const Qt=0,sa=i=>{try{navigator.vibrate?.(i)}catch{}};{const i=document.createElement("style");i.textContent=`
#arrows{position:fixed;inset:0;pointer-events:none;z-index:5}
#arrows i{position:absolute;left:0;top:0;width:0;height:0;margin:-9px 0 0 -9px;border-left:18px solid var(--c);border-top:9px solid transparent;border-bottom:9px solid transparent;filter:drop-shadow(0 0 6px var(--c));opacity:.9}
#combo{position:fixed;left:50%;bottom:74px;transform:translateX(-50%);display:flex;gap:6px;align-items:center;pointer-events:none;z-index:5;font:700 10px/1 system-ui,sans-serif;letter-spacing:.12em;color:#fff}
body.touch #combo{bottom:auto;top:92px}
#combo i{width:22px;height:5px;border-radius:3px;background:rgba(255,255,255,.16);transition:background .12s,box-shadow .12s}
#combo i.on{background:var(--me,#ff7a33);box-shadow:0 0 10px var(--me,#ff7a33)}
#combo.full i{background:#fff;box-shadow:0 0 14px #fff}
#combo span{opacity:0;transition:opacity .12s}
#combo.full span{opacity:1}`,document.head.append(i);const t=document.createElement("div");t.id="arrows";const e=document.createElement("div");e.id="combo",e.innerHTML="<i></i><i></i><i></i><span>FINISHER</span>",t.style.display=e.style.display="none",document.body.append(t,e)}const ef="spinforge.save.v1",_e=i=>document.getElementById(i),Us=i=>"#"+i.toString(16).padStart(6,"0"),kM=i=>i[Math.floor(Math.random()*i.length)],yr=_e("game"),ie=new FM(yr),ee=new vp,ql=new URLSearchParams(location.search),Si=ql.has("demo");function zM(){try{return Hc(JSON.parse(localStorage.getItem(ef)??"null"))}catch{return Hc(null)}}function nf(){try{localStorage.setItem(ef,JSON.stringify(Je))}catch{}}const Je=zM();let tn=null,Ot,Yl=null,wi="workshop",yc=!1;const HM=gp(()=>{ee.start(),ee.strike()});ie.applyQuality(Pe.quality);Da(()=>ie.applyQuality(Pe.quality));const $n=new BM(ie.renderer,Je,{onChange:nf,onBattle:()=>Ra("new"),onSettings:HM});Si&&ql.get("demo")&&($n.perTeam=Math.max(1,Math.min(5,Number(ql.get("demo"))||1)));const Zi=document.createElement("div");Zi.id="endbar";Zi.className="hidden";document.body.appendChild(Zi);Zi.addEventListener("click",i=>{const t=i.target.dataset.a;t==="again"&&Ra("again"),t==="next"&&Ra("next"),t==="shop"&&bc("workshop")});const Sc=document.createElement("div");Sc.id="cds";Sc.innerHTML='<div class="cd"><i id="cdStrike"></i><span>STRIKE</span><small>CLICK</small></div><div class="cd"><i id="cdBoost"></i><span>BOOST</span><small>SHIFT</small></div>';_e("hud").appendChild(Sc);const GM=_e("cdStrike"),VM=_e("cdBoost"),hn=cp({mainDown:()=>{wi==="battle"&&(Ot.world.tops[Qt].inPlay?qa=!0:of())},mainUp:()=>lf(),boost:()=>Sr=!0,ability:()=>Xa=!0,super:()=>Ya=!0}),yn=new Set;let Wa=!1,Kn={x:0,y:3},un=0,ti=!1,gr=0,Xa=!1,Sr=!1,qa=!1,Ya=!1,wa=null,sf=[],nr=0,an=0,gi=0,Aa=performance.now(),Fo=0,fa=0,mu="";function bc(i){wi=i,$n.show(i==="workshop"),i==="workshop"&&$n.refresh(),_e("hud").classList.toggle("hidden",i!=="battle"),Zi.classList.add("hidden"),hn.show(i==="battle"),window.__sfBusy=i==="battle";for(const t of["arrows","combo"]){const e=document.getElementById(t);e&&(e.style.display=i==="battle"?"":"none")}i==="workshop"?(ee.setHum(0,0,!1),ee.setHum(1,0,!1)):ie.resize()}function Ra(i){if(ee.start(),i==="next"&&($n.tier=Math.min(Je.tier,$n.tier+1)),i!=="again"||!tn){const t=$n.perTeam,e=$n.tier,n=ap(Math.random,e,t,Je.paint);tn={perTeam:t,tier:e,boss:n.boss,stadium:kM(Ef(t)),specs:[ir(Je),...n.allies,...n.enemies],teams:[...new Array(t).fill(0),...n.enemies.map(()=>1)]}}else tn.specs[Qt]=ir(Je);document.documentElement.style.setProperty("--me",Us(tn.specs[Qt].accent)),document.documentElement.style.setProperty("--foe",Us(tn.specs[tn.perTeam].accent)),Ot=new lp(tn.specs,Math.random()*1e9|0,2,tn.stadium,tn.teams),yc=!1,Yl=null,nr=0,bc("battle")}const rf=()=>{const i=gr/Ot.specs[Qt].chargeTime%2;return i>1?2-i:i};function af(){const i=Math.hypot(Kn.x,Kn.y),t=or(Ot.world.stadium),e=i>t?t/i:1;return{x:Kn.x*e,y:Kn.y*e}}function of(){Wa=!0,!Si&&Ot.phase==="live"&&!Ot.world.tops[Qt].inPlay&&!ti&&(ti=!0,gr=0)}function lf(){if(Wa=!1,ti){ti=!1;const i=af();wa={x:i.x,y:i.y,power:rf(),tilt:un}}}function WM(){ie.setTops(Ot.specs,Ot.stadium),ti=!1,gr=0,wa=null,gi=0,sf=Ot.specs.map(()=>.25+Math.random()*.7),JM()}function XM(i){if(Si)return Eu(i,Qt);const t={sx:0,sy:0,ability:Xa,boost:Sr,strike:qa,super:Ya};if(hn.active)return t.sx=hn.sx,t.sy=hn.sy,t;(yn.has("KeyA")||yn.has("ArrowLeft"))&&(t.sx-=1),(yn.has("KeyD")||yn.has("ArrowRight"))&&(t.sx+=1),(yn.has("KeyW")||yn.has("ArrowUp"))&&(t.sy-=1),(yn.has("KeyS")||yn.has("ArrowDown"))&&(t.sy+=1);const e=i.tops[Qt];if(t.sx===0&&t.sy===0&&e.inPlay){const n=Kn.x-e.x,s=Kn.y-e.y,r=Math.hypot(n,s);r>.5&&(t.sx=n/r,t.sy=s/r)}return t}const Gi=document.createElement("div");Gi.id="od";Gi.innerHTML="<i></i><span></span>";_e("hud").appendChild(Gi);const ki=document.createElement("div");ki.id="banner";_e("hud").appendChild(ki);const pi=document.createElement("div");pi.id="flash";document.body.appendChild(pi);function Bo(i,t,e){ki.textContent=i,ki.style.setProperty("--bc",Us(t)),ki.className="",ki.offsetWidth,ki.className=e?"show big":"show"}function ko(i,t){pi.style.background=Us(i),pi.style.transition="none",pi.style.opacity=String(t),pi.offsetWidth,pi.style.transition="opacity 0.35s ease-out",pi.style.opacity="0"}function di(i){_e("toast").textContent=i,_e("toast").style.opacity="1",fa=1.3}function qM(i){switch(i.type){case"hit":{ie.hit(i.x,i.y,i.nx,i.ny,i.strength,i.a,i.b,i.power),ee.clash(i.strength);const t=i.a===Qt||i.b===Qt;t&&i.strength>.5&&(an=Math.max(an,.02+.05*i.strength)),t&&i.strength>.25&&sa(8+30*i.strength),i.power>=0&&(ee.power(),t&&(an=Math.max(an,.09)),i.power===2&&t?di("CLASH!"):i.power===Qt&&di("POWER HIT"));break}case"break":ie.breakPiece(i.kind,i.index,i.x,i.y),ee.wallBreak(),di(i.kind==="wall"?"WALL DOWN":"PILLAR DOWN");break;case"boost":ie.boostFx(i.i,Ot.world),i.i===Qt&&ie.kick(6),ee.boost();break;case"shift":ee.ability("brace"),i.i===Qt&&di(i.guard?"GUARD FORM":"ATTACK FORM");break;case"strike":ee.strike();break;case"super":{ie.superFx(i.i,i.elements),ee.superFx();for(const t of i.elements)ee.superEl(t);gi=Math.max(gi,i.i===Qt?.6:.35),Bo(i.elements.map(t=>De[t].super.name).join(" + "),De[i.elements[0]].color,!0),ko(De[i.elements[0]].color,.5);break}case"pulse":ie.pulseFx(i,Ot.world),i.targets.length&&ee.zap();break;case"react":ie.reactFx(i.x,i.y,i.color),ee.power(),Bo(i.team?`TEAM COMBO  ·  ${i.name}`:i.name,i.color,i.team),ko(i.color,i.team?.5:.35),(i.i===Qt||i.by===Qt)&&(an=Math.max(an,.1));break;case"finisher":{const t=i.i===Qt||i.target===Qt;ie.reactFx(i.x,i.y,16777215),ie.finisherFx(i.i,i.target,t),ie.kick(9),ee.power(),ee.wallBreak(),Bo("FINISHER",tn.specs[i.i].accent,!0),gi=Math.max(gi,t?.8:.4),an=Math.max(an,t?.2:.08),t&&sa(70);break}case"crack":i.i===Qt&&sa(90),i.stage<3&&(ie.crackTop(i.i,i.stage),ee.wallBreak(),di(i.i===Qt?i.stage===1?"YOUR ARMOUR BROKE":"YOUR DISC SHEARED OFF":i.stage===1?"ARMOUR BREAK":"DISC BREAK"),i.i===Qt&&ko(16724770,.4));break;case"rim":ie.rimHit(i.x,i.y,i.strength),ee.rim(i.strength);break;case"out":i.reason==="burst"||i.reason==="broken"?(ie.burstTop(i.i),ee.burst(),an=Math.max(an,.1)):i.reason==="ringout"?(ie.ringOut(i.i),ee.ringOut()):ee.spinOut(),Ot.world.over?gi=1.3:i.i===Qt&&di("YOU ARE OUT");break;case"ability":ee.ability(i.kind),i.kind==="spring"&&ie.jumpFx(i.i,Ot.world);break;case"brake":ie.brakeFx(i),i.phase==="stop"?ee.ability("brake"):(ee.release(),i.i===Qt&&ie.kick(8));break;case"land":ie.landFx(i,Ot.world),ee.land(),i.i===Qt&&sa(40);break;case"counter":ie.counterFx(i),ee.strike(),ee.power(),i.i===Qt&&(di("COUNTER"),ie.kick(8));break;case"launch":ee.launch(i.perfect),i.i===Qt&&i.perfect&&di("PERFECT LAUNCH");break}}function YM(){const i=Ot.world,t=i.tops.map(()=>null);if(Ot.phase==="live"){i.tops[Qt].inPlay||(Si?Ot.liveT>.4&&(t[Qt]=kc(Math.random,i)):(Wa&&!ti&&(ti=!0,gr=0),ti&&(gr+=Bt),t[Qt]=wa));for(let s=1;s<i.tops.length;s++)!i.tops[s].inPlay&&Ot.liveT>=sf[s]&&(t[s]=kc(Math.random,i))}wa=null;const e=Ot.phase,n=Ot.tick(i.tops.map((s,r)=>r===Qt?XM(i):Eu(i,r)),t);if(Xa=Sr=qa=Ya=!1,n.forEach(qM),Ot.phase==="countdown"){const s=Math.ceil(Ot.phaseT/va);s!==Fo&&(Fo=s,ee.beep(!1))}else e==="countdown"&&(Fo=0,ee.beep(!0));Ot.phase==="matchEnd"&&!yc&&$M()}function $M(){yc=!0;const i=tn,t=Ot.score[0]>Ot.score[1];let e=[],n=!1;if(Si||(e=Qf(Math.random,i.tier,t,i.boss,i.perTeam).map(o=>jf(Je,o)),t&&(Je.wins++,i.tier===Je.tier&&Je.tier<Zl&&(Je.tier++,n=!0)),nf()),e.length){const o=Ot.world.tops[i.perTeam],l=Math.hypot(o.x,o.y),c=l>i.stadium.radius*.7?i.stadium.radius*.7/l:1;ie.dropLoot(o.x*c,o.y*c,e.map(h=>_i[h.rarity].color)),ee.launch(e.some(h=>h.rarity>=2))}const s=e.map((o,l)=>`
      <div class="lc" style="--rc:${Us(_i[o.rarity].color)};animation-delay:${.25+l*.18}s">
        <b>${Nu(o)}</b><small>${_i[o.rarity].name.toUpperCase()} · LEVEL ${o.level} · ${Tu[Fn(o.part).slot]}</small>
        ${o.affixes.map(c=>`<span>${Ou(c)}</span>`).join("")}
      </div>`).join(""),r=Si?"":e.length?n?`LOOT  ·  TIER ${Je.tier} UNLOCKED`:"LOOT":t?"NO DROPS THIS TIME":"NOTHING SALVAGED",a=t&&i.tier<Je.tier?'<button data-a="next">NEXT TIER</button>':"";Zi.innerHTML=`<div id="lootTitle">${r}</div><div id="loot">${s}</div><div class="btns">${a}<button data-a="again">REMATCH</button><button data-a="shop">FORGE</button></div>`}const KM={ringout:"RING-OUT",burst:"BURST",spinout:"SPIN-OUT",broken:"DESTROYED",time:"TIME"};function ra(i,t=""){if(i!==mu){mu=i;const e=_e("big");e.textContent=i,e.classList.remove("pop"),e.offsetWidth,i&&e.classList.add("pop")}_e("sub").textContent=t}function gu(i){const t=Ot.specs[i].ai?.persona;return t&&!(Ot.world.teams[i]===0&&i===Qt)?` <em class="tag">${tp[t]}</em>`:""}function JM(){for(const i of[0,1]){const t=document.querySelector(i?".panel.right":".panel.left"),e=Ot.specs.map((s,r)=>r).filter(s=>Ot.world.teams[s]===i),n=e.length>1;t.classList.toggle("many",n),t.innerHTML=`<div class="name"><span>${n?i?"ENEMY TEAM":"YOUR TEAM":Ot.specs[e[0]].name+gu(e[0])}</span><span class="pips" id="p${i}"></span></div>`+e.map(s=>`<div class="row" id="r${s}">${n?`<span class="nm">${s===Qt?"YOU":Ot.specs[s].name+gu(s)}</span>`:""}<div class="bar spin"><i id="s${s}"></i></div><div class="bar burst"><i id="b${s}"></i></div><div class="bar arm"><i id="a${s}"></i></div></div>`).join("")}}function vu(i,t,e){i.childElementCount!==e&&(i.innerHTML="<i></i>".repeat(e)),[...i.children].forEach((n,s)=>n.classList.toggle("on",s<t))}function ZM(i){const t=Ot.world;t.tops.forEach((m,p)=>{_e(`s${p}`).style.width=`${(m.inPlay?Math.min(1,En(m)):1)*100}%`,_e(`b${p}`).style.width=`${Math.min(1,m.burst)*100}%`,_e(`a${p}`).style.width=`${m.armour*100}%`,_e(`r${p}`).classList.toggle("out",!!m.out)}),vu(_e("p0"),Ot.score[0],Ot.winsNeeded),vu(_e("p1"),Ot.score[1],Ot.winsNeeded),_e("timer").textContent=String(Math.max(0,Math.ceil(Su-t.time))),_e("round").textContent=`${Ot.stadium.name}  ·  TIER ${tn.tier}  ·  ROUND ${Ot.round}`;const e=t.tops[Qt],n=document.getElementById("combo");for(let m=0;m<3;m++)n.children[m].classList.toggle("on",e.combo>m);n.classList.toggle("full",e.combo>=3);const s=document.getElementById("arrows"),r=innerWidth,a=innerHeight;t.tops.forEach((m,p)=>{let S=s.children[p];S||(S=document.createElement("i"),s.append(S));const M=p!==Qt&&m.inPlay&&!m.out?ie.simToScreen(m.x,m.y):null;if(!M||!M.behind&&M.x>0&&M.x<r&&M.y>0&&M.y<a){S.style.display="none";return}const x=(M.x-r/2)*(M.behind?-1:1),_=(M.y-a/2)*(M.behind?-1:1),y=Math.min((r/2-30)/Math.max(1,Math.abs(x)),(a/2-30)/Math.max(1,Math.abs(_)));S.style.display="",S.style.setProperty("--c",t.teams[p]===t.teams[Qt]?"var(--me)":"var(--foe)"),S.style.transform=`translate(${r/2+x*y}px,${a/2+_*y}px) rotate(${Math.atan2(_,x)}rad)`});for(let m=t.tops.length;m<s.children.length;m++)s.children[m].style.display="none";Ot.phase==="countdown"?ra(String(Math.ceil(Ot.phaseT/va))):Ot.phase==="live"?ra(Ot.liveT<.9?"LAUNCH!":""):t.over&&(Ot.phase==="matchEnd"?ra(Ot.score[0]>Ot.score[1]?"VICTORY":"DEFEAT"):ra(KM[t.over.reason],t.over.winner<0?"DRAW":t.over.winner===0?"ROUND WON":"ROUND LOST")),Zi.classList.toggle("hidden",Ot.phase!=="matchEnd");const o=!Si&&!e.inPlay&&(Ot.phase==="countdown"||Ot.phase==="live");if(_e("launch").classList.toggle("hidden",!o),o&&hn.active&&(Kn={x:hn.sx*or(t.stadium)*.9,y:hn.sy*or(t.stadium)*.9}),o){_e("pw").style.width=`${(ti?rf():0)*100}%`;const m=un===0?"FLAT":(un<0?"◀ ":"")+`${Math.round(Math.abs(un)*100)}%`+(un>0?" ▶":"");_e("tilt").textContent=`TILT  ${m}`;const p=af();ie.setAim(!0,p.x,p.y,un,e.spec.spinDir)}else ie.setAim(!1);const l=Tf(e.spec),c=e.brakeT>0?"RELEASE":bu[e.spec.ability];_e("abName").textContent=c,GM.style.height=`${e.strikeCd/ot.STRIKE_CD*100}%`,VM.style.height=`${e.boostCd/ot.BOOST_CD*100}%`,_e("abFill").style.height=`${e.abilityCd/l*100}%`,_e("ability").classList.toggle("ready",e.inPlay&&!e.out&&e.abilityCd<=0),fa>0&&(fa-=i,fa<=0&&(_e("toast").style.opacity="0")),ee.setHum(0,En(e),e.inPlay&&!e.out);let h=null,u=1/0;t.tops.forEach((m,p)=>{const S=Math.hypot(m.x-e.x,m.y-e.y);t.teams[p]!==0&&On(m)&&S<u&&(u=S,h=m)}),ee.setHum(1,h?En(h):0,!!h);const f=e.spec.elements,d=f.map(m=>De[m].super.name).join(" + "),g=Us(De[f[0]].color),v=e.superMeter>=1;Gi.style.setProperty("--sc",g),Gi.firstElementChild.style.width=`${e.superMeter*100}%`,Gi.lastElementChild.textContent=v?`${d} READY${hn.active?"":"  ·  F"}`:"OVERDRIVE",Gi.classList.toggle("ready",v),hn.update({superMeter:e.superMeter,superName:d,superColor:g,launching:o,ability:c,strike:e.strikeCd/ot.STRIKE_CD,boost:e.boostCd/ot.BOOST_CD,abilityCd:e.abilityCd/l})}let xu=0,_u=0,cf=!1;function hf(i){requestAnimationFrame(hf),cf?Aa=i:uf(i)}function uf(i){const t=Math.max(0,Math.min(.05,(i-Aa)/1e3));if(Aa=i,wi==="workshop"){$n.frame(t);return}Pe.measured||(++xu>40&&(_u+=Math.min(.1,t)),xu>=130&&Qs({quality:fp(_u/90*1e3),measured:!0,qualityAuto:!0}));let e=1;for(gi>0&&(gi-=t,e=.22),an>0&&(an-=t,e=0),nr+=t*e;nr>=Bt;)YM(),nr-=Bt;Ot.world!==Yl&&(Yl=Ot.world,WM()),ZM(t),ie.frame(Ot.world,nr/Bt,t*e,i/1e3,Qt)}window.addEventListener("keydown",i=>{wi==="battle"&&(i.code==="Space"&&(Xa=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(Sr=!0),i.code==="KeyF"&&(Ya=!0),i.code==="KeyQ"&&(un=Math.max(-1,un-.25)),i.code==="KeyE"&&(un=Math.min(1,un+.25)),yn.add(i.code))});window.addEventListener("keyup",i=>yn.delete(i.code));window.addEventListener("blur",()=>{yn.clear(),Wa=!1});yr.addEventListener("mousemove",i=>{wi==="battle"&&!hn.active&&(Kn=ie.screenToSim(i.clientX,i.clientY))});yr.addEventListener("mousedown",i=>{if(!(wi!=="battle"||hn.active)){if(Kn=ie.screenToSim(i.clientX,i.clientY),i.button===2){Sr=!0;return}i.button===0&&(Ot.world.tops[Qt].inPlay&&(qa=!0),of())}});window.addEventListener("mouseup",i=>{i.button===0&&!hn.active&&lf()});yr.addEventListener("wheel",i=>{wi==="battle"&&(un=Math.max(-1,Math.min(1,un+(i.deltaY>0?.25:-.25))),i.preventDefault())},{passive:!1});yr.addEventListener("contextmenu",i=>i.preventDefault());Object.assign(window,{sf:{get match(){return Ot},get mode(){return wi},get fight(){return tn},save:Je,view:ie,workshop:$n,pause(i=!0){cf=i},step(i,t=16.67){for(let e=0;e<i;e++)uf(Aa+t)}}});Si?Ra("new"):bc("workshop");window.__sfReady?.();requestAnimationFrame(hf);
