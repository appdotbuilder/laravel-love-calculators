<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class CompatibilityCalculatorController extends Controller
{
    /**
     * Display the compatibility calculator page.
     */
    public function index()
    {
        return Inertia::render('compatibility-calculator');
    }

    /**
     * Calculate compatibility based on birth dates.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_birth_date' => 'required|date|before:today',
            'partner_birth_date' => 'required|date|before:today',
        ]);

        $userDate = Carbon::parse($request->user_birth_date);
        $partnerDate = Carbon::parse($request->partner_birth_date);
        
        // Calculate compatibility score based on birth date difference
        $daysDifference = abs($userDate->diffInDays($partnerDate));
        $score = $this->calculateCompatibilityScore($daysDifference);
        $suggestion = $this->getCompatibilitySuggestion($score);

        return Inertia::render('compatibility-calculator', [
            'result' => [
                'score' => $score,
                'suggestion' => $suggestion,
                'user_birth_date' => $request->user_birth_date,
                'partner_birth_date' => $request->partner_birth_date,
            ]
        ]);
    }

    /**
     * Calculate compatibility score based on days difference.
     */
    protected function calculateCompatibilityScore($daysDifference)
    {
        // Create a formula that gives varying scores
        $base = 100 - ($daysDifference % 50);
        $adjustment = ($daysDifference % 30) * 2;
        
        $score = max(50, min(100, $base + $adjustment));
        return round($score);
    }

    /**
     * Get compatibility suggestion based on score.
     */
    protected function getCompatibilitySuggestion($score)
    {
        if ($score >= 90) {
            return "🌟 Exceptional compatibility! Your souls are perfectly aligned in the universe.";
        } elseif ($score >= 80) {
            return "✨ Wonderful harmony! You complement each other beautifully.";
        } elseif ($score >= 70) {
            return "💫 Great potential! Your differences create a balanced relationship.";
        } elseif ($score >= 60) {
            return "🌸 Sweet connection! Communication will strengthen your bond.";
        } else {
            return "🌷 Growing together! Every relationship blooms with patience and love.";
        }
    }
}