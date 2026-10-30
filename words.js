// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "덕정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_dj1",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)
    adminName: "책선생",        // 👈 선생님 성함 지정!

    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 3, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 20,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 20,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 2,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🚨 [안개 구출전 일일 쿼터 설정] (일반 단어 계약량에 따라 하루 의무 구출량 배정)
    rescueQuota: [
        { reqWords: 400, quota: 20 }, // 일반 단어 400마리 이상: 하루 20마리
        { reqWords: 240, quota: 15 }, // 일반 단어 240마리 이상: 하루 15마리
        { reqWords: 120, quota: 10 }, // 일반 단어 120마리 이상: 하루 10마리
        { reqWords: 0,   quota: 5  }  // 기본(0마리 이상): 하루 5마리
    ],

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
build ~ up	:	[동] 더 높이다, 다지다
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
single ~ out	:	[동] 골라내다
face	:	[동] 직면하다[닥쳐오다]; [명] 얼굴, 면
focus on ~	:	[동] ~에 집중하다, 초점을 맞추다
embrace	:	[동] 수용하다, 포용하다
unexpected	:	[형] 예기치 않은, 뜻밖의
obstacle	:	[명] 장애물
think of ~	:	[동] 생각하다
that is (to say)	:	[부] 즉, 말하자면
personal	:	[형] 개인의, 개인적인
look after ~	:	[동] 돌보다, 보살피다
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


[mg_h1_26.10_1: 고1 26.10모 1]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
think of ~ as ...	:	[동] ~을 ...로 생각하다, 여기다
global	:	[형] 세계적인, 전지구적인
global citizen	:	[명] 세계 시민
necessary	:	[형] 필요한
skeptical	:	[형] 회의적인
citizenship	:	[명] 시민권, 시민 의식
nation-state	:	[명] 국민 국가
after all	:	[부] 어쨌든, 따지고 보면
exist	:	[동] 존재하다
rise	:	[동] 상승하다; [명] 상승, 도래, 부상
identity	:	[명] 정체성
religion	:	[명] 종교
given ~	:	[전] ~을 고려하면
connection	:	[명] 연결, 관계
challenge	:	[명] 도전, 난제, 어려움; [동] 도전하다; [동] 이의를 제기하다
face	:	[명] 얼굴, 면; [동] 직면하다, 마주하다
layer	:	[동] 겹겹이 쌓다, 더하다
replace	:	[동] 대신하다, 대체하다
precisely	:	[부] 정확히
obligation	:	[명] 의무
community	:	[명] 공동체, 지역 사회
people	:	[명] 민족, 사람들
citizen	:	[명] 시민
century	:	[명] 세기
instead	:	[부] 대신에
such as	:	[전] 예를 들어, ~와 같은
unsatisfied	:	[형] 불만족한
professional	:	[명] 전문직 종사자
theme	:	[명] 주제
belief	:	[명] 믿음, 신념
mysterious	:	[형] 불가사의한, 알 수 없는
miraculously	:	[부] 기적적으로
stumble into ~	:	[동] 우연히 ~하게 되다
typically	:	[부] 보통, 일반적으로
meaningfully	:	[부] 의미 있게
alter	:	[동] 바꾸다, 변경하다
current	:	[형] 현재의
head to ~	:	[동] ~로 향하다
job board	:	[명] 구인 게시판
similar (to ~)	:	[형] (~와) 비슷한
universe	:	[명] 우주
sprinkle	:	[동] 뿌리다
hit the refresh button	:	[동] 새로고침 버튼을 누르다, 새로 시작하다, 분위기를 바꾸다
set oneself up	:	[동] 스스로를 (~한 상황에) 처하게 하다
disenchanted	:	[형] 환멸을 느낀
rearrange	:	[동] 재배열하다
switch up	:	[동] 바꾸다
approach	:	[명] 접근법
unsatisfactory	:	[형] 만족스럽지 못한
competent	:	[형] 유능한, 경쟁력 있는
pursue	:	[동] 추구하다
stability	:	[명] 안정(성)
prize	:	[명] 보상, 상(품)
career	:	[명] 직업, 경력
situation	:	[명] 상황
role	:	[명] 역할, 직책
department	:	[명] 부서
effort	:	[명] 분투, 노력
sociologist	:	[명] 사회학자
argue	:	[동] 주장하다; [동] 말싸움하다

