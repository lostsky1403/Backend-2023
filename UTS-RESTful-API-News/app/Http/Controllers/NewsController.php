<?php

namespace App\Http\Controllers;

use App\Models\News; // Import the News model class
use Illuminate\Http\Request;

class NewsController extends Controller
{
    //tampilkan semua data
    public function index()
    {
        $news = News::all(); // menerima semua data

        $data = [
            'message' => 'Get All Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $news = News::create($request->all()); // membuat data baru

        $data = [
            'message' => 'Resource is added successfully',
            'data' => $news
        ];
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $news = News::find($id); // mengambil data berdasarkan id

        $data = [
            'message' => 'Get Detail Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function update(Request $request, $id)
    {
        $news = News::find($id); // mengambil data berdasarkan id
        $news->update($request->all()); // mengupdate data

        $data = [
            'message' => 'Resource is updated successfully',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function destroy(string $id)
    {
        $news = News::find($id); // mengambil data berdasarkan id
        $news->delete(); // menghapus data

        $data = [
            'message' => 'Resource is deleted successfully',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function search($title)
    {
        $news = News::where('title', 'like', '%' . $title . '%')->get(); // mengambil data berdasarkan title

        $data = [
            'message' => 'Get Searched Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function sport()
    {
        $news = News::where('category', 'sport')->get(); // mengambil data berdasarkan category sport

        $data = [
            'message' => 'Get Sport Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function finance()
    {
        $news = News::where('category', 'finance')->get(); // mengambil data berdasarkan category finance

        $data = [
            'message' => 'Get Finance Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
    public function automotive()
    {
        $news = News::where('category', 'automotive')->get(); // mengambil data berdasarkan category automotive

        $data = [
            'message' => 'Get Automotive Resource',
            'data' => $news
        ];
        return response()->json($data, 200);
    }
}