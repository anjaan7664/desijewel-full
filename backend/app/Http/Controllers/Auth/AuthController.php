<?php

namespace App\Http\Controllers\auth;

use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    use ApiResponser;

    public function register(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'string|email',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $attr['name'],
            'password' => bcrypt($attr['password']),
            'email' => $attr['email'],
            'username' => $attr['username']
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 201);
    }

    public function login(Request $request)
    {
        $attr = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string|min:6'
        ]);
        $remember = $request->has('remember') ? true : false;

        if (Auth::attempt($attr, $remember)) {

            $token = auth()->user()->createToken('auth_token')->plainTextToken;
            $response = [
                'token' => $token,
                'token_type' => 'Bearer'
            ];

            return response($response);
        }
        return $this->error('Credentials not match', 401);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Tokens Revoked'
        ];
    }
    public function refresh(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        return response()->json(['token' => $user->createToken($user->name)->plainTextToken]);
    }
}
