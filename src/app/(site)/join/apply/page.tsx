import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "강의·답사 신청" };

export default function ApplyPage() {
  return (
    <PageShell
      eyebrow="Apply"
      hanja="申 込"
      title="강의·답사 신청"
      description="아래 양식을 작성해주시면 담당자가 연락드립니다."
    >
      <div className="mx-auto max-w-2xl">
        <form className="overflow-hidden bg-hanji-warm border border-paper-line p-8 space-y-6">
          <div className="relative -mx-8 -mt-8 mb-8 aspect-[16/9] border-b border-paper-line bg-ink/5">
            <Image
              src={cardAssets.lecture.src}
              alt={cardAssets.lecture.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <span className="hanja absolute left-5 top-5 flex h-12 min-w-12 items-center justify-center border border-hanji/50 bg-ink/75 px-3 text-2xl text-hanji">
              申
            </span>
          </div>
          <Field label="이름" name="name" required />
          <Field label="연락처" name="phone" placeholder="010-0000-0000" required />
          <Field label="이메일" name="email" type="email" />
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              참여 프로그램 <span className="text-dancheong-red">*</span>
            </label>
            <select
              name="program"
              required
              className="w-full border border-paper-line bg-hanji px-4 py-3 text-ink focus:outline-none focus:border-ink"
            >
              <option value="">선택해주세요</option>
              <option>한국사 아카데미</option>
              <option>세계사 아카데미</option>
              <option>심곡서원 답사</option>
              <option>국내 역사 답사</option>
              <option>기타</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-2">하실 말씀</label>
            <textarea
              name="message"
              rows={5}
              className="w-full border border-paper-line bg-hanji px-4 py-3 text-ink focus:outline-none focus:border-ink resize-none"
            />
          </div>
          <p className="text-xs text-ink-mute leading-relaxed">
            * 본 양식은 현재 데모용입니다. 실제 접수는 네이버 카페 또는 이메일로 부탁드립니다.
          </p>
          <button
            type="submit"
            className="w-full rounded-sm bg-ink px-7 py-3.5 font-medium text-hanji-warm hover:bg-dancheong-red transition-colors"
          >
            신청서 보내기
          </button>
        </form>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        {label} {required && <span className="text-dancheong-red">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-paper-line bg-hanji px-4 py-3 text-ink focus:outline-none focus:border-ink"
      />
    </div>
  );
}
