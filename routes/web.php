<?php

use App\Http\Controllers\LoveCalculatorController;
use App\Http\Controllers\CompatibilityCalculatorController;
use App\Http\Controllers\LoveQuotesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Love Calculator Routes
Route::controller(LoveCalculatorController::class)->group(function () {
    Route::get('/kalkulator-cinta', 'index')->name('love-calculator.index');
    Route::post('/kalkulator-cinta', 'store')->name('love-calculator.store');
});

// Compatibility Calculator Routes
Route::controller(CompatibilityCalculatorController::class)->group(function () {
    Route::get('/kalkulator-jodoh', 'index')->name('compatibility-calculator.index');
    Route::post('/kalkulator-jodoh', 'store')->name('compatibility-calculator.store');
});

// Love Quotes Routes
Route::controller(LoveQuotesController::class)->group(function () {
    Route::get('/kata-cinta', 'index')->name('love-quotes.index');
    Route::post('/kata-cinta', 'store')->name('love-quotes.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
