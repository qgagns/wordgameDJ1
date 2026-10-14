// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {

    schoolTag: "테스트용",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "TEST",      // 학교별 독립 DB 분리 키 (다른 학교와 랭킹/계정이 안 섞임)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)

    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 3, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 10,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 5.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 12,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 4.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 3,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🔥 [시험 직전 파이널] 하드코어 마왕전 설정
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 15,                              // 출제 문제 수 (마왕 체력)
        playerHp: 3,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};

// ========================================================
// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\
// ========================================================
// 단어 목록: 아래에 단어 목록을 붙여넣으세요.
// ========================================================
const WORLD_MAPS_TEXT = `

[net_1: 테스트]
increase, expand, grow, augment : [동] 증가하다, 팽창하다
VS
decrease, shrink, reduce, diminish : [동] 감소하다, 축소하다

encourage, foster, promote, boost : [동] 촉진하다, 북돋우다
VS
discourage, hinder, impede, suppress : [동] 저해하다, 억제하다

vague, ambiguous, obscure, hazy : [형] 모호한, 불분명한
VS
clear, explicit, distinct, obvious : [형] 명확한, 뚜렷한

essential, crucial, vital, fundamental : [형] 필수적인, 결정적인
VS
trivial, minor, negligible, dispensable : [형] 사소한, 없어도 되는

abundant, plentiful, ample, rich : [형] 풍부한, 넉넉한
VS
scarce, insufficient, deficient, meager : [형] 부족한, 불충분한





[irreg_verbs: 불규칙 동사의 늪]
# 제멋대로 모습을 바꾸는 동사 정령들이 서식하는 늪
drive (drove, driven): [동] 운전하다, 몰다
ride (rode, ridden): [동] 타다
write (wrote, written): [동] 쓰다
break (broke, broken): [동] 부수다
choose (chose, chosen): [동] 선택하다, 고르다
freeze (froze, frozen): [동] 얼다, 얼리다
speak (spoke, spoken): [동] 말하다
steal (stole, stolen): [동] 훔치다
get (got, got): [동] 얻다; ~해지다
forget (forgot, forgotten): [동] 잊다
begin (began, begun): [동] 시작하다
drink (drank, drunk): [동] 마시다
run (ran, run): [동] 달리다
shrink (shrank, shrunk): [동] 줄어들다
sing (sang, sung): [동] 노래하다
spring (sprang, sprung): [동] 튀어 오르다
swim (swam, swum): [동] 수영하다
take (took, taken): [동] 잡다, 가지다
shake (shook, shaken): [동] 흔들다, 흔들리다
mistake (mistook, mistaken): [동] 실수하다
blow (blew, blown): [동] 불다
fly (flew, flown): [동] 날다, 날리다
grow (grew, grown): [동] 자라다; 키우다
know (knew, known): [동] 알고 있다
throw (threw, thrown): [동] 던지다
withdraw (withdrew, withdrawn): [동] 철회하다
swear (swore, sworn): [동] 맹세하다
tear (tore, torn): [동] 찢다
wear (wore, worn): [동] 입다
show (showed, shown): [동] 보여주다
be (was/were, been): [동] 있다/이다
beat (beat, beaten): [동] 때리다
become (became, become): [동] 되다
bite (bit, bitten): [동] 물다
come (came, come): [동] 오다
do (did, done): [동] 하다
eat (ate, eaten): [동] 먹다
fall (fell, fallen): [동] 떨어지다, 넘어지다
forbid (forbade, forbidden): [동] 금지하다
give (gave, given): [동] 주다
forgive (forgave, forgiven): [동] 용서하다
go (went, gone): [동] 가다
hide (hid, hidden): [동] 숨다, 숨기다
lie (lay, lain): [동] 눕다
see (saw, seen): [동] 보다
bleed (bled, bled): [동] 피를 흘리다
feed (fed, fed): [동] 먹이다
lead (led, led): [동] 이끌다
meet (met, met): [동] 만나다
read (read, read): [동] 읽다
shoot (shot, shot): [동] 쏘다, 발사하다
sleep (slept, slept): [동] 자다
speed (sped, sped): [동] 속도를 내다
hear (heard, heard): [동] 듣다
dig (dug, dug): [동] 파다
hang (hung, hung): [동] 매달다, 걸다
stick (stuck, stuck): [동] 찌르다; 붙이다
strike (struck, struck): [동] 치다, 때리다
wake (woke, woken): [동] 깨우다
shine (shone, shone): [동] 빛나다, 광을 내다
win (won, won): [동] 이기다; 얻다
build (built, built): [동] 세우다, 짓다
lend (lent, lent): [동] 빌려주다
lose (lost, lost): [동] 잃다; 지다
send (sent, sent): [동] 보내다
spend (spent, spent): [동] (돈, 시간 등을)사용하다, 쓰다
deal (dealt, dealt): [동] 다루다; 거래하다
mean (meant, meant): [동] 의미하다
bend (bent, bent): [동] 구부리다
feel (felt, felt): [동] 느끼다
hold (held, held): [동] 잡다, 쥐다
keep (kept, kept): [동] 유지하다; 기르다
leave (left, left): [동] 떠나다; 남겨두다
bring (brought, brought): [동] 가져오다
buy (bought, bought): [동] 사다
catch (caught, caught): [동] 잡다
fight (fought, fought): [동] 싸우다
seek (sought, sought): [동] 찾다, 추구하다
teach (taught, taught): [동] 가르치다
think (thought, thought): [동] 생각하다
find (found, found): [동] 찾다, 발견하다
pay (paid, paid): [동] 지불하다
say (said, said): [동] 말하다
stand (stood, stood): [동] 서다
understand (understood, understood): [동] 이해하다
sell (sold, sold): [동] 팔다
tell (told, told): [동] 말하다
have (had, had): [동] 가지고 있다, 소유하고 있다
light (lit, lit): [동] (불을)켜다, 밝히다
make (made, made): [동] 만들다
sit (sat, sat): [동] 앉다
slide (slid, slid): [동] 미끄러지다
burst (burst, burst): [동] 터뜨리다
cost (cost, cost): [동] 비용이~가 들다
cut (cut, cut): [동] 자르다
hit (hit, hit): [동] 치다
hurt (hurt, hurt): [동] 다치게 하다; 아프다
put (put, put): [동] 두다, 놓다
set (set, set): [동] 놓다; 마련하다
shut (shut, shut): [동] 닫다, 잠그다
spread (spread, spread): [동] 펴다, 펼치다


[irreg_nouns: 불규칙 명사의 언덕]
# 제멋대로 모습을 바꾸는 명사 정령들이 서식하는 언덕
man (men): [명] 남자, 사람
woman (women): [명] 여자
child (children): [명] 아이, 어린이
person (people): [명] 사람
foot (feet): [명] 발
tooth (teeth): [명] 이, 치아
goose (geese): [명] 거위
mouse (mice): [명] 쥐
ox (oxen): [명] 황소
louse (lice): [명] 이(곤충)
sheep (sheep): [명] 양
deer (deer): [명] 사슴
fish (fish): [명] 물고기, 생선
species (species): [명] 종(생물 분류 단위)
series (series): [명] 연속, 시리즈
aircraft (aircraft): [명] 항공기
medium (media): [명] 매체, 대중매체
curriculum (curricula): [명] 교육과정, 커리큘럼
criterion (criteria): [명] 기준, 표준
phenomenon (phenomena): [명] 현상
crisis (crises): [명] 위기
basis (bases): [명] 근거, 기초
analysis (analyses): [명] 분석
hypothesis (hypotheses): [명] 가설
oasis (oases): [명] 오아시스
stimulus (stimuli): [명] 자극, 자극제
fungus (fungi): [명] 균류, 곰팡이
cactus (cacti): [명] 선인장


[irreg_ads: 불규칙 형용사/부사의 굴]
# 제멋대로 모습을 바꾸는 형용사/부사 정령들이 서식하는 굴
good (better, best): [형] 좋은
well (better, best): [부] 잘, 좋게
bad (worse, worst): [형] 나쁜
ill (worse, worst): [형] 아픈, 나쁜
badly (worse, worst): [부] 심하게, 나쁘게
many (more, most): [형] 많은 (셀 수 있는 명사 수식)
much (more, most): [형/부] 많은, 많이 (셀 수 없는 명사 수식)
little (less, least): [형/부] 적은, 적게 (양/정도)
far (거리) (farther, farthest): [형/부] 먼, 더 먼, 가장 먼
far (정도) (further, furthest): [형/부] 나아간, 더 나아간, 가장 깊은
late (시간) (later, latest): [형/부] 늦은, 더 늦은, 가장 최근의
late (순서) (latter, last): [형] (둘 중) 나중의, 후자의, 마지막의
old (나이) (older, oldest): [형] 나이 든, 더 나이 든, 가장 나이 든
old (서열) (elder, eldest): [형] 나이 든, 손위의, 가장 맏이의


[m1-1: M1 - 숲의 모험]
# 모험을 시작하는 기본 어휘들
decide:[동] 결정하다
introduce:[동] 소개하다; [동] 도입하다
continue:[동] 계속하다
invent:[동] 발명하다
imagine:[동] 상상하다
happen:[동] 일어나다
depend:[동] 의존하다, ~에 달려 있다
apply:[동] 적용하다; 신청하다, 지원하다; 도포하다, 바르다
allow:[동] 허락하다
prepare:[동] 준비하다
choose:[동] 선택하다
follow:[동] 따라가다, 따르다
bring:[동] 가져오다
offer:[동] 제공하다, 제안하다; [명] 제안, 제공
spend:[동] (시간·돈을) 쓰다
expect:[동] 기대하다, 예상하다
fill:[동] 채우다
lend:[동] 빌려주다
try:[동] 노력하다, 시도하다
sell:[동] 팔다
guess:[동] 추측하다
forget:[동] 잊다
return:[동] 돌아오다, 돌려주다; [명] 귀환, 돌아옴
call:[동] 부르다, 전화하다; [명] 부름, 요청
carry:[동] 나르다, 가지고 다니다
add:[동] 더하다, 추가하다
suppose:[동] 추측하다, 가정하다
invite:[동] 초대하다
agree:[동] 동의하다
prevent:[동] 막다, 예방하다
check:[동] 확인하다
improve:[동] 향상시키다
join:[동] 가입하다, 함께하다
explain:[동] 설명하다
receive:[동] 받다, 수령하다
become:[동] ~이 되다
lead:[동] 이끌다; [명] (금속) 납
connect:[동] 연결하다
understand:[동] 이해하다
provide:[동] 제공하다
win:[동] 이기다, 쟁취하다, 따다
worry:[동] 걱정하다; [명] 걱정
grow:[동] 자라다, 성장하다; [동] 키우다, 기르다
study:[동] 공부하다, 연구하다; [명] 공부, 연구
keep:[동] 유지하다, 계속하다; [동] 키우다, 기르다
collect:[동] 모으다, 수집하다
fail:[동] 실패하다
appear:[동] 나타나다; [동] ~처럼 보이다
seem:[동] ~처럼 보이다
discuss:[동] 토론하다


[m1-2: M1 - 바람의 길]
# 성공과 실패를 거치며 앞으로 나아가는 어휘들
pay:[동] 지불하다
believe:[동] 믿다
remember:[동] 기억하다
wear:[동] 입다, 착용하다
remove:[동] 제거하다, 지우다
borrow:[동] 빌리다
make:[동] 만들다
help:[동] 돕다; [명] 도움
fix:[동] 고치다, 고정하다
hurt:[동] 아프다; [동] 다치게 하다
warn:[동] 경고하다
select:[동] 선택하다
create:[동] 만들다, 창조하다
charge:[동] 청구하다; [동] 충전하다
share:[동] 공유하다; [명] 몫, 지분
avoid:[동] 피하다
communicate:[동] 의사소통하다
increase:[동] 증가하다; [명] 증가
realize:[동] 깨닫다; [동] 실현하다
refuse:[동] 거절하다
consider:[동] 고려하다; [동] 여기다
recover:[동] 회복하다, 되찾다
include:[동] 포함하다
enable:[동] 가능하게 하다
reduce:[동] 줄이다
require:[동] 요구하다, 필요로 하다
participate:[동] 참여하다
develop:[동] 개발하다, 발전시키다
deliver:[동] 배달하다, 전달하다; [동] (아이를) 낳다, 출산하다
attend:[동] 참석하다, (학교에) 다니다; [동] 주의를 기울이다
suggest:[동] 제안하다; [동] 암시하다, 보여주다
serve:[동] 제공하다, 봉사하다
demand:[동] 요구하다; [명] 수요
affect:[동] 영향을 미치다
operate:[동] 작동하다, 운영하다; [동] 수술하다
discover:[동] 발견하다
describe:[동] 묘사하다, 설명하다
compare:[동] 비교하다
protect:[동] 보호하다
produce:[동] 생산하다
gain:[동] 얻다, 증가하다; [명] 얻은 것, 이득
lose:[동] 잃다, 지다
remain:[동] 남아 있다; [동] 여전히 ~이다
respect:[명] 존중; [동] 존중하다
explore:[동] 탐험하다
recycle:[동] 재활용하다
disappoint:[동] 실망시키다
accept:[동] 받아들이다
reach:[동] 도달하다, 닿다


[m1-3: M1 - 사람과 세상]
# 세상과 사람, 경험과 관계를 나타내는 단어들
cause:[동] 일으키다, 야기하다; [명] 원인, 명분
earn:[동] 벌다, 얻다
repeat:[동] 반복하다
exist:[동] 존재하다
advise:[동] 조언하다
replace:[동] 교체하다, 대신하다
steal:[동] 훔치다
prove:[동] 증명하다
behave:[동] 행동하다
obtain:[동] 얻다, 습득하다
destroy:[동] 파괴하다
feed:[동] 먹이다, [명] 먹이
deal:[동] 다루다, 거래하다
reply:[동] 대답하다, 답장하다
occur:[동] 발생하다, 일어나다
ignore:[동] 무시하다
treat:[동] 다루다, 대하다; [동] 치료하다
educate:[동] 교육하다
manage:[동] 관리하다; [동] (겨우) 해내다
express:[동] 표현하다
attract:[동] 끌어당기다
complete:[동] 완성하다; [형] 완료된
escape:[동] 탈출하다; [명] 탈출
contain:[동] 포함하다, 담고 있다
represent:[동] 나타내다; [동] 대표하다
inform:[동] 알리다
persuade:[동] 설득하다
establish:[동] 설립하다, 확립하다
perform:[동] 공연하다; [동] 수행하다
donate:[동] 기부하다
differ:[동] 다르다
argue:[동] 주장하다; [동] 논쟁하다, 말싸움하다
organize:[동] 조직하다; [동] 정리하다
overcome:[동] 극복하다
motivate:[동] 동기를 부여하다
reflect:[동] 반사하다; [동] 반영하다
contact:[동] 연락하다; [명] 접촉, 연락
benefit:[명] 이득, 혜택; [동] 이익을 얻다
progress:[동] 진전하다, 발전하다; [명] 진전, 발전
effort:[명] 노력
habit:[명] 습관
reason:[명] 이유; [동] 추론하다, 사고하다
idea:[명] 생각, 아이디어
future:[명] 미래
success:[명] 성공
meaning:[명] 의미
knowledge:[명] 지식
difference:[명] 차이
effect:[명] 영향, 효과


[m1-4: M1 - 생각과 지식]
# 생각과 사회, 가치와 지식을 이해하는 어휘들
behavior:[명] 행동
situation:[명] 상황
choice:[명] 선택
decision:[명] 결정
purpose:[명] 목적
environment:[명] 환경
skill:[명] 기술, 능력
experience:[명] 경험; [동] 경험하다
opportunity:[명] 기회
ability:[명] 능력
responsibility:[명] 책임
attitude:[명] 태도
competition:[명] 경쟁
solution:[명] 해결책
method:[명] 방법
adventure:[명] 모험
resource:[명] 자원
control:[명] 통제, 조절; [동] 통제하다, 조절하다
project:[명] 프로젝트; [동] 투사하다, 투영하다
stress:[명] 스트레스; [명] 강조; [동] 강조하다
problem:[명] 문제
health:[명] 건강
chance:[명] 기회, 가능성
information:[명] 정보
practice:[명/동] 연습(하다); [명/동] 실행(하다)
opinion:[명] 의견
danger:[명] 위험
world:[명] 세계
culture:[명] 문화
society:[명] 사회
government:[명] 정부
pollution:[명] 오염
climate:[명] 기후
community:[명] 지역 사회, 공동체
research:[명] 연구
quality:[명] 질; [형] 질 좋은; [명] 특성, 성질
quantity:[명] 양
goal:[명] 목표
target:[명] 목표, 표적
value:[명] 가치, 값; [동] 소중히 여기다; [동] 평가하다
truth:[명] 진실
fact:[명] 사실
system:[명] 체계, 시스템
direction:[명] 방향; [명] 지시, 감독
communication:[명] 의사소통
context:[명] 문맥, 맥락
sentence:[명] 문장; [동] 판결 내리다
subject:[명] 주제, 과목; [명] 피험자, 피사체
content:[명] 내용; [형] 만족하는


[m2-1: M2 - 감정과 마음]
# 사람의 성격과 감정, 관계를 표현하는 살아 있는 마음의 단어들
character:[명] 등장인물; [명] 성격, 인격
personality:[명] 성격, 인격
positive:[형] 긍정적인
active:[형] 활동적인, 능동적인
energetic:[형] 활기찬, 에너지 넘치는
eager:[형] 열망하는, 간절히 원하는
cheerful:[형] 쾌활한
bold:[형] 대담한; [형] 굵은, 두꺼운
confident:[형] 자신감 있는
tender:[형] 다정한, 부드러운
generous:[형] 관대한
gentle:[형] 온화한
sensitive:[형] 민감한
polite:[형] 예의 바른
responsible:[형] 책임감 있는
diligent:[형] 부지런한
attractive:[형] 매력적인
curious:[형] 호기심이 많은
realistic:[형] 현실적인
negative:[형] 부정적인
odd:[형] 이상한; [형] 홀수인
rude:[형] 무례한
silly:[형] 어리석은
passive:[형] 수동적인
selfish:[형] 이기적인
mood:[명] 기분
pleasant:[형] 기분 좋은
delight:[명] 기쁨
excite:[동] 흥분시키다
amaze:[동] 놀라게 하다
thrill:[동] 매우 흥분시키다
satisfy:[동] 만족시키다
grateful:[형] 감사하는
hopeful:[형] 희망적인
pride:[명] 자부심; [명] (사자의) 한 무리
sincere:[형] 진실한
offend:[동] 기분을 상하게 하다
annoy:[동] 짜증나게 하다
scare:[동] 겁먹게 하다
frighten:[동] 무섭게 하다
embarrass:[동] 당황하게 하다
regret:[명] 후회, 유감; [동] 후회하다, 유감스러워하다
anxious:[형] 불안한
jealous:[형] 질투하는
envy:[동] 부러워하다
ashamed:[형] 부끄러운
fault:[명] 잘못
tension:[명] 긴장


[m2-2: M2 - 모험과 소통]
# 도전과 소통, 판단과 성장을 통해 앞으로 나아가는 모험의 단어들
lifetime:[명] 평생
fate:[명] 운명
childhood:[명] 어린 시절
youth:[명] 젊음, 청춘
mature:[형] 성숙한, 무르익은
challenge:[명] 도전; [동] 도전하다; [명] 어려움
courage:[명] 용기
encounter:[명] 만남, 마주침; [동] 우연히 마주치다, 조우하다
succeed:[동] 성공하다; [동] 잇다, 계승하다
achieve:[동] 성취하다
interact:[동] 상호작용하다
mention:[동] 언급하다; [명] 언급
respond:[동] 응답하다
react:[동] 반응하다
announce:[동] 발표하다, 알리다
emphasize:[동] 강조하다
attention:[명] 주의, 관심
claim:[동] 주장하다; [명] 주장, 권리
insist:[동] 주장하다, 고집하다
debate:[명] 토론
convince:[동] 확신시키다
blame:[명] 비난; [동] 비난하다
admit:[동] 인정하다
interrupt:[동] 방해하다
encourage:[동] 격려하다, 촉진하다
trust:[명] 신뢰; [동] 신뢰하다
pretend:[동] ~인 척하다
remind:[동] 상기시키다
recognize:[동] 알아보다, 인식하다; [동] 인정하다
regard:[동] 여기다, 간주하다
confirm:[동] 확인해주다, 맞다고 하다
associate:[동] 연상하다, 연관시키다; [동] 교류하다, 어울리다
intend:[동] 의도하다
contrast:[명] 차이, 대조; [동] 대조하다
determine:[동] 결정하다; [동] 알아내다, 밝히다
define:[동] 정의하다
conclude:[동] 결론짓다
confuse:[동] 혼란시키다
pursue:[동] 추구하다
concentrate:[동] 집중하다


[m2-3: M2 - 현실과 여정]
#공간과 이동, 생활과 세상을 이해하는 데 필요한 현실 세계의 단어들
furniture:[명] 가구
closet:[명] 옷장
drawer:[명] 서랍
shelf:[명] 선반
ladder:[명] 사다리
refrigerator:[명] 냉장고
microwave:[명] 전자레인지
switch:[명] 스위치; [동] 바꾸다, 전환하다
pillow:[명] 베개
faucet:[명] 수도꼭지
recipe:[명] 요리법
chop:[동] 잘게 썰다
slice:[동] 얇게 썰다
stir:[동] 휘젓다; [동] (감정 따위를) 불러 일으키다
blend:[동] 섞다
pour:[동] 붓다
melt:[동] 녹이다, 녹다
construct:[동] 건설하다
structure:[명] 구조
ceiling:[명] 천장
attic:[명] 다락방
chimney:[명] 굴뚝
basement:[명] 지하실
elevator:[명] 엘리베이터
exit:[명] 출구
garden:[명] 정원
courtyard:[명] 안뜰
compass:[명] 나침반
toward:[전] ~을 향하여
upward:[부] 위쪽으로
downward:[부] 아래쪽으로
forward:[부] 앞으로
backward:[부] 뒤쪽으로
beyond:[전] ~을 넘어
position:[명] 위치
among:[전] ~사이에
edge:[명] 가장자리, 모서리, 날; [명] 강점, 장점
distance:[명] 거리
opposite:[형] 반대편의
vehicle:[명] 탈것
route:[명] 경로
track:[명] 길, 선로; [동] 추척하다
avenue:[명] 대로
pedestrian:[명] 보행자
sidewalk:[명] 보도
transport:[명] 운송; [동] 운송하다
passenger:[명] 승객
destination:[명] 목적지
approach:[명] 접근; [동] 다가가다, 접근하다
wander:[동] 돌아다니다


[m2-4: M2 - 학업과 연구]
#학문과 사회, 과학과 기술을 이해하는 데 필요한 핵심 지식의 단어들
academic:[형] 학업의
institute:[명] 기관, 연구소; [동] 도입하다, 시작하다
semester:[명] 학기
course:[명] 과정, 강좌
junior:[명] 하급생; [명] (4년제 학교의) 3학년
senior:[명] 상급생; [명] 노인, 어르신; [명] (4년제 학교의) 4학년
peer:[명] 또래, 동료
principal:[명] 교장
detail:[명] 세부 사항
category:[명] 범주
topic:[명] 주제
principle:[명] 원칙
theory:[명] 이론
concept:[명] 개념
presentation:[명] 발표
instruct:[동] 가르치다, 지시하다
lecture:[명] 강의
consult:[동] 상담하다
counsel:[동] 조언하다
difficulty:[명] 어려움
acquire:[동] 습득하다
accomplish:[동] 성취하다
review:[명] 복습, 검토; [동] 복습하다, 검토하다
intellectual:[형] 지적인
intelligent:[형] 지능이 높은, 똑똑한
ancient:[형] 고대의
tradition:[명] 전통
custom:[명] 관습
liberty:[명] 자유
treasure:[명] 보물
kingdom:[명] 왕국
empire:[명] 제국
dynasty:[명] 왕조
royal:[형] 왕실의
noble:[형] 고귀한
religion:[명] 종교
heaven:[명] 천국, 하늘
soul:[명] 영혼
faith:[명] 믿음
miracle:[명] 기적
temple:[명] 신전, 사원
examine:[동] 조사하다
experiment:[명] 실험; [동] 실험하다


`;
