import { PageShell } from "@/components/page-shell";

export const metadata = { title: "정암집" };

export default function WorksPage() {
  return (
    <PageShell
      eyebrow="Works"
      hanja="靜 庵 集"
      title="정암집"
      description="정암 조광조가 남긴 글과 후대의 편찬"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          <strong className="text-ink">『정암집(靜庵集)』</strong>은 정암 조광조의 시문(詩文)·상소·강론을
          모아 엮은 문집입니다. 정암이 37세에 사사된 까닭에 본인의 손으로 정리한 저작은 남지 않았고,
          모든 글은 후대에 그의 제자와 후학들이 수집·편찬한 것입니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">편찬사</h2>
        <ul className="space-y-4 text-ink-soft leading-relaxed mb-8">
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">초기 수집 (16세기)</strong> — 정암의 외손과 제자들이 그가 남긴
            상소문·서간·시를 보존. 기묘사화 직후라 본격 출간은 어려웠음.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">선조대 신원 후</strong> — 1568년 정암이 신원·추증되면서 본격 정리.
            이황·이이 등 후학들이 정암의 글을 정통 학통의 자료로 평가.
          </li>
          <li className="border-l-2 border-dancheong-red pl-4">
            <strong className="text-ink">『정암집』 정식 간행</strong> — 17~18세기에 걸쳐 여러 차례 보완 간행.
            현전하는 정암집은 본집 5권·부록 6권으로 구성된 것이 표준판.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">주요 글</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Work
            hanja="疏"
            title="알성시책(謁聖試策)"
            year="1515"
            desc="과거 급제 답안. 정암의 정치사상이 처음 공식 문건으로 드러난 글."
          />
          <Work
            hanja="疏"
            title="청파소격서소(請罷昭格署疏)"
            year="1518"
            desc="소격서 혁파를 청한 상소. 유학적 정치 질서를 강조한 대표적 논문."
          />
          <Work
            hanja="議"
            title="현량과 건의"
            year="1518"
            desc="추천에 의한 인재 등용 제도를 제안한 글. 정암 개혁 정책의 핵심."
          />
          <Work
            hanja="詩"
            title="절명시"
            year="1519"
            desc="유배지 능주에서 사약을 받기 직전 남긴 4구의 시. &ldquo;愛君如愛父…&rdquo;"
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">문학적·사상적 특징</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암의 글은 <strong className="text-ink">간결하고 직설적</strong>인 것이 특징입니다. 화려한 수사보다
          뜻을 분명히 전하는 데 무게를 두었고, 임금에게 올리는 상소조차 우회 없이 핵심을 향하는
          어조를 보입니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          내용 면에서는 <strong className="text-ink">치국(治國)의 도</strong>를 군주의 자기 수양에서 출발시키는
          관점이 일관됩니다. 정치 제도의 개혁이 필요하지만, 그 모든 개혁은
          <em className="text-ink"> 위정자가 먼저 도(道)로 자신을 닦은 위에서만 의미가 있다</em>는
          것이 정암의 신념이었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">오늘 어떻게 읽을까</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암집은 한문 원전이지만, 한국고전번역원과 학계의 번역본이 다수 출간되어 있습니다.
          국립중앙도서관·한국학중앙연구원 등에서 디지털 자료로 열람할 수도 있습니다.
        </p>
        <p className="text-ink-soft leading-relaxed">
          연구원은 정암의 핵심 글들을 시민이 읽기 쉬운 한글 풀이로 옮기는 작업을
          준비하고 있으며, 답사·강좌에서도 정암집의 단락을 함께 읽는 시간을 갖고 있습니다.
        </p>
      </article>
    </PageShell>
  );
}

function Work({ hanja, title, year, desc }: { hanja: string; title: string; year: string; desc: string }) {
  return (
    <div className="bg-hanji-warm border border-paper-line p-5">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="hanja text-xl">{hanja}</span>
        <span className="font-display font-bold text-ink">{title}</span>
      </div>
      <div className="text-xs text-dancheong-red mb-2">{year}</div>
      <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
    </div>
  );
}
