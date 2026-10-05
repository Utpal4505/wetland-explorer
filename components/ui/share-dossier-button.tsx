"use client";

import * as React from "react";
import { Share2, Check, Copy, Quote, MessageCircle, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareDossierButtonProps {
  wetlandName: string;
  wetlandState: string;
  ramsarSiteNo?: number;
}

export function ShareDossierButton({
  wetlandName,
  wetlandState,
  ramsarSiteNo,
}: ShareDossierButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [linkCopied, setLinkCopied] = React.useState(false);
  const [citationCopied, setCitationCopied] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getPageUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://wetland-explorer.in/wetlands`;
  };

  const citationText = `Wetland Explorer Digital Atlas. (2026). ${wetlandName} Ecological Dossier (${
    ramsarSiteNo ? `Ramsar Site #${ramsarSiteNo}` : "Wetland Profile"
  }, ${wetlandState}, India). Retrieved from ${getPageUrl()}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getPageUrl());
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCitationCopied(true);
      setTimeout(() => setCitationCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const shareText = `Explore the ecological dossier for ${wetlandName} (${wetlandState}), India on Wetland Explorer:`;
  const encodedUrl = encodeURIComponent(getPageUrl());
  const encodedText = encodeURIComponent(shareText);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <Button
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 text-xs font-medium text-foreground hover:bg-surface-muted transition-colors shadow-2xs"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Share this wetland dossier or copy citation"
      >
        <Share2 className="h-3.5 w-3.5 text-primary" />
        <span>Share Dossier</span>
      </Button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-72 origin-top-right rounded-lg border border-border bg-popover/95 backdrop-blur-md p-2 text-popover-foreground shadow-xl z-50 animate-in fade-in-50 zoom-in-95"
        >
          <div className="px-2 py-1.5 border-b border-border/60 mb-1">
            <p className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
              Share &amp; Academic Citation
            </p>
            <p className="text-[10px] text-muted-foreground">
              Circulate this verified ecological dossier
            </p>
          </div>

          <div className="space-y-1">
            {/* Copy Direct Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-xs text-foreground hover:bg-surface-muted transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <Copy className="h-3.5 w-3.5 text-primary" />
                <span>Copy Page URL</span>
              </div>
              {linkCopied ? (
                <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold dark:text-emerald-400">
                  <Check className="h-3 w-3" /> Copied!
                </span>
              ) : (
                <kbd className="text-[10px] font-mono text-muted-foreground/70 bg-surface-muted px-1.5 py-0.5 rounded border border-border/40">
                  Link
                </kbd>
              )}
            </button>

            {/* Copy Academic Citation */}
            <button
              type="button"
              onClick={handleCopyCitation}
              className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-xs text-foreground hover:bg-surface-muted transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <Quote className="h-3.5 w-3.5 text-amber-500" />
                <span>Copy APA Citation</span>
              </div>
              {citationCopied ? (
                <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold dark:text-emerald-400">
                  <Check className="h-3 w-3" /> Copied!
                </span>
              ) : (
                <span className="text-[10px] text-muted-foreground">CHE110</span>
              )}
            </button>
          </div>

          <div className="border-t border-border/60 my-1 pt-1">
            <p className="px-2 py-1 text-[10px] font-mono text-muted-foreground uppercase">
              Social Broadcast
            </p>
            <div className="grid grid-cols-3 gap-1 pt-0.5">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-surface-muted text-foreground transition-colors text-center"
                title="Share via WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 mb-1" />
                <span className="text-[10px] text-muted-foreground">WhatsApp</span>
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-surface-muted text-foreground transition-colors text-center"
                title="Share on X"
              >
                <Twitter className="h-4 w-4 text-sky-500 mb-1" />
                <span className="text-[10px] text-muted-foreground">X (Twitter)</span>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-surface-muted text-foreground transition-colors text-center"
                title="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-blue-600 mb-1" />
                <span className="text-[10px] text-muted-foreground">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
