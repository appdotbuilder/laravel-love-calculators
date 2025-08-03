<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoveQuotesController extends Controller
{
    /**
     * Love quotes collection.
     */
    protected $quotes = [
        "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day. 💕",
        "The best thing to hold onto in life is each other. ❤️",
        "Love is composed of a single soul inhabiting two bodies. 💖",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. 💝",
        "Love is friendship that has caught fire. 🔥",
        "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. 💞",
        "I love you not only for what you are, but for what I am when I am with you. 🌹",
        "Love doesn't make the world go 'round. Love is what makes the ride worthwhile. 🎠",
        "The greatest happiness of life is the conviction that we are loved. 😊",
        "Love is when the other person's happiness is more important than your own. 💐",
        "I have found the one whom my soul loves. 👑",
        "Love is the bridge between two hearts. 🌉",
        "Every love story is beautiful, but ours is my favorite. 📖",
        "You are my today and all of my tomorrows. ⭐",
        "Love is not just looking at each other, it's looking in the same direction. 🌅",
        "The best love is the kind that awakens the soul and makes us reach for more. 🌟",
        "Love is the only force capable of transforming an enemy into a friend. ☮️",
        "Where there is love there is life. 🌱",
        "Love is the poetry of the senses. 📝",
        "True love is rare, and it's the only thing that gives life real meaning. 💎"
    ];

    /**
     * Display the love quotes page.
     */
    public function index()
    {
        $randomQuote = $this->quotes[array_rand($this->quotes)];
        
        return Inertia::render('love-quotes', [
            'quote' => $randomQuote
        ]);
    }

    /**
     * Get a new random quote.
     */
    public function store(Request $request)
    {
        $randomQuote = $this->quotes[array_rand($this->quotes)];
        
        return Inertia::render('love-quotes', [
            'quote' => $randomQuote
        ]);
    }
}