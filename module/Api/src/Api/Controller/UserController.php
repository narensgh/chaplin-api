<?php
namespace Api\Controller;

use Doctrine\ORM\EntityManager;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Api\Service\UserService;

class UserController extends AbstractRestfulController
{
	
	private $_em;
	
	/**
	 *  @param null
	 *  @return resource EntityManager
	 */
	
	protected function getEntityManager(){
		if(!$this->_em){
			$sm = $this->getServiceLocator();
			$this->_em = $sm->get('Doctrine\ORM\EntityManager');
		}
		return $this->_em;
	}
	
	/**
	 * Return list of resources
	 *
	 * @return mixed
	 */
	public function getList()
	{
		$userService = new UserService($this->getEntityManager());
		$users = $userService->getUser();
		return new JsonModel(array("users"=>$users));
	}
	

}

?>