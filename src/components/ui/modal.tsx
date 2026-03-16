import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        {title && (
          <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-accent/10"
            >
              <X size={20} />
            </Button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {!title && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
