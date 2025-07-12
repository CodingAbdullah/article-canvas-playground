'use client';

import ArticleMetricsType from "@/app/utils/types/ArticleMetricsType";

// Editor Status Bar custom component
export default function EditorStatusBar(props: { articleMetrics: ArticleMetricsType }) {
    const { articleMetrics } = props;

    return (
        <div className="mt-4 flex items-center justify-between text-sm text-kings-silver/60">
          <div className="flex items-center space-x-4">
            <span>{articleMetrics.characterCount} characters</span>
            <span>{articleMetrics.wordCount} words</span>
            <span>Auto-save enabled</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Ready</span>
          </div>
        </div>
    )
}