[mg_h1_26.10_2: 고1 26.10모 2]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
perception	:	[명] 인식, 지각
usage	:	[명] 사용, 사용법
property	:	[명] 속성, 특성
nature	:	[명] 자연; [명] 본성, 성질
tick away	:	[동] (시계가) 똑딱거리며 흘러가다
psychological	:	[형] 심리적인
phenomenon / phenomena	:	[명] 현상
individual	:	[명] 개(개)인; [형] 개별적인, 개개의
perceive	:	[동] 인식하다, 지각하다
to a large degree	:	[부] 상당한 정도까지, 크게
tradition	:	[명] 전통
norm	:	[명] 규범
demonstrate	:	[동] 보여 주다, 시연하다, 입증하다
fundamental	:	[형] 기본적인, 근본적인
unit	:	[명] 단위
invention	:	[명] 발명(품)
vary	:	[동] 다르다, 다양하다
structure	:	[명] 구조; [명] 구조물, 건물; [동] 구성하다, 조직하다
routine	:	[형] 일상적인, 평범한
retirement	:	[명] 은퇴
dictate	:	[동] 좌우하다, 결정하다
essential	:	[형] 핵심적인, 본질적인
characteristic	:	[명] 특성, 특징
creation	:	[명] 창조물, 산물
internalize	:	[동] 내면화하다
come toR	:	[동] ~하게 되다
tick	:	[동] 똑딱거리다
shape	:	[동] 형성하다, 만들다; [명] 형태, 형상
influence	:	[명] 영향력; [동] 영향을 미치다
rhythm	:	[명] 리듬, 박자
pattern	:	[명] 패턴, 양식
nine-to-five	:	[형] 9시부터 5시까지 근무하는
illegal	:	[형] 불법의
corporate	:	[형] 기업의
come to light	:	[동] 드러나다, 밝혀지다
misconduct	:	[명] 위법 행위, 비행
expose	:	[동] 폭로하다, 드러내다
informant	:	[명] 제보자, 정보원
risk	:	[명] 위험; [동] (위험을 무릅쓰고) 걸다
put an end to	:	[동] ~을 끝내다
hence	:	[부] 그러므로, 따라서
whistleblower	:	[명] 내부 고발자
protection	:	[명] 보호
come into focus	:	[동] 주목받다, 초점이 맞춰지다
violation	:	[명] 위반
undetected	:	[형] 발각되지 않은
unpunished	:	[형] 처벌받지 않은
for fear of ~	:	[전] ~을 두려워하여
reprisal	:	[명] 보복
consequence	:	[명] 결과, 영향
third-party	:	[명] 제삼자
the rule of law	:	[명] 법치(주의)
assist	:	[동] 돕다
unlawful	:	[형] 불법적인
criminal	:	[형] 범죄의; [명] 범죄자
well-balanced	:	[형] 균형 잡힌
hesitation	:	[명] 주저, 망설임
corruption	:	[명] 부패
public good	:	[명] 공익, 공공의 선
law and order	:	[명] 법과 질서

[mg_h1_26.10_3: 고1 26.10모 3]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
harm	:	[명] 해, 해로움; [동] ~에 해를 끼치다
rule of law	:	[명] 법치주의, 법의 지배
affect	:	[동] 영향을 미치다
reduce	:	[동] 줄이다, 감소시키다
behavior / behaviour	:	[명] 행동, 행위
positive	:	[형] 긍정적인
disconnected	:	[형] 단절된, 동떨어진
reality	:	[명] 현실
achieve	:	[동] 성취하다, 달성하다
fall in love with ~	:	[동] ~에 빠지다, 반하다
push out of mind	:	[동] ~을 생각하지 않으려 하다
day-to-day	:	[명] 일상
suggest	:	[동] 제안하다; [동] 시사하다, 암시하다
fantasy	:	[명] 환상, 공상
put effort into ~	:	[동] ~에 노력을 기울이다
premature	:	[형] 시기상조의, 너무 이른
accomplishment	:	[명] 성취, 업적
romanticize	:	[동] 미화하다, 낭만적으로 생각하다
gloss over	:	[동] ~을 얼버무리다, 대충 넘어가다
intricacy	:	[명] 복잡함, 복잡한 사항
integrate	:	[동] 통합하다, 포함시키다
complex	:	[형] 복잡한; [명] 복합단지
sum up	:	[동] 요약하다; [동] 다 더하다, 총합하다
fantasize	:	[동] 공상하다, 상상하다
seduce	:	[동] 유혹하다, 꾀다
mentally	:	[부] 정신적으로
reflect	:	[동] (on) 숙고하다; [동] 반사하다; [동] 반영하다
necessity	:	[명] 필요
induce	:	[동] 유발하다, 유도하다, 일으키다
ambitious	:	[형] 야심 찬
barrier	:	[명] 장벽, 장애물
happen	:	[동] 일어나다, 발생하다
research	:	[명] 연구; [동] 연구하다
lead to ~	:	[동] ~로 이어지다, ~을 초래하다
provide	:	[동] 제공하다
false	:	[형] 거짓의, 잘못된
sense of accomplishment	:	[명] 성취감
recipe for ~	:	[명] ~의 원인이 되는 것, ~의 지름길
immortal	:	[형] 불멸의, 죽지 않는
jellyfish	:	[명] 해파리
exhibit	:	[동] 보이다, 나타내다, 전시하다
obvious	:	[형] 명백한, 분명한
aging	:	[명] 노화
biologically	:	[부] 생물학적으로
die of ~	:	[동] ~으로 죽다
likelihood	:	[명] 가능성
species / species	:	[명] (생물학적) 종
gerontologist	:	[명] 노인학자
clue	:	[명] 단서
defeat	:	[동] 물리치다, 이기다, 패배시키다
regenerate	:	[동] 재생하다
organism	:	[명] 유기체, 생물
fascinating	:	[형] 매력적인, 흥미로운
lack	:	[명] 결여, 부족; [동] ~가 결여되어 있다, 부족하다
apparent	:	[형] 명백한, 겉으로 보이는
relevant	:	[형] 관련 있는, 적절한
finding	:	[명] (연구) 결과, 발견
universal	:	[형] 보편적인

