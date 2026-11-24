(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ea=["thermal","cryo","volt","gale","quake","mag","plasma","gravity","resonance"],pd=["plasma","gravity","resonance"],Te={thermal:{name:"Thermal",color:16734751,status:"HEATED",statusText:"loses spin steadily",super:{name:"MELTDOWN",dur:4,atk:1.6,steer:1.35,start:{radius:4,impulse:9,status:!0},pulse:{every:.5,radius:3.4,spin:1.6,status:!0}}},cryo:{name:"Cryo",color:8379647,status:"CHILLED",statusText:"steers and travels at about half speed",super:{name:"ABSOLUTE ZERO",dur:2.2,guard:.5,start:{radius:6.5,stun:1.4,armour:.08,status:!0}}},volt:{name:"Volt",color:16773226,status:"CHARGED",statusText:"takes extra spin damage from hits",super:{name:"ARC STORM",dur:3,pulse:{every:.35,radius:9,nearest:!0,spin:3.2,stun:.12,status:!0}}},gale:{name:"Gale",color:10354640,status:"LIFTED",statusText:"is thrown much further by hits",super:{name:"CYCLONE",dur:2.2,pull:{radius:8,accel:26},end:{radius:5.5,impulse:27,status:!0}}},quake:{name:"Quake",color:14263386,status:"CRACKED",statusText:"takes extra armour damage",super:{name:"FAULT LINE",dur:1,start:{radius:7,impulse:20,armour:.15,status:!0,wreck:2.6}}},mag:{name:"Mag",color:12946431,status:"PULLED",statusText:"is dragged toward whoever marked it",super:{name:"POLARITY",dur:.7,guard:.6,start:{radius:40,nearest:!0,impulse:-24,status:!0},end:{radius:4,impulse:32}}},plasma:{name:"Plasma",color:16732120,status:"IONISED",statusText:"has its armour eaten away",super:{name:"NOVA LANCE",dur:1.1,atk:1.3,start:{radius:15,nearest:!0,armour:.2,spin:5,impulse:16,status:!0}}},gravity:{name:"Gravity",color:6978559,status:"SLUNG",statusText:"slides outward toward the rim",super:{name:"SINGULARITY",dur:2.6,guard:.7,pull:{radius:11,accel:34},pulse:{every:.4,radius:3,spin:1.4,armour:.02},end:{radius:5.5,impulse:30,status:!0}}},resonance:{name:"Resonance",color:5242848,status:"RINGING",statusText:"bleeds Overdrive charge",super:{name:"HARMONIC",dur:2.4,pulse:{every:.6,radius:6.5,stun:.35,armour:.05,impulse:8,wreck:.8,status:!0}}}},md=4,gd=[{a:"thermal",b:"cryo",name:"THERMAL SHOCK",color:16777215,armour:.22},{a:"thermal",b:"gale",name:"FIRESTORM",color:16747050,spin:13},{a:"cryo",b:"quake",name:"SHATTER",color:12578815,armour:.28},{a:"volt",b:"mag",name:"RAILSHOT",color:14721279,impulse:34},{a:"cryo",b:"volt",name:"SUPERCONDUCT",color:11465983,stun:1.3,spin:4},{a:"thermal",b:"quake",name:"ERUPTION",color:16738874,impulse:20,armour:.14},{a:"gale",b:"volt",name:"TEMPEST",color:14221194,spin:9,impulse:14},{a:"gale",b:"quake",name:"SANDBLAST",color:15255696,armour:.12,spin:6},{a:"mag",b:"quake",name:"IRON TIDE",color:12098815,impulse:22,armour:.1},{a:"plasma",b:"volt",name:"OVERLOAD",color:16752880,stun:1,armour:.16},{a:"plasma",b:"cryo",name:"FLASH FREEZE",color:14731519,stun:.6,armour:.2},{a:"plasma",b:"gravity",name:"EVENT HORIZON",color:11559167,armour:.3,spin:8},{a:"gravity",b:"quake",name:"COLLAPSE",color:9081087,armour:.26},{a:"gravity",b:"gale",name:"SLINGSHOT",color:9494783,impulse:38},{a:"resonance",b:"quake",name:"AFTERSHOCK",color:10479808,armour:.15,stun:.8},{a:"resonance",b:"volt",name:"FEEDBACK",color:13172634,spin:12},{a:"resonance",b:"thermal",name:"BOILOVER",color:16760970,spin:10,armour:.08}],Rh=(i,t)=>gd.find(e=>e.a===i&&e.b===t||e.a===t&&e.b===i),_d=i=>{const t=Te[i];return{id:i,name:t.name,elements:[i],blurb:`${t.super.name}. Marks foes ${t.status}: a marked top ${t.statusText}.`}},En=(i,t,e,n)=>({id:i,name:t,elements:[e,n],blurb:`Fused ${Te[e].name} and ${Te[n].name}. Fires both supers at once, and its strikes set off ${Rh(e,n)?.name??"both statuses"} on their own.`}),Gr=[...ea.map(_d),En("firestorm","Firestorm","thermal","gale"),En("glacier","Glacier","cryo","quake"),En("railgun","Railgun","volt","mag"),En("superconductor","Superconductor","cryo","volt"),En("magma","Magma","thermal","quake"),En("tempest","Tempest","gale","volt"),En("horizon","Event Horizon","plasma","gravity"),En("overload","Overload","plasma","volt"),En("collapse","Collapse","gravity","quake"),En("feedback","Feedback","resonance","volt")],na=i=>Gr.find(t=>t.id===i)??Gr[0],jl=i=>na(i).elements.length>1,Ch=i=>na(i).elements.some(t=>pd.includes(t)),Ql=i=>Ch(i)?jl(i)?4:3:jl(i)?2:0,hs={id:"foundry",name:"THE FOUNDRY",radius:10,pull:1.3,segments:24,segHp:3,openSegs:[6,14,22],rail:{width:1.6,accel:16,max:26},pillars:[],theme:{floor:1382950,wall:8950440,strip:4029439}},Vr=(i,t,e,n,s=0)=>Array.from({length:i},(r,a)=>{const o=s+a/i*Math.PI*2;return{x:Math.cos(o)*t,y:Math.sin(o)*t,r:e,hp:n}}),vd={id:"pillaryard",name:"PILLAR YARD",radius:10,pull:1,segments:24,segHp:2,openSegs:[0,12],rail:{width:1.6,accel:12,max:22},pillars:Vr(4,4.6,.75,4,Math.PI/4),theme:{floor:1840914,wall:10521192,strip:16747050}},xd={id:"crucible",name:"THE CRUCIBLE",radius:14,pull:.9,segments:32,segHp:3.5,openSegs:[0,8,16,24],rail:{width:1.8,accel:18,max:30},pillars:Vr(6,7.2,.9,5),theme:{floor:1905684,wall:10129295,strip:16730682}},Md={id:"ironbasin",name:"IRON BASIN",radius:14,pull:1,segments:32,segHp:2.5,openSegs:[5,16,27],rail:{width:1.8,accel:20,max:32},pillars:[],theme:{floor:1054746,wall:8362656,strip:2807496}},yd={id:"colosseum",name:"THE COLOSSEUM",radius:18,pull:.7,segments:40,segHp:4,openSegs:[0,10,20,30],rail:{width:2,accel:20,max:34},pillars:[...Vr(4,5.5,1.1,7),...Vr(8,12,.9,5,Math.PI/8)],theme:{floor:1446940,wall:11116736,strip:10120191}},Sd=[hs,vd,xd,Md,yd];function bd(i){const t=i<=2?10:i<=4?14:18;return Sd.filter(e=>e.radius===t)}const Nt=1/60,Ph=60,at={SMASH:.03,TANG:.3,SPINLOSS:.025,EQ:.05,BURST:.0024,BURST_DRAIN:.01,STEER_MULT:2.8,RIM_E:.6,RIM_SPIN:.03,HIT_CD:.07,WEAK_KB:1,WALL_MIN:7,WALL_DIV:11,ARMOUR_MIN:11,ARMOUR:.002,STAGGER_T:.9,STAGGER_ARMOUR:.2,HEAT_DRAIN:1,SUPER_PASSIVE:.012,SUPER_HIT:.011,SUPER_STRIKE:.1,BOOST_IMPULSE:18,BOOST_CD:.9,BOOST_COST:.5,BOOST_T:.3,STRIKE_T:.22,STRIKE_CD:1.1,STRIKE_CD_HIT:.45,STRIKE_COST:.8,STRIKE_ATK:1.7,STRIKE_GUARD:.55,DASH_IMPULSE:24,DASH_CD:6,DASH_COST:2,DASH_T:.6,BRACE_T:1.5,BRACE_CD:8,BRAKE_T:.6,BRAKE_MINHOLD:.12,BRAKE_CD:7,BRAKE_COST:1,BRAKE_GAIN:1.3,BRAKE_PLUS:6,BRAKE_MIN:14,BRAKE_MAX:34,BRAKE_GUARD:.35,JUMP_T:.45,JUMP_CD:7,JUMP_COST:1.5,JUMP_HOP:9,LAND_R:3.4,LAND_IMPULSE:12,LAND_SPIN:2,LAND_ARMOUR:.015,COUNTER_WIN:.35,COUNTER_SPEED:11,COUNTER_IMPULSE:16,LAUNCH_FRAC:.65},Lh={dash:"SURGE",brace:"BRACE",brake:"BRAKE",spring:"SPRING"},tc={sx:0,sy:0,ability:!1,boost:!1,strike:!1};function ec(i,t,e=hs,n=i.map((s,r)=>r%2)){return{teams:n,pairCd:new Array(i.length*i.length).fill(0),lastOut:null,stadium:e,segHp:Array.from({length:e.segments},(s,r)=>e.openSegs.includes(r)?0:e.segHp),pillars:e.pillars.map(s=>({...s})),tops:i.map(s=>({spec:s,x:0,y:0,vx:0,vy:0,px:0,py:0,spin:0,phase:0,burst:0,inPlay:!1,leaving:!1,out:null,steerX:0,steerY:0,abilityCd:0,braceT:0,dashT:0,brakeT:0,brakeSpeed:0,brakeDx:0,brakeDy:0,airT:0,counterT:0,boostCd:0,boostT:0,strikeT:0,combo:0,comboT:0,statusFrom:{},strikeCd:0,onRail:!1,shift:0,status:{thermal:0,cryo:0,volt:0,gale:0,quake:0,mag:0,plasma:0,gravity:0,resonance:0},statusBy:0,reactCd:0,stunT:0,superMeter:0,superT:0,pulseT:0,armour:1,stage:0})),time:0,rng:t|0,over:null}}function nc(i){i.rng=i.rng+1831565813|0;let t=Math.imul(i.rng^i.rng>>>15,1|i.rng);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}const Vn=i=>Math.abs(i.spin)/i.spec.maxSpin,Ed=i=>i.ability==="dash"?at.DASH_CD:i.ability==="brake"?at.BRAKE_CD:i.ability==="spring"?at.JUMP_CD:at.BRACE_CD,_n=i=>i.spec.radius+(i.spec.shift?.radius??0)*i.shift,Ur=(i,t)=>1+(i.spec.shift?.[t]??0)*i.shift,An=i=>i.inPlay&&!i.out&&!i.leaving;function co(i,t){const e=i.segments;return(Math.round(t/(Math.PI*2)*e)%e+e)%e}const Vs=i=>i.radius*at.LAUNCH_FRAC;function Td(i,t,e,n){const s=i.tops[t];if(s.inPlay)return;let{x:r,y:a}=e;const o=Math.hypot(r,a),l=Vs(i.stadium);o>l&&(r*=l/o,a*=l/o);const c=Math.max(0,Math.min(1,e.power)),h=c>=.9,u=Math.max(-1,Math.min(1,e.tilt));s.x=s.px=r,s.y=s.py=a,s.spin=s.spec.spinDir*s.spec.maxSpin*(h?1:.6+.4*c);const d=Math.hypot(r,a),f=d>.05?-a/d:1,g=d>.05?r/d:0;s.vx=f*u*14*s.spec.spinDir,s.vy=g*u*14*s.spec.spinDir,s.inPlay=!0,n.push({type:"launch",i:t,perfect:h})}function ic(i,t){return t<at.WALL_MIN?i:Math.max(0,i-t/at.WALL_DIV)}const ho=i=>i.spec.mass*(i.stage>=2?.85:1);function uo(i,t){if(i.superT<=0)return 1;let e=1;for(const n of i.spec.elements){const s=Te[n].super[t];s!==void 0&&(e=t==="guard"?Math.min(e,s):Math.max(e,s))}return e}const gl=(i,t)=>{i.spin=Math.max(0,Math.abs(i.spin)-t)*i.spec.spinDir},_l=(i,t,e,n)=>{const s=i.x-t,r=i.y-e,a=Math.hypot(s,r)||1,o=Math.sqrt(ho(i)/1.1);i.vx+=s/a*n/o,i.vy+=r/a*n/o},wd=2,Ad=.05,Rd=3.5,Cd=1.2,Pd=.15;function hi(i,t,e,n){const s=i.tops[t];if(s.out||e<=0)return;s.armour=Math.max(0,s.armour-e*(s.status.quake>0?1.6:1)*(s.braceT>0||s.brakeT>0?.4:1));const r=s.armour<=0?3:s.armour<.34?2:s.armour<.67?1:0;r>s.stage&&(s.stage=r,n.push({type:"crack",i:t,stage:r}),r===3&&(s.out="broken",n.push({type:"out",i:t,reason:"broken"})))}function fo(i,t,e,n,s){const r=i.tops[t];if(!r.out){if(r.reactCd<=0)for(const a of ea){if(a===e||r.status[a]<=0)continue;const o=Rh(e,a);if(!o)continue;const l=i.tops[n],c=r.statusFrom[a],h=c!==void 0&&c!==n&&i.teams[c]===i.teams[n],u=l.spec.superPower*(h?Cd:1);if(h)for(const d of[c,n])i.tops[d].superMeter=Math.min(1,i.tops[d].superMeter+Pd);r.status[a]=0,r.status[e]=0,r.reactCd=1.5,o.spin&&gl(r,o.spin*u),o.stun&&(r.stunT=Math.max(r.stunT,o.stun)),o.impulse&&_l(r,l.x,l.y,o.impulse),s.push({type:"react",i:t,by:n,name:o.name,color:o.color,x:r.x,y:r.y,team:h}),o.armour&&hi(i,t,o.armour*u,s);return}r.status[e]=md,r.statusFrom[e]=n,e==="mag"&&(r.statusBy=n)}}function Ma(i,t,e,n,s){const r=i.tops[t],a=r.spec.superPower,o=c=>Math.hypot(i.tops[c].x-r.x,i.tops[c].y-r.y);let l=[];i.tops.forEach((c,h)=>{i.teams[h]!==i.teams[t]&&An(c)&&c.airT<=0&&o(h)<=n.radius+_n(c)&&l.push(h)}),n.nearest&&l.length>1&&(l=[l.sort((c,h)=>o(c)-o(h))[0]]);for(const c of l){const h=i.tops[c];n.impulse&&_l(h,r.x,r.y,n.impulse),n.spin&&gl(h,n.spin*a),n.stun&&(h.stunT=Math.max(h.stunT,n.stun)),n.status&&fo(i,c,e,t,s),n.armour&&hi(i,c,n.armour*a,s)}if(n.wreck){i.pillars.forEach((u,d)=>{u.hp<=0||Math.hypot(u.x-r.x,u.y-r.y)>n.radius||(u.hp=Math.max(0,u.hp-n.wreck),u.hp<=0&&s.push({type:"break",kind:"pillar",index:d,x:u.x,y:u.y}))});const c=i.stadium.radius,h=Math.hypot(r.x,r.y);if(h>.5&&c-h<n.radius){const u=Math.acos(Math.max(-1,Math.min(1,(c*c+h*h-n.radius*n.radius)/(2*c*h)))),d=Math.atan2(r.y,r.x),f=i.stadium.segments;for(let g=0;g<f;g++){const v=g/f*Math.PI*2,m=Math.atan2(Math.sin(v-d),Math.cos(v-d));Math.abs(m)>u||i.segHp[g]<=0||(i.segHp[g]=Math.max(0,i.segHp[g]-n.wreck*.6),i.segHp[g]<=0&&s.push({type:"break",kind:"wall",index:g,x:Math.cos(v)*c,y:Math.sin(v)*c}))}}}s.push({type:"pulse",i:t,x:r.x,y:r.y,radius:Math.min(n.radius,12),element:e,targets:l})}function Ld(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!An(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function Dd(i,t,e){const n=i.tops[t],s=[];i.tops.forEach((r,a)=>{i.teams[a]===i.teams[t]||!An(r)||r.airT>0||Math.hypot(r.x-n.x,r.y-n.y)>at.LAND_R+_n(r)||(s.push(a),_l(r,n.x,n.y,at.LAND_IMPULSE),gl(r,at.LAND_SPIN),hi(i,a,at.LAND_ARMOUR,e))}),e.push({type:"land",i:t,x:n.x,y:n.y,radius:at.LAND_R,targets:s})}function ya(i,t){const e=[],n=i.stadium,s=n.radius;i.time+=Nt;for(let r=0;r<i.pairCd.length;r++)i.pairCd[r]>0&&(i.pairCd[r]-=Nt);for(let r=0;r<i.tops.length;r++){const a=i.tops[r];if(a.px=a.x,a.py=a.y,a.onRail=!1,!a.inPlay||a.out==="burst"||a.out==="broken")continue;const o=a.spec,l=_n(a);if(a.leaving){a.x+=a.vx*Nt,a.y+=a.vy*Nt,a.phase+=a.spin*Nt,!a.out&&Math.hypot(a.x,a.y)>s+1.6&&(a.out="ringout",e.push({type:"out",i:r,reason:"ringout"}));continue}const c=Math.hypot(a.x,a.y);let h=-n.pull*a.x,u=-n.pull*a.y;if(a.out==="spinout"){a.vx=(a.vx+h*Nt)*Math.exp(-4*Nt),a.vy=(a.vy+u*Nt)*Math.exp(-4*Nt),a.x+=a.vx*Nt,a.y+=a.vy*Nt;continue}const d=a.stunT>0,f=d?tc:t[r]??tc,g=(a.status.cryo>0?.55:1)*(d?0:1),v=Vn(a),m=v<.25?(.25-v)/.25:0;if(o.shift){const I=Math.max(0,Math.min(1,(.6-v)/.2)),k=a.shift;a.shift+=Math.max(-2.5*Nt,Math.min(2.5*Nt,I-a.shift)),k<.5!=a.shift<.5&&e.push({type:"shift",i:r,guard:a.shift>=.5})}const p=c>.05?-a.y/c:1,M=c>.05?a.x/c:0,x=o.drive*Math.min(1,v*1.5)*g;h+=p*x*o.spinDir,u+=M*x*o.spinDir;let _=f.sx,w=f.sy;const T=Math.hypot(_,w);T>1&&(_/=T,w/=T),a.steerX=_,a.steerY=w;let R=Math.abs(a.spin);if(T>.01){const I=o.steer*at.STEER_MULT*(.5+.5*v)*g*uo(a,"steer");h+=_*I,u+=w*I}const C=co(n,Math.atan2(a.y,a.x));if(n.rail&&c>s-l-n.rail.width&&i.segHp[C]>0){const I=a.vx*p+a.vy*M,k=Math.abs(I)>1?Math.sign(I):o.spinDir;Math.abs(I)<n.rail.max&&(h+=p*k*n.rail.accel,u+=M*k*n.rail.accel),a.onRail=Math.abs(I)>6}m>0&&(h+=(nc(i)-.5)*m*14,u+=(nc(i)-.5)*m*14);const b=()=>{if(T>.01)return[_,w];const I=Math.hypot(a.vx,a.vy);return I>.5?[a.vx/I,a.vy/I]:c>.05?[-a.x/c,-a.y/c]:[1,0]};a.abilityCd=Math.max(0,a.abilityCd-Nt),a.braceT=Math.max(0,a.braceT-Nt);const S=a.brakeT>0;a.brakeT=Math.max(0,a.brakeT-Nt),a.counterT=Math.max(0,a.counterT-Nt),a.airT>0&&(a.airT=Math.max(0,a.airT-Nt),a.airT<=0&&Dd(i,r,e)),a.dashT=Math.max(0,a.dashT-Nt),a.boostCd=Math.max(0,a.boostCd-Nt),a.boostT=Math.max(0,a.boostT-Nt),a.strikeCd=Math.max(0,a.strikeCd-Nt),a.strikeT=Math.max(0,a.strikeT-Nt),a.comboT=Math.max(0,a.comboT-Nt),a.comboT<=0&&(a.combo=0);for(const I of ea)a.status[I]>0&&(a.status[I]-=Nt);if(a.reactCd=Math.max(0,a.reactCd-Nt),a.stunT=Math.max(0,a.stunT-Nt),a.status.thermal>0&&(R-=at.HEAT_DRAIN*Nt),a.status.plasma>0&&hi(i,r,.012*Nt,e),a.status.resonance>0&&(a.superMeter=Math.max(0,a.superMeter-.07*Nt)),a.status.gravity>0){const I=Math.hypot(a.x,a.y)||1;h+=a.x/I*10,u+=a.y/I*10}if(a.status.mag>0){const I=i.tops[a.statusBy];if(I&&An(I)){const k=I.x-a.x,F=I.y-a.y,J=Math.hypot(k,F)||1;h+=k/J*12,u+=F/J*12}}if(a.superMeter=Math.min(1,a.superMeter+at.SUPER_PASSIVE*o.superGain*Nt),f.super&&a.superMeter>=1&&a.superT<=0){a.superMeter=0,a.superT=Math.max(...o.elements.map(I=>Te[I].super.dur)),a.pulseT=0,e.push({type:"super",i:r,elements:o.elements});for(const I of o.elements){const k=Te[I].super;k.start&&Ma(i,r,I,k.start,e)}}if(a.superT>0){a.superT-=Nt,a.pulseT-=Nt;for(const I of o.elements){const k=Te[I].super;if(k.pull){const F=k.pull;i.tops.forEach((J,ht)=>{if(i.teams[ht]===i.teams[r]||!An(J))return;const pt=a.x-J.x,Dt=a.y-J.y,zt=Math.hypot(pt,Dt);zt<F.radius&&zt>.5&&(J.vx+=pt/zt*F.accel*Nt,J.vy+=Dt/zt*F.accel*Nt)})}k.pulse&&a.pulseT<=0&&Ma(i,r,I,k.pulse,e),k.end&&a.superT<=0&&Ma(i,r,I,k.end,e)}a.pulseT<=0&&(a.pulseT=Math.min(...o.elements.map(I=>Te[I].super.pulse?.every??99)))}if(f.boost&&a.boostCd<=0){const[I,k]=b();a.vx+=I*at.BOOST_IMPULSE,a.vy+=k*at.BOOST_IMPULSE,a.boostCd=at.BOOST_CD,a.boostT=at.BOOST_T,R-=at.BOOST_COST,e.push({type:"boost",i:r})}if(f.strike&&a.strikeCd<=0){a.strikeT=at.STRIKE_T,a.strikeCd=at.STRIKE_CD,R-=at.STRIKE_COST,e.push({type:"strike",i:r});const I=a.counterT>0?Ld(i,r):null;if(I){const k=Math.hypot(I.x-a.x,I.y-a.y)||1,F=(I.x-a.x)/k,J=(I.y-a.y)/k;a.vx+=F*at.COUNTER_IMPULSE,a.vy+=J*at.COUNTER_IMPULSE,a.boostT=Math.max(a.boostT,at.BOOST_T),a.counterT=0,e.push({type:"counter",i:r,x:a.x,y:a.y,dx:F,dy:J})}}if(S&&(a.brakeT<=0||f.ability&&a.brakeT<at.BRAKE_T-at.BRAKE_MINHOLD)){const[I,k]=T>.01?[_,w]:a.brakeSpeed>2?[a.brakeDx,a.brakeDy]:b(),F=Math.min(at.BRAKE_MAX,Math.max(at.BRAKE_MIN,a.brakeSpeed*at.BRAKE_GAIN+at.BRAKE_PLUS));a.vx=I*F,a.vy=k*F,a.brakeT=0,a.dashT=at.DASH_T*.7,e.push({type:"brake",i:r,phase:"release",x:a.x,y:a.y,dx:I,dy:k,speed:F})}else if(f.ability&&a.abilityCd<=0){if(o.ability==="brake"){const I=Math.hypot(a.vx,a.vy);a.brakeSpeed=I,a.brakeDx=I>.5?a.vx/I:0,a.brakeDy=I>.5?a.vy/I:0,a.vx*=.1,a.vy*=.1,a.brakeT=at.BRAKE_T,a.abilityCd=at.BRAKE_CD,R-=at.BRAKE_COST,e.push({type:"brake",i:r,phase:"stop",x:a.x,y:a.y,dx:a.brakeDx,dy:a.brakeDy,speed:I})}else if(o.ability==="spring"){const[I,k]=b();a.vx+=I*at.JUMP_HOP,a.vy+=k*at.JUMP_HOP,a.airT=at.JUMP_T,a.abilityCd=at.JUMP_CD,R-=at.JUMP_COST}else if(o.ability==="dash"){const[I,k]=b();a.vx+=I*at.DASH_IMPULSE,a.vy+=k*at.DASH_IMPULSE,a.dashT=at.DASH_T,R-=at.DASH_COST,a.abilityCd=at.DASH_CD}else a.braceT=at.BRACE_T,a.abilityCd=at.BRACE_CD;e.push({type:"ability",i:r,kind:o.ability})}const D=a.brakeT>0,H=Math.exp(D?-14*Nt:-o.drag*(a.braceT>0?2.5:1)*(d?3:1)*Nt),B=D?.15:1;a.vx=(a.vx+h*Nt*B)*H,a.vy=(a.vy+u*Nt*B)*H,a.x+=a.vx*Nt,a.y+=a.vy*Nt,R-=o.spinDecay*Ur(a,"decay")*(a.stage>=2?1.25:1)*(1+m)*Nt,a.burst=Math.max(0,a.burst-at.BURST_DRAIN*Nt);for(let I=0;I<i.pillars.length;I++){const k=i.pillars[I];if(k.hp<=0||a.airT>0)continue;const F=a.x-k.x,J=a.y-k.y,ht=Math.hypot(F,J),pt=l+k.r;if(ht>=pt||ht<1e-6)continue;const Dt=F/ht,zt=J/ht;a.x=k.x+Dt*pt,a.y=k.y+zt*pt;const X=-(a.vx*Dt+a.vy*zt);X>0&&(a.vx+=(1+at.RIM_E)*X*Dt,a.vy+=(1+at.RIM_E)*X*zt,R-=X*at.RIM_SPIN,X>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),k.hp=ic(k.hp,X),X>1.5&&e.push({type:"rim",x:k.x+Dt*k.r,y:k.y+zt*k.r,strength:Math.min(1,X/18),i:r}),k.hp<=0&&e.push({type:"break",kind:"pillar",index:I,x:k.x,y:k.y}))}const W=Math.hypot(a.x,a.y),Y=s-l;if(W>Y){const I=a.x/W,k=a.y/W,F=co(n,Math.atan2(a.y,a.x));if(i.segHp[F]<=0)a.airT<=0&&W>s-l*.35&&(a.leaving=!0);else{const J=a.vx*I+a.vy*k;a.x=I*Y,a.y=k*Y,J>0&&(a.vx-=(1+at.RIM_E)*J*I,a.vy-=(1+at.RIM_E)*J*k,R-=J*at.RIM_SPIN,J>at.COUNTER_SPEED&&(a.counterT=at.COUNTER_WIN),i.segHp[F]=ic(i.segHp[F],J),J>1.5&&e.push({type:"rim",x:a.x,y:a.y,strength:Math.min(1,J/18),i:r}),i.segHp[F]<=0&&e.push({type:"break",kind:"wall",index:F,x:I*s,y:k*s}))}}R=Math.max(0,R),a.spin=R*o.spinDir,a.phase+=a.spin*Nt,R<=0&&(a.out="spinout",e.push({type:"out",i:r,reason:"spinout"}))}for(let r=0;r<i.tops.length;r++)for(let a=r+1;a<i.tops.length;a++)Id(i,r,a,e);for(const r of e)r.type==="out"&&(i.lastOut=r.reason);if(!i.over){const r=new Set;if(i.tops.forEach((a,o)=>{a.out||r.add(i.teams[o])}),r.size<=1&&i.lastOut)i.over={winner:r.size?[...r][0]:-1,reason:i.lastOut};else if(i.time>=Ph){const a=new Map;i.tops.forEach((l,c)=>{l.out||a.set(i.teams[c],(a.get(i.teams[c])??0)+Math.abs(l.spin))});const o=[...a].sort((l,c)=>c[1]-l[1]);i.over={winner:o.length>1&&o[0][1]===o[1][1]?-1:o[0][0],reason:"time"}}}return e}function sc(i,t){return .55+.45*Math.abs(Math.sin((t-i.phase)*i.spec.teeth/2))}function Id(i,t,e,n){const s=i.tops[t],r=i.tops[e];if(!An(s)||!An(r)||s.airT>0||r.airT>0)return;const a=r.x-s.x,o=r.y-s.y,l=Math.hypot(a,o),c=_n(s)+_n(r);if(l>=c||l<1e-6)return;const h=a/l,u=o/l,d=ho(s),f=ho(r),g=c-l;s.x-=h*g*(f/(d+f)),s.y-=u*g*(f/(d+f)),r.x+=h*g*(d/(d+f)),r.y+=u*g*(d/(d+f));const v=t*i.tops.length+e;if(i.pairCd[v]>0)return;i.pairCd[v]=at.HIT_CD;const m=i.teams[t]===i.teams[e],p=m?0:1,M=-u,x=h,_=(r.vx-s.vx)*h+(r.vy-s.vy)*u,w=(s.vx-r.vx)*M+(s.vy-r.vy)*x+s.spin*_n(s)+r.spin*_n(r),T=Math.atan2(u,h),R=s.strikeT>0,C=r.strikeT>0,b=R&&C,S=R&&!b&&!m&&s.combo>=3,D=C&&!b&&!m&&r.combo>=3,H=(st,tt,bt)=>(st.dashT>0?1.5:st.boostT>0?1.15:1)*(tt?b?1.3:bt?wd:at.STRIKE_ATK:1)*uo(st,"atk")*(st.stage>=1?.9:1),B=sc(s,T)*s.spec.attack*H(s,R,S)*Ur(s,"attack"),W=sc(r,T+Math.PI)*r.spec.attack*H(r,C,D)*Ur(r,"attack"),Y=d*f/(d+f),I=_<0?-1.6*_*Y*(.6+.2*(B+W)):0,k=at.SMASH*Math.abs(w)*Y*(B+W),F=I+k,J=(st,tt)=>(st.braceT>0?.3:st.brakeT>0?at.BRAKE_GUARD:1)*(tt&&!b?at.STRIKE_GUARD:1)*Ur(st,"guard")*uo(st,"guard"),ht=st=>(st.status.gale>0?1.4:1)*(st.stage>=1?1.15:1),pt=J(s,R)*(1+at.WEAK_KB*(1-Vn(s)))*(m?.5:1)*ht(s),Dt=J(r,C)*(1+at.WEAK_KB*(1-Vn(r)))*(m?.5:1)*ht(r),zt=Math.sign(w)*at.TANG;s.vx+=(-h-M*zt)*F*pt/d,s.vy+=(-u-x*zt)*F*pt/d,r.vx+=(h+M*zt)*F*Dt/f,r.vy+=(u+x*zt)*F*Dt/f;let X=Math.abs(s.spin),nt=Math.abs(r.spin);if(X-=at.SPINLOSS*F*W*J(s,R)*p*(s.status.volt>0?1.25:1),nt-=at.SPINLOSS*F*B*J(r,C)*p*(r.status.volt>0?1.25:1),!m&&s.spec.spinDir!==r.spec.spinDir){const st=at.EQ*(X-nt);X-=st,nt+=st;const tt=Math.min(nt,s.spec.hook*1.5),bt=Math.min(X,r.spec.hook*1.5);X+=tt-bt,nt+=bt-tt}if(s.spin=Math.max(0,Math.min(s.spec.maxSpin,X))*s.spec.spinDir,r.spin=Math.max(0,Math.min(r.spec.maxSpin,nt))*r.spec.spinDir,s.burst+=p*at.BURST*F*W*r.spec.burstDmg*(s.braceT>0?.5:1)/s.spec.burstRes,r.burst+=p*at.BURST*F*B*s.spec.burstDmg*(r.braceT>0?.5:1)/r.spec.burstRes,!m){const st=F-at.ARMOUR_MIN;st>0&&(hi(i,t,st*at.ARMOUR*W*J(s,R)/s.spec.burstRes,n),hi(i,e,st*at.ARMOUR*B*J(r,C)/r.spec.burstRes,n));const tt=Math.min(1,F/30)*6;if(s.superMeter=Math.min(1,s.superMeter+(at.SUPER_HIT*(1+tt*B/(B+W))+(R?at.SUPER_STRIKE:0))*s.spec.superGain),r.superMeter=Math.min(1,r.superMeter+(at.SUPER_HIT*(1+tt*W/(B+W))+(C?at.SUPER_STRIKE:0))*r.spec.superGain),R||s.superT>0)for(const bt of s.spec.elements)fo(i,e,bt,t,n);if(C||r.superT>0)for(const bt of r.spec.elements)fo(i,t,bt,e,n)}for(const[st,tt,bt,kt,It]of[[s,R,S,t,e],[r,C,D,e,t]])tt&&(st.strikeT=0,st.strikeCd=at.STRIKE_CD_HIT,!m&&(st.comboT=Rd,bt?(st.combo=0,n.push({type:"finisher",i:kt,target:It,x:i.tops[It].x,y:i.tops[It].y}),hi(i,It,Ad,n)):st.combo=Math.min(3,st.combo+1)));n.push({type:"hit",x:s.x+h*_n(s),y:s.y+u*_n(s),nx:h,ny:u,strength:Math.min(1,F/30),a:t,b:e,power:b?2:R?t:C?e:-1});for(const[st,tt]of[[t,s],[e,r]])!tt.out&&tt.burst>=1&&(tt.burst=0,tt.stunT=Math.max(tt.stunT,at.STAGGER_T),n.push({type:"react",i:st,by:st===t?e:t,name:"STAGGER",color:16777215,x:tt.x,y:tt.y,team:!1}),hi(i,st,at.STAGGER_ARMOUR,n))}function rc(i,t){const e=i()*Math.PI*2,s=(t?Vs(t.stadium):6.5)*(.3+i()*.5);return{x:Math.cos(e)*s,y:Math.sin(e)*s,power:.7+i()*.3,tilt:(i()*2-1)*.8}}function ac(i,t,e){const n=Math.floor(i.time*4)*7919+t*104729;return(Math.imul(n,2654435761)>>>0)%100<e}function Ud(i,t){const e=i.tops[t];let n=null,s=1/0;return i.tops.forEach((r,a)=>{if(i.teams[a]===i.teams[t]||!An(r))return;const o=Math.hypot(r.x-e.x,r.y-e.y);o<s&&(s=o,n=r)}),n}function Dh(i,t){const e=i.tops[t],n={sx:0,sy:0,ability:!1,boost:!1,strike:!1};if(!An(e))return n;const s=e.spec.ai??{strike:60,boost:55},r=i.stadium.radius,a=Math.hypot(e.x,e.y),o=a>.01?(e.vx*e.x+e.vy*e.y)/a:0;let l=0,c=0;const h=Math.atan2(e.y+e.vy*.35,e.x+e.vx*.35),u=a>r*.55&&o>4&&i.segHp[co(i.stadium,h)]<=0,d=Ud(i,t);if(u||a>r*.8)l=-e.x,c=-e.y,u&&a>r*.7&&(n.boost=!0);else if(d){const g=d.x+d.vx*.15-e.x,v=d.y+d.vy*.15-e.y,m=Math.hypot(g,v),p=e.spec.role==="attack"||Vn(e)<Vn(d)-.04||m>r*.9,M=-((d.vx-e.vx)*g+(d.vy-e.vy)*v)/Math.max(m,.01),x=m-_n(e)-_n(d);p?(l=g,c=v,m>3&&m<9&&ac(i,t,s.boost)&&(n.boost=!0),e.spec.ability==="dash"&&e.abilityCd<=0&&m<6&&m>2.2&&(n.ability=!0)):a>2&&(l=-e.x,c=-e.y),M>3&&x<M*.14&&ac(i,t,s.strike)&&(n.strike=!0),e.spec.ability==="brace"&&e.abilityCd<=0&&m<3.2&&M>9&&(n.ability=!0),e.spec.ability==="brake"&&(e.brakeT>0?(m<4.5||e.brakeT<.15)&&(n.ability=!0):e.abilityCd<=0&&m<8&&m>3.5&&M>8&&(n.ability=!0)),e.spec.ability==="spring"&&e.abilityCd<=0&&e.airT<=0&&m<4.5&&m>1.5&&(M>10||p&&m<3.2)&&(n.ability=!0),e.counterT>0&&m<14&&e.strikeCd<=0&&(n.strike=!0),e.superMeter>=1&&m<7.5&&(n.super=!0)}else a>2&&(l=-e.x,c=-e.y);const f=Math.hypot(l,c);return f>.01&&(n.sx=l/f,n.sy=c/f),n}const ki=["blade","disc","tip","core","launcher","reactor"],Ih={blade:"BLADE",disc:"DISC",tip:"TIP",core:"CORE",launcher:"LAUNCH",reactor:"ELEMENT"},Nd={attack:0,burstDmg:0,burstRes:0,mass:.2,radius:0,teeth:0,hook:0,spinDecay:.8,drive:0,drag:0,steer:12,chargeTime:0,maxSpin:0,superGain:1,superPower:1},Ui=[{id:"talon",slot:"blade",name:"Talon",blurb:"Three hooked claws. Huge hits, huge recoil.",mods:{attack:1.3,burstDmg:1.2,teeth:3,radius:1,mass:.35}},{id:"bastion",slot:"blade",name:"Bastion",blurb:"Round armoured ring. Shrugs off blows.",mods:{attack:1,burstDmg:.9,teeth:6,radius:1.05,mass:.6,burstRes:.45,spinDecay:-.05}},{id:"ripsaw",slot:"blade",name:"Ripsaw",blurb:"Eight teeth that tear cores open. Best at bursting.",mods:{attack:1.05,burstDmg:1.55,teeth:8,radius:1,mass:.38}},{id:"halo",slot:"blade",name:"Halo",blurb:"Twin wings. Spins longest, steals spin from opposite-spin tops.",mods:{attack:.85,burstDmg:.8,teeth:2,radius:1.02,mass:.45,hook:1,spinDecay:-.12,burstRes:.15}},{id:"shifter",slot:"blade",name:"Shifter",blurb:"Three hinged wings. Tucked in to strike at high spin; below half spin they swing out into a wide guard.",mods:{attack:1.25,burstDmg:1.15,teeth:3,radius:.9,mass:.42},shift:{radius:.22,attack:-.4,guard:-.35,decay:-.3}},{id:"pivot",slot:"disc",name:"Pivot",blurb:"Weight at the centre. Quick to steer.",mods:{mass:.5,steer:3}},{id:"flywheel",slot:"disc",name:"Flywheel",blurb:"Weight at the rim. Long spin, slow to turn.",mods:{mass:.6,spinDecay:-.15,steer:-3}},{id:"anvil",slot:"disc",name:"Anvil",blurb:"A solid slab. Very hard to move.",mods:{mass:.85,steer:-4,spinDecay:.05}},{id:"feather",slot:"disc",name:"Feather",blurb:"Vented alloy. Darts around, gets thrown around.",mods:{mass:.38,steer:5,spinDecay:.04}},{id:"needle",slot:"tip",name:"Needle",blurb:"Sharp point. Holds the centre and saves spin.",mods:{drive:1.2,drag:1.5,spinDecay:-.1}},{id:"flatline",slot:"tip",name:"Flatline",blurb:"Flat base. Races around the bowl.",mods:{drive:4.8,drag:1.05,spinDecay:.02}},{id:"gripper",slot:"tip",name:"Gripper",blurb:"Rubber. Turns on the spot, burns spin fast.",mods:{drive:3.2,drag:1.6,steer:5,spinDecay:.2}},{id:"orbit",slot:"tip",name:"Orbit",blurb:"Ball bearing. Steady, hard to burst.",mods:{drive:2.2,drag:1.15,burstRes:.1}},{id:"surge",slot:"core",name:"Surge",blurb:"DASH: a sudden lunge that hits harder.",mods:{burstRes:1.15},ability:"dash"},{id:"viper",slot:"core",name:"Viper",blurb:"DASH, lighter lock. Nimble but bursts sooner.",mods:{burstRes:1,steer:3,spinDecay:-.04},ability:"dash"},{id:"rampart",slot:"core",name:"Rampart",blurb:"BRACE: dig in and take a fraction of the hit.",mods:{burstRes:1.25},ability:"brace"},{id:"lockjaw",slot:"core",name:"Lockjaw",blurb:"BRACE, four clamps. Nearly impossible to burst.",mods:{burstRes:1.45,mass:.1,steer:-2},ability:"brace"},{id:"anchor",slot:"core",name:"Anchor",blurb:"BRAKE: dig in and stop dead, then launch faster than you arrived.",mods:{burstRes:1.1,mass:.05},ability:"brake"},{id:"coil",slot:"core",name:"Coil",blurb:"SPRING JUMP: hop over tops and gaps, land with a shockwave.",mods:{burstRes:1,steer:1},ability:"spring"},{id:"ripcord",slot:"launcher",name:"Ripcord",blurb:"Balanced power and timing.",mods:{chargeTime:.9,maxSpin:100}},{id:"string",slot:"launcher",name:"String",blurb:"Most spin, very tight timing.",mods:{chargeTime:.55,maxSpin:106}},{id:"winder",slot:"launcher",name:"Winder",blurb:"Least spin, easy timing.",mods:{chargeTime:1.4,maxSpin:96}},{id:"geared",slot:"launcher",name:"Geared",blurb:"A little extra spin, slower meter.",mods:{chargeTime:1.1,maxSpin:102}}];Ui.push(...Gr.map(i=>({id:i.id,slot:"reactor",name:i.name,blurb:i.blurb,mods:{}})));const sn=i=>Ui.filter(t=>t.slot===i),Rn=i=>Ui.find(t=>t.id===i)??Ui[0],Uh=[16734751,15213357,16761370,3066970,1492928,2784255,9063935,15921909,2303535],Nh=[16757575,16730955,16773226,7077770,7332863,5934079,12946431,16777215],Oh=["steel","chrome","gunmetal","gold","copper"],ss={blade:"talon",disc:"pivot",tip:"flatline",core:"surge",launcher:"ripcord",reactor:"thermal",spinDir:1,paint:16734751,glow:16757575,metal:"steel"},Fh=i=>`${Rn(i.blade).name} ${Rn(i.tip).name}`.toUpperCase();function vl(i,t=Fh(i)){const e={...Nd};let n="dash",s;for(const r of ki){const a=Rn(i[r]);for(const[o,l]of Object.entries(a.mods))e[o]+=l;a.ability&&(n=a.ability),a.shift&&(s=a.shift)}return{name:t,role:e.attack>=1.05?"attack":"stamina",color:i.paint,accent:i.glow,spinDir:i.spinDir,radius:e.radius,mass:e.mass,maxSpin:e.maxSpin,attack:e.attack,burstDmg:e.burstDmg,burstRes:e.burstRes,spinDecay:e.spinDecay,drive:e.drive,drag:e.drag,steer:e.steer,teeth:e.teeth,spiky:e.attack>=1.05,hook:e.hook,shift:s,elements:na(i.reactor).elements,superGain:e.superGain,superPower:e.superPower,ability:n,chargeTime:e.chargeTime,look:{blade:i.blade,disc:i.disc,tip:i.tip,core:i.core,paint:i.paint,glow:i.glow,metal:i.metal}}}function Od(i,t){const e=s=>s[Math.floor(i()*s.length)],n=Uh.filter(s=>s!==t);return{blade:e(sn("blade")).id,disc:e(sn("disc")).id,tip:e(sn("tip")).id,core:e(sn("core")).id,launcher:e(sn("launcher")).id,reactor:e(Gr.filter(s=>!Ch(s.id)).filter(s=>s.elements.length>1==i()<.2)).id,spinDir:i()<.5?1:-1,paint:e(n),glow:e(Nh),metal:e(Oh)}}const Wr=["attack","defence","stamina","speed","weight","burst"],Fd={attack:"ATTACK",defence:"DEFENCE",stamina:"STAMINA",speed:"SPEED",weight:"WEIGHT",burst:"BURST RESIST"};function Bh(i){return{attack:i.attack*.6+i.burstDmg*.4,defence:i.mass*.55+i.burstRes*.45,stamina:i.maxSpin/i.spinDecay,speed:i.drive+i.steer*.3,weight:i.mass,burst:i.burstRes}}let Sa=null;function Bd(){if(Sa)return Sa;const i={},t={};for(const e of Wr)i[e]=1/0,t[e]=-1/0;for(const e of sn("blade"))for(const n of sn("disc"))for(const s of sn("tip"))for(const r of sn("core"))for(const a of sn("launcher")){const o=Bh(vl({...ss,blade:e.id,disc:n.id,tip:s.id,core:r.id,launcher:a.id}));for(const l of Wr)i[l]=Math.min(i[l],o[l]),t[l]=Math.max(t[l],o[l])}return Sa={min:i,max:t}}function ba(i){const t=Bh(i),{min:e,max:n}=Bd(),s={};for(const r of Wr)s[r]=Math.max(0,Math.min(1.25,(t[r]-e[r])/(n[r]-e[r]||1)));return s}function kd(i){const t=[["ATTACK",i.attack],["DEFENCE",i.defence],["STAMINA",i.stamina]];return t.sort((e,n)=>n[1]-e[1]),t[0][1]-t[1][1]>=.12?t[0][0]:"BALANCED"}const di=[{name:"Common",color:10134453,rolls:0,weight:600},{name:"Uncommon",color:4972650,rolls:1,weight:270},{name:"Rare",color:4889599,rolls:2,weight:100},{name:"Epic",color:12084991,rolls:3,weight:26},{name:"Legendary",color:16751146,rolls:4,weight:4}],kh=[{key:"attack",label:"Attack",prefix:"Honed",min:3,max:8,slots:["blade","core"]},{key:"burstDmg",label:"Burst damage",prefix:"Jagged",min:4,max:10,slots:["blade"]},{key:"burstRes",label:"Burst resistance",prefix:"Bolted",min:4,max:10,slots:["core","disc","blade"]},{key:"mass",label:"Weight",prefix:"Dense",min:3,max:7,slots:["disc"]},{key:"steer",label:"Handling",prefix:"Nimble",min:4,max:9,slots:["tip","disc"]},{key:"drive",label:"Speed",prefix:"Swift",min:4,max:9,slots:["tip"]},{key:"spinDecay",label:"Spin time",prefix:"Balanced",min:3,max:8,slots:["tip","disc","blade","launcher"]},{key:"maxSpin",label:"Launch spin",prefix:"Wound",min:2,max:6,slots:["launcher","core"]},{key:"superGain",label:"Overdrive gain",prefix:"Primed",min:5,max:12,slots:["reactor","core"]},{key:"superPower",label:"Super power",prefix:"Overloaded",min:5,max:12,slots:["reactor"]}],ia=i=>kh.find(t=>t.key===i),xl=20;function zh(i,t,e={}){const n=e.slot?sn(e.slot):Ui;let s=n[Math.floor(i()*n.length)];const r=di.map((c,h)=>h<(e.minRarity??0)?0:c.weight*Math.pow(1+t*.07,h));let a=i()*r.reduce((c,h)=>c+h,0),o=di.length-1;for(let c=0;c<r.length;c++)if(a-=r[c],a<0){o=c;break}if(s.slot==="reactor"&&o<Ql(s.id)){const c=sn("reactor").filter(h=>Ql(h.id)===0);s=c[Math.floor(i()*c.length)]}const l={uid:e.uid??"",part:s.id,rarity:o,level:t,affixes:[]};return Gh(l,i),l}const po=i=>.7+.05*i,zd=(i,t)=>po(i)*(1+.15*t),Hh=(i,t,e,n)=>Math.round((i.min+t()*(i.max-i.min))*zd(e,n)*10)/10;function Gh(i,t){const e=Rn(i.part).slot,n=kh.filter(s=>s.slots.includes(e)&&!i.affixes.some(r=>r.key===s.key));for(let s=Math.min(di[i.rarity].rolls,i.affixes.length+n.length)-i.affixes.length;s>0;s--){const r=n.splice(Math.floor(t()*n.length),1)[0];i.affixes.push({key:r.key,pct:Hh(r,t,i.level,i.rarity)})}i.affixes.sort((s,r)=>r.pct-s.pct)}function Vh(i){const t=Rn(i.part).name;return i.affixes.length?`${ia(i.affixes[0].key).prefix} ${t}`:t}const Wh=i=>`+${i.pct}% ${ia(i.key).label}`,ui=i=>Math.round(10+i.rarity*12+i.level*2+i.affixes.reduce((t,e)=>t+e.pct,0)),mo=i=>2+i.rarity*i.rarity*4+i.level,Xh=i=>i.tier+5,qh=i=>Math.round((4+i.level*2)*(1+i.rarity*.75)),go=i=>5+i.level+i.rarity*6;function Hd(i,t){const e=i.items.find(r=>r.uid===t);if(!e||e.level>=Xh(i))return 0;const n=qh(e);if(i.scrap<n)return 0;i.scrap-=n;const s=po(e.level+1)/po(e.level);e.level++;for(const r of e.affixes)r.pct=Math.round(r.pct*s*10)/10;return n}function Gd(i,t,e,n){const s=i.items.find(o=>o.uid===t);if(!s||!s.affixes[e])return 0;const r=go(s);if(i.scrap<r)return 0;i.scrap-=r;const a=s.affixes[e];return a.pct=Hh(ia(a.key),n,s.level,s.rarity),s.affixes.sort((o,l)=>l.pct-o.pct),r}function Vd(i,t){const e=new Set([...i.affixes.map(r=>r.key),...t?.affixes.map(r=>r.key)??[]]),n=(r,a)=>r?.affixes.find(o=>o.key===a)?.pct??0,s=[...e].map(r=>({key:r,label:ia(r).label,now:n(t,r),item:n(i,r),diff:Math.round((n(i,r)-n(t,r))*10)/10}));return s.sort((r,a)=>a.item-r.item),{rows:s,power:ui(i)-(t?ui(t):0)}}function Wd(i,t,e,n){const s=a=>i.items.indexOf(a),r=(a,o)=>e==="newest"?s(o)-s(a):e==="rarity"&&o.rarity-a.rarity||ui(o)-ui(a);return[...t].sort((a,o)=>+(o.uid===n)-+(a.uid===n)||r(a,o))}function Yh(i,t){const e=Object.values(i.equipped);return i.items.filter(n=>n.rarity<=t&&!e.includes(n.uid))}function Xd(i,t){let e=0;for(const n of Yh(i,t))e+=Zh(i,n.uid);return e}const qd=10;function Yd(i){let t=i|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $h(i,t){const e={...i};for(const n of t)for(const s of n.affixes)s.key==="spinDecay"?e.spinDecay/=1+s.pct/100:e[s.key]*=1+s.pct/100;return e}const $d=["talon","bastion","pivot","feather","flatline","needle","surge","rampart","ripcord","winder","thermal","cryo"];function Kd(){const i=$d.map((e,n)=>({uid:"s"+n,part:e,rarity:0,level:1,affixes:[]})),t={};for(const e of ki)t[e]=i.find(n=>n.part===ss[e]).uid;return{v:2,items:i,equipped:t,paint:ss.paint,glow:ss.glow,metal:ss.metal,spinDir:1,scrap:0,tier:1,wins:0,nextUid:1,pity:0}}function oc(i){const t=Kd(),e=i?.v;if(!i||typeof i!="object"||e!==1&&e!==2||!Array.isArray(i.items))return t;const n={...t,...i,v:2};n.pity=Math.max(0,Math.floor(n.pity)||0),n.items=n.items.filter(s=>s&&Ui.some(r=>r.id===s.part)&&Array.isArray(s.affixes));for(const s of ki)if(!n.items.find(a=>a.uid===n.equipped?.[s]&&Rn(a.part).slot===s)){let a=n.items.find(o=>Rn(o.part).slot===s);a||(a={uid:"fix"+s,part:ss[s],rarity:0,level:1,affixes:[]},n.items.push(a)),n.equipped={...n.equipped,[s]:a.uid}}return n.tier=Math.max(1,Math.min(xl,Math.floor(n.tier)||1)),n.scrap=Math.max(0,Math.floor(n.scrap)||0),n.spinDir=n.spinDir===-1?-1:1,n}const Kh=(i,t)=>i.items.find(e=>e.uid===t),Jh=i=>ki.map(t=>Kh(i,i.equipped[t]));function _o(i){const t={spinDir:i.spinDir,paint:i.paint,glow:i.glow,metal:i.metal};for(const e of ki)t[e]=Kh(i,i.equipped[e]).part;return t}function ks(i,t){return $h(vl(_o(i),t),Jh(i))}const Jd=i=>Jh(i).reduce((t,e)=>t+ui(e),0);function Zd(i,t){return i.pity>=qd&&t.rarity<2&&(t.rarity=2,Gh(t,Yd(i.nextUid*7919+i.wins))),i.pity=t.rarity>=2?0:i.pity+1,t.uid="i"+i.nextUid++,i.items.push(t),t}function Zh(i,t){if(Object.values(i.equipped).includes(t))return 0;const e=i.items.findIndex(s=>s.uid===t);if(e<0)return 0;const n=mo(i.items[e]);return i.items.splice(e,1),i.scrap+=n,n}function jd(i,t,e,n,s){const r=e?1+(i()<.55?1:0)+(s>=3?1:0)+(n?1:0):i()<.35?1:0;return Array.from({length:r},(a,o)=>zh(i,t,{minRarity:n&&e&&o===0?2:0}))}const Qd=["RUSTWIND","IRONVOLT","COGBREAKER","SLAGHAMMER","GRINDSTONE","HEXBOLT","TORQUE","CRANKSHAFT","GEARLOCK","RIVETER","DRILLBIT","FLINTLOCK","PISTON","CAMSHAFT","SPROCKET","BALLAST"],lc=["THE FOUNDRY WARDEN","THE PILEDRIVER","THE GYRE ENGINE","THE LAST FLYWHEEL"],jh=i=>i%5===0,tf=i=>lc[(Math.floor(i/5)-1)%lc.length],ef=i=>({strike:Math.min(92,28+i*4),boost:Math.min(85,34+i*3)});function Qh(i,t,e,n=[]){const s=Od(i,e),r=ki.map(c=>{const h=zh(i,t,{slot:c});return h.part=s[c],h.affixes=h.affixes.filter(()=>i()<.5+t*.025),h}),a=Qd.filter(c=>!n.includes(c)),o=a[Math.floor(i()*a.length)]??"FOE",l=$h(vl(s,o),r);return l.ai=ef(t),l}function nf(i,t,e){const n=Qh(i,Math.min(xl,t+2),e),s=1.55;return n.name=tf(t),n.role="attack",n.radius*=s,n.mass*=2.8,n.maxSpin*=1.7,n.burstRes*=2.6,n.attack*=1.15,n.steer*=.75,n.spinDecay*=.9,n.look={...n.look,scale:s},n.ai={strike:Math.min(95,50+t*2),boost:70},n}function sf(i,t,e,n){const s=[],r=o=>{const l=Qh(i,o,n,s);return s.push(l.name),l},a=Array.from({length:e-1},()=>r(t));if(jh(t)){const o=t>=10?Math.min(2,e):0;return{allies:a,enemies:[nf(i,t,n),...Array.from({length:o},()=>r(t))],boss:!0}}return{allies:a,enemies:Array.from({length:e},()=>r(t)),boss:!1}}const rf=3.5,Xr=.6;class af{constructor(t,e,n=2,s=hs,r){this.specs=t,this.seed=e,this.winsNeeded=n,this.stadium=s,this.teams=r,this.world=ec(t,e,s,r)}world;phase="countdown";phaseT=3*Xr;liveT=0;round=1;score=[0,0];tick(t,e){switch(this.phase){case"countdown":return this.phaseT-=Nt,this.phaseT<=0&&(this.phase="live",this.liveT=0),[];case"live":{this.liveT+=Nt;const n=[];return this.world.tops.forEach((s,r)=>{if(s.inPlay)return;const a=e[r]??(this.liveT>rf?{x:0,y:0,power:.5,tilt:0}:null);a&&Td(this.world,r,a,n)}),n.push(...ya(this.world,t)),this.world.over&&(this.world.over.winner>=0&&this.score[this.world.over.winner]++,this.phase="roundEnd",this.phaseT=3),n}case"roundEnd":{this.phaseT-=Nt;const n=ya(this.world,t);return this.phaseT<=0&&(this.score.some(s=>s>=this.winsNeeded)?this.phase="matchEnd":(this.round++,this.world=ec(this.specs,this.seed+this.round*7919,this.stadium,this.teams),this.phase="countdown",this.phaseT=3*Xr)),n}case"matchEnd":return ya(this.world,t)}}}class of{ctx=null;master;noise;hums=[];start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createDynamicsCompressor();this.master=t.createGain();let n=!1;try{n=!!localStorage.getItem("sf.mute")}catch{}this.master.gain.value=n?0:.7,this.master.connect(e).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;for(let r=0;r<2;r++){const a=t.createOscillator();a.type="sawtooth";const o=t.createOscillator();o.type="triangle";const l=t.createBiquadFilter();l.type="lowpass",l.Q.value=3;const c=t.createGain();c.gain.value=0,a.connect(l),o.connect(l),l.connect(c).connect(this.master),a.start(),o.start(),this.hums.push({osc:a,sub:o,filter:l,gain:c})}}setHum(t,e,n){if(!this.ctx)return;const s=this.hums[t],r=this.ctx.currentTime,a=55+210*e+t*9;s.osc.frequency.setTargetAtTime(a,r,.05),s.sub.frequency.setTargetAtTime(a/2,r,.05),s.filter.frequency.setTargetAtTime(200+1400*e,r,.05),s.gain.gain.setTargetAtTime(n?.035+.05*e:0,r,.08)}burstNoise(t,e,n,s,r="bandpass",a=0,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.loopStart=Math.random()*.5;const h=l.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=e;const u=l.createGain(),d=l.currentTime+a;o&&h.frequency.exponentialRampToValueAtTime(o,d+s),u.gain.setValueAtTime(n,d),u.gain.exponentialRampToValueAtTime(1e-4,d+s),c.connect(h).connect(u).connect(this.master),c.start(d,Math.random()*.5,s+.05)}tone(t,e,n,s="sine",r,a=0){const o=this.ctx,l=o.createOscillator();l.type=s;const c=o.createGain(),h=o.currentTime+a;l.frequency.setValueAtTime(t,h),r&&l.frequency.exponentialRampToValueAtTime(r,h+n),c.gain.setValueAtTime(e,h),c.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(this.master),l.start(h),l.stop(h+n+.02)}clash(t){if(!this.ctx)return;const e=620+Math.random()*520,n=.15+t*.85;for(const[s,r]of[[1,.2],[2.76,.14],[5.4,.09],[8.93,.05]])this.tone(e*s,r*n,.12+.45*t*(1/Math.sqrt(s)));this.burstNoise(3500+Math.random()*2500,1.2,.5*n,.07+.08*t),t>.5&&this.tone(140,.5*t,.18,"sine",50)}rim(t){this.ctx&&(this.tone(260+Math.random()*60,.25*t+.05,.2,"triangle",150),this.burstNoise(1800,2,.25*t+.05,.08))}burst(){if(this.ctx){this.burstNoise(900,.6,1,.5,"lowpass"),this.burstNoise(5200,.8,.7,.18),this.tone(110,.9,.45,"sine",35);for(let t=0;t<4;t++)this.tone(900+Math.random()*2600,.12,.5+Math.random()*.5)}}ringOut(){this.ctx&&(this.tone(700,.3,.6,"sawtooth",90),this.burstNoise(1200,.7,.5,.5))}spinOut(){this.ctx&&(this.tone(180,.35,.7,"triangle",40),this.burstNoise(600,1,.3,.4))}launch(t){this.ctx&&(this.tone(180,.3,.3,"sawtooth",t?1500:900),this.burstNoise(2600,.8,.35,.22),t&&this.tone(1760,.15,.35))}ability(t){this.ctx&&(t==="brake"?(this.burstNoise(900,1.2,.5,.28,"lowpass"),this.tone(160,.3,.3,"sawtooth",50)):t==="spring"?(this.tone(220,.3,.3,"triangle",720),this.tone(330,.2,.2,"sine",980)):t==="dash"?(this.burstNoise(1500,.9,.5,.25),this.tone(300,.25,.22,"sawtooth",1100)):(this.tone(220,.35,.3,"square",180),this.tone(1320,.1,.25)))}land(){this.ctx&&(this.tone(110,.55,.45,"sine",40),this.burstNoise(500,.8,.8,.25,"lowpass"),this.tone(1500,.12,.3,"triangle",500))}release(){this.ctx&&(this.burstNoise(3e3,1,.45,.22),this.tone(200,.3,.3,"sawtooth",1500),this.tone(1800,.15,.25))}boost(){this.ctx&&(this.burstNoise(2200,.7,.4,.2),this.tone(220,.18,.18,"sawtooth",900))}strike(){this.ctx&&(this.burstNoise(5200,1.5,.3,.09),this.tone(1400,.1,.1,"triangle",2400))}power(){this.ctx&&(this.tone(95,.9,.35,"sine",38),this.burstNoise(700,.6,.7,.22,"lowpass"),this.tone(2100,.16,.5))}wallBreak(){if(this.ctx){this.burstNoise(500,.5,1,.6,"lowpass"),this.burstNoise(3800,.9,.5,.25),this.tone(70,.8,.5,"sine",30);for(let t=0;t<5;t++)this.tone(500+Math.random()*1800,.1,.3+Math.random()*.5)}}superFx(){if(this.ctx){this.tone(120,.4,.45,"sawtooth",1800),this.tone(60,1,.7,"sine",28),this.burstNoise(400,.5,1,.7,"lowpass"),this.burstNoise(6e3,.7,.4,.35);for(let t=0;t<3;t++)this.tone(700+t*520,.14,.7)}}superEl(t){if(this.ctx)switch(t){case"thermal":this.burstNoise(180,.7,1,1.6,"lowpass",0,900),this.tone(70,.5,1.4,"sawtooth",240);for(let e=0;e<6;e++)this.burstNoise(2500+Math.random()*3e3,3,.25,.05,"bandpass",.2+e*.2);break;case"cryo":[3900,3100,2350,1750].forEach((e,n)=>this.tone(e,.16,.7,"sine",e*.985,n*.06)),this.burstNoise(7e3,.8,.5,.6,"highpass"),this.burstNoise(1800,4,.8,.07,"bandpass",.22),this.tone(85,.7,.4,"sine",40,.22);break;case"volt":this.tone(100,.3,1.2,"square"),this.tone(151,.2,1.2,"sawtooth");for(let e=0;e<9;e++)this.burstNoise(3500+Math.random()*4e3,2.5,.45,.05,"bandpass",e*.11+Math.random()*.05);break;case"gale":this.burstNoise(300,2.2,1,2,"bandpass",0,2600),this.burstNoise(700,1.2,.5,2,"bandpass",0,4200),this.burstNoise(3e3,.7,.9,.25,"bandpass",2.1);break;case"quake":this.tone(58,1,1.3,"sine",22),this.burstNoise(120,.6,1,1.4,"lowpass");for(let e=0;e<6;e++)this.tone(90+Math.random()*90,.45,.16,"triangle",45,.1+e*.13);break;case"plasma":this.tone(300,.3,.35,"sawtooth",3200),this.burstNoise(5e3,1.2,1,.5,"bandpass",.3,900),this.tone(2400,.4,.5,"square",200,.3);break;case"gravity":this.tone(160,.7,2.4,"sine",30),this.tone(164,.5,2.4,"triangle",31),this.burstNoise(900,1.5,.5,2.4,"bandpass",0,90),this.tone(40,1,.5,"sine",160,2.5);break;case"resonance":for(let e=0;e<4;e++)for(const[n,s]of[[1,.3],[2.76,.16],[5.4,.08]])this.tone(330*n,s,.55,"sine",void 0,e*.6);break;case"mag":this.tone(520,.35,.7,"sine",80),this.tone(529,.35,.7,"sine",84),this.tone(80,.5,.5,"sawtooth",900,.7),this.burstNoise(1500,.8,.7,.3,"bandpass",.7);break}}zap(){this.ctx&&(this.burstNoise(4200+Math.random()*2e3,2,.35,.09),this.tone(1800,.08,.08,"square",500))}beep(t){this.ctx&&this.tone(t?990:495,.2,t?.4:.14,"square")}}function lf(){return new URLSearchParams(location.search).has("touch")||window.matchMedia("(pointer: coarse)").matches}function cf(i){const t=lf(),e={active:t,sx:0,sy:0,show:()=>{},update:()=>{}};if(!t)return e;document.body.classList.add("touch");const n=document.createElement("div");n.id="tc",n.className="hidden",n.innerHTML=`
    <div id="tcZone"><div id="tcBase"><div id="tcKnob"></div></div></div>
    <button id="tcSuper" class="tcb"><i></i><span></span></button>
    <button id="tcAbility" class="tcb"><i></i><span></span></button>
    <button id="tcBoost" class="tcb"><i></i><span>BOOST</span></button>
    <button id="tcMain" class="tcb"><i></i><span>STRIKE</span></button>`,document.body.appendChild(n);const s=w=>n.querySelector("#"+w),r=s("tcZone"),a=s("tcBase"),o=s("tcKnob"),l=56;let c=-1,h=0,u=0;const d=(w,T)=>{let R=w-h,C=T-u;const b=Math.hypot(R,C);b>l&&(R*=l/b,C*=l/b),e.sx=R/l,e.sy=C/l,o.style.transform=`translate(${R}px, ${C}px)`},f=()=>{c=-1,e.sx=e.sy=0,a.classList.remove("on"),o.style.transform=""};r.addEventListener("pointerdown",w=>{c===-1&&(c=w.pointerId,r.setPointerCapture(w.pointerId),h=w.clientX,u=w.clientY,a.style.left=`${h}px`,a.style.top=`${u}px`,a.classList.add("on"),d(h,u),w.preventDefault())}),r.addEventListener("pointermove",w=>{w.pointerId===c&&d(w.clientX,w.clientY)});for(const w of["pointerup","pointercancel"])r.addEventListener(w,T=>{T.pointerId===c&&f()});const g=(w,T,R)=>{const C=s(w);C.addEventListener("pointerdown",b=>{C.setPointerCapture(b.pointerId),C.classList.add("down"),T(),b.preventDefault()});for(const b of["pointerup","pointercancel"])C.addEventListener(b,()=>{C.classList.remove("down"),R?.()});return C},v=g("tcMain",i.mainDown,i.mainUp),m=g("tcBoost",i.boost),p=g("tcAbility",i.ability),M=g("tcSuper",i.super),x=(w,T)=>w.firstElementChild.style.height=`${Math.max(0,Math.min(1,T))*100}%`,_=(w,T)=>{const R=w.lastElementChild;R.textContent!==T&&(R.textContent=T)};return e.show=w=>{n.classList.toggle("hidden",!w),w||f()},e.update=w=>{_(v,w.launching?"LAUNCH":"STRIKE"),_(p,w.ability),x(v,w.launching?0:w.strike),x(m,w.boost),x(p,w.abilityCd),m.classList.toggle("dim",w.launching),p.classList.toggle("dim",w.launching),_(M,w.superMeter>=1?w.superName:"OVERDRIVE"),x(M,1-w.superMeter),M.style.setProperty("--sc",w.superColor),M.classList.toggle("ready",w.superMeter>=1),M.classList.toggle("dim",w.launching)},e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="170",hf=0,cc=1,uf=2,tu=1,eu=2,Fn=3,pi=0,ze=1,Le=2,Wn=0,os=1,Oe=2,hc=3,uc=4,df=5,Ri=100,ff=101,pf=102,mf=103,gf=104,_f=200,vf=201,xf=202,Mf=203,vo=204,xo=205,yf=206,Sf=207,bf=208,Ef=209,Tf=210,wf=211,Af=212,Rf=213,Cf=214,Mo=0,yo=1,So=2,us=3,bo=4,Eo=5,To=6,wo=7,nu=0,Pf=1,Lf=2,fi=0,iu=1,su=2,ru=3,yl=4,Df=5,au=6,ou=7,lu=300,ds=301,fs=302,Ao=303,Ro=304,sa=306,Co=1e3,Li=1001,Po=1002,Mn=1003,If=1004,nr=1005,wn=1006,Ea=1007,Di=1008,$n=1009,cu=1010,hu=1011,Ws=1012,Sl=1013,Ni=1014,Bn=1015,Xn=1016,bl=1017,El=1018,ps=1020,uu=35902,du=1021,fu=1022,xn=1023,pu=1024,mu=1025,ls=1026,ms=1027,gu=1028,Tl=1029,_u=1030,wl=1031,Al=1033,Nr=33776,Or=33777,Fr=33778,Br=33779,Lo=35840,Do=35841,Io=35842,Uo=35843,No=36196,Oo=37492,Fo=37496,Bo=37808,ko=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Ko=37819,Jo=37820,Zo=37821,kr=36492,jo=36494,Qo=36495,vu=36283,tl=36284,el=36285,nl=36286,Uf=3200,Nf=3201,xu=0,Of=1,li="",nn="srgb",Ms="srgb-linear",ra="linear",ce="srgb",Vi=7680,dc=519,Ff=512,Bf=513,kf=514,Mu=515,zf=516,Hf=517,Gf=518,Vf=519,fc=35044,pc="300 es",kn=2e3,qr=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,il=180/Math.PI;function Ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Wf(i,t){return(i%t+t)%t}function wa(i,t,e){return(1-e)*i+e*t}function Cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],x=s[4],_=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*m+o*x+l*T,r[6]=a*p+o*_+l*R,r[1]=c*v+h*M+u*w,r[4]=c*m+h*x+u*T,r[7]=c*p+h*_+u*R,r[2]=d*v+f*M+g*w,r[5]=d*m+f*x+g*T,r[8]=d*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Xt;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xf(){const i=Yr("canvas");return i.style.display="block",i}const mc={};function Os(i){i in mc||(mc[i]=!0,console.warn(i))}function qf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $f(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gc=[.64,.33,.3,.6,.15,.06],_c=[.2126,.7152,.0722],vc=[.3127,.329],xc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ms]:{primaries:gc,whitePoint:vc,transfer:ra,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:gc,whitePoint:vc,transfer:ce,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let Wi;class Kf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=Yr("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jf=0;class Su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ra(s[a].image)):r.push(Ra(s[a]))}else r=Ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zf=0;class He extends ys{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Li,s=Li,r=wn,a=Di,o=xn,l=$n,c=He.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ss(),this.name="",this.source=new Su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=lu;He.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(f+1)/2,w=(p+1)/2,T=(h+d)/4,R=(u+v)/4,C=(g+m)/4;return x>_&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=R/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends jf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qf extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,p*M);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}const _=o*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new L,yc=new Zs;class bs{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),sr.subVectors(this.max,Ps),Xi.subVectors(t.a,Ps),qi.subVectors(t.b,Ps),Yi.subVectors(t.c,Ps),Qn.subVectors(qi,Xi),ti.subVectors(Yi,qi),xi.subVectors(Xi,Yi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-xi.z,xi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,xi.z,0,-xi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-xi.y,xi.x,0];return!Pa(e,Xi,qi,Yi,sr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Xi,qi,Yi,sr))?!1:(rr.crossVectors(Qn,ti),e=[rr.x,rr.y,rr.z],Pa(e,Xi,qi,Yi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new L,new L,new L,new L,new L,new L,new L,new L],un=new L,ir=new bs,Xi=new L,qi=new L,Yi=new L,Qn=new L,ti=new L,xi=new L,Ps=new L,sr=new L,rr=new L,Mi=new L;function Pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tp=new bs,Ls=new L,La=new L;class Es{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(La)),this.expandByPoint(Ls.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,Da=new L,ar=new L,ei=new L,Ia=new L,or=new L,Ua=new L;class aa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Da);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=ei.dot(this.direction),l=-ei.dot(ar),c=ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(ar,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){Ia.subVectors(e,t),or.subVectors(n,t),Ua.crossVectors(Ia,or);let a=this.direction.dot(Ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const l=o*this.direction.dot(or.crossVectors(ei,or));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(ei));if(c<0||l+c>a)return null;const h=-o*ei.dot(Ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ni.crossVectors(n,Ke),ni.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ni.crossVectors(n,Ke)),ni.normalize(),lr.crossVectors(Ke,ni),s[0]=ni.x,s[4]=lr.x,s[8]=Ke.x,s[1]=ni.y,s[5]=lr.y,s[9]=Ke.y,s[2]=ni.z,s[6]=lr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],x=n[7],_=n[11],w=n[15],T=s[0],R=s[4],C=s[8],b=s[12],S=s[1],D=s[5],H=s[9],B=s[13],W=s[2],Y=s[6],I=s[10],k=s[14],F=s[3],J=s[7],ht=s[11],pt=s[15];return r[0]=a*T+o*S+l*W+c*F,r[4]=a*R+o*D+l*Y+c*J,r[8]=a*C+o*H+l*I+c*ht,r[12]=a*b+o*B+l*k+c*pt,r[1]=h*T+u*S+d*W+f*F,r[5]=h*R+u*D+d*Y+f*J,r[9]=h*C+u*H+d*I+f*ht,r[13]=h*b+u*B+d*k+f*pt,r[2]=g*T+v*S+m*W+p*F,r[6]=g*R+v*D+m*Y+p*J,r[10]=g*C+v*H+m*I+p*ht,r[14]=g*b+v*B+m*k+p*pt,r[3]=M*T+x*S+_*W+w*F,r[7]=M*R+x*D+_*Y+w*J,r[11]=M*C+x*H+_*I+w*ht,r[15]=M*b+x*B+_*k+w*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,_=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,w=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,T=e*M+n*x+s*_+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=M*R,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=x*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=_*R,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*R,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=w*R,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,x=l*h,_=l*u,w=n.x,T=n.y,R=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+_)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-M)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/r,h=1/a,u=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=kn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===kn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===qr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,v;if(o===kn)g=(a+r)*u,v=-2*u;else if(o===qr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new L,dn=new de,ep=new L(0,0,0),np=new L(1,1,1),ni=new L,lr=new L,Ke=new L,Sc=new de,bc=new Zs;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const Ec=new L,Ki=new Zs,Un=new de,cr=new L,Ds=new L,sp=new L,rp=new Zs,Tc=new L(1,0,0),wc=new L(0,1,0),Ac=new L(0,0,1),Rc={type:"added"},ap={type:"removed"},Ji={type:"childadded",child:null},Na={type:"childremoved",child:null};class we extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new L,e=new Cn,n=new Zs,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Xt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ds,cr,this.up):Un.lookAt(cr,Ds,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Un),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new L,Nn=new L,Oa=new L,On=new L,Zi=new L,ji=new L,Cc=new L,Fa=new L,Ba=new L,ka=new L,za=new ue,Ha=new ue,Ga=new ue;class vn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Nn.subVectors(n,e),Oa.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Nn),l=fn.dot(Oa),c=Nn.dot(Nn),h=Nn.dot(Oa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return za.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Nn.subVectors(t,e),fn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Zi.subVectors(s,n),ji.subVectors(r,n),Fa.subVectors(t,n);const l=Zi.dot(Fa),c=ji.dot(Fa);if(l<=0&&c<=0)return e.copy(n);Ba.subVectors(t,s);const h=Zi.dot(Ba),u=ji.dot(Ba);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Zi,a);ka.subVectors(t,r);const f=Zi.dot(ka),g=ji.dot(ka);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Cc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Cc,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Zi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Wf(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Va(a,r,t+1/3),this.g=Va(a,r,t),this.b=Va(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Pe(Ne.r*255,0,255))*65536+Math.round(Pe(Ne.g*255,0,255))*256+Math.round(Pe(Ne.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=nn){te.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(hr);const n=wa(ii.h,hr.h,e),s=wa(ii.s,hr.s,e),r=wa(ii.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Bt;Bt.NAMES=Eu;let op=0;class zi extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ss(),this.name="",this.blending=os,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new L,ur=new Q;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class Tu extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lp=0;const tn=new de,Wa=new we,Qi=new L,Je=new bs,Is=new bs,Ce=new L;class ye extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?wu:Tu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Je.min,Is.min),Je.expandByPoint(Ce),Ce.addVectors(Je.max,Is.max),Je.expandByPoint(Ce)):(Je.expandByPoint(Is.min),Je.expandByPoint(Is.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ce.add(Qi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,d=new Q,f=new Q,g=new Q,v=new L,m=new L;function p(C,b,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(v),o[b].add(v),o[S].add(v),l[C].add(m),l[b].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,b=M.length;C<b;++C){const S=M[C],D=S.start,H=S.count;for(let B=D,W=D+H;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new L,_=new L,w=new L,T=new L;function R(C){w.fromBufferAttribute(s,C),T.copy(w);const b=o[C];x.copy(b),x.sub(w.multiplyScalar(w.dot(b))).normalize(),_.crossVectors(T,b);const D=_.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,D)}for(let C=0,b=M.length;C<b;++C){const S=M[C],D=S.start,H=S.count;for(let B=D,W=D+H;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new de,yi=new aa,dr=new Es,Lc=new L,fr=new L,pr=new L,mr=new L,Xa=new L,gr=new L,Dc=new L,_r=new L;class dt extends we{constructor(t=new ye,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,t),a?gr.addScaledVector(Xa,h):gr.addScaledVector(Xa.sub(e),h))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(dr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(dr,Lc)===null||yi.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,w=x;_<w;_+=3){const T=o.getX(_),R=o.getX(_+1),C=o.getX(_+2);s=vr(this,p,t,n,c,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=vr(this,a,t,n,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,w=x;_<w;_+=3){const T=_,R=_+1,C=_+2;s=vr(this,p,t,n,c,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,_=m+2;s=vr(this,a,t,n,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cp(i,t,e,n,s,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function vr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const h=cp(i,t,e,n,fr,pr,mr,Dc);if(h){const u=new L;vn.getBarycoord(Dc,fr,pr,mr,u),s&&(h.uv=vn.getInterpolatedAttribute(s,o,l,c,u,new Q)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(fr,pr,mr,d.normal),h.face=d,h.barycoord=u}return h}class he extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(v,m,p,M,x,_,w,T,R,C,b){const S=_/R,D=w/C,H=_/2,B=w/2,W=T/2,Y=R+1,I=C+1;let k=0,F=0;const J=new L;for(let ht=0;ht<I;ht++){const pt=ht*D-B;for(let Dt=0;Dt<Y;Dt++){const zt=Dt*S-H;J[v]=zt*M,J[m]=pt*x,J[p]=W,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(Dt/R),u.push(1-ht/C),k+=1}}for(let ht=0;ht<C;ht++)for(let pt=0;pt<R;pt++){const Dt=d+pt+Y*ht,zt=d+pt+Y*(ht+1),X=d+(pt+1)+Y*(ht+1),nt=d+(pt+1)+Y*ht;l.push(Dt,zt,nt),l.push(zt,X,nt),F+=6}o.addGroup(f,F,b),f+=F,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=gs(i[e]);for(const s in n)t[s]=n[s]}return t}function hp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Xs={clone:gs,merge:Fe};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new L,Ic=new Q,Uc=new Q;class Be extends Ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Uc),e.subVectors(Uc,Ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class fp extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new Be(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new Be(ts,es,t,e);a.layers=this.layers,this.add(a);const o=new Be(ts,es,t,e);o.layers=this.layers,this.add(o);const l=new Be(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new Be(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends He{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pp extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});r.uniforms.tEquirect.value=e;const a=new dt(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=wn),new fp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const qa=new L,mp=new L,gp=new Xt;class wi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Es,xr=new L;class Cl{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+g,_+M).normalize(),n[3].setComponents(l-a,d-h,m-g,_-M).normalize(),n[4].setComponents(l-o,d-u,m-v,_-x).normalize(),e===kn)n[5].setComponents(l+o,d+u,m+v,_+x).normalize();else if(e===qr)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class oa extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<c;x++){const _=x*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,_=M+c*(p+1),w=M+1+c*(p+1),T=M+1+c*p;f.push(x,_,T),f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,$0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:Mp,alphamap_pars_fragment:yp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Ep,aomap_pars_fragment:Tp,batching_pars_vertex:wp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Lp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:zp,common:Hp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:$p,colorspace_pars_fragment:Kp,envmap_fragment:Jp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:xm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:wm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Im,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:$m,dithering_fragment:Km,dithering_pars_fragment:Jm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:v0,backgroundCube_vert:x0,backgroundCube_frag:M0,cube_vert:y0,cube_frag:S0,depth_vert:b0,depth_frag:E0,distanceRGBA_vert:T0,distanceRGBA_frag:w0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:I0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:O0,meshnormal_vert:F0,meshnormal_frag:B0,meshphong_vert:k0,meshphong_frag:z0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:$0,sprite_vert:K0,sprite_frag:J0},ut={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Tn={basic:{uniforms:Fe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Fe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Fe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Fe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Fe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Fe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Fe([ut.points,ut.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Fe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Fe([ut.common,ut.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Fe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Fe([ut.sprite,ut.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Fe([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Fe([ut.lights,ut.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Tn.physical={uniforms:Fe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Mr={r:0,b:0,g:0},bi=new Cn,Z0=new de;function j0(i,t,e,n,s,r,a){const o=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const _=g(M);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===sa)?(h===void 0&&(h=new dt(new he(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:gs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(x.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(bi)),h.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new dt(new oa(2,2),new ke({name:"BackgroundMaterial",uniforms:gs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Mr,Au(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m}}function Q0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,H,B,W){let Y=!1;const I=u(B,H,D);r!==I&&(r=I,c(r.object)),Y=f(S,B,H,W),Y&&g(S,B,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(S,D,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,H){const B=H.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Y=W[D.id];Y===void 0&&(Y={},W[D.id]=Y);let I=Y[B];return I===void 0&&(I=d(l()),Y[B]=I),I}function d(S){const D=[],H=[],B=[];for(let W=0;W<e;W++)D[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,H,B){const W=r.attributes,Y=D.attributes;let I=0;const k=H.getAttributes();for(const F in k)if(k[F].location>=0){const ht=W[F];let pt=Y[F];if(pt===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),ht===void 0||ht.attribute!==pt||pt&&ht.data!==pt.data)return!0;I++}return r.attributesNum!==I||r.index!==B}function g(S,D,H,B){const W={},Y=D.attributes;let I=0;const k=H.getAttributes();for(const F in k)if(k[F].location>=0){let ht=Y[F];ht===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const pt={};pt.attribute=ht,ht&&ht.data&&(pt.data=ht.data),W[F]=pt,I++}r.attributes=W,r.attributesNum=I,r.index=B}function v(){const S=r.newAttributes;for(let D=0,H=S.length;D<H;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const H=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;H[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),W[S]!==D&&(i.vertexAttribDivisor(S,D),W[S]=D)}function M(){const S=r.newAttributes,D=r.enabledAttributes;for(let H=0,B=D.length;H<B;H++)D[H]!==S[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function x(S,D,H,B,W,Y,I){I===!0?i.vertexAttribIPointer(S,D,H,W,Y):i.vertexAttribPointer(S,D,H,B,W,Y)}function _(S,D,H,B){v();const W=B.attributes,Y=H.getAttributes(),I=D.defaultAttributeValues;for(const k in Y){const F=Y[k];if(F.location>=0){let J=W[k];if(J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const ht=J.normalized,pt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;const zt=Dt.buffer,X=Dt.type,nt=Dt.bytesPerElement,st=X===i.INT||X===i.UNSIGNED_INT||J.gpuType===Sl;if(J.isInterleavedBufferAttribute){const tt=J.data,bt=tt.stride,kt=J.offset;if(tt.isInstancedInterleavedBuffer){for(let It=0;It<F.locationSize;It++)p(F.location+It,tt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let It=0;It<F.locationSize;It++)m(F.location+It);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let It=0;It<F.locationSize;It++)x(F.location+It,pt/F.locationSize,X,ht,bt*nt,(kt+pt/F.locationSize*It)*nt,st)}else{if(J.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt,J.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let tt=0;tt<F.locationSize;tt++)m(F.location+tt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let tt=0;tt<F.locationSize;tt++)x(F.location+tt,pt/F.locationSize,X,ht,pt*nt,pt/F.locationSize*tt*nt,st)}}else if(I!==void 0){const ht=I[k];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(F.location,ht);break;case 3:i.vertexAttrib3fv(F.location,ht);break;case 4:i.vertexAttrib4fv(F.location,ht);break;default:i.vertexAttrib1fv(F.location,ht)}}}}M()}function w(){C();for(const S in n){const D=n[S];for(const H in D){const B=D[H];for(const W in B)h(B[W].object),delete B[W];delete D[H]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const H in D){const B=D[H];for(const W in B)h(B[W].object),delete B[W];delete D[H]}delete n[S.id]}function R(S){for(const D in n){const H=n[D];if(H[S.id]===void 0)continue;const B=H[S.id];for(const W in B)h(B[W].object),delete B[W];delete H[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function tg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,maxSamples:T}}function ng(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new wi,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let _=p.clippingState||null;l.value=_,_=h(g,d,x,f);for(let w=0;w!==x;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ig(i){let t=new WeakMap;function e(a,o){return o===Ao?a.mapping=ds:o===Ro&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===Ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pl extends Ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rs=4,Nc=[.125,.215,.35,.446,.526,.582],Ci=20,Ya=new Pl,Oc=new Bt;let $a=null,Ka=0,Ja=0,Za=!1;const Ai=(1+Math.sqrt(5))/2,ns=1/Ai,Fc=[new L(-Ai,ns,0),new L(Ai,ns,0),new L(-ns,0,Ai),new L(ns,0,Ai),new L(0,Ai,-ns),new L(0,Ai,ns),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class $r{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ka,Ja),this._renderer.xr.enabled=Za,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Xn,format:xn,colorSpace:Ms,depthBuffer:!1},s=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oc),h.toneMapping=fi,h.autoClear=!1;const f=new xe({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new dt(new he,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Oc),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;yr(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let M=0;for(let R=0;R<Ci;++R){const C=R/v,b=Math.exp(-C*C/2);p.push(b),R===0?M+=b:R<m&&(M+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],w=3*_*(s>x-rs?s-x+rs:0),T=4*(this._cubeSize-_);yr(e,w,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Ya)}}function sg(i){const t=[],e=[],n=[];let s=i;const r=i-rs+1+Nc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-rs?l=Nc[a-i+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,C=T>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];M.set(b,v*g*T),x.set(d,m*g*T);const S=[T,T,T,T,T,T];_.set(S,p*g*T)}const w=new ye;w.setAttribute("position",new Ge(M,v)),w.setAttribute("uv",new Ge(x,m)),w.setAttribute("faceIndex",new Ge(_,p)),t.push(w),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){const n=new yn(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){const n=new Float32Array(Ci),s=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function kc(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zc(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function ag(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ao||l===Ro,h=l===ds||l===fs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new $r(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $r(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){const w=M[x+0],T=M[x+1],R=M[x+2];d.push(w,T,T,R,R,w)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const w=x+0,T=x+1,R=x+2;d.push(w,T,T,R,R,w)}}else return;const m=new(yu(d)?wu:Tu)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let w=o.attributes.position.count*_,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*T*4*u),C=new bu(R,w,T,u);C.type=Bn,C.needsUpdate=!0;const b=_*4;for(let D=0;D<u;D++){const H=p[D],B=M[D],W=x[D],Y=w*T*4*D;for(let I=0;I<H.count;I++){const k=I*b;g===!0&&(s.fromBufferAttribute(H,I),R[Y+k+0]=s.x,R[Y+k+1]=s.y,R[Y+k+2]=s.z,R[Y+k+3]=0),v===!0&&(s.fromBufferAttribute(B,I),R[Y+k+4]=s.x,R[Y+k+5]=s.y,R[Y+k+6]=s.z,R[Y+k+7]=0),m===!0&&(s.fromBufferAttribute(W,I),R[Y+k+8]=s.x,R[Y+k+9]=s.y,R[Y+k+10]=s.z,R[Y+k+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Q(w,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Lu extends He{constructor(t,e,n,s,r,a,o,l,c,h=ls){if(h!==ls&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Ni),n===void 0&&h===ms&&(n=ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Du=new He,Hc=new Lu(1,1),Iu=new bu,Uu=new Qf,Nu=new Cu,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),Re(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Re(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Re(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Mu,r=Hc):r=Du,e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uu,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nu,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Iu,s)}function Dg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return Eg;case 36294:return Tg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ig(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Og(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kg(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function Hg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Du,r[a])}function Kg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uu,r[a])}function Jg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nu,r[a])}function Zg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Iu,r[a])}function jg(i){switch(i){case 5126:return Ig;case 35664:return Ug;case 35665:return Ng;case 35666:return Og;case 35674:return Fg;case 35675:return Bg;case 35676:return kg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Yc(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),a=ja.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yc(e,c===void 0?new Qg(o,i,t):new t_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new e_(o),Yc(e,u)),e=u}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);n_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let s_=0;function r_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Kc=new Xt;function a_(i){te._getMatrix(Kc,te.workingColorSpace,i);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r_(i.getShaderSource(t),a)}else return s}function o_(i,t){const e=a_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l_(i,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case yl:e="ACESFilmic";break;case au:e="AgX";break;case ou:e="Neutral";break;case Df:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new L;function c_(){te.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function u_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(f_,m_)}const p_=new Map;function m_(i,t){let e=Yt[t];if(e===void 0){const n=p_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(g_,__)}function __(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function v_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nu:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case Lf:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=v_(e),c=x_(e),h=M_(e),u=y_(e),d=S_(e),f=h_(e),g=u_(r),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==fi?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=sl(a),a=Zc(a,e),a=jc(a,e),o=sl(o),o=Zc(o,e),o=jc(o,e),a=Qc(a),o=Qc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,_=M+p+o,w=$c(s,s.VERTEX_SHADER,x),T=$c(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(w).trim(),W=s.getShaderInfoLog(T).trim();let Y=!0,I=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,T);else{const k=Jc(s,w,"vertex"),F=Jc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+k+`
`+F)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(I=!1);I&&(D.diagnostics={runnable:Y,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(T),C=new zr(s,v),b=d_(s,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,i_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let E_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=E_++,this.code=t,this.usedTimes=0}}function A_(i,t,e,n,s,r,a){const o=new Rl,l=new T_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,H,B){const W=H.fog,Y=B.geometry,I=b.isMeshStandardMaterial?H.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),F=k&&k.mapping===sa?k.image.height:null,J=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=ht!==void 0?ht.length:0;let Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let zt,X,nt,st;if(J){const le=Tn[J];zt=le.vertexShader,X=le.fragmentShader}else zt=b.vertexShader,X=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),st=l.getFragmentShaderID(b);const tt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),kt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,ne=!!b.map,j=!!b.matcap,ot=!!k,P=!!b.aoMap,Pt=!!b.lightMap,it=!!b.bumpMap,St=!!b.normalMap,ct=!!b.displacementMap,Ot=!!b.emissiveMap,Mt=!!b.metalnessMap,A=!!b.roughnessMap,y=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,et=b.iridescence>0,K=b.sheen>0,wt=b.transmission>0,ft=y&&!!b.anisotropyMap,yt=z&&!!b.clearcoatMap,$t=z&&!!b.clearcoatNormalMap,rt=z&&!!b.clearcoatRoughnessMap,Et=et&&!!b.iridescenceMap,Ft=et&&!!b.iridescenceThicknessMap,Ht=K&&!!b.sheenColorMap,Tt=K&&!!b.sheenRoughnessMap,Qt=!!b.specularMap,qt=!!b.specularColorMap,fe=!!b.specularIntensityMap,U=wt&&!!b.transmissionMap,mt=wt&&!!b.thicknessMap,q=!!b.gradientMap,Z=!!b.alphaMap,xt=b.alphaTest>0,_t=!!b.alphaHash,Vt=!!b.extensions;let Se=fi;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ie={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:zt,fragmentShader:X,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:st,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:kt,instancingColor:kt&&B.instanceColor!==null,instancingMorph:kt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ms,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:j,envMap:ot,envMapMode:ot&&k.mapping,envMapCubeUVHeight:F,aoMap:P,lightMap:Pt,bumpMap:it,normalMap:St,displacementMap:d&&ct,emissiveMap:Ot,normalMapObjectSpace:St&&b.normalMapType===Of,normalMapTangentSpace:St&&b.normalMapType===xu,metalnessMap:Mt,roughnessMap:A,anisotropy:y,anisotropyMap:ft,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:$t,clearcoatRoughnessMap:rt,dispersion:$,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:K,sheenColorMap:Ht,sheenRoughnessMap:Tt,specularMap:Qt,specularColorMap:qt,specularIntensityMap:fe,transmission:wt,transmissionMap:U,thicknessMap:mt,gradientMap:q,opaque:b.transparent===!1&&b.blending===os&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:xt,alphaHash:_t,combine:b.combine,mapUv:ne&&v(b.map.channel),aoMapUv:P&&v(b.aoMap.channel),lightMapUv:Pt&&v(b.lightMap.channel),bumpMapUv:it&&v(b.bumpMap.channel),normalMapUv:St&&v(b.normalMap.channel),displacementMapUv:ct&&v(b.displacementMap.channel),emissiveMapUv:Ot&&v(b.emissiveMap.channel),metalnessMapUv:Mt&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:ft&&v(b.anisotropyMap.channel),clearcoatMapUv:yt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(b.sheenRoughnessMap.channel),specularMapUv:Qt&&v(b.specularMap.channel),specularColorMapUv:qt&&v(b.specularColorMap.channel),specularIntensityMapUv:fe&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:mt&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(ne||Z),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Le,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const S=g[b.type];let D;if(S){const H=Tn[S];D=Xs.clone(H.uniforms)}else D=b.uniforms;return D}function w(b,S){let D;for(let H=0,B=h.length;H<B;H++){const W=h[H];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new b_(i,S,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function R_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||C_),n.length>1&&n.sort(d||eh),s.length>1&&s.sort(d||eh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function P_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function D_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){const t=new L_,e=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new de,a=new de;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,x=0,_=0,w=0,T=0,R=0;c.sort(U_);for(let b=0,S=c.length;b<S;b++){const D=c[b],H=D.color,B=D.intensity,W=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(D.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(D.sh.coefficients[I],B);R++}else if(D.isDirectionalLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,F=e.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=I,f++}else if(D.isSpotLight){const I=t.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(H).multiplyScalar(B),I.distance=W,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,n.spot[v]=I;const k=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,k.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=k.matrix,D.castShadow){const F=e.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=Y,_++}v++}else if(D.isRectAreaLight){const I=t.get(D);I.color.copy(H).multiplyScalar(B),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=I,m++}else if(D.isPointLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const k=D.shadow,F=e.get(D);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=I,g++}else if(D.isHemisphereLight){const I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(B),I.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==w||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=w,C.numLightProbes=R,n.version=I_++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function ih(i){const t=new N_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function O_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ih(i),t.set(s,[o])):r>=a.length?(o=new ih(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class F_ extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B_ extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`;function H_(i,t,e){let n=new Cl;const s=new Q,r=new Q,a=new ue,o=new F_({depthPacking:Nf}),l=new B_,c={},h=e.maxTextureSize,u={[pi]:ze,[ze]:pi,[Le]:Le},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:k_,fragmentShader:z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let p=this.type;this.render=function(T,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Wn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==Fn&&this.type===Fn,W=p===Fn&&this.type!==Fn;for(let Y=0,I=T.length;Y<I;Y++){const k=T[Y],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const J=F.getFrameExtents();if(s.multiply(J),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,F.mapSize.y=r.y)),F.map===null||B===!0||W===!0){const pt=this.type!==Fn?{minFilter:Mn,magFilter:Mn}:{};F.map!==null&&F.map.dispose(),F.map=new yn(s.x,s.y,pt),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ht=F.getViewportCount();for(let pt=0;pt<ht;pt++){const Dt=F.getViewport(pt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),H.viewport(a),F.updateMatrices(k,pt),n=F.getFrustum(),_(R,C,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Fn&&M(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function M(T,R){const C=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,C,f,v,null)}function x(T,R,C,b){let S=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=S.uuid,B=R.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let Y=W[B];Y===void 0&&(Y=S.clone(),W[B]=Y,R.addEventListener("dispose",w)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,b===Fn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=C}return S}function _(T,R,C,b,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const B=t.update(T),W=T.material;if(Array.isArray(W)){const Y=B.groups;for(let I=0,k=Y.length;I<k;I++){const F=Y[I],J=W[F.materialIndex];if(J&&J.visible){const ht=x(T,J,b,S);T.onBeforeShadow(i,T,R,C,B,ht,F),i.renderBufferDirect(C,null,B,ht,T,F),T.onAfterShadow(i,T,R,C,B,ht,F)}}}else if(W.visible){const Y=x(T,W,b,S);T.onBeforeShadow(i,T,R,C,B,Y,null),i.renderBufferDirect(C,null,B,Y,T,null),T.onAfterShadow(i,T,R,C,B,Y,null)}}const H=T.children;for(let B=0,W=H.length;B<W;B++)_(H[B],R,C,b,S)}function w(T){T.target.removeEventListener("dispose",w);for(const C in c){const b=c[C],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const G_={[Mo]:yo,[So]:To,[bo]:wo,[us]:Eo,[yo]:Mo,[To]:So,[wo]:bo,[Eo]:us};function V_(i,t){function e(){let U=!1;const mt=new ue;let q=null;const Z=new ue(0,0,0,0);return{setMask:function(xt){q!==xt&&!U&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){U=xt},setClear:function(xt,_t,Vt,Se,Ie){Ie===!0&&(xt*=Se,_t*=Se,Vt*=Se),mt.set(xt,_t,Vt,Se),Z.equals(mt)===!1&&(i.clearColor(xt,_t,Vt,Se),Z.copy(mt))},reset:function(){U=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,mt=!1,q=null,Z=null,xt=null;return{setReversed:function(_t){if(mt!==_t){const Vt=t.get("EXT_clip_control");mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Se=xt;xt=null,this.setClear(Se)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?tt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(_t){q!==_t&&!U&&(i.depthMask(_t),q=_t)},setFunc:function(_t){if(mt&&(_t=G_[_t]),Z!==_t){switch(_t){case Mo:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=_t}},setLocked:function(_t){U=_t},setClear:function(_t){xt!==_t&&(mt&&(_t=1-_t),i.clearDepth(_t),xt=_t)},reset:function(){U=!1,q=null,Z=null,xt=null,mt=!1}}}function s(){let U=!1,mt=null,q=null,Z=null,xt=null,_t=null,Vt=null,Se=null,Ie=null;return{setTest:function(le){U||(le?tt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(le){mt!==le&&!U&&(i.stencilMask(le),mt=le)},setFunc:function(le,cn,Pn){(q!==le||Z!==cn||xt!==Pn)&&(i.stencilFunc(le,cn,Pn),q=le,Z=cn,xt=Pn)},setOp:function(le,cn,Pn){(_t!==le||Vt!==cn||Se!==Pn)&&(i.stencilOp(le,cn,Pn),_t=le,Vt=cn,Se=Pn)},setLocked:function(le){U=le},setClear:function(le){Ie!==le&&(i.clearStencil(le),Ie=le)},reset:function(){U=!1,mt=null,q=null,Z=null,xt=null,_t=null,Vt=null,Se=null,Ie=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,w=null,T=null,R=new Bt(0,0,0),C=0,b=!1,S=null,D=null,H=null,B=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=k>=2);let J=null,ht={};const pt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),zt=new ue().fromArray(pt),X=new ue().fromArray(Dt);function nt(U,mt,q,Z){const xt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(U,_t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<q;Vt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return _t}const st={};st[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(us),it(!1),St(cc),tt(i.CULL_FACE),P(Wn);function tt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function kt(U,mt){return u[U]!==mt?(i.bindFramebuffer(U,mt),u[U]=mt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(U,mt){let q=f,Z=!1;if(U){q=d.get(mt),q===void 0&&(q=[],d.set(mt,q));const xt=U.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Vt=xt.length;_t<Vt;_t++)q[_t]=i.COLOR_ATTACHMENT0+_t;q.length=xt.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function ne(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const j={[Ri]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};j[mf]=i.MIN,j[gf]=i.MAX;const ot={[_f]:i.ZERO,[vf]:i.ONE,[xf]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[Ef]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Rf]:i.CONSTANT_ALPHA,[Cf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,mt,q,Z,xt,_t,Vt,Se,Ie,le){if(U===Wn){v===!0&&(bt(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),U!==df){if(U!==m||le!==b){if((p!==Ri||_!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,_=Ri),le)switch(U){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oe:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,x=null,w=null,T=null,R.set(0,0,0),C=0,m=U,b=le}return}xt=xt||mt,_t=_t||q,Vt=Vt||Z,(mt!==p||xt!==_)&&(i.blendEquationSeparate(j[mt],j[xt]),p=mt,_=xt),(q!==M||Z!==x||_t!==w||Vt!==T)&&(i.blendFuncSeparate(ot[q],ot[Z],ot[_t],ot[Vt]),M=q,x=Z,w=_t,T=Vt),(Se.equals(R)===!1||Ie!==C)&&(i.blendColor(Se.r,Se.g,Se.b,Ie),R.copy(Se),C=Ie),m=U,b=!1}function Pt(U,mt){U.side===Le?bt(i.CULL_FACE):tt(i.CULL_FACE);let q=U.side===ze;mt&&(q=!q),it(q),U.blending===os&&U.transparent===!1?P(Wn):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function St(U){U!==hf?(tt(i.CULL_FACE),U!==D&&(U===cc?i.cullFace(i.BACK):U===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=U}function ct(U){U!==H&&(I&&i.lineWidth(U),H=U)}function Ot(U,mt,q){U?(tt(i.POLYGON_OFFSET_FILL),(B!==mt||W!==q)&&(i.polygonOffset(mt,q),B=mt,W=q)):bt(i.POLYGON_OFFSET_FILL)}function Mt(U){U?tt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+Y-1),J!==U&&(i.activeTexture(U),J=U)}function y(U,mt,q){q===void 0&&(J===null?q=i.TEXTURE0+Y-1:q=J);let Z=ht[q];Z===void 0&&(Z={type:void 0,texture:void 0},ht[q]=Z),(Z.type!==U||Z.texture!==mt)&&(J!==q&&(i.activeTexture(q),J=q),i.bindTexture(U,mt||st[U]),Z.type=U,Z.texture=mt)}function z(){const U=ht[J];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(U){zt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function Tt(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Qt(U,mt){let q=c.get(mt);q===void 0&&(q=new WeakMap,c.set(mt,q));let Z=q.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(mt,U.name),q.set(U,Z))}function qt(U,mt){const Z=c.get(mt).get(U);l.get(mt)!==Z&&(i.uniformBlockBinding(mt,Z,U.__bindingPointIndex),l.set(mt,Z))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,ht={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,w=null,T=null,R=new Bt(0,0,0),C=0,b=!1,S=null,D=null,H=null,B=null,W=null,zt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:bt,bindFramebuffer:kt,drawBuffers:It,useProgram:ne,setBlending:P,setMaterial:Pt,setFlipSided:it,setCullFace:St,setLineWidth:ct,setPolygonOffset:Ot,setScissorTest:Mt,activeTexture:A,bindTexture:y,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:rt,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Ht,viewport:Tt,reset:fe}}function sh(i,t,e,n){const s=W_(n);switch(e){case du:return i*t;case pu:return i*t;case mu:return i*t*2;case gu:return i*t/s.components*s.byteLength;case Tl:return i*t/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case fu:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Al:return i*t*4/s.components*s.byteLength;case Nr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Io:return Math.max(i,8)*Math.max(t,8)/2;case No:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kr:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W_(i){switch(i){case $n:case cu:return{byteLength:1,components:1};case Ws:case hu:case Xn:return{byteLength:2,components:1};case bl:case El:return{byteLength:2,components:4};case Ni:case Sl:case Bn:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):Yr("canvas")}function v(A,y,z){let $=1;const et=Mt(A);if((et.width>z||et.height>z)&&($=z/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*et.width),wt=Math.floor($*et.height);u===void 0&&(u=g(K,wt));const ft=y?g(K,wt):u;return ft.width=K,ft.height=wt,ft.getContext("2d").drawImage(A,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+wt+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,y,z,$,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),y===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){const wt=et?ra:te.getTransfer($);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=wt===ce?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,y){let z;return A?y===null||y===Ni||y===ps?z=i.DEPTH24_STENCIL8:y===Bn?z=i.DEPTH32F_STENCIL8:y===Ws&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===ps?z=i.DEPTH_COMPONENT24:y===Bn?z=i.DEPTH_COMPONENT32F:y===Ws&&(z=i.DEPTH_COMPONENT16),z}function w(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mn&&A.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&h.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),S(y)}function C(A){const y=n.get(A);if(y.__webglInit===void 0)return;const z=A.source,$=d.get(z);if($){const et=$[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(A),Object.keys($).length===0&&d.delete(z)}n.remove(A)}function b(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const z=A.source,$=d.get(z);delete $[y.__cacheKey],a.memory.textures--}function S(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let et=0;et<y.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[$][et]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=A.textures;for(let $=0,et=z.length;$<et;$++){const K=n.get(z[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(A)}let D=0;function H(){D=0}function B(){const A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Y(A,y){const z=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,A,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function I(A,y){const z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function k(A,y){const z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function F(A,y){const z=n.get(A);if(A.version>0&&z.__version!==A.version){nt(z,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const J={[Co]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},ht={[Mn]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},pt={[Ff]:i.NEVER,[Vf]:i.ALWAYS,[Bf]:i.LESS,[Mu]:i.LEQUAL,[kf]:i.EQUAL,[Gf]:i.GEQUAL,[zf]:i.GREATER,[Hf]:i.NOTEQUAL};function Dt(A,y){if(y.type===Bn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===Ea||y.magFilter===nr||y.magFilter===Di||y.minFilter===wn||y.minFilter===Ea||y.minFilter===nr||y.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,J[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,J[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,J[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mn||y.minFilter!==nr&&y.minFilter!==Di||y.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function zt(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const $=y.source;let et=d.get($);et===void 0&&(et={},d.set($,et));const K=W(y);if(K!==A.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[K].usedTimes++;const wt=et[A.__cacheKey];wt!==void 0&&(et[A.__cacheKey].usedTimes--,wt.usedTimes===0&&b(y)),A.__cacheKey=K,A.__webglTexture=et[K].texture}return z}function X(A,y,z){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const et=zt(A,y),K=y.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+z);const wt=n.get(K);if(K.version!==wt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const ft=te.getPrimaries(te.workingColorSpace),yt=y.colorSpace===li?null:te.getPrimaries(y.colorSpace),$t=y.colorSpace===li||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let rt=v(y.image,!1,s.maxTextureSize);rt=Ot(y,rt);const Et=r.convert(y.format,y.colorSpace),Ft=r.convert(y.type);let Ht=x(y.internalFormat,Et,Ft,y.colorSpace,y.isVideoTexture);Dt($,y);let Tt;const Qt=y.mipmaps,qt=y.isVideoTexture!==!0,fe=wt.__version===void 0||et===!0,U=K.dataReady,mt=w(y,rt);if(y.isDepthTexture)Ht=_(y.format===ms,y.type),fe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ht,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,rt.width,rt.height,0,Et,Ft,null));else if(y.isDataTexture)if(Qt.length>0){qt&&fe&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,Qt[0].width,Qt[0].height);for(let q=0,Z=Qt.length;q<Z;q++)Tt=Qt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,q,Ht,Tt.width,Tt.height,0,Et,Ft,Tt.data);y.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,Ft,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,rt.width,rt.height,0,Et,Ft,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ht,Qt[0].width,Qt[0].height,rt.depth);for(let q=0,Z=Qt.length;q<Z;q++)if(Tt=Qt[q],y.format!==xn)if(Et!==null)if(qt){if(U)if(y.layerUpdates.size>0){const xt=sh(Tt.width,Tt.height,y.format,y.type);for(const _t of y.layerUpdates){const Vt=Tt.data.subarray(_t*xt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,_t,Tt.width,Tt.height,1,Et,Vt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,rt.depth,Et,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ht,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,rt.depth,Et,Ft,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ht,Tt.width,Tt.height,rt.depth,0,Et,Ft,Tt.data)}else{qt&&fe&&e.texStorage2D(i.TEXTURE_2D,mt,Ht,Qt[0].width,Qt[0].height);for(let q=0,Z=Qt.length;q<Z;q++)Tt=Qt[q],y.format!==xn?Et!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,q,Ht,Tt.width,Tt.height,0,Et,Ft,Tt.data)}else if(y.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ht,rt.width,rt.height,rt.depth),U)if(y.layerUpdates.size>0){const q=sh(rt.width,rt.height,y.format,y.type);for(const Z of y.layerUpdates){const xt=rt.data.subarray(Z*q/rt.data.BYTES_PER_ELEMENT,(Z+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,Et,Ft,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ft,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,rt.width,rt.height,rt.depth,0,Et,Ft,rt.data);else if(y.isData3DTexture)qt?(fe&&e.texStorage3D(i.TEXTURE_3D,mt,Ht,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ft,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,rt.width,rt.height,rt.depth,0,Et,Ft,rt.data);else if(y.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(i.TEXTURE_2D,mt,Ht,rt.width,rt.height);else{let q=rt.width,Z=rt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ht,q,Z,0,Et,Ft,null),q>>=1,Z>>=1}}else if(Qt.length>0){if(qt&&fe){const q=Mt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ht,q.width,q.height)}for(let q=0,Z=Qt.length;q<Z;q++)Tt=Qt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et,Ft,Tt):e.texImage2D(i.TEXTURE_2D,q,Ht,Et,Ft,Tt);y.generateMipmaps=!1}else if(qt){if(fe){const q=Mt(rt);e.texStorage2D(i.TEXTURE_2D,mt,Ht,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Et,Ft,rt);m(y)&&p($),wt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function nt(A,y,z){if(y.image.length!==6)return;const $=zt(A,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const K=n.get(et);if(et.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const wt=te.getPrimaries(te.workingColorSpace),ft=y.colorSpace===li?null:te.getPrimaries(y.colorSpace),yt=y.colorSpace===li||wt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let Z=0;Z<6;Z++)!$t&&!rt?Et[Z]=v(y.image[Z],!0,s.maxCubemapSize):Et[Z]=rt?y.image[Z].image:y.image[Z],Et[Z]=Ot(y,Et[Z]);const Ft=Et[0],Ht=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),Qt=x(y.internalFormat,Ht,Tt,y.colorSpace),qt=y.isVideoTexture!==!0,fe=K.__version===void 0||$===!0,U=et.dataReady;let mt=w(y,Ft);Dt(i.TEXTURE_CUBE_MAP,y);let q;if($t){qt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Qt,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){q=Et[Z].mipmaps;for(let xt=0;xt<q.length;xt++){const _t=q[xt];y.format!==xn?Ht!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,_t.width,_t.height,Ht,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Qt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,_t.width,_t.height,Ht,Tt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Qt,_t.width,_t.height,0,Ht,Tt,_t.data)}}}else{if(q=y.mipmaps,qt&&fe){q.length>0&&mt++;const Z=Mt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et[Z].width,Et[Z].height,Ht,Tt,Et[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qt,Et[Z].width,Et[Z].height,0,Ht,Tt,Et[Z].data);for(let xt=0;xt<q.length;xt++){const Vt=q[xt].image[Z].image;qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Vt.width,Vt.height,Ht,Tt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Qt,Vt.width,Vt.height,0,Ht,Tt,Vt.data)}}else{qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ht,Tt,Et[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qt,Ht,Tt,Et[Z]);for(let xt=0;xt<q.length;xt++){const _t=q[xt];qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Ht,Tt,_t.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Qt,Ht,Tt,_t.image[Z])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),K.__version=et.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function st(A,y,z,$,et,K){const wt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),yt=x(z.internalFormat,wt,ft,z.colorSpace),$t=n.get(y),rt=n.get(z);if(rt.__renderTarget=y,!$t.__hasExternalTextures){const Et=Math.max(1,y.width>>K),Ft=Math.max(1,y.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,yt,Et,Ft,y.depth,0,wt,ft,null):e.texImage2D(et,K,yt,Et,Ft,0,wt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,rt.__webglTexture,0,it(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const $=y.depthTexture,et=$&&$.isDepthTexture?$.type:null,K=_(y.stencilBuffer,et),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=it(y);St(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,K,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{const $=y.textures;for(let et=0;et<$.length;et++){const K=$[et],wt=r.convert(K.format,K.colorSpace),ft=r.convert(K.type),yt=x(K.internalFormat,wt,ft,K.colorSpace),$t=it(y);z&&St(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,yt,y.width,y.height):St(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const et=$.__webglTexture,K=it(y);if(y.depthTexture.format===ls)St(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===ms)St(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function kt(A){const y=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=$}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),tt(y.__webglDepthbuffer[$],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),tt(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,y,z){const $=n.get(A);y!==void 0&&st($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&kt(A)}function ne(A){const y=A.texture,z=n.get(A),$=n.get(y);A.addEventListener("dispose",R);const et=A.textures,K=A.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,a.memory.textures++),K){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let yt=0;yt<y.mipmaps.length;yt++)z.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ft=0,yt=et.length;ft<yt;ft++){const $t=n.get(et[ft]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const yt=et[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const $t=r.convert(yt.format,yt.colorSpace),rt=r.convert(yt.type),Et=x(yt.internalFormat,$t,rt,yt.colorSpace,A.isXRRenderTarget===!0),Ft=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)st(z.__webglFramebuffer[ft][yt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else st(z.__webglFramebuffer[ft],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ft=0,yt=et.length;ft<yt;ft++){const $t=et[ft],rt=n.get($t);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Dt(i.TEXTURE_2D,$t),st(z.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),Dt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)st(z.__webglFramebuffer[yt],A,y,i.COLOR_ATTACHMENT0,ft,yt);else st(z.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ft,0);m(y)&&p(ft),e.unbindTexture()}A.depthBuffer&&kt(A)}function j(A){const y=A.textures;for(let z=0,$=y.length;z<$;z++){const et=y[z];if(m(et)){const K=M(A),wt=n.get(et).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}const ot=[],P=[];function Pt(A){if(A.samples>0){if(St(A)===!1){const y=A.textures,z=A.width,$=A.height;let et=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),ft=y.length>1;if(ft)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);const $t=n.get(y[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,et,i.NEAREST),l===!0&&(ot.length=0,P.length=0,ot.push(i.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ot.push(K),P.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[yt]);const $t=n.get(y[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(A){return Math.min(s.maxSamples,A.samples)}function St(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ot(A,y){const z=A.colorSpace,$=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ms&&z!==li&&(te.getTransfer(z)===ce?($!==xn||et!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=It,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=St}function q_(i,t){function e(n,s=li){let r;const a=te.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===hu)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===xn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Nr||n===Or||n===Fr||n===Br)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Oo||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Oo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Jo||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kr)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Y_ extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends ys{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Z_,m=e.getContextAttributes();let p=null,M=null;const x=[],_=[],w=new Q;let T=null;const R=new Be;R.viewport=new ue;const C=new Be;C.viewport=new ue;const b=[R,C],S=new Y_;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=x[X];return nt===void 0&&(nt=new Qa,x[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=x[X];return nt===void 0&&(nt=new Qa,x[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=x[X];return nt===void 0&&(nt=new Qa,x[X]=nt),nt.getHandSpace()};function B(X){const nt=_.indexOf(X.inputSource);if(nt===-1)return;const st=x[nt];st!==void 0&&(st.update(X.inputSource,X.frame,c||a),st.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<x.length;X++){const nt=_[X];nt!==null&&(_[X]=null,x[X].disconnect(nt))}D=null,H=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,st=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ms:ls,st=m.stencil?ps:Ni);const bt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yn(d.textureWidth,d.textureHeight,{format:xn,type:$n,depthTexture:new Lu(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(X){for(let nt=0;nt<X.removed.length;nt++){const st=X.removed[nt],tt=_.indexOf(st);tt>=0&&(_[tt]=null,x[tt].disconnect(st))}for(let nt=0;nt<X.added.length;nt++){const st=X.added[nt];let tt=_.indexOf(st);if(tt===-1){for(let kt=0;kt<x.length;kt++)if(kt>=_.length){_.push(st),tt=kt;break}else if(_[kt]===null){_[kt]=st,tt=kt;break}if(tt===-1)break}const bt=x[tt];bt&&bt.connect(st)}}const I=new L,k=new L;function F(X,nt,st){I.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(st.matrixWorld);const tt=I.distanceTo(k),bt=nt.projectionMatrix.elements,kt=st.projectionMatrix.elements,It=bt[14]/(bt[10]-1),ne=bt[14]/(bt[10]+1),j=(bt[9]+1)/bt[5],ot=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],Pt=(kt[8]+1)/kt[0],it=It*P,St=It*Pt,ct=tt/(-P+Pt),Ot=ct*-P;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ot),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Mt=It+ct,A=ne+ct,y=it-Ot,z=St+(tt-Ot),$=j*ne/A*Mt,et=ot*ne/A*Mt;X.projectionMatrix.makePerspective(y,z,$,et,Mt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let nt=X.near,st=X.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(st=v.depthFar)),S.near=C.near=R.near=nt,S.far=C.far=R.far=st,(D!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,H=S.far),R.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,S.layers.mask=R.layers.mask|C.layers.mask;const tt=X.parent,bt=S.cameras;J(S,tt);for(let kt=0;kt<bt.length;kt++)J(bt[kt],tt);bt.length===2?F(S,R,C):S.projectionMatrix.copy(R.projectionMatrix),ht(X,S,tt)};function ht(X,nt,st){st===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(st.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=il*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let pt=null;function Dt(X,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let tt=!1;st.length!==S.cameras.length&&(S.cameras.length=0,tt=!0);for(let kt=0;kt<st.length;kt++){const It=st[kt];let ne=null;if(f!==null)ne=f.getViewport(It);else{const ot=u.getViewSubImage(d,It);ne=ot.viewport,kt===0&&(t.setRenderTargetTextures(M,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(M))}let j=b[kt];j===void 0&&(j=new Be,j.layers.enable(kt),j.viewport=new ue,b[kt]=j),j.matrix.fromArray(It.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(It.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),kt===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),tt===!0&&S.cameras.push(j)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const kt=u.getDepthInformation(st[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,s.renderState)}}for(let st=0;st<x.length;st++){const tt=_[st],bt=x[st];tt!==null&&bt!==void 0&&bt.update(tt,nt,c||a)}pt&&pt(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const zt=new Pu;zt.setAnimationLoop(Dt),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const Ei=new Cn,Q_=new de;function tv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Au(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(M,w);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const _=i.createBuffer(),w=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],_=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=_.length;T<R;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,T,b,w)===!0){const H=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<B.length;Y++){const I=B[Y],k=v(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,H+W,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,_,w){const T=M.value,R=x+"_"+_;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const C=w[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(M){const x=M.uniforms;let _=0;const w=16;for(let R=0,C=x.length;R<C;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,D=b.length;S<D;S++){const H=b[S],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Y=B.length;W<Y;W++){const I=B[W],k=v(I),F=_%w,J=F%k.boundary,ht=F+J;_+=J,ht!==0&&w-ht<k.storage&&(_+=w-ht),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=k.storage}}}const T=_%w;return T>0&&(_+=w-T),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class nv{constructor(t={}){const{canvas:e=Xf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=fi,this.toneMappingExposure=1;const _=this;let w=!1,T=0,R=0,C=null,b=-1,S=null;const D=new ue,H=new ue;let B=null;const W=new Bt(0);let Y=0,I=e.width,k=e.height,F=1,J=null,ht=null;const pt=new ue(0,0,I,k),Dt=new ue(0,0,I,k);let zt=!1;const X=new Cl;let nt=!1,st=!1;const tt=new de,bt=new de,kt=new L,It=new ue,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ot(){return C===null?F:1}let P=n;function Pt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),P===null){const N="webgl2";if(P=Pt(N,E),P===null)throw Pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,St,ct,Ot,Mt,A,y,z,$,et,K,wt,ft,yt,$t,rt,Et,Ft,Ht,Tt,Qt,qt,fe,U;function mt(){it=new og(P),it.init(),qt=new q_(P,it),St=new eg(P,it,t,qt),ct=new V_(P,it),St.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ot=new hg(P),Mt=new R_,A=new X_(P,it,ct,Mt,St,qt,Ot),y=new ig(_),z=new ag(_),$=new _p(P),fe=new Q0(P,$),et=new lg(P,$,Ot,fe),K=new dg(P,et,$,Ot),Ht=new ug(P,St,A),rt=new ng(Mt),wt=new A_(_,y,z,it,St,fe,rt),ft=new tv(_,Mt),yt=new P_,$t=new O_(it),Ft=new j0(_,y,z,ct,K,f,l),Et=new H_(_,K,St),U=new ev(P,Ot,St,ct),Tt=new tg(P,it,Ot),Qt=new cg(P,it,Ot),Ot.programs=wt.programs,_.capabilities=St,_.extensions=it,_.properties=Mt,_.renderLists=yt,_.shadowMap=Et,_.state=ct,_.info=Ot}mt();const q=new j_(_,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(I,k,!1))},this.getSize=function(E){return E.set(I,k)},this.setSize=function(E,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,k=N,e.width=Math.floor(E*F),e.height=Math.floor(N*F),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(I*F,k*F).floor()},this.setDrawingBufferSize=function(E,N,G){I=E,k=N,F=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,N,G,V){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,N,G,V),ct.viewport(D.copy(pt).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(Dt)},this.setScissor=function(E,N,G,V){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,N,G,V),ct.scissor(H.copy(Dt).multiplyScalar(F).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){ct.setScissorTest(zt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,N=!0,G=!0){let V=0;if(E){let O=!1;if(C!==null){const lt=C.texture.format;O=lt===Al||lt===wl||lt===Tl}if(O){const lt=C.texture.type,vt=lt===$n||lt===Ni||lt===Ws||lt===ps||lt===bl||lt===El,At=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Gt=At.r,Wt=At.g,Ct=At.b;vt?(g[0]=Gt,g[1]=Wt,g[2]=Ct,g[3]=Rt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Gt,v[1]=Wt,v[2]=Ct,v[3]=Rt,P.clearBufferiv(P.COLOR,0,v))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),G&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),$t.dispose(),Mt.dispose(),y.dispose(),z.dispose(),K.dispose(),fe.dispose(),U.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Wl),q.removeEventListener("sessionend",Xl),vi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Ot.autoReset,N=Et.enabled,G=Et.autoUpdate,V=Et.needsUpdate,O=Et.type;mt(),Ot.autoReset=E,Et.enabled=N,Et.autoUpdate=G,Et.needsUpdate=V,Et.type=O}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const N=E.target;N.removeEventListener("dispose",Vt),Se(N)}function Se(E){Ie(E),Mt.remove(E)}function Ie(E){const N=Mt.get(E).programs;N!==void 0&&(N.forEach(function(G){wt.releaseProgram(G)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,V,O,lt){N===null&&(N=ne);const vt=O.isMesh&&O.matrixWorld.determinant()<0,At=ud(E,N,G,V,O);ct.setMaterial(V,vt);let Rt=G.index,Gt=1;if(V.wireframe===!0){if(Rt=et.getWireframeAttribute(G),Rt===void 0)return;Gt=2}const Wt=G.drawRange,Ct=G.attributes.position;let ie=Wt.start*Gt,pe=(Wt.start+Wt.count)*Gt;lt!==null&&(ie=Math.max(ie,lt.start*Gt),pe=Math.min(pe,(lt.start+lt.count)*Gt)),Rt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Rt.count)):Ct!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Ct.count));const _e=pe-ie;if(_e<0||_e===1/0)return;fe.setup(O,V,At,G,Rt);let We,re=Tt;if(Rt!==null&&(We=$.get(Rt),re=Qt,re.setIndex(We)),O.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*ot()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(O.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),ct.setLineWidth(Lt*ot()),O.isLineSegments?re.setMode(P.LINES):O.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else O.isPoints?re.setMode(P.POINTS):O.isSprite&&re.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)re.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Lt=O._multiDrawStarts,Ln=O._multiDrawCounts,ae=O._multiDrawCount,hn=Rt?$.get(Rt).bytesPerElement:1,Gi=Mt.get(V).currentProgram.getUniforms();for(let $e=0;$e<ae;$e++)Gi.setValue(P,"_gl_DrawID",$e),re.render(Lt[$e]/hn,Ln[$e])}else if(O.isInstancedMesh)re.renderInstances(ie,_e,O.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ln=Math.min(G.instanceCount,Lt);re.renderInstances(ie,_e,Ln)}else re.render(ie,_e)};function le(E,N,G){E.transparent===!0&&E.side===Le&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,er(E,N,G),E.side=pi,E.needsUpdate=!0,er(E,N,G),E.side=Le):er(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),p=$t.get(G),p.init(N),x.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const lt=O.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){const At=lt[vt];le(At,G,O),V.add(At)}else le(lt,G,O),V.add(lt)}),x.pop(),p=null,V},this.compileAsync=function(E,N,G=null){const V=this.compile(E,N,G);return new Promise(O=>{function lt(){if(V.forEach(function(vt){Mt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){O(E);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let cn=null;function Pn(E){cn&&cn(E)}function Wl(){vi.stop()}function Xl(){vi.start()}const vi=new Pu;vi.setAnimationLoop(Pn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(E){cn=E,q.setAnimationLoop(E),E===null?vi.stop():vi.start()},q.addEventListener("sessionstart",Wl),q.addEventListener("sessionend",Xl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,C),p=$t.get(E,x.length),p.init(N),x.push(p),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(bt),st=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,st),m=yt.get(E,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&xa(lt,N,-1/0,_.sortObjects)}xa(E,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,ht),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&Ft.addToRenderList(m,E),this.info.render.frame++,nt===!0&&rt.beginShadows();const G=p.state.shadowsArray;Et.render(G,E,N),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const lt=N.cameras;if(O.length>0)for(let vt=0,At=lt.length;vt<At;vt++){const Rt=lt[vt];Yl(V,O,E,Rt)}j&&Ft.render(E);for(let vt=0,At=lt.length;vt<At;vt++){const Rt=lt[vt];ql(m,E,Rt,Rt.viewport)}}else O.length>0&&Yl(V,O,E,N),j&&Ft.render(E),ql(m,E,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,N),fe.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],nt===!0&&rt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function xa(E,N,G,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){V&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const vt=K.update(E),At=E.material;At.visible&&m.push(E,vt,At,G,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const vt=K.update(E),At=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),It.copy(vt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(At)){const Rt=vt.groups;for(let Gt=0,Wt=Rt.length;Gt<Wt;Gt++){const Ct=Rt[Gt],ie=At[Ct.materialIndex];ie&&ie.visible&&m.push(E,vt,ie,G,It.z,Ct)}}else At.visible&&m.push(E,vt,At,G,It.z,null)}}const lt=E.children;for(let vt=0,At=lt.length;vt<At;vt++)xa(lt[vt],N,G,V)}function ql(E,N,G,V){const O=E.opaque,lt=E.transmissive,vt=E.transparent;p.setupLightsView(G),nt===!0&&rt.setGlobalState(_.clippingPlanes,G),V&&ct.viewport(D.copy(V)),O.length>0&&tr(O,N,G),lt.length>0&&tr(lt,N,G),vt.length>0&&tr(vt,N,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Yl(E,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Xn:$n,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const lt=p.state.transmissionRenderTarget[V.id],vt=V.viewport||D;lt.setSize(vt.z,vt.w);const At=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(W),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),j&&Ft.render(G);const Rt=_.toneMapping;_.toneMapping=fi;const Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),nt===!0&&rt.setGlobalState(_.clippingPlanes,V),tr(E,G,V),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ct=0,ie=N.length;Ct<ie;Ct++){const pe=N[Ct],_e=pe.object,We=pe.geometry,re=pe.material,Lt=pe.group;if(re.side===Le&&_e.layers.test(V.layers)){const Ln=re.side;re.side=ze,re.needsUpdate=!0,$l(_e,G,V,We,re,Lt),re.side=Ln,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}_.setRenderTarget(At),_.setClearColor(W,Y),Gt!==void 0&&(V.viewport=Gt),_.toneMapping=Rt}function tr(E,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,lt=E.length;O<lt;O++){const vt=E[O],At=vt.object,Rt=vt.geometry,Gt=V===null?vt.material:V,Wt=vt.group;At.layers.test(G.layers)&&$l(At,N,G,Rt,Gt,Wt)}}function $l(E,N,G,V,O,lt){E.onBeforeRender(_,N,G,V,O,lt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,N,G,V,E,lt),O.transparent===!0&&O.side===Le&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,_.renderBufferDirect(G,N,V,O,E,lt),O.side=pi,O.needsUpdate=!0,_.renderBufferDirect(G,N,V,O,E,lt),O.side=Le):_.renderBufferDirect(G,N,V,O,E,lt),E.onAfterRender(_,N,G,V,O,lt)}function er(E,N,G){N.isScene!==!0&&(N=ne);const V=Mt.get(E),O=p.state.lights,lt=p.state.shadowsArray,vt=O.state.version,At=wt.getParameters(E,O.state,lt,N,G),Rt=wt.getProgramCacheKey(At);let Gt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Vt),Gt=new Map,V.programs=Gt);let Wt=Gt.get(Rt);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===vt)return Jl(E,At),Wt}else At.uniforms=wt.getUniforms(E),E.onBeforeCompile(At,_),Wt=wt.acquireProgram(At,Rt),Gt.set(Rt,Wt),V.uniforms=At.uniforms;const Ct=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Jl(E,At),V.needsLights=fd(E),V.lightsStateVersion=vt,V.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Wt,V.uniformsList=null,Wt}function Kl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=zr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Jl(E,N){const G=Mt.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ud(E,N,G,V,O){N.isScene!==!0&&(N=ne),A.resetTextureUnits();const lt=N.fog,vt=V.isMeshStandardMaterial?N.environment:null,At=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ms,Rt=(V.isMeshStandardMaterial?z:y).get(V.envMap||vt),Gt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let _e=fi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=_.toneMapping);const We=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=We!==void 0?We.length:0,Lt=Mt.get(V),Ln=p.state.lights;if(nt===!0&&(st===!0||E!==S)){const Qe=E===S&&V.id===b;rt.setState(V,E,Qe)}let ae=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ln.state.version||Lt.outputColorSpace!==At||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==Rt||V.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Gt||Lt.vertexTangents!==Wt||Lt.morphTargets!==Ct||Lt.morphNormals!==ie||Lt.morphColors!==pe||Lt.toneMapping!==_e||Lt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Lt.__version=V.version);let hn=Lt.currentProgram;ae===!0&&(hn=er(V,N,O));let Gi=!1,$e=!1,As=!1;const ve=hn.getUniforms(),bn=Lt.uniforms;if(ct.useProgram(hn.program)&&(Gi=!0,$e=!0,As=!0),V.id!==b&&(b=V.id,$e=!0),Gi||S!==E){ct.buffers.depth.getReversed()?(tt.copy(E.projectionMatrix),Yf(tt),$f(tt),ve.setValue(P,"projectionMatrix",tt)):ve.setValue(P,"projectionMatrix",E.projectionMatrix),ve.setValue(P,"viewMatrix",E.matrixWorldInverse);const Zn=ve.map.cameraPosition;Zn!==void 0&&Zn.setValue(P,kt.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,$e=!0,As=!0)}if(O.isSkinnedMesh){ve.setOptional(P,O,"bindMatrix"),ve.setOptional(P,O,"bindMatrixInverse");const Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ve.setValue(P,"boneTexture",Qe.boneTexture,A))}O.isBatchedMesh&&(ve.setOptional(P,O,"batchingTexture"),ve.setValue(P,"batchingTexture",O._matricesTexture,A),ve.setOptional(P,O,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",O._indirectTexture,A),ve.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",O._colorsTexture,A));const Rs=G.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&Ht.update(O,G,hn),($e||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,ve.setValue(P,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(bn.envMap.value=Rt,bn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(bn.envMapIntensity.value=N.environmentIntensity),$e&&(ve.setValue(P,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&dd(bn,As),lt&&V.fog===!0&&ft.refreshFogUniforms(bn,lt),ft.refreshMaterialUniforms(bn,V,F,k,p.state.transmissionRenderTarget[E.id]),zr.upload(P,Kl(Lt),bn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(P,Kl(Lt),bn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(P,"center",O.center),ve.setValue(P,"modelViewMatrix",O.modelViewMatrix),ve.setValue(P,"normalMatrix",O.normalMatrix),ve.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let Zn=0,jn=Qe.length;Zn<jn;Zn++){const Zl=Qe[Zn];U.update(Zl,hn),U.bind(Zl,hn)}}return hn}function dd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function fd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,G){Mt.get(E.texture).__webglTexture=N,Mt.get(E.depthTexture).__webglTexture=G;const V=Mt.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const G=Mt.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){C=E,T=N,R=G;let V=!0,O=null,lt=!1,vt=!1;if(E){const Rt=Mt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Rt.__hasExternalTextures)A.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&Mt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);const Wt=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?O=Wt[N][G]:O=Wt[N],lt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[G]:O=Wt,D.copy(E.viewport),H.copy(E.scissor),B=E.scissorTest}else D.copy(pt).multiplyScalar(F).floor(),H.copy(Dt).multiplyScalar(F).floor(),B=zt;if(ct.bindFramebuffer(P.FRAMEBUFFER,O)&&V&&ct.drawBuffers(E,O),ct.viewport(D),ct.scissor(H),ct.setScissorTest(B),lt){const Rt=Mt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,G)}else if(vt){const Rt=Mt.get(E.texture),Gt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Gt)}b=-1},this.readRenderTargetPixels=function(E,N,G,V,O,lt,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){ct.bindFramebuffer(P.FRAMEBUFFER,At);try{const Rt=E.texture,Gt=Rt.format,Wt=Rt.type;if(!St.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&G>=0&&G<=E.height-O&&P.readPixels(N,G,V,O,qt.convert(Gt),qt.convert(Wt),lt)}finally{const Rt=C!==null?Mt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,V,O,lt,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){const Rt=E.texture,Gt=Rt.format,Wt=Rt.type;if(!St.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&G>=0&&G<=E.height-O){ct.bindFramebuffer(P.FRAMEBUFFER,At);const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,lt.byteLength,P.STREAM_READ),P.readPixels(N,G,V,O,qt.convert(Gt),qt.convert(Wt),0);const ie=C!==null?Mt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,ie);const pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await qf(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,lt),P.deleteBuffer(Ct),P.deleteSync(pe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,G=0){E.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(E.image.width*V),lt=Math.floor(E.image.height*V),vt=N!==null?N.x:0,At=N!==null?N.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,vt,At,O,lt),ct.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,V=null,O=0){E.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let lt,vt,At,Rt,Gt,Wt,Ct,ie,pe;const _e=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(lt=G.max.x-G.min.x,vt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Gt=G.min.y,Wt=G.isBox3?G.min.z:0):(lt=_e.width,vt=_e.height,At=_e.depth||1,Rt=0,Gt=0,Wt=0),V!==null?(Ct=V.x,ie=V.y,pe=V.z):(Ct=0,ie=0,pe=0);const We=qt.convert(N.format),re=qt.convert(N.type);let Lt;N.isData3DTexture?(A.setTexture3D(N,0),Lt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Lt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ln=P.getParameter(P.UNPACK_ROW_LENGTH),ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),Gi=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Wt);const As=E.isDataArrayTexture||E.isData3DTexture,ve=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const bn=Mt.get(E),Rs=Mt.get(N),Qe=Mt.get(bn.__renderTarget),Zn=Mt.get(Rs.__renderTarget);ct.bindFramebuffer(P.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let jn=0;jn<At;jn++)As&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,O,Wt+jn),E.isDepthTexture?(ve&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,O,pe+jn),P.blitFramebuffer(Rt,Gt,lt,vt,Ct,ie,lt,vt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ve?P.copyTexSubImage3D(Lt,O,Ct,ie,pe+jn,Rt,Gt,lt,vt):P.copyTexSubImage2D(Lt,O,Ct,ie,pe+jn,Rt,Gt,lt,vt);ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Lt,O,Ct,ie,pe,lt,vt,At,We,re,_e.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,O,Ct,ie,pe,lt,vt,At,We,_e.data):P.texSubImage3D(Lt,O,Ct,ie,pe,lt,vt,At,We,re,_e):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Ct,ie,lt,vt,We,re,_e.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Ct,ie,_e.width,_e.height,We,_e.data):P.texSubImage2D(P.TEXTURE_2D,O,Ct,ie,lt,vt,We,re,_e);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ln),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),O===0&&N.generateMipmaps&&P.generateMipmap(Lt),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G=null,V=null,O=0){return E.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,G,V,O)},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,ct.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ca{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kr extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ou extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jr=new L,Zr=new L,rh=new de,Us=new aa,br=new Es,to=new L,ah=new L;class iv extends we{constructor(t=new ye,e=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),Zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Zr);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;rh.copy(s).invert(),Us.copy(t.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),M=h.getX(v+1),x=Er(this,t,Us,l,p,M);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Er(this,t,Us,l,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Er(this,t,Us,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Er(this,t,Us,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Jr.fromBufferAttribute(a,s),Zr.fromBufferAttribute(a,r),e.distanceSqToSegment(Jr,Zr,to,ah)>n)return;to.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(to);if(!(l<t.near||l>t.far))return{distance:l,point:ah.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Fu extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oh=new de,rl=new aa,Tr=new Es,wr=new L;class sv extends we{constructor(t=new ye,e=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;oh.copy(s).invert(),rl.copy(t.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);wr.fromBufferAttribute(u,m),lh(wr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)wr.fromBufferAttribute(u,g),lh(wr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(i,t,e,n,s,r,a){const o=rl.distanceSqToPoint(i);if(o<e){const l=new L;rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class rv extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Q:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,l=new de;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class av extends Dl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ar=new L,eo=new Il,no=new Il,io=new Il;class ov extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),eo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),no.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),io.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),no.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),io.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(eo.calc(l),no.calc(l),io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ch(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function lv(i,t){const e=1-i;return e*e*t}function cv(i,t){return 2*(1-i)*i*t}function hv(i,t){return i*i*t}function zs(i,t,e,n){return lv(i,t)+cv(i,e)+hv(i,n)}function uv(i,t){const e=1-i;return e*e*e*t}function dv(i,t){const e=1-i;return 3*e*e*i*t}function fv(i,t){return 3*(1-i)*i*i*t}function pv(i,t){return i*i*i*t}function Hs(i,t,e,n,s){return uv(i,t)+dv(i,e)+fv(i,n)+pv(i,s)}class Bu extends Sn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mv extends Sn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y),Hs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends Sn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gv extends Sn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends Sn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends Sn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y),zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ch(o,l.x,c.x,h.x,u.x),ch(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var jr=Object.freeze({__proto__:null,ArcCurve:av,CatmullRomCurve3:ov,CubicBezierCurve:Bu,CubicBezierCurve3:mv,EllipseCurve:Dl,LineCurve:ku,LineCurve3:gv,QuadraticBezierCurve:zu,QuadraticBezierCurve3:Hu,SplineCurve:Gu});class _v extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jr[s.type]().fromJSON(s))}return this}}class al extends _v{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ku(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zu(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Bu(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Dl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qs extends ye{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new Q,f=new L,g=new L,v=new L;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,_=Math.sin(x),w=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*w,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const R=l[3*T+0]*_,C=l[3*T+1],b=l[3*T+0]*w;c.push(R,C,b)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const _=x+M*t.length,w=_,T=_+t.length,R=_+t.length+1,C=_+1;r.push(w,T,C),r.push(R,C,T)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.points,t.segments,t.phiStart,t.phiLength)}}class ha extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function M(){const _=new L,w=new L;let T=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(e-t)+t;for(let H=0;H<=s;H++){const B=H/s,W=B*l+o,Y=Math.sin(W),I=Math.cos(W);w.x=D*Y,w.y=-S*n+m,w.z=D*I,u.push(w.x,w.y,w.z),_.set(Y,R,I).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-S),b.push(g++)}v.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=v[b][C],D=v[b+1][C],H=v[b+1][C+1],B=v[b][C+1];(t>0||b!==0)&&(h.push(S,D,B),T+=3),(e>0||b!==r-1)&&(h.push(D,H,B),T+=3)}c.addGroup(p,T,0),p+=T}function x(_){const w=g,T=new Q,R=new L;let C=0;const b=_===!0?t:e,S=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let H=0;H<=s;H++){const W=H/s*l+o,Y=Math.cos(W),I=Math.sin(W);R.x=b*I,R.y=m*S,R.z=b*Y,u.push(R.x,R.y,R.z),d.push(0,S,0),T.x=Y*.5+.5,T.y=I*.5*S+.5,f.push(T.x,T.y),g++}for(let H=0;H<s;H++){const B=w+H,W=D+H;_===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new L,_=new L,w=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],_),f(e[T+2],w),l(x,_,w,M)}function l(M,x,_,w){const T=w+1,R=[];for(let C=0;C<=T;C++){R[C]=[];const b=M.clone().lerp(_,C/T),S=x.clone().lerp(_,C/T),D=T-C;for(let H=0;H<=D;H++)H===0&&C===T?R[C][H]=b:R[C][H]=b.clone().lerp(S,H/D)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(R[C][S+1]),d(R[C+1][S]),d(R[C][S])):(d(R[C][S+1]),d(R[C+1][S+1]),d(R[C+1][S]))}}function c(M){const x=new L;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const M=new L;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const _=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(_,1-w)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],_=a[M+2],w=a[M+4],T=Math.max(x,_,w),R=Math.min(x,_,w);T>.9&&R<.1&&(x<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const M=new L,x=new L,_=new L,w=new L,T=new Q,R=new Q,C=new Q;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),w.copy(M).add(x).add(_).divideScalar(3);const D=m(w);v(T,S+0,M,D),v(R,S+2,x,D),v(C,S+4,_,D)}}function v(M,x,_,w){w<0&&M.x===1&&(a[x]=M.x-1),_.x===0&&_.z===0&&(a[x]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class _s extends al{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new al().fromJSON(s))}return this}}const vv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=bv(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ys(r,a,e,o,l,f,0),a}};function Vu(i,t,e,n,s){let r,a;if(s===Uv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=hh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=hh(r,i[r],i[r+1],a);return a&&fa(a,a.next)&&(Ks(a),a=a.next),a}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fa(e,e.next)||Me(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Mv(i,n,s,r):xv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yv(Oi(i),t,e),Ys(i,t,e,n,s,r,2)):a===2&&Sv(i,t,e,n,s,r):Ys(Oi(i),t,e,n,s,r,1);break}}}function xv(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&as(s,o,r,l,a,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=ol(f,g,t,e,n),M=ol(v,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&as(o,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&as(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&as(o,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&as(o,h,l,u,c,d,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function yv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!fa(s,r)&&Wu(s,n,n.next,r)&&$s(s,r)&&$s(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return Oi(n)}function Sv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lv(a,o)){let l=Xu(a,o);a=Oi(a,a.next),l=Oi(l,l.next),Ys(a,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function bv(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Vu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Pv(c));for(s.sort(Ev),r=0;r<s.length;r++)e=Tv(s[r],e);return e}function Ev(i,t){return i.x-t.x}function Tv(i,t){const e=wv(i,t);if(!e)return t;const n=Xu(e,i);return Oi(n,n.next),Oi(e,e.next)}function wv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&as(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),$s(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Av(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Av(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Rv(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cv(s)}function Cv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Lv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dv(i,t)&&($s(i,t)&&$s(t,i)&&Iv(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||fa(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fa(i,t){return i.x===t.x&&i.y===t.y}function Wu(i,t,e,n){const s=Cr(Me(i,t,e)),r=Cr(Me(i,t,n)),a=Cr(Me(e,n,i)),o=Cr(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||a===0&&Rr(e,i,n)||o===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function Dv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Iv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xu(i,t){const e=new ll(i.i,i.x,i.y),n=new ll(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hh(i,t,e,n){const s=new ll(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ll(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Gs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Gs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uh(t),dh(n,t);let a=t.length;e.forEach(uh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dh(n,e[l]);const o=vv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ul extends ye{constructor(t=new _s([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Nv;let x,_=!1,w,T,R,C;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,w=p.computeFrenetFrames(h,!1),T=new L,R=new L,C=new L),d||(m=0,f=0,g=0,v=0);const b=o.extractPoints(c);let S=b.shape;const D=b.holes;if(!Gs.isClockWise(S)){S=S.reverse();for(let j=0,ot=D.length;j<ot;j++){const P=D[j];Gs.isClockWise(P)&&(D[j]=P.reverse())}}const B=Gs.triangulateShape(S,D),W=S;for(let j=0,ot=D.length;j<ot;j++){const P=D[j];S=S.concat(P)}function Y(j,ot,P){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ot,P)}const I=S.length,k=B.length;function F(j,ot,P){let Pt,it,St;const ct=j.x-ot.x,Ot=j.y-ot.y,Mt=P.x-j.x,A=P.y-j.y,y=ct*ct+Ot*Ot,z=ct*A-Ot*Mt;if(Math.abs(z)>Number.EPSILON){const $=Math.sqrt(y),et=Math.sqrt(Mt*Mt+A*A),K=ot.x-Ot/$,wt=ot.y+ct/$,ft=P.x-A/et,yt=P.y+Mt/et,$t=((ft-K)*A-(yt-wt)*Mt)/(ct*A-Ot*Mt);Pt=K+ct*$t-j.x,it=wt+Ot*$t-j.y;const rt=Pt*Pt+it*it;if(rt<=2)return new Q(Pt,it);St=Math.sqrt(rt/2)}else{let $=!1;ct>Number.EPSILON?Mt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?Mt<-Number.EPSILON&&($=!0):Math.sign(Ot)===Math.sign(A)&&($=!0),$?(Pt=-Ot,it=ct,St=Math.sqrt(y)):(Pt=ct,it=Ot,St=Math.sqrt(y/2))}return new Q(Pt/St,it/St)}const J=[];for(let j=0,ot=W.length,P=ot-1,Pt=j+1;j<ot;j++,P++,Pt++)P===ot&&(P=0),Pt===ot&&(Pt=0),J[j]=F(W[j],W[P],W[Pt]);const ht=[];let pt,Dt=J.concat();for(let j=0,ot=D.length;j<ot;j++){const P=D[j];pt=[];for(let Pt=0,it=P.length,St=it-1,ct=Pt+1;Pt<it;Pt++,St++,ct++)St===it&&(St=0),ct===it&&(ct=0),pt[Pt]=F(P[Pt],P[St],P[ct]);ht.push(pt),Dt=Dt.concat(pt)}for(let j=0;j<m;j++){const ot=j/m,P=f*Math.cos(ot*Math.PI/2),Pt=g*Math.sin(ot*Math.PI/2)+v;for(let it=0,St=W.length;it<St;it++){const ct=Y(W[it],J[it],Pt);tt(ct.x,ct.y,-P)}for(let it=0,St=D.length;it<St;it++){const ct=D[it];pt=ht[it];for(let Ot=0,Mt=ct.length;Ot<Mt;Ot++){const A=Y(ct[Ot],pt[Ot],Pt);tt(A.x,A.y,-P)}}}const zt=g+v;for(let j=0;j<I;j++){const ot=d?Y(S[j],Dt[j],zt):S[j];_?(R.copy(w.normals[0]).multiplyScalar(ot.x),T.copy(w.binormals[0]).multiplyScalar(ot.y),C.copy(x[0]).add(R).add(T),tt(C.x,C.y,C.z)):tt(ot.x,ot.y,0)}for(let j=1;j<=h;j++)for(let ot=0;ot<I;ot++){const P=d?Y(S[ot],Dt[ot],zt):S[ot];_?(R.copy(w.normals[j]).multiplyScalar(P.x),T.copy(w.binormals[j]).multiplyScalar(P.y),C.copy(x[j]).add(R).add(T),tt(C.x,C.y,C.z)):tt(P.x,P.y,u/h*j)}for(let j=m-1;j>=0;j--){const ot=j/m,P=f*Math.cos(ot*Math.PI/2),Pt=g*Math.sin(ot*Math.PI/2)+v;for(let it=0,St=W.length;it<St;it++){const ct=Y(W[it],J[it],Pt);tt(ct.x,ct.y,u+P)}for(let it=0,St=D.length;it<St;it++){const ct=D[it];pt=ht[it];for(let Ot=0,Mt=ct.length;Ot<Mt;Ot++){const A=Y(ct[Ot],pt[Ot],Pt);_?tt(A.x,A.y+x[h-1].y,x[h-1].x+P):tt(A.x,A.y,u+P)}}}X(),nt();function X(){const j=s.length/3;if(d){let ot=0,P=I*ot;for(let Pt=0;Pt<k;Pt++){const it=B[Pt];bt(it[2]+P,it[1]+P,it[0]+P)}ot=h+m*2,P=I*ot;for(let Pt=0;Pt<k;Pt++){const it=B[Pt];bt(it[0]+P,it[1]+P,it[2]+P)}}else{for(let ot=0;ot<k;ot++){const P=B[ot];bt(P[2],P[1],P[0])}for(let ot=0;ot<k;ot++){const P=B[ot];bt(P[0]+I*h,P[1]+I*h,P[2]+I*h)}}n.addGroup(j,s.length/3-j,0)}function nt(){const j=s.length/3;let ot=0;st(W,ot),ot+=W.length;for(let P=0,Pt=D.length;P<Pt;P++){const it=D[P];st(it,ot),ot+=it.length}n.addGroup(j,s.length/3-j,1)}function st(j,ot){let P=j.length;for(;--P>=0;){const Pt=P;let it=P-1;it<0&&(it=j.length-1);for(let St=0,ct=h+m*2;St<ct;St++){const Ot=I*St,Mt=I*(St+1),A=ot+Pt+Ot,y=ot+it+Ot,z=ot+it+Mt,$=ot+Pt+Mt;kt(A,y,z,$)}}}function tt(j,ot,P){l.push(j),l.push(ot),l.push(P)}function bt(j,ot,P){It(j),It(ot),It(P);const Pt=s.length/3,it=M.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ne(it[0]),ne(it[1]),ne(it[2])}function kt(j,ot,P,Pt){It(j),It(ot),It(Pt),It(ot),It(P),It(Pt);const it=s.length/3,St=M.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);ne(St[0]),ne(St[1]),ne(St[3]),ne(St[1]),ne(St[2]),ne(St[3])}function It(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ov(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jr[s.type]().fromJSON(s)),new Ul(n,t.options)}}const Nv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-g),new Q(v,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-g),new Q(m,1-p)]}};function Ov(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Nl extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nl(t.radius,t.detail)}}class Fi extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fi(t.radius,t.detail)}}class mi extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new L,g=new Q;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,_=M+n+1,w=M+n+2,T=M+1;o.push(x,_,T),o.push(_,w,T)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pa extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+_,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],_=h[p][M],w=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(x,_,T),(p!==n-1||l<Math.PI)&&f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kt extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ol extends ye{constructor(t=new Hu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new Q;let h=new L;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),M(),p()}function m(x){h=t.getPointAt(x/e,h);const _=a.normals[x],w=a.binormals[x];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,C=Math.sin(R),b=-Math.cos(R);l.x=b*_.x+C*w.x,l.y=b*_.y+C*w.y,l.z=b*_.z+C*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const w=(s+1)*(x-1)+(_-1),T=(s+1)*x+(_-1),R=(s+1)*x+_,C=(s+1)*(x-1)+_;g.push(w,T,C),g.push(T,R,C)}}function M(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ol(new jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fv extends ke{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class De extends zi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bv extends De{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Fl extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qu extends Fl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new de,fh=new L,ph=new L;class Yu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mh=new de,Ns=new L,ro=new L;class kv extends Yu{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),ro.copy(n.position),ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ro),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class vs extends Fl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zv extends Yu{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends Fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new zv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gh(){return performance.now()}const _h=new de;class Gv{constructor(t,e,n=0,s=1/0){this.ray=new aa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _h.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_h),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(vh),n}}function vh(i,t){return i.distance-t.distance}function hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);class $u extends Kr{constructor(){super();const t=new he;t.deleteAttribute("uv");const e=new De({side:ze}),n=new De,s=new vs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new dt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new dt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new dt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new dt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new dt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new dt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new dt(t,is(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new dt(t,is(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new dt(t,is(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new dt(t,is(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new dt(t,is(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new dt(t,is(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function is(i){const t=new xe;return t.color.setScalar(i),t}const Ku={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vv=new Pl(-1,1,1,-1,0,1);class Wv extends ye{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Xv=new Wv;class Bl{constructor(t){this._mesh=new dt(Xv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class qv extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xs.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xh extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Yv extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ju{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qv(Ku),this.copyPass.material.blending=Wn,this.clock=new Hv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(a instanceof xh?n=!0:a instanceof Yv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const $v={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zu extends ws{constructor(){super();const t=$v;this.uniforms=Xs.clone(t.uniforms),this.material=new Fv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Bl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===au?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ou&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ju extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Kv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bi extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,a,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new yn(r,a,{type:Xn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new yn(r,a,{type:Xn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Kv;this.highPassUniforms=Xs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ku;this.copyUniforms=Xs.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Oe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new xe,this.fsQuad=new Bl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Bi.BlurDirectionX=new Q(1,0);Bi.BlurDirectionY=new Q(0,1);const Ve=i=>Math.min(1,Math.max(0,i)),Ye=i=>1-Math.pow(1-Ve(i),3);class Jn{group=new jt;mats=[];glow(t,e=.8){const n=new xe({color:t,transparent:!0,opacity:e,blending:Oe,depthWrite:!1,side:Le});return this.mats.push({m:n,base:e}),n}solid(t,e,n,s=1){const r=new De({color:t,emissive:e,emissiveIntensity:n,roughness:.25,metalness:.4,flatShading:!0,transparent:!0,opacity:s});return this.mats.push({m:r,base:s}),r}add(t,e=this.group){return e.add(t),t}fade(t){for(const{m:e,base:n}of this.mats)e.opacity=n*t}}function Jv(i){const t=new Jn,e=t.glow(16734751,.7),n=t.glow(16769696,.85),s=t.add(new dt(new ee(.35,1.1,7,14,1,!0),e));s.position.y=3.5;const r=t.add(new jt),a=[];for(let l=0;l<12;l++){const c=t.add(new jt,r);c.rotation.y=l/12*Math.PI*2;const h=new dt(new ua(.34,3.6,4),l%2?e:n);h.geometry.translate(0,1.8,0),h.position.set(1,.5,0),h.rotation.z=-(l%2?1.15:.7),c.add(h),a.push(h)}const o=[];for(let l=0;l<4;l++)o.push(t.add(new dt(new Kt(1,.07,6,28),n)));return o.forEach(l=>l.rotation.x=Math.PI/2),{group:t.group,dur:i,follow:!0,update(l){const c=Ye(l/.22);t.fade(c*Ve((i-l)/.4)),s.scale.set(c,c,c),r.rotation.y=l*3.4,a.forEach((h,u)=>h.scale.setScalar(c*(.8+.3*Math.sin(l*13+u*1.7)))),o.forEach((h,u)=>{const d=(l*.9+u/o.length)%1;h.position.y=.3+d*6.5,h.scale.setScalar((2.6-d*2.1)*c)})}}}function Zv(i,t){const e=new Jn,n=e.solid(13628671,5228799,.7,.88),s=e.glow(10479359,.35),r=e.add(new dt(new mi(.4,1,40),s));r.rotation.x=-Math.PI/2,r.position.y=.12;const a=[],o=(l,c,h,u,d,f)=>{for(let g=0;g<l;g++){const v=g/l*Math.PI*2+c,m=h*(.7+.6*(g*7%5)/4),p=new dt(new ee(0,u,m,6),n);p.geometry.translate(0,m/2,0);const M=Math.cos(v)*c,x=Math.sin(v)*c;p.position.set(M,t(M,x)-.1,x),p.rotation.set(Math.sin(v)*d,0,-Math.cos(v)*d),p.castShadow=!0,e.add(p),a.push({m:p,delay:f})}};return o(7,2.1,4.2,.55,.28,0),o(11,4.3,3,.5,.5,.07),o(15,6.3,2,.42,.75,.14),{group:e.group,dur:i,follow:!1,update(l){const c=Ve((i-l)/.35);e.fade(c),r.scale.setScalar(.5+Ye(l/.3)*6.3);for(const h of a){const u=Ye((l-h.delay)/.12);h.m.scale.set(u,Math.max(.001,u*(1.25-.25*Ve((l-h.delay)/.3))*(.3+.7*c)),u)}}}}function jv(i){const t=new Jn,e=t.glow(16773226,.9),n=t.glow(16777215,.8),s=t.add(new jt);s.position.y=2.2;const r=[2.3,2.8,3.3].map((l,c)=>t.add(new dt(new Kt(l,.06,6,40),c===1?n:e),s)),a=t.add(new dt(new Nl(.8,0),new xe({color:16774824,wireframe:!0,transparent:!0})),s),o=t.add(new jt);for(let l=0;l<4;l++){const c=l/4*Math.PI*2+.6;t.add(new dt(new ee(.03,.12,6,5),e),o).position.set(Math.cos(c)*4.4,3,Math.sin(c)*4.4),t.add(new dt(new Fi(.34),n),o).position.set(Math.cos(c)*4.4,6.1,Math.sin(c)*4.4)}return{group:t.group,dur:i,follow:!0,update(l){const c=Ye(l/.2),h=.65+.35*Math.sign(Math.sin(l*61)+Math.sin(l*37));t.fade(c*Ve((i-l)/.3)*h),s.scale.setScalar(c),r[0].rotation.set(l*7,l*3,0),r[1].rotation.set(0,l*6,l*8),r[2].rotation.set(l*5,0,l*4),a.rotation.set(l*4,l*5,0),a.scale.setScalar(1+.35*Math.sin(l*30)),o.rotation.y=-l*1.3,o.scale.set(1,c,1)}}}function Qv(i){const t=new Jn,e=t.glow(10354640,.6),n=t.glow(16777215,.45),s=[],r=13;for(let a=0;a<r;a++){const o=a/(r-1),l=.7+o*o*4.6,c=t.add(new dt(new Kt(l,.05+o*.09,5,30,3.6+a%3*.7),a%3===1?n:e));c.rotation.x=Math.PI/2,s.push({m:c,r:l,y:.3+o*7.5,sp:15-o*8})}return{group:t.group,dur:i,follow:!0,update(a){const o=Ye(a/.3),l=1-.35*Ve(a/i);t.fade(o*Ve((i-a)/.2)),s.forEach((c,h)=>{c.m.rotation.z=a*c.sp+h*1.9;const u=c.y/8*.9;c.m.position.set(Math.sin(a*5+h*.6)*u,c.y*o,Math.cos(a*4.3+h*.6)*u),c.m.scale.setScalar(o*l)})}}}function tx(i,t){const n=new Jn,s=n.glow(16757850,.95),r=n.solid(4866104,14251066,.35),a=[],o=[],l=9;for(let c=0;c<l;c++){const h=c/l*Math.PI*2+.3,u=5.5+c*5%4*.6,d=n.add(new jt);d.rotation.y=-h;for(let f=0;f<2;f++){const g=new dt(new he(u/2,.06,.22-f*.08),s);g.geometry.translate(u/4,0,0),g.position.set(f*(u/2)*.97,t(Math.cos(h)*(f*u/2+u/4),Math.sin(h)*(f*u/2+u/4))+.12,f*.25),g.rotation.y=f?c%2?.3:-.3:c%2?-.1:.1,d.add(g),a.push(g)}for(let f=0;f<2;f++){const g=2.6+f*2.6+c%3*.3,v=2.6-f*.9+c%2*.6,m=new dt(new ee(.25,.75,v,5),r);m.geometry.translate(0,v/2,0);const p=h+.22,M=Math.cos(p)*g,x=Math.sin(p)*g;m.rotation.set(Math.sin(p)*.4,c,-Math.cos(p)*.4),m.castShadow=!0,n.add(m),o.push({m,y:t(M,x),h:v,delay:.03+f*.07}),m.position.set(M,0,x)}}return{group:n.group,dur:1.7,follow:!1,update(c){n.fade(Ve((1.7-c)/.5));const h=Ye(c/.16);a.forEach(u=>u.scale.set(Math.max(.001,h),1,1+1.5*Ve(1-c/.5)));for(const u of o){const d=Ye((c-u.delay)/.1),f=Ve((c-1)/.7);u.m.position.y=u.y-u.h*(1-d)-u.h*f-.05}}}}function ex(i){const e=new Jn,n=e.glow(12946431,.85),s=e.glow(16777215,.6),r=e.add(new jt);r.position.y=2.6;for(let l=0;l<10;l++){const c=e.add(new jt,r);c.rotation.y=l/10*Math.PI*2;for(let h=0;h<2;h++){const u=1.5+h*1.3,d=new dt(new Kt(u,.045,5,32),h?s:n);d.position.x=u,d.scale.y=1.25,c.add(d)}}const a=e.add(new dt(new Fi(.55),s),r),o=e.add(new dt(new Fi(.55),n),r);return{group:e.group,dur:1.25,follow:!0,update(l){const c=Ve(l/.7),h=Ye((l-.7)/.3),u=2.4-1.7*Ye(c)+h*2.6;r.scale.setScalar(u),r.rotation.y=l*(2+c*9),a.position.y=1.9,o.position.y=-1.9,a.rotation.y=o.rotation.y=-l*8,e.fade(Ye(l/.12)*(1-h))}}}function nx(i){const e=new Jn,n=e.glow(16732120,.85),s=e.glow(16777215,.9),r=e.add(new dt(new ee(.28,.28,16,10,1,!0),s));r.position.y=8;const a=e.add(new dt(new ee(.7,.7,16,12,1,!0),n));a.position.y=8;const o=[0,1,2,3,4].map(c=>{const h=e.add(new dt(new Kt(1,.06,6,6),c%2?s:n));return h.rotation.x=Math.PI/2,h.position.y=1.2+c*1.7,h}),l=e.add(new dt(new Fi(.9),s));return l.position.y=1.4,{group:e.group,dur:1.3,follow:!0,update(c){const h=Ye(c/.12);e.fade(Ve((1.3-c)/.35));const u=1-.8*Ve(c/1.3);r.scale.set(h*u*1.6,1,h*u*1.6),a.scale.set(h*u,1,h*u),o.forEach((d,f)=>{d.scale.setScalar(Math.max(.05,4.5-4*Ye((c-f*.04)/.25))),d.rotation.z=c*(6+f)*(f%2?1:-1)}),l.rotation.set(c*9,c*7,0),l.scale.setScalar(h*(1+.4*Math.sin(c*40)))}}}function ix(i){const t=new Jn,e=t.glow(6978559,.8),n=t.glow(14673151,.7),s=t.add(new dt(new pa(1.15,20,14),new xe({color:0})));s.position.y=2.8;const r=t.add(new dt(new Kt(1.25,.05,6,40),n));r.position.y=2.8;const a=t.add(new jt);a.position.y=2.8,a.rotation.set(.5,0,.25);const o=[1.7,2.3,3].map((c,h)=>{const u=t.add(new dt(new mi(c,c+.4-h*.08,48,1,0,5.2),h===1?n:e),a);return u.rotation.x=-Math.PI/2,u}),l=[0,1,2,3].map(()=>{const c=t.add(new dt(new Kt(1,.035,5,48),e));return c.rotation.x=Math.PI/2,c.position.y=.25,c});return{group:t.group,dur:i,follow:!0,update(c){const h=Ye(c/.35),u=Ve((i-c)/.18);t.fade(h*u),s.scale.setScalar(Math.max(.001,h*u)),r.rotation.set(c*2,c*3,0),r.scale.setScalar(h*(1+.06*Math.sin(c*22))),a.scale.setScalar(h),o.forEach((d,f)=>d.rotation.z=c*(9-f*2.5)),l.forEach((d,f)=>{const g=1-(c*1.3+f/l.length)%1;d.scale.setScalar(.4+g*g*10.5)})}}}function sx(i){const t=new Jn,e=t.glow(5242848,.75),n=t.glow(16777215,.6),s=24,r=[];for(let o=0;o<s;o++){const l=o/s*Math.PI*2,c=t.add(new dt(new he(.16,1,.16),o%2?n:e));c.geometry.translate(0,.5,0),c.position.set(Math.cos(l)*2.8,.2,Math.sin(l)*2.8),r.push(c)}const a=[0,1,2].map(()=>{const o=t.add(new dt(new Kt(1,.05,5,56),e));return o.rotation.x=Math.PI/2,o});return{group:t.group,dur:i,follow:!0,update(o){const l=Ye(o/.2);t.fade(l*Ve((i-o)/.3));const c=o%.6/.6,h=1-c;r.forEach((u,d)=>u.scale.set(1,.3+l*(1.2+3.4*h*Math.abs(Math.sin(d*(Math.PI*4)/s+o*3))),1)),a.forEach((u,d)=>{const f=(c+d/3)%1;u.scale.setScalar(.5+f*6),u.position.y=.3+d*.5})}}}function rx(i,t){const e=Te[i].super.dur;switch(i){case"thermal":return Jv(e);case"cryo":return Zv(e,t);case"volt":return jv(e);case"gale":return Qv(e);case"quake":return tx(e,t);case"mag":return ex();case"plasma":return nx();case"gravity":return ix(e);case"resonance":return sx(e)}}function Qu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ye;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Mh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);const g=Mh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Mh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ge(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const ln=Math.PI*2,yh=i=>i-Math.floor(i),ul={steel:{name:"Steel",color:12173516,rough:.24},chrome:{name:"Chrome",color:16054010,rough:.06},gunmetal:{name:"Gunmetal",color:4014674,rough:.34},gold:{name:"Gold",color:14854973,rough:.2},copper:{name:"Copper",color:13201727,rough:.26}};function td(i){const t=ul[i.metal]??ul.steel;return{metal:new De({color:t.color,metalness:1,roughness:t.rough}),paint:new Bv({color:i.paint,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.08}),glow:new De({color:789776,emissive:i.glow,emissiveIntensity:1,roughness:.4}),rubber:new De({color:1381914,metalness:0,roughness:.92}),dark:new De({color:1645346,metalness:.7,roughness:.42})}}function Kn(i,t=220){const e=new _s;for(let n=0;n<=t;n++){const s=n/t*ln,r=i(s);n===0?e.moveTo(Math.cos(s)*r,Math.sin(s)*r):e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return e}function zn(i,t,e,n){const s=new al;s.absarc(t,e,n,0,ln,!0),i.holes.push(s)}function je(i,t,e){const n=new Ul(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:28});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function gn(i,t=72){return new qs(i.map(([e,n])=>new Q(e,n)),t)}function gt(i,t,e=0){const n=new dt(i,t);return n.position.y=e,n.castShadow=!0,n.receiveShadow=!0,n}function on(i,t,e,n,s,r=0){const a=[];for(let o=0;o<t;o++){const l=r+o/t*ln,c=i();c.rotateY(l),c.translate(Math.cos(l)*e,n,-Math.sin(l)*e),a.push(c)}return gt(Qu(a),s)}const Sh={talon:i=>.6+.4*Math.pow(1-yh(i*3/ln),1.8),bastion:i=>.94+.06*Math.cos(6*i),ripsaw:i=>.84+.16*(1-yh(i*8/ln)),halo:i=>.7+.3*Math.pow(Math.abs(Math.cos(i)),5)},ax={talon:3,bastion:6,ripsaw:8,halo:2},ox={talon:1,bastion:1.05,ripsaw:1,halo:1.02},bh=.25,lx=-.85;function dl(i,t){for(const e of i)e.pivot.rotation.y=e.base+bh+(lx-bh)*t}function cx(i){const t=new jt,e=c=>.52+.1*Math.pow(Math.max(0,Math.cos(3*c)),2),n=Kn(e);zn(n,0,0,.36),t.add(gt(je(n,.12,.03),i.metal));const s=Kn(c=>e(c)*.9);zn(s,0,0,.4),t.add(gt(je(s,.05,.02),i.paint,.18));const r=gt(new Kt(.455,.014,8,96),i.glow,.272);r.rotation.x=Math.PI/2,t.add(r);const a=new _s;for(const[c,[h,u]]of[[-.12,-.12],[.28,-.18],[.6,-.12],[.82,.03],[.58,.07],[.24,.1],[-.12,.1]].entries())c===0?a.moveTo(h,u):a.lineTo(h,u);const o=new _s;for(const[c,[h,u]]of[[.04,-.06],[.28,-.11],[.54,-.06],[.64,.01],[.3,.05],[.04,.05]].entries())c===0?o.moveTo(h,u):o.lineTo(h,u);const l=[];for(let c=0;c<3;c++){const h=c/3*ln,u=new jt;u.position.set(Math.cos(h)*.56,.05,-Math.sin(h)*.56),u.add(gt(je(a,.1,.025),i.metal)),u.add(gt(je(o,.04,.015),i.paint,.15));const d=gt(new he(.4,.02,.03),i.glow,.225);d.position.x=.32,u.add(d),u.add(gt(new ee(.065,.065,.26,6),i.dark,.1)),u.add(gt(new ee(.035,.035,.02,12),i.glow,.24)),t.add(u),l.push({pivot:u,base:h+Math.PI/2})}return dl(l,.5),t.userData.wings=l,t}function hx(i,t){if(i==="shifter")return cx(t);const e=new jt,n=Sh[i]??Sh.talon,s=ax[i]??3,r=ox[i]??1,a=f=>r*Math.max(.52,n(f)*.86-.02),o=Kn(f=>r*n(f));zn(o,0,0,.36*r),e.add(gt(je(o,.12,.03),t.metal));const l=Kn(a);zn(l,0,0,.44*r);const c=Math.max(s,4);for(let f=0;f<c;f++){const g=(f+.22)/c*ln,m=a(g)-.44*r;if(m<.2*r)continue;const p=.44*r+m*.5;zn(l,Math.cos(g)*p,Math.sin(g)*p,Math.min(.1*r,m*.26))}e.add(gt(je(l,.06,.02),t.paint,.18));const h=.285,u=gt(new Kt(.47*r,.016,8,96),t.glow,h);u.rotation.x=Math.PI/2,e.add(u);const d=[];for(let f=0;f<s;f++){const g=(f+.1)/s*ln,v=a(g),m=Math.min(.26*r,v-.5*r);if(m<.08)continue;const p=new he(m,.02,.04*r);p.rotateY(g);const M=v-m/2-.05*r;p.translate(Math.cos(g)*M,h,-Math.sin(g)*M),d.push(p)}return d.length&&e.add(gt(Qu(d),t.glow)),e.add(on(()=>new ee(.035*r,.035*r,.05,6),c,.4*r,.2,t.metal,.6/c)),e}function ux(i,t){const e=new jt;if(i==="flywheel"){const n=Kn(()=>.72,96);zn(n,0,0,.2);for(let a=0;a<6;a++){const o=a/6*ln;zn(n,Math.cos(o)*.45,Math.sin(o)*.45,.13)}e.add(gt(je(n,.06,.02),t.dark));const s=gt(new Kt(.7,.085,18,96),t.metal,.1);s.rotation.x=Math.PI/2;const r=gt(new Kt(.7,.014,8,96),t.glow,.187);r.rotation.x=Math.PI/2,e.add(s,r,gt(new ee(.26,.28,.16,48),t.metal,.08))}else if(i==="anvil")e.add(gt(gn([[0,0],[.5,0],[.72,.04],[.75,.08],[.75,.19],[.7,.23],[.3,.23],[0,.23]]),t.metal)),e.add(on(()=>new he(.035,.11,.05),40,.755,.135,t.dark)),e.add(gt(gn([[.42,.231],[.6,.231],[.6,.245],[.42,.245]]),t.paint));else if(i==="feather"){const n=Kn(()=>.66,96);zn(n,0,0,.18);for(let r=0;r<8;r++){const a=r/8*ln;zn(n,Math.cos(a)*.44,Math.sin(a)*.44,.1)}e.add(gt(je(n,.05,.015),t.paint,.05));const s=gt(new Kt(.67,.03,10,96),t.metal,.09);s.rotation.x=Math.PI/2,e.add(s,gt(new ee(.22,.24,.16,40),t.metal,.08))}else e.add(gt(gn([[0,0],[.3,0],[.4,.04],[.42,.1],[.64,.12],[.7,.14],[.7,.19],[.64,.21],[.44,.2],[.38,.23],[0,.23]]),t.metal)),e.add(gt(gn([[.47,.207],[.61,.212],[.61,.225],[.47,.22]]),t.paint)),e.add(on(()=>new ee(.03,.03,.04,6),6,.67,.2,t.dark));return e}function dx(i,t){const e=new jt,n=[[.2,.3],[.22,.36],[.3,.41],[.31,.5],[0,.5]];if(i==="needle"){e.add(gt(gn([[0,0],[.025,.02],[.1,.24],[.2,.3],...n]),t.metal));const s=gt(new Kt(.215,.022,10,64),t.paint,.345);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="flatline"){e.add(gt(gn([[0,0],[.2,0],[.25,.04],[.25,.18],[.17,.24],[.2,.3]]),t.paint)),e.add(gt(gn(n),t.metal));const s=gt(new Kt(.255,.012,8,64),t.glow,.11);s.rotation.x=Math.PI/2,e.add(s)}else if(i==="gripper"){e.add(gt(gn([[0,0],[.15,0],[.25,.05],[.28,.14],[.24,.24],[.2,.3]]),t.rubber)),e.add(on(()=>new he(.03,.13,.035),18,.272,.13,t.dark)),e.add(gt(gn(n),t.metal));const s=gt(new Kt(.225,.014,8,64),t.glow,.34);s.rotation.x=Math.PI/2,e.add(s)}else{const s=gt(new pa(.13,32,20),new De({color:16054010,metalness:1,roughness:.05}),.13);e.add(s),e.add(gt(gn([[.11,.14],[.19,.17],[.22,.26],[.2,.3]]),t.paint)),e.add(gt(gn(n),t.metal))}return e}const kl=(i,t)=>e=>{const n=ln/i,s=Math.cos(Math.PI/i)/Math.cos((e%n+n)%n-n/2);return s+(1-s)*t};function fx(i){const t=new _s;return t.moveTo(-i,-i*.9),t.lineTo(0,-i*.35),t.lineTo(i,-i*.9),t.lineTo(i,-i*.35),t.lineTo(0,i*.25),t.lineTo(-i,-i*.35),t.closePath(),je(t,.012,0)}function px(i){const t=new jt;t.add(gt(new ee(.33,.33,.2,48),i.metal,.1));const e=kl(8,.1);t.add(gt(je(Kn(s=>.38*e(s),180),.16,.03),i.paint,.2));const n=.422;for(const s of[-.1,.1]){const r=gt(new he(.075,.03,.3),i.glow,n+.01);r.position.x=s,t.add(r)}return t.add(on(()=>new he(.2,.26,.05),4,.38,.22,i.metal,Math.PI/4)),t.add(on(()=>new ee(.03,.03,.04,6),8,.3,n,i.metal)),t}class mx extends Sn{constructor(){super()}getPoint(t,e=new L){const n=t*ln*3.5,s=.22-.03*Math.sin(t*Math.PI);return e.set(Math.cos(n)*s,t*.36,Math.sin(n)*s)}}function gx(i){const t=new jt;t.add(gt(new ee(.33,.33,.2,48),i.metal,.1));const e=kl(5,.2);t.add(gt(je(Kn(s=>.36*e(s),180),.1,.03),i.paint,.2));const n=.35;return t.add(gt(new Ol(new mx,120,.034,8,!1),i.metal,n)),t.add(gt(new ee(.2,.2,.03,24),i.glow,n+.37)),t}function _x(i,t){if(i==="anchor")return px(t);if(i==="coil")return gx(t);const e=new jt,n=i==="surge"?3:i==="lockjaw"?4:i==="rampart"?6:24,s=i==="surge"?.4:i==="viper"?.29:.35,r=i==="surge"?.42:i==="lockjaw"?.3:.12,a=i==="surge"||i==="viper";e.add(gt(new ee(.33,.33,.2,48),t.metal,.1));const o=kl(n,r),l=Kn(h=>s*o(h),180);e.add(gt(je(l,.16,.03),t.paint,.2));const c=.422;if(a)for(const h of[.02,-.1]){const u=gt(fx(s*.36),t.glow,c);u.position.z=h,e.add(u)}else{const h=gt(new Kt(s*.42,.022,8,48),t.glow,c+.01);h.rotation.x=Math.PI/2,e.add(h,gt(new ee(s*.16,s*.16,.02,6),t.glow,c+.005))}return i==="lockjaw"?e.add(on(()=>new he(.16,.2,.12),4,s*.95,.3,t.metal,Math.PI/4)):i==="viper"?e.add(on(()=>new he(.14,.05,.03),3,s*1.05,.3,t.metal)):e.add(on(()=>new ee(.03,.03,.04,6),n,s*.72,c,t.metal,Math.PI/n)),e}function vx(i,t){const e=new jt,n=s=>{const r=new _s;return s.forEach(([a,o],l)=>l?r.lineTo(a,o):r.moveTo(a,o)),gt(je(r,.03,0),t)};if(i==="thermal")e.add(n([[-.3,-.2],[-.17,.1],[-.04,-.2]]),n([[-.12,-.2],[.03,.32],[.18,-.2]]),n([[.1,-.2],[.21,.06],[.32,-.2]]));else if(i==="cryo")for(const[s,r,a]of[[0,0,.17],[-.2,.12,.11],[.2,.1,.11],[.02,-.22,.09]]){const o=gt(new ee(a,a,.05+a*.5,6),t,.04);o.position.x=s,o.position.z=r,e.add(o)}else if(i==="volt")e.add(n([[.06,.32],[-.2,-.02],[-.03,-.02],[-.1,-.32],[.2,.06],[.03,.06]]));else if(i==="gale")for(const[s,r]of[[.12,0],[.21,.9],[.3,1.8]]){const a=gt(new Kt(s,.028,6,24,2.4),t,.02);a.rotation.set(Math.PI/2,0,r),e.add(a)}else if(i==="quake")for(const[s,r]of[[-.06,.18],[.08,0],[-.04,-.18]]){const a=gt(new he(.48,.04,.11),t,.02);a.position.x=s,a.position.z=r,e.add(a)}else if(i==="plasma"){const s=gt(new Kt(.16,.03,6,24),t,.03);s.rotation.x=Math.PI/2;const r=gt(new he(.72,.04,.05),t,.03);r.rotation.y=.6,e.add(s,r)}else if(i==="gravity")for(const[s,r]of[[.3,.05],[.2,.03],[.1,.01]]){const a=gt(new Kt(s,.022,6,28),t,r);a.rotation.x=Math.PI/2,e.add(a)}else if(i==="resonance")[.1,.22,.34,.22,.1,.22,.34].forEach((s,r)=>{const a=gt(new he(.06,.04,s*1.6),t,.02);a.position.x=-.3+r*.1,e.add(a)});else{const s=gt(new Kt(.2,.055,8,24,Math.PI),t,.03);s.rotation.x=-Math.PI/2,e.add(s);for(const r of[-.2,.2]){const a=gt(new he(.11,.06,.2),t,.03);a.position.set(r,.03,.1),e.add(a)}}return e}function xx(i){const t=new jt,e=na(i).elements,n=new De({color:1645346,metalness:.8,roughness:.35});return t.add(gt(new ee(.52,.58,.12,6),n,.06)),e.forEach((s,r)=>{const a=new De({color:789776,emissive:Te[s].color,emissiveIntensity:1.3}),o=gt(new Kt(.47,.02,6,48,Math.PI*2/e.length),a,.125);o.rotation.set(Math.PI/2,0,r*Math.PI*2/e.length);const l=vx(s,a);l.position.y=.125,e.length>1&&(l.scale.setScalar(.6),l.position.x=r?.2:-.2),t.add(o,l)}),t}function Mx(i,t){const e=new jt,n=gt(new he(.34,.95,.28),t.paint,-.55),s=gt(new he(.36,.5,.2),t.rubber,-.6),r=gt(new ee(.46,.46,.3,48),t.metal,.1),a=gt(new ee(.3,.34,.08,6),t.dark,.29),o=gt(new Kt(.465,.014,8,64),t.glow,.1);if(o.rotation.x=Math.PI/2,e.add(n,s,r,a,o),e.add(on(()=>new ee(.05,.05,.22,12),3,.2,-.12,t.metal)),i==="string"){const l=gt(new ee(.012,.012,.9,6),t.dark);l.rotation.z=Math.PI/2,l.position.set(.9,.1,0);const c=gt(new Kt(.13,.03,10,32),t.glow);c.position.set(1.45,.1,0),e.add(l,c)}else if(i==="winder"){const l=gt(new he(.6,.05,.1),t.metal,.36);l.position.x=.25;const c=gt(new ee(.07,.07,.2,16),t.paint,.48);c.position.x=.5,e.add(l,c)}else if(i==="geared")for(const[l,c]of[[.52,.24],[.86,.16]]){const h=gt(new ee(c,c,.08,14),t.dark,.1);h.position.x=l,e.add(h,on(()=>new he(.05,.08,.05),14,c,.1,t.metal).translateX(l))}else{const l=gt(new he(1.5,.03,.09),t.dark,.1);l.position.x=.4;const c=gt(new he(.1,.16,.34),t.glow,.1);c.position.x=1.2,e.add(l,c,on(()=>new he(.03,.035,.09),1,0,0,t.metal))}return e}const zl=["tip","disc","blade","core"],fl={tip:0,disc:.46,blade:.64,core:.7},yx={tip:0,disc:.85,blade:1.55,core:2.35};function ed(i,t,e){return i==="blade"?hx(t,e):i==="disc"?ux(t,e):i==="tip"?dx(t,e):_x(t,e)}function nd(i){const t=td(i),e=new jt,n={};for(const r of zl){const a=ed(r,i[r],t);a.position.y=fl[r],n[r]=a,e.add(a)}const s=n.blade.userData.wings??[];return dl(s,0),{root:e,parts:n,mats:t,shift:r=>dl(s,r)}}function Eh(i){i.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const pn=2.4;let be=hs.radius;const me=i=>pn*Math.min(i/be,1)**2,Ti=18;function Sx(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new rv(i)}const Pr=new Bt;class bx{mesh;pts=[];pos=new Float32Array(Ti*2*3);col=new Float32Array(Ti*2*3);color;constructor(t){this.color=new Bt(t);const e=new ye;e.setAttribute("position",new Ge(this.pos,3)),e.setAttribute("color",new Ge(this.col,3));const n=[];for(let s=0;s<Ti-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}e.setIndex(n),this.mesh=new dt(e,new xe({vertexColors:!0,transparent:!0,blending:Oe,depthWrite:!1,side:Le})),this.mesh.frustumCulled=!1}reset(){this.pts.length=0}update(t,e,n){t?this.pts.unshift(t.clone()):this.pts.length&&this.pts.pop(),this.pts.length>Ti&&(this.pts.length=Ti);const s=this.pts.length;for(let r=0;r<Ti;r++){const a=Math.min(r,s-1),o=r*6;if(s<2){this.pos.fill(0,o,o+6),this.col.fill(0,o,o+6);continue}const l=this.pts[a],c=this.pts[Math.max(0,a-1)],h=this.pts[Math.min(s-1,a+1)];let u=c.x-h.x,d=c.z-h.z;const f=Math.hypot(u,d)||1;u/=f,d/=f;const g=1-r/Ti,v=n*g;this.pos[o]=l.x-d*v,this.pos[o+1]=l.y,this.pos[o+2]=l.z+u*v,this.pos[o+3]=l.x+d*v,this.pos[o+4]=l.y,this.pos[o+5]=l.z-u*v;const m=r<s?g*g*e:0;for(let p=0;p<2;p++)this.col[o+p*3]=this.color.r*m,this.col[o+p*3+1]=this.color.g*m,this.col[o+p*3+2]=this.color.b*m}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}class Ex{constructor(t){this.spec=t;const e=t.radius,n=nd(t.look);this.glowMat=n.mats.glow,this.poseShift=n.shift,this.model=n,this.parts=zl.map(s=>n.parts[s]),n.root.scale.setScalar(t.look.scale??1),this.spinner.add(n.root),this.blur=new dt(new mi(e*.32,e*1.03,56),new xe({color:t.accent,transparent:!0,opacity:.3,blending:Oe,depthWrite:!1,side:Le})),this.blur.rotation.x=-Math.PI/2,this.blur.position.y=.95,this.shield=new dt(new Kt(e*1.3,.05,8,48),new xe({color:16777215,transparent:!0,blending:Oe,depthWrite:!1})),this.shield.rotation.x=Math.PI/2,this.shield.position.y=.7,this.shield.visible=!1,this.light=new vs(t.accent,0,9,2),this.light.position.y=1.4,this.tilt.add(this.spinner,this.blur,this.shield),this.statusRing=new dt(new mi(e*1.25,e*1.45,40),new xe({color:16777215,transparent:!0,opacity:.8,blending:Oe,depthWrite:!1,side:Le})),this.statusRing.rotation.x=-Math.PI/2,this.statusRing.position.y=.06,this.statusRing.visible=!1,t.elements.forEach((s,r)=>{const a=Te[s].color,o=new xe({color:a,transparent:!0,opacity:.85,blending:Oe,depthWrite:!1,side:Le});for(let c=0;c<3;c++){const h=new dt(new Kt(e*(1.7+c*.75+r*.3),.07,6,6+c*2),o);h.rotation.x=Math.PI/2,h.position.y=.5+c*1.1,h.userData.spin=(c%2?-1:1)*(2.5+c),this.aura.add(h)}const l=new dt(new ee(e*.5,e*1.2,14,12,1,!0),o.clone());l.material.opacity=.28,l.position.y=7,this.aura.add(l)}),this.aura.visible=!1,this.group.add(this.tilt,this.light,this.statusRing,this.aura),this.group.visible=!1,this.trail=new bx(t.accent)}group=new jt;tilt=new jt;spinner=new jt;parts=[];blur;shield;light;trail;glowMat;poseShift;model;seen=!1;dropT=0;justLanded=!1;recoilX=0;recoilZ=0;statusRing;aura=new jt;stage=0;flash=0;bursted=!1;y=0;yVel=0;airborne=!1;fallen=0;precess=Math.random()*6;tumble=0;recoil(t,e,n){this.recoilX+=t*(.25+n*.55),this.recoilZ+=e*(.25+n*.55)}setStage(t){t<=this.stage||(this.stage=t,t>=1&&this.model.parts.blade.traverse(e=>{e.isMesh&&e.material===this.model.mats.paint&&(e.visible=!1)}),t>=2&&(this.model.parts.disc.visible=!1))}update(t,e,n,s){if(this.flash=Math.max(0,this.flash-n*5),!t.inPlay||this.bursted){this.group.visible=!1,this.trail.update(null,0,0);return}this.group.visible=!0,this.seen||(this.seen=!0,this.dropT=.3);const r=t.px+(t.x-t.px)*e,a=t.py+(t.y-t.py)*e,o=Math.hypot(r,a),l=Vn(t);(t.leaving||t.out==="ringout")&&o>be-.4?(this.airborne||(this.airborne=!0,this.y=pn,this.yVel=5),this.yVel-=24*n,this.y+=this.yVel*n,this.tumble+=n*7):this.y=me(o),this.dropT>0&&(this.dropT-=n,this.dropT<=0&&(this.justLanded=!0));const c=t.airT>0?Math.sin(Math.PI*(1-t.airT/at.JUMP_T))*2.4:0;this.group.position.set(r,this.y+c+(this.dropT>0?(this.dropT/.3)**2*8:0),a),this.spinner.rotation.y=-t.phase,this.poseShift(t.shift);const h=l<.3?(.3-l)/.3:0;this.precess+=n*(4+h*7);let u=.035+h*.42+(t.stunT>0?.3:0);const d=Math.exp(-n*6);this.recoilX*=d,this.recoilZ*=d,t.out==="spinout"&&(this.fallen=Math.min(1,this.fallen+n*2.5),u+=(1.2-u)*this.fallen),this.tilt.rotation.set(Math.sin(this.precess)*u+t.steerY*.3+this.recoilZ+this.tumble,0,Math.cos(this.precess)*u-t.steerX*.3-this.recoilX+this.tumble*.6),this.blur.material.opacity=.16*l,this.glowMat.emissiveIntensity=.7+1.1*l+this.flash*5,this.light.intensity=4*l+this.flash*30;const f=t.strikeT>0;if(this.shield.visible=t.braceT>0||t.brakeT>0||f,this.shield.visible){const p=f?.85+.5*(1-t.strikeT/.22):1+.08*Math.sin(s*30);this.shield.scale.set(p,p,1),this.shield.material.color.setHex(f?this.spec.accent:16777215)}let g=null;for(const p of ea)t.status[p]>0&&(!g||t.status[p]>t.status[g])&&(g=p);if(this.statusRing.visible=!!g,g&&(this.statusRing.material.color.setHex(Te[g].color),this.statusRing.scale.setScalar(1+.12*Math.sin(s*14))),this.aura.visible=t.superT>0,t.superT>0){for(const p of this.aura.children)p.userData.spin&&(p.rotation.z+=p.userData.spin*n);this.aura.scale.setScalar(1+.06*Math.sin(s*22))}const v=Math.hypot(t.vx,t.vy),m=!t.out&&!this.airborne;this.trail.update(m?new L(r,this.y+.1,a):null,Math.min(1,v/18)*(t.dashT>0||t.boostT>0?.4:.1),.08+Math.min(.1,v/200)+(t.dashT>0?.06:0))}}const ri=900;class Tx{constructor(t){this.canvas=t,this.renderer=new nv({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eu,this.renderer.toneMapping=yl,this.renderer.toneMappingExposure=1,this.scene.background=new Bt(329483),this.scene.fog=new ca(329483,34,80);const e=new $r(this.renderer);this.scene.environment=e.fromScene(new $u,.04).texture,this.scene.environmentIntensity=.55;const n=this.sun=new cl(16777215,2.4);n.position.set(7,20,9),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=s.bottom=-13,s.right=s.top=13,s.near=1,s.far=50,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,this.scene.add(n,new qu(9413887,329226,.45));const r=new vs(16742963,110,40,2);r.position.set(-14,5,-4);const a=new vs(3385599,110,40,2);a.position.set(14,5,-4),this.scene.add(r,a),this.setStadium(hs);const o=new ye;this.sparkPos.fill(-999),o.setAttribute("position",new Ge(this.sparkPos,3)),o.setAttribute("color",new Ge(this.sparkCol,3)),this.sparks=new sv(o,new Fu({size:.34,map:Sx(),vertexColors:!0,transparent:!0,blending:Oe,depthWrite:!1})),this.sparks.frustumCulled=!1,this.scene.add(this.sparks);for(let c=0;c<8;c++){const h=new dt(new mi(.86,1,56),new xe({color:16777215,transparent:!0,opacity:0,blending:Oe,depthWrite:!1,side:Le}));h.rotation.x=-Math.PI/2,h.visible=!1,this.scene.add(h),this.shocks.push({mesh:h,life:0,max:1,size:1})}const l=new dt(new mi(.95,1.08,48),new xe({color:16777215,transparent:!0,opacity:.9,blending:Oe,depthWrite:!1,depthTest:!1,side:Le}));l.rotation.x=-Math.PI/2,this.aimArrow=new dt(new ua(.22,.7,3),new xe({color:16777215,transparent:!0,opacity:.9,blending:Oe,depthWrite:!1,depthTest:!1})),this.aim.add(l,this.aimArrow),this.aim.visible=!1,this.scene.add(this.aim),this.composer=new Ju(this.renderer),this.composer.addPass(new ju(this.scene,this.camera)),this.bloom=new Bi(new Q(1,1),.38,.4,.92),this.composer.addPass(this.bloom),this.composer.addPass(new Zu),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new Kr;camera=new Be(42,1,.1,200);composer;bloom;tops=[];pieces=[];trauma=0;focus=new L;zoom=1;distScale=1;aim=new jt;aimArrow;raycaster=new Gv;arena=new jt;stadium=hs;segs=[];pillarMeshes=[];dangerMat=new xe({color:16726820});fovKick=0;bolts=[];constructs=[];sun;beams=[];sparkPos=new Float32Array(ri*3);sparkCol=new Float32Array(ri*3);sparkVel=new Float32Array(ri*3);sparkLife=new Float32Array(ri);sparkMax=new Float32Array(ri);sparkBase=new Float32Array(ri*3);sparkNext=0;sparks;shocks=[];setStadium(t){this.scene.remove(this.arena),this.arena.traverse(d=>d.geometry?.dispose()),this.arena=new jt,this.scene.add(this.arena),this.stadium=t,be=t.radius;const e=t.radius,n=e+3,s=this.sun.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.far=90,s.updateProjectionMatrix(),this.sun.position.set(7,20,9).multiplyScalar(Math.max(1,e/10));for(const d of this.beams)this.scene.remove(d.beam,d.gem);this.beams=[];const r=[];for(let d=0;d<=48;d++){const f=e*d/48;r.push(new Q(f,me(f)))}r.push(new Q(e+.7,pn),new Q(e+.9,-1.2));const a=new dt(new qs(r,96),new De({color:t.theme.floor,metalness:.75,roughness:.26,side:Le}));a.receiveShadow=!0,this.arena.add(a);const o=new xe({color:2899819});for(const d of[e*.33,e*.6]){const f=new dt(new Kt(d,.022,6,96),o);f.rotation.x=Math.PI/2,f.position.y=me(d)+.012,this.arena.add(f)}if(t.rail){const d=e-t.rail.width-.9,f=new dt(new qs([new Q(d,me(d)+.015),new Q(e-.25,me(e-.25)+.015)],96),new xe({color:t.theme.strip,transparent:!0,opacity:.05,blending:Oe,depthWrite:!1,side:Le})),g=new dt(new Kt(d,.03,6,128),new xe({color:t.theme.strip}));g.rotation.x=Math.PI/2,g.position.y=me(d)+.02,this.arena.add(f,g)}const l=new xe({color:t.theme.strip}),c=Math.PI*2/t.segments,h=c-.03;this.segs=[];for(let d=0;d<t.segments;d++){const f=new jt;f.rotation.y=-(d*c-c/2+.015),this.arena.add(f);const g=new De({color:t.theme.wall,metalness:1,roughness:.24,emissive:16724736,emissiveIntensity:0}),v=new dt(new Kt(e+.2,.34,12,10,h),g);v.rotation.x=Math.PI/2,v.position.y=pn+.1,v.castShadow=!0;const m=new dt(new Kt(e-.16,.035,6,10,h),l);m.rotation.x=Math.PI/2,m.position.y=pn-.05;const p=new dt(new Kt(e+.15,.05,6,8,h),this.dangerMat);p.rotation.x=Math.PI/2,p.position.y=pn+.03;const M=t.openSegs.includes(d);v.visible=m.visible=!M,p.visible=M,f.add(v,m,p),this.segs.push({wall:v,glow:m,lip:p,mat:g,open:M})}this.pillarMeshes=t.pillars.map(d=>{const f=new jt,g=new dt(new ee(d.r*.92,d.r*1.08,1.7,6),new De({color:t.theme.wall,metalness:1,roughness:.3,emissive:16724736,emissiveIntensity:0}));g.castShadow=!0;const v=new dt(new Kt(d.r*1.02,.04,6,24),l);return v.rotation.x=Math.PI/2,v.position.y=.45,f.add(g,v),f.position.set(d.x,me(Math.hypot(d.x,d.y))+.85,d.y),this.arena.add(f),f});const u=new dt(new ha(90,48),new De({color:461070,roughness:.9,metalness:.2}));u.rotation.x=-Math.PI/2,u.position.y=-1.2,u.receiveShadow=!0,this.arena.add(u)}chunks(t,e,n,s,r,a,o){const l=new De({color:r,metalness:1,roughness:.3});for(let c=0;c<s;c++){const h=.18+Math.random()*.3,u=new dt(new he(h*1.4,h,h*.9),l);u.castShadow=!0,u.position.set(t+(Math.random()-.5)*1.6,e+Math.random()*.5,n+(Math.random()-.5)*1.6),this.scene.add(u);const d=3+Math.random()*9;this.pieces.push({obj:u,v:new L(a*d+(Math.random()-.5)*5,4+Math.random()*8,o*d+(Math.random()-.5)*5),w:new L(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:5})}}breakPiece(t,e,n,s){const r=Math.hypot(n,s)||1;if(t==="wall"){const a=this.segs[e];if(!a||a.open)return;a.open=!0,a.wall.visible=a.glow.visible=!1,a.lip.visible=!0,this.chunks(n,pn+.2,s,9,this.stadium.theme.wall,n/r,s/r),this.shock(n,pn+.2,s,7,.5,16738874)}else{const a=this.pillarMeshes[e];if(!a||!a.visible)return;a.visible=!1,this.chunks(n,a.position.y,s,10,this.stadium.theme.wall,0,0),this.shock(n,a.position.y,s,5,.45,16765088)}for(let a=0;a<70;a++){const o=Math.random()*Math.PI*2,l=3+Math.random()*13;this.spark(n,pn*(t==="wall"?1:.5)+.4,s,Math.cos(o)*l,3+Math.random()*10,Math.sin(o)*l,.3+Math.random()*.6,1,.6,.3)}this.trauma=Math.min(1,this.trauma+.8),this.fovKick=Math.max(this.fovKick,5)}kick(t){this.fovKick=Math.max(this.fovKick,t)}burstSparks(t,e,n,s,r,a){Pr.setHex(a);for(let o=0;o<s;o++){const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.spark(t,e,n,Math.cos(l)*c,2+Math.random()*r*.7,Math.sin(l)*c,.3+Math.random()*.5,Pr.r,Pr.g,Pr.b)}}bolt(t,e,n,s,r){const a=[];for(let c=0;c<=9;c++){const h=c/9,u=c===0||c===9?0:.7,d=t+(n-t)*h+(Math.random()-.5)*u,f=e+(s-e)*h+(Math.random()-.5)*u;a.push(new L(d,me(Math.min(be,Math.hypot(d,f)))+1+Math.sin(h*Math.PI)*1.2,f))}const l=new iv(new ye().setFromPoints(a),new Ou({color:r,transparent:!0,blending:Oe,depthWrite:!1}));l.frustumCulled=!1,this.scene.add(l),this.bolts.push({line:l,life:.22})}superFx(t,e){const n=this.tops[t];if(!n)return;const s=n.group.position;e.forEach((r,a)=>{const o=Te[r].color,l=me(Math.min(be,Math.hypot(s.x,s.z))),c=rx(r,(h,u)=>me(Math.min(be,Math.hypot(s.x+h,s.z+u)))-l);c.group.position.set(s.x,l,s.z),c.group.rotation.y=a*.5,c.update(0),this.scene.add(c.group),this.constructs.push({c,i:t,t:0}),this.shock(s.x,s.y+.3,s.z,8+a*2,.4,o),this.burstSparks(s.x,s.y+.6,s.z,130,22,o)}),this.trauma=1,this.fovKick=Math.max(this.fovKick,10)}pulseFx(t,e){const n=Te[t.element].color,s=me(Math.min(be,Math.hypot(t.x,t.y)))+.3;this.shock(t.x,s,t.y,t.radius*1.9,.3,n);for(const r of t.targets){const a=e.tops[r];a&&(this.bolt(t.x,t.y,a.x,a.y,n),this.burstSparks(a.x,me(Math.min(be,Math.hypot(a.x,a.y)))+.7,a.y,22,9,n),this.tops[r]&&(this.tops[r].flash=1))}this.trauma=Math.min(1,this.trauma+.25)}reactFx(t,e,n){const s=me(Math.min(be,Math.hypot(t,e)))+.7;this.shock(t,s,e,9,.45,n),this.shock(t,s+.4,e,5,.3,16777215),this.burstSparks(t,s,e,120,19,n),this.trauma=Math.min(1,this.trauma+.7),this.fovKick=Math.max(this.fovKick,6)}crackTop(t,e){const n=this.tops[t];if(!n||n.bursted)return;n.setStage(e);const s=n.group.position;this.chunks(s.x,s.y+.6,s.z,e===1?7:9,e===1?n.spec.color:8950440,0,0),this.shock(s.x,s.y+.5,s.z,5.5,.4,16767408),this.burstSparks(s.x,s.y+.6,s.z,60,14,16756832),this.trauma=Math.min(1,this.trauma+.6)}dropLoot(t,e,n){n.forEach((s,r)=>{const a=r/Math.max(1,n.length)*Math.PI*2+.6,o=n.length>1?1.8:0,l=t+Math.cos(a)*o,c=e+Math.sin(a)*o,h=me(Math.min(be,Math.hypot(l,c))),u=new xe({color:s,transparent:!0,opacity:.75,blending:Oe,depthWrite:!1}),d=new dt(new ee(.1,.22,11,10,1,!0),u);d.position.set(l,h+5.5,c);const f=new dt(new Fi(.42),new xe({color:s}));f.position.set(l,h+.9,c),this.scene.add(d,f),this.beams.push({beam:d,gem:f,life:0}),this.shock(l,h+.2,c,3.5,.5,s);const g=new Bt(s);for(let v=0;v<40;v++){const m=Math.random()*Math.PI*2,p=2+Math.random()*7;this.spark(l,h+.5,c,Math.cos(m)*p,5+Math.random()*10,Math.sin(m)*p,.5+Math.random()*.6,g.r,g.g,g.b)}})}brakeFx(t){const e=me(Math.min(be,Math.hypot(t.x,t.y)));if(t.phase==="stop")this.shock(t.x,e+.15,t.y,6,.55,10479871),this.shock(t.x,e+.2,t.y,3.2,.35,16777215),this.burstSparks(t.x,e+.3,t.y,40,8,13625599),this.trauma=Math.min(1,this.trauma+.3);else{for(let n=0;n<44;n++){const s=n*.35,r=1+Math.random()*3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*r,.5+Math.random(),-t.dy*r,.25+Math.random()*.25,.8,.95,1)}this.shock(t.x,e+.3,t.y,4.5,.3,16777215),this.fovKick=Math.max(this.fovKick,8)}}jumpFx(t,e){const n=e.tops[t];if(!n)return;const s=me(Math.min(be,Math.hypot(n.x,n.y)));this.shock(n.x,s+.15,n.y,3.5,.3,14215423),this.burstSparks(n.x,s+.3,n.y,24,6,14215423)}landFx(t,e){const n=me(Math.min(be,Math.hypot(t.x,t.y)));this.shock(t.x,n+.2,t.y,t.radius*2.2,.4,16771496),this.shock(t.x,n+.25,t.y,t.radius*1.2,.25,16777215),this.burstSparks(t.x,n+.4,t.y,70,13,16769184),this.trauma=Math.min(1,this.trauma+(t.targets.length?.55:.3)),this.fovKick=Math.max(this.fovKick,5);for(const s of t.targets)this.tops[s]&&(this.tops[s].flash=1)}counterFx(t){const e=me(Math.min(be,Math.hypot(t.x,t.y)));for(let n=0;n<30;n++){const s=n*.3;this.spark(t.x-t.dx*s,e+.5,t.y-t.dy*s,-t.dx*2,1+Math.random(),-t.dy*2,.25+Math.random()*.2,1,.8,.3)}this.shock(t.x,e+.3,t.y,5,.35,16760896),this.fovKick=Math.max(this.fovKick,7)}boostFx(t,e){const n=e.tops[t];if(!n)return;const s=Math.hypot(n.vx,n.vy)||1,r=me(Math.hypot(n.x,n.y))+.4;for(let a=0;a<26;a++){const o=4+Math.random()*10;this.spark(n.x,r,n.y,-n.vx/s*o+(Math.random()-.5)*6,1+Math.random()*4,-n.vy/s*o+(Math.random()-.5)*6,.2+Math.random()*.3,.7,.85,1)}}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.camera.aspect=t/e,this.distScale=Math.max(1.15,1.5/this.camera.aspect),this.camera.updateProjectionMatrix()}setTops(t,e=this.stadium){this.setStadium(e);for(const n of this.tops)this.scene.remove(n.group,n.trail.mesh);for(const n of this.pieces)this.scene.remove(n.obj);this.pieces=[],this.tops=t.map(n=>new Ex(n));for(const n of this.tops)this.scene.add(n.group,n.trail.mesh)}spark(t,e,n,s,r,a,o,l,c,h){const u=this.sparkNext;this.sparkNext=(u+1)%ri,this.sparkPos.set([t,e,n],u*3),this.sparkVel.set([s,r,a],u*3),this.sparkBase.set([l,c,h],u*3),this.sparkLife[u]=this.sparkMax[u]=o}shock(t,e,n,s,r,a){const o=this.shocks.reduce((l,c)=>l.life<c.life?l:c);o.life=o.max=r,o.size=s,o.mesh.position.set(t,e,n),o.mesh.material.color.setHex(a),o.mesh.visible=!0}hit(t,e,n,s,r,a,o,l=-1){const c=me(Math.hypot(t,e))+.75;if(l>=0){const u=l===2?16777215:this.tops[l]?.spec.accent??16777215;this.shock(t,c,e,6+r*5,.42,u);for(let d=0;d<60;d++){const f=Math.random()*Math.PI*2,g=6+Math.random()*16;this.spark(t,c,e,Math.cos(f)*g,2+Math.random()*8,Math.sin(f)*g,.3+Math.random()*.4,1,1,1)}this.trauma=Math.min(1,this.trauma+.5),this.fovKick=Math.max(this.fovKick,4)}const h=Math.floor(8+r*70);for(let u=0;u<h;u++){const d=Math.random()<.5?1:-1,f=(3+Math.random()*13)*(.4+r),g=(Math.random()-.5)*1.6,v=-s*d+n*g,m=n*d+s*g,p=Math.random();this.spark(t,c,e,v*f,2+Math.random()*9*(.3+r),m*f,.25+Math.random()*.5,1,.55+p*.45,.15+p*.5)}r>.35&&this.shock(t,c,e,1.5+r*4.5,.32,16769712),this.trauma=Math.min(1,this.trauma+r*.75),this.tops[a]&&(this.tops[a].flash=r),this.tops[o]&&(this.tops[o].flash=r),this.tops[a]?.recoil(-n,-s,r),this.tops[o]?.recoil(n,s,r)}rimHit(t,e,n){const s=pn+.3,r=Math.hypot(t,e)||1;for(let a=0;a<6+n*26;a++){const o=2+Math.random()*8,l=Math.atan2(e,t)+Math.PI+(Math.random()-.5)*2.2;this.spark(t/r*be,s,e/r*be,Math.cos(l)*o,2+Math.random()*6,Math.sin(l)*o,.2+Math.random()*.35,.6,.8,1)}this.trauma=Math.min(1,this.trauma+n*.35)}burstTop(t){const e=this.tops[t];if(!e||e.bursted)return;e.bursted=!0;const n=e.group.position.clone();for(const s of e.parts){this.scene.attach(s);const r=Math.random()*Math.PI*2,a=4+Math.random()*7;this.pieces.push({obj:s,v:new L(Math.cos(r)*a,7+Math.random()*6,Math.sin(r)*a),w:new L(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:4})}for(let s=0;s<160;s++){const r=Math.random()*Math.PI*2,a=3+Math.random()*16;this.spark(n.x,n.y+.7,n.z,Math.cos(r)*a,3+Math.random()*12,Math.sin(r)*a,.4+Math.random()*.7,1,.8,.5)}this.shock(n.x,n.y+.6,n.z,9,.5,16777215),this.trauma=1}ringOut(t){const e=this.tops[t];if(!e)return;const n=e.group.position;this.shock(n.x,pn+.2,n.z,6,.45,16733491),this.trauma=Math.min(1,this.trauma+.6)}setAim(t,e=0,n=0,s=0,r=1){if(this.aim.visible=t,!t)return;const a=Math.hypot(e,n);if(this.aim.position.set(e,me(a)+.3,n),this.aimArrow.visible=Math.abs(s)>.01&&a>.05,this.aimArrow.visible){const o=-n/a*r*Math.sign(s),l=e/a*r*Math.sign(s),c=1.3+Math.abs(s)*.9;this.aimArrow.position.set(o*c,.02,l*c),this.aimArrow.quaternion.setFromUnitVectors(new L(0,1,0),new L(o,0,l)),this.aimArrow.scale.setScalar(.7+Math.abs(s)*.8)}}simToScreen(t,e){const n=new L(t,me(Math.min(be,Math.hypot(t,e)))+.6,e).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(n.x+1)/2*s.width,y:s.top+(1-n.y)/2*s.height,behind:n.z>1}}screenToSim(t,e){const n=this.canvas.getBoundingClientRect(),s=new Q((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.raycaster.ray.origin,a=this.raycaster.ray.direction;let o=.8,l=0,c=0;for(let h=0;h<5;h++){const u=(o-r.y)/a.y;l=r.x+a.x*u,c=r.z+a.z*u,o=me(Math.hypot(l,c))}return{x:l,y:c}}frame(t,e,n,s,r=0){t.tops.forEach((_,w)=>this.tops[w]?.update(_,e,n,s));for(const _ of this.tops){if(!_.justLanded)continue;_.justLanded=!1;const w=_.group.position;this.shock(w.x,w.y+.15,w.z,4.5,.35,_.spec.accent),this.burstSparks(w.x,w.y+.3,w.z,46,11,_.spec.accent),this.trauma=Math.min(1,this.trauma+.3)}for(let _=0;_<t.tops.length;_++){const w=t.tops[_],T=this.tops[_];if(!(!T||w.out||!w.inPlay||w.armour>.9)&&Math.random()<(1-w.armour)*n*24){const R=T.group.position,C=Math.random()*Math.PI*2;this.spark(R.x,R.y+.5,R.z,Math.cos(C)*4,3+Math.random()*5,Math.sin(C)*4,.35+Math.random()*.4,1,.5+Math.random()*.35,.2)}}this.constructs=this.constructs.filter(_=>{_.t+=n;const w=this.tops[_.i];if(_.c.follow&&w&&!w.bursted){const T=w.group.position;_.c.group.position.set(T.x,me(Math.min(be,Math.hypot(T.x,T.z))),T.z)}return _.t<_.c.dur?(_.c.update(_.t),!0):(this.scene.remove(_.c.group),_.c.group.traverse(T=>{const R=T;R.geometry?.dispose(),R.material?.dispose?.()}),!1)}),this.bolts=this.bolts.filter(_=>(_.life-=n,_.line.material.opacity=Math.max(0,_.life/.22),_.life>0?!0:(this.scene.remove(_.line),_.line.geometry.dispose(),!1)));const a=t.stadium.segHp;t.segHp.forEach((_,w)=>{const T=this.segs[w];T&&!T.open&&(T.mat.emissiveIntensity=(1-_/a)*.9)}),t.pillars.forEach((_,w)=>{const T=this.pillarMeshes[w]?.children[0];T&&(T.material.emissiveIntensity=(1-_.hp/t.stadium.pillars[w].hp)*.9)});for(const _ of t.tops){if(!_.onRail||n<=0)continue;const w=Math.hypot(_.vx,_.vy)||1;this.spark(_.x,me(Math.hypot(_.x,_.y))+.15,_.y,-_.vx/w*6+(Math.random()-.5)*3,1+Math.random()*3,-_.vy/w*6+(Math.random()-.5)*3,.25,.5,.75,1)}this.fovKick=Math.max(0,this.fovKick-n*14);const o=42+this.fovKick;Math.abs(this.camera.fov-o)>.01&&(this.camera.fov=o,this.camera.updateProjectionMatrix());for(let _=0;_<ri;_++){if(this.sparkLife[_]<=0)continue;this.sparkLife[_]-=n;const w=_*3;if(this.sparkLife[_]<=0){this.sparkPos[w+1]=-999;continue}this.sparkVel[w+1]-=26*n,this.sparkPos[w]+=this.sparkVel[w]*n,this.sparkPos[w+1]+=this.sparkVel[w+1]*n,this.sparkPos[w+2]+=this.sparkVel[w+2]*n;const T=this.sparkLife[_]/this.sparkMax[_];this.sparkCol[w]=this.sparkBase[w]*T,this.sparkCol[w+1]=this.sparkBase[w+1]*T*T,this.sparkCol[w+2]=this.sparkBase[w+2]*T*T*T}this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0;for(const _ of this.shocks){if(_.life<=0)continue;_.life-=n;const w=1-Math.max(0,_.life)/_.max;_.mesh.scale.setScalar(.3+_.size*(1-(1-w)*(1-w))),_.mesh.material.opacity=(1-w)*.9,_.life<=0&&(_.mesh.visible=!1)}for(const _ of this.beams)_.life+=n,_.beam.material.opacity=Math.min(1,_.life*3)*(.55+.2*Math.sin(_.life*6)),_.gem.rotation.y+=n*3,_.gem.position.y+=Math.sin(_.life*3)*n*.3;for(const _ of this.pieces){_.life-=n,_.v.y-=24*n,_.obj.position.addScaledVector(_.v,n),_.obj.rotation.x+=_.w.x*n,_.obj.rotation.y+=_.w.y*n,_.obj.rotation.z+=_.w.z*n;const w=me(Math.hypot(_.obj.position.x,_.obj.position.z))+.15;_.obj.position.y<w&&_.v.y<0&&Math.hypot(_.obj.position.x,_.obj.position.z)<be&&(_.obj.position.y=w,_.v.y*=-.4,_.v.x*=.7,_.v.z*=.7,_.w.multiplyScalar(.6))}const l=t.tops.filter(_=>_.inPlay&&!_.out);let c=0,h=0,u=1;if(l.length){for(const _ of l)c+=_.x/l.length,h+=_.y/l.length;if(l.length===2){const _=Math.hypot(l[0].x-l[1].x,l[0].y-l[1].y);u=.7+.3*Math.min(1,_/11)}}const d=1-Math.exp(-n*3),f=Math.max(0,1-11/be),g=t.tops[r],v=g&&g.inPlay&&!g.out?g:null,m=c*.45*(1-f)+(v?v.x:c)*f,p=h*.45*(1-f)+(v?v.y:h)*f;this.focus.x+=(m-this.focus.x)*d,this.focus.z+=(p-this.focus.z)*d,this.zoom+=(u-this.zoom)*d,this.trauma=Math.max(0,this.trauma-n*2.2);const M=this.trauma*this.trauma*.9,x=this.distScale*this.zoom*Math.min(be,11.5)/10;this.camera.position.set(this.focus.x+(Math.random()-.5)*M,20.5*x+(Math.random()-.5)*M,this.focus.z+13.5*x+(Math.random()-.5)*M),this.camera.lookAt(this.focus.x,.9,this.focus.z+.9),this.composer.render()}}const Lr=i=>"#"+i.toString(16).padStart(6,"0");class wx{constructor(t,e,n){this.renderer=t,this.save=e,this.cb=n;const s=this.scene;s.background=new Bt(526864),s.fog=new ca(526864,14,40),s.environment=new $r(t).fromScene(new $u,.04).texture,s.environmentIntensity=.5;const r=new cl(16777215,1.5);r.position.set(3.5,7,4.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const a=r.shadow.camera;a.left=a.bottom=-3.5,a.right=a.top=3.5,a.near=1,a.far=20,r.shadow.bias=-3e-4,r.shadow.normalBias=.02;const o=new vs(8368383,16,30,2);o.position.set(-5,2.5,2),this.backLight.position.set(0,3,-5),s.add(r,o,this.backLight,new qu(10466559,395018,.2));const l=new De({color:1777708,metalness:.9,roughness:.3}),c=new dt(new ee(1.75,1.95,.3,96),l);c.position.y=-.15,c.receiveShadow=!0;const h=new dt(new Kt(1.76,.022,8,128),this.ringMat);h.rotation.x=Math.PI/2,h.position.y=.005;const u=new dt(new Kt(1.1,.008,6,96),new xe({color:3359071}));u.rotation.x=Math.PI/2,u.position.y=.004;const d=new dt(new ha(40,64),new De({color:658708,metalness:.5,roughness:.55}));d.rotation.x=-Math.PI/2,d.position.y=-.3,d.receiveShadow=!0,s.add(c,h,u,d,this.holder),this.composer=new Ju(t),this.composer.addPass(new ju(s,this.camera)),this.composer.addPass(new Bi(new Q(1,1),.22,.35,.96)),this.composer.addPass(new Zu),this.el=document.createElement("div"),this.el.id="ws",this.el.className="hidden",this.tier=e.tier,this.el.innerHTML=`
      <header><h1>SPINFORGE</h1><span>FORGE</span></header>
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
      <footer><button id="wsExplode">EXPLODED VIEW</button><button id="wsBattle" class="go">BATTLE</button></footer>`,document.body.appendChild(this.el),this.wire(),this.rebuild(),this.renderThumbs(),this.renderAll(),this.resize(),window.addEventListener("resize",()=>this.resize())}active=!1;perTeam=1;tier=1;time=0;scene=new Kr;camera=new Be(30,1,.1,100);composer;holder=new jt;model=null;ringMat=new xe({color:16777215});backLight=new vs(16777215,18,30,2);exploded=!1;explode=0;drop={tip:0,disc:0,blade:0,core:0};slot="blade";hover=null;sel=null;sort="power";bulk="off";bulkMax=0;yaw=.6;pitch=.42;dragging=!1;distScale=1;thumbs={};el;q(t){return this.el.querySelector(t)}show(t){this.active=t,this.el.classList.toggle("hidden",!t),t&&this.resize()}refresh(){this.tier=Math.min(this.tier,this.save.tier),this.rebuild(),this.renderAll()}wire(){this.q("#wsTabs").addEventListener("click",a=>{const o=a.target.dataset.slot;o&&(this.slot=o,this.hover=null,this.sel=null,this.renderAll())}),this.q("#wsTools").addEventListener("click",a=>{const o=a.target.closest("[data-tool]")?.dataset.tool;if(o){if(o==="sort")this.sort=this.sort==="power"?"rarity":this.sort==="rarity"?"newest":"power";else if(o==="bulk")this.bulk=this.bulk==="off"?"pick":"off";else if(o==="step")this.bulkMax=(this.bulkMax+Number(a.target.closest("[data-d]").dataset.d)+4)%4;else if(o==="ask")this.bulk="confirm";else if(o==="no")this.bulk="off";else if(o==="yes"){Xd(this.save,this.bulkMax),this.bulk="off",this.sel=null,this.hover=null,this.changed(!1);return}this.renderAll()}});const t=this.q("#wsCards");t.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-act]"),c=o.closest(".ws-card")?.dataset.uid;if(c){if(l){const h=l.dataset.act;h==="salv"?(Zh(this.save,c),this.sel=null,this.hover=null):h==="fit"?(this.save.equipped[this.slot]=c,this.sel=null,this.hover=null,this.slot in this.drop&&(this.drop[this.slot]=1)):h==="temper"?Hd(this.save,c):h==="reroll"&&Gd(this.save,c,Number(l.dataset.i),Math.random),this.changed(!1);return}this.sel=this.sel===c?null:c,this.renderAll()}}),t.addEventListener("mouseover",a=>{const o=a.target.closest(".ws-card")?.dataset.uid??null;o!==this.hover&&(this.hover=o,this.renderStats())}),t.addEventListener("mouseleave",()=>{this.hover=null,this.renderStats()});const e=(a,o)=>this.q(a).addEventListener("click",l=>{const c=l.target.dataset.v;c!==void 0&&(this.save[o]=Number(c),this.changed(!0))});e("#wsPaint","paint"),e("#wsGlow","glow"),this.q("#wsMetal").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.metal=o,this.changed(!0))}),this.q("#wsSpin").addEventListener("click",a=>{const o=a.target.dataset.v;o&&(this.save.spinDir=o==="-1"?-1:1,this.changed(!1))}),this.q("#wsSetup").addEventListener("click",a=>{const o=a.target.closest("[data-step]");if(!o)return;const l=Number(o.dataset.d);o.dataset.step==="mode"?this.perTeam=Math.max(1,Math.min(5,this.perTeam+l)):this.tier=Math.max(1,Math.min(this.save.tier,this.tier+l)),this.renderAll()}),this.q("#wsExplode").addEventListener("click",()=>{this.exploded=!this.exploded,this.q("#wsExplode").textContent=this.exploded?"ASSEMBLE":"EXPLODED VIEW"}),this.q("#wsBattle").addEventListener("click",()=>this.cb.onBattle());const n=this.renderer.domElement;let s=0,r=0;n.addEventListener("pointerdown",a=>{this.active&&(this.dragging=!0,s=a.clientX,r=a.clientY)}),window.addEventListener("pointermove",a=>{!this.active||!this.dragging||(this.yaw+=(a.clientX-s)*.01,this.pitch=Math.max(.08,Math.min(1.25,this.pitch+(a.clientY-r)*.006)),s=a.clientX,r=a.clientY)}),window.addEventListener("pointerup",()=>this.dragging=!1)}changed(t){this.rebuild(),t&&this.renderThumbs(),this.renderAll(),this.cb.onChange()}rebuild(){this.model&&(this.holder.remove(this.model.root),Eh(this.model.root));const t=_o(this.save);this.model=nd({blade:t.blade,disc:t.disc,tip:t.tip,core:t.core,paint:t.paint,glow:t.glow,metal:t.metal}),this.holder.add(this.model.root),this.ringMat.color.setHex(t.glow),this.backLight.color.setHex(t.paint),this.el.style.setProperty("--glow",Lr(t.glow))}renderThumbs(){const t=this.renderer,e=144,n=new Kr;n.background=new Bt(856345),n.environment=this.scene.environment;const s=new cl(16777215,1.4);n.environmentIntensity=.55,s.position.set(2,5,3),n.add(s);const r=new Be(26,1,.05,50),a=td(this.save),o=t.getSize(new Q),l=t.getPixelRatio();t.setPixelRatio(1),t.setSize(e,e,!1);const c=new bs,h=new Es;for(const u of Ui){const d=u.slot==="launcher"?Mx(u.id,a):u.slot==="reactor"?xx(u.id):ed(u.slot,u.id,a);n.add(d),c.setFromObject(d).getBoundingSphere(h);const f=h.radius/Math.sin(13*Math.PI/180);r.position.copy(h.center).add(new L(.3,u.slot==="blade"||u.slot==="disc"||u.slot==="reactor"?.95:.5,.5).normalize().multiplyScalar(f*1.02)),r.lookAt(h.center),t.render(n,r),this.thumbs[u.id]=t.domElement.toDataURL("image/png"),n.remove(d),Eh(d)}t.setPixelRatio(l),t.setSize(o.x,o.y,!1)}resize(){const t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.composer.setSize(e,n),this.camera.aspect=e/n,this.distScale=Math.max(1,.85/this.camera.aspect),e<900&&n>e?(this.distScale=Math.max(1.9,1.2/this.camera.aspect),this.camera.setViewOffset(e,n,0,n*.02,e,n)):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}frame(t){if(this.time+=t,this.model?.shift(Math.max(0,Math.min(1,.5-.9*Math.cos(this.time*1.4)))),this.dragging||(this.yaw+=t*.4),this.holder.rotation.y=this.yaw,this.explode+=((this.exploded?1:0)-this.explode)*(1-Math.exp(-t*7)),this.model)for(const s of zl){const r=this.model.parts[s],a=this.drop[s]=Math.max(0,this.drop[s]-t*2.6);r.position.y=fl[s]+(yx[s]-fl[s])*this.explode+a*a*1.5,r.rotation.y=a*a*2.5;const o=this.slot===s&&this.explode>.5?1.05:1;r.scale.setScalar(o+.1*Math.sin(a*Math.PI))}const e=.55+this.explode*.95,n=(6.8+this.explode*2.6)*this.distScale;this.camera.position.set(0,e+Math.sin(this.pitch)*n,Math.cos(this.pitch)*n),this.camera.lookAt(0,e,0),this.composer.render()}renderAll(){const t=this.save;this.q("#wsTabs").innerHTML=ki.map(l=>`<button data-slot="${l}" class="${l===this.slot?"on":""}">${Ih[l]}</button>`).join("");const e=t.equipped[this.slot],n=Wd(t,t.items.filter(l=>Rn(l.part).slot===this.slot),this.sort,e);this.sel&&!n.some(l=>l.uid===this.sel)&&(this.sel=null);const s=this.q("#wsCards"),r=s.scrollTop;s.innerHTML=n.map(l=>{const c=di[l.rarity],h=l.uid===e,u=l.uid===this.sel,d=l.affixes.length?l.affixes.map(g=>`<span class="af">${Wh(g)}</span>`).join(""):`<p>${Rn(l.part).blurb}</p>`,f=h?"<em>FITTED</em>":"";return`
        <div class="ws-card ${h?"on":""} ${u?"open":""}" data-uid="${l.uid}" style="--rc:${Lr(c.color)}">
          <img src="${this.thumbs[l.part]??""}" alt="" />
          <div class="ws-main"><b style="color:${Lr(c.color)}">${Vh(l)}</b><span class="lv">${c.name.toUpperCase()} · LEVEL ${l.level}</span>${d}${f}</div>
          ${u?this.detail(l,h,t.items.find(g=>g.uid===e)):""}
        </div>`}).join(""),s.scrollTop=r,this.renderTools();const a=ks(t);this.q("#wsName").textContent=Fh(_o(t)),this.q("#wsType").textContent=`${kd(ba(a))} TYPE  ·  ${Lh[a.ability]}  ·  ${a.elements.map(l=>Te[l].super.name).join(" + ")}`,this.q("#wsMeta").textContent=`GEAR ${Jd(t)}  ·  SCRAP ${t.scrap}  ·  ${t.items.length} PARTS`,this.q("#wsMode").textContent=`${this.perTeam} V ${this.perTeam}`,this.q("#wsTier").textContent=`TIER ${this.tier}${jh(this.tier)?" · BOSS":""}`,this.q("#wsSpin").innerHTML=[[1,"RIGHT"],[-1,"LEFT"]].map(([l,c])=>`<button data-v="${l}" class="${t.spinDir===l?"on":""}">${c}</button>`).join("");const o=(l,c)=>l.map(h=>`<button data-v="${h}" class="${h===c?"on":""}" style="background:${Lr(h)}"></button>`).join("");this.q("#wsPaint").innerHTML=o(Uh,t.paint),this.q("#wsGlow").innerHTML=o(Nh,t.glow),this.q("#wsMetal").innerHTML=Oh.map(l=>`<button data-v="${l}" class="${t.metal===l?"on":""}">${ul[l].name.toUpperCase()}</button>`).join(""),this.renderStats()}detail(t,e,n){const s=this.save,r=Vd(t,e?void 0:n),a=r.rows.map(f=>{const g=t.affixes.findIndex(x=>x.key===f.key),v=f.diff>0?"up":f.diff<0?"down":"",m=e?`+${f.item}%`:`${f.now?"+"+f.now+"%":"-"} → ${f.item?"+"+f.item+"%":"-"}`,p=!e&&f.diff?`<i class="${v}">${f.diff>0?"+":""}${f.diff}</i>`:"",M=g<0?"":`<button class="ws-act ws-re" data-act="reroll" data-i="${g}" ${s.scrap<go(t)?"disabled":""} aria-label="Reroll ${f.label}">REROLL ${go(t)}</button>`;return`<div class="ws-cmp"><span class="k">${f.label}</span><span class="v">${m}</span>${p}${M}</div>`}).join(""),o=e?"":`<div class="ws-cmp"><span class="k">Power</span><span class="v">${ui(t)}</span><i class="${r.power>0?"up":r.power<0?"down":""}">${r.power>0?"+":""}${r.power}</i></div>`,l=t.level>=Xh(s),c=qh(t),h=`<button class="ws-act" data-act="temper" ${l||s.scrap<c?"disabled":""}>${l?"MAX LEVEL "+t.level:`TEMPER L${t.level+1} · ${c}`}</button>`,u=e?"":'<button class="ws-act go" data-act="fit">FIT</button>',d=e?"":`<button class="ws-act" data-act="salv">SALVAGE +${mo(t)}</button>`;return`<div class="ws-detail">${a||'<div class="ws-cmp"><span class="k">No stat rolls</span></div>'}${o}<div class="ws-acts">${u}${h}${d}</div></div>`}renderTools(){const t=this.save,e=Yh(t,this.bulkMax),n=e.reduce((a,o)=>a+mo(o),0),s=di.slice(0,4).map(a=>a.name.toUpperCase());let r="";this.bulk==="pick"?r=`<div class="ws-bulk"><div class="ws-step"><button data-tool="step" data-d="-1">◀</button><span>UP TO ${s[this.bulkMax]}</span><button data-tool="step" data-d="1">▶</button></div>
        <button class="ws-act" data-tool="ask" ${e.length?"":"disabled"}>SALVAGE ${e.length} · +${n}</button><small>Fitted parts are never salvaged. All slots.</small></div>`:this.bulk==="confirm"&&(r=`<div class="ws-bulk"><small>Salvage ${e.length} parts up to ${s[this.bulkMax]} for ${n} scrap? This cannot be undone.</small>
        <div class="ws-acts"><button class="ws-act go" data-tool="yes">YES, SALVAGE</button><button class="ws-act" data-tool="no">CANCEL</button></div></div>`),this.q("#wsTools").innerHTML=`<div class="ws-acts"><button class="ws-act" data-tool="sort">SORT: ${this.sort.toUpperCase()}</button><button class="ws-act ${this.bulk==="off"?"":"on"}" data-tool="bulk">BULK SALVAGE</button></div>${r}`}renderStats(){const t=this.save,e=ba(ks(t)),n=this.hover??this.sel,r=n&&n!==t.equipped[this.slot]&&t.items.some(o=>o.uid===n)?ba(ks({...t,equipped:{...t.equipped,[this.slot]:n}})):e,a=o=>Math.min(100,6+o*94);this.q("#wsStats").innerHTML=Wr.map(o=>{const l=a(e[o]),c=a(r[o]),h=Math.round((r[o]-e[o])*100),u=h===0?"":`<i class="${h>0?"up":"down"}">${h>0?"+":""}${h}</i>`,d=h===0?"":`<span class="${h>0?"up":"down"}" style="width:${Math.max(l,c)}%"></span>`;return`<div class="ws-stat"><label>${Fd[o]}${u}</label><div class="ws-bar">${d}<span class="cur" style="width:${Math.min(l,c)}%"></span></div></div>`}).join("")}}const Zt=0,Dr=i=>{try{navigator.vibrate?.(i)}catch{}};{const i=document.createElement("style");i.textContent=`
#arrows{position:fixed;inset:0;pointer-events:none;z-index:5}
#arrows i{position:absolute;left:0;top:0;width:0;height:0;margin:-9px 0 0 -9px;border-left:18px solid var(--c);border-top:9px solid transparent;border-bottom:9px solid transparent;filter:drop-shadow(0 0 6px var(--c));opacity:.9}
#combo{position:fixed;left:50%;bottom:74px;transform:translateX(-50%);display:flex;gap:6px;align-items:center;pointer-events:none;z-index:5;font:700 10px/1 system-ui,sans-serif;letter-spacing:.12em;color:#fff}
body.touch #combo{bottom:auto;top:92px}
#combo i{width:22px;height:5px;border-radius:3px;background:rgba(255,255,255,.16);transition:background .12s,box-shadow .12s}
#combo i.on{background:var(--me,#ff7a33);box-shadow:0 0 10px var(--me,#ff7a33)}
#combo.full i{background:#fff;box-shadow:0 0 14px #fff}
#combo span{opacity:0;transition:opacity .12s}
#combo.full span{opacity:1}`,document.head.append(i);const t=document.createElement("div");t.id="arrows";const e=document.createElement("div");e.id="combo",e.innerHTML="<i></i><i></i><i></i><span>FINISHER</span>",t.style.display=e.style.display="none",document.body.append(t,e)}const id="spinforge.save.v1",ge=i=>document.getElementById(i),xs=i=>"#"+i.toString(16).padStart(6,"0"),Ax=i=>i[Math.floor(Math.random()*i.length)],js=ge("game"),oe=new Tx(js),se=new of,pl=new URLSearchParams(location.search),gi=pl.has("demo");function Rx(){try{return oc(JSON.parse(localStorage.getItem(id)??"null"))}catch{return oc(null)}}function sd(){try{localStorage.setItem(id,JSON.stringify(qe))}catch{}}const qe=Rx();let Ze=null,Ut,ml=null,_i="workshop",Hl=!1;const Hn=new wx(oe.renderer,qe,{onChange:sd,onBattle:()=>ta("new")});gi&&pl.get("demo")&&(Hn.perTeam=Math.max(1,Math.min(5,Number(pl.get("demo"))||1)));const Hi=document.createElement("div");Hi.id="endbar";Hi.className="hidden";document.body.appendChild(Hi);Hi.addEventListener("click",i=>{const t=i.target.dataset.a;t==="again"&&ta("again"),t==="next"&&ta("next"),t==="shop"&&Vl("workshop")});const Gl=document.createElement("div");Gl.id="cds";Gl.innerHTML='<div class="cd"><i id="cdStrike"></i><span>STRIKE</span><small>CLICK</small></div><div class="cd"><i id="cdBoost"></i><span>BOOST</span><small>SHIFT</small></div>';ge("hud").appendChild(Gl);const Cx=ge("cdStrike"),Px=ge("cdBoost"),rn=cf({mainDown:()=>{_i==="battle"&&(Ut.world.tops[Zt].inPlay?_a=!0:ld())},mainUp:()=>cd(),boost:()=>Qs=!0,ability:()=>ga=!0,super:()=>va=!0}),mn=new Set;let ma=!1,Gn={x:0,y:3},an=0,Yn=!1,Js=0,ga=!1,Qs=!1,_a=!1,va=!1,Qr=null,rd=[],Bs=0,en=0,ci=0,Th=performance.now(),ao=0,Hr=0,wh="";function Vl(i){_i=i,Hn.show(i==="workshop"),i==="workshop"&&Hn.refresh(),ge("hud").classList.toggle("hidden",i!=="battle"),Hi.classList.add("hidden"),rn.show(i==="battle"),window.__sfBusy=i==="battle";for(const t of["arrows","combo"]){const e=document.getElementById(t);e&&(e.style.display=i==="battle"?"":"none")}i==="workshop"?(se.setHum(0,0,!1),se.setHum(1,0,!1)):oe.resize()}function ta(i){if(se.start(),i==="next"&&(Hn.tier=Math.min(qe.tier,Hn.tier+1)),i!=="again"||!Ze){const t=Hn.perTeam,e=Hn.tier,n=sf(Math.random,e,t,qe.paint);Ze={perTeam:t,tier:e,boss:n.boss,stadium:Ax(bd(t)),specs:[ks(qe),...n.allies,...n.enemies],teams:[...new Array(t).fill(0),...n.enemies.map(()=>1)]}}else Ze.specs[Zt]=ks(qe);document.documentElement.style.setProperty("--me",xs(Ze.specs[Zt].accent)),document.documentElement.style.setProperty("--foe",xs(Ze.specs[Ze.perTeam].accent)),Ut=new af(Ze.specs,Math.random()*1e9|0,2,Ze.stadium,Ze.teams),Hl=!1,ml=null,Bs=0,Vl("battle")}const ad=()=>{const i=Js/Ut.specs[Zt].chargeTime%2;return i>1?2-i:i};function od(){const i=Math.hypot(Gn.x,Gn.y),t=Vs(Ut.world.stadium),e=i>t?t/i:1;return{x:Gn.x*e,y:Gn.y*e}}function ld(){ma=!0,!gi&&Ut.phase==="live"&&!Ut.world.tops[Zt].inPlay&&!Yn&&(Yn=!0,Js=0)}function cd(){if(ma=!1,Yn){Yn=!1;const i=od();Qr={x:i.x,y:i.y,power:ad(),tilt:an}}}function Lx(){oe.setTops(Ut.specs,Ut.stadium),Yn=!1,Js=0,Qr=null,ci=0,rd=Ut.specs.map(()=>.25+Math.random()*.7),Fx()}function Dx(i){if(gi)return Dh(i,Zt);const t={sx:0,sy:0,ability:ga,boost:Qs,strike:_a,super:va};if(rn.active)return t.sx=rn.sx,t.sy=rn.sy,t;(mn.has("KeyA")||mn.has("ArrowLeft"))&&(t.sx-=1),(mn.has("KeyD")||mn.has("ArrowRight"))&&(t.sx+=1),(mn.has("KeyW")||mn.has("ArrowUp"))&&(t.sy-=1),(mn.has("KeyS")||mn.has("ArrowDown"))&&(t.sy+=1);const e=i.tops[Zt];if(t.sx===0&&t.sy===0&&e.inPlay){const n=Gn.x-e.x,s=Gn.y-e.y,r=Math.hypot(n,s);r>.5&&(t.sx=n/r,t.sy=s/r)}return t}const Ii=document.createElement("div");Ii.id="od";Ii.innerHTML="<i></i><span></span>";ge("hud").appendChild(Ii);const Pi=document.createElement("div");Pi.id="banner";ge("hud").appendChild(Pi);const oi=document.createElement("div");oi.id="flash";document.body.appendChild(oi);function oo(i,t,e){Pi.textContent=i,Pi.style.setProperty("--bc",xs(t)),Pi.className="",Pi.offsetWidth,Pi.className=e?"show big":"show"}function lo(i,t){oi.style.background=xs(i),oi.style.transition="none",oi.style.opacity=String(t),oi.offsetWidth,oi.style.transition="opacity 0.35s ease-out",oi.style.opacity="0"}function ai(i){ge("toast").textContent=i,ge("toast").style.opacity="1",Hr=1.3}function Ix(i){switch(i.type){case"hit":{oe.hit(i.x,i.y,i.nx,i.ny,i.strength,i.a,i.b,i.power),se.clash(i.strength);const t=i.a===Zt||i.b===Zt;t&&i.strength>.5&&(en=Math.max(en,.02+.05*i.strength)),t&&i.strength>.25&&Dr(8+30*i.strength),i.power>=0&&(se.power(),t&&(en=Math.max(en,.09)),i.power===2&&t?ai("CLASH!"):i.power===Zt&&ai("POWER HIT"));break}case"break":oe.breakPiece(i.kind,i.index,i.x,i.y),se.wallBreak(),ai(i.kind==="wall"?"WALL DOWN":"PILLAR DOWN");break;case"boost":oe.boostFx(i.i,Ut.world),i.i===Zt&&oe.kick(6),se.boost();break;case"shift":se.ability("brace"),i.i===Zt&&ai(i.guard?"GUARD FORM":"ATTACK FORM");break;case"strike":se.strike();break;case"super":{oe.superFx(i.i,i.elements),se.superFx();for(const t of i.elements)se.superEl(t);ci=Math.max(ci,i.i===Zt?.6:.35),oo(i.elements.map(t=>Te[t].super.name).join(" + "),Te[i.elements[0]].color,!0),lo(Te[i.elements[0]].color,.5);break}case"pulse":oe.pulseFx(i,Ut.world),i.targets.length&&se.zap();break;case"react":oe.reactFx(i.x,i.y,i.color),se.power(),oo(i.team?`TEAM COMBO  ·  ${i.name}`:i.name,i.color,i.team),lo(i.color,i.team?.5:.35),(i.i===Zt||i.by===Zt)&&(en=Math.max(en,.1));break;case"finisher":{const t=i.i===Zt||i.target===Zt;oe.reactFx(i.x,i.y,16777215),oe.kick(9),se.power(),se.wallBreak(),oo("FINISHER",Ze.specs[i.i].accent,!0),ci=Math.max(ci,t?.55:.25),t&&(en=Math.max(en,.12),Dr(70));break}case"crack":i.i===Zt&&Dr(90),i.stage<3&&(oe.crackTop(i.i,i.stage),se.wallBreak(),ai(i.i===Zt?i.stage===1?"YOUR ARMOUR BROKE":"YOUR DISC SHEARED OFF":i.stage===1?"ARMOUR BREAK":"DISC BREAK"),i.i===Zt&&lo(16724770,.4));break;case"rim":oe.rimHit(i.x,i.y,i.strength),se.rim(i.strength);break;case"out":i.reason==="burst"||i.reason==="broken"?(oe.burstTop(i.i),se.burst(),en=Math.max(en,.1)):i.reason==="ringout"?(oe.ringOut(i.i),se.ringOut()):se.spinOut(),Ut.world.over?ci=1.3:i.i===Zt&&ai("YOU ARE OUT");break;case"ability":se.ability(i.kind),i.kind==="spring"&&oe.jumpFx(i.i,Ut.world);break;case"brake":oe.brakeFx(i),i.phase==="stop"?se.ability("brake"):(se.release(),i.i===Zt&&oe.kick(8));break;case"land":oe.landFx(i,Ut.world),se.land(),i.i===Zt&&Dr(40);break;case"counter":oe.counterFx(i),se.strike(),se.power(),i.i===Zt&&(ai("COUNTER"),oe.kick(8));break;case"launch":se.launch(i.perfect),i.i===Zt&&i.perfect&&ai("PERFECT LAUNCH");break}}function Ux(){const i=Ut.world,t=i.tops.map(()=>null);if(Ut.phase==="live"){i.tops[Zt].inPlay||(gi?Ut.liveT>.4&&(t[Zt]=rc(Math.random,i)):(ma&&!Yn&&(Yn=!0,Js=0),Yn&&(Js+=Nt),t[Zt]=Qr));for(let s=1;s<i.tops.length;s++)!i.tops[s].inPlay&&Ut.liveT>=rd[s]&&(t[s]=rc(Math.random,i))}Qr=null;const e=Ut.phase,n=Ut.tick(i.tops.map((s,r)=>r===Zt?Dx(i):Dh(i,r)),t);if(ga=Qs=_a=va=!1,n.forEach(Ix),Ut.phase==="countdown"){const s=Math.ceil(Ut.phaseT/Xr);s!==ao&&(ao=s,se.beep(!1))}else e==="countdown"&&(ao=0,se.beep(!0));Ut.phase==="matchEnd"&&!Hl&&Nx()}function Nx(){Hl=!0;const i=Ze,t=Ut.score[0]>Ut.score[1];let e=[],n=!1;if(gi||(e=jd(Math.random,i.tier,t,i.boss,i.perTeam).map(o=>Zd(qe,o)),t&&(qe.wins++,i.tier===qe.tier&&qe.tier<xl&&(qe.tier++,n=!0)),sd()),e.length){const o=Ut.world.tops[i.perTeam],l=Math.hypot(o.x,o.y),c=l>i.stadium.radius*.7?i.stadium.radius*.7/l:1;oe.dropLoot(o.x*c,o.y*c,e.map(h=>di[h.rarity].color)),se.launch(e.some(h=>h.rarity>=2))}const s=e.map((o,l)=>`
      <div class="lc" style="--rc:${xs(di[o.rarity].color)};animation-delay:${.25+l*.18}s">
        <b>${Vh(o)}</b><small>${di[o.rarity].name.toUpperCase()} · LEVEL ${o.level} · ${Ih[Rn(o.part).slot]}</small>
        ${o.affixes.map(c=>`<span>${Wh(c)}</span>`).join("")}
      </div>`).join(""),r=gi?"":e.length?n?`LOOT  ·  TIER ${qe.tier} UNLOCKED`:"LOOT":t?"NO DROPS THIS TIME":"NOTHING SALVAGED",a=t&&i.tier<qe.tier?'<button data-a="next">NEXT TIER</button>':"";Hi.innerHTML=`<div id="lootTitle">${r}</div><div id="loot">${s}</div><div class="btns">${a}<button data-a="again">REMATCH</button><button data-a="shop">FORGE</button></div>`}const Ox={ringout:"RING-OUT",burst:"BURST",spinout:"SPIN-OUT",broken:"DESTROYED",time:"TIME"};function Ir(i,t=""){if(i!==wh){wh=i;const e=ge("big");e.textContent=i,e.classList.remove("pop"),e.offsetWidth,i&&e.classList.add("pop")}ge("sub").textContent=t}function Fx(){for(const i of[0,1]){const t=document.querySelector(i?".panel.right":".panel.left"),e=Ut.specs.map((s,r)=>r).filter(s=>Ut.world.teams[s]===i),n=e.length>1;t.classList.toggle("many",n),t.innerHTML=`<div class="name"><span>${n?i?"ENEMY TEAM":"YOUR TEAM":Ut.specs[e[0]].name}</span><span class="pips" id="p${i}"></span></div>`+e.map(s=>`<div class="row" id="r${s}">${n?`<span class="nm">${s===Zt?"YOU":Ut.specs[s].name}</span>`:""}<div class="bar spin"><i id="s${s}"></i></div><div class="bar burst"><i id="b${s}"></i></div><div class="bar arm"><i id="a${s}"></i></div></div>`).join("")}}function Ah(i,t,e){i.childElementCount!==e&&(i.innerHTML="<i></i>".repeat(e)),[...i.children].forEach((n,s)=>n.classList.toggle("on",s<t))}function Bx(i){const t=Ut.world;t.tops.forEach((m,p)=>{ge(`s${p}`).style.width=`${(m.inPlay?Math.min(1,Vn(m)):1)*100}%`,ge(`b${p}`).style.width=`${Math.min(1,m.burst)*100}%`,ge(`a${p}`).style.width=`${m.armour*100}%`,ge(`r${p}`).classList.toggle("out",!!m.out)}),Ah(ge("p0"),Ut.score[0],Ut.winsNeeded),Ah(ge("p1"),Ut.score[1],Ut.winsNeeded),ge("timer").textContent=String(Math.max(0,Math.ceil(Ph-t.time))),ge("round").textContent=`${Ut.stadium.name}  ·  TIER ${Ze.tier}  ·  ROUND ${Ut.round}`;const e=t.tops[Zt],n=document.getElementById("combo");for(let m=0;m<3;m++)n.children[m].classList.toggle("on",e.combo>m);n.classList.toggle("full",e.combo>=3);const s=document.getElementById("arrows"),r=innerWidth,a=innerHeight;t.tops.forEach((m,p)=>{let M=s.children[p];M||(M=document.createElement("i"),s.append(M));const x=p!==Zt&&m.inPlay&&!m.out?oe.simToScreen(m.x,m.y):null;if(!x||!x.behind&&x.x>0&&x.x<r&&x.y>0&&x.y<a){M.style.display="none";return}const _=(x.x-r/2)*(x.behind?-1:1),w=(x.y-a/2)*(x.behind?-1:1),T=Math.min((r/2-30)/Math.max(1,Math.abs(_)),(a/2-30)/Math.max(1,Math.abs(w)));M.style.display="",M.style.setProperty("--c",t.teams[p]===t.teams[Zt]?"var(--me)":"var(--foe)"),M.style.transform=`translate(${r/2+_*T}px,${a/2+w*T}px) rotate(${Math.atan2(w,_)}rad)`});for(let m=t.tops.length;m<s.children.length;m++)s.children[m].style.display="none";Ut.phase==="countdown"?Ir(String(Math.ceil(Ut.phaseT/Xr))):Ut.phase==="live"?Ir(Ut.liveT<.9?"LAUNCH!":""):t.over&&(Ut.phase==="matchEnd"?Ir(Ut.score[0]>Ut.score[1]?"VICTORY":"DEFEAT"):Ir(Ox[t.over.reason],t.over.winner<0?"DRAW":t.over.winner===0?"ROUND WON":"ROUND LOST")),Hi.classList.toggle("hidden",Ut.phase!=="matchEnd");const o=!gi&&!e.inPlay&&(Ut.phase==="countdown"||Ut.phase==="live");if(ge("launch").classList.toggle("hidden",!o),o&&rn.active&&(Gn={x:rn.sx*Vs(t.stadium)*.9,y:rn.sy*Vs(t.stadium)*.9}),o){ge("pw").style.width=`${(Yn?ad():0)*100}%`;const m=an===0?"FLAT":(an<0?"◀ ":"")+`${Math.round(Math.abs(an)*100)}%`+(an>0?" ▶":"");ge("tilt").textContent=`TILT  ${m}`;const p=od();oe.setAim(!0,p.x,p.y,an,e.spec.spinDir)}else oe.setAim(!1);const l=Ed(e.spec),c=e.brakeT>0?"RELEASE":Lh[e.spec.ability];ge("abName").textContent=c,Cx.style.height=`${e.strikeCd/at.STRIKE_CD*100}%`,Px.style.height=`${e.boostCd/at.BOOST_CD*100}%`,ge("abFill").style.height=`${e.abilityCd/l*100}%`,ge("ability").classList.toggle("ready",e.inPlay&&!e.out&&e.abilityCd<=0),Hr>0&&(Hr-=i,Hr<=0&&(ge("toast").style.opacity="0")),se.setHum(0,Vn(e),e.inPlay&&!e.out);let h=null,u=1/0;t.tops.forEach((m,p)=>{const M=Math.hypot(m.x-e.x,m.y-e.y);t.teams[p]!==0&&An(m)&&M<u&&(u=M,h=m)}),se.setHum(1,h?Vn(h):0,!!h);const d=e.spec.elements,f=d.map(m=>Te[m].super.name).join(" + "),g=xs(Te[d[0]].color),v=e.superMeter>=1;Ii.style.setProperty("--sc",g),Ii.firstElementChild.style.width=`${e.superMeter*100}%`,Ii.lastElementChild.textContent=v?`${f} READY${rn.active?"":"  ·  F"}`:"OVERDRIVE",Ii.classList.toggle("ready",v),rn.update({superMeter:e.superMeter,superName:f,superColor:g,launching:o,ability:c,strike:e.strikeCd/at.STRIKE_CD,boost:e.boostCd/at.BOOST_CD,abilityCd:e.abilityCd/l})}function hd(i){requestAnimationFrame(hd);const t=Math.min(.05,(i-Th)/1e3);if(Th=i,_i==="workshop"){Hn.frame(t);return}let e=1;for(ci>0&&(ci-=t,e=.22),en>0&&(en-=t,e=0),Bs+=t*e;Bs>=Nt;)Ux(),Bs-=Nt;Ut.world!==ml&&(ml=Ut.world,Lx()),Bx(t),oe.frame(Ut.world,Bs/Nt,t*e,i/1e3,Zt)}window.addEventListener("keydown",i=>{_i==="battle"&&(i.code==="Space"&&(ga=!0,i.preventDefault()),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&(Qs=!0),i.code==="KeyF"&&(va=!0),i.code==="KeyQ"&&(an=Math.max(-1,an-.25)),i.code==="KeyE"&&(an=Math.min(1,an+.25)),mn.add(i.code))});window.addEventListener("keyup",i=>mn.delete(i.code));window.addEventListener("blur",()=>{mn.clear(),ma=!1});js.addEventListener("mousemove",i=>{_i==="battle"&&!rn.active&&(Gn=oe.screenToSim(i.clientX,i.clientY))});js.addEventListener("mousedown",i=>{if(!(_i!=="battle"||rn.active)){if(Gn=oe.screenToSim(i.clientX,i.clientY),i.button===2){Qs=!0;return}i.button===0&&(Ut.world.tops[Zt].inPlay&&(_a=!0),ld())}});window.addEventListener("mouseup",i=>{i.button===0&&!rn.active&&cd()});js.addEventListener("wheel",i=>{_i==="battle"&&(an=Math.max(-1,Math.min(1,an+(i.deltaY>0?.25:-.25))),i.preventDefault())},{passive:!1});js.addEventListener("contextmenu",i=>i.preventDefault());Object.assign(window,{sf:{get match(){return Ut},get mode(){return _i},get fight(){return Ze},save:qe,view:oe,workshop:Hn}});gi?ta("new"):Vl("workshop");window.__sfReady?.();requestAnimationFrame(hd);
