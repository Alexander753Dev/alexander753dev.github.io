const item = window.PORTFOLIO.proyectos.find(p => p.detalle === new URLSearchParams(location.search).get('proyecto'));
if (item) {
 document.title = `${item.titulo} | Alexander753`;
 document.querySelector('#detail-label').textContent = item.etiqueta;
 document.querySelector('#detail-title').textContent = item.titulo;
 document.querySelector('#detail-context').textContent = item.contexto;
 if (item.imagen) { const image = document.createElement('img'); image.src = item.imagen; image.alt = `Captura del servidor ${item.titulo}`; image.className = 'detail-image'; document.querySelector('#detail-context').after(image); }
 document.querySelector('#detail-tech').textContent = item.tecnologias;
 if (item.url && /^https:\/\//.test(item.url)) { const link = document.createElement('a'); link.href = item.url; link.textContent = 'Visitar proyecto ↗'; link.className = 'button'; link.target = '_blank'; link.rel = 'noopener noreferrer'; document.querySelector('#detail-note').after(link); }
 document.querySelector('.detail h2').textContent = item.ejemplo ? 'Lo que puedo crear' : 'Lo que construí';
 item.puntos.forEach(text => {const li = document.createElement('li'); li.textContent=text; document.querySelector('#detail-points').append(li);});
 document.querySelector('#detail-extra').textContent = item.extra || '';
 document.querySelector('#detail-note').textContent = item.ejemplo ? 'Referencia de servicio: estas son posibilidades de desarrollo, no una ficha de un proyecto ya realizado.' : 'Proyecto personal de Alexander753.';
} else {
 document.querySelector('#detail-title').textContent = 'Referencia no encontrada';
 document.querySelector('#detail-context').textContent = 'Regresa a las referencias para elegir un proyecto.';
 document.querySelector('.detail h2').hidden = true;
}
