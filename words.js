// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "덕정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_mid"      // 학교별 독립 DB 분리 키 (다른 학교와 랭킹/계정이 안 섞임)
};

// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\

const WORLD_MAPS_TEXT = `

[202621_dj1_c1: 생각·인식·정보·의사소통]
# 
absurd: [형] 터무니없는, 부조리한
accuracy: [명] 정확성, 정확도
admit: [동] 인정하다, 시인하다
appreciate: [동] 진가를 인정하다; 고마워하다; 감상하다
assert: [동] 주장하다, 단언하다
authentic: [형] 진짜의, 진정한
authenticate: [동] 진짜임을 증명하다, 인증하다
broadcast: [명] 방송; [동] 방송하다
calculate: [동] 계산하다, 산정하다
cautionary: [형] 경고성의, 훈계의
censorship: [명] 검열
clarify: [동] 명확하게 하다, 분명히 말하다
cognitive: [형] 인지의, 인식의
coherent: [형] 일관성 있는, 논리 정연한
consequence: [명] 결과; 중요성
conspiracy: [명] 음모, 공모
controversial: [형] 논란이 많은, 쟁점이 되는
deceive: [동] 속이다, 기만하다
deception: [명] 속임수, 기만
deceptive: [형] 기만적인, 현혹하는
deduce: [동] 추론하다, 연역하다
deem: [동] 여기다, 간주하다
deny: [동] 부인하다, 부정하다
depict: [동] 묘사하다, 그리다
disprove: [동] 틀렸음을 입증하다, 반박하다
dispute: [명] 분쟁, 논쟁; [동] 반박하다
dismiss: [동] 일축하다; 묵살하다
elaborate: [형] 정교한, 공들인; [동] 정교하게 만들다
enlighten: [동] 깨우치게 하다, 계몽하다
exaggerate: [동] 과장하다
fabricate: [동] 날조하다, 조작하다
go viral: [숙] 입소문이 나다, 빠르게 퍼지다
grounded: [형] 근거 있는, 현실에 기반을 둔
journalism: [명] 저널리즘, 언론
literate: [형] 문해력 있는, 읽고 쓸 줄 아는
mainstream: [명] 주류; [형] 주류의
misconception: [명] 오해, 잘못된 생각
misinformation: [명] 오보, 잘못된 정보
point out: [숙] 지적하다, 언급하다
rational: [형] 이성적인, 합리적인
skeptical: [형] 회의적인, 의심 많은
subtle: [형] 미묘한, 감지하기 힘든
superficial, shallow: [형] 피상적인
ungrounded: [형] 근거 없는
unverified: [형] 검증되지 않은, 확인되지 않은
unwittingly: [부] 자신도 모르게, 부지불식간에
unintentionally: [부] 무심코, 의도치 않게
verify: [동] 확인하다, 입증하다



[202621_dj1_c2: 감정·태도·성격·대인관계]
# 
activism: [명] 행동주의, 실천주의
altruistic, selfless: [형] 이타적인
annoyance: [명] 짜증, 불쾌감
anxious: [형] 불안한, 염려하는
apathetic, indifferent: [형] 무관심한, 냉담한
apologetic: [형] 사과하는, 미안해하는
astonish: [동] 깜짝 놀라게 하다
awkward: [형] 어색한, 난처한
civility, courteous: [명] 정중함, 예의; [형] 공손한, 예의 바른
condemn: [동] 비난하다, 규탄하다
confront: [동] 맞서다, 직면하다
desperate: [형] 절박한, 필사적인
distress: [명] 고통, 곤란; [동] 괴롭히다
embarrass: [동] 당황스럽게 하다
empathetic: [형] 공감하는, 감정 이입의
equitable: [형] 공평한, 공정한
generosity: [명] 너그러움, 관대함
grumble: [동] 불평하다, 투덜거리다
meddlesome: [형] 간섭하기 좋아하는
obsessed: [형] 사로잡힌, 집착하는
panic: [명] 공황, 극심한 공포; [동] 공황에 빠지다
perplexed: [형] 당혹스러운, 난처한
sarcasm: [명] 비꼼, 빈정거림
self-esteem: [명] 자존감, 자아존중감
self-interest: [명] 사리사욕, 자기 이익
seductive: [형] 유혹적인, 매력적인
solidarity: [명] 연대, 결속
Stoic: [명] 스토아학파, 금욕주의자; [형] 극기의
stunned: [형] 어리둥절한, 큰 충격을 받은
tense: [형] 긴장된, 팽팽한
terrify: [동] 몹시 무섭게 하다, 겁나게 하다
trustworthy: [형] 신뢰할 수 있는
uplift: [동] 사기를 북돋우다, 희망을 주다
vulnerability: [명] 취약성, 상처받기 쉬움


[202621_dj1_c3: 변화·행동·과정·결과]
# 
align: [동] 일치시키다, 정렬하다
allocation: [명] 할당, 배분
amplify: [동] 증폭시키다, 확대하다
collapse: [동] 무너지다, 붕괴하다; [명] 붕괴
crumble: [동] 바스러지다, 무너지다
destabilize: [동] 불안정하게 만들다
devastate: [동] 황폐화시키다, 엄청난 충격을 주다
displace: [동] 쫓아내다, 피난시키다
disrupt: [동] 혼란에 빠뜨리다, 방해하다
dominate: [동] 지배하다, 우세를 차지하다
duplicate, replicate: [동] 복제하다, 복사하다
emerge: [동] 나타나다, 드러나다
empower: [동] 권한을 주다, 힘을 북돋우다
endanger: [동] 위험에 빠뜨리다
ensnare: [동] 덫에 걸리게 하다, 빠뜨리다
evolve: [동] 진화하다, 점진적으로 발전하다
exacerbate: [동] 악화시키다
exert: [동] 행사하다, 발휘하다
exploit: [동] 이용하다, 착취하다; [명] 위업
facilitate: [동] 촉진하다, 수월하게 하다
flourish, thrive: [동] 번창하다, 번영하다
foster: [동] 조성하다, 육성하다
fruition: [명] 결실, 성취
groom: [동] 손질하다, 다듬다
hydrate: [동] 수분을 공급하다
institutionalize: [동] 제도화하다
mimic: [동] 흉내 내다, 모방하다
mismanagement: [명] 잘못된 관리, 실정
misplace: [동] 제자리에 두지 않다, 잘못 두다
neutralize: [동] 무효화하다, 중립화하다
nourish: [동] 영양분을 공급하다, 육성하다
orchestrate: [동] 획책하다, 조직하다
perish: [동] 소멸하다, 죽다
propagate: [동] 전파하다, 번식시키다
refrain from: [숙] ~을 삼가다, 억제하다
retain: [동] 유지하다, 보유하다
revitalization: [명] 새로운 활력, 재생
snatch: [동] 와락 붙잡다, 낚아채다
spout: [동] 뿜어져 나오다, 분출하다
stimulate: [동] 자극하다, 격려하다
tackle: [동] 다루다, 씨름하다
undermine: [동] 약화시키다
vanish: [동] 사라지다, 소멸하다



[202621_dj1_c4: 상태·특성·환경·사회·기타 개념]
# 
adverse: [형] 부정적인, 불리한
adversity: [명] 역경, 불운
aerobic: [형] 유산소의, 호기성의
anaerobic: [형] 무산소의
arithmetic: [명] 산수, 연산
captive: [형] 사로잡힌, 포로가 된
cardiovascular: [형] 심혈관의
catastrophe, disaster: [명] 재앙; 대참사, 재난
chaotic: [형] 혼돈의, 무질서한
chronic: [형] 만성적인
circulation: [명] 유통, 순환, 배포
communal: [형] 공동의, 사회의
connectivity: [명] 연결성
consistent: [형] 일관된, 지속적인
diversity: [명] 다양성
dilemma: [명] 딜레마, 진퇴양난
dwelling: [명] 주거지, 서식처
edible: [형] 먹을 수 있는, 식용의
exceptional: [형] 비범한, 예외적인
exhaustion: [명] 탈진, 기진맥진
extinction: [명] 멸종, 소멸
famine: [명] 기근, 굶주림
fatigue: [명] 피로, 피곤
fragmented: [형] 분열된, 조각난
futility: [명] 헛됨, 무익함
hectic: [형] 정신없이 바쁜, 빡빡한
holistic: [형] 전체론적인, 종합적인
imminent: [형] 임박한, 눈앞에 닥친
inadvertent: [형] 고의가 아닌, 부주의한
incidental: [형] 부수적인, 우연의
indiscriminately: [부] 무차별적으로, 가리지 않고
infrequent: [형] 드문, 자주는 아닌
inherent: [형] 내재된, 타고난
intact: [형] 온전한, 손상되지 않은
interwoven: [형] 밀접하게 얽힌
intricate: [형] 복잡한, 난해한
involuntary: [형] 비자발적인, 무의식적인
metabolism: [명] 물질대사, 신진대사
monotonous: [형] 단조로운, 지루한
persistence: [명] 지속, 끈기
precaution: [명] 예방 조치, 조심
prevail: [동] 만연하다, 승리하다
proficiency: [명] 숙달, 능숙함
prone to: [숙] ~하기 쉬운, ~하는 경향이 있는
reciprocity: [명] 호혜, 상호성
resilience: [명] 회복력, 탄력성
resistant: [형] 저항력 있는, 잘 견디는
rigidity: [명] 경직성, 엄격함
scarcity: [명] 부족, 결핍
sedentary: [형] 주로 앉아서 하는
self-sufficiency: [명] 자급자족
sensational: [형] 선풍적인, 자극적인
structural: [형] 구조적인
surplus: [명] 잉여, 과잉; [형] 잉여의
unresponsive: [형] 무반응의, 반응이 없는

`;