[mg_h1_26.10_4: 고1 26.10모 4]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
relate to ~	:	[동] ~와 관련되다; [동] ~에 공감하다
mechanism	:	[명] 메커니즘, 기제
mammal	:	[명] 포유동물
translate into ~	:	[동] (~에) 적용되다, ~로 이어지다
excite	:	[동] 흥분시키다, 자극하다
process	:	[명] 과정; [동] 처리하다, 가공하다
entire	:	[형] 전체의
translate	:	[동] 옮기다, 번역하다
gain	:	[동] 얻다; [명] 이득, 얻는 것
not at all	:	[부] 전혀 ~ 아닌
subsidy	:	[명] 보조금
regulation	:	[명] 규제, 규정
power plant	:	[명] 발전소
pollute	:	[동] 오염시키다
switch away from	 ~ :	[동] ~에서 (다른 것으로) 전환하다
coal	:	[명] 석탄
profit	:	[명] 이익, 수익; [동] 이익을 얻다
transition	:	[명] 전환, 이행
take ~ into account	:	[동] ~을 고려하다
prefer ~ over ...	:	[동] ~을 ...보다 선호하다
expansion	:	[명] 확대, 확장
match	:	[동] 일치하다; [동] ~에 맞먹다, 상응하다; [명] 성냥, 경기
contraction	:	[명] 축소, 수축
at the expense of ~	:	[전] ~을 희생하여, ~을 대가로 하여
ordinary	:	[형] 평범한, 일반적인
taxation	:	[명] 과세, 조세
moreover	:	[부] 게다가
perspective	:	[명] 관점, 시각
efficiency	:	[명] 효율성
distort	:	[동] 왜곡하다
emission	:	[명] 배출(량)
end up V-ing	:	[동] 결국 ~하게 되다
consumption	:	[명] 소비, 소모
worsen	:	[동] 악화시키다
switch	:	[동] 바꾸다, 전환하다; [명] 스위치, 전환
receive	:	[동] 받다, 수령하다
electricity	:	[명] 전기, 전류
freedom	:	[명] 자유
increase	:	[명] 증가, 상승; [동] 증가하다, 늘다
expense	:	[명] 비용, 지출
suffer from ~	:	[동] ~로 고통받다
pay for ~	:	[동] ~의 대금을 지불하다
limit	:	[동] 제한하다, 한정하다; [명] 제한, 한계
indeed	:	[부] 실제로, 사실
lower	:	[형] 낮은; [동] 낮추다
global warming	:	[명] 지구 온난화
opportunity set	:	[명] 기회 집합
lens	:	[명] 렌즈, (보는) 관점
economic	:	[형] 경제의, 경제적인
classical economics	:	[명] 고전 경제학
notion	:	[명] 개념, 생각
pricing	:	[명] 가격 책정
allocate	:	[동] 할당하다, 배분하다
resource	:	[명] 자원
result in ~	:	[동] 야기하다, 초래하다
benefit	:	[명] 이득, 이익; [동] 이익이 되다; [동] (from) ~로부터 이익을 얻다
reproduce	:	[동] 번식하다; [동] 재현하다, 복제하다
transport	:	[동] 수송하다, 이동시키다; [명] 수송, 교통
in the blink of an eye	:	[부] 눈 깜짝할 사이에

[mg_h1_26.10_5: 고1 26.10모 5]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
light-year	:	[명] 광년 (빛이 1년에 가는 거리)
humanity	:	[명] 인류
participate in ~	:	[동] ~에 참가하다, 참여하다
prosperity	:	[명] 번영
counselor	:	[명] 상담사
generative	:	[형] 생성의, 생성형의
potential	:	[명] 잠재력; [형] 잠재적인
dimension	:	[명] 차원, 영역
abundant	:	[형] 풍부한
bias	:	[명] 편향, 편견
scarcity	:	[명] 희소성, 부족
upon ~	:	[형] (~에게) 닥친
view	:	[명] 시야, 광경; [명] 견해, 관점; [동] 보다, 여기다
good	:	[명] 상품, 재화
communicate	:	[동] 의사소통하다
fully	:	[부] 완전히
explorer	:	[명] 탐험가
researcher	:	[명] 연구자
engineer	:	[명] 기술자, 엔지니어
pollution	:	[명] 오염
diversity	:	[명] 다양성
with something on one's mind	:	[형] 마음에 어떤 생각을 품은
concern	:	[명] 걱정, 우려, 관심사
address	:	[동] 다루다, 해결하려 하다; [동] 연설하다; [명] 주소
pay attention to ~	:	[동] ~에 주의를 기울이다
response	:	[명] 반응, 응답
attend to ~	:	[동] ~에 주의를 기울이다, ~을 처리하다
some sort of	:	[형] 일종의, 어떤
outward	:	[형] 겉으로 드러나는, 외적인
signal	:	[명] 신호; [동] 나타내다, 신호를 보내다
indicate	:	[동] 나타내다, 보여 주다
whether ~ or otherwise	:	[접] ~이든 그렇지 않든
key	:	[명] 비결, 핵심; [명] 열쇠
intention	:	[명] 의도
feel heard	:	[동] 경청받는다고 느끼다
customer service	:	[명] 고객 서비스
imagine	:	[동] 상상하다, 마음속에 그리다
completely	:	[부] 완전히
sort	:	[명] 종류; [동] 분류하다
impossible	:	[형] 불가능한
whether or not ~	:	[접] ~이든 아니든
avoid	:	[동] 피하다
figure out	:	[동] 알아내다, 이해하다
hidden	:	[형] 숨겨진
collect	:	[동] 수집하다
make sense	:	[동] 말이 되다, 이치에 맞다
the very ~	:	[형] 바로 그 ~ 
take place	:	[동] 일어나다, 개최되다
inseparable	:	[형] 분리할 수 없는
define	:	[동] 정의하다, 규정하다
beneath	:	[부][전] ~ 아래에
intertwine	:	[동] 뒤얽히다, 밀접하게 관련되다
central	:	[형] 중심적인, 핵심적인
spatial	:	[형] 공간의, 공간적인
spatial framework	:	[명] 공간적 틀
medium / media	:	[명] 매체, 매개, 매질
merely	:	[부] 그저, 단지
context	:	[명] 맥락, 상황
exterior	:	[형] 외부의, 바깥의
suppose	:	[동] 생각하다, 가정하다

