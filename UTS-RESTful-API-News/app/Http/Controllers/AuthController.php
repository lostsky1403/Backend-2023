<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //membuat fitur register
    public function register(Request $request)
    {
        //menangkap inputan
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];
        //menginput data ke table user
        $user = User::create($input);
        $data = [
            'message' => 'Register Success',
        ];
        //mengirimkan response json
        return response()->json($data, 200);
    }
    //membuat fitur login
    public function login(Request $request)
    {
        //menangkap inputan
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];
        //mengambil data user berdasarkan email
        $user = User::where('email', $input['email'])->first();

        //membandingkan input user dengan data user
        $isLoginSuccesfully = (
            $input['email'] == $user->email &&
            Hash::check($input['password'], $user->password)
        );
        if ($isLoginSuccesfully) {
            //membuat token
            $token = $user->createToken('auth_token');

            $data = [
                'message' => 'Login Success',
                'token' => $token->plainTextToken,
            ];
            //mengembalikan response json
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Login Failed',
            ];
            //mengembalikan response json
            return response()->json($data, 401);
        }
    }
}