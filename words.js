// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "덕정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_dj1",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

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
    bossHp1: 12,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 15,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 1,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🔥 [시험 직전 파이널] 하드코어 마왕전 설정
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 10,                              // 출제 문제 수 (마왕 체력)
        playerHp: 1,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};

// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\

const WORLD_MAPS_TEXT = `

[sh_1: 수행평가의 숲 1]
#2학기 2차 수행평가 단어
implicit	:	[형] 암시적인
indigenous	:	[형] 토착의
indispensable	:	[형] 없어서는 안 되는
inherent	:	[형] 내재된
innate	:	[형] 선천적인
intrinsic	:	[형] 본질적인
jeopardize	:	[동] 위태롭게 하다
journal	:	[명] 학술지
juvenile	:	[형] 청소년의
kinship	:	[명] 유대
knowledgeable	:	[형] 지식이 많은
lament	:	[동] 한탄하다
landscape	:	[명] 경관
latent	:	[형] 잠재된
launch	:	[동] 시작하다
legacy	:	[명] 유산
legitimate	:	[형] 정당한
liable	:	[형] 책임이 있는
literacy	:	[명] 문해력
magnitude	:	[명] 규모
mandatory	:	[형] 의무적인
manifest	:	[동] 나타나다
manipulate	:	[동] 조작하다
massive	:	[형] 대규모의
mechanism	:	[명] 메커니즘
metaphor	:	[명] 은유
migrate	:	[동] 이동하다
modest	:	[형] 겸손한
motivate	:	[동] 동기를 부여하다
narrative	:	[명] 서사
neglect	:	[동] 소홀히 하다
neutral	:	[형] 중립적인
nevertheless	:	[부] 그럼에도 불구하고
notion	:	[명] 관념
notorious	:	[형] 악명 높은
obligation	:	[명] 의무
obscure	:	[형] 모호한 (o_)
obstacle	:	[명] 장애물
omit	:	[동] 생략하다
opponent	:	[명] 상대
optimistic	:	[형] 낙관적인
outbreak	:	[명] 발생
overlook	:	[동] 간과하다
participate	:	[동] 참여하다
perception	:	[명] 인식
permanent	:	[형] 영구적인
perspective	:	[명] 관점
persuade	:	[동] 설득하다
phenomenon	:	[명] 현상
pioneer	:	[명] 선구자
potential	:	[명] 잠재력
precaution	:	[명] 예방 조치
precise	:	[형] 정확한


[sh_2: 수행평가의 숲 2]
#2학기 2차 수행평가 단어
prejudice	:	[명] 편견
privilege	:	[명] 특권
procedure	:	[명] 절차
prohibit	:	[동] 금지하다
prominent	:	[형] 저명한
provoke	:	[동] 유발하다
qualitative	:	[형] 질적인
quantify	:	[동] 수치화하다
quota	:	[명] 할당량
radical	:	[형] 급진적인
rational	:	[형] 합리적인
recipient	:	[명] 수령자
refine	:	[동] 다듬다
reform	:	[명] 개혁
reinforce	:	[동] 강화하다
relevant	:	[형] 관련된
reliable	:	[형] 믿을 만한
reluctant	:	[형] 꺼리는
remarkable	:	[형] 놀라운
represent	:	[동] 대표하다
restrict	:	[동] 제한하다
reveal	:	[동] 드러내다
scarce	:	[형] 부족한
scheme	:	[명] 계획
scholar	:	[명] 학자
secondary	:	[형] 부차적인
significant	:	[형] 중요한
simultaneous	:	[형] 동시의
sophisticated	:	[형] 정교한
specific	:	[형] 구체적인
speculate	:	[동] 추측하다
subsequent	:	[형] 그 후의
substantial	:	[형] 상당한
subtle	:	[형] 미묘한
sufficient	:	[형] 충분한
supervise	:	[동] 감독하다
technical	:	[형] 기술적인
temporary	:	[형] 일시적인
tendency	:	[명] 경향
tension	:	[명] 긴장
theoretical	:	[형] 이론상의
thorough	:	[형] 철저한
thrive	:	[동] 번성하다
tolerate	:	[동] 참다
transition	:	[명] 전환
typical	:	[형] 전형적인
undermine	:	[동] 약화시키다
unique	:	[형] 독특한
universal	:	[형] 보편적인
utilize	:	[동] 활용하다
vague	:	[형] 모호한 (v_)
venture	:	[명] 모험적인 시도






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

`;
