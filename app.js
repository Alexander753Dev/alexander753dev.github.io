const config = window.PORTFOLIO;
const $ = s => document.querySelector(s);
document.querySelectorAll('[data-name]').forEach(el => el.textContent = config.nombre);
$('[data-bio]').textContent = config.biografia;
$('[data-story]').textContent = config.comienzo;
$('#year').textContent = new Date().getFullYear();
function safeUrl(value) { try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
$('#discord-link').href = safeUrl(config.discordUrl) || 'https://discord.com/app';
$('#copy-discord strong').textContent = config.discordUsuario;
$('#contact-status').textContent = `Agrégame en Discord como ${config.discordUsuario}.`;
$('#copy-discord').addEventListener('click', async () => {
 try { await navigator.clipboard.writeText(config.discordUsuario); $('#contact-status').textContent = '¡Usuario copiado! Abre Discord y envíame tu idea.'; }
 catch { $('#contact-status').textContent = `Copia mi usuario: ${config.discordUsuario}`; }
});
const art = {
 web: '<div class="mini-browser"><div class="mini-top">● ● ● &nbsp; proyecto.web</div><div class="mini-title">Tu idea, online.</div><div class="mini-lines"></div><div class="mini-button"></div></div>',
 minecraft: '<div class="blocks"><i></i><i></i><i></i></div>',
 discord: '<div class="bot-demo"><b>● community.bot</b><p>/bienvenida<br>¡Un nuevo comienzo! ✦</p><span>✓ Comando ejecutado</span></div>'
};
config.proyectos.forEach(project => {
 const card = document.createElement('article'); card.className = 'project'; card.dataset.category = project.categoria;
 const visual = document.createElement('div'); visual.className = 'project-art';
 if (project.imagen) { const img = document.createElement('img'); img.src = project.imagen; img.alt = `Vista del proyecto ${project.titulo}`; img.loading = 'lazy'; visual.append(img); }
 else { visual.innerHTML = project.categoria === 'tebex' ? '<div class="mini-browser"><div class="mini-top">TIENDA / TEBEX</div><div class="mini-title">Tu mundo. Tu tienda.</div><div class="mini-lines"></div><div class="mini-button"></div></div>' : project.categoria === 'plugins' ? '<div class="bot-demo"><b>&lt; tu-plugin /&gt;</b><p>idea → código → mecánica</p><span>Hecho para tu servidor.</span></div>' : art[project.categoria] || art.web; visual.setAttribute('aria-hidden','true'); }
 if (project.ejemplo) { const badge = document.createElement('span'); badge.className = 'demo-label'; badge.textContent = 'REFERENCIA DE SERVICIO'; visual.append(badge); }
 card.append(visual);
 [['div',project.etiqueta,'project-label'],['h3',project.titulo,''],['p',project.descripcion,''],['small',project.tecnologias,'']].forEach(([tag,text,cls]) => {const el = document.createElement(tag); el.textContent = text; el.className = cls; card.append(el);});
 if(safeUrl(project.url)) {const a = document.createElement('a'); a.href = safeUrl(project.url); a.textContent = 'Ver proyecto ↗'; a.className = 'project-link'; a.target = '_blank'; a.rel = 'noopener noreferrer'; card.append(document.createElement('br'),a);}
 const more = document.createElement('a'); more.href = `referencia.html?proyecto=${encodeURIComponent(project.detalle)}`; more.className = 'project-link'; more.textContent = 'Ver más ↗'; more.setAttribute('aria-label', `Ver más sobre ${project.titulo}`); card.append(document.createElement('br'), more);
 $('#project-grid').append(card);
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button)); });
 document.querySelectorAll('.project').forEach(card => {card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;});
}));
function progress(){const height = document.documentElement.scrollHeight - innerHeight; $('#progress').style.width = `${height > 0 ? scrollY / height * 100 : 0}%`;}
addEventListener('scroll',progress,{passive:true}); addEventListener('resize',progress); progress();
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click',()=>{$('#contact-status').textContent = `Hablemos de ${a.dataset.service}. Agrégame como ${config.discordUsuario}.`;}));
