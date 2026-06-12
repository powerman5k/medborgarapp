insert into public.admin_questions (topic_id, topic, difficulty, type, question, options, correct_answer, explanation)
select topic_id, topic, difficulty, type, question, options, correct_answer, explanation
from (
  values
    ('geografi', 'Geografi', 'medium', 'fact', 'Hur långt sträcker sig Sverige ungefär från Treriksröset till Smygehuk?', array['Cirka 600 kilometer', 'Cirka 1 600 kilometer', 'Cirka 3 000 kilometer', 'Cirka 5 000 kilometer']::text[], 1, 'Sverige är ett avlångt land och sträcker sig ungefär 1 600 kilometer från den nordligaste till den sydligaste punkten.'),
    ('geografi', 'Geografi', 'medium', 'fact', 'Ungefär hur många öar finns det i Sverige?', array['25 000', '100 000', '250 000', '1 000 000']::text[], 2, 'Sverige har cirka 250 000 öar, vilket är fler än något annat land i världen.'),
    ('miljo', 'Miljö', 'medium', 'fact', 'Vad är ett av Sveriges klimatpolitiska mål till år 2045?', array['Att utsläppen av växthusgaser ska vara nära noll', 'Att bara använda olja i industrin', 'Att avskaffa all kollektivtrafik', 'Att fördubbla utsläppen från transporter']::text[], 0, 'Ett mål är att Sveriges utsläpp av växthusgaser ska vara så nära noll som möjligt år 2045.'),
    ('demokrati-styre', 'Demokrati och styre', 'medium', 'scenario', 'En person söker föräldrapenning. Vilken myndighet fattar beslut om det?', array['Skatteverket', 'Försäkringskassan', 'Polismyndigheten', 'Migrationsverket']::text[], 1, 'Försäkringskassan fattar beslut om bland annat föräldrapenning.'),
    ('val-rattigheter', 'Val och rättigheter', 'medium', 'fact', 'Vad betyder proportionella val?', array['Partier får platser efter hur stor andel röster de får', 'Endast det största partiet får alla platser', 'Röster räknas bara i större städer', 'Valresultatet bestäms av regeringen']::text[], 0, 'I proportionella val får partier platser i riksdag, region eller kommun utifrån sin andel av rösterna.'),
    ('lag-och-ratt', 'Lag och rätt', 'medium', 'scenario', 'Du vill tälta och plocka bär i naturen utan att störa någon. Vilken rättighet handlar det om?', array['Offentlighetsprincipen', 'Allemansrätten', 'Rösträtten', 'Religionsfriheten']::text[], 1, 'Allemansrätten ger människor möjlighet att vistas i naturen, men man får inte skada naturen eller störa markägaren.'),
    ('medier', 'Medier', 'medium', 'fact', 'Vilka tre medieföretag har ett särskilt public service-uppdrag i Sverige?', array['TV4, Netflix och Viaplay', 'Sveriges Radio, Sveriges Television och Utbildningsradion', 'Aftonbladet, Expressen och Dagens Nyheter', 'Facebook, Youtube och Tiktok']::text[], 1, 'Sveriges Radio, Sveriges Television och Utbildningsradion har ett särskilt public service-uppdrag.'),
    ('arbetsmarknad', 'Arbetsmarknad', 'medium', 'fact', 'Vad är A-kassan?', array['En domstol för arbetsfrågor', 'En försäkring som kan ge ersättning vid arbetslöshet', 'En myndighet som sätter alla löner', 'En skatt på privata företag']::text[], 1, 'A-kassan är en arbetslöshetsförsäkring som kan betala ut ersättning till medlemmar som uppfyller villkoren.'),
    ('historia', 'Historia', 'hard', 'fact', 'Varför var Saltsjöbadsavtalet 1938 viktigt?', array['Det lade grunden för samarbete mellan arbetsgivare och fackförbund', 'Det gjorde Sverige medlem i EU', 'Det införde allmän värnplikt', 'Det avskaffade kommunerna']::text[], 0, 'Saltsjöbadsavtalet blev viktigt för den svenska modellen, där arbetsgivare och fackförbund kommer överens om villkor på arbetsmarknaden.'),
    ('forsvar', 'Försvar', 'medium', 'truefalse', 'Den allmänna värnplikten i Sverige omfattar både män och kvinnor som har fyllt 18 år.', array['Sant', 'Falskt']::text[], 0, 'Den allmänna värnplikten omfattar både män och kvinnor från 18 års ålder, men bara en del går vidare till militär utbildning.')
) as q(topic_id, topic, difficulty, type, question, options, correct_answer, explanation)
where not exists (
  select 1
  from public.admin_questions aq
  where lower(trim(aq.question)) = lower(trim(q.question))
);
