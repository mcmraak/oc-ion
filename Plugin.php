<?php namespace Mcmraak\Ion;

use Backend;
use System\Classes\PluginBase;

/**
 * ion Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'ion.js',
            'description' => 'Ajax-wrapper ion',
            'author'      => 'Alexandr Ablizin',
            'icon'        => 'icon-circle-o'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'Mcmraak\Ion\Components\Ion' => 'ion',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'mcmraak.ion.some_permission' => [
                'tab' => 'ion',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate

        return [
            'ion' => [
                'label'       => 'ion',
                'url'         => Backend::url('mcmraak/ion/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['mcmraak.ion.*'],
                'order'       => 500,
            ],
        ];
    }
}
