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
	
	public function getMessage($userId, $frndId)
	{
		try{
		$qb = $this->_em->createQueryBuilder();
		$qb->select('m.messageId, m.message, u1.firstName as fromName, u2.firstName as toName')
		->from('Api\Model\Entity\Messages','m')
		->innerJoin('m.fromId', 'u1')
		->innerJoin('m.toId', 'u2')
		->where('u1.userId = :userId');
		if($frndId){
			$qb->andWhere('u2.userId = :frndId');;
		}
		$qb->setParameter('userId', $userId);
		if($frndId){
			$qb->setParameter('frndId', $frndId);
		} 
		return $qb->getQuery()->getArrayResult();
		}catch(Exception $ex){
			print_r($ex);
		}
	}

}

?>