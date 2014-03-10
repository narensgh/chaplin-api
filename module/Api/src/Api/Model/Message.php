<?php
namespace Api\Model;

use Api\Model\Entity\Messages;
class Message 
{
	/**
	 *
	 * @var Doctrine\ORM\Entitymanager
	 */
	
	private $_em;
	function __construct($em)
	{
		$this->_em = $em;
	}
	
	public function saveMessage($MessageId = null, $data)
	{
		try{
			$message = $this->_em->getRepository('Api\Model\Entity\Messages')->findOneBy(array('messageId'=>$MessageId));
			if(empty($message)){
				$message = new Messages();
			}
			$message->setMessage($data['messageText']);
			$message->setToId($data['toId']);
			$message->setFromId($data['fromId']);
			$this->_em->persist($message);
			$this->_em->flush();
			return $message->getMessageId();
		}catch(Exception $ex){
			return $ex;
		}
	}

}

?>