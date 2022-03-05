
//Pegar id dos botões HTML e passar com a funcao onclick(this.id)
//Função mudar anime principal ao clicar nos itens do carrossel animes em destaque
function mudaAnime(id){
    switch(id){
        case 'anime1':
            tit.innerText = 'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc'
            desc.innerText = 'A devastação do incidente do Trem Mugen ainda pesa sobre os membros do Corpo de Caçadores de Demônios. Apesar de ter tempo para se recuperar, a vida deve continuar, como os malvados nunca dormem: um demônio cruel está aterrorizando as mulheres sedutoras do Distrito de Entretenimento Yoshiwara. Cabe ao Pilar do Som, Tengen Uzui, Tanjirou Kamado, Zenitsu Agatsuma e Inosuke Hashibira para se infiltrar nas casas mais proeminentes do distrito e localizar o demônio depravado do Alto Escalão.'
            link1.href = 'https://www.youtube.com/watch?v=tJxCxCWksOY'
            link2.href = 'https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images3.alphacoders.com/119/1195019.png")'
        break;        
        case 'anime2':
            tit.innerText = 'Shingeki no Kyojin: The Final Season Part 2'
            desc.innerText = 'Voltando-se contra seus antigos aliados e inimigos, Eren Yeager estabelece um plano desastroso em movimento. Sob a orientação do Titã Bestial, Zeke, Eren toma medidas extremas para acabar com o antigo conflito entre Marley e Eldia, mas suas verdadeiras intenções permanecem um mistério. Aprofundando-se no passado de sua família, Eren luta para controlar seu próprio destino.'
            link1.href = 'https://www.youtube.com/watch?v=CmvTaTbw9Z4'
            link2.href = 'https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images8.alphacoders.com/403/403477.jpg")'
        break;
        case 'anime3':
            tit.innerText = 'Fullmetal Alchemist: Brotherhood'
            desc.innerText = 'Os irmãos Edward e Alphonse ignoram o princípio alquímico que proíbe a transmutação humana e tentam trazer sua mãe recém-falecida de volta à vida. Em vez disso, eles sofreram uma perda pessoal brutal: o corpo de Alphonse se desintegrou enquanto Edward perdeu uma perna e depois sacrificou um braço para manter a alma de Alphonse no reino físico, amarrando-a a um traje de armadura. Os irmãos Elric partiram em uma busca para restaurar seus corpos, localizando a Pedra Filosofal, uma joia poderosa que permite a um alquimista desafiar as leis tradicionais da troca Equivalente.'
            link1.href = 'https://youtu.be/--IcmZkvL0Q'
            link2.href = 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/722/722225.jpg")'
        break;
        case 'anime4':
            tit.innerText = "JoJo's Bizarre Adventure: Stone Ocean"
            desc.innerText = 'Na Flórida, 2011, Jolyne Kujo senta-se em uma cela de prisão, incriminada por um crime que não cometeu, e manipulada para cumprir uma sentença mais longa, Jolyne está pronta para renunciar a um destino terrível como prisioneira da Prisão Green Dolphin Street. Embora toda a esperança pareça perdida, um presente de Jotaro acaba despertando suas habilidades latentes, manifestando-se em seu Stand, Stone Free. Agora armada com o poder de mudar seu destino, Jolyne parte para encontrar uma fuga do oceano de pedra que a segura.'
            link1.href = 'https://www.youtube.com/watch?v=zmNxNnuILjY'
            link2.href = 'https://myanimelist.net/anime/48661/JoJo_no_Kimyou_na_Bouken_Part_6__Stone_Ocean'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images8.alphacoders.com/120/1201897.png")'
        break;
        case 'anime5':
            tit.innerText = 'Wotakoi: Love is Hard for Otaku'
            desc.innerText = 'Tendo dormido durante todos os seus quatro alarmes, a enérgica Narumi Momose encontra-se atrasada para seu primeiro dia de trabalho em um novo escritório. Enquanto corre para pegar seu trem, ela faz uma promessa a si mesma de que nenhum de seus colegas descobrirá sobre seu segredo obscuro: que ela é uma otaku e uma fujoshi. Seu plano vai imediatamente errado, no entanto, quando ela encontra Hirotaka Nifuji, um velho amigo do ensino médio. Seu disfarce é descoberto quando ele casualmente pergunta se ela estará ou não presente no próximo Summer Comiket. Felizmente para ela, as únicas testemunhas Hanako Koyanagi e Tarou Kabakura também são Otakus.'
            link1.href = 'https://www.youtube.com/watch?v=Uy90rTP9mLs'
            link2.href = 'https://myanimelist.net/anime/35968/Wotaku_ni_Koi_wa_Muzukashii?q=wotak&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images3.alphacoders.com/926/926146.png")'
        break;
        case 'anime6':
            tit.innerText = 'My Hero Academia Season 5'
            desc.innerText = 'A Classe 1-A da UA Academy tem sido o foco de uma quantidade substancial de atenção do público devido aos múltiplos ataques de vilões que enfrentaram ao longo do último ano letivo. Essa atenção deixou os rivais da Classe 1-A, classe 1-B, sentindo-se bastante amargos. Desejando provar suas habilidades, eles anseiam pela oportunidade que lhes foi dada: um conjunto de batalhas simuladas entre os alunos de cada classe.'
            link1.href = 'https://www.youtube.com/watch?v=ShmnBvtN21E'
            link2.href = 'https://myanimelist.net/anime/41587/Boku_no_Hero_Academia_5th_Season?q=boku%20no%20hero&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/698/698782.jpg")'
        break;
        case 'anime7':
            tit.innerText = 'Tengen Toppa Gurren Lagann'
            desc.innerText = 'Simon e Kamina nasceram e foram criados em uma vila subterrânea, escondida da superfície. Kamina é um canhão solto de espírito livre empenhado em fazer um nome para si mesmo, enquanto Simon é um garoto tímido sem aspirações reais. Um dia, enquanto escava a terra, Simon se depara com um objeto misterioso que acaba por ser a chave de ignição para um antigo artefato de guerra, que a dupla chama de Lagann. Usando sua nova arma, Simon e Kamina se defendem de um ataque surpresa da superfície com a ajuda de Yoko Littner, uma ruiva de sangue quente empunhando uma arma enorme que vaga pelo mundo acima.'
            link1.href = 'https://www.youtube.com/watch?v=oXkkMhCuCMg'
            link2.href = 'https://myanimelist.net/anime/2001/Tengen_Toppa_Gurren_Lagann'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images.alphacoders.com/851/851172.jpg")'
        break;
        case 'anime8':
            tit.innerText = 'Vinland Saga'
            desc.innerText = 'O jovem Thorfinn cresceu ouvindo as histórias de velhos marinheiros que viajaram pelo oceano e chegaram ao lugar da lenda, Vinland. Diz-se que é quente e fértil, um lugar onde não haveria necessidade de lutar diferente da vila congelada na Islândia onde ele nasceu, e certamente não como sua vida atual como mercenário. A guerra é a casa dele agora. Embora seu pai uma vez lhe disse: "Você não tem inimigos, ninguém tem. Não há ninguém que não há problema em machucar", enquanto crescia, Thorfinn sabia que nada estava mais longe da verdade.'
            link1.href = 'https://www.youtube.com/watch?v=rjwUooksI-A'
            link2.href = 'https://myanimelist.net/anime/37521/Vinland_Saga'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images2.alphacoders.com/114/1145714.png")'
        break;
        case 'anime9':
            tit.innerText = 'Jujutsu Kaisen'
            desc.innerText = 'Se entregando a atividades paranormais infundadas com o clube de ocultismo, o colegial Yuuji Itadori passa seus dias no clube ou no hospital, onde visita seu avô acamado. No entanto, esse estilo de vida de lazer logo toma um rumo para o estranho quando ele, sem saber, encontra um item amaldiçoado. Desencadeando uma cadeia de ocorrências sobrenaturais, Yuuji encontra-se subitamente empurrado para o mundo das Maldições. Depois de engolir o referido item, revelou ser um dedo pertencente ao demônio Sukuna Ryoumen, o "Rei das Maldições".'
            link1.href = 'https://www.youtube.com/watch?v=ynr6gnyu9NE'
            link2.href = 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images5.alphacoders.com/115/1156316.jpg")'
        break;
        case 'anime10':
            tit.innerText = 'One Punch Man 2'
            desc.innerText = 'Após derrotar Boros e seu poderoso exército, Saitama voltou à sua vida cotidiana notável em Z-City. No entanto, sem que ele saiba, o número de monstros que aparecem ainda está continuamente em ascensão, colocando uma pressão sobre os recursos da Associação de Heróis. Seus principais executivos decidem sobre o movimento ousado de recrutar bandidos para ajudar em sua batalha. Mas durante o primeiro encontro com esses potenciais recém-chegados, um homem misterioso que se chama Garou faz sua aparição. Alegando ser um monstro, ele começa a atacar impiedosamente a multidão.'
            link1.href = 'https://youtu.be/NezvLw2gRAY'
            link2.href = 'https://myanimelist.net/anime/34134/One_Punch_Man_2nd_Season?q=one%20punch&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images3.alphacoders.com/654/654232.jpg")'
        break;
        default:
            tit.innerText = 'Code Geass: Lelouch of the Rebellion R2'
            desc.innerText = ''
            link1.href = ''
            link2.href = ''
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images7.alphacoders.com/634/634228.jpg")'
        break;
    }
}

