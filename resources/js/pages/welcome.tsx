import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { Heart, Calendar, Quote, Sparkles, Star } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Love Calculator - Find Your Perfect Match">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
                {/* Header */}
                <header className="p-6">
                    <nav className="flex items-center justify-between max-w-7xl mx-auto">
                        <div className="flex items-center gap-2">
                            <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                LoveCalc
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Button
                                    onClick={() => router.visit(route('dashboard'))}
                                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                                >
                                    Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => router.visit(route('login'))}
                                        variant="ghost"
                                        className="text-pink-600 hover:text-pink-700 hover:bg-pink-100"
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        onClick={() => router.visit(route('register'))}
                                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <div className="container mx-auto px-6 py-12">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="animate-pulse">
                                    <Heart className="w-24 h-24 text-pink-500" fill="currentColor" />
                                </div>
                                <Sparkles className="w-8 h-8 text-pink-300 absolute -top-2 -right-2 animate-bounce" />
                                <Star className="w-6 h-6 text-yellow-400 absolute -bottom-1 -left-1 animate-spin" fill="currentColor" />
                            </div>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-4">
                            💕 Love Calculator
                        </h1>
                        <p className="text-xl text-gray-600 mb-2">
                            Discover the magic of love with our enchanting calculators
                        </p>
                        <p className="text-lg text-gray-500 mb-8">
                            Calculate love percentages, check compatibility, and find romantic inspiration ✨
                        </p>
                        
                        <div className="flex justify-center gap-4 mb-12">
                            <Button
                                onClick={() => router.visit(route('love-calculator.index'))}
                                size="lg"
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                            >
                                Start Calculating Love 💖
                            </Button>
                            <Button
                                onClick={() => router.visit(route('love-quotes.index'))}
                                variant="outline"
                                size="lg"
                                className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg"
                            >
                                Get Inspired 💌
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {/* Love Calculator */}
                        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                            <CardHeader className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full">
                                        <Heart className="w-12 h-12 text-pink-500 group-hover:animate-pulse" fill="currentColor" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl text-pink-700">Love Calculator</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Find out your love compatibility percentage
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Enter both names
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Get love percentage
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Romantic messages
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Heart animations ❤️
                                    </li>
                                </ul>
                                <Button
                                    onClick={() => router.visit(route('love-calculator.index'))}
                                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                                >
                                    Try Now 💕
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Compatibility Calculator */}
                        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                            <CardHeader className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full">
                                        <Calendar className="w-12 h-12 text-rose-500 group-hover:animate-pulse" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl text-rose-700">Birth Date Compatibility</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Discover cosmic connections through birth dates
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        Enter birth dates
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        Compatibility score
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        Personal suggestions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        Star ratings ⭐
                                    </li>
                                </ul>
                                <Button
                                    onClick={() => router.visit(route('compatibility-calculator.index'))}
                                    className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600"
                                >
                                    Check Compatibility ✨
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Love Quotes */}
                        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                            <CardHeader className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-full">
                                        <Quote className="w-12 h-12 text-red-500 group-hover:animate-pulse" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl text-red-700">Love Quotes</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Beautiful words to inspire your heart
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                        Random love quotes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                        Copy & share easily
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                        Romantic inspiration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                        Perfect for messages 💌
                                    </li>
                                </ul>
                                <Button
                                    onClick={() => router.visit(route('love-quotes.index'))}
                                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                                >
                                    Get Quotes 💌
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-8">
                            Why Choose Our Love Calculator? 💝
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
                                <div className="text-gray-600">Free Forever</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-rose-600 mb-2">✨</div>
                                <div className="text-gray-600">Magical Results</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-red-600 mb-2">💕</div>
                                <div className="text-gray-600">Love Focused</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-pink-600 mb-2">∞</div>
                                <div className="text-gray-600">Unlimited Use</div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white">
                            <CardContent className="pt-8 pb-8">
                                <h2 className="text-3xl font-bold mb-4">
                                    Ready to Discover Love? 💖
                                </h2>
                                <p className="text-lg mb-6 opacity-90">
                                    Join thousands of couples who found magic in their relationships with our love calculators!
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        onClick={() => router.visit(route('love-calculator.index'))}
                                        size="lg"
                                        className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold"
                                    >
                                        Calculate Love Now 💕
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 py-8 text-center text-gray-500 border-t border-pink-200">
                    <p className="mb-2">
                        Built with ❤️ for love and romance
                    </p>
                    <p className="text-sm">
                        Spread love, share happiness, and discover the magic in relationships ✨
                    </p>
                </footer>
            </div>
        </>
    );
}