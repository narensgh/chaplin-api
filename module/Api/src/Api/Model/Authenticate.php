<?php
namespace Api\Model;

class Authenticate 
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
	
	public function getAuth($authData)
	{
		try{
			$qb = $this->_em->createQueryBuilder();
			$qb->select('u')
			->from('Api\Model\Entity\User','u')
			->where('u.username = :username')
			->andWhere('u.password= :password')
			->setParameter('username', $authData->username)
			->setParameter('password', md5($authData->password));
			return $qb->getQuery()->getArrayResult();
		}catch(Exception $ex){
			return $ex;
		}
	}
}

?>