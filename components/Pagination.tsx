"use client";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

function getPageRange(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const result: (number | "...")[] = [1];
  if (current > 3) result.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) result.push(i);

  if (current < total - 2) result.push("...");
  result.push(total);

  return result;
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  const range = getPageRange(page, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-14">
      {/* Prev */}
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        aria-label="Previous page"
      >
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {range.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="text-white/20 text-sm px-1 select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`w-9 h-9 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${
              page === p
                ? "bg-[#3B82F6]/15 border-[#3B82F6]/40 text-[#3B82F6]"
                : "border-white/[0.08] bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/70"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        aria-label="Next page"
      >
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
