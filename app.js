'use strict';
(() => {
  const C = window.IRENE;
  const $ = (selector, base = document) => base.querySelector(selector);
  const main = $('#main');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const e = escape;
  const lines = value => e(value).replace(/\n/g, '<br>');
  const validUrl = value => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : ''; } catch { return ''; } };
  const external = (url, label, css='button', fallback='Link coming soon') => validUrl(url)
    ? `<a class="${css}" href="${e(validUrl(url))}" target="_blank" rel="noopener noreferrer">${e(label)} <span aria-hidden="true">↗</span></a>`
    : `<span class="unavailable">${e(fallback)}</span>`;
  const heading = page => `<section class="page-heading"><span class="eyebrow">${e(page.eyebrow)}</span><h1>${lines(page.title)}</h1><p>${e(page.description)}</p></section>`;
  const label = name => name.charAt(0).toUpperCase()+name.slice(1);
  const list = items => `<ul>${items.map(s=>`<li>${e(s)}</li>`).join('')}</ul>`;
  let toastTimer;
  function notify(text) { const t=$('#toast');t.textContent='⊹ '+text;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),3500); }
  async function copy(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const input=document.createElement('textarea');input.value=value;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();
        const ok=document.execCommand('copy');input.remove();if(!ok)throw Error('Clipboard unavailable');
      }
      notify('Copied. A little magic to take with you.');
    } catch { notify('Copy is unavailable here. Select the text and copy it manually.'); }
  }
  function closeNavigation(){ $('#sidebar').classList.remove('open');$('#mobile-toggle').setAttribute('aria-expanded','false'); }
  function home() {
    const title=C.home.title.split('\n');
    main.innerHTML=`<section class="hero"><div class="hero-copy"><span class="eyebrow">${e(C.home.eyebrow)}</span><h1>${e(title[0])}<br><em>${e(title.slice(1).join(' '))}</em></h1><p class="intro">${e(C.home.description)}</p><div class="hero-actions"><a class="button primary" href="#commands">Open the grimoire <span>↗</span></a><a class="text-link" href="#lore">Follow the story ⊹</a></div><p class="hero-note">${e(C.home.note)}</p></div><div class="celestial" aria-label="Decorative tarot cards with a crescent moon" role="img"><div class="orbit"></div><div class="orbit two"></div><div class="tarot back-left"><span class="roman">XVII</span><span class="ornament">✧</span><span class="card-title">THE STAR</span></div><div class="tarot back-right"><span class="roman">XIX</span><span class="ornament">☼</span><span class="card-title">THE SUN</span></div><div class="tarot front"><span class="roman">XVIII</span><div class="moon-art"></div><span class="star-art">✦</span><span class="card-lines"></span><span class="card-title">THE MOON</span></div><span class="float-star s1">✧</span><span class="float-star s2">⊹</span><span class="float-star s3">✦</span></div></section><div class="section-line">A place to begin <span>⊹</span></div><section class="path-grid" aria-label="Your first steps">${C.home.firstSteps.map((p,i)=>`<article class="path-card"><span class="number">0${i+1}</span><h3>${e(p.title)}</h3><p>${e(p.text)}</p><a class="text-link" href="${e(p.link)}">${e(p.label)} ↗</a></article>`).join('')}</section>`;
  }
  function commands(params) {
    const categories=['All chapters',...new Set(C.commands.map(c=>c.category))];
    let active=categories.includes(params.get('category'))?params.get('category'):categories[0];
    main.innerHTML=heading(C.pages.commands)+`<div class="toolbar"><div class="input-wrap"><span aria-hidden="true">⌕</span><label for="command-search" class="sr-only">Search commands</label><input id="command-search" type="search" placeholder="Search a command, shortcut or purpose…"></div><span class="result-count" id="command-count" aria-live="polite"></span></div><div class="filters" aria-label="Command categories">${categories.map(cat=>`<button class="filter ${cat===active?'active':''}" data-category="${e(cat)}" aria-pressed="${cat===active}">${e(cat)}</button>`).join('')}</div><section class="command-grid" id="command-grid" aria-label="Commands"></section><p class="micro" style="margin-top:25px">⊹ Most commands are guided by menus. View, Gift and Pay use the arguments shown in their guides.</p>`;
    const render=()=>{
      const query=$('#command-search').value.trim().toLowerCase();
      const found=C.commands.filter(c=>(active===categories[0]||c.category===active)&&[c.name,c.summary,c.category,...c.aliases].join(' ').toLowerCase().includes(query));
      $('#command-count').textContent=`${found.length} little paths to explore`;
      $('#command-grid').innerHTML=found.length?found.map(c=>`<article class="command-card"><div class="command-card-top"><h3>${e(label(c.name))}</h3><span class="tag">${e(c.category)}</span></div><p>${e(c.summary)}</p><div class="command-bottom"><span class="alias">${c.aliases.length?'Shortcuts: '+c.aliases.map(a=>','+e(a)).join(' · '):'A chapter of its own'}</span><button class="guide-button" data-command="${e(c.name)}" aria-label="Read the ${e(c.name)} guide">Read the guide</button></div></article>`).join(''):'<p class="empty">No command found. Try another little clue.</p>';
    };
    $('#command-search').addEventListener('input',render);
    main.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.category;main.querySelectorAll('[data-category]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b);});render();}));
    render();
    if(params.get('command')) commandReader(params.get('command'));
  }
  function lore(params){
    main.innerHTML=heading(C.pages.lore)+(C.loreNotice?`<p class="notice">⊹ ${e(C.loreNotice)}</p>`:'')+`<section class="library" aria-label="Lore chapters">${C.lore.map(s=>`<button class="chapter" data-story="${e(s.id)}"><span class="chapter-number">${e(s.number)}</span><span><h3>${e(s.title)}</h3><p>${e(s.subtitle)}</p></span><span class="tag">${e(s.tag)}</span><span class="arrow" aria-hidden="true">↗</span></button>`).join('')}</section><blockquote class="reading-quote">“${e(C.site.quote)}”</blockquote>`;
    if(params.get('story'))storyReader(params.get('story'));
  }
  function characters(){
    const portrait=c=>c.image?`<img src="${e(c.image)}" alt="Original illustration of ${e(c.name)}" width="400" height="400" loading="lazy">`:`<div class="portrait-empty" role="img" aria-label="${e(c.name)} illustration space, awaiting an image"></div>`;
    main.innerHTML=heading(C.pages.characters)+C.characters.map(c=>`<article class="character" id="${e(c.id)}"><div class="character-image">${portrait(c)}</div><div><span class="eyebrow">${e(c.epithet)}</span><h2>${e(c.name)}</h2><p>${e(c.description)}</p>${c.offerings?.length?`<span class="eyebrow">Accepted offerings</span><div class="offering-list">${c.offerings.map(s=>`<span>⊹ ${e(s)}</span>`).join('')}</div>`:''}${list(c.details)}${c.quote?`<blockquote>“${e(c.quote)}”</blockquote>`:''}${c.draft?'<p class="draft-marker">Character prose · editable starter text</p>':''}<a class="text-link" href="#commands?command=${e(c.guideCommand||'offer')}">${e(c.guideLabel||'Visit the offering guide')} ↗</a></div></article>`).join('');
  }
  function rules(params){
    main.innerHTML=heading(C.pages.rules)+(C.rules.draft?`<p class="notice">⊹ ${e(C.rules.introduction)}</p>`:'')+`<div class="rules-layout"><div class="rule-tabs" role="tablist" aria-label="Rule categories"><button id="tab-server" class="active" role="tab" aria-selected="true" aria-controls="rule-content" data-rule="server">⟡ Server guidelines</button><button id="tab-bot" role="tab" aria-selected="false" aria-controls="rule-content" data-rule="bot" tabindex="-1">⟡ Bot guidelines</button></div><section id="rule-content" role="tabpanel" aria-labelledby="tab-server"></section></div>`;
    function show(key){$('#rule-content').setAttribute('aria-labelledby','tab-'+key);$('#rule-content').innerHTML=C.rules[key].map((r,i)=>`<article class="rule-item"><span class="number">0${i+1}</span><div><h3>${e(r.title)}</h3><p>${e(r.text)}</p></div></article>`).join('');main.querySelectorAll('[data-rule]').forEach(b=>{const selected=b.dataset.rule===key;b.classList.toggle('active',selected);b.setAttribute('aria-selected',selected);b.tabIndex=selected?0:-1;});}
    const tabs=[...main.querySelectorAll('[data-rule]')];tabs.forEach((b,i)=>{b.addEventListener('click',()=>show(b.dataset.rule));b.addEventListener('keydown',ev=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(ev.key)){ev.preventDefault();const next=tabs[ev.key==='Home'?0:ev.key==='End'?tabs.length-1:(i+1)%tabs.length];show(next.dataset.rule);next.focus();}});});show(params.get('tab')==='bot'?'bot':'server');
  }
  function support(){
    const s=C.support,p=s.pix;
    main.innerHTML=heading(C.pages.support)+(!s.termsApproved?'<p class="notice"><strong>Membership details are awaiting publication.</strong> The notes below are placeholders for the owner\'s approved terms. Please confirm all details before making a payment.</p>':'')+`<div class="support-grid"><article class="membership"><span class="eyebrow">A LITTLE LOVE FOR IRENE</span><h2>${e(s.membershipTitle)}</h2><p class="price">${e(s.price)}</p><p>${e(s.membershipDescription)}</p>${list(s.benefits)}${external(C.site.kofiUrl,'Visit Ko-Fi','button','Ko-Fi link coming soon')}</article><section class="terms"><span class="eyebrow">BEFORE YOU JOIN</span><h2>The little details matter.</h2><p class="micro">${e(s.introduction)}</p>${s.terms.map(t=>`<details><summary>${e(t.title)}</summary><p>${e(t.text)}</p></details>`).join('')}</section></div><section class="pix-section"><div class="section-heading"><div><span class="eyebrow">FOR OUR BRAZILIAN COLLECTORS</span><h2>Bae Ko-Fi via PIX!</h2></div><span class="tag">Information guide</span></div><p class="price">${e(p.amount)}</p><div class="steps">${p.instructions.map((text,i)=>`<article class="step"><span class="number">0${i+1}</span><p>${e(text)}</p></article>`).join('')}</div>${external(p.contactUrl,'Contact the team','button','Official support link coming soon')}</section>`;
  }
  function staff(){
    main.innerHTML=heading(C.pages.staff)+(C.staff.notice?`<p class="notice">⊹ ${e(C.staff.notice)}</p>`:'')+`<p class="micro" style="margin-bottom:30px">${e(C.staff.introduction)}</p><section class="role-grid" aria-label="Staff roles and applications">${C.staff.roles.map(r=>{const open=r.open&&validUrl(r.formUrl);return `<article class="role" id="role-${e(r.id)}"><div class="role-head"><span class="role-symbol" aria-hidden="true">${e(r.symbol)}</span><span class="status ${open?'open':''}">⊹ ${open?'APPLICATIONS OPEN':'APPLICATIONS CLOSED'}</span></div><span class="eyebrow">${e(r.tag)}</span><h2>${e(r.name)}</h2><p>${e(r.description)}</p><h3>What you\'ll look after</h3>${list(r.responsibilities)}<h3>What we\'re looking for</h3>${list(r.requirements)}${open?external(r.formUrl,'Apply for '+r.name,'button'):'<span class="unavailable">This application is not open yet</span>'}</article>`;}).join('')}</section><p class="staff-footer">Every role has its own path. Choose the one that feels like yours.</p><p class="micro" style="text-align:center">Applications open in an external Google Form.</p>`;
  }
  function openReader(kind,title,html){$('#reader-kind').textContent=kind;$('#reader-title').textContent=title;$('#reader-body').innerHTML=html;$('#reader-dialog').showModal();$('#reader-dialog').scrollTop=0;}
  function commandReader(name){const c=C.commands.find(c=>c.name===name);if(!c)return;openReader(c.category+' · COMMAND GUIDE','✦ '+label(c.name),`<p>${e(c.summary)}</p><div class="usage"><code>${e(c.usage)}</code><button data-copy-command="${e(c.name)}" aria-label="Copy command usage">Copy ⊹</button></div>${c.aliases.length?`<p><em>Shortcuts: ${c.aliases.map(a=>','+e(a)).join(' · ')}</em></p>`:''}<h3>How to use it</h3><ol>${c.steps.map(s=>`<li>${e(s)}</li>`).join('')}</ol>${c.examples?'<h3>A little example</h3>'+c.examples.map(x=>`<p><code>${e(x)}</code></p>`).join(''):''}${c.note?`<p class="notice">⊹ ${e(c.note)}</p>`:''}`);}
  function storyReader(id){const s=C.lore.find(s=>s.id===id);if(!s)return;openReader(s.tag+' · CHAPTER '+s.number,s.title,`${s.draft?'<p class="draft-marker">Editable starter chapter · awaiting the owner\'s canon</p>':''}${s.paragraphs.map(p=>`<p>${e(p)}</p>`).join('')}<blockquote class="reading-quote">“${e(s.quote)}”</blockquote>`);}
  const routes={home,commands,lore,characters,rules,support,staff};
  function route(){
    const [raw,query='']=location.hash.slice(1).split('?');const page=Object.hasOwn(routes,raw)?raw:'home';
    document.querySelectorAll('dialog[open]').forEach(d=>d.close());
    routes[page](new URLSearchParams(query));
    document.querySelectorAll('#navigation a').forEach(a=>{const current=a.hash==='#'+page;a.classList.toggle('active',current);if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    const nav=C.navigation.find(n=>n.id===page);$('#breadcrumb').textContent='THE ARCHIVE / '+nav.label.toUpperCase();document.title=`${nav.label} · ${C.site.name} Archive`;
    closeNavigation();window.scrollTo({top:0,behavior:'instant'});
  }
  $('#navigation').innerHTML=C.navigation.map(n=>`<a href="#${e(n.id)}"><span aria-hidden="true">${e(n.symbol)}</span>${e(n.label)}</a>`).join('');
  $('#edition').textContent=C.site.edition;$('#sidebar-quote').textContent='“'+C.site.quote+'”';$('#footer-copy').textContent=C.site.footer;
  if(validUrl(C.site.discordUrl)){const a=$('#community-link');a.href=validUrl(C.site.discordUrl);a.target='_blank';a.rel='noopener noreferrer';}
  $('#mobile-toggle').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#mobile-toggle').setAttribute('aria-expanded',open);});
  document.addEventListener('click',ev=>{
    const command=ev.target.closest('[data-command]');if(command)commandReader(command.dataset.command);
    const story=ev.target.closest('[data-story]');if(story)storyReader(story.dataset.story);
    const close=ev.target.closest('[data-close-dialog]');if(close)close.closest('dialog').close();
    const copyButton=ev.target.closest('[data-copy-command]');if(copyButton){const c=C.commands.find(c=>c.name===copyButton.dataset.copyCommand);if(c)copy(c.usage);}
    if(!ev.target.closest('#sidebar')&&!ev.target.closest('#mobile-toggle'))closeNavigation();
  });
  const searchIndex=[...C.commands.map(c=>({title:label(c.name),text:c.summary+' '+c.category+' '+c.aliases.join(' '),kind:'Command',url:'#commands?command='+encodeURIComponent(c.name)})),...C.lore.map(s=>({title:s.title,text:s.subtitle+' '+s.paragraphs.join(' '),kind:'Lore',url:'#lore?story='+encodeURIComponent(s.id)})),...C.characters.map(c=>({title:c.name,text:c.description+' '+c.offerings.join(' '),kind:c.kind||'Divinity',url:'#characters'})),...C.staff.roles.map(r=>({title:r.name,text:r.description+' '+r.responsibilities.join(' '),kind:'Staff role',url:'#staff'})),...['server','bot'].flatMap(key=>C.rules[key].map(r=>({title:r.title,text:r.text,kind:'Guidelines',url:'#rules?tab='+key}))),{title:'Ko-Fi & PIX',text:'membership supporter payment benefits terms refunds',kind:'Support',url:'#support'}];
  function search(){const q=$('#global-search').value.trim().toLowerCase();const found=q?searchIndex.filter(x=>(x.title+' '+x.text).toLowerCase().includes(q)).slice(0,15):searchIndex.slice(0,5);$('#search-results').innerHTML=found.length?found.map(x=>`<a class="search-result" href="${e(x.url)}"><span class="eyebrow">${e(x.kind)}</span><strong>${e(x.title)}</strong><small>${e(x.text.slice(0,100))}${x.text.length>100?'…':''}</small></a>`).join(''):'<p class="empty">Nothing here just yet. Try another word.</p>';}
  function openSearch(){search();$('#search-dialog').showModal();$('#global-search').focus();}
  $('#open-search').addEventListener('click',openSearch);$('#global-search').addEventListener('input',search);
  $('#search-results').addEventListener('click',ev=>{const a=ev.target.closest('a');if(a){$('#search-dialog').close();if(a.hash===location.hash)route();}});
  document.addEventListener('keydown',ev=>{if(ev.key==='/'&&!ev.ctrlKey&&!ev.metaKey&&!ev.altKey&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){ev.preventDefault();openSearch();}if(ev.key==='Escape')closeNavigation();});
  document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',ev=>{if(ev.target===d){const r=d.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)d.close();}}));
  window.addEventListener('hashchange',route);route();
})();
