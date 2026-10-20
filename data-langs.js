// اللغة الفرنسية — 3 ثانوي شعبة الآداب (معامل 5)
SUBJECTS.push({
    id: 'french',
    name: 'اللغة الفرنسية',
    short: 'Français',
    icon: '🇫🇷',
    color: '#1d4ed8',
    coef: 5,
    desc: 'Leçons, grammaire (les valeurs de l\'indicatif, le subjonctif, le conditionnel), vocabulaire, lecture et production écrite.',
    units: [
        {
            id: 'fr-gram',
            title: 'Grammaire',
            topics: [
                {
                    id: 'ind-values',
                    title: 'Les valeurs de l\'indicatif',
                    summary: `<p><b>Le présent</b> : action actuelle, vérité générale, récit historique (présent de narration).</p>
                    <ul>
                    <li><b>Le passé composé</b> : action passée achevée.</li>
                    <li><b>L\'imparfait</b> : description, habitude, action en cours.</li>
                    <li><b>Le plus-que-parfait</b> : antériorité dans le passé.</li>
                    <li><b>Le passé simple</b> : dans les récits littéraires.</li>
                    </ul>`,
                    rules: [
                        'Le présent de narration raconte au présent des faits passés.',
                        'L\'imparfait sert à la description et aux actions d\'arrière-plan.',
                        'Le passé composé exprime l\'action ponctuelle et terminée.',
                        'Le plus-que-parfait situe une action avant une autre passée.'
                    ],
                    review: [
                        'Identifiez la valeur de « Il pleut » dans : « Quand il pleut, je reste. »',
                        'Classez : « Il avait mangé », « Il mange », « Il mangeait ».',
                        'Racontez votre journée en utilisant le passé simple (3 phrases).'
                    ],
                    videoQuery: 'valeurs de l\'indicatif français 3as'
                },
                {
                    id: 'subjonctif',
                    title: 'Le subjonctif et le conditionnel',
                    summary: `<p><b>Le subjonctif</b> : exprime le doute, le souhait, la nécessité (après « il faut que », « je veux que »).</p>
                    <p><b>Le conditionnel</b> : exprime l\'hypothèse, la politesse, l\'information non confirmée.</p>`,
                    rules: [
                        'Subjonctif présent : que je finisse, que tu finisses, qu\'il finisse...',
                        'Subjonctif passé : qu\'il ait fini, qu\'elle soit venue...',
                        'Conditionnel présent : je mangerais, tu viendrais...',
                        'Conditionnel passé : j\'aurais mangé, il serait venu...'
                    ],
                    review: [
                        'Conjuguez au subjonctif présent : « il faut que je (venir) ».',
                        'Transformez au conditionnel : « Si j\'étais là, je (aider). »',
                        'Complétez : « Je voudrais que tu (être) sérieux. »'
                    ],
                    videoQuery: 'le subjonctif français 3as'
                },
                {
                    id: 'lexique',
                    title: 'Lexique et vocabulaire',
                    summary: `<p>Champs lexicaux : la guerre et la paix, le progrès technique, l\'environnement, la solidarité, l\'éducation, la citoyenneté.</p>
                    <p>Les synonymes, antonymes, dérivés et la formation des mots.</p>`,
                    rules: [
                        'Le champ lexical rassemble les mots liés à une même idée.',
                        'La dérivation : préfixe (im-), suffixe (-able, -eur), composition.',
                        'Les synonymes nuancés selon le contexte.',
                        'Le sens propre et le sens figuré (métaphore, ironie).'
                    ],
                    review: [
                        'Donnez 5 synonymes de « bon » et 5 antonymes.',
                        'Classez les mots par champ lexical : « paix, armée, cessez-le-feu ».',
                        'Expliquez le sens figuré de « Il a un cœur d\'or ».'
                    ],
                    videoQuery: 'lexique et vocabulaire français 3as'
                }
            ]
        },
        {
            id: 'fr-express',
            title: 'Expression écrite et compréhension',
            topics: [
                {
                    id: 'redaction',
                    title: 'La rédaction',
                    summary: `<p><b>Le récit</b> : passé simple, passé composé, imparfait, adverbes de temps.</p>
                    <p><b>L\'argumentation</b> : introduction, thèse, arguments, antithèse, synthèse, conclusion.</p>
                    <p><b>La lettre</b> : formules de politesse, objet, corps, signature.</p>`,
                    rules: [
                        'L\'introduction capte l\'attention et annonce le sujet.',
                        'L\'argumentation utilise : « d\'une part, en outre, toutefois, enfin ».',
                        'La conclusion résume et propose une ouverture.',
                        'Respecter l\'orthographe, la ponctuation et la grammaire.'
                    ],
                    review: [
                        'Rédigez un texte de 10 lignes : « Mon projet après le BAC ».',
                        'Rédigez une lettre à votre ami pour l\'inviter à étudier.',
                        'Argumentez : « Les réseaux sociaux, bienfaits et dangers ».'
                    ],
                    videoQuery: 'rédaction argumentative français 3as bac'
                },
                {
                    id: 'lecture',
                    title: 'Compréhension et analyse de texte',
                    summary: `<p>Techniques : repérer les idées principales, les connecteurs, le champ lexical, le ton, la thèse de l\'auteur, les procédés d\'argumentation.</p>`,
                    rules: [
                        'Lire le titre et repérer les mots clés.',
                        'Identifier la thèse et les arguments.',
                        'Analyser les connecteurs logiques.',
                        'Répondre avec des phrases complètes et références au texte.'
                    ],
                    review: [
                        'Lisez un texte et donnez la thèse en une phrase.',
                        'Repérez trois connecteurs logiques et leur fonction.',
                        'Donnez le champ lexical de la guerre dans un extrait.'
                    ],
                    videoQuery: 'compréhension et analyse de texte français 3as'
                }
            ]
        }
    ],
    quiz: [
        { q: '« Quand il pleut, je reste. » — « pleut » exprime :', options: ['un passé', 'un présent habituel', 'un conditionnel', 'un subjonctif'], a: 1, ex: 'Le présent de vérité générale/habitude.' },
        { q: '« Il avait mangé » est au :', options: ['passé composé', 'imparfait', 'plus-que-parfait', 'passé simple'], a: 2, ex: 'Le plus-que-parfait situe l\'antériorité.' },
        { q: '« Il faut que je (venir) » — conjugaison correcte :', options: ['viens', 'viendrais', 'vienne', 'venais'], a: 2, ex: 'Subjonctif présent : que je vienne.' },
        { q: 'Le conditionnel présent de « manger » :', options: ['mange', 'mangeais', 'mangerais', 'mangerai'], a: 2, ex: 'Conditionnel : je mangerais.' },
        { q: '« Armée, guerre, cessez-le-feu » appartiennent au champ lexical de :', options: ['la paix', 'la guerre', 'l\'éducation', 'l\'environnement'], a: 1, ex: 'Champ lexical de la guerre.' },
        { q: '« Il a un cœur d\'or » — « cœur » est employé au sens :', options: ['propre', 'figuré', 'ironique', 'juridique'], a: 1, ex: 'Sens figuré : générosité.' },
        { q: '« Toutefois » est un connecteur :', options: ['additif', 'adversatif', 'causal', 'temporel'], a: 1, ex: '« Toutefois » introduit une opposition.' },
        { q: '« Il pleuvait » sert surtout à :', options: ['décrire', 'annoncer une hypothèse', 'commander', 'nier'], a: 0, ex: 'L\'imparfait sert à la description.' },
        { q: '« Je (aimer) que tu viennes » — forme correcte :', options: ['aime', 'aimerais', 'aime (subjonctif)', 'aimerai'], a: 2, ex: 'Subjonctif après le souhait.' },
        { q: 'La lettre commence par :', options: ['« Cher » (sans formule)', 'formules de politesse', 'conclusion', 'signature'], a: 1, ex: 'La lettre commence par les formules de politesse.' }
    ],
    triExams: [
        {
            tri: 1,
            title: 'Devoir surveillé n°1 — Français (3AS Adab)',
            meta: { duration: '2 heures', coef: 5, total: 20 },
            parts: [
                {
                    title: 'Grammaire (6 pts)',
                    tasks: [
                        {
                            text: `Classez les verbes selon leur temps et leur mode :
« Il finit / Il finissait / Il a fini / Qu\'il finisse ».`,
                            solution: `<p><b>present (indicatif)</b> : il finit ; <b>imparfait</b> : il finissait ; <b>passé composé</b> : il a fini ; <b>subjonctif présent</b> : qu\'il finisse.</p>`
                        }
                    ]
                },
                {
                    title: 'Rédaction (14 pts)',
                    tasks: [
                        {
                            text: `Rédigez un texte argumentatif de 12 lignes sur : « L\'utilité des réseaux sociaux pour les étudiants ».`,
                            solution: `<p><b>Introduction</b> : présentation du sujet ; <b>Développement</b> : bienfaits (information, échange) + dangers (distraction) ; <b>Conclusion</b> : usage responsable.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 2,
            title: 'Devoir surveillé n°2 — Français (3AS Adab)',
            meta: { duration: '2 heures', coef: 5, total: 20 },
            parts: [
                {
                    title: 'Compréhension (6 pts)',
                    tasks: [
                        {
                            text: `Sur un texte sur la paix :
1) Donnez la thèse de l\'auteur.
2) Repérez deux connecteurs adversatifs.`,
                            solution: `<p>1) La thèse : la paix est une valeur universelle à défendre.</p>
                            <p>2) « cependant », « toutefois », « en revanche », « or ».</p>`
                        }
                    ]
                },
                {
                    title: 'Production écrite (14 pts)',
                    tasks: [
                        {
                            text: `Rédigez une lettre à votre ami pour l\'inviter à participer à une action sociale.`,
                            solution: `<p>Formules de politesse, objet clair, développement en deux parties, formule de politesse finale, signature.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 3,
            title: 'Devoir surveillé n°3 — Français (3AS Adab)',
            meta: { duration: '2 heures', coef: 5, total: 20 },
            parts: [
                {
                    title: 'Grammaire (6 pts)',
                    tasks: [
                        {
                            text: `Conjuguez au conditionnel passé :
« Si j\'avais du temps, je (écrire) un roman. »`,
                            solution: `<p>Conditionnel passé : j\'aurais écrit / j\'écrirais (conditionnel présent après si).</p>
                            <p>Réponse : « j\'écrirais » (conditionnel présent après si + imparfait).</p>`
                        }
                    ]
                },
                {
                    title: 'Dissertation (14 pts)',
                    tasks: [
                        {
                            text: `Dissertation : « La culture est-elle un rempart contre la violence ? » (12 lignes).`,
                            solution: `<p>Introduction ; thèse : la culture éduque et humanise ; antithèse : la culture peut être détournée ; synthèse : la culture accompagnée de valeurs est un rempart ; conclusion.</p>`
                        }
                    ]
                }
            ]
        }
    ],
    exams: [
        {
            title: 'Model Bac — Français (3AS Adab)',
            meta: { duration: '3 heures', coef: 5, total: 20 },
            parts: [
                {
                    title: 'Compréhension et analyse (8 pts)',
                    tasks: [
                        {
                            text: `Sur un texte d\'argumentation sur l\'éducation :
1) Analysez la thèse et les arguments.
2) Donnez le champ lexical.
3) Expliquez un procédé d\'argumentation.`,
                            solution: `<p>1) Thèse : l\'éducation est la clé du progrès ; arguments : la lecture, la citoyenneté, la paix.</p>
                            <p>2) Champ lexical : « savoir, éduquer, citoyen, progrès, paix ».</p>
                            <p>3) Procédés : l\'argument d\'autorité, l\'exemplification, le questionnement rhétorique.</p>`
                        }
                    ]
                },
                {
                    title: 'Production écrite (12 pts)',
                    tasks: [
                        {
                            text: `Rédaction argumentative (15 lignes) : « Les bienfaits et les dangers des réseaux sociaux ».`,
                            solution: `<p>Introduction ; bienfaits : communication, information ; dangers : addiction, fausses informations ; conclusion : usage responsable et critique.</p>`
                        }
                    ]
                }
            ]
        }
    ]
});

