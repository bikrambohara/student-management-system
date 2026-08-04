import { TrendingUp } from "lucide-react";

function StatCard({
  title,
  value,
  percentage,
  icon: Icon,
  iconStyle,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-100 ">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconStyle}`}
        >
          <Icon size={26} />
        </div>

        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {value}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-xs">
            <TrendingUp size={13} className="text-emerald-500" />
            <span className="font-medium text-emerald-500">
              {percentage}
            </span>
            <span className="text-slate-400">from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;