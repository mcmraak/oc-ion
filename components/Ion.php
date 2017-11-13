<?php namespace AleksandrAblizin\Ion\Components;

use Cms\Classes\ComponentBase;

class Ion extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'ion.js',
            'description' => 'Helper for jQury ajax'
        ];
    }
    
    function onRun()
    {
        $this->addCss('assets/css/ion.css');
        $this->addJs('assets/js/octo-ion.js');
    }
}
