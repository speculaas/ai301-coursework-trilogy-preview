
const canvas = document.querySelector('#systemCanvas');
const ctx = canvas.getContext('2d');
const ui = {
  play: document.querySelector('#playButton'), speed: document.querySelector('#speedInput'),
  labels: document.querySelector('#labelsInput'), trails: document.querySelector('#trailsInput'),
  reset: document.querySelector('#resetButton'), theme: document.querySelector('#themeButton'),
  name: document.querySelector('#infoName'), type: document.querySelector('#infoType'), data: document.querySelector('#infoData')
};

// Angles evolve from their initial positions, making the original static sketch dynamic.
const bodies = [
  { name:'CHAR', radius:5.3, angle:40, rate:1.25, size:.18, type:'Rocky world' },
  { name:'FORTUNE', radius:6.8, angle:30, rate:.85, size:.22, type:'Binary quarry world', extras:['Big Quarry','Little Quarry'] },
  { name:'CRAG', radius:8.5, angle:18, rate:.58, size:.26, type:'Irregular rocky cluster' },
  { name:'SOLITAIRE / SOLACE', radius:9.5, angle:45, rate:.45, size:.18, type:'Ringed world', extras:['Lodestone','Cypsela'] },
  { name:'AUGUST', radius:11.5, angle:58, rate:.32, size:.35, type:'Ringed giant' },
  { name:'WISP', radius:13.2, angle:64, rate:.24, size:.16, type:'Outer world' },
  { name:'THE MOTHERSHIP', radius:10.2, angle:28, rate:.52, size:.10, type:'Active vessel' }
];
const initial = { zoom:56, panX:0, panY:0 };
const view = {...initial};
let running=true, elapsed=0, last=performance.now(), dragging=false, previous=null, selected=null;
let cssWidth=0, cssHeight=0, dpr=1;

function colors(){ const s=getComputedStyle(document.documentElement); return {paper:s.getPropertyValue('--paper').trim(),ink:s.getPropertyValue('--ink').trim(),line:s.getPropertyValue('--line').trim()}; }
function resize(){
  const r=canvas.getBoundingClientRect(); dpr=Math.min(devicePixelRatio||1,2); cssWidth=r.width; cssHeight=r.height;
  canvas.width=Math.round(cssWidth*dpr); canvas.height=Math.round(cssHeight*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
}
new ResizeObserver(resize).observe(canvas);
function worldToScreen(x,y){ return {x:cssWidth*.16+view.panX+x*view.zoom, y:cssHeight*.82+view.panY-y*view.zoom}; }
function bodyPosition(body){ const a=(body.angle+elapsed*body.rate)*Math.PI/180; return {x:-3+body.radius*Math.cos(a),y:-3+body.radius*Math.sin(a)}; }
function circle(x,y,r,fill=false){ ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);fill?ctx.fill():ctx.stroke(); }
function ellipse(x,y,rx,ry,rotation=0){ctx.beginPath();ctx.ellipse(x,y,rx,ry,rotation,0,Math.PI*2);ctx.stroke();}
function label(text,x,y,align='center'){ctx.textAlign=align;ctx.fillText(text,x,y);}

