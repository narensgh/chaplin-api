<?php
namespace Api\Controller;

use Api\Service\MessageService;

use Doctrine\ORM\EntityManager;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Api\Service\ReleaseService;

class MessageController extends AbstractRestfulController
{	
	private $_em;
	function __construct() 
	{
	
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
	 * Create a new resource
	 *
	 * @param  mixed $data
	 * @return mixed
	 */
	public function create($data)
	{
		$messageService = new MessageService($this->getEntityManager());
		$messageId = $messageService->saveMessage($data);
		$this->response->setStatusCode(200);
		return new JsonModel( array(
				'Message' => 'Message Saved',
				'messageId' => $messageId
		));
	}

}

?>