// اللغة الإنجليزية — 3 ثانوي شعبة الآداب (معامل 3)
SUBJECTS.push({
    id: 'english',
    name: 'اللغة الإنجليزية',
    short: 'English',
    icon: '🇬🇧',
    color: '#7c3aed',
    coef: 3,
    desc: 'Grammar (passive voice, conditionals, reported speech), vocabulary, reading and writing.',
    units: [
        {
            id: 'en-gram',
            title: 'Grammar',
            topics: [
                {
                    id: 'passive',
                    title: 'The passive voice',
                    summary: `<p><b>Passive</b> = be + past participle. Used when the doer is unknown or unimportant.</p>
                    <p>Structure: Subject + be + past participle (+ by + agent).</p>`,
                    rules: [
                        'Active: People speak Arabic → Passive: Arabic is spoken by people.',
                        'Tenses: is written, was written, has been written, will be written.',
                        'The agent "by" is used only if necessary.',
                        'Passive is common in scientific and formal writing.'
                    ],
                    review: [
                        'Change to passive: "They built the school in 1980."',
                        'Change to active: "The letter was written by Sami."',
                        'Write two sentences about your city using the passive.'
                    ],
                    videoQuery: 'passive voice English 3as'
                },
                {
                    id: 'conditionals',
                    title: 'Conditionals (0, 1, 2, 3)',
                    summary: `<p><b>Zero</b>: If + present, present (general truth). <b>First</b>: If + present, will (real future).</p>
                    <p><b>Second</b>: If + past, would (unreal present). <b>Third</b>: If + past perfect, would have + pp (unreal past).</p>`,
                    rules: [
                        'Zero: If you heat water, it boils.',
                        'First: If it rains, I will stay home.',
                        'Second: If I had time, I would travel.',
                        'Third: If I had studied, I would have passed.'
                    ],
                    review: [
                        'Complete: If I (be) rich, I would help the poor.',
                        'Complete: If she (study), she would have succeeded.',
                        'Make a sentence about climate change using a conditional.'
                    ],
                    videoQuery: 'conditionals English 3as'
                },
                {
                    id: 'reported',
                    title: 'Reported speech',
                    summary: `<p>Reported speech changes pronouns, tenses and time expressions (now→then, today→that day).</p>`,
                    rules: [
                        'Direct: He said, "I am tired." → Reported: He said he was tired.',
                        'Present simple → past simple; will → would; can → could.',
                        'Questions: He asked if/whether I was ready.',
                        'Commands: He told me to sit down.'
                    ],
                    review: [
                        'Report: "I will come tomorrow."',
                        'Report: "Where do you live?"',
                        'Report: "Open the door!"'
                    ],
                    videoQuery: 'reported speech English 3as'
                }
            ]
        },
        {
            id: 'en-skills',
            title: 'Reading & Writing',
            topics: [
                {
                    id: 'en-writing',
                    title: 'Writing (letter, paragraph, essay)',
                    summary: `<p>Formal/informal letters, paragraph writing (topic sentence + support + concluding sentence), short essay.</p>`,
                    rules: [
                        'Formal letter: Dear Sir/Madam, Yours faithfully.',
                        'Informal letter: Dear + first name, Best wishes.',
                        'Paragraph: one idea, linking words (however, moreover, therefore).',
                        'Respect word limit and grammar.'
                    ],
                    review: [
                        'Write a formal letter to your director about school rules.',
                        'Write a paragraph about "My favorite season".',
                        'Write an essay: "The importance of learning languages".'
                    ],
                    videoQuery: 'formal letter writing English 3as'
                }
            ]
        }
    ],
    quiz: [
        { q: 'Passive of "They clean the room":', options: ['The room cleans', 'The room is cleaned', 'The room was cleaning', 'The room cleaned'], a: 1, ex: 'be + past participle: is cleaned.' },
        { q: 'Conditional 2: If I (have) time, I (travel).', options: ['have / will travel', 'had / would travel', 'would have / traveled', 'have / travel'], a: 1, ex: 'Second conditional: If + past, would + verb.' },
        { q: 'Reported: He said, "I am busy." →', options: ['He said he is busy', 'He said he was busy', 'He said he has been busy', 'He says he was busy'], a: 1, ex: 'Present simple → past simple in reported speech.' },
        { q: 'Zero conditional expresses:', options: ['real future', 'general truth', 'unreal past', 'impossibility'], a: 1, ex: 'Zero conditional: general truths.' },
        { q: '"If I had studied, I would have passed" is:', options: ['first', 'second', 'third', 'zero'], a: 2, ex: 'Third conditional: unreal past.' },
        { q: 'Formal letter closing:', options: ['Best wishes', 'Yours faithfully', 'Love', 'Bye'], a: 1, ex: 'Formal: Yours faithfully (no name).' },
        { q: 'Passive of "People speak English":', options: ['English is spoken', 'English speaks', 'English was spoken by people always', 'English is speaking'], a: 0, ex: 'English is spoken (by people).' },
        { q: 'Reported command: "Sit down!" →', options: ['He asked sit down', 'He told me to sit down', 'He said me sit', 'He asked to sitting'], a: 1, ex: 'Commands: told/asked + object + to + verb.' },
        { q: 'Linking word for contrast:', options: ['however', 'therefore', 'moreover', 'so'], a: 0, ex: 'However = contrast.' },
        { q: '"If it rains, I will stay" is:', options: ['zero', 'first', 'second', 'third'], a: 1, ex: 'First conditional: real future.' }
    ],
    triExams: [
        {
            tri: 1,
            title: 'Test n°1 — English (3AS Adab)',
            meta: { duration: '1h30', coef: 3, total: 20 },
            parts: [
                {
                    title: 'Grammar (10 pts)',
                    tasks: [
                        {
                            text: `Change to passive:
1) They built the bridge in 2010.
2) Someone stole my bike.`,
                            solution: `<p>1) The bridge was built in 2010.</p><p>2) My bike was stolen.</p>`
                        }
                    ]
                },
                {
                    title: 'Writing (10 pts)',
                    tasks: [
                        {
                            text: `Write a paragraph (8-10 lines) about "The importance of education".`,
                            solution: `<p>Topic sentence + arguments (knowledge, jobs, peace) + conclusion. Use linking words: firstly, moreover, finally.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 2,
            title: 'Test n°2 — English (3AS Adab)',
            meta: { duration: '1h30', coef: 3, total: 20 },
            parts: [
                {
                    title: 'Conditionals (10 pts)',
                    tasks: [
                        {
                            text: `Complete:
1) If I (be) you, I (study) harder.
2) If she (come) earlier, she would have met him.`,
                            solution: `<p>1) were / would study. 2) had come.</p>`
                        }
                    ]
                },
                {
                    title: 'Reported speech (10 pts)',
                    tasks: [
                        {
                            text: `Report:
1) "I will call you tomorrow."
2) "Where is the station?"`,
                            solution: `<p>1) He said he would call me the next day.</p><p>2) He asked where the station was.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 3,
            title: 'Test n°3 — English (3AS Adab)',
            meta: { duration: '1h30', coef: 3, total: 20 },
            parts: [
                {
                    title: 'Essay (15 pts)',
                    tasks: [
                        {
                            text: `Write a short essay (12 lines) on "Social networks: advantages and disadvantages".`,
                            solution: `<p>Introduction; advantages: communication, information; disadvantages: addiction, fake news; conclusion: responsible use.</p>`
                        }
                    ]
                },
                {
                    title: 'Grammar (5 pts)',
                    tasks: [
                        {
                            text: `Transform: "Open the window!" (reported).`,
                            solution: `<p>He told me to open the window.</p>`
                        }
                    ]
                }
            ]
        }
    ],
    exams: [
        {
            title: 'Model Bac — English (3AS Adab)',
            meta: { duration: '2 hours', coef: 3, total: 20 },
            parts: [
                {
                    title: 'Comprehension & Grammar (10 pts)',
                    tasks: [
                        {
                            text: `Read a text about education and:
1) Answer two comprehension questions.
2) Change two sentences to passive.`,
                            solution: `<p>1) Answers depend on text; use full sentences.</p>
                            <p>2) Passive: is/are + past participle, was/were + past participle.</p>`
                        }
                    ]
                },
                {
                    title: 'Writing (10 pts)',
                    tasks: [
                        {
                            text: `Write a formal letter (15 lines) to your school principal suggesting activities to protect the environment.`,
                            solution: `<p>Dear Sir/Madam, ... Yours faithfully, + suggestions (clean-up, recycling, awareness). </p>`
                        }
                    ]
                }
            ]
        }
    ]
});