[mg_h1_26.10_6: 고1 26.10모 6]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
literary	:	[형] 문학의
critic	:	[명] 비평가
make the point	:	[동] 주장하다, 요지를 밝히다
elegantly	:	[부] 우아하게, 품위 있게
wrap (up)	:	[동] 감싸다, 포장하다
garment	:	[명] 의복, 옷
at one and the same time	:	[부] 동시에
disguise	:	[명] 변장, 위장
characterization	:	[명] 성격 묘사, 특징 부여
abstraction	:	[명] 추상, 추상적 개념
passive	:	[형] 수동적인, 소극적인
backdrop	:	[명] 배경
experience	:	[명] 경험; [동] 경험하다, 겪다
physical	:	[형] 육체의; [형] 물리적인
heart	:	[명] 핵심; [명] 심장, 마음
accept	:	[동] 받아들이다, 수용하다, 인정하다
possibility	:	[명] 가능성
framework	:	[명] 틀, 체계
commonly	:	[부] 흔히, 보통
surround	:	[동] 둘러싸다
recall	:	[동] 기억해내다, 회상하다; [동] 리콜하다, 회수하다
setting	:	[명] 설정, 세팅, 환경
literature	:	[명] 문학; [명] 문헌(목록)
at the heart of ~	:	[형] ~의 핵심에 있는
wrap oneself up in ~	:	[동] ~에 몸을 감싸다, ~에 몰두하다
no matter how ~	:	[접] 아무리 ~하든간에
delineate	:	[동] 기술하다, 윤곽을 정하다
evolutionary	:	[형] 진화의, 진화적인
take ~ as a given	:	[동] ~을 당연한 것으로 받아들이다
emerge	:	[동] 나타나다, 생겨나다
simplify	:	[동] 단순화하다
assumption	:	[명] 가정, 추정
verbal	:	[형] 언어의, 말로 하는
evolution	:	[명] 진화, 발전
variation	:	[명] 변이, 변화
generation	:	[명] (같은) 세대; [명] 생성, 발생
inheritance	:	[명] 유전, 상속
physicist	:	[명] 물리학자
mass	:	[명] 대중; [명] 덩어리; [명] 질량
charge	:	[명] 전하, [동] 충전하다; [명] 요금, [동] 부과하다; [명] 책임, [동] 기소하다
particle	:	[명] 입자
atomic	:	[형] 원자의
bond	:	[명] 결합, 유대, 결속
electron	:	[명] 전자
move on	:	[동] (다음으로) 넘어가다
analysis	:	[명] 분석
in the absence of ~	:	[전] ~이 없을 때, ~이 없는 상태에서
accounting	:	[명] 설명, 해명
particular	:	[형] 특정한, 개개의
present	:	[동] 제시하다, 제공하다; [명] 현재; [명] 선물; [형] 있는, 현존하는
somehow	:	[부] 왠지, 어떻게든, 여하튼
detail	:	[명] 세부 사항
attempt	:	[명] 시도, 도전; [동] 시도하다
explain	:	[동] 설명하다, 해명하다
measure	:	[동] 측정하다; [명] 조치, 대책
complete	:	[형] 완전한, 완료된; [동] 완수하다, 완료하다
account	:	[명] 기술, 설명; [명] 계정, 계좌
fine	:	[형] 미세한, 가는; [형] 좋은, 고급의; [명] 벌금
of interest	:	[형] 관심을 두는, 관심 대상인
biological	:	[형] 생물학적인

