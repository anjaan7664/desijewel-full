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
        // validate query 

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
        // validate query 

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

    public function android(Request $request)
    {
        // validate query 
        $Category = $request->input('table');
        
        switch ($Category) {
            case 'jodha_haar':
              $Category = 'jodha-haar';
              break;
            case 'sohan_kanthi':
                $Category = 'sohan-kanthi';
              break;
            case 'desi_aad':
                $Category = 'desi-aad';
              break;
            case 'm_aad':
                $Category = 'm_aad';
              break;  
            case 'chick':
                $Category = 'chik-set';
              break;  
              case 'rakhdi_set':
                $Category = 'rakhdi-set';
              break;
                case 'ladies_ring':
                $Category = 'ladies-ring';
              break;
                case 'gents_ring':
                $Category = 'gents-ring';
              break;   
              case 'ram_navmi':
                $Category = 'ram-navmi';
              break;  
          }

        $Sub_Category = '';
        $Page = 1;
        $url = "https://desijewel.in/";
        if (!empty($request->input('subCategory'))) {

            $Sub_Category = $request->input('subCategory');
        }
        if (!empty($request->input('page'))) {

            $Page = $request->input('page');
        }
        $perPage = 9;
        $from         = ($Page - 1) * $perPage;
        Design::where('category', $Category)->firstOrFail();
        if (!empty($Sub_Category)) {
            $designs = Design::limit($perPage)->offset($from)->where('dp', '1')->where('category', $Category)->where('sub_category', $Sub_Category)->orderBy('hit', 'desc')->get();
        } else {
            $designs = Design::limit($perPage)->offset($from)->where('dp', '1')->where('category', $Category)->orderBy('hit', 'desc')->get();
        }
        $post_data_array = array();
        foreach ($designs as $row) {
            $img        = $row['image'];
            $id_image   = $row['id'];
            $weight     = $row['weight'];
            $image_path = $row['path'];
            $hit        = $row['hit'];
            $img_tag    = $row['tag'];
            $subCategorySending    = $row['sub_category'];


            $thumb_path = $url . 'designs/thumb/' . $image_path. $row['image'].".".$row['img_type'];
            $image             = $url . 'designs/images/' . $image_path . $row['image'].".".$row['img_type'];
            $post_data_array[] = array(
                'image' => $image,
                'weight' => $weight,
                'thumb' => $thumb_path,
                'image_title' => $img,
                'tag' => $img_tag,
                'hit' => $hit,
                'subCategory' => $subCategorySending
            );
        }


        $advertiser_array = array(
            'ad_url' => 'https://desijewel.in/shoppers/silver.jpg',
            'ad_desc' => "",
            'ad_number' => "+917597937664",
            'ad_name' => "Desi Jewellery",
            'ad_map' => "geo:25.9695727,72.9625279"
        );
        $post_data = json_encode(array(
            'images' => $post_data_array,
            'advertiser' => $advertiser_array
        ));
        return $post_data;
    }
    public function display(Request $request)
    {
        // validate query 

        $image = $request->input('image');

        $design = Design::query()
            ->where('image', $image)
            ->firstOrFail();
        $design->similar = 'center';
        // $designs = Design::query()
        //     ->where('category', $design->category)
        //     ->where('id', '<=', $design->id)
        //     ->orderByDesc('id')
        //     ->limit(2)
        //     ->union(
        //         Design::query()
        //             ->where('category', $design->category)
        //             ->where('id', '>=', $design->id)
        //             ->orderBy('id')
        //             ->limit(3)
        //     )
        //     ->orderBy('id')
        //     ->get();
        $designs = Design::query()
            ->where('id', '<', $design->id)
            ->orderByDesc('id')
            ->limit(2)
            ->union(
                Design::query()
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

        return $design;
    }


    public function destroy($id)
    {
        // Get article
        $article = Design::findOrFail($id);

        if ($article->delete()) {
            return;
        }
    }
    public function edit(Request $request)
    {
        $image = $request->input('image');
        $response = "";
        switch ($request->input('editWhat')) {
            case 'weight':
                $weight = $request->input('weight');
                $response =  Design::where('image', $image)
                    ->update(['weight' => $weight]);
                break;
            case 'move':
                $move = $request->input('category');
                $response =  Design::where('image', $image)
                    ->update(['user' => $move]);

                break;
            case 'delete':

                $response =  Design::where('image', $image)
                    ->update(['dp' => 0]);
                break;
            case 'hit':
                $hit = $request->input('hit');
                $response =  Design::where('image', $image)
                    ->update(['hit' => $hit]);

                break;
            case 'type':
                $type = $request->input('type');
                $response =  Design::where('image', $image)
                    ->update(['sub_category' => $type]);

                break;
            case 'alt':
                $alt = $request->input('alt');
                $alt_hn = $request->input('alt_hn');
                $response =  Design::where('image', $image)
                    ->update(['alt' => $alt, 'alt_hn' => $alt_hn]);

                break;
            case 'rename':
                $rename = $request->input('rename');
                $response =  Design::where('image', $image)
                    ->update(['rename' => $rename]);

                break;
        }


        return $response;
    }
}
