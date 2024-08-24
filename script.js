const categoriaSelect = document.getElementById('categoria');
const subcategoriaSelect = document.getElementById('subcategoria');
const ativosList = document.getElementById('ativos');

const dadosDor = {
    "dor-de-cabeca-enxaqueca": {
        "Analgésicos": [
            { "nome": "Paracetamol", "descricao": "Alivia a dor de cabeça leve a moderada, incluindo enxaquecas." },
            { "nome": "Ibuprofeno", "descricao": "Reduz a dor e a inflamação, eficaz para enxaquecas." },
            { "nome": "Ácido acetilsalicílico (AAS)", "descricao": "Pode ser útil para enxaquecas, mas cuidado com efeitos colaterais." }
        ],
        "Triptanos": [
            { "nome": "Sumatriptano", "descricao": "Específico para enxaquecas, atuam nos vasos sanguíneos do cérebro." },
            { "nome": "Zolmitriptano", "descricao": "Específico para enxaquecas, atuam nos vasos sanguíneos do cérebro." }
        ],
        "Ergotamina": [
            { "nome": "Ergotamina", "descricao": "Mais antigo, menos usado, com mais efeitos colaterais." }
        ],
        "Antieméticos": [
            { "nome": "Ondansetron", "descricao": "Para náuseas e vômitos associados à enxaqueca." },
            { "nome": "Metoclopramida", "descricao": "Para náuseas e vômitos associados à enxaqueca." }
        ],
        "Relaxante Muscular": [
            { "nome": "Benzodiazepínicos", "descricao": "Atuam no SNC, relaxam os músculos, mas podem causar sedação." },
            { "nome": "Diazepam", "descricao": "Atuam no SNC, relaxam os músculos, mas podem causar sedação." },
            { "nome": "Lorazepam", "descricao": "Atuam no SNC, relaxam os músculos, mas podem causar sedação." },
            { "nome": "Tizanidina", "descricao": "Atuam diretamente nos músculos, com menos efeitos sedativos." },
            { "nome": "Baclofen", "descricao": "Atuam diretamente nos músculos, com menos efeitos sedativos." }
        ]
    },
    "colica": {
        "Antiespasmódicos": [
            { "nome": "Hioscina", "descricao": "Relaxa os músculos lisos do intestino, aliviando cólicas." },
            { "nome": "Papaverina", "descricao": "Relaxa o músculo liso do intestino e dos vasos sanguíneos." },
            { "nome": "Dicicloverina", "descricao": "Também relaxa os músculos lisos, mas com ação mais fraca." }
        ],
        "Anti-inflamatórios": [
            { "nome": "Ibuprofeno", "descricao": "Podem aliviar a dor e a inflamação associadas à cólica." },
            { "nome": "Naproxeno", "descricao": "Podem aliviar a dor e a inflamação associadas à cólica." }
        ]
    },
    "contusao": {
        "AINEs": [
            { "nome": "Ibuprofeno", "descricao": "Aliviam a dor e a inflamação, auxiliando na recuperação." },
            { "nome": "Naproxeno", "descricao": "Aliviam a dor e a inflamação, auxiliando na recuperação." }
        ],
        "Cremes e Pomadas": [
            { "nome": "Diclofenaco", "descricao": "Aplicação tópica para aliviar a dor e o inchaço local." },
            { "nome": "Ibuprofeno", "descricao": "Aplicação tópica para aliviar a dor e o inchaço local." },
            { "nome": "Árnica", "descricao": "Aplicação tópica para aliviar a dor e o inchaço local." }
        ]
    },
    "anti-inflamatorio": {
        "AINEs": [
            { "nome": "Ibuprofeno", "descricao": "Reduzem a dor e a inflamação." },
            { "nome": "Naproxeno", "descricao": "Reduzem a dor e a inflamação." },
            { "nome": "Diclofenaco", "descricao": "Reduzem a dor e a inflamação." }
        ],
        "Corticosteroides": [
            { "nome": "Prednisona", "descricao": "Mais potentes, usados para inflamações graves, mas com efeitos colaterais." },
            { "nome": "Dexametasona", "descricao": "Mais potentes, usados para inflamações graves, mas com efeitos colaterais." }
        ],
        "Inibidores da COX-2": [
            { "nome": "Celecoxibe", "descricao": "Mais seletivos, menos efeitos colaterais gastrointestinais que os AINEs tradicionais." },
            { "nome": "Rofecoxibe", "descricao": "Mais seletivos, menos efeitos colaterais gastrointestinais que os AINEs tradicionais." }
        ]
    }
};

categoriaSelect.addEventListener('change', function() {
    const categoriaSelecionada = categoriaSelect.value;
    subcategoriaSelect.innerHTML = '<option value="">Selecione...</option>';

    if (categoriaSelecionada) {
        for (const subcategoria in dadosDor[categoriaSelecionada]) {
            const option = document.createElement('option');
            option.value = subcategoria;
            option.text = subcategoria;
            subcategoriaSelect.appendChild(option);
        }
    }
});

subcategoriaSelect.addEventListener('change', function() {
    const categoriaSelecionada = categoriaSelect.value;
    const subcategoriaSelecionada = subcategoriaSelect.value;

    ativosList.innerHTML = '';

    if (categoriaSelecionada && subcategoriaSelecionada) {
        const ativos = dadosDor[categoriaSelecionada][subcategoriaSelecionada];
        ativos.forEach(ativo => {
            const li = document.createElement('li');
            li.textContent = `${ativo.nome}: ${ativo.descricao}`;
            ativosList.appendChild(li);
        });
    }
});