[mg_h1_26.10_7: 고1 26.10모 7]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
take as a given	:	[동] 당연한 것으로 여기다
trace	:	[동] 추적하다; [명] 흔적
recognition	:	[명] 인정, 인식
burnout	:	[명] 번아웃, 극도의 피로
occupational	:	[형] 직업의, 직업상의
mark	:	[명] 표시, 마크, [동] 표시하다; [동] (중요한 시점을) 나타내다, 기념하다
discourse	:	[명] 담론, 논의
designation	:	[명] 지정
reframe	:	[동] 재구성하다, 다른 관점으로 보다
clinical	:	[형] 임상의
assessment	:	[명] 평가
shift	:	[동] 이동하다, 바뀌다, 전환하다; [명] 이동, 변화
systemic	:	[형] 체계적인, 제도 전반의
adopt	:	[동] 채택하다, 도입하다; [동] 입양하다
structural	:	[형] 구조적인
intervention	:	[명] 개입, 조치
rely on ~	:	[동] ~에 의존하다
solely	:	[부] 오로지, 단지
remedy	:	[명] 해결책, 개선책
clinician	:	[명] 임상의, 임상 전문가
collaborate	:	[동] 협업하다, 협력하다
root cause	:	[명] 근본 원인
resilience	:	[명] 회복력, 탄력
rooted (in ~)	:	[형] (~에) 뿌리를 둔
socio-economic	:	[형] 사회 경제적인
open the door to ~	:	[동] ~의 길을 열다
burden	:	[명] 부담, 짐
cope	with ~ :	[동] (~에) 대처하다, 대응하다
organizational	:	[형] 조직의, 조직적인
adapt	:	[동] 적응하다, 적용하다; [동] 각색하다, 개작하다
leadership	:	[명] 지도부, 리더십
invite	:	[동] (~하도록) 이끌다, 초대하다
workplace	:	[명] 직장, 업무 현장
responsibility	:	[명] 책임
attention	:	[명] 주목, 주의, 관심
prevention	:	[명] 예방, 방지
employer	:	[명] 고용주
in practice	:	[부] 실제로는
contribute (to ~)	:	[동] (~에) 기여하다, 원인이 되다
away from ~	:	[전] ~로부터 멀어져
personal failing	:	[명] 개인적인 결함
broader	:	[형] 더 넓은, 더 포괄적인
policy-level	:	[형] 정책 수준의
motion	:	[명] 움직임, 운동
disturb	:	[동] 교란하다, 흐트러뜨리다
molecule	:	[명] 분자
note	:	[동] 언급하다; [동] 주목하다; [동] 필기하다; [명] 지폐, 음표
colorless	:	[형] 무색의
occur	:	[동] 일어나다, 발생하다
disturbance	:	[명] 교란, 방해
gauge	:	[명] 측정기, 계기
instrument	:	[명] 기구, 도구
philosophical	:	[형] 철학적인
riddle	:	[명] 수수께끼
eardrum	:	[명] 고막
nothing more than ~	:	[명] ~에 불과한 것
concept	:	[명] 개념
product	:	[명] 생산물, 상품, 산물
mess	:	[명] 혼란, 엉망인 상태, 난장판
creature	:	[명] 생명체, 생물

[mg_h1_26.10_8: 고1 26.10모 8]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
hit	:	[동] 도달하다, 치다; [명] 히트, 대박
make a mess	:	[동] 엉망으로 만들다
the same is true of ~	:	[동] ~도 마찬가지이다
face to face	:	[부] 마주 보고, 대면하여
range	:	[명] 범위, 다양성
cue	:	[명] 신호, 단서
subset	:	[명] 부분 집합, 일부
artificial	:	[형] 인위적인, 인공의
seam	:	[명] (옷의) 이음매, 경계
impact	:	[명] 영향, 충격; [동] 충돌하다, 영향을 미치다
remote	:	[형] 원격의, 멀리 떨어진
predict	:	[동] 예측하다
describe ~ as ...	:	[동] ~을 ...이라고 묘사하다
seamless	:	[형] 끊김 없는, 매끄러운
functional	:	[형] 기능적인
separation	:	[명] 분리
remotely	:	[부] 원격으로
separate	:	[형] 분리된, 별개의; [동] 분리하다
collaborator	:	[명] 협력자, 공동 작업자
share	:	[동] 공유하다; [명] 지분, 몫, 점유율
task	:	[명] 과업, 임무; [동] 과제/임무를 주다
technology	:	[명] 기술
professor	:	[명] 교수
describe	:	[동] 묘사하다, 설명하다
conferencing	:	[명] 회의, 컨퍼런스 하기
screen	:	[명] 화면; [동] 막다, 거르다
document	:	[명] 문서; [동] 기록하다
at the same time	:	[부] 동시에
regardless of ~	:	[전] ~에 상관없이
statement	:	[명] 진술, 말; [명] 상태; [명] 명세서
claim	:	[명] 주장, [동] 주장하다; [명] 권리; [동] (목숨 등을) 앗아가다
as a function of ~	:	[전] ~에 따라, ~의 함수로서
repetition	:	[명] 반복
psychologist	:	[명] 심리학자
certain	:	[형] 어떤, 특정한; [형] 확신하는
general knowledge	:	[명] 일반 상식
trivia	:	[명] 잡학 상식, 사소한 정보
evaluate	:	[동] 평가하다
interval	:	[명] 간격
crucially	:	[부] 결정적으로, 중요하게는
repeat	:	[동] 반복하다
rating	:	[명] 평가, 등급
versus	:	[전] ~ 대, ~에 비해
astonishing	:	[형] 놀라운, 믿기 어려운
in other words	:	[부] 다시 말해
illusory	:	[형] 착각의, 환상에 불과한
truth	:	[명] 진실
general	:	[형] 일반적인; [명] 장군
compare	:	[동] 비교하다
effect	:	[명] 효과, 영향
submerge	:	[동] 물속에 잠그다
atmospheric pressure	:	[명] 대기압
surrounding	:	[형] 주위의, 주변의
maintain	:	[동] 유지하다, 지속하다
equal	:	[형] 같은, 동등한
external	:	[형] 외부의
internal	:	[형] 내부의
surface	:	[명] 표면
constant	:	[형] 일정한, 끊임없는; [명] 상수
balance	:	[명] 균형; [동] 균형을 맞추다; [명] 저울

