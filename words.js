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

[spell_1: 수행의 숲]
#2학기 2차 수행 단어. 철자까지 확인하는 까탈스러운 정령들이다!
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


[CE2_L3: 3과의 숲]
# 교과서 3과에 나오는 단어 정령들이 노니는 곳
resilience	:	[명] (힘든 상황으로부터의) 회복력
overcome	:	[동] 극복하다
wellness	:	[명] 건강(함)
deal with ~	:	[동] ~을 처리하다[다루다]
cultivate	:	[동] (지식∙자질 등을) 기르다, 함양하다
inner	:	[형] 내면의
strength	:	[명] 강인함, 정신력
free from ~	:	[형] ~을 면한, ~의 염려가 없는
adversity	:	[명] 역경, 고난
take the form of ~	:	[동] ~의 모습을 취하다
failure	:	[명] 실패
issue	:	[명] 문제; [동] 발행하다
cope with	:	[동] ~에 대처하다
ability	:	[명] 능력
known as ~	:	[형] ~라고 알려져 있는
spring back	:	[동] 되튀다
bouncy	:	[형] 잘 튀는, 탄력 있는
resilient	:	[형] 회복력 있는, 탄력 있는
bounce back	:	[동] (병∙곤경 등에서) 다시 회복되다
benefit from	:	[동] ~에서 득을 보다
countless	:	[형] 셀 수 없이 많은
survive	:	[동] (위기 등을) 견뎌내다, 이겨내다; [동] 생존하다, 살아남다
a stepping stone to ~	:	[명] ~을 위한 발판
growth	:	[명] 성장
fairy tale	:	[명] 동화
poverty	:	[명] 가난, 빈곤
loss	:	[명] 죽음, 상실
disrespect	:	[동] ~에게 무례하게 대하다
source	:	[명] 원천, 근원
blessing	:	[명] 축복
inspire	:	[동] ~에게 영감을 주다
duckling	:	[명] 새끼 오리
athlete	:	[명] (운동)선수
challenge	:	[명] 도전, 과제; [동] 도전하다; [동] 이의를 제기하다
opportunity	:	[명] 기회
medical condition	:	[명] 질병
result in ~	:	[동] ~을 야기하다
beneath	:	[전] 아래[밑]에
surgery	:	[명] 수술
compete against ~	:	[동] ~와 경쟁하다
disability	:	[명] 장애, 불능
national	:	[형] 국가의, 전국적인
participate in ~	:	[동] ~에 참가하다
public speaking	:	[명] 공개연설
physical	:	[형] 육체[신체]의; [형] 물리적인
condition	:	[명] 상태; [명] 조건; [명] 질환
potential	:	[명] 잠재력; [형] 잠재적인
exceptional	:	[형] 예외적인, 아주 드문, 특출난
crisis	:	[명] 위기
otherwise	:	[부] (만약) 그렇지 않으면
lasting	:	[형] 지속적인
muscle	:	[명] 근육
build ~ up	:	[동] ~을 더 높이다[강력하게 만들다]
thought	:	[명] 생각
behavior	:	[명] 행동
allow	:	[동] 허락하다, 허용하다
painful	:	[형] (마음이) 아픈, 고통스러운
basic	:	[형] 기본[근본]적인
strategy	:	[명] 전략
accept	:	[동] 받아들이다, 수용하다
respect	:	[동] 존중하다; [명] 존중
passive	:	[형] 수동적인, 소극적인
suffering	:	[명] 고통
single ~ out	:	[동] ~을 골라내다
face	:	[동] 직면하다[닥쳐오다]; [명] 얼굴, 면
focus on ~	:	[동] ~에 집중하다, 초점을 맞추다
embrace	:	[동] 수용하다, 포용하다
unexpected	:	[형] 예기치 않은, 뜻밖의
obstacle	:	[명] 장애물
think of ~	:	[동] ~을 생각하다
that is (to say)	:	[부] 즉, 말하자면
personal	:	[형] 개인의, 개인적인
look after ~	:	[동] ~을 돌보다, ~을 살피다
present	:	[형] 현재의; [명] 선물; [동] 제시하다, 제공하다
moment	:	[명] 순간
regret	:	[동] 후회하다; [명] 후회
meditate	:	[동] 명상하다
work	:	[동] 작동되다; [동] 효과가 있다
take a deep breath	:	[동] 깊이 숨 쉬다
observe	:	[동] 관찰하다; [동] 준수하다
judge	:	[동] 판단하다, 평가하다; [명] 판사, 심판
proceed with ~	:	[동] ~을 계속 진행하다
based on ~	:	[전] ~에 근거하여, ~를 기반으로
go forward with ~	:	[동] ~을 진행시키다
connect	:	[동] 연결하다
trust	:	[동] (사람을) 신뢰하다, 믿다; [명] 믿음, 신뢰
counselor	:	[명] 상담사
clarity	:	[명] 명료함, 명확함
respond to ~	:	[동] ~에 대응하다, 응답하다
tend toR	:	[동] ~하는 경향이 있다
support	:	[명] 격려, 도움; [동] 도와주다, 지지하다
remove	:	[동] 없애다, 제거하다
urge	:	[동] 권고하다, 촉구하다; [명] 충동
particularly	:	[부] 특히
in the middle of ~	:	[전] ~의 한가운데에
uncertainty	:	[명] 불확실성
tough	:	[형] 힘든, 거친
endure	:	[동] 참다, 견디다
apply A to B	:	[동] A를 B에 적용하다
minor	:	[형] 작은, 사소한
gradually	:	[부] 서서히, 점진적으로
fulfilled	:	[형] 만족감[성취감]을 느끼는
a key to ~	:	[명] ~의 열쇠[단서]


