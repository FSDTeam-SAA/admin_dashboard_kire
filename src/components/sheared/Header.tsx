"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Skeleton } from "@/components/ui/skeleton";
import { Globe, User2Icon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: Record<string, unknown>,
          element: string,
        ) => void;
      };
    };
  }
}

const SOURCE_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "bookersi-language-admin";

const languages = [
  { code: "en", label: "English" },
  { code: "mk", label: "Macedonian" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

/* ---------------- helpers ---------------- */

function getSavedLanguage(): LanguageCode {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return languages.some((l) => l.code === saved)
    ? (saved as LanguageCode)
    : "en";
}

function setGoogleTranslateCookie(lang: LanguageCode) {
  const value = `/${SOURCE_LANGUAGE}/${lang}`;
  document.cookie = `googtrans=${value}; path=/; max-age=31536000`;
  document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}; max-age=31536000`;
}

function resetToolbar() {
  document.body.style.top = "0px";
  const frame = document.querySelector<HTMLIFrameElement>(
    "iframe.goog-te-banner-frame, iframe.skiptranslate",
  );
  if (frame) frame.style.display = "none";
}

/* ---------------- FIXED APPLY ---------------- */

function applyGoogleTranslate(lang: LanguageCode, retries = 25) {
  setGoogleTranslateCookie(lang);
  resetToolbar();

  const tryApply = () => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      setTimeout(resetToolbar, 300);
      return true;
    }
    return false;
  };

  if (tryApply()) return;

  if (retries > 0) {
    setTimeout(() => {
      applyGoogleTranslate(lang, retries - 1);
    }, 500);
  }
}

/* ---------------- READY DETECTOR (IMPORTANT FIX) ---------------- */

function watchTranslationReady(setLoading: (v: boolean) => void) {
  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      setLoading(false);
      clearInterval(interval);
    }
  }, 300);

  setTimeout(() => clearInterval(interval), 10000);
}

/* ---------------- COMPONENT ---------------- */

export default function Header() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>(getSavedLanguage());
  const [translateLoading, setTranslateLoading] = useState(true);

  const selectedLanguage = useMemo(
    () => languages.find((l) => l.code === language)?.label ?? "English",
    [language],
  );

  useEffect(() => {
    const initLang = getSavedLanguage();

    setGoogleTranslateCookie(initLang);

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: SOURCE_LANGUAGE,
          includedLanguages: languages.map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element",
      );

      setTimeout(() => {
        applyGoogleTranslate(initLang);
        watchTranslationReady(setTranslateLoading);
      }, 600);
    };

    const scriptId = "google-translate-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          window.googleTranslateElementInit?.();
        }, 400);
      };

      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }

    watchTranslationReady(setTranslateLoading);
  }, []);

  /* ---------------- CHANGE LANGUAGE ---------------- */

  const handleLanguageChange = (value: string) => {
    const next = value as LanguageCode;

    setLanguage(next);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);

    setTranslateLoading(true); // start loading

    applyGoogleTranslate(next);
    watchTranslationReady(setTranslateLoading);
  };

  const handleLogout = () => {
    signOut();
    setLogoutDialogOpen(false);
  };

  /* ---------------- UI ---------------- */

  return (
    <header className="w-full h-[100px] bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
      {/* Google element */}
      <div id="google_translate_element" className="hidden" />

      <div className="flex items-center gap-4 ml-auto">
        {/* Loading text (now safe, never stuck) */}
        {translateLoading && (
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            Loading language...
          </div>
        )}

        {/* Language Select */}
        <Select
          value={language}
          onValueChange={handleLanguageChange}
          disabled={false}
        >
          <SelectTrigger className="notranslate min-w-[150px] h-[44px] border rounded-xl px-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <SelectValue>{selectedLanguage}</SelectValue>
            </div>
          </SelectTrigger>

          <SelectContent className="notranslate bg-white">
            {languages.map((l) => (
              <SelectItem key={l.code} value={l.code}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Avatar */}
        <Avatar onClick={() => setLogoutDialogOpen(true)}>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>
            <User2Icon />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Logout */}
      <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <DialogTrigger asChild>
          <button style={{ display: "none" }} />
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to log out?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setLogoutDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Log Out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}
