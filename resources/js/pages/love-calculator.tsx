import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { Heart, Sparkles } from 'lucide-react';

interface Props {
    result?: {
        percentage: number;
        message: string;
        user_name: string;
        partner_name: string;
    };
    [key: string]: unknown;
}

export default function LoveCalculator({ result }: Props) {
    const [userName, setUserName] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        router.post(route('love-calculator.store'), {
            user_name: userName,
            partner_name: partnerName,
        }, {
            preserveState: false,
            onFinish: () => setIsSubmitting(false),
        });
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <Heart className="w-16 h-16 text-pink-500 animate-pulse" fill="currentColor" />
                                    <Sparkles className="w-6 h-6 text-pink-300 absolute -top-1 -right-1 animate-bounce" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                                Love Calculator
                            </h1>
                            <p className="text-gray-600">
                                Discover the magic between you and your special someone! ✨
                            </p>
                        </div>

                        {/* Calculator Form */}
                        <Card className="mb-8 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl text-pink-700">Calculate Your Love</CardTitle>
                                <CardDescription>
                                    Enter both names to reveal your love percentage
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="user_name" className="text-pink-700 font-medium">
                                            Your Name 💕
                                        </Label>
                                        <Input
                                            id="user_name"
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            placeholder="Enter your name..."
                                            className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="partner_name" className="text-pink-700 font-medium">
                                            Partner's Name 💖
                                        </Label>
                                        <Input
                                            id="partner_name"
                                            type="text"
                                            value={partnerName}
                                            onChange={(e) => setPartnerName(e.target.value)}
                                            placeholder="Enter their name..."
                                            className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 text-lg font-semibold shadow-lg"
                                    >
                                        {isSubmitting ? 'Calculating...' : 'Calculate Love 💝'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Results */}
                        {result && (
                            <Card className="shadow-xl border-0 bg-gradient-to-br from-pink-100 to-rose-100">
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <div className="mb-6">
                                            <div className="flex justify-center items-center gap-2 mb-4">
                                                <span className="text-2xl font-bold text-pink-700">
                                                    {result.user_name}
                                                </span>
                                                <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
                                                <span className="text-2xl font-bold text-pink-700">
                                                    {result.partner_name}
                                                </span>
                                            </div>
                                            
                                            <div className="relative mb-6">
                                                <div className="text-8xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-pulse">
                                                    {result.percentage}%
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-pink-400 opacity-20"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/60 rounded-lg p-6 backdrop-blur-sm">
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {result.message}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex justify-center gap-4">
                                            <Button
                                                onClick={() => window.location.reload()}
                                                variant="outline"
                                                className="border-pink-300 text-pink-700 hover:bg-pink-50"
                                            >
                                                Try Again 🔄
                                            </Button>
                                            <Button
                                                onClick={() => router.visit(route('compatibility-calculator.index'))}
                                                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                                            >
                                                Check Compatibility 🌟
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

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
                                    onClick={() => router.visit(route('compatibility-calculator.index'))}
                                    variant="ghost"
                                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                >
                                    📅 Birth Date Compatibility
                                </Button>
                                <Button
                                    onClick={() => router.visit(route('love-quotes.index'))}
                                    variant="ghost"
                                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                >
                                    💌 Love Quotes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}