// اللغة الأمازيغية — 3 ثانوي شعبة الآداب (معامل 2)
SUBJECTS.push({
    id: 'amazigh',
    name: 'اللغة والأدب الأمازيغية',
    short: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
    icon: 'ⵣ',
    color: '#be123c',
    coef: 2,
    desc: 'الحرف الأمازيغي (تيفيناغ)، القواعد، الأدب الشعبي (الإثران، الألغاز)، والتعبير.',
    units: [
        {
            id: 'amaz-gram',
            title: 'القواعد والكتابة',
            topics: [
                {
                    id: 'tifinagh',
                    title: 'الحرف الأمازيغي (تيفيناغ)',
                    summary: `<p>نظام كتابة قديم أُحيي رسمياً سنة 2003 (المعهد الوطني للغة الأمازيغية). يتكوّن من أحرف تمثّل الأصوات.</p>
                    <p><b>أمثلة</b>: ⴰ (a), ⴱ (b), ⴳ (g), ⴷ (d), ⵔ (r), ⵉ (i), ⵓ (u).</p>`,
                    rules: [
                        'تيفيناغ نظام كتابة أصلي للأمازيغية.',
                        'حروفه تمثّل الأصوات بدقة (كتابة صوتية).',
                        'يُستعمل في الجزائر (الرسمي منذ 2011) والمغرب وتونس وليبيا.',
                        'كلمة «أمازيغ» تعني «الأحرار» أو «الأصليون».'
                    ],
                    review: [
                        'اكتب بالحروف اللاتينية والحرف الأمازيغي: ⴰⴱⴰⴷ',
                        'ما معنى كلمة «أمازيغ»؟',
                        'اذكر ثلاثة أحرف من تيفيناغ مع أصواتها.'
                    ],
                    videoQuery: 'تيفيناغ الحرف الأمازيغي 3 ثانوي'
                },
                {
                    id: 'amaz-nahw',
                    title: 'قواعد اللغة الأمازيغية',
                    summary: `<p><b>البنية</b>: فعل + فاعل + مفعول. <b>الأسماء</b>: مؤنث بـ (ت/ت)، جمع بـ (وين/أوين). <b>الأفعال</b>: يتغير الجذر حسب الزمن والفاعل.</p>`,
                    rules: [
                        'الجمع: ⵓⵡⵏ (أوين) للمذكر، ⵜⴰⵡⵏ (توين) للمؤنث.',
                        'الزمن: الماضي، الحاضر، المستقبل، والأمر.',
                        'أدوات: ⴰ (و)، ⵏ (من)، ⴳ (في)، ⵙ (إلى).',
                        'النفي: لا يُستخدم مباشرة مع الفعل.'
                    ],
                    review: [
                        'حوّل إلى الجمع: «ⴰⴳⴷⵓⴷ» (التلميذ).',
                        'أعرب جملة أمازيغية بسيطة.',
                        'استعمل «ⴳ» (في) في جملة.'
                    ],
                    videoQuery: 'قواعد اللغة الأمازيغية 3 ثانوي'
                }
            ]
        },
        {
            id: 'amaz-adab',
            title: 'الأدب الأمازيغي',
            topics: [
                {
                    id: 'ithran',
                    title: 'الإثران والألغاز الشعبية',
                    summary: `<p><b>الإثران</b>: شعر شعبي أمازيغي (رجال، أطلس، القبائل). <b>الألغاز</b>: أسئلة شعبية تُنمّي الذكاء.</p>`,
                    rules: [
                        'الإثران غناء شعبي يرافق الأفراح والأعمال الجماعية.',
                        'اللغة بسيطة وقريبة من الحياة اليومية.',
                        'الألغاز: «ما هو الشيء الذي كلما أخذت منه كبر؟» (الحفرة).',
                        'الأدب الأمازيغي يُحافظ على الهوية والقيم.'
                    ],
                    review: [
                        'اذكر مثالاً من الإثران مع ترجمته.',
                        'حلّ لغزاً شعبياً أمازيغياً.',
                        'اربط بين الأدب الأمازيغي والهوية الجزائرية.'
                    ],
                    videoQuery: 'الإثران الأمازيغي 3 ثانوي'
                }
            ]
        }
    ],
    quiz: [
        { q: 'كلمة «أمازيغ» تعني:', options: ['الأحرار', 'السكان', 'البربر', 'الأجانب'], a: 0, ex: '«أمازيغ» تعني الأحرار أو الأصليون.' },
        { q: 'تيفيناغ أُحيي رسمياً سنة:', options: ['2003', '1990', '2011', '1962'], a: 0, ex: 'سنة 2003 (الرسمي في الجزائر 2011).' },
        { q: 'الحرف ⴰ يُنطق:', options: ['a', 'b', 'g', 'd'], a: 0, ex: 'ⴰ = a.' },
        { q: 'جمع «أوين» يدل على:', options: ['المذكر', 'المؤنث', 'المثنى', 'الجمع'], a: 0, ex: 'أوين للمذكر، توين للمؤنث.' },
        { q: '«الإثران» هو:', options: ['شعر شعبي أمازيغي', 'رقصة', 'لعبة', 'مأكولات'], a: 0, ex: 'الإثران غناء شعبي أمازيغي.' },
        { q: 'الحرف ⴳ يُنطق:', options: ['g', 'k', 'j', 'd'], a: 0, ex: 'ⴳ = g.' },
        { q: 'أداة «ⴳ» تعني:', options: ['في', 'من', 'إلى', 'مع'], a: 0, ex: 'ⴳ = في.' },
        { q: '«أطلس» سلسلة جبلية في:', options: ['الجنوب الغربي', 'الشمال', 'الشرق', 'الوسط'], a: 0, ex: 'أطلس في الجنوب الغربي (المغرب العربي).' }
    ],
    triExams: [
        {
            tri: 1,
            title: 'فرض الفصل الأول — الأمازيغية (شعبة الآداب)',
            meta: { duration: 'ساعة', coef: 2, total: 20 },
            parts: [
                {
                    title: 'الأسئلة (20 نقطة)',
                    tasks: [
                        {
                            text: `1) ما معنى كلمة «أمازيغ»؟
2) اكتب ثلاثة أحرف من تيفيناغ مع أصواتها.
3) اذكر مثالاً من الإثران.`,
                            solution: `<p>1) الأحرار/الأصليون.</p><p>2) ⴰ (a)، ⴱ (b)، ⴳ (g).</p><p>3) أي مثال من الإثران الأطلسية مع الترجمة.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 2,
            title: 'فرض الفصل الثاني — الأمازيغية (شعبة الآداب)',
            meta: { duration: 'ساعة', coef: 2, total: 20 },
            parts: [
                {
                    title: 'الأسئلة (20 نقطة)',
                    tasks: [
                        {
                            text: `1) ما الفرق بين «أوين» و«توين»؟
2) حلّ لغزاً شعبياً.
3) علّل: «تيفيناغ نظام كتابة صوتي».`,
                            solution: `<p>1) أوين للمذكر، توين للمؤنث.</p><p>2) مثال: الحفرة (كلما أخذت منها كبرت).</p><p>3) لأن كل حرف يمثّل صوتاً واحداً بدقة.</p>`
                        }
                    ]
                }
            ]
        },
        {
            tri: 3,
            title: 'فرض الفصل الثالث — الأمازيغية (شعبة الآداب)',
            meta: { duration: 'ساعة', coef: 2, total: 20 },
            parts: [
                {
                    title: 'الأسئلة (20 نقطة)',
                    tasks: [
                        {
                            text: `1) ما دور الإثران في المجتمع الأمازيغي؟
2) اكتب جملة أمازيغية مستعملاً «ⴳ» و«ⵏ».`,
                            solution: `<p>1) الغناء في الأفراح والأعمال الجماعية، حفظ القيم والهوية.</p><p>2) مثال: ⴰⵙⵉ ⵏ ⴷⴰⴷ ⴳ ⴰⵙⴰⴼ (أنا من الدهر في الصحراء) أو أي جملة صحيحة.</p>`
                        }
                    ]
                }
            ]
        }
    ],
    exams: [
        {
            title: 'نموذج اختبار — الأمازيغية (شعبة الآداب)',
            meta: { duration: 'ساعة ونصف', coef: 2, total: 20 },
            parts: [
                {
                    title: 'الأسئلة (20 نقطة)',
                    tasks: [
                        {
                            text: `1) ترجم: «ⴰⴳⴷⵓⴷ» و«ⵜⴰⵡⵏ».
2) اكتب فقرة قصيرة عن الأدب الأمازيغي.`,
                            solution: `<p>1) ⴰⴳⴷⵓⴷ = التلميذ/الرجل؛ ⵜⴰⵡⵏ = جمع المؤنث.</p>
                            <p>2) فقرة تصف الإثران والألغاز ودورها في حفظ الهوية والقيم.</p>`
                        }
                    ]
                }
            ]
        }
    ]
});
