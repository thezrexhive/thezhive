"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { InputProps } from "@/types";

const sizeClasses: Record<string, string> = {
  sm: "h-8  px-3   text-xs  rounded-xl",
  md: "h-10 px-3.5 text-sm  rounded-2xl",
  lg: "h-12 px-4   text-base rounded-2xl",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, success, size = "md", leftElement, rightElement, className, id, ...props },
  ref
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const state = error ? "error" : success ? "success" : "default";

  const wrapperClasses = cn(
    "w-full border bg-white transition-all duration-200",
    "flex items-center gap-2",
    sizeClasses[size],
    state === "error"   && "border-error-500 focus-within:ring-2 focus-within:ring-error-500/20",
    state === "success" && "border-success-500 focus-within:ring-2 focus-within:ring-success-500/20",
    state === "default" && "border-neutral-200 focus-within:border-primary-400 focus-within:shadow-glow-purple",
    className
  );

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 select-none">
          {label}
          {props.required && <span className="text-pink-500 ml-0.5" aria-hidden="true">*</span>}
        </label>
      )}

      <div className={wrapperClasses}>
        {leftElement && (
          <span className="text-neutral-400 shrink-0 flex items-center" aria-hidden="true">
            {leftElement}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={state === "error"}
          aria-describedby={
            error      ? `${inputId}-error`   :
            success    ? `${inputId}-success` :
            helperText ? `${inputId}-helper`  : undefined
          }
          className={cn(
            "flex-1 bg-transparent outline-none placeholder:text-neutral-400",
            "text-neutral-900 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          {...props}
        />
        {rightElement && (
          <span className="text-neutral-400 shrink-0 flex items-center" aria-hidden="true">
            {rightElement}
          </span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-error-600 flex items-center gap-1">
          {error}
        </p>
      )}
      {!error && success && (
        <p id={`${inputId}-success`} className="text-xs text-success-600">
          {success}
        </p>
      )}
      {!error && !success && helperText && (
        <p id={`${inputId}-helper`} className="text-xs text-neutral-500">
          {helperText}
        </p>
      )}
    </div>
  );
});
