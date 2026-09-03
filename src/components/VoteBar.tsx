export function VoteBar({
  vote,
  onVote,
}: {
  vote?: 1 | -1;
  onVote: (dir: 1 | -1) => void;
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-md shadow-[0_0_0_1px_rgba(28,20,16,0.1)]">
      <button
        type="button"
        aria-label="Upvote"
        onClick={() => onVote(1)}
        className={`flex h-11 w-11 items-center justify-center ${
          vote === 1 ? "bg-up text-white" : "bg-card text-up hover:bg-paper"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M7 2 L13 11 H1 Z" fill="currentColor" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Downvote"
        onClick={() => onVote(-1)}
        className={`flex h-11 w-11 items-center justify-center ${
          vote === -1 ? "bg-down text-white" : "bg-card text-down hover:bg-paper"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M7 12 L13 3 H1 Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
