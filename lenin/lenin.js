const links = [
    {
        "name": "От какого наследства мы отказываемся?",
        "url": "https://hrono.ru/libris/lib_l/lenin_nasled.html"
    },
    {
        "name": "Как чуть не потухла “Искра”?",
        "url": "https://hrono.ru/libris/lib_l/len_iskra.html"
    },
    {
        "name": "Что делать? Наболевшие вопросы ",
        "url": "https://hrono.ru/libris/lib_l/lenin_delat.html"
    },
    {
        "name": "Материализм и эмпириокритицизм. ",
        "url": "http://rummuseum.info/node/4431"
    },
    {
        "name": "Материализм и эмпириокритицизм",
        "url": "http://rummuseum.info/node/4676"
    },
    {
        "name": "Карл Маркс. ",
        "url": "https://hrono.ru/libris/lib_l/lenin_marx.html"
    },
    {
        "name": "Задачи ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t001.php"
    },
    {
        "name": "Европейская война и ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t008.php"
    },
    {
        "name": "Война и российская ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t015.php"
    },
    {
        "name": "Речь на реферате Г. ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t024.php"
    },
    {
        "name": "Реферат на тему ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t027.php"
    },
    {
        "name": "Один немецкий голос ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t094.php"
    },
    {
        "name": "О национальной гордости великороссов</a>, ",
        "url": "http://www.etnosy.ru/node/1267"
    },
    {
        "name": "Философские тетради",
        "url": "http://rummuseum.info/node/4669"
    },
    {
        "name": "Проект декларации ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t128.php"
    },
    {
        "name": "Конференция ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t161.php"
    },
    {
        "name": "К иллюстрации ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t180.php"
    },
    {
        "name": "Главный труд ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t277.php"
    },
    {
        "name": "О поражении своего ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t286.php"
    },
    {
        "name": "К оценке лозунга ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t298.php"
    },
    {
        "name": "Вопрос о мире",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t301.php"
    },
    {
        "name": "Апрельские тезисы или Задачи пролетариата в данной ",
        "url": "https://hrono.ru/libris/lib_l/lenin_apr.php"
    },
    {
        "name": "О двоевластии",
        "url": "https://hrono.ru/libris/lib_l/lenin2vlasti.html"
    },
    {
        "name": "Государство и революция. Учение ",
        "url": "http://www.izmy.info/node/905"
    },
    {
        "name": "Марксизм и восстание",
        "url": "https://hrono.ru/libris/lib_l/lenin_vosst.html"
    },
    {
        "name": "Письмо к товарищам большевикам, участвующим на ",
        "url": "https://hrono.ru/libris/lib_l/len19171008.html"
    },
    {
        "name": "Выступление В. И. Ленина на заседании ЦК ",
        "url": "http://doc20vek.ru/node/24"
    },
    {
        "name": "Резолюция В. И. Ленина о вооруженном ",
        "url": "http://doc20vek.ru/node/26"
    },
    {
        "name": "Воззвание Военно-революционного ",
        "url": "http://doc20vek.ru/node/48"
    },
    {
        "name": "Выступление В. И. Ленина на совещании ",
        "url": "http://doc20vek.ru/node/165"
    },
    {
        "name": "Декреты о создании Красной армии",
        "url": "https://hrono.ru/libris/lib_l/dekret_rkka.html"
    },
    {
        "name": "Политический отчет Центрального Комитета",
        "url": "https://hrono.ru/libris/lenin/19180307ck.php"
    },
    {
        "name": "Заключительное слово по политическому отчету ",
        "url": "https://hrono.ru/libris/lenin/19180308zak.php"
    },
    {
        "name": "Резолюция о войне и мире",
        "url": "https://hrono.ru/libris/lenin/19180308rez.php"
    },
    {
        "name": "Выступления против поправок Троцкого к резолюции ",
        "url": "https://hrono.ru/libris/lenin/19180308trock.php"
    },
    {
        "name": "Выступление против заявления группы левых",
        "url": "https://hrono.ru/libris/lenin/19180308levy.php"
    },
    {
        "name": "Дополнение к резолюции о войне и мире",
        "url": "https://hrono.ru/libris/lenin/19180308dop.php"
    },
    {
        "name": "Выступление против поправки Зиновьева к дополнению ",
        "url": "https://hrono.ru/libris/lenin/19180308zin.php"
    },
    {
        "name": "Предложение по поводу резолюции о войне и мире",
        "url": "https://hrono.ru/libris/lenin/19180308dop2.php"
    },
    {
        "name": "Доклад о пересмотре программы и изменении названия ",
        "url": "https://hrono.ru/libris/lenin/19180308prog.php"
    },
    {
        "name": "Резолюция об изменении названия партии и партийной ",
        "url": "https://hrono.ru/libris/lenin/19180308imja.php"
    },
    {
        "name": "Предложение по вопросу о пересмотре программы ",
        "url": "https://hrono.ru/libris/lenin/19180308pred.php"
    },
    {
        "name": "Выступление по поводу предложения Мгеладзе о ",
        "url": "https://hrono.ru/libris/lenin/19180308org.php"
    },
    {
        "name": "Выступление против поправки Ларина к названию ",
        "url": "https://hrono.ru/libris/lenin/19180308lar.php"
    },
    {
        "name": "Выступление против поправки Пельше к резолюции о ",
        "url": "https://hrono.ru/libris/lenin/19180308pelsh.php"
    },
    {
        "name": "Выступления против поправки Бухарина к резолюции о ",
        "url": "https://hrono.ru/libris/lenin/19180308buh.php"
    },
    {
        "name": "Речь по вопросу о выборах в центральный комитет",
        "url": "https://hrono.ru/libris/lenin/19180308vyb.php"
    },
    {
        "name": "Резолюция по поводу отказа левых коммунистов",
        "url": "https://hrono.ru/libris/lenin/19180308otk.php"
    },
    {
        "name": "Доклад о ратификации мирного договора",
        "url": "https://hrono.ru/libris/lenin/19180314dok.php"
    },
    {
        "name": "Резолюция о ратификации брестского договора",
        "url": "https://hrono.ru/libris/lenin/19180314ratif.php"
    },
    {
        "name": "Интервью корреспонденту газеты Daily News",
        "url": "https://hrono.ru/libris/lenin/19180323inter.php"
    },
    {
        "name": "Предисловие к сборнику Против течения",
        "url": "https://hrono.ru/libris/lenin/19180326pred.php"
    },
    {
        "name": "Заключительное слово по докладу о ратификации ",
        "url": "https://hrono.ru/libris/lenin/19180315zak.php"
    },
    {
        "name": "О характере наших газет",
        "url": "https://hrono.ru/libris/lib_l/lenin_smi.html"
    },
    {
        "name": "Пролетарская революция и ренегат ",
        "url": "http://www.izmy.info/node/1062"
    },
    {
        "name": "О демократии и диктатуре",
        "url": "https://hrono.ru/libris/lib_l/lenin_demo.html"
    },
    {
        "name": "О продовольственном налоге. ",
        "url": "https://hrono.ru/libris/lib_l/lenin_nalog.html"
    },
    {
        "name": "О значении воинствующего ",
        "url": "http://rummuseum.info/node/4673"
    },
    {
        "name": "Сталин",
        "url": "https://hrono.ru/libris/stalin/16-44.php"
    },
    {
        "name": "Апрельские тезисы",
        "url": "https://hrono.ru/libris/lib_l/lenin_apr.php"
    },
    {
        "name": "Апрельские тезисы",
        "url": "http://www.rummuseum.info/node/5030"
    },
    {
        "name": "Война и российская ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t015.php"
    },
    {
        "name": "Вопрос о мире",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t301.php"
    },
    {
        "name": "Главный труд ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t277.php"
    },
    {
        "name": "Государство и революция. Учение ",
        "url": "http://www.izmy.info/node/905"
    },
    {
        "name": "Декреты о создании Красной армии",
        "url": "https://hrono.ru/libris/lib_l/dekret_rkka.html"
    },
    {
        "name": "Европейская война",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t008.php"
    },
    {
        "name": "Задачи ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t001.php"
    },
    {
        "name": "Задачи пролетариата в данной ",
        "url": "https://hrono.ru/libris/lib_l/lenin_apr.html"
    },
    {
        "name": "Как чуть не потухла “Искра”?",
        "url": "https://hrono.ru/libris/lib_l/len_iskra.html"
    },
    {
        "name": "Карл Маркс. ",
        "url": "https://hrono.ru/libris/lib_l/lenin_marx.html"
    },
    {
        "name": "К иллюстрации ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t180.php"
    },
    {
        "name": "Конференция ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t161.php"
    },
    {
        "name": "К оценке лозунга ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t298.php"
    },
    {
        "name": "Марксизм и восстание",
        "url": "https://hrono.ru/libris/lib_l/lenin_vosst.html"
    },
    {
        "name": "Материализм и эмпириокритицизм",
        "url": "http://rummuseum.info/node/4676"
    },
    {
        "name": "О демократии и диктатуре",
        "url": "https://hrono.ru/libris/lib_l/lenin_demo.html"
    },
    {
        "name": "Один немецкий голос ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t094.php"
    },
    {
        "name": "О двоевластии",
        "url": "https://hrono.ru/libris/lib_l/lenin2vlasti.html"
    },
    {
        "name": "О значении воинствующего ",
        "url": "http://rummuseum.info/node/4673"
    },
    {
        "name": "О национальной гордости великороссов",
        "url": "http://www.etnosy.ru/node/1267"
    },
    {
        "name": "О продовольственном налоге. ",
        "url": "https://hrono.ru/libris/lib_l/lenin_nalog.html"
    },
    {
        "name": "О поражении своего ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t286.php"
    },
    {
        "name": "От какого наследства мы отказываемся?",
        "url": "https://hrono.ru/libris/lib_l/lenin_nasled.html"
    },
    {
        "name": "О характере наших газет ",
        "url": "https://hrono.ru/libris/lib_l/lenin_smi.html"
    },
    {
        "name": "Письмо к товарищам большевикам, участвующим на ",
        "url": "https://hrono.ru/libris/lib_l/len19171008.html"
    },
    {
        "name": "Сталин",
        "url": "https://hrono.ru/libris/stalin/16-44.html"
    },
    {
        "name": "Проект декларации ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t128.php"
    },
    {
        "name": "Пролетарская революция и ренегат ",
        "url": "http://www.izmy.info/node/1062"
    },
    {
        "name": "Реферат на тему ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t027.php"
    },
    {
        "name": "Речь на реферате Г. ",
        "url": "http://1914ww.ru/libris/lib_l/lenin26t024.php"
    },
    {
        "name": "Философские тетради",
        "url": "http://rummuseum.info/node/4669"
    },
    {
        "name": "Что делать? Наболевшие вопросы ",
        "url": "https://hrono.ru/libris/lib_l/lenin_delat.html"
    },
    {
        "name": "Из стенограмма выступления В.И. Ленина с политическим отчетом ЦК РКП(б) ",
        "url": "https://hrono.ru/dokum/192_dok/19200920len.html"
    },
    {
        "name": "Стенограмма заключительного слова В.И. Ленина в прениях по ",
        "url": "https://hrono.ru/dokum/192_dok/19200920lenin.html"
    },
    {
        "name": "Письмо В.И. Ленина Ф.Э. Дзержинскому</a>. 19 мая 1922 г.",
        "url": "https://hrono.ru/dokum/192_dok/19220519len.html"
    },
    {
        "name": "Записка В.И. Ленина И.С. ",
        "url": "https://hrono.ru/dokum/192_dok/19220917len.html"
    },
    {
        "name": "Протест В.И.Ленина ",
        "url": "https://hrono.ru/dokum/192_dok/19221208lenin.html"
    },
    {
        "name": "Из сводок о деятельности центральной и местных комиссий",
        "url": "https://hrono.ru/dokum/192_dok/192102dezer.php"
    },
    {
        "name": "По поводу так называемого вопроса о рынках (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D1%82%D0%B0%D0%BA_%D0%BD%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%D0%BE%D0%B3%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B0_%D0%BE_%D1%80%D1%8B%D0%BD%D0%BA%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Что такое «друзья народа» и как они воюют против социал-демократов? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A7%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%C2%AB%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B0%C2%BB_%D0%B8_%D0%BA%D0%B0%D0%BA_%D0%BE%D0%BD%D0%B8_%D0%B2%D0%BE%D1%8E%D1%8E%D1%82_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Экономическое содержание народничества и критика его в книге г. Струве (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0_%D0%B8_%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B5%D0%B3%D0%BE_%D0%B2_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B5_%D0%B3._%D0%A1%D1%82%D1%80%D1%83%D0%B2%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Объяснение закона о штрафах, взимаемых с рабочих на фабриках и заводах (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_%D0%BE_%D1%88%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%85,_%D0%B2%D0%B7%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC%D1%8B%D1%85_%D1%81_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%BD%D0%B0_%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D0%BA%D0%B0%D1%85_%D0%B8_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Гимназические хозяйства и исправительные гимназии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%93%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B0_%D0%B8_%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К рабочим и работницам фабрики Торнтона (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%BC_%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D1%86%D0%B0%D0%BC_%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D0%BA%D0%B8_%D0%A2%D0%BE%D1%80%D0%BD%D1%82%D0%BE%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О чем думают наши министры? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%87%D0%B5%D0%BC_%D0%B4%D1%83%D0%BC%D0%B0%D1%8E%D1%82_%D0%BD%D0%B0%D1%88%D0%B8_%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D1%8B%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект и объяснение программы социал-демократической партии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B8_%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Царскому правительству (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A6%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%BC%D1%83_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Фридрих Энгельс (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A4%D1%80%D0%B8%D0%B4%D1%80%D0%B8%D1%85_%D0%AD%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К характеристике экономического романтизма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D1%85%D0%B0%D1%80%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B5_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Новый фабричный закон (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Кустарная перепись 1894-95 года в Пермской губернии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D1%83%D1%81%D1%82%D0%B0%D1%80%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%81%D1%8C_1894-95_%D0%B3%D0%BE%D0%B4%D0%B0_%D0%B2_%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%BE%D0%B9_%D0%B3%D1%83%D0%B1%D0%B5%D1%80%D0%BD%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "По поводу одной газетной заметки (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9_%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D0%BD%D0%BE%D0%B9_%D0%B7%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Задачи русских социал-демократов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Перлы народнического прожектерства (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B5%D1%80%D0%BB%D1%8B_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%B6%D0%B5%D0%BA%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "От какого наследства мы отказываемся? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82_%D0%BA%D0%B0%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0_%D0%BC%D1%8B_%D0%BE%D1%82%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%D1%81%D1%8F%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К вопросу о нашей фабрично-заводской статистике (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%BD%D0%B0%D1%88%D0%B5%D0%B9_%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D0%BE-%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу А. Богданова (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%90._%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Заметка к вопросу о теории рынков (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B0_%D0%BA_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D0%B8_%D1%80%D1%8B%D0%BD%D0%BA%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Развитие капитализма в России (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу Р. Гвоздева (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%A0._%D0%93%D0%B2%D0%BE%D0%B7%D0%B4%D0%B5%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу Парвуса (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%9F%D0%B0%D1%80%D0%B2%D1%83%D1%81%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу Торгово-промышленная Россия (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BE-%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Еще к вопросу о теории реализации (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D1%89%D0%B5_%D0%BA_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D0%B8_%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу К. Каутского Аграрный вопрос (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%9A._%D0%9A%D0%B0%D1%83%D1%82%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%90%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Капитализм в сельском хозяйстве (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC_%D0%B2_%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%BC_%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу Гобсона (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%93%D0%BE%D0%B1%D1%81%D0%BE%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Ответ г. П. Нежданову (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82%D0%B2%D0%B5%D1%82_%D0%B3._%D0%9F._%D0%9D%D0%B5%D0%B6%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Протест российских социал-демократов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%B5%D1%81%D1%82_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Статьи для «Рабочей Газеты» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D0%B8_%D0%B4%D0%BB%D1%8F_%C2%AB%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B9_%D0%93%D0%B0%D0%B7%D0%B5%D1%82%D1%8B%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо к редакторской группе (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Наша программа (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%88%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Наша ближайшая задача (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%88%D0%B0_%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B0%D1%8F_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Насущный вопрос (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%81%D1%83%D1%89%D0%BD%D1%8B%D0%B9_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу К. Каутского Бернштейн и социал-демократическая программа (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%9A._%D0%9A%D0%B0%D1%83%D1%82%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%91%D0%B5%D1%80%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD_%D0%B8_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект программы нашей партии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%BD%D0%B0%D1%88%D0%B5%D0%B9_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Попятное направление в русской социал-демократии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D0%BF%D1%8F%D1%82%D0%BD%D0%BE%D0%B5_%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B9_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О промышленных судах (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D1%83%D0%B4%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О стачках (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%81%D1%82%D0%B0%D1%87%D0%BA%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рецензия на книгу Прокоповича (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D1%83_%D0%9F%D1%80%D0%BE%D0%BA%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "По поводу «Profession de foi»",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%C2%ABProfession_de_foi%C2%BB"
    },
    {
        "name": "Проект заявления редакции «Искры» и «Зари» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%B8_%C2%AB%D0%98%D1%81%D0%BA%D1%80%D1%8B%C2%BB_%D0%B8_%C2%AB%D0%97%D0%B0%D1%80%D0%B8%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Как чуть не потухла «Искра»? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BA_%D1%87%D1%83%D1%82%D1%8C_%D0%BD%D0%B5_%D0%BF%D0%BE%D1%82%D1%83%D1%85%D0%BB%D0%B0_%C2%AB%D0%98%D1%81%D0%BA%D1%80%D0%B0%C2%BB%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект соглашения (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Заявление редакции «Искры» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%B8_%C2%AB%D0%98%D1%81%D0%BA%D1%80%D1%8B%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Предисловие к брошюре «Майские дни в Харькове» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B5_%D0%BA_%D0%B1%D1%80%D0%BE%D1%88%D1%8E%D1%80%D0%B5_%C2%AB%D0%9C%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B4%D0%BD%D0%B8_%D0%B2_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Насущные задачи нашего движения (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%81%D1%83%D1%89%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_%D0%BD%D0%B0%D1%88%D0%B5%D0%B3%D0%BE_%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Китайская война (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Раскол в заграничном союзе русских социал-демократов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B0%D1%81%D0%BA%D0%BE%D0%BB_%D0%B2_%D0%B7%D0%B0%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%BC_%D1%81%D0%BE%D1%8E%D0%B7%D0%B5_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Запись 29 декабря 1900 года (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C_29_%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8F_1900_%D0%B3%D0%BE%D0%B4%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Отдача в солдаты 183-х студентов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82%D0%B4%D0%B0%D1%87%D0%B0_%D0%B2_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%8B_183-%D1%85_%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Случайные заметки (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рабочая партия и крестьянство (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8F_%D0%B8_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD%D1%81%D1%82%D0%B2%D0%BE_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "С чего начать? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1_%D1%87%D0%B5%D0%B3%D0%BE_%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Что делать? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A7%D1%82%D0%BE_%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Материалы к выработке программы РСДРП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%BA_%D0%B2%D1%8B%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Признаки банкротства (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BA%D0%B8_%D0%B1%D0%B0%D0%BD%D0%BA%D1%80%D0%BE%D1%82%D1%81%D1%82%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Из экономической жизни России (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%98%D0%B7_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Доклад редакции «Искры» совещанию (конференции) комитетов РСДРП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%B8_%C2%AB%D0%98%D1%81%D0%BA%D1%80%D1%8B%C2%BB_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8E_(%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D0%B8)_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%BE%D0%B2_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Аграрная программа русской социал-демократии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%90%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B9_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо к земцам (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D0%B7%D0%B5%D0%BC%D1%86%D0%B0%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О группе «Борьба» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5_%C2%AB%D0%91%D0%BE%D1%80%D1%8C%D0%B1%D0%B0%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо «Северному союзу РСДРП» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%C2%AB%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%BE%D0%BC%D1%83_%D1%81%D0%BE%D1%8E%D0%B7%D1%83_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Почему социал-демократия должна объявить решительную и беспощадную войну социалистам-революционерам? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%8F_%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D0%B0_%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%B8%D1%82%D1%8C_%D1%80%D0%B5%D1%88%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%83%D1%8E_%D0%B8_%D0%B1%D0%B5%D1%81%D0%BF%D0%BE%D1%89%D0%B0%D0%B4%D0%BD%D1%83%D1%8E_%D0%B2%D0%BE%D0%B9%D0%BD%D1%83_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B0%D0%BC-%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%B0%D0%BC%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Революционный авантюризм (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D1%8E%D1%80%D0%B8%D0%B7%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект нового закона о стачках (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_%D0%BE_%D1%81%D1%82%D0%B0%D1%87%D0%BA%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо к товарищу о наших организационных задачах (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D1%83_%D0%BE_%D0%BD%D0%B0%D1%88%D0%B8%D1%85_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О демонстрациях (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Политическая борьба и политиканство (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B0_%D0%B8_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Вульгарный социализм и народничество, воскрешаемые социалистами-революционерами (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%92%D1%83%D0%BB%D1%8C%D0%B3%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC_%D0%B8_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE,_%D0%B2%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%88%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B0%D0%BC%D0%B8-%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Основной тезис против эсеров (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D1%82%D0%B5%D0%B7%D0%B8%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D1%8D%D1%81%D0%B5%D1%80%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О задачах социал-демократического движения (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Новые события и старые вопросы (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F_%D0%B8_%D1%81%D1%82%D0%B0%D1%80%D1%8B%D0%B5_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К учащимся средних школ (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D1%83%D1%87%D0%B0%D1%89%D0%B8%D0%BC%D1%81%D1%8F_%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D1%85_%D1%88%D0%BA%D0%BE%D0%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О группе «Свобода» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5_%C2%AB%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B0%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Отрывок из статьи против эсеров (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82%D1%80%D1%8B%D0%B2%D0%BE%D0%BA_%D0%B8%D0%B7_%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D1%8D%D1%81%D0%B5%D1%80%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К вопросу о докладах комитетов и групп РСДРП общепартийному съезду (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%B4%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0%D1%85_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%BE%D0%B2_%D0%B8_%D0%B3%D1%80%D1%83%D0%BF%D0%BF_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D0%BE%D0%B1%D1%89%D0%B5%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D0%BE%D0%BC%D1%83_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Московские зубатовцы в Петербурге (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5_%D0%B7%D1%83%D0%B1%D0%B0%D1%82%D0%BE%D0%B2%D1%86%D1%8B_%D0%B2_%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Послесловие к «Извещению об образовании «Организационного комитета»» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B5_%D0%BA_%C2%AB%D0%98%D0%B7%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8E_%D0%BE%D0%B1_%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8_%C2%AB%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%B0%C2%BB%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "По поводу заявления Бунда (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%91%D1%83%D0%BD%D0%B4%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О манифесте «Союза армянских социал-демократов» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BC%D0%B0%D0%BD%D0%B8%D1%84%D0%B5%D1%81%D1%82%D0%B5_%C2%AB%D0%A1%D0%BE%D1%8E%D0%B7%D0%B0_%D0%B0%D1%80%D0%BC%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Марксистские взгляды на аграрный вопрос в Европе и в России (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B8%D1%81%D1%82%D1%81%D0%BA%D0%B8%D0%B5_%D0%B2%D0%B7%D0%B3%D0%BB%D1%8F%D0%B4%D1%8B_%D0%BD%D0%B0_%D0%B0%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81_%D0%B2_%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B5_%D0%B8_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Нужна ли «самостоятельная политическая партия» еврейскому пролетариату (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D1%83%D0%B6%D0%BD%D0%B0_%D0%BB%D0%B8_%C2%AB%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8F%C2%BB_%D0%B5%D0%B2%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%BC%D1%83_%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D1%82%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Самодержавие колеблется (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D0%B0%D0%BC%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B8%D0%B5_%D0%BA%D0%BE%D0%BB%D0%B5%D0%B1%D0%BB%D0%B5%D1%82%D1%81%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К деревенской бедноте (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B4%D0%BD%D0%BE%D1%82%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Г. Струве, изобличенный своим сотрудником (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%93._%D0%A1%D1%82%D1%80%D1%83%D0%B2%D0%B5,_%D0%B8%D0%B7%D0%BE%D0%B1%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D0%BE%D0%B8%D0%BC_%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%BE%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Les beaux esprits se rencontrent (Ленин)",
        "url": "https://ru.wikisource.org/wiki/Les_beaux_esprits_se_rencontrent_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Ответ на критику нашего проекта программы (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82%D0%B2%D0%B5%D1%82_%D0%BD%D0%B0_%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D0%BA%D1%83_%D0%BD%D0%B0%D1%88%D0%B5%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Национальный вопрос в нашей программе (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81_%D0%B2_%D0%BD%D0%B0%D1%88%D0%B5%D0%B9_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Эра реформ (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%AD%D1%80%D0%B0_%D1%80%D0%B5%D1%84%D0%BE%D1%80%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Последнее слово бундовского национализма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%BE_%D0%B1%D1%83%D0%BD%D0%B4%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Противоречия и зигзаги Мартова (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D0%BE%D1%80%D0%B5%D1%87%D0%B8%D1%8F_%D0%B8_%D0%B7%D0%B8%D0%B3%D0%B7%D0%B0%D0%B3%D0%B8_%D0%9C%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Самодержавие и пролетариат (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D0%B0%D0%BC%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B8%D0%B5_%D0%B8_%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D1%82_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О хороших демонстрациях пролетариев и плохих рассуждениях некоторых интеллигентов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D1%85_%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%85_%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B5%D0%B2_%D0%B8_%D0%BF%D0%BB%D0%BE%D1%85%D0%B8%D1%85_%D1%80%D0%B0%D1%81%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%D1%85_%D0%BD%D0%B5%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D1%85_%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Пора кончить (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%80%D0%B0_%D0%BA%D0%BE%D0%BD%D1%87%D0%B8%D1%82%D1%8C_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Конференции комитетов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D0%B8_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Новый русский заем (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%B5%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Падение Порт-Артура (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9F%D0%BE%D1%80%D1%82-%D0%90%D1%80%D1%82%D1%83%D1%80%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Соловья баснями не кормят (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BE%D0%B2%D1%8C%D1%8F_%D0%B1%D0%B0%D1%81%D0%BD%D1%8F%D0%BC%D0%B8_%D0%BD%D0%B5_%D0%BA%D0%BE%D1%80%D0%BC%D1%8F%D1%82_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо цюрихской группе большевиков (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D1%86%D1%8E%D1%80%D0%B8%D1%85%D1%81%D0%BA%D0%BE%D0%B9_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B5_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Революция в России (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Рабочая и буржуазная демократия (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F_%D0%B8_%D0%B1%D1%83%D1%80%D0%B6%D1%83%D0%B0%D0%B7%D0%BD%D0%B0%D1%8F_%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Революция учит (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_%D1%83%D1%87%D0%B8%D1%82_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Две тактики социал-демократии в демократической революции (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%B2%D0%B5_%D1%82%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D0%B8_%D0%B2_%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Десять вопросов референту (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%B5%D1%81%D1%8F%D1%82%D1%8C_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2_%D1%80%D0%B5%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%82%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Материализм и эмпириокритицизм (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC_%D0%B8_%D1%8D%D0%BC%D0%BF%D0%B8%D1%80%D0%B8%D0%BE%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D1%86%D0%B8%D0%B7%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Царь против финского народа (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A6%D0%B0%D1%80%D1%8C_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D1%84%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Что делается в деревне? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A7%D1%82%D0%BE_%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%B2_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B5%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Исторические судьбы учения Карла Маркса (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D1%8B_%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9A%D0%B0%D1%80%D0%BB%D0%B0_%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Три источника и три составных части марксизма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D1%80%D0%B8_%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B8_%D1%82%D1%80%D0%B8_%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D1%85_%D1%87%D0%B0%D1%81%D1%82%D0%B8_%D0%BC%D0%B0%D1%80%D0%BA%D1%81%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Маёвка революционного пролетариата (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%B0%D1%91%D0%B2%D0%BA%D0%B0_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D1%82%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Кадеты об украинском вопросе (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%B4%D0%B5%D1%82%D1%8B_%D0%BE%D0%B1_%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%BC_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Марксизм и реформизм (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B8%D0%B7%D0%BC_%D0%B8_%D1%80%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D0%B7%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Как епископ Никон защищает украинцев? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BA_%D0%B5%D0%BF%D0%B8%D1%81%D0%BA%D0%BE%D0%BF_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BD_%D0%B7%D0%B0%D1%89%D0%B8%D1%89%D0%B0%D0%B5%D1%82_%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%86%D0%B5%D0%B2%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О черносотенстве (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D1%81%D0%BE%D1%82%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Критические заметки по национальному вопросу (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D1%80%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%B7%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8_%D0%BF%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Кадеты и «право народов на самоопределение» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%B4%D0%B5%D1%82%D1%8B_%D0%B8_%C2%AB%D0%BF%D1%80%D0%B0%D0%B2%D0%BE_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BE%D0%B2_%D0%BD%D0%B0_%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Национал-либерализм и право наций на самоопределение (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB-%D0%BB%D0%B8%D0%B1%D0%B5%D1%80%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC_%D0%B8_%D0%BF%D1%80%D0%B0%D0%B2%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%B9_%D0%BD%D0%B0_%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Нужен ли обязательный государственный язык? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D1%83%D0%B6%D0%B5%D0%BD_%D0%BB%D0%B8_%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Законопроект о национальном равноправии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О праве наций на самоопределение (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D1%80%D0%B0%D0%B2%D0%B5_%D0%BD%D0%B0%D1%86%D0%B8%D0%B9_%D0%BD%D0%B0_%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К вопросу о смете министерства земледелия (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D1%81%D0%BC%D0%B5%D1%82%D0%B5_%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%B0_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Карл Маркс (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D1%80%D0%BB_%D0%9C%D0%B0%D1%80%D0%BA%D1%81_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О национальной гордости великороссов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%80%D0%B4%D0%BE%D1%81%D1%82%D0%B8_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Империализм, как высшая стадия капитализма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC,_%D0%BA%D0%B0%D0%BA_%D0%B2%D1%8B%D1%81%D1%88%D0%B0%D1%8F_%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D1%8F_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Апрельские тезисы",
        "url": "https://ru.wikisource.org/wiki/%D0%90%D0%BF%D1%80%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D1%8B"
    },
    {
        "name": "Первоначальный набросок апрельских тезисов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BD%D0%B0%D0%B1%D1%80%D0%BE%D1%81%D0%BE%D0%BA_%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D1%85_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Доклад на собрании большевиков — участников Всероссийского совещания советов рабочих и солдатских депутатов 4 (17) апреля 1917 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4_%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B8_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2_%E2%80%94_%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_4_(17)_%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8F_1917_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Апрельские тезисы (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%90%D0%BF%D1%80%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D1%8B_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "«Кризис власти» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%C2%AB%D0%9A%D1%80%D0%B8%D0%B7%D0%B8%D1%81_%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Украина (Ленин, 1917)",
        "url": "https://ru.wikisource.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD,_1917)"
    },
    {
        "name": "Политическое положение (Четыре тезиса) (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%A7%D0%B5%D1%82%D1%8B%D1%80%D0%B5_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D0%B0)_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К лозунгам (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%BB%D0%BE%D0%B7%D1%83%D0%BD%D0%B3%D0%B0%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Государство и революция (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D0%B8_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Тезисы об Учредительном собрании (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D0%B5%D0%B7%D0%B8%D1%81%D1%8B_%D0%BE%D0%B1_%D0%A3%D1%87%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Как организовать соревнование (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BA_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C_%D1%81%D0%BE%D1%80%D0%B5%D0%B2%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо к американским рабочим (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%BC_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О демократии и диктатуре (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%B8%D0%B8_%D0%B8_%D0%B4%D0%B8%D0%BA%D1%82%D0%B0%D1%82%D1%83%D1%80%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Пролетарская революция и ренегат Каутский (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_%D0%B8_%D1%80%D0%B5%D0%BD%D0%B5%D0%B3%D0%B0%D1%82_%D0%9A%D0%B0%D1%83%D1%82%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О «Левом» ребячестве и о мелкобуржуазности (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%C2%AB%D0%9B%D0%B5%D0%B2%D0%BE%D0%BC%C2%BB_%D1%80%D0%B5%D0%B1%D1%8F%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5_%D0%B8_%D0%BE_%D0%BC%D0%B5%D0%BB%D0%BA%D0%BE%D0%B1%D1%83%D1%80%D0%B6%D1%83%D0%B0%D0%B7%D0%BD%D0%BE%D1%81%D1%82%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О государстве (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Детская болезнь «левизны» в коммунизме (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8C_%C2%AB%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BD%D1%8B%C2%BB_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D0%B7%D0%BC%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О значении воинствующего материализма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B2%D0%BE%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B5%D0%B3%D0%BE_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К вопросу о национальностях или об «автономизации» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8F%D1%85_%D0%B8%D0%BB%D0%B8_%D0%BE%D0%B1_%C2%AB%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О кооперации (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BA%D0%BE%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Как нам реорганизовать Рабкрин (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BA_%D0%BD%D0%B0%D0%BC_%D1%80%D0%B5%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C_%D0%A0%D0%B0%D0%B1%D0%BA%D1%80%D0%B8%D0%BD_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О нашей революции (По поводу записок Н. Суханова) (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BD%D0%B0%D1%88%D0%B5%D0%B9_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_(%D0%9F%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%9D._%D0%A1%D1%83%D1%85%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0)_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "II съезд РСДРП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при рассмотрении списка вопросов, подлежащих обсуждению съезда",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D1%80%D0%B0%D1%81%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%B8_%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2,_%D0%BF%D0%BE%D0%B4%D0%BB%D0%B5%D0%B6%D0%B0%D1%89%D0%B8%D1%85_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8E_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речи при обсуждении порядка дня съезда",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D0%B8_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0_%D0%B4%D0%BD%D1%8F_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления по вопросу о действиях организационного комитета",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%D1%85_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления по вопросу об участии польских социал-демократов на съезде",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE%D0%B1_%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B8_%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D1%85_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BA%D1%80%D0%B0%D1%82%D0%BE%D0%B2_%D0%BD%D0%B0_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B5"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речь по вопросу о месте бунда в РСДРП",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%BC%D0%B5%D1%81%D1%82%D0%B5_%D0%B1%D1%83%D0%BD%D0%B4%D0%B0_%D0%B2_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речь по вопросу о программе партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B5_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Доклад об уставе партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%94%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4_%D0%BE%D0%B1_%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступление при обсуждении общей части программы партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%89%D0%B5%D0%B9_%D1%87%D0%B0%D1%81%D1%82%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при обсуждении общеполитических требований программы партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%89%D0%B5%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85_%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступление при обсуждении общеполитических требований программы партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%89%D0%B5%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85_%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при обсуждении части программы партии, касающейся охраны рабочих",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D1%87%D0%B0%D1%81%D1%82%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8,_%D0%BA%D0%B0%D1%81%D0%B0%D1%8E%D1%89%D0%B5%D0%B9%D1%81%D1%8F_%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D1%8B_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речь при обсуждении аграрной программы",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B0%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речи и выступления при обсуждении аграрной программы",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D0%B8_%D0%B8_%D0%B2%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B0%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речи и выступления при обсуждении устава партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D0%B8_%D0%B8_%D0%B2%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при обсуждении устава партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при обсуждении устава партии (5 августа)",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_(5_%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0)"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступления при обсуждении заявления Мартынова и Акимова",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9C%D0%B0%D1%80%D1%82%D1%8B%D0%BD%D0%BE%D0%B2%D0%B0_%D0%B8_%D0%90%D0%BA%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Речь при выборах редакции «Искры»",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D1%80%D0%B8_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%D1%85_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D0%B8_%C2%AB%D0%98%D1%81%D0%BA%D1%80%D1%8B%C2%BB"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступление при выборах центрального комитета партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%B8_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%D1%85_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступление при обсуждении резолюции Потресова (Старовера) об отношении к либералам",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%B8_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0_(%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B0)_%D0%BE%D0%B1_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BA_%D0%BB%D0%B8%D0%B1%D0%B5%D1%80%D0%B0%D0%BB%D0%B0%D0%BC"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Выступление по вопросу об отношении к учащейся молодежи",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE%D0%B1_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BA_%D1%83%D1%87%D0%B0%D1%89%D0%B5%D0%B9%D1%81%D1%8F_%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D0%B6%D0%B8"
    },
    {
        "name": "Заседание петроградского совета рабочих и солдатских депутатов 25 октября (7 ноября) 1917 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_25_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_(7_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F)_1917_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Заседание петроградского совета рабочих и солдатских депутатов 25 октября (7 ноября) 1917 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_25_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_(7_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F)_1917_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#1_Доклад_о_задачах_власти_Советов"
    },
    {
        "name": "Речь на митинге в Рогожском районе Москвы (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B3%D0%B5_%D0%B2_%D0%A0%D0%BE%D0%B3%D0%BE%D0%B6%D1%81%D0%BA%D0%BE%D0%BC_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D1%8B_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь при открытии памятника Марксу и Энгельсу 7 ноября 1918 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D1%80%D0%B8_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA%D0%B0_%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D1%83_%D0%B8_%D0%AD%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D1%83_7_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F_1918_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Памяти Председателя ВЦИК товарища Я. М. Свердлова (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%B8_%D0%9F%D1%80%D0%B5%D0%B4%D1%81%D0%B5%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8F_%D0%92%D0%A6%D0%98%D0%9A_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D0%B0_%D0%AF._%D0%9C._%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "III, Коммунистический Интернационал (Ленин)",
        "url": "https://ru.wikisource.org/wiki/III,_%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Сообщение о переговорах по радио с Бела Кун (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE_%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0%D1%85_%D0%BF%D0%BE_%D1%80%D0%B0%D0%B4%D0%B8%D0%BE_%D1%81_%D0%91%D0%B5%D0%BB%D0%B0_%D0%9A%D1%83%D0%BD_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Обращение к Красной Армии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9_%D0%90%D1%80%D0%BC%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О крестьянах середняках (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D1%85_%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D0%BA%D0%B0%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Что такое Советская власть? (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A7%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D1%8C%3F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Как навсегда спасти трудящихся от гнёта помещиков и капиталистов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A%D0%B0%D0%BA_%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0_%D1%81%D0%BF%D0%B0%D1%81%D1%82%D0%B8_%D1%82%D1%80%D1%83%D0%B4%D1%8F%D1%89%D0%B8%D1%85%D1%81%D1%8F_%D0%BE%D1%82_%D0%B3%D0%BD%D1%91%D1%82%D0%B0_%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B8%D0%BA%D0%BE%D0%B2_%D0%B8_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О погромной травле евреев (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D0%BE%D0%B3%D1%80%D0%BE%D0%BC%D0%BD%D0%BE%D0%B9_%D1%82%D1%80%D0%B0%D0%B2%D0%BB%D0%B5_%D0%B5%D0%B2%D1%80%D0%B5%D0%B5%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О работе для транспорта (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D0%B4%D0%BB%D1%8F_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О трудовой дисциплине (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9_%D0%B4%D0%B8%D1%81%D1%86%D0%B8%D0%BF%D0%BB%D0%B8%D0%BD%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О продовольственном налоге или продналоге (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%B5_%D0%B8%D0%BB%D0%B8_%D0%BF%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О концессиях и о развитии капитализма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B8%D1%8F%D1%85_%D0%B8_%D0%BE_%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B8_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О потребительской и промысловой кооперации (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9_%D0%B8_%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О продовольственном налоге (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Беспартийные и Советская власть (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%91%D0%B5%D1%81%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%B5_%D0%B8_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D1%8C_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо Е. Д. Стасовой и товарищам в московской тюрьме от 19 января 1905 (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%95._%D0%94._%D0%A1%D1%82%D0%B0%D1%81%D0%BE%D0%B2%D0%BE%D0%B9_%D0%B8_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D0%B0%D0%BC_%D0%B2_%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D1%82%D1%8E%D1%80%D1%8C%D0%BC%D0%B5_%D0%BE%D1%82_19_%D1%8F%D0%BD%D0%B2%D0%B0%D1%80%D1%8F_1905_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Ленин: Письмо членам Политбюро, 19 марта 1922 г.",
        "url": "https://ru.wikisource.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD:_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D1%87%D0%BB%D0%B5%D0%BD%D0%B0%D0%BC_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE,_19_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_1922_%D0%B3."
    },
    {
        "name": "Письмо к съезду (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Его Превосходительству господину Директору Симбирской Классической гимназии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%9F%D1%80%D0%B5%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%83_%D0%A1%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Его Превосходительству господину Ректору Императорского Казанского Университета (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%9F%D1%80%D0%B5%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%A0%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%83_%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Его Высокопревосходительству господину Министру Народного Просвещения (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D1%83_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Его Сиятельству господину Министру Народного Просвещения (Ленин, 1889)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%A1%D0%B8%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D1%83_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD,_1889)"
    },
    {
        "name": "Его Сиятельству господину Министру Народного Просвещения (Ленин, 1890)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%A1%D0%B8%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D1%83_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD,_1890)"
    },
    {
        "name": "Его Превосходительству господину Председателю Испытательной Юридической Комиссии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%9F%D1%80%D0%B5%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%9F%D1%80%D0%B5%D0%B4%D1%81%D0%B5%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8E_%D0%98%D1%81%D0%BF%D1%8B%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%AE%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%9A%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Его Превосходительству господину Директору Департамента Полиции (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%95%D0%B3%D0%BE_%D0%9F%D1%80%D0%B5%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83_%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B8%D0%BD%D1%83_%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%83_%D0%94%D0%B5%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%9F%D0%BE%D0%BB%D0%B8%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "II съезд РСДРП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Дополнение к § 12 проекта устава партии",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA_%C2%A7_12_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0_%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции по заявлению Мартынова и Акимова",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BF%D0%BE_%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8E_%D0%9C%D0%B0%D1%80%D1%82%D1%8B%D0%BD%D0%BE%D0%B2%D0%B0_%D0%B8_%D0%90%D0%BA%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции о выходе Бунда из РСДРП",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BE_%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%B5_%D0%91%D1%83%D0%BD%D0%B4%D0%B0_%D0%B8%D0%B7_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции об отдельных группах",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BE%D0%B1_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0%D1%85"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции о работе в войске",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D0%B2_%D0%B2%D0%BE%D0%B9%D1%81%D0%BA%D0%B5"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции о работе среди крестьянства",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D1%81%D1%80%D0%B5%D0%B4%D0%B8_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD%D1%81%D1%82%D0%B2%D0%B0"
    },
    {
        "name": "II съезд РСДРП (Ленин)/Проект резолюции об издании органа для сектантов",
        "url": "https://ru.wikisource.org/wiki/II_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BE%D0%B1_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B0_%D0%B4%D0%BB%D1%8F_%D1%81%D0%B5%D0%BA%D1%82%D0%B0%D0%BD%D1%82%D0%BE%D0%B2"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О задачах агитации в настоящий момент",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%D1%85_%D0%B0%D0%B3%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8_%D0%B2_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/Резолюция по организационному вопросу и о партийном съезде",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC%D1%83_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%B8_%D0%BE_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D0%BE%D0%BC_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B5"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О стачечном движении",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D1%81%D1%82%D0%B0%D1%87%D0%B5%D1%87%D0%BD%D0%BE%D0%BC_%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О партийной печати",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D0%BE%D0%B9_%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B8"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О думской работе с.-д.",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D0%B4%D1%83%D0%BC%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D1%81.-%D0%B4."
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О думской с.-д. фракции",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D0%B4%D1%83%D0%BC%D1%81%D0%BA%D0%BE%D0%B9_%D1%81.-%D0%B4._%D1%84%D1%80%D0%B0%D0%BA%D1%86%D0%B8%D0%B8"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О работе в легальных обществах",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D0%B2_%D0%BB%D0%B5%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0%D1%85"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/Резолюция по национальному вопросу",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%D1%83_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83"
    },
    {
        "name": "Резолюции летнего 1913 года совещания ЦК РСДРП с партийными работниками (Ленин)/О народниках",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE_1913_%D0%B3%D0%BE%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%A0%D0%A1%D0%94%D0%A0%D0%9F_%D1%81_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)/%D0%9E_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0%D1%85"
    },
    {
        "name": "Заседание петроградского совета рабочих и солдатских депутатов 25 октября (7 ноября) 1917 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_25_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_(7_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F)_1917_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Заседание петроградского совета рабочих и солдатских депутатов 25 октября (7 ноября) 1917 г. (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_25_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_(7_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F)_1917_%D0%B3._(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#2_Резолюция"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#1_Рабочим,_солдатам_и_крестьянам!"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#2_Доклад_о_мире_26_октября_(8_ноября)"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#3_Заключительное_слово_по_докладу_о_мире_26_октября_(8_ноября)"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#4_Доклад_о_земле_26_октября_(8_ноября)"
    },
    {
        "name": "II Всероссийский съезд Советов рабочих и солдатских депутатов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/II_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B8_%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)#5_Постановление_об_образовании_Рабочего_и_Крестьянского_правительства"
    },
    {
        "name": "Указания о работе агитационно-инструкторских поездов и пароходов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A3%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5_%D0%B0%D0%B3%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D1%85_%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BE%D0%B2_%D0%B8_%D0%BF%D0%B0%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Отечественная война против германских оккупантов в 1918 году (1941)/№ 64",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2_%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D0%BA%D0%BA%D1%83%D0%BF%D0%B0%D0%BD%D1%82%D0%BE%D0%B2_%D0%B2_1918_%D0%B3%D0%BE%D0%B4%D1%83_(1941)/%E2%84%96_64"
    },
    {
        "name": "Записка Г. В. Чичерину и замечания на проекте заявления советского правительства о признании долгов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B0_%D0%93._%D0%92._%D0%A7%D0%B8%D1%87%D0%B5%D1%80%D0%B8%D0%BD%D1%83_%D0%B8_%D0%B7%D0%B0%D0%BC%D0%B5%D1%87%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5_%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B0_%D0%BE_%D0%BF%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B8_%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Постановление СТО по вопросу об отчетности и диаграммах для СТО (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A1%D0%A2%D0%9E_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE%D0%B1_%D0%BE%D1%82%D1%87%D0%B5%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%B8_%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%D1%85_%D0%B4%D0%BB%D1%8F_%D0%A1%D0%A2%D0%9E_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект постановления СТО о плугах «Фаулера» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%A1%D0%A2%D0%9E_%D0%BE_%D0%BF%D0%BB%D1%83%D0%B3%D0%B0%D1%85_%C2%AB%D0%A4%D0%B0%D1%83%D0%BB%D0%B5%D1%80%D0%B0%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо польским коммунистам (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BC_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Новая экономическая политика и задачи политпросветов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B8_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%BF%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К четырехлетней годовщине Октябрьской революции (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D1%87%D0%B5%D1%82%D1%8B%D1%80%D0%B5%D1%85%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B9_%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D1%89%D0%B8%D0%BD%D0%B5_%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо А. С. Киселеву с проектом постановления СНК (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%90._%D0%A1._%D0%9A%D0%B8%D1%81%D0%B5%D0%BB%D0%B5%D0%B2%D1%83_%D1%81_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%A1%D0%9D%D0%9A_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "В президиум VIII Всероссийского электротехнического съезда (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%92_%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B8%D1%83%D0%BC_VIII_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "К вопросу о задачах Рабкрина, их понимании и их исполнении (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%D1%85_%D0%A0%D0%B0%D0%B1%D0%BA%D1%80%D0%B8%D0%BD%D0%B0,_%D0%B8%D1%85_%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B8_%D0%B8_%D0%B8%D1%85_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо В. В. Куйбышеву и проект обязательства рабочих, едущих из Америки в Россию (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%92._%D0%92._%D0%9A%D1%83%D0%B9%D0%B1%D1%8B%D1%88%D0%B5%D0%B2%D1%83_%D0%B8_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85,_%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D1%85_%D0%B8%D0%B7_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8E_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О чистке партии (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B5_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Записка В. М. Молотову с предложением в ЦК РКП(б) (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B0_%D0%92._%D0%9C._%D0%9C%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B2%D1%83_%D1%81_%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC_%D0%B2_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо в редакцию газеты «Экономическая жизнь» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%B2_%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D1%8E_%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D1%8B_%C2%AB%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "В малый СНК (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%92_%D0%BC%D0%B0%D0%BB%D1%8B%D0%B9_%D0%A1%D0%9D%D0%9A_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Предложение в Политбюро ЦК РКП(б) о предании суду Унгерна (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8_%D1%81%D1%83%D0%B4%D1%83_%D0%A3%D0%BD%D0%B3%D0%B5%D1%80%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Новые времена, старые ошибки в новом виде (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0,_%D1%81%D1%82%D0%B0%D1%80%D1%8B%D0%B5_%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8_%D0%B2_%D0%BD%D0%BE%D0%B2%D0%BE%D0%BC_%D0%B2%D0%B8%D0%B4%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо к немецким коммунистам (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BA_%D0%BD%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BC_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Товарищу Томасу Беллу (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D1%83_%D0%A2%D0%BE%D0%BC%D0%B0%D1%81%D1%83_%D0%91%D0%B5%D0%BB%D0%BB%D1%83_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо Г. Мясникову (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%93._%D0%9C%D1%8F%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Обращение к крестьянам Украины (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D0%BC_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%8B_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Обращение к международному пролетариату (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC%D1%83_%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D0%B8%D0%B0%D1%82%D1%83_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Записка Л. Б. Каменеву с поправками к проекту тезисов о проведении в жизнь Новой экономической политики (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B0_%D0%9B._%D0%91._%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5%D0%B2%D1%83_%D1%81_%D0%BF%D0%BE%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8_%D0%BA_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D0%BE%D0%B2_%D0%BE_%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B2_%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C_%D0%9D%D0%BE%D0%B2%D0%BE%D0%B9_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Приветствие I Международному Конгрессу революционных профессиональных и производственных союзов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5_I_%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC%D1%83_%D0%9A%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81%D1%83_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B8_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D1%81%D0%BE%D1%8E%D0%B7%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Приветствие съезду уполномоченных Центросоюза (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D1%83_%D1%83%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%BC%D0%BE%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%BE%D1%81%D0%BE%D1%8E%D0%B7%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Предложение в Политбюро ЦК РКП(б) о премировании предприятий (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_%D0%BE_%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Мысли насчёт «плана» государственного хозяйства (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9C%D1%8B%D1%81%D0%BB%D0%B8_%D0%BD%D0%B0%D1%81%D1%87%D1%91%D1%82_%C2%AB%D0%BF%D0%BB%D0%B0%D0%BD%D0%B0%C2%BB_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Дополнения к проекту Постановления СНК о коллективной оплате труда служащих в советских учреждениях (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BA_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83_%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%A1%D0%9D%D0%9A_%D0%BE_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B5_%D1%82%D1%80%D1%83%D0%B4%D0%B0_%D1%81%D0%BB%D1%83%D0%B6%D0%B0%D1%89%D0%B8%D1%85_%D0%B2_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D1%83%D1%87%D1%80%D0%B5%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%D1%85_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Доклад о тактике РКП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%94%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4_%D0%BE_%D1%82%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5_%D0%A0%D0%9A%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь в защиту тактики Коммунистического Интернационала (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%B2_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D1%83_%D1%82%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8_%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь по итальянскому вопросу (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BF%D0%BE_%D0%B8%D1%82%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%BE%D0%BC%D1%83_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Тезисы доклада о тактике РКП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D0%B5%D0%B7%D0%B8%D1%81%D1%8B_%D0%B4%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0_%D0%BE_%D1%82%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5_%D0%A0%D0%9A%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Замечания по поводу плана работы ЦК РКП(б) (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%87%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D0%BF%D0%BB%D0%B0%D0%BD%D0%B0_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Поправки к проекту постановления ЦК о замене разверстки налогом (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%BE%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B8_%D0%BA_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%A6%D0%9A_%D0%BE_%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5_%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8_%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь на III Всероссийском продовольственном совещании (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_III_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC_%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC_%D1%81%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О кратких ежемесячных извлечениях из отчетов (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D1%85_%D0%B5%D0%B6%D0%B5%D0%BC%D0%B5%D1%81%D1%8F%D1%87%D0%BD%D1%8B%D1%85_%D0%B8%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%D1%85_%D0%B8%D0%B7_%D0%BE%D1%82%D1%87%D0%B5%D1%82%D0%BE%D0%B2_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь об экономических органах на местах на III сессии ВЦИК (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BE%D0%B1_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B0%D1%85_%D0%BD%D0%B0_%D0%BC%D0%B5%D1%81%D1%82%D0%B0%D1%85_%D0%BD%D0%B0_III_%D1%81%D0%B5%D1%81%D1%81%D0%B8%D0%B8_%D0%92%D0%A6%D0%98%D0%9A_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Всем наркомам и заведующему Центральным статистическим управлением (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%92%D1%81%D0%B5%D0%BC_%D0%BD%D0%B0%D1%80%D0%BA%D0%BE%D0%BC%D0%B0%D0%BC_%D0%B8_%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B5%D0%BC%D1%83_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Товарищам горнякам Петровского куста (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D0%B0%D0%BC_%D0%B3%D0%BE%D1%80%D0%BD%D1%8F%D0%BA%D0%B0%D0%BC_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BA%D1%83%D1%81%D1%82%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Проект Постановления Политбюро ЦК РКП(б) (май 1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_(%D0%BC%D0%B0%D0%B9_1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Наказ от СТО (Совета Труда и Обороны) местным советским учреждениям (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9D%D0%B0%D0%BA%D0%B0%D0%B7_%D0%BE%D1%82_%D0%A1%D0%A2%D0%9E_(%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D0%B0_%D0%A2%D1%80%D1%83%D0%B4%D0%B0_%D0%B8_%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D1%8B)_%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%BC_%D1%83%D1%87%D1%80%D0%B5%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Тов. Кржижановскому в президиум Госплана (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A2%D0%BE%D0%B2._%D0%9A%D1%80%D0%B6%D0%B8%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC%D1%83_%D0%B2_%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B8%D1%83%D0%BC_%D0%93%D0%BE%D1%81%D0%BF%D0%BB%D0%B0%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Задания комиссии по проверке постройки железной дороги в районе Эмбы (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B8_%D0%BF%D0%BE_%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B5_%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B9_%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%B2_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5_%D0%AD%D0%BC%D0%B1%D1%8B_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо в Политбюро по поводу резолюции IX Всероссийского съезда советов о международном положении (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%B2_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83_%D1%80%D0%B5%D0%B7%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_IX_%D0%92%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B0_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%BE%D0%B2_%D0%BE_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо Залуцкому, Сольцу и всем членам Политбюро о чистке партии и условиях приема в партию (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%97%D0%B0%D0%BB%D1%83%D1%86%D0%BA%D0%BE%D0%BC%D1%83,_%D0%A1%D0%BE%D0%BB%D1%8C%D1%86%D1%83_%D0%B8_%D0%B2%D1%81%D0%B5%D0%BC_%D1%87%D0%BB%D0%B5%D0%BD%D0%B0%D0%BC_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%BE_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B5_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_%D0%B8_%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D1%85_%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%B0_%D0%B2_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8E_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О тезисах по аграрному вопросу Французской коммунистической партии (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D0%B0%D1%85_%D0%BF%D0%BE_%D0%B0%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D0%BE%D0%BC%D1%83_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Замечания к тезисам о едином фронте (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%87%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA_%D1%82%D0%B5%D0%B7%D0%B8%D1%81%D0%B0%D0%BC_%D0%BE_%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D0%BC_%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо о применении «живой связи» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%BE_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8_%C2%AB%D0%B6%D0%B8%D0%B2%D0%BE%D0%B9_%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Заметки по истории РКП (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8_%D0%BF%D0%BE_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8_%D0%A0%D0%9A%D0%9F_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь на I Московском губернском сельскохозяйственном съезде (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_I_%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC_%D0%B3%D1%83%D0%B1%D0%B5%D1%80%D0%BD%D1%81%D0%BA%D0%BE%D0%BC_%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC_%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B5_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Записка И. В. Сталину с проектом Постановления Политбюро ЦК РКП(б) по вопросу об образовании Федерации Закавказских республик (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B0_%D0%98._%D0%92._%D0%A1%D1%82%D0%B0%D0%BB%D0%B8%D0%BD%D1%83_%D1%81_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%BC_%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B1%D1%8E%D1%80%D0%BE_%D0%A6%D0%9A_%D0%A0%D0%9A%D0%9F(%D0%B1)_%D0%BF%D0%BE_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE%D0%B1_%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8_%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8_%D0%97%D0%B0%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B8%D1%85_%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Письмо А. Д. Цюрупе с проектом постановления ВЦИК (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_%D0%90._%D0%94._%D0%A6%D1%8E%D1%80%D1%83%D0%BF%D0%B5_%D1%81_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%92%D0%A6%D0%98%D0%9A_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "В экономическую комиссию СНК (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%92_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E_%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D1%8E_%D0%A1%D0%9D%D0%9A_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Предисловии к брошюре «К вопросу о Новой экономической политике» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B8_%D0%BA_%D0%B1%D1%80%D0%BE%D1%88%D1%8E%D1%80%D0%B5_%C2%AB%D0%9A_%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83_%D0%BE_%D0%9D%D0%BE%D0%B2%D0%BE%D0%B9_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B5%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь на собрании рабочих завода «Электросила» (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D0%B0_%C2%AB%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%C2%BB_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь на собрании рабочих, работниц, красноармейцев и молодежи Хамовнического района (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85,_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D1%86,_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B0%D1%80%D0%BC%D0%B5%D0%B9%D1%86%D0%B5%D0%B2_%D0%B8_%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D0%B6%D0%B8_%D0%A5%D0%B0%D0%BC%D0%BE%D0%B2%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Речь на собрании рабочих Прохоровской мануфактуры (1921, Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%A0%D0%B5%D1%87%D1%8C_%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85_%D0%9F%D1%80%D0%BE%D1%85%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%BC%D0%B0%D0%BD%D1%83%D1%84%D0%B0%D0%BA%D1%82%D1%83%D1%80%D1%8B_(1921,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "Беседа с делегацией Монгольской Народной Республики (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%91%D0%B5%D1%81%D0%B5%D0%B4%D0%B0_%D1%81_%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D0%B0%D1%86%D0%B8%D0%B5%D0%B9_%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    },
    {
        "name": "О значении золота теперь и после полной победы социализма (Ленин)",
        "url": "https://ru.wikisource.org/wiki/%D0%9E_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B8_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0_%D1%82%D0%B5%D0%BF%D0%B5%D1%80%D1%8C_%D0%B8_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD)"
    }
];

function openRandomLink() {
  if (!links.length) {
    alert('Links are still loading. Please try again shortly.');
    return;
  }
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomLink = links[randomIndex].url;
  window.open(randomLink, '_blank');
}
