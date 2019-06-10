<?php

namespace App\Http\Middleware;

use Closure, Session, Auth;

class SessionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        app()->setLocale(session('locale', config('app.locale')));

        if(!Session::has('statut'))
            Session::put('statut', Auth::check() ?  Auth::user()->role->slug : 'visitor');

        return $next($request);
    }
}
