import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { Calendar, Star, Sparkles } from 'lucide-react';

interface Props {
    result?: {
        score: number;
        suggestion: string;
        user_birth_date: string;
        partner_birth_date: string;
    };
    [key: string]: unknown;
}

export default function CompatibilityCalculator({ result }: Props) {
    const [userBirthDate, setUserBirthDate] = useState('');
    const [partnerBirthDate, setPartnerBirthDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        router.post(route('compatibility-calculator.store'), {
            user_birth_date: userBirthDate,
            partner_birth_date: partnerBirthDate,
        }, {
            preserveState: false,
            onFinish: () => setIsSubmitting(false),
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <Calendar className="w-16 h-16 text-rose-500" />
                                    <Star className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-spin" fill="currentColor" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                Compatibility Calculator
                            </h1>
                            <p className="text-gray-600">
                                Discover your cosmic connection through birth dates! 🌟
                            </p>
                        </div>

                        {/* Calculator Form */}
                        <Card className="mb-8 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl text-rose-700">Birth Date Compatibility</CardTitle>
                                <CardDescription>
                                    Enter both birth dates to reveal your compatibility score
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="user_birth_date" className="text-rose-700 font-medium">
                                            Your Birth Date 🎂
                                        </Label>
                                        <Input
                                            id="user_birth_date"
                                            type="date"
                                            value={userBirthDate}
                                            onChange={(e) => setUserBirthDate(e.target.value)}
                                            max={new Date().toISOString().split('T')[0]}
                                            className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="partner_birth_date" className="text-rose-700 font-medium">
                                            Partner's Birth Date 🎈
                                        </Label>
                                        <Input
                                            id="partner_birth_date"
                                            type="date"
                                            value={partnerBirthDate}
                                            onChange={(e) => setPartnerBirthDate(e.target.value)}
                                            max={new Date().toISOString().split('T')[0]}
                                            className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white py-3 text-lg font-semibold shadow-lg"
                                    >
                                        {isSubmitting ? 'Calculating...' : 'Check Compatibility ✨'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Results */}
                        {result && (
                            <Card className="shadow-xl border-0 bg-gradient-to-br from-rose-100 to-purple-100">
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <div className="mb-6">
                                            <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
                                                <span className="text-lg font-semibold text-rose-700">
                                                    {formatDate(result.user_birth_date)}
                                                </span>
                                                <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
                                                <span className="text-lg font-semibold text-rose-700">
                                                    {formatDate(result.partner_birth_date)}
                                                </span>
                                            </div>
                                            
                                            <div className="relative mb-6">
                                                <div className="text-8xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                                                    {result.score}%
                                                </div>
                                                <div className="text-lg text-gray-600 mt-2">
                                                    Compatibility Score
                                                </div>
                                                
                                                {/* Animated stars */}
                                                <div className="flex justify-center mt-4 gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-6 h-6 ${
                                                                i < Math.floor(result.score / 20)
                                                                    ? 'text-yellow-400 animate-pulse'
                                                                    : 'text-gray-300'
                                                            }`}
                                                            fill="currentColor"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/60 rounded-lg p-6 backdrop-blur-sm">
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {result.suggestion}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex justify-center gap-4">
                                            <Button
                                                onClick={() => window.location.reload()}
                                                variant="outline"
                                                className="border-rose-300 text-rose-700 hover:bg-rose-50"
                                            >
                                                Try Again 🔄
                                            </Button>
                                            <Button
                                                onClick={() => router.visit(route('love-calculator.index'))}
                                                className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600"
                                            >
                                                Love Calculator 💕
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
                                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                                >
                                    🏠 Home
                                </Button>
                                <Button
                                    onClick={() => router.visit(route('love-calculator.index'))}
                                    variant="ghost"
                                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                                >
                                    💕 Love Calculator
                                </Button>
                                <Button
                                    onClick={() => router.visit(route('love-quotes.index'))}
                                    variant="ghost"
                                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
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