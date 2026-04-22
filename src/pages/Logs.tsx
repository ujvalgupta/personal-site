import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { supabase, type LogEntry } from "@/lib/supabase";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
  };
}

const Logs = () => {
  const { data: logs, isLoading, isError } = useQuery<LogEntry[]>({
    queryKey: ["logs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("logs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    refetchInterval: 30000,
  });

  return (
    <Layout>
      <div className="w-full max-w-2xl space-y-10 sm:space-y-14">
        <div className="space-y-3 animate-fade-in stagger-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Logs<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground/70 text-sm max-w-xs">
            Raw thoughts, exact timestamps.
          </p>
        </div>

        <div className="space-y-0">
          {isLoading && (
            <div className="py-12 text-center text-muted-foreground/40 font-mono text-xs tracking-wide animate-pulse">
              loading...
            </div>
          )}

          {isError && (
            <div className="py-12 text-center text-destructive/60 font-mono text-xs">
              failed to load logs.
            </div>
          )}

          {logs && logs.length === 0 && (
            <div className="py-12 text-center text-muted-foreground/30 font-mono text-xs tracking-wide">
              nothing here yet.
            </div>
          )}

          {logs?.map((log, i) => {
            const { date, time } = formatDate(log.created_at);
            return (
              <div
                key={log.id}
                className={`group py-5 sm:py-6 border-b border-border/40 hover:border-border transition-all duration-500 animate-fade-in stagger-${Math.min(i + 2, 6)}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="text-sm text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300 max-w-lg whitespace-pre-wrap">
                    {log.content}
                  </p>
                  <div className="flex flex-col items-end gap-1 shrink-0 pt-0.5">
                    <span className="font-mono text-[10px] text-muted-foreground/40 tracking-wide">
                      {time}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wide">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Logs;