//Função mudar anime principal ao clicar nos itens do carrossel filmes
function mudaFilme(id){
    switch(id){
        case 'filme1':
            tit.innerText = 'Gintama: The Final'
            desc.innerText = 'Dois anos se passaram após a invasão do Terminal Central de Edo. Desde então, os Yorozuya passaram por caminhos separados. Prevendo o retorno de Utsuro, Gintoki Sakata começa a examinar as linhas de ley da Terra em busca de vestígios da Altana do outro homem. Após um encontro com os remanescentes do Tendoshuu que continuam a continuar em busca da imortalidade Gintoki retorna a Edo.'
            link1.href = 'https://www.youtube.com/watch?v=5hIoHL_FQiM'
            link2.href = 'https://myanimelist.net/anime/39486/Gintama__The_Final'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/908/908459.jpg")'
        break;
        case 'filme2':
            tit.innerText = 'Violet Evergarden Movie'
            desc.innerText = 'Violet segue na busca de compreender o conceito de emoção e o significado do amor. Ao mesmo tempo, ela busca um vislumbre de esperança de que o homem que uma vez lhe disse, "Eu te amo", ainda pode estar vivo mesmo depois dos muitos anos que se passaram.'
            link1.href = 'https://www.youtube.com/watch?v=R5xn78CR96M'
            link2.href = 'https://myanimelist.net/anime/37987/Violet_Evergarden_Movie'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images.alphacoders.com/952/952212.png")'
        break;
        case 'filme3':
            tit.innerText = 'Your Name'
            desc.innerText = 'Mitsuha Miyamizu, uma estudante do ensino médio, anseia viver a vida de um menino na movimentada cidade de Tóquio, um sonho que contrasta com sua vida atual no campo. Enquanto isso, na cidade, Taki Tachibana vive uma vida ocupada como estudante do ensino médio enquanto faz malabarismo com seu trabalho de meio período e espera um futuro na arquitetura. Um dia, Mitsuha acorda em um quarto que não é dela e de repente se vê vivendo a vida dos sonhos em Tóquio, mas no corpo de Taki. Em outro lugar, Taki encontra-se vivendo a vida de Mitsuha no humilde campo. Em busca de uma resposta para este estranho fenômeno, eles começam a procurar um pelo outro.'
            link1.href = 'https://www.youtube.com/watch?v=soQXM3XVvIU'
            link2.href = 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/687/687986.jpg")'
        break;
        case 'filme4':
            tit.innerText = 'Koe no Katachi'
            desc.innerText = 'Quando jovem, o estudante do ensino fundamental Shouya Ishida procurou vencer o tédio da maneira mais cruel. Quando garota com deficiência auditiva Shouko Nishimiya se transfere para sua classe, Shouya e o resto de sua classe a intimidam por diversão. No entanto, quando sua mãe notifica a escola, ele é culpado por tudo que lhe foi feito. Com Shouko se transferindo para fora da escola, Shouya fica à mercê de seus colegas de classe.'
            link1.href = 'https://youtu.be/aJSXEsoT-ZI'
            link2.href = 'https://myanimelist.net/anime/28851/Koe_no_Katachi'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'filme5':
            tit.innerText = 'Evangelion: 3.0+1.0 Thrice Upon a Time'
            desc.innerText = 'Após a tentativa fracassada da NERV de recuperar as lanças de Longinus e realizar o Projeto de Instrumentalidade Humana, a destruição causada pelo Quarto Impacto foi em grande parte evitada. Em estado de desordem, Shinji Ikari, Asuka Langley Shikinami e Rei Ayanami viajam para a Aldeia 3, um assentamento de sobreviventes livre da ruína da Terra. Lá, Shinji lentamente chega a um acordo com seu passado, desenvolvendo uma vida totalmente diferente de seus dias como piloto evangelion.'
            link1.href = 'https://www.youtube.com/watch?v=eg52STcRODM'
            link2.href = 'https://myanimelist.net/anime/3786/Evangelion__30_10_Thrice_Upon_a_Time'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'filme6':
            tit.innerText = 'Jujutsu Kaisen 0'
            desc.innerText = 'Yuuta Okkotsu é assombrado desde que sua amiga de infância Rika morreu em um acidente de trânsito, seu fantasma ficou com ele. Mas seu espírito não aparece como a doce garota que Yuuta conheceu. Em vez disso, ela se manifesta como uma entidade monstruosa e poderosa que o protege ferozmente. Incapaz de controlar o comportamento violento de Rika, Yuuta está impotente para parar o derramamento de sangue que se segue de sua vingança brutal. Como resultado, quando apreendido por feiticeiros "Jujutsu", treinados para combater forças como Rika, Yuuta deseja ser completamente isolado para que ninguém mais possa se machucar.'
            link1.href = 'https://www.youtube.com/watch?v=BArxCLOOVwc'
            link2.href = 'https://myanimelist.net/anime/48561/Jujutsu_Kaisen_0_Movie?q=jujutsu&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'filme7':
            tit.innerText = 'Boku no Hero Academia the Movie 3: World Heroes Mission'
            desc.innerText = 'Sob as doutrinas da Teoria do Juízo Final, o grupo ideológico Humarise está convencido de que todos os humanos com peculiaridades são doentes e devem ser erradicados. Para reconstruir o mundo, os extremistas do grupo construíram um dispositivo letal conhecido como "Bomba de Gatilho" que faz com que pessoas com peculiaridades percam o controle e morram. Seu líder, Flect Turn, evita a captura dos Pro Heroes implantados ao redor do mundo.'
            link1.href = 'https://www.youtube.com/watch?v=UPKQtzBGhlI'
            link2.href = 'https://myanimelist.net/anime/44200/Boku_no_Hero_Academia_the_Movie_3__World_Heroes_Mission?q=boku%20no%20hero&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'filme8':
            tit.innerText = 'Josee, the Tiger and the Fish'
            desc.innerText = 'Josee, que leva o nome da heroína de "Nuvens Maravilhosas" de Françoise Sagan, passa a maior parte de seus dias lendo e pintando até que, por acaso, encontra Tsuneo e decide que é hora de enfrentar o mundo real.'
            link1.href = 'https://www.youtube.com/watch?v=J2nvFfz80Ns'
            link2.href = 'https://myanimelist.net/anime/40787/Josee_to_Tora_to_Sakana-tachi?q=josee%20the%20tiger&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'filme9':
            tit.innerText = 'I want to eat your pancreas'
            desc.innerText = 'Quando Shiga Haruki percebe a mudança que Sakura Yamauchi operou em sua vida para melhor, também se dará conta de quanto a morte dela poderá afetá-lo. Sua aparente indiferença interrompem o fluxo impassível da vida do protagonista, gradualmente abrindo seu coração à medida que ele descobre e abraça o verdadeiro significado de viver.'
            link1.href = 'https://youtu.be/MONVPR1dnRQ'
            link2.href = 'https://myanimelist.net/anime/36098/Kimi_no_Suizou_wo_Tabetai?q=i%20want&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/978/978467.jpg")'
        break;
        case 'filme10':
            tit.innerText = 'Words Bubble Up Like Soda Pop'
            desc.innerText = 'Um garoto, Yui "Cherry" Sakura escreve poemas haikai e posta na internet, mesmo que ninguém lhe dê atenção. Yuki "Smile" Hoshino é uma influenciadora que quer que todos sorriam. No entanto, ela se sente desconfortável com o aparelho em seus dentes dianteiros salientes e esconde seu próprio sorriso usando uma máscara descartável. Ambos se conhecem e passam um verão mágico juntos.'
            link1.href = 'https://www.youtube.com/watch?v=Sfu6cplThgQ'
            link2.href = 'https://myanimelist.net/anime/39175/Cider_no_You_ni_Kotoba_ga_Wakiagaru?q=words&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images6.alphacoders.com/121/1213212.jpg")'
        break;
        default:
            tit.innerText = 'Code Geass: Lelouch of the Rebellion R2'
            desc.innerText = ''
            link1.href = ''
            link2.href = ''
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images7.alphacoders.com/634/634228.jpg")'
        break;
    }
}

