import React from "react";
import { FaDatabase, FaCodeBranch } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const DashboardPlaceholder = ({
  title = "SQL & Pipeline Analytics Project",
}) => {
  return (
    <div className="w-full min-h-[400px] my-4 mx-auto rounded-lg border border-blue-500/30 bg-slate-950/80 p-4 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden group">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 opacity-50" />

      {/* Tech Icons Row */}
      <div className="flex items-center gap-4 mb-3 text-blue-400 z-10">
        <SiPostgresql className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-300" />
        <FaDatabase className="w-6 h-6 text-purple-400 transform group-hover:scale-110 transition-transform duration-300" />
        <FaCodeBranch className="w-6 h-6 text-emerald-400 transform group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Main Title */}
      <h4 className="text-white font-semibold text-base md:text-lg z-10 px-2">
        {title}
      </h4>

      {/* Subtitle Badge */}
      <div className="mt-2 inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500/40 rounded-full px-3 py-1 text-xs text-blue-300 font-mono z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Database Schema & Query Optimization
      </div>
    </div>
  );
};

export default DashboardPlaceholder;
