"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "welcome-modal-dismissed";

export function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed the modal
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (!dismissed) {
            // Small delay for dramatic effect
            const timer = setTimeout(() => {
                setIsOpen(true);
                setIsAnimating(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsOpen(false);
            localStorage.setItem(STORAGE_KEY, "true");
        }, 300);
    };

    const handleExplorePoems = () => {
        localStorage.setItem(STORAGE_KEY, "true");
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={handleDismiss}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none`}
            >
                <div
                    className={`relative pointer-events-auto max-w-md w-full transform transition-all duration-500 ease-out ${isAnimating
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-4"
                        }`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="welcome-title"
                >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 shadow-2xl">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-amber-100/40 to-transparent dark:from-amber-900/20 rounded-full -translate-x-16 -translate-y-16" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-linear-to-tl from-rose-100/30 to-transparent dark:from-rose-900/10 rounded-full translate-x-20 translate-y-20" />

                        {/* Content */}
                        <div className="relative px-8 py-10 text-center">
                            {/* Close button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>

                            {/* Decorative quote marks */}
                            <div className="mb-4">
                                <span className="text-6xl font-serif text-stone-200 dark:text-stone-700 select-none leading-none">
                                    &quot;
                                </span>
                            </div>

                            {/* Main text */}
                            <p
                                id="welcome-title"
                                className="font-serif text-2xl md:text-3xl text-stone-800 dark:text-stone-200 leading-relaxed"
                            >
                                You came for the engineer.
                            </p>
                            <p className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 font-medium leading-relaxed">
                                You&apos;ll stay for the poet.
                            </p>

                            <p className="font-serif text-sm md:text-base text-stone-900 dark:text-stone-100 font-medium leading-relaxed">
                                Engineer by craft. Poet by instinct.
                            </p>

                            {/* Divider */}
                            <div className="my-8 flex items-center justify-center gap-3">
                                <span className="w-12 h-px bg-linear-to-r from-transparent to-stone-300 dark:to-stone-600" />
                                <span className="text-stone-400 dark:text-stone-500 text-xs">✦</span>
                                <span className="w-12 h-px bg-linear-to-l from-transparent to-stone-300 dark:to-stone-600" />
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/writing?tag=poetry"
                                onClick={handleExplorePoems}
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-full font-medium text-sm hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Beyond the code
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>

                            {/* Skip text */}
                            <button
                                onClick={handleDismiss}
                                className="mt-4 block w-full text-sm text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
                            >
                                Maybe later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
