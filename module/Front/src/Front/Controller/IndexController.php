<?php

namespace Front\Controller;

use Zend\View\Model\JsonModel;

use Zend\Crypt\PublicKey\Rsa\PublicKey;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

use Front\Form\LoginForm;
use Front\Service\LoginService;

class IndexController extends AbstractActionController
{
	private $_em;
	
	public function indexAction()
    {
        return new ViewModel();
    }
    public function wallAction()
    {
    	return new ViewModel();
    }
    public function loginAction()
    {
    	$loginForm = new LoginForm();
		$request = $this->getRequest();

		if($request->isPost()){
			$post = $request->getPost();
			$serviceLogin = new LoginService();

			if( $post['submit'] == "Login"){
				$result = $serviceLogin->login($post, $loginForm);
				$this->redirectTo($result);
			}
		}
		return new ViewModel(
			array(
				'loginForm'=>$loginForm,
			)
		);
    }
    public function redirectTo($route){
    	return $this->redirect()->toRoute('base',$route);
    }
    public function logoutAction(){
    	unset($this->_session->username);
    	unset($this->_session->userId);
    	$this->_session->afterLogout = true;
    	$this->redirectTo(array('controller'=>'login','action'=>'login'));
    }
   	
    public function sessiondataAction()
    {
    	return new JsonModel(array("userdata"=>array("name"=>$_SESSION['front']['firstName'], "userId"=>$_SESSION['front']['userId'])));
    }
}