function draw(){
  const c=colors(); ctx.clearRect(0,0,cssWidth,cssHeight); ctx.fillStyle=c.paper;ctx.fillRect(0,0,cssWidth,cssHeight);
  ctx.strokeStyle=c.ink;ctx.fillStyle=c.ink;ctx.lineWidth=1.25; ctx.font='bold 11px ui-monospace, monospace';
  const center=worldToScreen(-3,-3);
  // Aurum's organic edge
  ctx.beginPath(); for(let i=0;i<=120;i++){const a=i/120*Math.PI/2,r=(4.2+.04*Math.sin(a*60))*view.zoom,p=worldToScreen(-3+(r/view.zoom)*Math.cos(a),-3+(r/view.zoom)*Math.sin(a));i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);} ctx.stroke();
  const aurumLabel=worldToScreen(1.2,1.2); label('AURUM',aurumLabel.x,aurumLabel.y,'left');
  for(const b of bodies){
    if(ui.trails.checked){ctx.save();ctx.setLineDash([5,6]);ctx.strokeStyle=c.line;circle(center.x,center.y,b.radius*view.zoom);ctx.restore();}
    const p=worldToScreen(...Object.values(bodyPosition(b))); b.screen=p; const s=Math.max(4,b.size*view.zoom);
    ctx.strokeStyle=c.ink;ctx.fillStyle=c.paper;ctx.lineWidth=selected===b?2.7:1.3;
    if(b.name==='CRAG'){
      [[0,0],[.38,-.35],[-.45,.25],[.3,.5],[-.2,-.55],[.62,.05]].forEach(([dx,dy],i)=>circle(p.x+dx*s,p.y+dy*s,Math.max(2,s*(.18+(i%3)*.07)),true));
    } else if(b.name==='THE MOTHERSHIP'){ctx.fillStyle=c.ink;circle(p.x,p.y,3,true);}
    else {circle(p.x,p.y,s,true); if(b.name.includes('SOLITAIRE')) ellipse(p.x,p.y,s*2.2,s*.55,.35); if(b.name==='AUGUST') ellipse(p.x,p.y,s*2.3,s*.58,-.42);}
    if(b.name==='FORTUNE'){circle(p.x-s*2,p.y,3.5);circle(p.x+s*2,p.y,3);}
    if(b.name.includes('SOLITAIRE')){circle(p.x-s*3.3,p.y-s*1.4,3);circle(p.x+s*3,p.y+s*.7,2.5);}
    if(ui.labels.checked){ctx.fillStyle=c.ink; label(b.name,p.x,p.y+s+15);}
  }
}
function animate(now){ const dt=Math.min((now-last)/1000,.05); last=now;if(running)elapsed+=dt*18*Number(ui.speed.value);draw();requestAnimationFrame(animate); }
requestAnimationFrame(animate);

function point(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}
canvas.addEventListener('pointerdown',e=>{dragging=true;previous=point(e);canvas.setPointerCapture(e.pointerId);canvas.classList.add('dragging');});
canvas.addEventListener('pointermove',e=>{if(!dragging)return;const p=point(e);view.panX+=p.x-previous.x;view.panY+=p.y-previous.y;previous=p;});
canvas.addEventListener('pointerup',e=>{const p=point(e),moved=previous&&Math.hypot(p.x-previous.x,p.y-previous.y)>4;dragging=false;canvas.classList.remove('dragging');if(!moved)selectAt(p);});
canvas.addEventListener('wheel',e=>{e.preventDefault();const before=point(e),factor=Math.exp(-e.deltaY*.001);const old=view.zoom;view.zoom=Math.min(130,Math.max(24,view.zoom*factor));view.panX=(view.panX+before.x-cssWidth*.16)*(view.zoom/old)-before.x+cssWidth*.16;view.panY=(view.panY+before.y-cssHeight*.82)*(view.zoom/old)-before.y+cssHeight*.82;},{passive:false});
function selectAt(p){selected=bodies.find(b=>b.screen&&Math.hypot(p.x-b.screen.x,p.y-b.screen.y)<22)||null;if(selected){ui.name.textContent=selected.name;ui.type.textContent=selected.type;ui.data.textContent=`Orbital radius: ${selected.radius.toFixed(1)} units · Relative angular rate: ${selected.rate.toFixed(2)}`;}else{ui.name.textContent='AURUM';ui.type.textContent='Central star';ui.data.textContent='Select an object to inspect it.';}}
ui.play.addEventListener('click',()=>{running=!running;ui.play.textContent=running?'Pause':'Play';});
ui.reset.addEventListener('click',()=>Object.assign(view,initial));
ui.theme.addEventListener('click',()=>document.documentElement.classList.toggle('dark'));
