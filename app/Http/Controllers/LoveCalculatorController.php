<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoveCalculatorController extends Controller
{
    /**
     * Display the love calculator page.
     */
    public function index()
    {
        return Inertia::render('love-calculator');
    }

    /**
     * Calculate love percentage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_name' => 'required|string|max:255',
            'partner_name' => 'required|string|max:255',
        ]);

        $userName = strtolower(trim($request->user_name));
        $partnerName = strtolower(trim($request->partner_name));
        
        // Create a consistent seed from the names
        $seed = crc32($userName . $partnerName);
        mt_srand($seed);
        
        // Generate consistent percentage between 50-100 for positive experience
        $percentage = mt_rand(50, 100);
        
        $message = $this->getLoveMessage($percentage);

        return Inertia::render('love-calculator', [
            'result' => [
                'percentage' => $percentage,
                'message' => $message,
                'user_name' => $request->user_name,
                'partner_name' => $request->partner_name,
            ]
        ]);
    }

    /**
     * Get romantic message based on percentage.
     */
    protected function getLoveMessage($percentage)
    {
        if ($percentage >= 90) {
            return "💕 Perfect Match! You two are soulmates destined to be together forever!";
        } elseif ($percentage >= 80) {
            return "❤️ Amazing Connection! Your love is strong and beautiful!";
        } elseif ($percentage >= 70) {
            return "💖 Great Compatibility! You have a wonderful relationship ahead!";
        } elseif ($percentage >= 60) {
            return "💝 Good Match! With love and care, you can build something beautiful!";
        } else {
            return "💞 Sweet Beginning! Every great love story starts somewhere special!";
        }
    }
}