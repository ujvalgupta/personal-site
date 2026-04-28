import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { supabase, type LogEntry } from "@/lib/supabase";

const COLLAPSE_THRESHOLD = 300;

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
  };
}

function LogItem({ log, i }: { log: LogEntry; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const { date, time } = formatDate(log.created_at);
  const isLong = log.content.length > COLLAPSE_THRESHOLD || log.content.split("\n").length > 5;

  return (
    <div
      className={`group py-5 sm:py-6 border-b border-border/40 hover:border-border/70 transition-all duration-500 animate-fade-in stagger-${Math.min(i + 2, 6)}`}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span className="font-mono text-[10px] text-primary/60 tracking-wide">{time}</span>
        <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wide">{date}</span>
      </div>
      <p
        className={`text-sm text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300 whitespace-pre-wrap break-words w-full ${
          !expanded && isLong ? "line-clamp-5" : ""
        }`}
      >
        {log.content}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2.5 font-mono text-[10px] text-primary/50 hover:text-primary transition-colors duration-200 tracking-wide"
        >
          {expanded ? "show less ↑" : "read more ↓"}
        </button>
      )}
    </div>
  );
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
    <Layout scrollable>
      <div className="w-full max-w-2xl py-10 sm:py-14 pb-20">
        <div className="space-y-3 mb-10 sm:mb-12 animate-fade-in stagger-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Logs<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground/70 text-sm max-w-xs">
            Raw thoughts, exact timestamps.
          </p>
        </div>

        <div>
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

          {logs?.map((log, i) => (
            <LogItem key={log.id} log={log} i={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Logs;
