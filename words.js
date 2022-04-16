(function () {
  const words = [
    //a
    {
      word: "abandon",
      pron: "'ebandin'",
      mean: "terk etmek",
    },
    {
      word: "ability",
      pron: "'ebılıti'",
      mean: "yetenek",
    },
    {
      word: "able",
      pron: "'eybil'",
      mean: "muktedi̇r",
    },
    {
      word: "aboard",
      pron: "'ebord'",
      mean: "i̇çi̇nde olmak",
    },
    {
      word: "about",
      pron: "'ebaut'",
      mean: "hakkında",
    },
    {
      word: "above",
      pron: "'ebav'",
      mean: "yukaridaki̇",
    },
    {
      word: "abroad",
      pron: "'ebrod'",
      mean: "yurt dişi",
    },
    {
      word: "absence",
      pron: "'ebsins'",
      mean: "yokluk",
    },
    {
      word: "absent",
      pron: "'ebsint'",
      mean: "eksi̇k",
    },
    {
      word: "absolute",
      pron: "'ebsolut'",
      mean: "kesi̇n",
    },
    {
      word: "absurd",
      pron: "'ebzörd'",
      mean: "saçma",
    },
    {
      word: "accident",
      pron: "'eksidint'",
      mean: "kaza",
    },
    {
      word: "accommodate",
      pron: "'ekomodeyt'",
      mean: "yerleşti̇rmek",
    },
    {
      word: "accommodation",
      pron: "'ekomıdeyşin'",
      mean: "konaklama yeri̇",
    },
    {
      word: "accompany",
      pron: "'ekampini'",
      mean: "eşli̇k etmek",
    },
    {
      word: "according to",
      pron: "'ekording tu'",
      mean: "göre",
    },
    {
      word: "account",
      pron: "'ekaunt'",
      mean: "hesap",
    },
    {
      word: "accurate",
      pron: "'ekürıt'",
      mean: "hatasız",
    },
    {
      word: "accuse",
      pron: "'ekküz'",
      mean: "suçlamak",
    },
    {
      word: "ache",
      pron: "'eyk'",
      mean: "ağri",
    },
    {
      word: "acquaint",
      pron: "'ekueynt'",
      mean: "tanimak,bilmek",
    },
    {
      word: "across",
      pron: "'ekros'",
      mean: "di̇ğer tarafta",
    },
    {
      word: "act",
      pron: "'ekt'",
      mean: "davraniş",
    },
    {
      word: "active",
      pron: "'ektiv'",
      mean: "etki̇n",
    },
    {
      word: "actor",
      pron: "'ektır'",
      mean: "erkek oyuncu",
    },
    {
      word: "actress",
      pron: "'ektrıs'",
      mean: "kadin oyuncu",
    },
    {
      word: "actual",
      pron: "'ekçuıl'",
      mean: "gerçek",
    },
    {
      word: "add",
      pron: "'ed'",
      mean: "eklemek",
    },
    {
      word: "address",
      pron: "'edres'",
      mean: "adres",
    },
    {
      word: "administration",
      pron: "'edminıstreyşın'",
      mean: "i̇dare",
    },
    {
      word: "admire",
      pron: "'edmayr'",
      mean: "beğenmek",
    },
    {
      word: "admit",
      pron: "'edmit'",
      mean: "i̇zi̇n vermek",
    },
    {
      word: "adult",
      pron: "'edalt'",
      mean: "yeti̇şki̇n",
    },
    {
      word: "advance",
      pron: "'edvens'",
      mean: "i̇leri̇",
    },
    {
      word: "advanced",
      pron: "'edvensd'",
      mean: "geli̇şmi̇ş",
    },
    {
      word: "advantage",
      pron: "'edventıc'",
      mean: "avantaj",
    },
    {
      word: "adventure",
      pron: "'edvençur'",
      mean: "macera",
    },
    {
      word: "advertise",
      pron: "'edvırtayz'",
      mean: "reklam yapmak",
    },
    {
      word: "advice",
      pron: "'edvays'",
      mean: "tavsi̇ye",
    },
    {
      word: "advise",
      pron: "'edvayz'",
      mean: "tavsi̇ye etmek",
    },
    {
      word: "aerial",
      pron: "'eriyıl'",
      mean: "anten",
    },
    {
      word: "aeroplane",
      pron: "'eıropleyn'",
      mean: "uçak",
    },
    {
      word: "affair",
      pron: "'effeyır'",
      mean: "olay",
    },
    {
      word: "affect",
      pron: "'efekt'",
      mean: "etki̇lemek",
    },
    {
      word: "afford",
      pron: "'eford'",
      mean: "satin alma gücü",
    },
    {
      word: "afraid",
      pron: "'efreid'",
      mean: "korkmak",
    },
    {
      word: "after",
      pron: "'aftır'",
      mean: "sonra",
    },
    {
      word: "afternoon",
      pron: "'aftırnuun'",
      mean: "öğleden sonra",
    },
    {
      word: "afterwards",
      pron: "'aftırvördz'",
      mean: "(bir olaydan) sonra",
    },
    {
      word: "again",
      pron: "'egein'",
      mean: "bi̇r daha",
    },
    {
      word: "against",
      pron: "'egeinst'",
      mean: "karşi, zit",
    },
    {
      word: "age",
      pron: "'eyc'",
      mean: "yaş ",
    },
    {
      word: "aged",
      pron: "'eycd'",
      mean: "yaşinda",
    },
    {
      word: "agency",
      pron: "'eycınsi'",
      mean: "acente",
    },
    {
      word: "agent",
      pron: "'eycınt'",
      mean: "temsi̇lci̇",
    },
    {
      word: "aggressive",
      pron: "'egresiv'",
      mean: "saldirgan",
    },
    {
      word: "ago",
      pron: "'ego'",
      mean: "önce",
    },
    {
      word: "agree",
      pron: "'egrii'",
      mean: "anlaşmak",
    },
    {
      word: "agreement",
      pron: "'egriimınt'",
      mean: "anlaşma",
    },
    {
      word: "agriculture",
      pron: "'egrikalçır'",
      mean: "tarim",
    },
    {
      word: "ahead",
      pron: "'ehed'",
      mean: "önde",
    },
    {
      word: "aid",
      pron: "'eyd'",
      mean: "yardim",
    },
    {
      word: "aim",
      pron: "'eym'",
      mean: "hedef almak",
    },
    {
      word: "air",
      pron: "'eyr'",
      mean: "hava",
    },
    {
      word: "algebra",
      pron: "'alcebra'",
      mean: "cebi̇r",
    },
    {
      word: "alike",
      pron: "'elaık'",
      mean: "hemen hemen ayni",
    },
    {
      word: "alive",
      pron: "'elaıv'",
      mean: "yaşamak,canli",
    },
    {
      word: "all",
      pron: "'ol'",
      mean: "hep, tüm, her",
    },
    {
      word: "all right",
      pron: "'ol rayt'",
      mean: "tamam",
    },
    {
      word: "alliance",
      pron: "'elayıns'",
      mean: "bağlaşma, bi̇rli̇k, mütareke",
    },
    {
      word: "alligator",
      pron: "'aligeytır'",
      mean: "ti̇msah",
    },
    {
      word: "allow",
      pron: "'elov'",
      mean: "i̇zi̇n vermek",
    },
    {
      word: "almost",
      pron: "'olmost'",
      mean: "hemen hemen",
    },
    {
      word: "alone",
      pron: "'elon'",
      mean: "yalniz, tek",
    },
    {
      word: "along",
      pron: "'elong'",
      mean: "boyunca, i̇leri̇",
    },
    {
      word: "aloud",
      pron: "'elaud'",
      mean: "sesli̇",
    },
    {
      word: "already",
      pron: "'olredi'",
      mean: "az önce, zaten",
    },
    {
      word: "also",
      pron: "'olso'",
      mean: "hem de",
    },
    {
      word: "although",
      pron: "'oldo'",
      mean: "gerçi̇, olmakla beraber",
    },
    {
      word: "altogether",
      pron: "'oltugedır'",
      mean: "tümüyle, hep beraber",
    },
    {
      word: "always",
      pron: "'olveys'",
      mean: "her zaman",
    },
    {
      word: "amaze",
      pron: "'emeyz'",
      mean: "şaşirtmak",
    },
    {
      word: "ambassador",
      pron: "'embesedır'",
      mean: "büyükelçi̇",
    },
    {
      word: "ambition",
      pron: "'embişın'",
      mean: "hirs",
    },
    {
      word: "ambush",
      pron: "'embuş'",
      mean: "tuzak",
    },
    {
      word: "among",
      pron: "'emong'",
      mean: "arasinda",
    },
    {
      word: "amount",
      pron: "'emaunt'",
      mean: "mi̇ktar",
    },
    {
      word: "amuse",
      pron: "'emüuz'",
      mean: "güldürmek",
    },
    {
      word: "angry",
      pron: "'engri'",
      mean: "kizgin",
    },
    {
      word: "ankle",
      pron: "'enkl'",
      mean: "ayak bi̇leği̇",
    },
    {
      word: "anniversary",
      pron: "'enivörsıri'",
      mean: "yildönümü",
    },
    {
      word: "announce",
      pron: "'enauns'",
      mean: "bi̇ldi̇rmek,anons",
    },
    {
      word: "annoy",
      pron: "'enoy'",
      mean: "rahatsiz etmek, kizdirmak",
    },
    {
      word: "annual",
      pron: "'enyuıl'",
      mean: "yillik",
    },
    {
      word: "another",
      pron: "'enadır'",
      mean: "di̇ğer",
    },
    {
      word: "answer",
      pron: "'ensır'",
      mean: "yanit",
    },
    {
      word: "ant",
      pron: "'ent'",
      mean: "karinca",
    },
    {
      word: "anti",
      pron: "'anti'",
      mean: "karşi, zit, ters",
    },
    {
      word: "anxiety",
      pron: "'enzayıti'",
      mean: "endi̇şe",
    },
    {
      word: "anxious",
      pron: "'enkşıs'",
      mean: "endi̇şeli̇",
    },
    {
      word: "any",
      pron: "'eni'",
      mean: "herhangi̇",
    },
    {
      word: "anybody",
      pron: "'enibadi'",
      mean: "herhangi̇ bi̇ri̇",
    },
    {
      word: "anyone",
      pron: "'enivan'",
      mean: "herhangi̇ bi̇ri̇",
    },
    {
      word: "anything",
      pron: "'enyting'",
      mean: "herhangi̇ bi̇r şey",
    },
    {
      word: "anyway",
      pron: "'enivey'",
      mean: "her neyse",
    },
    {
      word: "anywhere",
      pron: "'eniveır'",
      mean: "herhangi̇ bi̇r yer",
    },
    {
      word: "apart",
      pron: "'epart'",
      mean: "ayri",
    },
    {
      word: "apart from",
      pron: "'epart fr'",
      mean: "hari̇ç, dişinda",
    },
    {
      word: "ape",
      pron: "'eyp'",
      mean: "maymun",
    },
    {
      word: "apologize",
      pron: "'epolocays'",
      mean: "özür di̇lemek",
    },
    {
      word: "apparent",
      pron: "'eperınt'",
      mean: "kolayca görünen",
    },
    {
      word: "appeal",
      pron: "'epiıl'",
      mean: "yalvarmak, üst mahkemeye başvurmak",
    },
    {
      word: "appear",
      pron: "'eppiır'",
      mean: "görünmek",
    },
    {
      word: "appearanc",
      pron: "'eppiırıns'",
      mean: "görünüş",
    },
    {
      word: "appetite",
      pron: "'epıtayt'",
      mean: "i̇ştah",
    },
    {
      word: "applicant",
      pron: "'eplikınt'",
      mean: "başvuran",
    },
    {
      word: "application",
      pron: "'eplikeyşı'",
      mean: "başvuru",
    },
    {
      word: "apply",
      pron: "'eplay'",
      mean: "başvurmak, uygulama",
    },
    {
      word: "appoint",
      pron: "'eppoint'",
      mean: "atamak",
    },
    {
      word: "appointmen",
      pron: "'eppointm'",
      mean: "randevu, atama",
    },
    {
      word: "appreciate",
      pron: "'eprişieyt'",
      mean: "müteşekki̇r, değer bi̇lmek ,beğenmek",
    },
    {
      word: "approach",
      pron: "'eproç'",
      mean: "yaklaşmak, yaklaşim, geli̇ş",
    },
    {
      word: "approve",
      pron: "'epruv'",
      mean: "onaylamak",
    },
    {
      word: "approximat",
      pron: "'eproksim'",
      mean: "yaklaşik olarak",
    },
    {
      word: "apricot",
      pron: "'eprikot'",
      mean: "kayisi",
    },
    {
      word: "april",
      pron: "'eyprıl'",
      mean: "ni̇san",
    },
    {
      word: "archbishop",
      pron: "'arçbişıp'",
      mean: "başpi̇skopos",
    },
    {
      word: "architect",
      pron: "'arkitekt'",
      mean: "mi̇mar",
    },
    {
      word: "architecture",
      pron: "'arkitekçı'",
      mean: "mi̇mari̇",
    },
    {
      word: "area",
      pron: "'eriya'",
      mean: "alan, bölge",
    },
    {
      word: "argue",
      pron: "'argüu'",
      mean: "tartişmak",
    },
    {
      word: "argument",
      pron: "'argümınt'",
      mean: "tartişma",
    },
    {
      word: "arise",
      pron: "'erayz'",
      mean: "kalkmak,yükselmek",
    },
    {
      word: "aristocrat",
      pron: "'eristokra'",
      mean: "ari̇stokrat",
    },
    {
      word: "arm",
      pron: "'arm'",
      mean: "kol",
    },
    {
      word: "armchair",
      pron: "'armçeir'",
      mean: "koltuk",
    },
    {
      word: "armour",
      pron: "'armır'",
      mean: "zirh",
    },
    {
      word: "army",
      pron: "'armi'",
      mean: "ordu",
    },
    {
      word: "around",
      pron: "'eraund'",
      mean: "aşaği yukari,çevre",
    },
    {
      word: "arrange",
      pron: "'ereync'",
      mean: "düzenlemek, ayarlamak	",
    },
    {
      word: "arrest",
      pron: "'erest'",
      mean: "tutuklamak",
    },
    {
      word: "arrival",
      pron: "'erayvıl'",
      mean: "variş",
    },
    {
      word: "arrive",
      pron: "'erayv'",
      mean: "varmak",
    },
    {
      word: "arrow",
      pron: "'erov'",
      mean: "ok",
    },
    {
      word: "art",
      pron: "'art'",
      mean: "sanat",
    },
    {
      word: "article",
      pron: "'artikl'",
      mean: "makale, eşya	",
    },
    {
      word: "artificial",
      pron: "'artifişıl'",
      mean: "yapay",
    },
    {
      word: "artist",
      pron: "'artist'",
      mean: "sanatçi",
    },
    {
      word: "as",
      pron: "'ez'",
      mean: "gi̇bi̇, olarak",
    },
    {
      word: "ash",
      pron: "'eş'",
      mean: "kül",
    },
    {
      word: "ashamed",
      pron: "'eşeymd'",
      mean: "utanmiş",
    },
    {
      word: "aside",
      pron: "'esayd'",
      mean: "bi̇r yanda",
    },
    {
      word: "ask",
      pron: "'esk'",
      mean: "sormak, i̇stemek",
    },
    {
      word: "asleep",
      pron: "'esliip'",
      mean: "uykuda",
    },
    {
      word: "assembly",
      pron: "'esembli'",
      mean: "montaj,oturum",
    },
    {
      word: "assist",
      pron: "'esist'",
      mean: "yardim etmek",
    },
    {
      word: "assistant",
      pron: "'esistınt'",
      mean: "yardimci",
    },
    {
      word: "associate",
      pron: "'esoşieyt'",
      mean: "i̇lgi̇lenmek, bi̇rleşti̇rmek",
    },
    {
      word: "assume",
      pron: "'esuym'",
      mean: "varsaymak",
    },
    {
      word: "astonish",
      pron: "'estoniş'",
      mean: "şaşirmak (bir kimseye)",
    },
    {
      word: "atmospher",
      pron: "'etmosfiır'",
      mean: "havaküre, atmosfer",
    },
    {
      word: "attach",
      pron: "'eteç'",
      mean: "bi̇rleşti̇rmek",
    },
    {
      word: "attack",
      pron: "'etek'",
      mean: "saldirmak",
    },
    {
      word: "attempt",
      pron: "'etempt'",
      mean: "denemek",
    },
    {
      word: "attend",
      pron: "'etend'",
      mean: "katilmak",
    },
    {
      word: "attention",
      pron: "'etenşın'",
      mean: "di̇kkat",
    },
    {
      word: "attitude",
      pron: "'etitüud'",
      mean: "yaklaşim, düşünce, hareket, tavir",
    },
    {
      word: "attractive",
      pron: "'etrektiv'",
      mean: "çeki̇ci̇",
    },
    {
      word: "august",
      pron: "'ogust'",
      mean: "ağustos",
    },
    {
      word: "aunt",
      pron: "'aant'",
      mean: "teyze, hala",
    },
    {
      word: "autumn",
      pron: "'otumn'",
      mean: "sonbahar",
    },
    {
      word: "available",
      pron: "'eveylıbl'",
      mean: "hazir, serbest, boşta",
    },
    {
      word: "avenue",
      pron: "'evenyu'",
      mean: "cadde",
    },
    {
      word: "average",
      pron: "'evirıç'",
      mean: "ortalama",
    },
    {
      word: "avoid",
      pron: "'evoid'",
      mean: "kaçinmak",
    },
    {
      word: "awake",
      pron: "'eveyk'",
      mean: "uyanik",
    },
    {
      word: "aware",
      pron: "'eveyr'",
      mean: "bi̇lgi̇li̇, farkinda olmak",
    },
    {
      word: "away",
      pron: "'evey'",
      mean: "buradan, burada deği̇l",
    },
    {
      word: "awful",
      pron: "'oful'",
      mean: "kötü, berbat, üzücü",
    },
    {
      word: "axe",
      pron: "'eks'",
      mean: "balta",
    },
    //b
    {
      word: "baby",
      pron: "'beybi'",
      mean: "bebek",
    },
    {
      word: "back",
      pron: "'bek'",
      mean: "arka , sirt",
    },
    {
      word: "backbone",
      pron: "'bekbon'",
      mean: "sirt kemi̇ği̇",
    },
    {
      word: "background",
      pron: "'bekraun'",
      mean: "fon, geri̇ plan , temel",
    },
    {
      word: "backward",
      pron: "'bekvörd'",
      mean: "geri̇ye doğru",
    },
    {
      word: "bad",
      pron: "'bed'",
      mean: "kötü",
    },
    {
      word: "badly",
      pron: "'bedli'",
      mean: "kötü , çok fazla",
    },
    {
      word: "bag",
      pron: "'beg'",
      mean: "çanta",
    },
    {
      word: "baggage",
      pron: "'begıc'",
      mean: "bagaj",
    },
    {
      word: "bake",
      pron: "'beyk'",
      mean: "pi̇şi̇rmek",
    },
    {
      word: "baker",
      pron: "'beykır'",
      mean: "firinci",
    },
    {
      word: "firinci",
      pron: "'belıns'",
      mean: "denge , baki̇ye",
    },
    {
      word: "balcony",
      pron: "'belkıni'",
      mean: "balkon",
    },
    {
      word: "bald",
      pron: "'bold'",
      mean: "kel",
    },
    {
      word: "ball",
      pron: "'bol'",
      mean: "top , balo",
    },
    {
      word: "ballerina",
      pron: "'belıriinı'",
      mean: "baleri̇n",
    },
    {
      word: "ballet",
      pron: "'baley'",
      mean: "bale",
    },
    {
      word: "balloon",
      pron: "'baluun'",
      mean: "balon",
    },
    {
      word: "ban",
      pron: "'ben'",
      mean: "yasak",
    },
    {
      word: "band",
      pron: "'bend'",
      mean: "bant (şerit)  , bando	",
    },
    {
      word: "bank",
      pron: "'benk'",
      mean: "banka",
    },
    {
      word: "banker",
      pron: "'benkır'",
      mean: "banka yöneti̇ci̇si̇",
    },
    {
      word: "banknote",
      pron: "'benknot'",
      mean: "kağit para",
    },
    {
      word: "bankrupt",
      pron: "'benkrapt'",
      mean: "i̇flas",
    },
    {
      word: "bar",
      pron: "'bar'",
      mean: "çubuk , bar",
    },
    {
      word: "bare",
      pron: "'beyr'",
      mean: "çiplak, boş	",
    },
    {
      word: "bargain",
      pron: "'bargın'",
      mean: "pazarlik etmek , kelepi̇r",
    },
    {
      word: "barrel",
      pron: "'berıl'",
      mean: "vari̇l , namlu",
    },
    {
      word: "base",
      pron: "'beys'",
      mean: " taban , üs",
    },
    {
      word: "basement",
      pron: "'beysmınt'",
      mean: "bodrum",
    },
    {
      word: "basin",
      pron: "'beysn'",
      mean: "kazan",
    },
    {
      word: "basket",
      pron: "'baskıt'",
      mean: "sepet",
    },
    {
      word: "bath",
      pron: "'bath'",
      mean: "yikanmak",
    },
    {
      word: "bathe",
      pron: "'beth'",
      mean: "yıkamak",
    },
    {
      word: "battle",
      pron: "'betl'",
      mean: "savaş",
    },
    {
      word: "bay",
      pron: "'bey'",
      mean: "koy",
    },
    {
      word: "beach",
      pron: "'biiç'",
      mean: "sahi̇l",
    },
    {
      word: "bean",
      pron: "'biin'",
      mean: "fasulye",
    },
    {
      word: "bear",
      pron: "'beır'",
      mean: "ayı",
    },
    {
      word: "beard",
      pron: "'bıed'",
      mean: "sakal",
    },
    {
      word: "beast",
      pron: "'biist'",
      mean: "canavar",
    },
    {
      word: "beat",
      pron: "'biit'",
      mean: "vurmak  , yenmek",
    },
    {
      word: "beautiful",
      pron: "'büutiful	'",
      mean: "güzel",
    },
    {
      word: "beauty",
      pron: "'büuti'",
      mean: "güzelli̇k",
    },
    {
      word: "because",
      pron: "'bikoz'",
      mean: "çünkü",
    },
    {
      word: "become",
      pron: "'bıkam'",
      mean: "geli̇şmek, deği̇şmek",
    },
    {
      word: "bed",
      pron: "'bed'",
      mean: "yatak",
    },
    {
      word: "bee",
      pron: "'bii'",
      mean: "ari",
    },
    {
      word: "beef",
      pron: "'biif'",
      mean: "dana eti̇",
    },
    {
      word: "beer",
      pron: "'biır'",
      mean: "bi̇ra",
    },
    {
      word: "beetle",
      pron: "'biitl'",
      mean: "hamamböceği̇",
    },
    {
      word: "before",
      pron: "'bifor'",
      mean: "önce",
    },
    {
      word: "beg",
      pron: "'beg'",
      mean: "di̇lenmek",
    },
    {
      word: "begin",
      pron: "'begın'",
      mean: "başlamak",
    },
    {
      word: "behave",
      pron: "'biheyv'",
      mean: "davranmak",
    },
    {
      word: "behind",
      pron: "'bihaynd'",
      mean: "arkada, geri̇de",
    },
    {
      word: "being",
      pron: "'biing'",
      mean: "varlik",
    },
    {
      word: "believe",
      pron: "'bıliiv'",
      mean: "i̇nanmak",
    },
    {
      word: "bell",
      pron: "'bel'",
      mean: "zi̇l, çan",
    },
    {
      word: "belong",
      pron: "'bilong'",
      mean: "ai̇t olmak",
    },
    {
      word: "below",
      pron: "'bilov'",
      mean: "altta, aşağida",
    },
    {
      word: "belt",
      pron: "'belt'",
      mean: "kemer",
    },
    {
      word: "bench",
      pron: "'benç'",
      mean: "tezgah  , bank",
    },
    {
      word: "bend",
      pron: "'bend'",
      mean: "eğmek, eği̇lmek",
    },
    {
      word: "beneath",
      pron: "'bınith'",
      mean: "altinda",
    },
    {
      word: "benefit",
      pron: "'benıfit'",
      mean: "yarari olmak",
    },
    {
      word: "berry",
      pron: "'beri'",
      mean: "küçük çeki̇rdeksi̇z meyve",
    },
    {
      word: "beside",
      pron: "'bisayd'",
      mean: "yaninda",
    },
    {
      word: "besides",
      pron: "'bisaydz'",
      mean: "hem de",
    },
    {
      word: "best",
      pron: "'best'",
      mean: "en i̇yi̇",
    },
    {
      word: "bet",
      pron: "'bet'",
      mean: "i̇ddi̇aya gi̇rmek",
    },
    {
      word: "better",
      pron: "'better'",
      mean: "daha i̇yi̇",
    },
    {
      word: "between",
      pron: "'bitviin'",
      mean: "arasinda",
    },
    {
      word: "beyond",
      pron: "'biyand'",
      mean: "ötesi̇nde",
    },
    {
      word: "bicycle",
      pron: "'baysikl'",
      mean: "bi̇si̇klet",
    },
    {
      word: "big",
      pron: "'big'",
      mean: "büyük",
    },
    {
      word: "bike",
      pron: "'bayk'",
      mean: "bi̇si̇klet",
    },
    {
      word: "bill",
      pron: "'bil'",
      mean: "makbuz",
    },
    {
      word: "bin",
      pron: "'bin'",
      mean: "kap",
    },
    {
      word: "bind",
      pron: "'baynd'",
      mean: "bağlamak",
    },
    {
      word: "bird",
      pron: "'börd'",
      mean: "kuş",
    },
    {
      word: "birth",
      pron: "'börth'",
      mean: "doğum",
    },
    {
      word: "biscuit",
      pron: "'biskit'",
      mean: "bi̇sküvi̇",
    },
    {
      word: "bishop",
      pron: "'bişıp'",
      mean: "pi̇skopos",
    },
    {
      word: "bit",
      pron: "'bit'",
      mean: "parça",
    },
    {
      word: "bite",
      pron: "'bayt'",
      mean: "isirmak",
    },
    {
      word: "black",
      pron: "'blek'",
      mean: "si̇yah",
    },
    {
      word: "blame",
      pron: "'bleym'",
      mean: "suçlamak",
    },
    {
      word: "blank",
      pron: "'blenk'",
      mean: "boşluk",
    },
    {
      word: "blanket",
      pron: "'blenkıt'",
      mean: "battani̇ye",
    },
    {
      word: "blast",
      pron: "'blast'",
      mean: "mahvetmek",
    },
    {
      word: "bless",
      pron: "'bles'",
      mean: "tanrı'dan korunmasini di̇lemek",
    },
    {
      word: "blind",
      pron: "'blaynd'",
      mean: "kör",
    },
    {
      word: "block",
      pron: "'blok'",
      mean: "blok",
    },
    {
      word: "blood",
      pron: "'blad'",
      mean: "kan",
    },
    {
      word: "bloom",
      pron: "'bluum'",
      mean: "çi̇çek açmak",
    },
    {
      word: "blow",
      pron: "'blou'",
      mean: "üflemek, patlamak",
    },
    {
      word: "blue",
      pron: "'blu'",
      mean: " mavi̇ , mutsuz",
    },
    {
      word: "bluff",
      pron: "'blaf'",
      mean: "blöf",
    },
    {
      word: "board",
      pron: "'boord'",
      mean: "bi̇nmek (gemiye,uçağa,vs.) , tahta kurul",
    },
    {
      word: "boast",
      pron: "'boust'",
      mean: "övünmek",
    },
    {
      word: "boat",
      pron: "'bout'",
      mean: "bot, sandal",
    },
    {
      word: "body",
      pron: "'badi'",
      mean: "gövde;vücut",
    },
    {
      word: "boil",
      pron: "'boıl'",
      mean: "kaynamak",
    },
    {
      word: "bold",
      pron: "'bould'",
      mean: "cüretkar, utanmaz, korkusuz",
    },
    {
      word: "bomb",
      pron: "'bomb'",
      mean: "bomba",
    },
    {
      word: "bone",
      pron: "'boun'",
      mean: "kemi̇k",
    },
    {
      word: "bonfire",
      pron: "'bonfayır'",
      mean: "meydan ateşi̇, şenli̇k ateşi̇",
    },
    {
      word: "book",
      pron: "'buk'",
      mean: "ki̇tap",
    },
    {
      word: "book",
      pron: "'buk'",
      mean: "yer ayirtmak",
    },
    {
      word: "border",
      pron: "'bordır'",
      mean: "sinir",
    },
    {
      word: "bore",
      pron: "'bor'",
      mean: "can sikmak",
    },
    {
      word: "bored",
      pron: "'bord'",
      mean: "cani sikilmiş",
    },
    {
      word: "born",
      pron: "'born'",
      mean: "doğmuş",
    },
    {
      word: "borrow",
      pron: "'borou'",
      mean: "ödünç almak",
    },
    {
      word: "boss",
      pron: "'bos'",
      mean: "patron",
    },
    {
      word: "both",
      pron: "'bouth'",
      mean: "i̇ki̇si̇",
    },
    {
      word: "bottle",
      pron: "'botl'",
      mean: "şi̇şe",
    },
    {
      word: "bottom",
      pron: "'botım'",
      mean: "en alt, di̇p",
    },
    {
      word: "bow",
      pron: "'bou'",
      mean: "yay",
    },
    {
      word: "bowl",
      pron: "'boul'",
      mean: "tas",
    },
    {
      word: "box",
      pron: "'boks'",
      mean: "kutu , boks",
    },
    {
      word: "boy",
      pron: "'boy'",
      mean: "erkek çocuk",
    },
    {
      word: "bra",
      pron: "'bra'",
      mean: "sutyen",
    },
    {
      word: "brain",
      pron: "'breyn'",
      mean: "beyi̇n",
    },
    {
      word: "brass",
      pron: "'bras'",
      mean: "pi̇ri̇nç (metal)",
    },
    {
      word: "brave",
      pron: "'breyv'",
      mean: "korkusuz, cesur",
    },
    {
      word: "bread",
      pron: "'bred'",
      mean: "ekmek",
    },
    {
      word: "break",
      pron: "'breyk'",
      mean: "kirmak",
    },
    {
      word: "breakfast",
      pron: "'brekfıst'",
      mean: "kahvalti",
    },
    {
      word: "breath",
      pron: "'breth'",
      mean: "nefes",
    },
    {
      word: "breathe",
      pron: "'brith'",
      mean: "nefes almak",
    },
    {
      word: "brick",
      pron: "'brik'",
      mean: "tuğla",
    },
    {
      word: "bridge",
      pron: "'bric'",
      mean: "köprü",
    },
    {
      word: "brief",
      pron: "'briif'",
      mean: "kisa, özetli̇",
    },
    {
      word: "bright",
      pron: "'brayt'",
      mean: "parlak",
    },
    {
      word: "bring",
      pron: "'bring'",
      mean: "geti̇rmek",
    },
    {
      word: "broad",
      pron: "'brood'",
      mean: "geni̇ş",
    },
    {
      word: "broadcast",
      pron: "'broodkas'",
      mean: "yayin (radyo ve t.v. yoluyla)",
    },
    {
      word: "broom",
      pron: "'bruum'",
      mean: "süpürge",
    },
    {
      word: "brother",
      pron: "'bradır'",
      mean: "erkek kardeş, ağabey",
    },
    {
      word: "brown",
      pron: "'braun'",
      mean: "kahverengi̇",
    },
    {
      word: "brush",
      pron: "'braş'",
      mean: "firça  , firçalamak",
    },
    {
      word: "budget",
      pron: "'bacıt'",
      mean: "bütçe  , bütçe yapmak",
    },
    {
      word: "build",
      pron: "'bild'",
      mean: "i̇nşa etmek, yapmak",
    },
    {
      word: "building",
      pron: "'bilding'",
      mean: "bi̇na",
    },
    {
      word: "bulb",
      pron: "'balb'",
      mean: "ampul",
    },
    {
      word: "bump",
      pron: "'bamp'",
      mean: "çarpişma",
    },
    {
      word: "bumper",
      pron: "'bampır'",
      mean: "tampon (araba)",
    },
    {
      word: "bumpy",
      pron: "'bampi'",
      mean: "engebeli̇",
    },
    {
      word: "bunch",
      pron: "'banç'",
      mean: "bdeste, demet",
    },
    {
      word: "bungalow",
      pron: "'banglou'",
      mean: "bungalov",
    },
    {
      word: "burglar",
      pron: "'börglır'",
      mean: "hirsiz",
    },
    {
      word: "burn",
      pron: "'börn'",
      mean: "yanmak",
    },
    {
      word: "burst",
      pron: "'börst'",
      mean: "patlamak",
    },
    {
      word: "bury",
      pron: "'böri'",
      mean: "gömmek",
    },
    {
      word: "bus",
      pron: "'bas'",
      mean: "otobüs",
    },
    {
      word: "bush",
      pron: "'buş'",
      mean: "çali",
    },
    {
      word: "business",
      pron: "'biznıs'",
      mean: "i̇ş",
    },
    {
      word: "busy",
      pron: "'bizi'",
      mean: "meşgul",
    },
    {
      word: "but",
      pron: "'bat'",
      mean: "fakat",
    },
    {
      word: "butcher",
      pron: "'butçır'",
      mean: "kasap",
    },
    {
      word: "butter",
      pron: "'batır'",
      mean: "tereyağ",
    },
    {
      word: "button",
      pron: "'batn'",
      mean: "düğme",
    },
    {
      word: "buy",
      pron: "'bay'",
      mean: "satin almak",
    },
    {
      word: "by",
      pron: "'bay'",
      mean: "yaninda, sirasinda, tarafindan, ..e kadar",
    },

    //c
    {
      word: "cab",
      pron: "'keb'",
      mean: "taksi̇",
    },
    {
      word: "cable",
      pron: "'keybl'",
      mean: "kablo",
    },
    {
      word: "cage",
      pron: "'keyc'",
      mean: "kafes",
    },
    {
      word: "cake",
      pron: "'keyk'",
      mean: "kek",
    },
    {
      word: "calculate",
      pron: "'kalkuleyt'",
      mean: "hesaplamak",
    },
    {
      word: "calendar",
      pron: "'kelindır'",
      mean: "takvi̇m",
    },
    {
      word: "call",
      pron: "'kol'",
      mean: "çağirmak, telefon etmek",
    },
    {
      word: "calm",
      pron: "'kaam'",
      mean: "saki̇n",
    },
    {
      word: "camouflag",
      pron: "'kamuflaa'",
      mean: "saklamak",
    },
    {
      word: "camp",
      pron: "'kemp'",
      mean: "kamp",
    },
    {
      word: "campaign",
      pron: "'kempein'",
      mean: "kampanya",
    },
    {
      word: "campus",
      pron: "'kempıs'",
      mean: "kampüs",
    },
    {
      word: "can",
      pron: "'ken'",
      mean: "teneke kutu",
    },
    {
      word: "canal",
      pron: "'knal'",
      mean: "kanal",
    },
    {
      word: "cancel",
      pron: "'kensıl'",
      mean: "i̇ptal etmek",
    },
    {
      word: "cancer",
      pron: "'kensır'",
      mean: "kanser",
    },
    {
      word: "candidate",
      pron: "'kendidıt'",
      mean: "aday",
    },
    {
      word: "candle",
      pron: "'kendl'",
      mean: "mum",
    },
    {
      word: "canteen",
      pron: "'kantiin'",
      mean: "kanti̇n",
    },
    {
      word: "capacity",
      pron: "'kpasiti'",
      mean: "kapasi̇te",
    },
    {
      word: "capital",
      pron: "'kepıtl'",
      mean: "başkent",
    },
    {
      word: "captain",
      pron: "'keptın'",
      mean: "kaptan, yüzbaşi	",
    },
    {
      word: "capture",
      pron: "'kepçır'",
      mean: "ele geçi̇rmek, hapse atmak",
    },
    {
      word: "car",
      pron: "'kaar'",
      mean: "araba",
    },
    {
      word: "caravan",
      pron: "'karavan'",
      mean: "karavan",
    },
    {
      word: "card",
      pron: "'kaad'",
      mean: "kart",
    },
    {
      word: "cardigan",
      pron: "'kardigın'",
      mean: "hirka",
    },
    {
      word: "care",
      pron: "'keyr'",
      mean: "di̇kkat, özen",
    },
    {
      word: "career",
      pron: "'kariır'",
      mean: "meslek",
    },
    {
      word: "carnival",
      pron: "'karnivıl'",
      mean: "karnaval",
    },
    {
      word: "carpenter",
      pron: "'karpıntır'",
      mean: "marangoz",
    },
    {
      word: "carpet",
      pron: "'kaarpıt'",
      mean: "hali",
    },
    {
      word: "carriage",
      pron: "'keriıc'",
      mean: "fayton, vagon",
    },
    {
      word: "carry",
      pron: "'keri'",
      mean: "taşimak",
    },
    {
      word: "case",
      pron: "'keys'",
      mean: "kutu, kap, dava",
    },
    {
      word: "cash",
      pron: "'keş'",
      mean: "naki̇t",
    },
    {
      word: "castle",
      pron: "'kesl'",
      mean: "kale",
    },
    {
      word: "cat",
      pron: "'ket'",
      mean: "kedi̇",
    },
    {
      word: "catch",
      pron: "'keç'",
      mean: "yakalamak",
    },
    {
      word: "cattle",
      pron: "'ketl'",
      mean: "büyükbaş hayvan",
    },
    {
      word: "cause",
      pron: "'koz'",
      mean: "neden",
    },
    {
      word: "ceiling",
      pron: "'silign'",
      mean: "tavan",
    },
    {
      word: "cell",
      pron: "'sel'",
      mean: "hücre, hapis",
    },
    {
      word: "cellar",
      pron: "'selır'",
      mean: "ki̇ler, bodrum",
    },
    {
      word: "century",
      pron: "'sençri'",
      mean: "yüzyil",
    },
    {
      word: "ceremony",
      pron: "'serımıni'",
      mean: "seremoni̇",
    },
    {
      word: "certain",
      pron: "'sörtın'",
      mean: "kesi̇n,beli̇rli̇",
    },
    {
      word: "certainly",
      pron: "'sörtınli'",
      mean: "kuşkusuz",
    },
    {
      word: "certificate",
      pron: "'sertıfıkeyt'",
      mean: "serti̇fi̇ka",
    },
    {
      word: "chain",
      pron: "'çeyn'",
      mean: "zi̇nci̇r",
    },
    {
      word: "chair",
      pron: "'çeır'",
      mean: "i̇skemle",
    },
    {
      word: "chairman",
      pron: "'çeırmen'",
      mean: "yöneti̇m kurulu başkani",
    },
    {
      word: "chalk",
      pron: "'çolk'",
      mean: "tebeşi̇r",
    },
    {
      word: "challenge",
      pron: "'çalınc'",
      mean: "meydan okuma",
    },
    {
      word: "champion",
      pron: "'çempiın'",
      mean: "şampi̇yon",
    },
    {
      word: "championship",
      pron: "'çempiınşip'",
      mean: "şampi̇yona",
    },
    {
      word: "chance",
      pron: "'çens'",
      mean: "şans",
    },
    {
      word: "change",
      pron: "'çeync'",
      mean: "deği̇şi̇m",
    },
    {
      word: "character",
      pron: "'kerıktır'",
      mean: "ki̇şi̇li̇k",
    },
    {
      word: "charge",
      pron: "'çarc'",
      mean: "doldurmak",
    },
    {
      word: "charm",
      pron: "'çarm'",
      mean: "çeki̇ci̇li̇k",
    },
    {
      word: "charming",
      pron: "'çarming'",
      mean: "çeki̇ci̇",
    },
    {
      word: "chatter",
      pron: "'çetır'",
      mean: "gevezeli̇k yapmak",
    },
    {
      word: "cheap",
      pron: "'çiip'",
      mean: "ucuz",
    },
    {
      word: "cheat",
      pron: "'çiit'",
      mean: "hi̇leci̇",
    },
    {
      word: "check",
      pron: "'çek'",
      mean: "kontrol etmek",
    },
    {
      word: "cheer",
      pron: "'çiır'",
      mean: "neşe",
    },
    {
      word: "cheese",
      pron: "'çiiz'",
      mean: "peyni̇r",
    },
    {
      word: "chemical",
      pron: "'kemıkl'",
      mean: "ki̇myasal",
    },
    {
      word: "cherry",
      pron: "'çeri'",
      mean: "ki̇raz",
    },
    {
      word: "chess",
      pron: "'çes'",
      mean: "satranç",
    },
    {
      word: "chewing-gum",
      pron: "'çuving gam'",
      mean: "sakiz",
    },
    {
      word: "chicken",
      pron: "'çikın'",
      mean: "pi̇li̇ç",
    },
    {
      word: "chief",
      pron: "'çif'",
      mean: "şef",
    },
    {
      word: "child",
      pron: "'çayld'",
      mean: "çocuk",
    },
    {
      word: "childhood",
      pron: "'çayldhuud'",
      mean: "çocukluk",
    },
    {
      word: "chin",
      pron: "'çin'",
      mean: "çene",
    },
    {
      word: "choose",
      pron: "'çuz'",
      mean: "seçmek",
    },
    {
      word: "christian",
      pron: "'krisçın'",
      mean: "hiri̇sti̇yan",
    },
    {
      word: "church",
      pron: "'çörç'",
      mean: "ki̇li̇se",
    },
    {
      word: "cinema",
      pron: "'sinıma'",
      mean: "si̇nema",
    },
    {
      word: "circle",
      pron: "'sörkl'",
      mean: "çember",
    },
    {
      word: "circular",
      pron: "'sörkulır'",
      mean: "yuvarlak",
    },
    {
      word: "circumstances",
      pron: "'sörkımstansıs'",
      mean: "durum",
    },
    {
      word: "circus",
      pron: "'sörkıs'",
      mean: "si̇rk",
    },
    {
      word: "citizen",
      pron: "'sitizn'",
      mean: "yurttaş",
    },
    {
      word: "city",
      pron: "'siti'",
      mean: "kent",
    },
    {
      word: "civic",
      pron: "'sivik'",
      mean: "kente ai̇t",
    },
    {
      word: "civil",
      pron: "'sivl'",
      mean: "si̇vi̇l",
    },
    {
      word: "claim",
      pron: "'kleym'",
      mean: "talep",
    },
    {
      word: "clasp",
      pron: "'klasp'",
      mean: "sikica tutmak",
    },
    {
      word: "class",
      pron: "'klas'",
      mean: "sinif",
    },
    {
      word: "classic",
      pron: "'klesik'",
      mean: "klasi̇k",
    },
    {
      word: "clean",
      pron: "'kliin'",
      mean: "temi̇z",
    },
    {
      word: "clear",
      pron: "'kliır'",
      mean: "berrak",
    },
    {
      word: "clerk",
      pron: "'klark'",
      mean: "memur",
    },
    {
      word: "clever",
      pron: "'klevır'",
      mean: "akilli",
    },
    {
      word: "climb",
      pron: "'klaymb'",
      mean: "tirmanmak",
    },
    {
      word: "cloakroom",
      pron: "'kloukrum'",
      mean: "tuvalet",
    },
    {
      word: "clock",
      pron: "'klok'",
      mean: "saat",
    },
    {
      word: "close",
      pron: "'klouz'",
      mean: "yakin, son, kapatmak",
    },
    {
      word: "clothes",
      pron: "'klouthz'",
      mean: "gi̇ysi̇ler",
    },
    {
      word: "cloud",
      pron: "'klaud'",
      mean: "bulut",
    },
    {
      word: "club",
      pron: "'klab'",
      mean: "kulüp",
    },
    {
      word: "coach",
      pron: "'kouç'",
      mean: "antrenör ",
    },
    {
      word: "coal",
      pron: "'kol'",
      mean: "kömür",
    },
    {
      word: "coat",
      pron: "'kout'",
      mean: "palto",
    },
    {
      word: "cobweb",
      pron: "'kobveb'",
      mean: "örümcek aği",
    },
    {
      word: "coconut",
      pron: "'kokonat'",
      mean: "hi̇ndi̇stan cevi̇zi̇",
    },
    {
      word: "coffee",
      pron: "'kafi'",
      mean: "kahve",
    },
    {
      word: "coffin",
      pron: "'kofin'",
      mean: "tabut",
    },
    {
      word: "coin",
      pron: "'koin'",
      mean: "madeni̇ para",
    },
    {
      word: "cold",
      pron: "'kould'",
      mean: "soğuk",
    },
    {
      word: "collar",
      pron: "'kolır'",
      mean: "yaka, tasma",
    },
    {
      word: "collect",
      pron: "'kolekt'",
      mean: "toplamak",
    },
    {
      word: "color",
      pron: "'kalır'",
      mean: "renk",
    },
    {
      word: "comb",
      pron: "'kom'",
      mean: "tarak",
    },
    {
      word: "come",
      pron: "'kam'",
      mean: "gelmek",
    },
    {
      word: "comfort",
      pron: "'kanfırt'",
      mean: "konfor",
    },
    {
      word: "comfortable",
      pron: "'kanfırtıbıl'",
      mean: "konforlu",
    },
    {
      word: "command",
      pron: "'komand'",
      mean: "kumanda etmek",
    },
    {
      word: "commence",
      pron: "'kımens'",
      mean: "başlamak",
    },
    {
      word: "commercial",
      pron: "'kımörşıl'",
      mean: "ti̇cari̇",
    },
    {
      word: "common",
      pron: "'kamın'",
      mean: "sade",
    },
    {
      word: "community",
      pron: "'komüniti'",
      mean: "toplum",
    },
    {
      word: "company",
      pron: "'kampany'",
      mean: "şi̇rket",
    },
    {
      word: "comparatively",
      pron: "'kımpırativli'",
      mean: "mukayeseli̇ olarak",
    },
    {
      word: "compare",
      pron: "'kımpeyr'",
      mean: "karşılaştırmak",
    },
    {
      word: "compass",
      pron: "'kampıs'",
      mean: "pusula, pergel",
    },
    {
      word: "compete",
      pron: "'kımpiit'",
      mean: "yarişmak",
    },
    {
      word: "competition",
      pron: "'kompitişn'",
      mean: "rekabet",
    },
    {
      word: "complain",
      pron: "'kımpleyn'",
      mean: "yakinmak",
    },
    {
      word: "complete",
      pron: "'kımpliit'",
      mean: "tüm, bitmiş",
    },
    {
      word: "compliment",
      pron: "'komplimınt'",
      mean: "i̇lti̇fat",
    },
    {
      word: "compound",
      pron: "'kompaund'",
      mean: "bi̇rleşi̇k",
    },
    {
      word: "concern",
      pron: "'konsörn'",
      mean: "kaygı",
    },
    {
      word: "concert",
      pron: "'kansıt'",
      mean: "konser",
    },
    {
      word: "conclude",
      pron: "'konkluud'",
      mean: "karar vermek",
    },
    {
      word: "condition",
      pron: "'kındişın'",
      mean: "durum",
    },
    {
      word: "confess",
      pron: "'kınfes'",
      mean: "i̇ti̇raf etmek",
    },
    {
      word: "confidence",
      pron: "'konfidıns'",
      mean: "güven",
    },
    {
      word: "confuse",
      pron: "'kınfüuz'",
      mean: "karişmak",
    },
    {
      word: "congratulate",
      pron: "'kongraçuleyt'",
      mean: "kutlamak",
    },
    {
      word: "connect",
      pron: "'konekt'",
      mean: "bi̇rleşti̇rmek",
    },
    {
      word: "conquer",
      pron: "'konkuır'",
      mean: "i̇şgal etmek",
    },
    {
      word: "conscience",
      pron: "'konşıns'",
      mean: "vi̇cdan, bi̇li̇nç",
    },
    {
      word: "conscious",
      pron: "'konşıs'",
      mean: "bi̇li̇nçli̇",
    },
    {
      word: "consider",
      pron: "'konsidır'",
      mean: "göz önüne almak, düşünmek",
    },
    {
      word: "consist",
      pron: "'kınsist'",
      mean: "oluşmak",
    },
    {
      word: "consul",
      pron: "'konsl'",
      mean: "konsolos",
    },
    {
      word: "consult",
      pron: "'kınsalt'",
      mean: "danişmak",
    },
    {
      word: "consultatio",
      pron: "'konsltey'",
      mean: "toplanti",
    },
    {
      word: "contain",
      pron: "'konteyn'",
      mean: "kapsamak",
    },
    {
      word: "container",
      pron: "'konteynı'",
      mean: "kap",
    },
    {
      word: "content",
      pron: "'kontent'",
      mean: "tatmi̇n olmuş",
    },
    {
      word: "contents",
      pron: "'kontents'",
      mean: "i̇çeri̇k",
    },
    {
      word: "continuous",
      pron: "'kontinuıs'",
      mean: "sürekli̇",
    },
    {
      word: "contrary",
      pron: "'kontrıri'",
      mean: "tersi̇ne",
    },
    {
      word: "contrast",
      pron: "'kıntrast'",
      mean: "karşilaştirmak",
    },
    {
      word: "control",
      pron: "'kontroul'",
      mean: "kontrol etmek",
    },
    {
      word: "convenienc",
      pron: "'konvinyı'",
      mean: "uygunluk",
    },
    {
      word: "cook",
      pron: "'kuuk'",
      mean: "yemek pi̇şi̇rmek",
    },
    {
      word: "cool",
      pron: "'kuul'",
      mean: "seri̇n",
    },
    {
      word: "cop",
      pron: "'kap'",
      mean: "poli̇s",
    },
    {
      word: "copper",
      pron: "'kapır'",
      mean: "bakir",
    },
    {
      word: "copy",
      pron: "'kopi'",
      mean: "kopyalamak",
    },
    {
      word: "corn",
      pron: "'korn'",
      mean: "eki̇n, misir",
    },
    {
      word: "corner",
      pron: "'kornır'",
      mean: "köşe",
    },
    {
      word: "correct",
      pron: "'korekt'",
      mean: "hatasiz",
    },
    {
      word: "cost",
      pron: "'kost'",
      mean: "mali̇yet",
    },
    {
      word: "costly",
      pron: "'kostli'",
      mean: "pahali",
    },
    {
      word: "cottage",
      pron: "'kotıc'",
      mean: "köy evi̇",
    },
    {
      word: "cotton",
      pron: "'kotn'",
      mean: "pamuk",
    },
    {
      word: "cough",
      pron: "'kof'",
      mean: "öksürmek",
    },
    {
      word: "council",
      pron: "'kaunsl'",
      mean: "konsey",
    },
    {
      word: "count",
      pron: "'kaunt'",
      mean: "saymak",
    },
    {
      word: "country",
      pron: "'kantri'",
      mean: "ülke ",
    },
    {
      word: "couple",
      pron: "'kapıl'",
      mean: "çi̇ft",
    },
    {
      word: "courage",
      pron: "'karıc'",
      mean: "cesaret",
    },
    {
      word: "course",
      pron: "'kors'",
      mean: "kurs",
    },
    {
      word: "court",
      pron: "'kort'",
      mean: "mahkeme, kort",
    },
    {
      word: "cousin",
      pron: "'kazn'",
      mean: "kuzen",
    },
    {
      word: "cover",
      pron: "'kavır'",
      mean: "kaplamak",
    },
    {
      word: "cow",
      pron: "'kau'",
      mean: "i̇nek",
    },
    {
      word: "coward",
      pron: "'kauırd'",
      mean: "korkak",
    },
    {
      word: "crack",
      pron: "'krek'",
      mean: "kirmak",
    },
    {
      word: "crash",
      pron: "'kreş'",
      mean: "çarpişmak",
    },
    {
      word: "crazy",
      pron: "'kreyzi'",
      mean: "kreyzi",
    },
    {
      word: "cream",
      pron: "'kriim'",
      mean: "krema",
    },
    {
      word: "creation",
      pron: "'krieyşın'",
      mean: "yaratiş",
    },
    {
      word: "creature",
      pron: "'kriiçır'",
      mean: "yaratik",
    },
    {
      word: "crime",
      pron: "'kraym'",
      mean: "suç",
    },
    {
      word: "criminal",
      pron: "'kriminl'",
      mean: "suçlu",
    },
    {
      word: "criticize",
      pron: "'kritisayz'",
      mean: "eleşti̇rmek",
    },
    {
      word: "crop",
      pron: "'krop'",
      mean: "ürün (toprak ürünü)",
    },
    {
      word: "cross",
      pron: "'kros'",
      mean: "çapraz",
    },
    {
      word: "crossing",
      pron: "'krosing'",
      mean: "geçi̇t",
    },
    {
      word: "crossroads",
      pron: "'krosroud'",
      mean: "kavşak",
    },
    {
      word: "crowd",
      pron: "'kraud'",
      mean: "kalabalik",
    },
    {
      word: "crown",
      pron: "'kraun'",
      mean: "taç",
    },
    {
      word: "cruel",
      pron: "'kruıl'",
      mean: "zali̇m",
    },
    {
      word: "cruise",
      pron: "'kruuz'",
      mean: "deni̇z gezi̇si̇",
    },
    {
      word: "crush",
      pron: "'kraş'",
      mean: "kirmak",
    },
    {
      word: "cry",
      pron: "'kray'",
      mean: "ağlamak",
    },
    {
      word: "cube",
      pron: "'küub'",
      mean: "küp",
    },
    {
      word: "cucumber",
      pron: "'küukambr'",
      mean: "hiyar",
    },
    {
      word: "cultivate",
      pron: "'kaltıveyt'",
      mean: "toprakla uğraşmak",
    },
    {
      word: "culture",
      pron: "'kalçır'",
      mean: "kültür",
    },
    {
      word: "cup",
      pron: "'kap'",
      mean: "kupa",
    },
    {
      word: "cure",
      pron: "'küur'",
      mean: "i̇yi̇leşti̇rmek",
    },
    {
      word: "curiosity",
      pron: "'küriositi'",
      mean: "merak",
    },
    {
      word: "curious",
      pron: "'küriyıs'",
      mean: "merakli, olağandişi",
    },
    {
      word: "curl",
      pron: "'körl'",
      mean: "kivirmak",
    },
    {
      word: "current",
      pron: "'karınt'",
      mean: "kur",
    },
    {
      word: "curse",
      pron: "'körs'",
      mean: "lanet",
    },
    {
      word: "curtain",
      pron: "'körtn'",
      mean: "perde",
    },
    {
      word: "curve",
      pron: "'körv'",
      mean: "eğri̇",
    },
    {
      word: "custom",
      pron: "'kastım'",
      mean: "gelenek",
    },
    {
      word: "customer",
      pron: "'kastımır'",
      mean: "müşteri̇",
    },
    {
      word: "customs",
      pron: "'kastımz'",
      mean: "gümrük",
    },
    {
      word: "cut",
      pron: "'kat'",
      mean: "kesmek",
    },
    {
      word: "cycle",
      pron: "'saykl'",
      mean: "bi̇si̇klet, tur",
    },
    //d - 583
    {
      word: "dad",
      pron: "'ded'",
      mean: "BABA",
    },
    {
      word: "Daily",
      pron: "'deyli'",
      mean: "GÜNLÜK",
    },
    {
      word: "Dam",
      pron: "'dem'",
      mean: "BARAJ",
    },
    {
      word: "Damp",
      pron: "'demp'",
      mean: "NEMLİ",
    },
    {
      word: "Dance",
      pron: "'dens'",
      mean: "DANS",
    },
    {
      word: "Danger",
      pron: "'deyncır'",
      mean: "TEHLİKE",
    },
    {
      word: "Dangerous",
      pron: "'deyncrıs'",
      mean: "TEHLİKELİ",
    },
    {
      word: "Dare",
      pron: "'deyr'",
      mean: "CESARETLİ",
    },
    {
      word: "Dark",
      pron: "'dark'",
      mean: "KARANLIK",
    },
    {
      word: "Dash",
      pron: "'deş'",
      mean: "FIRLAMAK",
    },
    {
      word: "Date",
      pron: "'deyt'",
      mean: "GÜNÜN TARİHİ",
    },
    {
      word: "Daughter",
      pron: "'dotır'",
      mean: "KIZ ÇOCUK",
    },
    {
      word: "Day",
      pron: "'dey'",
      mean: "GÜN",
    },
    {
      word: "Dead",
      pron: "'ded'",
      mean: "ÖLÜ",
    },
    {
      word: "Deal",
      pron: "'diıl'",
      mean: "ALIP SATMAK",
    },
    {
      word: "Dear",
      pron: "'diır'",
      mean: "SEVGİLİ",
    },
    {
      word: "Death",
      pron: "'deth'",
      mean: "ÖLÜM",
    },
    {
      word: "Deceive",
      pron: "'dısiiv'",
      mean: "KANDIRMAK",
    },
    {
      word: "December",
      pron: "'dısembır'",
      mean: "ARALIK",
    },
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * words.length);
    console.log(random);

    document.getElementById("word").textContent = words[random].word;
    document.querySelector(".mean").textContent = words[random].mean;
    document.querySelector(".pron").textContent = words[random].pron;
  });
})();

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
