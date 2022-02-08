<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Design;
use Image;
use Exception;
use \Illuminate\Database\Eloquent\ModelNotFoundException;


class DesignController extends Controller

{

    public function index()
    {
        return view('spa');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'image' => 'required|file|image|max:10000',
            'category' => 'required',
            'type' => 'required',
            'likes' => 'nullable',
            'path' => 'required',
            'alt' => 'required',
            'alt_hn' => 'required',
            'user' => 'required'

        ]);
        // Change date in database to auto date
        $image = $request->file('image');
        $img_name = time() . rand(1000, 100000);
        $input['file'] = $img_name . '.' . $image->getClientOriginalExtension();

        $imgFile = Image::make($image->getRealPath());
        $img_w = $imgFile->width();
        $img_h = $imgFile->height();
        $set_raw_width  = floor(($img_w / 14));
        $set_raw_height = floor(($img_h / 14));
        if ($set_raw_height > $set_raw_width) {
            $set_raw_width = $set_raw_height;
        }

        $watermark = Image::make(public_path('dj_logo.png'))->resize($set_raw_width, $set_raw_width);
        $path = public_path('designs/raw/' . $request->path);

        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }
        $imgFile->save($path . '/' . $input['file']);
        $imgFile->insert($watermark, 'bottom-left', $set_raw_width, $set_raw_width)
            ->save(public_path('designs/images/') . $request->path . '/' . $input['file']);

        // For Thumbnails
        $desired_height = floor($img_h * (500 / $img_w));
        Image::make(public_path('designs/images/') . $request->path . '/' . $input['file'])->resize(500, $desired_height)->save(public_path('designs/thumb/') . $request->path . '/' . $input['file']);

        $insert['image'] = $img_name;
        $insert['category'] = $request->category;
        $insert['comment'] = $request->user . ' Uploaded';
        $insert['path'] = $request->path;
        $insert['alt'] = $request->alt;
        $insert['alt_hn'] = $request->alt_hn;
        $insert['sub_category'] = $request->type;
        $insert['img_type'] = $request->image->getClientOriginalExtension();
        $insert['hit'] = $request->likes;
        $check = Design::insertGetId($insert);
        return response()->json(['Success' => 'You have successfully uploaded']);
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
        try {
            Design::where('category', $Category)->firstOrFail();
            if (!empty($Sub_Category)) {
                $designs = Design::where('dp', '1')->where('category', $Category)->where('sub_category', $Sub_Category)->orderBy('hit', 'desc')->paginate($perPage);
            } else {

                $designs = Design::where('dp', '1')->where('category', $Category)->orderBy('hit', 'desc')->paginate($perPage);
            }
            return $designs;
        } catch (Exception $e) {
            if ($e instanceof ModelNotFoundException) {

                return response()->json([
                    'message' => 'Record not found',
                ], 404);
            }
        }

        // if ($designs !="[]") {
        // }else{
        //     return abort(404);
        // }
    }
    public function makeThumb(Request $request)
    {
        $designs = Design::where('dp', '1')->orderBy('hit', 'desc')->get();
        $arrayForThumb = array();

        foreach ($designs as $row) {
            $image_path = $row['path'];
            $img     = $row['image'];
            $img_type = $row['img_type'];
            $path  =         public_path('designs/thumb/' . $image_path . $img . '.' . $img_type);
            $originalFile = public_path('designs/images/' . $image_path . $img . '.' . $img_type);

            if (!file_exists($path)) {
                if (file_exists($originalFile)) {

                    $imgFile = Image::make(public_path('designs/images/' . $image_path . $img . '.' . $img_type));
                    // $img_w = $imgFile->width();
                    // $img_h = $imgFile->height();
                    // $desired_height = floor($img_h * (500 / $img_w));
                    $arrayForThumb[] = array(
                        'image' => $originalFile,
                    );
                    // Image::make($imgFile)->resize(500, $desired_height)->save(public_path('/designs/thumb/'.$image_path.$img.'.'.$img_type));

                }
            }
        }
        return $arrayForThumb;
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
                $Category = 'mini-aad';
                break;
            case 'bala_jhela':
                    $Category = 'bala-jhela ';
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


            $thumb_path = $url . 'designs/thumb/' . $image_path . $row['image'] . "." . $row['img_type'];
            $image             = $url . 'designs/images/' . $image_path . $row['image'] . "." . $row['img_type'];
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
            'ad_number' => "+919680398417",
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
        try {
            $design = Design::query()
                ->where('image', $image)
                ->orWhere('title', $image)
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
        } catch (Exception $e) {
            if ($e instanceof ModelNotFoundException) {

                return response()->json([
                    'message' => 'Record not found',
                ], 404);
            }
        }
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
        $this->validate($request, [
            'title' => 'unique:designs',
        ]);
        $image = $request->input('image');
        $user = $request->input('user');
        $response = "";
        switch ($request->input('editWhat')) {
            case 'weight':
                $weight = $request->input('weight');
                $response =  Design::where('image', $image)
                    ->update(['weight' => $weight, 'comment' => $user . ' updated weight']);
                break;
            case 'move':
                $old_path = $request->input('old_path');
                $move = $request->input('category');
                $path = $request->input('path');
                $alt = $request->input('alt');
                $alt_hn = $request->input('alt_hn');
                $img_type = $request->input('img_type');
                rename(
                    public_path('designs/images/' . $old_path . $image . '.' . $img_type),
                    public_path('designs/images/' . $path . $image . '.' . $img_type)
                );
                rename(
                    public_path('designs/thumb/' . $old_path . $image . '.' . $img_type),
                    public_path('designs/thumb/' . $path . $image . '.' . $img_type)
                );
                $response =  Design::where('image', $image)
                    ->update(['category' => $move, 'alt' => $alt, 'alt_hn' => $alt_hn, 'comment' => ' ' . $user . ' moved ', 'path' => $path]);

                break;
            case 'delete':

                $response =  Design::where('image', $image)
                    ->update(['dp' => 0, 'comment' => ' ' . $user . ' delete']);
                break;
            case 'hit':
                $hit = $request->input('hit');
                $response =  Design::where('image', $image)
                    ->update(['hit' => $hit, 'comment' => ' ' . $user . ' hit ' . $hit]);

                break;
            case 'type':
                $type = $request->input('type');
                $response =  Design::where('image', $image)
                    ->update(['sub_category' => $type, 'comment' => ' ' . $user . ' type ' . $type]);

                break;
            case 'alt':
                $alt = $request->input('alt');
                $alt_hn = $request->input('alt_hn');
                $response =  Design::where('image', $image)
                    ->update(['alt' => $alt, 'alt_hn' => $alt_hn, 'comment' => ' ' . $user . ' alt']);

                break;
            case 'rename':
                $rename = $request->input('title');
                $response =  Design::where('image', $image)
                    ->update(['title' => $rename, 'comment' => ' ' . $user . ' rename ' . $rename]);

                break;
        }


        return $response;
    }
}
