<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Design;


class DesignController extends Controller

{

    public function index()
    {
        return view('spa');
    }



    public function store(Request $request)
    {
        $article = $request->isMethod('put') ? Design::findOrFail($request->article_id) : new Design;

        $article->id = $request->input('article_id');
        $article->title = $request->input('title');
        $article->body = $request->input('body');

        if ($article->save()) {
            return;
        }
    }


    public function show(Request $request)
    {

        $Category = $request->input('Category');
        $Sub_Category = $request->input('Sub_Category');
        $Type = $request->input('Type');
        $Sort = $request->input('Sort');
        $Tag = $request->input('Tag');
        $perPage = $request->input('perPage');
        Design::where('category', $Category)->firstOrFail();
        if (!empty($Sub_Category)) {
            $designs = Design::where('dp', '1')->where('category', $Category)->where('sub_category', $Sub_Category)->orderBy('hit', 'desc')->paginate($perPage);
        } else {

            $designs = Design::where('dp', '1')->where('category', $Category)->orderBy('hit', 'desc')->paginate($perPage);
        }

        return $designs;
        // if ($designs !="[]") {
        // }else{
        //     return abort(404);
        // }
    }
    public function display(Request $request)
    {
        $image = $request->input('image');

        $design = Design::query()
            ->where('image', $image)
            ->firstOrFail();
        $design->similar = 'center';
        $designs = Design::query()
            ->where('category', $design->category)
            ->where('hit', '<=', $design->hit)
            ->where('id', '!=', $design->id)
            ->orderByDesc('id')
            ->limit(2)
            ->union(
                Design::query()
                    ->where('category', $design->category)
                    ->where('id', '>=', $design->id)
                    ->orderBy('id')
                    ->limit(3)
            )
            ->orderBy('id')
            ->get();

        $previous = Design::where('category', $design->category)
            ->where('hit', '=', $design->hit)
            ->where('id', '<', $design->id)
            ->orderBy('id', 'asc')

            ->union(
                Design::where('category', $design->category)
                    ->where('hit', '<', $design->hit)
                    ->orderBy('hit', 'desc')
            )->limit(2)->get();



        $next     = Design::where('category', $design->category)
            ->where('hit', '>=', $design->hit)
            ->where('id', '!=', $design->id)
            ->orderBy('hit')->orderBy('id')->limit(2)->get();

        $merger = array_merge($previous->toArray(), $next->toArray());
        return $designs;
    }


    public function destroy($id)
    {
        // Get article
        $article = Design::findOrFail($id);

        if ($article->delete()) {
            return;
        }
    }
}
