const levels = {
            1: { 
                t: 'Nível 1 — Primeira missão', 
                c: 'Chegue à bandeira usando as setas. Evite a água!', 
                s: [3, 0], 
                b: [['f', 'f', 'f', 'g'], ['f', 'w', 'f', 'w'], ['f', 'f', 'f', 'w'], ['f', 'f', 'w', 'w']] 
            },
            2: { 
                t: 'Nível 2 — Cuidado com as paredes', 
                c: 'Contorne as paredes e chegue à bandeira. Se bater numa parede, corrija seu programa!', 
                s: [3, 0], 
                b: [['f', 'f', 'x', 'g'], ['f', 'f', 'x', 'f'], ['f', 'f', 'w', 'w'], ['f', 'x', 'w', 'w']] 
            }
};

const icon = { f: '👣', w: '💧', x: '🧱', z: '💣', g: '🏁' };
// const icon = { f: '🧀', w: '🪤', x: '🧱', z: '💣', g: '🏁' };

const commandIcons = { U: '↑', D: '↓', L: '←', R: '→' };

const delta = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };

let lv = 1, prog = [], st = null, running = false;

function level(n) { 
    if (running) return; 
    lv = n; 
    rog = []; 
    reset(); 
    document.querySelectorAll('.lvl').forEach(x => x.classList.remove('active')); 
    document.getElementById('b' + n).classList.add('active'); 
    document.getElementById('title').textContent = levels[n].t;
    document.getElementById('challenge').textContent = levels[n].c; 
    msg('Monte seu programa e clique em <b>Executar</b>.', 'info'); 
    render(); 
    renderProg();
}

function reset() { 
    let x = levels[lv]; 
    st = { r: x.s[0], c: x.s[1], steps: 0, last: null }; 
}

function render() { 
    let b = document.getElementById('board'), x = levels[lv]; 
    b.innerHTML = ''; 
    x.b.forEach((row, r) => row.forEach((type, c) => { 
        let e = document.createElement('div'); 
        e.className = 'cell ' + ({ f: 'free', w: 'water', x: 'wall', z: 'bomb', g: 'finish' }[type]); 
        e.textContent = icon[type]; 
        if (r === x.s[0] && c === x.s[1]) e.classList.add('start'); 
        if (st && st.r === r && st.c === c) { 
            e.innerHTML = '<span class="robot">🤖</span>' 
            // e.innerHTML = '<span class="robot">🐭</span>' 
        } 
        b.appendChild(e) 
    })); 
    const counter = document.getElementById('stepCounter'); 
    if (counter) counter.textContent = `${st?.steps || 0} passo${(st?.steps || 0) === 1 ? '' : 's'}` 
}

function renderProg() { 
    let e = document.getElementById('program'); 
    e.innerHTML = ''; 
    if (!prog.length) { 
        e.innerHTML = '<span class="placeholder">Clique nas setas para montar sua sequência.</span>'; 
        return; 
    } 
    prog.forEach((p, i) => { 
        let b = document.createElement('button'); 
        b.className = 'chip'; 
        b.textContent = commandIcons[p]; 
        b.title = 'Clique para remover'; 
        b.onclick = () => { if (!running) { prog.splice(i, 1); renderProg() } }; 
        e.appendChild(b); 
    }) 
}

function add(x) { 
    if (running) return; 
    if (prog.length < 20) { prog.push(x); renderProg(); } 
    else msg('Seu programa já tem 20 instruções.', 'warn') 
}

function clearProgram() { 
    if (running) return; 
    prog = []; reset(); 
    render(); 
    renderProg(); 
    msg('Programa apagado. Vamos tentar novamente!', 'info') 
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    if (running) return;
    if (!prog.length) { msg('Seu programa está vazio! Escolha algumas instruções primeiro. 😊', 'warn'); return }
    running = true; reset(); render(); msg('🚀 Executando seu programa...', 'info');
    let x = levels[lv];
    for (let p of prog) {
        await sleep(500);
        let nr = st.r + delta[p][0], nc = st.c + delta[p][1];
        if (nr < 0 || nr > 3 || nc < 0 || nc > 3) { msg('🚧 O robô tentou sair do tabuleiro. Essa instrução não pode ser executada. Procure o BUG!', 'warn'); running = false; return }
        let target = x.b[nr][nc];
        if (target === 'x') { msg('🧱 PAREDE! O robô ficou travado. Corrija a instrução e tente novamente!', 'warn'); running = false; return }
        st.r = nr; st.c = nc; st.last = p; st.steps++; render();
        if (target === 'w') { await sleep(250); msg('💦 SPLASH! O robô caiu na água. Missão encerrada!', 'bad'); running = false; return }
        if (target === 'z') { await sleep(250); msg('💥 BOOOOM! O robô pisou na bomba. Missão encerrada!', 'bad'); running = false; return }
        if (target === 'g') { await sleep(250); msg('🎉 PARABÉNS! Você programou o robô para chegar ao destino!', 'ok'); running = false; return }
        // if (target === 'g') { await sleep(250); msg('🎉 PARABÉNS! Você programou o rato para chegar ao destino!', 'ok'); running = false; return }
    }
    msg('🤔 O programa terminou, mas o robô não chegou. Encontre o BUG e tente outra sequência!', 'warn'); running = false
}

function msg(t, cl) { let e = document.getElementById('msg'); e.className = 'msg ' + cl; e.innerHTML = t }

level(1);