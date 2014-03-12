<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Api\Service\AuthenticateService;

class AuthenticateController extends AbstractRestfulController
{
	private $_em;
	function __construct()
	{
		$this->setIdentifierName("authData");
	}
	
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
	 * Return single resource
	 *
	 * @param  mixed $id
	 * @return mixed
	 */
	public function get($authData)
	{
		$authData = json_decode($authData);
		$authenticateService = new AuthenticateService($this->getEntityManager());
		$auth = $authenticateService->getAuth($authData);
		return new JsonModel(array('response'=>$auth));
	}
	/**
	 * Return list of resources
	 *
	 * @return mixed
	 */
	public function getList()
	{
		$this->response->setStatusCode(405);	
		return new JsonModel( array(
				'content' => 'Method Not Allowed'
		));
	}
}

?>