[CE2_L4: 4과의 바다]
# 교과서 4과에 나오는 단어 정령들이 노니는 곳
microscope	:	[명] 현미경
essential	:	[형] 핵심적인, 필수적인
invent	:	[동] ~을 발명하다
discover	:	[동] ~을 발견하다
bacterium / bacteria	:	[명] 박테리아
structure	:	[명] 구조; [명] 구조물, 건물
organism	:	[명] 유기체, 생물체
certain	:	[형] 어떤, 특정한; [형] 확신하는
accessible	:	[형] 접근 가능한, 이용 가능한
due to ~	:	[전] ~ 때문에
cost	:	[명] 가격, 비용; [동] ~의 비용이 들다
solution to ~	:	[명] ~에 대한 해결책
achieve	:	[동] ~을 성취하다, 달성하다 (-ve)
magnification	:	[명] 확대
less than ~	:	[형] ~보다 적은, ~ 미만의
in parts	:	[전명] 부품들로
research	:	[동] ~을 연구하다
method	:	[명] 방법
identify	:	[동] ~을 확인[식별]하다
infectious	:	[형] 전염성의
come across ~	:	[동] ~을 우연히 발견하다
expensive	:	[형] 값비싼
annually	:	[부] 매년, 해마다
diagnosis	:	[명] 진단
crucial	:	[형] 결정적인, 핵심적인
prevent	:	[동] ~을 막다
spread	:	[명] 확산; [동] 퍼지다, 확산하다
sit	:	[동] ~한 상태로 있다
unused	:	[형] 사용되지 않는
multiple	:	[형] 다수의, 다양한
bulky	:	[형] 부피가 큰, 덩치가 있는
awkward	:	[형] 조작이 까다로운, 다루기 어려운
transport	:	[동] ~을 운반하다
require	:	[동] ~을 요구하다
operate	:	[동] 작동하다; [동] 수술하다; [동] 운영하다, 수행하다
maintain	:	[동] 유지하다
delicate	:	[형] 섬세한
instrument	:	[명] 기구
nervous	:	[형] 초조한, 불안한
wonder	:	[동] (~을) 궁금해 하다;[명] 불가사의
cheap	:	[형] 값싼
save	:	[동] ~을 구하다; [동] 아끼다, 절약하다
reflect	:	[동] (on) 숙고하다; [동] 반사하다; [동] 반영하다
not until ~	:	[접] ~한 후에야 비로소
affordable	:	[형] (가격이) 알맞은, 저렴한
take shape	:	[동] 구체화되다
graduate	:	[형] 대학원의, 석사 과정의; [동] 졸업하다
make a difference	:	[동] 변화를 일으키다
recognize	:	[동] ~을 인식하다, 알아보다; [동] 인정하다
eager toR	:	[형] ~하기를 열망하는
function	:	[동] 작동하다; [명] 기능, 작동; [명] 함수
properly	:	[부] 적절하게
meet the requirements	:	[동] 요구를 충족시키다
minimum	:	[형] 최소한의
eyepiece	:	[명] 접안렌즈
component	:	[명] 부품, 요소
specimen	:	[명] 표본, 시료
from side to side	:	[전명] 좌우로
explore	:	[동] 탐색하다
furthermore	:	[부] 더구나, 게다가
mechanism	:	[명] 작동 구조, 메커니즘
bring ~ into focus	:	[동] ~에 초점을 맞추다
accomplish	:	[동] ~을 성취하다, 달성하다 (-sh)
close to ~	:	[형/부] ~에 가까이
far from ~	:	[전명] ~로부터 멀리
light source	:	[명] 광원
illuminate	:	[동] (빛으로) ~을 비추다
ideal	:	[형] 이상적인, 완벽한
material	:	[명] 재료; [명] 물질, [형] 물질적인
likely	:	[부] 아마도
enormously	:	[부] 엄청나게
on the other hand	:	[부] 반면에
deliver ~ performance	:	[동] ~한 성능을 보여주다
experiment	:	[명] 실험; [동] 실험하다
suitable	:	[형] 적절한, 적합한
compromise	:	[명] 타협(안), 절충(안); [동] 타협하다; [동] 악화시키다
manufacturer	:	[명] 제조업체, 제조업자
settle for ~	:	[동] ~로 만족하다
middle ground	:	[명] 중도, 절충안
extreme	:	[명] 극단
inexpensive	:	[형] 저렴한, 비싸지 않은
determined toR	:	[형] ~할 것을 결심한
remain	:	[동] ~한 채로 남아 있다
draw	:	[동] ~을 그리다; [동] 비기다; [동] 끌다
realize	:	[동] ~을 깨닫다; [동] 실현하다, 현실화하다
medium	:	[명] 제작 재료; [명] 매체, 매개
fold	:	[동] 접다
with precision	:	[전명] 정밀하게
available	:	[형] 이용 가능한
attempt	:	[명] 시도[도전]; [동] 시도하다
ultimately	:	[부] 결국, 끝내
settle on[upon] ~	:	[동] ~로 결정하다
waterproof	:	[형] 방수의
cardboard	:	[명] 판지, 마분지
name	:	[명] 이름을 지어주다, 명명하다; [명] 이름
invention	:	[명] 발명(품)
capable of V-ing	:	[형] ~할 수 있는
examine	:	[동] ~을 검사하다
single-celled	:	[형] 단세포의
incredibly	:	[부] 믿을 수 없을 만큼, 놀랍도록
portable	:	[형] 휴대 가능한
weigh	:	[동] 무게가 ~이다; [동] 무게를 재다
fit in[into] ~	:	[동] ~에 알맞다, ~에 쏙 들어가다
external	:	[형] 외부의
power source	:	[명] 동력의 원천, 전원
last	:	[동] 오래가다; [형] 마지막, 지난
fall	:	[명] 낙하, 추락; [동] 떨어지다
usefulness	:	[명] 유용함
enhance	:	[동] 향상시키다
compatibility	:	[명] 호환성
take pictures	:	[동] 사진을 찍다
record	:	[동] (~을) 기록하다; [명] 기록
project	:	[동] ~을 영사[투사]하다; [명] 계획, 프로젝트
high-resolution	:	[형] 고해상도의
distribute	:	[동] ~을 배포하다, 유통하다
invaluable	:	[형] 대단히 귀중한
worldwide	:	[형] 전 세계의
utilize	:	[동] ~을 활용하다
purpose	:	[명] 목적
instrumental in V-ing	:	[형] ~ 하는 데 매우 중요한 역할을 하는
detect	:	[동] 발견하다, 탐지하다
fake	:	[형] 가짜의
antimalarial	:	[형] 말라리아 치료[예방]의
responsible for ~	:	[형] ~의 원인이 되는; [형] ~에 책임이 있는, ~을 관장하는
sub-Saharan	:	[형] 사하라 사막 이남의
crush ~ into …	:	[동] ~을 …로 분쇄하다
uniform	:	[형] 균일한; [명] 유니폼, 제복
particle	:	[명] 입자
mere	:	[형] 단순한
publish	:	[동] ~을 발표하다, 출판하다
currently	:	[부] 지금, 현재
in progress	:	[전명] 진행 중인
introduce ~ to …	:	[동] ~에게 …을 소개하다, 처음 접하게 하다
give up on ~	:	[동] ~에 대한 희망을 버리다
achievement	:	[명] 성취, 업적
occur	:	[동] 일어나다, 발생하다
lack	:	[동] ~가 부족하다; [명] 부족, 없음
access to ~	:	[명] ~로의 접근 (기회)
health care	:	[명] 의료[보건] 서비스
preventable	:	[형] 예방할 수 있는
increasingly	:	[부] 점점 더





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
