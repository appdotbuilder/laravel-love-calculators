import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { Quote, Heart, Shuffle, Copy, Check } from 'lucide-react';

interface Props {
    quote: string;
    [key: string]: unknown;
}

export default function LoveQuotes({ quote }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const getNewQuote = () => {
        setIsLoading(true);
        router.post(route('love-quotes.store'), {}, {
            preserveState: false,
            onFinish: () => setIsLoading(false),
        });
    };

    const copyQuote = async () => {
        try {
            await navigator.clipboard.writeText(quote);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.log('Failed to copy quote');
        }
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <Quote className="w-16 h-16 text-pink-500" />
                                    <Heart className="w-8 h-8 text-red-500 absolute -bottom-2 -right-2 animate-pulse" fill="currentColor" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                                Love Quotes
                            </h1>
                            <p className="text-gray-600">
                                Beautiful words to inspire love and romance 💌
                            </p>
                        </div>

                        {/* Quote Display */}
                        <Card className="mb-8 shadow-xl border-0 bg-gradient-to-br from-white via-pink-50 to-rose-50">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl text-pink-700">Your Love Quote</CardTitle>
                                <CardDescription>
                                    Let these words touch your heart
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    {/* Decorative quotes */}
                                    <Quote className="w-12 h-12 text-pink-200 absolute -top-2 -left-2" />
                                    <Quote className="w-12 h-12 text-pink-200 absolute -bottom-2 -right-2 rotate-180" />
                                    
                                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 mx-4 shadow-lg">
                                        <p className="text-xl text-gray-800 leading-relaxed text-center font-medium italic">
                                            {quote}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-4 mt-8">
                                    <Button
                                        onClick={getNewQuote}
                                        disabled={isLoading}
                                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 text-lg font-semibold shadow-lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                <Shuffle className="w-5 h-5 mr-2" />
                                                New Quote ✨
                                            </>
                                        )}
                                    </Button>
                                    
                                    <Button
                                        onClick={copyQuote}
                                        variant="outline"
                                        className="border-pink-300 text-pink-700 hover:bg-pink-50 px-6 py-3"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-5 h-5 mr-2" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-5 h-5 mr-2" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Fun Facts */}
                        <Card className="mb-8 shadow-lg border-0 bg-white/60 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-pink-700 mb-4">
                                        💡 Did You Know?
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                                        <div className="bg-pink-50 rounded-lg p-4">
                                            <div className="text-2xl mb-2">💕</div>
                                            <p>Love quotes can strengthen relationships by expressing feelings beautifully</p>
                                        </div>
                                        <div className="bg-rose-50 rounded-lg p-4">
                                            <div className="text-2xl mb-2">🌹</div>
                                            <p>Sharing romantic quotes shows thoughtfulness and emotional intelligence</p>
                                        </div>
                                        <div className="bg-red-50 rounded-lg p-4">
                                            <div className="text-2xl mb-2">✍️</div>
                                            <p>Writing love quotes has been a tradition for thousands of years</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Call to Action */}
                        <Card className="shadow-lg border-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2">
                                        Share the Love! 💝
                                    </h3>
                                    <p className="mb-4 opacity-90">
                                        Send this quote to someone special and make their day brighter
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <Button
                                            onClick={() => router.visit(route('love-calculator.index'))}
                                            variant="secondary"
                                            className="bg-white text-pink-600 hover:bg-pink-50"
                                        >
                                            💕 Calculate Love
                                        </Button>
                                        <Button
                                            onClick={() => router.visit(route('compatibility-calculator.index'))}
                                            variant="secondary"
                                            className="bg-white text-pink-600 hover:bg-pink-50"
                                        >
                                            ✨ Check Compatibility
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Navigation */}
                        <div className="mt-8 text-center">
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Button
                                    onClick={() => router.visit(route('home'))}
                                    variant="ghost"
                                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                >
                                    🏠 Home
                                </Button>
                                <Button
                                    onClick={() => router.visit(route('love-calculator.index'))}
                                    variant="ghost"
                                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                >
                                    💕 Love Calculator
                                </Button>
                                <Button
                                    onClick={() => router.visit(route('compatibility-calculator.index'))}
                                    variant="ghost"
                                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                >
                                    📅 Compatibility Check
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}