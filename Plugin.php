<?php namespace AleksandrAblizin\Ion;

use Backend;
use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function pluginDetails()
    {
        return [
            'name'        => 'ion.js',
            'description' => 'Ajax-wrapper ion',
            'author'      => 'Alexandr Ablizin',
            'icon'        => 'icon-circle-o'
        ];
    }
    public function registerComponents()
    {
        return [
            'AleksandrAblizin\Ion\Components\Ion' => 'ion',
        ];
    }
}
