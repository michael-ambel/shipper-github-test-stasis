interface StasisPullBadgeProps {
  label?: string;
}

export function StasisPullBadge({
  label = "pulled-from-stasis",
}: StasisPullBadgeProps) {
  return (
    <div className="fixed bottom-3 right-3 z-50 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg ring-2 ring-indigo-300">
      {label}
    </div>
  );
}
