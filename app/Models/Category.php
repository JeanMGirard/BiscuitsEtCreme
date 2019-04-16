<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Encore\Admin\Grid;
use Encore\Admin\Facades\Admin;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        'name',
    ];
    public function products()
    {
        return $this->hasMany('App\Product');
    }
}
/*
class Categories extends Model
{
    //
}
*/
/*
$grid = Admin::grid( Category::class, function (Grid $grid) {

    // The first column displays the id field and sets the column as a sortable column
    $grid->id('ID')->sortable();

    // The second column shows the title field, because the title field name and the Grid object's title method conflict, so use Grid's column () method instead
    $grid->column('title');

    // The third column shows the director field, which is set by the display($callback) method to display the corresponding user name in the users table
    $grid->director()->display(function ($userId) {
        return User::find($userId)->name;
    });

    // The fourth column appears as the describe field
    $grid->describe();

    // The fifth column is displayed as the rate field
    $grid->rate();

    // The sixth column shows the released field, formatting the display output through the display($callback) method
    $grid->released('Release?')->display(function ($released) {
        return $released ? 'yes' : 'no';
    });

    // The following shows the columns for the three time fields
    $grid->release_at();
    $grid->created_at();
    $grid->updated_at();

    // The filter($callback) method is used to set up a simple search box for the table
    $grid->filter(function ($filter) {

        // Sets the range query for the created_at field
        $filter->between('created_at', 'Created Time')->datetime();
    });
});*/