[mg_h1_26.10_9: 고1 26.10모 9]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
lung	:	[명] 폐
air cavity	:	[명] 공기가 들어 있는 공간
dive	:	[명] 잠수; [동] 잠수하다
in addition to ~	:	[전] ~에 더하여, ~ 외에도
atmospheric	:	[형] 대기의
act on ~	:	[동] ~에 작용하다; [동] ~를 기반으로 행동하다
breathing mixture	:	[명] 호흡용 혼합 기체
supply	:	[동] 공급하다; [명] 공급품
diver	:	[명] 잠수부
apply	:	[동] (힘 등을) 가하다; [동] 지원하다; [동] 적용하다; [동] 도포하다, 바르다
proportionally	:	[부] 비례하여
depth	:	[명] 깊이
it follows that ~	:	[동] 따라서 ~이다, ~라는 결론이 나온다
stabilize	:	[동] 안정시키다
atmosphere	:	[명] 대기; [명] (단위) 기압
condition	:	[명] 상태; [명] 조건; [명] 질환
pressure	:	[명] 압력
square meter	:	[명] 제곱미터
cavity	:	[명] 공동, 구멍
breathing	:	[명] 호흡
mixture	:	[명] 혼합물
require	:	[동] 요구하다, 필요로 하다
goldenrod	:	[명] 미역취(국화과 식물)
threat	:	[명] 위협
predator	:	[명] 포식자
issue	:	[명] 문제; [동] 발행하다, 내다
chemical	:	[형] 화학적인; [명] 화학물질
alarm call	:	[명] 경고 신호, 경계음
specific	:	[형] 특정한, 구체적인
comprehensible	:	[형] 이해할 수 있는
kin	:	[명] 친족, 혈족
on the rare occasion	:	[접] 드물게 ~할 때
hostile	:	[형] 적대적인, (환경이) 험한
territory	:	[명] 영역, 지역
code	:	[동] 암호화하다
broadcast	:	[동] 방송하다, 널리 알리다; [명] 방송
loudspeaker	:	[명] 확성기
so to speak	:	[부] 말하자면
beneficial	:	[형] 유익한, 이로운
mate	:	[동] 짝짓기하다; [명] 짝, 짝짓기 상대
pollinator	:	[명] 수분 매개자(꽃가루를 옮기는 생물)
thereby	:	[부] 그렇게 함으로써
broadly	:	[부] 폭넓게, 널리
endanger	:	[동] 위태롭게 하다
confirm	:	[동] 확인해 주다, 입증하다
alarm	:	[명] 경보. [동] 경보를 울리다; [명] 불안0
incredibly	:	[부] 믿을 수 없을 정도로, 엄청나게
occasion	:	[명] 경우, 때
attack	:	[명] 공격; [동] 공격하다
neighbor	:	[명] 이웃; [동] 이웃하다, 옆에 있다
phrase	:	[명] 구절, 표현
whisper	:	[명] 속삭임; [동] 속삭이다
communication	:	[명] 의사소통
tough	:	[형] 힘든, 거친
environment	:	[명] 환경
narrowly	:	[부] 좁게, 간신히
accidentally	:	[부] 우연히
infinite	:	[형] 무한한
autoplay	:	[명] 자동 재생

[mg_h1_26.10_10: 고1 26.10모 10]
# 고2 26.10모 단어를 적당히 쪼갰다. 쫄지말고 들어와.
purchase	:	[명] 구매; [동] 구매하다
interfere with ~	:	[동] ~을 방해하다
sustainability	:	[명] 지속 가능성
overconsumption	:	[명] 과소비, 과잉 소비
load	:	[명] 부담, 짐; [동] 불러오다, 로딩하다; [동] (짐을) 싣다
processing	:	[명] (데이터) 처리
force	:	[동] 강요하다; [명] 힘; [명] 군대
consume	:	[동] 소비하다; [동] 먹다, 섭취하다
static	:	[형] 정적인, 움직이지 않는
by default	:	[부] 기본값으로, 기본 설정으로
significantly	:	[부] 상당히, 크게
disable	:	[동] (기능을) 끄다, 비활성화하다
bury	:	[동] 묻다, 깊이 숨기다
opt out	:	[동] (참여하지 않기로) 선택하다, 탈퇴하다
acknowledge	:	[동] 인정하다
nudge	:	[동] (슬쩍) 유도하다, 살짝 밀다; [동] 옆구리를 콕 찌르다
highlight	:	[동] 강조하다, 부각하다
ethical	:	[형] 윤리적인
transparent	:	[형] 투명한
reversible	:	[형] 되돌릴 수 있는
aligned with ~	:	[형] ~과 일치하는
responsible	:	[형] 책임감 있는, 책임 있는
default	:	[명] 기본값, 기본 설정; [명] 채무불이행
alternative	:	[형] 대안의, 대신의; [명] 대안
powerless	:	[형] 무력한, 힘이 없는
agency	:	[명] 주체성, 행위 주체성; [명] 대리기관
encourage	:	[동] 격려하다, 촉진하다
keep V-ing	:	[동] 계속 ~하다
content	:	[명] 내용(물), 콘텐츠; [형] 만족하는
force ~ toR	:	[동] ~가 R하도록 강요하다
deliver	:	[동] 배달하다, 전하다; [동] (새끼를) 낳다
decision	:	[명] 결정, 결심
artwork	:	[명] 예술 작품, 삽화
as a result	:	[부] 그 결과
search ~ for ...	:	[동] ~를 수색해 ...을 찾다
form	:	[명] 형태, 형식; [동] 형성하다
carefully	:	[부] 주의 깊게, 신중하게
environmental	:	[형] 환경의, 환경적인
remove	:	[동] 없애다, 제거하다
powerful	:	[형] 영향력이 큰, 강력한


