<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    //method get
    Route::get('/news', [NewsController::class, 'index']);

    //method post
    Route::post('/news', [NewsController::class, 'store']);

    //method put
    Route::put('/news/{id}', [NewsController::class, 'update']);

    //method delete
    Route::delete('/news/{id}', [NewsController::class, 'destroy']);

    //method get by id
    Route::get('/news/{id}', [NewsController::class, 'show']);

    //method get resource by title
    Route::get('/news/search/{title}', [NewsController::class, 'search']);

    //method get sport resource
    Route::get('/news/category/sport', [NewsController::class, 'sport']);

    //method get finance resource
    Route::get('/news/category/finance', [NewsController::class, 'finance']);

    //method get automotive resource
    Route::get('/news/category/automotive', [NewsController::class, 'automotive']);
});

//route untuk regitster dan login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);