"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

import { queryClient } from "~/lib/react-query";

import { ToastProvider } from "./ui/toast";

export function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastProvider />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