[passage_CE2_L3: 3과 본문+FR]
# 지문을 보며 단어의 뜻을 맞혀보자.
===
*City [[Wellness | wellness]] Center Newsletter*
This week’s topic in the City [[Wellness | wellness]] Center Newsletter is [[resilience | resilience]], or “the power to [[overcome | overcome]]”. 
Julia Hone, a famous doctor, tells us how we can [[deal with | deal with ~]] difficult times by [[cultivating | cultivate]] our [[inner | inner]] [[strength | strength]].
No life is [[free from | free from ~]] problems. 
Whatever life path we choose, we all [[experience: [명] 경험; [동] 경험하다]] [[adversity | adversity]]. 
This can [[take the form of | take the form of ~]] illness, accidents, [[failure | failure]] in exams, family and relationship [[issues | issue]], or other stresses. 
===
To cope, we all need the [[ability | ability]] to [[overcome | overcome]] difficulties, which is [[known as | known as ~]] [[resilience | resilience]]. 
[[Resilience | resilience]] means [[springing back | spring back]], just like a [[bouncy | bouncy]] ball after hitting the ground. 
If you are [[resilient | resilient]], you can [[bounce back | bounce back]] and [[recover: [동] 회복하다]] quickly from the hard times you [[experience: [명] 경험; [동] 경험하다]]. 
[[Furthermore | furthermore]], you learn and grow from [[adversity | adversity]]. 
So, [[resilience | resilience]] is the [[ability | ability]] to handle, recover from, and [[benefit from | benefit from]] difficult life events.
===
There are [[countless | countless]] stories of successful people who not only [[survived | survive]] [[adversity | adversity]] but used it as [[a stepping stone to | a stepping stone to ~]] [[growth | growth]]. 
[[Fairy tale | fairy tale]] writer Hans Andersen said that his childhood [[poverty | poverty]], the early [[loss | loss]] of his father, and his [[experience: [명] 경험; [동] 경험하다]] of being [[disrespected | disrespect]] were the [[sources | source]] for his most popular stories. 
“The hardship was a real [[blessing | blessing]] that [[inspired | inspire]] me to write stories like The Little Match Girl, The Snow Queen, and The Ugly [[Duckling | duckling]].” 
===
[[Athlete | athlete]] Aimee Mullins also saw her [[challenges | challenge]] as an [[opportunity | opportunity]]. 
She was born with a [[medical condition | medical condition]] that [[resulted in | result in ~]] losing both legs [[beneath | beneath]] the knee to [[surgery | surgery]]. 
She [[competed against | compete against ~]] [[athletes | athlete]] without [[disabilities | disability]] in a [[national | national]] competition and [[participated in | participate in ~]] the Paralympics in 1996. 
Her career also includes modeling, acting, and [[public speaking | public speaking]]. 
She says her [[physical | physical]] [[condition | condition]] is not a [[disability | disability]] but the very thing that opened the door for her amazing [[potential | potential]]. 
Both people succeeded not “despite” [[adversity | adversity]] but thanks to it. 
This is the real [[bouncing back | bounce back]].
===
You might think “Hey, these are [[exceptional | exceptional]] people.” 
However, we are all born with the [[potential | potential]] for [[resilience | resilience]]. 
Just like these people, we all can develop the [[strength | strength]] to quickly recover from a [[crisis | crisis]] that could [[otherwise | otherwise]] cause [[lasting | lasting]] damage to our mental health. 
The good news is that [[resilience | resilience]] is like a [[muscle | muscle]]. 
You can [[build | build ~ up]] it [[up | build ~ up]] through practice, by developing [[thoughts | thought]], [[behaviors | behavior]], and habits that [[allow | allow]] you to recover from [[painful | painful]] or stressful events. 
Here are three [[basic | basic]] [[strategies | strategy]] to [[build up | build ~ up]] this “[[resilience | resilience]] [[muscle | muscle]].”
===
*Three [[Basic | basic]] [[Strategies | strategy]] to [[Build Up | build ~ up]] Your “[[Resilience | resilience]] [[Muscle | muscle]]”*
First, [[accept | accept]] and [[respect | respect]] [[adversity | adversity]] as a natural part of life. 
This doesn’t mean being [[passive | passive]], but understanding that some changes in life can cause [[suffering | suffering]] or stress. 
Then, instead of feeling [[singled out | single ~ out]] and thinking, “Why me?”, you can [[face | face]] whatever happens and [[focus on | focus on ~]] what you can change, not what you can’t. 
[[Embracing | embrace]] [[challenges | challenge]] and [[unexpected | unexpected]] [[obstacles | obstacle]] in your life can help you confront them as a learning process. 
[[Think of | think of ~]] all the success stories that could never have happened without [[adversity | adversity]]!
===
Second, have “me time,” [[that is | that is (to say)]], [[personal | personal]] time to [[look after | look after ~]] yourself. 
Take a break and be in the [[present | present]] [[moment | moment]], [[neither | neither A nor B: [접] A나 B 둘 다 아닌]] [[regretting | regret]] the past [[nor | neither A nor B: [접] A나 B 둘 다 아닌]] worrying about the future. 
Walk, [[meditate | meditate]], write, [[draw | draw]], listen to music, or exercise. 
If you don’t know where to start, the STOP technique can be a great meditative technique. 
It [[works | work]] like this.
Stop whatever you are doing.
[[Take a few deep breaths | take a deep breath]].
[[Observe | observe]] your emotions and [[thoughts | thought]] as they are, not [[judging | judge]] them as good or bad.
[[Proceed with | proceed with ~]] what you were doing. 
Or start something different [[based on | based on ~]] what you [[observed | observe]]. 
Now [[go forward with | go forward with ~]] your life.
===
Third, be [[connected | connect]]. [[Allow | allow]] yourself to ask for help from people whom you can [[trust | trust]], such as friends, family members, or [[counselors | counselor]]. 
Talking about your [[issues | issue]] with someone can help you see your situation with more [[clarity | clarity]] and [[respond to | respond to ~]] it with more [[strength | strength]]. 
Good communication helps [[resilience | resilience]]. 
This is the reason why [[resilient | resilient]] people [[tend to | tend toR]] create good [[support | support]] networks.
===
I am not saying that these [[strategies | strategy]] are easy or [[remove | remove]] all stress and [[suffering | suffering]]. Still, I [[urge | urge]] you to practice them whenever you can, [[particularly | particularly]] when you are under stress. 
Remember that there is no better time to build your “[[resilience | resilience]] [[muscle | muscle]]” than the [[moment | moment]] when you are [[in the middle of | in the middle of ~]] [[adversity | adversity]] and [[uncertainty | uncertainty]]. 
racticing [[resilience | resilience]] during [[tough | tough]] times helps you [[endure | endure]] and grow stronger. 
However, you can also [[apply | apply A to B]] these strategies [[to | apply A to B]] everyday small stresses or [[minor | minor]] [[challenges | challenge]]. 
Then you will [[gradually | gradually]] become more able to [[deal with | deal with ~]] big ones.
[[Resilient | resilient]] people [[tend to | tend toR]] be happier and more [[fulfilled | fulfilled]] because they are less afraid of failing or [[challenges | challenge]]. 
So, building [[resilience | resilience]] is [[the key | a key to ~]] not only [[to | a key to ~]] [[overcoming | overcome]] [[adversity | adversity]] but also [[to | a key to ~]] living a happy life.
-----
=== FR ===
Our mindset, or way of thinking, affects our [[ability | ability]] to [[deal with | deal with ~]] life’s [[challenges | challenge]]. 
Psychologists say there are two main mindsets: “fixed” and “[[growth | growth]].”
For people with a fixed mindset, [[failure | failure]] just shows that their intelligence, [[abilities | ability]], and talents are limited. 
They may think, for example, “I’ve never been good at writing. I’ll never be a good writer.” 
Therefore, they stay in their comfort zone, where they won’t be [[challenged | challenge]]. 
They [[tend to | tend toR]] reject even constructive [[criticism:[명] 비판]]. 
Also, other people’s success makes them feel defeated and lose confidence.
Meanwhile, people with a [[growth | growth]] mindset [[accept | accept]] life’s [[challenges | challenge]]. 
For them, [[failure | failure]] is an [[opportunity | opportunity]]. 
They may think,[[for example: [부] 예를 들어]], “I can still learn and practice writing skills until I can write a great story”. 
They can learn from [[criticism:[명] 비판]], ask for advice, and be [[inspired | inspire]] by other people’s success. 
A [[growth | growth]] mindset [[empowers | empower: [동] 힘을 주다, 권한을 주다]] people to feel more [[comfortable: [형] 편안한]] about their [[imperfections | imperfection:[명] 불완전성, 결점]] and [[overcome | overcome]] [[crises | crisis]] or mistakes more easily.
Experts say that we can develop a [[growth | growth]] mindset through practice. 
Whenever you feel “It’s impossible, I’[[d rather | would rather: 차라리 ~하겠다]] give up,” why don’t you train yourself to say, “I still want to try, I can learn how to make it possible”?


`;
