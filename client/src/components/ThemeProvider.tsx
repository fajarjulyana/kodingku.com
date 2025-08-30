import { ThemeProvider as ThemeProviderHook } from "@/hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderHook defaultTheme="dark" storageKey="kodingku-ui-theme">
      {children}
    </ThemeProviderHook>
  );
}