//Função mudar anime principal ao clicar nos itens do carrossel animes confirmados
function mudaConf(id){
    switch(id){
        case 'conf1':
            tit.innerText = 'Chainsaw Man'
            desc.innerText = 'Denji tem um sonho simples: viver uma vida feliz e pacífica, passar um tempo com uma garota que ele gosta. Isso é um grito distante da realidade, no entanto, Denji é forçado pela yakuza a matar demônios a fim de pagar suas dívidas esmagadoras. Usando seu demônio pochita como arma, ele está pronto para fazer qualquer coisa por um pouco de dinheiro. Ele sobreviveu à sua utilidade e é assassinado por um demônio em contrato com a yakuza. No entanto, em uma reviravolta inesperada, Pochita se funde com o corpo morto de Denji e lhe concede os poderes de um demônio motosserra.'
            link1.href = 'https://youtu.be/q15CRdE5Bv0'
            link2.href = 'https://myanimelist.net/anime/44511/Chainsaw_Man?q=chains&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images4.alphacoders.com/120/1205811.png")'
        break;
        case 'conf2':
            tit.innerText = 'Vinland Saga Season 2'
            desc.innerText = 'Segunda temporada de Vinland Saga.'
            link1.innerHTML = '<a href="https://www.youtube.com/watch?v=geNTL_uon74" id="link1" target="_blank"><button role="button" class="btn"><i class="fa-solid fa-circle-play"></i>TEASER</button></a>'
            link2.href = 'https://myanimelist.net/anime/49387/Vinland_Saga_Season_2?q=vinland&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf3':
            tit.innerText = 'Mob Psycho 100 III'
            desc.innerText = 'Terceira temporada de Mob Psycho 100.'
            link1.href = 'https://www.youtube.com/watch?v=zRXEZSGzAxk'
            link2.href = 'https://myanimelist.net/anime/50172/Mob_Psycho_100_III?q=mob%20psycho&cat=anime'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images8.alphacoders.com/115/1153868.png")'
        break;
        case 'conf4':
            tit.innerText = 'Spy x Family'
            desc.innerText = 'Para o agente conhecido como "Twilight", nenhuma ordem é muito alta se for por uma questão de paz. Operando como o espião mestre de Westalis, Twilight trabalha incansavelmente para evitar que extremistas desencadeiem uma guerra com o país vizinho Ostania. Para sua última missão, ele deve investigar o político ostaniano Donovan Desmond infiltrando-se na escola de seu filho: a prestigiada Eden Academy. Assim, o agente enfrenta a tarefa mais difícil de sua carreira: casar, ter um filho e brincar de família.'
            link1.href = 'https://www.youtube.com/watch?v=yEOw18thfsg'
            link2.href = 'https://myanimelist.net/anime/50265/Spy_x_Family'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf5':
            tit.innerText = 'Overlord IV'
            desc.innerText = 'Quarta temporada de Overlord.'
            link1.href = 'https://youtu.be/pYoCk6Ffmfs'
            link2.href = 'https://myanimelist.net/anime/48895/Overlord_IV'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf6':
            tit.innerText = 'Kaguya-sama wa Kokurasetai: Ultra Romantic'
            desc.innerText = 'Terceira temporada de Kaguya-sama.'
            link1.innerHTML = '<a href="https://youtu.be/vFN5K-iAyV0" id="link1" target="_blank"><button role="button" class="btn"><i class="fa-solid fa-circle-play"></i>TEASER</button></a>'
            link2.href = 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf7':
            tit.innerText = 'Bleach: Sennen Kessen-hen'
            desc.innerText = 'Em breve.'
            link1.href = 'https://www.youtube.com/watch?v=FLpFF2UUS2I'
            link2.href = 'https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf8':
            tit.innerText = 'Bungou Stray Dogs 4th Season'
            desc.innerText = 'Última temporada de Bungou Stray Dogs.'
            link1.innerText = 'Trailer Indisponível'
            link2.href = 'https://myanimelist.net/anime/50330/Bungou_Stray_Dogs_4th_Season'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/breve.png")'
        break;
        case 'conf9':
            tit.innerText = 'Kingdom 4th Season'
            desc.innerText = 'Quarta temporada de Kingdom.'
            link1.href = 'https://www.youtube.com/watch?v=ol0wXwETTWQ'
            link2.href = 'https://myanimelist.net/anime/50160/Kingdom_4th_Season'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("img/ind.png")'
        break;
        case 'conf10':
            tit.innerText = 'Kanojo, Okarishimasu 2nd Season'
            desc.innerText = 'Segunda temporada de Kanojo, Okarishimasu.'
            link1.innerHTML = '<a href="https://youtu.be/EwbHVNLPM4g" id="link1" target="_blank"><button role="button" class="btn"><i class="fa-solid fa-circle-play"></i>TEASER</button></a>'
            link2.href = 'https://myanimelist.net/anime/42963/Kanojo_Okarishimasu_2nd_Season'
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)),url("img/ind.png")'
        break;
        default:
            tit.innerText = 'Code Geass: Lelouch of the Rebellion R2'
            desc.innerText = ''
            link1.href = ''
            link2.href = ''
            capa.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50),rgba(0,0,0,.50)), url("https://images7.alphacoders.com/634/634228.jpg")'
        break;
    }
}