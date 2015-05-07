<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Front\Controller;

/**
 * Description of PmController
 *
 * @author narendra.singh
 */
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;

class PmController extends AbstractActionController {

    function __construct() {
        
    }

    public function indexAction() {
        $this->getViewHelper('HeadScript')->appendFile('/js/dev/pm.js');
//        $vhm = $this->getServiceLocator()->get('viewhelpermanager');
//        $headScript = $vhm->get('headscript');
//        $headScript->appendFile('/js/dev/pm.js');
//        $this->loadJs($this);
        return new ViewModel();
    }

    protected function getViewHelper($helperName) {
        return $this->getServiceLocator()->get('viewhelpermanager')->get($helperName);
    }

    public function todosAction() {
        return new ViewModel();
    }
    public function todoAction() {
        return new ViewModel();
    }

    protected function loadJs($self) {
        
    }

}
